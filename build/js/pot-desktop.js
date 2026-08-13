var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"pot-desktop": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/pot-desktop/pot-desktop.jsx","vendors~404~addon-settings~credits~editor~embed~fullscreen~index~player~pot-desktop","vendors~404~credits~editor~embed~fullscreen~index~player~pot-desktop","vendors~404~credits~editor~fullscreen~index~player~pot-desktop","404~addon-settings~credits~embed~index~pot-desktop"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/button/button.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/button/button.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* make sure to keep these in sync with other constants,\ne.g. STAGE_DIMENSION_DEFAULTS in lib/screen-utils.js */\n\n/* layout contants from `layout-constants.js` */\n\n.button_outlined-button_2f510 {\n    cursor: pointer;\n    border-radius: calc(0.5rem / 2);\n    font-weight: bold;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding-left: .75rem;\n    padding-right: .75rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.button_icon_JhCuM {\n    height: 1.5rem;\n}\n\n[dir=\"ltr\"] .button_icon_JhCuM {\n    margin-right: .5rem;\n}\n\n[dir=\"rtl\"] .button_icon_JhCuM {\n    margin-left: .5rem;\n}\n\n.button_content_3y79K {\n    white-space: nowrap;\n}\n", ""]);

// exports
exports.locals = {
	"outlined-button": "button_outlined-button_2f510",
	"outlinedButton": "button_outlined-button_2f510",
	"icon": "button_icon_JhCuM",
	"content": "button_content_3y79K"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/potentia-footer/footer.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/potentia-footer/footer.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n/* make sure to keep these in sync with other constants,\ne.g. STAGE_DIMENSION_DEFAULTS in lib/screen-utils.js */\n\n/* layout contants from `layout-constants.js` */\n\nbody {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\nh2 {\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\np {\n    font-size: 1rem;\n    line-height: 1.5em;\n}\n\n.footer_footer_kqdXu {\n    margin-top: 60px;\n    background: var(--menu-bar-background);\n    background-image: var(--menu-bar-background-image);\n    border-top: 1px solid var(--ui-black-transparent);\n}\n\n.footer_inner_27osJ {\n    max-width: 1180px;\n    margin: 0 auto;\n    padding: 36px 22px 28px;\n    display: flex;\n    justify-content: space-between;\n    gap: 30px;\n    flex-wrap: wrap;\n}\n\n.footer_brand_TIyAH {\n    display: flex;\n    align-items: flex-start;\n    gap: 12px;\n    max-width: 320px;\n}\n\n.footer_logo_11pkn {\n    width: 800px;\n    height: 50px;\n    border-radius: 10px;\n    display: block;\n}\n\n.footer_wordmark_1H0l2 {\n\tcolor: var(--menu-bar-foreground);\n    font-weight: 800;\n    font-size: 18px;\n    letter-spacing: -0.02em;\n}\n\n.footer_tagline_1MzwJ {\n    margin: 5px 0 0;\n    color: var(--menu-bar-foreground);\n    font-size: 13px;\n    line-height: 1.5;\n}\n\n.footer_columns_1LikI {\n    display: flex;\n    gap: 56px;\n    flex-wrap: wrap;\n}\n\n.footer_column_2Roiy {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    min-width: 110px;\n}\n\n.footer_column_2Roiy a {\n    color: var(--menu-bar-foreground);\n    font-size: 13.5px;\n}\n\n.footer_columnTitle_oRDKt {\n    font-weight: 700;\n    font-size: 13px;\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n    color: var(--menu-bar-foreground);\n    margin-bottom: 2px;\n}\n\n.footer_iconRow_110de {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.footer_legal_3VqxX {\n    max-width: 1180px;\n    margin: 0 auto;\n    padding: 0 22px 26px;\n    color: var(--menu-bar-foreground);\n    font-size: 12.5px;\n}\n\n@media (max-width: 620px) {\n    .footer_inner_27osJ {\n        flex-direction: column;\n        gap: 26px;\n    }\n\n    .footer_columns_1LikI {\n        gap: 30px;\n    }\n}", ""]);

// exports
exports.locals = {
	"footer": "footer_footer_kqdXu",
	"inner": "footer_inner_27osJ",
	"brand": "footer_brand_TIyAH",
	"logo": "footer_logo_11pkn",
	"wordmark": "footer_wordmark_1H0l2",
	"tagline": "footer_tagline_1MzwJ",
	"columns": "footer_columns_1LikI",
	"column": "footer_column_2Roiy",
	"columnTitle": "footer_columnTitle_oRDKt",
	"iconRow": "footer_iconRow_110de",
	"legal": "footer_legal_3VqxX"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/potentia-header/header.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/potentia-header/header.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n/* make sure to keep these in sync with other constants,\ne.g. STAGE_DIMENSION_DEFAULTS in lib/screen-utils.js */\n\n/* layout contants from `layout-constants.js` */\n\n/*\n    Contains constants for the z-index values of elements that are part of the global stack context.\n    In other words, z-index values that are \"inside\" a component are not added here.\n    This prevents conflicts between identical z-index values in different components.\n*/\n\n/* Toolbox z-index: 40; set in scratch-blocks */\n\n/* tooltips should go over add buttons if they overlap */\n\n/* monitors go over add buttons */\n\n/* \"ask\" block text input goes above monitors */\n\n/* menu-bar should go over monitors, alerts and tutorials */\n\n/* behind menu-bar */\n\n/* Block drag z-index: 1000; default 50 is overriden in blocks.css */\n\n/* so it is draggable into other panes */\n\n/* behind modals */\n\n/* behind modals */\n\n/* in most interfaces, the context menu is always on top */\n\n.header_header_1WRiO {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: nowrap;\n    gap: 0.5rem;\n\n    /*\n        For most things, we shouldn't explicitly set height, and let the\n        content push the element to whatever fits. Using a fixed height\n        instead, will help us subtract the value we assign from the body,\n        adding up to a perfect 100%. This means we don't need to set\n        overflow: hidden, which makes it hard to debug. border-box\n        simplifies by all of this by removing padding from the equation.\n    */\n    box-sizing: border-box;\n    height: 3rem;\n\n    /*\n        @todo: This adds ~20px in Chrome, when scrolling to the right,\n        but fixes [FFx + Safari] [resize window down + scroll to the right] bug.\n        width: 100%;\n    */\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 0.75rem;\n    font-weight: bold;\n    background-color: var(--menu-bar-background);\n    background-image: var(--menu-bar-background-image);\n    color: var(--menu-bar-foreground);\n}\n\n.header_header_1WRiO.header_centered_28RFP {\n    justify-content: center;\n}\n\n.header_header_1WRiO.header_centered_28RFP > .header_header-menu_1vG_L {\n    flex-grow: 0;\n}\n\n.header_file-group_Jil2C, .header_main-group_2pU_u {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.header_file-group_Jil2C .header_header-item_2MeKO, .header_main-group_2pU_u .header_header-item_2MeKO {\n    padding: 0 0.5rem;\n}\n\n[dir=\"ltr\"] .header_header_1WRiO.header_centered_28RFP > .header_account-info-group_334zT {\n    flex-grow: 0;\n    position: absolute;\n    right: 0;\n}\n\n[dir=\"rtl\"] .header_header_1WRiO.header_centered_28RFP > .header_account-info-group_334zT {\n    flex-grow: 0;\n    position: absolute;\n    left: 0;\n}\n\n.header_inactive_1bKwV {\n    opacity: 0;\n}\n\n.header_scratch-logo_1N4Zf {\n    transition: height 0.3s ease;\n    height: 2.25rem;\n    color: inherit;\n\tfilter: initial;\n}\n\n.header_scratch-logo_1N4Zf img{\n\tfilter: initial;\n}\n\n/*\n.scratch-logo:hover {\n    height: 2.30rem;\n}\n*/\n\n.header_scratch-logo_1N4Zf.header_clickable_JsriS {\n    cursor: pointer;\n}\n\n.header_home-link_2Fmkg {\n    gap: 6px;\n    padding: 0 10px;\n    color: inherit;\n}\n\n.header_home-logo_3JHWy {\n    height: 28px;\n    border-radius: 6px;\n    display: block;\n}\n\n.header_home-wordmark_2KKto {\n\tcolor: var(--menu-bar-foreground);\n    font-weight: 800;\n    font-size: 19px;\n    letter-spacing: -0.02em;\n}\n\n.header_header-item_2MeKO {\n    display: flex;\n    text-decoration: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    align-self: center;\n    position: relative;\n    align-items: center;\n    white-space: nowrap;\n    height: 3rem;\n}\n\n.header_header-item_2MeKO.header_hoverable_vZyce img {\n    cursor: pointer;\n\tfilter: var(--menu-bar-icon-filter);\n}\n\n.header_header-item_2MeKO.header_active_1bg4l,\n.header_header-item_2MeKO.header_hoverable_vZyce:hover {\n    background-color: var(--ui-black-transparent);\n}\n\n.header_header-item_2MeKO.header_growable_2Pa6t {\n    max-width: 12rem;\n    flex: 1;\n}\n\n.header_title-field-growable_1oTKM {\n    flex-grow: 1;\n    width: 2rem;\n}\n\n.header_file-group_Jil2C {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.header_file-group_Jil2C .header_header-item_2MeKO {\n    padding: 0 0.5rem;\n}\n\n.header_header-menu_1vG_L {\n    margin-top: 3rem;\n    z-index: 491;\n}\n\n.header_feedback-link_2LD8m {\n    color: var(--looks-secondary-darker);\n    text-decoration: none;\n}\n\n.header_feedback-button_1P_d6 {\n    background-color: var(--looks-secondary-light);\n    color: inherit;\n    height: 34px;\n}\n\n.header_divider_boaqH {\n    height: 34px;\n}\n\n.header_author-info_3O6B4 {\n    margin-left: .25rem;\n    margin-right: .6875rem;\n}\n\n.header_header-button_3RCtL {\n    height: 2rem;\n}\n\n.header_remix-button_2OC7K {\n    background-color: var(--pen-primary)\n}\n\n.header_remix-button-icon_1z2mu {\n    height: 1.25rem;\n}\n\n.header_coming-soon_22WkC >:not(.header_coming-soon-tooltip_oTnDr) {\n    opacity: 0.5;\n}\n\n.header_account-info-group_334zT {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.header_account-info-group_334zT .header_header-item_2MeKO {\n    margin: 0 .25rem;\n    padding: 0 0.75rem;\n}\n\n.header_mystuff-icon_1vq7n {\n    margin: 0 .25rem;\n    height: 1rem;\n}\n\n.header_help-icon_30Ypk {\n    margin: 0 .25rem 0 0;\n}\n\n[dir=\"rtl\"] .header_help-icon_30Ypk {\n    margin: 0 0 0 .25rem;\n}\n\n.header_account-nav-menu_2kYsv, .header_mystuff-button_3yOzg {\n    padding: 0 .25rem;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.header_profile-icon_3-u0a {\n    margin: 0 .25rem;\n    width: 2rem;\n    border-radius: calc(0.5rem / 2);\n}\n\n.header_dropdown-caret-icon_GXsJO {\n    width: 0.5rem;\n    height: 0.5rem;\n\tfilter: var(--menu-bar-icon-filter);\n}\n\n.header_settings-button_3IOCg .header_button-icon_3yD87,\n.header_file-button_35cX5 .header_button-icon_3yD87,\n.header_edit-button_Gv9-3 .header_button-icon_3yD87,\n.header_error-icon_zBFCr,\n.header_menu-bar-item_319sV.header_logo_2PSsN img {\n    filter: var(--menu-bar-icon-filter);\n}\n\n[dir=\"ltr\"] .header_dropdown-caret-icon_GXsJO {\n    margin-left: .5rem;\n}\n\n[dir=\"rtl\"] .header_dropdown-caret-icon_GXsJO {\n    margin-right: .5rem;\n}\n\n.header_disabled_3rFyz {\n    opacity: 0.5;\n}\n\n.header_mystuff_3T9vG > a {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 45%;\n  padding-right: 10px;\n  padding-left: 10px;\n  width: 30px;\n  overflow: hidden;\n  text-indent: 50px;\n  white-space: nowrap;\n}\n\n.header_mystuff_3T9vG > a:hover {\n  background-size: 50%;\n}\n\n.header_mystuff_3T9vG > a {\n  /* background-image: url(\"/images/mystuff.png\"); */\n}\n\n.header_about-icon_ijcZe {\n    height: 1.25rem;\n    margin: 0.5rem;\n    vertical-align: middle;\n\tfilter: var(--menu-bar-icon-filter);\n}\n\n.header_icon_1C3WR {\n\tfilter: var(--menu-bar-icon-filter);\n}\n\n.header_collapsible-label_1TPP8 {\n    margin: 0 .25rem;\n}\n\n@media only screen and (max-width: 1124px) {\n    .header_tutorials-label_9Q19j, .header_collapsible-label_1TPP8 {\n        display: none;\n    }\n\n    .header_help-icon_30Ypk {\n        margin-right: 0;\n    }\n}\n\n.header_menu-item-link_39hGN {\n    color: inherit;\n    text-decoration: none;\n}\n", ""]);

// exports
exports.locals = {
	"header": "header_header_1WRiO",
	"centered": "header_centered_28RFP",
	"header-menu": "header_header-menu_1vG_L",
	"headerMenu": "header_header-menu_1vG_L",
	"file-group": "header_file-group_Jil2C",
	"fileGroup": "header_file-group_Jil2C",
	"main-group": "header_main-group_2pU_u",
	"mainGroup": "header_main-group_2pU_u",
	"header-item": "header_header-item_2MeKO",
	"headerItem": "header_header-item_2MeKO",
	"account-info-group": "header_account-info-group_334zT",
	"accountInfoGroup": "header_account-info-group_334zT",
	"inactive": "header_inactive_1bKwV",
	"scratch-logo": "header_scratch-logo_1N4Zf",
	"scratchLogo": "header_scratch-logo_1N4Zf",
	"clickable": "header_clickable_JsriS",
	"home-link": "header_home-link_2Fmkg",
	"homeLink": "header_home-link_2Fmkg",
	"home-logo": "header_home-logo_3JHWy",
	"homeLogo": "header_home-logo_3JHWy",
	"home-wordmark": "header_home-wordmark_2KKto",
	"homeWordmark": "header_home-wordmark_2KKto",
	"hoverable": "header_hoverable_vZyce",
	"active": "header_active_1bg4l",
	"growable": "header_growable_2Pa6t",
	"title-field-growable": "header_title-field-growable_1oTKM",
	"titleFieldGrowable": "header_title-field-growable_1oTKM",
	"feedback-link": "header_feedback-link_2LD8m",
	"feedbackLink": "header_feedback-link_2LD8m",
	"feedback-button": "header_feedback-button_1P_d6",
	"feedbackButton": "header_feedback-button_1P_d6",
	"divider": "header_divider_boaqH",
	"author-info": "header_author-info_3O6B4",
	"authorInfo": "header_author-info_3O6B4",
	"header-button": "header_header-button_3RCtL",
	"headerButton": "header_header-button_3RCtL",
	"remix-button": "header_remix-button_2OC7K",
	"remixButton": "header_remix-button_2OC7K",
	"remix-button-icon": "header_remix-button-icon_1z2mu",
	"remixButtonIcon": "header_remix-button-icon_1z2mu",
	"coming-soon": "header_coming-soon_22WkC",
	"comingSoon": "header_coming-soon_22WkC",
	"coming-soon-tooltip": "header_coming-soon-tooltip_oTnDr",
	"comingSoonTooltip": "header_coming-soon-tooltip_oTnDr",
	"mystuff-icon": "header_mystuff-icon_1vq7n",
	"mystuffIcon": "header_mystuff-icon_1vq7n",
	"help-icon": "header_help-icon_30Ypk",
	"helpIcon": "header_help-icon_30Ypk",
	"account-nav-menu": "header_account-nav-menu_2kYsv",
	"accountNavMenu": "header_account-nav-menu_2kYsv",
	"mystuff-button": "header_mystuff-button_3yOzg",
	"mystuffButton": "header_mystuff-button_3yOzg",
	"profile-icon": "header_profile-icon_3-u0a",
	"profileIcon": "header_profile-icon_3-u0a",
	"dropdown-caret-icon": "header_dropdown-caret-icon_GXsJO",
	"dropdownCaretIcon": "header_dropdown-caret-icon_GXsJO",
	"settings-button": "header_settings-button_3IOCg",
	"settingsButton": "header_settings-button_3IOCg",
	"button-icon": "header_button-icon_3yD87",
	"buttonIcon": "header_button-icon_3yD87",
	"file-button": "header_file-button_35cX5",
	"fileButton": "header_file-button_35cX5",
	"edit-button": "header_edit-button_Gv9-3",
	"editButton": "header_edit-button_Gv9-3",
	"error-icon": "header_error-icon_zBFCr",
	"errorIcon": "header_error-icon_zBFCr",
	"menu-bar-item": "header_menu-bar-item_319sV",
	"menuBarItem": "header_menu-bar-item_319sV",
	"logo": "header_logo_2PSsN",
	"disabled": "header_disabled_3rFyz",
	"mystuff": "header_mystuff_3T9vG",
	"about-icon": "header_about-icon_ijcZe",
	"aboutIcon": "header_about-icon_ijcZe",
	"icon": "header_icon_1C3WR",
	"collapsible-label": "header_collapsible-label_1TPP8",
	"collapsibleLabel": "header_collapsible-label_1TPP8",
	"tutorials-label": "header_tutorials-label_9Q19j",
	"tutorialsLabel": "header_tutorials-label_9Q19j",
	"menu-item-link": "header_menu-item-link_39hGN",
	"menuItemLink": "header_menu-item-link_39hGN"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/pot-desktop/pot-desktop.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/pot-desktop/pot-desktop.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background: var(--page-background);\n    color: var(--page-foreground);\n}\n\na {\n    color: var(--link-color);\n}\n\nh1 {\n    padding: 20px 0;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n.pot-desktop_main_1JXnk section {\n    max-width: 900px;\n    margin: auto;\n    margin-bottom: 30px;\n}\n\n.pot-desktop_header-container_sIgDH {\n    background-color: var(--looks-secondary);\n    padding: 20px 0;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n.pot-desktop_header-container-trans_39DKD {\n    padding: 20px 0;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n.pot-desktop_header-text_3sdYK {\n}\n\n.pot-desktop_download-list_2Sz0s {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n}\n\n.pot-desktop_screenshot_ka__5 {\n    filter: drop-shadow(0 0 1rem var(--ui-black-transparent));\n    border-radius: 0.5rem;\n    background-color: var(--page-background);\n    width: 100%;\n}\n\n.pot-desktop_download-button_1bpkK {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    padding: 0.75rem 1rem;\n    background: var(--looks-secondary);\n    color: white;\n    border: 1px solid var(--looks-secondary);\n    font-weight: 600;\n    font-size: 0.85rem;\n}", ""]);

// exports
exports.locals = {
	"main": "pot-desktop_main_1JXnk",
	"header-container": "pot-desktop_header-container_sIgDH",
	"headerContainer": "pot-desktop_header-container_sIgDH",
	"header-container-trans": "pot-desktop_header-container-trans_39DKD",
	"headerContainerTrans": "pot-desktop_header-container-trans_39DKD",
	"header-text": "pot-desktop_header-text_3sdYK",
	"headerText": "pot-desktop_header-text_3sdYK",
	"download-list": "pot-desktop_download-list_2Sz0s",
	"downloadList": "pot-desktop_download-list_2Sz0s",
	"screenshot": "pot-desktop_screenshot_ka__5",
	"download-button": "pot-desktop_download-button_1bpkK",
	"downloadButton": "pot-desktop_download-button_1bpkK"
};

/***/ }),

/***/ "./src/components/button/button.css":
/*!******************************************!*\
  !*** ./src/components/button/button.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./button.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/button/button.css");

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

/***/ "./src/components/button/button.jsx":
/*!******************************************!*\
  !*** ./src/components/button/button.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.css */ "./src/components/button/button.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["className", "disabled", "iconClassName", "iconSrc", "iconWidth", "iconHeight", "onClick", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }




const ButtonComponent = _ref => {
  let {
      className,
      disabled,
      iconClassName,
      iconSrc,
      iconWidth,
      iconHeight,
      onClick,
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  if (disabled) {
    onClick = function onClick() {};
  }
  const icon = iconSrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(iconClassName, _button_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon),
    draggable: false,
    src: iconSrc,
    height: iconHeight,
    width: iconWidth
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_button_css__WEBPACK_IMPORTED_MODULE_3___default.a.outlinedButton, className),
    role: "button",
    onClick: onClick
  }, props), icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _button_css__WEBPACK_IMPORTED_MODULE_3___default.a.content
  }, children));
};
ButtonComponent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  iconClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  iconSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  iconHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  iconWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonComponent);

