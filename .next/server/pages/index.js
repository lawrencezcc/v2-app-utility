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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_nav_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/nav.config */ \"./components/nav/config/nav.config.js\");\n/* harmony import */ var _config_nav_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_nav_config__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/liangchenzhou/Documents/test-project/v2-app-utility/components/nav/nav.js\";\n\n\n\nclass Nav extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      defaultKey: 'tfn',\n      data: props.navData\n    };\n  }\n\n  render() {\n    const color = '#108ee9';\n    const promptComingSoon = 'Coming Soon...';\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n      theme: \"light\",\n      mode: \"horizontal\",\n      defaultSelectedKeys: this.state.defaultKey,\n      children: (_config_nav_config__WEBPACK_IMPORTED_MODULE_3___default.a || []).map(data => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n        children: data.key === 'tfn' ? data.value : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"], {\n          title: promptComingSoon,\n          color: color,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: data.value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 15\n        }, this)\n      }, data.key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi9uYXYuanM/NThkYiJdLCJuYW1lcyI6WyJOYXYiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImRlZmF1bHRLZXkiLCJkYXRhIiwibmF2RGF0YSIsInJlbmRlciIsImNvbG9yIiwicHJvbXB0Q29taW5nU29vbiIsIk5BVl9DT05GSUciLCJtYXAiLCJrZXkiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRWUsTUFBTUEsR0FBTixTQUFrQkMsNENBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFDL0NDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFBRSxLQUREO0FBRVhDLFVBQUksRUFBRUgsS0FBSyxDQUFDSTtBQUZELEtBQWI7QUFJRDs7QUFFREMsUUFBTSxHQUFHO0FBQ1AsVUFBTUMsS0FBSyxHQUFHLFNBQWQ7QUFDQSxVQUFNQyxnQkFBZ0IsR0FBRyxnQkFBekI7QUFDQSx3QkFDRSxxRUFBQyx5Q0FBRDtBQUNFLFdBQUssRUFBQyxPQURSO0FBRUUsVUFBSSxFQUFDLFlBRlA7QUFHRSx5QkFBbUIsRUFBRSxLQUFLTixLQUFMLENBQVdDLFVBSGxDO0FBQUEsZ0JBS0csQ0FBQ00seURBQVUsSUFBSSxFQUFmLEVBQW1CQyxHQUFuQixDQUF3Qk4sSUFBRCxpQkFDdEIscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsa0JBQ0dBLElBQUksQ0FBQ08sR0FBTCxLQUFhLEtBQWIsR0FDQ1AsSUFBSSxDQUFDUSxLQUROLGdCQUdDLHFFQUFDLDRDQUFEO0FBQVMsZUFBSyxFQUFFSixnQkFBaEI7QUFBa0MsZUFBSyxFQUFFRCxLQUF6QztBQUFBLGlDQUNFO0FBQUEsc0JBQU9ILElBQUksQ0FBQ1E7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKLFNBQWdCUixJQUFJLENBQUNPLEdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQW1CRDs7QUEvQjhDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXYvbmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTWVudSwgVG9vbHRpcCB9IGZyb20gJ2FudGQnO1xuXG5pbXBvcnQgTkFWX0NPTkZJRyBmcm9tICcuL2NvbmZpZy9uYXYuY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRlZmF1bHRLZXk6ICd0Zm4nLFxuICAgICAgZGF0YTogcHJvcHMubmF2RGF0YSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNvbG9yID0gJyMxMDhlZTknO1xuICAgIGNvbnN0IHByb21wdENvbWluZ1Nvb24gPSAnQ29taW5nIFNvb24uLi4nO1xuICAgIHJldHVybiAoXG4gICAgICA8TWVudVxuICAgICAgICB0aGVtZT1cImxpZ2h0XCJcbiAgICAgICAgbW9kZT1cImhvcml6b250YWxcIlxuICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXt0aGlzLnN0YXRlLmRlZmF1bHRLZXl9XG4gICAgICA+XG4gICAgICAgIHsoTkFWX0NPTkZJRyB8fCBbXSkubWFwKChkYXRhKSA9PiAoXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2RhdGEua2V5fT5cbiAgICAgICAgICAgIHtkYXRhLmtleSA9PT0gJ3RmbicgPyAoXG4gICAgICAgICAgICAgIGRhdGEudmFsdWVcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtwcm9tcHRDb21pbmdTb29ufSBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgICAgICAgIDxzcGFuPntkYXRhLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L01lbnU+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav/nav.js\n");

/***/ }),

