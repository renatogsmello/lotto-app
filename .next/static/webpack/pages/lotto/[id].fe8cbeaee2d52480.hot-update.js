"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lotto/[id]",{

/***/ "./pages/lotto/[id].js":
/*!*****************************!*\
  !*** ./pages/lotto/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MoreLotto\": function() { return /* binding */ MoreLotto; },\n/* harmony export */   \"default\": function() { return /* binding */ Lotto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nfunction Lotto() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(router.query.id ? \"/api/lotto/\".concat(router.query.id) : null, fetcher), data = ref.data, error = ref.error;\n    console.log(fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        /*#__PURE__*/ children: \"Failed to load lotto\"\n    }, void 0, false, {\n        fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n        lineNumber: 11,\n        columnNumber: 20\n    }, this);\n    console.log(data);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n        lineNumber: 13,\n        columnNumber: 20\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                borderRadius: \".5rem\",\n                backgroundColor: data.theme,\n                padding: \"1.5rem\",\n                textAlign: \"center\",\n                margin: \"1.5rem\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: data.lotteryName\n                }, void 0, false, {\n                    fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                    lineNumber: 26,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"picture\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                            srcSet: \"/images/\".concat(data.lotteryLogo),\n                            type: \"image/svg+xml\"\n                        }, void 0, false, {\n                            fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                            lineNumber: 28,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/images/\".concat(data.lotteryLogo),\n                            alt: \"Lotto Logo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                            lineNumber: 29,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"\\u20AC\"\n                        }, void 0, false, {\n                            fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                            lineNumber: 32,\n                            columnNumber: 6\n                        }, this),\n                        data.jackpotPrice\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-clock\"\n                        }, void 0, false, {\n                            fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                            lineNumber: 36,\n                            columnNumber: 6\n                        }, this),\n                        data.drawTime\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                    lineNumber: 35,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-play\"\n                        }, void 0, false, {\n                            fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                            lineNumber: 40,\n                            columnNumber: 6\n                        }, this),\n                        \"Play\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                    lineNumber: 39,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n            lineNumber: 17,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n};\n_s(Lotto, \"0ST1BDL2a2x8mdZH1V3Mxu6c/7s=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Lotto;\nfunction MoreLotto(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    borderRadius: \".5rem\",\n                    backgroundImage: \"linear-gradient(45deg, #dc2626, #c026d3, #7c3aed, #2563eb, #0891b2, #65a30d)\",\n                    padding: \"1.5rem\",\n                    textAlign: \"center\",\n                    margin: \"1.5rem\",\n                    display: \"flex\",\n                    alignItems: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"jsx-f1335050177528cd\",\n                    children: \"More Jackpots Coming Soon\"\n                }, void 0, false, {\n                    fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                    lineNumber: 62,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"f1335050177528cd\",\n                children: \"h2.jsx-f1335050177528cd{color:#fff}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n}\n_c1 = MoreLotto;\nvar _c, _c1;\n$RefreshReg$(_c, \"Lotto\");\n$RefreshReg$(_c1, \"MoreLotto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEVBQUUsTUFBTTtvQkFDZkMsVUFBVSxFQUFFLFFBQVE7aUJBQ3BCOzBCQUVELDRFQUFDQyxJQUFFOzs4QkFBQywyQkFBeUI7Ozs7O3dCQUFLOzs7OztvQkFDN0I7Ozs7OztvQkFRSixDQUNIO0NBQ0Q7QUF6QmVMLE1BQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG90dG8vW2lkXS5qcz9jYzYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gXCJAc2t5bmV4dWkvY29tcG9uZW50c1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHVzZVN3ciBmcm9tIFwic3dyXCJcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG90dG8oKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVN3cihyb3V0ZXIucXVlcnkuaWQgPyBgL2FwaS9sb3R0by8ke3JvdXRlci5xdWVyeS5pZH1gIDogbnVsbCwgZmV0Y2hlcilcblx0Y29uc29sZS5sb2coZmV0Y2hlcilcblxuXHRpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkIGxvdHRvPC9kaXY+XG5cdGNvbnNvbGUubG9nKGRhdGEpXG5cdGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxCb3hcblx0XHRcdFx0c3R5bGVTaGVldD17e1xuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIuNXJlbVwiLFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogZGF0YS50aGVtZSxcblx0XHRcdFx0XHRwYWRkaW5nOiBcIjEuNXJlbVwiLFxuXHRcdFx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRtYXJnaW46IFwiMS41cmVtXCIsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxoMz57ZGF0YS5sb3R0ZXJ5TmFtZX08L2gzPlxuXHRcdFx0XHQ8cGljdHVyZT5cblx0XHRcdFx0XHQ8c291cmNlIHNyY1NldD17YC9pbWFnZXMvJHtkYXRhLmxvdHRlcnlMb2dvfWB9IHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgLz5cblx0XHRcdFx0XHQ8aW1nIHNyYz17YC9pbWFnZXMvJHtkYXRhLmxvdHRlcnlMb2dvfWB9IGFsdD1cIkxvdHRvIExvZ29cIiAvPlxuXHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHRcdDxoMT5cblx0XHRcdFx0XHQ8c3Ryb25nPiZldXJvOzwvc3Ryb25nPlxuXHRcdFx0XHRcdHtkYXRhLmphY2twb3RQcmljZX1cblx0XHRcdFx0PC9oMT5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsb2NrXCI+PC9pPlxuXHRcdFx0XHRcdHtkYXRhLmRyYXdUaW1lfVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbGF5XCI+PC9pPlxuXHRcdFx0XHRcdFBsYXlcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L0JveD5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTW9yZUxvdHRvKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxCb3hcblx0XHRcdFx0c3R5bGVTaGVldD17e1xuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIuNXJlbVwiLFxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNkYzI2MjYsICNjMDI2ZDMsICM3YzNhZWQsICMyNTYzZWIsICMwODkxYjIsICM2NWEzMGQpXCIsXG5cdFx0XHRcdFx0cGFkZGluZzogXCIxLjVyZW1cIixcblx0XHRcdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0bWFyZ2luOiBcIjEuNXJlbVwiLFxuXHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxoMj5Nb3JlIEphY2twb3RzIENvbWluZyBTb29uPC9oMj5cblx0XHRcdDwvQm94PlxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHRoMiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvPlxuXHQpXG59XG4iXSwibmFtZXMiOlsiQm94IiwidXNlUm91dGVyIiwidXNlU3dyIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJMb3R0byIsInJvdXRlciIsInF1ZXJ5IiwiaWQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGVTaGVldCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwicGFkZGluZyIsInRleHRBbGlnbiIsIm1hcmdpbiIsImgzIiwibG90dGVyeU5hbWUiLCJwaWN0dXJlIiwic291cmNlIiwic3JjU2V0IiwibG90dGVyeUxvZ28iLCJ0eXBlIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJzdHJvbmciLCJqYWNrcG90UHJpY2UiLCJwIiwiaSIsImNsYXNzTmFtZSIsImRyYXdUaW1lIiwiYnV0dG9uIiwiTW9yZUxvdHRvIiwicHJvcHMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/lotto/[id].js\n");

/***/ })

});