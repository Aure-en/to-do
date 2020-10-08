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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  min-height: calc(100vh - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\n.no-display {\n  display: none !important;\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\nh2 {\n  font-weight: 700;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel {\n  color: rgba(42, 43, 104, 0.5);\n}\n.btn--cancel:hover {\n  color: rgba(42, 43, 104, 0.7);\n}\n.btn--section {\n  color: rgba(42, 43, 104, 0.35);\n  font-weight: 700;\n}\n.btn--section:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.5);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n}\n.btn--section:before, .btn--section:after {\n  content: \"\";\n  background-color: rgba(42, 43, 104, 0.25);\n  height: 2px;\n  flex-grow: 1;\n}\n.btn--section:hover:before, .btn--section:hover:after {\n  background-color: rgba(42, 43, 104, 0.5);\n}\n.btn--section:before {\n  margin-right: 1rem;\n}\n.btn--section:after {\n  margin-left: 1rem;\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-med {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-gap: 1rem;\n  align-items: start;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n\n.dropdown {\n  transition: all 0.35s linear;\n}\n\n.add__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority {\n  position: relative;\n}\n.add__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n\n.add__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n  transition: all 0.2s ease-in;\n}\n.nav--hidden {\n  transform: translateX(-100%);\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li button {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all 0.2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n}", "",{"version":3,"sources":["webpack://src/sass/main.scss","webpack://src/sass/base/_base.scss","webpack://src/sass/base/_typography.scss","webpack://src/sass/utils/_variables.scss","webpack://src/sass/components/_buttons.scss","webpack://src/sass/utils/_mixins.scss","webpack://src/sass/components/_icons.scss","webpack://src/sass/components/_todo.scss","webpack://src/sass/components/_dropdown.scss","webpack://src/sass/layout/_form.scss","webpack://src/sass/layout/_header.scss","webpack://src/sass/layout/_nav.scss","webpack://src/sass/layout/_main.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;;;CAAA;AAKA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;ADCD;;ACCA,gDAAA;AACA;;EAEC,cAAA;ADED;;ACAA;EACC,cAAA;ADGD;;ACDA;EACC,gBAAA;ADID;;ACFA;EACC,YAAA;ADKD;;ACHA;;EAEC,WAAA;EACA,aAAA;ADMD;;ACJA;EACC,yBAAA;EACA,iBAAA;ADOD;;ACJA;;EAEC,YAAA;ADOD;ACLC;;EACC,aAAA;ADQF;;ACJA;EACC,sBAAA;ADOD;;ACJA;EACC,YAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;ADOD;;ACJA;EACC,WAAA;EACA,YAAA;ADOD;;ACJA;EACC,kBAAA;EACA,SAAA;EACA,aAAA;EACA,8BAAA;ADOD;;ACJA;EACC,UAAA;EACA,wBAAA;EACA,gBAAA;EACC,8BAAA;ADOF;;ACJA;EACC,wBAAA;ADOD;;AEhGA;;EAEE,kCCDa;EDEb,mBAAA;EACA,gBAAA;EACA,mBAAA;AFmGF;;AEhGA;EACE,kBAAA;EACA,cAAA;EACA,yBAAA;EACA,cCPc;EDQd,qBAAA;EACA,kBAAA;AFmGF;;AEhGA;EACE,gBAAA;AFmGF;;AE/FE;EACE,WCfW;AHiHf;AE/FE;EACE,kBAAA;AFiGJ;AE9FE;EAEE,yBAAA;EACA,iBAAA;EACA,sBAAA;AF+FJ;AE5FE;EACE,WAAA;AF8FJ;AE3FE;EACE,6BAAA;AF6FJ;AE3FI;EACE,6BAAA;AF6FN;AEzFE;EACE,8BAAA;EACA,gBAAA;AF2FJ;AEzFI;EACE,8BAAA;AF2FN;;AEjFE;EACE,yBAAA;EACA,cC7DY;ED8DZ,gBAAA;EACA,qBAAA;EACA,gBAAA;AFoFJ;;AEhFA;EACE,0BAAA;AFmFF;AEjFE;EACE,WAAA;AFmFJ;;AE9EA;EACE,gBAAA;EACA,sBAAA;AFiFF;;AE9EA;EACE,gBAAA;AFiFF;;AE5EA;;EAEE,kCC9Fa;AH6Kf;;AE5EA;EACE,gBAAA;AF+EF;;AE5EA;EACE,cC7FW;AH4Kb;;AE5EA;EACE,iBAAA;AF+EF;;AI1LA;EACC,YAAA;EACC,gBAAA;EACA,eAAA;AJ6LF;AI3LE;EACE,aAAA;AJ6LJ;;AIzLA;;EAEE,uBAAA;AJ4LF;;AIzLA;EACE,kCAAA;EACA,kBAAA;EACA,qBAAA;AJ4LF;AI1LE;EACE,kCAAA;AJ4LJ;;AIxLA;EACE,wCAAA;EACA,kBAAA;EACA,oCAAA;AJ2LF;;AIxLA;EACE,YD0BS;ECzBT,6BAAA;EC3BA,kCAAA;EACA,gBAAA;ED4BA,cAAA;AJ4LF;;AIzLA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;AJ4LF;AI1LE;EAEE,WAAA;EACA,yCAAA;EACA,WAAA;EACA,YAAA;AJ2LJ;AIxLE;EAEE,wCAAA;AJyLJ;AItLE;EACE,kBAAA;AJwLJ;AIrLE;EACE,iBAAA;AJuLJ;;AMlPE;EAIE,2BHsDY;AH4LhB;AM/OE;EDTA,kCAAA;EACA,gBAAA;AL2PF;AM9OE;EACE,YAAA;EACA,6BHRa;AHwPjB;AM7OE;EACE,YHqCO;EEpDT,kCAAA;EACA,gBAAA;AL+PF;AM7OE;EACE,YAAA;EDzBF,kCAAA;EACA,gBAAA;ALyQF;;AM1OE;EACE,cHtBa;AHmQjB;;AM9OE;EACE,cHtBa;AHuQjB;;AMlPE;EACE,cHtBa;AH2QjB;;AMtPE;EACE,cHtBa;AH+QjB;;AK/QI;EACE,YFyBO;AHyPb;;AKnRI;EACE,YFyBO;AH6Pb;;AKvRI;EACE,YFyBO;AHiQb;;AK3RI;EACE,YFyBO;AHqQb;;AKvRI;EACE,cFFO;AH4Rb;;AK3RI;EACE,cFFO;AHgSb;;AK/RI;EACE,cFFO;AHoSb;;AKnSI;EACE,cFFO;AHwSb;;AKvSI;EACE,cFFO;AH4Sb;;AMpRA;EACE,YAAA;EACA,cHxCc;EECd,kCAAA;EACA,gBAAA;ECwCA,qBAAA;ANwRF;;AK3TI;EACE,YFsCO;AHwRb;;AK/TI;EACE,YFsCO;AH4Rb;;AKnUI;EACE,YFsCO;AHgSb;;AKvUI;EACE,YFsCO;AHoSb;;AKnUI;EACE,cFMO;AHgUb;;AKvUI;EACE,cFMO;AHoUb;;AK3UI;EACE,cFMO;AHwUb;;AK/UI;EACE,cFMO;AH4Ub;;AM/SA;EACE,YAAA;EDnDA,kCAAA;EACA,gBAAA;ALsWF;;AO7WA;EACE,aAAA;EACA,kDAAA;EACA,cAAA;EACA,kBAAA;APgXF;AO9WE;EACE,eAAA;APgXJ;;AQvXA;EACE,4BAAA;AR0XF;;AS3XA;EACE,aAAA;EACA,sBAAA;EACA,yCAAA;AT8XF;AS5XE;EACE,mBAAA;EACA,qBAAA;AT8XJ;AS3XE;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;AT6XJ;;ASzXA;;EAEE,WAAA;EACA,gBAAA;EACA,gBAAA;AT4XF;;ASzXA;EACE,YAAA;AT4XF;;ASzXA;EACE,+CAAA;AT4XF;;ASzXA;EACE,aAAA;EACA,yBAAA;AT4XF;;ASzXA;EACE,kBAAA;AT4XF;AS1XE;EACE,eAAA;EACA,UAAA;EACA,oBAAA;AT4XJ;;ASxXA;EACE,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,yCAAA;EACA,uBAAA;EACA,6BAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AT2XF;ASzXE;EACE,WAAA;EACA,kCAAA;EACA,mCAAA;EACA,6BAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;AT2XJ;ASxXE;EACE,WAAA;EACA,kCAAA;EACA,mCAAA;EACA,gDAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;AT0XJ;ASvXE;EACE,kBAAA;EACA,gBAAA;ATyXJ;;ASrXA;EACE,mBAAA;ATwXF;;ASrXA;EACE,oCAAA;ATwXF;;ASrXA;EACE,eAAA;ATwXF;;AUtdA;EACE,eAAA;EACA,mBPGc;EOFd,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,UAAA;AVydF;AUtdE;EACE,aAAA;EACA,OAAA;AVwdJ;AUtdI;EACE,iBAAA;AVwdN;;AWxeA;EAEE,mBRIgB;EQHhB,YAAA;EACA,+CAAA;EACA,4BAAA;EACA,4BAAA;AX0eF;AWxeE;EACE,4BAAA;AX0eJ;AWveE;EACE,sBAAA;EACA,uBAAA;EACA,+CAAA;AXyeJ;AWveI;EACE,mBAAA;AXyeN;AWteI;EACE,aAAA;AXweN;AWteM;EACE,mCAAA;AXweR;AWreM;EAEE,OAAA;EACA,iBAAA;AXseR;AWjeE;EACE,WAAA;EACA,iBAAA;AXmeJ;AWjeI;EACE,mCAAA;AXmeN;;AY5gBA;EACE,OAAA;EACA,aAAA;EACA,uBAAA;EACA,iBAAA;EACA,yBAAA;AZ+gBF;;AY5gBA;EACE,WAAA;EACA,gBAAA;AZ+gBF;;AY5gBA;EACE,6BAAA;AZ+gBF","sourcesContent":["@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  min-height: calc(100vh - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\n.no-display {\n  display: none !important;\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\nh2 {\n  font-weight: 700;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel {\n  color: rgba(42, 43, 104, 0.5);\n}\n.btn--cancel:hover {\n  color: rgba(42, 43, 104, 0.7);\n}\n.btn--section {\n  color: rgba(42, 43, 104, 0.35);\n  font-weight: 700;\n}\n.btn--section:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.5);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n}\n.btn--section:before, .btn--section:after {\n  content: \"\";\n  background-color: rgba(42, 43, 104, 0.25);\n  height: 2px;\n  flex-grow: 1;\n}\n.btn--section:hover:before, .btn--section:hover:after {\n  background-color: rgba(42, 43, 104, 0.5);\n}\n.btn--section:before {\n  margin-right: 1rem;\n}\n.btn--section:after {\n  margin-left: 1rem;\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-med {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-gap: 1rem;\n  align-items: start;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n\n.dropdown {\n  transition: all 0.35s linear;\n}\n\n.add__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority {\n  position: relative;\n}\n.add__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n\n.add__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n  transition: all 0.2s ease-in;\n}\n.nav--hidden {\n  transform: translateX(-100%);\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li button {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all 0.2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n}","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput,\ntextarea {\n\tborder: none;\n\n\t&:focus {\n\t\toutline: none;\n\t}\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\twidth: 100vw;\n\tmin-height: 100vh;\n\tmax-width: 100%;\n\tmax-height: 100%;\n}\n\n.wrapper {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.content__wrapper {\n\tposition: relative;\n\ttop: 50px;\n\tdisplay: flex;\n\tmin-height: calc(100vh - 50px);\n}\n\n.hidden {\n\topacity: 0;\n\tmax-height: 0 !important;\n\toverflow: hidden;\n  transform: translateY(-.25em);\n}\n\n.no-display {\n\tdisplay: none !important;\n}","body,\nbutton {\n  font-family: $font-primary;\n  font-size: .875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: $color-primary;\n  letter-spacing: .5px;\n  text-align: center;\n}\n\nh2 {\n  font-weight: 700;\n}\n\n.btn {\n  &--page--header {\n    color: $color-header;\n  }\n\n  &--icon {\n    font-size: 1.25rem;\n  }\n\n  &--submit,\n  &--cancel {\n    text-transform: uppercase;\n    font-size: .85em;\n    letter-spacing: -.5px;\n  }\n\n  &--submit {\n    color: #fff;\n  }\n\n  &--cancel {\n    color: rgba($color-primary, .5);\n\n    &:hover {\n      color: rgba($color-primary, .7);\n    }\n  }\n\n  &--section {\n    color: rgba($color-primary, .35);\n    font-weight: 700;\n\n    &:hover {\n      color: rgba($color-primary, .75);\n    }\n\n  }\n\n}\n\n// Nav\n\n.nav {\n  &--heading {\n    text-transform: uppercase;\n    color: $color-primary;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 2.5;\n  }\n}\n\n[data-toggle=\"add-project\"] {\n  color: rgba(#000, .75);\n\n  &:hover {\n    color: #000;\n  }\n\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\n// Form\n\ninput,\ntextarea {\n  font-family: $font-primary;\n}\n\n[name=\"title\"] {\n  font-weight: 700;\n}\n\n[name=\"date\"] {\n  color: $color-form;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}","// Fonts\n$font-primary: 'Nanum Gothic', Arial;\n\n\n// Colors\n$color-primary: rgb(42, 43, 104);\n$color-secondary: rgb(238, 240, 241);\n\n$color-header: #fff;\n$color-projects: rgba($color-primary, .5);\n$color-form: rgb(142, 142, 142);\n\n$color-priority: (\n  high: rgb(161, 66, 66),\n  med: rgb(231, 154, 103),\n  low: rgb(93, 151, 91),\n  none: rgb(199, 199, 199)\n);\n\n$color-date: (\n  all: lighten($color-primary, 15%),\n  today: rgb(235, 153, 99),\n  upcoming: rgb(141, 90, 137),\n  anytime: rgb(122, 122, 122),\n  late: rgb(148, 32, 32)\n);\n\n$color-sort: (\n  title: rgb(48, 92, 48),\n  description: rgb(235, 185, 79),\n  date: rgb(102, 151, 145),\n  priority: map-get($color-priority, high)\n);\n\n// Icons\n\n$icon-priority: \"\\f02e\";\n\n$icons-date: (\n  all: \"\\f073\",\n  today: \"\\f272\",\n  upcoming: \"\\f274\",\n  anytime: \"\\f133\",\n);\n\n$icons-caret: (\n  up: \"\\f0d8\",\n  down: \"\\f0d7\",\n  right: \"\\f0da\"\n);\n\n$icons-sort: (\n  title: \"\\f328\",\n  description: \"\\f249\",\n  date: \"\\f073\",\n  priority: $icon-priority,\n);\n\n$icon-add: \"\\f067\";\n\n// Others\n$margin-indent: 0 .25rem 0 1.25rem;","button {\n\tborder: none;\n  background: none;\n  cursor: pointer;\n  \n  &:focus {\n    outline: none;\n  }\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: .15rem .5rem;\n}\n  \n.btn--submit {\n  background: rgba($color-primary, .5);\n  border-radius: 5px;\n  margin-right: .25rem;\n\n  &:hover {\n    background: rgba($color-primary, .7);\n  }\n}\n\n.btn--cancel {\n  border: 1px solid rgba($color-primary, .5);\n  border-radius: 5px;\n  background: rgba(#fff, .5);\n}\n\n.btn--add:before {\n  content: $icon-add;\n  color: rgba($color-primary, .5);\n  @include font-awesome-700();\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n\n  &:before,\n  &:after {\n    content: '';\n    background-color: rgba($color-primary, .25);\n    height: 2px;\n    flex-grow: 1;\n  }\n\n  &:hover:before,\n  &:hover:after {\n    background-color: rgba($color-primary, .5);\n  }\n\n  &:before {\n    margin-right: 1rem;\n  }\n\n  &:after {\n    margin-left: 1rem;\n  }\n\n}","@mixin font-awesome-400() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n@mixin font-awesome-700() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n@mixin icon-content($target, $map) {\n  @each $key, $icon in $map {\n    .#{$target}-#{$key}::before {\n      content: $icon;\n    }\n  }\n}\n\n@mixin icon-color($target, $map) {\n  @each $key, $color in $map {\n    .#{$target}-#{$key}::before {\n      color: $color;\n    }\n  }\n}","// NAV-ICONS\n\n.nav {\n  &__to-do li:before,\n  &__projects li:before,\n  &__filters li:before,\n  &__sorts li:before {\n    margin: $margin-indent;\n  }\n\n  &__to-do li:before,\n  &__sorts li:before {\n    @include font-awesome-400();\n  }\n\n  &__projects li:before {\n    content: \"⚫\";\n    color: $color-projects;\n  }\n\n  .project_list__add:before {\n    content: $icon-add;\n    @include font-awesome-700();\n  }\n\n  &__filters li:before {\n    content: \"\\f02e\";\n    @include font-awesome-400();\n  }\n}\n\n// Color Priority Icons\n@each $level, $color in $color-priority {\n  .priority-#{$level} {\n    color: $color;\n  }\n}\n\n// Date Icons\n@include icon-content('date', $icons-date);\n@include icon-color('date', $color-date);\n\n// Category Icons\n.nav--heading:before {\n  content: map-get($icons-caret, down);\n  color: $color-primary;\n  @include font-awesome-700();\n  margin-right: .75rem;\n}\n\n// Sort Icons\n@include icon-content('sort', $icons-sort);\n@include icon-color('sort', $color-sort);\n\n// MAIN ICONS\n\n.main__header li:before {\n  content: map-get($icons-caret, down);\n  @include font-awesome-700();\n}",".to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-gap: 1rem;\n  align-items: start;\n  \n  &__check {\n    margin-top: 7px;\n  }\n\n}",".dropdown {\n  transition: all .35s linear;\n}",".add__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba($color-primary, .35);\n\n  &--todo {\n    border-radius: 10px;\n    padding: .25rem 1rem;\n  }\n\n  &--project {\n    border-radius: 5px;\n    margin: 0 1rem;\n    padding: .15rem;\n  }\n}\n\ninput[type=\"text\"],\ntextarea {\n  width: 100%;\n  padding: .25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=\"title\"] {\n  border-bottom: 1px solid rgba($color-primary, .1);\n}\n\n.add__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority {\n  position: relative;\n\n  input[type=\"radio\"] {\n    position: fixed;\n    opacity: 0;\n    pointer-events: none;\n  }\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba($color-primary, .35);\n  padding: .25rem .5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n\n  &:before {\n    content: '';\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #fff;\n    position: absolute;\n    top: -5px;\n    left: 15px;\n    z-index: 1;\n  }\n\n  &:after {\n    content: '';\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid rgba($color-primary, .35);\n    position: absolute;\n    top: -6px;\n    left: 14px;\n  }\n\n  label {\n    text-align: center;\n    margin: 0 .5rem;\n  }\n}\n\n.add__finish {\n  margin: .5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(#fff, .5);\n}\n\nlabel {\n  cursor: pointer;\n}\n",".page__header {\n  position: fixed;\n  background: $color-primary;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n  \n\n  ul {\n    display: flex;\n    flex: 1;\n\n    & li:last-child {\n      margin-left: auto;\n    }\n  }\n}",".nav {\n  \n  background: $color-secondary;\n  width: 250px;\n  border-right: 1px solid rgba($color-primary, .25);\n  padding: 2rem .25rem 0 2rem;\n  transition: all .2s ease-in;\n\n  &--hidden {\n    transform: translateX(-100%);\n  }\n\n  &__category {\n    margin-bottom: .75rem;\n    padding-bottom: .75rem;\n    border-bottom: 1px solid rgba($color-primary, .1);\n\n    &:last-of-type {\n      border-bottom: none;\n    }\n\n    li {\n      display: flex;\n      \n      &:hover {\n        background: rgba($color-primary, .04);\n      }\n\n      button {\n        // Makes the whole line clickable instead of just the text.\n        flex: 1;\n        text-align: start;\n      }\n    }\n  }\n\n  &--heading {\n    width: 100%;\n    text-align: start;\n    \n    &:hover {\n      background: rgba($color-primary, .07);\n    }\n  }\n}","main {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all .2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/AppController.js":
/*!******************************!*\
  !*** ./src/AppController.js ***!
  \******************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var _ProjectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectController */ "./src/ProjectController.js");
/* harmony import */ var _ProjectModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectModel */ "./src/ProjectModel.js");
/* harmony import */ var _ProjectView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectView */ "./src/ProjectView.js");



class AppController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindAddProject(this.handleAddProject.bind(this));
    this.view.bindToggle(this.handleToggle.bind(this));
    this.view.bindNavToggle(this.handleNavToggle.bind(this));
    this.view.bindPriority(this.handlePriority.bind(this));
    this.view.bindDisplayAll(this.handleDisplayAll.bind(this));
    this.view.bindDateToday(this.handleToday.bind(this));
    this.view.bindDateUpcoming(this.handleUpcoming.bind(this));
    this.view.bindDateAnytime(this.handleAnytime.bind(this));
  } // Display the new project and created a button linked to the project in the navigation.


  handleAddProject(name) {
    const project = new _ProjectController__WEBPACK_IMPORTED_MODULE_0__["ProjectController"](new _ProjectModel__WEBPACK_IMPORTED_MODULE_1__["ProjectModel"](name), new _ProjectView__WEBPACK_IMPORTED_MODULE_2__["ProjectView"](_ProjectModel__WEBPACK_IMPORTED_MODULE_1__["ProjectModel"].counter));
    this.model.addProject(project);
    project.view.renderName(name);
    project.view.renderBtn(name);
    project.view.renderForm(project.model.form);
    project.view.getForm();
    project.bindAll();
    project.view.button.addEventListener('click', () => this.handleNavClick(project));
  } // Links the newly created navigation button to its project


  handleNavClick(project) {
    project.view.renderName(project.model.name);
    project.view.render(project.model.todoLists);
    project.view.renderForm(project.model.form);
    project.view.getForm();
    project.bindAll();
  } // Enable all toggle buttons


  handleToggle(event) {
    document.querySelector(`#${event.target.dataset.toggle}`).classList.toggle('hidden');
  } // Modify space occupied by content when the navigation is hidden / displayed.


  handleNavToggle() {
    this.view.nav.classList.toggle('nav--hidden');
    this.view.main.classList.toggle('main--hidden');
  } // Enable priority filters


  handlePriority(priority) {
    const todos = document.querySelectorAll('.to-do');
    todos.forEach(todo => {
      if (todo.dataset.priority !== priority) {
        todo.classList.add('no-display');
      } else {
        todo.classList.remove('no-display');
      }
    });
  } // Helper function that compares 2 days (used for date filters)


  _sameDay(date1, date2) {
    const todoDate = new Date(date1);

    if (todoDate.getDate() === date2.getDate() && todoDate.getMonth() === date2.getMonth() && todoDate.getFullYear() === date2.getFullYear()) {
      return true;
    }

    return false;
  } // Dates filters


  handleToday() {
    const today = new Date();
    const todos = document.querySelectorAll('.to-do');
    todos.forEach(todo => {
      if (this._sameDay(todo.dataset.date, today)) {
        todo.classList.remove('no-display');
      } else {
        todo.classList.add('no-display');
      }
    });
  }

  handleUpcoming() {
    const today = new Date();
    const todos = document.querySelectorAll('.to-do');
    todos.forEach(todo => {
      if (!this._sameDay(todo.dataset.date, today) && new Date(todo.dataset.date) > today) {
        todo.classList.remove('no-display');
      } else {
        todo.classList.add('no-display');
      }
    });
  }

  handleAnytime() {
    const todos = document.querySelectorAll('.to-do');
    todos.forEach(todo => {
      if (todo.dataset.date !== '') {
        todo.classList.add('no-display');
      } else {
        todo.classList.remove('no-display');
      }
    });
  } // Disable filters


  handleDisplayAll() {
    const todos = document.querySelectorAll('.to-do');
    todos.forEach(todo => todo.classList.remove('no-display'));
  }

}

