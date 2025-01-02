/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\r\n*::after,\r\n*::before {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n        Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\r\n        sans-serif;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 1fr 10fr;\r\n}\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nheader {\r\n    grid-column: 1/-1;\r\n    background-color: rgb(249, 230, 255);\r\n    border-bottom: 1px solid black;\r\n    padding: 0 1rem;\r\n}\r\n\r\naside {\r\n    border: 1px solid black;\r\n    border-top: none;\r\n    grid-row: 2/-1;\r\n    padding: 1rem;\r\n}\r\n\r\n.projects-container {\r\n    padding: 1rem;\r\n    display: grid;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, calc(24%)));\r\n    grid-template-rows: 1fr;\r\n}\r\n\r\n/* TODO PROPERTIES */\r\n.todo > div {\r\n    display: none;\r\n}\r\n.active ~ div {\r\n    display: block;\r\n}\r\n\r\n.todo > div:hover {\r\n    filter: brightness(98%);\r\n}\r\n\r\n.project {\r\n    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);\r\n    -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);\r\n    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);\r\n    border-radius: 1rem;\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-auto-rows: minmax(min-content, 5px);\r\n    grid-template-rows: 100px minmax(min-content, 5px);\r\n    flex-direction: column;\r\n}\r\n.project button {\r\n    width: fit-content;\r\n    justify-self: center;\r\n    background-color: red;\r\n    border: none;\r\n    color: white;\r\n    font-weight: 1000;\r\n    margin-top: 1rem;\r\n    align-self: auto;\r\n}\r\n.project > .todo {\r\n    padding: 0 1rem;\r\n}\r\n\r\n/* remove todo button */\r\nimg {\r\n    width: 24px;\r\n}\r\n.dueDate {\r\n    align-self: center;\r\n    font-size: 0.8rem;\r\n    border: 1px solid rgb(49, 204, 49);\r\n    color: rgb(49, 204, 49);\r\n}\r\n\r\nh2 {\r\n    align-self: center;\r\n}\r\n.project h2 {\r\n    color: white;\r\n    margin: 0 0 1rem 0;\r\n    height: calc(100% - 1rem);\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: red;\r\n    text-align: center;\r\n}\r\n.project h3 {\r\n    cursor: pointer;\r\n    text-transform: capitalize;\r\n    display: flex;\r\n    gap: 0 0.5rem;\r\n    > img:last-child {\r\n        margin-left: auto;\r\n    }\r\n    margin: 0;\r\n    font-weight: 500;\r\n}\r\n/* FORM  */\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\nlegend {\r\n    align-self: center;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    align-self: center;\r\n    padding: 1rem 1.2rem;\r\n}\r\n\r\ndialog {\r\n    width: 30%;\r\n    font-size: larger;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _utils_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/project.js */ \"./src/utils/project.js\");\n/* harmony import */ var _utils_todos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/todos.js */ \"./src/utils/todos.js\");\n/* harmony import */ var _utils_TodoForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/TodoForm.js */ \"./src/utils/TodoForm.js\");\n/* harmony import */ var _utils_renderProject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/renderProject.js */ \"./src/utils/renderProject.js\");\n/* harmony import */ var _utils_mediator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/mediator.js */ \"./src/utils/mediator.js\");\n/* harmony import */ var _utils_ProjectForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/ProjectForm.js */ \"./src/utils/ProjectForm.js\");\n/* harmony import */ var _utils_ProjectContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ProjectContainer.js */ \"./src/utils/ProjectContainer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst projectContainer = document.querySelector(\".projects-container\");\r\nconst dialogDeleteProject = document.querySelector(\".delete-project-dialog\");\r\nconst deleteProjectButton = document.querySelector(\".delete-project-button\");\r\nconst addProjectButton = document.querySelector(\".add-project-button\");\r\nconst projectContainerInstance = new _utils_ProjectContainer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](projectContainer);\r\n\r\nlet projects = [];\r\ntry {\r\n    const projectNames = JSON.parse(localStorage.getItem(\"Projects\")); //['ergerhg', 'wefwef']\r\n    projects = projectNames.map((name, index) => {\r\n        const project = new _utils_project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\r\n        const todoItems = localStorage.getItem(`todoItems${index}`)\r\n            ? JSON.parse(localStorage.getItem(`todoItems${index}`))\r\n            : [];\r\n        todoItems.forEach((todo) => {\r\n            project.addElement(new _utils_todos_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](...todo));\r\n        });\r\n        return project;\r\n    });\r\n} catch (e) {\r\n    console.log(e);\r\n    projects = [\r\n        new _utils_project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n            \"First Project\",\r\n            new _utils_todos_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Title\", \"Description\", 1, \"2025-01-01\"),\r\n            new _utils_todos_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n                \"Another Title\",\r\n                \"Another description\",\r\n                3,\r\n                \"2025-11-11\"\r\n            )\r\n        ),\r\n    ];\r\n}\r\nconst allProjects = projects.map((project) => {\r\n    return new _utils_renderProject_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](projectContainer, project);\r\n});\r\n\r\nfunction createTodo(title, priority = 0, description, dueDate) {\r\n    return new _utils_todos_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](title, description, priority, dueDate);\r\n}\r\nfunction createProject(name) {\r\n    return new _utils_renderProject_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](projectContainer, new _utils_project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name));\r\n}\r\n\r\nconst todoFormRenderer = new _utils_TodoForm_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n    document.querySelector(\".todo-dialog\"),\r\n    document.querySelector(\".todo-dialog form\"),\r\n    createTodo\r\n);\r\n\r\nconst projectForm = new _utils_ProjectForm_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\r\n    document.querySelector(\".project-dialog\"),\r\n    document.querySelector(\".project-dialog form\"),\r\n    createProject\r\n);\r\n\r\nprojectForm.setupSubmitButton(document.querySelector(\".project-dialog button\"));\r\n\r\ntodoFormRenderer.setupSubmitButton(\r\n    document.querySelector(\".todo-dialog button\")\r\n);\r\ntodoFormRenderer.setupCloseButton(\r\n    document.querySelector(\".close-todo-form-creation\")\r\n);\r\n\r\nallProjects.forEach((projectRenderer) =>\r\n    projectContainerInstance.addProject(projectRenderer)\r\n);\r\n\r\naddProjectButton.addEventListener(\"click\", () => {\r\n    _utils_mediator_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].emit(\"openProjectForm\", projectContainerInstance.projects);\r\n});\r\n\r\ndeleteProjectButton.addEventListener(\"click\", () => {\r\n    dialogDeleteProject.showModal();\r\n});\r\n\r\nprojectContainerInstance.setEventListeners(\r\n    addProjectButton,\r\n    deleteProjectButton,\r\n    dialogDeleteProject\r\n);\r\n\r\n_utils_mediator_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].subscribe(\"renderProjectContainer\", () => {\r\n    projectContainerInstance.render();\r\n});\r\n\n\n//# sourceURL=webpack://todolist/./src/script.js?");

