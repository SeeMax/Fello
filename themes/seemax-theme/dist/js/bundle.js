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

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/preloader */ "./src/js/components/preloader.js");
/* harmony import */ var _components_preloader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_preloader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_mobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mobileMenu */ "./src/js/components/mobileMenu.js");
/* harmony import */ var _components_externalLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/externalLinks */ "./src/js/components/externalLinks.js");
/* harmony import */ var _components_externalLinks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_externalLinks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_loadMailchimpScripts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loadMailchimpScripts.js */ "./src/js/components/loadMailchimpScripts.js");
/* harmony import */ var _components_loadMailchimpScripts_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_loadMailchimpScripts_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_smoothScroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/smoothScroll.js */ "./src/js/components/smoothScroll.js");
/* harmony import */ var _components_createStrainsMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/createStrainsMenu */ "./src/js/components/createStrainsMenu.js");
/* harmony import */ var _components_createStrainsMenu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_createStrainsMenu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ageVerification_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ageVerification.js */ "./src/js/components/ageVerification.js");
/* harmony import */ var _components_ageVerification_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_ageVerification_js__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/js/components/ageVerification.js":
/*!**********************************************!*\
  !*** ./src/js/components/ageVerification.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function ($) {
  if (sessionStorage.getItem('advertOnce') !== 'true') {
    gsap.set($('body'), {
      height: '100vh',
      overflow: 'hidden'
    });
    gsap.set($('.age-gate'), {
      autoAlpha: 1
    });
  } else {
    gsap.set($('.age-gate'), {
      autoAlpha: 0
    });
  }

  $('.ageYes').on('click', function () {
    gsap.to($('.age-gate'), {
      duration: 0.3,
      opacity: 0,
      onComplete: function onComplete() {
        gsap.set($('.age-gate'), {
          autoAlpha: 0
        });
      }
    });
    gsap.set($('body'), {
      height: 'auto',
      overflow: 'visible'
    });
    sessionStorage.setItem('advertOnce', 'true');
  });
});

/***/ }),

/***/ "./src/js/components/createStrainsMenu.js":
/*!************************************************!*\
  !*** ./src/js/components/createStrainsMenu.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var buildStrainNav = function buildStrainNav() {
  var hero = $('.page-strains .hero-section');
  var subNav = '<div class="strain-subnav"><div class="content"></div></div>';
  $(hero).after(subNav);
};

var buildStrainLinks = function buildStrainLinks() {
  $('.single-strain-section').each(function () {
    var thisID = $(this).find('.content').attr('id');
    var cleanID = thisID.replace(/[^a-zA-Z ]/g, "");
    var thisName = $(this).find('h2').html();
    var thisLink = "<a href='#" + cleanID + "'>" + thisName + "</a>";
    $('.strain-subnav .content').append(thisLink);
  });
};

var pinStrainLinks = function pinStrainLinks() {
  var headerHeight = $('.header').outerHeight();
  var subNavHeight = $('.strain-subnav').outerHeight();
  var spacerHeight = headerHeight + subNavHeight;
  var st = ScrollTrigger.create({
    trigger: ".strain-section",
    pin: ".strain-subnav",
    start: "-=" + spacerHeight + "",
    pinSpacing: false
  });
};

if ($('body').hasClass('page-strains')) {
  // alert("here");
  buildStrainNav();
  buildStrainLinks();
  pinStrainLinks();
}

/***/ }),

/***/ "./src/js/components/externalLinks.js":
/*!********************************************!*\
  !*** ./src/js/components/externalLinks.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var extLinks = function extLinks() {
  // console.log('external link');
  $('a').each(function () {
    var a = new RegExp('/' + window.location.host + '/');

    if (!a.test(this.href)) {
      $(this).click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        window.open(this.href, '_blank');
      });
    }
  });
};

$(document).ready(function ($) {
  extLinks();
});

/***/ }),

/***/ "./src/js/components/loadMailchimpScripts.js":
/*!***************************************************!*\
  !*** ./src/js/components/loadMailchimpScripts.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Make a variable for the Mailchimp Scripts
var mailchimpScripts = function mailchimpScripts() {
  var thisOneScript = '<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array();window.ftypes = new Array();fnames[0]="EMAIL";ftypes[0]="email";fnames[1]="FNAME";ftypes[1]="text";fnames[2]="LNAME";ftypes[2]="text";}(jQuery));var $mcj = jQuery.noConflict(true);</script>';
  $('body').append(thisOneScript);
}; // If the mailchimp for is PerformanceObserverEntryList, load the scripts


$(document).ready(function () {
  if ($('#mc_embed_signup').length) {
    mailchimpScripts();
  }
});

/***/ }),