/***/ }),

/***/ "./src/AppModel.js":
/*!*************************!*\
  !*** ./src/AppModel.js ***!
  \*************************/
/*! exports provided: AppModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModel", function() { return AppModel; });
class AppModel {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
    project.id = this.projects.length;
  }

}

/***/ }),

/***/ "./src/AppView.js":
/*!************************!*\
  !*** ./src/AppView.js ***!
  \************************/
/*! exports provided: AppView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppView", function() { return AppView; });
class AppView {
  constructor() {
    this.container = document.querySelector('.content');
    this.homeBtn = document.querySelector('.btn--home');
    this.main = document.querySelector('main'); // Form to create new projects

    this.projectInput = document.querySelector('.add--project [name="name"]');
    this.projectSubmit = document.querySelector('.add--project .btn--submit'); // Sort tasks

    this.sortTitle = document.querySelector('#sort-title');
    this.sortDescription = document.querySelector('#sort-description');
    this.sortDate = document.querySelector('#sort-date');
    this.sortPriority = document.querySelector('#sort-priority'); // Filter tasks

    this.displayAllBtn = document.querySelectorAll('[data-filter="all"]');
    this.priorityBtn = document.querySelectorAll('[data-filter^="priority"]');
    this.dateTodayBtn = document.querySelector('[data-filter="date-today"]');
    this.dateUpcomingBtn = document.querySelector('[data-filter="date-upcoming"]');
    this.dateAnytimeBtn = document.querySelector('[data-filter="date-anytime"]'); // Toggle Navigation

    this.navBtn = document.querySelector('[data-toggle="nav"]');
    this.nav = document.querySelector('.nav'); // Toggle categories

    this.toggleBtn = document.querySelectorAll('.btn--dropdown');
  } // Get new project's name


  get _projectName() {
    return this.projectInput.value;
  } // Reset Input to create a new project


  _resetInput() {
    this.projectInput.value = '';
  }

  bindAddProject(handler) {
    this.projectSubmit.addEventListener('click', () => {
      handler(this._projectName);

      this._resetInput();
    });
  } // Navigation toggles


  bindToggle(handler) {
    this.toggleBtn.forEach(toggleBtn => toggleBtn.addEventListener('click', handler));
  }

  bindNavToggle(handler) {
    this.navBtn.addEventListener('click', handler);
  } // Filters


  bindPriority(handler) {
    this.priorityBtn.forEach(priorityBtn => priorityBtn.addEventListener('click', event => handler(event.target.dataset.filter.slice(9))));
  }

  bindDateToday(handler) {
    this.dateTodayBtn.addEventListener('click', handler);
  }

  bindDateUpcoming(handler) {
    this.dateUpcomingBtn.addEventListener('click', handler);
  }

  bindDateAnytime(handler) {
    this.dateAnytimeBtn.addEventListener('click', handler);
  }

  bindDisplayAll(handler) {
    this.displayAllBtn.forEach(displayAllBtn => displayAllBtn.addEventListener('click', handler));
  }

}

/***/ }),

/***/ "./src/ProjectController.js":
/*!**********************************!*\
  !*** ./src/ProjectController.js ***!
  \**********************************/
/*! exports provided: ProjectController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectController", function() { return ProjectController; });
class ProjectController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.onProjectChange(this.model.todoLists);
    this.model.bindProjectChange(this.onProjectChange.bind(this));
  }

  onProjectChange(todoLists) {
    this.view.render(todoLists);
  }

  handleAddTodoList(todoList) {
    this.model.addTodoList(todoList);
  }

  handleDeleteTodoList(todoList) {
    this.model.deleteTodoList(todoList);
  }

  bindAll() {
    this.view.bindAddSection(this.handleAddTodoList.bind(this));
  }

}

/***/ }),

/***/ "./src/ProjectModel.js":
/*!*****************************!*\
  !*** ./src/ProjectModel.js ***!
  \*****************************/
/*! exports provided: ProjectModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModel", function() { return ProjectModel; });
/* harmony import */ var _SectionForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionForm */ "./src/SectionForm.js");

class ProjectModel {
  constructor(name) {
    this.name = name === '' ? 'Untitled' : name;
    this.id = ++ProjectModel.counter;
    this.todoLists = [];
    this.form = new _SectionForm__WEBPACK_IMPORTED_MODULE_0__["SectionForm"](this.id);
  }

  addTodoList(todoList) {
    this.todoLists.push(todoList);
    todoList.id = this.todoLists.length;
    this.onProjectChange(this.todoLists);
  }

  editTodoList(id, update) {
    this.todoLists = this.todoLists.map(todoList => {
      if (todoList.id === id) {
        todoList.name = update;
      }
    });
    this.onProjectChange(this.todoLists);
  }

  deleteTodoList(id) {
    this.todoLists = this.todoLists.filter(todoList => todoList.id !== id);
    this.onProjectChange(this.todoLists);
  }

  bindProjectChange(callback) {
    this.onProjectChange = callback;
  }

}
ProjectModel.counter = 0;

