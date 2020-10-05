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
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  height: calc(100% - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\nh2 {\n  font-weight: 700;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel {\n  color: rgba(42, 43, 104, 0.5);\n}\n.btn--cancel:hover {\n  color: rgba(42, 43, 104, 0.7);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit, .btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.5);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-medium {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-gap: 1rem;\n  align-items: start;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n\n.dropdown {\n  transition: all 0.35s linear, max-height 0.25s;\n  max-height: 20vh;\n}\n\n.add__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority {\n  position: relative;\n}\n.add__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n\n.add__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li button {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}", "",{"version":3,"sources":["webpack://src/sass/main.scss","webpack://src/sass/base/_base.scss","webpack://src/sass/base/_typography.scss","webpack://src/sass/utils/_variables.scss","webpack://src/sass/components/_buttons.scss","webpack://src/sass/utils/_mixins.scss","webpack://src/sass/components/_icons.scss","webpack://src/sass/components/_todo.scss","webpack://src/sass/components/_dropdown.scss","webpack://src/sass/layout/_form.scss","webpack://src/sass/layout/_header.scss","webpack://src/sass/layout/_nav.scss","webpack://src/sass/layout/_main.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;;;CAAA;AAKA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;ADCD;;ACCA,gDAAA;AACA;;EAEC,cAAA;ADED;;ACAA;EACC,cAAA;ADGD;;ACDA;EACC,gBAAA;ADID;;ACFA;EACC,YAAA;ADKD;;ACHA;;EAEC,WAAA;EACA,aAAA;ADMD;;ACJA;EACC,yBAAA;EACA,iBAAA;ADOD;;ACJA;;EAEC,YAAA;ADOD;ACLC;;EACC,aAAA;ADQF;;ACJA;EACC,sBAAA;ADOD;;ACJA;EACC,YAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;ADOD;;ACJA;EACC,WAAA;EACA,YAAA;ADOD;;ACJA;EACC,kBAAA;EACA,SAAA;EACA,aAAA;EACA,yBAAA;ADOD;;ACJA;EACC,UAAA;EACA,wBAAA;EACA,gBAAA;EACC,8BAAA;ADOF;;AE5FA;;EAEE,kCCDa;EDEb,mBAAA;EACA,gBAAA;EACA,mBAAA;AF+FF;;AE5FA;EACE,kBAAA;EACA,cAAA;EACA,yBAAA;EACA,cCPc;EDQd,qBAAA;EACA,kBAAA;AF+FF;;AE5FA;EACE,gBAAA;AF+FF;;AE3FE;EACE,WCfW;AH6Gf;AE3FE;EACE,kBAAA;AF6FJ;AE1FE;EAEE,yBAAA;EACA,iBAAA;EACA,sBAAA;AF2FJ;AExFE;EACE,WAAA;AF0FJ;AEvFE;EACE,6BAAA;AFyFJ;AEvFI;EACE,6BAAA;AFyFN;;AE/EE;EACE,yBAAA;EACA,cCpDY;EDqDZ,gBAAA;EACA,qBAAA;EACA,gBAAA;AFkFJ;;AE9EA;EACE,0BAAA;AFiFF;AE/EE;EACE,WAAA;AFiFJ;;AE5EA;EACE,gBAAA;EACA,sBAAA;AF+EF;;AE5EA;EACE,gBAAA;AF+EF;;AE1EA;;EAEE,kCCrFa;AHkKf;;AE1EA;EACE,gBAAA;AF6EF;;AE1EA;EACE,cCpFW;AHiKb;;AE1EA;EACE,iBAAA;AF6EF;;AI/KA;EACC,YAAA;EACC,gBAAA;EACA,eAAA;AJkLF;AIhLE;EACE,aAAA;AJkLJ;;AI5KE;EAEE,uBAAA;AJ8KJ;AI3KE;EACE,kCAAA;EACA,kBAAA;EACA,qBAAA;AJ6KJ;AI3KI;EACE,kCAAA;AJ6KN;AIxKE;EACE,wCAAA;EACA,kBAAA;EACA,oCAAA;AJ0KJ;AIvKE;EACE,YDuBO;ECtBP,6BAAA;EC9BF,kCAAA;EACA,gBAAA;ED+BE,cAAA;AJ0KJ;;AM7ME;EAIE,2BHsDY;AHuJhB;AM1ME;EDTA,kCAAA;EACA,gBAAA;ALsNF;AMzME;EACE,YAAA;EACA,6BHRa;AHmNjB;AMxME;EACE,YHqCO;EEpDT,kCAAA;EACA,gBAAA;AL0NF;AMxME;EACE,YAAA;EDzBF,kCAAA;EACA,gBAAA;ALoOF;;AMrME;EACE,cHtBa;AH8NjB;;AMzME;EACE,cHtBa;AHkOjB;;AM7ME;EACE,cHtBa;AHsOjB;;AMjNE;EACE,cHtBa;AH0OjB;;AK1OI;EACE,YFyBO;AHoNb;;AK9OI;EACE,YFyBO;AHwNb;;AKlPI;EACE,YFyBO;AH4Nb;;AKtPI;EACE,YFyBO;AHgOb;;AKlPI;EACE,cFFO;AHuPb;;AKtPI;EACE,cFFO;AH2Pb;;AK1PI;EACE,cFFO;AH+Pb;;AK9PI;EACE,cFFO;AHmQb;;AKlQI;EACE,cFFO;AHuQb;;AM/OA;EACE,YAAA;EACA,cHxCc;EECd,kCAAA;EACA,gBAAA;ECwCA,qBAAA;ANmPF;;AKtRI;EACE,YFsCO;AHmPb;;AK1RI;EACE,YFsCO;AHuPb;;AK9RI;EACE,YFsCO;AH2Pb;;AKlSI;EACE,YFsCO;AH+Pb;;AK9RI;EACE,cFMO;AH2Rb;;AKlSI;EACE,cFMO;AH+Rb;;AKtSI;EACE,cFMO;AHmSb;;AK1SI;EACE,cFMO;AHuSb;;AM1QA;EACE,YAAA;EDnDA,kCAAA;EACA,gBAAA;ALiUF;;AOxUA;EACE,aAAA;EACA,kDAAA;EACA,cAAA;EACA,kBAAA;AP2UF;AOzUE;EACE,eAAA;AP2UJ;;AQlVA;EACE,8CAAA;EACA,gBAAA;ARqVF;;ASvVA;EACE,aAAA;EACA,sBAAA;EACA,yCAAA;AT0VF;ASxVE;EACE,mBAAA;EACA,qBAAA;AT0VJ;ASvVE;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;ATyVJ;;ASrVA;;EAEE,WAAA;EACA,gBAAA;EACA,gBAAA;ATwVF;;ASrVA;EACE,YAAA;ATwVF;;ASrVA;EACE,+CAAA;ATwVF;;ASrVA;EACE,aAAA;EACA,yBAAA;ATwVF;;ASrVA;EACE,kBAAA;ATwVF;AStVE;EACE,eAAA;EACA,UAAA;EACA,oBAAA;ATwVJ;;ASpVA;EACE,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,yCAAA;EACA,uBAAA;EACA,6BAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;ATuVF;ASrVE;EACE,WAAA;EACA,kCAAA;EACA,mCAAA;EACA,6BAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;ATuVJ;ASpVE;EACE,WAAA;EACA,kCAAA;EACA,mCAAA;EACA,gDAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;ATsVJ;ASnVE;EACE,kBAAA;EACA,gBAAA;ATqVJ;;ASjVA;EACE,mBAAA;AToVF;;ASjVA;EACE,oCAAA;AToVF;;ASjVA;EACE,eAAA;AToVF;;AUlbA;EACE,eAAA;EACA,mBPGc;EOFd,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;AVqbF;AUlbE;EACE,aAAA;EACA,OAAA;AVobJ;AUlbI;EACE,iBAAA;AVobN;;AWncA;EAEE,mBRIgB;EQHhB,YAAA;EACA,+CAAA;EACA,4BAAA;AXqcF;AWncE;EACE,sBAAA;EACA,uBAAA;EACA,+CAAA;AXqcJ;AWncI;EACE,mBAAA;AXqcN;AWlcI;EACE,aAAA;AXocN;AWlcM;EACE,mCAAA;AXocR;AWjcM;EAEE,OAAA;EACA,iBAAA;AXkcR;AW7bE;EACE,WAAA;EACA,iBAAA;AX+bJ;AW7bI;EACE,mCAAA;AX+bN;;AYneA;EACE,OAAA;EACA,aAAA;EACA,uBAAA;EACA,iBAAA;AZseF;;AYneA;EACE,WAAA;EACA,gBAAA;AZseF","sourcesContent":["@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  height: calc(100% - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\nh2 {\n  font-weight: 700;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel {\n  color: rgba(42, 43, 104, 0.5);\n}\n.btn--cancel:hover {\n  color: rgba(42, 43, 104, 0.7);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit, .btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.5);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-medium {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-gap: 1rem;\n  align-items: start;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n\n.dropdown {\n  transition: all 0.35s linear, max-height 0.25s;\n  max-height: 20vh;\n}\n\n.add__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority {\n  position: relative;\n}\n.add__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n\n.add__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li button {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput,\ntextarea {\n\tborder: none;\n\n\t&:focus {\n\t\toutline: none;\n\t}\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\twidth: 100vw;\n\theight: 100vh;\n\tmax-width: 100%;\n\tmax-height: 100%;\n}\n\n.wrapper {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.content__wrapper {\n\tposition: relative;\n\ttop: 50px;\n\tdisplay: flex;\n\theight: calc(100% - 50px);\n}\n\n.hidden {\n\topacity: 0;\n\tmax-height: 0 !important;\n\toverflow: hidden;\n  transform: translateY(-.25em);\n}","body,\nbutton {\n  font-family: $font-primary;\n  font-size: .875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: $color-primary;\n  letter-spacing: .5px;\n  text-align: center;\n}\n\nh2 {\n  font-weight: 700;\n}\n\n.btn {\n  &--page--header {\n    color: $color-header;\n  }\n\n  &--icon {\n    font-size: 1.25rem;\n  }\n\n  &--submit,\n  &--cancel {\n    text-transform: uppercase;\n    font-size: .85em;\n    letter-spacing: -.5px;\n  }\n\n  &--submit {\n    color: #fff;\n  }\n\n  &--cancel {\n    color: rgba($color-primary, .5);\n\n    &:hover {\n      color: rgba($color-primary, .7);\n    }\n\n  }\n\n}\n\n// Nav\n\n.nav {\n  &--heading {\n    text-transform: uppercase;\n    color: $color-primary;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 2.5;\n  }\n}\n\n[data-toggle=\"add-project\"] {\n  color: rgba(#000, .75);\n\n  &:hover {\n    color: #000;\n  }\n\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\n// Form\n\ninput,\ntextarea {\n  font-family: $font-primary;\n}\n\n[name=\"title\"] {\n  font-weight: 700;\n}\n\n[name=\"date\"] {\n  color: $color-form;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}","// Fonts\n$font-primary: 'Nanum Gothic', Arial;\n\n\n// Colors\n$color-primary: rgb(42, 43, 104);\n$color-secondary: rgb(238, 240, 241);\n\n$color-header: #fff;\n$color-projects: rgba($color-primary, .5);\n$color-form: rgb(142, 142, 142);\n\n$color-priority: (\n  high: rgb(161, 66, 66),\n  medium: rgb(231, 154, 103),\n  low: rgb(93, 151, 91),\n  none: rgb(199, 199, 199)\n);\n\n$color-date: (\n  all: lighten($color-primary, 15%),\n  today: rgb(235, 153, 99),\n  upcoming: rgb(141, 90, 137),\n  anytime: rgb(122, 122, 122),\n  late: rgb(148, 32, 32)\n);\n\n$color-sort: (\n  title: rgb(48, 92, 48),\n  description: rgb(235, 185, 79),\n  date: rgb(102, 151, 145),\n  priority: map-get($color-priority, high)\n);\n\n// Icons\n\n$icon-priority: \"\\f02e\";\n\n$icons-date: (\n  all: \"\\f073\",\n  today: \"\\f272\",\n  upcoming: \"\\f274\",\n  anytime: \"\\f133\",\n);\n\n$icons-caret: (\n  up: \"\\f0d8\",\n  down: \"\\f0d7\",\n  right: \"\\f0da\"\n);\n\n$icons-sort: (\n  title: \"\\f328\",\n  description: \"\\f249\",\n  date: \"\\f073\",\n  priority: $icon-priority,\n);\n\n$icon-add: \"\\f067\";\n\n// Others\n$margin-indent: 0 .25rem 0 1.25rem;","button {\n\tborder: none;\n  background: none;\n  cursor: pointer;\n  \n  &:focus {\n    outline: none;\n  }\n}\n\n.btn {\n\n  &--submit,\n  &--cancel {\n    padding: .15rem .5rem;\n  }\n  \n  &--submit {\n    background: rgba($color-primary, .5);\n    border-radius: 5px;\n    margin-right: .25rem;\n\n    &:hover {\n      background: rgba($color-primary, .7);\n    }\n\n  }\n\n  &--cancel {\n    border: 1px solid rgba($color-primary, .5);\n    border-radius: 5px;\n    background: rgba(#fff, .5);\n  }\n\n  &--add:before {\n    content: $icon-add;\n    color: rgba($color-primary, .5);\n    @include font-awesome-700();\n    margin: 0 1rem;\n  }\n\n}","@mixin font-awesome-400() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n@mixin font-awesome-700() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n@mixin icon-content($target, $map) {\n  @each $key, $icon in $map {\n    .#{$target}-#{$key}::before {\n      content: $icon;\n    }\n  }\n}\n\n@mixin icon-color($target, $map) {\n  @each $key, $color in $map {\n    .#{$target}-#{$key}::before {\n      color: $color;\n    }\n  }\n}","// NAV-ICONS\n\n.nav {\n  &__to-do li:before,\n  &__projects li:before,\n  &__filters li:before,\n  &__sorts li:before {\n    margin: $margin-indent;\n  }\n\n  &__to-do li:before,\n  &__sorts li:before {\n    @include font-awesome-400();\n  }\n\n  &__projects li:before {\n    content: \"⚫\";\n    color: $color-projects;\n  }\n\n  .project_list__add:before {\n    content: $icon-add;\n    @include font-awesome-700();\n  }\n\n  &__filters li:before {\n    content: \"\\f02e\";\n    @include font-awesome-400();\n  }\n}\n\n// Color Priority Icons\n@each $level, $color in $color-priority {\n  .priority-#{$level} {\n    color: $color;\n  }\n}\n\n// Date Icons\n@include icon-content('date', $icons-date);\n@include icon-color('date', $color-date);\n\n// Category Icons\n.nav--heading:before {\n  content: map-get($icons-caret, down);\n  color: $color-primary;\n  @include font-awesome-700();\n  margin-right: .75rem;\n}\n\n// Sort Icons\n@include icon-content('sort', $icons-sort);\n@include icon-color('sort', $color-sort);\n\n// MAIN ICONS\n\n.main__header li:before {\n  content: map-get($icons-caret, down);\n  @include font-awesome-700();\n}",".to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-gap: 1rem;\n  align-items: start;\n  \n  &__check {\n    margin-top: 7px;\n  }\n\n}",".dropdown {\n  transition: all .35s linear, max-height .25s;\n  max-height: 20vh;\n}",".add__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba($color-primary, .35);\n\n  &--todo {\n    border-radius: 10px;\n    padding: .25rem 1rem;\n  }\n\n  &--project {\n    border-radius: 5px;\n    margin: 0 1rem;\n    padding: .15rem;\n  }\n}\n\ninput[type=\"text\"],\ntextarea {\n  width: 100%;\n  padding: .25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=\"title\"] {\n  border-bottom: 1px solid rgba($color-primary, .1);\n}\n\n.add__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority {\n  position: relative;\n\n  input[type=\"radio\"] {\n    position: fixed;\n    opacity: 0;\n    pointer-events: none;\n  }\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba($color-primary, .35);\n  padding: .25rem .5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n\n  &:before {\n    content: '';\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #fff;\n    position: absolute;\n    top: -5px;\n    left: 15px;\n    z-index: 1;\n  }\n\n  &:after {\n    content: '';\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid rgba($color-primary, .35);\n    position: absolute;\n    top: -6px;\n    left: 14px;\n  }\n\n  label {\n    text-align: center;\n    margin: 0 .5rem;\n  }\n}\n\n.add__finish {\n  margin: .5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(#fff, .5);\n}\n\nlabel {\n  cursor: pointer;\n}",".page__header {\n  position: fixed;\n  background: $color-primary;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  \n\n  ul {\n    display: flex;\n    flex: 1;\n\n    & li:last-child {\n      margin-left: auto;\n    }\n  }\n}",".nav {\n  \n  background: $color-secondary;\n  width: 250px;\n  border-right: 1px solid rgba($color-primary, .25);\n  padding: 2rem .25rem 0 2rem;\n\n  &__category {\n    margin-bottom: .75rem;\n    padding-bottom: .75rem;\n    border-bottom: 1px solid rgba($color-primary, .1);\n\n    &:last-of-type {\n      border-bottom: none;\n    }\n\n    li {\n      display: flex;\n      \n      &:hover {\n        background: rgba($color-primary, .04);\n      }\n\n      button {\n        // Makes the whole line clickable instead of just the text.\n        flex: 1;\n        text-align: start;\n      }\n    }\n  }\n\n  &--heading {\n    width: 100%;\n    text-align: start;\n    \n    &:hover {\n      background: rgba($color-primary, .07);\n    }\n  }\n\n}","main {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}"],"sourceRoot":""}]);
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
    // Form to create new projects
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
    const form = document.createElement('form');
    form.classList.add('add', 'add--section');
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
    container.append(form);
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
    form.classList.add('add', 'add--todo', 'todo-form', 'dropdown');
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
  constructor(projectId) {
    this.project = document.querySelector(`#project-${projectId} .sections`);
    this.todoList = document.createElement('div');
    this.todoList.classList.add('todolist');
    this.id = ++TodoListView.counter;
    this.projectId = projectId;
  } // Create a section


  createSection() {
    this.section = document.createElement('div');
    this.section.classList.add(`section-${this.projectId}-${this.id}`);
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
    this.title = document.querySelector(`.section-${this.projectId}-${this.id} .todo-form [name="title"]`);
    this.description = document.querySelector(`.section-${this.projectId}-${this.id} .todo-form [name="description"]`);
    this.date = document.querySelector(`.section-${this.projectId}-${this.id} .todo-form [name="date"]`);
    this.submit = document.querySelector(`.section-${this.projectId}-${this.id} .todo-form .btn--submit`);
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
      handler(new _Todo__WEBPACK_IMPORTED_MODULE_0__["Todo"](this._todoTitle, this._todoDescription, this._todoDate, this._todoPriority, '', '', ''));

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
/* harmony import */ var _TodoListController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoListController */ "./src/TodoListController.js");
/* harmony import */ var _TodoListModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoListModel */ "./src/TodoListModel.js");
/* harmony import */ var _TodoListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoListView */ "./src/TodoListView.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Todo */ "./src/Todo.js");
/* harmony import */ var _ProjectController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectController */ "./src/ProjectController.js");
/* harmony import */ var _ProjectModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectModel */ "./src/ProjectModel.js");
/* harmony import */ var _ProjectView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectView */ "./src/ProjectView.js");
/* harmony import */ var _AppController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AppController */ "./src/AppController.js");
/* harmony import */ var _AppModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AppModel */ "./src/AppModel.js");
/* harmony import */ var _AppView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AppView */ "./src/AppView.js");











