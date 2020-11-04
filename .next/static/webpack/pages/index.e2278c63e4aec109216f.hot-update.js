webpackHotUpdate_N_E("pages/index",{

/***/ "./components/nav/nav.js":
/*!*******************************!*\
  !*** ./components/nav/nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _config_nav_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/nav.config */ \"./components/nav/config/nav.config.js\");\n/* harmony import */ var _config_nav_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_nav_config__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/liangchenzhou/Documents/test-project/v2-app-utility/components/nav/nav.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Nav = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Nav, _React$Component);\n\n  var _super = _createSuper(Nav);\n\n  function Nav(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Nav);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      defaultKey: 'tfn',\n      data: props.navData\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Nav, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var color = '#108ee9';\n      var promptComingSoon = 'Coming Soon...';\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"], {\n        theme: \"light\",\n        mode: \"horizontal\",\n        defaultSelectedKeys: this.state.defaultKey,\n        children: (_config_nav_config__WEBPACK_IMPORTED_MODULE_8___default.a || []).map(function (data) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"].Item, {\n            children: \"data.value}\"\n          }, data.key, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 11\n          }, _this2);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return Nav;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYvbmF2LmpzPzU4ZGIiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJzdGF0ZSIsImRlZmF1bHRLZXkiLCJkYXRhIiwibmF2RGF0YSIsImNvbG9yIiwicHJvbXB0Q29taW5nU29vbiIsIk5BVl9DT05GSUciLCJtYXAiLCJrZXkiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0lBRXFCQSxHOzs7OztBQUNuQixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVLEVBQUUsS0FERDtBQUVYQyxVQUFJLEVBQUVILEtBQUssQ0FBQ0k7QUFGRCxLQUFiO0FBRmlCO0FBTWxCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBTUMsS0FBSyxHQUFHLFNBQWQ7QUFDQSxVQUFNQyxnQkFBZ0IsR0FBRyxnQkFBekI7QUFDQSwwQkFDRSxxRUFBQyx5Q0FBRDtBQUNFLGFBQUssRUFBQyxPQURSO0FBRUUsWUFBSSxFQUFDLFlBRlA7QUFHRSwyQkFBbUIsRUFBRSxLQUFLTCxLQUFMLENBQVdDLFVBSGxDO0FBQUEsa0JBS0csQ0FBQ0sseURBQVUsSUFBSSxFQUFmLEVBQW1CQyxHQUFuQixDQUF1QixVQUFDTCxJQUFEO0FBQUEsOEJBQ3RCLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUEsYUFBZ0JBLElBQUksQ0FBQ00sR0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEc0I7QUFBQSxTQUF2QjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQVdEOzs7O0VBdkI4QkMsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2L25hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1lbnUsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcblxuaW1wb3J0IE5BVl9DT05GSUcgZnJvbSAnLi9jb25maWcvbmF2LmNvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkZWZhdWx0S2V5OiAndGZuJyxcbiAgICAgIGRhdGE6IHByb3BzLm5hdkRhdGEsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb2xvciA9ICcjMTA4ZWU5JztcbiAgICBjb25zdCBwcm9tcHRDb21pbmdTb29uID0gJ0NvbWluZyBTb29uLi4uJztcbiAgICByZXR1cm4gKFxuICAgICAgPE1lbnVcbiAgICAgICAgdGhlbWU9XCJsaWdodFwiXG4gICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17dGhpcy5zdGF0ZS5kZWZhdWx0S2V5fVxuICAgICAgPlxuICAgICAgICB7KE5BVl9DT05GSUcgfHwgW10pLm1hcCgoZGF0YSkgPT4gKFxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtkYXRhLmtleX0+ZGF0YS52YWx1ZX08L01lbnUuSXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L01lbnU+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav/nav.js\n");

/***/ })

})