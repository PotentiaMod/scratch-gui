(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-background"],{

/***/ "./node_modules/css-loader/index.js?{\"esModule\":false}!./src/addons/addons/background/style.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader?{"esModule":false}!./src/addons/addons/background/style.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  --enable-workspace-background: transparent;\n  --enable-modal-background: transparent;\n}\n\n[class*='modal-content'] {\n  background-color: var(--enable-modal-background);\n}\n.sa-background-popup {\n  box-sizing: border-box;\n  width: min(72rem, 92vw);\n  max-width: 92vw;\n  max-height: 84vh;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.sa-background-content,\n.sa-background-list-content {\n  padding: 0.75rem;\n}\n\n.sa-background-blur-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  min-width: 0;\n  min-height: 0;\n}\n\n.sa-background-wallpaper-title {\n  margin: 0 4px;\n}\n\n.sa-background-wallpaper-list {\n  padding: 10px;\n  min-height: 12rem;\n  overflow: auto;\n}\n\n.sa-background-wallpaper-enabled-label {\n  align-items: center;\n  margin: 0 4px;\n}\n\n.sa-background-wallpaper-title.disabled {\n  opacity: 0.5;\n}\n\n.sa-background-delete {\n  padding: 5px 10px;\n  border-radius: 100px;\n  border: 1px solid var(--ui-black-transparent);\n  background-color: var(--ui-secondary);\n  color: var(--text-primary);\n  cursor: pointer;\n  transition: background 0.25s ease;\n}\n\n.sa-background-delete:hover {\n  background-color: var(--ui-tertiary);\n}\n\n.sa-background-wallpaper-item {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 5px;\n}\n\n.sa-background-offset {\n  max-width: 8rem;\n}\n\n/*让工作区透明*/\n.blocklySvg {\n  background-color: var(--enable-workspace-background) !important;\n}\n\n/*不让左边那框产生“空隙”（原来的颜色是透明的不知道咋想的）*/\n.injectionDiv {\n  border-left: 1px solid var(--ui-secondary) !important;\n}\n\n.sa-modal-background-enabled {\n  position: relative;\n  background-color: transparent !important;\n}\n\n.sa-modal-background-enabled::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  pointer-events: none;\n  border-radius: inherit;\n  transform-origin: top left;\n  transform: scale(var(--sa-modal-bg-modalsize, 1));\n  background-image: var(--sa-modal-bg-image);\n  background-size: var(--sa-modal-bg-size, cover);\n  background-position: var(--sa-modal-bg-position, 0 0);\n  background-repeat: no-repeat;\n  filter: blur(var(--sa-modal-bg-blur, 0px)) opacity(var(--sa-modal-bg-opacity, 0.35));\n}\n\n/* Gray tint behind background image — separate from ::before so filter doesn't affect it */\n.sa-modal-background-enabled::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  z-index: -2;\n  pointer-events: none;\n  background-color: var(--ui-modal-background);\n}\n\n.sa-modal-background-enabled.sa-modal-background-fullscreen::before,\n.sa-modal-background-enabled.sa-modal-background-fullscreen::after {\n  transform: none;\n}\n\n.sa-modal-background-enabled[class*='_body'],\n.sa-modal-background-enabled > [class*='_body'] {\n  background-color: transparent !important;\n}\n\n.sa-modal-background-enabled > [class*='_workspace'] {\n  background-color: transparent !important;\n}\n\n.sa-modal-background-enabled .blocklySvg {\n  background-color: transparent !important;\n}\n\n.sa-background-section-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 0.25rem 0 0 0;\n  font-weight: bold;\n}\n\n.sa-background-divider {\n  flex-grow: 1;\n  margin-left: 1rem;\n  border-top: 1px dashed var(--ui-tertiary);\n}\n\n.sa-background-wallpaper-list {\n  border: 1px dashed var(--ui-tertiary);\n  border-radius: 5px;\n}\n\n.sa-background-content,\n.sa-background-list-content {\n  display: flex;\n}\n\n.sa-background-content {\n  justify-content: center;\n  overflow: auto !important;\n  flex: 1 1 auto;\n  min-height: 0;\n}\n\n.sa-background-list-content {\n  justify-content: stretch;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n}\n\n.sa-background-list-content {\n  animation: sa-background-content-enter 0.3s cubic-bezier(0, 0, 0, 1) forwards;\n}\n\n.sa-background-list-content-current {\n  background-color: color-mix(in srgb, var(--looks-secondary) 12%, transparent);\n  border-radius: 4px;\n}\n\n@keyframes sa-background-content-enter {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.sa-background-clear {\n  color: var(--ui-modal-foreground);\n  display: flex;\n  align-items: center;\n}\n\n.sa-background-add-clear-wrapper {\n  display: flex;\n  flex: 1;\n}\n\n.sa-background-content-wrapper {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr) minmax(0, 1fr);\n  gap: 0.75rem;\n  width: 100%;\n  min-height: 0;\n  align-items: stretch;\n  overflow: hidden;\n}\n\n@media (max-width: 60rem) {\n  .sa-background-content-wrapper {\n    grid-template-columns: 1fr;\n  }\n}\n\n.sa-background-panel,\n.sa-background-rotation-wrapper,\n.sa-background-rotation-all {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.sa-background-form-grid {\n  display: grid;\n  gap: 0.5rem;\n  min-width: 0;\n  overflow: hidden;\n}\n\n.sa-background-preview {\n  width: 100%;\n  min-height: 10rem;\n  max-height: 12rem;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sa-background-preview-image {\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 12rem;\n  object-fit: contain;\n  display: block;\n}\n\n.sa-background-preview-empty {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 10rem;\n  text-align: center;\n}\n\n.sa-background-preview-image[hidden],\n.sa-background-preview-empty[hidden] {\n  display: none !important;\n}\n\n.sa-background-control-row {\n  display: grid;\n  grid-template-columns: minmax(6rem, 1fr) minmax(8rem, 1.3fr);\n  gap: 0.5rem;\n  align-items: center;\n  min-width: 0;\n}\n\n.sa-background-control-row-full {\n  grid-template-columns: minmax(0, 1fr);\n}\n\n.sa-background-control-label,\n.sa-background-control-input,\n.sa-background-control-full,\n.sa-background-list-shell,\n.sa-background-left {\n  min-width: 0;\n}\n\n.sa-background-control-input,\n.sa-background-control-full,\n.sa-background-list-shell,\n.sa-background-left,\n.sa-background-rotation-label {\n  display: flex;\n  align-items: center;\n}\n\n.sa-background-control-full,\n.sa-background-list-shell {\n  width: 100%;\n}\n\n.sa-background-list-shell {\n  flex: 1 1 auto;\n  max-height: 50vh;\n  overflow: auto;\n  flex-direction: column;\n  align-items: stretch;\n  min-height: 0;\n}\n\n.sa-background-control-input > input,\n.sa-background-control-input > select,\n.sa-background-control-input > .sa-background-rotation-interval {\n  width: 100%;\n  max-width: 100%;\n}\n\n.sa-background-range-control {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  align-items: center;\n  width: 100%;\n}\n\n.sa-background-range-value {\n  white-space: nowrap;\n  color: var(--text-primary);\n  opacity: 0.8;\n}\n\n.sa-background-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  width: 100%;\n}\n\n.sa-background-actions > * {\n  flex: 1 1 0;\n}\n\n.sa-background-left {\n  gap: 0.5rem;\n  flex: 1 1 auto;\n}\n\n.sa-background-wallpaper-title {\n  min-width: 0;\n  flex: 1 1 auto;\n}\n\n.sa-background-wallpaper-item {\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n\n.sa-background-rotation-label {\n  gap: 0.5rem;\n}\n\n.sa-background-clip {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.sa-background-image {\n  position: absolute;\n  pointer-events: none;\n  user-select: none;\n}\n\n.sa-background-add {\n  font-family: inherit;\n  font-size: 14px;\n  background-color: var(--looks-secondary);\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  margin: 0;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: bold;\n  transition: opacity 0.25s ease;\n}\n\n.sa-background-add:hover {\n  opacity: 0.8;\n}\n\n.sa-background-add:active,\n.sa-background-add:focus-within {\n  outline: none;\n  box-shadow: 0 0 0 3px var(--looks-transparent);\n}\n\n.sa-background-blur,\n.sa-background-opacity,\n.sa-background-animation-duration {\n  accent-color: var(--looks-secondary);\n  cursor: pointer;\n}\n\n.sa-background-wallpaper-selectable {\n  cursor: pointer;\n  border-radius: 4px;\n  padding: 2px 4px;\n  transition: background 0.25s ease;\n}\n\n.sa-background-wallpaper-selectable:hover {\n  background-color: var(--ui-black-transparent);\n}\n\n.sa-background-wallpaper-current {\n  border-radius: 4px;\n  padding: 2px 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/background/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/background/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/background/userscript.js");
/* harmony import */ var _css_loader_esModule_false_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader?{"esModule":false}!./style.css */ "./node_modules/css-loader/index.js?{\"esModule\":false}!./src/addons/addons/background/style.css");
/* harmony import */ var _css_loader_esModule_false_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_esModule_false_style_css__WEBPACK_IMPORTED_MODULE_1__);


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_esModule_false_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/background/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/background/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * IndexedDB by AI （嘿嘿）
 */
