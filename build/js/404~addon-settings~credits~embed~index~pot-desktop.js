(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["404~addon-settings~credits~embed~index~pot-desktop"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/themes/global-styles.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/lib/themes/global-styles.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n/* This is for overriding some styles that don't really \"belong\" to any existing stylesheets */\n\n/* Try to use this sparingly, otherwise this will become unmaintainable again... */\n\n:root {\n    color-scheme: var(--color-scheme);\n}\n\n/* popover is used by gui and paint */\n\n/* some of these are duplicated over there too; !important makes sure these win */\n\n.Popover {\n    color-scheme: light !important;\n}\n\n.Popover-body {\n    color: var(--text-primary) !important;\n    background: var(--popover-background) !important;\n    border: 1px solid var(--ui-black-transparent) !important;\n    box-shadow: 0px 0px 8px 1px var(--shadow) !important;\n}\n\n.Popover-tipShape {\n    fill: var(--popover-background) !important;\n    stroke: var(--ui-black-transparent) !important;\n}\n\n/* ScratchAdddons editor-dark-mode compatibility */\n\n:root {\n    --editorDarkMode-primary: var(--looks-secondary);\n    --editorDarkMode-primary-transparent35: var(--looks-transparent);\n    --editorDarkMode-primary-variant: var(--looks-secondary-dark);\n    --editorDarkMode-border: var(--ui-black-transparent);\n    --editorDarkMode-accent: var(--ui-modal-background);\n    --editorDarkMode-categoryMenu-text: var(--text-primary);\n    --editorDarkMode-accent-text: var(--text-primary);\n    --editorDarkMode-page: var(--ui-primary);\n    --editorDarkMode-highlightText: var(--looks-secondary);\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/hooks.js":
/*!*****************************!*\
  !*** ./src/addons/hooks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const AddonHooks = {
  appStateReducer: () => {},
  appStateStore: null,
  blockly: null,
  blocklyWorkspace: null,
  blocklyCallbacks: [],
  recolorCallbacks: []
};
/* harmony default export */ __webpack_exports__["default"] = (AddonHooks);

/***/ }),

/***/ "./src/lib/brand.js":
/*!**************************!*\
  !*** ./src/lib/brand.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Legacy export format because this is used by some build-time scripts stuck in the past.
// eslint-disable-next-line import/no-commonjs
module.exports = {
  APP_NAME: 'PotentiaMod'
};

/***/ }),

/***/ "./src/lib/gradient-to-css.js":
/*!************************************!*\
  !*** ./src/lib/gradient-to-css.js ***!
  \************************************/
/*! exports provided: gradientDataToCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gradientDataToCSS", function() { return gradientDataToCSS; });
const gradientDataToCSS = (colors, direction) => {
  let buffer = "linear-gradient(".concat(direction, "deg");
  for (const color of colors) {
    buffer += ", ".concat(color.color, " ").concat(color.position, "%");
  }
  buffer += ')';
  return buffer;
};

/***/ }),

/***/ "./src/lib/themes/accent/blue.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/blue.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'looks-secondary': 'hsla(215, 100%, 65%, 1)',
  'looks-secondary-light': 'hsl(215,100%,85%)',
  'looks-secondary-lighter': 'hsl(214,100%,95%)',
  'looks-transparent': 'hsla(215, 100%, 65%, 0.35)',
  'looks-light-transparent': 'hsla(215, 100%, 65%, 0.15)',
  'looks-secondary-dark': 'hsla(215, 60%, 50%, 1)',
  'looks-secondary-darker': 'hsl(215,62%,31%)',
  'looks-secondary-deep-dark': 'hsl(215,64%,18%)'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/corrupted-blue.js":
/*!*************************************************!*\
  !*** ./src/lib/themes/accent/corrupted-blue.js ***!
  \*************************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#625e97',
  'motion-primary-transparent': 'hsla(240,21%,19%,0.35)',
  'motion-tertiary': '#454171',
  'looks-secondary': '#625e97',
  'looks-secondary-light': '#8d87cf',
  'looks-secondary-lighter': '#b6aff3',
  'looks-transparent': 'hsla(240,21%,19%,0.35)',
  'looks-light-transparent': 'hsla(261, 100%, 50%, 0.15)',
  'looks-secondary-dark': '#2a293f',
  'looks-secondary-darker': '#1c1c2b',
  'looks-secondary-deep-dark': '#12121a',
  'extensions-primary': '#625e97',
  'extensions-tertiary': '#444171',
  'extensions-transparent': 'hsla(240,21%,19%,0.35)',
  'extensions-light': '#8d87cf',
  'drop-highlight': '#7a74bb'
};
const blockColors = {
  checkboxActiveBackground: '#625e97',
  checkboxActiveBorder: '#5b5788'
};


/***/ }),

/***/ "./src/lib/themes/accent/cottoncandy.js":
/*!**********************************************!*\
  !*** ./src/lib/themes/accent/cottoncandy.js ***!
  \**********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#FF80C4',
  'motion-primary-transparent': '#FF80C4e6',
  'motion-tertiary': '#DB61A2',
  'looks-secondary': '#FF80C4',
  'looks-secondary-light': '#ffc6df',
  'looks-secondary-lighter': '#ffe5f1',
  'looks-transparent': '#FF73B059',
  'looks-light-transparent': '#FF73B026',
  'looks-secondary-dark': '#BF4888',
  'looks-secondary-darker': '#7e2e5a',
  'looks-secondary-deep-dark': '#431a30',
  'data-primary': '#FF82EE',
  'extensions-primary': '#88D4F2',
  'extensions-tertiary': '#6C97D4',
  'extensions-transparent': '#74D3F235',
  'extensions-light': '#BAE2F2',
  'drop-highlight': '#FF94DA',
  'menu-bar-background-image': 'linear-gradient(to right, #91d3ff 0%, #ff91e2 100%)',
  'menu-bar-background-image-dark': 'linear-gradient(to right, #005091,#8A2770)'
};
const blockColors = {
  checkboxActiveBackground: '#FF80C4',
  checkboxActiveBorder: '#DB61A2'
};


/***/ }),

/***/ "./src/lib/themes/accent/custom.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/custom.js ***!
  \*****************************************/
/*! exports provided: getGuiColors, getBlockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGuiColors", function() { return getGuiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockColors", function() { return getBlockColors; });
/* harmony import */ var _lib_gradient_to_css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/gradient-to-css.js */ "./src/lib/gradient-to-css.js");

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
  'menu-bar-background-image': "".concat(gradient ? Object(_lib_gradient_to_css_js__WEBPACK_IMPORTED_MODULE_0__["gradientDataToCSS"])(gradient.colors, gradient.direction) : 'none')
});
const getBlockColors = (primaryColor, secondaryColor) => ({
  checkboxActiveBackground: primaryColor,
  checkboxActiveBorder: secondaryColor
});


/***/ }),

/***/ "./src/lib/themes/accent/cyan.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/cyan.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#00c4ff',
  'motion-primary-transparent': '#00c4ffe6',
  'motion-tertiary': '#007bc7',
  'looks-secondary': '#00c4ff',
  'looks-secondary-light': '#5EDAFF',
  'looks-secondary-lighter': '#94E6FF',
  'looks-transparent': '#00c4ffe6',
  'looks-light-transparent': 'hsla(203, 100%, 39%, 0.15)',
  'looks-secondary-dark': '#009CCC',
  'looks-secondary-darker': '#006994',
  'looks-secondary-deep-dark': '#004970',
  'extensions-primary': 'hsla(194, 100%, 58%, 1)',
  'extensions-tertiary': 'hsla(194, 100%, 35%, 1)',
  'extensions-transparent': 'hsla(194, 100%, 58%, 0.43)',
  'extensions-light': 'hsla(194, 100%, 75%, 1)',
  'drop-highlight': '#64caf5'
};
const blockColors = {
  checkboxActiveBackground: '#00c4ff',
  checkboxActiveBorder: '#007CBD'
};


/***/ }),

/***/ "./src/lib/themes/accent/gaia-blue.js":
/*!********************************************!*\
  !*** ./src/lib/themes/accent/gaia-blue.js ***!
  \********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#2d2dd3',
  'motion-primary-transparent': 'hsla(240, 65%, 50%, 0.35)',
  'motion-tertiary': 'hsla(240, 65%, 30%, 1)',
  'motion-primary-dark': 'hsla(240, 65%, 40%, 1)',
  'looks-secondary': '#2d2dd3',
  'looks-secondary-light': '#6565fa',
  'looks-secondary-lighter': '#9393fb',
  'looks-transparent': 'hsla(240, 65%, 50%, 0.35',
  'looks-light-transparent': 'hsla(240, 100%, 50%, 0.15)',
  'looks-secondary-dark': '#2424a9',
  'looks-secondary-darker': '#161672',
  'looks-secondary-deep-dark': '#0f0f42',
  'extensions-primary': 'hsla(240, 91%, 53%, 1)',
  'extensions-tertiary': 'hsla(240, 80%, 43%, 1)',
  'extensions-transparent': 'hsla(240, 91%, 53%, 0.35)',
  'extensions-light': 'hsla(240, 80%, 43%, 1)',
  'drop-highlight': 'hsla(240, 100%, 77%, 1)'
};
const blockColors = {
  checkboxActiveBackground: 'hsla(240, 65%, 50%, 1)',
  checkboxActiveBorder: '#5b5788'
};


/***/ }),

/***/ "./src/lib/themes/accent/green.js":
/*!****************************************!*\
  !*** ./src/lib/themes/accent/green.js ***!
  \****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#4caf50',
  // bright green
  'motion-primary-transparent': '#4caf50e6',
  // semi-transparent green
  'motion-tertiary': '#388e3c',
  // darker green

  'looks-secondary': '#4caf50',
  // bright green
  'looks-secondary-light': '#a8f7ab',
  // bright green
  'looks-secondary-lighter': '#ddfade',
  // bright green
  'looks-transparent': '#4caf5059',
  // more transparent green
  'looks-light-transparent': '#4caf5026',
  // very transparent green
  'looks-secondary-dark': 'hsla(122, 39%, 35%, 1)',
  // dark green
  'looks-secondary-darker': 'hsl(121,40%,22%)',
  // dark green
  'looks-secondary-deep-dark': 'hsl(120,38%,11%)',
  // dark green

  'extensions-primary': 'hsla(122, 39%, 65%, 1)',
  // light green
  'extensions-tertiary': 'hsla(122, 39%, 45%, 1)',
  // medium green
  'extensions-transparent': 'hsla(122, 39%, 65%, 0.35)',
  // semi-transparent green
  'extensions-light': 'hsla(122, 39%, 85%, 1)',
  // very light green

  'drop-highlight': '#80c883' // light green
};
const blockColors = {
  checkboxActiveBackground: '#4caf50',
  // bright green
  checkboxActiveBorder: '#388e3c' // darker green
};


/***/ }),

/***/ "./src/lib/themes/accent/indigo-blue.js":
/*!**********************************************!*\
  !*** ./src/lib/themes/accent/indigo-blue.js ***!
  \**********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#5a00ff',
  'motion-primary-transparent': 'hsla(261, 100%, 50%, 0.35)',
  'motion-tertiary': '#4600c7',
  'looks-secondary': '#5a00ff',
  'looks-secondary-light': '#7e39fd',
  'looks-secondary-lighter': '#a16ffb',
  'looks-transparent': 'hsla(289, 100%, 39%, 0.15)',
  'looks-light-transparent': 'hsla(261, 100%, 50%, 0.15)',
  'looks-secondary-dark': '#5900ff',
  'looks-secondary-darker': '#4002b3',
  'looks-secondary-deep-dark': '#240066',
  'extensions-primary': 'hsla(261, 100%, 50%, 1)',
  'extensions-tertiary': 'hsla(261, 100%, 39%, 1)',
  'extensions-transparent': 'hsla(261, 100%, 50%, 0.35)',
  'extensions-light': '#7e39fd',
  'drop-highlight': '#722bf5'
};
const blockColors = {
  checkboxActiveBackground: '#5a00ff',
  checkboxActiveBorder: '#4b05ca'
};


/***/ }),

/***/ "./src/lib/themes/accent/indigo.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/indigo.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#4800cc',
  'motion-primary-transparent': '#4800cce6',
  'motion-tertiary': '#2D00A8',
  'looks-secondary': '#4800cc',
  'looks-secondary-light': '#9a69f3',
  'looks-secondary-lighter': '#eadefe',
  'looks-transparent': '#5208D959',
  'looks-light-transparent': '#6B30D926',
  'looks-secondary-dark': '#220099',
  'looks-secondary-darker': '#1d017c',
  'looks-secondary-deep-dark': '#0b012e',
  'extensions-primary': 'hsla(261, 100%, 38%, 1)',
  'extensions-tertiary': 'hsla(261, 100%, 15%, 1)',
  'extensions-transparent': 'hsla(261, 100%, 38%, 0.43)',
  'extensions-light': 'hsla(261, 100%, 56%, 1)',
  'drop-highlight': '#7E4ED9'
};
const blockColors = {
  checkboxActiveBackground: '#4800cc',
  checkboxActiveBorder: '#3100AD'
};


/***/ }),

/***/ "./src/lib/themes/accent/lime.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/lime.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#80f51b',
  'motion-primary-transparent': 'hsla(92, 92%, 53%, 0.35)',
  'motion-tertiary': '#68c616',
  'motion-primary-dark': '#7ed200',
  'looks-secondary': '#80f51b',
  // bright green
  'looks-secondary-light': '#aaff60',
  // bright green
  'looks-secondary-lighter': '#d1ffa8',
  // bright green
  'looks-transparent': '#80f51b59',
  // more transparent green
  'looks-light-transparent': '#aaff6026',
  // very transparent green
  'looks-secondary-dark': '#7ed200',
  // dark green
  'looks-secondary-darker': '#599302',
  // dark green
  'looks-secondary-deep-dark': '#385c01',
  // dark green

  'extensions-primary': '#80f51b',
  'extensions-tertiary': '#68c616',
  'extensions-transparent': 'hsla(92, 91%, 53%, 0.35)',
  'extensions-light': '#89ee30',
  'drop-highlight': 'hsl(92,100%,71%)'
};
const blockColors = {
  checkboxActiveBackground: '#80f51b',
  // bright green
  checkboxActiveBorder: '#5ab70a' // darker green
};


