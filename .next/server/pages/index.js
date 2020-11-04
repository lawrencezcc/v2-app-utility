module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/api/tfn.js":
/*!***************************!*\
  !*** ./client/api/tfn.js ***!
  \***************************/
/*! exports provided: getTFN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTFN\", function() { return getTFN; });\n\n\nfunction getTFN() {\n  return fetch('/api/tfn').then(response => response.json());\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBpL3Rmbi5qcz84MmY2Il0sIm5hbWVzIjpbImdldFRGTiIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFhOztBQUViLFNBQVNBLE1BQVQsR0FBa0I7QUFDaEIsU0FBT0MsS0FBSyxDQUFDLFVBQUQsQ0FBTCxDQUFrQkMsSUFBbEIsQ0FBd0JDLFFBQUQsSUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQXJDLENBQVA7QUFDRCIsImZpbGUiOiIuL2NsaWVudC9hcGkvdGZuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBnZXRURk4oKSB7XG4gIHJldHVybiBmZXRjaCgnL2FwaS90Zm4nKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbn1cblxuZXhwb3J0IHsgZ2V0VEZOIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/api/tfn.js\n");

/***/ }),

/***/ "./components/button/button.js":
/*!*************************************!*\
  !*** ./components/button/button.js ***!
  \*************************************/
/*! exports provided: Btn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Btn\", function() { return Btn; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/liangchenzhou/Documents/test-project/v2-app-utility/components/button/button.js\";\n\n\nconst Btn = props => {\n  const handleBtnClick = e => {\n    props.handleBtnClick(e, {\n      isLoading: true,\n      text: 'Generating...'\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: props.data.type,\n    loading: props.data.isLoading,\n    onClick: handleBtnClick,\n    children: props.data.text\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uanM/NGVlMiJdLCJuYW1lcyI6WyJCdG4iLCJwcm9wcyIsImhhbmRsZUJ0bkNsaWNrIiwiZSIsImlzTG9hZGluZyIsInRleHQiLCJkYXRhIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxHQUFHLEdBQUlDLEtBQUQsSUFBVztBQUM1QixRQUFNQyxjQUFjLEdBQUlDLENBQUQsSUFBTztBQUM1QkYsU0FBSyxDQUFDQyxjQUFOLENBQXFCQyxDQUFyQixFQUF3QjtBQUFFQyxlQUFTLEVBQUUsSUFBYjtBQUFtQkMsVUFBSSxFQUFFO0FBQXpCLEtBQXhCO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRSxxRUFBQywyQ0FBRDtBQUNFLFFBQUksRUFBRUosS0FBSyxDQUFDSyxJQUFOLENBQVdDLElBRG5CO0FBRUUsV0FBTyxFQUFFTixLQUFLLENBQUNLLElBQU4sQ0FBV0YsU0FGdEI7QUFHRSxXQUFPLEVBQUVGLGNBSFg7QUFBQSxjQUtHRCxLQUFLLENBQUNLLElBQU4sQ0FBV0Q7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFTRCxDQWJNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgY29uc3QgQnRuID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUJ0bkNsaWNrID0gKGUpID0+IHtcbiAgICBwcm9wcy5oYW5kbGVCdG5DbGljayhlLCB7IGlzTG9hZGluZzogdHJ1ZSwgdGV4dDogJ0dlbmVyYXRpbmcuLi4nIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIHR5cGU9e3Byb3BzLmRhdGEudHlwZX1cbiAgICAgIGxvYWRpbmc9e3Byb3BzLmRhdGEuaXNMb2FkaW5nfVxuICAgICAgb25DbGljaz17aGFuZGxlQnRuQ2xpY2t9XG4gICAgPlxuICAgICAge3Byb3BzLmRhdGEudGV4dH1cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/button/button.js\n");

/***/ }),

