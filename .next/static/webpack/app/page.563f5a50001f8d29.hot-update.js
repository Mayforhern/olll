"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/Contributors.tsx":
/*!******************************!*\
  !*** ./app/Contributors.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/../node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst contributorsData = [\n    {\n        id: 0,\n        name: \"Shinno\",\n        image: \"/admins/contributor1.jpg\",\n        telegramLink: \"https://t.me/shinno\"\n    },\n    {\n        id: 1,\n        name: \"Ace\",\n        image: \"/admins/contributor2.jpg\",\n        telegramLink: \"https://t.me/ace\"\n    },\n    {\n        id: 2,\n        name: \"Hayato\",\n        image: \"/admins/contributor3.jpg\",\n        telegramLink: \"https://t.me/hayato\"\n    },\n    {\n        id: 3,\n        name: \"May\",\n        image: \"/admins/contributor4.jpg\",\n        telegramLink: \"https://t.me/gojobaka\"\n    },\n    {\n        id: 4,\n        name: \"Velocity\",\n        image: \"/admins/contributor5.jpg\",\n        telegramLink: \"https://t.me/velocity\"\n    },\n    {\n        id: 5,\n        name: \"Alucard\",\n        image: \"/admins/contributor6.jpg\",\n        telegramLink: \"https://t.me/alucard\"\n    },\n    {\n        id: 6,\n        name: \"Co owner?\",\n        image: \"/admins/contributor7.jpg\",\n        telegramLink: \"https://t.me/coowner\"\n    },\n    {\n        id: 7,\n        name: \"Avogado\",\n        image: \"/admins/contributor8.jpg\",\n        telegramLink: \"https://t.me/avogado\"\n    },\n    {\n        id: 8,\n        name: \"Hope\",\n        image: \"/admins/contributor9.jpg\",\n        telegramLink: \"https://t.me/hope\"\n    },\n    {\n        id: 9,\n        name: \"idk\",\n        image: \"/admins/contributor10.jpg\",\n        telegramLink: \"https://t.me/idk\"\n    }\n];\n// Use forwardRef to pass ref down to the section\nconst Contributors = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s((param, ref)=>{\n    let { highlightedIndex } = param;\n    _s();\n    const [imageError, setImageError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleImageError = (index)=>{\n        setImageError((prev)=>({\n                ...prev,\n                [index]: true\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"contributors\",\n        className: \"py-20 bg-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl font-bold mb-12 text-center text-white\",\n                    children: \"Admins\"\n                }, void 0, false, {\n                    fileName: \"/home/seruji/code/sikhra/olll/app/Contributors.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-2 max-w-4xl mx-auto\",\n                    children: contributorsData.map((contributor, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: contributor.telegramLink,\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            className: \"block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative rounded-2xl overflow-hidden aspect-square contributor-image \".concat(highlightedIndex === index ? \"ring-4 ring-blue-500\" : \"\"),\n                                children: [\n                                    !imageError[index] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: contributor.image,\n                                        alt: \"\".concat(contributor.name, \"'s profile picture\"),\n                                        fill: true,\n                                        sizes: \"(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw\",\n                                        className: \"object-cover\",\n                                        priority: index < 5,\n                                        onError: ()=>handleImageError(index)\n                                    }, void 0, false, {\n                                        fileName: \"/home/seruji/code/sikhra/olll/app/Contributors.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 19\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-full bg-gray-300 flex items-center justify-center text-gray-500\",\n                                        children: contributor.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/seruji/code/sikhra/olll/app/Contributors.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent \".concat(highlightedIndex === index ? \"opacity-100\" : \"opacity-0\")\n                                    }, void 0, false, {\n                                        fileName: \"/home/seruji/code/sikhra/olll/app/Contributors.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute bottom-0 left-0 right-0 p-2 text-center text-white text-sm font-semibold \".concat(highlightedIndex === index ? \"opacity-100\" : \"opacity-0\"),\n                                        children: contributor.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/seruji/code/sikhra/olll/app/Contributors.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/seruji/code/sikhra/olll/app/Contributors.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, undefined)\n                        }, contributor.id, false, {\n                            fileName: \"/home/seruji/code/sikhra/olll/app/Contributors.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/seruji/code/sikhra/olll/app/Contributors.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/seruji/code/sikhra/olll/app/Contributors.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/seruji/code/sikhra/olll/app/Contributors.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n}, \"wwFvq/f2bbmTzDyZgbIgvjwOC0w=\")), \"wwFvq/f2bbmTzDyZgbIgvjwOC0w=\");\n_c1 = Contributors;\nContributors.displayName = \"Contributors\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contributors);\nvar _c, _c1;\n$RefreshReg$(_c, \"Contributors$forwardRef\");\n$RefreshReg$(_c1, \"Contributors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db250cmlidXRvcnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ2Q7QUFPL0IsTUFBTUcsbUJBQW1CO0lBQ3ZCO1FBQUVDLElBQUk7UUFBR0MsTUFBTTtRQUFVQyxPQUFPO1FBQTRCQyxjQUFjO0lBQXNCO0lBQ2hHO1FBQUVILElBQUk7UUFBR0MsTUFBTTtRQUFPQyxPQUFPO1FBQTRCQyxjQUFjO0lBQW1CO0lBQzFGO1FBQUVILElBQUk7UUFBR0MsTUFBTTtRQUFVQyxPQUFPO1FBQTRCQyxjQUFjO0lBQXNCO0lBQ2hHO1FBQUVILElBQUk7UUFBR0MsTUFBTTtRQUFPQyxPQUFPO1FBQTRCQyxjQUFjO0lBQXdCO0lBQy9GO1FBQUVILElBQUk7UUFBR0MsTUFBTTtRQUFZQyxPQUFPO1FBQTRCQyxjQUFjO0lBQXdCO0lBQ3BHO1FBQUVILElBQUk7UUFBR0MsTUFBTTtRQUFXQyxPQUFPO1FBQTRCQyxjQUFjO0lBQXVCO0lBQ2xHO1FBQUVILElBQUk7UUFBR0MsTUFBTTtRQUFhQyxPQUFPO1FBQTRCQyxjQUFjO0lBQXVCO0lBQ3BHO1FBQUVILElBQUk7UUFBR0MsTUFBTTtRQUFXQyxPQUFPO1FBQTRCQyxjQUFjO0lBQXVCO0lBQ2xHO1FBQUVILElBQUk7UUFBR0MsTUFBTTtRQUFRQyxPQUFPO1FBQTRCQyxjQUFjO0lBQW9CO0lBQzVGO1FBQUVILElBQUk7UUFBR0MsTUFBTTtRQUFPQyxPQUFPO1FBQTZCQyxjQUFjO0lBQW1CO0NBQzVGO0FBRUQsaURBQWlEO0FBQ2pELE1BQU1DLDZCQUFlUCxHQUFBQSxpREFBVUEsU0FBb0MsUUFBdUJRO1FBQXRCLEVBQUVDLGdCQUFnQixFQUFFOztJQUN0RixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQTBCLENBQUM7SUFFdkUsTUFBTWEsbUJBQW1CLENBQUNDO1FBQ3hCRixjQUFjRyxDQUFBQSxPQUFTO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0QsTUFBTSxFQUFFO1lBQUs7SUFDbEQ7SUFFQSxxQkFDRSw4REFBQ0U7UUFBUVosSUFBRztRQUFlYSxXQUFVO2tCQUNuQyw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUFHRixXQUFVOzhCQUFrRDs7Ozs7OzhCQUdoRSw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ1pkLGlCQUFpQmlCLEdBQUcsQ0FBQyxDQUFDQyxhQUFhUCxzQkFDbEMsOERBQUNROzRCQUVDQyxNQUFNRixZQUFZZCxZQUFZOzRCQUM5QmlCLFFBQU87NEJBQ1BDLEtBQUk7NEJBQ0pSLFdBQVU7c0NBRVYsNEVBQUNDO2dDQUNDRCxXQUFXLHdFQUVWLE9BRENQLHFCQUFxQkksUUFBUSx5QkFBeUI7O29DQUd2RCxDQUFDSCxVQUFVLENBQUNHLE1BQU0saUJBQ2pCLDhEQUFDWixtREFBS0E7d0NBQ0p3QixLQUFLTCxZQUFZZixLQUFLO3dDQUN0QnFCLEtBQUssR0FBb0IsT0FBakJOLFlBQVloQixJQUFJLEVBQUM7d0NBQ3pCdUIsSUFBSTt3Q0FDSkMsT0FBTTt3Q0FDTlosV0FBVTt3Q0FDVmEsVUFBVWhCLFFBQVE7d0NBQ2xCaUIsU0FBUyxJQUFNbEIsaUJBQWlCQzs7Ozs7a0VBR2xDLDhEQUFDSTt3Q0FBSUQsV0FBVTtrREFDWkksWUFBWWhCLElBQUk7Ozs7OztrREFHckIsOERBQUNhO3dDQUFJRCxXQUFXLGtFQUVmLE9BRENQLHFCQUFxQkksUUFBUSxnQkFBZ0I7Ozs7OztrREFFL0MsOERBQUNJO3dDQUFJRCxXQUFXLHFGQUVmLE9BRENQLHFCQUFxQkksUUFBUSxnQkFBZ0I7a0RBRTVDTyxZQUFZaEIsSUFBSTs7Ozs7Ozs7Ozs7OzJCQWhDaEJnQixZQUFZakIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNqQzs7QUFFQUksYUFBYXdCLFdBQVcsR0FBRztBQUUzQiwrREFBZXhCLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0NvbnRyaWJ1dG9ycy50c3g/ZDFiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmludGVyZmFjZSBDb250cmlidXRvcnNQcm9wcyB7XG4gIGhpZ2hsaWdodGVkSW5kZXg6IG51bWJlcjtcbn1cblxuY29uc3QgY29udHJpYnV0b3JzRGF0YSA9IFtcbiAgeyBpZDogMCwgbmFtZTogXCJTaGlubm9cIiwgaW1hZ2U6IFwiL2FkbWlucy9jb250cmlidXRvcjEuanBnXCIsIHRlbGVncmFtTGluazogXCJodHRwczovL3QubWUvc2hpbm5vXCIgfSxcbiAgeyBpZDogMSwgbmFtZTogXCJBY2VcIiwgaW1hZ2U6IFwiL2FkbWlucy9jb250cmlidXRvcjIuanBnXCIsIHRlbGVncmFtTGluazogXCJodHRwczovL3QubWUvYWNlXCIgfSxcbiAgeyBpZDogMiwgbmFtZTogXCJIYXlhdG9cIiwgaW1hZ2U6IFwiL2FkbWlucy9jb250cmlidXRvcjMuanBnXCIsIHRlbGVncmFtTGluazogXCJodHRwczovL3QubWUvaGF5YXRvXCIgfSxcbiAgeyBpZDogMywgbmFtZTogXCJNYXlcIiwgaW1hZ2U6IFwiL2FkbWlucy9jb250cmlidXRvcjQuanBnXCIsIHRlbGVncmFtTGluazogXCJodHRwczovL3QubWUvZ29qb2Jha2FcIiB9LFxuICB7IGlkOiA0LCBuYW1lOiBcIlZlbG9jaXR5XCIsIGltYWdlOiBcIi9hZG1pbnMvY29udHJpYnV0b3I1LmpwZ1wiLCB0ZWxlZ3JhbUxpbms6IFwiaHR0cHM6Ly90Lm1lL3ZlbG9jaXR5XCIgfSxcbiAgeyBpZDogNSwgbmFtZTogXCJBbHVjYXJkXCIsIGltYWdlOiBcIi9hZG1pbnMvY29udHJpYnV0b3I2LmpwZ1wiLCB0ZWxlZ3JhbUxpbms6IFwiaHR0cHM6Ly90Lm1lL2FsdWNhcmRcIiB9LFxuICB7IGlkOiA2LCBuYW1lOiBcIkNvIG93bmVyP1wiLCBpbWFnZTogXCIvYWRtaW5zL2NvbnRyaWJ1dG9yNy5qcGdcIiwgdGVsZWdyYW1MaW5rOiBcImh0dHBzOi8vdC5tZS9jb293bmVyXCIgfSxcbiAgeyBpZDogNywgbmFtZTogXCJBdm9nYWRvXCIsIGltYWdlOiBcIi9hZG1pbnMvY29udHJpYnV0b3I4LmpwZ1wiLCB0ZWxlZ3JhbUxpbms6IFwiaHR0cHM6Ly90Lm1lL2F2b2dhZG9cIiB9LFxuICB7IGlkOiA4LCBuYW1lOiBcIkhvcGVcIiwgaW1hZ2U6IFwiL2FkbWlucy9jb250cmlidXRvcjkuanBnXCIsIHRlbGVncmFtTGluazogXCJodHRwczovL3QubWUvaG9wZVwiIH0sXG4gIHsgaWQ6IDksIG5hbWU6IFwiaWRrXCIsIGltYWdlOiBcIi9hZG1pbnMvY29udHJpYnV0b3IxMC5qcGdcIiwgdGVsZWdyYW1MaW5rOiBcImh0dHBzOi8vdC5tZS9pZGtcIiB9XG5dO1xuXG4vLyBVc2UgZm9yd2FyZFJlZiB0byBwYXNzIHJlZiBkb3duIHRvIHRoZSBzZWN0aW9uXG5jb25zdCBDb250cmlidXRvcnMgPSBmb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBDb250cmlidXRvcnNQcm9wcz4oKHsgaGlnaGxpZ2h0ZWRJbmRleCB9LCByZWYpID0+IHtcbiAgY29uc3QgW2ltYWdlRXJyb3IsIHNldEltYWdlRXJyb3JdID0gdXNlU3RhdGU8UmVjb3JkPG51bWJlciwgYm9vbGVhbj4+KHt9KTtcblxuICBjb25zdCBoYW5kbGVJbWFnZUVycm9yID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBzZXRJbWFnZUVycm9yKHByZXYgPT4gKHsgLi4ucHJldiwgW2luZGV4XTogdHJ1ZSB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImNvbnRyaWJ1dG9yc1wiIGNsYXNzTmFtZT1cInB5LTIwIGJnLWJsYWNrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi0xMiB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgQWRtaW5zXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtMyBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNSBnYXAtMiBtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIHtjb250cmlidXRvcnNEYXRhLm1hcCgoY29udHJpYnV0b3IsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAga2V5PXtjb250cmlidXRvci5pZH1cbiAgICAgICAgICAgICAgaHJlZj17Y29udHJpYnV0b3IudGVsZWdyYW1MaW5rfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2tcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgcm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuIGFzcGVjdC1zcXVhcmUgY29udHJpYnV0b3ItaW1hZ2UgJHtcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXggPT09IGluZGV4ID8gJ3JpbmctNCByaW5nLWJsdWUtNTAwJyA6ICcnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7IWltYWdlRXJyb3JbaW5kZXhdID8gKFxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y29udHJpYnV0b3IuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17YCR7Y29udHJpYnV0b3IubmFtZX0ncyBwcm9maWxlIHBpY3R1cmVgfVxuICAgICAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgICAgIHNpemVzPVwiKG1heC13aWR0aDogNjQwcHgpIDUwdncsIChtYXgtd2lkdGg6IDc2OHB4KSAzM3Z3LCAobWF4LXdpZHRoOiAxMDI0cHgpIDI1dncsIDIwdndcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eT17aW5kZXggPCA1fVxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoKSA9PiBoYW5kbGVJbWFnZUVycm9yKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBiZy1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb250cmlidXRvci5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJsYWNrLzYwIHRvLXRyYW5zcGFyZW50ICR7XG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHRlZEluZGV4ID09PSBpbmRleCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0wJ1xuICAgICAgICAgICAgICAgIH1gfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgcC0yIHRleHQtY2VudGVyIHRleHQtd2hpdGUgdGV4dC1zbSBmb250LXNlbWlib2xkICR7XG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHRlZEluZGV4ID09PSBpbmRleCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0wJ1xuICAgICAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgICAgICAgIHtjb250cmlidXRvci5uYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59KTtcblxuQ29udHJpYnV0b3JzLmRpc3BsYXlOYW1lID0gJ0NvbnRyaWJ1dG9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dG9ycztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImZvcndhcmRSZWYiLCJJbWFnZSIsImNvbnRyaWJ1dG9yc0RhdGEiLCJpZCIsIm5hbWUiLCJpbWFnZSIsInRlbGVncmFtTGluayIsIkNvbnRyaWJ1dG9ycyIsInJlZiIsImhpZ2hsaWdodGVkSW5kZXgiLCJpbWFnZUVycm9yIiwic2V0SW1hZ2VFcnJvciIsImhhbmRsZUltYWdlRXJyb3IiLCJpbmRleCIsInByZXYiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJtYXAiLCJjb250cmlidXRvciIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwic3JjIiwiYWx0IiwiZmlsbCIsInNpemVzIiwicHJpb3JpdHkiLCJvbkVycm9yIiwiZGlzcGxheU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Contributors.tsx\n"));

/***/ })

});