/***/ }),

/***/ "./src/lib/themes/accent/magenta-purple.js":
/*!*************************************************!*\
  !*** ./src/lib/themes/accent/magenta-purple.js ***!
  \*************************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#d415ff',
  'motion-primary-transparent': 'hsla(289, 100%, 54%, 0.35)',
  'motion-tertiary': '#a300c7',
  'looks-secondary': '#d415ff',
  'looks-secondary-light': '#df4eff',
  'looks-secondary-lighter': '#e892fb',
  'looks-transparent': 'hsla(289, 100%, 39%, 0.15)',
  'looks-light-transparent': '#FF4DC126',
  'looks-secondary-dark': '#58039c',
  'looks-secondary-darker': '#360160',
  'looks-secondary-deep-dark': '#1d0133',
  'extensions-primary': '#d415ff',
  'extensions-tertiary': '#a300c7',
  'extensions-transparent': 'hsla(289, 100%, 54%, 0.35)',
  'extensions-light': '#df4eff',
  'drop-highlight': '#e670ff'
};
const blockColors = {
  checkboxActiveBackground: '#d415ff',
  checkboxActiveBorder: '#a509c8'
};


/***/ }),

/***/ "./src/lib/themes/accent/magenta.js":
/*!******************************************!*\
  !*** ./src/lib/themes/accent/magenta.js ***!
  \******************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#FF269A',
  'motion-primary-transparent': '#FF269Ae6',
  'motion-tertiary': '#E60D8C',
  'looks-secondary': '#FF269A',
  'looks-secondary-light': '#ffa7d6',
  'looks-secondary-lighter': '#ffd8ed',
  'looks-transparent': '#FF4DC159',
  'looks-light-transparent': '#FF4DC126',
  'looks-secondary-dark': 'hsla(330, 68%, 57%, 1)',
  'looks-secondary-darker': 'hsl(330,53%,30%)',
  'looks-secondary-deep-dark': 'hsl(330,53%,20%)',
  'extensions-primary': 'hsla(315, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(315, 85%, 57%, 1)',
  'extensions-transparent': 'hsla(315, 85%, 65%, 0.43)',
  'extensions-light': 'hsla(315, 57%, 85%, 1)',
  'drop-highlight': '#FF8ADC'
};
const blockColors = {
  checkboxActiveBackground: '#FF269A',
  checkboxActiveBorder: '#FC00B9'
};


/***/ }),

/***/ "./src/lib/themes/accent/orange.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/orange.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#ff5726',
  'motion-primary-transparent': '#ff5726e6',
  'motion-tertiary': '#e63e0d',
  'looks-secondary': '#ff5726',
  'looks-secondary-light': '#f7977b',
  'looks-secondary-lighter': '##ffdfd5',
  'looks-transparent': '#ff5d4d59',
  'looks-light-transparent': '#ff5d4d26',
  'looks-secondary-dark': 'hsl(14,55%,55%)',
  'looks-secondary-darker': 'hsl(14,40%,40%)',
  'looks-secondary-deep-dark': 'hsl(16,26%,17%)',
  'extensions-primary': 'hsla(10, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(10, 85%, 57%, 1)',
  'extensions-transparent': 'hsla(10, 85%, 65%, 0.43)',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '#ff9d8a'
};
const blockColors = {
  checkboxActiveBackground: '#ff5726',
  checkboxActiveBorder: '#fc3900'
};


/***/ }),

/***/ "./src/lib/themes/accent/purple.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/purple.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'hsla(260, 60%, 60%, 1)',
  'motion-primary-transparent': 'hsla(260, 60%, 60%, 0.9)',
  'motion-tertiary': 'hsla(260, 42%, 51%, 1)',
  'looks-secondary': 'hsla(260, 60%, 60%, 1)',
  'looks-secondary-light': 'hsla(260, 80%, 80%, 1)',
  'looks-secondary-lighter': 'hsla(260, 95%, 95%, 1)',
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)',
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)',
  'looks-secondary-dark': 'hsla(260, 42%, 52%, 1)',
  'looks-secondary-darker': 'hsl(260,30%,30%)',
  'looks-secondary-deep-dark': 'hsla(260, 10%, 10%, 1)',
  'drop-highlight': 'hsl(260,100%,82%)'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/rainbow.js":
/*!******************************************!*\
  !*** ./src/lib/themes/accent/rainbow.js ***!
  \******************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#ff4c4c',
  'motion-primary-transparent': '#ff4c4ce6',
  'motion-tertiary': '#cc3333',
  'looks-secondary': '#ff4c4c',
  'looks-secondary-light': '#fe9c9c',
  'looks-secondary-lighter': '#ffd7d7',
  'looks-transparent': '#ff4d4d59',
  'looks-light-transparent': '#ff4d4d26',
  'looks-secondary-dark': 'hsla(0, 42%, 51%, 1)',
  'looks-secondary-darker': 'hsl(0,30%,28%)',
  'looks-secondary-deep-dark': 'hsl(0,15%,11%)',
  'extensions-primary': 'hsla(10, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
  'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '#ff8c8c',
  // eslint-disable-next-line max-len
  'menu-bar-background-image': 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)',
  'menu-bar-background-image-dark': 'linear-gradient(to right, #8C0000,#991D00,#969600,#008C00,#002BA6,#4400A6,#8A00A6)'
};
const blockColors = {
  checkboxActiveBackground: '#ff4c4c',
  checkboxActiveBorder: '#cc3333'
};


/***/ }),

/***/ "./src/lib/themes/accent/red.js":
/*!**************************************!*\
  !*** ./src/lib/themes/accent/red.js ***!
  \**************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#ff4c4c',
  'motion-primary-transparent': '#ff4c4ce6',
  'motion-tertiary': '#cc3333',
  'looks-secondary': '#ff4c4c',
  'looks-secondary-light': '#fe9c9c',
  'looks-secondary-lighter': '#ffd7d7',
  'looks-transparent': '#ff4d4d59',
  'looks-light-transparent': '#ff4d4d26',
  'looks-secondary-dark': 'hsla(0, 42%, 51%, 1)',
  'looks-secondary-darker': 'hsl(0,30%,28%)',
  'looks-secondary-deep-dark': 'hsl(0,15%,11%)',
  'extensions-primary': 'hsla(10, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
  'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '#ff8c8c'
};
const blockColors = {
  checkboxActiveBackground: '#ff4c4c',
  checkboxActiveBorder: '#cc3333'
};


/***/ }),

/***/ "./src/lib/themes/accent/stars.js":
/*!****************************************!*\
  !*** ./src/lib/themes/accent/stars.js ***!
  \****************************************/
/*! exports provided: guiColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony import */ var _stars_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stars.svg */ "./src/lib/themes/accent/stars.svg");
/* harmony import */ var _stars_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stars_svg__WEBPACK_IMPORTED_MODULE_0__);
// Code taken from BlockScript

const guiColors = {
  'motion-primary': '#e6009b',
  'motion-primary-transparent': '#e6009be6',
  'motion-tertiary': '#b20077',
  'looks-secondary': '#e6009b',
  'looks-secondary-light': '#eda1d3',
  'looks-secondary-lighter': '#ffebf9',
  'looks-transparent': '#e6009b59',
  'looks-light-transparent': '#e675c026',
  'looks-secondary-dark': '#b8007b',
  'looks-secondary-darker': '#4e0035',
  'looks-secondary-deep-dark': '#2c001e',
  'data-primary': '#8d00ff',
  'extensions-primary': '#8d00ff',
  'extensions-tertiary': '#7200d0',
  'extensions-transparent': '#8d00ff35',
  'extensions-light': '#a63aff',
  'drop-highlight': '#e6009b',
  'menu-bar-background-image': "url('".concat(_stars_svg__WEBPACK_IMPORTED_MODULE_0___default.a, "')"),
  'menu-bar-background-repeat': 'repeat-x',
  'menu-bar-background-size': "contain"
};


/***/ }),

/***/ "./src/lib/themes/accent/stars.svg":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/stars.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/0589641b2c6f4bec8d47f5601fffbcdd.svg";

/***/ }),

/***/ "./src/lib/themes/blocks/colorful.js":
/*!*******************************************!*\
  !*** ./src/lib/themes/blocks/colorful.js ***!
  \*******************************************/
/*! exports provided: blockColors, customExtensionColors, extensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customExtensionColors", function() { return customExtensionColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
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
  numPadText: 'white',
  // Do not use hex here, it cannot be inlined with data-uri SVG
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
  primary: _primary => {
    const hsv = hex2hsv(_primary);
    hsv[2] = Math.max(hsv[2] - 70, 20);
    return hsv2hex(hsv);
  },
  secondary: () => '#30175C',
  tertiary: primary => primary,
  quaternary: primary => primary,
  categoryIconBackground: primary => customExtensionColors.primary(primary),
  categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};


/***/ }),

/***/ "./src/lib/themes/blocks/dark.js":
/*!***************************************!*\
  !*** ./src/lib/themes/blocks/dark.js ***!
  \***************************************/
/*! exports provided: blockColors, extensions, customExtensionColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customExtensionColors", function() { return customExtensionColors; });
/* harmony import */ var _tw_color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tw-color-utils */ "./src/lib/tw-color-utils.js");

const blockColors = {
  motion: {
    primary: '#0F1E33',
    secondary: '#4C4C4C',
    tertiary: '#4C97FF',
    quaternary: '#4C97FF'
  },
  looks: {
    primary: '#1E1433',
    secondary: '#4C4C4C',
    tertiary: '#9966FF',
    quaternary: '#9966FF'
  },
  sounds: {
    primary: '#291329',
    secondary: '#4C4C4C',
    tertiary: '#CF63CF',
    quaternary: '#CF63CF'
  },
  control: {
    primary: '#332205',
    secondary: '#4C4C4C',
    tertiary: '#FFAB19',
    quaternary: '#FFAB19'
  },
  event: {
    primary: '#332600',
    secondary: '#4C4C4C',
    tertiary: '#FFBF00',
    quaternary: '#FFBF00'
  },
  sensing: {
    primary: '#12232A',
    secondary: '#4C4C4C',
    tertiary: '#5CB1D6',
    quaternary: '#5CB1D6'
  },
  pen: {
    primary: '#03251C',
    secondary: '#4C4C4C',
    tertiary: '#0fBD8C',
    quaternary: '#0fBD8C'
  },
  operators: {
    primary: '#112611',
    secondary: '#4C4C4C',
    tertiary: '#59C059',
    quaternary: '#59C059'
  },
  data: {
    primary: '#331C05',
    secondary: '#4C4C4C',
    tertiary: '#FF8C1A',
    quaternary: '#FF8C1A'
  },
  data_lists: {
    primary: '#331405',
    secondary: '#4C4C4C',
    tertiary: '#FF661A',
    quaternary: '#FF661A'
  },
  more: {
    primary: '#331419',
    secondary: '#4C4C4C',
    tertiary: '#FF6680',
    quaternary: '#FF6680'
  },
  addons: {
    primary: '#0b3331',
    secondary: '#4C4C4C',
    tertiary: '#34e4d0',
    quaternary: '#34e4d0'
  },
  text: 'rgba(255, 255, 255, .7)',
  textFieldText: '#E5E5E5',
  textField: '#4C4C4C',
  menuHover: 'rgba(255, 255, 255, 0.3)'
};
const extensions = {};
const customExtensionColors = {
  primary: _primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__["hex2hsv"])(_primary);
    hsv[2] = Math.max(hsv[2] - 70, 20);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__["hsv2hex"])(hsv);
  },
  secondary: () => '#4C4C4C',
  tertiary: primary => primary,
  quaternary: primary => primary,
  categoryIconBackground: primary => customExtensionColors.primary(primary),
  categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};


