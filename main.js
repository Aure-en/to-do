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
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  min-height: calc(100vh - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\n.no-display {\n  display: none !important;\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\n[contenteditable] {\n  cursor: pointer;\n}\n[contenteditable]:hover {\n  background-color: rgba(42, 43, 104, 0.05);\n}\n[contenteditable]:focus {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  outline: none;\n}\n\nh1 {\n  font-size: 1.35rem;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n  display: inline-block;\n  padding: 0 1rem;\n  align-self: center;\n}\n\nh2 {\n  font-weight: 700;\n  color: rgba(42, 43, 104, 0.85);\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  margin-top: 1.25rem;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel, .btn--add {\n  color: rgba(42, 43, 104, 0.45);\n}\n.btn--cancel:hover, .btn--cancel:hover:before, .btn--add:hover, .btn--add:hover:before {\n  color: rgba(42, 43, 104, 0.75);\n}\n.btn--section {\n  color: rgba(42, 43, 104, 0.35);\n  font-weight: 700;\n}\n.btn--section:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.35);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n}\n.btn--section:before, .btn--section:after {\n  content: \"\";\n  background-color: rgba(42, 43, 104, 0.25);\n  height: 2px;\n  flex-grow: 1;\n}\n.btn--section:hover:before, .btn--section:hover:after {\n  background-color: rgba(42, 43, 104, 0.5);\n}\n.btn--section:before {\n  margin-right: 1rem;\n}\n.btn--section:after {\n  margin-left: 1rem;\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn--delete {\n  display: none;\n  color: rgba(42, 43, 104, 0.5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  top: 10px;\n  color: rgba(42, 43, 104, 0.5);\n  display: none;\n}\n.btn--edit:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-med {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1.5rem;\n  align-items: start;\n  word-break: break-word;\n  position: relative;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n@media all and (max-width: 576px) {\n  .to-do {\n    grid-template: repeat(3, auto)/auto 1fr 2rem;\n    grid-gap: 0.5rem;\n  }\n  .to-do__check {\n    grid-row: 1/-1;\n  }\n  .to-do__priority {\n    grid-row: 1;\n  }\n}\n.to-do:last-of-type {\n  border-bottom: none;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n.to-do:hover .btn--edit {\n  display: initial;\n}\n\n.dropdown {\n  transition: all 0.35s linear;\n}\n\n.add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo,\n.edit__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project,\n.edit__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n}\n.add__priority input[type=radio],\n.edit__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n@media all and (max-width: 1140px) {\n  .add-priority {\n    right: -10px;\n    left: initial;\n  }\n  .add-priority:before {\n    right: 15px;\n    left: initial;\n  }\n  .add-priority:after {\n    right: 14px;\n    left: initial;\n  }\n}\n\n.add__finish,\n.edit__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n  transition: all 0.2s ease-in;\n}\n.nav--hidden {\n  transform: translateX(-100%);\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li:hover .btn--delete {\n  display: initial;\n}\n.nav__category li > .btn {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n@media all and (max-width: 768px) {\n  .nav {\n    position: fixed;\n    z-index: 1;\n    height: 100%;\n  }\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all 0.2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 1rem;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n}\n@media all and (max-width: 768px) {\n  .main--hidden {\n    transform: translateX(0);\n  }\n}\n\n.section__name__container {\n  display: flex;\n  justify-content: space-between;\n}\n.section__name__container:hover .btn--delete {\n  display: initial;\n}", "",{"version":3,"sources":["webpack://src/sass/main.scss","webpack://src/sass/base/_base.scss","webpack://src/sass/base/_typography.scss","webpack://src/sass/utils/_variables.scss","webpack://src/sass/components/_buttons.scss","webpack://src/sass/utils/_mixins.scss","webpack://src/sass/components/_icons.scss","webpack://src/sass/components/_todo.scss","webpack://src/sass/components/_dropdown.scss","webpack://src/sass/layout/_form.scss","webpack://src/sass/layout/_header.scss","webpack://src/sass/layout/_nav.scss","webpack://src/sass/layout/_main.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;;;CAAA;AAKA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;ADCD;;ACCA,gDAAA;AACA;;EAEC,cAAA;ADED;;ACAA;EACC,cAAA;ADGD;;ACDA;EACC,gBAAA;ADID;;ACFA;EACC,YAAA;ADKD;;ACHA;;EAEC,WAAA;EACA,aAAA;ADMD;;ACJA;EACC,yBAAA;EACA,iBAAA;ADOD;;ACJA;;EAEC,YAAA;ADOD;ACLC;;EACC,aAAA;ADQF;;ACJA;EACC,sBAAA;ADOD;;ACJA;EACC,YAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;ADOD;;ACJA;EACC,WAAA;EACA,YAAA;ADOD;;ACJA;EACC,kBAAA;EACA,SAAA;EACA,aAAA;EACA,8BAAA;ADOD;;ACJA;EACC,UAAA;EACA,wBAAA;EACA,gBAAA;EACC,8BAAA;ADOF;;ACJA;EACC,wBAAA;ADOD;;AEhGA;;EAEE,kCCDa;EDEb,mBAAA;EACA,gBAAA;EACA,mBAAA;AFmGF;;AEhGA;EACE,eAAA;AFmGF;AEjGE;EACE,yCAAA;AFmGJ;AEhGE;EACE,wCAAA;EACA,aAAA;AFkGJ;;AE9FA;EACE,kBAAA;EACA,cAAA;EACA,yBAAA;EACA,cCpBc;EDqBd,qBAAA;EACA,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;AFiGF;;AE9FA;EACE,gBAAA;EACA,8BAAA;EACA,yBAAA;EACA,qBAAA;EACA,uBAAA;EACA,mBAAA;AFiGF;;AE7FE;EACE,WCpCW;AHoIf;AE7FE;EACE,kBAAA;AF+FJ;AE5FE;EAEE,yBAAA;EACA,iBAAA;EACA,sBAAA;AF6FJ;AE1FE;EACE,WAAA;AF4FJ;AEzFE;EAEE,8BAAA;AF0FJ;AExFI;EAEE,8BAAA;AFyFN;AErFE;EACE,8BAAA;EACA,gBAAA;AFuFJ;AErFI;EACE,8BAAA;AFuFN;;AE/EE;EACE,yBAAA;EACA,cClFY;EDmFZ,gBAAA;EACA,qBAAA;EACA,gBAAA;AFkFJ;;AE9EA;EACE,0BAAA;AFiFF;AE/EE;EACE,WAAA;AFiFJ;;AE5EA;EACE,gBAAA;EACA,sBAAA;AF+EF;;AE5EA;EACE,gBAAA;AF+EF;;AE1EA;;EAEE,kCCnHa;AHgMf;;AE1EA;EACE,gBAAA;AF6EF;;AE1EA;EACE,cClHW;AH+Lb;;AE1EA;EACE,iBAAA;AF6EF;;AI7MA;EACC,YAAA;EACC,gBAAA;EACA,eAAA;AJgNF;AI9ME;EACE,aAAA;AJgNJ;;AI5MA;;EAEE,uBAAA;AJ+MF;;AI5MA;EACE,kCAAA;EACA,kBAAA;EACA,qBAAA;AJ+MF;AI7ME;EACE,kCAAA;AJ+MJ;;AI3MA;EACE,wCAAA;EACA,kBAAA;EACA,oCAAA;AJ8MF;;AI3MA;EACE,YD0BS;ECzBT,8BAAA;EC3BA,kCAAA;EACA,gBAAA;ED4BA,cAAA;AJ+MF;;AI5MA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;AJ+MF;AI7ME;EAEE,WAAA;EACA,yCAAA;EACA,WAAA;EACA,YAAA;AJ8MJ;AI3ME;EAEE,wCAAA;AJ4MJ;AIzME;EACE,kBAAA;AJ2MJ;AIxME;EACE,iBAAA;AJ0MJ;;AItMA;EACE,aAAA;EACA,8BAAA;AJyMF;;AItMA;EACE,aAAA;EACA,6BAAA;AJyMF;;AItMA;EACE,kBAAA;EACA,WAAA;EACA,SAAA;EACA,6BAAA;EACA,aAAA;AJyMF;AIvME;EACE,8BAAA;AJyMJ;;AM1RE;EAIE,2BHuDY;AHmOhB;AMvRE;EDTA,kCAAA;EACA,gBAAA;ALmSF;AMtRE;EACE,YAAA;EACA,6BHRa;AHgSjB;AMrRE;EACE,YHqCO;EEpDT,kCAAA;EACA,gBAAA;ALuSF;AMrRE;EACE,YAAA;EDzBF,kCAAA;EACA,gBAAA;ALiTF;;AMlRE;EACE,cHtBa;AH2SjB;;AMtRE;EACE,cHtBa;AH+SjB;;AM1RE;EACE,cHtBa;AHmTjB;;AM9RE;EACE,cHtBa;AHuTjB;;AKvTI;EACE,YFyBO;AHiSb;;AK3TI;EACE,YFyBO;AHqSb;;AK/TI;EACE,YFyBO;AHySb;;AKnUI;EACE,YFyBO;AH6Sb;;AK/TI;EACE,cFFO;AHoUb;;AKnUI;EACE,cFFO;AHwUb;;AKvUI;EACE,cFFO;AH4Ub;;AK3UI;EACE,cFFO;AHgVb;;AK/UI;EACE,cFFO;AHoVb;;AM5TA;EACE,YAAA;EACA,cHxCc;EECd,kCAAA;EACA,gBAAA;ECwCA,qBAAA;ANgUF;;AKnWI;EACE,YFsCO;AHgUb;;AKvWI;EACE,YFsCO;AHoUb;;AK3WI;EACE,YFsCO;AHwUb;;AK/WI;EACE,YFsCO;AH4Ub;;AK3WI;EACE,cFMO;AHwWb;;AK/WI;EACE,cFMO;AH4Wb;;AKnXI;EACE,cFMO;AHgXb;;AKvXI;EACE,cFMO;AHoXb;;AMvVA;EACE,YAAA;EDnDA,kCAAA;EACA,gBAAA;AL8YF;;AOrZA;EACE,aAAA;EACA,kDAAA;EACA,sBAAA;EACA,gBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;EACA,+CAAA;APwZF;AOtZE;EAXF;IAYI,4CAAA;IACA,gBAAA;EPyZF;EOvZE;IACE,cAAA;EPyZJ;EOtZE;IACE,WAAA;EPwZJ;AACF;AOrZE;EACE,mBAAA;APuZJ;AOpZE;EACE,eAAA;APsZJ;AOnZE;EACE,gBAAA;APqZJ;;AQtbA;EACE,4BAAA;ARybF;;AS1bA;;EAEE,aAAA;EACA,sBAAA;EACA,yCAAA;AT6bF;AS3bE;;EACE,mBAAA;EACA,qBAAA;AT8bJ;AS3bE;;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;AT8bJ;;AS1bA;;EAEE,WAAA;EACA,gBAAA;EACA,gBAAA;AT6bF;;AS1bA;EACE,YAAA;AT6bF;;AS1bA;EACE,+CAAA;AT6bF;;AS1bA;;EAEE,aAAA;EACA,yBAAA;AT6bF;;AS1bA;;EAEE,kBAAA;AT6bF;AS3bE;;EACE,eAAA;EACA,UAAA;EACA,oBAAA;AT8bJ;;AS1bA;EACE,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,yCAAA;EACA,uBAAA;EACA,6BAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AT6bF;AS3bE;EACE,WAAA;EACA,kCAAA;EACA,mCAAA;EACA,6BAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;AT6bJ;AS1bE;EACE,WAAA;EACA,kCAAA;EACA,mCAAA;EACA,gDAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;AT4bJ;ASzbE;EACE,kBAAA;EACA,gBAAA;AT2bJ;ASxbE;EArCF;IAsCI,YAAA;IACA,aAAA;ET2bF;ESzbE;IACE,WAAA;IACA,aAAA;ET2bJ;ESxbE;IACE,WAAA;IACA,aAAA;ET0bJ;AACF;;AStbA;;EAEE,mBAAA;ATybF;;AStbA;EACE,oCAAA;ATybF;;AStbA;EACE,eAAA;ATybF;;AU1iBA;EACE,eAAA;EACA,mBPGc;EOFd,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,UAAA;AV6iBF;AU1iBE;EACE,aAAA;EACA,OAAA;AV4iBJ;AU1iBI;EACE,iBAAA;AV4iBN;;AW5jBA;EAEE,mBRIgB;EQHhB,YAAA;EACA,+CAAA;EACA,4BAAA;EACA,4BAAA;AX8jBF;AW5jBE;EACE,4BAAA;AX8jBJ;AW3jBE;EACE,sBAAA;EACA,uBAAA;EACA,+CAAA;AX6jBJ;AW3jBI;EACE,mBAAA;AX6jBN;AW1jBI;EACE,aAAA;AX4jBN;AW1jBM;EACE,mCAAA;AX4jBR;AWzjBM;EACE,gBAAA;AX2jBR;AWxjBM;EAEE,OAAA;EACA,iBAAA;AXyjBR;AWpjBE;EACE,WAAA;EACA,iBAAA;AXsjBJ;AWpjBI;EACE,mCAAA;AXsjBN;AWljBE;EAjDF;IAkDI,eAAA;IACA,UAAA;IACA,YAAA;EXqjBF;AACF;;AY1mBA;EACE,OAAA;EACA,aAAA;EACA,uBAAA;EACA,iBAAA;EACA,yBAAA;AZ6mBF;;AY1mBA;EACE,WAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;AZ6mBF;;AY1mBA;EACE,6BAAA;AZ6mBF;AY3mBE;EAHF;IAII,wBAAA;EZ8mBF;AACF;;AY3mBA;EACE,aAAA;EACA,8BAAA;AZ8mBF;AY5mBE;EACE,gBAAA;AZ8mBJ","sourcesContent":["@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  min-height: calc(100vh - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\n.no-display {\n  display: none !important;\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\n[contenteditable] {\n  cursor: pointer;\n}\n[contenteditable]:hover {\n  background-color: rgba(42, 43, 104, 0.05);\n}\n[contenteditable]:focus {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  outline: none;\n}\n\nh1 {\n  font-size: 1.35rem;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n  display: inline-block;\n  padding: 0 1rem;\n  align-self: center;\n}\n\nh2 {\n  font-weight: 700;\n  color: rgba(42, 43, 104, 0.85);\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  margin-top: 1.25rem;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel, .btn--add {\n  color: rgba(42, 43, 104, 0.45);\n}\n.btn--cancel:hover, .btn--cancel:hover:before, .btn--add:hover, .btn--add:hover:before {\n  color: rgba(42, 43, 104, 0.75);\n}\n.btn--section {\n  color: rgba(42, 43, 104, 0.35);\n  font-weight: 700;\n}\n.btn--section:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.35);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n}\n.btn--section:before, .btn--section:after {\n  content: \"\";\n  background-color: rgba(42, 43, 104, 0.25);\n  height: 2px;\n  flex-grow: 1;\n}\n.btn--section:hover:before, .btn--section:hover:after {\n  background-color: rgba(42, 43, 104, 0.5);\n}\n.btn--section:before {\n  margin-right: 1rem;\n}\n.btn--section:after {\n  margin-left: 1rem;\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn--delete {\n  display: none;\n  color: rgba(42, 43, 104, 0.5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  top: 10px;\n  color: rgba(42, 43, 104, 0.5);\n  display: none;\n}\n.btn--edit:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-med {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1.5rem;\n  align-items: start;\n  word-break: break-word;\n  position: relative;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n@media all and (max-width: 576px) {\n  .to-do {\n    grid-template: repeat(3, auto)/auto 1fr 2rem;\n    grid-gap: 0.5rem;\n  }\n  .to-do__check {\n    grid-row: 1/-1;\n  }\n  .to-do__priority {\n    grid-row: 1;\n  }\n}\n.to-do:last-of-type {\n  border-bottom: none;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n.to-do:hover .btn--edit {\n  display: initial;\n}\n\n.dropdown {\n  transition: all 0.35s linear;\n}\n\n.add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo,\n.edit__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project,\n.edit__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n}\n.add__priority input[type=radio],\n.edit__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n@media all and (max-width: 1140px) {\n  .add-priority {\n    right: -10px;\n    left: initial;\n  }\n  .add-priority:before {\n    right: 15px;\n    left: initial;\n  }\n  .add-priority:after {\n    right: 14px;\n    left: initial;\n  }\n}\n\n.add__finish,\n.edit__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n  transition: all 0.2s ease-in;\n}\n.nav--hidden {\n  transform: translateX(-100%);\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li:hover .btn--delete {\n  display: initial;\n}\n.nav__category li > .btn {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n@media all and (max-width: 768px) {\n  .nav {\n    position: fixed;\n    z-index: 1;\n    height: 100%;\n  }\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all 0.2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 1rem;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n}\n@media all and (max-width: 768px) {\n  .main--hidden {\n    transform: translateX(0);\n  }\n}\n\n.section__name__container {\n  display: flex;\n  justify-content: space-between;\n}\n.section__name__container:hover .btn--delete {\n  display: initial;\n}","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput,\ntextarea {\n\tborder: none;\n\n\t&:focus {\n\t\toutline: none;\n\t}\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\twidth: 100vw;\n\tmin-height: 100vh;\n\tmax-width: 100%;\n\tmax-height: 100%;\n}\n\n.wrapper {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.content__wrapper {\n\tposition: relative;\n\ttop: 50px;\n\tdisplay: flex;\n\tmin-height: calc(100vh - 50px);\n}\n\n.hidden {\n\topacity: 0;\n\tmax-height: 0 !important;\n\toverflow: hidden;\n  transform: translateY(-.25em);\n}\n\n.no-display {\n\tdisplay: none !important;\n}","body,\nbutton {\n  font-family: $font-primary;\n  font-size: .875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\n[contenteditable] {\n  cursor: pointer;\n\n  &:hover {\n    background-color: rgba($color-primary, .05);\n  }\n\n  &:focus {\n    border: 1px solid rgba($color-primary, .5);\n    outline: none;\n  }\n}\n\nh1 {\n  font-size: 1.35rem;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  color: $color-primary;\n  letter-spacing: .5px;\n  text-align: center;\n  display: inline-block;\n  padding: 0 1rem;\n  align-self: center;\n}\n\nh2 {\n  font-weight: 700;\n  color: rgba($color-primary, .85);\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 0.25rem .5rem;\n  margin-top: 1.25rem;\n}\n\n.btn {\n  &--page--header {\n    color: $color-header;\n  }\n\n  &--icon {\n    font-size: 1.25rem;\n  }\n\n  &--submit,\n  &--cancel {\n    text-transform: uppercase;\n    font-size: .85em;\n    letter-spacing: -.5px;\n  }\n\n  &--submit {\n    color: #fff;\n  }\n\n  &--cancel,\n  &--add {\n    color: rgba($color-primary, .45);\n\n    &:hover,\n    &:hover:before {\n      color: rgba($color-primary, .75);\n    }\n  }\n\n  &--section {\n    color: rgba($color-primary, .35);\n    font-weight: 700;\n\n    &:hover {\n      color: rgba($color-primary, .75);\n    }\n  }\n}\n\n// Nav\n\n.nav {\n  &--heading {\n    text-transform: uppercase;\n    color: $color-primary;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 2.5;\n  }\n}\n\n[data-toggle=\"add-project\"] {\n  color: rgba(#000, .75);\n\n  &:hover {\n    color: #000;\n  }\n\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\n// Form\n\ninput,\ntextarea {\n  font-family: $font-primary;\n}\n\n[name=\"title\"] {\n  font-weight: 700;\n}\n\n[name=\"date\"] {\n  color: $color-form;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}","// Fonts\n$font-primary: 'Nanum Gothic', Arial;\n\n\n// Colors\n$color-primary: rgb(42, 43, 104);\n$color-secondary: rgb(238, 240, 241);\n\n$color-header: #fff;\n$color-projects: rgba($color-primary, .5);\n$color-form: rgb(142, 142, 142);\n\n$color-priority: (\n  high: rgb(161, 66, 66),\n  med: rgb(231, 154, 103),\n  low: rgb(93, 151, 91),\n  none: rgb(199, 199, 199)\n);\n\n$color-date: (\n  all: lighten($color-primary, 15%),\n  today: rgb(235, 153, 99),\n  upcoming: rgb(141, 90, 137),\n  anytime: rgb(122, 122, 122),\n  late: rgb(148, 32, 32)\n);\n\n$color-sort: (\n  title: rgb(48, 92, 48),\n  description: rgb(235, 185, 79),\n  date: rgb(102, 151, 145),\n  priority: map-get($color-priority, high)\n);\n\n// Icons\n\n$icon-priority: \"\\f02e\";\n\n$icons-date: (\n  all: \"\\f073\",\n  today: \"\\f272\",\n  upcoming: \"\\f274\",\n  anytime: \"\\f133\",\n);\n\n$icons-caret: (\n  up: \"\\f0d8\",\n  down: \"\\f0d7\",\n  right: \"\\f0da\"\n);\n\n$icons-sort: (\n  title: \"\\f328\",\n  description: \"\\f249\",\n  date: \"\\f073\",\n  priority: $icon-priority,\n);\n\n$icon-add: \"\\f067\";\n$icon-edit: \"\\f044\";\n\n// Others\n$margin-indent: 0 .25rem 0 1.25rem;","button {\n\tborder: none;\n  background: none;\n  cursor: pointer;\n  \n  &:focus {\n    outline: none;\n  }\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: .15rem .5rem;\n}\n  \n.btn--submit {\n  background: rgba($color-primary, .5);\n  border-radius: 5px;\n  margin-right: .25rem;\n\n  &:hover {\n    background: rgba($color-primary, .7);\n  }\n}\n\n.btn--cancel {\n  border: 1px solid rgba($color-primary, .5);\n  border-radius: 5px;\n  background: rgba(#fff, .5);\n}\n\n.btn--add:before {\n  content: $icon-add;\n  color: rgba($color-primary, .35);\n  @include font-awesome-700();\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n\n  &:before,\n  &:after {\n    content: '';\n    background-color: rgba($color-primary, .25);\n    height: 2px;\n    flex-grow: 1;\n  }\n\n  &:hover:before,\n  &:hover:after {\n    background-color: rgba($color-primary, .5);\n  }\n\n  &:before {\n    margin-right: 1rem;\n  }\n\n  &:after {\n    margin-left: 1rem;\n  }\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between\n}\n\n.btn--delete {\n  display: none;\n  color: rgba($color-primary, .5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  top: 10px;\n  color: rgba($color-primary, .5);\n  display: none;\n\n  &:hover {\n    color: rgba($color-primary, .75);\n  }\n\n}","@mixin font-awesome-400() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n@mixin font-awesome-700() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n@mixin icon-content($target, $map) {\n  @each $key, $icon in $map {\n    .#{$target}-#{$key}::before {\n      content: $icon;\n    }\n  }\n}\n\n@mixin icon-color($target, $map) {\n  @each $key, $color in $map {\n    .#{$target}-#{$key}::before {\n      color: $color;\n    }\n  }\n}","// NAV-ICONS\n\n.nav {\n  &__to-do li:before,\n  &__projects li:before,\n  &__filters li:before,\n  &__sorts li:before {\n    margin: $margin-indent;\n  }\n\n  &__to-do li:before,\n  &__sorts li:before {\n    @include font-awesome-400();\n  }\n\n  &__projects li:before {\n    content: \"⚫\";\n    color: $color-projects;\n  }\n\n  .project_list__add:before {\n    content: $icon-add;\n    @include font-awesome-700();\n  }\n\n  &__filters li:before {\n    content: \"\\f02e\";\n    @include font-awesome-400();\n  }\n}\n\n// Color Priority Icons\n@each $level, $color in $color-priority {\n  .priority-#{$level} {\n    color: $color;\n  }\n}\n\n// Date Icons\n@include icon-content('date', $icons-date);\n@include icon-color('date', $color-date);\n\n// Category Icons\n.nav--heading:before {\n  content: map-get($icons-caret, down);\n  color: $color-primary;\n  @include font-awesome-700();\n  margin-right: .75rem;\n}\n\n// Sort Icons\n@include icon-content('sort', $icons-sort);\n@include icon-color('sort', $color-sort);\n\n// MAIN ICONS\n\n.main__header li:before {\n  content: map-get($icons-caret, down);\n  @include font-awesome-700();\n}",".to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1.5rem;\n  align-items: start;\n  word-break: break-word;\n  position: relative;\n  padding: .75rem 0;\n  border-bottom: 1px solid rgba($color-primary, .1);\n\n  @media all and (max-width: 576px) {\n    grid-template: repeat(3, auto) / auto 1fr 2rem;\n    grid-gap: .5rem;\n\n    &__check {\n      grid-row: 1 / -1;\n    }\n\n    &__priority {\n      grid-row: 1;\n    }\n  }\n\n  &:last-of-type {\n    border-bottom: none;\n  }\n  \n  &__check {\n    margin-top: 7px;\n  }\n\n  &:hover .btn--edit {\n    display: initial;\n  }\n\n}",".dropdown {\n  transition: all .35s linear;\n}",".add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba($color-primary, .35);\n\n  &--todo {\n    border-radius: 10px;\n    padding: .25rem 1rem;\n  }\n\n  &--project {\n    border-radius: 5px;\n    margin: 0 1rem;\n    padding: .15rem;\n  }\n}\n\ninput[type=\"text\"],\ntextarea {\n  width: 100%;\n  padding: .25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=\"title\"] {\n  border-bottom: 1px solid rgba($color-primary, .1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n\n  input[type=\"radio\"] {\n    position: fixed;\n    opacity: 0;\n    pointer-events: none;\n  }\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba($color-primary, .35);\n  padding: .25rem .5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n\n  &:before {\n    content: '';\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #fff;\n    position: absolute;\n    top: -5px;\n    left: 15px;\n    z-index: 1;\n  }\n\n  &:after {\n    content: '';\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid rgba($color-primary, .35);\n    position: absolute;\n    top: -6px;\n    left: 14px;\n  }\n\n  label {\n    text-align: center;\n    margin: 0 .5rem;\n  }\n\n  @media all and (max-width: 1140px) {\n    right: -10px;\n    left: initial;\n\n    &:before {\n      right: 15px;\n      left: initial;\n    }\n  \n    &:after {\n      right: 14px;\n      left: initial;\n    }\n  }\n}\n\n.add__finish,\n.edit__finish {\n  margin: .5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(#fff, .5);\n}\n\nlabel {\n  cursor: pointer;\n}\n",".page__header {\n  position: fixed;\n  background: $color-primary;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n  \n\n  ul {\n    display: flex;\n    flex: 1;\n\n    & li:last-child {\n      margin-left: auto;\n    }\n  }\n}",".nav {\n  \n  background: $color-secondary;\n  width: 250px;\n  border-right: 1px solid rgba($color-primary, .25);\n  padding: 2rem .25rem 0 2rem;\n  transition: all .2s ease-in;\n\n  &--hidden {\n    transform: translateX(-100%);\n  }\n\n  &__category {\n    margin-bottom: .75rem;\n    padding-bottom: .75rem;\n    border-bottom: 1px solid rgba($color-primary, .1);\n\n    &:last-of-type {\n      border-bottom: none;\n    }\n\n    li {\n      display: flex;\n      \n      &:hover {\n        background: rgba($color-primary, .04);\n      }\n\n      &:hover .btn--delete {\n        display: initial;\n      }\n\n      > .btn {\n        // Makes the whole line clickable instead of just the text.\n        flex: 1;\n        text-align: start;\n      }\n    }\n  }\n\n  &--heading {\n    width: 100%;\n    text-align: start;\n    \n    &:hover {\n      background: rgba($color-primary, .07);\n    }\n  }\n\n  @media all and (max-width: 768px) {\n    position: fixed;\n    z-index: 1;\n    height: 100%;\n  }\n\n}","main {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all .2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 1rem;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n\n  @media all and (max-width: 768px) {\n    transform: translateX(0)\n  }\n}\n\n.section__name__container {\n  display: flex;\n  justify-content: space-between;\n\n  &:hover .btn--delete {\n    display: initial;\n  }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _TodoListController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoListController */ "./src/TodoListController.js");
/* harmony import */ var _TodoListModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoListModel */ "./src/TodoListModel.js");
/* harmony import */ var _TodoListView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TodoListView */ "./src/TodoListView.js");






class AppController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindAddProject(this.handleAddProject.bind(this));
    this.view.bindDeleteProject(this.handleDeleteProject.bind(this));
    this.view.bindChangeName(this.handleChangeName.bind(this));
    this.view.bindNavToggle(this.handleNavToggle.bind(this));
    this.view.bindToggle(this.handleToggle.bind(this));
    this.view.bindDisplayAll(this.handleDisplayAll.bind(this));
    this.view.bindPriority(this.handlePriority.bind(this));
    this.view.bindDateToday(this.handleToday.bind(this));
    this.view.bindDateUpcoming(this.handleUpcoming.bind(this));
    this.view.bindDateAnytime(this.handleAnytime.bind(this));
    this.view.bindHome(this.handleHome.bind(this));
  } // Display the new project and create a button linked to the project in the navigation.


  handleAddProject(name) {
    const project = new _ProjectController__WEBPACK_IMPORTED_MODULE_0__["ProjectController"](new _ProjectModel__WEBPACK_IMPORTED_MODULE_1__["ProjectModel"](name), new _ProjectView__WEBPACK_IMPORTED_MODULE_2__["ProjectView"](_ProjectModel__WEBPACK_IMPORTED_MODULE_1__["ProjectModel"].counter));
    this.model.addProject(project);
    project.model.addTodoList(new _TodoListController__WEBPACK_IMPORTED_MODULE_3__["TodoListController"](new _TodoListModel__WEBPACK_IMPORTED_MODULE_4__["TodoListModel"]('Default', project.model.id), new _TodoListView__WEBPACK_IMPORTED_MODULE_5__["TodoListView"]()));
    this.displayProject(project);
    this.view.renderBtn(name, project.model.id);
    document.querySelector(`[data-project="project-${project.model.id}"]`).addEventListener('click', () => this.handleNavClick(project));
  } // Links the newly created navigation button to its project


  handleNavClick(project) {
    this.displayProject(project);
  }

  displayProject(project) {
    project.view.renderName(project.model.name, project.model.id);
    project.view.render(project.model.todoLists);
    project.view.renderForm(project.model.form);
    project.view.getForm();
    project.bindAdd();
  } // When a project is deleted, it is removed from the model and from the navigation.
  // The Homepage is displayed instead.


  handleDeleteProject(id) {
    this.model.deleteProject(id);
    document.querySelector(`[data-project="project-${id}"]`).remove();
    document.querySelector('[data-project="project-1"]').dispatchEvent(new Event('click'));
  }

  handleChangeName(id, name) {
    this.model.editProject(id, name);
    document.querySelector(`[data-filter="project-${id}"]`).textContent = name;
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
  } // Home page


  handleHome() {
    document.querySelector('[data-project="project-1"]').dispatchEvent(new Event('click'));
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
/* harmony import */ var _localStorageModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageModule */ "./src/localStorageModule.js");

class AppModel {
  constructor() {
    this.projects = JSON.parse(localStorage.getItem('projects')) || [];
  }

  addProject(project) {
    this.projects.push(project);
    project.id = ++AppModel.counter;
    _localStorageModule__WEBPACK_IMPORTED_MODULE_0__["localStorageModule"].updateProjectList(this.projects);
    localStorage.setItem('AppModelCounter', AppModel.counter);
  }

  deleteProject(id) {
    this.projects = this.projects.filter(project => project.id !== id);
    _localStorageModule__WEBPACK_IMPORTED_MODULE_0__["localStorageModule"].updateProjectList(this.projects);
  }

  editProject(id, name) {
    this.projects = this.projects.map(project => {
      if (project.model.id === +id) {
        project.model.name = name;
        _localStorageModule__WEBPACK_IMPORTED_MODULE_0__["localStorageModule"].updateProjectList(this.projects);
      }

      return project;
    });
  }

}
AppModel.counter = 0;

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
    this.projectSubmit = document.querySelector('.add--project'); // Sort tasks

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
    this.nav = document.querySelector('.nav'); // Edit Project Name

    this._temporaryName = '';

    this._changeName();
  } // Get new project's name


  get _projectName() {
    return this.projectInput.value;
  } // Reset Input to create a new project


  _resetInput() {
    this.projectInput.value = '';
  } // Render the navigation button linked to the project


  renderBtn(name, id) {
    const li = document.createElement('li');
    li.classList.add('btn--project');
    li.setAttribute('data-project', `project-${id}`);
    const button = document.createElement('button');
    button.classList.add('btn', 'btn--filter');
    button.setAttribute('type', 'button');
    button.setAttribute('data-filter', `project-${id}`);
    button.innerHTML = name;
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('btn--delete');
    closeBtn.setAttribute('type', 'button');
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    li.append(button, closeBtn);
    document.querySelector('.projects').append(li);
  }

  bindAddProject(handler) {
    this.projectSubmit.addEventListener('submit', event => {
      event.preventDefault();
      handler(this._projectName);

      this._resetInput();
    });
  }

  bindDeleteProject(handler) {
    this.nav.addEventListener('click', event => {
      if (!event.target.closest('button')) return;

      if (event.target.closest('button').classList.contains('btn--delete')) {
        const id = event.target.closest('li').dataset.project.slice(8);
        handler(id);
      }
    });
  } // Navigation toggles


  bindToggle(handler) {
    document.body.addEventListener('click', event => {
      if (event.target.dataset.toggle) {
        handler(event);
      }
    });
  }

  bindNavToggle(handler) {
    this.navBtn.addEventListener('click', handler);
  } // Home page


  bindHome(handler) {
    this.homeBtn.addEventListener('click', handler);
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
  } // Edit Project Name


  _changeName() {
    this.container.addEventListener('input', event => {
      if (event.target.classList.contains('project__name')) {
        this._temporaryName = event.target.innerHTML;
      }
    });
  }

  bindChangeName(handler) {
    this.container.addEventListener('focusout', event => {
      if (this._temporaryName) {
        handler(event.target.id, this._temporaryName);
        this._temporaryName = '';
      }
    });
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
    this.view.bindChangeName(this.handleEditTodoList.bind(this));
    this.view.bindDeleteSection(this.handleDeleteTodoList.bind(this));
  }

  onProjectChange(todoLists) {
    this.view.render(todoLists);
  }

  handleAddTodoList(todoList) {
    this.model.addTodoList(todoList);
  }

  handleDeleteTodoList(id) {
    this.model.deleteTodoList(id);
  }

  handleEditTodoList(id, name) {
    this.model.editTodoList(id, name);
  }

  bindAdd() {
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
/* harmony import */ var _localStorageModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageModule */ "./src/localStorageModule.js");


class ProjectModel {
  constructor(name) {
    this.name = name === '' ? 'Untitled' : name;
    this.id = ++ProjectModel.counter;
    this.todoLists = [];
    this.form = new _SectionForm__WEBPACK_IMPORTED_MODULE_0__["SectionForm"](this.id);
  }

  _commit(todoLists) {
    this.onProjectChange(todoLists);
    _localStorageModule__WEBPACK_IMPORTED_MODULE_1__["localStorageModule"].updateTodoLists(this.id, this.todoLists);
  }

  addTodoList(todoList) {
    this.todoLists.push(todoList);
    todoList.id = this.todoLists.length;

    this._commit(this.todoLists);
  }

  editTodoList(id, name) {
    this.todoLists = this.todoLists.map(todoList => {
      if (todoList.model.id === +id) {
        todoList.model.name = name;
      }

      return todoList;
    });

    this._commit(this.todoLists);
  }

  deleteTodoList(id) {
    this.todoLists = this.todoLists.filter(todoList => todoList.model.id !== +id);

    this._commit(this.todoLists);
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
/* harmony import */ var _ProjectModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectModel */ "./src/ProjectModel.js");




class ProjectView {
  constructor(id) {
    this.container = document.querySelector('.content');
    this.sections = document.querySelector('.sections');
    this.name = document.querySelector('.project__name');
    this.id = id;
    this._temporaryName = '';

    this._changeName();
  } // Render the name of the project


  renderName(name, id) {
    this.name.innerHTML = name;
    this.name.setAttribute('id', id);
  } // Render the add section form


  renderForm(form) {
    form.render();
  } // Get the add section form inputs


  getForm() {
    this.nameInput = document.querySelector(`#section-form-${this.id} [name="section"]`);
    this.submit = document.querySelector(`#section-form-${this.id} .btn--submit`);
    this.form = document.querySelector(`#section-form-${this.id}`);
  } // Get Section's Name from the form


  get _sectionName() {
    return this.nameInput.value;
  } // Reset form input


  _resetInput() {
    this.nameInput.value = '';
  } // Render the project by rendering every section


  render(todoLists) {
    while (this.sections.firstChild) {
      this.sections.firstChild.remove();
    }

    for (const todoList of todoLists) {
      todoList.view.createSection();
      todoList.view.renderName(todoList.model.name);
      todoList.view.render(todoList.model.todos);
      todoList.view.renderForm(todoList.model.form);
      todoList.view.getForm(todoList.model.form);
      todoList.bindAdd();
    }
  } // Allow section name edits


  _changeName() {
    this.sections.addEventListener('input', event => {
      if (event.target.classList.contains('section__name')) {
        this._temporaryName = event.target.innerHTML;
      }
    });
  }

  bindChangeName(handler) {
    this.sections.addEventListener('focusout', event => {
      if (this._temporaryName) {
        const id = event.target.closest('[class^="section-"]').classList[0].slice(8);
        handler(id, this._temporaryName);
        this._temporaryName = '';
      }
    });
  }

  bindAddSection(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault();

      if (event.target.classList.contains('add--section')) {
        handler(new _TodoListController__WEBPACK_IMPORTED_MODULE_0__["TodoListController"](new _TodoListModel__WEBPACK_IMPORTED_MODULE_1__["TodoListModel"](this._sectionName, _ProjectModel__WEBPACK_IMPORTED_MODULE_3__["ProjectModel"].counter), new _TodoListView__WEBPACK_IMPORTED_MODULE_2__["TodoListView"]()));

        this._resetInput();
      }
    });
  }

  bindDeleteSection(handler) {
    this.sections.addEventListener('click', event => {
      if (event.target.closest('.btn--delete')) {
        const id = event.target.closest('.btn--delete').dataset.delete;
        handler(id);
      }
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
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('data-add', 'section');
    submitBtn.classList.add('btn', 'btn--submit');
    submitBtn.innerHTML = 'Add Section';
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.setAttribute('data-toggle', `section-form-${this.id}`);
    cancelBtn.classList.add('btn', 'btn--cancel');
    cancelBtn.innerHTML = 'Cancel';
    finish.append(submitBtn, cancelBtn);
    form.append(content, finish);
    formContainer.append(formBtn, form);
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
/* harmony import */ var _TodoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoForm */ "./src/TodoForm.js");

class Todo {
  constructor(title, description, date = '', priority = 'none') {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.id = ++Todo.counter;
    this.editForm = new _TodoForm__WEBPACK_IMPORTED_MODULE_0__["TodoForm"]('edit', this.id);
  }

  render(container) {
    this.todoElem = document.createElement('div');
    this.todoElem.classList.add('to-do');
    this.todoElem.setAttribute('data-date', this.date);
    this.todoElem.setAttribute('data-priority', this.priority);
    this.todoElem.id = this.id;
    const todoCheck = document.createElement('input');
    todoCheck.classList.add('to-do__check');
    todoCheck.setAttribute('type', 'checkbox');
    this.todoElem.append(todoCheck);
    const components = ['title', 'description', 'date'];

    for (const component of components) {
      const todoComponent = document.createElement('div');
      todoComponent.classList.add(`to-do__${component}`);
      todoComponent.innerHTML = this[component];
      this.todoElem.append(todoComponent);
    }

    const todoPriority = document.createElement('div');
    todoPriority.classList.add('to-do__priority', `priority-${this.priority}`);
    todoPriority.innerHTML = '<i class="far fa-bookmark"></i>';
    this.todoElem.append(todoPriority);
    this.todoEdit = document.createElement('button');
    this.todoEdit.classList.add('btn', 'btn--toggle', 'btn--edit');
    this.todoEdit.setAttribute('type', 'button');
    this.todoEdit.setAttribute('data-toggle', `edit-todo-${this.id}`);
    this.todoEdit.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    this.todoElem.append(this.todoEdit);
    container.append(this.todoElem);
    localStorage.setItem('TodoCounter', Todo.counter);
  }

}
Todo.counter = 0;

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
  constructor(goal, id) {
    this.goal = goal;
    this.id = id;
  }

  _renderForm() {
    const form = document.createElement('form');
    form.classList.add(`${this.goal}--todo`, 'todo-form', 'dropdown');
    form.setAttribute('id', `${this.goal}-todo-${this.id}`);

    if (this.goal === 'add') {
      form.classList.add('hidden');
    }

    const content = document.createElement('div');
    content.classList.add(`${this.goal}__content`, `${this.goal}__content--todo`);
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
    details.classList.add(`${this.goal}__details`);
    const labelDate = document.createElement('label');
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('name', 'date');
    labelDate.append(date);
    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('add__priority');
    this.priorityBtn = document.createElement('button');
    this.priorityBtn.setAttribute('type', 'button');
    this.priorityBtn.setAttribute('data-toggle', `add-priority-${this.id}`);
    this.priorityBtn.classList.add('btn', 'btn--toggle');
    this.priorityBtn.innerHTML = '<i class="far fa-bookmark"></i>';
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

      if (priority === 'none') {
        inputPriority.setAttribute('checked', true);
      }

      priorities.append(labelPriority, inputPriority);
    }

    priorityContainer.append(this.priorityBtn, priorities);
    const finish = document.createElement('div');
    finish.classList.add(`${this.goal}__finish`);
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'button');
    submitBtn.classList.add('btn', 'btn--submit');
    submitBtn.innerHTML = `${this.goal.toUpperCase().slice(0, 1) + this.goal.slice(1)} Task`;
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.setAttribute('data-toggle', `${this.goal}-todo-${this.id}`);
    cancelBtn.classList.add('btn', 'btn--cancel');
    cancelBtn.innerHTML = 'Cancel';
    finish.append(submitBtn, cancelBtn);
    content.append(labelTitle, labelDescription, details);
    details.append(labelDate, priorityContainer);
    form.append(content, finish);
    return form;
  }

  renderAdd(container) {
    const formContainer = document.createElement('div');
    formContainer.classList.add(`${this.goal}__todo`);
    this.formBtn = document.createElement('button');
    this.formBtn.classList.add('btn', 'btn--dropdown', `btn--${this.goal}`);
    this.formBtn.setAttribute('type', 'button');
    this.formBtn.setAttribute('data-toggle', `${this.goal}-todo-${this.id}`);
    this.formBtn.innerHTML = `${this.goal.slice(0, 1).toUpperCase() + this.goal.slice(1)} Task`;
    formContainer.append(this.formBtn, this._renderForm());
    container.append(formContainer);

    this._initPriorityToggle();

    this._initPriorityLabels();
  }

  renderEdit(before) {
    const formContainer = document.createElement('div');
    formContainer.classList.add(`${this.goal}__todo`);
    formContainer.append(this._renderForm());
    before.after(formContainer);

    this._initPriorityToggle();

    this._initPriorityLabels();
  } // Enable priority toggle and color change when selecting a priority


  _initPriorityToggle() {
    this.priorityBtn.addEventListener('click', () => document.querySelector(`#${this.priorityBtn.dataset.toggle}`).classList.toggle('hidden'));
  }

  _initPriorityLabels() {
    this.labels = document.querySelectorAll(`.priority-${this.id}`);
    this.labels.forEach(label => label.addEventListener('click', event => {
      document.querySelector(`#add-priority-${this.id}`).classList.add('hidden');
      document.querySelector(`[data-toggle="add-priority-${this.id}"]`).style.color = getComputedStyle(event.target.closest('label')).color;
    }));
  } // Reset priority color when adding a task


  _initResetPriority() {
    document.querySelector(`#add-todo-${this.id} .btn--submit`).addEventListener('click', () => {
      document.querySelector(`[data-toggle="add-priority-${this.id}"]`).style.color = '';
    });
  }

}

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
/* harmony import */ var _TodoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoForm */ "./src/TodoForm.js");