const bigProject = new _ProjectController__WEBPACK_IMPORTED_MODULE_5__["ProjectController"](new _ProjectModel__WEBPACK_IMPORTED_MODULE_6__["ProjectModel"]('big big'), new _ProjectView__WEBPACK_IMPORTED_MODULE_7__["ProjectView"](_ProjectModel__WEBPACK_IMPORTED_MODULE_6__["ProjectModel"].counter));
bigProject.view.renderForm(bigProject.model.form);
bigProject.view.getForm();
bigProject.bindAll();
const app = new _AppController__WEBPACK_IMPORTED_MODULE_8__["AppController"](new _AppModel__WEBPACK_IMPORTED_MODULE_9__["AppModel"](), new _AppView__WEBPACK_IMPORTED_MODULE_10__["AppView"]());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9kb0xpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL21haW4uc2Nzcz82YTE3Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsIkFwcENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsIm1vZGVsIiwidmlldyIsImNvdW50ZXIiLCJiaW5kQWRkUHJvamVjdCIsImhhbmRsZUFkZFByb2plY3QiLCJiaW5kIiwiYmluZFRvZ2dsZSIsImhhbmRsZVRvZ2dsZSIsIm5hbWUiLCJwcm9qZWN0IiwiUHJvamVjdENvbnRyb2xsZXIiLCJQcm9qZWN0TW9kZWwiLCJQcm9qZWN0VmlldyIsInJlbmRlck5hbWUiLCJyZW5kZXJCdG4iLCJyZW5kZXJGb3JtIiwiZm9ybSIsImdldEZvcm0iLCJiaW5kQWxsIiwiZXZlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXJnZXQiLCJkYXRhc2V0IiwidG9nZ2xlIiwiY2xhc3NMaXN0IiwiQXBwTW9kZWwiLCJwcm9qZWN0cyIsImFkZFByb2plY3QiLCJBcHBWaWV3IiwicHJvamVjdElucHV0IiwicHJvamVjdFN1Ym1pdCIsInNvcnRUaXRsZSIsInNvcnREZXNjcmlwdGlvbiIsInNvcnREYXRlIiwic29ydFByaW9yaXR5IiwibmF2QnRuIiwidG9nZ2xlQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsIl9wcm9qZWN0TmFtZSIsInZhbHVlIiwiX3Jlc2V0SW5wdXQiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvckVhY2giLCJvblByb2plY3RDaGFuZ2UiLCJ0b2RvTGlzdHMiLCJiaW5kUHJvamVjdENoYW5nZSIsInJlbmRlciIsImhhbmRsZUFkZFRvZG9MaXN0IiwidG9kb0xpc3QiLCJhZGRUb2RvTGlzdCIsImhhbmRsZURlbGV0ZVRvZG9MaXN0IiwiZGVsZXRlVG9kb0xpc3QiLCJiaW5kQWRkU2VjdGlvbiIsIlNlY3Rpb25Gb3JtIiwiZWRpdFRvZG9MaXN0IiwidXBkYXRlIiwiZmlsdGVyIiwiY2FsbGJhY2siLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic2VjdGlvbnMiLCJhZGQiLCJhcHBlbmQiLCJpbm5lckhUTUwiLCJwcmVwZW5kIiwibGkiLCJidXR0b24iLCJzdWJtaXQiLCJfc2VjdGlvbk5hbWUiLCJjcmVhdGVTZWN0aW9uIiwidG9kb3MiLCJUb2RvTGlzdENvbnRyb2xsZXIiLCJUb2RvTGlzdE1vZGVsIiwiVG9kb0xpc3RWaWV3IiwibGFiZWxOYW1lIiwiZmluaXNoIiwic3VibWl0QnRuIiwiY2FuY2VsQnRuIiwiVG9kbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwicHJpb3JpdHkiLCJ0b2RvRWxlbSIsInRvZG9DaGVjayIsImNvbXBvbmVudHMiLCJjb21wb25lbnQiLCJ0b2RvQ29tcG9uZW50IiwidG9kb1ByaW9yaXR5IiwiVG9kb0Zvcm0iLCJmb3JtQ29udGFpbmVyIiwiZm9ybUJ0biIsImxhYmVsVGl0bGUiLCJsYWJlbERlc2NyaXB0aW9uIiwiZGV0YWlscyIsImxhYmVsRGF0ZSIsInByaW9yaXR5Q29udGFpbmVyIiwicHJpb3JpdHlCdG4iLCJwcmlvcml0aWVzIiwicHJpb3JpdGllc0xpc3QiLCJsYWJlbFByaW9yaXR5IiwiaW5wdXRQcmlvcml0eSIsImJpbmRQcmlvcml0eUxhYmVsIiwiaGFuZGxlUHJpb3JpdHlMYWJlbCIsImJpbmRSZXNldFByaW9yaXR5IiwiaGFuZGxlUmVzZXRQcmlvcml0eSIsImNsb3Nlc3QiLCJsYWJlbHMiLCJsYWJlbCIsInN0eWxlIiwiY29sb3IiLCJnZXRDb21wdXRlZFN0eWxlIiwib25Ub2RvTGlzdENoYW5nZSIsImJpbmRUb2RvTGlzdENoYW5nZSIsImhhbmRsZUFkZFRvZG8iLCJ0b2RvIiwiYWRkVG9kbyIsImhhbmRsZUVkaXRUb2RvIiwiZmllbGQiLCJlZGl0VG9kbyIsImhhbmRsZURlbGV0ZVRvZG8iLCJkZWxldGVUb2RvIiwiYmluZEFkZFRvZG8iLCJiaW5kRGVsZXRlVG9kbyIsInByb2plY3RJZCIsInNlY3Rpb24iLCJfdG9kb1RpdGxlIiwiX3RvZG9EZXNjcmlwdGlvbiIsIl90b2RvRGF0ZSIsIl90b2RvUHJpb3JpdHkiLCJfcmVzZXRJbnB1dHMiLCJjaGVja2VkIiwiY29udGFpbnMiLCJwYXJzZUludCIsInBhcmVudEVsZW1lbnQiLCJiaWdQcm9qZWN0IiwiYXBwIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQzRGO0FBQzVGLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxzQkFBc0IsbW1CQUFtbUIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyxpSkFBaUosbUJBQW1CLEdBQUcsVUFBVSxtQkFBbUIsR0FB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TUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0s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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLE1BQU13SSxVQUFVLEdBQUcsSUFBSWhJLG9FQUFKLENBQXNCLElBQUlDLDBEQUFKLENBQWlCLFNBQWpCLENBQXRCLEVBQW1ELElBQUlDLHdEQUFKLENBQWdCRCwwREFBWSxDQUFDVCxPQUE3QixDQUFuRCxDQUFuQjtBQUNBd0ksVUFBVSxDQUFDekksSUFBWCxDQUFnQmMsVUFBaEIsQ0FBMkIySCxVQUFVLENBQUMxSSxLQUFYLENBQWlCZ0IsSUFBNUM7QUFDQTBILFVBQVUsQ0FBQ3pJLElBQVgsQ0FBZ0JnQixPQUFoQjtBQUNBeUgsVUFBVSxDQUFDeEgsT0FBWDtBQUVBLE1BQU15SCxHQUFHLEdBQUcsSUFBSTdJLDREQUFKLENBQWtCLElBQUk0QixrREFBSixFQUFsQixFQUFrQyxJQUFJRyxpREFBSixFQUFsQyxDQUFaLEM7Ozs7Ozs7Ozs7O0FDbkJBLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsNE1BQW9HOztBQUV0STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnRuLS1wYWdlLS1oZWFkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWNhbmNlbCB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLmJ0bi0tY2FuY2VsOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9ZGF0ZV0ge1xcbiAgY29sb3I6ICM4ZThlOGU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0LCAuYnRuLS1jYW5jZWwge1xcbiAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC43KTtcXG59XFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcbi5idG4tLWFkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlLCAubmF2X19maWx0ZXJzIGxpOmJlZm9yZSwgLm5hdl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gIG1hcmdpbjogMCAwLjI1cmVtIDAgMS4yNXJlbTtcXG59XFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pqrXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4ubmF2IC5wcm9qZWN0X2xpc3RfX2FkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm5hdl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5wcmlvcml0eS1tZWRpdW0ge1xcbiAgY29sb3I6ICNlNzlhNjc7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6ICM1ZDk3NWI7XFxufVxcblxcbi5wcmlvcml0eS1ub25lIHtcXG4gIGNvbG9yOiAjYzdjN2M3O1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GzXFxcIjtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74myXFxcIjtcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74m0XFxcIjtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLNcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb2xvcjogIzQwNDI5ZTtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ViOTk2MztcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb2xvcjogIzhkNWE4OTtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbn1cXG5cXG4uZGF0ZS1sYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM5NDIwMjA7XFxufVxcblxcbi5uYXYtLWhlYWRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG59XFxuXFxuLnNvcnQtdGl0bGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74yoXFxcIjtcXG59XFxuXFxuLnNvcnQtZGVzY3JpcHRpb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mJXFxcIjtcXG59XFxuXFxuLnNvcnQtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uc29ydC1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK5cXFwiO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjMzA1YzMwO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWJiOTRmO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM2Njk3OTE7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5tYWluX19oZWFkZXIgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50by1kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYuNXJlbSAxZnIgNi41cmVtIDJyZW07XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuLnRvLWRvX19jaGVjayB7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgbGluZWFyLCBtYXgtaGVpZ2h0IDAuMjVzO1xcbiAgbWF4LWhlaWdodDogMjB2aDtcXG59XFxuXFxuLmFkZF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbn1cXG4uYWRkX19jb250ZW50LS10b2RvIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxufVxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBwYWRkaW5nOiAwLjE1cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuW25hbWU9dGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG5cXG4uYWRkX19kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkX19wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hZGRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAxLjY1cmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDtcXG4gIGxlZnQ6IDE1cHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNnB4O1xcbiAgbGVmdDogMTRweDtcXG59XFxuLmFkZC1wcmlvcml0eSBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uYWRkX19maW5pc2gge1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhZ2VfX2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiAjMmEyYjY4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCBsaTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGJhY2tncm91bmQ6ICNlZWYwZjE7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIHBhZGRpbmc6IDJyZW0gMC4yNXJlbSAwIDJyZW07XFxufVxcbi5uYXZfX2NhdGVnb3J5IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG4ubmF2X19jYXRlZ29yeTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNCk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpIGJ1dHRvbiB7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA3KTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zYXNzL21haW4uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2Jhc2UvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2Jhc2UvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL3V0aWxzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL3V0aWxzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX2ljb25zLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL190b2RvLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL19kcm9wZG93bi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19mb3JtLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19uYXYuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9fbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjs7O0NBQUE7QUFLQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QURDRDs7QUNDQSxnREFBQTtBQUNBOztFQUVDLGNBQUE7QURFRDs7QUNBQTtFQUNDLGNBQUE7QURHRDs7QUNEQTtFQUNDLGdCQUFBO0FESUQ7O0FDRkE7RUFDQyxZQUFBO0FES0Q7O0FDSEE7O0VBRUMsV0FBQTtFQUNBLGFBQUE7QURNRDs7QUNKQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QURPRDs7QUNKQTs7RUFFQyxZQUFBO0FET0Q7QUNMQzs7RUFDQyxhQUFBO0FEUUY7O0FDSkE7RUFDQyxzQkFBQTtBRE9EOztBQ0pBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURPRDs7QUNKQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FET0Q7O0FDSkE7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QURPRDs7QUNKQTtFQUNDLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0MsOEJBQUE7QURPRjs7QUU1RkE7O0VBRUUsa0NDRGE7RURFYixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUYrRkY7O0FFNUZBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQ1BjO0VEUWQscUJBQUE7RUFDQSxrQkFBQTtBRitGRjs7QUU1RkE7RUFDRSxnQkFBQTtBRitGRjs7QUUzRkU7RUFDRSxXQ2ZXO0FINkdmO0FFM0ZFO0VBQ0Usa0JBQUE7QUY2Rko7QUUxRkU7RUFFRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUYyRko7QUV4RkU7RUFDRSxXQUFBO0FGMEZKO0FFdkZFO0VBQ0UsNkJBQUE7QUZ5Rko7QUV2Rkk7RUFDRSw2QkFBQTtBRnlGTjs7QUUvRUU7RUFDRSx5QkFBQTtFQUNBLGNDcERZO0VEcURaLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBRmtGSjs7QUU5RUE7RUFDRSwwQkFBQTtBRmlGRjtBRS9FRTtFQUNFLFdBQUE7QUZpRko7O0FFNUVBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBRitFRjs7QUU1RUE7RUFDRSxnQkFBQTtBRitFRjs7QUUxRUE7O0VBRUUsa0NDckZhO0FIa0tmOztBRTFFQTtFQUNFLGdCQUFBO0FGNkVGOztBRTFFQTtFQUNFLGNDcEZXO0FIaUtiOztBRTFFQTtFQUNFLGlCQUFBO0FGNkVGOztBSS9LQTtFQUNDLFlBQUE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUprTEY7QUloTEU7RUFDRSxhQUFBO0FKa0xKOztBSTVLRTtFQUVFLHVCQUFBO0FKOEtKO0FJM0tFO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FKNktKO0FJM0tJO0VBQ0Usa0NBQUE7QUo2S047QUl4S0U7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUowS0o7QUl2S0U7RUFDRSxZRHVCTztFQ3RCUCw2QkFBQTtFQzlCRixrQ0FBQTtFQUNBLGdCQUFBO0VEK0JFLGNBQUE7QUowS0o7O0FNN01FO0VBSUUsMkJIc0RZO0FIdUpoQjtBTTFNRTtFRFRBLGtDQUFBO0VBQ0EsZ0JBQUE7QUxzTkY7QU16TUU7RUFDRSxZQUFBO0VBQ0EsNkJIUmE7QUhtTmpCO0FNeE1FO0VBQ0UsWUhxQ087RUVwRFQsa0NBQUE7RUFDQSxnQkFBQTtBTDBORjtBTXhNRTtFQUNFLFlBQUE7RUR6QkYsa0NBQUE7RUFDQSxnQkFBQTtBTG9PRjs7QU1yTUU7RUFDRSxjSHRCYTtBSDhOakI7O0FNek1FO0VBQ0UsY0h0QmE7QUhrT2pCOztBTTdNRTtFQUNFLGNIdEJhO0FIc09qQjs7QU1qTkU7RUFDRSxjSHRCYTtBSDBPakI7O0FLMU9JO0VBQ0UsWUZ5Qk87QUhvTmI7O0FLOU9JO0VBQ0UsWUZ5Qk87QUh3TmI7O0FLbFBJO0VBQ0UsWUZ5Qk87QUg0TmI7O0FLdFBJO0VBQ0UsWUZ5Qk87QUhnT2I7O0FLbFBJO0VBQ0UsY0ZGTztBSHVQYjs7QUt0UEk7RUFDRSxjRkZPO0FIMlBiOztBSzFQSTtFQUNFLGNGRk87QUgrUGI7O0FLOVBJO0VBQ0UsY0ZGTztBSG1RYjs7QUtsUUk7RUFDRSxjRkZPO0FIdVFiOztBTS9PQTtFQUNFLFlBQUE7RUFDQSxjSHhDYztFRUNkLGtDQUFBO0VBQ0EsZ0JBQUE7RUN3Q0EscUJBQUE7QU5tUEY7O0FLdFJJO0VBQ0UsWUZzQ087QUhtUGI7O0FLMVJJO0VBQ0UsWUZzQ087QUh1UGI7O0FLOVJJO0VBQ0UsWUZzQ087QUgyUGI7O0FLbFNJO0VBQ0UsWUZzQ087QUgrUGI7O0FLOVJJO0VBQ0UsY0ZNTztBSDJSYjs7QUtsU0k7RUFDRSxjRk1PO0FIK1JiOztBS3RTSTtFQUNFLGNGTU87QUhtU2I7O0FLMVNJO0VBQ0UsY0ZNTztBSHVTYjs7QU0xUUE7RUFDRSxZQUFBO0VEbkRBLGtDQUFBO0VBQ0EsZ0JBQUE7QUxpVUY7O0FPeFVBO0VBQ0UsYUFBQTtFQUNBLGtEQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FQMlVGO0FPelVFO0VBQ0UsZUFBQTtBUDJVSjs7QVFsVkE7RUFDRSw4Q0FBQTtFQUNBLGdCQUFBO0FScVZGOztBU3ZWQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0FUMFZGO0FTeFZFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBVDBWSjtBU3ZWRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FUeVZKOztBU3JWQTs7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBVHdWRjs7QVNyVkE7RUFDRSxZQUFBO0FUd1ZGOztBU3JWQTtFQUNFLCtDQUFBO0FUd1ZGOztBU3JWQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBVHdWRjs7QVNyVkE7RUFDRSxrQkFBQTtBVHdWRjtBU3RWRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QVR3Vko7O0FTcFZBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QVR1VkY7QVNyVkU7RUFDRSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QVR1Vko7QVNwVkU7RUFDRSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBVHNWSjtBU25WRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QVRxVko7O0FTalZBO0VBQ0UsbUJBQUE7QVRvVkY7O0FTalZBO0VBQ0Usb0NBQUE7QVRvVkY7O0FTalZBO0VBQ0UsZUFBQTtBVG9WRjs7QVVsYkE7RUFDRSxlQUFBO0VBQ0EsbUJQR2M7RU9GZCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QVZxYkY7QVVsYkU7RUFDRSxhQUFBO0VBQ0EsT0FBQTtBVm9iSjtBVWxiSTtFQUNFLGlCQUFBO0FWb2JOOztBV25jQTtFQUVFLG1CUklnQjtFUUhoQixZQUFBO0VBQ0EsK0NBQUE7RUFDQSw0QkFBQTtBWHFjRjtBV25jRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQ0FBQTtBWHFjSjtBV25jSTtFQUNFLG1CQUFBO0FYcWNOO0FXbGNJO0VBQ0UsYUFBQTtBWG9jTjtBV2xjTTtFQUNFLG1DQUFBO0FYb2NSO0FXamNNO0VBRUUsT0FBQTtFQUNBLGlCQUFBO0FYa2NSO0FXN2JFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FYK2JKO0FXN2JJO0VBQ0UsbUNBQUE7QVgrYk47O0FZbmVBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0Fac2VGOztBWW5lQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBWnNlRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnRuLS1wYWdlLS1oZWFkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWNhbmNlbCB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLmJ0bi0tY2FuY2VsOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9ZGF0ZV0ge1xcbiAgY29sb3I6ICM4ZThlOGU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0LCAuYnRuLS1jYW5jZWwge1xcbiAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC43KTtcXG59XFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcbi5idG4tLWFkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlLCAubmF2X19maWx0ZXJzIGxpOmJlZm9yZSwgLm5hdl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gIG1hcmdpbjogMCAwLjI1cmVtIDAgMS4yNXJlbTtcXG59XFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pqrXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4ubmF2IC5wcm9qZWN0X2xpc3RfX2FkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm5hdl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5wcmlvcml0eS1tZWRpdW0ge1xcbiAgY29sb3I6ICNlNzlhNjc7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6ICM1ZDk3NWI7XFxufVxcblxcbi5wcmlvcml0eS1ub25lIHtcXG4gIGNvbG9yOiAjYzdjN2M3O1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GzXFxcIjtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74myXFxcIjtcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74m0XFxcIjtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLNcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb2xvcjogIzQwNDI5ZTtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ViOTk2MztcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb2xvcjogIzhkNWE4OTtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbn1cXG5cXG4uZGF0ZS1sYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM5NDIwMjA7XFxufVxcblxcbi5uYXYtLWhlYWRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG59XFxuXFxuLnNvcnQtdGl0bGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74yoXFxcIjtcXG59XFxuXFxuLnNvcnQtZGVzY3JpcHRpb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mJXFxcIjtcXG59XFxuXFxuLnNvcnQtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uc29ydC1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK5cXFwiO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjMzA1YzMwO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWJiOTRmO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM2Njk3OTE7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5tYWluX19oZWFkZXIgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50by1kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYuNXJlbSAxZnIgNi41cmVtIDJyZW07XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuLnRvLWRvX19jaGVjayB7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgbGluZWFyLCBtYXgtaGVpZ2h0IDAuMjVzO1xcbiAgbWF4LWhlaWdodDogMjB2aDtcXG59XFxuXFxuLmFkZF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbn1cXG4uYWRkX19jb250ZW50LS10b2RvIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxufVxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBwYWRkaW5nOiAwLjE1cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuW25hbWU9dGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG5cXG4uYWRkX19kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkX19wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hZGRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAxLjY1cmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDtcXG4gIGxlZnQ6IDE1cHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNnB4O1xcbiAgbGVmdDogMTRweDtcXG59XFxuLmFkZC1wcmlvcml0eSBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uYWRkX19maW5pc2gge1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhZ2VfX2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiAjMmEyYjY4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCBsaTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGJhY2tncm91bmQ6ICNlZWYwZjE7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIHBhZGRpbmc6IDJyZW0gMC4yNXJlbSAwIDJyZW07XFxufVxcbi5uYXZfX2NhdGVnb3J5IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG4ubmF2X19jYXRlZ29yeTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNCk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpIGJ1dHRvbiB7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA3KTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG59XCIsXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFxuXFx0Jjpmb2N1cyB7XFxuXFx0XFx0b3V0bGluZTogbm9uZTtcXG5cXHR9XFxufVxcblxcbioge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogNTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0bWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS4yNWVtKTtcXG59XCIsXCJib2R5LFxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjk7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuMzVyZW07XFxuICBsaW5lLWhlaWdodDogMztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ0biB7XFxuICAmLS1wYWdlLS1oZWFkZXIge1xcbiAgICBjb2xvcjogJGNvbG9yLWhlYWRlcjtcXG4gIH1cXG5cXG4gICYtLWljb24ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxuXFxuICAmLS1zdWJtaXQsXFxuICAmLS1jYW5jZWwge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IC44NWVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLS41cHg7XFxuICB9XFxuXFxuICAmLS1zdWJtaXQge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG5cXG4gICYtLWNhbmNlbCB7XFxuICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNyk7XFxuICAgIH1cXG5cXG4gIH1cXG5cXG59XFxuXFxuLy8gTmF2XFxuXFxuLm5hdiB7XFxuICAmLS1oZWFkaW5nIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcXG4gIH1cXG59XFxuXFxuW2RhdGEtdG9nZ2xlPVxcXCJhZGQtcHJvamVjdFxcXCJdIHtcXG4gIGNvbG9yOiByZ2JhKCMwMDAsIC43NSk7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6ICMwMDA7XFxuICB9XFxuXFxufVxcblxcbi5tYWluX19oZWFkZXIgYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4udG8tZG9fX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8vIEZvcm1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG59XFxuXFxuW25hbWU9XFxcInRpdGxlXFxcIl0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9XFxcImRhdGVcXFwiXSB7XFxuICBjb2xvcjogJGNvbG9yLWZvcm07XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVwiLFwiLy8gRm9udHNcXG4kZm9udC1wcmltYXJ5OiAnTmFudW0gR290aGljJywgQXJpYWw7XFxuXFxuXFxuLy8gQ29sb3JzXFxuJGNvbG9yLXByaW1hcnk6IHJnYig0MiwgNDMsIDEwNCk7XFxuJGNvbG9yLXNlY29uZGFyeTogcmdiKDIzOCwgMjQwLCAyNDEpO1xcblxcbiRjb2xvci1oZWFkZXI6ICNmZmY7XFxuJGNvbG9yLXByb2plY3RzOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuJGNvbG9yLWZvcm06IHJnYigxNDIsIDE0MiwgMTQyKTtcXG5cXG4kY29sb3ItcHJpb3JpdHk6IChcXG4gIGhpZ2g6IHJnYigxNjEsIDY2LCA2NiksXFxuICBtZWRpdW06IHJnYigyMzEsIDE1NCwgMTAzKSxcXG4gIGxvdzogcmdiKDkzLCAxNTEsIDkxKSxcXG4gIG5vbmU6IHJnYigxOTksIDE5OSwgMTk5KVxcbik7XFxuXFxuJGNvbG9yLWRhdGU6IChcXG4gIGFsbDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTUlKSxcXG4gIHRvZGF5OiByZ2IoMjM1LCAxNTMsIDk5KSxcXG4gIHVwY29taW5nOiByZ2IoMTQxLCA5MCwgMTM3KSxcXG4gIGFueXRpbWU6IHJnYigxMjIsIDEyMiwgMTIyKSxcXG4gIGxhdGU6IHJnYigxNDgsIDMyLCAzMilcXG4pO1xcblxcbiRjb2xvci1zb3J0OiAoXFxuICB0aXRsZTogcmdiKDQ4LCA5MiwgNDgpLFxcbiAgZGVzY3JpcHRpb246IHJnYigyMzUsIDE4NSwgNzkpLFxcbiAgZGF0ZTogcmdiKDEwMiwgMTUxLCAxNDUpLFxcbiAgcHJpb3JpdHk6IG1hcC1nZXQoJGNvbG9yLXByaW9yaXR5LCBoaWdoKVxcbik7XFxuXFxuLy8gSWNvbnNcXG5cXG4kaWNvbi1wcmlvcml0eTogXFxcIlxcXFxmMDJlXFxcIjtcXG5cXG4kaWNvbnMtZGF0ZTogKFxcbiAgYWxsOiBcXFwiXFxcXGYwNzNcXFwiLFxcbiAgdG9kYXk6IFxcXCJcXFxcZjI3MlxcXCIsXFxuICB1cGNvbWluZzogXFxcIlxcXFxmMjc0XFxcIixcXG4gIGFueXRpbWU6IFxcXCJcXFxcZjEzM1xcXCIsXFxuKTtcXG5cXG4kaWNvbnMtY2FyZXQ6IChcXG4gIHVwOiBcXFwiXFxcXGYwZDhcXFwiLFxcbiAgZG93bjogXFxcIlxcXFxmMGQ3XFxcIixcXG4gIHJpZ2h0OiBcXFwiXFxcXGYwZGFcXFwiXFxuKTtcXG5cXG4kaWNvbnMtc29ydDogKFxcbiAgdGl0bGU6IFxcXCJcXFxcZjMyOFxcXCIsXFxuICBkZXNjcmlwdGlvbjogXFxcIlxcXFxmMjQ5XFxcIixcXG4gIGRhdGU6IFxcXCJcXFxcZjA3M1xcXCIsXFxuICBwcmlvcml0eTogJGljb24tcHJpb3JpdHksXFxuKTtcXG5cXG4kaWNvbi1hZGQ6IFxcXCJcXFxcZjA2N1xcXCI7XFxuXFxuLy8gT3RoZXJzXFxuJG1hcmdpbi1pbmRlbnQ6IDAgLjI1cmVtIDAgMS4yNXJlbTtcIixcImJ1dHRvbiB7XFxuXFx0Ym9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIFxcbiAgJjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxufVxcblxcbi5idG4ge1xcblxcbiAgJi0tc3VibWl0LFxcbiAgJi0tY2FuY2VsIHtcXG4gICAgcGFkZGluZzogLjE1cmVtIC41cmVtO1xcbiAgfVxcbiAgXFxuICAmLS1zdWJtaXQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43KTtcXG4gICAgfVxcblxcbiAgfVxcblxcbiAgJi0tY2FuY2VsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoI2ZmZiwgLjUpO1xcbiAgfVxcblxcbiAgJi0tYWRkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICRpY29uLWFkZDtcXG4gICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gIH1cXG5cXG59XCIsXCJAbWl4aW4gZm9udC1hd2Vzb21lLTQwMCgpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5AbWl4aW4gZm9udC1hd2Vzb21lLTcwMCgpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5AbWl4aW4gaWNvbi1jb250ZW50KCR0YXJnZXQsICRtYXApIHtcXG4gIEBlYWNoICRrZXksICRpY29uIGluICRtYXAge1xcbiAgICAuI3skdGFyZ2V0fS0jeyRrZXl9OjpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6ICRpY29uO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtaXhpbiBpY29uLWNvbG9yKCR0YXJnZXQsICRtYXApIHtcXG4gIEBlYWNoICRrZXksICRjb2xvciBpbiAkbWFwIHtcXG4gICAgLiN7JHRhcmdldH0tI3ska2V5fTo6YmVmb3JlIHtcXG4gICAgICBjb2xvcjogJGNvbG9yO1xcbiAgICB9XFxuICB9XFxufVwiLFwiLy8gTkFWLUlDT05TXFxuXFxuLm5hdiB7XFxuICAmX190by1kbyBsaTpiZWZvcmUsXFxuICAmX19wcm9qZWN0cyBsaTpiZWZvcmUsXFxuICAmX19maWx0ZXJzIGxpOmJlZm9yZSxcXG4gICZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICAgIG1hcmdpbjogJG1hcmdpbi1pbmRlbnQ7XFxuICB9XFxuXFxuICAmX190by1kbyBsaTpiZWZvcmUsXFxuICAmX19zb3J0cyBsaTpiZWZvcmUge1xcbiAgICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNDAwKCk7XFxuICB9XFxuXFxuICAmX19wcm9qZWN0cyBsaTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4pqrXFxcIjtcXG4gICAgY29sb3I6ICRjb2xvci1wcm9qZWN0cztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0X2xpc3RfX2FkZDpiZWZvcmUge1xcbiAgICBjb250ZW50OiAkaWNvbi1hZGQ7XFxuICAgIEBpbmNsdWRlIGZvbnQtYXdlc29tZS03MDAoKTtcXG4gIH1cXG5cXG4gICZfX2ZpbHRlcnMgbGk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDJlXFxcIjtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTQwMCgpO1xcbiAgfVxcbn1cXG5cXG4vLyBDb2xvciBQcmlvcml0eSBJY29uc1xcbkBlYWNoICRsZXZlbCwgJGNvbG9yIGluICRjb2xvci1wcmlvcml0eSB7XFxuICAucHJpb3JpdHktI3skbGV2ZWx9IHtcXG4gICAgY29sb3I6ICRjb2xvcjtcXG4gIH1cXG59XFxuXFxuLy8gRGF0ZSBJY29uc1xcbkBpbmNsdWRlIGljb24tY29udGVudCgnZGF0ZScsICRpY29ucy1kYXRlKTtcXG5AaW5jbHVkZSBpY29uLWNvbG9yKCdkYXRlJywgJGNvbG9yLWRhdGUpO1xcblxcbi8vIENhdGVnb3J5IEljb25zXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogbWFwLWdldCgkaWNvbnMtY2FyZXQsIGRvd24pO1xcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbiAgbWFyZ2luLXJpZ2h0OiAuNzVyZW07XFxufVxcblxcbi8vIFNvcnQgSWNvbnNcXG5AaW5jbHVkZSBpY29uLWNvbnRlbnQoJ3NvcnQnLCAkaWNvbnMtc29ydCk7XFxuQGluY2x1ZGUgaWNvbi1jb2xvcignc29ydCcsICRjb2xvci1zb3J0KTtcXG5cXG4vLyBNQUlOIElDT05TXFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogbWFwLWdldCgkaWNvbnMtY2FyZXQsIGRvd24pO1xcbiAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbn1cIixcIi50by1kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYuNXJlbSAxZnIgNi41cmVtIDJyZW07XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIFxcbiAgJl9fY2hlY2sge1xcbiAgICBtYXJnaW4tdG9wOiA3cHg7XFxuICB9XFxuXFxufVwiLFwiLmRyb3Bkb3duIHtcXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzIGxpbmVhciwgbWF4LWhlaWdodCAuMjVzO1xcbiAgbWF4LWhlaWdodDogMjB2aDtcXG59XCIsXCIuYWRkX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG5cXG4gICYtLXRvZG8ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcXG4gIH1cXG5cXG4gICYtLXByb2plY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBwYWRkaW5nOiAuMTVyZW07XFxuICB9XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IC4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuW25hbWU9XFxcInRpdGxlXFxcIl0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICAmOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNXB4O1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgJjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICBsZWZ0OiAxNHB4O1xcbiAgfVxcblxcbiAgbGFiZWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAuNXJlbTtcXG4gIH1cXG59XFxuXFxuLmFkZF9fZmluaXNoIHtcXG4gIG1hcmdpbjogLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKCNmZmYsIC41KTtcXG59XFxuXFxubGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIixcIi5wYWdlX19oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogJGNvbG9yLXByaW1hcnk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgXFxuXFxuICB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuXFxuICAgICYgbGk6bGFzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIH1cXG4gIH1cXG59XCIsXCIubmF2IHtcXG4gIFxcbiAgYmFja2dyb3VuZDogJGNvbG9yLXNlY29uZGFyeTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4yNSk7XFxuICBwYWRkaW5nOiAycmVtIC4yNXJlbSAwIDJyZW07XFxuXFxuICAmX19jYXRlZ29yeSB7XFxuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG5cXG4gICAgJjpsYXN0LW9mLXR5cGUge1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgbGkge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMDQpO1xcbiAgICAgIH1cXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgLy8gTWFrZXMgdGhlIHdob2xlIGxpbmUgY2xpY2thYmxlIGluc3RlYWQgb2YganVzdCB0aGUgdGV4dC5cXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtLWhlYWRpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMDcpO1xcbiAgICB9XFxuICB9XFxuXFxufVwiLFwibWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFByb2plY3RDb250cm9sbGVyIH0gZnJvbSAnLi9Qcm9qZWN0Q29udHJvbGxlcidcbmltcG9ydCB7IFByb2plY3RNb2RlbCB9IGZyb20gJy4vUHJvamVjdE1vZGVsJ1xuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tICcuL1Byb2plY3RWaWV3J1xuXG5leHBvcnQgY2xhc3MgQXBwQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICB0aGlzLmNvdW50ZXIgPSAwXG4gICAgdGhpcy52aWV3LmJpbmRBZGRQcm9qZWN0KHRoaXMuaGFuZGxlQWRkUHJvamVjdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kVG9nZ2xlKHRoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcykpXG4gIH1cblxuICBoYW5kbGVBZGRQcm9qZWN0IChuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q29udHJvbGxlcihuZXcgUHJvamVjdE1vZGVsKG5hbWUpLCBuZXcgUHJvamVjdFZpZXcoUHJvamVjdE1vZGVsLmNvdW50ZXIpKVxuICAgIHByb2plY3Qudmlldy5yZW5kZXJOYW1lKG5hbWUpXG4gICAgcHJvamVjdC52aWV3LnJlbmRlckJ0bihuYW1lKVxuICAgIHByb2plY3Qudmlldy5yZW5kZXJGb3JtKHByb2plY3QubW9kZWwuZm9ybSlcbiAgICBwcm9qZWN0LnZpZXcuZ2V0Rm9ybSgpXG4gICAgcHJvamVjdC5iaW5kQWxsKClcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuZGF0YXNldC50b2dnbGV9YCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFwcE1vZGVsIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXVxuICB9XG5cbiAgYWRkUHJvamVjdCAocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KVxuICAgIHByb2plY3QuaWQgPSB0aGlzLnByb2plY3RzLmxlbmd0aFxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQXBwVmlldyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyBGb3JtIHRvIGNyZWF0ZSBuZXcgcHJvamVjdHNcbiAgICB0aGlzLnByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtLXByb2plY3QgW25hbWU9XCJuYW1lXCJdJylcbiAgICB0aGlzLnByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLS1wcm9qZWN0IC5idG4tLXN1Ym1pdCcpXG5cbiAgICAvLyBTb3J0IHRhc2tzXG4gICAgdGhpcy5zb3J0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC10aXRsZScpXG4gICAgdGhpcy5zb3J0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1kZXNjcmlwdGlvbicpXG4gICAgdGhpcy5zb3J0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LWRhdGUnKVxuICAgIHRoaXMuc29ydFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtcHJpb3JpdHknKVxuXG4gICAgLy8gRmlsdGVyIHRhc2tzXG5cbiAgICAvLyBUb2dnbGUgTmF2aWdhdGlvblxuICAgIHRoaXMubmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlPVwibmF2XCJdJylcblxuICAgIC8vIFRvZ2dsZSBjYXRlZ29yaWVzXG4gICAgdGhpcy50b2dnbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLS1kcm9wZG93bicpXG4gIH1cblxuICAvLyBHZXQgbmV3IHByb2plY3QncyBuYW1lXG4gIGdldCBfcHJvamVjdE5hbWUgKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RJbnB1dC52YWx1ZVxuICB9XG5cbiAgLy8gUmVzZXQgSW5wdXQgdG8gY3JlYXRlIGEgbmV3IHByb2plY3RcbiAgX3Jlc2V0SW5wdXQgKCkge1xuICAgIHRoaXMucHJvamVjdElucHV0LnZhbHVlID0gJydcbiAgfVxuXG4gIGJpbmRBZGRQcm9qZWN0IChoYW5kbGVyKSB7XG4gICAgdGhpcy5wcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaGFuZGxlcih0aGlzLl9wcm9qZWN0TmFtZSlcbiAgICAgIHRoaXMuX3Jlc2V0SW5wdXQoKVxuICAgIH0pXG4gIH1cblxuICBiaW5kVG9nZ2xlIChoYW5kbGVyKSB7XG4gICAgdGhpcy50b2dnbGVCdG4uZm9yRWFjaCh0b2dnbGVCdG4gPT4gdG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcikpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQcm9qZWN0Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLm1vZGVsLnRvZG9MaXN0cylcbiAgICB0aGlzLm1vZGVsLmJpbmRQcm9qZWN0Q2hhbmdlKHRoaXMub25Qcm9qZWN0Q2hhbmdlLmJpbmQodGhpcykpXG4gIH1cblxuICBvblByb2plY3RDaGFuZ2UgKHRvZG9MaXN0cykge1xuICAgIHRoaXMudmlldy5yZW5kZXIodG9kb0xpc3RzKVxuICB9XG5cbiAgaGFuZGxlQWRkVG9kb0xpc3QgKHRvZG9MaXN0KSB7XG4gICAgdGhpcy5tb2RlbC5hZGRUb2RvTGlzdCh0b2RvTGlzdClcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZVRvZG9MaXN0ICh0b2RvTGlzdCkge1xuICAgIHRoaXMubW9kZWwuZGVsZXRlVG9kb0xpc3QodG9kb0xpc3QpXG4gIH1cblxuICBiaW5kQWxsICgpIHtcbiAgICB0aGlzLnZpZXcuYmluZEFkZFNlY3Rpb24odGhpcy5oYW5kbGVBZGRUb2RvTGlzdC5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBTZWN0aW9uRm9ybSB9IGZyb20gJy4vU2VjdGlvbkZvcm0nXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0TW9kZWwge1xuICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmlkID0gKytQcm9qZWN0TW9kZWwuY291bnRlclxuICAgIHRoaXMudG9kb0xpc3RzID0gW11cbiAgICB0aGlzLmZvcm0gPSBuZXcgU2VjdGlvbkZvcm0odGhpcy5pZClcbiAgfVxuXG4gIGFkZFRvZG9MaXN0ICh0b2RvTGlzdCkge1xuICAgIHRoaXMudG9kb0xpc3RzLnB1c2godG9kb0xpc3QpXG4gICAgdG9kb0xpc3QuaWQgPSB0aGlzLnRvZG9MaXN0cy5sZW5ndGhcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGVkaXRUb2RvTGlzdCAoaWQsIHVwZGF0ZSkge1xuICAgIHRoaXMudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHMubWFwKCh0b2RvTGlzdCkgPT4ge1xuICAgICAgaWYgKHRvZG9MaXN0LmlkID09PSBpZCkge1xuICAgICAgICB0b2RvTGlzdC5uYW1lID0gdXBkYXRlXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGRlbGV0ZVRvZG9MaXN0IChpZCkge1xuICAgIHRoaXMudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHMuZmlsdGVyKHRvZG9MaXN0ID0+IHRvZG9MaXN0LmlkICE9PSBpZClcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGJpbmRQcm9qZWN0Q2hhbmdlIChjYWxsYmFjaykge1xuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlID0gY2FsbGJhY2tcbiAgfVxufVxuXG5Qcm9qZWN0TW9kZWwuY291bnRlciA9IDBcbiIsImltcG9ydCB7IFRvZG9MaXN0Q29udHJvbGxlciB9IGZyb20gJy4vVG9kb0xpc3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgVG9kb0xpc3RNb2RlbCB9IGZyb20gJy4vVG9kb0xpc3RNb2RlbCdcbmltcG9ydCB7IFRvZG9MaXN0VmlldyB9IGZyb20gJy4vVG9kb0xpc3RWaWV3J1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdFZpZXcge1xuICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICB0aGlzLnByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMucHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3QtJHtpZH1gKVxuICAgIHRoaXMuc2VjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2VjdGlvbnMuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbnMnKVxuICAgIHRoaXMucHJvamVjdC5hcHBlbmQodGhpcy5zZWN0aW9ucylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5wcm9qZWN0KVxuICAgIHRoaXMuaWQgPSBpZFxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0XG4gIHJlbmRlck5hbWUgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgdGhpcy5uYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfX25hbWUnKVxuICAgIHRoaXMubmFtZS5pbm5lckhUTUwgPSBuYW1lXG4gICAgdGhpcy5wcm9qZWN0LnByZXBlbmQodGhpcy5uYW1lKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbiBsaW5rZWQgdG8gdGhlIHByb2plY3RcbiAgcmVuZGVyQnRuIChuYW1lKSB7XG4gICAgdGhpcy5saSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tZmlsdGVyJylcbiAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJywgYHByb2plY3QtJHt0aGlzLmlkfWApXG4gICAgdGhpcy5idXR0b24uaW5uZXJIVE1MID0gbmFtZVxuICAgIHRoaXMubGkuYXBwZW5kKHRoaXMuYnV0dG9uKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0c19saXN0JykuYXBwZW5kKHRoaXMubGkpXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIGFkZCBzZWN0aW9uIGZvcm1cbiAgcmVuZGVyRm9ybSAoZm9ybSkge1xuICAgIGZvcm0ucmVuZGVyKHRoaXMucHJvamVjdClcbiAgfVxuXG4gIC8vIEdldCB0aGUgYWRkIHNlY3Rpb24gZm9ybSBpbnB1dHNcbiAgZ2V0Rm9ybSAoKSB7XG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlY3Rpb24tZm9ybS0ke3RoaXMuaWR9IFtuYW1lPVwic2VjdGlvblwiXWApXG4gICAgdGhpcy5zdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH0gLmJ0bi0tc3VibWl0YClcbiAgfVxuXG4gIC8vIEdldCBTZWN0aW9uJ3MgTmFtZSBmcm9tIHRoZSBmb3JtXG4gIGdldCBfc2VjdGlvbk5hbWUgKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWUudmFsdWVcbiAgfVxuXG4gIC8vIFJlc2V0IGZvcm0gaW5wdXRcbiAgX3Jlc2V0SW5wdXQgKCkge1xuICAgIHRoaXMubmFtZS52YWx1ZSA9ICcnXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHByb2plY3QgYnkgcmVuZGVyaW5nIGV2ZXJ5IHNlY3Rpb25cbiAgcmVuZGVyICh0b2RvTGlzdHMpIHtcbiAgICB0aGlzLnNlY3Rpb25zLmlubmVySFRNTCA9ICcnXG5cbiAgICBmb3IgKGNvbnN0IHRvZG9MaXN0IG9mIHRvZG9MaXN0cykge1xuICAgICAgdG9kb0xpc3Qudmlldy5jcmVhdGVTZWN0aW9uKClcbiAgICAgIHRvZG9MaXN0LnZpZXcucmVuZGVyTmFtZSh0b2RvTGlzdC5tb2RlbC5uYW1lKVxuICAgICAgdG9kb0xpc3Qudmlldy5yZW5kZXIodG9kb0xpc3QubW9kZWwudG9kb3MpXG4gICAgICB0b2RvTGlzdC52aWV3LnJlbmRlckZvcm0odG9kb0xpc3QubW9kZWwuZm9ybSlcbiAgICAgIHRvZG9MaXN0LnZpZXcuZ2V0Rm9ybSh0b2RvTGlzdC5tb2RlbC5mb3JtKVxuICAgICAgdG9kb0xpc3QuYmluZEFsbCgpXG4gICAgfVxuICB9XG5cbiAgLy8gRXZlbnQgTGlzdGVuZXJzXG5cbiAgYmluZEFkZFNlY3Rpb24gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGhhbmRsZXIobmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCh0aGlzLl9zZWN0aW9uTmFtZSwgdGhpcy5pZCksIG5ldyBUb2RvTGlzdFZpZXcodGhpcy5pZCkpKVxuICAgICAgdGhpcy5fcmVzZXRJbnB1dCgpXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlY3Rpb25Gb3JtIHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICByZW5kZXIgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZCcsICdhZGQtLXNlY3Rpb24nKVxuICAgIGZvcm0uaWQgPSBgc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FkZF9fY29udGVudCcsICdhZGRfX2NvbnRlbnQtLXNlY3Rpb24nKVxuXG4gICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc2VjdGlvbicpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlY3Rpb25cXCdzIE5hbWUnKVxuICAgIGxhYmVsTmFtZS5hcHBlbmQobmFtZSlcbiAgICBjb250ZW50LmFwcGVuZChsYWJlbE5hbWUpXG5cbiAgICBjb25zdCBmaW5pc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZpbmlzaC5jbGFzc0xpc3QuYWRkKCdhZGRfX2ZpbmlzaCcpXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tc3VibWl0JylcbiAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FkZCBTZWN0aW9uJ1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWNhbmNlbCcpXG4gICAgY2FuY2VsQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnXG5cbiAgICBmaW5pc2guYXBwZW5kKHN1Ym1pdEJ0biwgY2FuY2VsQnRuKVxuICAgIGZvcm0uYXBwZW5kKGNvbnRlbnQsIGZpbmlzaClcbiAgICBjb250YWluZXIuYXBwZW5kKGZvcm0pXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSA9ICdOL0EnLCBwcmlvcml0eSA9ICdub25lJykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgfVxuXG4gIHJlbmRlciAoY29udGFpbmVyKSB7XG4gICAgY29uc3QgdG9kb0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9FbGVtLmNsYXNzTGlzdC5hZGQoJ3RvLWRvJylcbiAgICB0b2RvRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGF0ZScsIHRoaXMuZGF0ZSlcbiAgICB0b2RvRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpb3JpdHknLCB0aGlzLnByaW9yaXR5KVxuICAgIHRvZG9FbGVtLmlkID0gdGhpcy5pZFxuXG4gICAgY29uc3QgdG9kb0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRvZG9DaGVjay5jbGFzc0xpc3QuYWRkKCd0by1kb19fY2hlY2snKVxuICAgIHRvZG9DaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHRvZG9FbGVtLmFwcGVuZCh0b2RvQ2hlY2spXG5cbiAgICBjb25zdCBjb21wb25lbnRzID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdkYXRlJ11cbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzKSB7XG4gICAgICBjb25zdCB0b2RvQ29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRvZG9Db21wb25lbnQuY2xhc3NMaXN0LmFkZChgdG8tZG9fXyR7Y29tcG9uZW50fWApXG4gICAgICB0b2RvQ29tcG9uZW50LmlubmVySFRNTCA9IHRoaXNbY29tcG9uZW50XVxuICAgICAgdG9kb0VsZW0uYXBwZW5kKHRvZG9Db21wb25lbnQpXG4gICAgfVxuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG8tZG9fX3ByaW9yaXR5JywgYHByaW9yaXR5LSR7dGhpcy5wcmlvcml0eX1gKVxuICAgIHRvZG9Qcmlvcml0eS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuICAgIHRvZG9FbGVtLmFwcGVuZCh0b2RvUHJpb3JpdHkpXG5cbiAgICBjb250YWluZXIuYXBwZW5kKHRvZG9FbGVtKVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVG9kb0Zvcm0ge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5pZCA9ICsrVG9kb0Zvcm0uY291bnRlclxuICB9XG5cbiAgcmVuZGVyIChjb250YWluZXIpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZF9fdG9kbycpXG5cbiAgICBjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBmb3JtQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWRyb3Bkb3duJywgJ2J0bi0tYWRkJylcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGZvcm1CdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBhZGQtdG9kby0ke3RoaXMuaWR9YClcbiAgICBmb3JtQnRuLmlubmVySFRNTCA9ICdBZGQgVGFzaydcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZCcsICdhZGQtLXRvZG8nLCAndG9kby1mb3JtJywgJ2Ryb3Bkb3duJylcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCBgYWRkLXRvZG8tJHt0aGlzLmlkfWApXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FkZF9fY29udGVudCcsICdhZGRfX2NvbnRlbnQtLXRvZG8nKVxuXG4gICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJylcbiAgICBsYWJlbFRpdGxlLmFwcGVuZCh0aXRsZSlcblxuICAgIGNvbnN0IGxhYmVsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJylcbiAgICBsYWJlbERlc2NyaXB0aW9uLmFwcGVuZChkZXNjcmlwdGlvbilcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnYWRkX19kZXRhaWxzJylcblxuICAgIGNvbnN0IGxhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKVxuICAgIGxhYmVsRGF0ZS5hcHBlbmQoZGF0ZSlcblxuICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGRfX3ByaW9yaXR5JylcbiAgICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBhZGQtcHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tdG9nZ2xlJylcbiAgICBwcmlvcml0eUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuXG4gICAgY29uc3QgcHJpb3JpdGllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdGllcy5jbGFzc0xpc3QuYWRkKCdhZGQtcHJpb3JpdHknLCAnZHJvcGRvd24nLCAnaGlkZGVuJylcbiAgICBwcmlvcml0aWVzLnNldEF0dHJpYnV0ZSgnaWQnLCBgYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1gKVxuICAgIGNvbnN0IHByaW9yaXRpZXNMaXN0ID0gWydoaWdoJywgJ21lZCcsICdsb3cnLCAnbm9uZSddXG5cbiAgICBmb3IgKGNvbnN0IHByaW9yaXR5IG9mIHByaW9yaXRpZXNMaXN0KSB7XG4gICAgICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWxQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBwcmlvcml0eS0ke3ByaW9yaXR5fS0ke3RoaXMuaWR9YClcbiAgICAgIGxhYmVsUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHtwcmlvcml0eX1gLCBgcHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgICBsYWJlbFByaW9yaXR5LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1ib29rbWFya1wiPjwvaT4nXG5cbiAgICAgIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcmlvcml0eSlcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsIGBwcmlvcml0eS0ke3ByaW9yaXR5fS0ke3RoaXMuaWR9YClcblxuICAgICAgcHJpb3JpdGllcy5hcHBlbmQobGFiZWxQcmlvcml0eSwgaW5wdXRQcmlvcml0eSlcbiAgICB9XG5cbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlCdG4sIHByaW9yaXRpZXMpXG5cbiAgICBjb25zdCBmaW5pc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZpbmlzaC5jbGFzc0xpc3QuYWRkKCdhZGRfX2ZpbmlzaCcpXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tc3VibWl0JylcbiAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FkZCBUYXNrJ1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWNhbmNlbCcpXG4gICAgY2FuY2VsQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnXG5cbiAgICBmaW5pc2guYXBwZW5kKHN1Ym1pdEJ0biwgY2FuY2VsQnRuKVxuXG4gICAgY29udGVudC5hcHBlbmQobGFiZWxUaXRsZSwgbGFiZWxEZXNjcmlwdGlvbiwgZGV0YWlscylcbiAgICBkZXRhaWxzLmFwcGVuZChsYWJlbERhdGUsIHByaW9yaXR5Q29udGFpbmVyKVxuICAgIGZvcm0uYXBwZW5kKGNvbnRlbnQsIGZpbmlzaClcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZChmb3JtQnRuLCBmb3JtKVxuICAgIGNvbnRhaW5lci5hcHBlbmQoZm9ybUNvbnRhaW5lcilcblxuICAgIHRoaXMuYmluZFRvZ2dsZSh0aGlzLmhhbmRsZVRvZ2dsZSlcbiAgICB0aGlzLmJpbmRQcmlvcml0eUxhYmVsKHRoaXMuaGFuZGxlUHJpb3JpdHlMYWJlbC5iaW5kKHRoaXMpKVxuICAgIHRoaXMuYmluZFJlc2V0UHJpb3JpdHkodGhpcy5oYW5kbGVSZXNldFByaW9yaXR5LmJpbmQodGhpcykpXG4gIH1cblxuICAvLyBFbmFibGUgZm9ybSB0b2dnbGVcbiAgYmluZFRvZ2dsZSAoaGFuZGxlcikge1xuICAgIHRoaXMudG9nZ2xlQnRuID0gW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cImFkZC1wcmlvcml0eS0ke3RoaXMuaWR9XCJdYCksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cImFkZC10b2RvLSR7dGhpcy5pZH1cIl1gKV1cbiAgICB0aGlzLnRvZ2dsZUJ0bi5mb3JFYWNoKHRvZ2dsZUJ0biA9PiB0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKSlcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykuZGF0YXNldC50b2dnbGV9YCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgfVxuXG4gIC8vIEVuYWJsZSBwcmlvcml0eSB0b2dnbGUgYW5kIGNvbG9yIGNoYW5nZSB3aGVuIHNlbGVjdGluZyBhIHByaW9yaXR5XG4gIGJpbmRQcmlvcml0eUxhYmVsIChoYW5kbGVyKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgdGhpcy5sYWJlbHMuZm9yRWFjaChsYWJlbCA9PiBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpKVxuICB9XG5cbiAgaGFuZGxlUHJpb3JpdHlMYWJlbCAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1gKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cImFkZC1wcmlvcml0eS0ke3RoaXMuaWR9XCJdYCkuc3R5bGUuY29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdsYWJlbCcpKS5jb2xvclxuICB9XG5cbiAgLy8gUmVzZXQgcHJpb3JpdHkgY29sb3Igd2hlbiBhZGRpbmcgYSB0YXNrXG4gIGJpbmRSZXNldFByaW9yaXR5IChoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZC10b2RvLSR7dGhpcy5pZH0gLmJ0bi0tc3VibWl0YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgaGFuZGxlUmVzZXRQcmlvcml0eSAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlPVwiYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1cIl1gKS5zdHlsZS5jb2xvciA9ICcnXG4gIH1cbn1cblxuVG9kb0Zvcm0uY291bnRlciA9IDBcbiIsImV4cG9ydCBjbGFzcyBUb2RvTGlzdENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlKHRoaXMubW9kZWwudG9kb3MpXG4gICAgdGhpcy5tb2RlbC5iaW5kVG9kb0xpc3RDaGFuZ2UodGhpcy5vblRvZG9MaXN0Q2hhbmdlLmJpbmQodGhpcykpXG4gIH1cblxuICBvblRvZG9MaXN0Q2hhbmdlICh0b2Rvcykge1xuICAgIHRoaXMudmlldy5yZW5kZXIodG9kb3MpXG4gIH1cblxuICBoYW5kbGVBZGRUb2RvICh0b2RvKSB7XG4gICAgdGhpcy5tb2RlbC5hZGRUb2RvKHRvZG8pXG4gIH1cblxuICBoYW5kbGVFZGl0VG9kbyAodG9kbywgZmllbGQsIHVwZGF0ZSkge1xuICAgIHRoaXMubW9kZWwuZWRpdFRvZG8odG9kbywgZmllbGQsIHVwZGF0ZSlcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZVRvZG8gKHRvZG8pIHtcbiAgICB0aGlzLm1vZGVsLmRlbGV0ZVRvZG8odG9kbylcbiAgfVxuXG4gIGJpbmRBbGwgKCkge1xuICAgIHRoaXMudmlldy5iaW5kQWRkVG9kbyh0aGlzLmhhbmRsZUFkZFRvZG8uYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERlbGV0ZVRvZG8odGhpcy5oYW5kbGVEZWxldGVUb2RvLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9Gb3JtIH0gZnJvbSAnLi9Ub2RvRm9ybSdcblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0TW9kZWwge1xuICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnRvZG9zID0gW11cbiAgICB0aGlzLmZvcm0gPSBuZXcgVG9kb0Zvcm0oKVxuICB9XG5cbiAgYWRkVG9kbyAodG9kbykge1xuICAgIHRvZG8uaWQgPSB0aGlzLnRvZG9zLmxlbmd0aFxuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKVxuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgZWRpdFRvZG8gKGlkLCBmaWVsZCwgdXBkYXRlKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcbiAgICAgICAgdG9kb1tmaWVsZF0gPSB1cGRhdGVcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgZGVsZXRlVG9kbyAoaWQpIHtcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT09IGlkKVxuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgYmluZFRvZG9MaXN0Q2hhbmdlIChjYWxsYmFjaykge1xuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSA9IGNhbGxiYWNrXG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8nXG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdFZpZXcge1xuICBjb25zdHJ1Y3RvciAocHJvamVjdElkKSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtwcm9qZWN0SWR9IC5zZWN0aW9uc2ApXG4gICAgdGhpcy50b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy50b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvbGlzdCcpXG4gICAgdGhpcy5pZCA9ICsrVG9kb0xpc3RWaWV3LmNvdW50ZXJcbiAgICB0aGlzLnByb2plY3RJZCA9IHByb2plY3RJZFxuICB9XG5cbiAgLy8gQ3JlYXRlIGEgc2VjdGlvblxuICBjcmVhdGVTZWN0aW9uICgpIHtcbiAgICB0aGlzLnNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGBzZWN0aW9uLSR7dGhpcy5wcm9qZWN0SWR9LSR7dGhpcy5pZH1gKVxuICAgIHRoaXMuc2VjdGlvbi5wcmVwZW5kKHRoaXMudG9kb0xpc3QpXG4gICAgdGhpcy5wcm9qZWN0LmFwcGVuZCh0aGlzLnNlY3Rpb24pXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHNlY3Rpb24ncyBuYW1lXG4gIHJlbmRlck5hbWUgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGhpcy5uYW1lLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25fX25hbWUnKVxuICAgIHRoaXMubmFtZS5pbm5lckhUTUwgPSBuYW1lXG4gICAgdGhpcy5zZWN0aW9uLnByZXBlbmQodGhpcy5uYW1lKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBBZGQgVG9kbyBGb3JtXG4gIHJlbmRlckZvcm0gKGZvcm0pIHtcbiAgICBmb3JtLnJlbmRlcih0aGlzLnNlY3Rpb24pXG4gIH1cblxuICAvLyBHZXQgdGhlIEFkZCBUb2RvIEZvcm0gSW5wdXRzXG4gIGdldEZvcm0gKCkge1xuICAgIHRoaXMudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke3RoaXMucHJvamVjdElkfS0ke3RoaXMuaWR9IC50b2RvLWZvcm0gW25hbWU9XCJ0aXRsZVwiXWApXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5wcm9qZWN0SWR9LSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cImRlc2NyaXB0aW9uXCJdYClcbiAgICB0aGlzLmRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke3RoaXMucHJvamVjdElkfS0ke3RoaXMuaWR9IC50b2RvLWZvcm0gW25hbWU9XCJkYXRlXCJdYClcbiAgICB0aGlzLnN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5wcm9qZWN0SWR9LSR7dGhpcy5pZH0gLnRvZG8tZm9ybSAuYnRuLS1zdWJtaXRgKVxuICB9XG5cbiAgLy8gR2V0IGZvcm0gdmFsdWVzXG4gIGdldCBfdG9kb1RpdGxlICgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZS52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvRGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9EYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9Qcmlvcml0eSAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWVcbiAgICB9XG4gIH1cblxuICAvLyBSZXNldCBmb3JtIGlucHV0c1xuICBfcmVzZXRJbnB1dHMgKCkge1xuICAgIHRoaXMudGl0bGUudmFsdWUgPSAnJ1xuICAgIHRoaXMuZGVzY3JpcHRpb24udmFsdWUgPSAnJ1xuICAgIHRoaXMuZGF0ZS52YWx1ZSA9ICcnXG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLmNoZWNrZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgVG9kbyBMaXN0XG4gIHJlbmRlciAodG9kb3MpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmlubmVySFRNTCA9ICcnXG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICB0b2RvLnJlbmRlcih0aGlzLnRvZG9MaXN0KVxuICAgIH1cbiAgfVxuXG4gIC8vIEV2ZW50IExpc3RlbmVyc1xuXG4gIGJpbmRBZGRUb2RvIChoYW5kbGVyKSB7XG4gICAgdGhpcy5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBoYW5kbGVyKG5ldyBUb2RvKHRoaXMuX3RvZG9UaXRsZSwgdGhpcy5fdG9kb0Rlc2NyaXB0aW9uLCB0aGlzLl90b2RvRGF0ZSwgdGhpcy5fdG9kb1ByaW9yaXR5LCAnJywgJycsICcnKSlcbiAgICAgIHRoaXMuX3Jlc2V0SW5wdXRzKClcbiAgICB9KVxuICB9XG5cbiAgYmluZERlbGV0ZVRvZG8gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvLWRvX19jaGVjaycpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpXG4gICAgICAgIGhhbmRsZXIoaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5Ub2RvTGlzdFZpZXcuY291bnRlciA9IDBcbiIsImltcG9ydCAnLi9zYXNzL21haW4uc2NzcydcbmltcG9ydCB7IFRvZG9MaXN0Q29udHJvbGxlciB9IGZyb20gJy4vVG9kb0xpc3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgVG9kb0xpc3RNb2RlbCB9IGZyb20gJy4vVG9kb0xpc3RNb2RlbCdcbmltcG9ydCB7IFRvZG9MaXN0VmlldyB9IGZyb20gJy4vVG9kb0xpc3RWaWV3J1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vVG9kbydcblxuaW1wb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfSBmcm9tICcuL1Byb2plY3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSAnLi9Qcm9qZWN0TW9kZWwnXG5pbXBvcnQgeyBQcm9qZWN0VmlldyB9IGZyb20gJy4vUHJvamVjdFZpZXcnXG5cbmltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tICcuL0FwcENvbnRyb2xsZXInXG5pbXBvcnQgeyBBcHBNb2RlbCB9IGZyb20gJy4vQXBwTW9kZWwnXG5pbXBvcnQgeyBBcHBWaWV3IH0gZnJvbSAnLi9BcHBWaWV3J1xuXG5jb25zdCBiaWdQcm9qZWN0ID0gbmV3IFByb2plY3RDb250cm9sbGVyKG5ldyBQcm9qZWN0TW9kZWwoJ2JpZyBiaWcnKSwgbmV3IFByb2plY3RWaWV3KFByb2plY3RNb2RlbC5jb3VudGVyKSlcbmJpZ1Byb2plY3Qudmlldy5yZW5kZXJGb3JtKGJpZ1Byb2plY3QubW9kZWwuZm9ybSlcbmJpZ1Byb2plY3Qudmlldy5nZXRGb3JtKClcbmJpZ1Byb2plY3QuYmluZEFsbCgpXG5cbmNvbnN0IGFwcCA9IG5ldyBBcHBDb250cm9sbGVyKG5ldyBBcHBNb2RlbCgpLCBuZXcgQXBwVmlldygpKVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=