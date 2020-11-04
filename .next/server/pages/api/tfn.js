module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/tfn/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/tfn/index.js":
/*!********************************!*\
  !*** ./pages/api/tfn/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst tfnUtility = __webpack_require__(/*! ../../../utils/tfn/tfn */ \"./utils/tfn/tfn.js\");\n\nmodule.exports = (req, res) => {\n  return res.json({\n    tfn: tfnUtility.getTFN()\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdGZuL2luZGV4LmpzP2RiODIiXSwibmFtZXMiOlsidGZuVXRpbGl0eSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxIiwicmVzIiwianNvbiIsInRmbiIsImdldFRGTiJdLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLGtEQUFELENBQTFCOztBQUVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDN0IsU0FBT0EsR0FBRyxDQUFDQyxJQUFKLENBQVM7QUFBRUMsT0FBRyxFQUFFUCxVQUFVLENBQUNRLE1BQVg7QUFBUCxHQUFULENBQVA7QUFDRCxDQUZEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3Rmbi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdGZuVXRpbGl0eSA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL3Rmbi90Zm4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSAocmVxLCByZXMpID0+IHtcbiAgcmV0dXJuIHJlcy5qc29uKHsgdGZuOiB0Zm5VdGlsaXR5LmdldFRGTigpIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/tfn/index.js\n");

/***/ }),

