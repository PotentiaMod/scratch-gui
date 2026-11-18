// 插件预览共享组件：在插件设置页（settings.jsx）内嵌使用，
// 也在 playground/addon-preview.jsx 独立页中使用。
//
// custom-editor-theme 的预览是【原版 ScratchAddons Vue 组件原样运行】：
//   - vue.js            Vue v1.0.28（ScratchAddons 同款，libraries/thirdparty）
//   - editor-dark-mode-vue.js   组件 JS（webpages/settings/components/previews/editor-dark-mode.js）
//   - editor-dark-mode-template.js  组件 HTML 模板（同上 .html 的 <template>）
//   - preview.css 中的 .edm-* 样式 = 原版 <style> 原样搬入
// 这样预览与 ScratchAddons 设置页里看到的完全一致（悬停橙色光晕高亮等）。
//
// custom-block-shape 的预览用【原生 scratch-blocks 基础工作区】：
// 与"自制积木定义窗口"（src/containers/custom-procedures.jsx）同一套机制——
//   LazyScratchBlocks.load() 懒加载 scratch-blocks（webpackChunkName "sb"），
//   ScratchBlocks.inject() 注入工作区（左侧调色板 + 可缩放/平移/拖动/删除积木）。
// 工作区初始为空，用户从左侧调色板拖积木进来。
//
// 预览直接复用插件的共享逻辑（改插件的逻辑让它同时驱动真实编辑器与预览）：
//   custom-block-shape：applyChangesFromSettings()（apply-changes.js）应用几何，
//   进入预览时保持 BlockSvg 常量 = 当前设置（与插件一致，拖入的积木也按设置渲染），
//   卸载时还原；改设置时重应用 + rerenderWorkspaceBlocks()。
//   （custom-block-text 的预览已按用户要求移除；其插件逻辑仍在
//     addons/custom-block-text/text-style.js 共享模块中供 userscript 使用。）

import React from 'react';
import Vue from './vue.js';
import initEditorDarkModePreview from './editor-dark-mode-vue.js';
import template from './editor-dark-mode-template.js';
import LazyScratchBlocks from '../../lib/tw-lazy-scratch-blocks';
import {
    snapshotGeometry,
    restoreGeometry,
    applyChangesFromSettings
} from '../addons/custom-block-shape/apply-changes.js';
import {rerenderWorkspaceBlocks} from '../addons/custom-block-shape/update-all-blocks.js';
import buildPreviewToolboxXML from './preview-toolbox.js';
import './preview.css';

// 注：积木预览（开关行 + 底框）的亮/暗跟随 custom-editor-theme 的 darkMode 设置项。
// 组件在挂载时读取全局暗色信号（真实设置页由 settings.jsx 把 data-splash-theme 写到
// :root；playground 由 simple.ejs 写到 body），并镜像到自身根节点
// .apv-block-shape-root[data-splash-theme]，preview.css 据此切换。
// 这样预览严格跟随设置项，不再依赖 :root / body 的逗号选择器（两者不同步会导致亮/暗错乱）。

// ---- custom-editor-theme 预览（原版 Vue 组件宿主）----

class EditorThemePreview extends React.Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.vm = null;
        this.mountEl = null;
    }

    componentDidMount() {
        if (typeof Vue === 'undefined' || !Vue.extend) return;
        // 注册原版预览组件（幂等）
        if (!Vue.component('preview-editor-dark-mode')) {
            initEditorDarkModePreview({template});
        }
        const container = this.containerRef.current;
        if (!container) return;
        this.mountEl = document.createElement('div');
        container.appendChild(this.mountEl);
        const propsRef = this.props;
        this.vm = new Vue({
            el: this.mountEl,
            data: {
                settings: propsRef.settings || {},
                hoveredSettingId: propsRef.hoveredSettingId || null,
                propsOnAreaHover: propsRef.onAreaHover || null,
                propsOnExtensionToggle: propsRef.onExtensionToggle || null,
                propsOnExtensionItemSelect: propsRef.onExtensionItemSelect || null,
            },
            methods: {
                onAreaHover(id) {
                    if (this.propsOnAreaHover) this.propsOnAreaHover(id);
                },
                onExtensionToggle(visible) {
                    if (this.propsOnExtensionToggle) {
                        this.propsOnExtensionToggle(visible);
                    }
                    console.log('[Extension] Toggled:', visible);
                },
                onExtensionItemSelect(id) {
                    if (this.propsOnExtensionItemSelect) {
                        this.propsOnExtensionItemSelect(id);
                    }
                    console.log('[Extension] Selected item:', id);
                }
            },
            template:
                '<preview-editor-dark-mode :settings="settings" :hovered-setting-id="hoveredSettingId" ' + 
                '@extension-toggle="onExtensionToggle" ' +
                '@extension-item-select="onExtensionItemSelect" ' +
                '@areahover="onAreaHover"></preview-editor-dark-mode>'
        });
    }

    componentDidUpdate() {
        this.syncProps();
    }

    syncProps() {
        if (!this.vm) return;
        const p = this.props;
        if (this.vm.settings !== p.settings) this.vm.settings = p.settings || {};
        if (this.vm.hoveredSettingId !== (p.hoveredSettingId || null)) {
            this.vm.hoveredSettingId = p.hoveredSettingId || null;
        }
        this.vm.propsOnAreaHover = p.onAreaHover || null;
    }

    componentWillUnmount() {
        if (this.vm) {
            this.vm.$destroy();
            this.vm = null;
        }
        if (this.mountEl && this.mountEl.parentNode) {
            this.mountEl.parentNode.removeChild(this.mountEl);
        }
    }

    render() {
        return <div ref={this.containerRef} />;
    }
}

// ---- 通用：基础工作区（与自制积木定义窗口同一套机制）----
// 可交互：滚轮/按钮缩放、滚动条平移、拖动积木、拖入回收站/右键/Delete 键删除。
// 初始不放积木，用户从左侧调色板拖取。

const PREVIEW_WORKSPACE_OPTIONS = {
    readOnly: false,
    media: 'static/blocks-media/default/',
    zoom: {
        controls: true,
        wheel: true,
        pinch: true,
        startScale: 1,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    },
    scrollbars: true,
    comments: true,
    collapse: true,
    trashcan: true,
    sounds: false,
    colours: {
        fieldShadow: 'rgba(255, 255, 255, 0.3)',
        dragShadowOpacity: 0.6
    }
};

function injectPreviewWorkspace(ScratchBlocks, host, rtl) {
    // 显式传入预览工具箱（左侧调色板），并清掉默认工具箱避免冲突
    const oldDefaultToolbox = ScratchBlocks.Blocks.defaultToolbox;
    ScratchBlocks.Blocks.defaultToolbox = null;
    let workspace;
    try {
        workspace = ScratchBlocks.inject(host, {
            ...PREVIEW_WORKSPACE_OPTIONS,
            toolbox: buildPreviewToolboxXML(),
            rtl
        });
    } finally {
        ScratchBlocks.Blocks.defaultToolbox = oldDefaultToolbox;
    }
    return workspace;
}

function isRtl() {
    return Boolean(document.documentElement && document.documentElement.dir === 'rtl');
}

// ---- custom-block-shape 预览（复用插件共享的 apply-changes.js，真几何变化）----

class BlockShapePreview extends React.Component {
    constructor(props) {
        super(props);
        this.stageRef = React.createRef();
        this.workspace = null;
        this.sb = null;
        this.geometrySnapshot = null;
        this._disposed = false;
        this._themeObserver = null;
        // 开关：控制预览显示/隐藏，纯组件本地状态，不写入插件设置文件
        this.state = {
            showPreview: false,
            // 跟随 custom-editor-theme 的 darkMode：真实设置页由 settings.jsx 把
            // data-splash-theme 写到 :root；playground 由 simple.ejs 写到 body。
            // 组件把该信号镜像到自身根节点，使预览内亮/暗与设置项严格一致，
            // 不再依赖 :root / body 的逗号选择器（避免两者不同步导致的亮/暗错乱）。
            dark: this.readSplashTheme()
        };
    }

    // 读取全局暗色信号：优先 :root（真实设置页），回退 body（playground）。
    readSplashTheme() {
        if (typeof document === 'undefined') return false;
        const onRoot = document.documentElement.getAttribute('data-splash-theme');
        const onBody = document.body ? document.body.getAttribute('data-splash-theme') : null;
        return (onRoot || onBody) === 'dark';
    }

    componentDidMount() {
        // 开关默认关闭：组件挂载时不主动初始化工作区（避免无谓加载 scratch-blocks）
        if (this.state.showPreview) this.init();
        // 监听 :root / body 的 data-splash-theme 变化（切暗色 / 重置默认时），
        // 同步到组件根节点，保证预览亮/暗与 custom-editor-theme 设置项一致。
        const update = () => {
            const dark = this.readSplashTheme();
            if (dark !== this.state.dark) this.setState({dark});
        };
        this._themeObserver = new MutationObserver(update);
        this._themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-splash-theme']
        });
        if (document.body) {
            this._themeObserver.observe(document.body, {
                attributes: true,
                attributeFilter: ['data-splash-theme']
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // 开关从【关 → 开】：第一次点开时 componentDidMount 早已跑过，这里补跑 init()
        if (this.state.showPreview && !prevState.showPreview) {
            this.init();
        }
        // 开关从【开 → 关】：释放已注入的工作区并还原几何快照，释放资源
        if (!this.state.showPreview && prevState.showPreview) {
            this.disposeWorkspace();
        }
        if (!this.sb || !this.workspace) return;
        const p = this.props.settings || {};
        const pp = prevProps.settings || {};
        // 值级比较：即使 settings 对象引用未变化（如原地更新），参数变了也要重应用
        if (
            p !== pp ||
            p.paddingSize !== pp.paddingSize ||
            p.cornerSize !== pp.cornerSize ||
            p.notchSize !== pp.notchSize
        ) {
            this.applyShapeSettings();
        }
    }

    componentWillUnmount() {
        this._disposed = true;
        if (this._themeObserver) {
            this._themeObserver.disconnect();
            this._themeObserver = null;
        }
        this.disposeWorkspace();
    }

    // 释放工作区 + 还原进入预览前抓取的几何快照（设置页是独立页面，无编辑器受影响的场景；
    // 还原保证离开后 scratch-blocks 常量回到默认/插件值）。被卸载与“开关关闭”两处复用。
    disposeWorkspace() {
        if (this.sb && this.geometrySnapshot) {
            restoreGeometry(this.sb, this.geometrySnapshot);
        }
        this.geometrySnapshot = null;
        if (this.workspace) this.workspace.dispose();
        this.workspace = null;
        this.sb = null;
    }

    async init() {
        const host = this.stageRef.current;
        if (!host) return;
        await LazyScratchBlocks.load();
        // 防竞态：加载期间用户可能又关闭了开关（或组件已卸载），
        // 此时 stage 已不在 DOM / 不应再注入工作区
        if (this._disposed || !this.state.showPreview || !this.stageRef.current) return;
        const ScratchBlocks = LazyScratchBlocks.get();
        this.sb = ScratchBlocks;

        this.workspace = injectPreviewWorkspace(ScratchBlocks, host, isRtl());

        // 与真实插件一致：保持 BlockSvg 常量 = 当前设置，
        // 这样从调色板拖入的积木也按设置渲染（而非默认几何）。
        // 进入时先抓快照，离开时还原。
        this.geometrySnapshot = snapshotGeometry(this.sb);
        this.applyShapeSettings();

        requestAnimationFrame(() => {
            if (this._disposed || !this.workspace) return;
            this.workspace.resize();
        });
    }

    applyShapeSettings() {
        const {settings} = this.props;
        if (!this.sb || !this.workspace) return;

        // 复用插件的设置应用逻辑（apply-changes.js），然后事件禁用下重渲染所有积木。
        // try/catch 兜底：单个积木渲染异常也不让 React 卸载整页（防黑屏）。
        try {
            applyChangesFromSettings(this.sb, {
                paddingSize: settings.paddingSize,
                cornerSize: settings.cornerSize,
                notchSize: settings.notchSize
            });
            rerenderWorkspaceBlocks(this.workspace, this.sb);
        } catch (e) {
            console.error('[BlockShapePreview] apply/render failed:', e);
        }
    }

    render() {
        const {settings} = this.props;
        const {showPreview} = this.state;
        const paddingSize = settings.paddingSize !== undefined ? settings.paddingSize : 100;
        const cornerSize = settings.cornerSize !== undefined ? settings.cornerSize : 100;
        const notchSize = settings.notchSize !== undefined ? settings.notchSize : 100;
        return (
            <div
                className="apv-block-shape-root"
                data-splash-theme={this.state.dark ? 'dark' : 'light'}
            >
                <div className="apv-block-shape-toggle-row">
                    <span className="apv-block-shape-toggle-label">积木预览</span>
                    <button
                        type="button"
                        className={
                            'apv-toggle' + (showPreview ? ' apv-toggle-on' : '')
                        }
                        role="switch"
                        aria-checked={showPreview}
                        onClick={() => this.setState({showPreview: !showPreview})}
                    >
                        <span className="apv-toggle-knob" />
                    </button>
                </div>
                {showPreview && <div className="apv-block-shape-stage" ref={this.stageRef} />}
            </div>
        );
    }
}

// ---- 分发 ----

const PREVIEWS = {
    'custom-editor-theme': EditorThemePreview,
    'custom-block-shape': BlockShapePreview
};

const AddonPreview = ({addonId, settings, hoveredSettingId, previewProps}) => {
    const P = PREVIEWS[addonId];
    if (!P) return null;
    return (
        <div className="apv-inline">
            <P
                settings={settings || {}}
                hoveredSettingId={hoveredSettingId}
                {...previewProps}
            />
        </div>
    );
};

export default AddonPreview;
export {
    EditorThemePreview,
    BlockShapePreview
};