/***/ "./components/container/container.js":
/*!*******************************************!*\
  !*** ./components/container/container.js ***!
  \*******************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/index.module.scss */ \"./components/container/style/index.module.scss\");\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/liangchenzhou/Documents/test-project/v2-app-utility/components/container/container.js\";\n\n\nconst Container = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: props.component\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuanM/NTY1OSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJwcm9wcyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFTyxNQUFNQSxTQUFTLEdBQUlDLEtBQUQsSUFBVztBQUNsQyxzQkFBTztBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsY0FBNEJBLEtBQUssQ0FBQ0M7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29udGFpbmVyL2NvbnRhaW5lci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9zdHlsZS9pbmRleC5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+e3Byb3BzLmNvbXBvbmVudH08L2Rpdj47XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/container/container.js\n");

/***/ }),

/***/ "./components/container/style/index.module.scss":
/*!******************************************************!*\
  !*** ./components/container/style/index.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29udGFpbmVyL3N0eWxlL2luZGV4Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/container/style/index.module.scss\n");

/***/ }),

/***/ "./components/content/content.js":
/*!***************************************!*\
  !*** ./components/content/content.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContentWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _container_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container/container */ \"./components/container/container.js\");\n/* harmony import */ var _tfn_tfn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tfn/tfn */ \"./components/tfn/tfn.js\");\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/index.module.scss */ \"./components/content/style/index.module.scss\");\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/liangchenzhou/Documents/test-project/v2-app-utility/components/content/content.js\";\n\n\nconst {\n  Content\n} = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"];\n\n\n\nclass ContentWrapper extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      containerType: 'tfn'\n    };\n  }\n\n  render() {\n    const tabSwitcher = containerType => {\n      switch (containerType) {\n        case 'tfn':\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_container_container__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n            component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_tfn_tfn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 40\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 18\n          }, this);\n\n        case 'abn':\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_container_container__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n            component: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 18\n          }, this);\n\n        default:\n          return;\n      }\n    };\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Content, {\n      className: \"content\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n          className: \"c-col\",\n          flex: true,\n          span: 4\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n          className: \"c-col\",\n          flex: true,\n          span: 16,\n          children: tabSwitcher(this.state.containerType)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n          className: \"c-col\",\n          flex: true,\n          span: 4\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5qcz9jYWZmIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJMYXlvdXQiLCJDb250ZW50V3JhcHBlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY29udGFpbmVyVHlwZSIsInJlbmRlciIsInRhYlN3aXRjaGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxNQUFNO0FBQUVBO0FBQUYsSUFBY0MsMkNBQXBCO0FBRUE7QUFDQTtBQUVBO0FBRWUsTUFBTUMsY0FBTixTQUE2QkMsNENBQUssQ0FBQ0MsU0FBbkMsQ0FBNkM7QUFDMURDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWEsRUFBRTtBQURKLEtBQWI7QUFHRDs7QUFFREMsUUFBTSxHQUFHO0FBQ1AsVUFBTUMsV0FBVyxHQUFJRixhQUFELElBQW1CO0FBQ3JDLGNBQVFBLGFBQVI7QUFDRSxhQUFLLEtBQUw7QUFDRSw4QkFBTyxxRUFBQyw4REFBRDtBQUFXLHFCQUFTLGVBQUUscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQOztBQUNGLGFBQUssS0FBTDtBQUNFLDhCQUFPLHFFQUFDLDhEQUFEO0FBQVcscUJBQVMsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQOztBQUNGO0FBQ0U7QUFOSjtBQVFELEtBVEQ7O0FBVUEsd0JBQ0UscUVBQUMsT0FBRDtBQUFTLGVBQVMsRUFBQyxTQUFuQjtBQUFBLDZCQUNFLHFFQUFDLHdDQUFEO0FBQUEsZ0NBQ0UscUVBQUMsd0NBQUQ7QUFBSyxtQkFBUyxFQUFDLE9BQWY7QUFBdUIsY0FBSSxNQUEzQjtBQUE0QixjQUFJLEVBQUU7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLHdDQUFEO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQXVCLGNBQUksTUFBM0I7QUFBNEIsY0FBSSxFQUFFLEVBQWxDO0FBQUEsb0JBQ0dFLFdBQVcsQ0FBQyxLQUFLSCxLQUFMLENBQVdDLGFBQVo7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBS0UscUVBQUMsd0NBQUQ7QUFBSyxtQkFBUyxFQUFDLE9BQWY7QUFBdUIsY0FBSSxNQUEzQjtBQUE0QixjQUFJLEVBQUU7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFXRDs7QUE5QnlEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGF5b3V0LCBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xuY29uc3QgeyBDb250ZW50IH0gPSBMYXlvdXQ7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbnRhaW5lci9jb250YWluZXInO1xuaW1wb3J0IFRGTiBmcm9tICcuLi90Zm4vdGZuJztcblxuaW1wb3J0ICcuL3N0eWxlL2luZGV4Lm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29udGFpbmVyVHlwZTogJ3RmbicsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0YWJTd2l0Y2hlciA9IChjb250YWluZXJUeXBlKSA9PiB7XG4gICAgICBzd2l0Y2ggKGNvbnRhaW5lclR5cGUpIHtcbiAgICAgICAgY2FzZSAndGZuJzpcbiAgICAgICAgICByZXR1cm4gPENvbnRhaW5lciBjb21wb25lbnQ9ezxURk4gLz59IC8+O1xuICAgICAgICBjYXNlICdhYm4nOlxuICAgICAgICAgIHJldHVybiA8Q29udGFpbmVyIGNvbXBvbmVudD1cIlwiIC8+O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGVudCBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjLWNvbFwiIGZsZXggc3Bhbj17NH0+PC9Db2w+XG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjLWNvbFwiIGZsZXggc3Bhbj17MTZ9PlxuICAgICAgICAgICAge3RhYlN3aXRjaGVyKHRoaXMuc3RhdGUuY29udGFpbmVyVHlwZSl9XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjLWNvbFwiIGZsZXggc3Bhbj17NH0+PC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250ZW50PlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/content/content.js\n");