/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg":
/*!****************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjQzMzggMzBDMjkuNTEzIDMwIDMxLjYzNjYgMjguMTU2OSAzMS4xNzkgMjUuODc0QzI4LjI5OTQgMTMuMDQzNiAyNy40MjU2IDkuODUxMzQgMjcuOTQ1NCA5LjYwNTQ3QzI4LjMxMjUgOS40MzE4MyAyOS4zNzQ2IDEwLjcyNzYgMzAuOTE2MiAxMS4xMzU5QzM0LjY0MTYgMTIuMTEyNiA0MC4yNzQyIDYuNDA3NTEgMzQuNTY1NSA3LjI5MTg2QzMyLjMyMjQgNy42MzkgMzAuMTU4NyA2LjIzODM2IDI4LjQ4NzkgNS4xNTY3OUMyNS45MDcyIDMuNDg2MiAyNC41MDI0IDIuNTc2ODQgMjUuNzk3NCAxMC4wNDUxQzI2LjQzNDkgMTMuNzAzNSAyNi45Njk3IDE2LjMyMzEgMjcuMzQ3NSAxOC4xNzM5QzI3Ljk5NTcgMjEuMzQ5NCAyOC4xODE5IDIyLjI2MTYgMjcuNjMyNSAyMi4yNzQxQzI3LjMzMjEgMjIuMTUyIDI3LjAzMjcgMjIuMDU3OCAyNi42OTU3IDIxLjk3MjRDMjYuMDg4IDIxLjgyMjUgMjUuNDUxNiAyMS43MzgyIDI0LjgwNTMgMjEuNzM4MkMyMS43MjcxIDIxLjczODIgMTkuNjAzNiAyMy41ODkyIDIwLjA2MjEgMjUuODc0QzIwLjUxMDcgMjguMTU2OSAyMy4zNjQ2IDMwIDI2LjQzMzggMzBaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOS40Mzg2MSAzNi4wMDAxQzEyLjUwNjUgMzYuMDAwMSAxNC42MzAyIDM0LjE0OCAxNC4xODE3IDMxLjg2NDJDMTEuMzAzMiAxOS4wMzM2IDEwLjQyOTkgMTUuODQxNiAxMC45NDk2IDE1LjU5NThDMTEuMzE2NiAxNS40MjIyIDEyLjM3ODMgMTYuNzE3NyAxMy45MTkgMTcuMTI2QzE3LjY0MjggMTguMTEzNiAyMy4yNzI5IDEyLjM5ODUgMTcuNTY2NyAxMy4yOTE4QzE1LjMyNDggMTMuNjM4NiAxMy4xNjIzIDEyLjIzODIgMTEuNDkyMiAxMS4xNTY5QzguOTEyMzcgOS40ODYzNiA3LjUwNzk3IDguNTc2OTggOC44MDI1MSAxNi4wNDUxQzkuNDQyOTQgMTkuNzI4NiA5Ljk3OTggMjIuMzU5NCAxMC4zNTggMjQuMjEyNUMxMC45OTEyIDI3LjMxNTQgMTEuMTc5NSAyOC4yMzg0IDEwLjY2NDQgMjguMjczMkM5Ljc4NDMyIDI3LjkyNTggOC44MTIzOSAyNy43MjkzIDcuODEwODIgMjcuNzI5M0M0LjczNCAyNy43MjkzIDIuNjExMzQgMjkuNTgwNCAzLjA1OTc4IDMxLjg2NDJDMy41MTgwOSAzNC4xNDggNi4zNzA2OSAzNi4wMDAxIDkuNDM4NjEgMzYuMDAwMVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg":
/*!**************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/b631383707e87a454b479dedaa8ca014.svg";

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg":
/*!**********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIxLjY2OTNWMzQuMjgzNEMxNiAzNS44MTUxIDE0IDM2LjUzNTkgMTIuOCAzNS41NDQ4TDEwLjIgMzMuMzgyNEM5LjIgMzIuNTcxNSA4IDMyLjIxMTEgNi43IDMyLjIxMTFINi4zQzUgMzIuMjExMSA0IDMxLjMxMDEgNCAzMC4xMzg4VjI1LjkwNDFDNCAyNC43MzI4IDUgMjMuODMxOCA2LjMgMjMuODMxOEg2LjdDOCAyMy44MzE4IDkuMiAyMy4zODEzIDEwLjEgMjIuNjYwNEwxMi44IDIwLjQ5OEMxNCAxOS40MTY4IDE2IDIwLjIyNzcgMTYgMjEuNjY5M1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yNCA0QzE5LjU4MTcgNCAxNiA3LjU4MTcyIDE2IDEyQzE2IDE1LjExNDcgMTcuNzc5OSAxNy44MTM2IDIwLjM3ODEgMTkuMTM1MUMyMC4yMDk1IDIwLjkwODcgMTkuNjU2NCAyMS42NjU1IDE5LjMwNDIgMjIuMTQ3M0MxOS4xMjY1IDIyLjM5MDQgMTkgMjIuNTYzNSAxOSAyMi43NjE5QzE5IDIzLjQyODYgMTkuNjY2NyAyMy40Mjg2IDE5LjY2NjcgMjMuNDI4NkMyMC42MTMyIDIzLjQyODYgMjMuNTgxMyAyMi4yNjIzIDI1LjQwOTcgMjBIMjhDMzIuNDE4MyAyMCAzNiAxNi40MTgzIDM2IDEyQzM2IDcuNTgxNzIgMzIuNDE4MyA0IDI4IDRIMjRaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEI4RTY5Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg":
/*!********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/ef4a998a82a8567de018baa4607bc6a0.svg";

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg":
/*!***********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjI1IiBjeD0iMzIiIGN5PSIyNiIgcj0iNCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgb3BhY2l0eT0iMC41IiBjeD0iMzIiIGN5PSIyMiIgcj0iNCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgb3BhY2l0eT0iMC43NSIgY3g9IjMyIiBjeT0iMTgiIHI9IjQiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSIzMiIgY3k9IjE0IiByPSI0IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEI4RTY5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3IDE3LjVMMjIuNCAxNEMyMi45IDEzLjcgMjMuNSAxMy44IDIzLjggMTQuM0MyMy45IDE0LjUgMjQgMTQuNyAyNCAxNC44VjI1LjFDMjQgMjUuNyAyMy41IDI2LjEgMjMgMjYuMUMyMi44IDI2LjEgMjIuNiAyNiAyMi41IDI1LjlMMTcgMjIuNlYyNEMxNyAyNi4yIDE1LjIgMjguMSAxMyAyOC4xSDQuMUMxLjggMjggMCAyNi4yIDAgMjRWMTYuMUMwIDEzLjggMS44IDEyIDQuMSAxMkgxM0MxNS4yIDEyIDE3IDEzLjggMTcgMTYuMVYxNy41WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast.js":
/*!************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast.js ***!
  \************************************************/
/*! exports provided: blockColors, extensions, customExtensionColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customExtensionColors", function() { return customExtensionColors; });
/* harmony import */ var _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./high-contrast-media/extensions/musicIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./high-contrast-media/extensions/penIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./high-contrast-media/extensions/text2speechIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./high-contrast-media/extensions/translateIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./high-contrast-media/extensions/videoSensingIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tw_color_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tw-color-utils */ "./src/lib/tw-color-utils.js");






const blockColors = {
  motion: {
    primary: '#80B5FF',
    secondary: '#B3D2FF',
    tertiary: '#3373CC',
    quaternary: '#CCE1FF'
  },
  looks: {
    primary: '#CCB3FF',
    secondary: '#DDCCFF',
    tertiary: '#774DCB',
    quaternary: '#EEE5FF'
  },
  sounds: {
    primary: '#E19DE1',
    secondary: '#FFB3FF',
    tertiary: '#BD42BD',
    quaternary: '#FFCCFF'
  },
  control: {
    primary: '#FFBE4C',
    secondary: '#FFDA99',
    tertiary: '#CF8B17',
    quaternary: '#FFE3B3'
  },
  event: {
    primary: '#FFD966',
    secondary: '#FFECB3',
    tertiary: '#CC9900',
    quaternary: '#FFF2CC'
  },
  sensing: {
    primary: '#85C4E0',
    secondary: '#AED8EA',
    tertiary: '#2E8EB8',
    quaternary: '#C2E2F0'
  },
  pen: {
    primary: '#13ECAF',
    secondary: '#75F0CD',
    tertiary: '#0B8E69',
    quaternary: '#A3F5DE'
  },
  operators: {
    primary: '#7ECE7E',
    secondary: '#B5E3B5',
    tertiary: '#389438',
    quaternary: '#DAF1DA'
  },
  data: {
    primary: '#FFA54C',
    secondary: '#FFCC99',
    tertiary: '#DB6E00',
    quaternary: '#FFE5CC'
  },
  // This is not a new category, but rather for differentiation
  // between lists and scalar variables.
  data_lists: {
    primary: '#FF9966',
    secondary: '#FFCAB0',
    // I don't think this is used, b/c we don't have any droppable fields in list blocks
    tertiary: '#E64D00',
    quaternary: '#FFDDCC'
  },
  more: {
    primary: '#FF99AA',
    secondary: '#FFCCD5',
    tertiary: '#FF3355',
    quaternary: '#FFE5EA'
  },
  addons: {
    primary: '#34e4d0',
    secondary: '#71e2d5',
    tertiary: '#29b2a2',
    quaternary: '#9ee2db'
  },
  text: '#000000',
  textFieldText: '#000000',
  // Text inside of inputs e.g. 90 in [point in direction (90)]
  toolboxText: '#000000',
  // Toolbox text, color picker text (used to be #575E75)
  blackText: '#000000',
  // The color that the category menu label (e.g. 'motion', 'looks', etc.) changes to on hover
  toolboxHover: '#3373CC',
  insertionMarker: '#000000',
  insertionMarkerOpacity: 0.2,
  fieldShadow: 'rgba(255, 255, 255, 0.3)',
  dragShadowOpacity: 0.6,
  menuHover: 'rgba(255, 255, 255, 0.3)'
};
const extensions = {
  music: {
    blockIconURI: _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  pen: {
    blockIconURI: _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  text2speech: {
    blockIconURI: _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  translate: {
    blockIconURI: _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  videoSensing: {
    blockIconURI: _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }
};
const clamp = (value, lower, upper) => Math.max(lower, Math.min(upper, value));
const customExtensionColors = {
  primary: _primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(_primary);
    hsv[1] = clamp(hsv[1] - 20, 0, 50);
    hsv[2] = clamp(hsv[2] + 20, 80, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  secondary: primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[1] = clamp(hsv[1] - 40, 0, 50);
    hsv[2] = clamp(hsv[2] + 20, 80, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  tertiary: primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[2] = clamp(hsv[2] - 20, 0, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  quaternary: primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[1] = clamp(hsv[1] - 60, 0, 100);
    hsv[2] = clamp(hsv[2] + 20, 90, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  categoryIconBackground: primary => customExtensionColors.primary(primary),
  categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};


/***/ }),

/***/ "./src/lib/themes/blocks/three.js":
/*!****************************************!*\
  !*** ./src/lib/themes/blocks/three.js ***!
  \****************************************/
/*! exports provided: blockColors, extensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
const blockColors = {
  motion: {
    primary: '#4C97FF',
    secondary: '#4280D7',
    tertiary: '#3373CC',
    quaternary: '#3373CC'
  },
  looks: {
    primary: '#9966FF',
    secondary: '#855CD6',
    tertiary: '#774DCB',
    quaternary: '#774DCB'
  },
  sounds: {
    primary: '#CF63CF',
    secondary: '#C94FC9',
    tertiary: '#BD42BD',
    quaternary: '#BD42BD'
  },
  control: {
    primary: '#FFAB19',
    secondary: '#EC9C13',
    tertiary: '#CF8B17',
    quaternary: '#CF8B17'
  },
  event: {
    primary: '#FFBF00',
    secondary: '#E6AC00',
    tertiary: '#CC9900',
    quaternary: '#CC9900'
  },
  sensing: {
    primary: '#5CB1D6',
    secondary: '#47A8D1',
    tertiary: '#2E8EB8',
    quaternary: '#2E8EB8'
  },
  pen: {
    primary: '#0fBD8C',
    secondary: '#0DA57A',
    tertiary: '#0B8E69',
    quaternary: '#0B8E69'
  },
  operators: {
    primary: '#59C059',
    secondary: '#46B946',
    tertiary: '#389438',
    quaternary: '#389438'
  },
  data: {
    primary: '#FF8C1A',
    secondary: '#FF8000',
    tertiary: '#DB6E00',
    quaternary: '#DB6E00'
  },
  // This is not a new category, but rather for differentiation
  // between lists and scalar variables.
  data_lists: {
    primary: '#FF661A',
    secondary: '#FF5500',
    tertiary: '#E64D00',
    quaternary: '#E64D00'
  },
  more: {
    primary: '#FF6680',
    secondary: '#FF4D6A',
    tertiary: '#FF3355',
    quaternary: '#FF3355'
  },
  addons: {
    primary: '#29beb8',
    secondary: '#3aa8a4',
    tertiary: '#3aa8a4',
    quaternary: '#3aa8a4'
  },
  text: '#FFFFFF',
  workspace: '#F9F9F9',
  toolboxHover: '#4C97FF',
  toolboxSelected: '#E9EEF2',
  toolboxText: '#575E75',
  toolbox: '#FFFFFF',
  blackText: '#575E75',
  flyout: '#F9F9F9',
  scrollbar: '#CECDCE',
  scrollbarHover: '#CECDCE',
  textField: '#FFFFFF',
  textFieldText: '#575E75',
  insertionMarker: '#000000',
  insertionMarkerOpacity: 0.2,
  dragShadowOpacity: 0.6,
  stackGlow: '#FFF200',
  stackGlowSize: 4,
  stackGlowOpacity: 1,
  replacementGlow: '#FFFFFF',
  replacementGlowSize: 2,
  replacementGlowOpacity: 1,
  colourPickerStroke: '#FFFFFF',
  // CSS colours: support RGBA
  fieldShadow: 'rgba(255, 255, 255, 0.3)',
  dropDownShadow: 'rgba(0, 0, 0, .3)',
  numPadBackground: '#547AB2',
  numPadBorder: '#435F91',
  numPadActiveBackground: '#435F91',
  numPadText: 'white',
  // Do not use hex here, it cannot be inlined with data-uri SVG
  valueReportBackground: '#FFFFFF',
  valueReportBorder: '#AAAAAA',
  valueReportForeground: '#000000',
  menuHover: 'rgba(0, 0, 0, 0.2)',
  contextMenuBackground: '#ffffff',
  contextMenuBorder: '#cccccc',
  contextMenuForeground: '#000000',
  contextMenuActiveBackground: '#d6e9f8',
  contextMenuDisabledForeground: '#cccccc',
  flyoutLabelColor: '#575E75',
  checkboxInactiveBackground: '#ffffff',
  checkboxInactiveBorder: '#c8c8c8',
  checkboxActiveBackground: '#4C97FF',
  checkboxActiveBorder: '#3373CC',
  checkboxCheck: '#ffffff',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#ffffff',
  buttonForeground: '#575E75',
  zoomIconFilter: 'none',
  gridColor: '#dddddd'
};
const extensions = {};


/***/ }),

/***/ "./src/lib/themes/global-styles.css":
/*!******************************************!*\
  !*** ./src/lib/themes/global-styles.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./global-styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/themes/global-styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/lib/themes/gui/dark.js":
/*!************************************!*\
  !*** ./src/lib/themes/gui/dark.js ***!
  \************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'color-scheme': 'dark',
  'ui-primary': '#111111',
  'ui-secondary': '#1e1e1e',
  'ui-tertiary': '#2e2e2e',
  'ui-modal-overlay': '#333333aa',
  'ui-modal-background': '#111111',
  'ui-modal-foreground': '#eeeeee',
  'ui-modal-header-background': '#333333',
  'ui-modal-header-foreground': '#ffffff',
  'ui-white': '#111111',
  'ui-black-transparent': '#ffffff26',
  'text-primary': '#eeeeee',
  'menu-bar-background': 'var(--looks-secondary-dark)',
  'assets-background': '#111111',
  'input-background': '#1e1e1e',
  'popover-background': '#1e1e1e',
  'badge-background': '#16202c',
  'badge-border': '#203652',
  'menu-bar-icon-filter': 'none',
  'fullscreen-background': '#111111',
  'fullscreen-accent': '#111111',
  'page-background': '#111111',
  'page-foreground': '#eeeeee',
  'project-title-inactive': 'var(--ui-secondary)',
  'project-title-hover': '#ffffff3f',
  'link-color': '#44aaff',
  'filter-icon-black': 'invert(100%)',
  'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
  'filter-icon-white': 'brightness(0) invert(100%)',
  'paint-filter-icon-gray': 'brightness(1.7)'
};
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#1e1e1e',
  toolboxSelected: '#1e1e1e',
  toolboxText: '#cccccc',
  toolbox: '#111111',
  flyout: '#111111',
  scrollbar: '#666666',
  valueReportBackground: '#1e1e1e',
  valueReportBorder: '#333333',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#111111',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#2e2e2e',
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


/***/ }),

/***/ "./src/lib/themes/gui/deep-dark.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/gui/deep-dark.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'color-scheme': 'dark',
  'ui-primary': '#030303',
  'ui-secondary': '#080808',
  'ui-tertiary': '#080808',
  'ui-modal-overlay': '#111111aa',
  'ui-modal-background': '#030303',
  'ui-modal-foreground': '#e0e0e0',
  'ui-modal-header-background': '#111111',
  'ui-modal-header-foreground': '#ffffff',
  'ui-white': '#030303',
  'ui-black-transparent': '#ffffff26',
  'text-primary': '#eeeeee',
  'menu-bar-background': 'var(--looks-secondary-dark)',
  'assets-background': '#030303',
  'input-background': '#080808',
  'popover-background': '#080808',
  'badge-background': '#16202c',
  'badge-border': '#203652',
  'menu-bar-icon-filter': 'none',
  'fullscreen-background': '#030303',
  'fullscreen-accent': '#030303',
  'page-background': '#030303',
  'page-foreground': '#eeeeee',
  'project-title-inactive': 'var(--ui-secondary)',
  'project-title-hover': '#ffffff3f',
  'link-color': '#00397D',
  'filter-icon-black': 'invert(100%)',
  'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
  'filter-icon-white': 'brightness(0) invert(100%)',
  'paint-filter-icon-gray': 'brightness(1.7)'
};
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#080808',
  toolboxSelected: '#080808',
  toolboxText: '#cccccc',
  toolbox: '#030303',
  flyout: '#030303',
  scrollbar: '#666666',
  valueReportBackground: '#080808',
  valueReportBorder: '#111111',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#030303',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#080808',
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


/***/ }),

