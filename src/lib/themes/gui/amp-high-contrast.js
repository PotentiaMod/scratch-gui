const guiColors = {
    'color-scheme': 'dark',

    'ui-primary': '#000000',
    'ui-secondary': '#000000',
    'ui-tertiary': '#000000',

    'ui-modal-overlay': '#000000cc',
    'ui-modal-background': '#000000',
    'ui-modal-foreground': '#FFFF00',
    'ui-modal-header-background': '#000000',
    'ui-modal-header-foreground': '#FFFFFF',

    'ui-white': '#000000',
    'ui-black-transparent': '#FFFFFF',

    'text-primary': '#FFFF00',

    'assets-background': '#000000',
    'input-background': '#000000',
    'popover-background': '#000000',

    'badge-background': '#000000',
    'badge-border': '#FFFF00',

    'fullscreen-background': '#000000',
    'fullscreen-accent': '#000000',

    'page-background': '#000000',
    'page-foreground': '#FFFF00',

    'project-title-inactive': '#000000',
    'project-title-hover': '#FFFF003F',

    'link-color': '#00FFFF',

    'filter-icon-black': 'invert(100%) contrast(100%)',
    'filter-icon-gray': 'invert(100&) contrast(100%)',
    'filter-icon-white': 'brightness(100%) invert(100%) contrast(100%)',

    'paint-filter-icon-gray': 'none',

    'menu-bar-background': '#000',
    'menu-bar-background-image': 'none',
    'menu-bar-foreground': '#ffffff',
    'menu-bar-icon-filter': 'none',
    'high-contrast-border': 'white',

    'motion-primary': 'blue',
    'motion-primary-transparent': 'white',
    'motion-tertiary': 'darkblue',
    'looks-secondary': 'black',
    'looks-transparent': 'white',
    'looks-light-transparent': 'white',
    'looks-secondary-dark': '#333333',
    'extensions-primary': '#3e3e3e',
    'extensions-tertiary': '#333333',
    'extensions-transparent': 'white',
    'extensions-light': '#7e7e7e',
    'drop-highlight': '#66bb6a',
    'data-primary': 'black',
    'turbowarp-color': 'black',
    'turbowarp-transparent': 'white'
};

const blockColors = {
    // Block Insertion Marker: Often needs a solid background to remove 'transparency'
    // in the area where a block is about to be placed.
    insertionMarker: '#FFFF00',
    insertionMarkerBackground: '#000000', // Added to make insertion area solid

    // Workspace & UI Backgrounds (all set to solid black)
    workspace: '#000000',
    toolboxSelected: '#000000',
    toolboxText: '#FFFF00',
    toolbox: '#000000',
    flyout: '#000000',

    // Scrollbar & Zoom Icons (Solid foreground/backgrounds)
    scrollbar: '#FFFFFF',
    zoomIconFilter: 'none',
    gridColor: '#FFFFFF',

    // Value Reports (Solid backgrounds)
    valueReportBackground: '#000000',
    valueReportBorder: '#FFFF00',
    valueReportForeground: '#FFFF00',

    // Context Menu (Solid backgrounds)
    contextMenuBackground: '#000000',
    contextMenuBorder: '#FFFFFF',
    contextMenuForeground: '#FFFF00',
    contextMenuActiveBackground: '#000000',
    contextMenuDisabledForeground: '#CCCCCC',

    // Flyout Text/Labels
    flyoutLabelColor: '#FFFF00',

    // Checkbox and Button colors
    checkboxInactiveBackground: '#000000',
    checkboxInactiveBorder: '#FFFF00',
    buttonBorder: '#FFFFFF',
    buttonActiveBackground: '#000000',
    buttonForeground: '#FFFF00'
};

export {guiColors, blockColors};
