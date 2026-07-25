import { guiColors as lightGuiColors } from "./modern-light";

const guiColors = {
    ...lightGuiColors,

    "color-scheme": "dark",

    "ui-primary": "#000000",
    "ui-secondary": "#222222",
    "ui-tertiary": "#454545",

    "ui-modal-overlay": "#1e1e1eaa",
    "ui-modal-background": "#151515",
    "ui-modal-foreground": "#eeeeee",

    "ui-white": "#111111",

    "ui-black-transparent": "#ffffff26",

    "text-primary": "#eeeeee",

    "assets-background": "#141414",

    "input-background": "#181818",

    "popover-background": "#1e1e1e",

    "badge-background": "#2c282d",
    "badge-border": "#000000",

    "fullscreen-background": "#000000",
    "fullscreen-accent": "#121212",

    "page-background": "#000000",
    "page-foreground": "#ffffff",

    "project-title-inactive": "var(--ui-secondary)",
    "project-title-hover": "#ffffff3f",

    "filter-icon-black": "invert(100%)",
    "filter-icon-gray": "grayscale(100%) brightness(1.7)",
    "filter-icon-white": "brightness(0) invert(100%)",

    "paint-filter-icon-gray": "brightness(0) invert(1)",

    "menu-bar-background": "#000000",
    "menu-bar-foreground": "white",
    "menu-bar-background-image": "var(--menu-bar-background-image)",
    "menu-bar-hover": "#fff2",
    "progress-bar-outer": "#ffffff3",
    "menu-bar-icon-filter": "",
    'ui-modal-header-background': '#1f1f1f',
    'ui-modal-header-foreground': 'white',
    "feedback-background": "var(--looks-secondary-dark)",
    "feedback-foreground": "white"
};

const blockColors = {
    insertionMarker: "#cccccc",
    workspace: "#1e1e1e",
    toolboxSelected: "#1e1e1e",
    toolboxText: "#cccccc",
    toolbox: "#111111",
    flyout: "#111111",
    scrollbar: "#666666",
    valueReportBackground: "#1e1e1e",
    valueReportBorder: "#333333",
    valueReportForeground: "#eeeeee",
    contextMenuBackground: "#111111",
    contextMenuBorder: "#ffffff26",
    contextMenuForeground: "#eeeeee",
    contextMenuActiveBackground: "#2e2e2e",
    contextMenuDisabledForeground: "#666666",
    flyoutLabelColor: "#cccccc",
    checkboxInactiveBackground: "#222222",
    checkboxInactiveBorder: "#c8c8c8",
    buttonBorder: "#c6c6c6",
    buttonActiveBackground: "#222222",
    buttonForeground: "#cccccc",
    zoomIconFilter: "invert(100%) grayscale(100%) brightness(140%)",
    gridColor: "#484848",
};

export { guiColors, blockColors };