/***/ }),

/***/ "./components/content/style/index.module.scss":
/*!****************************************************!*\
  !*** ./components/content/style/index.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29udGVudC9zdHlsZS9pbmRleC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/content/style/index.module.scss\n");

/***/ }),

/***/ "./components/customBadge/customBadge.js":
/*!***********************************************!*\
  !*** ./components/customBadge/customBadge.js ***!
  \***********************************************/
/*! exports provided: CustomBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomBadge\", function() { return CustomBadge; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/index.module.scss */ \"./components/customBadge/style/index.module.scss\");\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/liangchenzhou/Documents/test-project/v2-app-utility/components/customBadge/customBadge.js\";\n\n\nconst CustomBadge = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"c-badge\",\n    children: props.text\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbUJhZGdlL2N1c3RvbUJhZGdlLmpzPzUxYmMiXSwibmFtZXMiOlsiQ3VzdG9tQmFkZ2UiLCJwcm9wcyIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRU8sTUFBTUEsV0FBVyxHQUFJQyxLQUFELElBQVc7QUFDcEMsc0JBQU87QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBLGNBQTBCQSxLQUFLLENBQUNDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRk0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2N1c3RvbUJhZGdlL2N1c3RvbUJhZGdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL3N0eWxlL2luZGV4Lm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGNvbnN0IEN1c3RvbUJhZGdlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImMtYmFkZ2VcIj57cHJvcHMudGV4dH08L2Rpdj47XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/customBadge/customBadge.js\n");

/***/ }),

/***/ "./components/customBadge/style/index.module.scss":
/*!********************************************************!*\
  !*** ./components/customBadge/style/index.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY3VzdG9tQmFkZ2Uvc3R5bGUvaW5kZXgubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/customBadge/style/index.module.scss\n");

/***/ }),

