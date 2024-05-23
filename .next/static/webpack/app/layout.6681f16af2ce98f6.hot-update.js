"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/components/AuthForm/AuthForm.jsx":
/*!**********************************************!*\
  !*** ./app/components/AuthForm/AuthForm.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthForm: function() { return /* binding */ AuthForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthForm.module.css */ \"(app-pages-browser)/./app/components/AuthForm/AuthForm.module.css\");\n/* harmony import */ var _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/api/config */ \"(app-pages-browser)/./app/api/config.js\");\n/* harmony import */ var _app_api_api_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/api/api-utils */ \"(app-pages-browser)/./app/api/api-utils.js\");\n/* harmony import */ var _app_store_app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/store/app-store */ \"(app-pages-browser)/./app/store/app-store.js\");\n/* __next_internal_client_entry_do_not_use__ AuthForm auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst AuthForm = (props)=>{\n    _s();\n    const authContext = (0,_app_store_app_store__WEBPACK_IMPORTED_MODULE_4__.useStore)();\n    const [authData, setAuthData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        status: null,\n        text: null\n    });\n    const handleInput = (e)=>{\n        setAuthData({\n            ...authData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const userData = await (0,_app_api_api_utils__WEBPACK_IMPORTED_MODULE_3__.authorize)(_app_api_config__WEBPACK_IMPORTED_MODULE_2__.endpoints.auth, authData);\n        if ((0,_app_api_api_utils__WEBPACK_IMPORTED_MODULE_3__.isResponseOk)(userData)) {\n            authContext.login({\n                ...userData,\n                id: userData._id\n            }, userData.jwt);\n            setMessage({\n                status: \"success\",\n                text: \"Вы авторизовались!\"\n            });\n        } else {\n            setMessage({\n                status: \"error\",\n                text: \"Неверные почта или пароль\"\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let timer;\n        if (authContext.user) {\n            timer = setTimeout(()=>{\n                setMessage({\n                    status: null,\n                    text: null\n                });\n                props.close();\n            }, 1000);\n        }\n        return ()=>clearTimeout(timer);\n    }, [\n        authContext.user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().form__title),\n                children: \"Авторизация\"\n            }, void 0, false, {\n                fileName: \"/Users/georgiisitnikov/Documents/GitHub/pindie-final/app/components/AuthForm/AuthForm.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().form__fields),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().form__field),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"form__field-title\"]),\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/Users/georgiisitnikov/Documents/GitHub/pindie-final/app/components/AuthForm/AuthForm.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onInput: handleInput,\n                                className: (_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"form__field-input\"]),\n                                name: \"identifier\",\n                                type: \"email\",\n                                placeholder: \"hello@world.com\"\n                            }, void 0, false, {\n                                fileName: \"/Users/georgiisitnikov/Documents/GitHub/pindie-final/app/components/AuthForm/AuthForm.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/georgiisitnikov/Documents/GitHub/pindie-final/app/components/AuthForm/AuthForm.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().form__field),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"form__field-title\"]),\n                                children: \"Пароль\"\n                            }, void 0, false, {\n                                fileName: \"/Users/georgiisitnikov/Documents/GitHub/pindie-final/app/components/AuthForm/AuthForm.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onInput: handleInput,\n                                className: (_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"form__field-input\"]),\n                                type: \"password\",\n                                name: \"password\",\n                                placeholder: \"***********\"\n                            }, void 0, false, {\n                                fileName: \"/Users/georgiisitnikov/Documents/GitHub/pindie-final/app/components/AuthForm/AuthForm.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/georgiisitnikov/Documents/GitHub/pindie-final/app/components/AuthForm/AuthForm.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/georgiisitnikov/Documents/GitHub/pindie-final/app/components/AuthForm/AuthForm.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            message.status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().form__message),\n                children: message.text\n            }, void 0, false, {\n                fileName: \"/Users/georgiisitnikov/Documents/GitHub/pindie-final/app/components/AuthForm/AuthForm.jsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().form__actions),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().form__reset),\n                        type: \"reset\",\n                        children: \"Очистить\"\n                    }, void 0, false, {\n                        fileName: \"/Users/georgiisitnikov/Documents/GitHub/pindie-final/app/components/AuthForm/AuthForm.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().form__submit),\n                        type: \"submit\",\n                        children: \"Войти\"\n                    }, void 0, false, {\n                        fileName: \"/Users/georgiisitnikov/Documents/GitHub/pindie-final/app/components/AuthForm/AuthForm.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/georgiisitnikov/Documents/GitHub/pindie-final/app/components/AuthForm/AuthForm.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/georgiisitnikov/Documents/GitHub/pindie-final/app/components/AuthForm/AuthForm.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"3rgMlQ2rQ/Ss1vBSj+2g7SGl1PY=\", false, function() {\n    return [\n        _app_store_app_store__WEBPACK_IMPORTED_MODULE_4__.useStore\n    ];\n});\n_c = AuthForm;\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0F1dGhGb3JtL0F1dGhGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUMyQztBQUNDO0FBQ0M7QUFDRztBQUNHO0FBQ0Y7QUFFMUMsTUFBTU8sV0FBVyxDQUFDQzs7SUFDdkIsTUFBTUMsY0FBY0gsOERBQVFBO0lBQzVCLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztRQUFFVyxPQUFPO1FBQUlDLFVBQVU7SUFBRztJQUNuRSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7UUFBRWUsUUFBUTtRQUFNQyxNQUFNO0lBQUs7SUFDbEUsTUFBTUMsY0FBYyxDQUFDQztRQUNuQlIsWUFBWTtZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDUyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQztJQUM3RDtJQUNBLE1BQU1DLGVBQWUsT0FBT0o7UUFDMUJBLEVBQUVLLGNBQWM7UUFDaEIsTUFBTUMsV0FBVyxNQUFNckIsNkRBQVNBLENBQUNELHNEQUFTQSxDQUFDdUIsSUFBSSxFQUFFaEI7UUFDakQsSUFBSUwsZ0VBQVlBLENBQUNvQixXQUFXO1lBQzFCaEIsWUFBWWtCLEtBQUssQ0FBQztnQkFBQyxHQUFHRixRQUFRO2dCQUFFRyxJQUFJSCxTQUFTSSxHQUFHO1lBQUEsR0FBR0osU0FBU0ssR0FBRztZQUMvRGYsV0FBVztnQkFBRUMsUUFBUTtnQkFBV0MsTUFBTTtZQUFxQjtRQUM3RCxPQUFPO1lBQ0xGLFdBQVc7Z0JBQUVDLFFBQVE7Z0JBQVNDLE1BQU07WUFBNEI7UUFDbEU7SUFDRjtJQUNBZixnREFBU0EsQ0FBQztRQUNSLElBQUk2QjtRQUNKLElBQUl0QixZQUFZdUIsSUFBSSxFQUFFO1lBQ3BCRCxRQUFRRSxXQUFXO2dCQUNqQmxCLFdBQVc7b0JBQUVDLFFBQVE7b0JBQU1DLE1BQU07Z0JBQUs7Z0JBQ3RDVCxNQUFNMEIsS0FBSztZQUNiLEdBQUc7UUFDTDtRQUNBLE9BQU8sSUFBTUMsYUFBYUo7SUFDNUIsR0FBRztRQUFDdEIsWUFBWXVCLElBQUk7S0FBQztJQUNyQixxQkFDRSw4REFBQ0k7UUFBS0MsVUFBVWQ7UUFBY2UsV0FBV3RDLGtFQUFjOzswQkFDckQsOERBQUN1QztnQkFBR0QsV0FBV3RDLHlFQUFxQjswQkFBRTs7Ozs7OzBCQUN0Qyw4REFBQ3dDO2dCQUFJRixXQUFXdEMsMEVBQXNCOztrQ0FDcEMsOERBQUN5Qzt3QkFBTUgsV0FBV3RDLHlFQUFxQjs7MENBQ3JDLDhEQUFDMEM7Z0NBQUtKLFdBQVd0QyxrRkFBMkI7MENBQUU7Ozs7OzswQ0FDOUMsOERBQUMyQztnQ0FDQ0MsU0FBUzFCO2dDQUNUb0IsV0FBV3RDLGtGQUEyQjtnQ0FDdENxQixNQUFLO2dDQUNMd0IsTUFBSztnQ0FDTEMsYUFBWTs7Ozs7Ozs7Ozs7O2tDQUdoQiw4REFBQ0w7d0JBQU1ILFdBQVd0Qyx5RUFBcUI7OzBDQUNyQyw4REFBQzBDO2dDQUFLSixXQUFXdEMsa0ZBQTJCOzBDQUFFOzs7Ozs7MENBQzlDLDhEQUFDMkM7Z0NBQ0NDLFNBQVMxQjtnQ0FDVG9CLFdBQVd0QyxrRkFBMkI7Z0NBQ3RDNkMsTUFBSztnQ0FDTHhCLE1BQUs7Z0NBQ0x5QixhQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJakJoQyxRQUFRRSxNQUFNLGtCQUNiLDhEQUFDK0I7Z0JBQUVULFdBQVd0QywyRUFBdUI7MEJBQUdjLFFBQVFHLElBQUk7Ozs7OzswQkFFdEQsOERBQUN1QjtnQkFBSUYsV0FBV3RDLDJFQUF1Qjs7a0NBQ3JDLDhEQUFDZ0Q7d0JBQU9WLFdBQVd0Qyx5RUFBcUI7d0JBQUU2QyxNQUFLO2tDQUFROzs7Ozs7a0NBR3ZELDhEQUFDRzt3QkFBT1YsV0FBV3RDLDBFQUFzQjt3QkFBRTZDLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRSxFQUFFO0dBakVXdEM7O1FBQ1NELDBEQUFRQTs7O0tBRGpCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9BdXRoRm9ybS9BdXRoRm9ybS5qc3g/YTk5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vQXV0aEZvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZW5kcG9pbnRzIH0gZnJvbSBcIkAvYXBwL2FwaS9jb25maWdcIjtcbmltcG9ydCB7IGF1dGhvcml6ZSB9IGZyb20gXCJAL2FwcC9hcGkvYXBpLXV0aWxzXCI7XG5pbXBvcnQgeyBpc1Jlc3BvbnNlT2sgfSBmcm9tIFwiQC9hcHAvYXBpL2FwaS11dGlsc1wiO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiQC9hcHAvc3RvcmUvYXBwLXN0b3JlXCI7XG5cbmV4cG9ydCBjb25zdCBBdXRoRm9ybSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBhdXRoQ29udGV4dCA9IHVzZVN0b3JlKCk7XG4gIGNvbnN0IFthdXRoRGF0YSwgc2V0QXV0aERhdGFdID0gdXNlU3RhdGUoeyBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKHsgc3RhdHVzOiBudWxsLCB0ZXh0OiBudWxsIH0pO1xuICBjb25zdCBoYW5kbGVJbnB1dCA9IChlKSA9PiB7XG4gICAgc2V0QXV0aERhdGEoeyAuLi5hdXRoRGF0YSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBhdXRob3JpemUoZW5kcG9pbnRzLmF1dGgsIGF1dGhEYXRhKTtcbiAgICBpZiAoaXNSZXNwb25zZU9rKHVzZXJEYXRhKSkge1xuICAgICAgYXV0aENvbnRleHQubG9naW4oey4uLnVzZXJEYXRhLCBpZDogdXNlckRhdGEuX2lkfSwgdXNlckRhdGEuand0KTtcbiAgICAgIHNldE1lc3NhZ2UoeyBzdGF0dXM6IFwic3VjY2Vzc1wiLCB0ZXh0OiBcItCS0Ysg0LDQstGC0L7RgNC40LfQvtCy0LDQu9C40YHRjCFcIiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TWVzc2FnZSh7IHN0YXR1czogXCJlcnJvclwiLCB0ZXh0OiBcItCd0LXQstC10YDQvdGL0LUg0L/QvtGH0YLQsCDQuNC70Lgg0L/QsNGA0L7Qu9GMXCIgfSk7XG4gICAgfVxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lcjtcbiAgICBpZiAoYXV0aENvbnRleHQudXNlcikge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TWVzc2FnZSh7IHN0YXR1czogbnVsbCwgdGV4dDogbnVsbCB9KTtcbiAgICAgICAgcHJvcHMuY2xvc2UoKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW2F1dGhDb250ZXh0LnVzZXJdKTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e1N0eWxlc1tcImZvcm1cIl19PlxuICAgICAgPGgyIGNsYXNzTmFtZT17U3R5bGVzW1wiZm9ybV9fdGl0bGVcIl19PtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlc1tcImZvcm1fX2ZpZWxkc1wiXX0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e1N0eWxlc1tcImZvcm1fX2ZpZWxkXCJdfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1N0eWxlc1tcImZvcm1fX2ZpZWxkLXRpdGxlXCJdfT5FbWFpbDwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uSW5wdXQ9e2hhbmRsZUlucHV0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtTdHlsZXNbXCJmb3JtX19maWVsZC1pbnB1dFwiXX1cbiAgICAgICAgICAgIG5hbWU9XCJpZGVudGlmaWVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImhlbGxvQHdvcmxkLmNvbVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17U3R5bGVzW1wiZm9ybV9fZmllbGRcIl19PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17U3R5bGVzW1wiZm9ybV9fZmllbGQtdGl0bGVcIl19PtCf0LDRgNC+0LvRjDwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uSW5wdXQ9e2hhbmRsZUlucHV0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtTdHlsZXNbXCJmb3JtX19maWVsZC1pbnB1dFwiXX1cbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqKioqKlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAge21lc3NhZ2Uuc3RhdHVzICYmIChcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtTdHlsZXNbXCJmb3JtX19tZXNzYWdlXCJdfT57bWVzc2FnZS50ZXh0fTwvcD5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzW1wiZm9ybV9fYWN0aW9uc1wiXX0+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZXNbXCJmb3JtX19yZXNldFwiXX0gdHlwZT1cInJlc2V0XCI+XG4gICAgICAgICAg0J7Rh9C40YHRgtC40YLRjFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlc1tcImZvcm1fX3N1Ym1pdFwiXX0gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgINCS0L7QudGC0LhcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZW5kcG9pbnRzIiwiYXV0aG9yaXplIiwiaXNSZXNwb25zZU9rIiwidXNlU3RvcmUiLCJBdXRoRm9ybSIsInByb3BzIiwiYXV0aENvbnRleHQiLCJhdXRoRGF0YSIsInNldEF1dGhEYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic3RhdHVzIiwidGV4dCIsImhhbmRsZUlucHV0IiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXNlckRhdGEiLCJhdXRoIiwibG9naW4iLCJpZCIsIl9pZCIsImp3dCIsInRpbWVyIiwidXNlciIsInNldFRpbWVvdXQiLCJjbG9zZSIsImNsZWFyVGltZW91dCIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImgyIiwiZGl2IiwibGFiZWwiLCJzcGFuIiwiaW5wdXQiLCJvbklucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/AuthForm/AuthForm.jsx\n"));

/***/ })

});