/***/ }),

/***/ "./src/ProjectView.js":
/*!****************************!*\
  !*** ./src/ProjectView.js ***!
  \****************************/
/*! exports provided: ProjectView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectView", function() { return ProjectView; });
/* harmony import */ var _TodoListController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoListController */ "./src/TodoListController.js");
/* harmony import */ var _TodoListModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoListModel */ "./src/TodoListModel.js");
/* harmony import */ var _TodoListView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoListView */ "./src/TodoListView.js");



class ProjectView {
  constructor(id) {
    this.container = document.querySelector('.content');
    this.sections = document.querySelector('.sections');
    this.name = document.querySelector('.project__name');
    this.id = id;
  } // Render the name of the project


  renderName(name) {
    this.name.innerHTML = name;
  } // Render the navigation button linked to the project


  renderBtn(name) {
    this.li = document.createElement('li');
    this.button = document.createElement('button');
    this.button.classList.add('btn', 'btn--filter');
    this.button.setAttribute('type', 'button');
    this.button.setAttribute('data-filter', `project-${this.id}`);
    this.button.innerHTML = name;
    this.li.append(this.button);
    document.querySelector('.projects').append(this.li);
  } // Render the add section form


  renderForm(form) {
    form.render();
  } // Get the add section form inputs


  getForm() {
    this.nameInput = document.querySelector(`#section-form-${this.id} [name="section"]`);
    this.submit = document.querySelector(`#section-form-${this.id} .btn--submit`);
  } // Get Section's Name from the form


  get _sectionName() {
    return this.nameInput.value;
  } // Reset form input


  _resetInput() {
    this.nameInput.value = '';
  } // Render the project by rendering every section


  render(todoLists) {
    this.sections.innerHTML = '';

    for (const todoList of todoLists) {
      todoList.view.createSection();
      todoList.view.renderName(todoList.model.name);
      todoList.view.render(todoList.model.todos);
      todoList.view.renderForm(todoList.model.form);
      todoList.view.getForm(todoList.model.form);
      todoList.bindAll();
    }
  } // Event Listeners


  bindAddSection(handler) {
    this.submit.addEventListener('click', () => {
      handler(new _TodoListController__WEBPACK_IMPORTED_MODULE_0__["TodoListController"](new _TodoListModel__WEBPACK_IMPORTED_MODULE_1__["TodoListModel"](this._sectionName, this.id), new _TodoListView__WEBPACK_IMPORTED_MODULE_2__["TodoListView"](this.id)));

      this._resetInput();
    });
  }

}

/***/ }),

/***/ "./src/SectionForm.js":
/*!****************************!*\
  !*** ./src/SectionForm.js ***!
  \****************************/
/*! exports provided: SectionForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionForm", function() { return SectionForm; });
class SectionForm {
  constructor(id) {
    this.id = id;
  }

  render() {
    const formContainer = document.querySelector('.add__section');
    formContainer.innerHTML = '';
    const formBtn = document.createElement('button');
    formBtn.classList.add('btn', 'btn--dropdown', 'btn--section');
    formBtn.setAttribute('type', 'button');
    formBtn.setAttribute('data-toggle', `section-form-${this.id}`);
    formBtn.innerHTML = 'Add Section';
    const form = document.createElement('form');
    form.classList.add('add', 'add--section', 'dropdown', 'hidden');
    form.id = `section-form-${this.id}`;
    const content = document.createElement('div');
    content.classList.add('add__content', 'add__content--section');
    const labelName = document.createElement('label');
    const name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('name', 'section');
    name.setAttribute('placeholder', 'Section\'s Name');
    labelName.append(name);
    content.append(labelName);
    const finish = document.createElement('div');
    finish.classList.add('add__finish');
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'button');
    submitBtn.classList.add('btn', 'btn--submit');
    submitBtn.innerHTML = 'Add Section';
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.classList.add('btn', 'btn--cancel');
    cancelBtn.innerHTML = 'Cancel';
    finish.append(submitBtn, cancelBtn);
    form.append(content, finish);
    formContainer.append(formBtn, form);
    this.bindToggle(this.handleToggle);
  } // Enable form toggle


  bindToggle(handler) {
    this.toggleBtn = document.querySelector(`[data-toggle="section-form-${this.id}"]`);
    this.toggleBtn.addEventListener('click', handler);
  }

  handleToggle(event) {
    document.querySelector(`#${event.target.dataset.toggle}`).classList.toggle('hidden');
  }

}

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
class Todo {
  constructor(title, description, date, priority = 'none') {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }

  render(container) {
    const todoElem = document.createElement('div');
    todoElem.classList.add('to-do');
    todoElem.setAttribute('data-date', this.date);
    todoElem.setAttribute('data-priority', this.priority);
    todoElem.id = this.id;
    const todoCheck = document.createElement('input');
    todoCheck.classList.add('to-do__check');
    todoCheck.setAttribute('type', 'checkbox');
    todoElem.append(todoCheck);
    const components = ['title', 'description', 'date'];

    for (const component of components) {
      const todoComponent = document.createElement('div');
      todoComponent.classList.add(`to-do__${component}`);
      todoComponent.innerHTML = this[component];
      todoElem.append(todoComponent);
    }

    const todoPriority = document.createElement('div');
    todoPriority.classList.add('to-do__priority', `priority-${this.priority}`);
    todoPriority.innerHTML = '<i class="far fa-bookmark"></i>';
    todoElem.append(todoPriority);
    container.append(todoElem);
  }

}

/***/ }),

/***/ "./src/TodoForm.js":
/*!*************************!*\
  !*** ./src/TodoForm.js ***!
  \*************************/
/*! exports provided: TodoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoForm", function() { return TodoForm; });
class TodoForm {
  constructor() {
    this.id = ++TodoForm.counter;
  }

  render(container) {
    const formContainer = document.createElement('div');
    formContainer.classList.add('add__todo');
    const formBtn = document.createElement('button');
    formBtn.classList.add('btn', 'btn--dropdown', 'btn--add');
    formBtn.setAttribute('type', 'button');
    formBtn.setAttribute('data-toggle', `add-todo-${this.id}`);
    formBtn.innerHTML = 'Add Task';
    const form = document.createElement('form');
    form.classList.add('add', 'add--todo', 'todo-form', 'dropdown', 'hidden');
    form.setAttribute('id', `add-todo-${this.id}`);
    const content = document.createElement('div');
    content.classList.add('add__content', 'add__content--todo');
    const labelTitle = document.createElement('label');
    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('name', 'title');
    title.setAttribute('placeholder', 'Title');
    labelTitle.append(title);
    const labelDescription = document.createElement('label');
    const description = document.createElement('textarea');
    description.setAttribute('name', 'description');
    description.setAttribute('placeholder', 'Description');
    labelDescription.append(description);
    const details = document.createElement('div');
    details.classList.add('add__details');
    const labelDate = document.createElement('label');
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('name', 'date');
    labelDate.append(date);
    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('add__priority');
    const priorityBtn = document.createElement('button');
    priorityBtn.setAttribute('type', 'button');
    priorityBtn.setAttribute('data-toggle', `add-priority-${this.id}`);
    priorityBtn.classList.add('btn', 'btn--toggle');
    priorityBtn.innerHTML = '<i class="far fa-bookmark"></i>';
    const priorities = document.createElement('div');
    priorities.classList.add('add-priority', 'dropdown', 'hidden');
    priorities.setAttribute('id', `add-priority-${this.id}`);
    const prioritiesList = ['high', 'med', 'low', 'none'];

    for (const priority of prioritiesList) {
      const labelPriority = document.createElement('label');
      labelPriority.setAttribute('for', `priority-${priority}-${this.id}`);
      labelPriority.classList.add(`priority-${priority}`, `priority-${this.id}`);
      labelPriority.innerHTML = '<i class="far fa-bookmark"></i>';
      const inputPriority = document.createElement('input');
      inputPriority.setAttribute('type', 'radio');
      inputPriority.setAttribute('name', 'priority');
      inputPriority.setAttribute('value', priority);
      inputPriority.setAttribute('id', `priority-${priority}-${this.id}`);
      priorities.append(labelPriority, inputPriority);
    }

    priorityContainer.append(priorityBtn, priorities);
    const finish = document.createElement('div');
    finish.classList.add('add__finish');
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'button');
    submitBtn.classList.add('btn', 'btn--submit');
    submitBtn.innerHTML = 'Add Task';
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.classList.add('btn', 'btn--cancel');
    cancelBtn.innerHTML = 'Cancel';
    finish.append(submitBtn, cancelBtn);
    content.append(labelTitle, labelDescription, details);
    details.append(labelDate, priorityContainer);
    form.append(content, finish);
    formContainer.append(formBtn, form);
    container.append(formContainer);
    this.bindToggle(this.handleToggle);
    this.bindPriorityLabel(this.handlePriorityLabel.bind(this));
    this.bindResetPriority(this.handleResetPriority.bind(this));
  } // Enable form toggle


  bindToggle(handler) {
    this.toggleBtn = [document.querySelector(`[data-toggle="add-priority-${this.id}"]`), document.querySelector(`[data-toggle="add-todo-${this.id}"]`)];
    this.toggleBtn.forEach(toggleBtn => toggleBtn.addEventListener('click', handler));
  }

  handleToggle(event) {
    document.querySelector(`#${event.target.closest('button').dataset.toggle}`).classList.toggle('hidden');
  } // Enable priority toggle and color change when selecting a priority


  bindPriorityLabel(handler) {
    this.labels = document.querySelectorAll(`.priority-${this.id}`);
    this.labels.forEach(label => label.addEventListener('click', handler));
  }

  handlePriorityLabel(event) {
    document.querySelector(`#add-priority-${this.id}`).classList.add('hidden');
    document.querySelector(`[data-toggle="add-priority-${this.id}"]`).style.color = getComputedStyle(event.target.closest('label')).color;
  } // Reset priority color when adding a task


  bindResetPriority(handler) {
    document.querySelector(`#add-todo-${this.id} .btn--submit`).addEventListener('click', handler);
  }

  handleResetPriority() {
    document.querySelector(`[data-toggle="add-priority-${this.id}"]`).style.color = '';
  }

}
TodoForm.counter = 0;

/***/ }),

/***/ "./src/TodoListController.js":
/*!***********************************!*\
  !*** ./src/TodoListController.js ***!
  \***********************************/
/*! exports provided: TodoListController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListController", function() { return TodoListController; });
class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.onTodoListChange(this.model.todos);
    this.model.bindTodoListChange(this.onTodoListChange.bind(this));
  }

  onTodoListChange(todos) {
    this.view.render(todos);
  }

  handleAddTodo(todo) {
    this.model.addTodo(todo);
  }

  handleEditTodo(todo, field, update) {
    this.model.editTodo(todo, field, update);
  }

  handleDeleteTodo(todo) {
    this.model.deleteTodo(todo);
  }

  bindAll() {
    this.view.bindAddTodo(this.handleAddTodo.bind(this));
    this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));
  }

}

/***/ }),

/***/ "./src/TodoListModel.js":
/*!******************************!*\
  !*** ./src/TodoListModel.js ***!
  \******************************/
/*! exports provided: TodoListModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListModel", function() { return TodoListModel; });
/* harmony import */ var _TodoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoForm */ "./src/TodoForm.js");

class TodoListModel {
  constructor(name, id) {
    this.name = name === '' ? 'Untitled' : name;
    this.todos = [];
    this.form = new _TodoForm__WEBPACK_IMPORTED_MODULE_0__["TodoForm"](id);
    this.id = id;
  }

  addTodo(todo) {
    todo.id = this.todos.length;
    this.todos.push(todo);
    this.onTodoListChange(this.todos);
  }

  editTodo(id, field, update) {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo[field] = update;
      }
    });
    this.onTodoListChange(this.todos);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.onTodoListChange(this.todos);
  }

  bindTodoListChange(callback) {
    this.onTodoListChange = callback;
  }

}

/***/ }),

/***/ "./src/TodoListView.js":
/*!*****************************!*\
  !*** ./src/TodoListView.js ***!
  \*****************************/
/*! exports provided: TodoListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListView", function() { return TodoListView; });
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/Todo.js");

class TodoListView {
  constructor() {
    this.project = document.querySelector('.sections');
    this.todoList = document.createElement('div');
    this.todoList.classList.add('todolist');
    this.id = ++TodoListView.counter;
  } // Create a section


  createSection() {
    this.section = document.createElement('div');
    this.section.classList.add(`section-${this.id}`);
    this.section.prepend(this.todoList);
    this.project.append(this.section);
  } // Render the section's name


  renderName(name) {
    this.name = document.createElement('h2');
    this.name.classList.add('section__name');
    this.name.innerHTML = name;
    this.section.prepend(this.name);
  } // Render the Add Todo Form


  renderForm(form) {
    form.render(this.section);
  } // Get the Add Todo Form Inputs


  getForm() {
    this.title = document.querySelector(`.section-${this.id} .todo-form [name="title"]`);
    this.description = document.querySelector(`.section-${this.id} .todo-form [name="description"]`);
    this.date = document.querySelector(`.section-${this.id} .todo-form [name="date"]`);
    this.submit = document.querySelector(`.section-${this.id} .todo-form .btn--submit`);
  } // Get form values


  get _todoTitle() {
    return this.title.value;
  }

  get _todoDescription() {
    return this.description.value;
  }

  get _todoDate() {
    return this.date.value;
  }

  get _todoPriority() {
    if (document.querySelector('[name="priority"]:checked')) {
      return document.querySelector('[name="priority"]:checked').value;
    }
  } // Reset form inputs


  _resetInputs() {
    this.title.value = '';
    this.description.value = '';
    this.date.value = '';

    if (document.querySelector('[name="priority"]:checked')) {
      document.querySelector('[name="priority"]:checked').checked = false;
    }
  } // Render the Todo List


  render(todos) {
    this.todoList.innerHTML = '';

    for (const todo of todos) {
      todo.render(this.todoList);
    }
  } // Event Listeners


  bindAddTodo(handler) {
    this.submit.addEventListener('click', () => {
      handler(new _Todo__WEBPACK_IMPORTED_MODULE_0__["Todo"](this._todoTitle, this._todoDescription, this._todoDate, this._todoPriority));

      this._resetInputs();
    });
  }

  bindDeleteTodo(handler) {
    this.todoList.addEventListener('change', event => {
      if (event.target.classList.contains('to-do__check')) {
        const id = parseInt(event.target.parentElement.id);
        handler(id);
      }
    });
  }

}
TodoListView.counter = 0;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectController */ "./src/ProjectController.js");
/* harmony import */ var _ProjectModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectModel */ "./src/ProjectModel.js");
/* harmony import */ var _ProjectView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectView */ "./src/ProjectView.js");
/* harmony import */ var _AppController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppController */ "./src/AppController.js");
/* harmony import */ var _AppModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppModel */ "./src/AppModel.js");
/* harmony import */ var _AppView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppView */ "./src/AppView.js");