/***/ "./components/footer/footer.js":
/*!*************************************!*\
  !*** ./components/footer/footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FooterWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/index.module.scss */ \"./components/footer/style/index.module.scss\");\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/liangchenzhou/Documents/test-project/v2-app-utility/components/footer/footer.js\";\n\n\nconst {\n  Footer\n} = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"];\n\nclass FooterWrapper extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Footer, {\n      className: \"footer\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 12\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanM/YWMyMCJdLCJuYW1lcyI6WyJGb290ZXIiLCJMYXlvdXQiLCJGb290ZXJXcmFwcGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsTUFBTTtBQUFFQTtBQUFGLElBQWFDLDJDQUFuQjtBQUVBO0FBRWUsTUFBTUMsYUFBTixTQUE0QkMsNENBQUssQ0FBQ0MsU0FBbEMsQ0FBNEM7QUFDekRDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDRDs7QUFFREMsUUFBTSxHQUFHO0FBQ1Asd0JBQU8scUVBQUMsTUFBRDtBQUFRLGVBQVMsRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFQd0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5jb25zdCB7IEZvb3RlciB9ID0gTGF5b3V0O1xuXG5pbXBvcnQgJy4vc3R5bGUvaW5kZXgubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXJXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxGb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+PC9Gb290ZXI+O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/footer/footer.js\n");

/***/ }),

/***/ "./components/footer/style/index.module.scss":
/*!***************************************************!*\
  !*** ./components/footer/style/index.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9vdGVyL3N0eWxlL2luZGV4Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer/style/index.module.scss\n");

/***/ }),

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeaderWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nav_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/nav */ \"./components/nav/nav.js\");\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/index.module.scss */ \"./components/header/style/index.module.scss\");\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/liangchenzhou/Documents/test-project/v2-app-utility/components/header/header.js\";\n\n\nconst {\n  Header\n} = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"];\n\n\nclass HeaderWrapper extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      navData: []\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Header, {\n      className: \"header\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"logo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_nav_nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        data: this.state.navData\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanM/MjdjMSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJIZWFkZXJXcmFwcGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJuYXZEYXRhIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE1BQU07QUFBRUE7QUFBRixJQUFhQywyQ0FBbkI7QUFFQTtBQUVBO0FBQ2UsTUFBTUMsYUFBTixTQUE0QkMsNENBQUssQ0FBQ0MsU0FBbEMsQ0FBNEM7QUFDekRDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQUFFO0FBREUsS0FBYjtBQUdEOztBQUVEQyxRQUFNLEdBQUc7QUFDUCx3QkFDRSxxRUFBQyxNQUFEO0FBQVEsZUFBUyxFQUFDLFFBQWxCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBSyxZQUFJLEVBQUUsS0FBS0YsS0FBTCxDQUFXQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFNRDs7QUFmd0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5jb25zdCB7IEhlYWRlciB9ID0gTGF5b3V0O1xuXG5pbXBvcnQgTmF2IGZyb20gJy4uL25hdi9uYXYnO1xuXG5pbXBvcnQgJy4vc3R5bGUvaW5kZXgubW9kdWxlLnNjc3MnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYXZEYXRhOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuICAgICAgICA8TmF2IGRhdGE9e3RoaXMuc3RhdGUubmF2RGF0YX0gLz5cbiAgICAgIDwvSGVhZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/header.js\n");

/***/ }),

/***/ "./components/header/style/index.module.scss":
/*!***************************************************!*\
  !*** ./components/header/style/index.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGVhZGVyL3N0eWxlL2luZGV4Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/style/index.module.scss\n");

/***/ }),

/***/ "./components/nav/config/nav.config.js":
/*!*********************************************!*\
  !*** ./components/nav/config/nav.config.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = [{\n  key: 'tfn',\n  value: 'Tax File Number'\n}, {\n  key: 'abn',\n  value: 'Australian Business Number'\n}, {\n  key: 'acn',\n  value: 'Australian Company Number'\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi9jb25maWcvbmF2LmNvbmZpZy5qcz9iOTY1Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJrZXkiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWJBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixDQUNmO0FBQ0VDLEtBQUcsRUFBRSxLQURQO0FBRUVDLE9BQUssRUFBRTtBQUZULENBRGUsRUFLZjtBQUNFRCxLQUFHLEVBQUUsS0FEUDtBQUVFQyxPQUFLLEVBQUU7QUFGVCxDQUxlLEVBU2Y7QUFDRUQsS0FBRyxFQUFFLEtBRFA7QUFFRUMsT0FBSyxFQUFFO0FBRlQsQ0FUZSxDQUFqQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2L2NvbmZpZy9uYXYuY29uZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAge1xuICAgIGtleTogJ3RmbicsXG4gICAgdmFsdWU6ICdUYXggRmlsZSBOdW1iZXInLFxuICB9LFxuICB7XG4gICAga2V5OiAnYWJuJyxcbiAgICB2YWx1ZTogJ0F1c3RyYWxpYW4gQnVzaW5lc3MgTnVtYmVyJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ2FjbicsXG4gICAgdmFsdWU6ICdBdXN0cmFsaWFuIENvbXBhbnkgTnVtYmVyJyxcbiAgfSxcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav/config/nav.config.js\n");

/***/ }),