/***/ }),

/***/ "./src/components/menu-bar/potentiamod-logo.svg":
/*!******************************************************!*\
  !*** ./src/components/menu-bar/potentiamod-logo.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/aaa2144183bd6151e4741e7ef808c683.svg";

/***/ }),

/***/ "./src/components/potentia-footer/footer.css":
/*!***************************************************!*\
  !*** ./src/components/potentia-footer/footer.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./footer.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/potentia-footer/footer.css");

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

/***/ "./src/components/potentia-footer/footer.jsx":
/*!***************************************************!*\
  !*** ./src/components/potentia-footer/footer.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.svg */ "./src/components/potentia-footer/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _gaiamod_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gaiamod-logo.svg */ "./src/components/potentia-footer/gaiamod-logo.svg");
/* harmony import */ var _gaiamod_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_gaiamod_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_brand_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/brand.js */ "./src/lib/brand.js");
/* harmony import */ var _lib_brand_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_brand_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/version.js */ "./src/lib/version.js");
/* harmony import */ var _lib_version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_version_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer.css */ "./src/components/potentia-footer/footer.css");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);










//Taken from LibreKitten.
const hardRefresh = () => {
  const search = location.search.replace(/[?&]nocache=\d+/, '');
  location.replace("".concat(location.pathname + search + (search ? '&' : '?'), "nocache=").concat(Math.floor(Math.random() * 100000)));
};
const eraseData = async () => {
  if (confirm('Please be aware that this will reset all your local data, including the Restore Points and backpack. Are you sure you want to continue?')) {
    localStorage.clear();
    indexedDB.deleteDatabase('TW_RestorePoints');
    indexedDB.deleteDatabase('TW_Backpack');
    location.reload();
  }
};
const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.footer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.inner
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.brand
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  width: "70px",
  src: _logo_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: "PotentiaMod"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.wordmark
}, "PotentiaMod"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.tagline
}, "A Block-Based Coding That Goes EXTREME!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.columns
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.column
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.columnTitle
}, "Website"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "/editor.html"
}, "Editor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "/pot-desktop.html"
}, "PotentiaMod Desktop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "/packager"
}, "PotentiaMod Packager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://github.com/PotentiaMod",
  target: "_blank",
  rel: "noreferrer",
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.iconRow
}, "GitHub Source Code")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.column
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.columnTitle
}, "Community"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "/credits.html"
}, "Credits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "/privacy.html"
}, "Privacy Policy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://warp.mistium.com/users/GaiaKitty",
  target: "_blank",
  rel: "noreferrer"
}, "Report a bug")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.column
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.columnTitle
}, "Donate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://github.com/sponsors/GarboMuffin",
  target: "_blank",
  rel: "noreferrer"
}, "Donate to TurboWarp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://www.scratchfoundation.org/donate",
  target: "_blank",
  rel: "noreferrer"
}, "Donate to Scratch")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.legal
}, _lib_brand_js__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"], " is a mod of TurboWarp and Scratch. Not affiliated with Scratch or the Scratch Foundation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.legal,
  style: {
    textAlign: 'center'
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://gaiamod-main.github.io/",
  rel: "noopener noreferrer",
  target: "_blank"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  width: "150px",
  alt: "GaiaMod",
  src: _gaiamod_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  draggable: false
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
  defaultMessage: "Also, check out my first mod of PenguinMod, GaiaMod!",
  id: "pot.projectrender.gaiamod"
})))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: _footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.info
}, "Version: ", _lib_version_js__WEBPACK_IMPORTED_MODULE_6__["APP_VERSION"], " | ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  onClick: eraseData,
  style: {
    color: 'red'
  }
}, "Erase data"))));
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/potentia-footer/gaiamod-logo.svg":
/*!*********************************************************!*\
  !*** ./src/components/potentia-footer/gaiamod-logo.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/7e8d3b8f91332c4f3b86ab89ce169285.svg";

/***/ }),