/***/ "./utils/tfn/tfn.js":
/*!**************************!*\
  !*** ./utils/tfn/tfn.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nclass TFNUtility {\n  constructor(isUpdatedVersion) {\n    // TO DO\n    // remove old & new version flag\n    this.weights = [1, 4, 3, 7, 5, 8, 6, 9, 10];\n    this.modulo = 11;\n    this.isUpdatedVersion = isUpdatedVersion || true;\n  }\n\n  generateTempTFN() {\n    const digits = this.isUpdatedVersion ? 9 : 8;\n    return new Array(digits).fill(0).map(() => {\n      return this.generateRandomNum(digits);\n    });\n  }\n\n  generateSortedPairs(nums) {\n    return this.weights.map((weight, index) => {\n      return {\n        weight: weight,\n        value: nums[index]\n      };\n    }).sort((x, y) => y.weight - x.weight);\n  }\n\n  getSum(pairs) {\n    return pairs.reduce((acc, cur) => acc + cur.weight * cur.value, 0);\n  }\n\n  isTFNValid(tfn) {\n    const sum = this.getSum(this.generateSortedPairs(tfn));\n\n    if (sum % this.modulo !== 0) {\n      return false;\n    }\n\n    return true;\n  }\n\n  refactorTFN(tfn) {\n    const pairs = this.generateSortedPairs(tfn);\n    const sum = this.getSum(pairs);\n    const remainder = sum % this.modulo;\n    let targetPair = {};\n    console.log('remainder: ', remainder);\n\n    if (remainder === 2) {\n      // the num 2 is not in the weights list, so using the smaller num (1) instead\n      targetPair = pairs[pairs.length - 1];\n      targetPair.value = targetPair.value - 2;\n    } else {\n      // for other weight, subtract the corresponding value by 1\n      targetPair = pairs.find(pair => pair.weight === remainder); // if targetPair.value === 0;\n      // handle here\n\n      if (targetPair.value >= 1) {\n        targetPair.value = targetPair.value - 1;\n      }\n    }\n\n    const reorderedPairs = new Array(tfn.length);\n    pairs.forEach(pair => {\n      const index = this.weights.findIndex(weight => weight === pair.weight);\n      reorderedPairs[index] = pair;\n    });\n    console.log('reorder: ', reorderedPairs);\n    return reorderedPairs.map(pair => pair.value);\n  } //generate a num between min(include) and max(exclude)\n\n\n  generateRandomNum(max, min = 0) {\n    return Math.floor(Math.random() * (max - min)) + min;\n  }\n\n  getTFN() {\n    let tfn = this.generateTempTFN();\n    console.log('f: ', tfn);\n\n    if (!this.isTFNValid(tfn)) {\n      tfn = this.refactorTFN(tfn);\n    } // temp solution\n\n\n    const tfnNumber = +tfn.join('');\n\n    if (!tfnNumber || tfnNumber <= 0 || tfn.length !== 9) {\n      this.getTFN();\n      console.log('>>>>>>>>>>>>>>>>>>>>');\n      console.log('Wrong Number: ', tfn);\n      console.log('<<<<<<<<<<<<<<<<<<<<');\n    }\n\n    return tfnNumber;\n  }\n\n}\n\nmodule.exports = new TFNUtility();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy90Zm4vdGZuLmpzPzE3ZjIiXSwibmFtZXMiOlsiVEZOVXRpbGl0eSIsImNvbnN0cnVjdG9yIiwiaXNVcGRhdGVkVmVyc2lvbiIsIndlaWdodHMiLCJtb2R1bG8iLCJnZW5lcmF0ZVRlbXBURk4iLCJkaWdpdHMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJnZW5lcmF0ZVJhbmRvbU51bSIsImdlbmVyYXRlU29ydGVkUGFpcnMiLCJudW1zIiwid2VpZ2h0IiwiaW5kZXgiLCJ2YWx1ZSIsInNvcnQiLCJ4IiwieSIsImdldFN1bSIsInBhaXJzIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwiaXNURk5WYWxpZCIsInRmbiIsInN1bSIsInJlZmFjdG9yVEZOIiwicmVtYWluZGVyIiwidGFyZ2V0UGFpciIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJmaW5kIiwicGFpciIsInJlb3JkZXJlZFBhaXJzIiwiZm9yRWFjaCIsImZpbmRJbmRleCIsIm1heCIsIm1pbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldFRGTiIsInRmbk51bWJlciIsImpvaW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixNQUFNQSxVQUFOLENBQWlCO0FBQ2ZDLGFBQVcsQ0FBQ0MsZ0JBQUQsRUFBbUI7QUFDNUI7QUFDQTtBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLENBQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtGLGdCQUFMLEdBQXdCQSxnQkFBZ0IsSUFBSSxJQUE1QztBQUNEOztBQUVERyxpQkFBZSxHQUFHO0FBQ2hCLFVBQU1DLE1BQU0sR0FBRyxLQUFLSixnQkFBTCxHQUF3QixDQUF4QixHQUE0QixDQUEzQztBQUNBLFdBQU8s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bUJBQWlCLENBQUM0QixHQUFELEVBQU1DLEdBQUcsR0FBRyxDQUFaLEVBQWU7QUFDOUIsV0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkosR0FBRyxHQUFHQyxHQUF2QixDQUFYLElBQTBDQSxHQUFqRDtBQUNEOztBQUVESSxRQUFNLEdBQUc7QUFDUCxRQUFJbEIsR0FBRyxHQUFHLEtBQUtwQixlQUFMLEVBQVY7QUFFQXlCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJOLEdBQW5COztBQUNBLFFBQUksQ0FBQyxLQUFLRCxVQUFMLENBQWdCQyxHQUFoQixDQUFMLEVBQTJCO0FBQ3pCQSxTQUFHLEdBQUcsS0FBS0UsV0FBTCxDQUFpQkYsR0FBakIsQ0FBTjtBQUNELEtBTk0sQ0FPUDs7O0FBQ0EsVUFBTW1CLFNBQVMsR0FBRyxDQUFDbkIsR0FBRyxDQUFDb0IsSUFBSixDQUFTLEVBQVQsQ0FBbkI7O0FBQ0EsUUFBSSxDQUFDRCxTQUFELElBQWNBLFNBQVMsSUFBSSxDQUEzQixJQUFnQ25CLEdBQUcsQ0FBQ08sTUFBSixLQUFlLENBQW5ELEVBQXNEO0FBQ3BELFdBQUtXLE1BQUw7QUFDQWIsYUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJOLEdBQTlCO0FBQ0FLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0Q7O0FBRUQsV0FBT2EsU0FBUDtBQUNEOztBQXpGYzs7QUE0RmpCRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsSUFBSS9DLFVBQUosRUFBakIiLCJmaWxlIjoiLi91dGlscy90Zm4vdGZuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBURk5VdGlsaXR5IHtcbiAgY29uc3RydWN0b3IoaXNVcGRhdGVkVmVyc2lvbikge1xuICAgIC8vIFRPIERPXG4gICAgLy8gcmVtb3ZlIG9sZCAmIG5ldyB2ZXJzaW9uIGZsYWdcbiAgICB0aGlzLndlaWdodHMgPSBbMSwgNCwgMywgNywgNSwgOCwgNiwgOSwgMTBdO1xuICAgIHRoaXMubW9kdWxvID0gMTE7XG4gICAgdGhpcy5pc1VwZGF0ZWRWZXJzaW9uID0gaXNVcGRhdGVkVmVyc2lvbiB8fCB0cnVlO1xuICB9XG5cbiAgZ2VuZXJhdGVUZW1wVEZOKCkge1xuICAgIGNvbnN0IGRpZ2l0cyA9IHRoaXMuaXNVcGRhdGVkVmVyc2lvbiA/IDkgOiA4O1xuICAgIHJldHVybiBuZXcgQXJyYXkoZGlnaXRzKS5maWxsKDApLm1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVJhbmRvbU51bShkaWdpdHMpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2VuZXJhdGVTb3J0ZWRQYWlycyhudW1zKSB7XG4gICAgcmV0dXJuIHRoaXMud2VpZ2h0c1xuICAgICAgLm1hcCgod2VpZ2h0LCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdlaWdodDogd2VpZ2h0LFxuICAgICAgICAgIHZhbHVlOiBudW1zW2luZGV4XSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoeCwgeSkgPT4geS53ZWlnaHQgLSB4LndlaWdodCk7XG4gIH1cblxuICBnZXRTdW0ocGFpcnMpIHtcbiAgICByZXR1cm4gcGFpcnMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLndlaWdodCAqIGN1ci52YWx1ZSwgMCk7XG4gIH1cblxuICBpc1RGTlZhbGlkKHRmbikge1xuICAgIGNvbnN0IHN1bSA9IHRoaXMuZ2V0U3VtKHRoaXMuZ2VuZXJhdGVTb3J0ZWRQYWlycyh0Zm4pKTtcbiAgICBpZiAoc3VtICUgdGhpcy5tb2R1bG8gIT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZWZhY3RvclRGTih0Zm4pIHtcbiAgICBjb25zdCBwYWlycyA9IHRoaXMuZ2VuZXJhdGVTb3J0ZWRQYWlycyh0Zm4pO1xuICAgIGNvbnN0IHN1bSA9IHRoaXMuZ2V0U3VtKHBhaXJzKTtcbiAgICBjb25zdCByZW1haW5kZXIgPSBzdW0gJSB0aGlzLm1vZHVsbztcbiAgICBsZXQgdGFyZ2V0UGFpciA9IHt9O1xuICAgIGNvbnNvbGUubG9nKCdyZW1haW5kZXI6ICcsIHJlbWFpbmRlcik7XG4gICAgaWYgKHJlbWFpbmRlciA9PT0gMikge1xuICAgICAgLy8gdGhlIG51bSAyIGlzIG5vdCBpbiB0aGUgd2VpZ2h0cyBsaXN0LCBzbyB1c2luZyB0aGUgc21hbGxlciBudW0gKDEpIGluc3RlYWRcbiAgICAgIHRhcmdldFBhaXIgPSBwYWlyc1twYWlycy5sZW5ndGggLSAxXTtcbiAgICAgIHRhcmdldFBhaXIudmFsdWUgPSB0YXJnZXRQYWlyLnZhbHVlIC0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIG90aGVyIHdlaWdodCwgc3VidHJhY3QgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUgYnkgMVxuICAgICAgdGFyZ2V0UGFpciA9IHBhaXJzLmZpbmQoKHBhaXIpID0+IHBhaXIud2VpZ2h0ID09PSByZW1haW5kZXIpO1xuICAgICAgLy8gaWYgdGFyZ2V0UGFpci52YWx1ZSA9PT0gMDtcbiAgICAgIC8vIGhhbmRsZSBoZXJlXG4gICAgICBpZiAodGFyZ2V0UGFpci52YWx1ZSA+PSAxKSB7XG4gICAgICAgIHRhcmdldFBhaXIudmFsdWUgPSB0YXJnZXRQYWlyLnZhbHVlIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmVvcmRlcmVkUGFpcnMgPSBuZXcgQXJyYXkodGZuLmxlbmd0aCk7XG4gICAgcGFpcnMuZm9yRWFjaCgocGFpcikgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLndlaWdodHMuZmluZEluZGV4KCh3ZWlnaHQpID0+IHdlaWdodCA9PT0gcGFpci53ZWlnaHQpO1xuICAgICAgcmVvcmRlcmVkUGFpcnNbaW5kZXhdID0gcGFpcjtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygncmVvcmRlcjogJywgcmVvcmRlcmVkUGFpcnMpO1xuICAgIHJldHVybiByZW9yZGVyZWRQYWlycy5tYXAoKHBhaXIpID0+IHBhaXIudmFsdWUpO1xuICB9XG5cbiAgLy9nZW5lcmF0ZSBhIG51bSBiZXR3ZWVuIG1pbihpbmNsdWRlKSBhbmQgbWF4KGV4Y2x1ZGUpXG4gIGdlbmVyYXRlUmFuZG9tTnVtKG1heCwgbWluID0gMCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gIH1cblxuICBnZXRURk4oKSB7XG4gICAgbGV0IHRmbiA9IHRoaXMuZ2VuZXJhdGVUZW1wVEZOKCk7XG5cbiAgICBjb25zb2xlLmxvZygnZjogJywgdGZuKTtcbiAgICBpZiAoIXRoaXMuaXNURk5WYWxpZCh0Zm4pKSB7XG4gICAgICB0Zm4gPSB0aGlzLnJlZmFjdG9yVEZOKHRmbik7XG4gICAgfVxuICAgIC8vIHRlbXAgc29sdXRpb25cbiAgICBjb25zdCB0Zm5OdW1iZXIgPSArdGZuLmpvaW4oJycpO1xuICAgIGlmICghdGZuTnVtYmVyIHx8IHRmbk51bWJlciA8PSAwIHx8IHRmbi5sZW5ndGggIT09IDkpIHtcbiAgICAgIHRoaXMuZ2V0VEZOKCk7XG4gICAgICBjb25zb2xlLmxvZygnPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4nKTtcbiAgICAgIGNvbnNvbGUubG9nKCdXcm9uZyBOdW1iZXI6ICcsIHRmbik7XG4gICAgICBjb25zb2xlLmxvZygnPDw8PDw8PDw8PDw8PDw8PDw8PDwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGZuTnVtYmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFRGTlV0aWxpdHkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/tfn/tfn.js\n");

/***/ })

/******/ });