/***/ "./components/nav/nav.js":
/*!*******************************!*\
  !*** ./components/nav/nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_nav_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/nav.config */ \"./components/nav/config/nav.config.js\");\n/* harmony import */ var _config_nav_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_nav_config__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/liangchenzhou/Documents/test-project/v2-app-utility/components/nav/nav.js\";\n\n\n\nclass Nav extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      defaultKey: 'tfn',\n      data: props.navData\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n      theme: \"light\",\n      mode: \"horizontal\",\n      defaultSelectedKeys: this.state.defaultKey,\n      children: (_config_nav_config__WEBPACK_IMPORTED_MODULE_3___default.a || []).map(data => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n        children: data.value\n      }, data.key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi9uYXYuanM/NThkYiJdLCJuYW1lcyI6WyJOYXYiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImRlZmF1bHRLZXkiLCJkYXRhIiwibmF2RGF0YSIsInJlbmRlciIsIk5BVl9DT05GSUciLCJtYXAiLCJ2YWx1ZSIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRWUsTUFBTUEsR0FBTixTQUFrQkMsNENBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFDL0NDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFBRSxLQUREO0FBRVhDLFVBQUksRUFBRUgsS0FBSyxDQUFDSTtBQUZELEtBQWI7QUFJRDs7QUFFREMsUUFBTSxHQUFHO0FBQ1Asd0JBQ0UscUVBQUMseUNBQUQ7QUFDRSxXQUFLLEVBQUMsT0FEUjtBQUVFLFVBQUksRUFBQyxZQUZQO0FBR0UseUJBQW1CLEVBQUUsS0FBS0osS0FBTCxDQUFXQyxVQUhsQztBQUFBLGdCQUtHLENBQUNJLHlEQUFVLElBQUksRUFBZixFQUFtQkMsR0FBbkIsQ0FBd0JKLElBQUQsaUJBQ3RCLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLGtCQUEyQkEsSUFBSSxDQUFDSztBQUFoQyxTQUFnQkwsSUFBSSxDQUFDTSxHQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFXRDs7QUFyQjhDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXYvbmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnO1xuXG5pbXBvcnQgTkFWX0NPTkZJRyBmcm9tICcuL2NvbmZpZy9uYXYuY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRlZmF1bHRLZXk6ICd0Zm4nLFxuICAgICAgZGF0YTogcHJvcHMubmF2RGF0YSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWVudVxuICAgICAgICB0aGVtZT1cImxpZ2h0XCJcbiAgICAgICAgbW9kZT1cImhvcml6b250YWxcIlxuICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXt0aGlzLnN0YXRlLmRlZmF1bHRLZXl9XG4gICAgICA+XG4gICAgICAgIHsoTkFWX0NPTkZJRyB8fCBbXSkubWFwKChkYXRhKSA9PiAoXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2RhdGEua2V5fT57ZGF0YS52YWx1ZX08L01lbnUuSXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L01lbnU+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav/nav.js\n");

/***/ }),

