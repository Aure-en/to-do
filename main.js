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
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  min-height: calc(100vh - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\n.no-display {\n  display: none !important;\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\n[contenteditable] {\n  cursor: pointer;\n}\n[contenteditable]:hover {\n  background-color: rgba(42, 43, 104, 0.05);\n}\n[contenteditable]:focus {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  outline: none;\n}\n\nh1 {\n  font-size: 1.35rem;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n  display: inline-block;\n  padding: 0 1rem;\n  align-self: center;\n}\n\nh2 {\n  font-weight: 700;\n  color: rgba(42, 43, 104, 0.85);\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  margin-top: 1.25rem;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel, .btn--add {\n  color: rgba(42, 43, 104, 0.45);\n}\n.btn--cancel:hover, .btn--cancel:hover:before, .btn--add:hover, .btn--add:hover:before {\n  color: rgba(42, 43, 104, 0.75);\n}\n.btn--section {\n  color: rgba(42, 43, 104, 0.35);\n  font-weight: 700;\n}\n.btn--section:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.35);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n}\n.btn--section:before, .btn--section:after {\n  content: \"\";\n  background-color: rgba(42, 43, 104, 0.25);\n  height: 2px;\n  flex-grow: 1;\n}\n.btn--section:hover:before, .btn--section:hover:after {\n  background-color: rgba(42, 43, 104, 0.5);\n}\n.btn--section:before {\n  margin-right: 1rem;\n}\n.btn--section:after {\n  margin-left: 1rem;\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn--delete {\n  display: none;\n  color: rgba(42, 43, 104, 0.5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  top: 10px;\n  color: rgba(42, 43, 104, 0.5);\n  display: none;\n}\n.btn--edit:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"🞄\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-med {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1.5rem;\n  align-items: start;\n  word-break: break-word;\n  position: relative;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n@media all and (max-width: 576px) {\n  .to-do {\n    grid-template: repeat(3, auto)/auto 1fr 2rem;\n    grid-gap: 0.5rem;\n  }\n  .to-do__check {\n    grid-row: 1/-1;\n  }\n  .to-do__priority {\n    grid-row: 1;\n  }\n}\n.to-do:last-of-type {\n  border-bottom: none;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n.to-do:hover .btn--edit {\n  display: initial;\n}\n\n.dropdown {\n  transition: all 0.35s linear;\n}\n\n.add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo,\n.edit__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project,\n.edit__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n}\n.add__priority input[type=radio],\n.edit__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n@media all and (max-width: 1140px) {\n  .add-priority {\n    right: -10px;\n    left: initial;\n  }\n  .add-priority:before {\n    right: 15px;\n    left: initial;\n  }\n  .add-priority:after {\n    right: 14px;\n    left: initial;\n  }\n}\n\n.add__finish,\n.edit__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n  transition: all 0.2s ease-in;\n  overflow-y: scroll;\n}\n.nav--hidden {\n  transform: translateX(-100%);\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li:hover .btn--delete {\n  display: initial;\n}\n.nav__category li > .btn {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n@media all and (max-width: 768px) {\n  .nav {\n    position: fixed;\n    z-index: 1;\n    height: 100%;\n  }\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all 0.2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 1rem;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n}\n@media all and (max-width: 768px) {\n  .main--hidden {\n    transform: translateX(0);\n  }\n}\n\n.section__name__container {\n  display: flex;\n  justify-content: space-between;\n}\n.section__name__container:hover .btn--delete {\n  display: initial;\n}", "",{"version":3,"sources":["webpack://src/sass/main.scss","webpack://src/sass/base/_base.scss","webpack://src/sass/base/_typography.scss","webpack://src/sass/utils/_variables.scss","webpack://src/sass/components/_buttons.scss","webpack://src/sass/utils/_mixins.scss","webpack://src/sass/components/_icons.scss","webpack://src/sass/components/_todo.scss","webpack://src/sass/components/_dropdown.scss","webpack://src/sass/layout/_form.scss","webpack://src/sass/layout/_header.scss","webpack://src/sass/layout/_nav.scss","webpack://src/sass/layout/_main.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  min-height: calc(100vh - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\n.no-display {\n  display: none !important;\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\n[contenteditable] {\n  cursor: pointer;\n}\n[contenteditable]:hover {\n  background-color: rgba(42, 43, 104, 0.05);\n}\n[contenteditable]:focus {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  outline: none;\n}\n\nh1 {\n  font-size: 1.35rem;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n  display: inline-block;\n  padding: 0 1rem;\n  align-self: center;\n}\n\nh2 {\n  font-weight: 700;\n  color: rgba(42, 43, 104, 0.85);\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  margin-top: 1.25rem;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel, .btn--add {\n  color: rgba(42, 43, 104, 0.45);\n}\n.btn--cancel:hover, .btn--cancel:hover:before, .btn--add:hover, .btn--add:hover:before {\n  color: rgba(42, 43, 104, 0.75);\n}\n.btn--section {\n  color: rgba(42, 43, 104, 0.35);\n  font-weight: 700;\n}\n.btn--section:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.35);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n}\n.btn--section:before, .btn--section:after {\n  content: \"\";\n  background-color: rgba(42, 43, 104, 0.25);\n  height: 2px;\n  flex-grow: 1;\n}\n.btn--section:hover:before, .btn--section:hover:after {\n  background-color: rgba(42, 43, 104, 0.5);\n}\n.btn--section:before {\n  margin-right: 1rem;\n}\n.btn--section:after {\n  margin-left: 1rem;\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn--delete {\n  display: none;\n  color: rgba(42, 43, 104, 0.5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  top: 10px;\n  color: rgba(42, 43, 104, 0.5);\n  display: none;\n}\n.btn--edit:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"🞄\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-med {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1.5rem;\n  align-items: start;\n  word-break: break-word;\n  position: relative;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n@media all and (max-width: 576px) {\n  .to-do {\n    grid-template: repeat(3, auto)/auto 1fr 2rem;\n    grid-gap: 0.5rem;\n  }\n  .to-do__check {\n    grid-row: 1/-1;\n  }\n  .to-do__priority {\n    grid-row: 1;\n  }\n}\n.to-do:last-of-type {\n  border-bottom: none;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n.to-do:hover .btn--edit {\n  display: initial;\n}\n\n.dropdown {\n  transition: all 0.35s linear;\n}\n\n.add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo,\n.edit__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project,\n.edit__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n}\n.add__priority input[type=radio],\n.edit__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n@media all and (max-width: 1140px) {\n  .add-priority {\n    right: -10px;\n    left: initial;\n  }\n  .add-priority:before {\n    right: 15px;\n    left: initial;\n  }\n  .add-priority:after {\n    right: 14px;\n    left: initial;\n  }\n}\n\n.add__finish,\n.edit__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n  transition: all 0.2s ease-in;\n  overflow-y: scroll;\n}\n.nav--hidden {\n  transform: translateX(-100%);\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li:hover .btn--delete {\n  display: initial;\n}\n.nav__category li > .btn {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n@media all and (max-width: 768px) {\n  .nav {\n    position: fixed;\n    z-index: 1;\n    height: 100%;\n  }\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all 0.2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 1rem;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n}\n@media all and (max-width: 768px) {\n  .main--hidden {\n    transform: translateX(0);\n  }\n}\n\n.section__name__container {\n  display: flex;\n  justify-content: space-between;\n}\n.section__name__container:hover .btn--delete {\n  display: initial;\n}","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput,\ntextarea {\n\tborder: none;\n\n\t&:focus {\n\t\toutline: none;\n\t}\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\twidth: 100vw;\n\tmin-height: 100vh;\n\tmax-width: 100%;\n\tmax-height: 100%;\n}\n\n.wrapper {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.content__wrapper {\n\tposition: relative;\n\ttop: 50px;\n\tdisplay: flex;\n\tmin-height: calc(100vh - 50px);\n}\n\n.hidden {\n\topacity: 0;\n\tmax-height: 0 !important;\n\toverflow: hidden;\n  transform: translateY(-.25em);\n}\n\n.no-display {\n\tdisplay: none !important;\n}","body,\nbutton {\n  font-family: $font-primary;\n  font-size: .875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\n[contenteditable] {\n  cursor: pointer;\n\n  &:hover {\n    background-color: rgba($color-primary, .05);\n  }\n\n  &:focus {\n    border: 1px solid rgba($color-primary, .5);\n    outline: none;\n  }\n}\n\nh1 {\n  font-size: 1.35rem;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  color: $color-primary;\n  letter-spacing: .5px;\n  text-align: center;\n  display: inline-block;\n  padding: 0 1rem;\n  align-self: center;\n}\n\nh2 {\n  font-weight: 700;\n  color: rgba($color-primary, .85);\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 0.25rem .5rem;\n  margin-top: 1.25rem;\n}\n\n.btn {\n  &--page--header {\n    color: $color-header;\n  }\n\n  &--icon {\n    font-size: 1.25rem;\n  }\n\n  &--submit,\n  &--cancel {\n    text-transform: uppercase;\n    font-size: .85em;\n    letter-spacing: -.5px;\n  }\n\n  &--submit {\n    color: #fff;\n  }\n\n  &--cancel,\n  &--add {\n    color: rgba($color-primary, .45);\n\n    &:hover,\n    &:hover:before {\n      color: rgba($color-primary, .75);\n    }\n  }\n\n  &--section {\n    color: rgba($color-primary, .35);\n    font-weight: 700;\n\n    &:hover {\n      color: rgba($color-primary, .75);\n    }\n  }\n}\n\n// Nav\n\n.nav {\n  &--heading {\n    text-transform: uppercase;\n    color: $color-primary;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 2.5;\n  }\n}\n\n[data-toggle=\"add-project\"] {\n  color: rgba(#000, .75);\n\n  &:hover {\n    color: #000;\n  }\n\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\n// Form\n\ninput,\ntextarea {\n  font-family: $font-primary;\n}\n\n[name=\"title\"] {\n  font-weight: 700;\n}\n\n[name=\"date\"] {\n  color: $color-form;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}","// Fonts\n$font-primary: 'Nanum Gothic', Arial;\n\n\n// Colors\n$color-primary: rgb(42, 43, 104);\n$color-secondary: rgb(238, 240, 241);\n\n$color-header: #fff;\n$color-projects: rgba($color-primary, .5);\n$color-form: rgb(142, 142, 142);\n\n$color-priority: (\n  high: rgb(161, 66, 66),\n  med: rgb(231, 154, 103),\n  low: rgb(93, 151, 91),\n  none: rgb(199, 199, 199)\n);\n\n$color-date: (\n  all: lighten($color-primary, 15%),\n  today: rgb(235, 153, 99),\n  upcoming: rgb(141, 90, 137),\n  anytime: rgb(122, 122, 122),\n  late: rgb(148, 32, 32)\n);\n\n$color-sort: (\n  title: rgb(48, 92, 48),\n  description: rgb(235, 185, 79),\n  date: rgb(102, 151, 145),\n  priority: map-get($color-priority, high)\n);\n\n// Icons\n\n$icon-priority: \"\\f02e\";\n\n$icons-date: (\n  all: \"\\f073\",\n  today: \"\\f272\",\n  upcoming: \"\\f274\",\n  anytime: \"\\f133\",\n);\n\n$icons-caret: (\n  up: \"\\f0d8\",\n  down: \"\\f0d7\",\n  right: \"\\f0da\"\n);\n\n$icons-sort: (\n  title: \"\\f328\",\n  description: \"\\f249\",\n  date: \"\\f073\",\n  priority: $icon-priority,\n);\n\n$icon-add: \"\\f067\";\n$icon-edit: \"\\f044\";\n\n// Others\n$margin-indent: 0 .25rem 0 1.25rem;","button {\n\tborder: none;\n  background: none;\n  cursor: pointer;\n  \n  &:focus {\n    outline: none;\n  }\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: .15rem .5rem;\n}\n  \n.btn--submit {\n  background: rgba($color-primary, .5);\n  border-radius: 5px;\n  margin-right: .25rem;\n\n  &:hover {\n    background: rgba($color-primary, .7);\n  }\n}\n\n.btn--cancel {\n  border: 1px solid rgba($color-primary, .5);\n  border-radius: 5px;\n  background: rgba(#fff, .5);\n}\n\n.btn--add:before {\n  content: $icon-add;\n  color: rgba($color-primary, .35);\n  @include font-awesome-700();\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n\n  &:before,\n  &:after {\n    content: '';\n    background-color: rgba($color-primary, .25);\n    height: 2px;\n    flex-grow: 1;\n  }\n\n  &:hover:before,\n  &:hover:after {\n    background-color: rgba($color-primary, .5);\n  }\n\n  &:before {\n    margin-right: 1rem;\n  }\n\n  &:after {\n    margin-left: 1rem;\n  }\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between\n}\n\n.btn--delete {\n  display: none;\n  color: rgba($color-primary, .5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  top: 10px;\n  color: rgba($color-primary, .5);\n  display: none;\n\n  &:hover {\n    color: rgba($color-primary, .75);\n  }\n\n}","@mixin font-awesome-400() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n@mixin font-awesome-700() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n@mixin icon-content($target, $map) {\n  @each $key, $icon in $map {\n    .#{$target}-#{$key}::before {\n      content: $icon;\n    }\n  }\n}\n\n@mixin icon-color($target, $map) {\n  @each $key, $color in $map {\n    .#{$target}-#{$key}::before {\n      color: $color;\n    }\n  }\n}","// NAV-ICONS\n\n.nav {\n  &__to-do li:before,\n  &__projects li:before,\n  &__filters li:before,\n  &__sorts li:before {\n    margin: $margin-indent;\n  }\n\n  &__to-do li:before,\n  &__sorts li:before {\n    @include font-awesome-400();\n  }\n\n  &__projects li:before {\n    content: \"🞄\";\n    color: $color-projects;\n  }\n\n  .project_list__add:before {\n    content: $icon-add;\n    @include font-awesome-700();\n  }\n\n  &__filters li:before {\n    content: \"\\f02e\";\n    @include font-awesome-400();\n  }\n}\n\n// Color Priority Icons\n@each $level, $color in $color-priority {\n  .priority-#{$level} {\n    color: $color;\n  }\n}\n\n// Date Icons\n@include icon-content('date', $icons-date);\n@include icon-color('date', $color-date);\n\n// Category Icons\n.nav--heading:before {\n  content: map-get($icons-caret, down);\n  color: $color-primary;\n  @include font-awesome-700();\n  margin-right: .75rem;\n}\n\n// Sort Icons\n@include icon-content('sort', $icons-sort);\n@include icon-color('sort', $color-sort);\n\n// MAIN ICONS\n\n.main__header li:before {\n  content: map-get($icons-caret, down);\n  @include font-awesome-700();\n}",".to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1.5rem;\n  align-items: start;\n  word-break: break-word;\n  position: relative;\n  padding: .75rem 0;\n  border-bottom: 1px solid rgba($color-primary, .1);\n\n  @media all and (max-width: 576px) {\n    grid-template: repeat(3, auto) / auto 1fr 2rem;\n    grid-gap: .5rem;\n\n    &__check {\n      grid-row: 1 / -1;\n    }\n\n    &__priority {\n      grid-row: 1;\n    }\n  }\n\n  &:last-of-type {\n    border-bottom: none;\n  }\n  \n  &__check {\n    margin-top: 7px;\n  }\n\n  &:hover .btn--edit {\n    display: initial;\n  }\n\n}",".dropdown {\n  transition: all .35s linear;\n}",".add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba($color-primary, .35);\n\n  &--todo {\n    border-radius: 10px;\n    padding: .25rem 1rem;\n  }\n\n  &--project {\n    border-radius: 5px;\n    margin: 0 1rem;\n    padding: .15rem;\n  }\n}\n\ninput[type=\"text\"],\ntextarea {\n  width: 100%;\n  padding: .25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=\"title\"] {\n  border-bottom: 1px solid rgba($color-primary, .1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n\n  input[type=\"radio\"] {\n    position: fixed;\n    opacity: 0;\n    pointer-events: none;\n  }\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba($color-primary, .35);\n  padding: .25rem .5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n\n  &:before {\n    content: '';\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #fff;\n    position: absolute;\n    top: -5px;\n    left: 15px;\n    z-index: 1;\n  }\n\n  &:after {\n    content: '';\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid rgba($color-primary, .35);\n    position: absolute;\n    top: -6px;\n    left: 14px;\n  }\n\n  label {\n    text-align: center;\n    margin: 0 .5rem;\n  }\n\n  @media all and (max-width: 1140px) {\n    right: -10px;\n    left: initial;\n\n    &:before {\n      right: 15px;\n      left: initial;\n    }\n  \n    &:after {\n      right: 14px;\n      left: initial;\n    }\n  }\n}\n\n.add__finish,\n.edit__finish {\n  margin: .5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(#fff, .5);\n}\n\nlabel {\n  cursor: pointer;\n}\n",".page__header {\n  position: fixed;\n  background: $color-primary;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n  \n\n  ul {\n    display: flex;\n    flex: 1;\n\n    & li:last-child {\n      margin-left: auto;\n    }\n  }\n}",".nav {\n  \n  background: $color-secondary;\n  width: 250px;\n  border-right: 1px solid rgba($color-primary, .25);\n  padding: 2rem .25rem 0 2rem;\n  transition: all .2s ease-in;\n  overflow-y: scroll;\n\n  &--hidden {\n    transform: translateX(-100%);\n  }\n\n  &__category {\n    margin-bottom: .75rem;\n    padding-bottom: .75rem;\n    border-bottom: 1px solid rgba($color-primary, .1);\n\n    &:last-of-type {\n      border-bottom: none;\n    }\n\n    li {\n      display: flex;\n      \n      &:hover {\n        background: rgba($color-primary, .04);\n      }\n\n      &:hover .btn--delete {\n        display: initial;\n      }\n\n      > .btn {\n        // Makes the whole line clickable instead of just the text.\n        flex: 1;\n        text-align: start;\n      }\n    }\n  }\n\n  &--heading {\n    width: 100%;\n    text-align: start;\n    \n    &:hover {\n      background: rgba($color-primary, .07);\n    }\n  }\n\n  @media all and (max-width: 768px) {\n    position: fixed;\n    z-index: 1;\n    height: 100%;\n  }\n}","main {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all .2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 1rem;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n\n  @media all and (max-width: 768px) {\n    transform: translateX(0)\n  }\n}\n\n.section__name__container {\n  display: flex;\n  justify-content: space-between;\n\n  &:hover .btn--delete {\n    display: initial;\n  }\n}"],"sourceRoot":""}]);
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
    this.view.bindHome(this.handleHome.bind(this));
    this.view.bindNavToggle(this.handleNavToggle.bind(this));
    this.view.bindToggle(this.handleToggle.bind(this));
    this.view.bindDisplayAll(this.handleDisplayAll.bind(this));
    this.view.bindPriority(this.handlePriority.bind(this));
    this.view.bindDateToday(this.handleToday.bind(this));
    this.view.bindDateUpcoming(this.handleUpcoming.bind(this));
    this.view.bindDateAnytime(this.handleAnytime.bind(this));
    this.view.bindSortTitle(this.handleSortTitle.bind(this));
    this.view.bindSortDescription(this.handleSortDescription.bind(this));
    this.view.bindSortDate(this.handleSortDate.bind(this));
    this.view.bindSortPriority(this.handleSortPriority.bind(this));
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
  } // Sort


  handleSortTitle(projectId) {
    this.model.projects.filter(project => project.id === +projectId)[0].model.todoLists.forEach(todoList => todoList.model.sortTitle());
  }

  handleSortDescription(projectId) {
    this.model.projects.filter(project => project.id === +projectId)[0].model.todoLists.forEach(todoList => todoList.model.sortDescription());
  }

  handleSortDate(projectId) {
    this.model.projects.filter(project => project.id === +projectId)[0].model.todoLists.forEach(todoList => todoList.model.sortDate());
  }

  handleSortPriority(projectId) {
    this.model.projects.filter(project => project.id === +projectId)[0].model.todoLists.forEach(todoList => todoList.model.sortPriority());
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
    this.main = document.querySelector('main');
    this.project = document.querySelector('.project__name'); // Form to create new projects

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
  } // Sort


  bindSortTitle(handler) {
    this.sortTitle.addEventListener('click', () => {
      const projectId = this.project.id;
      handler(projectId);
    });
  }

  bindSortDescription(handler) {
    this.sortDescription.addEventListener('click', () => {
      const projectId = this.project.id;
      handler(projectId);
    });
  }

  bindSortPriority(handler) {
    this.sortPriority.addEventListener('click', () => {
      const projectId = this.project.id;
      handler(projectId);
    });
  }

  bindSortDate(handler) {
    this.sortDate.addEventListener('click', () => {
      const projectId = this.project.id;
      handler(projectId);
    });
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
    this.priorityBtn.setAttribute('data-toggle', `${this.goal}-add-priority-${this.id}`);
    this.priorityBtn.classList.add('btn', 'btn--toggle');
    this.priorityBtn.innerHTML = '<i class="far fa-bookmark"></i>';
    const priorities = document.createElement('div');
    priorities.classList.add('add-priority', 'dropdown', 'hidden');
    priorities.setAttribute('id', `${this.goal}-add-priority-${this.id}`);
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
      document.querySelector(`#${label.getAttribute('for')}`).checked = true;
      document.querySelector(`[data-toggle="${this.goal}-add-priority-${this.id}"]`).style.color = getComputedStyle(event.target.closest('label')).color;
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
    if (document.querySelector('.edit__todo')) {
      document.querySelector('.edit__todo').remove();
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
    this.sortStatus = '';
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

  sortTitle() {
    if (this.sortStatus === 'descending') {
      this.todos = this.todos.sort((a, b) => b.title.localeCompare(a.title));
    } else {
      this.todos = this.todos.sort((a, b) => a.title.localeCompare(b.title));
    }

    this._sortChange(this.todos);
  }

  sortDescription() {
    if (this.sortStatus === 'descending') {
      this.todos = this.todos.sort((a, b) => b.description.localeCompare(a.description));
    } else {
      this.todos = this.todos.sort((a, b) => a.description.localeCompare(b.description));
    }

    this._sortChange(this.todos);
  }

  sortDate() {
    this.todos = this.todos.sort((a, b) => {
      if (!a.date) {
        return 1;
      } else if (!b.date) {
        return -1;
      } else {
        if (this.sortStatus === 'descending') {
          return new Date(b.date) - new Date(a.date);
        } else {
          return new Date(a.date) - new Date(b.date);
        }
      }
    });

    this._sortChange(this.todos);
  }

  sortPriority() {
    this._getPriorityValue();

    if (this.sortStatus === 'descending') {
      this.todos = this.todos.sort((a, b) => b.priorityValue - a.priorityValue);
    } else {
      this.todos = this.todos.sort((a, b) => a.priorityValue - b.priorityValue);
    }

    this._sortChange(this.todos);
  }

  _getPriorityValue() {
    for (const todo of this.todos) {
      switch (todo.priority) {
        case 'low':
          todo.priorityValue = 1;
          break;

        case 'med':
          todo.priorityValue = 2;
          break;

        case 'high':
          todo.priorityValue = 3;
          break;

        default:
          todo.priorityValue = 0;
      }
    }
  }

  _sortChange(todos) {
    this.sortStatus = this.sortStatus === 'descending' ? 'ascending' : 'descending';
    this.onTodoListChange(todos);
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
    if (document.querySelector(`#add-todo-${this.id} [name="priority"]:checked`)) {
      return document.querySelector(`#add-todo-${this.id} [name="priority"]:checked`).value;
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
  document.querySelector('.btn--delete').remove(); // Add a tutorial and a few samples.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9kb0xpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sb2NhbFN0b3JhZ2VNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiQXBwQ29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwibW9kZWwiLCJ2aWV3IiwiYmluZEFkZFByb2plY3QiLCJoYW5kbGVBZGRQcm9qZWN0IiwiYmluZCIsImJpbmREZWxldGVQcm9qZWN0IiwiaGFuZGxlRGVsZXRlUHJvamVjdCIsImJpbmRDaGFuZ2VOYW1lIiwiaGFuZGxlQ2hhbmdlTmFtZSIsImJpbmRIb21lIiwiaGFuZGxlSG9tZSIsImJpbmROYXZUb2dnbGUiLCJoYW5kbGVOYXZUb2dnbGUiLCJiaW5kVG9nZ2xlIiwiaGFuZGxlVG9nZ2xlIiwiYmluZERpc3BsYXlBbGwiLCJoYW5kbGVEaXNwbGF5QWxsIiwiYmluZFByaW9yaXR5IiwiaGFuZGxlUHJpb3JpdHkiLCJiaW5kRGF0ZVRvZGF5IiwiaGFuZGxlVG9kYXkiLCJiaW5kRGF0ZVVwY29taW5nIiwiaGFuZGxlVXBjb21pbmciLCJiaW5kRGF0ZUFueXRpbWUiLCJoYW5kbGVBbnl0aW1lIiwiYmluZFNvcnRUaXRsZSIsImhhbmRsZVNvcnRUaXRsZSIsImJpbmRTb3J0RGVzY3JpcHRpb24iLCJoYW5kbGVTb3J0RGVzY3JpcHRpb24iLCJiaW5kU29ydERhdGUiLCJoYW5kbGVTb3J0RGF0ZSIsImJpbmRTb3J0UHJpb3JpdHkiLCJoYW5kbGVTb3J0UHJpb3JpdHkiLCJuYW1lIiwicHJvamVjdCIsIlByb2plY3RDb250cm9sbGVyIiwiUHJvamVjdE1vZGVsIiwiUHJvamVjdFZpZXciLCJjb3VudGVyIiwiYWRkUHJvamVjdCIsImFkZFRvZG9MaXN0IiwiVG9kb0xpc3RDb250cm9sbGVyIiwiVG9kb0xpc3RNb2RlbCIsIlRvZG9MaXN0VmlldyIsImRpc3BsYXlQcm9qZWN0IiwicmVuZGVyQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU5hdkNsaWNrIiwicmVuZGVyTmFtZSIsInJlbmRlciIsInRvZG9MaXN0cyIsInJlbmRlckZvcm0iLCJmb3JtIiwiZ2V0Rm9ybSIsImJpbmRBZGQiLCJkZWxldGVQcm9qZWN0IiwicmVtb3ZlIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZWRpdFByb2plY3QiLCJ0ZXh0Q29udGVudCIsImV2ZW50IiwidGFyZ2V0IiwiZGF0YXNldCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsIm5hdiIsIm1haW4iLCJwcmlvcml0eSIsInRvZG9zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0b2RvIiwiYWRkIiwiX3NhbWVEYXkiLCJkYXRlMSIsImRhdGUyIiwidG9kb0RhdGUiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0b2RheSIsImRhdGUiLCJwcm9qZWN0SWQiLCJwcm9qZWN0cyIsImZpbHRlciIsInRvZG9MaXN0Iiwic29ydFRpdGxlIiwic29ydERlc2NyaXB0aW9uIiwic29ydERhdGUiLCJzb3J0UHJpb3JpdHkiLCJBcHBNb2RlbCIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsU3RvcmFnZU1vZHVsZSIsInVwZGF0ZVByb2plY3RMaXN0Iiwic2V0SXRlbSIsIkFwcFZpZXciLCJjb250YWluZXIiLCJob21lQnRuIiwicHJvamVjdElucHV0IiwicHJvamVjdFN1Ym1pdCIsImRpc3BsYXlBbGxCdG4iLCJwcmlvcml0eUJ0biIsImRhdGVUb2RheUJ0biIsImRhdGVVcGNvbWluZ0J0biIsImRhdGVBbnl0aW1lQnRuIiwibmF2QnRuIiwiX3RlbXBvcmFyeU5hbWUiLCJfY2hhbmdlTmFtZSIsIl9wcm9qZWN0TmFtZSIsInZhbHVlIiwiX3Jlc2V0SW5wdXQiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJidXR0b24iLCJpbm5lckhUTUwiLCJjbG9zZUJ0biIsImFwcGVuZCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3Nlc3QiLCJjb250YWlucyIsInNsaWNlIiwiYm9keSIsIm9uUHJvamVjdENoYW5nZSIsImJpbmRQcm9qZWN0Q2hhbmdlIiwiaGFuZGxlRWRpdFRvZG9MaXN0IiwiYmluZERlbGV0ZVNlY3Rpb24iLCJoYW5kbGVEZWxldGVUb2RvTGlzdCIsImhhbmRsZUFkZFRvZG9MaXN0IiwiZGVsZXRlVG9kb0xpc3QiLCJlZGl0VG9kb0xpc3QiLCJiaW5kQWRkU2VjdGlvbiIsIlNlY3Rpb25Gb3JtIiwiX2NvbW1pdCIsInVwZGF0ZVRvZG9MaXN0cyIsImNhbGxiYWNrIiwic2VjdGlvbnMiLCJuYW1lSW5wdXQiLCJzdWJtaXQiLCJfc2VjdGlvbk5hbWUiLCJmaXJzdENoaWxkIiwiY3JlYXRlU2VjdGlvbiIsImRlbGV0ZSIsImZvcm1Db250YWluZXIiLCJmb3JtQnRuIiwibGFiZWxOYW1lIiwiZmluaXNoIiwic3VibWl0QnRuIiwiY2FuY2VsQnRuIiwiVG9kbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlZGl0Rm9ybSIsIlRvZG9Gb3JtIiwidG9kb0VsZW0iLCJ0b2RvQ2hlY2siLCJjb21wb25lbnRzIiwiY29tcG9uZW50IiwidG9kb0NvbXBvbmVudCIsInRvZG9Qcmlvcml0eSIsInRvZG9FZGl0IiwiZ29hbCIsIl9yZW5kZXJGb3JtIiwibGFiZWxUaXRsZSIsImxhYmVsRGVzY3JpcHRpb24iLCJkZXRhaWxzIiwibGFiZWxEYXRlIiwicHJpb3JpdHlDb250YWluZXIiLCJwcmlvcml0aWVzIiwicHJpb3JpdGllc0xpc3QiLCJsYWJlbFByaW9yaXR5IiwiaW5wdXRQcmlvcml0eSIsInRvVXBwZXJDYXNlIiwicmVuZGVyQWRkIiwiX2luaXRQcmlvcml0eVRvZ2dsZSIsIl9pbml0UHJpb3JpdHlMYWJlbHMiLCJyZW5kZXJFZGl0IiwiYmVmb3JlIiwiYWZ0ZXIiLCJsYWJlbHMiLCJsYWJlbCIsImdldEF0dHJpYnV0ZSIsImNoZWNrZWQiLCJzdHlsZSIsImNvbG9yIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIl9pbml0UmVzZXRQcmlvcml0eSIsIm9uVG9kb0xpc3RDaGFuZ2UiLCJiaW5kVG9kb0xpc3RDaGFuZ2UiLCJiaW5kRGVsZXRlVG9kbyIsImhhbmRsZURlbGV0ZVRvZG8iLCJiaW5kT3BlbkVkaXQiLCJoYW5kbGVPcGVuRWRpdCIsImJpbmRFZGl0VG9kbyIsImhhbmRsZUVkaXRUb2RvIiwiaGFuZGxlQWRkVG9kbyIsImFkZFRvZG8iLCJ1cGRhdGVkVG9kbyIsImVkaXRUb2RvIiwiZGVsZXRlVG9kbyIsImdldEVkaXRGb3JtIiwic2V0RWRpdEZvcm0iLCJiaW5kQWRkVG9kbyIsInNvcnRTdGF0dXMiLCJ1cGRhdGVUb2RvcyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJfc29ydENoYW5nZSIsIl9nZXRQcmlvcml0eVZhbHVlIiwicHJpb3JpdHlWYWx1ZSIsInNlY3Rpb24iLCJwcmVwZW5kIiwibmFtZUNvbnRhaW5lciIsImRlbGV0ZUJ0biIsIl90b2RvVGl0bGUiLCJfdG9kb0Rlc2NyaXB0aW9uIiwiX3RvZG9EYXRlIiwiX3RvZG9Qcmlvcml0eSIsInRpdGxlRWRpdCIsImRlc2NyaXB0aW9uRWRpdCIsImRhdGVFZGl0IiwicHJpb3JpdHlFZGl0IiwiX2VkaXRUaXRsZSIsIl9lZGl0RGVzY3JpcHRpb24iLCJfZWRpdERhdGUiLCJfZWRpdFByaW9yaXR5IiwiX3Jlc2V0SW5wdXRzIiwicGFyc2VJbnQiLCJwYXJlbnRFbGVtZW50IiwiYXBwIiwidGVtcFN0b3JhZ2UiLCJjbGVhciIsInRvZG9Qcm9qZWN0IiwicHJvamVjdFRvZG9MaXN0IiwidG9kb0xpc3RzQXJyIiwidG9kb3NBcnIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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V0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcs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RCxhQUFPdkQsT0FBUDtBQUNELEtBWEgsQ0FERixDQUZGO0FBaUJELEdBbEJEOztBQW9CQSxTQUFPO0FBQ0xpRSxxQkFESztBQUVMMEMsbUJBRks7QUFHTHNFO0FBSEssR0FBUDtBQUtELENBN0NpQyxHQUEzQixDOzs7Ozs7Ozs7OztBQ0FQLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsNE1BQW9HOztBQUV0STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50X193cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XFxufVxcblxcbi5uby1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYm9keSxcXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiLCBBcmlhbDtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS45O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5bY29udGVudGVkaXRhYmxlXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA1KTtcXG59XFxuW2NvbnRlbnRlZGl0YWJsZV06Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuODUpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxuXFxuLmJ0bi0tcGFnZS0taGVhZGVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnRuLS1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmJ0bi0tc3VibWl0LCAuYnRuLS1jYW5jZWwge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXG59XFxuLmJ0bi0tc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnRuLS1jYW5jZWwsIC5idG4tLWFkZCB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC40NSk7XFxufVxcbi5idG4tLWNhbmNlbDpob3ZlciwgLmJ0bi0tY2FuY2VsOmhvdmVyOmJlZm9yZSwgLmJ0bi0tYWRkOmhvdmVyLCAuYnRuLS1hZGQ6aG92ZXI6YmVmb3JlIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuXFxuLm5hdi0taGVhZGluZyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG59XFxuXFxuW2RhdGEtdG9nZ2xlPWFkZC1wcm9qZWN0XSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuW2RhdGEtdG9nZ2xlPWFkZC1wcm9qZWN0XTpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi50by1kb19fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiLCBBcmlhbDtcXG59XFxuXFxuW25hbWU9dGl0bGVdIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbltuYW1lPWRhdGVdIHtcXG4gIGNvbG9yOiAjOGU4ZThlO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idG4tLXN1Ym1pdCxcXG4uYnRuLS1jYW5jZWwge1xcbiAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07XFxufVxcblxcbi5idG4tLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC43KTtcXG59XFxuXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5idG4tLWFkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcbi5idG4tLXNlY3Rpb246YmVmb3JlLCAuYnRuLS1zZWN0aW9uOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4yNSk7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuLmJ0bi0tc2VjdGlvbjpob3ZlcjpiZWZvcmUsIC5idG4tLXNlY3Rpb246aG92ZXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLmJ0bi0tc2VjdGlvbjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmFmdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4uYnRuLS1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcblxcbi5idG4tLWVkaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC01cHg7XFxuICB0b3A6IDEwcHg7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5idG4tLWVkaXQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSwgLm5hdl9fZmlsdGVycyBsaTpiZWZvcmUsIC5uYXZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICBtYXJnaW46IDAgMC4yNXJlbSAwIDEuMjVyZW07XFxufVxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIvCfnoRcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5uYXYgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2X19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZCB7XFxuICBjb2xvcjogI2U3OWE2NztcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogIzVkOTc1YjtcXG59XFxuXFxuLnByaW9yaXR5LW5vbmUge1xcbiAgY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibJcXFwiO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibRcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Es1xcXCI7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNDA0MjllO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWI5OTYzO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOGQ1YTg5O1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29sb3I6ICM3YTdhN2E7XFxufVxcblxcbi5kYXRlLWxhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzk0MjAyMDtcXG59XFxuXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvjKhcXFwiO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYlcXFwiO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29sb3I6ICMzMDVjMzA7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYmI5NGY7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzY2OTc5MTtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWdhcDogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLnRvLWRvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIGF1dG8pL2F1dG8gMWZyIDJyZW07XFxuICAgIGdyaWQtZ2FwOiAwLjVyZW07XFxuICB9XFxuICAudG8tZG9fX2NoZWNrIHtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICB9XFxuICAudG8tZG9fX3ByaW9yaXR5IHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICB9XFxufVxcbi50by1kbzpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLnRvLWRvX19jaGVjayB7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxufVxcbi50by1kbzpob3ZlciAuYnRuLS1lZGl0IHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgbGluZWFyO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LFxcbi5lZGl0X19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxufVxcbi5hZGRfX2NvbnRlbnQtLXRvZG8sXFxuLmVkaXRfX2NvbnRlbnQtLXRvZG8ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG59XFxuLmFkZF9fY29udGVudC0tcHJvamVjdCxcXG4uZWRpdF9fY29udGVudC0tcHJvamVjdCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHBhZGRpbmc6IDAuMTVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcblxcbi5hZGRfX2RldGFpbHMsXFxuLmVkaXRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5hZGRfX3ByaW9yaXR5LFxcbi5lZGl0X19wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hZGRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dLFxcbi5lZGl0X19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTZweDtcXG4gIGxlZnQ6IDE0cHg7XFxufVxcbi5hZGQtcHJpb3JpdHkgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuICAuYWRkLXByaW9yaXR5IHtcXG4gICAgcmlnaHQ6IC0xMHB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbiAgLmFkZC1wcmlvcml0eTpiZWZvcmUge1xcbiAgICByaWdodDogMTVweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG4gIC5hZGQtcHJpb3JpdHk6YWZ0ZXIge1xcbiAgICByaWdodDogMTRweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG59XFxuXFxuLmFkZF9fZmluaXNoLFxcbi5lZGl0X19maW5pc2gge1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhZ2VfX2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiAjMmEyYjY4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwgbGk6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm5hdiB7XFxuICBiYWNrZ3JvdW5kOiAjZWVmMGYxO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4yNSk7XFxuICBwYWRkaW5nOiAycmVtIDAuMjVyZW0gMCAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuLm5hdi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG4ubmF2X19jYXRlZ29yeTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNCk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSA+IC5idG4ge1xcbiAgZmxleDogMTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNyk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi5tYWluLS1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjVweCk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubWFpbi0taGlkZGVuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5cXG4uc2VjdGlvbl9fbmFtZV9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zZWN0aW9uX19uYW1lX19jb250YWluZXI6aG92ZXIgLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc2Fzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9iYXNlL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9iYXNlL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy91dGlscy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy91dGlscy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL19pY29ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9fdG9kby5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9fZHJvcGRvd24uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9fZm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9fbmF2LnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX21haW4uc2Nzc1wiXSxc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TUU7RUFDRSxrQkFBQTtBSjJNSjtBSXhNRTtFQUNFLGlCQUFBO0FKME1KOztBSXRNQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBSnlNRjs7QUl0TUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUp5TUY7O0FJdE1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBSnlNRjtBSXZNRTtFQUNFLDhCQUFBO0FKeU1KOztBTTFSRTtFQUlFLDJCSHVEWTtBSG1PaEI7QU12UkU7RURUQSxrQ0FBQTtFQUNBLGdCQUFBO0FMbVNGO0FNdFJFO0VBQ0UsYUFBQTtFQUNBLDZCSFJhO0FIZ1NqQjtBTXJSRTtFQUNFLFlIcUNPO0VFcERULGtDQUFBO0VBQ0EsZ0JBQUE7QUx1U0Y7QU1yUkU7RUFDRSxZQUFBO0VEekJGLGtDQUFBO0VBQ0EsZ0JBQUE7QUxpVEY7O0FNbFJFO0VBQ0UsY0h0QmE7QUgyU2pCOztBTXRSRTtFQUNFLGNIdEJhO0FIK1NqQjs7QU0xUkU7RUFDRSxjSHRCYTtBSG1UakI7O0FNOVJFO0VBQ0UsY0h0QmE7QUh1VGpCOztBS3ZUSTtFQUNFLFlGeUJPO0FIaVNiOztBSzNUSTtFQUNFLFlGeUJPO0FIcVNiOztBSy9USTtFQUNFLFlGeUJPO0FIeVNiOztBS25VSTtFQUNFLFlGeUJPO0FINlNiOztBSy9USTtFQUNFLGNGRk87QUhvVWI7O0FLblVJO0VBQ0UsY0ZGTztBSHdVYjs7QUt2VUk7RUFDRSxjRkZPO0FINFViOztBSzNVSTtFQUNFLGNGRk87QUhnVmI7O0FLL1VJO0VBQ0UsY0ZGTztBSG9WYjs7QU01VEE7RUFDRSxZQUFBO0VBQ0EsY0h4Q2M7RUVDZCxrQ0FBQTtFQUNBLGdCQUFBO0VDd0NBLHFCQUFBO0FOZ1VGOztBS25XSTtFQUNFLFlGc0NPO0FIZ1ViOztBS3ZXSTtFQUNFLFlGc0NPO0FIb1ViOztBSzNXSTtFQUNFLFlGc0NPO0FId1ViOztBSy9XSTtFQUNFLFlGc0NPO0FINFViOztBSzNXSTtFQUNFLGNGTU87QUh3V2I7O0FLL1dJO0VBQ0UsY0ZNTztB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QUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QVo4bUJGOztBWTNtQkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FaOG1CRjs7QVkzbUJBO0VBQ0UsNkJBQUE7QVo4bUJGO0FZNW1CRTtFQUhGO0lBSUksd0JBQUE7RVorbUJGO0FBQ0Y7O0FZNW1CQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBWittQkY7QVk3bUJFO0VBQ0UsZ0JBQUE7QVorbUJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcXG59XFxuXFxuLm5vLWRpc3BsYXkge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5LFxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjk7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5bY29udGVudGVkaXRhYmxlXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbltjb250ZW50ZWRpdGFibGVdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDUpO1xcbn1cXG5bY29udGVudGVkaXRhYmxlXTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC44NSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG5cXG4uYnRuLS1wYWdlLS1oZWFkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWNhbmNlbCwgLmJ0bi0tYWRkIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjQ1KTtcXG59XFxuLmJ0bi0tY2FuY2VsOmhvdmVyLCAuYnRuLS1jYW5jZWw6aG92ZXI6YmVmb3JlLCAuYnRuLS1hZGQ6aG92ZXIsIC5idG4tLWFkZDpob3ZlcjpiZWZvcmUge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9ZGF0ZV0ge1xcbiAgY29sb3I6ICM4ZThlOGU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG5cXG4uYnRuLS1jYW5jZWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmJ0bi0tYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbi5idG4tLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuLmJ0bi0tc2VjdGlvbjpiZWZvcmUsIC5idG4tLXNlY3Rpb246YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIGhlaWdodDogMnB4O1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmhvdmVyOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjpob3ZlcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5idG4tLXNlY3Rpb246YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5idG4tLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuXFxuLmJ0bi0tZWRpdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTVweDtcXG4gIHRvcDogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmJ0bi0tZWRpdDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43NSk7XFxufVxcblxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlLCAubmF2X19maWx0ZXJzIGxpOmJlZm9yZSwgLm5hdl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gIG1hcmdpbjogMCAwLjI1cmVtIDAgMS4yNXJlbTtcXG59XFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi8J+ehFxcXCI7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLm5hdiAucHJvamVjdF9saXN0X19hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgadcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK5cXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGNvbG9yOiAjYTE0MjQyO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkIHtcXG4gIGNvbG9yOiAjZTc5YTY3O1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gIGNvbG9yOiAjNWQ5NzViO1xcbn1cXG5cXG4ucHJpb3JpdHktbm9uZSB7XFxuICBjb2xvcjogI2M3YzdjNztcXG59XFxuXFxuLmRhdGUtYWxsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5kYXRlLXRvZGF5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JslxcXCI7XFxufVxcblxcbi5kYXRlLXVwY29taW5nOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JtFxcXCI7XFxufVxcblxcbi5kYXRlLWFueXRpbWU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SzXFxcIjtcXG59XFxuXFxuLmRhdGUtYWxsOjpiZWZvcmUge1xcbiAgY29sb3I6ICM0MDQyOWU7XFxufVxcblxcbi5kYXRlLXRvZGF5OjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYjk5NjM7XFxufVxcblxcbi5kYXRlLXVwY29taW5nOjpiZWZvcmUge1xcbiAgY29sb3I6ICM4ZDVhODk7XFxufVxcblxcbi5kYXRlLWFueXRpbWU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzdhN2E3YTtcXG59XFxuXFxuLmRhdGUtbGF0ZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOTQyMDIwO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OXXFxcIjtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+MqFxcXCI7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JiVxcXCI7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GzXFxcIjtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG59XFxuXFxuLnNvcnQtdGl0bGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzMwNWMzMDtcXG59XFxuXFxuLnNvcnQtZGVzY3JpcHRpb246OmJlZm9yZSB7XFxuICBjb2xvcjogI2ViYjk0ZjtcXG59XFxuXFxuLnNvcnQtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNjY5NzkxO1xcbn1cXG5cXG4uc29ydC1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjYTE0MjQyO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OXXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udG8tZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA2LjVyZW0gMWZyIDYuNXJlbSAycmVtO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtZ2FwOiAxLjVyZW07XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMC43NXJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAudG8tZG8ge1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMywgYXV0bykvYXV0byAxZnIgMnJlbTtcXG4gICAgZ3JpZC1nYXA6IDAuNXJlbTtcXG4gIH1cXG4gIC50by1kb19fY2hlY2sge1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gIH1cXG4gIC50by1kb19fcHJpb3JpdHkge1xcbiAgICBncmlkLXJvdzogMTtcXG4gIH1cXG59XFxuLnRvLWRvOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4udG8tZG9fX2NoZWNrIHtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG59XFxuLnRvLWRvOmhvdmVyIC5idG4tLWVkaXQge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBsaW5lYXI7XFxufVxcblxcbi5hZGRfX2NvbnRlbnQsXFxuLmVkaXRfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG59XFxuLmFkZF9fY29udGVudC0tdG9kbyxcXG4uZWRpdF9fY29udGVudC0tdG9kbyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbn1cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0LFxcbi5lZGl0X19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgcGFkZGluZzogMC4xNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbltuYW1lPXRpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyxcXG4uZWRpdF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHksXFxuLmVkaXRfX3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFkZF9fcHJpb3JpdHkgaW5wdXRbdHlwZT1yYWRpb10sXFxuLmVkaXRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAxLjY1cmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDtcXG4gIGxlZnQ6IDE1cHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNnB4O1xcbiAgbGVmdDogMTRweDtcXG59XFxuLmFkZC1wcmlvcml0eSBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4gIC5hZGQtcHJpb3JpdHkge1xcbiAgICByaWdodDogLTEwcHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuICB9XFxuICAuYWRkLXByaW9yaXR5OmJlZm9yZSB7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbiAgLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICAgIHJpZ2h0OiAxNHB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbn1cXG5cXG4uYWRkX19maW5pc2gsXFxuLmVkaXRfX2ZpbmlzaCB7XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxubGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGFnZV9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6ICMyYTJiNjg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCBsaTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGJhY2tncm91bmQ6ICNlZWYwZjE7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIHBhZGRpbmc6IDJyZW0gMC4yNXJlbSAwIDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4ubmF2LS1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5Omxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA0KTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIgLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpID4gLmJ0biB7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA3KTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLm1haW4tLWhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNXB4KTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5tYWluLS1oaWRkZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcblxcbi5zZWN0aW9uX19uYW1lX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNlY3Rpb25fX25hbWVfX2NvbnRhaW5lcjpob3ZlciAuYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XCIsXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFxuXFx0Jjpmb2N1cyB7XFxuXFx0XFx0b3V0bGluZTogbm9uZTtcXG5cXHR9XFxufVxcblxcbioge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxuXFx0bWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRfX3dyYXBwZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDUwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0bWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS4yNWVtKTtcXG59XFxuXFxuLm5vLWRpc3BsYXkge1xcblxcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XCIsXCJib2R5LFxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjk7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5bY29udGVudGVkaXRhYmxlXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjA1KTtcXG4gIH1cXG5cXG4gICY6Zm9jdXMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC44NSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yNXJlbSAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcblxcbi5idG4ge1xcbiAgJi0tcGFnZS0taGVhZGVyIHtcXG4gICAgY29sb3I6ICRjb2xvci1oZWFkZXI7XFxuICB9XFxuXFxuICAmLS1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcblxcbiAgJi0tc3VibWl0LFxcbiAgJi0tY2FuY2VsIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAuODVlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uNXB4O1xcbiAgfVxcblxcbiAgJi0tc3VibWl0IHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuXFxuICAmLS1jYW5jZWwsXFxuICAmLS1hZGQge1xcbiAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjQ1KTtcXG5cXG4gICAgJjpob3ZlcixcXG4gICAgJjpob3ZlcjpiZWZvcmUge1xcbiAgICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNzUpO1xcbiAgICB9XFxuICB9XFxuXFxuICAmLS1zZWN0aW9uIHtcXG4gICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNzUpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vIE5hdlxcblxcbi5uYXYge1xcbiAgJi0taGVhZGluZyB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XFxuICB9XFxufVxcblxcbltkYXRhLXRvZ2dsZT1cXFwiYWRkLXByb2plY3RcXFwiXSB7XFxuICBjb2xvcjogcmdiYSgjMDAwLCAuNzUpO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgfVxcblxcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vLyBGb3JtXFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxufVxcblxcbltuYW1lPVxcXCJ0aXRsZVxcXCJdIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbltuYW1lPVxcXCJkYXRlXFxcIl0ge1xcbiAgY29sb3I6ICRjb2xvci1mb3JtO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cIixcIi8vIEZvbnRzXFxuJGZvbnQtcHJpbWFyeTogJ05hbnVtIEdvdGhpYycsIEFyaWFsO1xcblxcblxcbi8vIENvbG9yc1xcbiRjb2xvci1wcmltYXJ5OiByZ2IoNDIsIDQzLCAxMDQpO1xcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigyMzgsIDI0MCwgMjQxKTtcXG5cXG4kY29sb3ItaGVhZGVyOiAjZmZmO1xcbiRjb2xvci1wcm9qZWN0czogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiRjb2xvci1mb3JtOiByZ2IoMTQyLCAxNDIsIDE0Mik7XFxuXFxuJGNvbG9yLXByaW9yaXR5OiAoXFxuICBoaWdoOiByZ2IoMTYxLCA2NiwgNjYpLFxcbiAgbWVkOiByZ2IoMjMxLCAxNTQsIDEwMyksXFxuICBsb3c6IHJnYig5MywgMTUxLCA5MSksXFxuICBub25lOiByZ2IoMTk5LCAxOTksIDE5OSlcXG4pO1xcblxcbiRjb2xvci1kYXRlOiAoXFxuICBhbGw6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDE1JSksXFxuICB0b2RheTogcmdiKDIzNSwgMTUzLCA5OSksXFxuICB1cGNvbWluZzogcmdiKDE0MSwgOTAsIDEzNyksXFxuICBhbnl0aW1lOiByZ2IoMTIyLCAxMjIsIDEyMiksXFxuICBsYXRlOiByZ2IoMTQ4LCAzMiwgMzIpXFxuKTtcXG5cXG4kY29sb3Itc29ydDogKFxcbiAgdGl0bGU6IHJnYig0OCwgOTIsIDQ4KSxcXG4gIGRlc2NyaXB0aW9uOiByZ2IoMjM1LCAxODUsIDc5KSxcXG4gIGRhdGU6IHJnYigxMDIsIDE1MSwgMTQ1KSxcXG4gIHByaW9yaXR5OiBtYXAtZ2V0KCRjb2xvci1wcmlvcml0eSwgaGlnaClcXG4pO1xcblxcbi8vIEljb25zXFxuXFxuJGljb24tcHJpb3JpdHk6IFxcXCJcXFxcZjAyZVxcXCI7XFxuXFxuJGljb25zLWRhdGU6IChcXG4gIGFsbDogXFxcIlxcXFxmMDczXFxcIixcXG4gIHRvZGF5OiBcXFwiXFxcXGYyNzJcXFwiLFxcbiAgdXBjb21pbmc6IFxcXCJcXFxcZjI3NFxcXCIsXFxuICBhbnl0aW1lOiBcXFwiXFxcXGYxMzNcXFwiLFxcbik7XFxuXFxuJGljb25zLWNhcmV0OiAoXFxuICB1cDogXFxcIlxcXFxmMGQ4XFxcIixcXG4gIGRvd246IFxcXCJcXFxcZjBkN1xcXCIsXFxuICByaWdodDogXFxcIlxcXFxmMGRhXFxcIlxcbik7XFxuXFxuJGljb25zLXNvcnQ6IChcXG4gIHRpdGxlOiBcXFwiXFxcXGYzMjhcXFwiLFxcbiAgZGVzY3JpcHRpb246IFxcXCJcXFxcZjI0OVxcXCIsXFxuICBkYXRlOiBcXFwiXFxcXGYwNzNcXFwiLFxcbiAgcHJpb3JpdHk6ICRpY29uLXByaW9yaXR5LFxcbik7XFxuXFxuJGljb24tYWRkOiBcXFwiXFxcXGYwNjdcXFwiO1xcbiRpY29uLWVkaXQ6IFxcXCJcXFxcZjA0NFxcXCI7XFxuXFxuLy8gT3RoZXJzXFxuJG1hcmdpbi1pbmRlbnQ6IDAgLjI1cmVtIDAgMS4yNXJlbTtcIixcImJ1dHRvbiB7XFxuXFx0Ym9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIFxcbiAgJjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxufVxcblxcbi5idG4tLXN1Ym1pdCxcXG4uYnRuLS1jYW5jZWwge1xcbiAgcGFkZGluZzogLjE1cmVtIC41cmVtO1xcbn1cXG4gIFxcbi5idG4tLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNyk7XFxuICB9XFxufVxcblxcbi5idG4tLWNhbmNlbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKCNmZmYsIC41KTtcXG59XFxuXFxuLmJ0bi0tYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiAkaWNvbi1hZGQ7XFxuICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG4gIEBpbmNsdWRlIGZvbnQtYXdlc29tZS03MDAoKTtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuXFxuICAmOmJlZm9yZSxcXG4gICY6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjI1KTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIH1cXG5cXG4gICY6aG92ZXI6YmVmb3JlLFxcbiAgJjpob3ZlcjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIH1cXG5cXG4gICY6YmVmb3JlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgfVxcblxcbiAgJjphZnRlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgfVxcbn1cXG5cXG4uYnRuLS1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXG59XFxuXFxuLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbn1cXG5cXG4uYnRuLS1lZGl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43NSk7XFxuICB9XFxuXFxufVwiLFwiQG1peGluIGZvbnQtYXdlc29tZS00MDAoKSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuQG1peGluIGZvbnQtYXdlc29tZS03MDAoKSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuQG1peGluIGljb24tY29udGVudCgkdGFyZ2V0LCAkbWFwKSB7XFxuICBAZWFjaCAka2V5LCAkaWNvbiBpbiAkbWFwIHtcXG4gICAgLiN7JHRhcmdldH0tI3ska2V5fTo6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiAkaWNvbjtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWl4aW4gaWNvbi1jb2xvcigkdGFyZ2V0LCAkbWFwKSB7XFxuICBAZWFjaCAka2V5LCAkY29sb3IgaW4gJG1hcCB7XFxuICAgIC4jeyR0YXJnZXR9LSN7JGtleX06OmJlZm9yZSB7XFxuICAgICAgY29sb3I6ICRjb2xvcjtcXG4gICAgfVxcbiAgfVxcbn1cIixcIi8vIE5BVi1JQ09OU1xcblxcbi5uYXYge1xcbiAgJl9fdG8tZG8gbGk6YmVmb3JlLFxcbiAgJl9fcHJvamVjdHMgbGk6YmVmb3JlLFxcbiAgJl9fZmlsdGVycyBsaTpiZWZvcmUsXFxuICAmX19zb3J0cyBsaTpiZWZvcmUge1xcbiAgICBtYXJnaW46ICRtYXJnaW4taW5kZW50O1xcbiAgfVxcblxcbiAgJl9fdG8tZG8gbGk6YmVmb3JlLFxcbiAgJl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTQwMCgpO1xcbiAgfVxcblxcbiAgJl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIvCfnoRcXFwiO1xcbiAgICBjb2xvcjogJGNvbG9yLXByb2plY3RzO1xcbiAgfVxcblxcbiAgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICRpY29uLWFkZDtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbiAgfVxcblxcbiAgJl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMmVcXFwiO1xcbiAgICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNDAwKCk7XFxuICB9XFxufVxcblxcbi8vIENvbG9yIFByaW9yaXR5IEljb25zXFxuQGVhY2ggJGxldmVsLCAkY29sb3IgaW4gJGNvbG9yLXByaW9yaXR5IHtcXG4gIC5wcmlvcml0eS0jeyRsZXZlbH0ge1xcbiAgICBjb2xvcjogJGNvbG9yO1xcbiAgfVxcbn1cXG5cXG4vLyBEYXRlIEljb25zXFxuQGluY2x1ZGUgaWNvbi1jb250ZW50KCdkYXRlJywgJGljb25zLWRhdGUpO1xcbkBpbmNsdWRlIGljb24tY29sb3IoJ2RhdGUnLCAkY29sb3ItZGF0ZSk7XFxuXFxuLy8gQ2F0ZWdvcnkgSWNvbnNcXG4ubmF2LS1oZWFkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBtYXAtZ2V0KCRpY29ucy1jYXJldCwgZG93bik7XFxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxuICBtYXJnaW4tcmlnaHQ6IC43NXJlbTtcXG59XFxuXFxuLy8gU29ydCBJY29uc1xcbkBpbmNsdWRlIGljb24tY29udGVudCgnc29ydCcsICRpY29ucy1zb3J0KTtcXG5AaW5jbHVkZSBpY29uLWNvbG9yKCdzb3J0JywgJGNvbG9yLXNvcnQpO1xcblxcbi8vIE1BSU4gSUNPTlNcXG5cXG4ubWFpbl9faGVhZGVyIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBtYXAtZ2V0KCRpY29ucy1jYXJldCwgZG93bik7XFxuICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxufVwiLFwiLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWdhcDogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IC43NXJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG5cXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCBhdXRvKSAvIGF1dG8gMWZyIDJyZW07XFxuICAgIGdyaWQtZ2FwOiAuNXJlbTtcXG5cXG4gICAgJl9fY2hlY2sge1xcbiAgICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIH1cXG5cXG4gICAgJl9fcHJpb3JpdHkge1xcbiAgICAgIGdyaWQtcm93OiAxO1xcbiAgICB9XFxuICB9XFxuXFxuICAmOmxhc3Qtb2YtdHlwZSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICB9XFxuICBcXG4gICZfX2NoZWNrIHtcXG4gICAgbWFyZ2luLXRvcDogN3B4O1xcbiAgfVxcblxcbiAgJjpob3ZlciAuYnRuLS1lZGl0IHtcXG4gICAgZGlzcGxheTogaW5pdGlhbDtcXG4gIH1cXG5cXG59XCIsXCIuZHJvcGRvd24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zNXMgbGluZWFyO1xcbn1cIixcIi5hZGRfX2NvbnRlbnQsXFxuLmVkaXRfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcblxcbiAgJi0tdG9kbyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xcbiAgfVxcblxcbiAgJi0tcHJvamVjdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIHBhZGRpbmc6IC4xNXJlbTtcXG4gIH1cXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG5bbmFtZT1cXFwidGl0bGVcXFwiXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjEpO1xcbn1cXG5cXG4uYWRkX19kZXRhaWxzLFxcbi5lZGl0X19kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkX19wcmlvcml0eSxcXG4uZWRpdF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICAmOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNXB4O1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgJjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICBsZWZ0OiAxNHB4O1xcbiAgfVxcblxcbiAgbGFiZWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAuNXJlbTtcXG4gIH1cXG5cXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgICByaWdodDogLTEwcHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuXFxuICAgICY6YmVmb3JlIHtcXG4gICAgICByaWdodDogMTVweDtcXG4gICAgICBsZWZ0OiBpbml0aWFsO1xcbiAgICB9XFxuICBcXG4gICAgJjphZnRlciB7XFxuICAgICAgcmlnaHQ6IDE0cHg7XFxuICAgICAgbGVmdDogaW5pdGlhbDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uYWRkX19maW5pc2gsXFxuLmVkaXRfX2ZpbmlzaCB7XFxuICBtYXJnaW46IC41cmVtIDFyZW07XFxufVxcblxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSgjZmZmLCAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsXCIucGFnZV9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6ICRjb2xvci1wcmltYXJ5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBcXG5cXG4gIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgJiBsaTpsYXN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgfVxcbiAgfVxcbn1cIixcIi5uYXYge1xcbiAgXFxuICBiYWNrZ3JvdW5kOiAkY29sb3Itc2Vjb25kYXJ5O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjI1KTtcXG4gIHBhZGRpbmc6IDJyZW0gLjI1cmVtIDAgMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG4gICYtLWhpZGRlbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB9XFxuXFxuICAmX19jYXRlZ29yeSB7XFxuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG5cXG4gICAgJjpsYXN0LW9mLXR5cGUge1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgbGkge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMDQpO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgICAgIH1cXG5cXG4gICAgICA+IC5idG4ge1xcbiAgICAgICAgLy8gTWFrZXMgdGhlIHdob2xlIGxpbmUgY2xpY2thYmxlIGluc3RlYWQgb2YganVzdCB0aGUgdGV4dC5cXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtLWhlYWRpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMDcpO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XCIsXCJtYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi5tYWluLS1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjVweCk7XFxuXFxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcXG4gIH1cXG59XFxuXFxuLnNlY3Rpb25fX25hbWVfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgJjpob3ZlciAuYnRuLS1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfSBmcm9tICcuL1Byb2plY3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSAnLi9Qcm9qZWN0TW9kZWwnXG5pbXBvcnQgeyBQcm9qZWN0VmlldyB9IGZyb20gJy4vUHJvamVjdFZpZXcnXG5pbXBvcnQgeyBUb2RvTGlzdENvbnRyb2xsZXIgfSBmcm9tICcuL1RvZG9MaXN0Q29udHJvbGxlcidcbmltcG9ydCB7IFRvZG9MaXN0TW9kZWwgfSBmcm9tICcuL1RvZG9MaXN0TW9kZWwnXG5pbXBvcnQgeyBUb2RvTGlzdFZpZXcgfSBmcm9tICcuL1RvZG9MaXN0VmlldydcblxuZXhwb3J0IGNsYXNzIEFwcENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG5cbiAgICB0aGlzLnZpZXcuYmluZEFkZFByb2plY3QodGhpcy5oYW5kbGVBZGRQcm9qZWN0LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREZWxldGVQcm9qZWN0KHRoaXMuaGFuZGxlRGVsZXRlUHJvamVjdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kQ2hhbmdlTmFtZSh0aGlzLmhhbmRsZUNoYW5nZU5hbWUuYmluZCh0aGlzKSlcblxuICAgIHRoaXMudmlldy5iaW5kSG9tZSh0aGlzLmhhbmRsZUhvbWUuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZE5hdlRvZ2dsZSh0aGlzLmhhbmRsZU5hdlRvZ2dsZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kVG9nZ2xlKHRoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcykpXG5cbiAgICB0aGlzLnZpZXcuYmluZERpc3BsYXlBbGwodGhpcy5oYW5kbGVEaXNwbGF5QWxsLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRQcmlvcml0eSh0aGlzLmhhbmRsZVByaW9yaXR5LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREYXRlVG9kYXkodGhpcy5oYW5kbGVUb2RheS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGF0ZVVwY29taW5nKHRoaXMuaGFuZGxlVXBjb21pbmcuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERhdGVBbnl0aW1lKHRoaXMuaGFuZGxlQW55dGltZS5iaW5kKHRoaXMpKVxuXG4gICAgdGhpcy52aWV3LmJpbmRTb3J0VGl0bGUodGhpcy5oYW5kbGVTb3J0VGl0bGUuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZFNvcnREZXNjcmlwdGlvbih0aGlzLmhhbmRsZVNvcnREZXNjcmlwdGlvbi5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kU29ydERhdGUodGhpcy5oYW5kbGVTb3J0RGF0ZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kU29ydFByaW9yaXR5KHRoaXMuaGFuZGxlU29ydFByaW9yaXR5LmJpbmQodGhpcykpXG4gIH1cblxuICAvLyBEaXNwbGF5IHRoZSBuZXcgcHJvamVjdCBhbmQgY3JlYXRlIGEgYnV0dG9uIGxpbmtlZCB0byB0aGUgcHJvamVjdCBpbiB0aGUgbmF2aWdhdGlvbi5cbiAgaGFuZGxlQWRkUHJvamVjdCAobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIobmV3IFByb2plY3RNb2RlbChuYW1lKSwgbmV3IFByb2plY3RWaWV3KFByb2plY3RNb2RlbC5jb3VudGVyKSlcbiAgICB0aGlzLm1vZGVsLmFkZFByb2plY3QocHJvamVjdClcblxuICAgIHByb2plY3QubW9kZWwuYWRkVG9kb0xpc3QobmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCgnRGVmYXVsdCcsIHByb2plY3QubW9kZWwuaWQpLCBuZXcgVG9kb0xpc3RWaWV3KCkpKVxuICAgIHRoaXMuZGlzcGxheVByb2plY3QocHJvamVjdClcbiAgICB0aGlzLnZpZXcucmVuZGVyQnRuKG5hbWUsIHByb2plY3QubW9kZWwuaWQpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvamVjdD1cInByb2plY3QtJHtwcm9qZWN0Lm1vZGVsLmlkfVwiXWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVOYXZDbGljayhwcm9qZWN0KSlcbiAgfVxuXG4gIC8vIExpbmtzIHRoZSBuZXdseSBjcmVhdGVkIG5hdmlnYXRpb24gYnV0dG9uIHRvIGl0cyBwcm9qZWN0XG4gIGhhbmRsZU5hdkNsaWNrIChwcm9qZWN0KSB7XG4gICAgdGhpcy5kaXNwbGF5UHJvamVjdChwcm9qZWN0KVxuICB9XG5cbiAgZGlzcGxheVByb2plY3QgKHByb2plY3QpIHtcbiAgICBwcm9qZWN0LnZpZXcucmVuZGVyTmFtZShwcm9qZWN0Lm1vZGVsLm5hbWUsIHByb2plY3QubW9kZWwuaWQpXG4gICAgcHJvamVjdC52aWV3LnJlbmRlcihwcm9qZWN0Lm1vZGVsLnRvZG9MaXN0cylcbiAgICBwcm9qZWN0LnZpZXcucmVuZGVyRm9ybShwcm9qZWN0Lm1vZGVsLmZvcm0pXG4gICAgcHJvamVjdC52aWV3LmdldEZvcm0oKVxuICAgIHByb2plY3QuYmluZEFkZCgpXG4gIH1cblxuICAvLyBXaGVuIGEgcHJvamVjdCBpcyBkZWxldGVkLCBpdCBpcyByZW1vdmVkIGZyb20gdGhlIG1vZGVsIGFuZCBmcm9tIHRoZSBuYXZpZ2F0aW9uLlxuICAvLyBUaGUgSG9tZXBhZ2UgaXMgZGlzcGxheWVkIGluc3RlYWQuXG4gIGhhbmRsZURlbGV0ZVByb2plY3QgKGlkKSB7XG4gICAgdGhpcy5tb2RlbC5kZWxldGVQcm9qZWN0KGlkKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByb2plY3Q9XCJwcm9qZWN0LSR7aWR9XCJdYCkucmVtb3ZlKClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0PVwicHJvamVjdC0xXCJdJykuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2VOYW1lIChpZCwgbmFtZSkge1xuICAgIHRoaXMubW9kZWwuZWRpdFByb2plY3QoaWQsIG5hbWUpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZmlsdGVyPVwicHJvamVjdC0ke2lkfVwiXWApLnRleHRDb250ZW50ID0gbmFtZVxuICB9XG5cbiAgLy8gRW5hYmxlIGFsbCB0b2dnbGUgYnV0dG9uc1xuICBoYW5kbGVUb2dnbGUgKGV2ZW50KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQudG9nZ2xlfWApLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gIH1cblxuICAvLyBNb2RpZnkgc3BhY2Ugb2NjdXBpZWQgYnkgY29udGVudCB3aGVuIHRoZSBuYXZpZ2F0aW9uIGlzIGhpZGRlbiAvIGRpc3BsYXllZC5cbiAgaGFuZGxlTmF2VG9nZ2xlICgpIHtcbiAgICB0aGlzLnZpZXcubmF2LmNsYXNzTGlzdC50b2dnbGUoJ25hdi0taGlkZGVuJylcbiAgICB0aGlzLnZpZXcubWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdtYWluLS1oaWRkZW4nKVxuICB9XG5cbiAgLy8gRW5hYmxlIHByaW9yaXR5IGZpbHRlcnNcbiAgaGFuZGxlUHJpb3JpdHkgKHByaW9yaXR5KSB7XG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8nKVxuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICBpZiAodG9kby5kYXRhc2V0LnByaW9yaXR5ICE9PSBwcmlvcml0eSkge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ25vLWRpc3BsYXknKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRoYXQgY29tcGFyZXMgMiBkYXlzICh1c2VkIGZvciBkYXRlIGZpbHRlcnMpXG4gIF9zYW1lRGF5IChkYXRlMSwgZGF0ZTIpIHtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IG5ldyBEYXRlKGRhdGUxKVxuICAgIGlmICh0b2RvRGF0ZS5nZXREYXRlKCkgPT09IGRhdGUyLmdldERhdGUoKSAmJlxuICAgIHRvZG9EYXRlLmdldE1vbnRoKCkgPT09IGRhdGUyLmdldE1vbnRoKCkgJiZcbiAgICB0b2RvRGF0ZS5nZXRGdWxsWWVhcigpID09PSBkYXRlMi5nZXRGdWxsWWVhcigpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIERhdGVzIGZpbHRlcnNcbiAgaGFuZGxlVG9kYXkgKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgaWYgKHRoaXMuX3NhbWVEYXkodG9kby5kYXRhc2V0LmRhdGUsIHRvZGF5KSkge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ25vLWRpc3BsYXknKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlVXBjb21pbmcgKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgaWYgKCF0aGlzLl9zYW1lRGF5KHRvZG8uZGF0YXNldC5kYXRlLCB0b2RheSkgJiYgbmV3IERhdGUodG9kby5kYXRhc2V0LmRhdGUpID4gdG9kYXkpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUFueXRpbWUgKCkge1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgaWYgKHRvZG8uZGF0YXNldC5kYXRlICE9PSAnJykge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ25vLWRpc3BsYXknKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gRGlzYWJsZSBmaWx0ZXJzXG4gIGhhbmRsZURpc3BsYXlBbGwgKCkge1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4gdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JykpXG4gIH1cblxuICAvLyBTb3J0XG4gIGhhbmRsZVNvcnRUaXRsZSAocHJvamVjdElkKSB7XG4gICAgdGhpcy5tb2RlbC5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICtwcm9qZWN0SWQpWzBdXG4gICAgICAubW9kZWwudG9kb0xpc3RzLmZvckVhY2goKHRvZG9MaXN0KSA9PiB0b2RvTGlzdC5tb2RlbC5zb3J0VGl0bGUoKSlcbiAgfVxuXG4gIGhhbmRsZVNvcnREZXNjcmlwdGlvbiAocHJvamVjdElkKSB7XG4gICAgdGhpcy5tb2RlbC5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICtwcm9qZWN0SWQpWzBdXG4gICAgICAubW9kZWwudG9kb0xpc3RzLmZvckVhY2goKHRvZG9MaXN0KSA9PiB0b2RvTGlzdC5tb2RlbC5zb3J0RGVzY3JpcHRpb24oKSlcbiAgfVxuXG4gIGhhbmRsZVNvcnREYXRlIChwcm9qZWN0SWQpIHtcbiAgICB0aGlzLm1vZGVsLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gK3Byb2plY3RJZClbMF1cbiAgICAgIC5tb2RlbC50b2RvTGlzdHMuZm9yRWFjaCgodG9kb0xpc3QpID0+IHRvZG9MaXN0Lm1vZGVsLnNvcnREYXRlKCkpXG4gIH1cblxuICBoYW5kbGVTb3J0UHJpb3JpdHkgKHByb2plY3RJZCkge1xuICAgIHRoaXMubW9kZWwucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSArcHJvamVjdElkKVswXVxuICAgICAgLm1vZGVsLnRvZG9MaXN0cy5mb3JFYWNoKCh0b2RvTGlzdCkgPT4gdG9kb0xpc3QubW9kZWwuc29ydFByaW9yaXR5KCkpXG4gIH1cblxuICAvLyBIb21lIHBhZ2VcbiAgaGFuZGxlSG9tZSAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdD1cInByb2plY3QtMVwiXScpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBsb2NhbFN0b3JhZ2VNb2R1bGUgfSBmcm9tICcuL2xvY2FsU3RvcmFnZU1vZHVsZSdcblxuZXhwb3J0IGNsYXNzIEFwcE1vZGVsIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXVxuICB9XG5cbiAgYWRkUHJvamVjdCAocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KVxuICAgIHByb2plY3QuaWQgPSArK0FwcE1vZGVsLmNvdW50ZXJcbiAgICBsb2NhbFN0b3JhZ2VNb2R1bGUudXBkYXRlUHJvamVjdExpc3QodGhpcy5wcm9qZWN0cylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQXBwTW9kZWxDb3VudGVyJywgQXBwTW9kZWwuY291bnRlcilcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QgKGlkKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gaWQpXG4gICAgbG9jYWxTdG9yYWdlTW9kdWxlLnVwZGF0ZVByb2plY3RMaXN0KHRoaXMucHJvamVjdHMpXG4gIH1cblxuICBlZGl0UHJvamVjdCAoaWQsIG5hbWUpIHtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0Lm1vZGVsLmlkID09PSAraWQpIHtcbiAgICAgICAgcHJvamVjdC5tb2RlbC5uYW1lID0gbmFtZVxuICAgICAgICBsb2NhbFN0b3JhZ2VNb2R1bGUudXBkYXRlUHJvamVjdExpc3QodGhpcy5wcm9qZWN0cylcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9qZWN0XG4gICAgfSlcbiAgfVxufVxuXG5BcHBNb2RlbC5jb3VudGVyID0gMFxuIiwiZXhwb3J0IGNsYXNzIEFwcFZpZXcge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy5ob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0taG9tZScpXG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgdGhpcy5wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX25hbWUnKVxuXG4gICAgLy8gRm9ybSB0byBjcmVhdGUgbmV3IHByb2plY3RzXG4gICAgdGhpcy5wcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLS1wcm9qZWN0IFtuYW1lPVwibmFtZVwiXScpXG4gICAgdGhpcy5wcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC0tcHJvamVjdCcpXG5cbiAgICAvLyBTb3J0IHRhc2tzXG4gICAgdGhpcy5zb3J0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC10aXRsZScpXG4gICAgdGhpcy5zb3J0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1kZXNjcmlwdGlvbicpXG4gICAgdGhpcy5zb3J0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LWRhdGUnKVxuICAgIHRoaXMuc29ydFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtcHJpb3JpdHknKVxuXG4gICAgLy8gRmlsdGVyIHRhc2tzXG4gICAgdGhpcy5kaXNwbGF5QWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmlsdGVyPVwiYWxsXCJdJylcbiAgICB0aGlzLnByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmlsdGVyXj1cInByaW9yaXR5XCJdJylcbiAgICB0aGlzLmRhdGVUb2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbHRlcj1cImRhdGUtdG9kYXlcIl0nKVxuICAgIHRoaXMuZGF0ZVVwY29taW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZmlsdGVyPVwiZGF0ZS11cGNvbWluZ1wiXScpXG4gICAgdGhpcy5kYXRlQW55dGltZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbHRlcj1cImRhdGUtYW55dGltZVwiXScpXG5cbiAgICAvLyBUb2dnbGUgTmF2aWdhdGlvblxuICAgIHRoaXMubmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlPVwibmF2XCJdJylcbiAgICB0aGlzLm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKVxuXG4gICAgLy8gRWRpdCBQcm9qZWN0IE5hbWVcbiAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gJydcbiAgICB0aGlzLl9jaGFuZ2VOYW1lKClcbiAgfVxuXG4gIC8vIEdldCBuZXcgcHJvamVjdCdzIG5hbWVcbiAgZ2V0IF9wcm9qZWN0TmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdElucHV0LnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBJbnB1dCB0byBjcmVhdGUgYSBuZXcgcHJvamVjdFxuICBfcmVzZXRJbnB1dCAoKSB7XG4gICAgdGhpcy5wcm9qZWN0SW5wdXQudmFsdWUgPSAnJ1xuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbiBsaW5rZWQgdG8gdGhlIHByb2plY3RcbiAgcmVuZGVyQnRuIChuYW1lLCBpZCkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2J0bi0tcHJvamVjdCcpXG4gICAgbGkuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBgcHJvamVjdC0ke2lkfWApXG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1maWx0ZXInKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicsIGBwcm9qZWN0LSR7aWR9YClcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbmFtZVxuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tZGVsZXRlJylcbiAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+J1xuXG4gICAgbGkuYXBwZW5kKGJ1dHRvbiwgY2xvc2VCdG4pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kKGxpKVxuICB9XG5cbiAgYmluZEFkZFByb2plY3QgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnByb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBoYW5kbGVyKHRoaXMuX3Byb2plY3ROYW1lKVxuICAgICAgdGhpcy5fcmVzZXRJbnB1dCgpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmREZWxldGVQcm9qZWN0IChoYW5kbGVyKSB7XG4gICAgdGhpcy5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpKSByZXR1cm5cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi0tZGVsZXRlJykpIHtcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnbGknKS5kYXRhc2V0LnByb2plY3Quc2xpY2UoOClcbiAgICAgICAgaGFuZGxlcihpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gTmF2aWdhdGlvbiB0b2dnbGVzXG4gIGJpbmRUb2dnbGUgKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQudG9nZ2xlKSB7XG4gICAgICAgIGhhbmRsZXIoZXZlbnQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmROYXZUb2dnbGUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLm5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICAvLyBIb21lIHBhZ2VcbiAgYmluZEhvbWUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgLy8gRmlsdGVyc1xuICBiaW5kUHJpb3JpdHkgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnByaW9yaXR5QnRuLmZvckVhY2goKHByaW9yaXR5QnRuKSA9PiBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gaGFuZGxlcihldmVudC50YXJnZXQuZGF0YXNldC5maWx0ZXIuc2xpY2UoOSkpKSlcbiAgfVxuXG4gIGJpbmREYXRlVG9kYXkgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmRhdGVUb2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBiaW5kRGF0ZVVwY29taW5nIChoYW5kbGVyKSB7XG4gICAgdGhpcy5kYXRlVXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgYmluZERhdGVBbnl0aW1lIChoYW5kbGVyKSB7XG4gICAgdGhpcy5kYXRlQW55dGltZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBiaW5kRGlzcGxheUFsbCAoaGFuZGxlcikge1xuICAgIHRoaXMuZGlzcGxheUFsbEJ0bi5mb3JFYWNoKChkaXNwbGF5QWxsQnRuKSA9PiBkaXNwbGF5QWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcikpXG4gIH1cblxuICAvLyBTb3J0XG4gIGJpbmRTb3J0VGl0bGUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnNvcnRUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IHRoaXMucHJvamVjdC5pZFxuICAgICAgaGFuZGxlcihwcm9qZWN0SWQpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmRTb3J0RGVzY3JpcHRpb24gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnNvcnREZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IHRoaXMucHJvamVjdC5pZFxuICAgICAgaGFuZGxlcihwcm9qZWN0SWQpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmRTb3J0UHJpb3JpdHkgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnNvcnRQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IHRoaXMucHJvamVjdC5pZFxuICAgICAgaGFuZGxlcihwcm9qZWN0SWQpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmRTb3J0RGF0ZSAoaGFuZGxlcikge1xuICAgIHRoaXMuc29ydERhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSB0aGlzLnByb2plY3QuaWRcbiAgICAgIGhhbmRsZXIocHJvamVjdElkKVxuICAgIH0pXG4gIH1cblxuICAvLyBFZGl0IFByb2plY3QgTmFtZVxuXG4gIF9jaGFuZ2VOYW1lICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RfX25hbWUnKSkge1xuICAgICAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kQ2hhbmdlTmFtZSAoaGFuZGxlcikge1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5fdGVtcG9yYXJ5TmFtZSkge1xuICAgICAgICBoYW5kbGVyKGV2ZW50LnRhcmdldC5pZCwgdGhpcy5fdGVtcG9yYXJ5TmFtZSlcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5TmFtZSA9ICcnXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFByb2plY3RDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vZGVsLCB2aWV3KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgdGhpcy52aWV3ID0gdmlld1xuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlKHRoaXMubW9kZWwudG9kb0xpc3RzKVxuICAgIHRoaXMubW9kZWwuYmluZFByb2plY3RDaGFuZ2UodGhpcy5vblByb2plY3RDaGFuZ2UuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZENoYW5nZU5hbWUodGhpcy5oYW5kbGVFZGl0VG9kb0xpc3QuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERlbGV0ZVNlY3Rpb24odGhpcy5oYW5kbGVEZWxldGVUb2RvTGlzdC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgb25Qcm9qZWN0Q2hhbmdlICh0b2RvTGlzdHMpIHtcbiAgICB0aGlzLnZpZXcucmVuZGVyKHRvZG9MaXN0cylcbiAgfVxuXG4gIGhhbmRsZUFkZFRvZG9MaXN0ICh0b2RvTGlzdCkge1xuICAgIHRoaXMubW9kZWwuYWRkVG9kb0xpc3QodG9kb0xpc3QpXG4gIH1cblxuICBoYW5kbGVEZWxldGVUb2RvTGlzdCAoaWQpIHtcbiAgICB0aGlzLm1vZGVsLmRlbGV0ZVRvZG9MaXN0KGlkKVxuICB9XG5cbiAgaGFuZGxlRWRpdFRvZG9MaXN0IChpZCwgbmFtZSkge1xuICAgIHRoaXMubW9kZWwuZWRpdFRvZG9MaXN0KGlkLCBuYW1lKVxuICB9XG5cbiAgYmluZEFkZCAoKSB7XG4gICAgdGhpcy52aWV3LmJpbmRBZGRTZWN0aW9uKHRoaXMuaGFuZGxlQWRkVG9kb0xpc3QuYmluZCh0aGlzKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2VjdGlvbkZvcm0gfSBmcm9tICcuL1NlY3Rpb25Gb3JtJ1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlTW9kdWxlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VNb2R1bGUnXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0TW9kZWwge1xuICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWUgPT09ICcnID8gJ1VudGl0bGVkJyA6IG5hbWVcbiAgICB0aGlzLmlkID0gKytQcm9qZWN0TW9kZWwuY291bnRlclxuICAgIHRoaXMudG9kb0xpc3RzID0gW11cbiAgICB0aGlzLmZvcm0gPSBuZXcgU2VjdGlvbkZvcm0odGhpcy5pZClcbiAgfVxuXG4gIF9jb21taXQgKHRvZG9MaXN0cykge1xuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlKHRvZG9MaXN0cylcbiAgICBsb2NhbFN0b3JhZ2VNb2R1bGUudXBkYXRlVG9kb0xpc3RzKHRoaXMuaWQsIHRoaXMudG9kb0xpc3RzKVxuICB9XG5cbiAgYWRkVG9kb0xpc3QgKHRvZG9MaXN0KSB7XG4gICAgdGhpcy50b2RvTGlzdHMucHVzaCh0b2RvTGlzdClcbiAgICB0b2RvTGlzdC5pZCA9IHRoaXMudG9kb0xpc3RzLmxlbmd0aFxuICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGVkaXRUb2RvTGlzdCAoaWQsIG5hbWUpIHtcbiAgICB0aGlzLnRvZG9MaXN0cyA9IHRoaXMudG9kb0xpc3RzLm1hcCgodG9kb0xpc3QpID0+IHtcbiAgICAgIGlmICh0b2RvTGlzdC5tb2RlbC5pZCA9PT0gK2lkKSB7XG4gICAgICAgIHRvZG9MaXN0Lm1vZGVsLm5hbWUgPSBuYW1lXG4gICAgICB9XG4gICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICB9KVxuICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGRlbGV0ZVRvZG9MaXN0IChpZCkge1xuICAgIHRoaXMudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHMuZmlsdGVyKHRvZG9MaXN0ID0+IHRvZG9MaXN0Lm1vZGVsLmlkICE9PSAraWQpXG4gICAgdGhpcy5fY29tbWl0KHRoaXMudG9kb0xpc3RzKVxuICB9XG5cbiAgYmluZFByb2plY3RDaGFuZ2UgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vblByb2plY3RDaGFuZ2UgPSBjYWxsYmFja1xuICB9XG59XG5cblByb2plY3RNb2RlbC5jb3VudGVyID0gMFxuIiwiaW1wb3J0IHsgVG9kb0xpc3RDb250cm9sbGVyIH0gZnJvbSAnLi9Ub2RvTGlzdENvbnRyb2xsZXInXG5pbXBvcnQgeyBUb2RvTGlzdE1vZGVsIH0gZnJvbSAnLi9Ub2RvTGlzdE1vZGVsJ1xuaW1wb3J0IHsgVG9kb0xpc3RWaWV3IH0gZnJvbSAnLi9Ub2RvTGlzdFZpZXcnXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuL1Byb2plY3RNb2RlbCdcblxuZXhwb3J0IGNsYXNzIFByb2plY3RWaWV3IHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy5zZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9ucycpXG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX25hbWUnKVxuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuX3RlbXBvcmFyeU5hbWUgPSAnJ1xuICAgIHRoaXMuX2NoYW5nZU5hbWUoKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0XG4gIHJlbmRlck5hbWUgKG5hbWUsIGlkKSB7XG4gICAgdGhpcy5uYW1lLmlubmVySFRNTCA9IG5hbWVcbiAgICB0aGlzLm5hbWUuc2V0QXR0cmlidXRlKCdpZCcsIGlkKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBhZGQgc2VjdGlvbiBmb3JtXG4gIHJlbmRlckZvcm0gKGZvcm0pIHtcbiAgICBmb3JtLnJlbmRlcigpXG4gIH1cblxuICAvLyBHZXQgdGhlIGFkZCBzZWN0aW9uIGZvcm0gaW5wdXRzXG4gIGdldEZvcm0gKCkge1xuICAgIHRoaXMubmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlY3Rpb24tZm9ybS0ke3RoaXMuaWR9IFtuYW1lPVwic2VjdGlvblwiXWApXG4gICAgdGhpcy5zdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH0gLmJ0bi0tc3VibWl0YClcbiAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gKVxuICB9XG5cbiAgLy8gR2V0IFNlY3Rpb24ncyBOYW1lIGZyb20gdGhlIGZvcm1cbiAgZ2V0IF9zZWN0aW9uTmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZUlucHV0LnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBmb3JtIGlucHV0XG4gIF9yZXNldElucHV0ICgpIHtcbiAgICB0aGlzLm5hbWVJbnB1dC52YWx1ZSA9ICcnXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHByb2plY3QgYnkgcmVuZGVyaW5nIGV2ZXJ5IHNlY3Rpb25cbiAgcmVuZGVyICh0b2RvTGlzdHMpIHtcbiAgICB3aGlsZSAodGhpcy5zZWN0aW9ucy5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnNlY3Rpb25zLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHRvZG9MaXN0IG9mIHRvZG9MaXN0cykge1xuICAgICAgdG9kb0xpc3Qudmlldy5jcmVhdGVTZWN0aW9uKClcbiAgICAgIHRvZG9MaXN0LnZpZXcucmVuZGVyTmFtZSh0b2RvTGlzdC5tb2RlbC5uYW1lKVxuICAgICAgdG9kb0xpc3Qudmlldy5yZW5kZXIodG9kb0xpc3QubW9kZWwudG9kb3MpXG4gICAgICB0b2RvTGlzdC52aWV3LnJlbmRlckZvcm0odG9kb0xpc3QubW9kZWwuZm9ybSlcbiAgICAgIHRvZG9MaXN0LnZpZXcuZ2V0Rm9ybSh0b2RvTGlzdC5tb2RlbC5mb3JtKVxuICAgICAgdG9kb0xpc3QuYmluZEFkZCgpXG4gICAgfVxuICB9XG5cbiAgLy8gQWxsb3cgc2VjdGlvbiBuYW1lIGVkaXRzXG4gIF9jaGFuZ2VOYW1lICgpIHtcbiAgICB0aGlzLnNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlY3Rpb25fX25hbWUnKSkge1xuICAgICAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kQ2hhbmdlTmFtZSAoaGFuZGxlcikge1xuICAgIHRoaXMuc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fdGVtcG9yYXJ5TmFtZSkge1xuICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbY2xhc3NePVwic2VjdGlvbi1cIl0nKS5jbGFzc0xpc3RbMF0uc2xpY2UoOClcbiAgICAgICAgaGFuZGxlcihpZCwgdGhpcy5fdGVtcG9yYXJ5TmFtZSlcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5TmFtZSA9ICcnXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmRBZGRTZWN0aW9uIChoYW5kbGVyKSB7XG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC0tc2VjdGlvbicpKSB7XG4gICAgICAgIGhhbmRsZXIobmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCh0aGlzLl9zZWN0aW9uTmFtZSwgUHJvamVjdE1vZGVsLmNvdW50ZXIpLCBuZXcgVG9kb0xpc3RWaWV3KCkpKVxuICAgICAgICB0aGlzLl9yZXNldElucHV0KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmluZERlbGV0ZVNlY3Rpb24gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5idG4tLWRlbGV0ZScpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5idG4tLWRlbGV0ZScpLmRhdGFzZXQuZGVsZXRlXG4gICAgICAgIGhhbmRsZXIoaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlY3Rpb25Gb3JtIHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkX19zZWN0aW9uJylcbiAgICBmb3JtQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBmb3JtQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWRyb3Bkb3duJywgJ2J0bi0tc2VjdGlvbicpXG4gICAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gKVxuICAgIGZvcm1CdG4uaW5uZXJIVE1MID0gJ0FkZCBTZWN0aW9uJ1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnYWRkJywgJ2FkZC0tc2VjdGlvbicsICdkcm9wZG93bicsICdoaWRkZW4nKVxuICAgIGZvcm0uaWQgPSBgc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FkZF9fY29udGVudCcsICdhZGRfX2NvbnRlbnQtLXNlY3Rpb24nKVxuXG4gICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc2VjdGlvbicpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlY3Rpb25cXCdzIE5hbWUnKVxuICAgIGxhYmVsTmFtZS5hcHBlbmQobmFtZSlcbiAgICBjb250ZW50LmFwcGVuZChsYWJlbE5hbWUpXG5cbiAgICBjb25zdCBmaW5pc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZpbmlzaC5jbGFzc0xpc3QuYWRkKCdhZGRfX2ZpbmlzaCcpXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWFkZCcsICdzZWN0aW9uJylcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tc3VibWl0JylcbiAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FkZCBTZWN0aW9uJ1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gKVxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1jYW5jZWwnKVxuICAgIGNhbmNlbEJ0bi5pbm5lckhUTUwgPSAnQ2FuY2VsJ1xuXG4gICAgZmluaXNoLmFwcGVuZChzdWJtaXRCdG4sIGNhbmNlbEJ0bilcbiAgICBmb3JtLmFwcGVuZChjb250ZW50LCBmaW5pc2gpXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmQoZm9ybUJ0biwgZm9ybSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb0Zvcm0gfSBmcm9tICcuL1RvZG9Gb3JtJ1xuXG5leHBvcnQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUgPSAnJywgcHJpb3JpdHkgPSAnbm9uZScpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICB0aGlzLmRhdGUgPSBkYXRlXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgdGhpcy5pZCA9ICsrVG9kby5jb3VudGVyXG4gICAgdGhpcy5lZGl0Rm9ybSA9IG5ldyBUb2RvRm9ybSgnZWRpdCcsIHRoaXMuaWQpXG4gIH1cblxuICByZW5kZXIgKGNvbnRhaW5lcikge1xuICAgIHRoaXMudG9kb0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMudG9kb0VsZW0uY2xhc3NMaXN0LmFkZCgndG8tZG8nKVxuICAgIHRoaXMudG9kb0VsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWRhdGUnLCB0aGlzLmRhdGUpXG4gICAgdGhpcy50b2RvRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpb3JpdHknLCB0aGlzLnByaW9yaXR5KVxuICAgIHRoaXMudG9kb0VsZW0uaWQgPSB0aGlzLmlkXG5cbiAgICBjb25zdCB0b2RvQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdG9kb0NoZWNrLmNsYXNzTGlzdC5hZGQoJ3RvLWRvX19jaGVjaycpXG4gICAgdG9kb0NoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgdGhpcy50b2RvRWxlbS5hcHBlbmQodG9kb0NoZWNrKVxuXG4gICAgY29uc3QgY29tcG9uZW50cyA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnZGF0ZSddXG4gICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgY29tcG9uZW50cykge1xuICAgICAgY29uc3QgdG9kb0NvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0b2RvQ29tcG9uZW50LmNsYXNzTGlzdC5hZGQoYHRvLWRvX18ke2NvbXBvbmVudH1gKVxuICAgICAgdG9kb0NvbXBvbmVudC5pbm5lckhUTUwgPSB0aGlzW2NvbXBvbmVudF1cbiAgICAgIHRoaXMudG9kb0VsZW0uYXBwZW5kKHRvZG9Db21wb25lbnQpXG4gICAgfVxuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG8tZG9fX3ByaW9yaXR5JywgYHByaW9yaXR5LSR7dGhpcy5wcmlvcml0eX1gKVxuICAgIHRvZG9Qcmlvcml0eS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuICAgIHRoaXMudG9kb0VsZW0uYXBwZW5kKHRvZG9Qcmlvcml0eSlcblxuICAgIHRoaXMudG9kb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMudG9kb0VkaXQuY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tdG9nZ2xlJywgJ2J0bi0tZWRpdCcpXG4gICAgdGhpcy50b2RvRWRpdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLnRvZG9FZGl0LnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgZWRpdC10b2RvLSR7dGhpcy5pZH1gKVxuICAgIHRoaXMudG9kb0VkaXQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXBlbmNpbC1hbHRcIj48L2k+J1xuICAgIHRoaXMudG9kb0VsZW0uYXBwZW5kKHRoaXMudG9kb0VkaXQpXG5cbiAgICBjb250YWluZXIuYXBwZW5kKHRoaXMudG9kb0VsZW0pXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RvZG9Db3VudGVyJywgVG9kby5jb3VudGVyKVxuICB9XG59XG5cblRvZG8uY291bnRlciA9IDBcbiIsImV4cG9ydCBjbGFzcyBUb2RvRm9ybSB7XG4gIGNvbnN0cnVjdG9yIChnb2FsLCBpZCkge1xuICAgIHRoaXMuZ29hbCA9IGdvYWxcbiAgICB0aGlzLmlkID0gaWRcbiAgfVxuXG4gIF9yZW5kZXJGb3JtICgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH0tLXRvZG9gLCAndG9kby1mb3JtJywgJ2Ryb3Bkb3duJylcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLmdvYWx9LXRvZG8tJHt0aGlzLmlkfWApXG5cbiAgICBpZiAodGhpcy5nb2FsID09PSAnYWRkJykge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9X19jb250ZW50YCwgYCR7dGhpcy5nb2FsfV9fY29udGVudC0tdG9kb2ApXG5cbiAgICBjb25zdCBsYWJlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKVxuICAgIGxhYmVsVGl0bGUuYXBwZW5kKHRpdGxlKVxuXG4gICAgY29uc3QgbGFiZWxEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKVxuICAgIGxhYmVsRGVzY3JpcHRpb24uYXBwZW5kKGRlc2NyaXB0aW9uKVxuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH1fX2RldGFpbHNgKVxuXG4gICAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpXG4gICAgbGFiZWxEYXRlLmFwcGVuZChkYXRlKVxuXG4gICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZF9fcHJpb3JpdHknKVxuICAgIHRoaXMucHJpb3JpdHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMucHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgdGhpcy5wcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYCR7dGhpcy5nb2FsfS1hZGQtcHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgdGhpcy5wcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS10b2dnbGUnKVxuICAgIHRoaXMucHJpb3JpdHlCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWJvb2ttYXJrXCI+PC9pPidcblxuICAgIGNvbnN0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByaW9yaXRpZXMuY2xhc3NMaXN0LmFkZCgnYWRkLXByaW9yaXR5JywgJ2Ryb3Bkb3duJywgJ2hpZGRlbicpXG4gICAgcHJpb3JpdGllcy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5nb2FsfS1hZGQtcHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgY29uc3QgcHJpb3JpdGllc0xpc3QgPSBbJ2hpZ2gnLCAnbWVkJywgJ2xvdycsICdub25lJ11cblxuICAgIGZvciAoY29uc3QgcHJpb3JpdHkgb2YgcHJpb3JpdGllc0xpc3QpIHtcbiAgICAgIGNvbnN0IGxhYmVsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywgYHByaW9yaXR5LSR7cHJpb3JpdHl9LSR7dGhpcy5pZH1gKVxuICAgICAgbGFiZWxQcmlvcml0eS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke3ByaW9yaXR5fWAsIGBwcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICAgIGxhYmVsUHJpb3JpdHkuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWJvb2ttYXJrXCI+PC9pPidcblxuICAgICAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5JylcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByaW9yaXR5KVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByaW9yaXR5LSR7cHJpb3JpdHl9LSR7dGhpcy5pZH1gKVxuXG4gICAgICBpZiAocHJpb3JpdHkgPT09ICdub25lJykge1xuICAgICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIHRydWUpXG4gICAgICB9XG5cbiAgICAgIHByaW9yaXRpZXMuYXBwZW5kKGxhYmVsUHJpb3JpdHksIGlucHV0UHJpb3JpdHkpXG4gICAgfVxuXG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kKHRoaXMucHJpb3JpdHlCdG4sIHByaW9yaXRpZXMpXG5cbiAgICBjb25zdCBmaW5pc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZpbmlzaC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH1fX2ZpbmlzaGApXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tc3VibWl0JylcbiAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gYCR7dGhpcy5nb2FsLnRvVXBwZXJDYXNlKCkuc2xpY2UoMCwgMSkgKyB0aGlzLmdvYWwuc2xpY2UoMSl9IFRhc2tgXG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGAke3RoaXMuZ29hbH0tdG9kby0ke3RoaXMuaWR9YClcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tY2FuY2VsJylcbiAgICBjYW5jZWxCdG4uaW5uZXJIVE1MID0gJ0NhbmNlbCdcblxuICAgIGZpbmlzaC5hcHBlbmQoc3VibWl0QnRuLCBjYW5jZWxCdG4pXG4gICAgY29udGVudC5hcHBlbmQobGFiZWxUaXRsZSwgbGFiZWxEZXNjcmlwdGlvbiwgZGV0YWlscylcbiAgICBkZXRhaWxzLmFwcGVuZChsYWJlbERhdGUsIHByaW9yaXR5Q29udGFpbmVyKVxuICAgIGZvcm0uYXBwZW5kKGNvbnRlbnQsIGZpbmlzaClcblxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICByZW5kZXJBZGQgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9X190b2RvYClcblxuICAgIHRoaXMuZm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGhpcy5mb3JtQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWRyb3Bkb3duJywgYGJ0bi0tJHt0aGlzLmdvYWx9YClcbiAgICB0aGlzLmZvcm1CdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgdGhpcy5mb3JtQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgJHt0aGlzLmdvYWx9LXRvZG8tJHt0aGlzLmlkfWApXG4gICAgdGhpcy5mb3JtQnRuLmlubmVySFRNTCA9IGAke3RoaXMuZ29hbC5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5nb2FsLnNsaWNlKDEpfSBUYXNrYFxuXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmQodGhpcy5mb3JtQnRuLCB0aGlzLl9yZW5kZXJGb3JtKCkpXG4gICAgY29udGFpbmVyLmFwcGVuZChmb3JtQ29udGFpbmVyKVxuXG4gICAgdGhpcy5faW5pdFByaW9yaXR5VG9nZ2xlKClcbiAgICB0aGlzLl9pbml0UHJpb3JpdHlMYWJlbHMoKVxuICB9XG5cbiAgcmVuZGVyRWRpdCAoYmVmb3JlKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH1fX3RvZG9gKVxuXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmQodGhpcy5fcmVuZGVyRm9ybSgpKVxuICAgIGJlZm9yZS5hZnRlcihmb3JtQ29udGFpbmVyKVxuXG4gICAgdGhpcy5faW5pdFByaW9yaXR5VG9nZ2xlKClcbiAgICB0aGlzLl9pbml0UHJpb3JpdHlMYWJlbHMoKVxuICB9XG5cbiAgLy8gRW5hYmxlIHByaW9yaXR5IHRvZ2dsZSBhbmQgY29sb3IgY2hhbmdlIHdoZW4gc2VsZWN0aW5nIGEgcHJpb3JpdHlcblxuICBfaW5pdFByaW9yaXR5VG9nZ2xlICgpIHtcbiAgICB0aGlzLnByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5wcmlvcml0eUJ0bi5kYXRhc2V0LnRvZ2dsZX1gKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKSlcbiAgfVxuXG4gIF9pbml0UHJpb3JpdHlMYWJlbHMgKCkge1xuICAgIHRoaXMubGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnByaW9yaXR5LSR7dGhpcy5pZH1gKVxuICAgIHRoaXMubGFiZWxzLmZvckVhY2gobGFiZWwgPT4gbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2xhYmVsLmdldEF0dHJpYnV0ZSgnZm9yJyl9YCkuY2hlY2tlZCA9IHRydWVcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cIiR7dGhpcy5nb2FsfS1hZGQtcHJpb3JpdHktJHt0aGlzLmlkfVwiXWApLnN0eWxlLmNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQuY2xvc2VzdCgnbGFiZWwnKSkuY29sb3JcbiAgICB9KSlcbiAgfVxuXG4gIC8vIFJlc2V0IHByaW9yaXR5IGNvbG9yIHdoZW4gYWRkaW5nIGEgdGFza1xuXG4gIF9pbml0UmVzZXRQcmlvcml0eSAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZC10b2RvLSR7dGhpcy5pZH0gLmJ0bi0tc3VibWl0YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2dnbGU9XCJhZGQtcHJpb3JpdHktJHt0aGlzLmlkfVwiXWApLnN0eWxlLmNvbG9yID0gJydcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBUb2RvRm9ybSB9IGZyb20gJy4vVG9kb0Zvcm0nXG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlKHRoaXMubW9kZWwudG9kb3MpXG4gICAgdGhpcy5tb2RlbC5iaW5kVG9kb0xpc3RDaGFuZ2UodGhpcy5vblRvZG9MaXN0Q2hhbmdlLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREZWxldGVUb2RvKHRoaXMuaGFuZGxlRGVsZXRlVG9kby5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kT3BlbkVkaXQodGhpcy5oYW5kbGVPcGVuRWRpdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRWRpdFRvZG8odGhpcy5oYW5kbGVFZGl0VG9kby5iaW5kKHRoaXMpKVxuICB9XG5cbiAgb25Ub2RvTGlzdENoYW5nZSAodG9kb3MpIHtcbiAgICB0aGlzLnZpZXcucmVuZGVyKHRvZG9zKVxuICB9XG5cbiAgaGFuZGxlQWRkVG9kbyAodG9kbykge1xuICAgIHRoaXMubW9kZWwuYWRkVG9kbyh0b2RvKVxuICB9XG5cbiAgaGFuZGxlRWRpdFRvZG8gKHVwZGF0ZWRUb2RvLCBpZCkge1xuICAgIHRoaXMubW9kZWwuZWRpdFRvZG8odXBkYXRlZFRvZG8sIGlkKVxuICB9XG5cbiAgaGFuZGxlRGVsZXRlVG9kbyAoaWQpIHtcbiAgICB0aGlzLm1vZGVsLmRlbGV0ZVRvZG8oaWQpXG4gIH1cblxuICBoYW5kbGVPcGVuRWRpdCAoaWQpIHtcbiAgICAvLyBVc2VyIGNhbiBvbmx5IGVkaXQgb25lIHRhc2sgYXQgYSB0aW1lLCBzbyBpZiB0aGVyZSBpcyBhbm90aGVyIEVkaXQgRm9ybSBvcGVuLCBpdCBpcyBjbG9zZWQuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0X190b2RvJykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0X190b2RvJykucmVtb3ZlKClcbiAgICB9XG4gICAgbmV3IFRvZG9Gb3JtKCdlZGl0JywgaWQpLnJlbmRlckVkaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvLWRvW2lkPVwiJHtpZH1cIl1gKSlcbiAgICB0aGlzLnZpZXcuZ2V0RWRpdEZvcm0oaWQpXG4gICAgdGhpcy52aWV3LnNldEVkaXRGb3JtKGlkKVxuICB9XG5cbiAgYmluZEFkZCAoKSB7XG4gICAgdGhpcy52aWV3LmJpbmRBZGRUb2RvKHRoaXMuaGFuZGxlQWRkVG9kby5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBUb2RvRm9ybSB9IGZyb20gJy4vVG9kb0Zvcm0nXG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VNb2R1bGUgfSBmcm9tICcuL2xvY2FsU3RvcmFnZU1vZHVsZSdcblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0TW9kZWwge1xuICBjb25zdHJ1Y3RvciAobmFtZSwgcHJvamVjdElkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZSA9PT0gJycgPyAnVW50aXRsZWQnIDogbmFtZVxuICAgIHRoaXMuaWQgPSArK1RvZG9MaXN0TW9kZWwuY291bnRlclxuICAgIHRoaXMuZm9ybSA9IG5ldyBUb2RvRm9ybSgnYWRkJywgdGhpcy5pZClcbiAgICB0aGlzLnByb2plY3RJZCA9IHByb2plY3RJZFxuICAgIHRoaXMudG9kb3MgPSBbXVxuICAgIHRoaXMuc29ydFN0YXR1cyA9ICcnXG4gIH1cblxuICBhZGRUb2RvICh0b2RvKSB7XG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pXG4gICAgdGhpcy5fY29tbWl0KHRoaXMudG9kb3MpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RvZG9MaXN0TW9kZWxDb3VudGVyJywgVG9kb0xpc3RNb2RlbC5jb3VudGVyKVxuICB9XG5cbiAgZWRpdFRvZG8gKHVwZGF0ZWRUb2RvLCBpZCkge1xuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgaWYgKHRvZG8uaWQgPT09ICtpZCkge1xuICAgICAgICByZXR1cm4gdXBkYXRlZFRvZG9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b2RvXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvcylcbiAgfVxuXG4gIGRlbGV0ZVRvZG8gKGlkKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZClcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvcylcbiAgfVxuXG4gIGJpbmRUb2RvTGlzdENoYW5nZSAoY2FsbGJhY2spIHtcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UgPSBjYWxsYmFja1xuICB9XG5cbiAgX2NvbW1pdCAodG9kb3MpIHtcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UodG9kb3MpXG4gICAgbG9jYWxTdG9yYWdlTW9kdWxlLnVwZGF0ZVRvZG9zKHRoaXMuaWQsIHRoaXMucHJvamVjdElkLCB0aGlzLnRvZG9zKVxuICB9XG5cbiAgc29ydFRpdGxlICgpIHtcbiAgICBpZiAodGhpcy5zb3J0U3RhdHVzID09PSAnZGVzY2VuZGluZycpIHtcbiAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLnNvcnQoKGEsIGIpID0+IChiLnRpdGxlKS5sb2NhbGVDb21wYXJlKGEudGl0bGUpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5zb3J0KChhLCBiKSA9PiAoYS50aXRsZSkubG9jYWxlQ29tcGFyZShiLnRpdGxlKSlcbiAgICB9XG4gICAgdGhpcy5fc29ydENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgc29ydERlc2NyaXB0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zb3J0U3RhdHVzID09PSAnZGVzY2VuZGluZycpIHtcbiAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLnNvcnQoKGEsIGIpID0+IChiLmRlc2NyaXB0aW9uKS5sb2NhbGVDb21wYXJlKGEuZGVzY3JpcHRpb24pKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5zb3J0KChhLCBiKSA9PiAoYS5kZXNjcmlwdGlvbikubG9jYWxlQ29tcGFyZShiLmRlc2NyaXB0aW9uKSlcbiAgICB9XG4gICAgdGhpcy5fc29ydENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgc29ydERhdGUgKCkge1xuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmICghYS5kYXRlKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgICB9IGVsc2UgaWYgKCFiLmRhdGUpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5zb3J0U3RhdHVzID09PSAnZGVzY2VuZGluZycpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5kYXRlKSAtIG5ldyBEYXRlKGIuZGF0ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5fc29ydENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgc29ydFByaW9yaXR5ICgpIHtcbiAgICB0aGlzLl9nZXRQcmlvcml0eVZhbHVlKClcbiAgICBpZiAodGhpcy5zb3J0U3RhdHVzID09PSAnZGVzY2VuZGluZycpIHtcbiAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHlWYWx1ZSAtIGEucHJpb3JpdHlWYWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3Muc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eVZhbHVlIC0gYi5wcmlvcml0eVZhbHVlKVxuICAgIH1cbiAgICB0aGlzLl9zb3J0Q2hhbmdlKHRoaXMudG9kb3MpXG4gIH1cblxuICBfZ2V0UHJpb3JpdHlWYWx1ZSAoKSB7XG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRoaXMudG9kb3MpIHtcbiAgICAgIHN3aXRjaCAodG9kby5wcmlvcml0eSkge1xuICAgICAgICBjYXNlICdsb3cnOlxuICAgICAgICAgIHRvZG8ucHJpb3JpdHlWYWx1ZSA9IDFcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdtZWQnOlxuICAgICAgICAgIHRvZG8ucHJpb3JpdHlWYWx1ZSA9IDJcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgICB0b2RvLnByaW9yaXR5VmFsdWUgPSAzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0b2RvLnByaW9yaXR5VmFsdWUgPSAwXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3NvcnRDaGFuZ2UgKHRvZG9zKSB7XG4gICAgdGhpcy5zb3J0U3RhdHVzID0gdGhpcy5zb3J0U3RhdHVzID09PSAnZGVzY2VuZGluZycgPyAnYXNjZW5kaW5nJyA6ICdkZXNjZW5kaW5nJ1xuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0b2RvcylcbiAgfVxufVxuXG5Ub2RvTGlzdE1vZGVsLmNvdW50ZXIgPSAwXG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9Ub2RvJ1xuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RWaWV3IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9ucycpXG4gICAgdGhpcy50b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy50b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvbGlzdCcpXG4gICAgdGhpcy5pZCA9ICsrVG9kb0xpc3RWaWV3LmNvdW50ZXJcbiAgfVxuXG4gIC8vIENyZWF0ZSBhIHNlY3Rpb25cbiAgY3JlYXRlU2VjdGlvbiAoKSB7XG4gICAgdGhpcy5zZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLnNlY3Rpb24uY2xhc3NMaXN0LmFkZChgc2VjdGlvbi0ke3RoaXMuaWR9YClcbiAgICB0aGlzLnNlY3Rpb24ucHJlcGVuZCh0aGlzLnRvZG9MaXN0KVxuICAgIHRoaXMucHJvamVjdC5hcHBlbmQodGhpcy5zZWN0aW9uKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBzZWN0aW9uJ3MgbmFtZVxuICByZW5kZXJOYW1lIChuYW1lKSB7XG4gICAgdGhpcy5uYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLm5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbl9fbmFtZV9fY29udGFpbmVyJylcblxuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aGlzLm5hbWUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbl9fbmFtZScpXG4gICAgdGhpcy5uYW1lLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSlcbiAgICB0aGlzLm5hbWUuaW5uZXJIVE1MID0gbmFtZVxuXG4gICAgdGhpcy5kZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMuZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tZGVsZXRlJylcbiAgICB0aGlzLmRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLmRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGVsZXRlJywgdGhpcy5zZWN0aW9uLmNsYXNzTGlzdFswXS5zbGljZSg4KSlcbiAgICB0aGlzLmRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+J1xuXG4gICAgdGhpcy5uYW1lQ29udGFpbmVyLmFwcGVuZCh0aGlzLm5hbWUsIHRoaXMuZGVsZXRlQnRuKVxuICAgIHRoaXMuc2VjdGlvbi5wcmVwZW5kKHRoaXMubmFtZUNvbnRhaW5lcilcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgQWRkIGZvcm1cbiAgcmVuZGVyRm9ybSAoZm9ybSkge1xuICAgIGZvcm0ucmVuZGVyQWRkKHRoaXMuc2VjdGlvbilcbiAgfVxuXG4gIC8vIEdldCB0aGUgQWRkIGZvcm0gaW5wdXRzXG4gIGdldEZvcm0gKCkge1xuICAgIHRoaXMudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke3RoaXMuaWR9IC50b2RvLWZvcm0gW25hbWU9XCJ0aXRsZVwiXWApXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cImRlc2NyaXB0aW9uXCJdYClcbiAgICB0aGlzLmRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke3RoaXMuaWR9IC50b2RvLWZvcm0gW25hbWU9XCJkYXRlXCJdYClcbiAgICB0aGlzLnN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSAuYnRuLS1zdWJtaXRgKVxuICB9XG5cbiAgLy8gR2V0IGFkZCBmb3JtIHZhbHVlc1xuICBnZXQgX3RvZG9UaXRsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUudmFsdWVcbiAgfVxuXG4gIGdldCBfdG9kb0Rlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbi52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvRGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZS52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvUHJpb3JpdHkgKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWRkLXRvZG8tJHt0aGlzLmlkfSBbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWRgKSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGQtdG9kby0ke3RoaXMuaWR9IFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZGApLnZhbHVlXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IHRoZSBFZGl0IGZvcm0gaW5wdXRzXG4gIGdldEVkaXRGb3JtICgpIHtcbiAgICB0aGlzLnRpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gW25hbWU9XCJ0aXRsZVwiXScpXG4gICAgdGhpcy5kZXNjcmlwdGlvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdIFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKVxuICAgIHRoaXMuZGF0ZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdIFtuYW1lPVwiZGF0ZVwiXScpXG4gICAgdGhpcy5wcmlvcml0eUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdIC5idG4tLXRvZ2dsZScpXG4gIH1cblxuICAvLyBBdXRvbWF0aWNhbGx5IHByZS1maWxsIHRoZSBFZGl0IGZvcm0gaW5wdXRzXG4gIHNldEVkaXRGb3JtIChpZCkge1xuICAgIHRoaXMudGl0bGVFZGl0LnZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl0gLnRvLWRvX190aXRsZWApLmlubmVySFRNTFxuICAgIHRoaXMuZGVzY3JpcHRpb25FZGl0LnZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl0gLnRvLWRvX19kZXNjcmlwdGlvbmApLmlubmVySFRNTFxuICAgIHRoaXMuZGF0ZUVkaXQudmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX2RhdGVgKS5pbm5lckhUTUxcbiAgICB0aGlzLnByaW9yaXR5RWRpdC5jbGFzc0xpc3QuYWRkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aWR9XCJdIC50by1kb19fcHJpb3JpdHlgKS5jbGFzc0xpc3RbMV0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkXj1cImVkaXQtdG9kb1wiXSBbaWRePVwiJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX3ByaW9yaXR5YCkuY2xhc3NMaXN0WzFdfVwiXWApLmNoZWNrZWQgPSB0cnVlXG4gIH1cblxuICAvLyBHZXQgdGhlIEVkaXQgZm9ybSB2YWx1ZXNcbiAgZ2V0IF9lZGl0VGl0bGUgKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlRWRpdC52YWx1ZVxuICB9XG5cbiAgZ2V0IF9lZGl0RGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uRWRpdC52YWx1ZVxuICB9XG5cbiAgZ2V0IF9lZGl0RGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUVkaXQudmFsdWVcbiAgfVxuXG4gIGdldCBfZWRpdFByaW9yaXR5ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImVkaXQtdG9kb1wiXSBbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZVxuICB9XG5cbiAgLy8gUmVzZXQgZm9ybSBpbnB1dHNcbiAgX3Jlc2V0SW5wdXRzICgpIHtcbiAgICB0aGlzLnRpdGxlLnZhbHVlID0gJydcbiAgICB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlID0gJydcbiAgICB0aGlzLmRhdGUudmFsdWUgPSAnJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3JePVwicHJpb3JpdHktbm9uZVwiXScpLmNoZWNrZWQgPSB0cnVlXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIFRvZG8gTGlzdFxuICByZW5kZXIgKHRvZG9zKSB7XG4gICAgd2hpbGUgKHRoaXMudG9kb0xpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy50b2RvTGlzdC5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICB0b2RvLnJlbmRlcih0aGlzLnRvZG9MaXN0KVxuICAgIH1cbiAgfVxuXG4gIC8vIEV2ZW50IExpc3RlbmVyc1xuXG4gIGJpbmRBZGRUb2RvIChoYW5kbGVyKSB7XG4gICAgdGhpcy5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGhhbmRsZXIobmV3IFRvZG8odGhpcy5fdG9kb1RpdGxlLCB0aGlzLl90b2RvRGVzY3JpcHRpb24sIHRoaXMuX3RvZG9EYXRlLCB0aGlzLl90b2RvUHJpb3JpdHkpKVxuICAgICAgdGhpcy5fcmVzZXRJbnB1dHMoKVxuICAgIH0pXG4gIH1cblxuICBiaW5kRGVsZXRlVG9kbyAoaGFuZGxlcikge1xuICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0by1kb19fY2hlY2snKSkge1xuICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKVxuICAgICAgICBoYW5kbGVyKGlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBPcGVuIGZvcm0gdG8gZWRpdCB0aGUgdG9kb1xuICBiaW5kT3BlbkVkaXQgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5idG4tLWVkaXQnKSkge1xuICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudG8tZG8nKS5pZClcbiAgICAgICAgaGFuZGxlcihpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmluZEVkaXRUb2RvIChoYW5kbGVyKSB7XG4gICAgdGhpcy50b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPT09ICdFZGl0IFRhc2snKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKS5pZC5zbGljZSgxMClcbiAgICAgICAgY29uc3QgdXBkYXRlZFRvZG8gPSBuZXcgVG9kbyh0aGlzLl9lZGl0VGl0bGUsIHRoaXMuX2VkaXREZXNjcmlwdGlvbiwgdGhpcy5fZWRpdERhdGUsIHRoaXMuX2VkaXRQcmlvcml0eSlcbiAgICAgICAgaGFuZGxlcih1cGRhdGVkVG9kbywgaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5Ub2RvTGlzdFZpZXcuY291bnRlciA9IDBcbiIsImltcG9ydCAnLi9zYXNzL21haW4uc2NzcydcbmltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tICcuL0FwcENvbnRyb2xsZXInXG5pbXBvcnQgeyBBcHBNb2RlbCB9IGZyb20gJy4vQXBwTW9kZWwnXG5pbXBvcnQgeyBBcHBWaWV3IH0gZnJvbSAnLi9BcHBWaWV3J1xuaW1wb3J0IHsgVG9kb0xpc3RDb250cm9sbGVyIH0gZnJvbSAnLi9Ub2RvTGlzdENvbnRyb2xsZXInXG5pbXBvcnQgeyBUb2RvTGlzdE1vZGVsIH0gZnJvbSAnLi9Ub2RvTGlzdE1vZGVsJ1xuaW1wb3J0IHsgVG9kb0xpc3RWaWV3IH0gZnJvbSAnLi9Ub2RvTGlzdFZpZXcnXG5pbXBvcnQgeyBQcm9qZWN0Q29udHJvbGxlciB9IGZyb20gJy4vUHJvamVjdENvbnRyb2xsZXInXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuL1Byb2plY3RNb2RlbCdcbmltcG9ydCB7IFByb2plY3RWaWV3IH0gZnJvbSAnLi9Qcm9qZWN0VmlldydcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8nXG5cbmNvbnN0IGFwcCA9IG5ldyBBcHBDb250cm9sbGVyKG5ldyBBcHBNb2RlbCgpLCBuZXcgQXBwVmlldygpKVxuXG4vLyBPbiB0aGUgZmlyc3QgdXNlLCBjcmVhdGVzIGEgZGVmYXVsdCBwcm9qZWN0IGFuZCBzYW1wbGVzXG5pZiAoIWxvY2FsU3RvcmFnZS5wcm9qZWN0cykge1xuICAvLyBDcmVhdGUgYSBkZWZhdWx0IHByb2plY3QuIEl0IGNhbm5vdCBiZSBkZWxldGVkIGFzIGl0IGFjdHMgYXMgYSBcIkhvbWUgUGFnZVwiLlxuICBhcHAuaGFuZGxlQWRkUHJvamVjdCgnRGVmYXVsdCcpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWRlbGV0ZScpLnJlbW92ZSgpXG5cbiAgLy8gQWRkIGEgdHV0b3JpYWwgYW5kIGEgZmV3IHNhbXBsZXMuXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5oYW5kbGVFZGl0VG9kb0xpc3QoJzEnLCAnVHV0b3JpYWwnKVxuICBhcHAubW9kZWwucHJvamVjdHNbMF0ubW9kZWwudG9kb0xpc3RzWzBdLmhhbmRsZUFkZFRvZG8obmV3IFRvZG8oXG4gICAgJ1dlbGNvbWUnLFxuICBgVHJ5IGFkZGluZyBhIG5ldyB0YXNrIGJ5IGNsaWNraW5nIG9uIFwiQWRkIFRhc2tcIiFcbiAgWW91IGNhbiBhbHNvIGFkZCBhcyBtYW55IHNlY3Rpb25zIHRvIHlvdXIgcHJvamVjdCBhcyB5b3UnZCBsaWtlIGJ5IGNsaWNraW5nIG9uIFwiQWRkIFNlY3Rpb25cIiwgYW5kIGNyZWF0ZSBhcyBtYW55IHByb2plY3RzIGFzIHlvdSB3aXNoLmApKVxuXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5oYW5kbGVBZGRUb2RvTGlzdChuZXcgVG9kb0xpc3RDb250cm9sbGVyKG5ldyBUb2RvTGlzdE1vZGVsKCdTYW1wbGVzJywgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLmlkKSwgbmV3IFRvZG9MaXN0VmlldygpKSlcbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLnRvZG9MaXN0c1sxXS5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKFxuICAgICdKb2huXFwncyBCaXJ0aGRheScsXG4gICAgJ01lZXQgYXQgSm9oblxcJ3MgaG91c2UgYXQgMTkuIERvblxcJ3QgZm9yZ2V0IHRvIGJyaW5nIGhpcyBnaWZ0LicsXG4gIGAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxfS0ke25ldyBEYXRlKCkuZ2V0RGF0ZSgpfWAsXG4gICdoaWdoJ1xuICApKVxuXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5tb2RlbC50b2RvTGlzdHNbMV0uaGFuZGxlQWRkVG9kbyhuZXcgVG9kbyhcbiAgICAnRGlubmVyIHdpdGggQ2hsb2UnLFxuICAgICdSZXNlcnZhdGlvbiBhdCBSaG9kZXMgUmVzdGF1cmFudCwgYXQgMjAuJyxcbiAgYCR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS0ke25ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDF9LSR7bmV3IERhdGUoKS5nZXREYXRlKCkgKyAyfWAsXG4gICdtZWQnXG4gICkpXG5cbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLnRvZG9MaXN0c1sxXS5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKFxuICAgICdEZW50aXN0JyxcbiAgICAnSXQgd29uXFwndCBiZSB0aGF0IGJhZC4gUHJvYmFibHkuJyxcbiAgYCR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS0ke25ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDJ9LSR7bmV3IERhdGUoKS5nZXREYXRlKCkgKyA1fWAsXG4gICdsb3cnXG4gICkpXG5cbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLnRvZG9MaXN0c1sxXS5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKFxuICAgICdTdGFydCB3b3JraW5nIG91dCcsXG4gICAgJ0lcXCdsbCBzdGFydC4uLiBUb21vcnJvdy4gT3IgbmV4dCB5ZWFyLidcbiAgKSlcblxuLyogT24gYWxsIHRoZSBvdGhlciB1c2VzOlxuICAgIC0gTG9hZCB0aGUgbG9jYWxTdG9yYWdlXG4gICAgLSBDcmVhdGUgbmF2IGJ1dHRvbnMgZm9yIGVhY2ggcHJvamVjdFxuICAgIC0gUmVuZGVyIHRoZSBkZWZhdWx0IHByb2plY3RcbiovXG59IGVsc2Uge1xuICBsZXQgdGVtcFN0b3JhZ2UgPSBbLi4uYXBwLm1vZGVsLnByb2plY3RzXVxuXG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpXG5cbiAgYXBwLm1vZGVsLnByb2plY3RzID0gW11cblxuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgdGVtcFN0b3JhZ2UpIHtcbiAgICBjb25zdCB0b2RvUHJvamVjdCA9IG5ldyBQcm9qZWN0Q29udHJvbGxlcihuZXcgUHJvamVjdE1vZGVsKHByb2plY3QubW9kZWwubmFtZSksIG5ldyBQcm9qZWN0VmlldyhQcm9qZWN0TW9kZWwuY291bnRlcikpXG4gICAgYXBwLm1vZGVsLmFkZFByb2plY3QodG9kb1Byb2plY3QpXG4gICAgYXBwLmRpc3BsYXlQcm9qZWN0KHRvZG9Qcm9qZWN0KVxuICAgIGFwcC52aWV3LnJlbmRlckJ0bih0b2RvUHJvamVjdC5tb2RlbC5uYW1lLCB0b2RvUHJvamVjdC5tb2RlbC5pZClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0PVwicHJvamVjdC0ke3RvZG9Qcm9qZWN0Lm1vZGVsLmlkfVwiXWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYXBwLmhhbmRsZU5hdkNsaWNrKHRvZG9Qcm9qZWN0KSlcblxuICAgIGZvciAoY29uc3QgdG9kb0xpc3Qgb2YgcHJvamVjdC5tb2RlbC50b2RvTGlzdHMpIHtcbiAgICAgIGNvbnN0IHByb2plY3RUb2RvTGlzdCA9IG5ldyBUb2RvTGlzdENvbnRyb2xsZXIobmV3IFRvZG9MaXN0TW9kZWwodG9kb0xpc3QubW9kZWwubmFtZSwgdG9kb0xpc3QubW9kZWwucHJvamVjdElkKSwgbmV3IFRvZG9MaXN0VmlldygpKVxuICAgICAgdG9kb1Byb2plY3QuaGFuZGxlQWRkVG9kb0xpc3QocHJvamVjdFRvZG9MaXN0KVxuXG4gICAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb0xpc3QubW9kZWwudG9kb3MpIHtcbiAgICAgICAgcHJvamVjdFRvZG9MaXN0LmhhbmRsZUFkZFRvZG8obmV3IFRvZG8odG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kYXRlLCB0b2RvLnByaW9yaXR5KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGVtcFN0b3JhZ2UgPSB7fVxuICBhcHAuaGFuZGxlSG9tZSgpXG59XG4iLCJleHBvcnQgY29uc3QgbG9jYWxTdG9yYWdlTW9kdWxlID0gKCgpID0+IHtcbiAgY29uc3QgdXBkYXRlUHJvamVjdExpc3QgPSAocHJvamVjdHMpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXG4gIH1cblxuICBjb25zdCB1cGRhdGVUb2RvTGlzdHMgPSAoaWQsIHRvZG9MaXN0c0FycikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgJ3Byb2plY3RzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKVxuICAgICAgICAgIC5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICBwcm9qZWN0Lm1vZGVsLnRvZG9MaXN0cyA9IHRvZG9MaXN0c0FyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRvZG9zID0gKGlkLCBwcm9qZWN0SWQsIHRvZG9zQXJyKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAncHJvamVjdHMnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXG4gICAgICAgICAgLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IHByb2plY3RJZCkge1xuICAgICAgICAgICAgICBwcm9qZWN0Lm1vZGVsLnRvZG9MaXN0cy5tYXAoKHRvZG9MaXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvZG9MaXN0Lm1vZGVsLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgdG9kb0xpc3QubW9kZWwudG9kb3MgPSB0b2Rvc0FyclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0XG4gICAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZVByb2plY3RMaXN0LFxuICAgIHVwZGF0ZVRvZG9MaXN0cyxcbiAgICB1cGRhdGVUb2Rvc1xuICB9XG59KSgpXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==