/***/ "./src/js/components/mobileMenu.js":
/*!*****************************************!*\
  !*** ./src/js/components/mobileMenu.js ***!
  \*****************************************/
/*! exports provided: menuClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuClose", function() { return menuClose; });
$(".menuToggle").on('click', function () {
  if ($(this).hasClass("navOpen")) {
    menuClose();
  } else {
    menuOpen();
  }
});
var menuClose = function menuClose() {
  var tl = new gsap.timeline();
  var toggle = $(".menuToggle");
  var fullMenu = $(".main-nav");
  var links = $("nav li");
  var ham1 = $(".hamTop");
  var ham2 = $(".hamMid");
  var ham3 = $(".hamBot");
  var uniTime = 0.3;
  var uniEase = Back.easeIn.config(1);
  var uniEase2 = Back.easeOut.config(1);
  $(toggle).removeClass("navOpen");
  tl.set($(".wrapper"), {
    height: "auto",
    overflow: "visible"
  });
  tl.to(links, {
    duration: uniTime,
    opacity: 0,
    x: "50%",
    ease: uniEase2,
    stagger: {
      amount: uniTime
    }
  }, "menuClose");
  tl.to(fullMenu, {
    duration: uniTime,
    left: "101%"
  }, "menuClose+=0.2");
  tl.to([ham1, ham2, ham3], {
    duration: uniTime / 2,
    x: 0,
    width: "100%",
    rotation: 0,
    y: 0
  }, "menuClose");
  return tl;
};

var menuOpen = function menuOpen() {
  var tl = new gsap.timeline();
  var toggle = $(".menuToggle");
  var fullMenu = $(".main-nav");
  var links = $("nav li");
  var ham1 = $(".hamTop");
  var ham2 = $(".hamMid");
  var ham3 = $(".hamBot");
  var uniTime = 0.15;
  var uniEase = Back.easeIn.config(1);
  var uniEase2 = Back.easeOut.config(1);
  $(toggle).addClass("navOpen");
  tl.set($(".wrapper"), {
    height: "100%",
    overflow: "hidden"
  });
  tl.set(links, {
    opacity: 0,
    x: "50%"
  });
  tl.to(fullMenu, {
    duration: uniTime * 2,
    left: "0%"
  }, "menuOpen");
  tl.to(links, {
    duration: uniTime,
    opacity: 1,
    x: "0%",
    ease: uniEase2,
    stagger: {
      amount: uniTime / 3
    }
  }, "menuOpen+=0.175");
  tl.to(ham1, {
    duration: uniTime,
    rotation: -315,
    x: 6,
    y: 4,
    width: 10,
    transformOrigin: "50% 50%",
    ease: uniEase
  }, "menuOpen");
  tl.to(ham2, {
    duration: uniTime,
    x: -4,
    width: 18
  }, "menuOpen");
  tl.to(ham3, {
    duration: uniTime,
    rotation: 315,
    x: 6,
    y: -4,
    width: 10,
    transformOrigin: "50% 50%",
    ease: uniEase
  }, "menuOpen");
  return tl;
};

/***/ }),

/***/ "./src/js/components/preloader.js":
/*!****************************************!*\
  !*** ./src/js/components/preloader.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var preLoaderOn = function preLoaderOn() {
  // console.log('not-preloader');
  $('#preloader').fadeOut('slow', function () {
    $(this).remove();
  });
};

window.onload = function (e) {
  preLoaderOn();
};

/***/ }),

/***/ "./src/js/components/smoothScroll.js":
/*!*******************************************!*\
  !*** ./src/js/components/smoothScroll.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mobileMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobileMenu.js */ "./src/js/components/mobileMenu.js");
// Import The Menu Close Function to use on mobile