/***/ "./src/lib/themes/gui/light.js":
/*!*************************************!*\
  !*** ./src/lib/themes/gui/light.js ***!
  \*************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'color-scheme': 'light',
  'ui-primary': 'hsla(215, 100%, 95%, 1)',
  /* #E5F0FF */
  'ui-secondary': 'hsla(215, 75%, 95%, 1)',
  /* #E9F1FC */
  'ui-tertiary': 'hsla(215, 50%, 90%, 1)',
  /* #D9E3F2 */

  'ui-modal-overlay': 'var(--motion-primary-transparent)',
  'ui-modal-background': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */
  'ui-modal-foreground': 'hsla(225, 15%, 40%, 1)',
  /* #575E75 */
  'ui-modal-header-background': 'var(--looks-secondary)',
  'ui-modal-header-foreground': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */

  'ui-white': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */
  'ui-white-dim': 'hsla(0, 100%, 100%, 0.75)',
  /* 25% transparent version of ui-white */
  'ui-white-transparent': 'hsla(0, 100%, 100%, 0.25)',
  /* 25% transparent version of ui-white */
  'ui-transparent': 'hsla(0, 100%, 100%, 0)',
  /* 25% transparent version of ui-white */

  'ui-black-transparent': 'hsla(0, 0%, 0%, 0.15)',
  /* 15% transparent version of black */

  'text-primary': 'hsla(225, 15%, 40%, 1)',
  /* #575E75 */
  'text-primary-transparent': 'hsla(225, 15%, 40%, 0.75)',
  'motion-primary': 'hsla(215, 100%, 65%, 1)',
  /* #4C97FF */
  'motion-primary-transparent': 'hsla(215, 100%, 65%, 0.9)',
  /* 90% transparent version of motion-primary */
  'motion-tertiary': 'hsla(215, 60%, 50%, 1)',
  /* #3373CC */

  'looks-secondary': 'hsla(260, 60%, 60%, 1)',
  /* #855CD6 */
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)',
  /* 35% transparent version of looks-tertiary */
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)',
  /* 15% transparent version of looks-tertiary */
  'looks-secondary-dark': 'hsla(260, 42%, 51%, 1)',
  /* #714EB6 */

  'red-primary': 'hsla(20, 100%, 55%, 1)',
  /* #FF661A */
  'red-tertiary': 'hsla(20, 100%, 45%, 1)',
  /* #E64D00 */

  'sound-primary': 'hsla(300, 53%, 60%, 1)',
  /* #CF63CF */
  'sound-tertiary': 'hsla(300, 48%, 50%, 1)',
  /* #BD42BD */

  'control-primary': 'hsla(38, 100%, 55%, 1)',
  /* #FFAB19 */

  'data-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */

  'pen-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'pen-transparent': 'hsla(163, 85%, 40%, 0.25)',
  /* #0FBD8C */
  'pen-tertiary': 'hsla(163, 86%, 30%, 1)',
  /* #0B8E69 */

  'error-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */
  'error-light': 'hsla(30, 100%, 70%, 1)',
  /* #FFB366 */
  'error-transparent': 'hsla(30, 100%, 55%, 0.25)',
  /* #FF8C1A */

  'extensions-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'extensions-tertiary': 'hsla(163, 85%, 30%, 1)',
  /* #0B8E69 */
  'extensions-transparent': 'hsla(163, 85%, 40%, 0.35)',
  /* 35% transparent version of extensions-primary */
  'extensions-light': 'hsla(163, 57%, 85%, 1)',
  /* opaque version of extensions-transparent, on white bg */

  'drop-highlight': 'hsla(215, 100%, 77%, 1)',
  /* lighter than motion-primary */

  'menu-bar-background': 'var(--looks-secondary)',
  'menu-bar-background-image': 'none',
  'menu-bar-foreground': '#ffffff',
  'menu-bar-icon-filter': 'none',
  'assets-background': '#ffffff',
  'input-background': '#ffffff',
  'popover-background': '#ffffff',
  'shadow': 'hsla(0, 0%, 0%, 0.15)',
  'badge-background': '#dbebff',
  'badge-border': '#b9d6ff',
  'fullscreen-background': '#ffffff',
  'fullscreen-accent': '#e8edf1',
  'page-background': '#ffffff',
  'page-foreground': '#000000',
  'project-title-inactive': 'var(--ui-white-transparent)',
  'project-title-hover': '#ffffff7f',
  'link-color': '#2255dd',
  'filter-icon-black': 'none',
  'filter-icon-gray': 'grayscale(100%)',
  'filter-icon-white': 'none',
  'paint-ui-pane-border': 'var(--ui-black-transparent)',
  'paint-text-primary': 'var(--text-primary)',
  'paint-form-border': 'var(--ui-black-transparent)',
  'paint-looks-secondary': 'var(--looks-secondary)',
  'paint-looks-transparent': 'var(--looks-transparent)',
  'paint-input-background': 'var(--input-background)',
  'paint-popover-background': 'var(--popover-background)',
  'paint-filter-icon-gray': 'none'
};
const blockColors = {
  gridColor: 'transparent'
};


/***/ }),

/***/ "./src/lib/themes/gui/midnight.js":
/*!****************************************!*\
  !*** ./src/lib/themes/gui/midnight.js ***!
  \****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony import */ var _modern_dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modern-dark */ "./src/lib/themes/gui/modern-dark.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const guiColors = _objectSpread(_objectSpread({}, _modern_dark__WEBPACK_IMPORTED_MODULE_0__["guiColors"]), {}, {
  'ui-primary': '#000000',
  'ui-secondary': '#000000',
  'ui-tertiary': '#222222',
  'menu-bar-background': 'var(--looks-secondary-dark)',
  'ui-white': '#000000',
  'assets-background': '#000000',
  'input-background': '#0a0a0a',
  'popover-background': '#0a0a0a',
  'fullscreen-background': '#000000',
  'fullscreen-accent': '#000000',
  'page-background': '#000000'
});
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#000000',
  toolboxSelected: '#0a0a0a',
  toolboxText: '#cccccc',
  toolbox: '#000000',
  flyout: '#000000',
  scrollbar: '#666666',
  valueReportBackground: '#000000',
  valueReportBorder: '#222222',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#000000',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#121212',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#000000',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#111111',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%) grayscale(100%) brightness(140%)',
  gridColor: 'transparent'
};


/***/ }),

/***/ "./src/lib/themes/gui/modern-dark.js":
/*!*******************************************!*\
  !*** ./src/lib/themes/gui/modern-dark.js ***!
  \*******************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony import */ var _modern_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modern-light */ "./src/lib/themes/gui/modern-light.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const guiColors = _objectSpread(_objectSpread({}, _modern_light__WEBPACK_IMPORTED_MODULE_0__["guiColors"]), {}, {
  "color-scheme": "dark",
  'ui-primary': 'var(--looks-secondary-deep-dark)',
  'ui-secondary': '#1d1d1d',
  'ui-tertiary': '#191919',
  'ui-modal-overlay': '#191919aa',
  'ui-modal-background': '#000000',
  'ui-modal-foreground': '#eeeeee',
  'ui-modal-header-background': '#000000',
  'ui-modal-header-foreground': '#ffffff',
  'ui-white': '#000000',
  'ui-black-transparent': '#ffffff26',
  'text-primary': '#ffffff',
  'assets-background': '#111111',
  'input-background': '#000000',
  'popover-background': '#000000',
  'badge-background': '#232323',
  'badge-border': '#000000',
  "menu-bar-background": "#000000",
  "menu-bar-foreground": "white",
  "menu-bar-background-image": "none",
  "menu-bar-hover": "#fff2",
  "menu-bar-icon-filter": "",
  'progress-bar-outer': 'var(--looks-secondary-deep-dark)',
  'fullscreen-background': '#000000',
  'fullscreen-accent': '#000000',
  'page-background': '#000000',
  'page-foreground': '#ffffff',
  'project-title-inactive': 'var(--ui-secondary)',
  'project-title-hover': '#ffffff3f',
  "feedback-background": "var(--looks-secondary-dark)",
  "feedback-foreground": "white",
  'link-color': '#44aaff',
  'filter-icon-black': 'invert(100%)',
  'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
  'filter-icon-white': 'brightness(0) invert(100%)',
  'paint-filter-icon-gray': 'brightness(1.7)'
});
const blockColors = {
  insertionMarker: '#959595',
  workspace: '#000000',
  toolboxSelected: '#1e1e1e',
  toolboxText: '#939292',
  toolbox: '#111111',
  flyout: '#000000',
  scrollbar: '#4c4c4c',
  valueReportBackground: '#000000',
  valueReportBorder: '#252525',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#111111',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#161616',
  contextMenuDisabledForeground: '#373737',
  flyoutLabelColor: '#9f9f9f',
  checkboxInactiveBackground: '#222222',
  checkboxInactiveBorder: '#929292',
  buttonBorder: '#a8a8a8',
  buttonActiveBackground: '#222222',
  buttonForeground: '#8c8c8c',
  zoomIconFilter: 'invert(100%)',
  gridColor: 'transparent'
};


/***/ }),

