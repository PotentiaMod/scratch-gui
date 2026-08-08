const blockColors = {
    motion: {
        primary: '#006BFF',
        secondary: '#0055E0',
        tertiary: '#0045C9',
        quaternary: '#0045C9'
    },
    looks: {
        primary: '#8800FF',
        secondary: '#7600E8',
        tertiary: '#6900D6',
        quaternary: '#6900D6'
    },
    sounds: {
        primary: '#C000CF',
        secondary: '#A900B8',
        tertiary: '#8E009C',
        quaternary: '#8E009C'
    },
    control: {
        primary: '#FFA200',
        secondary: '#E08900',
        tertiary: '#CC7800',
        quaternary: '#CC7800'
    },
    event: {
        primary: '#FFE600',
        secondary: '#E0C800',
        tertiary: '#C4AE00',
        quaternary: '#C4AE00'
    },
    sensing: {
        primary: '#00B2FF',
        secondary: '#008FD6',
        tertiary: '#0079BD',
        quaternary: '#0079BD'
    },
    pen: {
        primary: '#00C989',
        secondary: '#00A166',
        tertiary: '#007A45',
        quaternary: '#007A45'
    },
    operators: {
        primary: '#59C059',
        secondary: '#46B946',
        tertiary: '#389438',
        quaternary: '#389438'
    },
    data: {
        primary: '#FF6A00',
        secondary: '#D64D00',
        tertiary: '#B23400',
        quaternary: '#B23400'
    },
    // This is not a new category, but rather for differentiation
    // between lists and scalar variables.
    data_lists: {
        primary: '#FF5500',
        secondary: '#D93B00',
        tertiary: '#BF2A00',
        quaternary: '#BF2A00'
    },
    more: {
        primary: '#9966FF',
        secondary: '#7A49DB',
        tertiary: '#6132BF',
        quaternary: '#6132BF'
    },
    addons: {
        primary: '#44E0DA',
        secondary: '#2ABFB9',
        tertiary: '#2ABFB9',
        quaternary: '#2ABFB9'
    },
    text: '#FFFFFF',
    workspace: '#F9F9F9',
    toolboxHover: '#006BFF',
    toolboxSelected: '#C7D9E8',
    toolboxText: '#292929',
    toolbox: '#FFFFFF',
    blackText: '#292929',
    flyout: '#F9F9F9',
    scrollbar: '#E0DFE0',
    scrollbarHover: '#E0DFE0',
    textField: '#FFFFFF',
    textFieldText: '#292929',
    insertionMarker: '#000000',
    insertionMarkerOpacity: 0.2,
    dragShadowOpacity: 0.6,
    stackGlow: '#B700FF',
    stackGlowSize: 7,
    stackGlowOpacity: 1,
    replacementGlow: '#FFFFFF',
    replacementGlowSize: 7,
    replacementGlowOpacity: 1,
    colourPickerStroke: '#FFFFFF',
    // CSS colours: support RGBA
    fieldShadow: 'rgba(255, 255, 255, 0.3)',
    dropDownShadow: 'rgba(0, 0, 0, .3)',
    numPadBackground: '#774BDE',
    numPadBorder: '#6036C2',
    numPadActiveBackground: '#552BB8',
    numPadText: 'white', // Do not use hex here, it cannot be inlined with data-uri SVG
    valueReportBackground: '#FFFFFF',
    valueReportBorder: '#AAAAAA',
    valueReportForeground: '#000000',
    menuHover: 'rgba(0, 0, 0, 0.2)',
    contextMenuBackground: '#ffffff',
    contextMenuBorder: '#cccccc',
    contextMenuForeground: '#000000',
    contextMenuActiveBackground: '#ECD6F8',
    contextMenuDisabledForeground: '#cccccc',
    flyoutLabelColor: '#292929',
    checkboxInactiveBackground: '#ffffff',
    checkboxInactiveBorder: '#c8c8c8',
    checkboxActiveBackground: '#A34CFF',
    checkboxActiveBorder: '#7D33CC',
    checkboxCheck: '#ffffff',
    buttonBorder: '#c6c6c6',
    buttonActiveBackground: '#ffffff',
    buttonForeground: '#292929',
    zoomIconFilter: 'none',
    gridColor: 'transparent'
};

const extensions = {};

const customExtensionColors = {
    primary: primary => {
        const hsv = hex2hsv(primary);
        hsv[2] = Math.max(hsv[2] - 70, 20);
        return hsv2hex(hsv);
    },
    secondary: () => '#30175C',
    tertiary: primary => primary,
    quaternary: primary => primary,
    categoryIconBackground: primary => customExtensionColors.primary(primary),
    categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};

export {
    blockColors,
	customExtensionColors,
    extensions
};