/***/ "./components/tfn/tfn.js":
/*!*******************************!*\
  !*** ./components/tfn/tfn.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TFN; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _customBadge_customBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customBadge/customBadge */ \"./components/customBadge/customBadge.js\");\n/* harmony import */ var _client_api_tfn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client/api/tfn */ \"./client/api/tfn.js\");\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/button */ \"./components/button/button.js\");\n\nvar _jsxFileName = \"/Users/liangchenzhou/Documents/test-project/v2-app-utility/components/tfn/tfn.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass TFN extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      containerType: '',\n      tfns: [],\n      generateEventData: {\n        type: 'primary',\n        text: 'Generate',\n        isLoading: false\n      }\n    };\n    this.fetchTFN = this.fetchTFN.bind(this);\n    this.handleGenerateClick = this.handleGenerateClick.bind(this);\n  }\n\n  fetchTFN(btnState) {\n    return Object(_client_api_tfn__WEBPACK_IMPORTED_MODULE_3__[\"getTFN\"])().then(data => {\n      this.setState(prevState => {\n        return {\n          tfns: [...this.state.tfns, data.tfn],\n          generateEventData: _objectSpread(_objectSpread({}, prevState.generateEventData), {}, {\n            isLoading: btnState.isLoading,\n            text: btnState.text\n          })\n        };\n      });\n    });\n  }\n\n  handleGenerateClick(e, btnState) {\n    this.fetchTFN({\n      isLoading: false,\n      text: 'Generate'\n    });\n    this.setState(prevState => {\n      return {\n        generateEventData: _objectSpread(_objectSpread({}, prevState.generateEventData), {}, {\n          isLoading: btnState.isLoading,\n          text: btnState.text\n        })\n      };\n    });\n  }\n\n  render() {\n    const components = this.state.tfns.map((tfn, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_customBadge_customBadge__WEBPACK_IMPORTED_MODULE_2__[\"CustomBadge\"], {\n      text: tfn\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this));\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"TFN Generator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_button_button__WEBPACK_IMPORTED_MODULE_4__[\"Btn\"], {\n        handleBtnClick: this.handleGenerateClick,\n        data: this.state.generateEventData\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"c-flex\",\n        children: components\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rmbi90Zm4uanM/MWFjMyJdLCJuYW1lcyI6WyJURk4iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImNvbnRhaW5lclR5cGUiLCJ0Zm5zIiwiZ2VuZXJhdGVFdmVudERhdGEiLCJ0eXBlIiwidGV4dCIsImlzTG9hZGluZyIsImZldGNoVEZOIiwiYmluZCIsImhhbmRsZUdlbmVyYXRlQ2xpY2siLCJidG5TdGF0ZSIsImdldFRGTiIsInRoZW4iLCJkYXRhIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJ0Zm4iLCJlIiwicmVuZGVyIiwiY29tcG9uZW50cyIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVlLE1BQU1BLEdBQU4sU0FBa0JDLDRDQUFLLENBQUNDLFNBQXhCLENBQWtDO0FBQy9DQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhLEVBQUUsRUFESjtBQUVYQyxVQUFJLEVBQUUsRUFGSztBQUdYQyx1QkFBaUIsRUFBRTtBQUNqQkMsWUFBSSxFQUFFLFNBRFc7QUFFakJDLFlBQUksRUFBRSxVQUZXO0FBR2pCQyxpQkFBUyxFQUFFO0FBSE07QUFIUixLQUFiO0FBU0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxTQUFLQyxtQkFBTCxHQUEyQixLQUFLQSxtQkFBTCxDQUF5QkQsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBM0I7QUFDRDs7QUFFREQsVUFBUSxDQUFDRyxRQUFELEVBQVc7QUFDakIsV0FBT0MsOERBQU0sR0FBR0MsSUFBVCxDQUFlQyxJQUFELElBQVU7QUFDN0IsV0FBS0MsUUFBTCxDQUFlQyxTQUFELElBQWU7QUFDM0IsZUFBTztBQUNMYixjQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUtGLEtBQUwsQ0FBV0UsSUFBZixFQUFxQlcsSUFBSSxDQUFDRyxHQUExQixDQUREO0FBRUxiLDJCQUFpQixrQ0FDWlksU0FBUyxDQUFDWixpQkFERTtBQUVmRyxxQkFBUyxFQUFFSSxRQUFRLENBQUNKLFNBRkw7QUFHZkQsZ0JBQUksRUFBRUssUUFBUSxDQUFDTDtBQUhBO0FBRlosU0FBUDtBQVFELE9BVEQ7QUFVRCxLQVhNLENBQVA7QUFZRDs7QUFFREkscUJBQW1CLENBQUNRLENBQUQsRUFBSVAsUUFBSixFQUFjO0FBQy9CLFNBQUtILFFBQUwsQ0FBYztBQUFFRCxlQUFTLEVBQUUsS0FBYjtBQUFvQkQsVUFBSSxFQUFFO0FBQTFCLEtBQWQ7QUFDQSxTQUFLUyxRQUFMLENBQWVDLFNBQUQsSUFBZTtBQUMzQixhQUFPO0FBQ0xaLHlCQUFpQixrQ0FDWlksU0FBUyxDQUFDWixpQkFERTtBQUVmRyxtQkFBUyxFQUFFSSxRQUFRLENBQUNKLFNBRkw7QUFHZkQsY0FBSSxFQUFFSyxRQUFRLENBQUNMO0FBSEE7QUFEWixPQUFQO0FBT0QsS0FSRDtBQVNEOztBQUVEYSxRQUFNLEdBQUc7QUFDUCxVQUFNQyxVQUFVLEdBQUcsS0FBS25CLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQmtCLEdBQWhCLENBQW9CLENBQUNKLEdBQUQsRUFBTUssS0FBTixrQkFDckMscUVBQUMsb0VBQUQ7QUFBeUIsVUFBSSxFQUFFTDtBQUEvQixPQUFrQkssS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURpQixDQUFuQjtBQUlBLHdCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxrREFBRDtBQUNFLHNCQUFjLEVBQUUsS0FBS1osbUJBRHZCO0FBRUUsWUFBSSxFQUFFLEtBQUtULEtBQUwsQ0FBV0c7QUFGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBT0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSxrQkFBeUJnQjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFXRDs7QUE1RDhDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90Zm4vdGZuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ3VzdG9tQmFkZ2UgfSBmcm9tICcuLi9jdXN0b21CYWRnZS9jdXN0b21CYWRnZSc7XG5cbmltcG9ydCB7IGdldFRGTiB9IGZyb20gJy4uLy4uL2NsaWVudC9hcGkvdGZuJztcbmltcG9ydCB7IEJ0biB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBURk4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29udGFpbmVyVHlwZTogJycsXG4gICAgICB0Zm5zOiBbXSxcbiAgICAgIGdlbmVyYXRlRXZlbnREYXRhOiB7XG4gICAgICAgIHR5cGU6ICdwcmltYXJ5JyxcbiAgICAgICAgdGV4dDogJ0dlbmVyYXRlJyxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLmZldGNoVEZOID0gdGhpcy5mZXRjaFRGTi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlR2VuZXJhdGVDbGljayA9IHRoaXMuaGFuZGxlR2VuZXJhdGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZmV0Y2hURk4oYnRuU3RhdGUpIHtcbiAgICByZXR1cm4gZ2V0VEZOKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGZuczogWy4uLnRoaXMuc3RhdGUudGZucywgZGF0YS50Zm5dLFxuICAgICAgICAgIGdlbmVyYXRlRXZlbnREYXRhOiB7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUuZ2VuZXJhdGVFdmVudERhdGEsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGJ0blN0YXRlLmlzTG9hZGluZyxcbiAgICAgICAgICAgIHRleHQ6IGJ0blN0YXRlLnRleHQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlR2VuZXJhdGVDbGljayhlLCBidG5TdGF0ZSkge1xuICAgIHRoaXMuZmV0Y2hURk4oeyBpc0xvYWRpbmc6IGZhbHNlLCB0ZXh0OiAnR2VuZXJhdGUnIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZ2VuZXJhdGVFdmVudERhdGE6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZ2VuZXJhdGVFdmVudERhdGEsXG4gICAgICAgICAgaXNMb2FkaW5nOiBidG5TdGF0ZS5pc0xvYWRpbmcsXG4gICAgICAgICAgdGV4dDogYnRuU3RhdGUudGV4dCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuc3RhdGUudGZucy5tYXAoKHRmbiwgaW5kZXgpID0+IChcbiAgICAgIDxDdXN0b21CYWRnZSBrZXk9e2luZGV4fSB0ZXh0PXt0Zm59IC8+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8aDE+VEZOIEdlbmVyYXRvcjwvaDE+XG4gICAgICAgIDxCdG5cbiAgICAgICAgICBoYW5kbGVCdG5DbGljaz17dGhpcy5oYW5kbGVHZW5lcmF0ZUNsaWNrfVxuICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZ2VuZXJhdGVFdmVudERhdGF9XG4gICAgICAgIC8+XG4gICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZmV0Y2hURk59PkdlbmVyYXRlPC9idXR0b24+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtZmxleFwiPntjb21wb25lbnRzfTwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tfn/tfn.js\n");