/***/ "./src/lib/themes/gui/modern-light.js":
/*!********************************************!*\
  !*** ./src/lib/themes/gui/modern-light.js ***!
  \********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'color-scheme': 'light',
  'ui-primary': 'var(--looks-secondary-lighter)',
  'ui-secondary': 'rgb(229,229,229)',
  'ui-tertiary': 'rgb(200,200,200)',
  'ui-modal-overlay': 'var(--motion-primary-transparent)',
  'ui-modal-background': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */
  'ui-modal-foreground': 'hsl(0,0%,0%)',
  /* #575E75 */
  'ui-modal-header-background': 'white',
  'ui-modal-header-foreground': 'black',
  /* #FFFFFF */

  'ui-white': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */
  'ui-white-dim': 'hsla(0, 100%, 100%, 0.75)',
  /* 25% transparent version of ui-white */
  'ui-white-transparent': 'hsla(0, 100%, 100%, 0.25)',
  /* 25% transparent version of ui-white */
  'ui-transparent': 'hsla(0, 100%, 100%, 0)',
  /* 25% transparent version of ui-white */

  'ui-black-transparent': 'hsla(0, 0%, 0%, 0.15)',
  /* 15% transparent version of black */

  'text-primary': 'hsl(0,0%,0%)',
  /* #575E75 */
  'text-primary-transparent': 'hsla(0,0%,0%,0.75)',
  'motion-primary': 'hsla(215, 100%, 65%, 1)',
  /* #4C97FF */
  'motion-primary-transparent': 'hsla(215, 100%, 65%, 0.9)',
  /* 90% transparent version of motion-primary */
  'motion-tertiary': 'hsla(215, 60%, 50%, 1)',
  /* #3373CC */

  'looks-secondary': 'hsla(260, 60%, 60%, 1)',
  /* #855CD6 */
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)',
  /* 35% transparent version of looks-tertiary */
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)',
  /* 15% transparent version of looks-tertiary */
  'looks-secondary-dark': 'hsla(260, 42%, 51%, 1)',
  /* #714EB6 */

  'red-primary': 'hsla(20, 100%, 55%, 1)',
  /* #FF661A */
  'red-tertiary': 'hsla(20, 100%, 45%, 1)',
  /* #E64D00 */

  'sound-primary': 'hsla(300, 53%, 60%, 1)',
  /* #CF63CF */
  'sound-tertiary': 'hsla(300, 48%, 50%, 1)',
  /* #BD42BD */

  'control-primary': 'hsla(38, 100%, 55%, 1)',
  /* #FFAB19 */

  'data-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */

  'pen-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'pen-transparent': 'hsla(163, 85%, 40%, 0.25)',
  /* #0FBD8C */
  'pen-tertiary': 'hsla(163, 86%, 30%, 1)',
  /* #0B8E69 */

  'error-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */
  'error-light': 'hsla(30, 100%, 70%, 1)',
  /* #FFB366 */
  'error-transparent': 'hsla(30, 100%, 55%, 0.25)',
  /* #FF8C1A */

  'extensions-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'extensions-tertiary': 'hsla(163, 85%, 30%, 1)',
  /* #0B8E69 */
  'extensions-transparent': 'hsla(163, 85%, 40%, 0.35)',
  /* 35% transparent version of extensions-primary */
  'extensions-light': 'hsla(163, 57%, 85%, 1)',
  /* opaque version of extensions-transparent, on white bg */

  'drop-highlight': 'hsla(215, 100%, 77%, 1)',
  /* lighter than motion-primary */

  'menu-bar-background': 'white',
  'menu-bar-foreground': 'black',
  'menu-bar-background-image': 'var(--looks-secondary-light)',
  'menu-bar-icon-filter': 'invert(100%)',
  'menu-bar-icon-normal': 'invert(0%)',
  'progress-bar-outer': 'var(--looks-secondary-lighter)',
  'assets-background': '#ffffff',
  'input-background': '#ffffff',
  'popover-background': '#ffffff',
  'feedback-background': 'var(--looks-secondary-light)',
  'feedback-foreground': 'rgb(0,0,0)',
  'shadow': 'hsla(0, 0%, 0%, 0.15)',
  'badge-background': '#ffffff',
  'badge-border': '#d1d1d1',
  'fullscreen-background': '#ffffff',
  'fullscreen-accent': '#e3e3e3',
  'page-background': '#ffffff',
  'page-foreground': '#000000',
  'project-title-inactive': 'var(--ui-white-transparent)',
  'project-title-hover': '#ffffff7f',
  'link-color': '#2255dd',
  'filter-icon-black': 'none',
  'filter-icon-gray': 'grayscale(100%)',
  'filter-icon-white': 'none',
  'paint-ui-pane-border': 'var(--ui-black-transparent)',
  'paint-text-primary': 'var(--text-primary)',
  'paint-form-border': 'var(--ui-black-transparent)',
  'paint-looks-secondary': 'var(--looks-secondary-light)',
  'paint-looks-transparent': 'var(--looks-light-transparent)',
  'paint-input-background': 'var(--input-background)',
  'paint-popover-background': 'var(--popover-background)',
  'paint-filter-icon-gray': 'none'
};
const blockColors = {
  gridColor: 'transparent'
};


/***/ }),

/***/ "./src/lib/themes/guiHelpers.js":
/*!**************************************!*\
  !*** ./src/lib/themes/guiHelpers.js ***!
  \**************************************/
/*! exports provided: applyGuiColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyGuiColors", function() { return applyGuiColors; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/lib/themes/index.js");
/* harmony import */ var _addons_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../addons/hooks */ "./src/addons/hooks.js");
/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-styles.css */ "./src/lib/themes/global-styles.css");
/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_styles_css__WEBPACK_IMPORTED_MODULE_2__);



const BLOCK_COLOR_NAMES = [
// Corresponds to the name of the object in blockColors
'motion', 'looks', 'sounds', 'control', 'event', 'sensing', 'pen', 'operators', 'data', 'data_lists', 'more', 'addons'];

/**
 * @param {string} css CSS color or var(--...)
 * @returns {string} evaluated CSS
 */
const evaluateCSS = css => {
  const variableMatch = css.match(/^var\(([\w-]+)\)$/);
  if (variableMatch) {
    return document.documentElement.style.getPropertyValue(variableMatch[1]);
  }
  return css;
};

/**
 * @param {Theme} theme the theme
 */
const applyGuiColors = theme => {
  const doc = document.documentElement;
  const defaultGuiColors = ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light.getGuiColors();
  for (const [name, value] of Object.entries(defaultGuiColors)) {
    doc.style.setProperty("--".concat(name, "-default"), value);
  }
  const guiColors = theme.getGuiColors();
  for (const [name, value] of Object.entries(guiColors)) {
    doc.style.setProperty("--".concat(name), value);
  }
  const blockColors = theme.getBlockColors();
  doc.style.setProperty('--editorTheme3-blockText', blockColors.text);
  doc.style.setProperty('--editorTheme3-inputColor', blockColors.textField);
  doc.style.setProperty('--editorTheme3-inputColor-text', blockColors.textFieldText);
  for (const color of BLOCK_COLOR_NAMES) {
    doc.style.setProperty("--editorTheme3-".concat(color, "-primary"), blockColors[color].primary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-secondary"), blockColors[color].secondary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-tertiary"), blockColors[color].tertiary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-field-background"), blockColors[color].quaternary);
  }

  // Some browsers will color their interfaces to match theme-color, so if we make it the same color as our
  // menu bar, it'll look pretty cool.
  let metaThemeColor = document.head.querySelector('meta[name=theme-color]');
  if (!metaThemeColor) {
    metaThemeColor = document.createElement('meta');
    metaThemeColor.setAttribute('name', 'theme-color');
    document.head.appendChild(metaThemeColor);
  }
  metaThemeColor.setAttribute('content', evaluateCSS(guiColors['menu-bar-background']));

  // a horrible hack for icons...
  window.Recolor = {
    primary: guiColors['looks-secondary']
  };
  _addons_hooks__WEBPACK_IMPORTED_MODULE_1__["default"].recolorCallbacks.forEach(i => i());
};


/***/ }),

/***/ "./src/lib/themes/icons/tw-accent-rainbow.svg":
/*!****************************************************!*\
  !*** ./src/lib/themes/icons/tw-accent-rainbow.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/82aa0eba517b9756a9db4e3a9144723e.svg";

/***/ }),

/***/ "./src/lib/themes/icons/tw-accent-stars.svg":
/*!**************************************************!*\
  !*** ./src/lib/themes/icons/tw-accent-stars.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/73bdfee64cdf97022200bc10602ab9fd.svg";

/***/ }),

/***/ "./src/lib/themes/icons/tw-blocks-colorful.svg":
/*!*****************************************************!*\
  !*** ./src/lib/themes/icons/tw-blocks-colorful.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/99c18ed3fcf835ba2176971762abd9f7.svg";

/***/ }),

/***/ "./src/lib/themes/icons/tw-blocks-custom.svg":
/*!***************************************************!*\
  !*** ./src/lib/themes/icons/tw-blocks-custom.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL21hdGVyaWFsLWRlc2lnbi1pY29ucyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNyAxNGMtMS42NiAwLTMgMS4zNC0zIDMgMCAxLjMxLTEuMTYgMi0yIDIgLjkyIDEuMjIgMi40OSAyIDQgMiAyLjIxIDAgNC0xLjc5IDQtNCAwLTEuNjYtMS4zNC0zLTMtM3ptMTMuNzEtOS4zN2wtMS4zNC0xLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEw5IDEyLjI1IDExLjc1IDE1bDguOTYtOC45NmMuMzktLjM5LjM5LTEuMDIgMC0xLjQxeiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/lib/themes/icons/tw-blocks-dark.svg":
/*!*************************************************!*\
  !*** ./src/lib/themes/icons/tw-blocks-dark.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/3c06b74c80d1e6b1d210ca86c87cd326.svg";

/***/ }),

/***/ "./src/lib/themes/icons/tw-blocks-high-contrast.svg":
/*!**********************************************************!*\
  !*** ./src/lib/themes/icons/tw-blocks-high-contrast.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/e4dfc45f34b4606356c4c70ba14a96f0.svg";

/***/ }),

/***/ "./src/lib/themes/icons/tw-blocks-three.svg":
/*!**************************************************!*\
  !*** ./src/lib/themes/icons/tw-blocks-three.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/64e66a9dcf4b42a699f49e5973a4a62e.svg";

/***/ }),

/***/ "./src/lib/themes/icons/tw-midnight.svg":
/*!**********************************************!*\
  !*** ./src/lib/themes/icons/tw-midnight.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNC41ODIwNiIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCwwLDI0LjU4MjA2LDI0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzA3LjcwODk3LC0xNjgpIj48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTMwOCwxNjhoMjR2MjRoLTI0eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTMyMi4zMDc1OCwxNzkuNDcyOTdjLTIuMzg5MjksMi44MzAzMiAtNi41MDc5NSwzLjA4MzY3IC05LjE5MzQ0LDAuNTY1NTJjLTAuNTEwODMsLTAuNDc5IC0wLjkyODA3LC0xLjAxNzIyIC0xLjI2MDM5LC0xLjYwNDQyYzIuNTI0OTEsMS4yMDA5NCA1LjU5NTY5LDAuNTk4ODUgNy41MzQ4MywtMS42OTgyMmMxLjkzOTE0LC0yLjI5NzA3IDIuMTQ5MywtNS41ODE1NCAwLjcyMzgxLC04LjA4NDg0YzAuNTkyMDMsMC4yNzk1NiAxLjE0Nzc4LDAuNjUzNzEgMS42NTg2MSwxLjEzMjdjMi42ODU0OSwyLjUxODE1IDIuOTI1ODcsNi44NTg5NCAwLjUzNjU4LDkuNjg5MjZ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMzA3LjcwODk3LDE4NS4xNzIyOWMwLC0yLjE3OTQ0IDEuNjc2MzcsLTMuOTQ2MjIgMy43NDQyOSwtMy45NDYyMmMwLjcwNTg5LDAgMS4zNjYxNiwwLjIwNTg4IDEuOTI5NzEsMC41NjM3NWMwLjU5MDY5LC0wLjQxMDU4IDEuMjk4MjUsLTAuNjQ5NTQgMi4wNTg3NywtMC42NDk1NGMwLjI1Mzk5LDAgMC41MDIwOCwwLjAyNjY2IDAuNzQxODgsMC4wNzc0NmMwLjY3NTQ0LC0xLjAzMTQ2IDEuODA0NzIsLTEuNzA3NDIgMy4wODM4MSwtMS43MDc0MmMwLjk3MDg4LDAgMS44NTU0NiwwLjM4OTQ1IDIuNTIwNzYsMS4wMjgyMWMwLjY4MDU3LC0wLjczOTkyIDEuNjMzNjcsLTEuMTk5NzkgMi42ODg2OSwtMS4xOTk3OWMwLjUyNjcsMCAxLjAyODAxLDAuMTE0NjIgMS40ODI2OCwwLjMyMTQ4YzAuNjcyMjgsLTAuNjc3NDUgMS41ODM2MywtMS4wOTM1NiAyLjU4NzIsLTEuMDkzNTZjMi4wNjc5MSwwIDMuNzQ0MjksMS43NjY3OCAzLjc0NDI5LDMuOTQ2MjJjMCwyLjA4ODA3IC0xLjUzODc2LDMuNzk3MzUgLTMuNDg2MzYsMy45MzcwMWMtMC40NTM3NCwxLjY0MTA5IC0xLjg5MTYyLDIuODQwMiAtMy41OTUyMywyLjg0MDJjLTAuNzQ5OTgsMCAtMS40NDg0NiwtMC4yMzIzOSAtMi4wMzQxNCwtMC42MzI1OGMtMC42ODU5OSwwLjkwODI1IC0xLjc0NDA0LDEuNDkwNDUgLTIuOTMxMTEsMS40OTA0NWMtMC41ODUxOSwwIC0xLjEzOTAzLC0wLjE0MTQ5IC0xLjYzMjM5LC0wLjM5Mzc3Yy0wLjY4MjM3LDAuOTY3NzcgLTEuNzc1MzQsMS41OTQ4IC0zLjAwNzI3LDEuNTk0OGMtMS41MTM0OSwwIC0yLjgxNzIzLC0wLjk0NjQgLTMuNDA3NTQsLTIuMzA4MzJjLTAuMjQwMzgsMC4wNTEwNSAtMC40ODkwOSwwLjA3Nzg1IC0wLjc0MzczLDAuMDc3ODVjLTIuMDY3OTEsMCAtMy43NDQyOSwtMS43NjY3OCAtMy43NDQyOSwtMy45NDYyMnoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTIuMjkxMDMxNjgyMDU1OTczOjEyLjAwMDAwMzUzNzk2NTU5Ny0tPg=="

/***/ }),

/***/ "./src/lib/themes/icons/tw-moon.svg":
/*!******************************************!*\
  !*** ./src/lib/themes/icons/tw-moon.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNS4yNzExNCIgaGVpZ2h0PSIxNy43NDI5OSIgdmlld0JveD0iMCwwLDE1LjI3MTE0LDE3Ljc0Mjk5Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMyLjM2NDQzLC0xNzEuMTI4NSkiPjxnIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMjQzLjIwMDgzLDE3MS4zNDY4M2MwLjM0MzA3LDAuMDc2MjQgMC41OTk1MiwwLjM2MDQxIDAuNjQxMSwwLjcxMDQyYzAuMDQxNTgsMC4zNTAwMSAtMC4xMzg2MiwwLjY4OTYyIC0wLjQ1Mzk3LDAuODQ1NTZjLTIuMTAwMDUsMS4wNDY1NiAtMy41MzgyLDMuMjEyNDYgLTMuNTM4Miw1LjcxMTAzYzAsMy41MjA4NyAyLjg1NTUyLDYuMzc2MzggNi4zNzYzOSw2LjM3NjM4YzAuMTczMjcsMCAwLjM0MzA3LC0wLjAwNjkzIDAuNTEyODgsLTAuMDIwNzljMC4zNTAwMSwtMC4wMjc3MyAwLjY4MjY5LDAuMTY5OCAwLjgyNDc3LDAuNDg4NjJjMC4xNDIwOSwwLjMxODgyIDAuMDY5MzEsMC42OTY1NSAtMC4xODM2NywwLjkzOTEzYy0xLjU5NDEsMS41MzE3MiAtMy43NTk5OSwyLjQ3NDMyIC02LjE0NDIsMi40NzQzMmMtNC45MDAxMSwwIC04Ljg3MTUsLTMuOTcxMzggLTguODcxNSwtOC44NzE1YzAsLTQuOTAwMTEgMy45NzEzOCwtOC44NzE1IDguODcxNSwtOC44NzE1YzAuNjcyMjksMCAxLjMzMDczLDAuMDc2MjMgMS45NjQ5LDAuMjE4MzJ6Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6Ny42MzU1NzAwMDAwMDAwMDE6OC44NzE0OTUwMDAwMDAwMS0tPg=="

/***/ }),