const app = new _AppController__WEBPACK_IMPORTED_MODULE_4__["AppController"](new _AppModel__WEBPACK_IMPORTED_MODULE_5__["AppModel"](), new _AppView__WEBPACK_IMPORTED_MODULE_6__["AppView"]());
const defaultProject = new _ProjectController__WEBPACK_IMPORTED_MODULE_1__["ProjectController"](new _ProjectModel__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"]('Default'), new _ProjectView__WEBPACK_IMPORTED_MODULE_3__["ProjectView"](_ProjectModel__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"].counter));
defaultProject.view.renderName(defaultProject.model.name);
defaultProject.view.renderForm(defaultProject.model.form);
defaultProject.view.getForm();
defaultProject.bindAll();

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9kb0xpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL21haW4uc2Nzcz82YTE3Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsIkFwcENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsIm1vZGVsIiwidmlldyIsImJpbmRBZGRQcm9qZWN0IiwiaGFuZGxlQWRkUHJvamVjdCIsImJpbmQiLCJiaW5kVG9nZ2xlIiwiaGFuZGxlVG9nZ2xlIiwiYmluZE5hdlRvZ2dsZSIsImhhbmRsZU5hdlRvZ2dsZSIsImJpbmRQcmlvcml0eSIsImhhbmRsZVByaW9yaXR5IiwiYmluZERpc3BsYXlBbGwiLCJoYW5kbGVEaXNwbGF5QWxsIiwiYmluZERhdGVUb2RheSIsImhhbmRsZVRvZGF5IiwiYmluZERhdGVVcGNvbWluZyIsImhhbmRsZVVwY29taW5nIiwiYmluZERhdGVBbnl0aW1lIiwiaGFuZGxlQW55dGltZSIsIm5hbWUiLCJwcm9qZWN0IiwiUHJvamVjdENvbnRyb2xsZXIiLCJQcm9qZWN0TW9kZWwiLCJQcm9qZWN0VmlldyIsImNvdW50ZXIiLCJhZGRQcm9qZWN0IiwicmVuZGVyTmFtZSIsInJlbmRlckJ0biIsInJlbmRlckZvcm0iLCJmb3JtIiwiZ2V0Rm9ybSIsImJpbmRBbGwiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTmF2Q2xpY2siLCJyZW5kZXIiLCJ0b2RvTGlzdHMiLCJldmVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRhcmdldCIsImRhdGFzZXQiLCJ0b2dnbGUiLCJjbGFzc0xpc3QiLCJuYXYiLCJtYWluIiwicHJpb3JpdHkiLCJ0b2RvcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidG9kbyIsImFkZCIsInJlbW92ZSIsIl9zYW1lRGF5IiwiZGF0ZTEiLCJkYXRlMiIsInRvZG9EYXRlIiwiRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwidG9kYXkiLCJkYXRlIiwiQXBwTW9kZWwiLCJwcm9qZWN0cyIsIkFwcFZpZXciLCJjb250YWluZXIiLCJob21lQnRuIiwicHJvamVjdElucHV0IiwicHJvamVjdFN1Ym1pdCIsInNvcnRUaXRsZSIsInNvcnREZXNjcmlwdGlvbiIsInNvcnREYXRlIiwic29ydFByaW9yaXR5IiwiZGlzcGxheUFsbEJ0biIsInByaW9yaXR5QnRuIiwiZGF0ZVRvZGF5QnRuIiwiZGF0ZVVwY29taW5nQnRuIiwiZGF0ZUFueXRpbWVCdG4iLCJuYXZCdG4iLCJ0b2dnbGVCdG4iLCJfcHJvamVjdE5hbWUiLCJ2YWx1ZSIsIl9yZXNldElucHV0IiwiaGFuZGxlciIsImZpbHRlciIsInNsaWNlIiwib25Qcm9qZWN0Q2hhbmdlIiwiYmluZFByb2plY3RDaGFuZ2UiLCJoYW5kbGVBZGRUb2RvTGlzdCIsInRvZG9MaXN0IiwiYWRkVG9kb0xpc3QiLCJoYW5kbGVEZWxldGVUb2RvTGlzdCIsImRlbGV0ZVRvZG9MaXN0IiwiYmluZEFkZFNlY3Rpb24iLCJTZWN0aW9uRm9ybSIsImVkaXRUb2RvTGlzdCIsInVwZGF0ZSIsImNhbGxiYWNrIiwic2VjdGlvbnMiLCJpbm5lckhUTUwiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmQiLCJuYW1lSW5wdXQiLCJzdWJtaXQiLCJfc2VjdGlvbk5hbWUiLCJjcmVhdGVTZWN0aW9uIiwiVG9kb0xpc3RDb250cm9sbGVyIiwiVG9kb0xpc3RNb2RlbCIsIlRvZG9MaXN0VmlldyIsImZvcm1Db250YWluZXIiLCJmb3JtQnRuIiwibGFiZWxOYW1lIiwiZmluaXNoIiwic3VibWl0QnRuIiwiY2FuY2VsQnRuIiwiVG9kbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0b2RvRWxlbSIsInRvZG9DaGVjayIsImNvbXBvbmVudHMiLCJjb21wb25lbnQiLCJ0b2RvQ29tcG9uZW50IiwidG9kb1ByaW9yaXR5IiwiVG9kb0Zvcm0iLCJsYWJlbFRpdGxlIiwibGFiZWxEZXNjcmlwdGlvbiIsImRldGFpbHMiLCJsYWJlbERhdGUiLCJwcmlvcml0eUNvbnRhaW5lciIsInByaW9yaXRpZXMiLCJwcmlvcml0aWVzTGlzdCIsImxhYmVsUHJpb3JpdHkiLCJpbnB1dFByaW9yaXR5IiwiYmluZFByaW9yaXR5TGFiZWwiLCJoYW5kbGVQcmlvcml0eUxhYmVsIiwiYmluZFJlc2V0UHJpb3JpdHkiLCJoYW5kbGVSZXNldFByaW9yaXR5IiwiY2xvc2VzdCIsImxhYmVscyIsImxhYmVsIiwic3R5bGUiLCJjb2xvciIsImdldENvbXB1dGVkU3R5bGUiLCJvblRvZG9MaXN0Q2hhbmdlIiwiYmluZFRvZG9MaXN0Q2hhbmdlIiwiaGFuZGxlQWRkVG9kbyIsImFkZFRvZG8iLCJoYW5kbGVFZGl0VG9kbyIsImZpZWxkIiwiZWRpdFRvZG8iLCJoYW5kbGVEZWxldGVUb2RvIiwiZGVsZXRlVG9kbyIsImJpbmRBZGRUb2RvIiwiYmluZERlbGV0ZVRvZG8iLCJzZWN0aW9uIiwicHJlcGVuZCIsIl90b2RvVGl0bGUiLCJfdG9kb0Rlc2NyaXB0aW9uIiwiX3RvZG9EYXRlIiwiX3RvZG9Qcmlvcml0eSIsIl9yZXNldElucHV0cyIsImNoZWNrZWQiLCJjb250YWlucyIsInBhcnNlSW50IiwicGFyZW50RWxlbWVudCIsImFwcCIsImRlZmF1bHRQcm9qZWN0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxj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QU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLFdB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LENBQXZCO0FBQ0FrSixjQUFjLENBQUN6SyxJQUFmLENBQW9CeUIsVUFBcEIsQ0FBK0JnSixjQUFjLENBQUMxSyxLQUFmLENBQXFCbUIsSUFBcEQ7QUFDQXVKLGNBQWMsQ0FBQ3pLLElBQWYsQ0FBb0IyQixVQUFwQixDQUErQjhJLGNBQWMsQ0FBQzFLLEtBQWYsQ0FBcUI2QixJQUFwRDtBQUNBNkksY0FBYyxDQUFDekssSUFBZixDQUFvQjZCLE9BQXBCO0FBQ0E0SSxjQUFjLENBQUMzSSxPQUFmLEc7Ozs7Ozs7Ozs7O0FDZkEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw0TUFBb0c7O0FBRXRJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcXG59XFxuXFxuLm5vLWRpc3BsYXkge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5LFxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjk7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuMzVyZW07XFxuICBsaW5lLWhlaWdodDogMztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ0bi0tcGFnZS0taGVhZGVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnRuLS1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmJ0bi0tc3VibWl0LCAuYnRuLS1jYW5jZWwge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXG59XFxuLmJ0bi0tc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnRuLS1jYW5jZWwge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5idG4tLWNhbmNlbDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43KTtcXG59XFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuXFxuLm5hdi0taGVhZGluZyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG59XFxuXFxuW2RhdGEtdG9nZ2xlPWFkZC1wcm9qZWN0XSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuW2RhdGEtdG9nZ2xlPWFkZC1wcm9qZWN0XTpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi50by1kb19fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiLCBBcmlhbDtcXG59XFxuXFxuW25hbWU9dGl0bGVdIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbltuYW1lPWRhdGVdIHtcXG4gIGNvbG9yOiAjOGU4ZThlO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idG4tLXN1Ym1pdCxcXG4uYnRuLS1jYW5jZWwge1xcbiAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07XFxufVxcblxcbi5idG4tLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC43KTtcXG59XFxuXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5idG4tLWFkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbi5idG4tLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuLmJ0bi0tc2VjdGlvbjpiZWZvcmUsIC5idG4tLXNlY3Rpb246YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIGhlaWdodDogMnB4O1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmhvdmVyOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjpob3ZlcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5idG4tLXNlY3Rpb246YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlLCAubmF2X19maWx0ZXJzIGxpOmJlZm9yZSwgLm5hdl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gIG1hcmdpbjogMCAwLjI1cmVtIDAgMS4yNXJlbTtcXG59XFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pqrXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4ubmF2IC5wcm9qZWN0X2xpc3RfX2FkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm5hdl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5wcmlvcml0eS1tZWQge1xcbiAgY29sb3I6ICNlNzlhNjc7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6ICM1ZDk3NWI7XFxufVxcblxcbi5wcmlvcml0eS1ub25lIHtcXG4gIGNvbG9yOiAjYzdjN2M3O1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GzXFxcIjtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74myXFxcIjtcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74m0XFxcIjtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLNcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb2xvcjogIzQwNDI5ZTtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ViOTk2MztcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb2xvcjogIzhkNWE4OTtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbn1cXG5cXG4uZGF0ZS1sYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM5NDIwMjA7XFxufVxcblxcbi5uYXYtLWhlYWRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG59XFxuXFxuLnNvcnQtdGl0bGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74yoXFxcIjtcXG59XFxuXFxuLnNvcnQtZGVzY3JpcHRpb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mJXFxcIjtcXG59XFxuXFxuLnNvcnQtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uc29ydC1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK5cXFwiO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjMzA1YzMwO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWJiOTRmO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM2Njk3OTE7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5tYWluX19oZWFkZXIgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50by1kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYuNXJlbSAxZnIgNi41cmVtIDJyZW07XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuLnRvLWRvX19jaGVjayB7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgbGluZWFyO1xcbn1cXG5cXG4uYWRkX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxufVxcbi5hZGRfX2NvbnRlbnQtLXRvZG8ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG59XFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHBhZGRpbmc6IDAuMTVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcblxcbi5hZGRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5hZGRfX3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFkZF9fcHJpb3JpdHkgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGVmdDogLTEwcHg7XFxuICB0b3A6IDEuNjVyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4O1xcbiAgbGVmdDogMTVweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC02cHg7XFxuICBsZWZ0OiAxNHB4O1xcbn1cXG4uYWRkLXByaW9yaXR5IGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcblxcbi5hZGRfX2ZpbmlzaCB7XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxubGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGFnZV9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6ICMyYTJiNjg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCBsaTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGJhY2tncm91bmQ6ICNlZWYwZjE7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIHBhZGRpbmc6IDJyZW0gMC4yNXJlbSAwIDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcbn1cXG4ubmF2LS1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5Omxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA0KTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkgYnV0dG9uIHtcXG4gIGZsZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDcpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG59XFxuXFxuLm1haW4tLWhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNXB4KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zYXNzL21haW4uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2Jhc2UvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2Jhc2UvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL3V0aWxzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL3V0aWxzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX2ljb25zLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL190b2RvLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL19kcm9wZG93bi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19mb3JtLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19uYXYuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9fbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjs7O0NBQUE7QUFLQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QURDRDs7QUNDQSxnREFBQTtBQUNBOztFQUVDLGNBQUE7QURFRDs7QUNBQTtFQUNDLGNBQUE7QURHRDs7QUNEQTtFQUNDLGdCQUFBO0FESUQ7O0FDRkE7RUFDQyxZQUFBO0FES0Q7O0FDSEE7O0VBRUMsV0FBQTtFQUNBLGFBQUE7QURNRDs7QUNKQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QURPRDs7QUNKQTs7RUFFQyxZQUFBO0FET0Q7QUNMQzs7RUFDQyxhQUFBO0FEUUY7O0FDSkE7RUFDQyxzQkFBQTtBRE9EOztBQ0pBO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FET0Q7O0FDSkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBRE9EOztBQ0pBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FET0Q7O0FDSkE7RUFDQyxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNDLDhCQUFBO0FET0Y7O0FDSkE7RUFDQyx3QkFBQTtBRE9EOztBRWhHQTs7RUFFRSxrQ0NEYTtFREViLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRm1HRjs7QUVoR0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNDUGM7RURRZCxxQkFBQTtFQUNBLGtCQUFBO0FGbUdGOztBRWhHQTtFQUNFLGdCQUFBO0FGbUdGOztBRS9GRTtFQUNFLFdDZlc7QUhpSGY7QUUvRkU7RUFDRSxrQkFBQTtBRmlHSjtBRTlGRTtFQUVFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBRitGSjtBRTVGRTtFQUNFLFdBQUE7QUY4Rko7QUUzRkU7RUFDRSw2QkFBQTtBRjZGSjtBRTNGSTtFQUNFLDZCQUFBO0FGNkZOO0FFekZFO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtBRjJGSjtBRXpGSTtFQUNFLDhCQUFBO0FGMkZOOztBRWpGRTtFQUNFLHlCQUFBO0VBQ0EsY0M3RFk7RUQ4RFosZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FGb0ZKOztBRWhGQTtFQUNFLDBCQUFBO0FGbUZGO0FFakZFO0VBQ0UsV0FBQTtBRm1GSjs7QUU5RUE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FGaUZGOztBRTlFQTtFQUNFLGdCQUFBO0FGaUZGOztBRTVFQTs7RUFFRSxrQ0M5RmE7QUg2S2Y7O0FFNUVBO0VBQ0UsZ0JBQUE7QUYrRUY7O0FFNUVBO0VBQ0UsY0M3Rlc7QUg0S2I7O0FFNUVBO0VBQ0UsaUJBQUE7QUYrRUY7O0FJMUxBO0VBQ0MsWUFBQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBSjZMRjtBSTNMRTtFQUNFLGFBQUE7QUo2TEo7O0FJekxBOztFQUVFLHVCQUFBO0FKNExGOztBSXpMQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBSjRMRjtBSTFMRTtFQUNFLGtDQUFBO0FKNExKOztBSXhMQTtFQUNFLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBSjJMRjs7QUl4TEE7RUFDRSxZRDBCUztFQ3pCVCw2QkFBQTtFQzNCQSxrQ0FBQTtFQUNBLGdCQUFBO0VENEJBLGNBQUE7QUo0TEY7O0FJekxBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUo0TEY7QUkxTEU7RUFFRSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBSjJMSjtBSXhMRTtFQUVFLHdDQUFBO0FKeUxKO0FJdExFO0VBQ0Usa0JBQUE7QUp3TEo7QUlyTEU7RUFDRSxpQkFBQTtBSnVMSjs7QU1sUEU7RUFJRSwyQkhzRFk7QUg0TGhCO0FNL09FO0VEVEEsa0NBQUE7RUFDQSxnQkFBQTtBTDJQRjtBTTlPRTtFQUNFLFlBQUE7RUFDQSw2QkhSYTtBSHdQakI7QU03T0U7RUFDRSxZSHFDTztFRXBEVCxrQ0FBQTtFQUNBLGdCQUFBO0FMK1BGO0FNN09FO0VBQ0UsWUFBQTtFRHpCRixrQ0FBQTtFQUNBLGdCQUFBO0FMeVFGOztBTTFPRTtFQUNFLGNIdEJhO0FIbVFqQjs7QU05T0U7RUFDRSxjSHRCYTtBSHVRakI7O0FNbFBFO0VBQ0UsY0h0QmE7QUgyUWpCOztBTXRQRTtFQUNFLGNIdEJhO0FIK1FqQjs7QUsvUUk7RUFDRSxZRnlCTztBSHlQYjs7QUtuUkk7RUFDRSxZRnlCTztBSDZQYjs7QUt2Ukk7RUFDRSxZRnlCTztBSGlRYjs7QUszUkk7RUFDRSxZRnlCTztBSHFRYjs7QUt2Ukk7RUFDRSxjRkZPO0FINFJiOztBSzNSSTtFQUNFLGNGRk87QUhnU2I7O0FLL1JJO0VBQ0UsY0ZGTztBSG9TYjs7QUtuU0k7RUFDRSxjRkZPO0FId1NiOztBS3ZTSTtFQUNFLGNGRk87QUg0U2I7O0FNcFJBO0VBQ0UsWUFBQTtFQUNBLGNIeENjO0VFQ2Qsa0NBQUE7RUFDQSxnQkFBQTtFQ3dDQSxxQkFBQTtBTndSRjs7QUszVEk7RUFDRSxZRnNDTztBSHdSYjs7QUsvVEk7RUFDRSxZRnNDTztBSDRSYjs7QUtuVUk7RUFDRSxZRnNDTztBSGdTYjs7QUt2VUk7RUFDRSxZRnNDTztBSG9TYjs7QUtuVUk7RUFDRSxjRk1PO0FIZ1ViOztBS3ZVSTtFQUNFLGNGTU87QUhvVWI7O0FLM1VJO0VBQ0UsY0ZNTztBSHdVYjs7QUsvVUk7RUFDRSxjRk1PO0FINFViOztBTS9TQTtFQUNFLFlBQUE7RURuREEsa0NBQUE7RUFDQSxnQkFBQTtBTHNXRjs7QU83V0E7RUFDRSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QVBnWEY7QU85V0U7RUFDRSxlQUFBO0FQZ1hKOztBUXZYQTtFQUNFLDRCQUFBO0FSMFhGOztBUzNYQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0FUOFhGO0FTNVhFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBVDhYSjtBUzNYRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FUNlhKOztBU3pYQTs7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBVDRYRjs7QVN6WEE7RUFDRSxZQUFBO0FUNFhGOztBU3pYQTtFQUNFLCtDQUFBO0FUNFhGOztBU3pYQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBVDRYRjs7QVN6WEE7RUFDRSxrQkFBQTtBVDRYRjtBUzFYRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QVQ0WEo7O0FTeFhBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QVQyWEY7QVN6WEU7RUFDRSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QVQyWEo7QVN4WEU7RUFDRSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBVDBYSjtBU3ZYRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QVR5WEo7O0FTclhBO0VBQ0UsbUJBQUE7QVR3WEY7O0FTclhBO0VBQ0Usb0NBQUE7QVR3WEY7O0FTclhBO0VBQ0UsZUFBQTtBVHdYRjs7QVV0ZEE7RUFDRSxlQUFBO0VBQ0EsbUJQR2M7RU9GZCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FWeWRGO0FVdGRFO0VBQ0UsYUFBQTtFQUNBLE9BQUE7QVZ3ZEo7QVV0ZEk7RUFDRSxpQkFBQTtBVndkTjs7QVd4ZUE7RUFFRSxtQlJJZ0I7RVFIaEIsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBWDBlRjtBV3hlRTtFQUNFLDRCQUFBO0FYMGVKO0FXdmVFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0FYeWVKO0FXdmVJO0VBQ0UsbUJBQUE7QVh5ZU47QVd0ZUk7RUFDRSxhQUFBO0FYd2VOO0FXdGVNO0VBQ0UsbUNBQUE7QVh3ZVI7QVdyZU07RUFFRSxPQUFBO0VBQ0EsaUJBQUE7QVhzZVI7QVdqZUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QVhtZUo7QVdqZUk7RUFDRSxtQ0FBQTtBWG1lTjs7QVk1Z0JBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QVorZ0JGOztBWTVnQkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QVorZ0JGOztBWTVnQkE7RUFDRSw2QkFBQTtBWitnQkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xcbn1cXG5cXG4ubm8tZGlzcGxheSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnRuLS1wYWdlLS1oZWFkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWNhbmNlbCB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLmJ0bi0tY2FuY2VsOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9ZGF0ZV0ge1xcbiAgY29sb3I6ICM4ZThlOGU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG5cXG4uYnRuLS1jYW5jZWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmJ0bi0tYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXI6YmVmb3JlLCAuYnRuLS1zZWN0aW9uOmhvdmVyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5idG4tLXNlY3Rpb246YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUsIC5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMCAxLjI1cmVtO1xcbn1cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5uYXYgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2X19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZCB7XFxuICBjb2xvcjogI2U3OWE2NztcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogIzVkOTc1YjtcXG59XFxuXFxuLnByaW9yaXR5LW5vbmUge1xcbiAgY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibJcXFwiO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibRcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Es1xcXCI7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNDA0MjllO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWI5OTYzO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOGQ1YTg5O1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29sb3I6ICM3YTdhN2E7XFxufVxcblxcbi5kYXRlLWxhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzk0MjAyMDtcXG59XFxuXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvjKhcXFwiO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYlcXFwiO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29sb3I6ICMzMDVjMzA7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYmI5NGY7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzY2OTc5MTtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG4udG8tZG9fX2NoZWNrIHtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBsaW5lYXI7XFxufVxcblxcbi5hZGRfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG59XFxuLmFkZF9fY29udGVudC0tdG9kbyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbn1cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgcGFkZGluZzogMC4xNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbltuYW1lPXRpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWRkX19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTZweDtcXG4gIGxlZnQ6IDE0cHg7XFxufVxcbi5hZGQtcHJpb3JpdHkgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuXFxuLmFkZF9fZmluaXNoIHtcXG4gIG1hcmdpbjogMC41cmVtIDFyZW07XFxufVxcblxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYWdlX19oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogIzJhMmI2ODtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIGxpOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5uYXYge1xcbiAgYmFja2dyb3VuZDogI2VlZjBmMTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgcGFkZGluZzogMnJlbSAwLjI1cmVtIDAgMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxufVxcbi5uYXYtLWhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG4ubmF2X19jYXRlZ29yeSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuLm5hdl9fY2F0ZWdvcnk6bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDQpO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSBidXR0b24ge1xcbiAgZmxleDogMTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNyk7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbn1cXG5cXG4ubWFpbi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1cHgpO1xcbn1cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXG5cXHQmOmZvY3VzIHtcXG5cXHRcXHRvdXRsaW5lOiBub25lO1xcblxcdH1cXG59XFxuXFxuKiB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogNTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjI1ZW0pO1xcbn1cXG5cXG4ubm8tZGlzcGxheSB7XFxuXFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cIixcImJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbiAgZm9udC1zaXplOiAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnRuIHtcXG4gICYtLXBhZ2UtLWhlYWRlciB7XFxuICAgIGNvbG9yOiAkY29sb3ItaGVhZGVyO1xcbiAgfVxcblxcbiAgJi0taWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG5cXG4gICYtLXN1Ym1pdCxcXG4gICYtLWNhbmNlbCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogLjg1ZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAtLjVweDtcXG4gIH1cXG5cXG4gICYtLXN1Ym1pdCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcblxcbiAgJi0tY2FuY2VsIHtcXG4gICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJi0tc2VjdGlvbiB7XFxuICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjc1KTtcXG4gICAgfVxcblxcbiAgfVxcblxcbn1cXG5cXG4vLyBOYXZcXG5cXG4ubmF2IHtcXG4gICYtLWhlYWRpbmcge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMi41O1xcbiAgfVxcbn1cXG5cXG5bZGF0YS10b2dnbGU9XFxcImFkZC1wcm9qZWN0XFxcIl0ge1xcbiAgY29sb3I6IHJnYmEoIzAwMCwgLjc1KTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gIH1cXG5cXG59XFxuXFxuLm1haW5fX2hlYWRlciBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi50by1kb19fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLy8gRm9ybVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbn1cXG5cXG5bbmFtZT1cXFwidGl0bGVcXFwiXSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5bbmFtZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGNvbG9yOiAkY29sb3ItZm9ybTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XCIsXCIvLyBGb250c1xcbiRmb250LXByaW1hcnk6ICdOYW51bSBHb3RoaWMnLCBBcmlhbDtcXG5cXG5cXG4vLyBDb2xvcnNcXG4kY29sb3ItcHJpbWFyeTogcmdiKDQyLCA0MywgMTA0KTtcXG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMjM4LCAyNDAsIDI0MSk7XFxuXFxuJGNvbG9yLWhlYWRlcjogI2ZmZjtcXG4kY29sb3ItcHJvamVjdHM6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4kY29sb3ItZm9ybTogcmdiKDE0MiwgMTQyLCAxNDIpO1xcblxcbiRjb2xvci1wcmlvcml0eTogKFxcbiAgaGlnaDogcmdiKDE2MSwgNjYsIDY2KSxcXG4gIG1lZDogcmdiKDIzMSwgMTU0LCAxMDMpLFxcbiAgbG93OiByZ2IoOTMsIDE1MSwgOTEpLFxcbiAgbm9uZTogcmdiKDE5OSwgMTk5LCAxOTkpXFxuKTtcXG5cXG4kY29sb3ItZGF0ZTogKFxcbiAgYWxsOiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxNSUpLFxcbiAgdG9kYXk6IHJnYigyMzUsIDE1MywgOTkpLFxcbiAgdXBjb21pbmc6IHJnYigxNDEsIDkwLCAxMzcpLFxcbiAgYW55dGltZTogcmdiKDEyMiwgMTIyLCAxMjIpLFxcbiAgbGF0ZTogcmdiKDE0OCwgMzIsIDMyKVxcbik7XFxuXFxuJGNvbG9yLXNvcnQ6IChcXG4gIHRpdGxlOiByZ2IoNDgsIDkyLCA0OCksXFxuICBkZXNjcmlwdGlvbjogcmdiKDIzNSwgMTg1LCA3OSksXFxuICBkYXRlOiByZ2IoMTAyLCAxNTEsIDE0NSksXFxuICBwcmlvcml0eTogbWFwLWdldCgkY29sb3ItcHJpb3JpdHksIGhpZ2gpXFxuKTtcXG5cXG4vLyBJY29uc1xcblxcbiRpY29uLXByaW9yaXR5OiBcXFwiXFxcXGYwMmVcXFwiO1xcblxcbiRpY29ucy1kYXRlOiAoXFxuICBhbGw6IFxcXCJcXFxcZjA3M1xcXCIsXFxuICB0b2RheTogXFxcIlxcXFxmMjcyXFxcIixcXG4gIHVwY29taW5nOiBcXFwiXFxcXGYyNzRcXFwiLFxcbiAgYW55dGltZTogXFxcIlxcXFxmMTMzXFxcIixcXG4pO1xcblxcbiRpY29ucy1jYXJldDogKFxcbiAgdXA6IFxcXCJcXFxcZjBkOFxcXCIsXFxuICBkb3duOiBcXFwiXFxcXGYwZDdcXFwiLFxcbiAgcmlnaHQ6IFxcXCJcXFxcZjBkYVxcXCJcXG4pO1xcblxcbiRpY29ucy1zb3J0OiAoXFxuICB0aXRsZTogXFxcIlxcXFxmMzI4XFxcIixcXG4gIGRlc2NyaXB0aW9uOiBcXFwiXFxcXGYyNDlcXFwiLFxcbiAgZGF0ZTogXFxcIlxcXFxmMDczXFxcIixcXG4gIHByaW9yaXR5OiAkaWNvbi1wcmlvcml0eSxcXG4pO1xcblxcbiRpY29uLWFkZDogXFxcIlxcXFxmMDY3XFxcIjtcXG5cXG4vLyBPdGhlcnNcXG4kbWFyZ2luLWluZGVudDogMCAuMjVyZW0gMCAxLjI1cmVtO1wiLFwiYnV0dG9uIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgXFxuICAmOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAuMTVyZW0gLjVyZW07XFxufVxcbiAgXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogLjI1cmVtO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43KTtcXG4gIH1cXG59XFxuXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoI2ZmZiwgLjUpO1xcbn1cXG5cXG4uYnRuLS1hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICRpY29uLWFkZDtcXG4gIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcblxcbiAgJjpiZWZvcmUsXFxuICAmOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4yNSk7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICB9XFxuXFxuICAmOmhvdmVyOmJlZm9yZSxcXG4gICY6aG92ZXI6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICB9XFxuXFxuICAmOmJlZm9yZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIH1cXG5cXG4gICY6YWZ0ZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIH1cXG5cXG59XCIsXCJAbWl4aW4gZm9udC1hd2Vzb21lLTQwMCgpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5AbWl4aW4gZm9udC1hd2Vzb21lLTcwMCgpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5AbWl4aW4gaWNvbi1jb250ZW50KCR0YXJnZXQsICRtYXApIHtcXG4gIEBlYWNoICRrZXksICRpY29uIGluICRtYXAge1xcbiAgICAuI3skdGFyZ2V0fS0jeyRrZXl9OjpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6ICRpY29uO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtaXhpbiBpY29uLWNvbG9yKCR0YXJnZXQsICRtYXApIHtcXG4gIEBlYWNoICRrZXksICRjb2xvciBpbiAkbWFwIHtcXG4gICAgLiN7JHRhcmdldH0tI3ska2V5fTo6YmVmb3JlIHtcXG4gICAgICBjb2xvcjogJGNvbG9yO1xcbiAgICB9XFxuICB9XFxufVwiLFwiLy8gTkFWLUlDT05TXFxuXFxuLm5hdiB7XFxuICAmX190by1kbyBsaTpiZWZvcmUsXFxuICAmX19wcm9qZWN0cyBsaTpiZWZvcmUsXFxuICAmX19maWx0ZXJzIGxpOmJlZm9yZSxcXG4gICZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICAgIG1hcmdpbjogJG1hcmdpbi1pbmRlbnQ7XFxuICB9XFxuXFxuICAmX190by1kbyBsaTpiZWZvcmUsXFxuICAmX19zb3J0cyBsaTpiZWZvcmUge1xcbiAgICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNDAwKCk7XFxuICB9XFxuXFxuICAmX19wcm9qZWN0cyBsaTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4pqrXFxcIjtcXG4gICAgY29sb3I6ICRjb2xvci1wcm9qZWN0cztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0X2xpc3RfX2FkZDpiZWZvcmUge1xcbiAgICBjb250ZW50OiAkaWNvbi1hZGQ7XFxuICAgIEBpbmNsdWRlIGZvbnQtYXdlc29tZS03MDAoKTtcXG4gIH1cXG5cXG4gICZfX2ZpbHRlcnMgbGk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDJlXFxcIjtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTQwMCgpO1xcbiAgfVxcbn1cXG5cXG4vLyBDb2xvciBQcmlvcml0eSBJY29uc1xcbkBlYWNoICRsZXZlbCwgJGNvbG9yIGluICRjb2xvci1wcmlvcml0eSB7XFxuICAucHJpb3JpdHktI3skbGV2ZWx9IHtcXG4gICAgY29sb3I6ICRjb2xvcjtcXG4gIH1cXG59XFxuXFxuLy8gRGF0ZSBJY29uc1xcbkBpbmNsdWRlIGljb24tY29udGVudCgnZGF0ZScsICRpY29ucy1kYXRlKTtcXG5AaW5jbHVkZSBpY29uLWNvbG9yKCdkYXRlJywgJGNvbG9yLWRhdGUpO1xcblxcbi8vIENhdGVnb3J5IEljb25zXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogbWFwLWdldCgkaWNvbnMtY2FyZXQsIGRvd24pO1xcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbiAgbWFyZ2luLXJpZ2h0OiAuNzVyZW07XFxufVxcblxcbi8vIFNvcnQgSWNvbnNcXG5AaW5jbHVkZSBpY29uLWNvbnRlbnQoJ3NvcnQnLCAkaWNvbnMtc29ydCk7XFxuQGluY2x1ZGUgaWNvbi1jb2xvcignc29ydCcsICRjb2xvci1zb3J0KTtcXG5cXG4vLyBNQUlOIElDT05TXFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogbWFwLWdldCgkaWNvbnMtY2FyZXQsIGRvd24pO1xcbiAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbn1cIixcIi50by1kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYuNXJlbSAxZnIgNi41cmVtIDJyZW07XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIFxcbiAgJl9fY2hlY2sge1xcbiAgICBtYXJnaW4tdG9wOiA3cHg7XFxuICB9XFxuXFxufVwiLFwiLmRyb3Bkb3duIHtcXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzIGxpbmVhcjtcXG59XCIsXCIuYWRkX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG5cXG4gICYtLXRvZG8ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcXG4gIH1cXG5cXG4gICYtLXByb2plY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBwYWRkaW5nOiAuMTVyZW07XFxuICB9XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IC4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuW25hbWU9XFxcInRpdGxlXFxcIl0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICAmOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNXB4O1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgJjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICBsZWZ0OiAxNHB4O1xcbiAgfVxcblxcbiAgbGFiZWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAuNXJlbTtcXG4gIH1cXG59XFxuXFxuLmFkZF9fZmluaXNoIHtcXG4gIG1hcmdpbjogLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKCNmZmYsIC41KTtcXG59XFxuXFxubGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIixcIi5wYWdlX19oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogJGNvbG9yLXByaW1hcnk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgei1pbmRleDogMTtcXG4gIFxcblxcbiAgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcblxcbiAgICAmIGxpOmxhc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICB9XFxuICB9XFxufVwiLFwiLm5hdiB7XFxuICBcXG4gIGJhY2tncm91bmQ6ICRjb2xvci1zZWNvbmRhcnk7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMjUpO1xcbiAgcGFkZGluZzogMnJlbSAuMjVyZW0gMCAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xcblxcbiAgJi0taGlkZGVuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG5cXG4gICZfX2NhdGVnb3J5IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjEpO1xcblxcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBsaSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4wNCk7XFxuICAgICAgfVxcblxcbiAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAvLyBNYWtlcyB0aGUgd2hvbGUgbGluZSBjbGlja2FibGUgaW5zdGVhZCBvZiBqdXN0IHRoZSB0ZXh0LlxcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgJi0taGVhZGluZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4wNyk7XFxuICAgIH1cXG4gIH1cXG59XCIsXCJtYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbn1cXG5cXG4ubWFpbi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1cHgpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfSBmcm9tICcuL1Byb2plY3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSAnLi9Qcm9qZWN0TW9kZWwnXG5pbXBvcnQgeyBQcm9qZWN0VmlldyB9IGZyb20gJy4vUHJvamVjdFZpZXcnXG5cbmV4cG9ydCBjbGFzcyBBcHBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vZGVsLCB2aWV3KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgdGhpcy52aWV3ID0gdmlld1xuXG4gICAgdGhpcy52aWV3LmJpbmRBZGRQcm9qZWN0KHRoaXMuaGFuZGxlQWRkUHJvamVjdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kVG9nZ2xlKHRoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmROYXZUb2dnbGUodGhpcy5oYW5kbGVOYXZUb2dnbGUuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZFByaW9yaXR5KHRoaXMuaGFuZGxlUHJpb3JpdHkuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERpc3BsYXlBbGwodGhpcy5oYW5kbGVEaXNwbGF5QWxsLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREYXRlVG9kYXkodGhpcy5oYW5kbGVUb2RheS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGF0ZVVwY29taW5nKHRoaXMuaGFuZGxlVXBjb21pbmcuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERhdGVBbnl0aW1lKHRoaXMuaGFuZGxlQW55dGltZS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgLy8gRGlzcGxheSB0aGUgbmV3IHByb2plY3QgYW5kIGNyZWF0ZWQgYSBidXR0b24gbGlua2VkIHRvIHRoZSBwcm9qZWN0IGluIHRoZSBuYXZpZ2F0aW9uLlxuICBoYW5kbGVBZGRQcm9qZWN0IChuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q29udHJvbGxlcihuZXcgUHJvamVjdE1vZGVsKG5hbWUpLCBuZXcgUHJvamVjdFZpZXcoUHJvamVjdE1vZGVsLmNvdW50ZXIpKVxuICAgIHRoaXMubW9kZWwuYWRkUHJvamVjdChwcm9qZWN0KVxuXG4gICAgcHJvamVjdC52aWV3LnJlbmRlck5hbWUobmFtZSlcbiAgICBwcm9qZWN0LnZpZXcucmVuZGVyQnRuKG5hbWUpXG4gICAgcHJvamVjdC52aWV3LnJlbmRlckZvcm0ocHJvamVjdC5tb2RlbC5mb3JtKVxuICAgIHByb2plY3Qudmlldy5nZXRGb3JtKClcbiAgICBwcm9qZWN0LmJpbmRBbGwoKVxuICAgIHByb2plY3Qudmlldy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZU5hdkNsaWNrKHByb2plY3QpKVxuICB9XG5cbiAgLy8gTGlua3MgdGhlIG5ld2x5IGNyZWF0ZWQgbmF2aWdhdGlvbiBidXR0b24gdG8gaXRzIHByb2plY3RcbiAgaGFuZGxlTmF2Q2xpY2sgKHByb2plY3QpIHtcbiAgICBwcm9qZWN0LnZpZXcucmVuZGVyTmFtZShwcm9qZWN0Lm1vZGVsLm5hbWUpXG4gICAgcHJvamVjdC52aWV3LnJlbmRlcihwcm9qZWN0Lm1vZGVsLnRvZG9MaXN0cylcbiAgICBwcm9qZWN0LnZpZXcucmVuZGVyRm9ybShwcm9qZWN0Lm1vZGVsLmZvcm0pXG4gICAgcHJvamVjdC52aWV3LmdldEZvcm0oKVxuICAgIHByb2plY3QuYmluZEFsbCgpXG4gIH1cblxuICAvLyBFbmFibGUgYWxsIHRvZ2dsZSBidXR0b25zXG4gIGhhbmRsZVRvZ2dsZSAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuZGF0YXNldC50b2dnbGV9YCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgfVxuXG4gIC8vIE1vZGlmeSBzcGFjZSBvY2N1cGllZCBieSBjb250ZW50IHdoZW4gdGhlIG5hdmlnYXRpb24gaXMgaGlkZGVuIC8gZGlzcGxheWVkLlxuICBoYW5kbGVOYXZUb2dnbGUgKCkge1xuICAgIHRoaXMudmlldy5uYXYuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LS1oaWRkZW4nKVxuICAgIHRoaXMudmlldy5tYWluLmNsYXNzTGlzdC50b2dnbGUoJ21haW4tLWhpZGRlbicpXG4gIH1cblxuICAvLyBFbmFibGUgcHJpb3JpdHkgZmlsdGVyc1xuICBoYW5kbGVQcmlvcml0eSAocHJpb3JpdHkpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0b2RvLmRhdGFzZXQucHJpb3JpdHkgIT09IHByaW9yaXR5KSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ25vLWRpc3BsYXknKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjb21wYXJlcyAyIGRheXMgKHVzZWQgZm9yIGRhdGUgZmlsdGVycylcbiAgX3NhbWVEYXkgKGRhdGUxLCBkYXRlMikge1xuICAgIGNvbnN0IHRvZG9EYXRlID0gbmV3IERhdGUoZGF0ZTEpXG4gICAgaWYgKHRvZG9EYXRlLmdldERhdGUoKSA9PT0gZGF0ZTIuZ2V0RGF0ZSgpICYmXG4gICAgdG9kb0RhdGUuZ2V0TW9udGgoKSA9PT0gZGF0ZTIuZ2V0TW9udGgoKSAmJlxuICAgIHRvZG9EYXRlLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUyLmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gRGF0ZXMgZmlsdGVyc1xuXG4gIGhhbmRsZVRvZGF5ICgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0aGlzLl9zYW1lRGF5KHRvZG8uZGF0YXNldC5kYXRlLCB0b2RheSkpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVVwY29taW5nICgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICghdGhpcy5fc2FtZURheSh0b2RvLmRhdGFzZXQuZGF0ZSwgdG9kYXkpICYmIG5ldyBEYXRlKHRvZG8uZGF0YXNldC5kYXRlKSA+IHRvZGF5KSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ25vLWRpc3BsYXknKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBbnl0aW1lICgpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0b2RvLmRhdGFzZXQuZGF0ZSAhPT0gJycpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIERpc2FibGUgZmlsdGVyc1xuICBoYW5kbGVEaXNwbGF5QWxsICgpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpKVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQXBwTW9kZWwge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdXG4gIH1cblxuICBhZGRQcm9qZWN0IChwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gICAgcHJvamVjdC5pZCA9IHRoaXMucHJvamVjdHMubGVuZ3RoXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBBcHBWaWV3IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIHRoaXMuaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWhvbWUnKVxuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuXG4gICAgLy8gRm9ybSB0byBjcmVhdGUgbmV3IHByb2plY3RzXG4gICAgdGhpcy5wcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLS1wcm9qZWN0IFtuYW1lPVwibmFtZVwiXScpXG4gICAgdGhpcy5wcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC0tcHJvamVjdCAuYnRuLS1zdWJtaXQnKVxuXG4gICAgLy8gU29ydCB0YXNrc1xuICAgIHRoaXMuc29ydFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtdGl0bGUnKVxuICAgIHRoaXMuc29ydERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtZGVzY3JpcHRpb24nKVxuICAgIHRoaXMuc29ydERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1kYXRlJylcbiAgICB0aGlzLnNvcnRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LXByaW9yaXR5JylcblxuICAgIC8vIEZpbHRlciB0YXNrc1xuICAgIHRoaXMuZGlzcGxheUFsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZpbHRlcj1cImFsbFwiXScpXG4gICAgdGhpcy5wcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZpbHRlcl49XCJwcmlvcml0eVwiXScpXG4gICAgdGhpcy5kYXRlVG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1maWx0ZXI9XCJkYXRlLXRvZGF5XCJdJylcbiAgICB0aGlzLmRhdGVVcGNvbWluZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbHRlcj1cImRhdGUtdXBjb21pbmdcIl0nKVxuICAgIHRoaXMuZGF0ZUFueXRpbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1maWx0ZXI9XCJkYXRlLWFueXRpbWVcIl0nKVxuXG4gICAgLy8gVG9nZ2xlIE5hdmlnYXRpb25cbiAgICB0aGlzLm5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZ2dsZT1cIm5hdlwiXScpXG4gICAgdGhpcy5uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JylcblxuICAgIC8vIFRvZ2dsZSBjYXRlZ29yaWVzXG4gICAgdGhpcy50b2dnbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLS1kcm9wZG93bicpXG4gIH1cblxuICAvLyBHZXQgbmV3IHByb2plY3QncyBuYW1lXG4gIGdldCBfcHJvamVjdE5hbWUgKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RJbnB1dC52YWx1ZVxuICB9XG5cbiAgLy8gUmVzZXQgSW5wdXQgdG8gY3JlYXRlIGEgbmV3IHByb2plY3RcbiAgX3Jlc2V0SW5wdXQgKCkge1xuICAgIHRoaXMucHJvamVjdElucHV0LnZhbHVlID0gJydcbiAgfVxuXG4gIGJpbmRBZGRQcm9qZWN0IChoYW5kbGVyKSB7XG4gICAgdGhpcy5wcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaGFuZGxlcih0aGlzLl9wcm9qZWN0TmFtZSlcbiAgICAgIHRoaXMuX3Jlc2V0SW5wdXQoKVxuICAgIH0pXG4gIH1cblxuICAvLyBOYXZpZ2F0aW9uIHRvZ2dsZXNcbiAgYmluZFRvZ2dsZSAoaGFuZGxlcikge1xuICAgIHRoaXMudG9nZ2xlQnRuLmZvckVhY2goKHRvZ2dsZUJ0bikgPT4gdG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcikpXG4gIH1cblxuICBiaW5kTmF2VG9nZ2xlIChoYW5kbGVyKSB7XG4gICAgdGhpcy5uYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgLy8gRmlsdGVyc1xuICBiaW5kUHJpb3JpdHkgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnByaW9yaXR5QnRuLmZvckVhY2goKHByaW9yaXR5QnRuKSA9PiBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gaGFuZGxlcihldmVudC50YXJnZXQuZGF0YXNldC5maWx0ZXIuc2xpY2UoOSkpKSlcbiAgfVxuXG4gIGJpbmREYXRlVG9kYXkgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmRhdGVUb2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBiaW5kRGF0ZVVwY29taW5nIChoYW5kbGVyKSB7XG4gICAgdGhpcy5kYXRlVXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgYmluZERhdGVBbnl0aW1lIChoYW5kbGVyKSB7XG4gICAgdGhpcy5kYXRlQW55dGltZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBiaW5kRGlzcGxheUFsbCAoaGFuZGxlcikge1xuICAgIHRoaXMuZGlzcGxheUFsbEJ0bi5mb3JFYWNoKChkaXNwbGF5QWxsQnRuKSA9PiBkaXNwbGF5QWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcikpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQcm9qZWN0Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLm1vZGVsLnRvZG9MaXN0cylcbiAgICB0aGlzLm1vZGVsLmJpbmRQcm9qZWN0Q2hhbmdlKHRoaXMub25Qcm9qZWN0Q2hhbmdlLmJpbmQodGhpcykpXG4gIH1cblxuICBvblByb2plY3RDaGFuZ2UgKHRvZG9MaXN0cykge1xuICAgIHRoaXMudmlldy5yZW5kZXIodG9kb0xpc3RzKVxuICB9XG5cbiAgaGFuZGxlQWRkVG9kb0xpc3QgKHRvZG9MaXN0KSB7XG4gICAgdGhpcy5tb2RlbC5hZGRUb2RvTGlzdCh0b2RvTGlzdClcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZVRvZG9MaXN0ICh0b2RvTGlzdCkge1xuICAgIHRoaXMubW9kZWwuZGVsZXRlVG9kb0xpc3QodG9kb0xpc3QpXG4gIH1cblxuICBiaW5kQWxsICgpIHtcbiAgICB0aGlzLnZpZXcuYmluZEFkZFNlY3Rpb24odGhpcy5oYW5kbGVBZGRUb2RvTGlzdC5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBTZWN0aW9uRm9ybSB9IGZyb20gJy4vU2VjdGlvbkZvcm0nXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0TW9kZWwge1xuICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWUgPT09ICcnID8gJ1VudGl0bGVkJyA6IG5hbWVcbiAgICB0aGlzLmlkID0gKytQcm9qZWN0TW9kZWwuY291bnRlclxuICAgIHRoaXMudG9kb0xpc3RzID0gW11cbiAgICB0aGlzLmZvcm0gPSBuZXcgU2VjdGlvbkZvcm0odGhpcy5pZClcbiAgfVxuXG4gIGFkZFRvZG9MaXN0ICh0b2RvTGlzdCkge1xuICAgIHRoaXMudG9kb0xpc3RzLnB1c2godG9kb0xpc3QpXG4gICAgdG9kb0xpc3QuaWQgPSB0aGlzLnRvZG9MaXN0cy5sZW5ndGhcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGVkaXRUb2RvTGlzdCAoaWQsIHVwZGF0ZSkge1xuICAgIHRoaXMudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHMubWFwKCh0b2RvTGlzdCkgPT4ge1xuICAgICAgaWYgKHRvZG9MaXN0LmlkID09PSBpZCkge1xuICAgICAgICB0b2RvTGlzdC5uYW1lID0gdXBkYXRlXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGRlbGV0ZVRvZG9MaXN0IChpZCkge1xuICAgIHRoaXMudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHMuZmlsdGVyKHRvZG9MaXN0ID0+IHRvZG9MaXN0LmlkICE9PSBpZClcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGJpbmRQcm9qZWN0Q2hhbmdlIChjYWxsYmFjaykge1xuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlID0gY2FsbGJhY2tcbiAgfVxufVxuXG5Qcm9qZWN0TW9kZWwuY291bnRlciA9IDBcbiIsImltcG9ydCB7IFRvZG9MaXN0Q29udHJvbGxlciB9IGZyb20gJy4vVG9kb0xpc3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgVG9kb0xpc3RNb2RlbCB9IGZyb20gJy4vVG9kb0xpc3RNb2RlbCdcbmltcG9ydCB7IFRvZG9MaXN0VmlldyB9IGZyb20gJy4vVG9kb0xpc3RWaWV3J1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdFZpZXcge1xuICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICB0aGlzLnNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25zJylcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fbmFtZScpXG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIG5hbWUgb2YgdGhlIHByb2plY3RcbiAgcmVuZGVyTmFtZSAobmFtZSkge1xuICAgIHRoaXMubmFtZS5pbm5lckhUTUwgPSBuYW1lXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIG5hdmlnYXRpb24gYnV0dG9uIGxpbmtlZCB0byB0aGUgcHJvamVjdFxuICByZW5kZXJCdG4gKG5hbWUpIHtcbiAgICB0aGlzLmxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1maWx0ZXInKVxuICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXInLCBgcHJvamVjdC0ke3RoaXMuaWR9YClcbiAgICB0aGlzLmJ1dHRvbi5pbm5lckhUTUwgPSBuYW1lXG4gICAgdGhpcy5saS5hcHBlbmQodGhpcy5idXR0b24pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kKHRoaXMubGkpXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIGFkZCBzZWN0aW9uIGZvcm1cbiAgcmVuZGVyRm9ybSAoZm9ybSkge1xuICAgIGZvcm0ucmVuZGVyKClcbiAgfVxuXG4gIC8vIEdldCB0aGUgYWRkIHNlY3Rpb24gZm9ybSBpbnB1dHNcbiAgZ2V0Rm9ybSAoKSB7XG4gICAgdGhpcy5uYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH0gW25hbWU9XCJzZWN0aW9uXCJdYClcbiAgICB0aGlzLnN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfSAuYnRuLS1zdWJtaXRgKVxuICB9XG5cbiAgLy8gR2V0IFNlY3Rpb24ncyBOYW1lIGZyb20gdGhlIGZvcm1cbiAgZ2V0IF9zZWN0aW9uTmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZUlucHV0LnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBmb3JtIGlucHV0XG4gIF9yZXNldElucHV0ICgpIHtcbiAgICB0aGlzLm5hbWVJbnB1dC52YWx1ZSA9ICcnXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHByb2plY3QgYnkgcmVuZGVyaW5nIGV2ZXJ5IHNlY3Rpb25cbiAgcmVuZGVyICh0b2RvTGlzdHMpIHtcbiAgICB0aGlzLnNlY3Rpb25zLmlubmVySFRNTCA9ICcnXG5cbiAgICBmb3IgKGNvbnN0IHRvZG9MaXN0IG9mIHRvZG9MaXN0cykge1xuICAgICAgdG9kb0xpc3Qudmlldy5jcmVhdGVTZWN0aW9uKClcbiAgICAgIHRvZG9MaXN0LnZpZXcucmVuZGVyTmFtZSh0b2RvTGlzdC5tb2RlbC5uYW1lKVxuICAgICAgdG9kb0xpc3Qudmlldy5yZW5kZXIodG9kb0xpc3QubW9kZWwudG9kb3MpXG4gICAgICB0b2RvTGlzdC52aWV3LnJlbmRlckZvcm0odG9kb0xpc3QubW9kZWwuZm9ybSlcbiAgICAgIHRvZG9MaXN0LnZpZXcuZ2V0Rm9ybSh0b2RvTGlzdC5tb2RlbC5mb3JtKVxuICAgICAgdG9kb0xpc3QuYmluZEFsbCgpXG4gICAgfVxuICB9XG5cbiAgLy8gRXZlbnQgTGlzdGVuZXJzXG5cbiAgYmluZEFkZFNlY3Rpb24gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGhhbmRsZXIobmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCh0aGlzLl9zZWN0aW9uTmFtZSwgdGhpcy5pZCksIG5ldyBUb2RvTGlzdFZpZXcodGhpcy5pZCkpKVxuICAgICAgdGhpcy5fcmVzZXRJbnB1dCgpXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlY3Rpb25Gb3JtIHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkX19zZWN0aW9uJylcbiAgICBmb3JtQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBmb3JtQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWRyb3Bkb3duJywgJ2J0bi0tc2VjdGlvbicpXG4gICAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gKVxuICAgIGZvcm1CdG4uaW5uZXJIVE1MID0gJ0FkZCBTZWN0aW9uJ1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnYWRkJywgJ2FkZC0tc2VjdGlvbicsICdkcm9wZG93bicsICdoaWRkZW4nKVxuICAgIGZvcm0uaWQgPSBgc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FkZF9fY29udGVudCcsICdhZGRfX2NvbnRlbnQtLXNlY3Rpb24nKVxuXG4gICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc2VjdGlvbicpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlY3Rpb25cXCdzIE5hbWUnKVxuICAgIGxhYmVsTmFtZS5hcHBlbmQobmFtZSlcbiAgICBjb250ZW50LmFwcGVuZChsYWJlbE5hbWUpXG5cbiAgICBjb25zdCBmaW5pc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZpbmlzaC5jbGFzc0xpc3QuYWRkKCdhZGRfX2ZpbmlzaCcpXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tc3VibWl0JylcbiAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FkZCBTZWN0aW9uJ1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWNhbmNlbCcpXG4gICAgY2FuY2VsQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnXG5cbiAgICBmaW5pc2guYXBwZW5kKHN1Ym1pdEJ0biwgY2FuY2VsQnRuKVxuICAgIGZvcm0uYXBwZW5kKGNvbnRlbnQsIGZpbmlzaClcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZChmb3JtQnRuLCBmb3JtKVxuXG4gICAgdGhpcy5iaW5kVG9nZ2xlKHRoaXMuaGFuZGxlVG9nZ2xlKVxuICB9XG5cbiAgLy8gRW5hYmxlIGZvcm0gdG9nZ2xlXG4gIGJpbmRUb2dnbGUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnRvZ2dsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cInNlY3Rpb24tZm9ybS0ke3RoaXMuaWR9XCJdYClcbiAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBoYW5kbGVUb2dnbGUgKGV2ZW50KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQudG9nZ2xlfWApLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkgPSAnbm9uZScpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICB0aGlzLmRhdGUgPSBkYXRlXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gIH1cblxuICByZW5kZXIgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHRvZG9FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvRWxlbS5jbGFzc0xpc3QuYWRkKCd0by1kbycpXG4gICAgdG9kb0VsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWRhdGUnLCB0aGlzLmRhdGUpXG4gICAgdG9kb0VsZW0uc2V0QXR0cmlidXRlKCdkYXRhLXByaW9yaXR5JywgdGhpcy5wcmlvcml0eSlcbiAgICB0b2RvRWxlbS5pZCA9IHRoaXMuaWRcblxuICAgIGNvbnN0IHRvZG9DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0b2RvQ2hlY2suY2xhc3NMaXN0LmFkZCgndG8tZG9fX2NoZWNrJylcbiAgICB0b2RvQ2hlY2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICB0b2RvRWxlbS5hcHBlbmQodG9kb0NoZWNrKVxuXG4gICAgY29uc3QgY29tcG9uZW50cyA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnZGF0ZSddXG4gICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgY29tcG9uZW50cykge1xuICAgICAgY29uc3QgdG9kb0NvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0b2RvQ29tcG9uZW50LmNsYXNzTGlzdC5hZGQoYHRvLWRvX18ke2NvbXBvbmVudH1gKVxuICAgICAgdG9kb0NvbXBvbmVudC5pbm5lckhUTUwgPSB0aGlzW2NvbXBvbmVudF1cbiAgICAgIHRvZG9FbGVtLmFwcGVuZCh0b2RvQ29tcG9uZW50KVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvLWRvX19wcmlvcml0eScsIGBwcmlvcml0eS0ke3RoaXMucHJpb3JpdHl9YClcbiAgICB0b2RvUHJpb3JpdHkuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWJvb2ttYXJrXCI+PC9pPidcbiAgICB0b2RvRWxlbS5hcHBlbmQodG9kb1ByaW9yaXR5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZCh0b2RvRWxlbSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRvZG9Gb3JtIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuaWQgPSArK1RvZG9Gb3JtLmNvdW50ZXJcbiAgfVxuXG4gIHJlbmRlciAoY29udGFpbmVyKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGRfX3RvZG8nKVxuXG4gICAgY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZm9ybUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1kcm9wZG93bicsICdidG4tLWFkZCcpXG4gICAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgYWRkLXRvZG8tJHt0aGlzLmlkfWApXG4gICAgZm9ybUJ0bi5pbm5lckhUTUwgPSAnQWRkIFRhc2snXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdhZGQnLCAnYWRkLS10b2RvJywgJ3RvZG8tZm9ybScsICdkcm9wZG93bicsICdoaWRkZW4nKVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsIGBhZGQtdG9kby0ke3RoaXMuaWR9YClcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWRkX19jb250ZW50JywgJ2FkZF9fY29udGVudC0tdG9kbycpXG5cbiAgICBjb25zdCBsYWJlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKVxuICAgIGxhYmVsVGl0bGUuYXBwZW5kKHRpdGxlKVxuXG4gICAgY29uc3QgbGFiZWxEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKVxuICAgIGxhYmVsRGVzY3JpcHRpb24uYXBwZW5kKGRlc2NyaXB0aW9uKVxuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdhZGRfX2RldGFpbHMnKVxuXG4gICAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpXG4gICAgbGFiZWxEYXRlLmFwcGVuZChkYXRlKVxuXG4gICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZF9fcHJpb3JpdHknKVxuICAgIGNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBwcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBwcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYGFkZC1wcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS10b2dnbGUnKVxuICAgIHByaW9yaXR5QnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1ib29rbWFya1wiPjwvaT4nXG5cbiAgICBjb25zdCBwcmlvcml0aWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmlvcml0aWVzLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcmlvcml0eScsICdkcm9wZG93bicsICdoaWRkZW4nKVxuICAgIHByaW9yaXRpZXMuc2V0QXR0cmlidXRlKCdpZCcsIGBhZGQtcHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgY29uc3QgcHJpb3JpdGllc0xpc3QgPSBbJ2hpZ2gnLCAnbWVkJywgJ2xvdycsICdub25lJ11cblxuICAgIGZvciAoY29uc3QgcHJpb3JpdHkgb2YgcHJpb3JpdGllc0xpc3QpIHtcbiAgICAgIGNvbnN0IGxhYmVsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywgYHByaW9yaXR5LSR7cHJpb3JpdHl9LSR7dGhpcy5pZH1gKVxuICAgICAgbGFiZWxQcmlvcml0eS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke3ByaW9yaXR5fWAsIGBwcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICAgIGxhYmVsUHJpb3JpdHkuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWJvb2ttYXJrXCI+PC9pPidcblxuICAgICAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5JylcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByaW9yaXR5KVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByaW9yaXR5LSR7cHJpb3JpdHl9LSR7dGhpcy5pZH1gKVxuXG4gICAgICBwcmlvcml0aWVzLmFwcGVuZChsYWJlbFByaW9yaXR5LCBpbnB1dFByaW9yaXR5KVxuICAgIH1cblxuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZChwcmlvcml0eUJ0biwgcHJpb3JpdGllcylcblxuICAgIGNvbnN0IGZpbmlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmluaXNoLmNsYXNzTGlzdC5hZGQoJ2FkZF9fZmluaXNoJylcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1zdWJtaXQnKVxuICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQWRkIFRhc2snXG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tY2FuY2VsJylcbiAgICBjYW5jZWxCdG4uaW5uZXJIVE1MID0gJ0NhbmNlbCdcblxuICAgIGZpbmlzaC5hcHBlbmQoc3VibWl0QnRuLCBjYW5jZWxCdG4pXG5cbiAgICBjb250ZW50LmFwcGVuZChsYWJlbFRpdGxlLCBsYWJlbERlc2NyaXB0aW9uLCBkZXRhaWxzKVxuICAgIGRldGFpbHMuYXBwZW5kKGxhYmVsRGF0ZSwgcHJpb3JpdHlDb250YWluZXIpXG4gICAgZm9ybS5hcHBlbmQoY29udGVudCwgZmluaXNoKVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kKGZvcm1CdG4sIGZvcm0pXG4gICAgY29udGFpbmVyLmFwcGVuZChmb3JtQ29udGFpbmVyKVxuXG4gICAgdGhpcy5iaW5kVG9nZ2xlKHRoaXMuaGFuZGxlVG9nZ2xlKVxuICAgIHRoaXMuYmluZFByaW9yaXR5TGFiZWwodGhpcy5oYW5kbGVQcmlvcml0eUxhYmVsLmJpbmQodGhpcykpXG4gICAgdGhpcy5iaW5kUmVzZXRQcmlvcml0eSh0aGlzLmhhbmRsZVJlc2V0UHJpb3JpdHkuYmluZCh0aGlzKSlcbiAgfVxuXG4gIC8vIEVuYWJsZSBmb3JtIHRvZ2dsZVxuICBiaW5kVG9nZ2xlIChoYW5kbGVyKSB7XG4gICAgdGhpcy50b2dnbGVCdG4gPSBbZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlPVwiYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1cIl1gKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlPVwiYWRkLXRvZG8tJHt0aGlzLmlkfVwiXWApXVxuICAgIHRoaXMudG9nZ2xlQnRuLmZvckVhY2godG9nZ2xlQnRuID0+IHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpKVxuICB9XG5cbiAgaGFuZGxlVG9nZ2xlIChldmVudCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V2ZW50LnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5kYXRhc2V0LnRvZ2dsZX1gKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICB9XG5cbiAgLy8gRW5hYmxlIHByaW9yaXR5IHRvZ2dsZSBhbmQgY29sb3IgY2hhbmdlIHdoZW4gc2VsZWN0aW5nIGEgcHJpb3JpdHlcbiAgYmluZFByaW9yaXR5TGFiZWwgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICB0aGlzLmxhYmVscy5mb3JFYWNoKGxhYmVsID0+IGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcikpXG4gIH1cblxuICBoYW5kbGVQcmlvcml0eUxhYmVsIChldmVudCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGQtcHJpb3JpdHktJHt0aGlzLmlkfWApLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlPVwiYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1cIl1gKS5zdHlsZS5jb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xhYmVsJykpLmNvbG9yXG4gIH1cblxuICAvLyBSZXNldCBwcmlvcml0eSBjb2xvciB3aGVuIGFkZGluZyBhIHRhc2tcbiAgYmluZFJlc2V0UHJpb3JpdHkgKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWRkLXRvZG8tJHt0aGlzLmlkfSAuYnRuLS1zdWJtaXRgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBoYW5kbGVSZXNldFByaW9yaXR5ICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2dnbGU9XCJhZGQtcHJpb3JpdHktJHt0aGlzLmlkfVwiXWApLnN0eWxlLmNvbG9yID0gJydcbiAgfVxufVxuXG5Ub2RvRm9ybS5jb3VudGVyID0gMFxuIiwiZXhwb3J0IGNsYXNzIFRvZG9MaXN0Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UodGhpcy5tb2RlbC50b2RvcylcbiAgICB0aGlzLm1vZGVsLmJpbmRUb2RvTGlzdENoYW5nZSh0aGlzLm9uVG9kb0xpc3RDaGFuZ2UuYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9uVG9kb0xpc3RDaGFuZ2UgKHRvZG9zKSB7XG4gICAgdGhpcy52aWV3LnJlbmRlcih0b2RvcylcbiAgfVxuXG4gIGhhbmRsZUFkZFRvZG8gKHRvZG8pIHtcbiAgICB0aGlzLm1vZGVsLmFkZFRvZG8odG9kbylcbiAgfVxuXG4gIGhhbmRsZUVkaXRUb2RvICh0b2RvLCBmaWVsZCwgdXBkYXRlKSB7XG4gICAgdGhpcy5tb2RlbC5lZGl0VG9kbyh0b2RvLCBmaWVsZCwgdXBkYXRlKVxuICB9XG5cbiAgaGFuZGxlRGVsZXRlVG9kbyAodG9kbykge1xuICAgIHRoaXMubW9kZWwuZGVsZXRlVG9kbyh0b2RvKVxuICB9XG5cbiAgYmluZEFsbCAoKSB7XG4gICAgdGhpcy52aWV3LmJpbmRBZGRUb2RvKHRoaXMuaGFuZGxlQWRkVG9kby5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGVsZXRlVG9kbyh0aGlzLmhhbmRsZURlbGV0ZVRvZG8uYmluZCh0aGlzKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb0Zvcm0gfSBmcm9tICcuL1RvZG9Gb3JtJ1xuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RNb2RlbCB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBpZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWUgPT09ICcnID8gJ1VudGl0bGVkJyA6IG5hbWVcbiAgICB0aGlzLnRvZG9zID0gW11cbiAgICB0aGlzLmZvcm0gPSBuZXcgVG9kb0Zvcm0oaWQpXG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICBhZGRUb2RvICh0b2RvKSB7XG4gICAgdG9kby5pZCA9IHRoaXMudG9kb3MubGVuZ3RoXG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pXG4gICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlKHRoaXMudG9kb3MpXG4gIH1cblxuICBlZGl0VG9kbyAoaWQsIGZpZWxkLCB1cGRhdGUpIHtcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgICB0b2RvW2ZpZWxkXSA9IHVwZGF0ZVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlKHRoaXMudG9kb3MpXG4gIH1cblxuICBkZWxldGVUb2RvIChpZCkge1xuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpXG4gICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlKHRoaXMudG9kb3MpXG4gIH1cblxuICBiaW5kVG9kb0xpc3RDaGFuZ2UgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlID0gY2FsbGJhY2tcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vVG9kbydcblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0VmlldyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbnMnKVxuICAgIHRoaXMudG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMudG9kb0xpc3QuY2xhc3NMaXN0LmFkZCgndG9kb2xpc3QnKVxuICAgIHRoaXMuaWQgPSArK1RvZG9MaXN0Vmlldy5jb3VudGVyXG4gIH1cblxuICAvLyBDcmVhdGUgYSBzZWN0aW9uXG4gIGNyZWF0ZVNlY3Rpb24gKCkge1xuICAgIHRoaXMuc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5zZWN0aW9uLmNsYXNzTGlzdC5hZGQoYHNlY3Rpb24tJHt0aGlzLmlkfWApXG4gICAgdGhpcy5zZWN0aW9uLnByZXBlbmQodGhpcy50b2RvTGlzdClcbiAgICB0aGlzLnByb2plY3QuYXBwZW5kKHRoaXMuc2VjdGlvbilcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgc2VjdGlvbidzIG5hbWVcbiAgcmVuZGVyTmFtZSAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aGlzLm5hbWUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbl9fbmFtZScpXG4gICAgdGhpcy5uYW1lLmlubmVySFRNTCA9IG5hbWVcbiAgICB0aGlzLnNlY3Rpb24ucHJlcGVuZCh0aGlzLm5hbWUpXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIEFkZCBUb2RvIEZvcm1cbiAgcmVuZGVyRm9ybSAoZm9ybSkge1xuICAgIGZvcm0ucmVuZGVyKHRoaXMuc2VjdGlvbilcbiAgfVxuXG4gIC8vIEdldCB0aGUgQWRkIFRvZG8gRm9ybSBJbnB1dHNcbiAgZ2V0Rm9ybSAoKSB7XG4gICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cInRpdGxlXCJdYClcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHt0aGlzLmlkfSAudG9kby1mb3JtIFtuYW1lPVwiZGVzY3JpcHRpb25cIl1gKVxuICAgIHRoaXMuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cImRhdGVcIl1gKVxuICAgIHRoaXMuc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHt0aGlzLmlkfSAudG9kby1mb3JtIC5idG4tLXN1Ym1pdGApXG4gIH1cblxuICAvLyBHZXQgZm9ybSB2YWx1ZXNcbiAgZ2V0IF90b2RvVGl0bGUgKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9EZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb24udmFsdWVcbiAgfVxuXG4gIGdldCBfdG9kb0RhdGUgKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGUudmFsdWVcbiAgfVxuXG4gIGdldCBfdG9kb1ByaW9yaXR5ICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIC8vIFJlc2V0IGZvcm0gaW5wdXRzXG4gIF9yZXNldElucHV0cyAoKSB7XG4gICAgdGhpcy50aXRsZS52YWx1ZSA9ICcnXG4gICAgdGhpcy5kZXNjcmlwdGlvbi52YWx1ZSA9ICcnXG4gICAgdGhpcy5kYXRlLnZhbHVlID0gJydcblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykuY2hlY2tlZCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBUb2RvIExpc3RcbiAgcmVuZGVyICh0b2Rvcykge1xuICAgIHRoaXMudG9kb0xpc3QuaW5uZXJIVE1MID0gJydcbiAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICAgIHRvZG8ucmVuZGVyKHRoaXMudG9kb0xpc3QpXG4gICAgfVxuICB9XG5cbiAgLy8gRXZlbnQgTGlzdGVuZXJzXG5cbiAgYmluZEFkZFRvZG8gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGhhbmRsZXIobmV3IFRvZG8odGhpcy5fdG9kb1RpdGxlLCB0aGlzLl90b2RvRGVzY3JpcHRpb24sIHRoaXMuX3RvZG9EYXRlLCB0aGlzLl90b2RvUHJpb3JpdHkpKVxuICAgICAgdGhpcy5fcmVzZXRJbnB1dHMoKVxuICAgIH0pXG4gIH1cblxuICBiaW5kRGVsZXRlVG9kbyAoaGFuZGxlcikge1xuICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG8tZG9fX2NoZWNrJykpIHtcbiAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5pZClcbiAgICAgICAgaGFuZGxlcihpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblRvZG9MaXN0Vmlldy5jb3VudGVyID0gMFxuIiwiaW1wb3J0ICcuL3Nhc3MvbWFpbi5zY3NzJ1xuaW1wb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfSBmcm9tICcuL1Byb2plY3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSAnLi9Qcm9qZWN0TW9kZWwnXG5pbXBvcnQgeyBQcm9qZWN0VmlldyB9IGZyb20gJy4vUHJvamVjdFZpZXcnXG5cbmltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tICcuL0FwcENvbnRyb2xsZXInXG5pbXBvcnQgeyBBcHBNb2RlbCB9IGZyb20gJy4vQXBwTW9kZWwnXG5pbXBvcnQgeyBBcHBWaWV3IH0gZnJvbSAnLi9BcHBWaWV3J1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwQ29udHJvbGxlcihuZXcgQXBwTW9kZWwoKSwgbmV3IEFwcFZpZXcoKSlcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIobmV3IFByb2plY3RNb2RlbCgnRGVmYXVsdCcpLCBuZXcgUHJvamVjdFZpZXcoUHJvamVjdE1vZGVsLmNvdW50ZXIpKVxuZGVmYXVsdFByb2plY3Qudmlldy5yZW5kZXJOYW1lKGRlZmF1bHRQcm9qZWN0Lm1vZGVsLm5hbWUpXG5kZWZhdWx0UHJvamVjdC52aWV3LnJlbmRlckZvcm0oZGVmYXVsdFByb2plY3QubW9kZWwuZm9ybSlcbmRlZmF1bHRQcm9qZWN0LnZpZXcuZ2V0Rm9ybSgpXG5kZWZhdWx0UHJvamVjdC5iaW5kQWxsKClcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9