class BackgroundDB {
  constructor() {
    let dbName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sa-background';
    let version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    this.dbName = dbName;
    this.version = version;
    this.db = null;
    this.settingsStore = 'settings_store';
    this.wallpapersStore = 'wallpapers_store';
  }

  /**
   * 打开数据库
   * @returns {Promise<IDBDatabase>}
   */
  open() {
    return new Promise((resolve, reject) => {
      const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      const request = indexedDB.open(this.dbName, this.version);
      request.onsuccess = event => {
        this.db = event.target.result;
        resolve(this.db);
      };
      request.onerror = event => {
        console.log('Cannot open indexedDB:', event);
        reject(event);
      };
      request.onupgradeneeded = event => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(this.settingsStore)) {
          db.createObjectStore(this.settingsStore, {
            keyPath: 'key'
          });
        }
        if (!db.objectStoreNames.contains(this.wallpapersStore)) {
          db.createObjectStore(this.wallpapersStore, {
            keyPath: 'id'
          });
        }
        if (db.objectStoreNames.contains('background_store')) {
          const transaction = event.target.transaction;
          const oldStore = transaction.objectStore('background_store');
          const newStore = transaction.objectStore(this.wallpapersStore);
          oldStore.openCursor().onsuccess = cursorEvent => {
            const cursor = cursorEvent.target.result;
            if (!cursor) return;
            const record = cursor.value;
            const wallpaper = {
              id: cursor.key,
              name: 'Workspace Background',
              link: typeof record === 'object' && record.link ? record.link : record,
              enabled: true,
              addedAt: new Date().toISOString()
            };
            newStore.put(wallpaper);
            cursor.continue();
          };
        }
      };
    });
  }
  saveSetting(key, value) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.settingsStore], 'readwrite');
      const store = transaction.objectStore(this.settingsStore);
      const request = store.put({
        key,
        value
      });
      request.onsuccess = () => resolve();
      request.onerror = e => {
        console.log('IndexedDB saveSetting failed', e);
        reject(e);
      };
    });
  }
  getSetting(key) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.settingsStore], 'readonly');
      const store = transaction.objectStore(this.settingsStore);
      const request = store.get(key);
      request.onsuccess = e => {
        const record = e.target.result;
        resolve(record ? record.value : null);
      };
      request.onerror = e => {
        console.log('IndexedDB getSetting failed', e);
        reject(e);
      };
    });
  }
  saveWallpaper(wallpaper) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.wallpapersStore], 'readwrite');
      const store = transaction.objectStore(this.wallpapersStore);
      const wallpaperRecord = Object.assign({
        id: wallpaper.id || (window.crypto && crypto.randomUUID ? crypto.randomUUID() : "".concat(Date.now())),
        name: wallpaper.name || 'Wallpaper',
        link: wallpaper.link || null,
        enabled: typeof wallpaper.enabled === 'boolean' ? wallpaper.enabled : true,
        addedAt: wallpaper.addedAt || new Date().toISOString()
      }, wallpaper);
      const request = store.put(wallpaperRecord);
      request.onsuccess = () => resolve(wallpaperRecord);
      request.onerror = e => {
        console.log('IndexedDB saveWallpaper failed', e);
        reject(e);
      };
    });
  }
  getWallpaper(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.wallpapersStore], 'readonly');
      const store = transaction.objectStore(this.wallpapersStore);
      const request = store.get(id);
      request.onsuccess = e => {
        resolve(e.target.result || null);
      };
      request.onerror = e => {
        console.log('IndexedDB getWallpaper failed', e);
        reject(e);
      };
    });
  }
  listWallpapers() {
    let _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$enabledOnly = _ref.enabledOnly,
      enabledOnly = _ref$enabledOnly === void 0 ? false : _ref$enabledOnly;
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.wallpapersStore], 'readonly');
      const store = transaction.objectStore(this.wallpapersStore);
      const request = store.getAll();
      request.onsuccess = e => {
        let records = e.target.result || [];
        if (enabledOnly) {
          records = records.filter(item => item.enabled !== false);
        }
        resolve(records);
      };
      request.onerror = e => {
        console.log('IndexedDB listWallpapers failed', e);
        reject(e);
      };
    });
  }
  deleteWallpaper(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.wallpapersStore], 'readwrite');
      const store = transaction.objectStore(this.wallpapersStore);
      const request = store.delete(id);
      request.onsuccess = () => resolve();
      request.onerror = e => reject(e);
    });
  }
}
let bgDB;
let isRefreshingBG = false;
let wallpaperTransitionTimeout = null;
let wallpaperRefreshToken = 0;
let cachedModalBackgroundConfig = null;
let modalBackgroundConfigPromise = null;
let modalBackgroundUpdateScheduled = false;
const modalBackgroundCacheKeys = new Set(['EnableModalBG', 'ModalBGLink', 'ModalBGLayout', 'ModalBGBlur', 'ModalBGOpacity', 'ModalBGOffsetX', 'ModalBGOffsetY', 'ModalBGSize', 'ModalBGAlignX', 'ModalBGAlignY']);
function invalidateModalBackgroundConfigCache() {
  cachedModalBackgroundConfig = null;
  modalBackgroundConfigPromise = null;
}
function scheduleModalBackgroundUpdate() {
  if (modalBackgroundUpdateScheduled) return;
  modalBackgroundUpdateScheduled = true;
  window.requestAnimationFrame(async () => {
    modalBackgroundUpdateScheduled = false;
    await addModalBackground();
  });
}
async function applySettings(id, value) {
  try {
    const nowSettings = (await bgDB.getSetting('settings')) || {};
    nowSettings[id] = value;
    await bgDB.saveSetting('settings', nowSettings);
    if (modalBackgroundCacheKeys.has(id)) {
      invalidateModalBackgroundConfigCache();
    }
  } catch (e) {
    throw new Error(e);
  }
}
async function getSetting(id) {
  try {
    const nowSettings = (await bgDB.getSetting('settings')) || {};
    return nowSettings[id];
  } catch (e) {
    throw new Error(e);
  }
}
function applyBackgroundLayout(_ref2) {
  let image = _ref2.image,
    containerWidth = _ref2.containerWidth,
    containerHeight = _ref2.containerHeight,
    _ref2$mode = _ref2.mode,
    mode = _ref2$mode === void 0 ? 'stretch' : _ref2$mode,
    _ref2$offsetX = _ref2.offsetX,
    offsetX = _ref2$offsetX === void 0 ? 0 : _ref2$offsetX,
    _ref2$offsetY = _ref2.offsetY,
    offsetY = _ref2$offsetY === void 0 ? 0 : _ref2$offsetY;
  if (!image || !containerWidth || !containerHeight) return;
  image.style.objectFit = 'none';
  image.style.width = 'auto';
  image.style.height = 'auto';
  image.style.left = '0';
  image.style.top = '0';
  image.style.transform = "translate(".concat(offsetX, "px, ").concat(offsetY, "px)");
  switch (mode) {
    case 'stretch':
      image.style.width = "".concat(containerWidth, "px");
      image.style.height = "".concat(containerHeight, "px");
      image.style.objectFit = 'fill';
      break;
    case 'height-priority':
      image.style.height = "".concat(containerHeight, "px");
      break;
    case 'width-priority':
      image.style.width = "".concat(containerWidth, "px");
      break;
    case 'fit':
      image.style.width = "".concat(containerWidth, "px");
      image.style.height = "".concat(containerHeight, "px");
      image.style.objectFit = 'cover';
      break;
  }
}
async function getModalBackgroundConfig() {
  if (cachedModalBackgroundConfig !== null) {
    return cachedModalBackgroundConfig;
  }
  if (modalBackgroundConfigPromise) {
    return modalBackgroundConfigPromise;
  }
  modalBackgroundConfigPromise = (async () => {
    const settings = (await bgDB.getSetting('settings')) || {};
    if (settings.EnableModalBG === false || !settings.ModalBGLink) {
      return null;
    }
    return {
      link: settings.ModalBGLink,
      layout: settings.ModalBGLayout || 'fit',
      blur: Number(settings.ModalBGBlur) || 0,
      opacity: typeof settings.ModalBGOpacity === 'number' ? settings.ModalBGOpacity : 0.35,
      offsetX: Number(settings.ModalBGOffsetX) || 0,
      offsetY: Number(settings.ModalBGOffsetY) || 0,
      modalSize: Number.isFinite(Number(settings.ModalBGSize)) ? Number(settings.ModalBGSize) : 100,
      alignX: settings.ModalBGAlignX || 'center',
      alignY: settings.ModalBGAlignY || 'center'
    };
  })();
  try {
    cachedModalBackgroundConfig = await modalBackgroundConfigPromise;
    return cachedModalBackgroundConfig;
  } finally {
    modalBackgroundConfigPromise = null;
  }
}
let wallpaperRotationTimer = null;
function getWallpaperRotationInterval() {
  let settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const intervalMinutes = Number(settings.WallpaperRotationIntervalMinutes);
  return intervalMinutes > 0 ? intervalMinutes * 60 * 1000 : 5 * 60 * 1000;
}
async function getWallpaperRotationList() {
  let settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  const resolvedSettings = settings || (await bgDB.getSetting('settings')) || {};
  const savedList = Array.isArray(resolvedSettings.WallpaperRotationList) ? resolvedSettings.WallpaperRotationList : null;
  if (savedList && savedList.length) {
    const validIds = [];
    const seenIds = new Set();
    for (const wallpaperId of savedList) {
      if (seenIds.has(wallpaperId)) continue;
      seenIds.add(wallpaperId);
      const wallpaper = await bgDB.getWallpaper(wallpaperId);
      if (wallpaper && wallpaper.enabled !== false) {
        validIds.push(wallpaperId);
      }
    }
    if (validIds.length > 0) {
      return validIds;
    }
  }
  const wallpapers = await bgDB.listWallpapers({
    enabledOnly: true
  });
  return wallpapers.map(item => item.id);
}
async function syncWallpaperSelection() {
  let _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref3$preferredId = _ref3.preferredId,
    preferredId = _ref3$preferredId === void 0 ? null : _ref3$preferredId,
    _ref3$settings = _ref3.settings,
    settings = _ref3$settings === void 0 ? null : _ref3$settings;
  const resolvedSettings = settings || (await bgDB.getSetting('settings')) || {};
  const list = await getWallpaperRotationList(resolvedSettings);
  if (!list.length) {
    await applySettings('WallpaperRotationIndex', 0);
    await applySettings('currentWallpaperId', null);
    return null;
  }
  let selectedId = preferredId;
  if (!selectedId || !list.includes(selectedId)) {
    const savedCurrentWallpaperId = resolvedSettings.currentWallpaperId;
    if (savedCurrentWallpaperId && list.includes(savedCurrentWallpaperId)) {
      selectedId = savedCurrentWallpaperId;
    }
  }
  if (!selectedId || !list.includes(selectedId)) {
    const savedIndex = Number(resolvedSettings.WallpaperRotationIndex);
    if (Number.isInteger(savedIndex) && savedIndex >= 0 && savedIndex < list.length) {
      selectedId = list[savedIndex];
    }
  }
  if (!selectedId || !list.includes(selectedId)) {
    selectedId = list[0];
  }
  const selectedIndex = list.indexOf(selectedId);
  await applySettings('WallpaperRotationIndex', selectedIndex);
  await applySettings('currentWallpaperId', selectedId);
  return {
    list,
    wallpaperId: selectedId,
    index: selectedIndex
  };
}
async function advanceWallpaperRotationIndex() {
  const settings = (await bgDB.getSetting('settings')) || {};
  const syncedSelection = await syncWallpaperSelection({
    settings
  });
  if (!syncedSelection) return null;
  const list = syncedSelection.list,
    currentIndex = syncedSelection.index;
  const nextIndex = (currentIndex + 1) % list.length;
  await applySettings('WallpaperRotationIndex', nextIndex);
  await applySettings('currentWallpaperId', list[nextIndex]);
  return list[nextIndex];
}
async function stopWallpaperRotationTimer() {
  if (wallpaperRotationTimer !== null) {
    window.clearTimeout(wallpaperRotationTimer);
    wallpaperRotationTimer = null;
  }
}
async function scheduleWallpaperRotationTimer() {
  await stopWallpaperRotationTimer();
  const settings = (await bgDB.getSetting('settings')) || {};
  if (!settings.WallpaperRotationEnabled) return;
  const interval = getWallpaperRotationInterval(settings);
  wallpaperRotationTimer = window.setTimeout(async () => {
    try {
      await advanceWallpaperRotationIndex();
      await refreshWorkSpaceBackground();
    } catch (e) {
      console.warn('Wallpaper rotation timer error:', e);
    } finally {
      await scheduleWallpaperRotationTimer();
    }
  }, interval);
}
async function initializeWallpaperRotation() {
  const enabled = await getSetting('WallpaperRotationEnabled');
  if (enabled) {
    await scheduleWallpaperRotationTimer();
  } else {
    await stopWallpaperRotationTimer();
  }
}
function clearWallpaperTransitionTimeout() {
  if (wallpaperTransitionTimeout !== null) {
    window.clearTimeout(wallpaperTransitionTimeout);
    wallpaperTransitionTimeout = null;
  }
}
async function setCurrentWallpaperId(id) {
  await applySettings('currentWallpaperId', id);
  await applySettings('EnableWorkSpaceBG', true);
  await syncWallpaperSelection({
    preferredId: id
  });
  document.documentElement.style.setProperty('--enable-workspace-background', 'transparent');
  await refreshWorkSpaceBackground();
}
async function updateWallpaperEnabled(id, enabled) {
  const wallpaper = await bgDB.getWallpaper(id);
  if (!wallpaper) return;
  wallpaper.enabled = enabled;
  await bgDB.saveWallpaper(wallpaper);
  await syncWallpaperSelection();
  await refreshWorkSpaceBackground();
}
async function deleteWallpaperAndRefresh(id) {
  await bgDB.deleteWallpaper(id);
  const currentId = await getSetting('currentWallpaperId');
  if (currentId === id) {
    await applySettings('currentWallpaperId', null);
  }
  await syncWallpaperSelection();
  await refreshWorkSpaceBackground();
}
async function getActiveWorkspaceWallpaper() {
  const settings = (await bgDB.getSetting('settings')) || {};
  if (settings.EnableWorkSpaceBG === false) return null;
  if (settings.WallpaperRotationEnabled) {
    const syncedSelection = await syncWallpaperSelection({
      settings
    });
    if (!syncedSelection) return null;
    return await bgDB.getWallpaper(syncedSelection.wallpaperId);
  }
  if (settings.currentWallpaperId) {
    const wallpaper = await bgDB.getWallpaper(settings.currentWallpaperId);
    if (wallpaper) return wallpaper;
  }
  const syncedSelection = await syncWallpaperSelection({
    settings
  });
  if (!syncedSelection) return null;
  return await bgDB.getWallpaper(syncedSelection.wallpaperId);
}
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref4) {
  let addon = _ref4.addon,
    msg = _ref4.msg;
  let bgButton;

  // 初始化数据库并加载保存的背景
  bgDB = new BackgroundDB();
  await bgDB.open();

  // 加载保存的背景
  await refreshWorkSpaceBackground();
  await initializeWallpaperRotation();

  /**
   * 监听工作区，防止blocks重绘时把我刚刚放进去的img干丢了
   * */
  const addObserver = async () => {
    try {
      const observer = new MutationObserver(async () => {
        if (isRefreshingBG) return;
        const workspace = document.querySelector('[class*=gui_blocks-wrapper]');
        const bg = document.querySelector('.sa-background-image');
        if (workspace && !bg) {
          await refreshWorkSpaceBackground();
        }
      });
      observer.observe(document, {
        childList: true,
        subtree: true
      });
    } catch (e) {
      console.warn('Warning: Failed to add Observer:', e);
    }
  };
  addObserver();
  window.addEventListener('resize', () => {
    resizeWorkspaceBackground();
    scheduleModalBackgroundUpdate();
  });
  window.addEventListener('modal-opened', () => {
    scheduleModalBackgroundUpdate();
  });
  while (true) {
    const elem = await addon.tab.waitForElement('div[class*="menu-bar_file-group"] > div:last-child:not(.sa-background)', {
      markAsSeen: true,
      reduxEvents: ['scratch-gui/mode/SET_PLAYER', 'fontsLoaded/SET_FONTS_LOADED', 'scratch-gui/locales/SELECT_LOCALE']
    });
    if (!bgButton) {
      bgButton = Object.assign(document.createElement('div'), {
        className: 'sa-background ' + elem.className,
        textContent: msg('background')
      });
      bgButton.addEventListener('click', () => {
        showBgModal(addon, msg);
      });
    }
    elem.parentElement.appendChild(bgButton);
  }
});
function showBgModal(addon, msg) {
  const _addon$tab$createModa = addon.tab.createModal(msg('background-title'), {
      isOpen: true,
      useEditorClasses: true
    }),
    backdrop = _addon$tab$createModa.backdrop,
    container = _addon$tab$createModa.container,
    content = _addon$tab$createModa.content,
    closeButton = _addon$tab$createModa.closeButton,
    remove = _addon$tab$createModa.remove;
  container.classList.add('sa-background-popup');
  content.classList.add('sa-background-content');
  addContext(content, addon, msg).then(() => {
    addModalBackground();
  });
  backdrop.addEventListener('click', remove);
  closeButton.addEventListener('click', remove);
}
async function addContext(modal, addon, msg) {
  const modalConfig = await getModalBackgroundConfig();
  const modalSettings = {
    enabled: modalConfig !== null,
    link: modalConfig ? modalConfig.link : null,
    layout: modalConfig ? modalConfig.layout : 'fit',
    blur: modalConfig ? modalConfig.blur : 0,
    opacity: modalConfig ? modalConfig.opacity : 0.35,
    offsetX: modalConfig ? modalConfig.offsetX : 0,
    offsetY: modalConfig ? modalConfig.offsetY : 0,
    modalSize: modalConfig ? modalConfig.modalSize : 100,
    alignX: modalConfig ? modalConfig.alignX : 'center',
    alignY: modalConfig ? modalConfig.alignY : 'center'
  };

  // Workspace
  // Add BG
  const workspaceAddButton = document.createElement('button');
  workspaceAddButton.className = 'sa-background-add';
  workspaceAddButton.textContent = (await getSetting('WallpaperRotationEnabled')) ? msg('add') : msg('replace');
  workspaceAddButton.addEventListener('click', () => {
    workspaceAddPicInput.click();
    document.documentElement.style.setProperty('--enable-workspace-background', 'transparent');
    applySettings('EnableWorkSpaceBG', true);
  });
  const workspaceClearButton = document.createElement('button');
  workspaceClearButton.className = 'sa-background-add';
  workspaceClearButton.innerHTML = msg('disable');
  workspaceClearButton.addEventListener('click', async () => {
    await applySettings('EnableWorkSpaceBG', false);
    document.documentElement.style.setProperty('--enable-workspace-background', 'var(--ui-secondary)');
    await refreshWorkSpaceBackground();
    await refreshWallpaperList();
  });
  const workspaceAddPicInput = document.createElement('input');
  workspaceAddPicInput.type = 'file';
  workspaceAddPicInput.accept = '.png, .bmp, .jpg, .jpeg';
  workspaceAddPicInput.multiple = true;
  workspaceAddPicInput.addEventListener('change', async e => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const isRotationEnabled = await getSetting('WallpaperRotationEnabled');
    const currentId = isRotationEnabled ? null : await getSetting('currentWallpaperId');
    const savedIds = await Promise.all(files.map((file, index) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async loadEvent => {
        try {
          const wallpaperId = isRotationEnabled ? "WorkSpaceBG-".concat(Date.now(), "-").concat(index) : currentId || "WorkSpaceBG-".concat(Date.now(), "-").concat(index);
          await bgDB.saveWallpaper({
            id: wallpaperId,
            name: file.name,
            link: loadEvent.target.result,
            enabled: true
          });
          resolve(wallpaperId);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = err => reject(err);
      reader.readAsDataURL(file);
    })));
    await applySettings('EnableWorkSpaceBG', true);
    if (savedIds.length) {
      await applySettings('currentWallpaperId', savedIds[0]);
    }
    await syncWallpaperSelection({
      preferredId: savedIds[0] || null
    });
    await refreshWorkSpaceBackground();
    await refreshWallpaperList();
    workspaceAddPicInput.value = '';
  });

  // Helper function to create section headers similar to settings modal
  const createHeader = title => {
    const headerDiv = document.createElement('div');
    headerDiv.className = 'sa-background-section-header';
    const titleElement = document.createElement('span');
    titleElement.className = 'sa-background-section-title';
    titleElement.textContent = title;
    const divider = document.createElement('div');
    divider.className = 'sa-background-divider';
    headerDiv.appendChild(titleElement);
    headerDiv.appendChild(divider);
    return headerDiv;
  };
  const createControlLabel = labelNode => {
    const label = document.createElement('div');
    label.className = 'sa-background-control-label';
    if (typeof labelNode === 'string') {
      label.textContent = labelNode;
    } else if (labelNode) {
      label.appendChild(labelNode);
    }
    return label;
  };
  const createControlInput = function createControlInput() {
    const input = document.createElement('div');
    input.className = 'sa-background-control-input';
    for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
      nodes[_key] = arguments[_key];
    }
    for (const node of nodes) {
      if (node) input.appendChild(node);
    }
    return input;
  };
  const createControlRow = function createControlRow(labelNode) {
    const row = document.createElement('div');
    row.className = 'sa-background-control-row';
    row.appendChild(createControlLabel(labelNode));
    for (var _len2 = arguments.length, controlNodes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      controlNodes[_key2 - 1] = arguments[_key2];
    }
    row.appendChild(createControlInput(...controlNodes));
    return row;
  };
  const createFullRow = function createFullRow() {
    const row = document.createElement('div');
    row.className = 'sa-background-control-row sa-background-control-row-full';
    const content = document.createElement('div');
    content.className = 'sa-background-control-full';
    for (var _len3 = arguments.length, nodes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      nodes[_key3] = arguments[_key3];
    }
    for (const node of nodes) {
      if (node) content.appendChild(node);
    }
    row.appendChild(content);
    return row;
  };
  const createFormGrid = () => {
    const grid = document.createElement('div');
    grid.className = 'sa-background-form-grid';
    return grid;
  };
  const createRangeControl = function createRangeControl(input) {
    let formatValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => String(value);
    const wrapper = document.createElement('div');
    wrapper.className = 'sa-background-range-control';
    const value = document.createElement('span');
    value.className = 'sa-background-range-value';
    const sync = () => {
      value.textContent = formatValue(input.value);
    };
    input.addEventListener('input', sync);
    sync();
    wrapper.appendChild(input);
    wrapper.appendChild(value);
    return {
      element: wrapper,
      sync
    };
  };
  const createPreview = emptyText => {
    const wrapper = document.createElement('div');
    wrapper.className = 'sa-background-preview';
    const image = document.createElement('img');
    image.className = 'sa-background-preview-image';
    image.alt = '';
    image.draggable = false;
    const empty = document.createElement('span');
    empty.className = 'sa-background-preview-empty';
    empty.textContent = emptyText;
    wrapper.appendChild(image);
    wrapper.appendChild(empty);
    return {
      wrapper,
      image,
      empty
    };
  };
  const setPreviewSource = function setPreviewSource(preview, source) {
    let altText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    const hasSource = Boolean(source);
    preview.image.hidden = !hasSource;
    preview.empty.hidden = hasSource;
    preview.image.src = hasSource ? source : '';
    preview.image.alt = altText;
  };
  const setPreviewAppearance = function setPreviewAppearance(preview) {
    let _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref5$blur = _ref5.blur,
      blur = _ref5$blur === void 0 ? 0 : _ref5$blur,
      _ref5$opacity = _ref5.opacity,
      opacity = _ref5$opacity === void 0 ? 1 : _ref5$opacity;
    preview.image.style.filter = "blur(".concat(blur, "px)");
    preview.image.style.opacity = "".concat(opacity);
  };
  const workspaceTitle = createHeader(msg('background-workspace'));
  const rotateTitle = createHeader(msg('background-rotate'));
  const modalTitle = createHeader(msg('background-modal'));

  // Layout
  const workspaceImageLayout = document.createElement('select');
  const workspaceImageLayoutValue = (await getSetting('WorkSpaceBGLayout')) || 'stretch';
  workspaceImageLayout.className = 'sa-background-layout';
  [{
    name: msg('background-layout-stretch'),
    value: 'stretch'
  }, {
    name: msg('background-layout-height-priority'),
    value: 'height-priority'
  }, {
    name: msg('background-layout-width-priority'),
    value: 'width-priority'
  }, {
    name: msg('background-layout-fit'),
    value: 'fit'
  }].forEach(layout => {
    const option = document.createElement('option');
    option.value = layout.value;
    option.textContent = layout.name;
    workspaceImageLayout.appendChild(option);
  });
  workspaceImageLayout.value = workspaceImageLayoutValue;
  workspaceImageLayout.addEventListener('change', async e => {
    await applySettings('WorkSpaceBGLayout', e.target.value);
    resizeWorkspaceBackground();
  });

  // Blur
  const workspaceBlur = document.createElement('input');
  workspaceBlur.type = 'range';
  workspaceBlur.min = 0;
  workspaceBlur.max = 20;
  workspaceBlur.value = (await getSetting('WorkSpaceBGBlur')) || 0;
  workspaceBlur.className = 'sa-background-blur';
  workspaceBlur.addEventListener('input', async () => {
    applySettings('WorkSpaceBGBlur', workspaceBlur.value);
    await refreshWorkSpaceBackground();
    await refreshPreviews();
  });
  // Opacity
  const workspaceOpacity = document.createElement('input');
  workspaceOpacity.type = 'range';
  workspaceOpacity.min = 0;
  workspaceOpacity.max = 100;
  workspaceOpacity.value = (await getSetting('WorkSpaceBGOpacity')) * 100 || 50;
  workspaceOpacity.className = 'sa-background-opacity';
  workspaceOpacity.addEventListener('input', async () => {
    applySettings('WorkSpaceBGOpacity', workspaceOpacity.value / 100);
    await refreshWorkSpaceBackground();
    await refreshPreviews();
  });
  const workspaceBlurControl = createRangeControl(workspaceBlur, value => "".concat(value, "px"));
  const workspaceOpacityControl = createRangeControl(workspaceOpacity, value => "".concat(value, "%"));

  // Offset X
  const workspaceOffsetXText = document.createElement('span');
  workspaceOffsetXText.textContent = msg('background-offset-x');
  const workspaceOffsetX = document.createElement('input');
  workspaceOffsetX.type = 'number';
  workspaceOffsetX.min = '-500';
  workspaceOffsetX.max = '500';
  workspaceOffsetX.step = '1';
  workspaceOffsetX.value = (await getSetting('WorkSpaceBGOffsetX')) || 0;
  workspaceOffsetX.className = 'sa-background-offset';
  workspaceOffsetX.classList.add(addon.tab.scratchClass('input_input-form'));
  workspaceOffsetX.addEventListener('input', async () => {
    applySettings('WorkSpaceBGOffsetX', Number(workspaceOffsetX.value));
    await refreshWorkSpaceBackground();
  });

  // Offset Y
  const workspaceOffsetYText = document.createElement('span');
  workspaceOffsetYText.textContent = msg('background-offset-y');
  const workspaceOffsetY = document.createElement('input');
  workspaceOffsetY.type = 'number';
  workspaceOffsetY.min = '-500';
  workspaceOffsetY.max = '500';
  workspaceOffsetY.step = '1';
  workspaceOffsetY.value = (await getSetting('WorkSpaceBGOffsetY')) || 0;
  workspaceOffsetY.className = 'sa-background-offset';
  workspaceOffsetY.classList.add(addon.tab.scratchClass('input_input-form'));
  workspaceOffsetY.addEventListener('input', async () => {
    applySettings('WorkSpaceBGOffsetY', Number(workspaceOffsetY.value));
    await refreshWorkSpaceBackground();
  });
  const modalAddButton = document.createElement('button');
  modalAddButton.className = 'sa-background-add';
  modalAddButton.textContent = msg('add');
  const modalClearButton = document.createElement('button');
  modalClearButton.className = 'sa-background-add';
  modalClearButton.textContent = msg('clear');
  const modalAddPicInput = document.createElement('input');
  modalAddPicInput.type = 'file';
  modalAddPicInput.accept = '.png, .bmp, .jpg, .jpeg';
  modalAddPicInput.addEventListener('change', async e => {
    const _Array$from = Array.from(e.target.files || []),
      _Array$from2 = _slicedToArray(_Array$from, 1),
      file = _Array$from2[0];
    if (!file) return;
    await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async loadEvent => {
        try {
          modalSettings.link = loadEvent.target.result;
          modalSettings.enabled = true;
          await applySettings('ModalBGLink', modalSettings.link);
          await applySettings('ModalBGName', file.name);
          await applySettings('EnableModalBG', modalSettings.enabled);
          await addModalBackground();
          await refreshPreviews();
          resolve();
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = err => reject(err);
      reader.readAsDataURL(file);
    });
    modalAddPicInput.value = '';
  });
  modalAddButton.addEventListener('click', () => {
    modalAddPicInput.click();
  });
  modalClearButton.addEventListener('click', async () => {
    modalSettings.enabled = false;
    modalSettings.link = null;
    document.documentElement.style.setProperty('--enable-modal-background', 'var(--ui-modal-background)');
    await applySettings('EnableModalBG', modalSettings.enabled);
    await applySettings('ModalBGLink', null);
    await applySettings('ModalBGName', null);
    await addModalBackground();
    await refreshPreviews();
  });
  const modalImageLayout = document.createElement('select');
  const modalImageLayoutValue = modalSettings.layout;
  modalImageLayout.className = 'sa-background-layout';
  [{
    name: msg('background-layout-stretch'),
    value: 'stretch'
  }, {
    name: msg('background-layout-height-priority'),
    value: 'height-priority'
  }, {
    name: msg('background-layout-width-priority'),
    value: 'width-priority'
  }, {
    name: msg('background-layout-fit'),
    value: 'fit'
  }, {
    name: msg('background-layout-fixed'),
    value: 'fixed'
  }].forEach(layout => {
    const option = document.createElement('option');
    option.value = layout.value;
    option.textContent = layout.name;
    modalImageLayout.appendChild(option);
  });
  modalImageLayout.value = modalImageLayoutValue;
  modalImageLayout.addEventListener('change', async e => {
    modalSettings.layout = e.target.value;
    await applySettings('ModalBGLayout', modalSettings.layout);
    await addModalBackground();
  });
  const modalBlur = document.createElement('input');
  modalBlur.type = 'range';
  modalBlur.min = 0;
  modalBlur.max = 20;
  modalBlur.value = modalSettings.blur;
  modalBlur.className = 'sa-background-blur';
  modalBlur.addEventListener('input', async () => {
    modalSettings.blur = Number(modalBlur.value);
    await applySettings('ModalBGBlur', modalSettings.blur);
    await addModalBackground();
    await refreshPreviews();
  });
  const modalOpacity = document.createElement('input');
  modalOpacity.type = 'range';
  modalOpacity.min = 0;
  modalOpacity.max = 100;
  modalOpacity.value = modalSettings.opacity * 100;
  modalOpacity.className = 'sa-background-opacity';
  modalOpacity.addEventListener('input', async () => {
    modalSettings.opacity = Number(modalOpacity.value) / 100;
    await applySettings('ModalBGOpacity', modalSettings.opacity);
    await addModalBackground();
    await refreshPreviews();
  });
  const modalBlurControl = createRangeControl(modalBlur, value => "".concat(value, "px"));
  const modalOpacityControl = createRangeControl(modalOpacity, value => "".concat(value, "%"));
  const modalOffsetX = document.createElement('input');
  modalOffsetX.type = 'number';
  modalOffsetX.min = '-500';
  modalOffsetX.max = '500';
  modalOffsetX.step = '1';
  modalOffsetX.value = modalSettings.offsetX;
  modalOffsetX.className = 'sa-background-offset';
  modalOffsetX.classList.add(addon.tab.scratchClass('input_input-form'));
  modalOffsetX.addEventListener('input', async () => {
    modalSettings.offsetX = Number(modalOffsetX.value) || 0;
    await applySettings('ModalBGOffsetX', modalSettings.offsetX);
    await addModalBackground();
  });
  const modalOffsetY = document.createElement('input');
  modalOffsetY.type = 'number';
  modalOffsetY.min = '-500';
  modalOffsetY.max = '500';
  modalOffsetY.step = '1';
  modalOffsetY.value = modalSettings.offsetY;
  modalOffsetY.className = 'sa-background-offset';
  modalOffsetY.classList.add(addon.tab.scratchClass('input_input-form'));
  modalOffsetY.addEventListener('input', async () => {
    modalSettings.offsetY = Number(modalOffsetY.value) || 0;
    await applySettings('ModalBGOffsetY', modalSettings.offsetY);
    await addModalBackground();
  });
  const modalSize = document.createElement('input');
  modalSize.type = 'number';
  modalSize.min = '0';
  modalSize.max = '500';
  modalSize.step = '1';
  modalSize.value = modalSettings.modalSize;
  modalSize.className = 'sa-background-size';
  modalSize.classList.add(addon.tab.scratchClass('input_input-form'));
  modalSize.addEventListener('input', async () => {
    const value = Number(modalSize.value);
    modalSettings.modalSize = Number.isFinite(value) ? value : 100;
    await applySettings('ModalBGSize', modalSettings.modalSize);
    await addModalBackground();
  });
  const modalAlignX = document.createElement('select');
  const modalAlignXValue = modalSettings.alignX;
  modalAlignX.className = 'sa-background-layout';
  [{
    name: msg('background-align-left'),
    value: 'left'
  }, {
    name: msg('background-align-center'),
    value: 'center'
  }, {
    name: msg('background-align-right'),
    value: 'right'
  }].forEach(optionData => {
    const option = document.createElement('option');
    option.value = optionData.value;
    option.textContent = optionData.name;
    modalAlignX.appendChild(option);
  });
  modalAlignX.value = modalAlignXValue;
  modalAlignX.addEventListener('change', async e => {
    modalSettings.alignX = e.target.value;
    await applySettings('ModalBGAlignX', modalSettings.alignX);
    await addModalBackground();
  });
  const modalAlignY = document.createElement('select');
  const modalAlignYValue = modalSettings.alignY;
  modalAlignY.className = 'sa-background-layout';
  [{
    name: msg('background-align-top'),
    value: 'top'
  }, {
    name: msg('background-align-center'),
    value: 'center'
  }, {
    name: msg('background-align-bottom'),
    value: 'bottom'
  }].forEach(optionData => {
    const option = document.createElement('option');
    option.value = optionData.value;
    option.textContent = optionData.name;
    modalAlignY.appendChild(option);
  });
  modalAlignY.value = modalAlignYValue;
  modalAlignY.addEventListener('change', async e => {
    modalSettings.alignY = e.target.value;
    await applySettings('ModalBGAlignY', modalSettings.alignY);
    await addModalBackground();
  });

  // Animation Duration
  const animationDuration = document.createElement('input');
  animationDuration.type = 'range';
  animationDuration.min = 0;
  animationDuration.max = 2000;
  animationDuration.step = 100;
  animationDuration.value = (await getSetting('WorkSpaceBGAnimationDuration')) || 500;
  animationDuration.className = 'sa-background-animation-duration';
  animationDuration.addEventListener('input', async () => {
    applySettings('WorkSpaceBGAnimationDuration', Number(animationDuration.value));
  });
  const animationDurationControl = createRangeControl(animationDuration, value => "".concat(value, "ms"));
  const workspaceDiv = document.createElement('section');
  workspaceDiv.className = 'sa-background-panel sa-background-blur-wrapper';
  const workspaceBlurText = document.createElement('span');
  workspaceBlurText.textContent = msg('background-blur');
  const workspaceOpacityText = document.createElement('span');
  workspaceOpacityText.textContent = msg('background-opacity');
  const modalBlurText = document.createElement('span');
  modalBlurText.textContent = msg('background-blur');
  const modalOpacityText = document.createElement('span');
  modalOpacityText.textContent = msg('background-opacity');
  const modalOffsetXText = document.createElement('span');
  modalOffsetXText.textContent = msg('background-offset-x');
  const modalOffsetYText = document.createElement('span');
  modalOffsetYText.textContent = msg('background-offset-y');
  const modalSizeText = document.createElement('span');
  modalSizeText.textContent = msg('background-size');
  const modalAlignXText = document.createElement('span');
  modalAlignXText.textContent = msg('background-align-horizontal');
  const modalAlignYText = document.createElement('span');
  modalAlignYText.textContent = msg('background-align-vertical');
  const animationDurationText = document.createElement('span');
  animationDurationText.textContent = msg('animation-duration');
  const previewEmptyText = msg('background-preview-empty');
  const workspacePreview = createPreview(previewEmptyText);
  const modalPreview = createPreview(previewEmptyText);
  const modalDiv = document.createElement('section');
  modalDiv.className = 'sa-background-panel sa-background-blur-wrapper';

  // Rotation UI
  const rotationDiv = document.createElement('section');
  rotationDiv.className = 'sa-background-panel sa-background-rotation-wrapper';
  const rotationToggleLabel = document.createElement('label');
  rotationToggleLabel.className = 'sa-background-rotation-label';
  const rotationToggle = document.createElement('input');
  rotationToggle.type = 'checkbox';
  rotationToggle.checked = (await getSetting('WallpaperRotationEnabled')) || false;
  rotationToggle.addEventListener('change', async () => {
    document.querySelector('.sa-background-rotation-all').style.display = rotationToggle.checked ? '' : 'none';
    workspaceAddButton.textContent = rotationToggle.checked ? msg('add') : msg('replace');
    await applySettings('WallpaperRotationEnabled', rotationToggle.checked);
    await syncWallpaperSelection();
    await initializeWallpaperRotation();
    await refreshWorkSpaceBackground();
    await refreshWallpaperList();
  });
  rotationToggleLabel.appendChild(rotationToggle);
  rotationToggleLabel.appendChild(document.createTextNode(' ' + msg('rotation-enable')));
  const intervalLabel = document.createElement('span');
  intervalLabel.textContent = msg('rotation-interval');
  const intervalInput = document.createElement('input');
  intervalInput.type = 'number';
  intervalInput.min = '1';
  intervalInput.value = (await getSetting('WallpaperRotationIntervalMinutes')) || 5;
  intervalInput.className = 'sa-background-rotation-interval';
  intervalInput.classList.add(addon.tab.scratchClass('input_input-form'));
  intervalInput.addEventListener('change', async () => {
    await applySettings('WallpaperRotationIntervalMinutes', Number(intervalInput.value) || 5);
    await initializeWallpaperRotation();
  });
  const rotateNowButton = document.createElement('button');
  rotateNowButton.className = 'sa-background-add';
  rotateNowButton.textContent = msg('rotate-now');
  rotateNowButton.addEventListener('click', async () => {
    await advanceWallpaperRotationIndex();
    await refreshWorkSpaceBackground();
    await refreshWallpaperList();
  });
  const wallpaperListContainer = document.createElement('div');
  wallpaperListContainer.className = 'sa-background-wallpaper-list';
  async function refreshPreviews() {
    const activeWallpaper = await getActiveWorkspaceWallpaper();
    setPreviewSource(workspacePreview, activeWallpaper && activeWallpaper.link ? activeWallpaper.link : null, activeWallpaper && activeWallpaper.name ? activeWallpaper.name : msg('background-workspace'));
    setPreviewAppearance(workspacePreview, {
      blur: Number(workspaceBlur.value) || 0,
      opacity: (Number(workspaceOpacity.value) || 0) / 100
    });
    setPreviewSource(modalPreview, modalSettings.enabled && modalSettings.link ? modalSettings.link : null, msg('background-modal'));
    setPreviewAppearance(modalPreview, {
      blur: Number(modalBlur.value) || 0,
      opacity: (Number(modalOpacity.value) || 0) / 100
    });
  }
  async function refreshWallpaperList() {
    const settings = (await bgDB.getSetting('settings')) || {};
    const isBackgroundVisible = settings.EnableWorkSpaceBG !== false;
    const activeWallpaper = await getActiveWorkspaceWallpaper();
    const currentWallpaperId = activeWallpaper ? activeWallpaper.id : await getSetting('currentWallpaperId');
    const wallpapers = await bgDB.listWallpapers();
    wallpaperListContainer.innerHTML = '';
    wallpapers.forEach((wallpaper, index) => {
      const isCurrent = wallpaper.id === currentWallpaperId;
      const right = document.createElement('div');
      right.className = 'sa-background-wallpaper-item';
      const title = document.createElement('span');
      title.textContent = wallpaper.name || wallpaper.id;
      title.className = wallpaper.enabled ? 'sa-background-wallpaper-title' : 'sa-background-wallpaper-title disabled';
      const enabledLabel = document.createElement('label');
      enabledLabel.className = 'sa-background-wallpaper-enabled-label';
      const enabledInput = document.createElement('input');
      enabledInput.type = 'checkbox';
      enabledInput.checked = wallpaper.enabled !== false;
      enabledInput.addEventListener('change', async () => {
        await updateWallpaperEnabled(wallpaper.id, enabledInput.checked);
        await refreshWallpaperList();
      });
      enabledLabel.appendChild(enabledInput);
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '×';
      deleteButton.className = 'sa-background-delete';
      deleteButton.addEventListener('click', async () => {
        await deleteWallpaperAndRefresh(wallpaper.id);
        await refreshWallpaperList();
      });
      const left = document.createElement('div');
      left.className = 'sa-background-left';
      if (isCurrent) {
        left.classList.add('sa-background-wallpaper-current');
      }
      if (!(isCurrent && isBackgroundVisible)) {
        left.classList.add('sa-background-wallpaper-selectable');
        left.addEventListener('click', async () => {
          await setCurrentWallpaperId(wallpaper.id);
          await refreshWallpaperList();
        });
      }
      left.appendChild(enabledLabel);
      left.appendChild(title);
      right.appendChild(deleteButton);
      const content = document.createElement('div');
      content.className = 'sa-background-list-content';
      if (isCurrent) {
        content.classList.add('sa-background-list-content-current');
      }
      content.style.animationDelay = "".concat(index * 100, "ms");
      content.style.opacity = 0;
      content.appendChild(left);
      content.appendChild(right);
      wallpaperListContainer.appendChild(content);
    });
    await refreshPreviews();
  }
  const workspaceForm = createFormGrid();
  const modalForm = createFormGrid();
  const rotationForm = createFormGrid();
  const workspaceAddClearWrapper = document.createElement('div');
  workspaceAddClearWrapper.className = 'sa-background-actions';
  workspaceAddClearWrapper.appendChild(workspaceAddButton);
  workspaceAddClearWrapper.appendChild(workspaceClearButton);
  const modalActions = document.createElement('div');
  modalActions.className = 'sa-background-actions';
  modalActions.appendChild(modalAddButton);
  modalActions.appendChild(modalClearButton);
  const rotationListShell = document.createElement('div');
  rotationListShell.className = 'sa-background-list-shell';
  rotationListShell.appendChild(wallpaperListContainer);
  workspaceForm.appendChild(createControlRow(msg('background-layout'), workspaceImageLayout));
  workspaceForm.appendChild(createControlRow(workspaceBlurText, workspaceBlurControl.element));
  workspaceForm.appendChild(createControlRow(workspaceOpacityText, workspaceOpacityControl.element));
  workspaceForm.appendChild(createControlRow(workspaceOffsetXText, workspaceOffsetX));
  workspaceForm.appendChild(createControlRow(workspaceOffsetYText, workspaceOffsetY));
  workspaceForm.appendChild(createFullRow(workspaceAddClearWrapper));
  modalForm.appendChild(createControlRow(msg('background-layout'), modalImageLayout));
  modalForm.appendChild(createFullRow(modalActions));
  modalForm.appendChild(createControlRow(modalBlurText, modalBlurControl.element));
  modalForm.appendChild(createControlRow(modalOpacityText, modalOpacityControl.element));
  modalForm.appendChild(createControlRow(modalSizeText, modalSize));
  modalForm.appendChild(createControlRow(modalAlignXText, modalAlignX));
  modalForm.appendChild(createControlRow(modalAlignYText, modalAlignY));
  modalForm.appendChild(createControlRow(modalOffsetXText, modalOffsetX));
  modalForm.appendChild(createControlRow(modalOffsetYText, modalOffsetY));
  rotationForm.appendChild(createFullRow(rotationToggleLabel));
  const rotationAllDiv = document.createElement('div');
  rotationAllDiv.className = 'sa-background-rotation-all';
  rotationAllDiv.style.display = rotationToggle.checked ? '' : 'none';
  rotationAllDiv.appendChild(createControlRow(animationDurationText, animationDurationControl.element));
  rotationAllDiv.appendChild(createControlRow(intervalLabel, intervalInput));
  rotationAllDiv.appendChild(createFullRow(rotateNowButton));
  rotationAllDiv.appendChild(createFullRow(rotationListShell));
  rotationForm.append(rotationAllDiv);
  workspaceDiv.appendChild(workspaceTitle);
  workspaceDiv.appendChild(workspacePreview.wrapper);
  workspaceDiv.appendChild(workspaceForm);
  rotationDiv.appendChild(rotateTitle);
  rotationDiv.appendChild(rotationForm);
  modalDiv.appendChild(modalTitle);
  modalDiv.appendChild(modalPreview.wrapper);
  modalDiv.appendChild(modalForm);
  const content = document.createElement('div');
  content.className = 'sa-background-content-wrapper';
  content.appendChild(workspaceDiv);
  content.appendChild(rotationDiv);
  content.appendChild(modalDiv);
  modal.appendChild(content);
  await refreshWallpaperList();
  await refreshPreviews();
}
function getModalBackgroundPosition(alignX, alignY, offsetX, offsetY) {
  const normalize = (align, offset, axis) => {
    if (align === 'center') {
      return "calc(50% + ".concat(offset, "px)");
    }
    if (align === (axis === 'x' ? 'right' : 'bottom')) {
      return "calc(100% + ".concat(offset, "px)");
    }
    return "calc(0% + ".concat(offset, "px)");
  };
  return "".concat(normalize(alignX, offsetX, 'x'), " ").concat(normalize(alignY, offsetY, 'y'));
}
async function addModalBackground() {
  try {
    const config = await getModalBackgroundConfig();
    const modalContents = Array.from(document.querySelectorAll('[class*=\"modal_content\"]'));
    if (!modalContents.length) return;
    const modalBackgrounds = Array.from(new Set(modalContents.map(content => {
      const fullscreenShell = content.closest('.sa-modal-shell-fullscreen');
      return fullscreenShell || content;
    })));
    const resetModalBackground = target => {
      if (!target) return;
      target.classList.remove('sa-modal-background-enabled');
      target.classList.remove('sa-modal-background-fullscreen');
      target.style.removeProperty('--sa-modal-bg-image');
      target.style.removeProperty('--sa-modal-bg-size');
      target.style.removeProperty('--sa-modal-bg-position');
      target.style.removeProperty('--sa-modal-bg-blur');
      target.style.removeProperty('--sa-modal-bg-opacity');
      target.style.removeProperty('--sa-modal-bg-modalsize');
    };
    document.querySelectorAll('[class*="library_library-scroll-grid"]').forEach(ele => ele.style.background = 'transparent');
    if (!config) {
      document.documentElement.style.setProperty('--enable-modal-background', 'var(--ui-modal-background)');
      modalBackgrounds.forEach(resetModalBackground);
      return;
    }
    document.documentElement.style.setProperty('--enable-modal-background', 'transparent');
    const modalSizeValue = Number.isFinite(config.modalSize) ? config.modalSize : 100;
    const isNoFit = modalSizeValue === 0;
    let modalSizeFactor = isNoFit ? 1 : Math.max(modalSizeValue, 10) / 100;
    let backgroundSize;
    if (config.layout === 'fixed') {
      backgroundSize = "".concat(modalSizeValue, "px");
      modalSizeFactor = 1; // no scale for fixed
    } else {
      let backgroundLayout = 'cover';
      switch (config.layout) {
        case 'stretch':
          backgroundLayout = '100% 100%';
          break;
        case 'height-priority':
          backgroundLayout = 'auto 100%';
          break;
        case 'width-priority':
          backgroundLayout = '100% auto';
          break;
        case 'fit':
          backgroundLayout = 'cover';
          break;
      }
      backgroundSize = isNoFit ? 'auto' : backgroundLayout;
    }
    const backgroundPosition = getModalBackgroundPosition(config.alignX, config.alignY, config.offsetX, config.offsetY);
    modalBackgrounds.forEach(bg => {
      resetModalBackground(bg);
      bg.classList.add('sa-modal-background-enabled');
      bg.classList.toggle('sa-modal-background-fullscreen', Boolean(bg.closest('.sa-modal-shell-fullscreen')));
      bg.style.setProperty('--sa-modal-bg-image', "url(\"".concat(config.link, "\")"));
      bg.style.setProperty('--sa-modal-bg-size', backgroundSize);
      bg.style.setProperty('--sa-modal-bg-position', backgroundPosition);
      bg.style.setProperty('--sa-modal-bg-blur', "".concat(config.blur, "px"));
      bg.style.setProperty('--sa-modal-bg-opacity', "".concat(config.opacity));
      bg.style.setProperty('--sa-modal-bg-modalsize', "".concat(modalSizeFactor));
    });
  } catch (e) {
    console.warn('Failed to add modal background settings:', e);
  }
}
async function resizeWorkspaceBackground() {
  try {
    const mode = (await getSetting('WorkSpaceBGLayout')) || 'stretch';
    const offsetX = (await getSetting('WorkSpaceBGOffsetX')) || 0;
    const offsetY = (await getSetting('WorkSpaceBGOffsetY')) || 0;
    const workspace = document.querySelector('[class*=gui_blocks-wrapper]');
    const bgImage = document.querySelector('.sa-background-image');
    if (bgImage && workspace) {
      applyBackgroundLayout({
        image: bgImage,
        containerWidth: workspace.clientWidth,
        containerHeight: workspace.clientHeight,
        mode,
        offsetX,
        offsetY
      });
    } else {
      console.warn('Cannot find background image element, try to spawn again');
      await refreshWorkSpaceBackground();
    }
  } catch (e) {
    console.warn('Failed to resize background image:', e);
  }
}
async function refreshWorkSpaceBackground() {
  if (isRefreshingBG) return;
  isRefreshingBG = true;
  const refreshToken = ++wallpaperRefreshToken;
  try {
    const animationDuration = (await getSetting('WorkSpaceBGAnimationDuration')) || 500;
    const isWorkspaceBackgroundEnabled = await getSetting('EnableWorkSpaceBG');
    document.documentElement.style.setProperty('--enable-workspace-background', isWorkspaceBackgroundEnabled === false ? 'var(--ui-secondary)' : 'transparent');
    clearWallpaperTransitionTimeout();
    const wallpaper = await getActiveWorkspaceWallpaper();
    const existingClips = Array.from(document.querySelectorAll('.sa-background-clip'));
    const existingBg = existingClips[0] ? existingClips[0].querySelector('.sa-background-image') : null;
    existingClips.slice(1).forEach(clip => clip.remove());
    if (!wallpaper || !wallpaper.link) {
      if (existingBg) {
        existingBg.style.transition = "opacity ".concat(animationDuration, "ms ease-out");
        existingBg.style.opacity = '0';
        wallpaperTransitionTimeout = window.setTimeout(() => {
          if (refreshToken !== wallpaperRefreshToken) return;
          existingBg.closest('.sa-background-clip').remove();
          wallpaperTransitionTimeout = null;
          isRefreshingBG = false;
        }, animationDuration);
      } else {
        isRefreshingBG = false;
      }
      return;
    }
    const workspace = document.querySelector('[class*=gui_blocks-wrapper]');
    if (!workspace) {
      isRefreshingBG = false;
      return;
    }
    if (existingBg && existingBg.dataset.wallpaperId === wallpaper.id) {
      existingBg.src = wallpaper.link;
      existingBg.style.filter = "blur(".concat((await getSetting('WorkSpaceBGBlur')) || 0, "px)");
      existingBg.style.opacity = "".concat((await getSetting('WorkSpaceBGOpacity')) || 0.5);
      await resizeWorkspaceBackground();
      isRefreshingBG = false;
      return;
    }
    if (existingBg) {
      existingBg.style.transition = "opacity ".concat(animationDuration, "ms ease-out");
      existingBg.style.opacity = '0';
      wallpaperTransitionTimeout = window.setTimeout(async () => {
        if (refreshToken !== wallpaperRefreshToken) return;
        existingBg.closest('.sa-background-clip').remove();
        await createNewBackground(wallpaper, workspace, animationDuration);
        wallpaperTransitionTimeout = null;
        isRefreshingBG = false;
      }, animationDuration);
    } else {
      await createNewBackground(wallpaper, workspace, animationDuration);
      isRefreshingBG = false;
    }
  } catch (e) {
    console.log(e);
    isRefreshingBG = false;
  }
}
async function createNewBackground(wallpaper, workspace, animationDuration) {
  clearWallpaperTransitionTimeout();
  workspace.querySelectorAll('.sa-background-clip').forEach(clip => clip.remove());
  const clip = document.createElement('div');
  clip.className = 'sa-background-clip';
  const background = document.createElement('img');
  background.className = 'sa-background-image';
  background.dataset.wallpaperId = wallpaper.id || '';
  background.src = wallpaper.link;
  background.style.filter = "blur(".concat((await getSetting('WorkSpaceBGBlur')) || 0, "px)");
  background.style.opacity = '0'; // Start invisible
  background.draggable = false;
  background.style.transition = "opacity ".concat(animationDuration, "ms ease-in"); // Add transition for fade in

  clip.appendChild(background);
  workspace.prepend(clip);
  await resizeWorkspaceBackground();

  // Trigger fade in
  requestAnimationFrame(async () => {
    background.style.opacity = "".concat((await getSetting('WorkSpaceBGOpacity')) || 0.5);
  });
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-background.js.map