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
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  min-height: calc(100vh - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\nh2 {\n  font-weight: 700;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel {\n  color: rgba(42, 43, 104, 0.5);\n}\n.btn--cancel:hover {\n  color: rgba(42, 43, 104, 0.7);\n}\n.btn--section {\n  color: rgba(42, 43, 104, 0.35);\n  font-weight: 700;\n}\n.btn--section:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.5);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n}\n.btn--section:before, .btn--section:after {\n  content: \"\";\n  background-color: rgba(42, 43, 104, 0.25);\n  height: 2px;\n  flex-grow: 1;\n}\n.btn--section:hover:before, .btn--section:hover:after {\n  background-color: rgba(42, 43, 104, 0.5);\n}\n.btn--section:before {\n  margin-right: 1rem;\n}\n.btn--section:after {\n  margin-left: 1rem;\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-medium {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-gap: 1rem;\n  align-items: start;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n\n.dropdown {\n  transition: all 0.35s linear;\n}\n\n.add__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority {\n  position: relative;\n}\n.add__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n\n.add__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li button {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}", "",{"version":3,"sources":["webpack://src/sass/main.scss","webpack://src/sass/base/_base.scss","webpack://src/sass/base/_typography.scss","webpack://src/sass/utils/_variables.scss","webpack://src/sass/components/_buttons.scss","webpack://src/sass/utils/_mixins.scss","webpack://src/sass/components/_icons.scss","webpack://src/sass/components/_todo.scss","webpack://src/sass/components/_dropdown.scss","webpack://src/sass/layout/_form.scss","webpack://src/sass/layout/_header.scss","webpack://src/sass/layout/_nav.scss","webpack://src/sass/layout/_main.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;;;CAAA;AAKA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;ADCD;;ACCA,gDAAA;AACA;;EAEC,cAAA;ADED;;ACAA;EACC,cAAA;ADGD;;ACDA;EACC,gBAAA;ADID;;ACFA;EACC,YAAA;ADKD;;ACHA;;EAEC,WAAA;EACA,aAAA;ADMD;;ACJA;EACC,yBAAA;EACA,iBAAA;ADOD;;ACJA;;EAEC,YAAA;ADOD;ACLC;;EACC,aAAA;ADQF;;ACJA;EACC,sBAAA;ADOD;;ACJA;EACC,YAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;ADOD;;ACJA;EACC,WAAA;EACA,YAAA;ADOD;;ACJA;EACC,kBAAA;EACA,SAAA;EACA,aAAA;EACA,8BAAA;ADOD;;ACJA;EACC,UAAA;EACA,wBAAA;EACA,gBAAA;EACC,8BAAA;ADOF;;AE5FA;;EAEE,kCCDa;EDEb,mBAAA;EACA,gBAAA;EACA,mBAAA;AF+FF;;AE5FA;EACE,kBAAA;EACA,cAAA;EACA,yBAAA;EACA,cCPc;EDQd,qBAAA;EACA,kBAAA;AF+FF;;AE5FA;EACE,gBAAA;AF+FF;;AE3FE;EACE,WCfW;AH6Gf;AE3FE;EACE,kBAAA;AF6FJ;AE1FE;EAEE,yBAAA;EACA,iBAAA;EACA,sBAAA;AF2FJ;AExFE;EACE,WAAA;AF0FJ;AEvFE;EACE,6BAAA;AFyFJ;AEvFI;EACE,6BAAA;AFyFN;AErFE;EACE,8BAAA;EACA,gBAAA;AFuFJ;AErFI;EACE,8BAAA;AFuFN;;AE7EE;EACE,yBAAA;EACA,cC7DY;ED8DZ,gBAAA;EACA,qBAAA;EACA,gBAAA;AFgFJ;;AE5EA;EACE,0BAAA;AF+EF;AE7EE;EACE,WAAA;AF+EJ;;AE1EA;EACE,gBAAA;EACA,sBAAA;AF6EF;;AE1EA;EACE,gBAAA;AF6EF;;AExEA;;EAEE,kCC9Fa;AHyKf;;AExEA;EACE,gBAAA;AF2EF;;AExEA;EACE,cC7FW;AHwKb;;AExEA;EACE,iBAAA;AF2EF;;AItLA;EACC,YAAA;EACC,gBAAA;EACA,eAAA;AJyLF;AIvLE;EACE,aAAA;AJyLJ;;AIrLA;;EAEE,uBAAA;AJwLF;;AIrLA;EACE,kCAAA;EACA,kBAAA;EACA,qBAAA;AJwLF;AItLE;EACE,kCAAA;AJwLJ;;AIpLA;EACE,wCAAA;EACA,kBAAA;EACA,oCAAA;AJuLF;;AIpLA;EACE,YD0BS;ECzBT,6BAAA;EC3BA,kCAAA;EACA,gBAAA;ED4BA,cAAA;AJwLF;;AIrLA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;AJwLF;AItLE;EAEE,WAAA;EACA,yCAAA;EACA,WAAA;EACA,YAAA;AJuLJ;AIpLE;EAEE,wCAAA;AJqLJ;AIlLE;EACE,kBAAA;AJoLJ;AIjLE;EACE,iBAAA;AJmLJ;;AM9OE;EAIE,2BHsDY;AHwLhB;AM3OE;EDTA,kCAAA;EACA,gBAAA;ALuPF;AM1OE;EACE,YAAA;EACA,6BHRa;AHoPjB;AMzOE;EACE,YHqCO;EEpDT,kCAAA;EACA,gBAAA;AL2PF;AMzOE;EACE,YAAA;EDzBF,kCAAA;EACA,gBAAA;ALqQF;;AMtOE;EACE,cHtBa;AH+PjB;;AM1OE;EACE,cHtBa;AHmQjB;;AM9OE;EACE,cHtBa;AHuQjB;;AMlPE;EACE,cHtBa;AH2QjB;;AK3QI;EACE,YFyBO;AHqPb;;AK/QI;EACE,YFyBO;AHyPb;;AKnRI;EACE,YFyBO;AH6Pb;;AKvRI;EACE,YFyBO;AHiQb;;AKnRI;EACE,cFFO;AHwRb;;AKvRI;EACE,cFFO;AH4Rb;;AK3RI;EACE,cFFO;AHgSb;;AK/RI;EACE,cFFO;AHoSb;;AKnSI;EACE,cFFO;AHwSb;;AMhRA;EACE,YAAA;EACA,cHxCc;EECd,kCAAA;EACA,gBAAA;ECwCA,qBAAA;ANoRF;;AKvTI;EACE,YFsCO;AHoRb;;AK3TI;EACE,YFsCO;AHwRb;;AK/TI;EACE,YFsCO;AH4Rb;;AKnUI;EACE,YFsCO;AHgSb;;AK/TI;EACE,cFMO;AH4Tb;;AKnUI;EACE,cFMO;AHgUb;;AKvUI;EACE,cFMO;AHoUb;;AK3UI;EACE,cFMO;AHwUb;;AM3SA;EACE,YAAA;EDnDA,kCAAA;EACA,gBAAA;ALkWF;;AOzWA;EACE,aAAA;EACA,kDAAA;EACA,cAAA;EACA,kBAAA;AP4WF;AO1WE;EACE,eAAA;AP4WJ;;AQnXA;EACE,4BAAA;ARsXF;;ASvXA;EACE,aAAA;EACA,sBAAA;EACA,yCAAA;AT0XF;ASxXE;EACE,mBAAA;EACA,qBAAA;AT0XJ;ASvXE;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;ATyXJ;;ASrXA;;EAEE,WAAA;EACA,gBAAA;EACA,gBAAA;ATwXF;;ASrXA;EACE,YAAA;ATwXF;;ASrXA;EACE,+CAAA;ATwXF;;ASrXA;EACE,aAAA;EACA,yBAAA;ATwXF;;ASrXA;EACE,kBAAA;ATwXF;AStXE;EACE,eAAA;EACA,UAAA;EACA,oBAAA;ATwXJ;;ASpXA;EACE,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,yCAAA;EACA,uBAAA;EACA,6BAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;ATuXF;ASrXE;EACE,WAAA;EACA,kCAAA;EACA,mCAAA;EACA,6BAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;ATuXJ;ASpXE;EACE,WAAA;EACA,kCAAA;EACA,mCAAA;EACA,gDAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;ATsXJ;ASnXE;EACE,kBAAA;EACA,gBAAA;ATqXJ;;ASjXA;EACE,mBAAA;AToXF;;ASjXA;EACE,oCAAA;AToXF;;ASjXA;EACE,eAAA;AToXF;;AUldA;EACE,eAAA;EACA,mBPGc;EOFd,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,UAAA;AVqdF;AUldE;EACE,aAAA;EACA,OAAA;AVodJ;AUldI;EACE,iBAAA;AVodN;;AWpeA;EAEE,mBRIgB;EQHhB,YAAA;EACA,+CAAA;EACA,4BAAA;AXseF;AWpeE;EACE,sBAAA;EACA,uBAAA;EACA,+CAAA;AXseJ;AWpeI;EACE,mBAAA;AXseN;AWneI;EACE,aAAA;AXqeN;AWneM;EACE,mCAAA;AXqeR;AWleM;EAEE,OAAA;EACA,iBAAA;AXmeR;AW9dE;EACE,WAAA;EACA,iBAAA;AXgeJ;AW9dI;EACE,mCAAA;AXgeN;;AYpgBA;EACE,OAAA;EACA,aAAA;EACA,uBAAA;EACA,iBAAA;AZugBF;;AYpgBA;EACE,WAAA;EACA,gBAAA;AZugBF","sourcesContent":["@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  min-height: calc(100vh - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\nh2 {\n  font-weight: 700;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel {\n  color: rgba(42, 43, 104, 0.5);\n}\n.btn--cancel:hover {\n  color: rgba(42, 43, 104, 0.7);\n}\n.btn--section {\n  color: rgba(42, 43, 104, 0.35);\n  font-weight: 700;\n}\n.btn--section:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.5);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n}\n.btn--section:before, .btn--section:after {\n  content: \"\";\n  background-color: rgba(42, 43, 104, 0.25);\n  height: 2px;\n  flex-grow: 1;\n}\n.btn--section:hover:before, .btn--section:hover:after {\n  background-color: rgba(42, 43, 104, 0.5);\n}\n.btn--section:before {\n  margin-right: 1rem;\n}\n.btn--section:after {\n  margin-left: 1rem;\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-medium {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-gap: 1rem;\n  align-items: start;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n\n.dropdown {\n  transition: all 0.35s linear;\n}\n\n.add__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority {\n  position: relative;\n}\n.add__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n\n.add__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li button {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput,\ntextarea {\n\tborder: none;\n\n\t&:focus {\n\t\toutline: none;\n\t}\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\twidth: 100vw;\n\tmin-height: 100vh;\n\tmax-width: 100%;\n\tmax-height: 100%;\n}\n\n.wrapper {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.content__wrapper {\n\tposition: relative;\n\ttop: 50px;\n\tdisplay: flex;\n\tmin-height: calc(100vh - 50px);\n}\n\n.hidden {\n\topacity: 0;\n\tmax-height: 0 !important;\n\toverflow: hidden;\n  transform: translateY(-.25em);\n}","body,\nbutton {\n  font-family: $font-primary;\n  font-size: .875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: $color-primary;\n  letter-spacing: .5px;\n  text-align: center;\n}\n\nh2 {\n  font-weight: 700;\n}\n\n.btn {\n  &--page--header {\n    color: $color-header;\n  }\n\n  &--icon {\n    font-size: 1.25rem;\n  }\n\n  &--submit,\n  &--cancel {\n    text-transform: uppercase;\n    font-size: .85em;\n    letter-spacing: -.5px;\n  }\n\n  &--submit {\n    color: #fff;\n  }\n\n  &--cancel {\n    color: rgba($color-primary, .5);\n\n    &:hover {\n      color: rgba($color-primary, .7);\n    }\n  }\n\n  &--section {\n    color: rgba($color-primary, .35);\n    font-weight: 700;\n\n    &:hover {\n      color: rgba($color-primary, .75);\n    }\n\n  }\n\n}\n\n// Nav\n\n.nav {\n  &--heading {\n    text-transform: uppercase;\n    color: $color-primary;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 2.5;\n  }\n}\n\n[data-toggle=\"add-project\"] {\n  color: rgba(#000, .75);\n\n  &:hover {\n    color: #000;\n  }\n\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\n// Form\n\ninput,\ntextarea {\n  font-family: $font-primary;\n}\n\n[name=\"title\"] {\n  font-weight: 700;\n}\n\n[name=\"date\"] {\n  color: $color-form;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}","// Fonts\n$font-primary: 'Nanum Gothic', Arial;\n\n\n// Colors\n$color-primary: rgb(42, 43, 104);\n$color-secondary: rgb(238, 240, 241);\n\n$color-header: #fff;\n$color-projects: rgba($color-primary, .5);\n$color-form: rgb(142, 142, 142);\n\n$color-priority: (\n  high: rgb(161, 66, 66),\n  medium: rgb(231, 154, 103),\n  low: rgb(93, 151, 91),\n  none: rgb(199, 199, 199)\n);\n\n$color-date: (\n  all: lighten($color-primary, 15%),\n  today: rgb(235, 153, 99),\n  upcoming: rgb(141, 90, 137),\n  anytime: rgb(122, 122, 122),\n  late: rgb(148, 32, 32)\n);\n\n$color-sort: (\n  title: rgb(48, 92, 48),\n  description: rgb(235, 185, 79),\n  date: rgb(102, 151, 145),\n  priority: map-get($color-priority, high)\n);\n\n// Icons\n\n$icon-priority: \"\\f02e\";\n\n$icons-date: (\n  all: \"\\f073\",\n  today: \"\\f272\",\n  upcoming: \"\\f274\",\n  anytime: \"\\f133\",\n);\n\n$icons-caret: (\n  up: \"\\f0d8\",\n  down: \"\\f0d7\",\n  right: \"\\f0da\"\n);\n\n$icons-sort: (\n  title: \"\\f328\",\n  description: \"\\f249\",\n  date: \"\\f073\",\n  priority: $icon-priority,\n);\n\n$icon-add: \"\\f067\";\n\n// Others\n$margin-indent: 0 .25rem 0 1.25rem;","button {\n\tborder: none;\n  background: none;\n  cursor: pointer;\n  \n  &:focus {\n    outline: none;\n  }\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: .15rem .5rem;\n}\n  \n.btn--submit {\n  background: rgba($color-primary, .5);\n  border-radius: 5px;\n  margin-right: .25rem;\n\n  &:hover {\n    background: rgba($color-primary, .7);\n  }\n}\n\n.btn--cancel {\n  border: 1px solid rgba($color-primary, .5);\n  border-radius: 5px;\n  background: rgba(#fff, .5);\n}\n\n.btn--add:before {\n  content: $icon-add;\n  color: rgba($color-primary, .5);\n  @include font-awesome-700();\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n\n  &:before,\n  &:after {\n    content: '';\n    background-color: rgba($color-primary, .25);\n    height: 2px;\n    flex-grow: 1;\n  }\n\n  &:hover:before,\n  &:hover:after {\n    background-color: rgba($color-primary, .5);\n  }\n\n  &:before {\n    margin-right: 1rem;\n  }\n\n  &:after {\n    margin-left: 1rem;\n  }\n\n}","@mixin font-awesome-400() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n@mixin font-awesome-700() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n@mixin icon-content($target, $map) {\n  @each $key, $icon in $map {\n    .#{$target}-#{$key}::before {\n      content: $icon;\n    }\n  }\n}\n\n@mixin icon-color($target, $map) {\n  @each $key, $color in $map {\n    .#{$target}-#{$key}::before {\n      color: $color;\n    }\n  }\n}","// NAV-ICONS\n\n.nav {\n  &__to-do li:before,\n  &__projects li:before,\n  &__filters li:before,\n  &__sorts li:before {\n    margin: $margin-indent;\n  }\n\n  &__to-do li:before,\n  &__sorts li:before {\n    @include font-awesome-400();\n  }\n\n  &__projects li:before {\n    content: \"⚫\";\n    color: $color-projects;\n  }\n\n  .project_list__add:before {\n    content: $icon-add;\n    @include font-awesome-700();\n  }\n\n  &__filters li:before {\n    content: \"\\f02e\";\n    @include font-awesome-400();\n  }\n}\n\n// Color Priority Icons\n@each $level, $color in $color-priority {\n  .priority-#{$level} {\n    color: $color;\n  }\n}\n\n// Date Icons\n@include icon-content('date', $icons-date);\n@include icon-color('date', $color-date);\n\n// Category Icons\n.nav--heading:before {\n  content: map-get($icons-caret, down);\n  color: $color-primary;\n  @include font-awesome-700();\n  margin-right: .75rem;\n}\n\n// Sort Icons\n@include icon-content('sort', $icons-sort);\n@include icon-color('sort', $color-sort);\n\n// MAIN ICONS\n\n.main__header li:before {\n  content: map-get($icons-caret, down);\n  @include font-awesome-700();\n}",".to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-gap: 1rem;\n  align-items: start;\n  \n  &__check {\n    margin-top: 7px;\n  }\n\n}",".dropdown {\n  transition: all .35s linear;\n}",".add__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba($color-primary, .35);\n\n  &--todo {\n    border-radius: 10px;\n    padding: .25rem 1rem;\n  }\n\n  &--project {\n    border-radius: 5px;\n    margin: 0 1rem;\n    padding: .15rem;\n  }\n}\n\ninput[type=\"text\"],\ntextarea {\n  width: 100%;\n  padding: .25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=\"title\"] {\n  border-bottom: 1px solid rgba($color-primary, .1);\n}\n\n.add__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority {\n  position: relative;\n\n  input[type=\"radio\"] {\n    position: fixed;\n    opacity: 0;\n    pointer-events: none;\n  }\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba($color-primary, .35);\n  padding: .25rem .5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n\n  &:before {\n    content: '';\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #fff;\n    position: absolute;\n    top: -5px;\n    left: 15px;\n    z-index: 1;\n  }\n\n  &:after {\n    content: '';\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid rgba($color-primary, .35);\n    position: absolute;\n    top: -6px;\n    left: 14px;\n  }\n\n  label {\n    text-align: center;\n    margin: 0 .5rem;\n  }\n}\n\n.add__finish {\n  margin: .5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(#fff, .5);\n}\n\nlabel {\n  cursor: pointer;\n}\n",".page__header {\n  position: fixed;\n  background: $color-primary;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n  \n\n  ul {\n    display: flex;\n    flex: 1;\n\n    & li:last-child {\n      margin-left: auto;\n    }\n  }\n}",".nav {\n  \n  background: $color-secondary;\n  width: 250px;\n  border-right: 1px solid rgba($color-primary, .25);\n  padding: 2rem .25rem 0 2rem;\n\n  &__category {\n    margin-bottom: .75rem;\n    padding-bottom: .75rem;\n    border-bottom: 1px solid rgba($color-primary, .1);\n\n    &:last-of-type {\n      border-bottom: none;\n    }\n\n    li {\n      display: flex;\n      \n      &:hover {\n        background: rgba($color-primary, .04);\n      }\n\n      button {\n        // Makes the whole line clickable instead of just the text.\n        flex: 1;\n        text-align: start;\n      }\n    }\n  }\n\n  &--heading {\n    width: 100%;\n    text-align: start;\n    \n    &:hover {\n      background: rgba($color-primary, .07);\n    }\n  }\n\n}","main {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}"],"sourceRoot":""}]);
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
    this.counter = 0;
    this.view.bindAddProject(this.handleAddProject.bind(this));
    this.view.bindToggle(this.handleToggle.bind(this));
  }

  handleAddProject(name) {
    const project = new _ProjectController__WEBPACK_IMPORTED_MODULE_0__["ProjectController"](new _ProjectModel__WEBPACK_IMPORTED_MODULE_1__["ProjectModel"](name), new _ProjectView__WEBPACK_IMPORTED_MODULE_2__["ProjectView"](_ProjectModel__WEBPACK_IMPORTED_MODULE_1__["ProjectModel"].counter));
    this.model.addProject(project);
    project.view.renderName(name);
    project.view.renderBtn(name);
    project.view.renderForm(project.model.form);
    project.view.getForm();
    project.bindAll();
  }

  handleToggle(event) {
    document.querySelector(`#${event.target.dataset.toggle}`).classList.toggle('hidden');
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
    // Container
    this.container = document.querySelector('.content'); // Form to create new projects

    this.projectInput = document.querySelector('.add--project [name="name"]');
    this.projectSubmit = document.querySelector('.add--project .btn--submit'); // Sort tasks

    this.sortTitle = document.querySelector('#sort-title');
    this.sortDescription = document.querySelector('#sort-description');
    this.sortDate = document.querySelector('#sort-date');
    this.sortPriority = document.querySelector('#sort-priority'); // Filter tasks
    // Toggle Navigation

    this.navBtn = document.querySelector('[data-toggle="nav"]'); // Toggle categories

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
      this.container.innerHTML = '';
      handler(this._projectName);

      this._resetInput();
    });
  }

  bindToggle(handler) {
    this.toggleBtn.forEach(toggleBtn => toggleBtn.addEventListener('click', handler));
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
    this.name = name;
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
    this.project = document.createElement('div');
    this.project.setAttribute('id', `project-${id}`);
    this.sections = document.createElement('div');
    this.sections.classList.add('sections');
    this.project.append(this.sections);
    this.container.append(this.project);
    this.id = id;
  } // Render the name of the project


  renderName(name) {
    this.name = document.createElement('h1');
    this.name.classList.add('project__name');
    this.name.innerHTML = name;
    this.project.prepend(this.name);
  } // Render the navigation button linked to the project


  renderBtn(name) {
    this.li = document.createElement('li');
    this.button = document.createElement('button');
    this.button.classList.add('btn', 'btn--filter');
    this.button.setAttribute('type', 'button');
    this.button.setAttribute('data-filter', `project-${this.id}`);
    this.button.innerHTML = name;
    this.li.append(this.button);
    document.querySelector('#projects_list').append(this.li);
  } // Render the add section form


  renderForm(form) {
    form.render(this.project);
  } // Get the add section form inputs


  getForm() {
    this.name = document.querySelector(`#section-form-${this.id} [name="section"]`);
    this.submit = document.querySelector(`#section-form-${this.id} .btn--submit`);
  } // Get Section's Name from the form


  get _sectionName() {
    return this.name.value;
  } // Reset form input


  _resetInput() {
    this.name.value = '';
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

  render(container) {
    const formContainer = document.createElement('div');
    formContainer.classList.add('add__section');
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
    container.append(formContainer);
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
  constructor(title, description, date = 'N/A', priority = 'none') {
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
    console.log(this.id);
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
  constructor(name) {
    this.name = name;
    this.todos = [];
    this.form = new _TodoForm__WEBPACK_IMPORTED_MODULE_0__["TodoForm"]();
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
const bigProject = new _ProjectController__WEBPACK_IMPORTED_MODULE_1__["ProjectController"](new _ProjectModel__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"]('big big'), new _ProjectView__WEBPACK_IMPORTED_MODULE_3__["ProjectView"](_ProjectModel__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"].counter));
bigProject.view.renderForm(bigProject.model.form);
bigProject.view.getForm();
bigProject.bindAll();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9kb0xpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL21haW4uc2Nzcz82YTE3Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsIkFwcENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsIm1vZGVsIiwidmlldyIsImNvdW50ZXIiLCJiaW5kQWRkUHJvamVjdCIsImhhbmRsZUFkZFByb2plY3QiLCJiaW5kIiwiYmluZFRvZ2dsZSIsImhhbmRsZVRvZ2dsZSIsIm5hbWUiLCJwcm9qZWN0IiwiUHJvamVjdENvbnRyb2xsZXIiLCJQcm9qZWN0TW9kZWwiLCJQcm9qZWN0VmlldyIsImFkZFByb2plY3QiLCJyZW5kZXJOYW1lIiwicmVuZGVyQnRuIiwicmVuZGVyRm9ybSIsImZvcm0iLCJnZXRGb3JtIiwiYmluZEFsbCIsImV2ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0IiwiZGF0YXNldCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsIkFwcE1vZGVsIiwicHJvamVjdHMiLCJBcHBWaWV3IiwiY29udGFpbmVyIiwicHJvamVjdElucHV0IiwicHJvamVjdFN1Ym1pdCIsInNvcnRUaXRsZSIsInNvcnREZXNjcmlwdGlvbiIsInNvcnREYXRlIiwic29ydFByaW9yaXR5IiwibmF2QnRuIiwidG9nZ2xlQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsIl9wcm9qZWN0TmFtZSIsInZhbHVlIiwiX3Jlc2V0SW5wdXQiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVySFRNTCIsImZvckVhY2giLCJvblByb2plY3RDaGFuZ2UiLCJ0b2RvTGlzdHMiLCJiaW5kUHJvamVjdENoYW5nZSIsInJlbmRlciIsImhhbmRsZUFkZFRvZG9MaXN0IiwidG9kb0xpc3QiLCJhZGRUb2RvTGlzdCIsImhhbmRsZURlbGV0ZVRvZG9MaXN0IiwiZGVsZXRlVG9kb0xpc3QiLCJiaW5kQWRkU2VjdGlvbiIsIlNlY3Rpb25Gb3JtIiwiZWRpdFRvZG9MaXN0IiwidXBkYXRlIiwiZmlsdGVyIiwiY2FsbGJhY2siLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic2VjdGlvbnMiLCJhZGQiLCJhcHBlbmQiLCJwcmVwZW5kIiwibGkiLCJidXR0b24iLCJzdWJtaXQiLCJfc2VjdGlvbk5hbWUiLCJjcmVhdGVTZWN0aW9uIiwidG9kb3MiLCJUb2RvTGlzdENvbnRyb2xsZXIiLCJUb2RvTGlzdE1vZGVsIiwiVG9kb0xpc3RWaWV3IiwiZm9ybUNvbnRhaW5lciIsImZvcm1CdG4iLCJsYWJlbE5hbWUiLCJmaW5pc2giLCJzdWJtaXRCdG4iLCJjYW5jZWxCdG4iLCJUb2RvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJwcmlvcml0eSIsInRvZG9FbGVtIiwidG9kb0NoZWNrIiwiY29tcG9uZW50cyIsImNvbXBvbmVudCIsInRvZG9Db21wb25lbnQiLCJ0b2RvUHJpb3JpdHkiLCJUb2RvRm9ybSIsImxhYmVsVGl0bGUiLCJsYWJlbERlc2NyaXB0aW9uIiwiZGV0YWlscyIsImxhYmVsRGF0ZSIsInByaW9yaXR5Q29udGFpbmVyIiwicHJpb3JpdHlCdG4iLCJwcmlvcml0aWVzIiwicHJpb3JpdGllc0xpc3QiLCJsYWJlbFByaW9yaXR5IiwiaW5wdXRQcmlvcml0eSIsImJpbmRQcmlvcml0eUxhYmVsIiwiaGFuZGxlUHJpb3JpdHlMYWJlbCIsImJpbmRSZXNldFByaW9yaXR5IiwiaGFuZGxlUmVzZXRQcmlvcml0eSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZXN0IiwibGFiZWxzIiwibGFiZWwiLCJzdHlsZSIsImNvbG9yIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9uVG9kb0xpc3RDaGFuZ2UiLCJiaW5kVG9kb0xpc3RDaGFuZ2UiLCJoYW5kbGVBZGRUb2RvIiwidG9kbyIsImFkZFRvZG8iLCJoYW5kbGVFZGl0VG9kbyIsImZpZWxkIiwiZWRpdFRvZG8iLCJoYW5kbGVEZWxldGVUb2RvIiwiZGVsZXRlVG9kbyIsImJpbmRBZGRUb2RvIiwiYmluZERlbGV0ZVRvZG8iLCJzZWN0aW9uIiwiX3RvZG9UaXRsZSIsIl90b2RvRGVzY3JpcHRpb24iLCJfdG9kb0RhdGUiLCJfdG9kb1ByaW9yaXR5IiwiX3Jlc2V0SW5wdXRzIiwiY2hlY2tlZCIsImNvbnRhaW5zIiwicGFyc2VJbnQiLCJwYXJlbnRFbGVtZW50IiwiYXBwIiwiYmlnUHJvamVjdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUM0RjtBQUM1Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsc0JBQXNCLG1tQkFBbW1CLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLEdBQUcsaUpBQWlKLG1CQUFtQixHQUFHLFVBQVUsbUJBQW1C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QWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sV0FBVyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxV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QUNBMEksVUFBVSxDQUFDM0ksSUFBWCxDQUFnQmUsVUFBaEIsQ0FBMkI0SCxVQUFVLENBQUM1SSxLQUFYLENBQWlCaUIsSUFBNUM7QUFDQTJILFVBQVUsQ0FBQzNJLElBQVgsQ0FBZ0JpQixPQUFoQjtBQUNBMEgsVUFBVSxDQUFDekgsT0FBWCxHOzs7Ozs7Ozs7OztBQ2RBLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsNE1BQW9HOztBQUV0STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50X193cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnRuLS1wYWdlLS1oZWFkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWNhbmNlbCB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLmJ0bi0tY2FuY2VsOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9ZGF0ZV0ge1xcbiAgY29sb3I6ICM4ZThlOGU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG5cXG4uYnRuLS1jYW5jZWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmJ0bi0tYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXI6YmVmb3JlLCAuYnRuLS1zZWN0aW9uOmhvdmVyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5idG4tLXNlY3Rpb246YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUsIC5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMCAxLjI1cmVtO1xcbn1cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5uYXYgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2X19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZGl1bSB7XFxuICBjb2xvcjogI2U3OWE2NztcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogIzVkOTc1YjtcXG59XFxuXFxuLnByaW9yaXR5LW5vbmUge1xcbiAgY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibJcXFwiO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibRcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Es1xcXCI7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNDA0MjllO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWI5OTYzO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOGQ1YTg5O1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29sb3I6ICM3YTdhN2E7XFxufVxcblxcbi5kYXRlLWxhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzk0MjAyMDtcXG59XFxuXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvjKhcXFwiO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYlcXFwiO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29sb3I6ICMzMDVjMzA7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYmI5NGY7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzY2OTc5MTtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG4udG8tZG9fX2NoZWNrIHtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBsaW5lYXI7XFxufVxcblxcbi5hZGRfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG59XFxuLmFkZF9fY29udGVudC0tdG9kbyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbn1cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgcGFkZGluZzogMC4xNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbltuYW1lPXRpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWRkX19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTZweDtcXG4gIGxlZnQ6IDE0cHg7XFxufVxcbi5hZGQtcHJpb3JpdHkgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuXFxuLmFkZF9fZmluaXNoIHtcXG4gIG1hcmdpbjogMC41cmVtIDFyZW07XFxufVxcblxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYWdlX19oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogIzJhMmI2ODtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIGxpOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5uYXYge1xcbiAgYmFja2dyb3VuZDogI2VlZjBmMTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgcGFkZGluZzogMnJlbSAwLjI1cmVtIDAgMnJlbTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5Omxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA0KTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkgYnV0dG9uIHtcXG4gIGZsZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDcpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvYmFzZS9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvYmFzZS9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvdXRpbHMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvdXRpbHMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9faWNvbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX3RvZG8uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX2Ryb3Bkb3duLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX25hdi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7O0VBYUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBRENEOztBQ0NBLGdEQUFBO0FBQ0E7O0VBRUMsY0FBQTtBREVEOztBQ0FBO0VBQ0MsY0FBQTtBREdEOztBQ0RBO0VBQ0MsZ0JBQUE7QURJRDs7QUNGQTtFQUNDLFlBQUE7QURLRDs7QUNIQTs7RUFFQyxXQUFBO0VBQ0EsYUFBQTtBRE1EOztBQ0pBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBRE9EOztBQ0pBOztFQUVDLFlBQUE7QURPRDtBQ0xDOztFQUNDLGFBQUE7QURRRjs7QUNKQTtFQUNDLHNCQUFBO0FET0Q7O0FDSkE7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURPRDs7QUNKQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FET0Q7O0FDSkE7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QURPRDs7QUNKQTtFQUNDLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0MsOEJBQUE7QURPRjs7QUU1RkE7O0VBRUUsa0NDRGE7RURFYixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUYrRkY7O0FFNUZBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQ1BjO0VEUWQscUJBQUE7RUFDQSxrQkFBQTtBRitGRjs7QUU1RkE7RUFDRSxnQkFBQTtBRitGRjs7QUUzRkU7RUFDRSxXQ2ZXO0FINkdmO0FFM0ZFO0VBQ0Usa0JBQUE7QUY2Rko7QUUxRkU7RUFFRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUYyRko7QUV4RkU7RUFDRSxXQUFBO0FGMEZKO0FFdkZFO0VBQ0UsNkJBQUE7QUZ5Rko7QUV2Rkk7RUFDRSw2QkFBQTtBRnlGTjtBRXJGRTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7QUZ1Rko7QUVyRkk7RUFDRSw4QkFBQTtBRnVGTjs7QUU3RUU7RUFDRSx5QkFBQTtFQUNBLGNDN0RZO0VEOERaLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBRmdGSjs7QUU1RUE7RUFDRSwwQkFBQTtBRitFRjtBRTdFRTtFQUNFLFdBQUE7QUYrRUo7O0FFMUVBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBRjZFRjs7QUUxRUE7RUFDRSxnQkFBQTtBRjZFRjs7QUV4RUE7O0VBRUUsa0NDOUZhO0FIeUtmOztBRXhFQTtFQUNFLGdCQUFBO0FGMkVGOztBRXhFQTtFQUNFLGNDN0ZXO0FId0tiOztBRXhFQTtFQUNFLGlCQUFBO0FGMkVGOztBSXRMQTtFQUNDLFlBQUE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUp5TEY7QUl2TEU7RUFDRSxhQUFBO0FKeUxKOztBSXJMQTs7RUFFRSx1QkFBQTtBSndMRjs7QUlyTEE7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUp3TEY7QUl0TEU7RUFDRSxrQ0FBQTtBSndMSjs7QUlwTEE7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUp1TEY7O0FJcExBO0VBQ0UsWUQwQlM7RUN6QlQsNkJBQUE7RUMzQkEsa0NBQUE7RUFDQSxnQkFBQTtFRDRCQSxjQUFBO0FKd0xGOztBSXJMQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FKd0xGO0FJdExFO0VBRUUsV0FBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUp1TEo7QUlwTEU7RUFFRSx3Q0FBQTtBSnFMSjtBSWxMRTtFQUNFLGtCQUFBO0FKb0xKO0FJakxFO0VBQ0UsaUJBQUE7QUptTEo7O0FNOU9FO0VBSUUsMkJIc0RZO0FId0xoQjtBTTNPRTtFRFRBLGtDQUFBO0VBQ0EsZ0JBQUE7QUx1UEY7QU0xT0U7RUFDRSxZQUFBO0VBQ0EsNkJIUmE7QUhvUGpCO0FNek9FO0VBQ0UsWUhxQ087RUVwRFQsa0NBQUE7RUFDQSxnQkFBQTtBTDJQRjtBTXpPRTtFQUNFLFlBQUE7RUR6QkYsa0NBQUE7RUFDQSxnQkFBQTtBTHFRRjs7QU10T0U7RUFDRSxjSHRCYTtBSCtQakI7O0FNMU9FO0VBQ0UsY0h0QmE7QUhtUWpCOztBTTlPRTtFQUNFLGNIdEJhO0FIdVFqQjs7QU1sUEU7RUFDRSxjSHRCYTtBSDJRakI7O0FLM1FJO0VBQ0UsWUZ5Qk87QUhxUGI7O0FLL1FJO0VBQ0UsWUZ5Qk87QUh5UGI7O0FLblJJO0VBQ0UsWUZ5Qk87QUg2UGI7O0FLdlJJO0VBQ0UsWUZ5Qk87QUhpUWI7O0FLblJJO0VBQ0UsY0ZGTztBSHdSYjs7QUt2Ukk7RUFDRSxjRkZPO0FINFJiOztBSzNSSTtFQUNFLGNGRk87QUhnU2I7O0FLL1JJO0VBQ0UsY0ZGTztBSG9TYjs7QUtuU0k7RUFDRSxjRkZPO0FId1NiOztBTWhSQTtFQUNFLFlBQUE7RUFDQSxjSHhDYztFRUNkLGtDQUFBO0VBQ0EsZ0JBQUE7RUN3Q0EscUJBQUE7QU5vUkY7O0FLdlRJO0VBQ0UsWUZzQ087QUhvUmI7O0FLM1RJO0VBQ0UsWUZzQ087QUh3UmI7O0FLL1RJO0VBQ0UsWUZzQ087QUg0UmI7O0FLblVJO0VBQ0UsWUZzQ087QUhnU2I7O0FLL1RJO0VBQ0UsY0ZNTztBSDRUYjs7QUtuVUk7RUFDRSxjRk1PO0FIZ1ViOztBS3ZVSTtFQUNFLGNGTU87QUhvVWI7O0FLM1VJO0VBQ0UsY0ZNTztBSHdVYjs7QU0zU0E7RUFDRSxZQUFBO0VEbkRBLGtDQUFBO0VBQ0EsZ0JBQUE7QUxrV0Y7O0FPeldBO0VBQ0UsYUFBQTtFQUNBLGtEQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FQNFdGO0FPMVdFO0VBQ0UsZUFBQTtBUDRXSjs7QVFuWEE7RUFDRSw0QkFBQTtBUnNYRjs7QVN2WEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtBVDBYRjtBU3hYRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QVQwWEo7QVN2WEU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBVHlYSjs7QVNyWEE7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QVR3WEY7O0FTclhBO0VBQ0UsWUFBQTtBVHdYRjs7QVNyWEE7RUFDRSwrQ0FBQTtBVHdYRjs7QVNyWEE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QVR3WEY7O0FTclhBO0VBQ0Usa0JBQUE7QVR3WEY7QVN0WEU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FUd1hKOztBU3BYQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FUdVhGO0FTclhFO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FUdVhKO0FTcFhFO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QVRzWEo7QVNuWEU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FUcVhKOztBU2pYQTtFQUNFLG1CQUFBO0FUb1hGOztBU2pYQTtFQUNFLG9DQUFBO0FUb1hGOztBU2pYQTtFQUNFLGVBQUE7QVRvWEY7O0FVbGRBO0VBQ0UsZUFBQTtFQUNBLG1CUEdjO0VPRmQsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBVnFkRjtBVWxkRTtFQUNFLGFBQUE7RUFDQSxPQUFBO0FWb2RKO0FVbGRJO0VBQ0UsaUJBQUE7QVZvZE47O0FXcGVBO0VBRUUsbUJSSWdCO0VRSGhCLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLDRCQUFBO0FYc2VGO0FXcGVFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0FYc2VKO0FXcGVJO0VBQ0UsbUJBQUE7QVhzZU47QVduZUk7RUFDRSxhQUFBO0FYcWVOO0FXbmVNO0VBQ0UsbUNBQUE7QVhxZVI7QVdsZU07RUFFRSxPQUFBO0VBQ0EsaUJBQUE7QVhtZVI7QVc5ZEU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QVhnZUo7QVc5ZEk7RUFDRSxtQ0FBQTtBWGdlTjs7QVlwZ0JBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FadWdCRjs7QVlwZ0JBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FadWdCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50X193cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnRuLS1wYWdlLS1oZWFkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWNhbmNlbCB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLmJ0bi0tY2FuY2VsOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9ZGF0ZV0ge1xcbiAgY29sb3I6ICM4ZThlOGU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG5cXG4uYnRuLS1jYW5jZWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmJ0bi0tYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXI6YmVmb3JlLCAuYnRuLS1zZWN0aW9uOmhvdmVyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5idG4tLXNlY3Rpb246YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUsIC5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMCAxLjI1cmVtO1xcbn1cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5uYXYgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2X19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZGl1bSB7XFxuICBjb2xvcjogI2U3OWE2NztcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogIzVkOTc1YjtcXG59XFxuXFxuLnByaW9yaXR5LW5vbmUge1xcbiAgY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibJcXFwiO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibRcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Es1xcXCI7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNDA0MjllO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWI5OTYzO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOGQ1YTg5O1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29sb3I6ICM3YTdhN2E7XFxufVxcblxcbi5kYXRlLWxhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzk0MjAyMDtcXG59XFxuXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvjKhcXFwiO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYlcXFwiO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29sb3I6ICMzMDVjMzA7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYmI5NGY7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzY2OTc5MTtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG4udG8tZG9fX2NoZWNrIHtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBsaW5lYXI7XFxufVxcblxcbi5hZGRfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG59XFxuLmFkZF9fY29udGVudC0tdG9kbyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbn1cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgcGFkZGluZzogMC4xNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbltuYW1lPXRpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWRkX19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTZweDtcXG4gIGxlZnQ6IDE0cHg7XFxufVxcbi5hZGQtcHJpb3JpdHkgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuXFxuLmFkZF9fZmluaXNoIHtcXG4gIG1hcmdpbjogMC41cmVtIDFyZW07XFxufVxcblxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYWdlX19oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogIzJhMmI2ODtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIGxpOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5uYXYge1xcbiAgYmFja2dyb3VuZDogI2VlZjBmMTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgcGFkZGluZzogMnJlbSAwLjI1cmVtIDAgMnJlbTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5Omxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA0KTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkgYnV0dG9uIHtcXG4gIGZsZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDcpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbn1cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXG5cXHQmOmZvY3VzIHtcXG5cXHRcXHRvdXRsaW5lOiBub25lO1xcblxcdH1cXG59XFxuXFxuKiB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogNTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjI1ZW0pO1xcbn1cIixcImJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbiAgZm9udC1zaXplOiAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnRuIHtcXG4gICYtLXBhZ2UtLWhlYWRlciB7XFxuICAgIGNvbG9yOiAkY29sb3ItaGVhZGVyO1xcbiAgfVxcblxcbiAgJi0taWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG5cXG4gICYtLXN1Ym1pdCxcXG4gICYtLWNhbmNlbCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogLjg1ZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAtLjVweDtcXG4gIH1cXG5cXG4gICYtLXN1Ym1pdCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcblxcbiAgJi0tY2FuY2VsIHtcXG4gICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJi0tc2VjdGlvbiB7XFxuICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjc1KTtcXG4gICAgfVxcblxcbiAgfVxcblxcbn1cXG5cXG4vLyBOYXZcXG5cXG4ubmF2IHtcXG4gICYtLWhlYWRpbmcge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMi41O1xcbiAgfVxcbn1cXG5cXG5bZGF0YS10b2dnbGU9XFxcImFkZC1wcm9qZWN0XFxcIl0ge1xcbiAgY29sb3I6IHJnYmEoIzAwMCwgLjc1KTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gIH1cXG5cXG59XFxuXFxuLm1haW5fX2hlYWRlciBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi50by1kb19fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLy8gRm9ybVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbn1cXG5cXG5bbmFtZT1cXFwidGl0bGVcXFwiXSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5bbmFtZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGNvbG9yOiAkY29sb3ItZm9ybTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XCIsXCIvLyBGb250c1xcbiRmb250LXByaW1hcnk6ICdOYW51bSBHb3RoaWMnLCBBcmlhbDtcXG5cXG5cXG4vLyBDb2xvcnNcXG4kY29sb3ItcHJpbWFyeTogcmdiKDQyLCA0MywgMTA0KTtcXG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMjM4LCAyNDAsIDI0MSk7XFxuXFxuJGNvbG9yLWhlYWRlcjogI2ZmZjtcXG4kY29sb3ItcHJvamVjdHM6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4kY29sb3ItZm9ybTogcmdiKDE0MiwgMTQyLCAxNDIpO1xcblxcbiRjb2xvci1wcmlvcml0eTogKFxcbiAgaGlnaDogcmdiKDE2MSwgNjYsIDY2KSxcXG4gIG1lZGl1bTogcmdiKDIzMSwgMTU0LCAxMDMpLFxcbiAgbG93OiByZ2IoOTMsIDE1MSwgOTEpLFxcbiAgbm9uZTogcmdiKDE5OSwgMTk5LCAxOTkpXFxuKTtcXG5cXG4kY29sb3ItZGF0ZTogKFxcbiAgYWxsOiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxNSUpLFxcbiAgdG9kYXk6IHJnYigyMzUsIDE1MywgOTkpLFxcbiAgdXBjb21pbmc6IHJnYigxNDEsIDkwLCAxMzcpLFxcbiAgYW55dGltZTogcmdiKDEyMiwgMTIyLCAxMjIpLFxcbiAgbGF0ZTogcmdiKDE0OCwgMzIsIDMyKVxcbik7XFxuXFxuJGNvbG9yLXNvcnQ6IChcXG4gIHRpdGxlOiByZ2IoNDgsIDkyLCA0OCksXFxuICBkZXNjcmlwdGlvbjogcmdiKDIzNSwgMTg1LCA3OSksXFxuICBkYXRlOiByZ2IoMTAyLCAxNTEsIDE0NSksXFxuICBwcmlvcml0eTogbWFwLWdldCgkY29sb3ItcHJpb3JpdHksIGhpZ2gpXFxuKTtcXG5cXG4vLyBJY29uc1xcblxcbiRpY29uLXByaW9yaXR5OiBcXFwiXFxcXGYwMmVcXFwiO1xcblxcbiRpY29ucy1kYXRlOiAoXFxuICBhbGw6IFxcXCJcXFxcZjA3M1xcXCIsXFxuICB0b2RheTogXFxcIlxcXFxmMjcyXFxcIixcXG4gIHVwY29taW5nOiBcXFwiXFxcXGYyNzRcXFwiLFxcbiAgYW55dGltZTogXFxcIlxcXFxmMTMzXFxcIixcXG4pO1xcblxcbiRpY29ucy1jYXJldDogKFxcbiAgdXA6IFxcXCJcXFxcZjBkOFxcXCIsXFxuICBkb3duOiBcXFwiXFxcXGYwZDdcXFwiLFxcbiAgcmlnaHQ6IFxcXCJcXFxcZjBkYVxcXCJcXG4pO1xcblxcbiRpY29ucy1zb3J0OiAoXFxuICB0aXRsZTogXFxcIlxcXFxmMzI4XFxcIixcXG4gIGRlc2NyaXB0aW9uOiBcXFwiXFxcXGYyNDlcXFwiLFxcbiAgZGF0ZTogXFxcIlxcXFxmMDczXFxcIixcXG4gIHByaW9yaXR5OiAkaWNvbi1wcmlvcml0eSxcXG4pO1xcblxcbiRpY29uLWFkZDogXFxcIlxcXFxmMDY3XFxcIjtcXG5cXG4vLyBPdGhlcnNcXG4kbWFyZ2luLWluZGVudDogMCAuMjVyZW0gMCAxLjI1cmVtO1wiLFwiYnV0dG9uIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgXFxuICAmOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAuMTVyZW0gLjVyZW07XFxufVxcbiAgXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogLjI1cmVtO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43KTtcXG4gIH1cXG59XFxuXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoI2ZmZiwgLjUpO1xcbn1cXG5cXG4uYnRuLS1hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICRpY29uLWFkZDtcXG4gIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcblxcbiAgJjpiZWZvcmUsXFxuICAmOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4yNSk7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICB9XFxuXFxuICAmOmhvdmVyOmJlZm9yZSxcXG4gICY6aG92ZXI6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICB9XFxuXFxuICAmOmJlZm9yZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIH1cXG5cXG4gICY6YWZ0ZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIH1cXG5cXG59XCIsXCJAbWl4aW4gZm9udC1hd2Vzb21lLTQwMCgpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5AbWl4aW4gZm9udC1hd2Vzb21lLTcwMCgpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5AbWl4aW4gaWNvbi1jb250ZW50KCR0YXJnZXQsICRtYXApIHtcXG4gIEBlYWNoICRrZXksICRpY29uIGluICRtYXAge1xcbiAgICAuI3skdGFyZ2V0fS0jeyRrZXl9OjpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6ICRpY29uO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtaXhpbiBpY29uLWNvbG9yKCR0YXJnZXQsICRtYXApIHtcXG4gIEBlYWNoICRrZXksICRjb2xvciBpbiAkbWFwIHtcXG4gICAgLiN7JHRhcmdldH0tI3ska2V5fTo6YmVmb3JlIHtcXG4gICAgICBjb2xvcjogJGNvbG9yO1xcbiAgICB9XFxuICB9XFxufVwiLFwiLy8gTkFWLUlDT05TXFxuXFxuLm5hdiB7XFxuICAmX190by1kbyBsaTpiZWZvcmUsXFxuICAmX19wcm9qZWN0cyBsaTpiZWZvcmUsXFxuICAmX19maWx0ZXJzIGxpOmJlZm9yZSxcXG4gICZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICAgIG1hcmdpbjogJG1hcmdpbi1pbmRlbnQ7XFxuICB9XFxuXFxuICAmX190by1kbyBsaTpiZWZvcmUsXFxuICAmX19zb3J0cyBsaTpiZWZvcmUge1xcbiAgICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNDAwKCk7XFxuICB9XFxuXFxuICAmX19wcm9qZWN0cyBsaTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4pqrXFxcIjtcXG4gICAgY29sb3I6ICRjb2xvci1wcm9qZWN0cztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0X2xpc3RfX2FkZDpiZWZvcmUge1xcbiAgICBjb250ZW50OiAkaWNvbi1hZGQ7XFxuICAgIEBpbmNsdWRlIGZvbnQtYXdlc29tZS03MDAoKTtcXG4gIH1cXG5cXG4gICZfX2ZpbHRlcnMgbGk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDJlXFxcIjtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTQwMCgpO1xcbiAgfVxcbn1cXG5cXG4vLyBDb2xvciBQcmlvcml0eSBJY29uc1xcbkBlYWNoICRsZXZlbCwgJGNvbG9yIGluICRjb2xvci1wcmlvcml0eSB7XFxuICAucHJpb3JpdHktI3skbGV2ZWx9IHtcXG4gICAgY29sb3I6ICRjb2xvcjtcXG4gIH1cXG59XFxuXFxuLy8gRGF0ZSBJY29uc1xcbkBpbmNsdWRlIGljb24tY29udGVudCgnZGF0ZScsICRpY29ucy1kYXRlKTtcXG5AaW5jbHVkZSBpY29uLWNvbG9yKCdkYXRlJywgJGNvbG9yLWRhdGUpO1xcblxcbi8vIENhdGVnb3J5IEljb25zXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogbWFwLWdldCgkaWNvbnMtY2FyZXQsIGRvd24pO1xcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbiAgbWFyZ2luLXJpZ2h0OiAuNzVyZW07XFxufVxcblxcbi8vIFNvcnQgSWNvbnNcXG5AaW5jbHVkZSBpY29uLWNvbnRlbnQoJ3NvcnQnLCAkaWNvbnMtc29ydCk7XFxuQGluY2x1ZGUgaWNvbi1jb2xvcignc29ydCcsICRjb2xvci1zb3J0KTtcXG5cXG4vLyBNQUlOIElDT05TXFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogbWFwLWdldCgkaWNvbnMtY2FyZXQsIGRvd24pO1xcbiAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbn1cIixcIi50by1kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYuNXJlbSAxZnIgNi41cmVtIDJyZW07XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIFxcbiAgJl9fY2hlY2sge1xcbiAgICBtYXJnaW4tdG9wOiA3cHg7XFxuICB9XFxuXFxufVwiLFwiLmRyb3Bkb3duIHtcXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzIGxpbmVhcjtcXG59XCIsXCIuYWRkX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG5cXG4gICYtLXRvZG8ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcXG4gIH1cXG5cXG4gICYtLXByb2plY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBwYWRkaW5nOiAuMTVyZW07XFxuICB9XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IC4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuW25hbWU9XFxcInRpdGxlXFxcIl0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICAmOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNXB4O1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgJjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICBsZWZ0OiAxNHB4O1xcbiAgfVxcblxcbiAgbGFiZWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAuNXJlbTtcXG4gIH1cXG59XFxuXFxuLmFkZF9fZmluaXNoIHtcXG4gIG1hcmdpbjogLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKCNmZmYsIC41KTtcXG59XFxuXFxubGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIixcIi5wYWdlX19oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogJGNvbG9yLXByaW1hcnk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgei1pbmRleDogMTtcXG4gIFxcblxcbiAgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcblxcbiAgICAmIGxpOmxhc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICB9XFxuICB9XFxufVwiLFwiLm5hdiB7XFxuICBcXG4gIGJhY2tncm91bmQ6ICRjb2xvci1zZWNvbmRhcnk7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMjUpO1xcbiAgcGFkZGluZzogMnJlbSAuMjVyZW0gMCAycmVtO1xcblxcbiAgJl9fY2F0ZWdvcnkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMSk7XFxuXFxuICAgICY6bGFzdC1vZi10eXBlIHtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICB9XFxuXFxuICAgIGxpIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIFxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjA0KTtcXG4gICAgICB9XFxuXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIC8vIE1ha2VzIHRoZSB3aG9sZSBsaW5lIGNsaWNrYWJsZSBpbnN0ZWFkIG9mIGp1c3QgdGhlIHRleHQuXFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAmLS1oZWFkaW5nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjA3KTtcXG4gICAgfVxcbiAgfVxcblxcbn1cIixcIm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBQcm9qZWN0Q29udHJvbGxlciB9IGZyb20gJy4vUHJvamVjdENvbnRyb2xsZXInXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuL1Byb2plY3RNb2RlbCdcbmltcG9ydCB7IFByb2plY3RWaWV3IH0gZnJvbSAnLi9Qcm9qZWN0VmlldydcblxuZXhwb3J0IGNsYXNzIEFwcENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5jb3VudGVyID0gMFxuICAgIHRoaXMudmlldy5iaW5kQWRkUHJvamVjdCh0aGlzLmhhbmRsZUFkZFByb2plY3QuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZFRvZ2dsZSh0aGlzLmhhbmRsZVRvZ2dsZS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgaGFuZGxlQWRkUHJvamVjdCAobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIobmV3IFByb2plY3RNb2RlbChuYW1lKSwgbmV3IFByb2plY3RWaWV3KFByb2plY3RNb2RlbC5jb3VudGVyKSlcbiAgICB0aGlzLm1vZGVsLmFkZFByb2plY3QocHJvamVjdClcblxuICAgIHByb2plY3Qudmlldy5yZW5kZXJOYW1lKG5hbWUpXG4gICAgcHJvamVjdC52aWV3LnJlbmRlckJ0bihuYW1lKVxuICAgIHByb2plY3Qudmlldy5yZW5kZXJGb3JtKHByb2plY3QubW9kZWwuZm9ybSlcbiAgICBwcm9qZWN0LnZpZXcuZ2V0Rm9ybSgpXG4gICAgcHJvamVjdC5iaW5kQWxsKClcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuZGF0YXNldC50b2dnbGV9YCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFwcE1vZGVsIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXVxuICB9XG5cbiAgYWRkUHJvamVjdCAocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KVxuICAgIHByb2plY3QuaWQgPSB0aGlzLnByb2plY3RzLmxlbmd0aFxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQXBwVmlldyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyBDb250YWluZXJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuICAgIC8vIEZvcm0gdG8gY3JlYXRlIG5ldyBwcm9qZWN0c1xuICAgIHRoaXMucHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC0tcHJvamVjdCBbbmFtZT1cIm5hbWVcIl0nKVxuICAgIHRoaXMucHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtLXByb2plY3QgLmJ0bi0tc3VibWl0JylcblxuICAgIC8vIFNvcnQgdGFza3NcbiAgICB0aGlzLnNvcnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LXRpdGxlJylcbiAgICB0aGlzLnNvcnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LWRlc2NyaXB0aW9uJylcbiAgICB0aGlzLnNvcnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtZGF0ZScpXG4gICAgdGhpcy5zb3J0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1wcmlvcml0eScpXG5cbiAgICAvLyBGaWx0ZXIgdGFza3NcblxuICAgIC8vIFRvZ2dsZSBOYXZpZ2F0aW9uXG4gICAgdGhpcy5uYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b2dnbGU9XCJuYXZcIl0nKVxuXG4gICAgLy8gVG9nZ2xlIGNhdGVnb3JpZXNcbiAgICB0aGlzLnRvZ2dsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tLWRyb3Bkb3duJylcbiAgfVxuXG4gIC8vIEdldCBuZXcgcHJvamVjdCdzIG5hbWVcbiAgZ2V0IF9wcm9qZWN0TmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdElucHV0LnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBJbnB1dCB0byBjcmVhdGUgYSBuZXcgcHJvamVjdFxuICBfcmVzZXRJbnB1dCAoKSB7XG4gICAgdGhpcy5wcm9qZWN0SW5wdXQudmFsdWUgPSAnJ1xuICB9XG5cbiAgYmluZEFkZFByb2plY3QgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnByb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgICAgaGFuZGxlcih0aGlzLl9wcm9qZWN0TmFtZSlcbiAgICAgIHRoaXMuX3Jlc2V0SW5wdXQoKVxuICAgIH0pXG4gIH1cblxuICBiaW5kVG9nZ2xlIChoYW5kbGVyKSB7XG4gICAgdGhpcy50b2dnbGVCdG4uZm9yRWFjaCh0b2dnbGVCdG4gPT4gdG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcikpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQcm9qZWN0Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLm1vZGVsLnRvZG9MaXN0cylcbiAgICB0aGlzLm1vZGVsLmJpbmRQcm9qZWN0Q2hhbmdlKHRoaXMub25Qcm9qZWN0Q2hhbmdlLmJpbmQodGhpcykpXG4gIH1cblxuICBvblByb2plY3RDaGFuZ2UgKHRvZG9MaXN0cykge1xuICAgIHRoaXMudmlldy5yZW5kZXIodG9kb0xpc3RzKVxuICB9XG5cbiAgaGFuZGxlQWRkVG9kb0xpc3QgKHRvZG9MaXN0KSB7XG4gICAgdGhpcy5tb2RlbC5hZGRUb2RvTGlzdCh0b2RvTGlzdClcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZVRvZG9MaXN0ICh0b2RvTGlzdCkge1xuICAgIHRoaXMubW9kZWwuZGVsZXRlVG9kb0xpc3QodG9kb0xpc3QpXG4gIH1cblxuICBiaW5kQWxsICgpIHtcbiAgICB0aGlzLnZpZXcuYmluZEFkZFNlY3Rpb24odGhpcy5oYW5kbGVBZGRUb2RvTGlzdC5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBTZWN0aW9uRm9ybSB9IGZyb20gJy4vU2VjdGlvbkZvcm0nXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0TW9kZWwge1xuICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmlkID0gKytQcm9qZWN0TW9kZWwuY291bnRlclxuICAgIHRoaXMudG9kb0xpc3RzID0gW11cbiAgICB0aGlzLmZvcm0gPSBuZXcgU2VjdGlvbkZvcm0odGhpcy5pZClcbiAgfVxuXG4gIGFkZFRvZG9MaXN0ICh0b2RvTGlzdCkge1xuICAgIHRoaXMudG9kb0xpc3RzLnB1c2godG9kb0xpc3QpXG4gICAgdG9kb0xpc3QuaWQgPSB0aGlzLnRvZG9MaXN0cy5sZW5ndGhcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGVkaXRUb2RvTGlzdCAoaWQsIHVwZGF0ZSkge1xuICAgIHRoaXMudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHMubWFwKCh0b2RvTGlzdCkgPT4ge1xuICAgICAgaWYgKHRvZG9MaXN0LmlkID09PSBpZCkge1xuICAgICAgICB0b2RvTGlzdC5uYW1lID0gdXBkYXRlXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGRlbGV0ZVRvZG9MaXN0IChpZCkge1xuICAgIHRoaXMudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHMuZmlsdGVyKHRvZG9MaXN0ID0+IHRvZG9MaXN0LmlkICE9PSBpZClcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGJpbmRQcm9qZWN0Q2hhbmdlIChjYWxsYmFjaykge1xuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlID0gY2FsbGJhY2tcbiAgfVxufVxuXG5Qcm9qZWN0TW9kZWwuY291bnRlciA9IDBcbiIsImltcG9ydCB7IFRvZG9MaXN0Q29udHJvbGxlciB9IGZyb20gJy4vVG9kb0xpc3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgVG9kb0xpc3RNb2RlbCB9IGZyb20gJy4vVG9kb0xpc3RNb2RlbCdcbmltcG9ydCB7IFRvZG9MaXN0VmlldyB9IGZyb20gJy4vVG9kb0xpc3RWaWV3J1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdFZpZXcge1xuICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICB0aGlzLnByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMucHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3QtJHtpZH1gKVxuICAgIHRoaXMuc2VjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2VjdGlvbnMuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbnMnKVxuICAgIHRoaXMucHJvamVjdC5hcHBlbmQodGhpcy5zZWN0aW9ucylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5wcm9qZWN0KVxuICAgIHRoaXMuaWQgPSBpZFxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0XG4gIHJlbmRlck5hbWUgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgdGhpcy5uYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfX25hbWUnKVxuICAgIHRoaXMubmFtZS5pbm5lckhUTUwgPSBuYW1lXG4gICAgdGhpcy5wcm9qZWN0LnByZXBlbmQodGhpcy5uYW1lKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbiBsaW5rZWQgdG8gdGhlIHByb2plY3RcbiAgcmVuZGVyQnRuIChuYW1lKSB7XG4gICAgdGhpcy5saSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tZmlsdGVyJylcbiAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJywgYHByb2plY3QtJHt0aGlzLmlkfWApXG4gICAgdGhpcy5idXR0b24uaW5uZXJIVE1MID0gbmFtZVxuICAgIHRoaXMubGkuYXBwZW5kKHRoaXMuYnV0dG9uKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0c19saXN0JykuYXBwZW5kKHRoaXMubGkpXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIGFkZCBzZWN0aW9uIGZvcm1cbiAgcmVuZGVyRm9ybSAoZm9ybSkge1xuICAgIGZvcm0ucmVuZGVyKHRoaXMucHJvamVjdClcbiAgfVxuXG4gIC8vIEdldCB0aGUgYWRkIHNlY3Rpb24gZm9ybSBpbnB1dHNcbiAgZ2V0Rm9ybSAoKSB7XG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlY3Rpb24tZm9ybS0ke3RoaXMuaWR9IFtuYW1lPVwic2VjdGlvblwiXWApXG4gICAgdGhpcy5zdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH0gLmJ0bi0tc3VibWl0YClcbiAgfVxuXG4gIC8vIEdldCBTZWN0aW9uJ3MgTmFtZSBmcm9tIHRoZSBmb3JtXG4gIGdldCBfc2VjdGlvbk5hbWUgKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWUudmFsdWVcbiAgfVxuXG4gIC8vIFJlc2V0IGZvcm0gaW5wdXRcbiAgX3Jlc2V0SW5wdXQgKCkge1xuICAgIHRoaXMubmFtZS52YWx1ZSA9ICcnXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHByb2plY3QgYnkgcmVuZGVyaW5nIGV2ZXJ5IHNlY3Rpb25cbiAgcmVuZGVyICh0b2RvTGlzdHMpIHtcbiAgICB0aGlzLnNlY3Rpb25zLmlubmVySFRNTCA9ICcnXG5cbiAgICBmb3IgKGNvbnN0IHRvZG9MaXN0IG9mIHRvZG9MaXN0cykge1xuICAgICAgdG9kb0xpc3Qudmlldy5jcmVhdGVTZWN0aW9uKClcbiAgICAgIHRvZG9MaXN0LnZpZXcucmVuZGVyTmFtZSh0b2RvTGlzdC5tb2RlbC5uYW1lKVxuICAgICAgdG9kb0xpc3Qudmlldy5yZW5kZXIodG9kb0xpc3QubW9kZWwudG9kb3MpXG4gICAgICB0b2RvTGlzdC52aWV3LnJlbmRlckZvcm0odG9kb0xpc3QubW9kZWwuZm9ybSlcbiAgICAgIHRvZG9MaXN0LnZpZXcuZ2V0Rm9ybSh0b2RvTGlzdC5tb2RlbC5mb3JtKVxuICAgICAgdG9kb0xpc3QuYmluZEFsbCgpXG4gICAgfVxuICB9XG5cbiAgLy8gRXZlbnQgTGlzdGVuZXJzXG5cbiAgYmluZEFkZFNlY3Rpb24gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGhhbmRsZXIobmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCh0aGlzLl9zZWN0aW9uTmFtZSwgdGhpcy5pZCksIG5ldyBUb2RvTGlzdFZpZXcodGhpcy5pZCkpKVxuICAgICAgdGhpcy5fcmVzZXRJbnB1dCgpXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlY3Rpb25Gb3JtIHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICByZW5kZXIgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkX19zZWN0aW9uJylcblxuICAgIGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGZvcm1CdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tZHJvcGRvd24nLCAnYnRuLS1zZWN0aW9uJylcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGZvcm1CdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfWApXG4gICAgZm9ybUJ0bi5pbm5lckhUTUwgPSAnQWRkIFNlY3Rpb24nXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdhZGQnLCAnYWRkLS1zZWN0aW9uJywgJ2Ryb3Bkb3duJywgJ2hpZGRlbicpXG4gICAgZm9ybS5pZCA9IGBzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfWBcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWRkX19jb250ZW50JywgJ2FkZF9fY29udGVudC0tc2VjdGlvbicpXG5cbiAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzZWN0aW9uJylcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VjdGlvblxcJ3MgTmFtZScpXG4gICAgbGFiZWxOYW1lLmFwcGVuZChuYW1lKVxuICAgIGNvbnRlbnQuYXBwZW5kKGxhYmVsTmFtZSlcblxuICAgIGNvbnN0IGZpbmlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmluaXNoLmNsYXNzTGlzdC5hZGQoJ2FkZF9fZmluaXNoJylcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1zdWJtaXQnKVxuICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQWRkIFNlY3Rpb24nXG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tY2FuY2VsJylcbiAgICBjYW5jZWxCdG4uaW5uZXJIVE1MID0gJ0NhbmNlbCdcblxuICAgIGZpbmlzaC5hcHBlbmQoc3VibWl0QnRuLCBjYW5jZWxCdG4pXG4gICAgZm9ybS5hcHBlbmQoY29udGVudCwgZmluaXNoKVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kKGZvcm1CdG4sIGZvcm0pXG4gICAgY29udGFpbmVyLmFwcGVuZChmb3JtQ29udGFpbmVyKVxuXG4gICAgdGhpcy5iaW5kVG9nZ2xlKHRoaXMuaGFuZGxlVG9nZ2xlKVxuICB9XG5cbiAgLy8gRW5hYmxlIGZvcm0gdG9nZ2xlXG4gIGJpbmRUb2dnbGUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnRvZ2dsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cInNlY3Rpb24tZm9ybS0ke3RoaXMuaWR9XCJdYClcbiAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBoYW5kbGVUb2dnbGUgKGV2ZW50KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQudG9nZ2xlfWApLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSA9ICdOL0EnLCBwcmlvcml0eSA9ICdub25lJykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgfVxuXG4gIHJlbmRlciAoY29udGFpbmVyKSB7XG4gICAgY29uc3QgdG9kb0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9FbGVtLmNsYXNzTGlzdC5hZGQoJ3RvLWRvJylcbiAgICB0b2RvRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGF0ZScsIHRoaXMuZGF0ZSlcbiAgICB0b2RvRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpb3JpdHknLCB0aGlzLnByaW9yaXR5KVxuICAgIHRvZG9FbGVtLmlkID0gdGhpcy5pZFxuXG4gICAgY29uc3QgdG9kb0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRvZG9DaGVjay5jbGFzc0xpc3QuYWRkKCd0by1kb19fY2hlY2snKVxuICAgIHRvZG9DaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHRvZG9FbGVtLmFwcGVuZCh0b2RvQ2hlY2spXG5cbiAgICBjb25zdCBjb21wb25lbnRzID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdkYXRlJ11cbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzKSB7XG4gICAgICBjb25zdCB0b2RvQ29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRvZG9Db21wb25lbnQuY2xhc3NMaXN0LmFkZChgdG8tZG9fXyR7Y29tcG9uZW50fWApXG4gICAgICB0b2RvQ29tcG9uZW50LmlubmVySFRNTCA9IHRoaXNbY29tcG9uZW50XVxuICAgICAgdG9kb0VsZW0uYXBwZW5kKHRvZG9Db21wb25lbnQpXG4gICAgfVxuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG8tZG9fX3ByaW9yaXR5JywgYHByaW9yaXR5LSR7dGhpcy5wcmlvcml0eX1gKVxuICAgIHRvZG9Qcmlvcml0eS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuICAgIHRvZG9FbGVtLmFwcGVuZCh0b2RvUHJpb3JpdHkpXG5cbiAgICBjb250YWluZXIuYXBwZW5kKHRvZG9FbGVtKVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVG9kb0Zvcm0ge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5pZCA9ICsrVG9kb0Zvcm0uY291bnRlclxuICB9XG5cbiAgcmVuZGVyIChjb250YWluZXIpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZF9fdG9kbycpXG5cbiAgICBjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBmb3JtQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWRyb3Bkb3duJywgJ2J0bi0tYWRkJylcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGZvcm1CdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBhZGQtdG9kby0ke3RoaXMuaWR9YClcbiAgICBmb3JtQnRuLmlubmVySFRNTCA9ICdBZGQgVGFzaydcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZCcsICdhZGQtLXRvZG8nLCAndG9kby1mb3JtJywgJ2Ryb3Bkb3duJywgJ2hpZGRlbicpXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGFkZC10b2RvLSR7dGhpcy5pZH1gKVxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdhZGRfX2NvbnRlbnQnLCAnYWRkX19jb250ZW50LS10b2RvJylcblxuICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpXG4gICAgbGFiZWxUaXRsZS5hcHBlbmQodGl0bGUpXG5cbiAgICBjb25zdCBsYWJlbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpXG4gICAgbGFiZWxEZXNjcmlwdGlvbi5hcHBlbmQoZGVzY3JpcHRpb24pXG5cbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2FkZF9fZGV0YWlscycpXG5cbiAgICBjb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJylcbiAgICBsYWJlbERhdGUuYXBwZW5kKGRhdGUpXG5cbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkX19wcmlvcml0eScpXG4gICAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1gKVxuICAgIHByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLXRvZ2dsZScpXG4gICAgcHJpb3JpdHlCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWJvb2ttYXJrXCI+PC9pPidcblxuICAgIGNvbnN0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByaW9yaXRpZXMuY2xhc3NMaXN0LmFkZCgnYWRkLXByaW9yaXR5JywgJ2Ryb3Bkb3duJywgJ2hpZGRlbicpXG4gICAgcHJpb3JpdGllcy5zZXRBdHRyaWJ1dGUoJ2lkJywgYGFkZC1wcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICBjb25zdCBwcmlvcml0aWVzTGlzdCA9IFsnaGlnaCcsICdtZWQnLCAnbG93JywgJ25vbmUnXVxuXG4gICAgZm9yIChjb25zdCBwcmlvcml0eSBvZiBwcmlvcml0aWVzTGlzdCkge1xuICAgICAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCBgcHJpb3JpdHktJHtwcmlvcml0eX0tJHt0aGlzLmlkfWApXG4gICAgICBsYWJlbFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LSR7cHJpb3JpdHl9YCwgYHByaW9yaXR5LSR7dGhpcy5pZH1gKVxuICAgICAgbGFiZWxQcmlvcml0eS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuXG4gICAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJpb3JpdHkpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJpb3JpdHktJHtwcmlvcml0eX0tJHt0aGlzLmlkfWApXG5cbiAgICAgIHByaW9yaXRpZXMuYXBwZW5kKGxhYmVsUHJpb3JpdHksIGlucHV0UHJpb3JpdHkpXG4gICAgfVxuXG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kKHByaW9yaXR5QnRuLCBwcmlvcml0aWVzKVxuXG4gICAgY29uc3QgZmluaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmaW5pc2guY2xhc3NMaXN0LmFkZCgnYWRkX19maW5pc2gnKVxuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLXN1Ym1pdCcpXG4gICAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdBZGQgVGFzaydcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1jYW5jZWwnKVxuICAgIGNhbmNlbEJ0bi5pbm5lckhUTUwgPSAnQ2FuY2VsJ1xuXG4gICAgZmluaXNoLmFwcGVuZChzdWJtaXRCdG4sIGNhbmNlbEJ0bilcblxuICAgIGNvbnRlbnQuYXBwZW5kKGxhYmVsVGl0bGUsIGxhYmVsRGVzY3JpcHRpb24sIGRldGFpbHMpXG4gICAgZGV0YWlscy5hcHBlbmQobGFiZWxEYXRlLCBwcmlvcml0eUNvbnRhaW5lcilcbiAgICBmb3JtLmFwcGVuZChjb250ZW50LCBmaW5pc2gpXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmQoZm9ybUJ0biwgZm9ybSlcbiAgICBjb250YWluZXIuYXBwZW5kKGZvcm1Db250YWluZXIpXG5cbiAgICB0aGlzLmJpbmRUb2dnbGUodGhpcy5oYW5kbGVUb2dnbGUpXG4gICAgdGhpcy5iaW5kUHJpb3JpdHlMYWJlbCh0aGlzLmhhbmRsZVByaW9yaXR5TGFiZWwuYmluZCh0aGlzKSlcbiAgICB0aGlzLmJpbmRSZXNldFByaW9yaXR5KHRoaXMuaGFuZGxlUmVzZXRQcmlvcml0eS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgLy8gRW5hYmxlIGZvcm0gdG9nZ2xlXG4gIGJpbmRUb2dnbGUgKGhhbmRsZXIpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlkKVxuICAgIHRoaXMudG9nZ2xlQnRuID0gW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cImFkZC1wcmlvcml0eS0ke3RoaXMuaWR9XCJdYCksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cImFkZC10b2RvLSR7dGhpcy5pZH1cIl1gKV1cbiAgICB0aGlzLnRvZ2dsZUJ0bi5mb3JFYWNoKHRvZ2dsZUJ0biA9PiB0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKSlcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykuZGF0YXNldC50b2dnbGV9YCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgfVxuXG4gIC8vIEVuYWJsZSBwcmlvcml0eSB0b2dnbGUgYW5kIGNvbG9yIGNoYW5nZSB3aGVuIHNlbGVjdGluZyBhIHByaW9yaXR5XG4gIGJpbmRQcmlvcml0eUxhYmVsIChoYW5kbGVyKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgdGhpcy5sYWJlbHMuZm9yRWFjaChsYWJlbCA9PiBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpKVxuICB9XG5cbiAgaGFuZGxlUHJpb3JpdHlMYWJlbCAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1gKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cImFkZC1wcmlvcml0eS0ke3RoaXMuaWR9XCJdYCkuc3R5bGUuY29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdsYWJlbCcpKS5jb2xvclxuICB9XG5cbiAgLy8gUmVzZXQgcHJpb3JpdHkgY29sb3Igd2hlbiBhZGRpbmcgYSB0YXNrXG4gIGJpbmRSZXNldFByaW9yaXR5IChoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZC10b2RvLSR7dGhpcy5pZH0gLmJ0bi0tc3VibWl0YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgaGFuZGxlUmVzZXRQcmlvcml0eSAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlPVwiYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1cIl1gKS5zdHlsZS5jb2xvciA9ICcnXG4gIH1cbn1cblxuVG9kb0Zvcm0uY291bnRlciA9IDBcbiIsImV4cG9ydCBjbGFzcyBUb2RvTGlzdENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlKHRoaXMubW9kZWwudG9kb3MpXG4gICAgdGhpcy5tb2RlbC5iaW5kVG9kb0xpc3RDaGFuZ2UodGhpcy5vblRvZG9MaXN0Q2hhbmdlLmJpbmQodGhpcykpXG4gIH1cblxuICBvblRvZG9MaXN0Q2hhbmdlICh0b2Rvcykge1xuICAgIHRoaXMudmlldy5yZW5kZXIodG9kb3MpXG4gIH1cblxuICBoYW5kbGVBZGRUb2RvICh0b2RvKSB7XG4gICAgdGhpcy5tb2RlbC5hZGRUb2RvKHRvZG8pXG4gIH1cblxuICBoYW5kbGVFZGl0VG9kbyAodG9kbywgZmllbGQsIHVwZGF0ZSkge1xuICAgIHRoaXMubW9kZWwuZWRpdFRvZG8odG9kbywgZmllbGQsIHVwZGF0ZSlcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZVRvZG8gKHRvZG8pIHtcbiAgICB0aGlzLm1vZGVsLmRlbGV0ZVRvZG8odG9kbylcbiAgfVxuXG4gIGJpbmRBbGwgKCkge1xuICAgIHRoaXMudmlldy5iaW5kQWRkVG9kbyh0aGlzLmhhbmRsZUFkZFRvZG8uYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERlbGV0ZVRvZG8odGhpcy5oYW5kbGVEZWxldGVUb2RvLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9Gb3JtIH0gZnJvbSAnLi9Ub2RvRm9ybSdcblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0TW9kZWwge1xuICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnRvZG9zID0gW11cbiAgICB0aGlzLmZvcm0gPSBuZXcgVG9kb0Zvcm0oKVxuICB9XG5cbiAgYWRkVG9kbyAodG9kbykge1xuICAgIHRvZG8uaWQgPSB0aGlzLnRvZG9zLmxlbmd0aFxuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKVxuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgZWRpdFRvZG8gKGlkLCBmaWVsZCwgdXBkYXRlKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcbiAgICAgICAgdG9kb1tmaWVsZF0gPSB1cGRhdGVcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgZGVsZXRlVG9kbyAoaWQpIHtcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT09IGlkKVxuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgYmluZFRvZG9MaXN0Q2hhbmdlIChjYWxsYmFjaykge1xuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSA9IGNhbGxiYWNrXG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8nXG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdFZpZXcge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25zJylcbiAgICB0aGlzLnRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLnRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG9saXN0JylcbiAgICB0aGlzLmlkID0gKytUb2RvTGlzdFZpZXcuY291bnRlclxuICB9XG5cbiAgLy8gQ3JlYXRlIGEgc2VjdGlvblxuICBjcmVhdGVTZWN0aW9uICgpIHtcbiAgICB0aGlzLnNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGBzZWN0aW9uLSR7dGhpcy5pZH1gKVxuICAgIHRoaXMuc2VjdGlvbi5wcmVwZW5kKHRoaXMudG9kb0xpc3QpXG4gICAgdGhpcy5wcm9qZWN0LmFwcGVuZCh0aGlzLnNlY3Rpb24pXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHNlY3Rpb24ncyBuYW1lXG4gIHJlbmRlck5hbWUgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGhpcy5uYW1lLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25fX25hbWUnKVxuICAgIHRoaXMubmFtZS5pbm5lckhUTUwgPSBuYW1lXG4gICAgdGhpcy5zZWN0aW9uLnByZXBlbmQodGhpcy5uYW1lKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBBZGQgVG9kbyBGb3JtXG4gIHJlbmRlckZvcm0gKGZvcm0pIHtcbiAgICBmb3JtLnJlbmRlcih0aGlzLnNlY3Rpb24pXG4gIH1cblxuICAvLyBHZXQgdGhlIEFkZCBUb2RvIEZvcm0gSW5wdXRzXG4gIGdldEZvcm0gKCkge1xuICAgIHRoaXMudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke3RoaXMuaWR9IC50b2RvLWZvcm0gW25hbWU9XCJ0aXRsZVwiXWApXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cImRlc2NyaXB0aW9uXCJdYClcbiAgICB0aGlzLmRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke3RoaXMuaWR9IC50b2RvLWZvcm0gW25hbWU9XCJkYXRlXCJdYClcbiAgICB0aGlzLnN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSAuYnRuLS1zdWJtaXRgKVxuICB9XG5cbiAgLy8gR2V0IGZvcm0gdmFsdWVzXG4gIGdldCBfdG9kb1RpdGxlICgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZS52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvRGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9EYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9Qcmlvcml0eSAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWVcbiAgICB9XG4gIH1cblxuICAvLyBSZXNldCBmb3JtIGlucHV0c1xuICBfcmVzZXRJbnB1dHMgKCkge1xuICAgIHRoaXMudGl0bGUudmFsdWUgPSAnJ1xuICAgIHRoaXMuZGVzY3JpcHRpb24udmFsdWUgPSAnJ1xuICAgIHRoaXMuZGF0ZS52YWx1ZSA9ICcnXG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLmNoZWNrZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgVG9kbyBMaXN0XG4gIHJlbmRlciAodG9kb3MpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmlubmVySFRNTCA9ICcnXG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICB0b2RvLnJlbmRlcih0aGlzLnRvZG9MaXN0KVxuICAgIH1cbiAgfVxuXG4gIC8vIEV2ZW50IExpc3RlbmVyc1xuXG4gIGJpbmRBZGRUb2RvIChoYW5kbGVyKSB7XG4gICAgdGhpcy5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBoYW5kbGVyKG5ldyBUb2RvKHRoaXMuX3RvZG9UaXRsZSwgdGhpcy5fdG9kb0Rlc2NyaXB0aW9uLCB0aGlzLl90b2RvRGF0ZSwgdGhpcy5fdG9kb1ByaW9yaXR5KSlcbiAgICAgIHRoaXMuX3Jlc2V0SW5wdXRzKClcbiAgICB9KVxuICB9XG5cbiAgYmluZERlbGV0ZVRvZG8gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvLWRvX19jaGVjaycpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpXG4gICAgICAgIGhhbmRsZXIoaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5Ub2RvTGlzdFZpZXcuY291bnRlciA9IDBcbiIsImltcG9ydCAnLi9zYXNzL21haW4uc2NzcydcbmltcG9ydCB7IFByb2plY3RDb250cm9sbGVyIH0gZnJvbSAnLi9Qcm9qZWN0Q29udHJvbGxlcidcbmltcG9ydCB7IFByb2plY3RNb2RlbCB9IGZyb20gJy4vUHJvamVjdE1vZGVsJ1xuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tICcuL1Byb2plY3RWaWV3J1xuXG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSAnLi9BcHBDb250cm9sbGVyJ1xuaW1wb3J0IHsgQXBwTW9kZWwgfSBmcm9tICcuL0FwcE1vZGVsJ1xuaW1wb3J0IHsgQXBwVmlldyB9IGZyb20gJy4vQXBwVmlldydcblxuY29uc3QgYXBwID0gbmV3IEFwcENvbnRyb2xsZXIobmV3IEFwcE1vZGVsKCksIG5ldyBBcHBWaWV3KCkpXG5cbmNvbnN0IGJpZ1Byb2plY3QgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIobmV3IFByb2plY3RNb2RlbCgnYmlnIGJpZycpLCBuZXcgUHJvamVjdFZpZXcoUHJvamVjdE1vZGVsLmNvdW50ZXIpKVxuYmlnUHJvamVjdC52aWV3LnJlbmRlckZvcm0oYmlnUHJvamVjdC5tb2RlbC5mb3JtKVxuYmlnUHJvamVjdC52aWV3LmdldEZvcm0oKVxuYmlnUHJvamVjdC5iaW5kQWxsKClcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9