/***/ "./components/tfn/tfn.js":
/*!*******************************!*\
  !*** ./components/tfn/tfn.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TFN; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _customBadge_customBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customBadge/customBadge */ \"./components/customBadge/customBadge.js\");\n/* harmony import */ var _client_api_tfn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client/api/tfn */ \"./client/api/tfn.js\");\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/button */ \"./components/button/button.js\");\n\nvar _jsxFileName = \"/Users/liangchenzhou/Documents/test-project/v2-app-utility/components/tfn/tfn.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass TFN extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      containerType: '',\n      tfns: [],\n      generateEventData: {\n        type: 'primary',\n        text: 'Generating',\n        isLoading: false\n      }\n    };\n    this.fetchTFN = this.fetchTFN.bind(this);\n    this.handleGenerateClick = this.handleGenerateClick.bind(this);\n  }\n\n  fetchTFN(btnState) {\n    return Object(_client_api_tfn__WEBPACK_IMPORTED_MODULE_3__[\"getTFN\"])().then(data => {\n      console.log(data.tfn);\n      console.log(this.state.tfns);\n      this.setState(prevState => {\n        return {\n          tfns: [...this.state.tfns, data.tfn],\n          generateEventData: _objectSpread(_objectSpread({}, prevState.generateEventData), {}, {\n            isLoading: btnState.isLoading,\n            text: btnState.text\n          })\n        };\n      });\n    });\n  }\n\n  handleGenerateClick(e, btnState) {\n    this.fetchTFN({\n      isLoading: false,\n      text: 'Generate'\n    });\n    this.setState(prevState => {\n      return {\n        generateEventData: _objectSpread(_objectSpread({}, prevState.generateEventData), {}, {\n          isLoading: btnState.isLoading,\n          text: btnState.text\n        })\n      };\n    });\n  }\n\n  render() {\n    const components = this.state.tfns.map((tfn, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_customBadge_customBadge__WEBPACK_IMPORTED_MODULE_2__[\"CustomBadge\"], {\n      text: tfn\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this));\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"TFN Generator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_button_button__WEBPACK_IMPORTED_MODULE_4__[\"Btn\"], {\n        handleBtnClick: this.handleGenerateClick,\n        data: this.state.generateEventData\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"c-flex\",\n        children: components\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rmbi90Zm4uanM/MWFjMyJdLCJuYW1lcyI6WyJURk4iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImNvbnRhaW5lclR5cGUiLCJ0Zm5zIiwiZ2VuZXJhdGVFdmVudERhdGEiLCJ0eXBlIiwidGV4dCIsImlzTG9hZGluZyIsImZldGNoVEZOIiwiYmluZCIsImhhbmRsZUdlbmVyYXRlQ2xpY2siLCJidG5TdGF0ZSIsImdldFRGTiIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRmbiIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiZSIsInJlbmRlciIsImNvbXBvbmVudHMiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFZSxNQUFNQSxHQUFOLFNBQWtCQyw0Q0FBSyxDQUFDQyxTQUF4QixDQUFrQztBQUMvQ0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYSxFQUFFLEVBREo7QUFFWEMsVUFBSSxFQUFFLEVBRks7QUFHWEMsdUJBQWlCLEVBQUU7QUFDakJDLFlBQUksRUFBRSxTQURXO0FBRWpCQyxZQUFJLEVBQUUsWUFGVztBQUdqQkMsaUJBQVMsRUFBRTtBQUhNO0FBSFIsS0FBYjtBQVNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsU0FBS0MsbUJBQUwsR0FBMkIsS0FBS0EsbUJBQUwsQ0FBeUJELElBQXpCLENBQThCLElBQTlCLENBQTNCO0FBQ0Q7O0FBRURELFVBQVEsQ0FBQ0csUUFBRCxFQUFXO0FBQ2pCLFdBQU9DLDhEQUFNLEdBQUdDLElBQVQsQ0FBZUMsSUFBRCxJQUFVO0FBQzdCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxHQUFqQjtBQUNBRixhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLZixLQUFMLENBQVdFLElBQXZCO0FBQ0EsV0FBS2UsUUFBTCxDQUFlQyxTQUFELElBQWU7QUFDM0IsZUFBTztBQUNMaEIsY0FBSSxFQUFFLENBQUMsR0FBRyxLQUFLRixLQUFMLENBQVdFLElBQWYsRUFBcUJXLElBQUksQ0FBQ0csR0FBMUIsQ0FERDtBQUVMYiwyQkFBaUIsa0NBQ1plLFNBQVMsQ0FBQ2YsaUJBREU7QUFFZkcscUJBQVMsRUFBRUksUUFBUSxDQUFDSixTQUZMO0FBR2ZELGdCQUFJLEVBQUVLLFFBQVEsQ0FBQ0w7QUFIQTtBQUZaLFNBQVA7QUFRRCxPQVREO0FBVUQsS0FiTSxDQUFQO0FBY0Q7O0FBRURJLHFCQUFtQixDQUFDVSxDQUFELEVBQUlULFFBQUosRUFBYztBQUMvQixTQUFLSCxRQUFMLENBQWM7QUFBRUQsZUFBUyxFQUFFLEtBQWI7QUFBb0JELFVBQUksRUFBRTtBQUExQixLQUFkO0FBQ0EsU0FBS1ksUUFBTCxDQUFlQyxTQUFELElBQWU7QUFDM0IsYUFBTztBQUNMZix5QkFBaUIsa0NBQ1plLFNBQVMsQ0FBQ2YsaUJBREU7QUFFZkcsbUJBQVMsRUFBRUksUUFBUSxDQUFDSixTQUZMO0FBR2ZELGNBQUksRUFBRUssUUFBUSxDQUFDTDtBQUhBO0FBRFosT0FBUDtBQU9ELEtBUkQ7QUFTRDs7QUFFRGUsUUFBTSxHQUFHO0FBQ1AsVUFBTUMsVUFBVSxHQUFHLEtBQUtyQixLQUFMLENBQVdFLElBQVgsQ0FBZ0JvQixHQUFoQixDQUFvQixDQUFDTixHQUFELEVBQU1PLEtBQU4sa0JBQ3JDLHFFQUFDLG9FQUFEO0FBQXlCLFVBQUksRUFBRVA7QUFBL0IsT0FBa0JPLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEaUIsQ0FBbkI7QUFJQSx3QkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsa0RBQUQ7QUFDRSxzQkFBYyxFQUFFLEtBQUtkLG1CQUR2QjtBQUVFLFlBQUksRUFBRSxLQUFLVCxLQUFMLENBQVdHO0FBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQU9FO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUEsa0JBQXlCa0I7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBV0Q7O0FBOUQ4QyIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGZuL3Rmbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEN1c3RvbUJhZGdlIH0gZnJvbSAnLi4vY3VzdG9tQmFkZ2UvY3VzdG9tQmFkZ2UnO1xuXG5pbXBvcnQgeyBnZXRURk4gfSBmcm9tICcuLi8uLi9jbGllbnQvYXBpL3Rmbic7XG5pbXBvcnQgeyBCdG4gfSBmcm9tICcuLi9idXR0b24vYnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVEZOIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbnRhaW5lclR5cGU6ICcnLFxuICAgICAgdGZuczogW10sXG4gICAgICBnZW5lcmF0ZUV2ZW50RGF0YToge1xuICAgICAgICB0eXBlOiAncHJpbWFyeScsXG4gICAgICAgIHRleHQ6ICdHZW5lcmF0aW5nJyxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLmZldGNoVEZOID0gdGhpcy5mZXRjaFRGTi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlR2VuZXJhdGVDbGljayA9IHRoaXMuaGFuZGxlR2VuZXJhdGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZmV0Y2hURk4oYnRuU3RhdGUpIHtcbiAgICByZXR1cm4gZ2V0VEZOKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGF0YS50Zm4pO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50Zm5zKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRmbnM6IFsuLi50aGlzLnN0YXRlLnRmbnMsIGRhdGEudGZuXSxcbiAgICAgICAgICBnZW5lcmF0ZUV2ZW50RGF0YToge1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLmdlbmVyYXRlRXZlbnREYXRhLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBidG5TdGF0ZS5pc0xvYWRpbmcsXG4gICAgICAgICAgICB0ZXh0OiBidG5TdGF0ZS50ZXh0LFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUdlbmVyYXRlQ2xpY2soZSwgYnRuU3RhdGUpIHtcbiAgICB0aGlzLmZldGNoVEZOKHsgaXNMb2FkaW5nOiBmYWxzZSwgdGV4dDogJ0dlbmVyYXRlJyB9KTtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGdlbmVyYXRlRXZlbnREYXRhOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLmdlbmVyYXRlRXZlbnREYXRhLFxuICAgICAgICAgIGlzTG9hZGluZzogYnRuU3RhdGUuaXNMb2FkaW5nLFxuICAgICAgICAgIHRleHQ6IGJ0blN0YXRlLnRleHQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLnN0YXRlLnRmbnMubWFwKCh0Zm4sIGluZGV4KSA9PiAoXG4gICAgICA8Q3VzdG9tQmFkZ2Uga2V5PXtpbmRleH0gdGV4dD17dGZufSAvPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGgxPlRGTiBHZW5lcmF0b3I8L2gxPlxuICAgICAgICA8QnRuXG4gICAgICAgICAgaGFuZGxlQnRuQ2xpY2s9e3RoaXMuaGFuZGxlR2VuZXJhdGVDbGlja31cbiAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmdlbmVyYXRlRXZlbnREYXRhfVxuICAgICAgICAvPlxuICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmZldGNoVEZOfT5HZW5lcmF0ZTwvYnV0dG9uPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWZsZXhcIj57Y29tcG9uZW50c308L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tfn/tfn.js\n");

