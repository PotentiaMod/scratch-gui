const guiColors = {
    'color-scheme': 'dark',

    'ui-primary': 'black',
    'ui-secondary': 'black',
    'ui-tertiary': 'var(--looks-secondary-darker)',

    'ui-modal-overlay': '#111111aa',
    'ui-modal-background': '#030303',
    'ui-modal-foreground': 'var(--looks-secondary-lighter)',
    'ui-modal-header-background': 'var(--looks-secondary-darker)',
    'ui-modal-header-foreground': 'var(--looks-secondary-light)',

    'ui-white': '#030303',

    'ui-black-transparent': '#ffffff26',

    'text-primary': '#eeeeee',

    'assets-background': '#030303',

    'input-background': 'var(--looks-secondary-darker)',

    'popover-background': 'var(--looks-secondary-darker)',

    'badge-background': '#16202c',
    'badge-border': '#203652',
	
	'menu-bar-background': 'var(--looks-secondary-deep-dark)',
    'menu-bar-foreground': 'white',
    'menu-bar-background-image': 'none',
	'menu-bar-icon-filter': 'none',

    'fullscreen-background': '#030303',
    'fullscreen-accent': '#030303',

    'page-background': 'black',
    'page-foreground': 'var(--looks-secondary)',

    'project-title-inactive': 'var(--ui-secondary)',
    'project-title-hover': '#ffffff3f',

    'link-color': 'var(--looks-secondary-lighter)',

    'filter-icon-black': 'invert(100%)',
    'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
    'filter-icon-white': 'brightness(0) invert(100%)',

    'paint-filter-icon-gray': 'brightness(1.7)'
};

const blockColors = {
    insertionMarker: '#cccccc',
    workspace: 'var(--looks-secondary-deep-dark)',
    toolboxSelected: 'var(--looks-secondary-deep-dark)',
    toolboxText: '#cccccc',
    toolbox: 'var(--looks-secondary-deep-dark)',
    flyout: 'var(--looks-secondary-deep-dark)',
    scrollbar: '#666666',
    valueReportBackground: 'var(--looks-secondary-deep-dark)',
    valueReportBorder: '#111111',
    valueReportForeground: '#eeeeee',
    contextMenuBackground: 'var(--looks-secondary-deep-dark)',
    contextMenuBorder: '#ffffff26',
    contextMenuForeground: '#eeeeee',
    contextMenuActiveBackground: 'var(--looks-secondary-deep-dark)',
    contextMenuDisabledForeground: '#666666',
    flyoutLabelColor: '#cccccc',
    checkboxInactiveBackground: '#222222',
    checkboxInactiveBorder: '#c8c8c8',
    buttonBorder: '#c6c6c6',
    buttonActiveBackground: '#222222',
    buttonForeground: '#cccccc',
    zoomIconFilter: 'invert(100%)',
    gridColor: 'transparent'
};

export {
    guiColors,
    blockColors
};