/***/ "./src/lib/themes/icons/tw-palette.svg":
/*!*********************************************!*\
  !*** ./src/lib/themes/icons/tw-palette.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMi42NTU1NiIgaGVpZ2h0PSIyMi42NTExMyIgdmlld0JveD0iMCwwLDIyLjY1NTU2LDIyLjY1MTEzIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI4LjY3MjIyLC0xNjguNjc0NDMpIj48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTI1MS4zMjc3OCwxODBjMCwwLjAzOTgyIDAsMC4wNzk2MyAwLDAuMTE5NDVjLTAuMDE3NywxLjYxNDc4IC0xLjQ4NjQ4LDIuNzExOTQgLTMuMTAxMjYsMi43MTE5NGgtNC4zMzExNGMtMS4xNzIzNywwIC0yLjEyMzU1LDAuOTUxMTcgLTIuMTIzNTUsMi4xMjM1NWMwLDAuMTUwNDIgMC4wMTc3LDAuMjk2NDEgMC4wNDQyNCwwLjQzNzk4YzAuMDkyOTEsMC40NTEyNiAwLjI4NzU3LDAuODg0ODEgMC40Nzc4LDEuMzIyNzljMC4yNjk4NywwLjYxMDUyIDAuNTM1MzEsMS4yMTY2MSAwLjUzNTMxLDEuODU4MWMwLDEuNDA2ODUgLTAuOTU1NiwyLjY4NTQgLTIuMzYyNDUsMi43NDI5MmMtMC4xNTQ4NCwwLjAwNDQyIC0wLjMwOTY4LDAuMDA4ODUgLTAuNDY4OTQsMC4wMDg4NWMtNi4yNTU2MSwwIC0xMS4zMjU1NywtNS4wNjk5NiAtMTEuMzI1NTcsLTExLjMyNTU3YzAsLTYuMjU1NjEgNS4wNzQzOCwtMTEuMzI1NTcgMTEuMzI5OTksLTExLjMyNTU3YzYuMjU1NjEsMCAxMS4zMjU1Nyw1LjA2OTk2IDExLjMyNTU3LDExLjMyNTU3ek0yMzQuMzM5NDMsMTgxLjQxNTdjMCwtMC43ODMwNSAtMC42MzI2NCwtMS40MTU2OSAtMS40MTU2OSwtMS40MTU2OWMtMC43ODMwNSwwIC0xLjQxNTY5LDAuNjMyNjQgLTEuNDE1NjksMS40MTU2OWMwLDAuNzgzMDUgMC42MzI2NCwxLjQxNTY5IDEuNDE1NjksMS40MTU2OWMwLjc4MzA1LDAgMS40MTU2OSwtMC42MzI2NCAxLjQxNTY5LC0xLjQxNTY5ek0yMzQuMzM5NDMsMTc3LjE2ODYxYzAuNzgzMDUsMCAxLjQxNTY5LC0wLjYzMjY0IDEuNDE1NjksLTEuNDE1NjljMCwtMC43ODMwNSAtMC42MzI2NCwtMS40MTU3IC0xLjQxNTY5LC0xLjQxNTdjLTAuNzgzMDUsMCAtMS40MTU2OSwwLjYzMjY1IC0xLjQxNTY5LDEuNDE1N2MwLDAuNzgzMDUgMC42MzI2NCwxLjQxNTY5IDEuNDE1NjksMS40MTU2OXpNMjQxLjQxNzkxLDE3Mi45MjE1MmMwLC0wLjc4MzA1IC0wLjYzMjY1LC0xLjQxNTY5IC0xLjQxNTcsLTEuNDE1NjljLTAuNzgzMDUsMCAtMS40MTU2OSwwLjYzMjY0IC0xLjQxNTY5LDEuNDE1NjljMCwwLjc4MzA1IDAuNjMyNjQsMS40MTU2OSAxLjQxNTY5LDEuNDE1NjljMC43ODMwNSwwIDEuNDE1NywtMC42MzI2NCAxLjQxNTcsLTEuNDE1Njl6TTI0NS42NjUsMTc3LjE2ODYxYzAuNzgzMDUsMCAxLjQxNTY5LC0wLjYzMjY0IDEuNDE1NjksLTEuNDE1NjljMCwtMC43ODMwNSAtMC42MzI2NCwtMS40MTU3IC0xLjQxNTY5LC0xLjQxNTdjLTAuNzgzMDUsMCAtMS40MTU2OSwwLjYzMjY1IC0xLjQxNTY5LDEuNDE1N2MwLDAuNzgzMDUgMC42MzI2NCwxLjQxNTY5IDEuNDE1NjksMS40MTU2OXoiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMS4zMjc3Nzk5OTk5OTk5OToxMS4zMjU1NjUwMDAwMDAwMTItLT4="

/***/ }),

/***/ "./src/lib/themes/icons/tw-sun.svg":
/*!*****************************************!*\
  !*** ./src/lib/themes/icons/tw-sun.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMS4yNzk0OSIgaGVpZ2h0PSIyMS4yODMxOCIgdmlld0JveD0iMCwwLDIxLjI3OTQ5LDIxLjI4MzE4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI5LjM2MDI1LC0xNjkuMzU4NDEpIj48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTIzOS45OTgxNiwxNjkuMzYyMTFjMC4zMTAyNywwIDAuNjAyMDgsMC4xNjI1MiAwLjc2MDkxLDAuNDMyMTZsMi4wNTAwMSwzLjQyMDM3bDMuODcxMDEsLTAuOTcxNDRjMC4zMDI4OSwtMC4wNzM4NyAwLjYyNDI0LDAuMDE0NzggMC44NDIxNywwLjIzMjcxYzAuMjE3OTMsMC4yMTc5MyAwLjMwNjU4LDAuNTQyOTcgMC4yMzI3LDAuODQyMTZsLTAuOTcxNDUsMy44NjczMmwzLjQyNDA4LDIuMDUwMDFjMC4yNjU5NCwwLjE1ODgzIDAuNDMyMTYsMC40NTA2NCAwLjQzMjE2LDAuNzYwOTFjMCwwLjMxMDI3IC0wLjE2MjUyLDAuNjAyMDcgLTAuNDMyMTYsMC43NjA5bC0zLjQyNDA4LDIuMDUzNzFsMC45NzE0NSwzLjg2NzMyYzAuMDczODcsMC4zMDI4OSAtMC4wMTQ3NywwLjYyNDIzIC0wLjIzMjcsMC44NDIxNmMtMC4yMTc5MywwLjIxNzkzIC0wLjU0Mjk4LDAuMzEwMjcgLTAuODQyMTcsMC4yMzY0bC0zLjg2NzMxLC0wLjk3MTQ0bC0yLjA1MDAyLDMuNDI0MDdjLTAuMTU4ODMsMC4yNjU5NCAtMC40NTA2NCwwLjQzMjE2IC0wLjc2MDkxLDAuNDMyMTZjLTAuMzEwMjcsMCAtMC42MDIwOCwtMC4xNjI1MiAtMC43NjA5MSwtMC40MzIxNmwtMi4wNTM3MSwtMy40MjQwN2wtMy44NjczMSwwLjk3MTQ0Yy0wLjMwMjg5LDAuMDczODcgLTAuNjIwNTUsLTAuMDE0NzggLTAuODQyMTcsLTAuMjMyNzFjLTAuMjIxNjIsLTAuMjE3OTMgLTAuMzEwMjcsLTAuNTQyOTcgLTAuMjM2MzksLTAuODQ1ODZsMC45Njc3NSwtMy44NjczMmwtMy40MjAzOCwtMi4wNTAwMWMtMC4yNjU5NCwtMC4xNjI1MiAtMC40Mjg0NywtMC40NTA2NCAtMC40Mjg0NywtMC43NjA5MWMwLC0wLjMxMDI3IDAuMTYyNTIsLTAuNjAyMDggMC40MzIxNiwtMC43NjA5MWwzLjQyMDM4LC0yLjA1MDAxbC0wLjk3MTQ0LC0zLjg3MTAxYy0wLjA3Mzg3LC0wLjMwMjg5IDAuMDExMDgsLTAuNjIwNTQgMC4yMzI3LC0wLjg0MjE2YzAuMjIxNjIsLTAuMjIxNjIgMC41NDI5OCwtMC4zMDY1OCAwLjg0NTg3LC0wLjIzMjcxbDMuODY3MzEsMC45Njc3NmwyLjA1MDAyLC0zLjQyMDM4bDAuMDY2NDksLTAuMDk2MDRjMC4xNjYyMSwtMC4yMTA1NCAwLjQyMTA5LC0wLjMzNjEzIDAuNjk0NDIsLTAuMzM2MTN6TTIzOS45OTgxNiwxNzQuNjgxMDVjLTIuOTM2NTEsMCAtNS4zMTg5NSwyLjM4MjQ0IC01LjMxODk1LDUuMzE4OTVjMCwyLjkzNjUxIDIuMzgyNDQsNS4zMTg5NSA1LjMxODk1LDUuMzE4OTVjMi45MzY1MSwwIDUuMzE4OTUsLTIuMzgyNDQgNS4zMTg5NSwtNS4zMTg5NWMwLC0yLjkzNjUxIC0yLjM4MjQ0LC01LjMxODk1IC01LjMxODk1LC01LjMxODk1ek0yMzkuOTk4MTYsMTgzLjU0NTk3Yy0xLjk1NzY3LDAgLTMuNTQ1OTYsLTEuNTg4MjkgLTMuNTQ1OTYsLTMuNTQ1OTZjMCwtMS45NTc2NyAxLjU4ODI5LC0zLjU0NTk2IDMuNTQ1OTYsLTMuNTQ1OTZjMS45NTc2NywwIDMuNTQ1OTYsMS41ODgyOSAzLjU0NTk2LDMuNTQ1OTZjMCwxLjk1NzY3IC0xLjU4ODI5LDMuNTQ1OTYgLTMuNTQ1OTYsMy41NDU5NnoiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMC42Mzk3NDUwMDAwMDAwMDU6MTAuNjQxNTkwMDAwMDAwMDA4LS0+"

/***/ }),

/***/ "./src/lib/themes/index.js":
/*!*********************************!*\
  !*** ./src/lib/themes/index.js ***!
  \*********************************/