class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.onTodoListChange(this.model.todos);
    this.model.bindTodoListChange(this.onTodoListChange.bind(this));
    this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));
    this.view.bindOpenEdit(this.handleOpenEdit.bind(this));
    this.view.bindEditTodo(this.handleEditTodo.bind(this));
  }

  onTodoListChange(todos) {
    this.view.render(todos);
  }

  handleAddTodo(todo) {
    this.model.addTodo(todo);
  }

  handleEditTodo(updatedTodo, id) {
    this.model.editTodo(updatedTodo, id);
  }

  handleDeleteTodo(id) {
    this.model.deleteTodo(id);
  }

  handleOpenEdit(id) {
    // User can only edit one task at a time, so if there is another Edit Form open, it is closed.
    if (document.querySelector('[id^="edit-todo"]')) {
      document.querySelector('[id^="edit-todo"]').remove();
    }

    new _TodoForm__WEBPACK_IMPORTED_MODULE_0__["TodoForm"]('edit', id).renderEdit(document.querySelector(`.to-do[id="${id}"]`));
    this.view.getEditForm(id);
    this.view.setEditForm(id);
  }

  bindAdd() {
    this.view.bindAddTodo(this.handleAddTodo.bind(this));
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
/* harmony import */ var _localStorageModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageModule */ "./src/localStorageModule.js");


