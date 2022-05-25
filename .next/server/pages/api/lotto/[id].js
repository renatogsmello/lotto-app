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
exports.id = "pages/api/lotto/[id]";
exports.ids = ["pages/api/lotto/[id]"];
exports.modules = {

/***/ "(api)/./pages/api/lotto/[id].js":
/*!*********************************!*\
  !*** ./pages/api/lotto/[id].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ lottoHandler)\n/* harmony export */ });\nfunction lottoHandler(req, res) {\n    const { query: { id , lotteryName , lotteryLogo , jackpotPrice , drawTime , theme  } , method ,  } = req;\n    switch(method){\n        case \"GET\":\n            //Get data from database\n            res.status(200).json({\n                id,\n                lotteryName,\n                lotteryLogo,\n                jackpotPrice,\n                drawTime,\n                theme\n            });\n            console.log(res);\n            break;\n        case \"PUT\":\n            res.status(200).json({\n                id,\n                lotteryName,\n                lotteryLogo,\n                jackpotPrice,\n                drawTime,\n                theme\n            });\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"PUT\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG90dG8vW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsWUFBWSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNLEVBQ0xDLEtBQUssRUFBRSxFQUFFQyxFQUFFLEdBQUVDLFdBQVcsR0FBRUMsV0FBVyxHQUFFQyxZQUFZLEdBQUVDLFFBQVEsR0FBRUMsS0FBSyxHQUFFLEdBQ3RFQyxNQUFNLEtBQ04sR0FBR1QsR0FBRztJQUVQLE9BQVFTLE1BQU07UUFDYixLQUFLLEtBQUs7WUFDVCx3QkFBd0I7WUFDeEJSLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVSLEVBQUU7Z0JBQUVDLFdBQVc7Z0JBQUVDLFdBQVc7Z0JBQUVDLFlBQVk7Z0JBQUVDLFFBQVE7Z0JBQUVDLEtBQUs7YUFBRSxDQUFDO1lBQ3JGSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osR0FBRyxDQUFDO1lBQ2hCLE1BQUs7UUFDTixLQUFLLEtBQUs7WUFDVEEsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRVIsRUFBRTtnQkFBRUMsV0FBVztnQkFBRUMsV0FBVztnQkFBRUMsWUFBWTtnQkFBRUMsUUFBUTtnQkFBRUMsS0FBSzthQUFFLENBQUM7WUFDckYsTUFBSztRQUNOO1lBQ0NQLEdBQUcsQ0FBQ2EsU0FBUyxDQUFDLE9BQU8sRUFBRTtnQkFBQyxLQUFLO2dCQUFFLEtBQUs7YUFBQyxDQUFDO1lBQ3RDYixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ssR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFTixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDcEQ7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xvdHRvLWFwcC8uL3BhZ2VzL2FwaS9sb3R0by9baWRdLmpzP2YwNDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG90dG9IYW5kbGVyKHJlcSwgcmVzKSB7XG5cdGNvbnN0IHtcblx0XHRxdWVyeTogeyBpZCwgbG90dGVyeU5hbWUsIGxvdHRlcnlMb2dvLCBqYWNrcG90UHJpY2UsIGRyYXdUaW1lLCB0aGVtZSB9LFxuXHRcdG1ldGhvZCxcblx0fSA9IHJlcVxuXG5cdHN3aXRjaCAobWV0aG9kKSB7XG5cdFx0Y2FzZSBcIkdFVFwiOlxuXHRcdFx0Ly9HZXQgZGF0YSBmcm9tIGRhdGFiYXNlXG5cdFx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7IGlkLCBsb3R0ZXJ5TmFtZSwgbG90dGVyeUxvZ28sIGphY2twb3RQcmljZSwgZHJhd1RpbWUsIHRoZW1lIH0pXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHRicmVha1xuXHRcdGNhc2UgXCJQVVRcIjpcblx0XHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaWQsIGxvdHRlcnlOYW1lLCBsb3R0ZXJ5TG9nbywgamFja3BvdFByaWNlLCBkcmF3VGltZSwgdGhlbWUgfSlcblx0XHRcdGJyZWFrXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJlcy5zZXRIZWFkZXIoXCJBbGxvd1wiLCBbXCJHRVRcIiwgXCJQVVRcIl0pXG5cdFx0XHRyZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYClcblx0fVxufVxuIl0sIm5hbWVzIjpbImxvdHRvSGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXJ5IiwiaWQiLCJsb3R0ZXJ5TmFtZSIsImxvdHRlcnlMb2dvIiwiamFja3BvdFByaWNlIiwiZHJhd1RpbWUiLCJ0aGVtZSIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/lotto/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/lotto/[id].js"));
module.exports = __webpack_exports__;

})();