/*! exports provided: Theme, defaultBlockColors, ACCENT_RED, ACCENT_PURPLE, ACCENT_BLUE, ACCENT_ORANGE, ACCENT_CYAN, ACCENT_LIME, ACCENT_MAGENTA, ACCENT_FUCHSIA, ACCENT_INDIGO, ACCENT_INDIGO_BLUE, ACCENT_CORRUPTED_BLUE, ACCENT_GAIA_BLUE, ACCENT_GREEN, ACCENT_RAINBOW, ACCENT_COTTON_CANDY, ACCENT_CUSTOM, ACCENT_MAP, AccentIcons, AccentOptions, GUI_LIGHT, GUI_MODERN_LIGHT, GUI_DARK, GUI_MODERN_DARK, GUI_DEEP_DARK, GUI_MIDNIGHT, GUI_MAP, GuiIcons, GuiOptions, BLOCKS_THREE, BLOCKS_DARK, BLOCKS_HIGH_CONTRAST, BLOCKS_COLORFUL, BLOCKS_CUSTOM, BLOCKS_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBlockColors", function() { return defaultBlockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_RED", function() { return ACCENT_RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_PURPLE", function() { return ACCENT_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_BLUE", function() { return ACCENT_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_ORANGE", function() { return ACCENT_ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_CYAN", function() { return ACCENT_CYAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_LIME", function() { return ACCENT_LIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_MAGENTA", function() { return ACCENT_MAGENTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_FUCHSIA", function() { return ACCENT_FUCHSIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_INDIGO", function() { return ACCENT_INDIGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_INDIGO_BLUE", function() { return ACCENT_INDIGO_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_CORRUPTED_BLUE", function() { return ACCENT_CORRUPTED_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_GAIA_BLUE", function() { return ACCENT_GAIA_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_GREEN", function() { return ACCENT_GREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_RAINBOW", function() { return ACCENT_RAINBOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_COTTON_CANDY", function() { return ACCENT_COTTON_CANDY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_CUSTOM", function() { return ACCENT_CUSTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_MAP", function() { return ACCENT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccentIcons", function() { return AccentIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccentOptions", function() { return AccentOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_LIGHT", function() { return GUI_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_MODERN_LIGHT", function() { return GUI_MODERN_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_DARK", function() { return GUI_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_MODERN_DARK", function() { return GUI_MODERN_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_DEEP_DARK", function() { return GUI_DEEP_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_MIDNIGHT", function() { return GUI_MIDNIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_MAP", function() { return GUI_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiIcons", function() { return GuiIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiOptions", function() { return GuiOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_THREE", function() { return BLOCKS_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_DARK", function() { return BLOCKS_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_HIGH_CONTRAST", function() { return BLOCKS_HIGH_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_COLORFUL", function() { return BLOCKS_COLORFUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_CUSTOM", function() { return BLOCKS_CUSTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_MAP", function() { return BLOCKS_MAP; });
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _accent_purple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accent/purple */ "./src/lib/themes/accent/purple.js");
/* harmony import */ var _accent_blue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accent/blue */ "./src/lib/themes/accent/blue.js");
/* harmony import */ var _accent_red__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accent/red */ "./src/lib/themes/accent/red.js");
/* harmony import */ var _accent_cyan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accent/cyan */ "./src/lib/themes/accent/cyan.js");
/* harmony import */ var _accent_lime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accent/lime */ "./src/lib/themes/accent/lime.js");
/* harmony import */ var _accent_magenta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accent/magenta */ "./src/lib/themes/accent/magenta.js");
/* harmony import */ var _accent_orange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accent/orange */ "./src/lib/themes/accent/orange.js");
/* harmony import */ var _accent_green__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./accent/green */ "./src/lib/themes/accent/green.js");
/* harmony import */ var _accent_indigo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./accent/indigo */ "./src/lib/themes/accent/indigo.js");
/* harmony import */ var _accent_indigo_blue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./accent/indigo-blue */ "./src/lib/themes/accent/indigo-blue.js");
/* harmony import */ var _accent_corrupted_blue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./accent/corrupted-blue */ "./src/lib/themes/accent/corrupted-blue.js");
/* harmony import */ var _accent_gaia_blue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./accent/gaia-blue */ "./src/lib/themes/accent/gaia-blue.js");
/* harmony import */ var _accent_magenta_purple__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./accent/magenta-purple */ "./src/lib/themes/accent/magenta-purple.js");
/* harmony import */ var _accent_cottoncandy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./accent/cottoncandy */ "./src/lib/themes/accent/cottoncandy.js");
/* harmony import */ var _accent_rainbow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./accent/rainbow */ "./src/lib/themes/accent/rainbow.js");
/* harmony import */ var _accent_stars__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./accent/stars */ "./src/lib/themes/accent/stars.js");
/* harmony import */ var _accent_custom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./accent/custom */ "./src/lib/themes/accent/custom.js");
/* harmony import */ var _gui_light__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gui/light */ "./src/lib/themes/gui/light.js");
/* harmony import */ var _gui_modern_light__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gui/modern-light */ "./src/lib/themes/gui/modern-light.js");
/* harmony import */ var _gui_dark__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gui/dark */ "./src/lib/themes/gui/dark.js");
/* harmony import */ var _gui_modern_dark__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./gui/modern-dark */ "./src/lib/themes/gui/modern-dark.js");
/* harmony import */ var _gui_midnight__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./gui/midnight */ "./src/lib/themes/gui/midnight.js");
/* harmony import */ var _gui_deep_dark__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./gui/deep-dark */ "./src/lib/themes/gui/deep-dark.js");
/* harmony import */ var _blocks_three__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./blocks/three */ "./src/lib/themes/blocks/three.js");
/* harmony import */ var _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./blocks/high-contrast */ "./src/lib/themes/blocks/high-contrast.js");
/* harmony import */ var _blocks_dark__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./blocks/dark */ "./src/lib/themes/blocks/dark.js");
/* harmony import */ var _blocks_colorful__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./blocks/colorful */ "./src/lib/themes/blocks/colorful.js");
/* harmony import */ var _icons_tw_accent_rainbow_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./icons/tw-accent-rainbow.svg */ "./src/lib/themes/icons/tw-accent-rainbow.svg");
/* harmony import */ var _icons_tw_accent_rainbow_svg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_accent_rainbow_svg__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _icons_tw_accent_stars_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./icons/tw-accent-stars.svg */ "./src/lib/themes/icons/tw-accent-stars.svg");
/* harmony import */ var _icons_tw_accent_stars_svg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_accent_stars_svg__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _icons_tw_sun_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./icons/tw-sun.svg */ "./src/lib/themes/icons/tw-sun.svg");
/* harmony import */ var _icons_tw_sun_svg__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_sun_svg__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _icons_tw_moon_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./icons/tw-moon.svg */ "./src/lib/themes/icons/tw-moon.svg");
/* harmony import */ var _icons_tw_moon_svg__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_moon_svg__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _icons_tw_midnight_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./icons/tw-midnight.svg */ "./src/lib/themes/icons/tw-midnight.svg");
/* harmony import */ var _icons_tw_midnight_svg__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_midnight_svg__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _icons_tw_palette_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./icons/tw-palette.svg */ "./src/lib/themes/icons/tw-palette.svg");
/* harmony import */ var _icons_tw_palette_svg__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_palette_svg__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _icons_tw_blocks_three_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./icons/tw-blocks-three.svg */ "./src/lib/themes/icons/tw-blocks-three.svg");
/* harmony import */ var _icons_tw_blocks_three_svg__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_blocks_three_svg__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _icons_tw_blocks_high_contrast_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./icons/tw-blocks-high-contrast.svg */ "./src/lib/themes/icons/tw-blocks-high-contrast.svg");
/* harmony import */ var _icons_tw_blocks_high_contrast_svg__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_blocks_high_contrast_svg__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _icons_tw_blocks_dark_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./icons/tw-blocks-dark.svg */ "./src/lib/themes/icons/tw-blocks-dark.svg");
/* harmony import */ var _icons_tw_blocks_dark_svg__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_blocks_dark_svg__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _icons_tw_blocks_colorful_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./icons/tw-blocks-colorful.svg */ "./src/lib/themes/icons/tw-blocks-colorful.svg");
/* harmony import */ var _icons_tw_blocks_colorful_svg__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_blocks_colorful_svg__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _icons_tw_blocks_custom_svg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./icons/tw-blocks-custom.svg */ "./src/lib/themes/icons/tw-blocks-custom.svg");
/* harmony import */ var _icons_tw_blocks_custom_svg__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_blocks_custom_svg__WEBPACK_IMPORTED_MODULE_39__);
var _Theme;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








































const ACCENT_PURPLE = 'purple';
const ACCENT_BLUE = 'blue';
const ACCENT_RED = 'red';
const ACCENT_CYAN = 'cyan';
const ACCENT_LIME = 'lime';
const ACCENT_ORANGE = 'orange';
const ACCENT_MAGENTA = 'magenta';
const ACCENT_FUCHSIA = 'fuchsia';
const ACCENT_INDIGO = 'indigo';
const ACCENT_INDIGO_BLUE = 'indigoblue';
const ACCENT_CORRUPTED_BLUE = 'corruptedblue';
const ACCENT_GAIA_BLUE = 'gaiablue';
const ACCENT_GREEN = 'green';
const ACCENT_RAINBOW = 'rainbow';
const ACCENT_COTTON_CANDY = 'cottoncandy';
const ACCENT_STARS = 'stars';
const ACCENT_CUSTOM = 'custom';
const ACCENT_MAP = {
  [ACCENT_PURPLE]: _accent_purple__WEBPACK_IMPORTED_MODULE_2__,
  [ACCENT_BLUE]: _accent_blue__WEBPACK_IMPORTED_MODULE_3__,
  [ACCENT_RED]: _accent_red__WEBPACK_IMPORTED_MODULE_4__,
  [ACCENT_CYAN]: _accent_cyan__WEBPACK_IMPORTED_MODULE_5__,
  [ACCENT_LIME]: _accent_lime__WEBPACK_IMPORTED_MODULE_6__,
  [ACCENT_ORANGE]: _accent_orange__WEBPACK_IMPORTED_MODULE_8__,
  [ACCENT_MAGENTA]: _accent_magenta__WEBPACK_IMPORTED_MODULE_7__,
  [ACCENT_FUCHSIA]: _accent_magenta_purple__WEBPACK_IMPORTED_MODULE_14__,
  [ACCENT_INDIGO]: _accent_indigo__WEBPACK_IMPORTED_MODULE_10__,
  [ACCENT_INDIGO_BLUE]: _accent_indigo_blue__WEBPACK_IMPORTED_MODULE_11__,
  [ACCENT_CORRUPTED_BLUE]: _accent_corrupted_blue__WEBPACK_IMPORTED_MODULE_12__,
  [ACCENT_GAIA_BLUE]: _accent_gaia_blue__WEBPACK_IMPORTED_MODULE_13__,
  [ACCENT_GREEN]: _accent_green__WEBPACK_IMPORTED_MODULE_9__,
  [ACCENT_RAINBOW]: _accent_rainbow__WEBPACK_IMPORTED_MODULE_16__,
  [ACCENT_STARS]: _accent_stars__WEBPACK_IMPORTED_MODULE_17__,
  [ACCENT_CUSTOM]: _accent_custom__WEBPACK_IMPORTED_MODULE_18__,
  [ACCENT_COTTON_CANDY]: _accent_cottoncandy__WEBPACK_IMPORTED_MODULE_15__
};
const AccentOptions = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  [ACCENT_INDIGO]: {
    "id": "tw.accent.indigo",
    "defaultMessage": "Indigo"
  },
  [ACCENT_MAGENTA]: {
    "id": "tw.accent.magenta",
    "defaultMessage": "Magenta"
  },
  [ACCENT_ORANGE]: {
    "id": "tw.accent.orange",
    "defaultMessage": "Orange"
  },
  [ACCENT_GREEN]: {
    "id": "tw.accent.green",
    "defaultMessage": "Green"
  },
  [ACCENT_RED]: {
    "id": "tw.accent.red",
    "defaultMessage": "Red"
  },
  [ACCENT_PURPLE]: {
    "id": "tw.accent.purple",
    "defaultMessage": "Purple"
  },
  [ACCENT_BLUE]: {
    "id": "tw.accent.blue",
    "defaultMessage": "Blue"
  },
  [ACCENT_CYAN]: {
    "id": "tw.accent.cyan",
    "defaultMessage": "Cyan"
  },
  [ACCENT_LIME]: {
    "id": "tw.accent.lime",
    "defaultMessage": "Lime"
  },
  [ACCENT_FUCHSIA]: {
    "id": "tw.accent.fuchsia",
    "defaultMessage": "Fuchsia"
  },
  [ACCENT_INDIGO_BLUE]: {
    "id": "tw.accent.indigoblue",
    "defaultMessage": "Serene Blue"
  },
  [ACCENT_CORRUPTED_BLUE]: {
    "id": "tw.accent.corruptedblue",
    "defaultMessage": "Corrupted Blue"
  },
  [ACCENT_GAIA_BLUE]: {
    "id": "tw.accent.gaiablue",
    "defaultMessage": "Gaia Blue"
  },
  [ACCENT_COTTON_CANDY]: {
    "id": "tw.accent.cottoncandy",
    "defaultMessage": "Cotton Candy"
  },
  [ACCENT_STARS]: {
    "id": "tw.accent.stars",
    "defaultMessage": "Stars"
  },
  [ACCENT_RAINBOW]: {
    "id": "tw.accent.rainbow",
    "defaultMessage": "Rainbow"
  }
});
const AccentIcons = {
  //[ACCENT_RAINBOW]: rainbowIcon,
  //[ACCENT_STARS]: starsIcon
};
const ACCENT_DEFAULT = ACCENT_INDIGO;
const GUI_LIGHT = 'light';
const GUI_MODERN_LIGHT = 'modern-light';
const GUI_DARK = 'dark';
const GUI_MODERN_DARK = 'modern-dark';
const GUI_MIDNIGHT = 'midnight';
const GUI_DEEP_DARK = 'deep-dark';
const GUI_MAP = {
  [GUI_LIGHT]: _gui_light__WEBPACK_IMPORTED_MODULE_19__,
  [GUI_MODERN_LIGHT]: _gui_modern_light__WEBPACK_IMPORTED_MODULE_20__,
  [GUI_DARK]: _gui_dark__WEBPACK_IMPORTED_MODULE_21__,
  [GUI_MODERN_DARK]: _gui_modern_dark__WEBPACK_IMPORTED_MODULE_22__,
  [GUI_MIDNIGHT]: _gui_midnight__WEBPACK_IMPORTED_MODULE_23__,
  [GUI_DEEP_DARK]: _gui_deep_dark__WEBPACK_IMPORTED_MODULE_24__
};
const GuiOptions = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  [GUI_MODERN_LIGHT]: {
    "id": "tw.gui.light",
    "defaultMessage": "PotentiaMod - Light"
  },
  [GUI_LIGHT]: {
    "id": "tw.gui.classiclight",
    "defaultMessage": "Light"
  },
  [GUI_MODERN_DARK]: {
    "id": "tw.gui.dark",
    "defaultMessage": "PotentiaMod - Dark"
  },
  [GUI_DARK]: {
    "id": "tw.gui.classicdark",
    "defaultMessage": "Dark"
  },
  [GUI_DEEP_DARK]: {
    "id": "tw.gui.deepdark",
    "defaultMessage": "Deep Dark"
  },
  [GUI_MIDNIGHT]: {
    "id": "tw.gui.midnight",
    "defaultMessage": "Amoled"
  }
});
const GuiIcons = {
  [GUI_LIGHT]: _icons_tw_sun_svg__WEBPACK_IMPORTED_MODULE_31___default.a,
  [GUI_MODERN_LIGHT]: _icons_tw_palette_svg__WEBPACK_IMPORTED_MODULE_34___default.a,
  [GUI_DARK]: _icons_tw_moon_svg__WEBPACK_IMPORTED_MODULE_32___default.a,
  [GUI_MODERN_DARK]: _icons_tw_palette_svg__WEBPACK_IMPORTED_MODULE_34___default.a,
  [GUI_DEEP_DARK]: _icons_tw_palette_svg__WEBPACK_IMPORTED_MODULE_34___default.a,
  [GUI_MIDNIGHT]: _icons_tw_palette_svg__WEBPACK_IMPORTED_MODULE_34___default.a
};
const GUI_DEFAULT = GUI_LIGHT;
const BLOCKS_THREE = 'three';
const BLOCKS_DARK = 'dark';
const BLOCKS_HIGH_CONTRAST = 'high-contrast';
const BLOCKS_COLORFUL = 'colorful';
const BLOCKS_CUSTOM = 'custom';
const BLOCKS_DEFAULT = BLOCKS_THREE;
const defaultBlockColors = _blocks_three__WEBPACK_IMPORTED_MODULE_25__["blockColors"];
const BLOCKS_MAP = {
  [BLOCKS_THREE]: {
    blocksMediaFolder: 'blocks-media/default',
    colors: _blocks_three__WEBPACK_IMPORTED_MODULE_25__["blockColors"],
    extensions: _blocks_three__WEBPACK_IMPORTED_MODULE_25__["extensions"],
    customExtensionColors: {},
    useForStage: true
  },
  [BLOCKS_HIGH_CONTRAST]: {
    blocksMediaFolder: 'blocks-media/high-contrast',
    colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_26__["blockColors"], defaultBlockColors),
    extensions: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_26__["extensions"],
    customExtensionColors: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_26__["customExtensionColors"],
    useForStage: true
  },
  [BLOCKS_DARK]: {
    blocksMediaFolder: 'blocks-media/default',
    colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_dark__WEBPACK_IMPORTED_MODULE_27__["blockColors"], defaultBlockColors),
    extensions: _blocks_dark__WEBPACK_IMPORTED_MODULE_27__["extensions"],
    customExtensionColors: _blocks_dark__WEBPACK_IMPORTED_MODULE_27__["customExtensionColors"],
    useForStage: false
  },
  [BLOCKS_COLORFUL]: {
    blocksMediaFolder: 'blocks-media/default',
    colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_colorful__WEBPACK_IMPORTED_MODULE_28__["blockColors"], defaultBlockColors),
    extensions: _blocks_colorful__WEBPACK_IMPORTED_MODULE_28__["extensions"],
    customExtensionColors: _blocks_colorful__WEBPACK_IMPORTED_MODULE_28__["customExtensionColors"],
    useForStage: false
  },
  [BLOCKS_CUSTOM]: {
    // to be filled by editor-theme3 addon
    blocksMediaFolder: 'blocks-media/default',
    colors: _blocks_three__WEBPACK_IMPORTED_MODULE_25__["blockColors"],
    extensions: {},
    customExtensionColors: {},
    useForStage: false
  }
};
const BlockIcons = {
  [BLOCKS_THREE]: _icons_tw_blocks_three_svg__WEBPACK_IMPORTED_MODULE_35___default.a,
  [BLOCKS_HIGH_CONTRAST]: _icons_tw_blocks_high_contrast_svg__WEBPACK_IMPORTED_MODULE_36___default.a,
  [BLOCKS_DARK]: _icons_tw_blocks_dark_svg__WEBPACK_IMPORTED_MODULE_37___default.a,
  [BLOCKS_COLORFUL]: _icons_tw_blocks_colorful_svg__WEBPACK_IMPORTED_MODULE_38___default.a,
  [BLOCKS_CUSTOM]: _icons_tw_blocks_custom_svg__WEBPACK_IMPORTED_MODULE_39___default.a
};
const BlockOptions = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  [BLOCKS_THREE]: {
    "id": "tw.blockColors.three",
    "defaultMessage": "Original"
  },
  [BLOCKS_HIGH_CONTRAST]: {
    "id": "tw.blockColors.highContrast",
    "defaultMessage": "High Contrast"
  },
  [BLOCKS_DARK]: {
    "id": "tw.blockColors.dark",
    "defaultMessage": "Dark"
  },
  [BLOCKS_COLORFUL]: {
    "id": "tw.blockColors.colorful",
    "defaultMessage": "Colorful (Beta)"
  },
  [BLOCKS_CUSTOM]: {
    "id": "tw.blockColors.custom",
    "defaultMessage": "Customize in Addon Settings"
  }
});
let themeObjectsCreated = 0;
class Theme {
  constructor(accent, gui, blocks, wallpaper, font) {
    // do not modify these directly
    /** @readonly */
    this.id = ++themeObjectsCreated;
    /** @readonly */
    this.accent = Object.prototype.hasOwnProperty.call(ACCENT_MAP, accent) ? accent : ACCENT_DEFAULT;
    /** @readonly */
    this.gui = Object.prototype.hasOwnProperty.call(GUI_MAP, gui) ? gui : GUI_DEFAULT;
    /** @readonly */
    this.blocks = Object.prototype.hasOwnProperty.call(BLOCKS_MAP, blocks) ? blocks : BLOCKS_DEFAULT;
    /** @readonly */
    this.wallpaper = wallpaper || {
      url: null,
      opaque: 0.6
    };
    /** @readonly */
    this.font = font || {
      font: null
    };
  }
  set(what, to) {
    if (what === 'accent') {
      return new Theme(to, this.gui, this.blocks, this.wallpaper, this.font);
    } else if (what === 'gui') {
      return new Theme(this.accent, to, this.blocks, this.wallpaper, this.font);
    } else if (what === 'blocks') {
      return new Theme(this.accent, this.gui, to, this.wallpaper, this.font);
    } else if (what === 'wallpaper') {
      return new Theme(this.accent, this.gui, this.blocks, to, this.font);
    } else if (what === 'font') {
      return new Theme(this.accent, this.gui, this.blocks, this.wallpaper, to);
    }
    throw new Error("Unknown theme property: ".concat(what));
  }
  getBlocksMediaFolder() {
    return BLOCKS_MAP[this.blocks].blocksMediaFolder;
  }
  getGuiColors() {
    return lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, Object.hasOwn(this.accent, 'primaryColor') ? ACCENT_MAP[ACCENT_CUSTOM].getGuiColors(this.accent.primaryColor, this.accent.secondaryColor, this.accent.tertiaryColor, this.accent.gradient) : ACCENT_MAP[this.accent].guiColors, GUI_MAP[this.gui].guiColors, _gui_light__WEBPACK_IMPORTED_MODULE_19__["guiColors"]);
  }
  getBlockColors() {
    let blockColors = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, Object.hasOwn(this.accent, 'primaryColor') ? ACCENT_MAP[ACCENT_CUSTOM].getBlockColors(this.accent.primaryColor, this.accent.secondaryColor) : ACCENT_MAP[this.accent].blockColors, GUI_MAP[this.gui].blockColors, BLOCKS_MAP[this.blocks].colors);
    if (this.wallpaper.url !== null) {
      blockColors = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({
        workspace: blockColors.workspace + Math.round(this.wallpaper.opaque * 255).toString(16).padStart(2, 0)
      }, blockColors);
    }
    return blockColors;
  }
  getExtensions() {
    return BLOCKS_MAP[this.blocks].extensions;
  }
  isDark() {
    return this.getGuiColors()['color-scheme'] === 'dark';
  }
  getStageBlockColors() {
    if (BLOCKS_MAP[this.blocks].useForStage) {
      return this.getBlockColors();
    }
    return Theme.light.getBlockColors();
  }
  getCustomExtensionColors() {
    return BLOCKS_MAP[this.blocks].customExtensionColors;
  }
}
_Theme = Theme;
_defineProperty(Theme, "light", new _Theme(ACCENT_DEFAULT, GUI_LIGHT, BLOCKS_DEFAULT, null, null));
_defineProperty(Theme, "dark", new _Theme(ACCENT_DEFAULT, GUI_DARK, BLOCKS_DEFAULT, null, null));
_defineProperty(Theme, "highContrast", new _Theme(ACCENT_DEFAULT, GUI_DEFAULT, BLOCKS_HIGH_CONTRAST, null, null));


/***/ }),

/***/ "./src/lib/themes/themePersistance.js":
/*!********************************************!*\
  !*** ./src/lib/themes/themePersistance.js ***!
  \********************************************/
/*! exports provided: onSystemPreferenceChange, detectTheme, persistTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSystemPreferenceChange", function() { return onSystemPreferenceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectTheme", function() { return detectTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistTheme", function() { return persistTheme; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/lib/themes/index.js");

const matchMedia = query => window.matchMedia ? window.matchMedia(query) : null;
const PREFERS_HIGH_CONTRAST_QUERY = matchMedia('(prefers-contrast: more)');
const PREFERS_DARK_QUERY = matchMedia('(prefers-color-scheme: dark)');
const STORAGE_KEY = 'tw:theme';

/**
 * @returns {Theme} detected theme
 */
const systemPreferencesTheme = () => {
  if (PREFERS_HIGH_CONTRAST_QUERY && PREFERS_HIGH_CONTRAST_QUERY.matches) {
    return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].highContrast;
  }
  if (PREFERS_DARK_QUERY && PREFERS_DARK_QUERY.matches) {
    return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].dark;
  }
  return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light;
};

/**
 * @param {function} onChange callback; no guarantees about arguments
 * @returns {function} call to remove event listeners to prevent memory leak
 */
const onSystemPreferenceChange = onChange => {
  if (!PREFERS_HIGH_CONTRAST_QUERY || !PREFERS_DARK_QUERY ||
  // Some old browsers don't support addEventListener on media queries
  !PREFERS_HIGH_CONTRAST_QUERY.addEventListener || !PREFERS_DARK_QUERY.addEventListener) {
    return () => {};
  }
  PREFERS_HIGH_CONTRAST_QUERY.addEventListener('change', onChange);
  PREFERS_DARK_QUERY.addEventListener('change', onChange);
  return () => {
    PREFERS_HIGH_CONTRAST_QUERY.removeEventListener('change', onChange);
    PREFERS_DARK_QUERY.removeEventListener('change', onChange);
  };
};

/**
 * @returns {Theme} the theme
 */
const detectTheme = () => {
  const systemPreferences = systemPreferencesTheme();
  try {
    const local = localStorage.getItem(STORAGE_KEY);

    // Migrate legacy preferences
    if (local === 'dark') {
      return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].dark;
    }
    if (local === 'light') {
      return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light;
    }
    const parsed = JSON.parse(local);
    // Any invalid values in storage will be handled by Theme itself
    return new ___WEBPACK_IMPORTED_MODULE_0__["Theme"](parsed.accent || systemPreferences.accent, parsed.gui || systemPreferences.gui, parsed.blocks || systemPreferences.blocks, parsed.wallpaper || null, parsed.font || null);
  } catch (e) {
    // ignore
  }
  return systemPreferences;
};

/**
 * @param {Theme} theme the theme
 */
const persistTheme = theme => {
  const systemPreferences = systemPreferencesTheme();
  const nonDefaultSettings = {};
  if (theme.accent !== systemPreferences.accent) {
    nonDefaultSettings.accent = theme.accent;
  }
  if (theme.gui !== systemPreferences.gui) {
    nonDefaultSettings.gui = theme.gui;
  }
  // custom blocks are managed by addon at runtime, don't save here
  if (theme.blocks !== systemPreferences.blocks && theme.blocks !== ___WEBPACK_IMPORTED_MODULE_0__["BLOCKS_CUSTOM"]) {
    nonDefaultSettings.blocks = theme.blocks;
  }
  if (theme.wallpaper.url !== null) {
    nonDefaultSettings.wallpaper = theme.wallpaper;
  }
  if (theme.font.font !== null) {
    nonDefaultSettings.font = theme.font;
  }
  if (Object.keys(nonDefaultSettings).length === 0) {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  } else {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nonDefaultSettings));
    } catch (e) {
      // ignore
    }
  }
};


/***/ }),

/***/ "./src/lib/tw-color-utils.js":
/*!***********************************!*\
  !*** ./src/lib/tw-color-utils.js ***!
  \***********************************/
/*! exports provided: hex2hsv, hsv2hex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex2hsv", function() { return hex2hsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsv2hex", function() { return hsv2hex; });
/*
    Parts of this file are from https://github.com/Qix-/color-convert/blob/6b7dee5a168f76bf42c084fefa7bbe1a0941ad7e/conversions.js

    Copyright (c) 2011-2016 Heather Arthur <fayearthur@gmail.com>.
    Copyright (c) 2016-2021 Josh Junon <josh@junon.me>.

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @param {string} hex hex color code like #abc123
 * @returns {number[]} [r, g, b] in range [0-255]. Alpha channel is ignored.
 */
const hex2rgb = hex => {
  const parsed = Number.parseInt(hex.substring(1), 16);
  return [parsed >> 16 & 255, parsed >> 8 & 255, parsed & 255];
};

/**
 * @param {number[]} rgb [r, g, b] in range [0-255]
 * @returns {string} hex color code like #123abc
 */
const rgb2hex = rgb => {
  const number = rgb[0] << 16 | rgb[1] << 8 | rgb[2];
  return "#".concat(number.toString(16).padStart(6, '0'));
};

/**
 * @param {number[]} rgb [r, g, b] in range [0-255]
 * @returns {number[]} [h, s, v] in range [0-360] for h, [0-100] for s, v
 */
const rgb2hsv = rgb => {
  let rdif;
  let gdif;
  let bdif;
  let h;
  let s;
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const v = Math.max(r, g, b);
  const diff = v - Math.min(r, g, b);
  const diffc = c => (v - c) / 6 / diff + 1 / 2;
  if (diff === 0) {
    h = 0;
    s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);
    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif;
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return [h * 360, s * 100, v * 100];
};

/**
 * @param {number[]} hsv [h, s, v] in range [0-360] for h, [0-100] for s, v
 * @returns {number[]} [r, g, b] in range [0-255]
 */
const hsv2rgb = hsv => {
  const h = hsv[0] / 60;
  const s = hsv[1] / 100;
  let v = hsv[2] / 100;
  const hi = Math.floor(h) % 6;
  const f = h - Math.floor(h);
  const p = 255 * v * (1 - s);
  const q = 255 * v * (1 - s * f);
  const t = 255 * v * (1 - s * (1 - f));
  v *= 255;
  switch (hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
};
const hex2hsv = hex => rgb2hsv(hex2rgb(hex));
const hsv2hex = hsv => rgb2hex(hsv2rgb(hsv));


/***/ }),

/***/ "./src/playground/app-target.js":
/*!**************************************!*\
  !*** ./src/playground/app-target.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);


const appTarget = document.getElementById('app');

// Remove everything from the target to fix macOS Safari "Save Page As",
while (appTarget.firstChild) {
  appTarget.removeChild(appTarget.firstChild);
}
Object(react_modal__WEBPACK_IMPORTED_MODULE_1__["setAppElement"])(appTarget);
const render = children => {
  react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(children, appTarget);
  if (window.SplashEnd) {
    window.SplashEnd();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** ../locale-data/index.js (ignored) ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=404~addon-settings~credits~embed~index~pot-desktop.js.map