/***/ }),

/***/ "./layout/layout.js":
/*!**************************!*\
  !*** ./layout/layout.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LayoutWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header */ \"./components/header/header.js\");\n/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer/footer */ \"./components/footer/footer.js\");\n/* harmony import */ var _components_content_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/content/content */ \"./components/content/content.js\");\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/index.module.scss */ \"./layout/style/index.module.scss\");\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/liangchenzhou/Documents/test-project/v2-app-utility/layout/layout.js\";\n\n\n\n\n\n\nclass LayoutWrapper extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_6__[\"Layout\"], {\n      className: \"layout\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_header_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_content_content__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_footer_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXQvbGF5b3V0LmpzP2QxZDciXSwibmFtZXMiOlsiTGF5b3V0V3JhcHBlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFZSxNQUFNQSxhQUFOLFNBQTRCQyw0Q0FBSyxDQUFDQyxTQUFsQyxDQUE0QztBQUN6REMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7O0FBRURDLFFBQU0sR0FBRztBQUNQLHdCQUNFLHFFQUFDLDJDQUFEO0FBQVEsZUFBUyxFQUFDLFFBQWxCO0FBQUEsOEJBQ0UscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBT0Q7O0FBZHdEIiwiZmlsZSI6Ii4vbGF5b3V0L2xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBIZWFkZXJXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXInO1xuaW1wb3J0IENvbnRlbnRXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50JztcblxuaW1wb3J0ICcuL3N0eWxlL2luZGV4Lm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXRXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICA8SGVhZGVyV3JhcHBlciAvPlxuICAgICAgICA8Q29udGVudFdyYXBwZXIgLz5cbiAgICAgICAgPEZvb3RlcldyYXBwZXIgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/layout.js\n");

/***/ }),

/***/ "./layout/style/index.module.scss":
/*!****************************************!*\
  !*** ./layout/style/index.module.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2xheW91dC9zdHlsZS9pbmRleC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layout/style/index.module.scss\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.less":
/*!******************************************!*\
  !*** ./node_modules/antd/dist/antd.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5sZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.less\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/layout */ \"./layout/layout.js\");\n/* harmony import */ var antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.less */ \"./node_modules/antd/dist/antd.less\");\n/* harmony import */ var antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/liangchenzhou/Documents/test-project/v2-app-utility/pages/index.js\";\n\n\n\n\nfunction HomePage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layout_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEIsc0JBQU8scUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRWNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGF5b3V0V3JhcHBlciBmcm9tICcuLi9sYXlvdXQvbGF5b3V0JztcblxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5sZXNzJztcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIHJldHVybiA8TGF5b3V0V3JhcHBlciAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });