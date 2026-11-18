import Vue from "./vue.js";
import cssVariables from "./vue-css-variables.js";
import { textColor, multiply, alphaBlend, makeHsv } from "../libraries/common/cs/text-color.esm.js";

export default async function ({ template }) {
  const EditorDarkModePreview = Vue.extend({
    props: ["settings", "hoveredSettingId"],
    template,
    data() {
      return {
        tabs: [
          { id: "code", textLength: 4 },
          { id: "costumes", textLength: 8 },
          { id: "sounds", textLength: 6 },
        ],
        selectedTab: "code",
        fullScreenView: false,
        extensionView: false, //添加拓展界面的显示
        modalView: false, //弹窗预览（菜单栏第 5 个按钮 Advanced）的显示
        blockCategories: [
          { primary: "#4c97ff", tertiary: "#3373cc", textLength: [6] },
          { primary: "#9966ff", tertiary: "#774dcb", textLength: [5] },
          { primary: "#cf63cf", tertiary: "#bd42bd", textLength: [5] },
          { primary: "#ffd500", tertiary: "#cc9900", textLength: [6] },
          { primary: "#ffab19", tertiary: "#cf8b17", textLength: [7] },
          { primary: "#5cb1d6", tertiary: "#2e8eb8", textLength: [7] },
          { primary: "#59c059", tertiary: "#389438", textLength: [9] },
          { primary: "#ff8c1a", tertiary: "#db6e00", textLength: [9] },
          { primary: "#ff6680", tertiary: "#ff3355", textLength: [2, 6] },
        ],
        soundEffects: [
          { textLength: [6] },
          { textLength: [6] },
          { textLength: [6] },
          { textLength: [6] },
          { textLength: [4] },
          { textLength: [4, 2] },
          { textLength: [4, 3] },
          { textLength: [7] },
          { textLength: [7] },
        ],
        // 扩展分类
        extensionCategories: [
          { id: 'all', labelLength: 3 },
          { id: 'scratch', labelLength: 7 },
          { id: 'turbowarp', labelLength: 9 },
        ],
        selectedExtensionCategory: 'all',
        
        // 扩展项目数据（模拟真实扩展库）
        extensionItems: [
          { 
            id: 0, 
            titleLength: 4, 
            descLength: 9,
            category: 'scratch',
            selected: false 
          },
          { 
            id: 1, 
            titleLength: 5, 
            descLength: 12,
            category: 'scratch',
            selected: false 
          },
          { 
            id: 2, 
            titleLength: 8, 
            descLength: 10,
            category: 'scratch',
            selected: false 
          },
          { 
            id: 3, 
            titleLength: 8, 
            descLength: 11,
            category: 'scratch',
            selected: false 
          },
          { 
            id: 4, 
            titleLength: 8, 
            descLength: 9,
            category: 'scratch',
            selected: false 
          },
          { 
            id: 5, 
            titleLength: 6, 
            descLength: 14,
            category: 'turbowarp',
            selected: false 
          },
          { 
            id: 6, 
            titleLength: 7, 
            descLength: 10,
            category: 'turbowarp',
            selected: false 
          },
          { 
            id: 7, 
            titleLength: 5, 
            descLength: 12,
            category: 'scratch',
            selected: false 
          },
          { 
            id: 8, 
            titleLength: 10, 
            descLength: 8,
            category: 'turbowarp',
            selected: false 
          },
          { 
            id: 9, 
            titleLength: 6, 
            descLength: 11,
            category: 'scratch',
            selected: false 
          },
          { 
            id: 10, 
            titleLength: 8, 
            descLength: 9,
            category: 'turbowarp',
            selected: false 
          },
          { 
            id: 11, 
            titleLength: 7, 
            descLength: 13,
            category: 'scratch',
            selected: false 
          },
          { 
            id: 12, 
            titleLength: 9, 
            descLength: 10,
            category: 'turbowarp',
            selected: false 
          },
          { 
            id: 13, 
            titleLength: 6, 
            descLength: 12,
            category: 'turbowarp',
            selected: false 
          },
          { 
            id: 14, 
            titleLength: 8, 
            descLength: 8,
            category: 'scratch',
            selected: false 
          },
          { 
            id: 15, 
            titleLength: 5, 
            descLength: 15,
            category: 'turbowarp',
            selected: false 
          },
          { 
            id: 16, 
            titleLength: 7, 
            descLength: 11,
            category: 'scratch',
            selected: false 
          },
          { 
            id: 17, 
            titleLength: 9, 
            descLength: 10,
            category: 'turbowarp',
            selected: false 
          },
        ],
      };
    },
    computed: {
      colors() {
        return {
          primaryText: textColor(this.settings.accentColor),
          menuBarText: textColor(this.settings.menuBar),
          accentText: textColor(this.settings.accent),
          inputText: textColor(this.settings.input),
          categoryMenuText: textColor(this.settings.categoryMenu),
          selectorText: textColor(this.settings.selector),
          selector2Text: textColor(this.settings.selector2),
          pageText: textColor(this.settings.page, "rgba(87, 94, 117, 0.75)", "rgba(255, 255, 255, 0.75)"),
          menuBarBorder: textColor(this.settings.menuBar, "rgba(0, 0, 0, 0.15)", "rgba(255, 255, 255, 0.15)", 60),
          accentTransparentText: textColor(this.settings.accent, "rgba(87, 94, 117, 0.5)", "rgba(255, 255, 255, 0.3)"),
          accentArtboard: this.settings.affectPaper ? this.settings.accent : "#ffffff",
          // 暗色模式（与 addons/editor-dark-mode/paper.js 的 checkerboardColor 同源）或
          // 启用「更改造型编辑器背景」时，使用暗色棋盘格；否则用默认亮蓝棋盘格。
          accentCheckerboard: this.settings.darkMode || this.settings.affectPaper
            ? multiply(
                textColor(
                  // see addons/editor-dark-mode/paper.js
                  this.settings.accent,
                  alphaBlend(this.settings.accent, multiply(makeHsv(this.settings.page, 1, 0.67), { a: 0.15 })),
                  alphaBlend(this.settings.accent, multiply(makeHsv(this.settings.page, 0.5, 1), { a: 0.15 })),
                  112 // threshold: #707070
                ),
                { a: 0.55 }
              )
            : "#d9e3f28c",
          tabText: textColor(this.settings.tab, "rgba(87, 94, 117, 0.75)", "rgba(255, 255, 255, 0.75)"),
          categoryMenuSelection: textColor(
            this.settings.categoryMenu,
            "rgba(87, 124, 155, 0.13)",
            "rgba(255, 255, 255, 0.05)"
          ),
          primaryTransparent15: multiply(this.settings.accentColor, { a: 0.15 }),
          primaryTransparent35: multiply(this.settings.accentColor, { a: 0.35 }),
          inputTransparent: multiply(this.settings.input, { a: 0.25 }),
        };
      },
      // 新增：根据分类筛选扩展项目
      filteredExtensionItems() {
        if (this.selectedExtensionCategory === 'all') {
          return this.extensionItems;
        }
        return this.extensionItems.filter(
          item => item.category === this.selectedExtensionCategory
        );
      },
      // 弹窗预览：头部背景绑定 popupHeader 设置项（弹窗头部颜色）
      modalHeaderStyle() {
        const bg = this.settings.popupHeader;
        return { backgroundColor: bg, color: textColor(bg) };
      },
      // 弹窗预览：内容背景绑定 darkMode 设置项（深色模式）。
      // darkMode 为布尔：开启→深色表面，关闭→浅色表面；文字色随背景反算保证对比度。
      modalBodyStyle() {
        const bg = this.settings.darkMode ? '#1c1c1c' : '#ffffff';
        return { backgroundColor: bg, color: textColor(bg) };
      },
      // 造型编辑器画布：背景随「深色模式」设置翻转（与弹窗内容 modalBodyStyle 同源），
      // 只设 backgroundColor，不覆盖 paper.css 的 color（强调文字色）。
      canvasStyle() {
        const bg = this.settings.darkMode ? '#1c1c1c' : '#ffffff';
        return { backgroundColor: bg };
      },
    },
    methods: {
      // 委托式悬停：每次鼠标移到新元素都重新就近找 data-area，
      // 彻底消除「子元素移回父元素时父级 mouseenter 不重触发」导致的绑定卡死。
      // 用 _lastArea 去重，避免与每次 mouseover 都派发（仅区域变化时派发）。
      onAreaOver(e) {
        const target = e && e.target;
        const el = target && target.closest ? target.closest("[data-area]") : null;
        let area = el ? el.getAttribute("data-area") : null;
        if (area === "none") area = null;
        // 选中态标签应高亮 activeTab 而非 tab
        else if (area === "tab" && el.classList.contains("edm-tab-selected")) area = "activeTab";
        // 已选中的扩展分类不高亮（原版悬停选中分类发 null）
        else if (area === "accentColor" && el.classList.contains("edm-extension-category-selected")) area = null;
        if (area === this._lastArea) return;
        this._lastArea = area;
        this.$emit("areahover", area);
      },
      // 离开整个预览：清空并重置去重缓存
      onAreaLeave() {
        this._lastArea = null;
        this.$emit("areahover", null);
      },
      selectTab(id) {
        this.selectedTab = id;
        this.$emit("areahover", "activeTab");
      },
      toggleFullScreenView() {
        this.fullScreenView = !this.fullScreenView;
      },
      toggleModalView() {
        this.modalView = !this.modalView;
      },
      handleAddExtensionClick() {
        this.extensionView = !this.extensionView;
        console.log(this.extensionView);
      },
            selectTab(id) {
        this.selectedTab = id;
        this.$emit("areahover", "activeTab");
      },
      toggleFullScreenView() {
        this.fullScreenView = !this.fullScreenView;
      },
      toggleExtensionView() {
        this.extensionView = !this.extensionView;
        if (this.extensionView) {
          this.fullScreenView = false;
        }
        this.$emit('extension-toggle', this.extensionView);
      },
      // 新增：选择扩展分类
      selectExtensionCategory(id) {
        this.selectedExtensionCategory = id;
        this.$emit('extension-category-select', id);
      },
      cssVariables,
    },
  });
  Vue.component("preview-editor-dark-mode", EditorDarkModePreview);
}
