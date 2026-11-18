// 原版预览模板（照搬自 ScratchAddons webpages/settings/components/previews/editor-dark-mode.html）
const template = `
<div
    role="presentation"
    class="edm-preview" data-area="page"
    :data-setting-hovered="hoveredSettingId"
    @mouseover="onAreaOver($event)"
    @mouseleave="onAreaLeave($event)"
    :style="cssVariables({
      '--page': settings.page,
      '--page-text': colors.pageText,
      '--primary': settings.accentColor,
      '--primary-transparent15': colors.primaryTransparent15,
      '--primary-transparent35': colors.primaryTransparent35,
      '--primary-text': colors.primaryText,
      '--highlightText': settings.accentColor,
      '--menuBar': settings.menuBar,
      '--menuBar-text': colors.menuBarText,
      '--customEditorTheme-menuBar-text': colors.menuBarText,
      '--menuBar-border': colors.menuBarBorder,
      '--customEditorTheme-menuBar-border': colors.menuBarBorder,
      '--accent': settings.accent,
      '--accent-text': colors.accentText,
      '--customEditorTheme-accent-text': colors.accentText,  /* paper.css 画布容器 color 绑定（与 --accent-text 同源） */
      '--accent-transparentText': colors.accentTransparentText,
      '--accent-artboard': colors.accentArtboard,
      '--accent-checkerboard': colors.accentCheckerboard,
      '--input': settings.input,
      '--input-transparent': colors.inputTransparent,
      '--input-text': colors.inputText,
      '--tab': settings.tab,
      '--tab-text': colors.tabText,
      '--activeTab': settings.activeTab,
      '--workspace': settings.workspace,
      '--categoryMenu': settings.categoryMenu,
      '--categoryMenu-text': colors.categoryMenuText,
      '--categoryMenu-selection': colors.categoryMenuSelection,
      '--palette': settings.palette,
      '--selector': settings.selector,
      '--selector-text': colors.selectorText,
      '--selector2': settings.selector2,
      '--selector2-text': colors.selector2Text,
      '--selectorSelection': settings.selectorSelection,
      '--fullscreen': settings.fullscreen,
      '--stageHeader': settings.stageHeader,
      '--popup': settings.popup,
      '--popupHeader': settings.popupHeader,
      '--border': hoveredSettingId === 'border' ? 'var(--orange)' : settings.border,
    })"
  >
    <div class="edm-menu-bar" data-area="menuBar">
      <div class="edm-menu-bar-menu edm-icon-placeholder edm-icon-placeholder-20px"><!-- Settings --></div>
      <div class="edm-menu-bar-menu edm-icon-placeholder edm-icon-placeholder-20px"><!-- File --></div>
      <div class="edm-menu-bar-menu edm-icon-placeholder edm-icon-placeholder-20px"><!-- Edit --></div>
      <div class="edm-menu-bar-menu edm-icon-placeholder edm-icon-placeholder-20px"><!-- Addons --></div>
      <div
        class="edm-menu-bar-menu edm-icon-placeholder edm-icon-placeholder-20px edm-menu-bar-menu-clickable"
        @click="toggleModalView()"
      ><!-- Advanced --></div>
      <div class="edm-menu-bar-separator"></div>
      <div
        class="edm-menu-bar-input"
        data-area="input"
      >
        <!-- Project title -->
        <div class="edm-text-placeholder" style="--length: 8"></div>
      </div>
      <div class="edm-menu-bar-button">
        <div class="edm-icon-placeholder edm-icon-placeholder-20px"></div>
        <!-- See Project Page -->
        <div class="edm-text-placeholder" style="--length: 3"></div>
        <div class="edm-text-placeholder" style="--length: 7"></div>
        <div class="edm-text-placeholder" style="--length: 4"></div>
      </div>
    </div>
    <div class="edm-main">
      <div class="edm-left">
        <div class="edm-tabs">
          <div
            v-for="tab of tabs"
            class="edm-tab"
            :class="{'edm-tab-selected': selectedTab === tab.id}"
            data-area="tab"
            @click="selectTab(tab.id)"
          >
            <div class="edm-icon-placeholder edm-icon-placeholder-20px"></div>
            <div class="edm-text-placeholder" :style="cssVariables({ '--length': tab.textLength })"></div>
          </div>
        </div>
        <div class="edm-tab-content edm-workspace" v-if="selectedTab === 'code'">
          <div
            class="edm-category-menu"
            data-area="categoryMenu"
          >
            <div
              v-for="category of blockCategories"
              class="edm-category"
              :class="{'edm-category-selected': $index === 0}"
            >
              <div
                class="edm-category-bubble"
                :style="{backgroundColor: category.primary, borderColor: category.tertiary}"
              ></div>
              <div class="edm-category-label">
                <div
                  v-for="wordLength of category.textLength"
                  class="edm-text-placeholder edm-text-placeholder-small"
                  :style="cssVariables({ '--length': wordLength })"
                ></div>
              </div>
            </div>
            <div class="edm-spacer"></div>
            <div
              class="edm-add-extension"
              data-area="accentColor"
              @click="handleAddExtensionClick"
            >
              <div class="edm-icon-placeholder edm-icon-placeholder-24px"><!-- Add Extension --></div>
            </div>
          </div>
          <div
            class="edm-palette"
            data-area="palette"
          ></div>
          <div
            class="edm-workspace-hover-target"
            data-area="workspace"
          ></div>
        </div>
        <div
          v-else
          class="edm-tab-content edm-asset-tab"
          data-area="accent"
        >
          <div
            class="edm-asset-list"
            :class="{'edm-sound-list': selectedTab === 'sounds'}"
            data-area="selector2"
          >
            <div
              class="edm-asset edm-asset-selected"
              data-area="selectorSelection"
            >
              <div class="edm-asset-image">
                <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
              </div>
              <div
                class="edm-asset-name"
                data-area="accentColor"
              >
                <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 7"></div>
              </div>
              <div
                class="edm-asset-delete"
                data-area="accentColor"
              >
                <div class="edm-icon-placeholder edm-icon-placeholder-20px"></div>
              </div>
            </div>
            <div class="edm-asset edm-asset">
              <div class="edm-asset-image">
                <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
              </div>
              <div class="edm-asset-name">
                <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 5"></div>
              </div>
            </div>
            <div class="edm-asset edm-asset">
              <div class="edm-asset-image">
                <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
              </div>
              <div class="edm-asset-name">
                <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 3"></div>
                <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 1"></div>
              </div>
            </div>
            <div
              class="edm-asset-new"
              data-area="accentColor"
            >
              <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
            </div>
          </div>
          <div class="edm-asset-editor" v-if="selectedTab === 'costumes'">
            <div class="edm-toolbar">
              <div>
                <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 7"><!-- Costume --></div>
                <div
                  class="edm-input"
                  data-area="input"
                >
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 8"></div>
                </div>
              </div>
              <div>
                <div class="edm-outlined-button edm-outlined-button-first edm-outlined-button-colored-icon">
                  <div class="edm-icon-placeholder edm-icon-placeholder-20px"><!-- Undo --></div>
                </div>
                <div class="edm-outlined-button edm-outlined-button-last edm-outlined-button-colored-icon">
                  <div class="edm-icon-placeholder edm-icon-placeholder-20px"><!-- Redo --></div>
                </div>
              </div>
              <div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 6"><!-- Group --></div>
                </div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 8">
                    <!-- Ungroup -->
                  </div>
                </div>
              </div>
              <div class="edm-toolbar-separator"></div>
              <div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 7">
                    <!-- Forward -->
                  </div>
                </div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 8">
                    <!-- Backward -->
                  </div>
                </div>
              </div>
              <div class="edm-toolbar-separator"></div>
              <div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 5"><!-- Front --></div>
                </div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 4"><!-- Back --></div>
                </div>
              </div>
            </div>
            <div class="edm-toolbar">
              <div>
                <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 4"><!-- Fill --></div>
                <div class="edm-outlined-button edm-outlined-button-first edm-paint-picker-color"></div>
                <div class="edm-outlined-button edm-outlined-button-last edm-paint-picker-arrow"></div>
              </div>
              <div>
                <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 7"><!-- Outline --></div>
                <div class="edm-outlined-button edm-outlined-button-first edm-paint-picker-color"></div>
                <div class="edm-outlined-button edm-outlined-button-last edm-paint-picker-arrow"></div>
                <div
                  class="edm-input edm-input-number"
                  data-area="input"
                >
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 2"></div>
                </div>
              </div>
              <div class="edm-toolbar-separator"></div>
              <div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 4"><!-- Copy --></div>
                </div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 5"><!-- Paste --></div>
                </div>
              </div>
              <div class="edm-toolbar-separator"></div>
              <div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 6"><!-- Delete --></div>
                </div>
              </div>
              <div class="edm-toolbar-separator"></div>
              <div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div>
                    <!-- Flip Horizontal -->
                    <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 4"></div>
                    <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 10"></div>
                  </div>
                </div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div>
                    <!-- Flip Vertical -->
                    <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 4"></div>
                    <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 8"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="edm-paint-bottom">
              <div class="edm-paint-tool-column">
                <div
                  class="edm-paint-tool edm-paint-tool-selected"
                  data-area="accentColor"
                >
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                </div>
                <div class="edm-paint-tool" v-for="item of [0, 1, 2, 3]">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                </div>
              </div>
              <div class="edm-paint-tool-column">
                <div class="edm-paint-tool" v-for="item of [0, 1, 2, 3, 4]">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                </div>
              </div>
              <div class="edm-paint-canvas-and-controls">
                <div
                  class="edm-paint-canvas"
                  data-area="darkMode"
                  :style="canvasStyle"
                ></div>
                <div class="edm-paint-controls">
                  <div
                    class="edm-button"
                    data-area="accentColor"
                  >
                    <!-- Convert to Bitmap -->
                    <div class="edm-icon-placeholder edm-icon-placeholder-20px"></div>
                    <div class="edm-text-placeholder" style="--length: 7"></div>
                    <div class="edm-text-placeholder" style="--length: 2"></div>
                    <div class="edm-text-placeholder" style="--length: 6"></div>
                  </div>
                  
                  <div class="edm-paint-zoom">
                    <div class="edm-outlined-button edm-outlined-button-change-theme">
                        <div class="edm-icon-placeholder edm-icon-placeholder-20px"></div>
                    </div>
                    <div class="edm-outlined-button edm-outlined-button-first">
                      <div class="edm-icon-placeholder edm-icon-placeholder-20px"></div>
                    </div>
                    <div class="edm-outlined-button edm-outlined-button-middle">
                      <div class="edm-icon-placeholder edm-icon-placeholder-20px"></div>
                    </div>
                    <div class="edm-outlined-button edm-outlined-button-last">
                      <div class="edm-icon-placeholder edm-icon-placeholder-20px"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="edm-asset-editor" v-if="selectedTab === 'sounds'">
            <div class="edm-toolbar">
              <div>
                <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 5"><!-- Sound --></div>
                <div
                  class="edm-input"
                  data-area="input"
                >
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 4">
                    <!-- sound name -->
                  </div>
                </div>
              </div>
              <div>
                <div class="edm-outlined-button edm-outlined-button-first edm-outlined-button-colored-icon">
                  <div class="edm-icon-placeholder edm-icon-placeholder-20px"><!-- Undo --></div>
                </div>
                <div class="edm-outlined-button edm-outlined-button-last edm-outlined-button-colored-icon">
                  <div class="edm-icon-placeholder edm-icon-placeholder-20px"><!-- Redo --></div>
                </div>
              </div>
              <div class="edm-toolbar-separator"></div>
              <div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 4"><!-- Copy --></div>
                </div>
              </div>
              <div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 5"><!-- Paste --></div>
                </div>
              </div>
              <div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div>
                    <!-- Copy to New -->
                    <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 4"></div>
                    <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 2"></div>
                    <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 3"></div>
                  </div>
                </div>
              </div>
              <div class="edm-toolbar-separator"></div>
              <div>
                <div class="edm-tool-button">
                  <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 6"><!-- Delete --></div>
                </div>
              </div>
            </div>
            <div class="edm-waveform"></div>
            <div class="edm-toolbar edm-sound-effects">
              <div>
                <div
                  class="edm-play-button"
                  data-area="accentColor"
                >
                  <div class="edm-icon-placeholder edm-icon-placeholder-20px"></div>
                </div>
              </div>
              <div class="edm-toolbar-separator"></div>
              <div>
                <div class="edm-tool-button" v-for="effect of soundEffects">
                  <div class="edm-icon-placeholder edm-icon-placeholder-20px"></div>
                  <div>
                    <div
                      class="edm-text-placeholder edm-text-placeholder-small"
                      v-for="wordLength of effect.textLength"
                      :style="cssVariables({ '--length': wordLength })"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="edm-backpack" data-area="accent">
          <div class="edm-text-placeholder" style="--length: 8"></div>
        </div>
      </div>
      <div class="edm-right">
        <div class="edm-stage-header">
          <div class="edm-icon-placeholder edm-icon-placeholder-20px edm-green-flag"><!-- Green flag --></div>
          <div class="edm-icon-placeholder edm-icon-placeholder-20px edm-stop-sign"><!-- Stop --></div>
          <div class="edm-spacer"></div>
          <div
            class="edm-outlined-button-group"
            data-area="accent"
          >
            <div class="edm-outlined-button edm-outlined-button-first edm-outlined-button-selected">
              <div class="edm-icon-placeholder edm-icon-placeholder-20px"><!-- Small stage --></div>
            </div>
            <div class="edm-outlined-button edm-outlined-button-last edm-outlined-button-unselected">
              <div class="edm-icon-placeholder edm-icon-placeholder-20px"><!-- Large stage --></div>
            </div>
          </div>
          <div
            class="edm-outlined-button-group"
            data-area="accent"
          >
            <div class="edm-outlined-button edm-fullscreen-toggle" @click="toggleFullScreenView()">
              <div class="edm-icon-placeholder edm-icon-placeholder-20px"><!-- Full screen --></div>
            </div>
          </div>
        </div>
        <div class="edm-stage" data-area="none"></div>
        <div class="edm-targets">
          <div class="edm-sprite-selector">
            <div
              class="edm-sprite-info"
              data-area="accent"
            >
              <div class="edm-sprite-info-row">
                <div>
                  <div
                    class="edm-input"
                    data-area="input"
                  >
                    <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 7"></div>
                  </div>
                </div>
              </div>
              <div class="edm-sprite-info-row">
                <div>
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 1"><!-- x --></div>
                  <div
                    class="edm-input edm-input-number"
                    data-area="input"
                  >
                    <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 1"></div>
                  </div>
                </div>
                <div>
                  <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 1"></div>
                  <div
                    class="edm-input edm-input-number"
                    data-area="input"
                  >
                    <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 1"><!-- y --></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="edm-sprite-list-container"
              data-area="selector"
            >
              <div class="edm-sprite-list">
                <div
                  class="edm-asset edm-asset-selected"
                  data-area="selectorSelection"
                >
                  <div class="edm-asset-image">
                    <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  </div>
                  <div
                    class="edm-asset-name"
                    data-area="accentColor"
                  >
                    <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 7"></div>
                  </div>
                  <div
                    class="edm-asset-delete"
                    data-area="accentColor"
                  >
                    <div class="edm-icon-placeholder edm-icon-placeholder-20px"></div>
                  </div>
                </div>
                <div class="edm-asset edm-asset">
                  <div class="edm-asset-image">
                    <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  </div>
                  <div class="edm-asset-name">
                    <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 5"></div>
                  </div>
                </div>
                <div class="edm-asset edm-asset">
                  <div class="edm-asset-image">
                    <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
                  </div>
                  <div class="edm-asset-name">
                    <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 3"></div>
                    <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 1"></div>
                  </div>
                </div>
              </div>
              <div
                class="edm-asset-new"
                data-area="accentColor"
              >
                <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
              </div>
            </div>
          </div>
          <div
            class="edm-stage-selector"
            data-area="accent"
          >
            <div class="edm-stage-title">
              <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 5"><!-- Stage --></div>
            </div>
            <div class="edm-stage-image"></div>
            <div class="edm-stage-info">
              <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 9"><!-- Backdrops --></div>
            </div>
            <div class="edm-stage-info">
              <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 1"></div>
            </div>
            <div
              class="edm-asset-new"
              data-area="accentColor"
            >
              <div class="edm-icon-placeholder edm-icon-placeholder-24px"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹窗预览：点击菜单栏第 5 个按钮（Advanced）打开，演示弹窗背景/头部/内容背景设置 -->
    <div
      v-if="modalView"
      class="edm-modal-backdrop"
      data-area="popup"
      @click="toggleModalView()"
    >
      <div
        class="edm-modal"
        data-area="popup"
        @click.stop
      >
        <div
          class="edm-modal-header"
          data-area="popupHeader"
          :style="modalHeaderStyle"
        >
          <div class="edm-modal-title">
            <div class="edm-text-placeholder" style="--length: 8"></div>
            <span class="edm-title-space"></span>
            <div class="edm-text-placeholder" style="--length: 8"></div>
          </div>
          <div
            class="edm-modal-close"
            data-area="popupHeader"
            @click="toggleModalView()"
          >
            <div class="edm-icon-placeholder edm-icon-placeholder-16px"><!-- Back arrow --></div>
          </div>
        </div>
        <div
          class="edm-modal-body"
          data-area="darkMode"
          :style="modalBodyStyle"
        ></div>
      </div>
    </div>

  <!-- 扩展视图 - 添加拓展整页（与全屏页同级，独立覆盖） -->
  <div
    v-if="extensionView"
    class="edm-extension-view"
    data-area="selector"
  >
    <!-- 顶部导航栏 -->
  <div
    class="edm-extension-nav"
    data-area="popupHeader"
  >
    <div class="edm-extension-nav-inner">
      <!-- 左侧：返回按钮 -->
      <div class="edm-extension-nav-left">
        <div 
          class="edm-extension-back-btn"
          @click="toggleExtensionView()"
        >
          <div class="edm-icon-placeholder edm-icon-placeholder-16px"><!-- Back arrow --></div>
          <div class="edm-text-placeholder edm-text-placeholder-title" style="--length: 4"><!-- 返回 --></div>
        </div>
      </div>
      
      <!-- 中间：标题 -->
      <div class="edm-extension-nav-center">
        <div class="edm-text-placeholder edm-text-placeholder-title" style="--length: 6"></div>
        <div class="edm-text-placeholder edm-text-placeholder-title" style="--length: 2"></div>
        <div class="edm-text-placeholder edm-text-placeholder-title" style="--length: 9"></div>  
      </div>

      <div style="width: 40px "></div>
      <!-- 右侧：占位符 -->
    </div>
  </div>
  
  <!-- 分类标签 -->
  <div
    class="edm-extension-categories"
    data-area="filterBar"
  >
    <div 
      class="edm-extension-search"
      data-area="input"
    >
      <div class="edm-icon-placeholder edm-icon-placeholder-14px"><!-- Search icon --></div>
      <div class="edm-text-placeholder edm-text-placeholder-small" style="--length: 6"><!-- 搜索 --></div>
    </div>
    <div class="edm-menu-bar-separator"></div>
    <div
      v-for="category in extensionCategories"
      class="edm-extension-category"
      :class="{'edm-extension-category-selected': selectedExtensionCategory === category.id}"
      data-area="accentColor"
      @click="selectExtensionCategory(category.id)"
    >
      <div class="edm-text-placeholder edm-text-placeholder-small" :style="cssVariables({ '--length': category.labelLength })"></div>
    </div>
  </div>
  
  <!-- 扩展网格 -->
  <div
    class="edm-extension-grid-container"
    data-area="selector"
  >
    <div class="edm-extension-grid">
      <div
        v-for="item in filteredExtensionItems"
        class="edm-extension-grid-item"
      >
        <div class="edm-extension-item-top"></div>
        <div class="edm-extension-item-bottom">
          <div class="edm-extension-item-info">
            <div class="edm-extension-item-title">
              <div 
                class="edm-text-placeholder edm-text-placeholder-title" 
                :style="cssVariables({ '--length': item.titleLength })"
              ></div>
            </div>
            <div class="edm-extension-item-description">
              <div 
                class="edm-text-placeholder edm-text-placeholder-small" 
                :style="cssVariables({ '--length': item.descLength })"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <div
      v-if="fullScreenView"
      class="edm-fullscreen-view"
      data-area="fullscreen"
    >
      <div
        class="edm-fullscreen-controls"
        data-area="stageHeader"
      >
        <div class="edm-fullscreen-controls-inner">
          <div>
            <div class="edm-icon-placeholder edm-icon-placeholder-20px edm-green-flag"><!-- Green flag --></div>
            <div class="edm-icon-placeholder edm-icon-placeholder-20px edm-stop-sign"><!-- Stop --></div>
          </div>
          <div
            class="edm-outlined-button-group"
            data-area="accent"
          >
            <div class="edm-outlined-button edm-fullscreen-toggle" @click="toggleFullScreenView()">
              <div class="edm-icon-placeholder edm-icon-placeholder-20px"><!-- Exit full screen --></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="edm-fullscreen-stage"
        data-area="none"
      ></div>
    </div>
  </div>
`;
export default template;