/***/ }),

/***/ "./layout/layout.js":
/*!**************************!*\
  !*** ./layout/layout.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LayoutWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/header */ \"./components/header/header.js\");\n/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer/footer */ \"./components/footer/footer.js\");\n/* harmony import */ var _components_content_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/content/content */ \"./components/content/content.js\");\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/index.module.scss */ \"./layout/style/index.module.scss\");\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/liangchenzhou/Documents/test-project/v2-app-utility/layout/layout.js\";\n\n\n\n\n\n\n\nclass LayoutWrapper extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_7__[\"Layout\"], {\n      className: \"layout\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: \"TFN generator\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n          rel: \"canonical\",\n          href: \"https://www.helperutility.com\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          name: \"keywords\",\n          content: \"Tax file number generator, tfn generator\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          name: \"description\",\n          content: \"Australian Tax file number generator is a free web utility tool for generating TFN.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:title\",\n          content: \"TFN generator\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:title\",\n          content: \"Tax file number generator, tfn generator\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:description\",\n          content: \"Australian Tax file number generator is a free web utility tool for generating TFN.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:url\",\n          content: \"https://www.helperutility.com\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:site_name\",\n          content: \"TFN generator\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_header_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_content_content__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_footer_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXQvbGF5b3V0LmpzP2QxZDciXSwibmFtZXMiOlsiTGF5b3V0V3JhcHBlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsTUFBTUEsYUFBTixTQUE0QkMsNENBQUssQ0FBQ0MsU0FBbEMsQ0FBNEM7QUFDekRDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNEOztBQUVEQyxRQUFNLEdBQUc7QUFDUCx3QkFDRSxxRUFBQywyQ0FBRDtBQUFRLGVBQVMsRUFBQyxRQUFsQjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLGFBQUcsRUFBQyxXQUFWO0FBQXNCLGNBQUksRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGlCQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBT0U7QUFDRSxjQUFJLEVBQUMsYUFEUDtBQUVFLGlCQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBV0U7QUFBTSxrQkFBUSxFQUFDLFVBQWY7QUFBMEIsaUJBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhGLGVBWUU7QUFDRSxrQkFBUSxFQUFDLFVBRFg7QUFFRSxpQkFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRixlQWdCRTtBQUNFLGtCQUFRLEVBQUMsZ0JBRFg7QUFFRSxpQkFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkYsZUFvQkU7QUFBTSxrQkFBUSxFQUFDLFFBQWY7QUFBd0IsaUJBQU8sRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBCRixlQXFCRTtBQUFNLGtCQUFRLEVBQUMsY0FBZjtBQUE4QixpQkFBTyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBd0JFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkYsZUF5QkUscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpCRixlQTBCRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBOEJEOztBQXJDd0QiLCJmaWxlIjoiLi9sYXlvdXQvbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBIZWFkZXJXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXInO1xuaW1wb3J0IENvbnRlbnRXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50JztcblxuaW1wb3J0ICcuL3N0eWxlL2luZGV4Lm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXRXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+VEZOIGdlbmVyYXRvcjwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vd3d3LmhlbHBlcnV0aWxpdHkuY29tXCIgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJUYXggZmlsZSBudW1iZXIgZ2VuZXJhdG9yLCB0Zm4gZ2VuZXJhdG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udGVudD1cIkF1c3RyYWxpYW4gVGF4IGZpbGUgbnVtYmVyIGdlbmVyYXRvciBpcyBhIGZyZWUgd2ViIHV0aWxpdHkgdG9vbCBmb3IgZ2VuZXJhdGluZyBURk4uXCJcbiAgICAgICAgICA+PC9tZXRhPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiVEZOIGdlbmVyYXRvclwiIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxuICAgICAgICAgICAgY29udGVudD1cIlRheCBmaWxlIG51bWJlciBnZW5lcmF0b3IsIHRmbiBnZW5lcmF0b3JcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udGVudD1cIkF1c3RyYWxpYW4gVGF4IGZpbGUgbnVtYmVyIGdlbmVyYXRvciBpcyBhIGZyZWUgd2ViIHV0aWxpdHkgdG9vbCBmb3IgZ2VuZXJhdGluZyBURk4uXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vd3d3LmhlbHBlcnV0aWxpdHkuY29tXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJURk4gZ2VuZXJhdG9yXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8SGVhZGVyV3JhcHBlciAvPlxuICAgICAgICA8Q29udGVudFdyYXBwZXIgLz5cbiAgICAgICAgPEZvb3RlcldyYXBwZXIgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/layout.js\n");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

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