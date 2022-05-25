"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/lotto/[id]";
exports.ids = ["pages/lotto/[id]"];
exports.modules = {

/***/ "./pages/lotto/[id].js":
/*!*****************************!*\
  !*** ./pages/lotto/[id].js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MoreLotto\": () => (/* binding */ MoreLotto),\n/* harmony export */   \"default\": () => (/* binding */ Lotto)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"next/dist/shared/lib/styled-jsx\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_4__]);\nswr__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((res)=>res.json()\n    )\n;\nfunction Lotto() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(router.query.id ? `/api/lotto/${router.query.id}` : null, fetcher);\n    console.log(fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        /*#__PURE__*/ children: \"Failed to load lotto\"\n    }, void 0, false, {\n        fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n        lineNumber: 11,\n        columnNumber: 20\n    }, this);\n    console.log(data);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n        lineNumber: 13,\n        columnNumber: 20\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                borderRadius: \".5rem\",\n                backgroundColor: data.theme,\n                padding: \"1.5rem\",\n                textAlign: \"center\",\n                margin: \"1.5rem\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: data.lotteryName\n                }, void 0, false, {\n                    fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                    lineNumber: 26,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"picture\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                            srcSet: `/images/${data.lotteryLogo}`,\n                            type: \"image/svg+xml\"\n                        }, void 0, false, {\n                            fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                            lineNumber: 28,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: `/images/${data.lotteryLogo}`,\n                            alt: \"Lotto Logo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                            lineNumber: 29,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"\\u20AC\"\n                        }, void 0, false, {\n                            fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                            lineNumber: 32,\n                            columnNumber: 6\n                        }, this),\n                        data.jackpotPrice\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-clock\"\n                        }, void 0, false, {\n                            fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                            lineNumber: 36,\n                            columnNumber: 6\n                        }, this),\n                        data.drawTime\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                    lineNumber: 35,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-play\"\n                        }, void 0, false, {\n                            fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                            lineNumber: 40,\n                            columnNumber: 6\n                        }, this),\n                        \"Play\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                    lineNumber: 39,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n            lineNumber: 17,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n};\nfunction MoreLotto(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    borderRadius: \".5rem\",\n                    backgroundImage: \"linear-gradient(45deg, #dc2626, #c026d3, #7c3aed, #2563eb, #0891b2, #65a30d)\",\n                    padding: \"1.5rem\",\n                    textAlign: \"center\",\n                    margin: \"1.5rem\",\n                    display: \"flex\",\n                    alignItems: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"jsx-f1335050177528cd\",\n                    children: \"More Jackpots Coming Soon\"\n                }, void 0, false, {\n                    fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                    lineNumber: 62,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/renatomello/Documents/projetos/lotto-app/pages/lotto/[id].js\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"f1335050177528cd\",\n                children: \"h2.jsx-f1335050177528cd{color:#fff}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVFKLENBQ0g7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xvdHRvLWFwcC8uL3BhZ2VzL2xvdHRvL1tpZF0uanM/Y2M2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB1c2VTd3IgZnJvbSBcInN3clwiXG5cbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvdHRvKCkge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTd3Iocm91dGVyLnF1ZXJ5LmlkID8gYC9hcGkvbG90dG8vJHtyb3V0ZXIucXVlcnkuaWR9YCA6IG51bGwsIGZldGNoZXIpXG5cdGNvbnNvbGUubG9nKGZldGNoZXIpXG5cblx0aWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZCBsb3R0bzwvZGl2PlxuXHRjb25zb2xlLmxvZyhkYXRhKVxuXHRpZiAoIWRhdGEpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Qm94XG5cdFx0XHRcdHN0eWxlU2hlZXQ9e3tcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiLjVyZW1cIixcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGRhdGEudGhlbWUsXG5cdFx0XHRcdFx0cGFkZGluZzogXCIxLjVyZW1cIixcblx0XHRcdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0bWFyZ2luOiBcIjEuNXJlbVwiLFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8aDM+e2RhdGEubG90dGVyeU5hbWV9PC9oMz5cblx0XHRcdFx0PHBpY3R1cmU+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNTZXQ9e2AvaW1hZ2VzLyR7ZGF0YS5sb3R0ZXJ5TG9nb31gfSB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIC8+XG5cdFx0XHRcdFx0PGltZyBzcmM9e2AvaW1hZ2VzLyR7ZGF0YS5sb3R0ZXJ5TG9nb31gfSBhbHQ9XCJMb3R0byBMb2dvXCIgLz5cblx0XHRcdFx0PC9waWN0dXJlPlxuXHRcdFx0XHQ8aDE+XG5cdFx0XHRcdFx0PHN0cm9uZz4mZXVybzs8L3N0cm9uZz5cblx0XHRcdFx0XHR7ZGF0YS5qYWNrcG90UHJpY2V9XG5cdFx0XHRcdDwvaDE+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbG9ja1wiPjwvaT5cblx0XHRcdFx0XHR7ZGF0YS5kcmF3VGltZX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGxheVwiPjwvaT5cblx0XHRcdFx0XHRQbGF5XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9Cb3g+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1vcmVMb3R0byhwcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Qm94XG5cdFx0XHRcdHN0eWxlU2hlZXQ9e3tcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiLjVyZW1cIixcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZGMyNjI2LCAjYzAyNmQzLCAjN2MzYWVkLCAjMjU2M2ViLCAjMDg5MWIyLCAjNjVhMzBkKVwiLFxuXHRcdFx0XHRcdHBhZGRpbmc6IFwiMS41cmVtXCIsXG5cdFx0XHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdG1hcmdpbjogXCIxLjVyZW1cIixcblx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8aDI+TW9yZSBKYWNrcG90cyBDb21pbmcgU29vbjwvaDI+XG5cdFx0XHQ8L0JveD5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cdFx0XHRcdFx0aDIge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfVxuXHRcdFx0PC9zdHlsZT5cblx0XHQ8Lz5cblx0KVxufVxuIl0sIm5hbWVzIjpbIkJveCIsInVzZVJvdXRlciIsInVzZVN3ciIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiTG90dG8iLCJyb3V0ZXIiLCJkYXRhIiwiZXJyb3IiLCJxdWVyeSIsImlkIiwiY29uc29sZSIsImxvZyIsImRpdiIsInN0eWxlU2hlZXQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJoMyIsImxvdHRlcnlOYW1lIiwicGljdHVyZSIsInNvdXJjZSIsInNyY1NldCIsImxvdHRlcnlMb2dvIiwidHlwZSIsImltZyIsInNyYyIsImFsdCIsImgxIiwic3Ryb25nIiwiamFja3BvdFByaWNlIiwicCIsImkiLCJjbGFzc05hbWUiLCJkcmF3VGltZSIsImJ1dHRvbiIsIk1vcmVMb3R0byIsInByb3BzIiwiYmFja2dyb3VuZEltYWdlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/lotto/[id].js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "next/dist/shared/lib/styled-jsx":
/*!**************************************************!*\
  !*** external "next/dist/shared/lib/styled-jsx" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/lotto/[id].js"));
module.exports = __webpack_exports__;

})();