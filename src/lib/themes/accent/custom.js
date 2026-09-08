import {gradientDataToCSS} from '../../../lib/gradient-to-css.js';

const getGuiColors = (primaryColor, secondaryColor, tertiaryColor, gradient) => ({
    'motion-primary': '${primaryColor}',
    'motion-primary-transparent': '${primaryColor}e6',
    'motion-tertiary': '${secondaryColor}',

    'looks-secondary': '${primaryColor}',
    'looks-secondary-light': '${primaryColor}',
    'looks-secondary-lighter': '${primaryColor}',
    'looks-transparent': '${primaryColor}59',
    'looks-light-transparent': '${primaryColor}26',
    'looks-secondary-dark': '${secondaryColor}',
    'looks-secondary-darker': '${secondaryColor}',
    'looks-secondary-deep-dark': '${secondaryColor}',

    'extensions-primary': '${tertiaryColor}',
    'extensions-tertiary': '${tertiaryColor}',
    'extensions-transparent': '${tertiaryColor}6e',
    'extensions-light': 'hsla(10, 57%, 85%, 1)',

    'drop-highlight': '${primaryColor}',

    'menu-bar-background-image': `${gradient ? gradientDataToCSS(gradient.colors, gradient.direction) : 'none'}`
});

const getBlockColors = (primaryColor, secondaryColor) => ({
    checkboxActiveBackground: primaryColor,
    checkboxActiveBorder: secondaryColor
});

export {
    getGuiColors,
    getBlockColors
};