/***/ "./src/components/potentia-footer/logo.svg":
/*!*************************************************!*\
  !*** ./src/components/potentia-footer/logo.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/aaa2144183bd6151e4741e7ef808c683.svg";

/***/ }),

/***/ "./src/components/potentia-header/header.css":
/*!***************************************************!*\
  !*** ./src/components/potentia-header/header.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./header.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/potentia-header/header.css");

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

/***/ "./src/components/potentia-header/header.jsx":
/*!***************************************************!*\
  !*** ./src/components/potentia-header/header.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.bindall */ "./node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/src/bowser.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _button_button_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../button/button.jsx */ "./src/components/button/button.jsx");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header.css */ "./src/components/potentia-header/header.css");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _menu_bar_potentiamod_logo_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../menu-bar/potentiamod-logo.svg */ "./src/components/menu-bar/potentiamod-logo.svg");
/* harmony import */ var _menu_bar_potentiamod_logo_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_menu_bar_potentiamod_logo_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_brand_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/brand.js */ "./src/lib/brand.js");
/* harmony import */ var _lib_brand_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lib_brand_js__WEBPACK_IMPORTED_MODULE_11__);
//Stolen from LibreKitten












const Header = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
  className: _header_css__WEBPACK_IMPORTED_MODULE_9___default.a.header
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
  className: _header_css__WEBPACK_IMPORTED_MODULE_9___default.a.mainGroup
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
  href: "/",
  className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_header_css__WEBPACK_IMPORTED_MODULE_9___default.a.headerItem)
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
  src: _menu_bar_potentiamod_logo_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
  alt: "PotentiaMod",
  className: _header_css__WEBPACK_IMPORTED_MODULE_9___default.a.homeLogo
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
  className: _header_css__WEBPACK_IMPORTED_MODULE_9___default.a.homeWordmark
}, 'PotentiaMod')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
  href: "/editor.html",
  className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_header_css__WEBPACK_IMPORTED_MODULE_9___default.a.headerItem, _header_css__WEBPACK_IMPORTED_MODULE_9___default.a.hoverable)
}, "Create"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
  href: "/credits.html",
  className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_header_css__WEBPACK_IMPORTED_MODULE_9___default.a.headerItem, _header_css__WEBPACK_IMPORTED_MODULE_9___default.a.hoverable)
}, "Credits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
  className: _header_css__WEBPACK_IMPORTED_MODULE_9___default.a.headerItem
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
  className: _header_css__WEBPACK_IMPORTED_MODULE_9___default.a.feedbackLink,
  href: "https://github.com/PotentiaMod/potentiamod.github.io/issues",
  rel: "noopener noreferrer",
  target: "_blank"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_button_button_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
  className: _header_css__WEBPACK_IMPORTED_MODULE_9___default.a.feedbackButton
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
  defaultMessage: "{APP_NAME} issues and bugs",
  id: "tw.GHissues",
  values: {
    APP_NAME: _lib_brand_js__WEBPACK_IMPORTED_MODULE_11__["APP_NAME"]
  }
}))))));
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/lib/version.js":
/*!****************************!*\
  !*** ./src/lib/version.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Legacy export format because this is used by some build-time scripts stuck in the past.
// eslint-disable-next-line import/no-commonjs
module.exports = {
  APP_VERSION: '1.19.7'
};

/***/ }),

