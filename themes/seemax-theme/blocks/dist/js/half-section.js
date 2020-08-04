/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/layout/half-section/half-section.js":
/*!****************************************************!*\
  !*** ./blocks/layout/half-section/half-section.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  /**
   * initializeBlock
   *
   * Adds custom JavaScript to the block HTML.
   *
   * @date    15/4/19
   * @since   1.0.0
   *
   * @param   object $block The block jQuery element.
   * @param   object attributes The block attributes (only available when editing).
   * @return  void
   */
  var initializeBlock = function initializeBlock($block) {// $block.find('h2').css( "color", "blue" );
  }; // Initialize each block on page load (front end).


  $(document).ready(function () {
    // Make sure it's not the wp-backend
    if (!$('body').hasClass("wp-admin")) {
      $('.half-and-half').each(function () {
        initializeBlock($(this));
        var $thisID = $(this).attr('id'); // console.log($thisID);

        $('.' + $thisID + '-sideXSideCarousel').slick({
          autoplay: true,
          autoplaySpeed: 5000,
          infinite: true,
          speed: 200,
          fade: true,
          cssEase: 'linear',
          prevArrow: $('.' + $thisID + '-slick-prev-arrow'),
          nextArrow: $('.' + $thisID + '-slick-next-arrow')
        });

        if ($(this).next().hasClass("half-and-half")) {
          $(this).next().addClass('side-x-side-in-a-row');
        }
      });
    }
  }); // Initialize dynamic block preview (editor).

  if (window.acf) {
    window.acf.addAction('render_block_preview/type=half-and-half', initializeBlock);
  }
})(jQuery);

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./blocks/layout/half-section/half-section.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seemax/code/fello2020/wp-content/themes/seemax-theme/blocks/layout/half-section/half-section.js */"./blocks/layout/half-section/half-section.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2xheW91dC9oYWxmLXNlY3Rpb24vaGFsZi1zZWN0aW9uLmpzIl0sIm5hbWVzIjpbIiQiLCJpbml0aWFsaXplQmxvY2siLCIkYmxvY2siLCJkb2N1bWVudCIsInJlYWR5IiwiaGFzQ2xhc3MiLCJlYWNoIiwiJHRoaXNJRCIsImF0dHIiLCJzbGljayIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImluZmluaXRlIiwic3BlZWQiLCJmYWRlIiwiY3NzRWFzZSIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsIm5leHQiLCJhZGRDbGFzcyIsIndpbmRvdyIsImFjZiIsImFkZEFjdGlvbiIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsVUFBU0EsQ0FBVCxFQUFXO0FBQ1Y7Ozs7Ozs7Ozs7OztBQVlBLE1BQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBVUMsTUFBVixFQUFtQixDQUNyQztBQUNILEdBRkQsQ0FiVSxDQWlCVjs7O0FBQ0FGLEdBQUMsQ0FBQ0csUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVTtBQUUxQjtBQUNBLFFBQUksQ0FBQ0osQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVSyxRQUFWLENBQW1CLFVBQW5CLENBQUwsRUFBcUM7QUFFbkNMLE9BQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CTSxJQUFwQixDQUF5QixZQUFVO0FBQ2pDTCx1QkFBZSxDQUFFRCxDQUFDLENBQUMsSUFBRCxDQUFILENBQWY7QUFFQSxZQUFJTyxPQUFPLEdBQUdQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsSUFBUixDQUFhLElBQWIsQ0FBZCxDQUhpQyxDQUlqQzs7QUFFQVIsU0FBQyxDQUFDLE1BQUlPLE9BQUosR0FBWSxvQkFBYixDQUFELENBQW9DRSxLQUFwQyxDQUEwQztBQUN4Q0Msa0JBQVEsRUFBQyxJQUQrQjtBQUV4Q0MsdUJBQWEsRUFBQyxJQUYwQjtBQUd4Q0Msa0JBQVEsRUFBRSxJQUg4QjtBQUl4Q0MsZUFBSyxFQUFFLEdBSmlDO0FBS3hDQyxjQUFJLEVBQUUsSUFMa0M7QUFNeENDLGlCQUFPLEVBQUUsUUFOK0I7QUFPeENDLG1CQUFTLEVBQUVoQixDQUFDLENBQUMsTUFBSU8sT0FBSixHQUFZLG1CQUFiLENBUDRCO0FBUXhDVSxtQkFBUyxFQUFFakIsQ0FBQyxDQUFDLE1BQUlPLE9BQUosR0FBWSxtQkFBYjtBQVI0QixTQUExQzs7QUFXQSxZQUFJUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFrQixJQUFSLEdBQWViLFFBQWYsQ0FBd0IsZUFBeEIsQ0FBSixFQUE2QztBQUMzQ0wsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsSUFBUixHQUFlQyxRQUFmLENBQXdCLHNCQUF4QjtBQUNEO0FBQ0YsT0FwQkQ7QUFxQkQ7QUFDRixHQTNCRCxFQWxCVSxDQStDVjs7QUFDQSxNQUFJQyxNQUFNLENBQUNDLEdBQVgsRUFBaUI7QUFDYkQsVUFBTSxDQUFDQyxHQUFQLENBQVdDLFNBQVgsQ0FBc0IseUNBQXRCLEVBQWlFckIsZUFBakU7QUFDSDtBQUVGLENBcERELEVBb0RHc0IsTUFwREgsRSIsImZpbGUiOiJoYWxmLXNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIoZnVuY3Rpb24oJCl7XG4gIC8qKlxuICAgKiBpbml0aWFsaXplQmxvY2tcbiAgICpcbiAgICogQWRkcyBjdXN0b20gSmF2YVNjcmlwdCB0byB0aGUgYmxvY2sgSFRNTC5cbiAgICpcbiAgICogQGRhdGUgICAgMTUvNC8xOVxuICAgKiBAc2luY2UgICAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0gICBvYmplY3QgJGJsb2NrIFRoZSBibG9jayBqUXVlcnkgZWxlbWVudC5cbiAgICogQHBhcmFtICAgb2JqZWN0IGF0dHJpYnV0ZXMgVGhlIGJsb2NrIGF0dHJpYnV0ZXMgKG9ubHkgYXZhaWxhYmxlIHdoZW4gZWRpdGluZykuXG4gICAqIEByZXR1cm4gIHZvaWRcbiAgICovXG4gIHZhciBpbml0aWFsaXplQmxvY2sgPSBmdW5jdGlvbiggJGJsb2NrICkge1xuICAgICAgLy8gJGJsb2NrLmZpbmQoJ2gyJykuY3NzKCBcImNvbG9yXCIsIFwiYmx1ZVwiICk7XG4gIH07XG5cbiAgLy8gSW5pdGlhbGl6ZSBlYWNoIGJsb2NrIG9uIHBhZ2UgbG9hZCAoZnJvbnQgZW5kKS5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICAgIC8vIE1ha2Ugc3VyZSBpdCdzIG5vdCB0aGUgd3AtYmFja2VuZFxuICAgIGlmICghJCgnYm9keScpLmhhc0NsYXNzKFwid3AtYWRtaW5cIikpIHtcblxuICAgICAgJCgnLmhhbGYtYW5kLWhhbGYnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGluaXRpYWxpemVCbG9jayggJCh0aGlzKSApO1xuXG4gICAgICAgIHZhciAkdGhpc0lEID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygkdGhpc0lEKTtcblxuICAgICAgICAkKCcuJyskdGhpc0lEKyctc2lkZVhTaWRlQ2Fyb3VzZWwnKS5zbGljayh7XG4gICAgICAgICAgYXV0b3BsYXk6dHJ1ZSxcbiAgICAgICAgICBhdXRvcGxheVNwZWVkOjUwMDAsXG4gICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgc3BlZWQ6IDIwMCxcbiAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICAgIHByZXZBcnJvdzogJCgnLicrJHRoaXNJRCsnLXNsaWNrLXByZXYtYXJyb3cnKSxcbiAgICAgICAgICBuZXh0QXJyb3c6ICQoJy4nKyR0aGlzSUQrJy1zbGljay1uZXh0LWFycm93JyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkKHRoaXMpLm5leHQoKS5oYXNDbGFzcyhcImhhbGYtYW5kLWhhbGZcIikpe1xuICAgICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdzaWRlLXgtc2lkZS1pbi1hLXJvdycpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEluaXRpYWxpemUgZHluYW1pYyBibG9jayBwcmV2aWV3IChlZGl0b3IpLlxuICBpZiggd2luZG93LmFjZiApIHtcbiAgICAgIHdpbmRvdy5hY2YuYWRkQWN0aW9uKCAncmVuZGVyX2Jsb2NrX3ByZXZpZXcvdHlwZT1oYWxmLWFuZC1oYWxmJywgaW5pdGlhbGl6ZUJsb2NrICk7XG4gIH1cblxufSkoalF1ZXJ5KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=