class TodoListModel {
  constructor(name, projectId) {
    this.name = name === '' ? 'Untitled' : name;
    this.id = ++TodoListModel.counter;
    this.form = new _TodoForm__WEBPACK_IMPORTED_MODULE_0__["TodoForm"]('add', this.id);
    this.projectId = projectId;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);

    this._commit(this.todos);

    localStorage.setItem('TodoListModelCounter', TodoListModel.counter);
  }

  editTodo(updatedTodo, id) {
    this.todos = this.todos.map(todo => {
      if (todo.id === +id) {
        return updatedTodo;
      } else {
        return todo;
      }
    });

    this._commit(this.todos);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);

    this._commit(this.todos);
  }

  bindTodoListChange(callback) {
    this.onTodoListChange = callback;
  }

  _commit(todos) {
    this.onTodoListChange(todos);
    _localStorageModule__WEBPACK_IMPORTED_MODULE_1__["localStorageModule"].updateTodos(this.id, this.projectId, this.todos);
  }

}
TodoListModel.counter = 0;

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
    this.nameContainer = document.createElement('div');
    this.nameContainer.classList.add('section__name__container');
    this.name = document.createElement('h2');
    this.name.classList.add('section__name');
    this.name.setAttribute('contenteditable', true);
    this.name.innerHTML = name;
    this.deleteBtn = document.createElement('button');
    this.deleteBtn.classList.add('btn--delete');
    this.deleteBtn.setAttribute('type', 'button');
    this.deleteBtn.setAttribute('data-delete', this.section.classList[0].slice(8));
    this.deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    this.nameContainer.append(this.name, this.deleteBtn);
    this.section.prepend(this.nameContainer);
  } // Render the Add form


  renderForm(form) {
    form.renderAdd(this.section);
  } // Get the Add form inputs


  getForm() {
    this.title = document.querySelector(`.section-${this.id} .todo-form [name="title"]`);
    this.description = document.querySelector(`.section-${this.id} .todo-form [name="description"]`);
    this.date = document.querySelector(`.section-${this.id} .todo-form [name="date"]`);
    this.submit = document.querySelector(`.section-${this.id} .todo-form .btn--submit`);
  } // Get add form values


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
  } // Get the Edit form inputs


  getEditForm() {
    this.titleEdit = document.querySelector('[id^="edit-todo"] [name="title"]');
    this.descriptionEdit = document.querySelector('[id^="edit-todo"] [name="description"]');
    this.dateEdit = document.querySelector('[id^="edit-todo"] [name="date"]');
    this.priorityEdit = document.querySelector('[id^="edit-todo"] .btn--toggle');
  } // Automatically pre-fill the Edit form inputs


  setEditForm(id) {
    this.titleEdit.value = document.querySelector(`[id="${id}"] .to-do__title`).innerHTML;
    this.descriptionEdit.value = document.querySelector(`[id="${id}"] .to-do__description`).innerHTML;
    this.dateEdit.value = document.querySelector(`[id="${id}"] .to-do__date`).innerHTML;
    this.priorityEdit.classList.add(document.querySelector(`[id="${id}"] .to-do__priority`).classList[1]);
    document.querySelector(`[id^="edit-todo"] [id^="${document.querySelector(`[id="${id}"] .to-do__priority`).classList[1]}"]`).checked = true;
  } // Get the Edit form values


  get _editTitle() {
    return this.titleEdit.value;
  }

  get _editDescription() {
    return this.descriptionEdit.value;
  }

  get _editDate() {
    return this.dateEdit.value;
  }

  get _editPriority() {
    return document.querySelector('[id^="edit-todo"] [name="priority"]:checked').value;
  } // Reset form inputs


  _resetInputs() {
    this.title.value = '';
    this.description.value = '';
    this.date.value = '';
    document.querySelector('[for^="priority-none"]').checked = true;
  } // Render the Todo List


  render(todos) {
    while (this.todoList.firstChild) {
      this.todoList.firstChild.remove();
    }

    for (const todo of todos) {
      todo.render(this.todoList);
    }
  } // Event Listeners


  bindAddTodo(handler) {
    this.submit.addEventListener('click', event => {
      event.preventDefault();
      handler(new _Todo__WEBPACK_IMPORTED_MODULE_0__["Todo"](this._todoTitle, this._todoDescription, this._todoDate, this._todoPriority));

      this._resetInputs();
    });
  }

  bindDeleteTodo(handler) {
    this.todoList.addEventListener('click', event => {
      if (event.target.classList.contains('to-do__check')) {
        const id = parseInt(event.target.parentElement.id);
        handler(id);
      }
    });
  } // Open form to edit the todo


  bindOpenEdit(handler) {
    this.todoList.addEventListener('click', event => {
      if (event.target.closest('.btn--edit')) {
        const id = parseInt(event.target.closest('.to-do').id);
        handler(id);
      }
    });
  }

  bindEditTodo(handler) {
    this.todoList.addEventListener('click', event => {
      event.preventDefault();

      if (event.target.innerHTML === 'Edit Task') {
        const id = event.target.closest('form').id.slice(10);
        const updatedTodo = new _Todo__WEBPACK_IMPORTED_MODULE_0__["Todo"](this._editTitle, this._editDescription, this._editDate, this._editPriority);
        handler(updatedTodo, id);
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
/* harmony import */ var _AppController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppController */ "./src/AppController.js");
/* harmony import */ var _AppModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppModel */ "./src/AppModel.js");
/* harmony import */ var _AppView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppView */ "./src/AppView.js");
/* harmony import */ var _TodoListController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoListController */ "./src/TodoListController.js");
/* harmony import */ var _TodoListModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TodoListModel */ "./src/TodoListModel.js");
/* harmony import */ var _TodoListView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TodoListView */ "./src/TodoListView.js");
/* harmony import */ var _ProjectController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectController */ "./src/ProjectController.js");
/* harmony import */ var _ProjectModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProjectModel */ "./src/ProjectModel.js");
/* harmony import */ var _ProjectView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProjectView */ "./src/ProjectView.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Todo */ "./src/Todo.js");











const app = new _AppController__WEBPACK_IMPORTED_MODULE_1__["AppController"](new _AppModel__WEBPACK_IMPORTED_MODULE_2__["AppModel"](), new _AppView__WEBPACK_IMPORTED_MODULE_3__["AppView"]()); // On the first use, creates a default project and samples

if (!localStorage.projects) {
  // Create a default project. It cannot be deleted as it acts as a "Home Page".
  app.handleAddProject('Default');
  document.querySelector('.btn--delete').remove(); // Add a tutorial and a few samples

  app.model.projects[0].handleEditTodoList('1', 'Tutorial');
  app.model.projects[0].model.todoLists[0].handleAddTodo(new _Todo__WEBPACK_IMPORTED_MODULE_10__["Todo"]('Welcome', `Try adding a new task by clicking on "Add Task"!
  You can also add as many sections to your project as you'd like by clicking on "Add Section", and create as many projects as you wish.`));
  app.model.projects[0].handleAddTodoList(new _TodoListController__WEBPACK_IMPORTED_MODULE_4__["TodoListController"](new _TodoListModel__WEBPACK_IMPORTED_MODULE_5__["TodoListModel"]('Samples', app.model.projects[0].model.id), new _TodoListView__WEBPACK_IMPORTED_MODULE_6__["TodoListView"]()));
  app.model.projects[0].model.todoLists[1].handleAddTodo(new _Todo__WEBPACK_IMPORTED_MODULE_10__["Todo"]('John\'s Birthday', 'Meet at John\'s house at 19. Don\'t forget to bring his gift.', `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`, 'high'));
  app.model.projects[0].model.todoLists[1].handleAddTodo(new _Todo__WEBPACK_IMPORTED_MODULE_10__["Todo"]('Dinner with Chloe', 'Reservation at Rhodes Restaurant, at 20.', `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() + 2}`, 'med'));
  app.model.projects[0].model.todoLists[1].handleAddTodo(new _Todo__WEBPACK_IMPORTED_MODULE_10__["Todo"]('Dentist', 'It won\'t be that bad. Probably.', `${new Date().getFullYear()}-${new Date().getMonth() + 2}-${new Date().getDate() + 5}`, 'low'));
  app.model.projects[0].model.todoLists[1].handleAddTodo(new _Todo__WEBPACK_IMPORTED_MODULE_10__["Todo"]('Start working out', 'I\'ll start... Tomorrow. Or next year.'));
  /* On all the other uses:
      - Load the localStorage
      - Create nav buttons for each project
      - Render the default project
  */
} else {
  let tempStorage = [...app.model.projects];
  localStorage.clear();
  app.model.projects = [];

  for (const project of tempStorage) {
    const todoProject = new _ProjectController__WEBPACK_IMPORTED_MODULE_7__["ProjectController"](new _ProjectModel__WEBPACK_IMPORTED_MODULE_8__["ProjectModel"](project.model.name), new _ProjectView__WEBPACK_IMPORTED_MODULE_9__["ProjectView"](_ProjectModel__WEBPACK_IMPORTED_MODULE_8__["ProjectModel"].counter));
    app.model.addProject(todoProject);
    app.displayProject(todoProject);
    app.view.renderBtn(todoProject.model.name, todoProject.model.id);
    document.querySelector(`[data-project="project-${todoProject.model.id}"]`).addEventListener('click', () => app.handleNavClick(todoProject));

    for (const todoList of project.model.todoLists) {
      const projectTodoList = new _TodoListController__WEBPACK_IMPORTED_MODULE_4__["TodoListController"](new _TodoListModel__WEBPACK_IMPORTED_MODULE_5__["TodoListModel"](todoList.model.name, todoList.model.projectId), new _TodoListView__WEBPACK_IMPORTED_MODULE_6__["TodoListView"]());
      todoProject.handleAddTodoList(projectTodoList);

      for (const todo of todoList.model.todos) {
        projectTodoList.handleAddTodo(new _Todo__WEBPACK_IMPORTED_MODULE_10__["Todo"](todo.title, todo.description, todo.date, todo.priority));
      }
    }
  }

  tempStorage = {};
  app.handleHome();
}

/***/ }),

/***/ "./src/localStorageModule.js":
/*!***********************************!*\
  !*** ./src/localStorageModule.js ***!
  \***********************************/