/***/ "./src/playground/pot-desktop/pot-desktop.css":
/*!****************************************************!*\
  !*** ./src/playground/pot-desktop/pot-desktop.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./pot-desktop.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/pot-desktop/pot-desktop.css");

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

/***/ "./src/playground/pot-desktop/pot-desktop.jsx":
/*!****************************************************!*\
  !*** ./src/playground/pot-desktop/pot-desktop.jsx ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pot-desktop.css */ "./src/playground/pot-desktop/pot-desktop.css");
/* harmony import */ var _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pot_desktop_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/brand */ "./src/lib/brand.js");
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_brand__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/version.js */ "./src/lib/version.js");
/* harmony import */ var _lib_version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_version_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/themes/guiHelpers */ "./src/lib/themes/guiHelpers.js");
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");
/* harmony import */ var _components_potentia_header_header_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/potentia-header/header.jsx */ "./src/components/potentia-header/header.jsx");
/* harmony import */ var _components_potentia_footer_footer_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/potentia-footer/footer.jsx */ "./src/components/potentia-footer/footer.jsx");
/* harmony import */ var _components_button_button_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/button/button.jsx */ "./src/components/button/button.jsx");
/* harmony import */ var _screencap_light_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screencap-light.png */ "./src/playground/pot-desktop/screencap-light.png");
/* harmony import */ var _screencap_light_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_screencap_light_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _screencap_dark_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./screencap-dark.png */ "./src/playground/pot-desktop/screencap-dark.png");
/* harmony import */ var _screencap_dark_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_screencap_dark_png__WEBPACK_IMPORTED_MODULE_12__);












