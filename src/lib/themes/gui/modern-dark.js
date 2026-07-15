import { guiColors as lightGuiColors } from "./modern-light";

const guiColors = {
    ...lightGuiColors,

    "color-scheme": "dark",

    "ui-primary": "#1c1c1c",
    "ui-secondary": "#1f1f1f",
    "ui-tertiary": "#2f2f2f",

    "ui-modal-overlay": "#333333aa",
    "ui-modal-background": "#111111",
    "ui-modal-foreground": "#eeeeee",

    "ui-white": "#111111",
    "progress-bar-outer": "hsla(0, 100%, 100%, 0.25)",

    "ui-black-transparent": "#ffffff26",

    "text-primary": "#eeeeee",

    "assets-background": "#111111",

    "input-background": "#1e1e1e",

    "popover-background": "#1e1e1e",

    "badge-background": "#16202c",
    "badge-border": "#203652",

    "fullscreen-background": "#111111",
    "fullscreen-accent": "#111111",

    "page-background": "#111111",
    "page-foreground": "#eeeeee",

    "project-title-inactive": "var(--ui-secondary)",
    "project-title-hover": "#ffffff3f",

    "link-color": "#44aaff",

    "filter-icon-black": "invert(100%)",
    "filter-icon-gray": "grayscale(100%) brightness(1.7)",
    "filter-icon-white": "brightness(0) invert(100%)",

    "paint-filter-icon-gray": "brightness(0) invert(1)",
    "high-contrast-border": "transparent",

    "menu-bar-background": "#181818",
    "menu-bar-foreground": "white",
    "menu-bar-background-image": "var(--menu-bar-background-image-classic)",
    "menu-bar-hover": "#fff2",
    "progress-bar-outer": "#fff3",
    "menu-bar-bottom-border": "#fff2",
    "menu-bar-icon-filter": "",
    'ui-modal-header-background': '#1f1f1f',
    'ui-modal-header-foreground': 'white',

    "feedback-background": "var(--looks-secondary)",
    "feedback-foreground": "white",

    "menu-bar-background-classic": "",
    "ui-modal-header-background-classic": "",
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