/***/ }),

/***/ "./src/utils/ProjectContainer.js":
/*!***************************************!*\
  !*** ./src/utils/ProjectContainer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediator */ \"./src/utils/mediator.js\");\n\r\nclass ProjectContainer {\r\n    constructor(container) {\r\n        this.container = container;\r\n        this.projects = [];\r\n    }\r\n    addProject(projectRenderer) {\r\n        this.projects.push(projectRenderer);\r\n        this.render();\r\n    }\r\n    removeProject(index) {\r\n        this.projects.splice(index, 1);\r\n        this.render();\r\n    }\r\n    render() {\r\n        this.container.innerHTML = \"\";\r\n        this.saveLocalProjects(this.projects);\r\n        this.projects.forEach((projectRenderer, index) => {\r\n            projectRenderer.setIndex(index);\r\n            projectRenderer.render();\r\n            projectRenderer.append();\r\n        });\r\n    }\r\n    saveLocalProjects(projects) {\r\n        const projectNames = projects.map((projectRenderer) => {\r\n            return projectRenderer.project.name;\r\n        });\r\n        localStorage.setItem(`Projects`, JSON.stringify(projectNames));\r\n        console.log(projectNames);\r\n    }\r\n    renderDeletingProject(dialog) {\r\n        dialog.innerHTML = \"\";\r\n        const ul = document.createElement(\"ul\");\r\n        const h2 = document.createElement(\"h2\");\r\n        h2.textContent = \"Which project to delete?\";\r\n        ul.appendChild(h2);\r\n        ul.classList.add(\"projects\");\r\n        this.projects.forEach((projectRenderer, index) => {\r\n            const button = document.createElement(\"button\");\r\n            button.textContent = projectRenderer.project.name;\r\n            button.addEventListener(\"click\", () => {\r\n                this.removeProject(index);\r\n                dialog.close();\r\n            });\r\n            ul.appendChild(button);\r\n        });\r\n        dialog.appendChild(ul);\r\n    }\r\n    setEventListeners(\r\n        addProjectButton,\r\n        deleteProjectButton,\r\n        dialogDeleteProject\r\n    ) {\r\n        addProjectButton.addEventListener(\"click\", () => {\r\n            _mediator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit(\"openProjectForm\", this.projects);\r\n        });\r\n\r\n        deleteProjectButton.addEventListener(\"click\", () => {\r\n            this.renderDeletingProject(dialogDeleteProject);\r\n            dialogDeleteProject.showModal();\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectContainer);\r\n\n\n//# sourceURL=webpack://todolist/./src/utils/ProjectContainer.js?");

/***/ }),

/***/ "./src/utils/ProjectForm.js":
/*!**********************************!*\
  !*** ./src/utils/ProjectForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediator */ \"./src/utils/mediator.js\");\n\r\nclass ProjectForm {\r\n    constructor(dialog, form, createProject) {\r\n        this.dialog = dialog;\r\n        this.createProject = createProject;\r\n        this.form = form;\r\n        this.currentProject = null;\r\n        _mediator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(\"openProjectForm\", (projects) => {\r\n            this.projects = projects;\r\n            this.dialog.showModal();\r\n        });\r\n    }\r\n\r\n    setupSubmitButton(button) {\r\n        button.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            if (!this.projects) return;\r\n            const formdata = new FormData(this.form);\r\n            const name = formdata.get(\"project-name\");\r\n            if (name.trim() === \"\") {\r\n                return;\r\n            }\r\n            const newProject = this.createProject(name);\r\n            this.projects.push(newProject);\r\n            _mediator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit(\"renderProjectContainer\");\r\n            this.dialog.close();\r\n            this.form.reset();\r\n        });\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectForm);\r\n\n\n//# sourceURL=webpack://todolist/./src/utils/ProjectForm.js?");

/***/ }),

/***/ "./src/utils/TodoForm.js":
/*!*******************************!*\
  !*** ./src/utils/TodoForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediator */ \"./src/utils/mediator.js\");\n\r\nclass TodoForm {\r\n    constructor(dialog, form, createTodoItem) {\r\n        this.dialog = dialog;\r\n        this.createTodoItem = createTodoItem;\r\n        this.form = form;\r\n        this.currentProject = null;\r\n        _mediator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(\"openTodoForm\", (project) => {\r\n            this.currentProject = project;\r\n            this.dialog.showModal();\r\n        });\r\n    }\r\n\r\n    setupCloseButton(button) {\r\n        button.addEventListener(\"click\", () => {\r\n            this.dialog.close();\r\n            console.log(1);\r\n        });\r\n    }\r\n    setupSubmitButton(button) {\r\n        button.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            if (!this.currentProject) return;\r\n            const formdata = new FormData(this.form);\r\n            const data = Array.from(formdata.values());\r\n            if (data.includes(\"\")) {\r\n                return alert(\"All fields must be filled out.\");\r\n            }\r\n            const newTodo = this.createTodoItem(...data);\r\n            this.currentProject.addElement(newTodo);\r\n            _mediator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit(\"createdTodo\", this.currentProject);\r\n            this.dialog.close();\r\n            this.form.reset();\r\n        });\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoForm);\r\n\n\n//# sourceURL=webpack://todolist/./src/utils/TodoForm.js?");

/***/ }),

/***/ "./src/utils/mediator.js":
/*!*******************************!*\
  !*** ./src/utils/mediator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Mediator {\r\n    constructor() {\r\n        this.subscribers = {};\r\n    }\r\n    subscribe(eventType, callback) {\r\n        if (!this.subscribers[eventType]) {\r\n            this.subscribers[eventType] = [];\r\n        }\r\n        this.subscribers[eventType].push(callback);\r\n    }\r\n    unsubscribe(eventType, callback) {\r\n        if (!this.subscribers[eventType]) {\r\n            return;\r\n        }\r\n        this.subscribers[eventType] = this.subscribers[eventType].filter(\r\n            (callbacks) => {\r\n                return callbacks !== callback;\r\n            }\r\n        );\r\n    }\r\n\r\n    emit(eventType, args) {\r\n        if (this.subscribers[eventType]) {\r\n            this.subscribers[eventType].forEach((fn) => fn(args));\r\n        }\r\n    }\r\n}\r\n\r\nconst mediator = new Mediator();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mediator);\r\n\n\n//# sourceURL=webpack://todolist/./src/utils/mediator.js?");

/***/ }),

/***/ "./src/utils/project.js":
/*!******************************!*\
  !*** ./src/utils/project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\r\n    constructor(name, ...elements) {\r\n        this.name = name;\r\n        this.elements = elements;\r\n    }\r\n    addElement(element) {\r\n        this.elements.push(element);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\r\n\n\n//# sourceURL=webpack://todolist/./src/utils/project.js?");

/***/ }),

/***/ "./src/utils/renderProject.js":
/*!************************************!*\
  !*** ./src/utils/renderProject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediator */ \"./src/utils/mediator.js\");\n/* harmony import */ var _images_close_box_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/close-box-outline.svg */ \"./src/images/close-box-outline.svg\");\n\r\n\r\n\r\nclass RenderProject {\r\n    constructor(parent, project) {\r\n        this.parent = parent;\r\n        this.project = project;\r\n        this.todos = project.elements;\r\n        this.projectDOM = document.createElement(\"div\");\r\n        this.sortByPriority(this.todos);\r\n        _mediator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(\"createdTodo\", (project) => {\r\n            if (this.project === project) {\r\n                this.sortByPriority(this.todos);\r\n                this.render();\r\n            }\r\n        });\r\n    }\r\n\r\n    saveLocalTodos(index) {\r\n        const propertyValues = this.project.elements.map((todo) => {\r\n            return Object.values(todo);\r\n        });\r\n        localStorage.setItem(\r\n            `todoItems${index}`,\r\n            JSON.stringify(propertyValues)\r\n        );\r\n    }\r\n\r\n    setIndex(index) {\r\n        this.projectDOM.dataset.index = index;\r\n    }\r\n    append() {\r\n        this.parent.appendChild(this.projectDOM);\r\n    }\r\n    render() {\r\n        this.saveLocalTodos(this.projectDOM.dataset.index);\r\n        this.projectDOM.innerHTML = \"\";\r\n        this.projectDOM.classList.add(\"project\");\r\n        const title = document.createElement(\"h2\");\r\n        title.textContent += this.project.name;\r\n        this.projectDOM.appendChild(title);\r\n        for (let i = 0; i < this.todos.length; i++) {\r\n            this.renderTodoElement(i);\r\n        }\r\n\r\n        this.renderAddButton(this.projectDOM);\r\n    }\r\n    sortByPriority(todos) {\r\n        todos.sort((a, b) => a.priority - b.priority);\r\n    }\r\n    renderAddButton(parent) {\r\n        const button = document.createElement(\"button\");\r\n        button.classList.add(\"open-todo-button\");\r\n        button.textContent = \"Add To-Do\";\r\n        parent.appendChild(button);\r\n        button.addEventListener(\"click\", () => {\r\n            _mediator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit(\"openTodoForm\", this.project);\r\n        });\r\n    }\r\n    toggleDescription(title) {\r\n        title.addEventListener(\"click\", () => {\r\n            if (title.classList.contains(\"active\")) {\r\n                title.classList.remove(\"active\");\r\n            } else {\r\n                title.classList.add(\"active\");\r\n            }\r\n        });\r\n    }\r\n\r\n    renderDeleteButton(index) {\r\n        const button = document.createElement(\"img\");\r\n        button.src = _images_close_box_outline_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n        button.addEventListener(\"click\", () => {\r\n            this.todos.splice(index, 1);\r\n            _mediator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit(\"renderProjectContainer\");\r\n        });\r\n        return button;\r\n    }\r\n    renderTodoElement(i) {\r\n        const todo = document.createElement(\"div\"); // todo = div, this.todos=array\r\n        this.projectDOM.appendChild(todo);\r\n        todo.classList.add(\"todo\");\r\n        const title = document.createElement(\"h3\");\r\n        title.textContent = `${this.todos[i].title}`;\r\n        const dueDate = document.createElement(\"div\");\r\n        dueDate.classList.add(\"dueDate\");\r\n        dueDate.textContent = `${this.todos[i].dueDate}`;\r\n        title.appendChild(dueDate);\r\n        this.toggleDescription(title);\r\n        title.appendChild(this.renderDeleteButton(i));\r\n        todo.appendChild(title);\r\n        const description = document.createElement(\"div\");\r\n        description.textContent = `${this.todos[i].description}`;\r\n        this.descriptionChange(description, i);\r\n        todo.appendChild(description);\r\n    }\r\n    descriptionChange(description, i) {\r\n        description.addEventListener(\"mouseenter\", () => {\r\n            const input = document.createElement(\"input\");\r\n            input.value = description.textContent;\r\n            description.textContent = \"\";\r\n            input.addEventListener(\"change\", () => {\r\n                this.todos[i].description = input.value;\r\n            });\r\n            description.appendChild(input);\r\n        });\r\n        description.addEventListener(\"mouseexit\", () => {\r\n            description.innerHTML = \"\";\r\n            description.textContent = this.todos[i].description;\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderProject);\r\n\n\n//# sourceURL=webpack://todolist/./src/utils/renderProject.js?");

/***/ }),

/***/ "./src/utils/todos.js":
/*!****************************!*\
  !*** ./src/utils/todos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TodoElement {\r\n    constructor(title, description, priority = 0, dueDate) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.priority = priority;\r\n        this.dueDate = dueDate;\r\n    }\r\n    get properties() {\r\n        return [this.description, this.dueDate];\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoElement);\r\n\n\n//# sourceURL=webpack://todolist/./src/utils/todos.js?");

/***/ }),

/***/ "./src/images/close-box-outline.svg":
/*!******************************************!*\
  !*** ./src/images/close-box-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d179acdee772aa5ecda.svg\";\n\n//# sourceURL=webpack://todolist/./src/images/close-box-outline.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;