/*! exports provided: localStorageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageModule", function() { return localStorageModule; });
const localStorageModule = (() => {
  const updateProjectList = projects => {
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const updateTodoLists = (id, todoListsArr) => {
    localStorage.setItem('projects', JSON.stringify(JSON.parse(localStorage.getItem('projects')).map(project => {
      if (project.id === id) {
        project.model.todoLists = todoListsArr;
      }

      return project;
    })));
  };

  const updateTodos = (id, projectId, todosArr) => {
    localStorage.setItem('projects', JSON.stringify(JSON.parse(localStorage.getItem('projects')).map(project => {
      if (project.id === projectId) {
        project.model.todoLists.map(todoList => {
          if (todoList.model.id === id) {
            todoList.model.todos = todosArr;
          }

          return todoList;
        });
      }

      return project;
    })));
  };

  return {
    updateProjectList,
    updateTodoLists,
    updateTodos
  };
})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9kb0xpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sb2NhbFN0b3JhZ2VNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiQXBwQ29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwibW9kZWwiLCJ2aWV3IiwiYmluZEFkZFByb2plY3QiLCJoYW5kbGVBZGRQcm9qZWN0IiwiYmluZCIsImJpbmREZWxldGVQcm9qZWN0IiwiaGFuZGxlRGVsZXRlUHJvamVjdCIsImJpbmRDaGFuZ2VOYW1lIiwiaGFuZGxlQ2hhbmdlTmFtZSIsImJpbmROYXZUb2dnbGUiLCJoYW5kbGVOYXZUb2dnbGUiLCJiaW5kVG9nZ2xlIiwiaGFuZGxlVG9nZ2xlIiwiYmluZERpc3BsYXlBbGwiLCJoYW5kbGVEaXNwbGF5QWxsIiwiYmluZFByaW9yaXR5IiwiaGFuZGxlUHJpb3JpdHkiLCJiaW5kRGF0ZVRvZGF5IiwiaGFuZGxlVG9kYXkiLCJiaW5kRGF0ZVVwY29taW5nIiwiaGFuZGxlVXBjb21pbmciLCJiaW5kRGF0ZUFueXRpbWUiLCJoYW5kbGVBbnl0aW1lIiwiYmluZEhvbWUiLCJoYW5kbGVIb21lIiwibmFtZSIsInByb2plY3QiLCJQcm9qZWN0Q29udHJvbGxlciIsIlByb2plY3RNb2RlbCIsIlByb2plY3RWaWV3IiwiY291bnRlciIsImFkZFByb2plY3QiLCJhZGRUb2RvTGlzdCIsIlRvZG9MaXN0Q29udHJvbGxlciIsIlRvZG9MaXN0TW9kZWwiLCJUb2RvTGlzdFZpZXciLCJkaXNwbGF5UHJvamVjdCIsInJlbmRlckJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVOYXZDbGljayIsInJlbmRlck5hbWUiLCJyZW5kZXIiLCJ0b2RvTGlzdHMiLCJyZW5kZXJGb3JtIiwiZm9ybSIsImdldEZvcm0iLCJiaW5kQWRkIiwiZGVsZXRlUHJvamVjdCIsInJlbW92ZSIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImVkaXRQcm9qZWN0IiwidGV4dENvbnRlbnQiLCJldmVudCIsInRhcmdldCIsImRhdGFzZXQiLCJ0b2dnbGUiLCJjbGFzc0xpc3QiLCJuYXYiLCJtYWluIiwicHJpb3JpdHkiLCJ0b2RvcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidG9kbyIsImFkZCIsIl9zYW1lRGF5IiwiZGF0ZTEiLCJkYXRlMiIsInRvZG9EYXRlIiwiRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwidG9kYXkiLCJkYXRlIiwiQXBwTW9kZWwiLCJwcm9qZWN0cyIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsU3RvcmFnZU1vZHVsZSIsInVwZGF0ZVByb2plY3RMaXN0Iiwic2V0SXRlbSIsImZpbHRlciIsIkFwcFZpZXciLCJjb250YWluZXIiLCJob21lQnRuIiwicHJvamVjdElucHV0IiwicHJvamVjdFN1Ym1pdCIsInNvcnRUaXRsZSIsInNvcnREZXNjcmlwdGlvbiIsInNvcnREYXRlIiwic29ydFByaW9yaXR5IiwiZGlzcGxheUFsbEJ0biIsInByaW9yaXR5QnRuIiwiZGF0ZVRvZGF5QnRuIiwiZGF0ZVVwY29taW5nQnRuIiwiZGF0ZUFueXRpbWVCdG4iLCJuYXZCdG4iLCJfdGVtcG9yYXJ5TmFtZSIsIl9jaGFuZ2VOYW1lIiwiX3Byb2plY3ROYW1lIiwidmFsdWUiLCJfcmVzZXRJbnB1dCIsImxpIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJ1dHRvbiIsImlubmVySFRNTCIsImNsb3NlQnRuIiwiYXBwZW5kIiwiaGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VzdCIsImNvbnRhaW5zIiwic2xpY2UiLCJib2R5Iiwib25Qcm9qZWN0Q2hhbmdlIiwiYmluZFByb2plY3RDaGFuZ2UiLCJoYW5kbGVFZGl0VG9kb0xpc3QiLCJiaW5kRGVsZXRlU2VjdGlvbiIsImhhbmRsZURlbGV0ZVRvZG9MaXN0IiwiaGFuZGxlQWRkVG9kb0xpc3QiLCJ0b2RvTGlzdCIsImRlbGV0ZVRvZG9MaXN0IiwiZWRpdFRvZG9MaXN0IiwiYmluZEFkZFNlY3Rpb24iLCJTZWN0aW9uRm9ybSIsIl9jb21taXQiLCJ1cGRhdGVUb2RvTGlzdHMiLCJjYWxsYmFjayIsInNlY3Rpb25zIiwibmFtZUlucHV0Iiwic3VibWl0IiwiX3NlY3Rpb25OYW1lIiwiZmlyc3RDaGlsZCIsImNyZWF0ZVNlY3Rpb24iLCJkZWxldGUiLCJmb3JtQ29udGFpbmVyIiwiZm9ybUJ0biIsImxhYmVsTmFtZSIsImZpbmlzaCIsInN1Ym1pdEJ0biIsImNhbmNlbEJ0biIsIlRvZG8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZWRpdEZvcm0iLCJUb2RvRm9ybSIsInRvZG9FbGVtIiwidG9kb0NoZWNrIiwiY29tcG9uZW50cyIsImNvbXBvbmVudCIsInRvZG9Db21wb25lbnQiLCJ0b2RvUHJpb3JpdHkiLCJ0b2RvRWRpdCIsImdvYWwiLCJfcmVuZGVyRm9ybSIsImxhYmVsVGl0bGUiLCJsYWJlbERlc2NyaXB0aW9uIiwiZGV0YWlscyIsImxhYmVsRGF0ZSIsInByaW9yaXR5Q29udGFpbmVyIiwicHJpb3JpdGllcyIsInByaW9yaXRpZXNMaXN0IiwibGFiZWxQcmlvcml0eSIsImlucHV0UHJpb3JpdHkiLCJ0b1VwcGVyQ2FzZSIsInJlbmRlckFkZCIsIl9pbml0UHJpb3JpdHlUb2dnbGUiLCJfaW5pdFByaW9yaXR5TGFiZWxzIiwicmVuZGVyRWRpdCIsImJlZm9yZSIsImFmdGVyIiwibGFiZWxzIiwibGFiZWwiLCJzdHlsZSIsImNvbG9yIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIl9pbml0UmVzZXRQcmlvcml0eSIsIm9uVG9kb0xpc3RDaGFuZ2UiLCJiaW5kVG9kb0xpc3RDaGFuZ2UiLCJiaW5kRGVsZXRlVG9kbyIsImhhbmRsZURlbGV0ZVRvZG8iLCJiaW5kT3BlbkVkaXQiLCJoYW5kbGVPcGVuRWRpdCIsImJpbmRFZGl0VG9kbyIsImhhbmRsZUVkaXRUb2RvIiwiaGFuZGxlQWRkVG9kbyIsImFkZFRvZG8iLCJ1cGRhdGVkVG9kbyIsImVkaXRUb2RvIiwiZGVsZXRlVG9kbyIsImdldEVkaXRGb3JtIiwic2V0RWRpdEZvcm0iLCJiaW5kQWRkVG9kbyIsInByb2plY3RJZCIsInVwZGF0ZVRvZG9zIiwic2VjdGlvbiIsInByZXBlbmQiLCJuYW1lQ29udGFpbmVyIiwiZGVsZXRlQnRuIiwiX3RvZG9UaXRsZSIsIl90b2RvRGVzY3JpcHRpb24iLCJfdG9kb0RhdGUiLCJfdG9kb1ByaW9yaXR5IiwidGl0bGVFZGl0IiwiZGVzY3JpcHRpb25FZGl0IiwiZGF0ZUVkaXQiLCJwcmlvcml0eUVkaXQiLCJjaGVja2VkIiwiX2VkaXRUaXRsZSIsIl9lZGl0RGVzY3JpcHRpb24iLCJfZWRpdERhdGUiLCJfZWRpdFByaW9yaXR5IiwiX3Jlc2V0SW5wdXRzIiwicGFyc2VJbnQiLCJwYXJlbnRFbGVtZW50IiwiYXBwIiwidGVtcFN0b3JhZ2UiLCJjbGVhciIsInRvZG9Qcm9qZWN0IiwicHJvamVjdFRvZG9MaXN0IiwidG9kb0xpc3RzQXJyIiwidG9kb3NBcnIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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TSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxNQUFNLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFB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dEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xcbn1cXG5cXG4ubm8tZGlzcGxheSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuW2NvbnRlbnRlZGl0YWJsZV06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNSk7XFxufVxcbltjb250ZW50ZWRpdGFibGVdOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuMzVyZW07XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjg1KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcblxcbi5idG4tLXBhZ2UtLWhlYWRlciB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmJ0bi0taWNvbiB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdCwgLmJ0bi0tY2FuY2VsIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxufVxcbi5idG4tLXN1Ym1pdCB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmJ0bi0tY2FuY2VsLCAuYnRuLS1hZGQge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNDUpO1xcbn1cXG4uYnRuLS1jYW5jZWw6aG92ZXIsIC5idG4tLWNhbmNlbDpob3ZlcjpiZWZvcmUsIC5idG4tLWFkZDpob3ZlciwgLmJ0bi0tYWRkOmhvdmVyOmJlZm9yZSB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43NSk7XFxufVxcbi5idG4tLXNlY3Rpb24ge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmJ0bi0tc2VjdGlvbjpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43NSk7XFxufVxcblxcbi5uYXYtLWhlYWRpbmcge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XFxufVxcblxcbltkYXRhLXRvZ2dsZT1hZGQtcHJvamVjdF0ge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcbltkYXRhLXRvZ2dsZT1hZGQtcHJvamVjdF06aG92ZXIge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5tYWluX19oZWFkZXIgYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4udG8tZG9fX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxufVxcblxcbltuYW1lPXRpdGxlXSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5bbmFtZT1kYXRlXSB7XFxuICBjb2xvcjogIzhlOGU4ZTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnRuLS1zdWJtaXQsXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIHBhZGRpbmc6IDAuMTVyZW0gMC41cmVtO1xcbn1cXG5cXG4uYnRuLS1zdWJtaXQge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG59XFxuLmJ0bi0tc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNyk7XFxufVxcblxcbi5idG4tLWNhbmNlbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4uYnRuLS1hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgadcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXI6YmVmb3JlLCAuYnRuLS1zZWN0aW9uOmhvdmVyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5idG4tLXNlY3Rpb246YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLmJ0bi0tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG5cXG4uYnRuLS1lZGl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYnRuLS1lZGl0OmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuXFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUsIC5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMCAxLjI1cmVtO1xcbn1cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5uYXYgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2X19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZCB7XFxuICBjb2xvcjogI2U3OWE2NztcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogIzVkOTc1YjtcXG59XFxuXFxuLnByaW9yaXR5LW5vbmUge1xcbiAgY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibJcXFwiO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibRcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Es1xcXCI7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNDA0MjllO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWI5OTYzO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOGQ1YTg5O1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29sb3I6ICM3YTdhN2E7XFxufVxcblxcbi5kYXRlLWxhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzk0MjAyMDtcXG59XFxuXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvjKhcXFwiO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYlcXFwiO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29sb3I6ICMzMDVjMzA7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYmI5NGY7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzY2OTc5MTtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWdhcDogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLnRvLWRvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIGF1dG8pL2F1dG8gMWZyIDJyZW07XFxuICAgIGdyaWQtZ2FwOiAwLjVyZW07XFxuICB9XFxuICAudG8tZG9fX2NoZWNrIHtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICB9XFxuICAudG8tZG9fX3ByaW9yaXR5IHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICB9XFxufVxcbi50by1kbzpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLnRvLWRvX19jaGVjayB7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxufVxcbi50by1kbzpob3ZlciAuYnRuLS1lZGl0IHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgbGluZWFyO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LFxcbi5lZGl0X19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxufVxcbi5hZGRfX2NvbnRlbnQtLXRvZG8sXFxuLmVkaXRfX2NvbnRlbnQtLXRvZG8ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG59XFxuLmFkZF9fY29udGVudC0tcHJvamVjdCxcXG4uZWRpdF9fY29udGVudC0tcHJvamVjdCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHBhZGRpbmc6IDAuMTVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcblxcbi5hZGRfX2RldGFpbHMsXFxuLmVkaXRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5hZGRfX3ByaW9yaXR5LFxcbi5lZGl0X19wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hZGRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dLFxcbi5lZGl0X19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTZweDtcXG4gIGxlZnQ6IDE0cHg7XFxufVxcbi5hZGQtcHJpb3JpdHkgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuICAuYWRkLXByaW9yaXR5IHtcXG4gICAgcmlnaHQ6IC0xMHB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbiAgLmFkZC1wcmlvcml0eTpiZWZvcmUge1xcbiAgICByaWdodDogMTVweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG4gIC5hZGQtcHJpb3JpdHk6YWZ0ZXIge1xcbiAgICByaWdodDogMTRweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG59XFxuXFxuLmFkZF9fZmluaXNoLFxcbi5lZGl0X19maW5pc2gge1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhZ2VfX2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiAjMmEyYjY4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwgbGk6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm5hdiB7XFxuICBiYWNrZ3JvdW5kOiAjZWVmMGYxO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4yNSk7XFxuICBwYWRkaW5nOiAycmVtIDAuMjVyZW0gMCAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG59XFxuLm5hdi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG4ubmF2X19jYXRlZ29yeTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNCk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSA+IC5idG4ge1xcbiAgZmxleDogMTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNyk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi5tYWluLS1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjVweCk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubWFpbi0taGlkZGVuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5cXG4uc2VjdGlvbl9fbmFtZV9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zZWN0aW9uX19uYW1lX19jb250YWluZXI6aG92ZXIgLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc2Fzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9iYXNlL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9iYXNlL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy91dGlscy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy91dGlscy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL19pY29ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9fdG9kby5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9fZHJvcGRvd24uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9fZm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9fbmF2LnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7OztDQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FEQ0Q7O0FDQ0EsZ0RBQUE7QUFDQTs7RUFFQyxjQUFBO0FERUQ7O0FDQUE7RUFDQyxjQUFBO0FER0Q7O0FDREE7RUFDQyxnQkFBQTtBRElEOztBQ0ZBO0VB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SG1PaEI7QU12UkU7RURUQSxrQ0FBQTtFQUNBLGdCQUFBO0FMbVNGO0FNdFJFO0VBQ0UsWUFBQTtFQUNBLDZCSFJhO0FIZ1NqQjtBTXJSRTtFQUNFLFlIcUNPO0VFcERULGtDQUFBO0VBQ0EsZ0JBQUE7QUx1U0Y7QU1yUkU7RUFDRSxZQUFBO0VEekJGLGtDQUFBO0VBQ0EsZ0JBQUE7QUxpVEY7O0FNbFJFO0VBQ0UsY0h0QmE7QUgyU2pCOztBTXRSRTtFQUNFLGNIdEJhO0FIK1NqQjs7QU0xUkU7RUFDRSxjSHRCYTtBSG1UakI7O0FNOVJFO0VBQ0UsY0h0QmE7QUh1VGpCOztBS3ZUSTtFQUNFLFlGeUJPO0FIaVNiOztBSzNUSTtFQUNFLFlGeUJPO0FIcVNiOztBSy9USTtFQUNFLFlGeUJPO0FIeVNiOztBS25VSTtFQUNFLFlGeUJPO0FINlNiOztBSy9USTtFQUNFLGNGRk87QUhvVWI7O0FLblVJO0VBQ0UsY0ZGTztBSHdVYjs7QUt2VUk7RUFDRSxjRkZPO0FINFViOztBSzNVSTtFQUNFLGNGRk87QUhnVmI7O0FLL1VJO0VBQ0UsY0ZGTztBSG9WYjs7QU01VEE7RUFDRSxZQUFBO0VBQ0EsY0h4Q2M7RUVDZCxrQ0FBQTtFQUNBLGdCQUFBO0VDd0NBLHFCQUFBO0FOZ1VGOztBS25XSTtFQUNFLFlGc0NPO0FIZ1ViOztBS3ZXSTtFQUNFLFlGc0NPO0FIb1ViOztBSzNXSTtFQUNFLFlGc0NPO0FId1ViOztBSy9XSTtFQUNFLFlGc0NPO0FINFViOztBSzNXSTtFQUNFLGNGTU87QUh3V2I7O0FLL1dJO0VBQ0UsY0ZNTztBSDRXYjs7QUtuWEk7RUFDRSxjRk1PO0FIZ1hiOztBS3ZYSTtFQUNFLGNGTU87QUhvWGI7O0FNdlZBO0VBQ0UsWUFBQTtFRG5EQSxrQ0FBQTtFQUNBLGdCQUFBO0FMOFlGOztBT3JaQTtFQUNFLGFBQUE7RUFDQSxrREFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0FQd1pGO0FPdFpFO0VBWEY7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SlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50X193cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XFxufVxcblxcbi5uby1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYm9keSxcXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiLCBBcmlhbDtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS45O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5bY29udGVudGVkaXRhYmxlXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA1KTtcXG59XFxuW2NvbnRlbnRlZGl0YWJsZV06Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuODUpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxuXFxuLmJ0bi0tcGFnZS0taGVhZGVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnRuLS1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmJ0bi0tc3VibWl0LCAuYnRuLS1jYW5jZWwge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXG59XFxuLmJ0bi0tc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnRuLS1jYW5jZWwsIC5idG4tLWFkZCB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC40NSk7XFxufVxcbi5idG4tLWNhbmNlbDpob3ZlciwgLmJ0bi0tY2FuY2VsOmhvdmVyOmJlZm9yZSwgLmJ0bi0tYWRkOmhvdmVyLCAuYnRuLS1hZGQ6aG92ZXI6YmVmb3JlIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuXFxuLm5hdi0taGVhZGluZyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG59XFxuXFxuW2RhdGEtdG9nZ2xlPWFkZC1wcm9qZWN0XSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuW2RhdGEtdG9nZ2xlPWFkZC1wcm9qZWN0XTpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi50by1kb19fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiLCBBcmlhbDtcXG59XFxuXFxuW25hbWU9dGl0bGVdIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbltuYW1lPWRhdGVdIHtcXG4gIGNvbG9yOiAjOGU4ZThlO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idG4tLXN1Ym1pdCxcXG4uYnRuLS1jYW5jZWwge1xcbiAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07XFxufVxcblxcbi5idG4tLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC43KTtcXG59XFxuXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5idG4tLWFkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcbi5idG4tLXNlY3Rpb246YmVmb3JlLCAuYnRuLS1zZWN0aW9uOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4yNSk7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuLmJ0bi0tc2VjdGlvbjpob3ZlcjpiZWZvcmUsIC5idG4tLXNlY3Rpb246aG92ZXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLmJ0bi0tc2VjdGlvbjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmFmdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4uYnRuLS1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcblxcbi5idG4tLWVkaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC01cHg7XFxuICB0b3A6IDEwcHg7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5idG4tLWVkaXQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSwgLm5hdl9fZmlsdGVycyBsaTpiZWZvcmUsIC5uYXZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICBtYXJnaW46IDAgMC4yNXJlbSAwIDEuMjVyZW07XFxufVxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKaq1xcXCI7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLm5hdiAucHJvamVjdF9saXN0X19hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgadcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK5cXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGNvbG9yOiAjYTE0MjQyO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkIHtcXG4gIGNvbG9yOiAjZTc5YTY3O1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gIGNvbG9yOiAjNWQ5NzViO1xcbn1cXG5cXG4ucHJpb3JpdHktbm9uZSB7XFxuICBjb2xvcjogI2M3YzdjNztcXG59XFxuXFxuLmRhdGUtYWxsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5kYXRlLXRvZGF5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JslxcXCI7XFxufVxcblxcbi5kYXRlLXVwY29taW5nOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JtFxcXCI7XFxufVxcblxcbi5kYXRlLWFueXRpbWU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SzXFxcIjtcXG59XFxuXFxuLmRhdGUtYWxsOjpiZWZvcmUge1xcbiAgY29sb3I6ICM0MDQyOWU7XFxufVxcblxcbi5kYXRlLXRvZGF5OjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYjk5NjM7XFxufVxcblxcbi5kYXRlLXVwY29taW5nOjpiZWZvcmUge1xcbiAgY29sb3I6ICM4ZDVhODk7XFxufVxcblxcbi5kYXRlLWFueXRpbWU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzdhN2E3YTtcXG59XFxuXFxuLmRhdGUtbGF0ZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOTQyMDIwO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OXXFxcIjtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+MqFxcXCI7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JiVxcXCI7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GzXFxcIjtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG59XFxuXFxuLnNvcnQtdGl0bGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzMwNWMzMDtcXG59XFxuXFxuLnNvcnQtZGVzY3JpcHRpb246OmJlZm9yZSB7XFxuICBjb2xvcjogI2ViYjk0ZjtcXG59XFxuXFxuLnNvcnQtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNjY5NzkxO1xcbn1cXG5cXG4uc29ydC1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjYTE0MjQyO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OXXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udG8tZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA2LjVyZW0gMWZyIDYuNXJlbSAycmVtO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtZ2FwOiAxLjVyZW07XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMC43NXJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAudG8tZG8ge1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMywgYXV0bykvYXV0byAxZnIgMnJlbTtcXG4gICAgZ3JpZC1nYXA6IDAuNXJlbTtcXG4gIH1cXG4gIC50by1kb19fY2hlY2sge1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gIH1cXG4gIC50by1kb19fcHJpb3JpdHkge1xcbiAgICBncmlkLXJvdzogMTtcXG4gIH1cXG59XFxuLnRvLWRvOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4udG8tZG9fX2NoZWNrIHtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG59XFxuLnRvLWRvOmhvdmVyIC5idG4tLWVkaXQge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBsaW5lYXI7XFxufVxcblxcbi5hZGRfX2NvbnRlbnQsXFxuLmVkaXRfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG59XFxuLmFkZF9fY29udGVudC0tdG9kbyxcXG4uZWRpdF9fY29udGVudC0tdG9kbyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbn1cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0LFxcbi5lZGl0X19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgcGFkZGluZzogMC4xNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbltuYW1lPXRpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyxcXG4uZWRpdF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHksXFxuLmVkaXRfX3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFkZF9fcHJpb3JpdHkgaW5wdXRbdHlwZT1yYWRpb10sXFxuLmVkaXRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAxLjY1cmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDtcXG4gIGxlZnQ6IDE1cHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNnB4O1xcbiAgbGVmdDogMTRweDtcXG59XFxuLmFkZC1wcmlvcml0eSBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4gIC5hZGQtcHJpb3JpdHkge1xcbiAgICByaWdodDogLTEwcHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuICB9XFxuICAuYWRkLXByaW9yaXR5OmJlZm9yZSB7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbiAgLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICAgIHJpZ2h0OiAxNHB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbn1cXG5cXG4uYWRkX19maW5pc2gsXFxuLmVkaXRfX2ZpbmlzaCB7XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxubGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGFnZV9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6ICMyYTJiNjg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCBsaTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGJhY2tncm91bmQ6ICNlZWYwZjE7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIHBhZGRpbmc6IDJyZW0gMC4yNXJlbSAwIDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcbn1cXG4ubmF2LS1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5Omxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA0KTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIgLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpID4gLmJ0biB7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA3KTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLm1haW4tLWhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNXB4KTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5tYWluLS1oaWRkZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcblxcbi5zZWN0aW9uX19uYW1lX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNlY3Rpb25fX25hbWVfX2NvbnRhaW5lcjpob3ZlciAuYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XCIsXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFxuXFx0Jjpmb2N1cyB7XFxuXFx0XFx0b3V0bGluZTogbm9uZTtcXG5cXHR9XFxufVxcblxcbioge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxuXFx0bWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRfX3dyYXBwZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDUwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0bWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS4yNWVtKTtcXG59XFxuXFxuLm5vLWRpc3BsYXkge1xcblxcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XCIsXCJib2R5LFxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjk7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5bY29udGVudGVkaXRhYmxlXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjA1KTtcXG4gIH1cXG5cXG4gICY6Zm9jdXMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC44NSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yNXJlbSAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcblxcbi5idG4ge1xcbiAgJi0tcGFnZS0taGVhZGVyIHtcXG4gICAgY29sb3I6ICRjb2xvci1oZWFkZXI7XFxuICB9XFxuXFxuICAmLS1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcblxcbiAgJi0tc3VibWl0LFxcbiAgJi0tY2FuY2VsIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAuODVlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uNXB4O1xcbiAgfVxcblxcbiAgJi0tc3VibWl0IHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuXFxuICAmLS1jYW5jZWwsXFxuICAmLS1hZGQge1xcbiAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjQ1KTtcXG5cXG4gICAgJjpob3ZlcixcXG4gICAgJjpob3ZlcjpiZWZvcmUge1xcbiAgICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNzUpO1xcbiAgICB9XFxuICB9XFxuXFxuICAmLS1zZWN0aW9uIHtcXG4gICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNzUpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vIE5hdlxcblxcbi5uYXYge1xcbiAgJi0taGVhZGluZyB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XFxuICB9XFxufVxcblxcbltkYXRhLXRvZ2dsZT1cXFwiYWRkLXByb2plY3RcXFwiXSB7XFxuICBjb2xvcjogcmdiYSgjMDAwLCAuNzUpO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgfVxcblxcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vLyBGb3JtXFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxufVxcblxcbltuYW1lPVxcXCJ0aXRsZVxcXCJdIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbltuYW1lPVxcXCJkYXRlXFxcIl0ge1xcbiAgY29sb3I6ICRjb2xvci1mb3JtO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cIixcIi8vIEZvbnRzXFxuJGZvbnQtcHJpbWFyeTogJ05hbnVtIEdvdGhpYycsIEFyaWFsO1xcblxcblxcbi8vIENvbG9yc1xcbiRjb2xvci1wcmltYXJ5OiByZ2IoNDIsIDQzLCAxMDQpO1xcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigyMzgsIDI0MCwgMjQxKTtcXG5cXG4kY29sb3ItaGVhZGVyOiAjZmZmO1xcbiRjb2xvci1wcm9qZWN0czogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiRjb2xvci1mb3JtOiByZ2IoMTQyLCAxNDIsIDE0Mik7XFxuXFxuJGNvbG9yLXByaW9yaXR5OiAoXFxuICBoaWdoOiByZ2IoMTYxLCA2NiwgNjYpLFxcbiAgbWVkOiByZ2IoMjMxLCAxNTQsIDEwMyksXFxuICBsb3c6IHJnYig5MywgMTUxLCA5MSksXFxuICBub25lOiByZ2IoMTk5LCAxOTksIDE5OSlcXG4pO1xcblxcbiRjb2xvci1kYXRlOiAoXFxuICBhbGw6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDE1JSksXFxuICB0b2RheTogcmdiKDIzNSwgMTUzLCA5OSksXFxuICB1cGNvbWluZzogcmdiKDE0MSwgOTAsIDEzNyksXFxuICBhbnl0aW1lOiByZ2IoMTIyLCAxMjIsIDEyMiksXFxuICBsYXRlOiByZ2IoMTQ4LCAzMiwgMzIpXFxuKTtcXG5cXG4kY29sb3Itc29ydDogKFxcbiAgdGl0bGU6IHJnYig0OCwgOTIsIDQ4KSxcXG4gIGRlc2NyaXB0aW9uOiByZ2IoMjM1LCAxODUsIDc5KSxcXG4gIGRhdGU6IHJnYigxMDIsIDE1MSwgMTQ1KSxcXG4gIHByaW9yaXR5OiBtYXAtZ2V0KCRjb2xvci1wcmlvcml0eSwgaGlnaClcXG4pO1xcblxcbi8vIEljb25zXFxuXFxuJGljb24tcHJpb3JpdHk6IFxcXCJcXFxcZjAyZVxcXCI7XFxuXFxuJGljb25zLWRhdGU6IChcXG4gIGFsbDogXFxcIlxcXFxmMDczXFxcIixcXG4gIHRvZGF5OiBcXFwiXFxcXGYyNzJcXFwiLFxcbiAgdXBjb21pbmc6IFxcXCJcXFxcZjI3NFxcXCIsXFxuICBhbnl0aW1lOiBcXFwiXFxcXGYxMzNcXFwiLFxcbik7XFxuXFxuJGljb25zLWNhcmV0OiAoXFxuICB1cDogXFxcIlxcXFxmMGQ4XFxcIixcXG4gIGRvd246IFxcXCJcXFxcZjBkN1xcXCIsXFxuICByaWdodDogXFxcIlxcXFxmMGRhXFxcIlxcbik7XFxuXFxuJGljb25zLXNvcnQ6IChcXG4gIHRpdGxlOiBcXFwiXFxcXGYzMjhcXFwiLFxcbiAgZGVzY3JpcHRpb246IFxcXCJcXFxcZjI0OVxcXCIsXFxuICBkYXRlOiBcXFwiXFxcXGYwNzNcXFwiLFxcbiAgcHJpb3JpdHk6ICRpY29uLXByaW9yaXR5LFxcbik7XFxuXFxuJGljb24tYWRkOiBcXFwiXFxcXGYwNjdcXFwiO1xcbiRpY29uLWVkaXQ6IFxcXCJcXFxcZjA0NFxcXCI7XFxuXFxuLy8gT3RoZXJzXFxuJG1hcmdpbi1pbmRlbnQ6IDAgLjI1cmVtIDAgMS4yNXJlbTtcIixcImJ1dHRvbiB7XFxuXFx0Ym9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIFxcbiAgJjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxufVxcblxcbi5idG4tLXN1Ym1pdCxcXG4uYnRuLS1jYW5jZWwge1xcbiAgcGFkZGluZzogLjE1cmVtIC41cmVtO1xcbn1cXG4gIFxcbi5idG4tLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNyk7XFxuICB9XFxufVxcblxcbi5idG4tLWNhbmNlbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKCNmZmYsIC41KTtcXG59XFxuXFxuLmJ0bi0tYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiAkaWNvbi1hZGQ7XFxuICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG4gIEBpbmNsdWRlIGZvbnQtYXdlc29tZS03MDAoKTtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuXFxuICAmOmJlZm9yZSxcXG4gICY6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjI1KTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIH1cXG5cXG4gICY6aG92ZXI6YmVmb3JlLFxcbiAgJjpob3ZlcjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIH1cXG5cXG4gICY6YmVmb3JlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgfVxcblxcbiAgJjphZnRlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgfVxcbn1cXG5cXG4uYnRuLS1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXG59XFxuXFxuLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbn1cXG5cXG4uYnRuLS1lZGl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43NSk7XFxuICB9XFxuXFxufVwiLFwiQG1peGluIGZvbnQtYXdlc29tZS00MDAoKSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuQG1peGluIGZvbnQtYXdlc29tZS03MDAoKSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuQG1peGluIGljb24tY29udGVudCgkdGFyZ2V0LCAkbWFwKSB7XFxuICBAZWFjaCAka2V5LCAkaWNvbiBpbiAkbWFwIHtcXG4gICAgLiN7JHRhcmdldH0tI3ska2V5fTo6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiAkaWNvbjtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWl4aW4gaWNvbi1jb2xvcigkdGFyZ2V0LCAkbWFwKSB7XFxuICBAZWFjaCAka2V5LCAkY29sb3IgaW4gJG1hcCB7XFxuICAgIC4jeyR0YXJnZXR9LSN7JGtleX06OmJlZm9yZSB7XFxuICAgICAgY29sb3I6ICRjb2xvcjtcXG4gICAgfVxcbiAgfVxcbn1cIixcIi8vIE5BVi1JQ09OU1xcblxcbi5uYXYge1xcbiAgJl9fdG8tZG8gbGk6YmVmb3JlLFxcbiAgJl9fcHJvamVjdHMgbGk6YmVmb3JlLFxcbiAgJl9fZmlsdGVycyBsaTpiZWZvcmUsXFxuICAmX19zb3J0cyBsaTpiZWZvcmUge1xcbiAgICBtYXJnaW46ICRtYXJnaW4taW5kZW50O1xcbiAgfVxcblxcbiAgJl9fdG8tZG8gbGk6YmVmb3JlLFxcbiAgJl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTQwMCgpO1xcbiAgfVxcblxcbiAgJl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIuKaq1xcXCI7XFxuICAgIGNvbG9yOiAkY29sb3ItcHJvamVjdHM7XFxuICB9XFxuXFxuICAucHJvamVjdF9saXN0X19hZGQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogJGljb24tYWRkO1xcbiAgICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxuICB9XFxuXFxuICAmX19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZVxcXCI7XFxuICAgIEBpbmNsdWRlIGZvbnQtYXdlc29tZS00MDAoKTtcXG4gIH1cXG59XFxuXFxuLy8gQ29sb3IgUHJpb3JpdHkgSWNvbnNcXG5AZWFjaCAkbGV2ZWwsICRjb2xvciBpbiAkY29sb3ItcHJpb3JpdHkge1xcbiAgLnByaW9yaXR5LSN7JGxldmVsfSB7XFxuICAgIGNvbG9yOiAkY29sb3I7XFxuICB9XFxufVxcblxcbi8vIERhdGUgSWNvbnNcXG5AaW5jbHVkZSBpY29uLWNvbnRlbnQoJ2RhdGUnLCAkaWNvbnMtZGF0ZSk7XFxuQGluY2x1ZGUgaWNvbi1jb2xvcignZGF0ZScsICRjb2xvci1kYXRlKTtcXG5cXG4vLyBDYXRlZ29yeSBJY29uc1xcbi5uYXYtLWhlYWRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG1hcC1nZXQoJGljb25zLWNhcmV0LCBkb3duKTtcXG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gIEBpbmNsdWRlIGZvbnQtYXdlc29tZS03MDAoKTtcXG4gIG1hcmdpbi1yaWdodDogLjc1cmVtO1xcbn1cXG5cXG4vLyBTb3J0IEljb25zXFxuQGluY2x1ZGUgaWNvbi1jb250ZW50KCdzb3J0JywgJGljb25zLXNvcnQpO1xcbkBpbmNsdWRlIGljb24tY29sb3IoJ3NvcnQnLCAkY29sb3Itc29ydCk7XFxuXFxuLy8gTUFJTiBJQ09OU1xcblxcbi5tYWluX19oZWFkZXIgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG1hcC1nZXQoJGljb25zLWNhcmV0LCBkb3duKTtcXG4gIEBpbmNsdWRlIGZvbnQtYXdlc29tZS03MDAoKTtcXG59XCIsXCIudG8tZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA2LjVyZW0gMWZyIDYuNXJlbSAycmVtO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtZ2FwOiAxLjVyZW07XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogLjc1cmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjEpO1xcblxcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIGF1dG8pIC8gYXV0byAxZnIgMnJlbTtcXG4gICAgZ3JpZC1nYXA6IC41cmVtO1xcblxcbiAgICAmX19jaGVjayB7XFxuICAgICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gICAgfVxcblxcbiAgICAmX19wcmlvcml0eSB7XFxuICAgICAgZ3JpZC1yb3c6IDE7XFxuICAgIH1cXG4gIH1cXG5cXG4gICY6bGFzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgJl9fY2hlY2sge1xcbiAgICBtYXJnaW4tdG9wOiA3cHg7XFxuICB9XFxuXFxuICAmOmhvdmVyIC5idG4tLWVkaXQge1xcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgfVxcblxcbn1cIixcIi5kcm9wZG93biB7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjM1cyBsaW5lYXI7XFxufVwiLFwiLmFkZF9fY29udGVudCxcXG4uZWRpdF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuXFxuICAmLS10b2RvIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogLjI1cmVtIDFyZW07XFxuICB9XFxuXFxuICAmLS1wcm9qZWN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgcGFkZGluZzogLjE1cmVtO1xcbiAgfVxcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbltuYW1lPVxcXCJ0aXRsZVxcXCJdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMSk7XFxufVxcblxcbi5hZGRfX2RldGFpbHMsXFxuLmVkaXRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5hZGRfX3ByaW9yaXR5LFxcbi5lZGl0X19wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAxLjY1cmVtO1xcbiAgei1pbmRleDogMTtcXG5cXG4gICY6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmZjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC01cHg7XFxuICAgIGxlZnQ6IDE1cHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICAmOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC02cHg7XFxuICAgIGxlZnQ6IDE0cHg7XFxuICB9XFxuXFxuICBsYWJlbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIC41cmVtO1xcbiAgfVxcblxcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuICAgIHJpZ2h0OiAtMTBweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG5cXG4gICAgJjpiZWZvcmUge1xcbiAgICAgIHJpZ2h0OiAxNXB4O1xcbiAgICAgIGxlZnQ6IGluaXRpYWw7XFxuICAgIH1cXG4gIFxcbiAgICAmOmFmdGVyIHtcXG4gICAgICByaWdodDogMTRweDtcXG4gICAgICBsZWZ0OiBpbml0aWFsO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5hZGRfX2ZpbmlzaCxcXG4uZWRpdF9fZmluaXNoIHtcXG4gIG1hcmdpbjogLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKCNmZmYsIC41KTtcXG59XFxuXFxubGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIixcIi5wYWdlX19oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogJGNvbG9yLXByaW1hcnk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgei1pbmRleDogMTtcXG4gIFxcblxcbiAgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcblxcbiAgICAmIGxpOmxhc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICB9XFxuICB9XFxufVwiLFwiLm5hdiB7XFxuICBcXG4gIGJhY2tncm91bmQ6ICRjb2xvci1zZWNvbmRhcnk7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMjUpO1xcbiAgcGFkZGluZzogMnJlbSAuMjVyZW0gMCAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xcblxcbiAgJi0taGlkZGVuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG5cXG4gICZfX2NhdGVnb3J5IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjEpO1xcblxcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBsaSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4wNCk7XFxuICAgICAgfVxcblxcbiAgICAgICY6aG92ZXIgLmJ0bi0tZGVsZXRlIHtcXG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XFxuICAgICAgfVxcblxcbiAgICAgID4gLmJ0biB7XFxuICAgICAgICAvLyBNYWtlcyB0aGUgd2hvbGUgbGluZSBjbGlja2FibGUgaW5zdGVhZCBvZiBqdXN0IHRoZSB0ZXh0LlxcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgJi0taGVhZGluZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4wNyk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbn1cIixcIm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLm1haW4tLWhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNXB4KTtcXG5cXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxcbiAgfVxcbn1cXG5cXG4uc2VjdGlvbl9fbmFtZV9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAmOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IGluaXRpYWw7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBQcm9qZWN0Q29udHJvbGxlciB9IGZyb20gJy4vUHJvamVjdENvbnRyb2xsZXInXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuL1Byb2plY3RNb2RlbCdcbmltcG9ydCB7IFByb2plY3RWaWV3IH0gZnJvbSAnLi9Qcm9qZWN0VmlldydcbmltcG9ydCB7IFRvZG9MaXN0Q29udHJvbGxlciB9IGZyb20gJy4vVG9kb0xpc3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgVG9kb0xpc3RNb2RlbCB9IGZyb20gJy4vVG9kb0xpc3RNb2RlbCdcbmltcG9ydCB7IFRvZG9MaXN0VmlldyB9IGZyb20gJy4vVG9kb0xpc3RWaWV3J1xuXG5leHBvcnQgY2xhc3MgQXBwQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgIHRoaXMudmlldyA9IHZpZXdcblxuICAgIHRoaXMudmlldy5iaW5kQWRkUHJvamVjdCh0aGlzLmhhbmRsZUFkZFByb2plY3QuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERlbGV0ZVByb2plY3QodGhpcy5oYW5kbGVEZWxldGVQcm9qZWN0LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRDaGFuZ2VOYW1lKHRoaXMuaGFuZGxlQ2hhbmdlTmFtZS5iaW5kKHRoaXMpKVxuXG4gICAgdGhpcy52aWV3LmJpbmROYXZUb2dnbGUodGhpcy5oYW5kbGVOYXZUb2dnbGUuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZFRvZ2dsZSh0aGlzLmhhbmRsZVRvZ2dsZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGlzcGxheUFsbCh0aGlzLmhhbmRsZURpc3BsYXlBbGwuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZFByaW9yaXR5KHRoaXMuaGFuZGxlUHJpb3JpdHkuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERhdGVUb2RheSh0aGlzLmhhbmRsZVRvZGF5LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREYXRlVXBjb21pbmcodGhpcy5oYW5kbGVVcGNvbWluZy5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGF0ZUFueXRpbWUodGhpcy5oYW5kbGVBbnl0aW1lLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRIb21lKHRoaXMuaGFuZGxlSG9tZS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgLy8gRGlzcGxheSB0aGUgbmV3IHByb2plY3QgYW5kIGNyZWF0ZSBhIGJ1dHRvbiBsaW5rZWQgdG8gdGhlIHByb2plY3QgaW4gdGhlIG5hdmlnYXRpb24uXG4gIGhhbmRsZUFkZFByb2plY3QgKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RDb250cm9sbGVyKG5ldyBQcm9qZWN0TW9kZWwobmFtZSksIG5ldyBQcm9qZWN0VmlldyhQcm9qZWN0TW9kZWwuY291bnRlcikpXG4gICAgdGhpcy5tb2RlbC5hZGRQcm9qZWN0KHByb2plY3QpXG5cbiAgICBwcm9qZWN0Lm1vZGVsLmFkZFRvZG9MaXN0KG5ldyBUb2RvTGlzdENvbnRyb2xsZXIobmV3IFRvZG9MaXN0TW9kZWwoJ0RlZmF1bHQnLCBwcm9qZWN0Lm1vZGVsLmlkKSwgbmV3IFRvZG9MaXN0VmlldygpKSlcbiAgICB0aGlzLmRpc3BsYXlQcm9qZWN0KHByb2plY3QpXG4gICAgdGhpcy52aWV3LnJlbmRlckJ0bihuYW1lLCBwcm9qZWN0Lm1vZGVsLmlkKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByb2plY3Q9XCJwcm9qZWN0LSR7cHJvamVjdC5tb2RlbC5pZH1cIl1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlTmF2Q2xpY2socHJvamVjdCkpXG4gIH1cblxuICAvLyBMaW5rcyB0aGUgbmV3bHkgY3JlYXRlZCBuYXZpZ2F0aW9uIGJ1dHRvbiB0byBpdHMgcHJvamVjdFxuICBoYW5kbGVOYXZDbGljayAocHJvamVjdCkge1xuICAgIHRoaXMuZGlzcGxheVByb2plY3QocHJvamVjdClcbiAgfVxuXG4gIGRpc3BsYXlQcm9qZWN0IChwcm9qZWN0KSB7XG4gICAgcHJvamVjdC52aWV3LnJlbmRlck5hbWUocHJvamVjdC5tb2RlbC5uYW1lLCBwcm9qZWN0Lm1vZGVsLmlkKVxuICAgIHByb2plY3Qudmlldy5yZW5kZXIocHJvamVjdC5tb2RlbC50b2RvTGlzdHMpXG4gICAgcHJvamVjdC52aWV3LnJlbmRlckZvcm0ocHJvamVjdC5tb2RlbC5mb3JtKVxuICAgIHByb2plY3Qudmlldy5nZXRGb3JtKClcbiAgICBwcm9qZWN0LmJpbmRBZGQoKVxuICB9XG5cbiAgLy8gV2hlbiBhIHByb2plY3QgaXMgZGVsZXRlZCwgaXQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBtb2RlbCBhbmQgZnJvbSB0aGUgbmF2aWdhdGlvbi5cbiAgLy8gVGhlIEhvbWVwYWdlIGlzIGRpc3BsYXllZCBpbnN0ZWFkLlxuICBoYW5kbGVEZWxldGVQcm9qZWN0IChpZCkge1xuICAgIHRoaXMubW9kZWwuZGVsZXRlUHJvamVjdChpZClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0PVwicHJvamVjdC0ke2lkfVwiXWApLnJlbW92ZSgpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdD1cInByb2plY3QtMVwiXScpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlTmFtZSAoaWQsIG5hbWUpIHtcbiAgICB0aGlzLm1vZGVsLmVkaXRQcm9qZWN0KGlkLCBuYW1lKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWZpbHRlcj1cInByb2plY3QtJHtpZH1cIl1gKS50ZXh0Q29udGVudCA9IG5hbWVcbiAgfVxuXG4gIC8vIEVuYWJsZSBhbGwgdG9nZ2xlIGJ1dHRvbnNcbiAgaGFuZGxlVG9nZ2xlIChldmVudCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V2ZW50LnRhcmdldC5kYXRhc2V0LnRvZ2dsZX1gKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICB9XG5cbiAgLy8gTW9kaWZ5IHNwYWNlIG9jY3VwaWVkIGJ5IGNvbnRlbnQgd2hlbiB0aGUgbmF2aWdhdGlvbiBpcyBoaWRkZW4gLyBkaXNwbGF5ZWQuXG4gIGhhbmRsZU5hdlRvZ2dsZSAoKSB7XG4gICAgdGhpcy52aWV3Lm5hdi5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWhpZGRlbicpXG4gICAgdGhpcy52aWV3Lm1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnbWFpbi0taGlkZGVuJylcbiAgfVxuXG4gIC8vIEVuYWJsZSBwcmlvcml0eSBmaWx0ZXJzXG4gIGhhbmRsZVByaW9yaXR5IChwcmlvcml0eSkge1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgaWYgKHRvZG8uZGF0YXNldC5wcmlvcml0eSAhPT0gcHJpb3JpdHkpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNvbXBhcmVzIDIgZGF5cyAodXNlZCBmb3IgZGF0ZSBmaWx0ZXJzKVxuICBfc2FtZURheSAoZGF0ZTEsIGRhdGUyKSB7XG4gICAgY29uc3QgdG9kb0RhdGUgPSBuZXcgRGF0ZShkYXRlMSlcbiAgICBpZiAodG9kb0RhdGUuZ2V0RGF0ZSgpID09PSBkYXRlMi5nZXREYXRlKCkgJiZcbiAgICB0b2RvRGF0ZS5nZXRNb250aCgpID09PSBkYXRlMi5nZXRNb250aCgpICYmXG4gICAgdG9kb0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZTIuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBEYXRlcyBmaWx0ZXJzXG4gIGhhbmRsZVRvZGF5ICgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0aGlzLl9zYW1lRGF5KHRvZG8uZGF0YXNldC5kYXRlLCB0b2RheSkpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVVwY29taW5nICgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICghdGhpcy5fc2FtZURheSh0b2RvLmRhdGFzZXQuZGF0ZSwgdG9kYXkpICYmIG5ldyBEYXRlKHRvZG8uZGF0YXNldC5kYXRlKSA+IHRvZGF5KSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ25vLWRpc3BsYXknKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBbnl0aW1lICgpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0b2RvLmRhdGFzZXQuZGF0ZSAhPT0gJycpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIERpc2FibGUgZmlsdGVyc1xuICBoYW5kbGVEaXNwbGF5QWxsICgpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpKVxuICB9XG5cbiAgLy8gSG9tZSBwYWdlXG4gIGhhbmRsZUhvbWUgKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3Q9XCJwcm9qZWN0LTFcIl0nKS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9jYWxTdG9yYWdlTW9kdWxlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VNb2R1bGUnXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW11cbiAgfVxuXG4gIGFkZFByb2plY3QgKHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdClcbiAgICBwcm9qZWN0LmlkID0gKytBcHBNb2RlbC5jb3VudGVyXG4gICAgbG9jYWxTdG9yYWdlTW9kdWxlLnVwZGF0ZVByb2plY3RMaXN0KHRoaXMucHJvamVjdHMpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0FwcE1vZGVsQ291bnRlcicsIEFwcE1vZGVsLmNvdW50ZXIpXG4gIH1cblxuICBkZWxldGVQcm9qZWN0IChpZCkge1xuICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IGlkKVxuICAgIGxvY2FsU3RvcmFnZU1vZHVsZS51cGRhdGVQcm9qZWN0TGlzdCh0aGlzLnByb2plY3RzKVxuICB9XG5cbiAgZWRpdFByb2plY3QgKGlkLCBuYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5tb2RlbC5pZCA9PT0gK2lkKSB7XG4gICAgICAgIHByb2plY3QubW9kZWwubmFtZSA9IG5hbWVcbiAgICAgICAgbG9jYWxTdG9yYWdlTW9kdWxlLnVwZGF0ZVByb2plY3RMaXN0KHRoaXMucHJvamVjdHMpXG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvamVjdFxuICAgIH0pXG4gIH1cbn1cblxuQXBwTW9kZWwuY291bnRlciA9IDBcbiIsImV4cG9ydCBjbGFzcyBBcHBWaWV3IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIHRoaXMuaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWhvbWUnKVxuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuXG4gICAgLy8gRm9ybSB0byBjcmVhdGUgbmV3IHByb2plY3RzXG4gICAgdGhpcy5wcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLS1wcm9qZWN0IFtuYW1lPVwibmFtZVwiXScpXG4gICAgdGhpcy5wcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC0tcHJvamVjdCcpXG5cbiAgICAvLyBTb3J0IHRhc2tzXG4gICAgdGhpcy5zb3J0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC10aXRsZScpXG4gICAgdGhpcy5zb3J0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1kZXNjcmlwdGlvbicpXG4gICAgdGhpcy5zb3J0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LWRhdGUnKVxuICAgIHRoaXMuc29ydFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtcHJpb3JpdHknKVxuXG4gICAgLy8gRmlsdGVyIHRhc2tzXG4gICAgdGhpcy5kaXNwbGF5QWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmlsdGVyPVwiYWxsXCJdJylcbiAgICB0aGlzLnByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmlsdGVyXj1cInByaW9yaXR5XCJdJylcbiAgICB0aGlzLmRhdGVUb2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbHRlcj1cImRhdGUtdG9kYXlcIl0nKVxuICAgIHRoaXMuZGF0ZVVwY29taW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZmlsdGVyPVwiZGF0ZS11cGNvbWluZ1wiXScpXG4gICAgdGhpcy5kYXRlQW55dGltZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbHRlcj1cImRhdGUtYW55dGltZVwiXScpXG5cbiAgICAvLyBUb2dnbGUgTmF2aWdhdGlvblxuICAgIHRoaXMubmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlPVwibmF2XCJdJylcbiAgICB0aGlzLm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKVxuXG4gICAgLy8gRWRpdCBQcm9qZWN0IE5hbWVcbiAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gJydcbiAgICB0aGlzLl9jaGFuZ2VOYW1lKClcbiAgfVxuXG4gIC8vIEdldCBuZXcgcHJvamVjdCdzIG5hbWVcbiAgZ2V0IF9wcm9qZWN0TmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdElucHV0LnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBJbnB1dCB0byBjcmVhdGUgYSBuZXcgcHJvamVjdFxuICBfcmVzZXRJbnB1dCAoKSB7XG4gICAgdGhpcy5wcm9qZWN0SW5wdXQudmFsdWUgPSAnJ1xuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbiBsaW5rZWQgdG8gdGhlIHByb2plY3RcbiAgcmVuZGVyQnRuIChuYW1lLCBpZCkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2J0bi0tcHJvamVjdCcpXG4gICAgbGkuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBgcHJvamVjdC0ke2lkfWApXG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1maWx0ZXInKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicsIGBwcm9qZWN0LSR7aWR9YClcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbmFtZVxuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tZGVsZXRlJylcbiAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+J1xuXG4gICAgbGkuYXBwZW5kKGJ1dHRvbiwgY2xvc2VCdG4pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kKGxpKVxuICB9XG5cbiAgYmluZEFkZFByb2plY3QgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnByb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBoYW5kbGVyKHRoaXMuX3Byb2plY3ROYW1lKVxuICAgICAgdGhpcy5fcmVzZXRJbnB1dCgpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmREZWxldGVQcm9qZWN0IChoYW5kbGVyKSB7XG4gICAgdGhpcy5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpKSByZXR1cm5cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi0tZGVsZXRlJykpIHtcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnbGknKS5kYXRhc2V0LnByb2plY3Quc2xpY2UoOClcbiAgICAgICAgaGFuZGxlcihpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gTmF2aWdhdGlvbiB0b2dnbGVzXG4gIGJpbmRUb2dnbGUgKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQudG9nZ2xlKSB7XG4gICAgICAgIGhhbmRsZXIoZXZlbnQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmROYXZUb2dnbGUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLm5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICAvLyBIb21lIHBhZ2VcbiAgYmluZEhvbWUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgLy8gRmlsdGVyc1xuICBiaW5kUHJpb3JpdHkgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnByaW9yaXR5QnRuLmZvckVhY2goKHByaW9yaXR5QnRuKSA9PiBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gaGFuZGxlcihldmVudC50YXJnZXQuZGF0YXNldC5maWx0ZXIuc2xpY2UoOSkpKSlcbiAgfVxuXG4gIGJpbmREYXRlVG9kYXkgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmRhdGVUb2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBiaW5kRGF0ZVVwY29taW5nIChoYW5kbGVyKSB7XG4gICAgdGhpcy5kYXRlVXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgYmluZERhdGVBbnl0aW1lIChoYW5kbGVyKSB7XG4gICAgdGhpcy5kYXRlQW55dGltZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBiaW5kRGlzcGxheUFsbCAoaGFuZGxlcikge1xuICAgIHRoaXMuZGlzcGxheUFsbEJ0bi5mb3JFYWNoKChkaXNwbGF5QWxsQnRuKSA9PiBkaXNwbGF5QWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcikpXG4gIH1cblxuICAvLyBFZGl0IFByb2plY3QgTmFtZVxuXG4gIF9jaGFuZ2VOYW1lICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RfX25hbWUnKSkge1xuICAgICAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kQ2hhbmdlTmFtZSAoaGFuZGxlcikge1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5fdGVtcG9yYXJ5TmFtZSkge1xuICAgICAgICBoYW5kbGVyKGV2ZW50LnRhcmdldC5pZCwgdGhpcy5fdGVtcG9yYXJ5TmFtZSlcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5TmFtZSA9ICcnXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFByb2plY3RDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vZGVsLCB2aWV3KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgdGhpcy52aWV3ID0gdmlld1xuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlKHRoaXMubW9kZWwudG9kb0xpc3RzKVxuICAgIHRoaXMubW9kZWwuYmluZFByb2plY3RDaGFuZ2UodGhpcy5vblByb2plY3RDaGFuZ2UuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZENoYW5nZU5hbWUodGhpcy5oYW5kbGVFZGl0VG9kb0xpc3QuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERlbGV0ZVNlY3Rpb24odGhpcy5oYW5kbGVEZWxldGVUb2RvTGlzdC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgb25Qcm9qZWN0Q2hhbmdlICh0b2RvTGlzdHMpIHtcbiAgICB0aGlzLnZpZXcucmVuZGVyKHRvZG9MaXN0cylcbiAgfVxuXG4gIGhhbmRsZUFkZFRvZG9MaXN0ICh0b2RvTGlzdCkge1xuICAgIHRoaXMubW9kZWwuYWRkVG9kb0xpc3QodG9kb0xpc3QpXG4gIH1cblxuICBoYW5kbGVEZWxldGVUb2RvTGlzdCAoaWQpIHtcbiAgICB0aGlzLm1vZGVsLmRlbGV0ZVRvZG9MaXN0KGlkKVxuICB9XG5cbiAgaGFuZGxlRWRpdFRvZG9MaXN0IChpZCwgbmFtZSkge1xuICAgIHRoaXMubW9kZWwuZWRpdFRvZG9MaXN0KGlkLCBuYW1lKVxuICB9XG5cbiAgYmluZEFkZCAoKSB7XG4gICAgdGhpcy52aWV3LmJpbmRBZGRTZWN0aW9uKHRoaXMuaGFuZGxlQWRkVG9kb0xpc3QuYmluZCh0aGlzKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2VjdGlvbkZvcm0gfSBmcm9tICcuL1NlY3Rpb25Gb3JtJ1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlTW9kdWxlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VNb2R1bGUnXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0TW9kZWwge1xuICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWUgPT09ICcnID8gJ1VudGl0bGVkJyA6IG5hbWVcbiAgICB0aGlzLmlkID0gKytQcm9qZWN0TW9kZWwuY291bnRlclxuICAgIHRoaXMudG9kb0xpc3RzID0gW11cbiAgICB0aGlzLmZvcm0gPSBuZXcgU2VjdGlvbkZvcm0odGhpcy5pZClcbiAgfVxuXG4gIF9jb21taXQgKHRvZG9MaXN0cykge1xuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlKHRvZG9MaXN0cylcbiAgICBsb2NhbFN0b3JhZ2VNb2R1bGUudXBkYXRlVG9kb0xpc3RzKHRoaXMuaWQsIHRoaXMudG9kb0xpc3RzKVxuICB9XG5cbiAgYWRkVG9kb0xpc3QgKHRvZG9MaXN0KSB7XG4gICAgdGhpcy50b2RvTGlzdHMucHVzaCh0b2RvTGlzdClcbiAgICB0b2RvTGlzdC5pZCA9IHRoaXMudG9kb0xpc3RzLmxlbmd0aFxuICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGVkaXRUb2RvTGlzdCAoaWQsIG5hbWUpIHtcbiAgICB0aGlzLnRvZG9MaXN0cyA9IHRoaXMudG9kb0xpc3RzLm1hcCgodG9kb0xpc3QpID0+IHtcbiAgICAgIGlmICh0b2RvTGlzdC5tb2RlbC5pZCA9PT0gK2lkKSB7XG4gICAgICAgIHRvZG9MaXN0Lm1vZGVsLm5hbWUgPSBuYW1lXG4gICAgICB9XG4gICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICB9KVxuICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGRlbGV0ZVRvZG9MaXN0IChpZCkge1xuICAgIHRoaXMudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHMuZmlsdGVyKHRvZG9MaXN0ID0+IHRvZG9MaXN0Lm1vZGVsLmlkICE9PSAraWQpXG4gICAgdGhpcy5fY29tbWl0KHRoaXMudG9kb0xpc3RzKVxuICB9XG5cbiAgYmluZFByb2plY3RDaGFuZ2UgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vblByb2plY3RDaGFuZ2UgPSBjYWxsYmFja1xuICB9XG59XG5cblByb2plY3RNb2RlbC5jb3VudGVyID0gMFxuIiwiaW1wb3J0IHsgVG9kb0xpc3RDb250cm9sbGVyIH0gZnJvbSAnLi9Ub2RvTGlzdENvbnRyb2xsZXInXG5pbXBvcnQgeyBUb2RvTGlzdE1vZGVsIH0gZnJvbSAnLi9Ub2RvTGlzdE1vZGVsJ1xuaW1wb3J0IHsgVG9kb0xpc3RWaWV3IH0gZnJvbSAnLi9Ub2RvTGlzdFZpZXcnXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuL1Byb2plY3RNb2RlbCdcblxuZXhwb3J0IGNsYXNzIFByb2plY3RWaWV3IHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy5zZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9ucycpXG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX25hbWUnKVxuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuX3RlbXBvcmFyeU5hbWUgPSAnJ1xuICAgIHRoaXMuX2NoYW5nZU5hbWUoKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0XG4gIHJlbmRlck5hbWUgKG5hbWUsIGlkKSB7XG4gICAgdGhpcy5uYW1lLmlubmVySFRNTCA9IG5hbWVcbiAgICB0aGlzLm5hbWUuc2V0QXR0cmlidXRlKCdpZCcsIGlkKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBhZGQgc2VjdGlvbiBmb3JtXG4gIHJlbmRlckZvcm0gKGZvcm0pIHtcbiAgICBmb3JtLnJlbmRlcigpXG4gIH1cblxuICAvLyBHZXQgdGhlIGFkZCBzZWN0aW9uIGZvcm0gaW5wdXRzXG4gIGdldEZvcm0gKCkge1xuICAgIHRoaXMubmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlY3Rpb24tZm9ybS0ke3RoaXMuaWR9IFtuYW1lPVwic2VjdGlvblwiXWApXG4gICAgdGhpcy5zdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH0gLmJ0bi0tc3VibWl0YClcbiAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gKVxuICB9XG5cbiAgLy8gR2V0IFNlY3Rpb24ncyBOYW1lIGZyb20gdGhlIGZvcm1cbiAgZ2V0IF9zZWN0aW9uTmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZUlucHV0LnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBmb3JtIGlucHV0XG4gIF9yZXNldElucHV0ICgpIHtcbiAgICB0aGlzLm5hbWVJbnB1dC52YWx1ZSA9ICcnXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHByb2plY3QgYnkgcmVuZGVyaW5nIGV2ZXJ5IHNlY3Rpb25cbiAgcmVuZGVyICh0b2RvTGlzdHMpIHtcbiAgICB3aGlsZSAodGhpcy5zZWN0aW9ucy5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnNlY3Rpb25zLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHRvZG9MaXN0IG9mIHRvZG9MaXN0cykge1xuICAgICAgdG9kb0xpc3Qudmlldy5jcmVhdGVTZWN0aW9uKClcbiAgICAgIHRvZG9MaXN0LnZpZXcucmVuZGVyTmFtZSh0b2RvTGlzdC5tb2RlbC5uYW1lKVxuICAgICAgdG9kb0xpc3Qudmlldy5yZW5kZXIodG9kb0xpc3QubW9kZWwudG9kb3MpXG4gICAgICB0b2RvTGlzdC52aWV3LnJlbmRlckZvcm0odG9kb0xpc3QubW9kZWwuZm9ybSlcbiAgICAgIHRvZG9MaXN0LnZpZXcuZ2V0Rm9ybSh0b2RvTGlzdC5tb2RlbC5mb3JtKVxuICAgICAgdG9kb0xpc3QuYmluZEFkZCgpXG4gICAgfVxuICB9XG5cbiAgLy8gQWxsb3cgc2VjdGlvbiBuYW1lIGVkaXRzXG4gIF9jaGFuZ2VOYW1lICgpIHtcbiAgICB0aGlzLnNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlY3Rpb25fX25hbWUnKSkge1xuICAgICAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kQ2hhbmdlTmFtZSAoaGFuZGxlcikge1xuICAgIHRoaXMuc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fdGVtcG9yYXJ5TmFtZSkge1xuICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbY2xhc3NePVwic2VjdGlvbi1cIl0nKS5jbGFzc0xpc3RbMF0uc2xpY2UoOClcbiAgICAgICAgaGFuZGxlcihpZCwgdGhpcy5fdGVtcG9yYXJ5TmFtZSlcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5TmFtZSA9ICcnXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmRBZGRTZWN0aW9uIChoYW5kbGVyKSB7XG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC0tc2VjdGlvbicpKSB7XG4gICAgICAgIGhhbmRsZXIobmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCh0aGlzLl9zZWN0aW9uTmFtZSwgUHJvamVjdE1vZGVsLmNvdW50ZXIpLCBuZXcgVG9kb0xpc3RWaWV3KCkpKVxuICAgICAgICB0aGlzLl9yZXNldElucHV0KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmluZERlbGV0ZVNlY3Rpb24gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5idG4tLWRlbGV0ZScpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5idG4tLWRlbGV0ZScpLmRhdGFzZXQuZGVsZXRlXG4gICAgICAgIGhhbmRsZXIoaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlY3Rpb25Gb3JtIHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkX19zZWN0aW9uJylcbiAgICBmb3JtQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBmb3JtQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWRyb3Bkb3duJywgJ2J0bi0tc2VjdGlvbicpXG4gICAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gKVxuICAgIGZvcm1CdG4uaW5uZXJIVE1MID0gJ0FkZCBTZWN0aW9uJ1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnYWRkJywgJ2FkZC0tc2VjdGlvbicsICdkcm9wZG93bicsICdoaWRkZW4nKVxuICAgIGZvcm0uaWQgPSBgc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FkZF9fY29udGVudCcsICdhZGRfX2NvbnRlbnQtLXNlY3Rpb24nKVxuXG4gICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc2VjdGlvbicpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlY3Rpb25cXCdzIE5hbWUnKVxuICAgIGxhYmVsTmFtZS5hcHBlbmQobmFtZSlcbiAgICBjb250ZW50LmFwcGVuZChsYWJlbE5hbWUpXG5cbiAgICBjb25zdCBmaW5pc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZpbmlzaC5jbGFzc0xpc3QuYWRkKCdhZGRfX2ZpbmlzaCcpXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWFkZCcsICdzZWN0aW9uJylcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tc3VibWl0JylcbiAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FkZCBTZWN0aW9uJ1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gKVxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1jYW5jZWwnKVxuICAgIGNhbmNlbEJ0bi5pbm5lckhUTUwgPSAnQ2FuY2VsJ1xuXG4gICAgZmluaXNoLmFwcGVuZChzdWJtaXRCdG4sIGNhbmNlbEJ0bilcbiAgICBmb3JtLmFwcGVuZChjb250ZW50LCBmaW5pc2gpXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmQoZm9ybUJ0biwgZm9ybSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb0Zvcm0gfSBmcm9tICcuL1RvZG9Gb3JtJ1xuXG5leHBvcnQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUgPSAnJywgcHJpb3JpdHkgPSAnbm9uZScpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICB0aGlzLmRhdGUgPSBkYXRlXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgdGhpcy5pZCA9ICsrVG9kby5jb3VudGVyXG4gICAgdGhpcy5lZGl0Rm9ybSA9IG5ldyBUb2RvRm9ybSgnZWRpdCcsIHRoaXMuaWQpXG4gIH1cblxuICByZW5kZXIgKGNvbnRhaW5lcikge1xuICAgIHRoaXMudG9kb0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMudG9kb0VsZW0uY2xhc3NMaXN0LmFkZCgndG8tZG8nKVxuICAgIHRoaXMudG9kb0VsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWRhdGUnLCB0aGlzLmRhdGUpXG4gICAgdGhpcy50b2RvRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpb3JpdHknLCB0aGlzLnByaW9yaXR5KVxuICAgIHRoaXMudG9kb0VsZW0uaWQgPSB0aGlzLmlkXG5cbiAgICBjb25zdCB0b2RvQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdG9kb0NoZWNrLmNsYXNzTGlzdC5hZGQoJ3RvLWRvX19jaGVjaycpXG4gICAgdG9kb0NoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgdGhpcy50b2RvRWxlbS5hcHBlbmQodG9kb0NoZWNrKVxuXG4gICAgY29uc3QgY29tcG9uZW50cyA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnZGF0ZSddXG4gICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgY29tcG9uZW50cykge1xuICAgICAgY29uc3QgdG9kb0NvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0b2RvQ29tcG9uZW50LmNsYXNzTGlzdC5hZGQoYHRvLWRvX18ke2NvbXBvbmVudH1gKVxuICAgICAgdG9kb0NvbXBvbmVudC5pbm5lckhUTUwgPSB0aGlzW2NvbXBvbmVudF1cbiAgICAgIHRoaXMudG9kb0VsZW0uYXBwZW5kKHRvZG9Db21wb25lbnQpXG4gICAgfVxuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG8tZG9fX3ByaW9yaXR5JywgYHByaW9yaXR5LSR7dGhpcy5wcmlvcml0eX1gKVxuICAgIHRvZG9Qcmlvcml0eS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuICAgIHRoaXMudG9kb0VsZW0uYXBwZW5kKHRvZG9Qcmlvcml0eSlcblxuICAgIHRoaXMudG9kb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMudG9kb0VkaXQuY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tdG9nZ2xlJywgJ2J0bi0tZWRpdCcpXG4gICAgdGhpcy50b2RvRWRpdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLnRvZG9FZGl0LnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgZWRpdC10b2RvLSR7dGhpcy5pZH1gKVxuICAgIHRoaXMudG9kb0VkaXQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXBlbmNpbC1hbHRcIj48L2k+J1xuICAgIHRoaXMudG9kb0VsZW0uYXBwZW5kKHRoaXMudG9kb0VkaXQpXG5cbiAgICBjb250YWluZXIuYXBwZW5kKHRoaXMudG9kb0VsZW0pXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RvZG9Db3VudGVyJywgVG9kby5jb3VudGVyKVxuICB9XG59XG5cblRvZG8uY291bnRlciA9IDBcbiIsImV4cG9ydCBjbGFzcyBUb2RvRm9ybSB7XG4gIGNvbnN0cnVjdG9yIChnb2FsLCBpZCkge1xuICAgIHRoaXMuZ29hbCA9IGdvYWxcbiAgICB0aGlzLmlkID0gaWRcbiAgfVxuXG4gIF9yZW5kZXJGb3JtICgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH0tLXRvZG9gLCAndG9kby1mb3JtJywgJ2Ryb3Bkb3duJylcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLmdvYWx9LXRvZG8tJHt0aGlzLmlkfWApXG5cbiAgICBpZiAodGhpcy5nb2FsID09PSAnYWRkJykge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9X19jb250ZW50YCwgYCR7dGhpcy5nb2FsfV9fY29udGVudC0tdG9kb2ApXG5cbiAgICBjb25zdCBsYWJlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKVxuICAgIGxhYmVsVGl0bGUuYXBwZW5kKHRpdGxlKVxuXG4gICAgY29uc3QgbGFiZWxEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKVxuICAgIGxhYmVsRGVzY3JpcHRpb24uYXBwZW5kKGRlc2NyaXB0aW9uKVxuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH1fX2RldGFpbHNgKVxuXG4gICAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpXG4gICAgbGFiZWxEYXRlLmFwcGVuZChkYXRlKVxuXG4gICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZF9fcHJpb3JpdHknKVxuICAgIHRoaXMucHJpb3JpdHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMucHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgdGhpcy5wcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYGFkZC1wcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICB0aGlzLnByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLXRvZ2dsZScpXG4gICAgdGhpcy5wcmlvcml0eUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuXG4gICAgY29uc3QgcHJpb3JpdGllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdGllcy5jbGFzc0xpc3QuYWRkKCdhZGQtcHJpb3JpdHknLCAnZHJvcGRvd24nLCAnaGlkZGVuJylcbiAgICBwcmlvcml0aWVzLnNldEF0dHJpYnV0ZSgnaWQnLCBgYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1gKVxuICAgIGNvbnN0IHByaW9yaXRpZXNMaXN0ID0gWydoaWdoJywgJ21lZCcsICdsb3cnLCAnbm9uZSddXG5cbiAgICBmb3IgKGNvbnN0IHByaW9yaXR5IG9mIHByaW9yaXRpZXNMaXN0KSB7XG4gICAgICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWxQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBwcmlvcml0eS0ke3ByaW9yaXR5fS0ke3RoaXMuaWR9YClcbiAgICAgIGxhYmVsUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHtwcmlvcml0eX1gLCBgcHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgICBsYWJlbFByaW9yaXR5LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1ib29rbWFya1wiPjwvaT4nXG5cbiAgICAgIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcmlvcml0eSlcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsIGBwcmlvcml0eS0ke3ByaW9yaXR5fS0ke3RoaXMuaWR9YClcblxuICAgICAgaWYgKHByaW9yaXR5ID09PSAnbm9uZScpIHtcbiAgICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBwcmlvcml0aWVzLmFwcGVuZChsYWJlbFByaW9yaXR5LCBpbnB1dFByaW9yaXR5KVxuICAgIH1cblxuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZCh0aGlzLnByaW9yaXR5QnRuLCBwcmlvcml0aWVzKVxuXG4gICAgY29uc3QgZmluaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmaW5pc2guY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9X19maW5pc2hgKVxuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLXN1Ym1pdCcpXG4gICAgc3VibWl0QnRuLmlubmVySFRNTCA9IGAke3RoaXMuZ29hbC50b1VwcGVyQ2FzZSgpLnNsaWNlKDAsIDEpICsgdGhpcy5nb2FsLnNsaWNlKDEpfSBUYXNrYFxuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgJHt0aGlzLmdvYWx9LXRvZG8tJHt0aGlzLmlkfWApXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWNhbmNlbCcpXG4gICAgY2FuY2VsQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnXG5cbiAgICBmaW5pc2guYXBwZW5kKHN1Ym1pdEJ0biwgY2FuY2VsQnRuKVxuICAgIGNvbnRlbnQuYXBwZW5kKGxhYmVsVGl0bGUsIGxhYmVsRGVzY3JpcHRpb24sIGRldGFpbHMpXG4gICAgZGV0YWlscy5hcHBlbmQobGFiZWxEYXRlLCBwcmlvcml0eUNvbnRhaW5lcilcbiAgICBmb3JtLmFwcGVuZChjb250ZW50LCBmaW5pc2gpXG5cbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgcmVuZGVyQWRkIChjb250YWluZXIpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfV9fdG9kb2ApXG5cbiAgICB0aGlzLmZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMuZm9ybUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1kcm9wZG93bicsIGBidG4tLSR7dGhpcy5nb2FsfWApXG4gICAgdGhpcy5mb3JtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHRoaXMuZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYCR7dGhpcy5nb2FsfS10b2RvLSR7dGhpcy5pZH1gKVxuICAgIHRoaXMuZm9ybUJ0bi5pbm5lckhUTUwgPSBgJHt0aGlzLmdvYWwuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMuZ29hbC5zbGljZSgxKX0gVGFza2BcblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kKHRoaXMuZm9ybUJ0biwgdGhpcy5fcmVuZGVyRm9ybSgpKVxuICAgIGNvbnRhaW5lci5hcHBlbmQoZm9ybUNvbnRhaW5lcilcblxuICAgIHRoaXMuX2luaXRQcmlvcml0eVRvZ2dsZSgpXG4gICAgdGhpcy5faW5pdFByaW9yaXR5TGFiZWxzKClcbiAgfVxuXG4gIHJlbmRlckVkaXQgKGJlZm9yZSkge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9X190b2RvYClcblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kKHRoaXMuX3JlbmRlckZvcm0oKSlcbiAgICBiZWZvcmUuYWZ0ZXIoZm9ybUNvbnRhaW5lcilcblxuICAgIHRoaXMuX2luaXRQcmlvcml0eVRvZ2dsZSgpXG4gICAgdGhpcy5faW5pdFByaW9yaXR5TGFiZWxzKClcbiAgfVxuXG4gIC8vIEVuYWJsZSBwcmlvcml0eSB0b2dnbGUgYW5kIGNvbG9yIGNoYW5nZSB3aGVuIHNlbGVjdGluZyBhIHByaW9yaXR5XG5cbiAgX2luaXRQcmlvcml0eVRvZ2dsZSAoKSB7XG4gICAgdGhpcy5wcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMucHJpb3JpdHlCdG4uZGF0YXNldC50b2dnbGV9YCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJykpXG4gIH1cblxuICBfaW5pdFByaW9yaXR5TGFiZWxzICgpIHtcbiAgICB0aGlzLmxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICB0aGlzLmxhYmVscy5mb3JFYWNoKGxhYmVsID0+IGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1gKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlPVwiYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1cIl1gKS5zdHlsZS5jb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xhYmVsJykpLmNvbG9yXG4gICAgfSkpXG4gIH1cblxuICAvLyBSZXNldCBwcmlvcml0eSBjb2xvciB3aGVuIGFkZGluZyBhIHRhc2tcblxuICBfaW5pdFJlc2V0UHJpb3JpdHkgKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGQtdG9kby0ke3RoaXMuaWR9IC5idG4tLXN1Ym1pdGApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlPVwiYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1cIl1gKS5zdHlsZS5jb2xvciA9ICcnXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb0Zvcm0gfSBmcm9tICcuL1RvZG9Gb3JtJ1xuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vZGVsLCB2aWV3KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgdGhpcy52aWV3ID0gdmlld1xuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0aGlzLm1vZGVsLnRvZG9zKVxuICAgIHRoaXMubW9kZWwuYmluZFRvZG9MaXN0Q2hhbmdlKHRoaXMub25Ub2RvTGlzdENoYW5nZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGVsZXRlVG9kbyh0aGlzLmhhbmRsZURlbGV0ZVRvZG8uYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZE9wZW5FZGl0KHRoaXMuaGFuZGxlT3BlbkVkaXQuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZEVkaXRUb2RvKHRoaXMuaGFuZGxlRWRpdFRvZG8uYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9uVG9kb0xpc3RDaGFuZ2UgKHRvZG9zKSB7XG4gICAgdGhpcy52aWV3LnJlbmRlcih0b2RvcylcbiAgfVxuXG4gIGhhbmRsZUFkZFRvZG8gKHRvZG8pIHtcbiAgICB0aGlzLm1vZGVsLmFkZFRvZG8odG9kbylcbiAgfVxuXG4gIGhhbmRsZUVkaXRUb2RvICh1cGRhdGVkVG9kbywgaWQpIHtcbiAgICB0aGlzLm1vZGVsLmVkaXRUb2RvKHVwZGF0ZWRUb2RvLCBpZClcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZVRvZG8gKGlkKSB7XG4gICAgdGhpcy5tb2RlbC5kZWxldGVUb2RvKGlkKVxuICB9XG5cbiAgaGFuZGxlT3BlbkVkaXQgKGlkKSB7XG4gICAgLy8gVXNlciBjYW4gb25seSBlZGl0IG9uZSB0YXNrIGF0IGEgdGltZSwgc28gaWYgdGhlcmUgaXMgYW5vdGhlciBFZGl0IEZvcm0gb3BlbiwgaXQgaXMgY2xvc2VkLlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdJykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0nKS5yZW1vdmUoKVxuICAgIH1cbiAgICBuZXcgVG9kb0Zvcm0oJ2VkaXQnLCBpZCkucmVuZGVyRWRpdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG8tZG9baWQ9XCIke2lkfVwiXWApKVxuICAgIHRoaXMudmlldy5nZXRFZGl0Rm9ybShpZClcbiAgICB0aGlzLnZpZXcuc2V0RWRpdEZvcm0oaWQpXG4gIH1cblxuICBiaW5kQWRkICgpIHtcbiAgICB0aGlzLnZpZXcuYmluZEFkZFRvZG8odGhpcy5oYW5kbGVBZGRUb2RvLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9Gb3JtIH0gZnJvbSAnLi9Ub2RvRm9ybSdcbmltcG9ydCB7IGxvY2FsU3RvcmFnZU1vZHVsZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlTW9kdWxlJ1xuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RNb2RlbCB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9qZWN0SWQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lID09PSAnJyA/ICdVbnRpdGxlZCcgOiBuYW1lXG4gICAgdGhpcy5pZCA9ICsrVG9kb0xpc3RNb2RlbC5jb3VudGVyXG4gICAgdGhpcy5mb3JtID0gbmV3IFRvZG9Gb3JtKCdhZGQnLCB0aGlzLmlkKVxuICAgIHRoaXMucHJvamVjdElkID0gcHJvamVjdElkXG4gICAgdGhpcy50b2RvcyA9IFtdXG4gIH1cblxuICBhZGRUb2RvICh0b2RvKSB7XG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pXG4gICAgdGhpcy5fY29tbWl0KHRoaXMudG9kb3MpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RvZG9MaXN0TW9kZWxDb3VudGVyJywgVG9kb0xpc3RNb2RlbC5jb3VudGVyKVxuICB9XG5cbiAgZWRpdFRvZG8gKHVwZGF0ZWRUb2RvLCBpZCkge1xuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgaWYgKHRvZG8uaWQgPT09ICtpZCkge1xuICAgICAgICByZXR1cm4gdXBkYXRlZFRvZG9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b2RvXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvcylcbiAgfVxuXG4gIGRlbGV0ZVRvZG8gKGlkKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZClcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvcylcbiAgfVxuXG4gIGJpbmRUb2RvTGlzdENoYW5nZSAoY2FsbGJhY2spIHtcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UgPSBjYWxsYmFja1xuICB9XG5cbiAgX2NvbW1pdCAodG9kb3MpIHtcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UodG9kb3MpXG4gICAgbG9jYWxTdG9yYWdlTW9kdWxlLnVwZGF0ZVRvZG9zKHRoaXMuaWQsIHRoaXMucHJvamVjdElkLCB0aGlzLnRvZG9zKVxuICB9XG59XG5cblRvZG9MaXN0TW9kZWwuY291bnRlciA9IDBcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8nXG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdFZpZXcge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25zJylcbiAgICB0aGlzLnRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLnRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG9saXN0JylcbiAgICB0aGlzLmlkID0gKytUb2RvTGlzdFZpZXcuY291bnRlclxuICB9XG5cbiAgLy8gQ3JlYXRlIGEgc2VjdGlvblxuICBjcmVhdGVTZWN0aW9uICgpIHtcbiAgICB0aGlzLnNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGBzZWN0aW9uLSR7dGhpcy5pZH1gKVxuICAgIHRoaXMuc2VjdGlvbi5wcmVwZW5kKHRoaXMudG9kb0xpc3QpXG4gICAgdGhpcy5wcm9qZWN0LmFwcGVuZCh0aGlzLnNlY3Rpb24pXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHNlY3Rpb24ncyBuYW1lXG4gIHJlbmRlck5hbWUgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMubmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19uYW1lX19jb250YWluZXInKVxuXG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRoaXMubmFtZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19uYW1lJylcbiAgICB0aGlzLm5hbWUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKVxuICAgIHRoaXMubmFtZS5pbm5lckhUTUwgPSBuYW1lXG5cbiAgICB0aGlzLmRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGhpcy5kZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLS1kZWxldGUnKVxuICAgIHRoaXMuZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHRoaXMuZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1kZWxldGUnLCB0aGlzLnNlY3Rpb24uY2xhc3NMaXN0WzBdLnNsaWNlKDgpKVxuICAgIHRoaXMuZGVsZXRlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT4nXG5cbiAgICB0aGlzLm5hbWVDb250YWluZXIuYXBwZW5kKHRoaXMubmFtZSwgdGhpcy5kZWxldGVCdG4pXG4gICAgdGhpcy5zZWN0aW9uLnByZXBlbmQodGhpcy5uYW1lQ29udGFpbmVyKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBBZGQgZm9ybVxuICByZW5kZXJGb3JtIChmb3JtKSB7XG4gICAgZm9ybS5yZW5kZXJBZGQodGhpcy5zZWN0aW9uKVxuICB9XG5cbiAgLy8gR2V0IHRoZSBBZGQgZm9ybSBpbnB1dHNcbiAgZ2V0Rm9ybSAoKSB7XG4gICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cInRpdGxlXCJdYClcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHt0aGlzLmlkfSAudG9kby1mb3JtIFtuYW1lPVwiZGVzY3JpcHRpb25cIl1gKVxuICAgIHRoaXMuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cImRhdGVcIl1gKVxuICAgIHRoaXMuc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHt0aGlzLmlkfSAudG9kby1mb3JtIC5idG4tLXN1Ym1pdGApXG4gIH1cblxuICAvLyBHZXQgYWRkIGZvcm0gdmFsdWVzXG4gIGdldCBfdG9kb1RpdGxlICgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZS52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvRGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9EYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9Qcmlvcml0eSAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWVcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgdGhlIEVkaXQgZm9ybSBpbnB1dHNcbiAgZ2V0RWRpdEZvcm0gKCkge1xuICAgIHRoaXMudGl0bGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImVkaXQtdG9kb1wiXSBbbmFtZT1cInRpdGxlXCJdJylcbiAgICB0aGlzLmRlc2NyaXB0aW9uRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gW25hbWU9XCJkZXNjcmlwdGlvblwiXScpXG4gICAgdGhpcy5kYXRlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gW25hbWU9XCJkYXRlXCJdJylcbiAgICB0aGlzLnByaW9yaXR5RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gLmJ0bi0tdG9nZ2xlJylcbiAgfVxuXG4gIC8vIEF1dG9tYXRpY2FsbHkgcHJlLWZpbGwgdGhlIEVkaXQgZm9ybSBpbnB1dHNcbiAgc2V0RWRpdEZvcm0gKGlkKSB7XG4gICAgdGhpcy50aXRsZUVkaXQudmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX3RpdGxlYCkuaW5uZXJIVE1MXG4gICAgdGhpcy5kZXNjcmlwdGlvbkVkaXQudmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX2Rlc2NyaXB0aW9uYCkuaW5uZXJIVE1MXG4gICAgdGhpcy5kYXRlRWRpdC52YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aWR9XCJdIC50by1kb19fZGF0ZWApLmlubmVySFRNTFxuICAgIHRoaXMucHJpb3JpdHlFZGl0LmNsYXNzTGlzdC5hZGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl0gLnRvLWRvX19wcmlvcml0eWApLmNsYXNzTGlzdFsxXSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWRePVwiZWRpdC10b2RvXCJdIFtpZF49XCIke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aWR9XCJdIC50by1kb19fcHJpb3JpdHlgKS5jbGFzc0xpc3RbMV19XCJdYCkuY2hlY2tlZCA9IHRydWVcbiAgfVxuXG4gIC8vIEdldCB0aGUgRWRpdCBmb3JtIHZhbHVlc1xuICBnZXQgX2VkaXRUaXRsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGVFZGl0LnZhbHVlXG4gIH1cblxuICBnZXQgX2VkaXREZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb25FZGl0LnZhbHVlXG4gIH1cblxuICBnZXQgX2VkaXREYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlRWRpdC52YWx1ZVxuICB9XG5cbiAgZ2V0IF9lZGl0UHJpb3JpdHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdIFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBmb3JtIGlucHV0c1xuICBfcmVzZXRJbnB1dHMgKCkge1xuICAgIHRoaXMudGl0bGUudmFsdWUgPSAnJ1xuICAgIHRoaXMuZGVzY3JpcHRpb24udmFsdWUgPSAnJ1xuICAgIHRoaXMuZGF0ZS52YWx1ZSA9ICcnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcl49XCJwcmlvcml0eS1ub25lXCJdJykuY2hlY2tlZCA9IHRydWVcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgVG9kbyBMaXN0XG4gIHJlbmRlciAodG9kb3MpIHtcbiAgICB3aGlsZSAodGhpcy50b2RvTGlzdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnRvZG9MaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICAgIHRvZG8ucmVuZGVyKHRoaXMudG9kb0xpc3QpXG4gICAgfVxuICB9XG5cbiAgLy8gRXZlbnQgTGlzdGVuZXJzXG5cbiAgYmluZEFkZFRvZG8gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaGFuZGxlcihuZXcgVG9kbyh0aGlzLl90b2RvVGl0bGUsIHRoaXMuX3RvZG9EZXNjcmlwdGlvbiwgdGhpcy5fdG9kb0RhdGUsIHRoaXMuX3RvZG9Qcmlvcml0eSkpXG4gICAgICB0aGlzLl9yZXNldElucHV0cygpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmREZWxldGVUb2RvIChoYW5kbGVyKSB7XG4gICAgdGhpcy50b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvLWRvX19jaGVjaycpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpXG4gICAgICAgIGhhbmRsZXIoaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIE9wZW4gZm9ybSB0byBlZGl0IHRoZSB0b2RvXG4gIGJpbmRPcGVuRWRpdCAoaGFuZGxlcikge1xuICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLmJ0bi0tZWRpdCcpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50by1kbycpLmlkKVxuICAgICAgICBoYW5kbGVyKGlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kRWRpdFRvZG8gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PT0gJ0VkaXQgVGFzaycpIHtcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnZm9ybScpLmlkLnNsaWNlKDEwKVxuICAgICAgICBjb25zdCB1cGRhdGVkVG9kbyA9IG5ldyBUb2RvKHRoaXMuX2VkaXRUaXRsZSwgdGhpcy5fZWRpdERlc2NyaXB0aW9uLCB0aGlzLl9lZGl0RGF0ZSwgdGhpcy5fZWRpdFByaW9yaXR5KVxuICAgICAgICBoYW5kbGVyKHVwZGF0ZWRUb2RvLCBpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblRvZG9MaXN0Vmlldy5jb3VudGVyID0gMCIsImltcG9ydCAnLi9zYXNzL21haW4uc2NzcydcbmltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tICcuL0FwcENvbnRyb2xsZXInXG5pbXBvcnQgeyBBcHBNb2RlbCB9IGZyb20gJy4vQXBwTW9kZWwnXG5pbXBvcnQgeyBBcHBWaWV3IH0gZnJvbSAnLi9BcHBWaWV3J1xuaW1wb3J0IHsgVG9kb0xpc3RDb250cm9sbGVyIH0gZnJvbSAnLi9Ub2RvTGlzdENvbnRyb2xsZXInXG5pbXBvcnQgeyBUb2RvTGlzdE1vZGVsIH0gZnJvbSAnLi9Ub2RvTGlzdE1vZGVsJ1xuaW1wb3J0IHsgVG9kb0xpc3RWaWV3IH0gZnJvbSAnLi9Ub2RvTGlzdFZpZXcnXG5pbXBvcnQgeyBQcm9qZWN0Q29udHJvbGxlciB9IGZyb20gJy4vUHJvamVjdENvbnRyb2xsZXInXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuL1Byb2plY3RNb2RlbCdcbmltcG9ydCB7IFByb2plY3RWaWV3IH0gZnJvbSAnLi9Qcm9qZWN0VmlldydcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8nXG5cbmNvbnN0IGFwcCA9IG5ldyBBcHBDb250cm9sbGVyKG5ldyBBcHBNb2RlbCgpLCBuZXcgQXBwVmlldygpKVxuXG4vLyBPbiB0aGUgZmlyc3QgdXNlLCBjcmVhdGVzIGEgZGVmYXVsdCBwcm9qZWN0IGFuZCBzYW1wbGVzXG5pZiAoIWxvY2FsU3RvcmFnZS5wcm9qZWN0cykge1xuICAvLyBDcmVhdGUgYSBkZWZhdWx0IHByb2plY3QuIEl0IGNhbm5vdCBiZSBkZWxldGVkIGFzIGl0IGFjdHMgYXMgYSBcIkhvbWUgUGFnZVwiLlxuICBhcHAuaGFuZGxlQWRkUHJvamVjdCgnRGVmYXVsdCcpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWRlbGV0ZScpLnJlbW92ZSgpXG5cbiAgLy8gQWRkIGEgdHV0b3JpYWwgYW5kIGEgZmV3IHNhbXBsZXNcbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLmhhbmRsZUVkaXRUb2RvTGlzdCgnMScsICdUdXRvcmlhbCcpXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5tb2RlbC50b2RvTGlzdHNbMF0uaGFuZGxlQWRkVG9kbyhuZXcgVG9kbyhcbiAgICAnV2VsY29tZScsXG4gIGBUcnkgYWRkaW5nIGEgbmV3IHRhc2sgYnkgY2xpY2tpbmcgb24gXCJBZGQgVGFza1wiIVxuICBZb3UgY2FuIGFsc28gYWRkIGFzIG1hbnkgc2VjdGlvbnMgdG8geW91ciBwcm9qZWN0IGFzIHlvdSdkIGxpa2UgYnkgY2xpY2tpbmcgb24gXCJBZGQgU2VjdGlvblwiLCBhbmQgY3JlYXRlIGFzIG1hbnkgcHJvamVjdHMgYXMgeW91IHdpc2guYCkpXG5cbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLmhhbmRsZUFkZFRvZG9MaXN0KG5ldyBUb2RvTGlzdENvbnRyb2xsZXIobmV3IFRvZG9MaXN0TW9kZWwoJ1NhbXBsZXMnLCBhcHAubW9kZWwucHJvamVjdHNbMF0ubW9kZWwuaWQpLCBuZXcgVG9kb0xpc3RWaWV3KCkpKVxuICBhcHAubW9kZWwucHJvamVjdHNbMF0ubW9kZWwudG9kb0xpc3RzWzFdLmhhbmRsZUFkZFRvZG8obmV3IFRvZG8oXG4gICAgJ0pvaG5cXCdzIEJpcnRoZGF5JyxcbiAgICAnTWVldCBhdCBKb2huXFwncyBob3VzZSBhdCAxOS4gRG9uXFwndCBmb3JnZXQgdG8gYnJpbmcgaGlzIGdpZnQuJyxcbiAgYCR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS0ke25ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDF9LSR7bmV3IERhdGUoKS5nZXREYXRlKCl9YCxcbiAgJ2hpZ2gnXG4gICkpXG5cbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLnRvZG9MaXN0c1sxXS5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKFxuICAgICdEaW5uZXIgd2l0aCBDaGxvZScsXG4gICAgJ1Jlc2VydmF0aW9uIGF0IFJob2RlcyBSZXN0YXVyYW50LCBhdCAyMC4nLFxuICBgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7bmV3IERhdGUoKS5nZXRNb250aCgpICsgMX0tJHtuZXcgRGF0ZSgpLmdldERhdGUoKSArIDJ9YCxcbiAgJ21lZCdcbiAgKSlcblxuICBhcHAubW9kZWwucHJvamVjdHNbMF0ubW9kZWwudG9kb0xpc3RzWzFdLmhhbmRsZUFkZFRvZG8obmV3IFRvZG8oXG4gICAgJ0RlbnRpc3QnLFxuICAgICdJdCB3b25cXCd0IGJlIHRoYXQgYmFkLiBQcm9iYWJseS4nLFxuICBgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7bmV3IERhdGUoKS5nZXRNb250aCgpICsgMn0tJHtuZXcgRGF0ZSgpLmdldERhdGUoKSArIDV9YCxcbiAgJ2xvdydcbiAgKSlcblxuICBhcHAubW9kZWwucHJvamVjdHNbMF0ubW9kZWwudG9kb0xpc3RzWzFdLmhhbmRsZUFkZFRvZG8obmV3IFRvZG8oXG4gICAgJ1N0YXJ0IHdvcmtpbmcgb3V0JyxcbiAgICAnSVxcJ2xsIHN0YXJ0Li4uIFRvbW9ycm93LiBPciBuZXh0IHllYXIuJ1xuICApKVxuXG4vKiBPbiBhbGwgdGhlIG90aGVyIHVzZXM6XG4gICAgLSBMb2FkIHRoZSBsb2NhbFN0b3JhZ2VcbiAgICAtIENyZWF0ZSBuYXYgYnV0dG9ucyBmb3IgZWFjaCBwcm9qZWN0XG4gICAgLSBSZW5kZXIgdGhlIGRlZmF1bHQgcHJvamVjdFxuKi9cbn0gZWxzZSB7XG4gIGxldCB0ZW1wU3RvcmFnZSA9IFsuLi5hcHAubW9kZWwucHJvamVjdHNdXG5cbiAgbG9jYWxTdG9yYWdlLmNsZWFyKClcblxuICBhcHAubW9kZWwucHJvamVjdHMgPSBbXVxuXG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiB0ZW1wU3RvcmFnZSkge1xuICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gbmV3IFByb2plY3RDb250cm9sbGVyKG5ldyBQcm9qZWN0TW9kZWwocHJvamVjdC5tb2RlbC5uYW1lKSwgbmV3IFByb2plY3RWaWV3KFByb2plY3RNb2RlbC5jb3VudGVyKSlcbiAgICBhcHAubW9kZWwuYWRkUHJvamVjdCh0b2RvUHJvamVjdClcbiAgICBhcHAuZGlzcGxheVByb2plY3QodG9kb1Byb2plY3QpXG4gICAgYXBwLnZpZXcucmVuZGVyQnRuKHRvZG9Qcm9qZWN0Lm1vZGVsLm5hbWUsIHRvZG9Qcm9qZWN0Lm1vZGVsLmlkKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByb2plY3Q9XCJwcm9qZWN0LSR7dG9kb1Byb2plY3QubW9kZWwuaWR9XCJdYCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhcHAuaGFuZGxlTmF2Q2xpY2sodG9kb1Byb2plY3QpKVxuXG4gICAgZm9yIChjb25zdCB0b2RvTGlzdCBvZiBwcm9qZWN0Lm1vZGVsLnRvZG9MaXN0cykge1xuICAgICAgY29uc3QgcHJvamVjdFRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCh0b2RvTGlzdC5tb2RlbC5uYW1lLCB0b2RvTGlzdC5tb2RlbC5wcm9qZWN0SWQpLCBuZXcgVG9kb0xpc3RWaWV3KCkpXG4gICAgICB0b2RvUHJvamVjdC5oYW5kbGVBZGRUb2RvTGlzdChwcm9qZWN0VG9kb0xpc3QpXG5cbiAgICAgIGZvciAoY29uc3QgdG9kbyBvZiB0b2RvTGlzdC5tb2RlbC50b2Rvcykge1xuICAgICAgICBwcm9qZWN0VG9kb0xpc3QuaGFuZGxlQWRkVG9kbyhuZXcgVG9kbyh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmRhdGUsIHRvZG8ucHJpb3JpdHkpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB0ZW1wU3RvcmFnZSA9IHt9XG4gIGFwcC5oYW5kbGVIb21lKClcbn1cbiIsImV4cG9ydCBjb25zdCBsb2NhbFN0b3JhZ2VNb2R1bGUgPSAoKCkgPT4ge1xuICBjb25zdCB1cGRhdGVQcm9qZWN0TGlzdCA9IChwcm9qZWN0cykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRvZG9MaXN0cyA9IChpZCwgdG9kb0xpc3RzQXJyKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAncHJvamVjdHMnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXG4gICAgICAgICAgLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgIHByb2plY3QubW9kZWwudG9kb0xpc3RzID0gdG9kb0xpc3RzQXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdFxuICAgICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVG9kb3MgPSAoaWQsIHByb2plY3RJZCwgdG9kb3NBcnIpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICdwcm9qZWN0cycsXG4gICAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSlcbiAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gcHJvamVjdElkKSB7XG4gICAgICAgICAgICAgIHByb2plY3QubW9kZWwudG9kb0xpc3RzLm1hcCgodG9kb0xpc3QpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodG9kb0xpc3QubW9kZWwuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICB0b2RvTGlzdC5tb2RlbC50b2RvcyA9IHRvZG9zQXJyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0b2RvTGlzdFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlUHJvamVjdExpc3QsXG4gICAgdXBkYXRlVG9kb0xpc3RzLFxuICAgIHVwZGF0ZVRvZG9zXG4gIH1cbn0pKClcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9