var smoothScrolling = function smoothScrolling(theLink) {
  gsap.registerPlugin(ScrollToPlugin);
  event.preventDefault();
  var target = $(theLink).attr("href");
  var headerHeight = $('.header').outerHeight();
  var subNavHeight = $('.strain-subnav').outerHeight();
  var spacerHeight = headerHeight + subNavHeight;

  if ($('body').hasClass('page-strains')) {
    console.log("well...console");
    gsap.to(window, {
      duration: 0.5,
      ease: "circ.out",
      scrollTo: {
        y: target,
        offsetY: spacerHeight
      }
    });
  } else {
    gsap.to(window, {
      duration: 0.5,
      ease: "circ.out",
      scrollTo: {
        y: target,
        offsetY: headerHeight
      }
    });
  }

  return false;
};

jQuery(document).ready(function ($) {
  $('a[href^="#"]').bind('click', function () {
    smoothScrolling($(this)); // IF IT"S MOBILE / IPAD OR SMALLER

    if (screen.width <= 1025) {
      Object(_mobileMenu_js__WEBPACK_IMPORTED_MODULE_0__["menuClose"])();
      smoothScrolling($(this));
    }
  });
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seemax/code/fello2020/wp-content/themes/seemax-theme/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hZ2VWZXJpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY3JlYXRlU3RyYWluc01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZXh0ZXJuYWxMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9sb2FkTWFpbGNoaW1wU2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tb2JpbGVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zbW9vdGhTY3JvbGwuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJnc2FwIiwic2V0IiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJhdXRvQWxwaGEiLCJvbiIsInRvIiwiZHVyYXRpb24iLCJvcGFjaXR5Iiwib25Db21wbGV0ZSIsInNldEl0ZW0iLCJidWlsZFN0cmFpbk5hdiIsImhlcm8iLCJzdWJOYXYiLCJhZnRlciIsImJ1aWxkU3RyYWluTGlua3MiLCJlYWNoIiwidGhpc0lEIiwiZmluZCIsImF0dHIiLCJjbGVhbklEIiwicmVwbGFjZSIsInRoaXNOYW1lIiwiaHRtbCIsInRoaXNMaW5rIiwiYXBwZW5kIiwicGluU3RyYWluTGlua3MiLCJoZWFkZXJIZWlnaHQiLCJvdXRlckhlaWdodCIsInN1Yk5hdkhlaWdodCIsInNwYWNlckhlaWdodCIsInN0IiwiU2Nyb2xsVHJpZ2dlciIsImNyZWF0ZSIsInRyaWdnZXIiLCJwaW4iLCJzdGFydCIsInBpblNwYWNpbmciLCJoYXNDbGFzcyIsImV4dExpbmtzIiwiYSIsIlJlZ0V4cCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdCIsInRlc3QiLCJocmVmIiwiY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib3BlbiIsIm1haWxjaGltcFNjcmlwdHMiLCJ0aGlzT25lU2NyaXB0IiwibGVuZ3RoIiwibWVudUNsb3NlIiwibWVudU9wZW4iLCJ0bCIsInRpbWVsaW5lIiwidG9nZ2xlIiwiZnVsbE1lbnUiLCJsaW5rcyIsImhhbTEiLCJoYW0yIiwiaGFtMyIsInVuaVRpbWUiLCJ1bmlFYXNlIiwiQmFjayIsImVhc2VJbiIsImNvbmZpZyIsInVuaUVhc2UyIiwiZWFzZU91dCIsInJlbW92ZUNsYXNzIiwieCIsImVhc2UiLCJzdGFnZ2VyIiwiYW1vdW50IiwibGVmdCIsIndpZHRoIiwicm90YXRpb24iLCJ5IiwiYWRkQ2xhc3MiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJwcmVMb2FkZXJPbiIsImZhZGVPdXQiLCJyZW1vdmUiLCJvbmxvYWQiLCJlIiwic21vb3RoU2Nyb2xsaW5nIiwidGhlTGluayIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVG9QbHVnaW4iLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwic2Nyb2xsVG8iLCJvZmZzZXRZIiwialF1ZXJ5IiwiYmluZCIsInNjcmVlbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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aEI7QUFDRCxHQUhELE1BR087QUFDTDlCLFFBQUksQ0FBQ00sRUFBTCxDQUFRb0MsTUFBUixFQUFnQjtBQUFDbkMsY0FBUSxFQUFDLEdBQVY7QUFBZW1FLFVBQUksRUFBRSxVQUFyQjtBQUFpQ3FCLGNBQVEsRUFBQztBQUFDZixTQUFDLEVBQUNZLE1BQUg7QUFBV0ksZUFBTyxFQUFDckU7QUFBbkI7QUFBMUMsS0FBaEI7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQWpCRDs7QUFtQkFzRSxNQUFNLENBQUVyRyxRQUFGLENBQU4sQ0FBbUJDLEtBQW5CLENBQXlCLFVBQVNGLENBQVQsRUFBWTtBQUNuQ0EsR0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnVHLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDLFlBQVc7QUFFekNWLG1CQUFlLENBQUM3RixDQUFDLENBQUMsSUFBRCxDQUFGLENBQWYsQ0FGeUMsQ0FHekM7O0FBQ0EsUUFBSXdHLE1BQU0sQ0FBQ3JCLEtBQVAsSUFBZ0IsSUFBcEIsRUFBeUI7QUFDdkJ2QixzRUFBUztBQUNUaUMscUJBQWUsQ0FBQzdGLENBQUMsQ0FBQyxJQUFELENBQUYsQ0FBZjtBQUNEO0FBQ0YsR0FSRDtBQVNELENBVkQsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy9wcmVsb2FkZXInO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbW9iaWxlTWVudSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9leHRlcm5hbExpbmtzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2xvYWRNYWlsY2hpbXBTY3JpcHRzLmpzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3Ntb290aFNjcm9sbC5qcyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9jcmVhdGVTdHJhaW5zTWVudSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZ2VWZXJpZmljYXRpb24uanMnO1xuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCl7XG5cblx0aWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FkdmVydE9uY2UnKSAhPT0gJ3RydWUnKSB7XG4gICAgZ3NhcC5zZXQoJCgnYm9keScpLHtoZWlnaHQ6JzEwMHZoJywgb3ZlcmZsb3c6J2hpZGRlbid9KTtcblx0XHRnc2FwLnNldCgkKCcuYWdlLWdhdGUnKSx7YXV0b0FscGhhOjF9KTtcblx0fSBlbHNlIHtcblx0XHRnc2FwLnNldCgkKCcuYWdlLWdhdGUnKSx7YXV0b0FscGhhOjB9KTtcblx0fVxuXHRcdFxuXHQkKCcuYWdlWWVzJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgIGdzYXAudG8oJCgnLmFnZS1nYXRlJykse2R1cmF0aW9uOjAuMywgb3BhY2l0eTowLCBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe2dzYXAuc2V0KCQoJy5hZ2UtZ2F0ZScpLHthdXRvQWxwaGE6MH0pO319KTtcbiAgICBnc2FwLnNldCgkKCdib2R5Jykse2hlaWdodDonYXV0bycsIG92ZXJmbG93Oid2aXNpYmxlJ30pO1xuXG5cdHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FkdmVydE9uY2UnLCd0cnVlJyk7XG5cdH0pO1xuXHRcdFx0XHRcbn0pO1xuIiwibGV0IGJ1aWxkU3RyYWluTmF2ID0gKCkgPT4ge1xuICB2YXIgaGVybyA9ICQoJy5wYWdlLXN0cmFpbnMgLmhlcm8tc2VjdGlvbicpO1xuICB2YXIgc3ViTmF2ID0gJzxkaXYgY2xhc3M9XCJzdHJhaW4tc3VibmF2XCI+PGRpdiBjbGFzcz1cImNvbnRlbnRcIj48L2Rpdj48L2Rpdj4nXG4gICQoaGVybykuYWZ0ZXIoc3ViTmF2KTtcbn1cblxuXG5sZXQgYnVpbGRTdHJhaW5MaW5rcyA9ICgpID0+IHtcblxuICAkKCcuc2luZ2xlLXN0cmFpbi1zZWN0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBsZXQgdGhpc0lEID0gJCh0aGlzKS5maW5kKCcuY29udGVudCcpLmF0dHIoJ2lkJyk7XG4gICAgbGV0IGNsZWFuSUQgPSB0aGlzSUQucmVwbGFjZSgvW15hLXpBLVogXS9nLCBcIlwiKVxuICAgIGxldCB0aGlzTmFtZSA9ICQodGhpcykuZmluZCgnaDInKS5odG1sKCk7XG4gICAgbGV0IHRoaXNMaW5rID0gXCI8YSBocmVmPScjXCIrY2xlYW5JRCtcIic+XCIrdGhpc05hbWUrXCI8L2E+XCI7XG4gICAgJCgnLnN0cmFpbi1zdWJuYXYgLmNvbnRlbnQnKS5hcHBlbmQodGhpc0xpbmspO1xuICB9KVxufVxuXG5sZXQgcGluU3RyYWluTGlua3MgPSAoKSA9PiB7XG5cbiAgbGV0IGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCgpOyBcbiAgbGV0IHN1Yk5hdkhlaWdodCA9ICQoJy5zdHJhaW4tc3VibmF2Jykub3V0ZXJIZWlnaHQoKTtcbiAgbGV0IHNwYWNlckhlaWdodCA9IGhlYWRlckhlaWdodCArIHN1Yk5hdkhlaWdodDtcbiAgbGV0IHN0ID0gU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgIHRyaWdnZXI6IFwiLnN0cmFpbi1zZWN0aW9uXCIsXG4gICAgcGluOiBcIi5zdHJhaW4tc3VibmF2XCIsXG4gICAgc3RhcnQ6IFwiLT1cIitzcGFjZXJIZWlnaHQrXCJcIixcbiAgICBwaW5TcGFjaW5nOiBmYWxzZSxcbiAgfSk7XG59XG5cbmlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3BhZ2Utc3RyYWlucycpKSB7XG4gIC8vIGFsZXJ0KFwiaGVyZVwiKTtcbiAgYnVpbGRTdHJhaW5OYXYoKTtcbiAgYnVpbGRTdHJhaW5MaW5rcygpO1xuICBwaW5TdHJhaW5MaW5rcygpO1xufSIsImxldCBleHRMaW5rcz0gKCkgPT4ge1xuXHQvLyBjb25zb2xlLmxvZygnZXh0ZXJuYWwgbGluaycpO1xuICAkKCdhJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IG5ldyBSZWdFeHAoJy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyAnLycpO1xuICAgIGlmKCFhLnRlc3QodGhpcy5ocmVmKSkge1xuICAgICAgJCh0aGlzKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5ocmVmLCAnX2JsYW5rJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG4gIGV4dExpbmtzKCk7XG59KTtcbiIsIi8vIE1ha2UgYSB2YXJpYWJsZSBmb3IgdGhlIE1haWxjaGltcCBTY3JpcHRzXG5sZXQgbWFpbGNoaW1wU2NyaXB0cyA9ICgpID0+IHtcbiAgbGV0IHRoaXNPbmVTY3JpcHQgPSAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiLy9zMy5hbWF6b25hd3MuY29tL2Rvd25sb2Fkcy5tYWlsY2hpbXAuY29tL2pzL21jLXZhbGlkYXRlLmpzXCI+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+KGZ1bmN0aW9uKCQpIHt3aW5kb3cuZm5hbWVzID0gbmV3IEFycmF5KCk7d2luZG93LmZ0eXBlcyA9IG5ldyBBcnJheSgpO2ZuYW1lc1swXT1cIkVNQUlMXCI7ZnR5cGVzWzBdPVwiZW1haWxcIjtmbmFtZXNbMV09XCJGTkFNRVwiO2Z0eXBlc1sxXT1cInRleHRcIjtmbmFtZXNbMl09XCJMTkFNRVwiO2Z0eXBlc1syXT1cInRleHRcIjt9KGpRdWVyeSkpO3ZhciAkbWNqID0galF1ZXJ5Lm5vQ29uZmxpY3QodHJ1ZSk7PC9zY3JpcHQ+J1xuICAkKCdib2R5JykuYXBwZW5kKHRoaXNPbmVTY3JpcHQpO1xufVxuXG4vLyBJZiB0aGUgbWFpbGNoaW1wIGZvciBpcyBQZXJmb3JtYW5jZU9ic2VydmVyRW50cnlMaXN0LCBsb2FkIHRoZSBzY3JpcHRzXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBpZigkKCcjbWNfZW1iZWRfc2lnbnVwJykubGVuZ3RoKSB7XG4gICAgbWFpbGNoaW1wU2NyaXB0cygpO1xuICB9XG59KTsiLCIkKFwiLm1lbnVUb2dnbGVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cblx0aWYgKCQodGhpcykuaGFzQ2xhc3MoXCJuYXZPcGVuXCIpKSB7XG5cdFx0bWVudUNsb3NlKCk7XG5cdH0gZWxzZSB7XG5cdFx0bWVudU9wZW4oKTtcblx0fVxufSk7XG5cblxuZXhwb3J0IGxldCBtZW51Q2xvc2UgPSAoKSA9PiB7XG5cdGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKCk7XG5cdGxldCB0b2dnbGUgPSAkKFwiLm1lbnVUb2dnbGVcIik7XG5cdGxldCBmdWxsTWVudSA9ICQoXCIubWFpbi1uYXZcIik7XG5cdGxldCBsaW5rcyA9ICQoXCJuYXYgbGlcIik7XG5cdGxldFx0aGFtMSA9ICQoXCIuaGFtVG9wXCIpO1xuXHRsZXQgaGFtMiA9ICQoXCIuaGFtTWlkXCIpO1xuXHRsZXRcdGhhbTMgPSAkKFwiLmhhbUJvdFwiKTtcblx0bGV0IHVuaVRpbWUgPSAwLjM7XG5cdGxldCB1bmlFYXNlID0gQmFjay5lYXNlSW4uY29uZmlnKDEpO1xuXHRsZXQgdW5pRWFzZTIgPSBCYWNrLmVhc2VPdXQuY29uZmlnKDEpO1xuXG5cdCQodG9nZ2xlKS5yZW1vdmVDbGFzcyhcIm5hdk9wZW5cIik7XG5cdHRsLnNldCgkKFwiLndyYXBwZXJcIiksIHtoZWlnaHQ6XCJhdXRvXCIsb3ZlcmZsb3c6XCJ2aXNpYmxlXCJ9KTtcblx0dGwudG8obGlua3MsIHtkdXJhdGlvbjp1bmlUaW1lLCBvcGFjaXR5OjAsIHg6XCI1MCVcIiwgZWFzZTp1bmlFYXNlMixzdGFnZ2VyOiB7YW1vdW50OiB1bmlUaW1lLH19LFwibWVudUNsb3NlXCIpO1xuXHR0bC50byhmdWxsTWVudSwge2R1cmF0aW9uOnVuaVRpbWUsIGxlZnQ6XCIxMDElXCJ9LCBcIm1lbnVDbG9zZSs9MC4yXCIpO1xuXHR0bC50byhbaGFtMSwgaGFtMiwgaGFtM10sIHtkdXJhdGlvbjp1bmlUaW1lLzIsIHg6MCwgd2lkdGg6XCIxMDAlXCIsIHJvdGF0aW9uOjAsIHk6MH0sIFwibWVudUNsb3NlXCIpO1xuXG5cdHJldHVybiB0bDtcbn1cblxuXG5jb25zdCBtZW51T3BlbiA9ICgpID0+IHtcblx0bGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoKTtcblx0bGV0IHRvZ2dsZSA9ICQoXCIubWVudVRvZ2dsZVwiKTtcblx0bGV0IGZ1bGxNZW51ID0gJChcIi5tYWluLW5hdlwiKTtcblx0bGV0IGxpbmtzID0gJChcIm5hdiBsaVwiKTtcblx0bGV0IGhhbTEgPSAkKFwiLmhhbVRvcFwiKTtcblx0bGV0IGhhbTIgPSAkKFwiLmhhbU1pZFwiKTtcblx0bGV0IGhhbTMgPSAkKFwiLmhhbUJvdFwiKTtcblx0bGV0IHVuaVRpbWUgPSAwLjE1O1xuXHRsZXQgdW5pRWFzZSA9IEJhY2suZWFzZUluLmNvbmZpZygxKTtcblx0bGV0IHVuaUVhc2UyID0gQmFjay5lYXNlT3V0LmNvbmZpZygxKTtcblxuXHQkKHRvZ2dsZSkuYWRkQ2xhc3MoXCJuYXZPcGVuXCIpO1xuXHR0bC5zZXQoJChcIi53cmFwcGVyXCIpLCB7aGVpZ2h0OlwiMTAwJVwiLCBvdmVyZmxvdzpcImhpZGRlblwifSk7XG5cdHRsLnNldChsaW5rcywge29wYWNpdHk6MCwgeDpcIjUwJVwifSk7XG5cdHRsLnRvKGZ1bGxNZW51LCB7ZHVyYXRpb246dW5pVGltZSoyLCBsZWZ0OlwiMCVcIn0sIFwibWVudU9wZW5cIik7XG5cdHRsLnRvKGxpbmtzLCB7ZHVyYXRpb246dW5pVGltZSwgb3BhY2l0eToxLCB4OlwiMCVcIiwgZWFzZTogdW5pRWFzZTIsIHN0YWdnZXI6IHthbW91bnQ6dW5pVGltZS8zfX0sIFwibWVudU9wZW4rPTAuMTc1XCIpO1xuXHR0bC50byhoYW0xLCB7ZHVyYXRpb246dW5pVGltZSwgcm90YXRpb246LTMxNSx4OjYgLHk6NCwgd2lkdGg6MTAsIHRyYW5zZm9ybU9yaWdpbjpcIjUwJSA1MCVcIiwgZWFzZTogdW5pRWFzZX0sIFwibWVudU9wZW5cIik7XG5cdHRsLnRvKGhhbTIsIHtkdXJhdGlvbjp1bmlUaW1lLCB4Oi00LCB3aWR0aDoxOH0sIFwibWVudU9wZW5cIik7XG5cdHRsLnRvKGhhbTMsIHtkdXJhdGlvbjp1bmlUaW1lLCByb3RhdGlvbjozMTUsIHg6NiwgeTotNCwgd2lkdGg6MTAsIHRyYW5zZm9ybU9yaWdpbjpcIjUwJSA1MCVcIiwgZWFzZTogdW5pRWFzZX0sIFwibWVudU9wZW5cIik7XG5cblx0cmV0dXJuIHRsO1xufSIsImxldCBwcmVMb2FkZXJPbiA9ICgpID0+IHtcblx0Ly8gY29uc29sZS5sb2coJ25vdC1wcmVsb2FkZXInKTtcblx0JCgnI3ByZWxvYWRlcicpLmZhZGVPdXQoJ3Nsb3cnLGZ1bmN0aW9uKCl7JCh0aGlzKS5yZW1vdmUoKTt9KTtcbn1cblxud2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XG5cdHByZUxvYWRlck9uKCk7XG59IiwiLy8gSW1wb3J0IFRoZSBNZW51IENsb3NlIEZ1bmN0aW9uIHRvIHVzZSBvbiBtb2JpbGVcbmltcG9ydCB7IG1lbnVDbG9zZSB9IGZyb20gJy4vbW9iaWxlTWVudS5qcyc7XG5cbmxldCBzbW9vdGhTY3JvbGxpbmcgPSAodGhlTGluaykgPT4ge1xuXG4gIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVG9QbHVnaW4pO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGxldCB0YXJnZXQgPSAkKHRoZUxpbmspLmF0dHIoXCJocmVmXCIpO1xuICBsZXQgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KCk7IFxuICBsZXQgc3ViTmF2SGVpZ2h0ID0gJCgnLnN0cmFpbi1zdWJuYXYnKS5vdXRlckhlaWdodCgpO1xuICBsZXQgc3BhY2VySGVpZ2h0ID0gaGVhZGVySGVpZ2h0ICsgc3ViTmF2SGVpZ2h0O1xuICBcbiAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygncGFnZS1zdHJhaW5zJykpIHtcbiAgICBjb25zb2xlLmxvZyhcIndlbGwuLi5jb25zb2xlXCIpO1xuICAgIGdzYXAudG8od2luZG93LCB7ZHVyYXRpb246MC41LCBlYXNlOiBcImNpcmMub3V0XCIsIHNjcm9sbFRvOnt5OnRhcmdldCwgb2Zmc2V0WTpzcGFjZXJIZWlnaHR9fSk7XG4gIH0gZWxzZSB7XG4gICAgZ3NhcC50byh3aW5kb3csIHtkdXJhdGlvbjowLjUsIGVhc2U6IFwiY2lyYy5vdXRcIiwgc2Nyb2xsVG86e3k6dGFyZ2V0LCBvZmZzZXRZOmhlYWRlckhlaWdodH19KTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmpRdWVyeSggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigkKSB7XG4gICQoJ2FbaHJlZl49XCIjXCJdJykuYmluZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgXG4gICAgc21vb3RoU2Nyb2xsaW5nKCQodGhpcykpO1xuICAgIC8vIElGIElUXCJTIE1PQklMRSAvIElQQUQgT1IgU01BTExFUlxuICAgIGlmIChzY3JlZW4ud2lkdGggPD0gMTAyNSl7XG4gICAgICBtZW51Q2xvc2UoKTtcbiAgICAgIHNtb290aFNjcm9sbGluZygkKHRoaXMpKTtcbiAgICB9XG4gIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==