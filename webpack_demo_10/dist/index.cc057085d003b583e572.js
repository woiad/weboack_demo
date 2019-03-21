(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "dSPy":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return print; });\nfunction print(text) {\n    console.log(text)\n}\n\n\n\n//# sourceURL=webpack:///./src/print.js?");

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"LvDl\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ \"dSPy\");\n\n\n\n\nfunction component() {\n\n    let element = document.createElement('div')\n    let btn = document.createElement('button')\n\n    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], '')\n    btn.innerHTML = '点击在这里，查看 console'\n     btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(null, 'hello webpack!')\n    element.appendChild(btn)\n    return element\n}\n\ndocument.body.appendChild(component())\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

},[["tjUo","runtime","vendors"]]]);