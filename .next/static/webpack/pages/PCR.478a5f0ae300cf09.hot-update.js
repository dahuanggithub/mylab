"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/PCR",{

/***/ "./src/components/navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navitem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navitem */ \"./src/components/navitem.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Navbar() {\n    _s();\n    const navs = [\n        {\n            link: \"/\",\n            title: \"Home\"\n        },\n        {\n            link: \"/PCR\",\n            title: \"PCR\"\n        }\n    ];\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"nav\",\n            children: navs.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navitem__WEBPACK_IMPORTED_MODULE_2__.Navitem, {\n                    isActive: x.link === router.asPath,\n                    link: x.link,\n                    title: x.title\n                }, x.link, false, {\n                    fileName: \"C:\\\\myproject\\\\mylab\\\\src\\\\components\\\\navbar.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 23\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\myproject\\\\mylab\\\\src\\\\components\\\\navbar.tsx\",\n            lineNumber: 13,\n            columnNumber: 8\n        }, this)\n    }, void 0, false);\n}\n_s(Navbar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3VDO0FBQ0c7QUFFM0IsU0FBU0U7O0lBQ3BCLE1BQU1DLE9BQW1CO1FBQ3ZCO1lBQUNDLE1BQU07WUFBSUMsT0FBTTtRQUFNO1FBQ3ZCO1lBQUNELE1BQUs7WUFBT0MsT0FBTTtRQUFLO0tBQ3pCO0lBQ0QsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLHFCQUNFO2tCQUNDLDRFQUFDTztZQUFJQyxXQUFVO3NCQUNiTCxLQUFLTSxHQUFHLENBQUNDLENBQUFBLGtCQUFJLDhEQUFDVCw2Q0FBT0E7b0JBQWNVLFVBQVVELEVBQUVOLElBQUksS0FBS0UsT0FBT00sTUFBTTtvQkFBRVIsTUFBTU0sRUFBRU4sSUFBSTtvQkFBRUMsT0FBT0ssRUFBRUwsS0FBSzttQkFBeEVLLEVBQUVOLElBQUk7Ozs7Ozs7Ozs7O0FBSXhDO0dBYnNCRjs7UUFLTEYsa0RBQVNBOzs7S0FMSkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLnRzeD81ZjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lLCBCdXR0b24sQm94IH0gZnJvbSAnQHJhZGl4LXVpL3RoZW1lcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7TmF2aXRlbSxOYXZQcm9wc30gZnJvbSBcIi4vbmF2aXRlbVwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZiYXIubW9kdWxlLmNzcydcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gICAgY29uc3QgbmF2czogTmF2UHJvcHNbXSA9IFtcclxuICAgICAge2xpbms6ICcvJyx0aXRsZTonSG9tZSd9LFxyXG4gICAgICB7bGluazonL1BDUicsdGl0bGU6J1BDUid9XHJcbiAgICBdXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAge25hdnMubWFwKHg9PiA8TmF2aXRlbSBrZXk9e3gubGlua30gaXNBY3RpdmU9e3gubGluayA9PT0gcm91dGVyLmFzUGF0aH0gbGluaz17eC5saW5rfSB0aXRsZT17eC50aXRsZX0gPjwvTmF2aXRlbT4pfVxyXG4gICAgICAgPC9uYXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTmF2aXRlbSIsIk5hdmJhciIsIm5hdnMiLCJsaW5rIiwidGl0bGUiLCJyb3V0ZXIiLCJuYXYiLCJjbGFzc05hbWUiLCJtYXAiLCJ4IiwiaXNBY3RpdmUiLCJhc1BhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/navbar.tsx\n"));

/***/ })

});