/* eslint-disable react/jsx-no-literals */

const theme = Object(_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_7__["detectTheme"])();
Object(_lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_6__["applyGuiColors"])(theme);
document.documentElement.lang = 'en';
const BRAND = 'PotententiaMod';
const SLOGAN = 'A Block-Based Coding That Goes EXTREME!';


const RELEASES_DOWNLOAD_URL = "https://github.com/PotentiaMod/desktop/releases/download/".concat(_lib_version_js__WEBPACK_IMPORTED_MODULE_5__["APP_VERSION"], "/");
const openFile = file => {
  window.open("".concat(RELEASES_DOWNLOAD_URL, "/").concat(file), '_blank', 'noreferrer');
};
const Desktop = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
  className: _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.main
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_potentia_header_header_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " Desktop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "PotentiaMod if it was a desktop app."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  className: _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.screenshot,
  loading: "lazy",
  src: theme.isDark() ? _screencap_dark_png__WEBPACK_IMPORTED_MODULE_12___default.a : _screencap_light_png__WEBPACK_IMPORTED_MODULE_11___default.a
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Install ", _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " Desktop (v", _lib_version_js__WEBPACK_IMPORTED_MODULE_5__["APP_VERSION"], "):")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Windows 10 and later"), "If a Windows SmartScreen alert appears, click \"More info\" then \"Run anyways\".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadList
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_button_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
  className: _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadButton,
  onClick: () => openFile("PotentiaMod-Setup-".concat(_lib_version_js__WEBPACK_IMPORTED_MODULE_5__["APP_VERSION"], "-x64.exe"))
}, "Download installer (64-bit, recommended)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "This page is based on Dash's Desktop page.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_potentia_footer_footer_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null));
Object(_app_target__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Desktop, null));

/***/ }),

/***/ "./src/playground/pot-desktop/screencap-dark.png":
/*!*******************************************************!*\
  !*** ./src/playground/pot-desktop/screencap-dark.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/10e2c7713d905e8d7ef8398f83d1d016.png";

/***/ }),

/***/ "./src/playground/pot-desktop/screencap-light.png":
/*!********************************************************!*\
  !*** ./src/playground/pot-desktop/screencap-light.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/65b5e81c9aa63b0c3bcad7b0845ee85f.png";

/***/ })

/******/ });
//# sourceMappingURL=pot-desktop.js.map