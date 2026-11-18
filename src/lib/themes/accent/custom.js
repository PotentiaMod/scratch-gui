// Placeholder accent used by the "Customize in Addon Settings" entry that links
// to the custom-editor-theme addon. The actual colors are provided by the addon
// itself via CSS variables; this only needs to satisfy the theme system so the
// menu can render a color swatch.
const guiColors = {
    'looks-secondary': '#4d97ff',
    'looks-secondary-dark': 'hsla(211, 100%, 45%, 1)',
    'color-scheme': 'dark'
};

const blockColors = {
    checkboxActiveBackground: '#4d97ff',
    checkboxActiveBorder: '#4d97ff'
};

export {
    guiColors,
    blockColors
};