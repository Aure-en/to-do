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
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  min-height: calc(100vh - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\n.no-display {\n  display: none !important;\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\n[contenteditable] {\n  cursor: pointer;\n}\n[contenteditable]:hover {\n  background-color: rgba(42, 43, 104, 0.05);\n}\n[contenteditable]:focus {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  outline: none;\n}\n\nh1 {\n  font-size: 1.35rem;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n  display: inline-block;\n  padding: 0 1rem;\n  align-self: center;\n}\n\nh2 {\n  font-weight: 700;\n  color: rgba(42, 43, 104, 0.85);\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  margin-top: 1.25rem;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel, .btn--add {\n  color: rgba(42, 43, 104, 0.45);\n}\n.btn--cancel:hover, .btn--cancel:hover:before, .btn--add:hover, .btn--add:hover:before {\n  color: rgba(42, 43, 104, 0.75);\n}\n.btn--section {\n  color: rgba(42, 43, 104, 0.35);\n  font-weight: 700;\n}\n.btn--section:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.35);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n}\n.btn--section:before, .btn--section:after {\n  content: \"\";\n  background-color: rgba(42, 43, 104, 0.25);\n  height: 2px;\n  flex-grow: 1;\n}\n.btn--section:hover:before, .btn--section:hover:after {\n  background-color: rgba(42, 43, 104, 0.5);\n}\n.btn--section:before {\n  margin-right: 1rem;\n}\n.btn--section:after {\n  margin-left: 1rem;\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn--delete {\n  display: none;\n  color: rgba(42, 43, 104, 0.5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  top: 10px;\n  color: rgba(42, 43, 104, 0.5);\n  display: none;\n}\n.btn--edit:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-med {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1.5rem;\n  align-items: start;\n  word-break: break-word;\n  position: relative;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n@media all and (max-width: 576px) {\n  .to-do {\n    grid-template: repeat(3, auto)/auto 1fr 2rem;\n    grid-gap: 0.5rem;\n  }\n  .to-do__check {\n    grid-row: 1/-1;\n  }\n  .to-do__priority {\n    grid-row: 1;\n  }\n}\n.to-do:last-of-type {\n  border-bottom: none;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n.to-do:hover .btn--edit {\n  display: initial;\n}\n\n.dropdown {\n  transition: all 0.35s linear;\n}\n\n.add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo,\n.edit__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project,\n.edit__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n}\n.add__priority input[type=radio],\n.edit__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n@media all and (max-width: 1140px) {\n  .add-priority {\n    right: -10px;\n    left: initial;\n  }\n  .add-priority:before {\n    right: 15px;\n    left: initial;\n  }\n  .add-priority:after {\n    right: 14px;\n    left: initial;\n  }\n}\n\n.add__finish,\n.edit__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n  transition: all 0.2s ease-in;\n}\n.nav--hidden {\n  transform: translateX(-100%);\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li:hover .btn--delete {\n  display: initial;\n}\n.nav__category li > .btn {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n@media all and (max-width: 768px) {\n  .nav {\n    position: fixed;\n    z-index: 1;\n    height: 100%;\n  }\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all 0.2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 1rem;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n}\n@media all and (max-width: 768px) {\n  .main--hidden {\n    transform: translateX(0);\n  }\n}\n\n.section__name__container {\n  display: flex;\n  justify-content: space-between;\n}\n.section__name__container:hover .btn--delete {\n  display: initial;\n}", "",{"version":3,"sources":["webpack://src/sass/main.scss","webpack://src/sass/base/_base.scss","webpack://src/sass/base/_typography.scss","webpack://src/sass/utils/_variables.scss","webpack://src/sass/components/_buttons.scss","webpack://src/sass/utils/_mixins.scss","webpack://src/sass/components/_icons.scss","webpack://src/sass/components/_todo.scss","webpack://src/sass/components/_dropdown.scss","webpack://src/sass/layout/_form.scss","webpack://src/sass/layout/_header.scss","webpack://src/sass/layout/_nav.scss","webpack://src/sass/layout/_main.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  min-height: calc(100vh - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\n.no-display {\n  display: none !important;\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\n[contenteditable] {\n  cursor: pointer;\n}\n[contenteditable]:hover {\n  background-color: rgba(42, 43, 104, 0.05);\n}\n[contenteditable]:focus {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  outline: none;\n}\n\nh1 {\n  font-size: 1.35rem;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n  display: inline-block;\n  padding: 0 1rem;\n  align-self: center;\n}\n\nh2 {\n  font-weight: 700;\n  color: rgba(42, 43, 104, 0.85);\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  margin-top: 1.25rem;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel, .btn--add {\n  color: rgba(42, 43, 104, 0.45);\n}\n.btn--cancel:hover, .btn--cancel:hover:before, .btn--add:hover, .btn--add:hover:before {\n  color: rgba(42, 43, 104, 0.75);\n}\n.btn--section {\n  color: rgba(42, 43, 104, 0.35);\n  font-weight: 700;\n}\n.btn--section:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.35);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n}\n.btn--section:before, .btn--section:after {\n  content: \"\";\n  background-color: rgba(42, 43, 104, 0.25);\n  height: 2px;\n  flex-grow: 1;\n}\n.btn--section:hover:before, .btn--section:hover:after {\n  background-color: rgba(42, 43, 104, 0.5);\n}\n.btn--section:before {\n  margin-right: 1rem;\n}\n.btn--section:after {\n  margin-left: 1rem;\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn--delete {\n  display: none;\n  color: rgba(42, 43, 104, 0.5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  top: 10px;\n  color: rgba(42, 43, 104, 0.5);\n  display: none;\n}\n.btn--edit:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-med {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1.5rem;\n  align-items: start;\n  word-break: break-word;\n  position: relative;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n@media all and (max-width: 576px) {\n  .to-do {\n    grid-template: repeat(3, auto)/auto 1fr 2rem;\n    grid-gap: 0.5rem;\n  }\n  .to-do__check {\n    grid-row: 1/-1;\n  }\n  .to-do__priority {\n    grid-row: 1;\n  }\n}\n.to-do:last-of-type {\n  border-bottom: none;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n.to-do:hover .btn--edit {\n  display: initial;\n}\n\n.dropdown {\n  transition: all 0.35s linear;\n}\n\n.add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo,\n.edit__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project,\n.edit__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n}\n.add__priority input[type=radio],\n.edit__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n@media all and (max-width: 1140px) {\n  .add-priority {\n    right: -10px;\n    left: initial;\n  }\n  .add-priority:before {\n    right: 15px;\n    left: initial;\n  }\n  .add-priority:after {\n    right: 14px;\n    left: initial;\n  }\n}\n\n.add__finish,\n.edit__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n  transition: all 0.2s ease-in;\n}\n.nav--hidden {\n  transform: translateX(-100%);\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li:hover .btn--delete {\n  display: initial;\n}\n.nav__category li > .btn {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n@media all and (max-width: 768px) {\n  .nav {\n    position: fixed;\n    z-index: 1;\n    height: 100%;\n  }\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all 0.2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 1rem;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n}\n@media all and (max-width: 768px) {\n  .main--hidden {\n    transform: translateX(0);\n  }\n}\n\n.section__name__container {\n  display: flex;\n  justify-content: space-between;\n}\n.section__name__container:hover .btn--delete {\n  display: initial;\n}","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput,\ntextarea {\n\tborder: none;\n\n\t&:focus {\n\t\toutline: none;\n\t}\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\twidth: 100vw;\n\tmin-height: 100vh;\n\tmax-width: 100%;\n\tmax-height: 100%;\n}\n\n.wrapper {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.content__wrapper {\n\tposition: relative;\n\ttop: 50px;\n\tdisplay: flex;\n\tmin-height: calc(100vh - 50px);\n}\n\n.hidden {\n\topacity: 0;\n\tmax-height: 0 !important;\n\toverflow: hidden;\n  transform: translateY(-.25em);\n}\n\n.no-display {\n\tdisplay: none !important;\n}","body,\nbutton {\n  font-family: $font-primary;\n  font-size: .875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\n[contenteditable] {\n  cursor: pointer;\n\n  &:hover {\n    background-color: rgba($color-primary, .05);\n  }\n\n  &:focus {\n    border: 1px solid rgba($color-primary, .5);\n    outline: none;\n  }\n}\n\nh1 {\n  font-size: 1.35rem;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  color: $color-primary;\n  letter-spacing: .5px;\n  text-align: center;\n  display: inline-block;\n  padding: 0 1rem;\n  align-self: center;\n}\n\nh2 {\n  font-weight: 700;\n  color: rgba($color-primary, .85);\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 0.25rem .5rem;\n  margin-top: 1.25rem;\n}\n\n.btn {\n  &--page--header {\n    color: $color-header;\n  }\n\n  &--icon {\n    font-size: 1.25rem;\n  }\n\n  &--submit,\n  &--cancel {\n    text-transform: uppercase;\n    font-size: .85em;\n    letter-spacing: -.5px;\n  }\n\n  &--submit {\n    color: #fff;\n  }\n\n  &--cancel,\n  &--add {\n    color: rgba($color-primary, .45);\n\n    &:hover,\n    &:hover:before {\n      color: rgba($color-primary, .75);\n    }\n  }\n\n  &--section {\n    color: rgba($color-primary, .35);\n    font-weight: 700;\n\n    &:hover {\n      color: rgba($color-primary, .75);\n    }\n  }\n}\n\n// Nav\n\n.nav {\n  &--heading {\n    text-transform: uppercase;\n    color: $color-primary;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 2.5;\n  }\n}\n\n[data-toggle=\"add-project\"] {\n  color: rgba(#000, .75);\n\n  &:hover {\n    color: #000;\n  }\n\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\n// Form\n\ninput,\ntextarea {\n  font-family: $font-primary;\n}\n\n[name=\"title\"] {\n  font-weight: 700;\n}\n\n[name=\"date\"] {\n  color: $color-form;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}","// Fonts\n$font-primary: 'Nanum Gothic', Arial;\n\n\n// Colors\n$color-primary: rgb(42, 43, 104);\n$color-secondary: rgb(238, 240, 241);\n\n$color-header: #fff;\n$color-projects: rgba($color-primary, .5);\n$color-form: rgb(142, 142, 142);\n\n$color-priority: (\n  high: rgb(161, 66, 66),\n  med: rgb(231, 154, 103),\n  low: rgb(93, 151, 91),\n  none: rgb(199, 199, 199)\n);\n\n$color-date: (\n  all: lighten($color-primary, 15%),\n  today: rgb(235, 153, 99),\n  upcoming: rgb(141, 90, 137),\n  anytime: rgb(122, 122, 122),\n  late: rgb(148, 32, 32)\n);\n\n$color-sort: (\n  title: rgb(48, 92, 48),\n  description: rgb(235, 185, 79),\n  date: rgb(102, 151, 145),\n  priority: map-get($color-priority, high)\n);\n\n// Icons\n\n$icon-priority: \"\\f02e\";\n\n$icons-date: (\n  all: \"\\f073\",\n  today: \"\\f272\",\n  upcoming: \"\\f274\",\n  anytime: \"\\f133\",\n);\n\n$icons-caret: (\n  up: \"\\f0d8\",\n  down: \"\\f0d7\",\n  right: \"\\f0da\"\n);\n\n$icons-sort: (\n  title: \"\\f328\",\n  description: \"\\f249\",\n  date: \"\\f073\",\n  priority: $icon-priority,\n);\n\n$icon-add: \"\\f067\";\n$icon-edit: \"\\f044\";\n\n// Others\n$margin-indent: 0 .25rem 0 1.25rem;","button {\n\tborder: none;\n  background: none;\n  cursor: pointer;\n  \n  &:focus {\n    outline: none;\n  }\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: .15rem .5rem;\n}\n  \n.btn--submit {\n  background: rgba($color-primary, .5);\n  border-radius: 5px;\n  margin-right: .25rem;\n\n  &:hover {\n    background: rgba($color-primary, .7);\n  }\n}\n\n.btn--cancel {\n  border: 1px solid rgba($color-primary, .5);\n  border-radius: 5px;\n  background: rgba(#fff, .5);\n}\n\n.btn--add:before {\n  content: $icon-add;\n  color: rgba($color-primary, .35);\n  @include font-awesome-700();\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n\n  &:before,\n  &:after {\n    content: '';\n    background-color: rgba($color-primary, .25);\n    height: 2px;\n    flex-grow: 1;\n  }\n\n  &:hover:before,\n  &:hover:after {\n    background-color: rgba($color-primary, .5);\n  }\n\n  &:before {\n    margin-right: 1rem;\n  }\n\n  &:after {\n    margin-left: 1rem;\n  }\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between\n}\n\n.btn--delete {\n  display: none;\n  color: rgba($color-primary, .5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  top: 10px;\n  color: rgba($color-primary, .5);\n  display: none;\n\n  &:hover {\n    color: rgba($color-primary, .75);\n  }\n\n}","@mixin font-awesome-400() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n@mixin font-awesome-700() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n@mixin icon-content($target, $map) {\n  @each $key, $icon in $map {\n    .#{$target}-#{$key}::before {\n      content: $icon;\n    }\n  }\n}\n\n@mixin icon-color($target, $map) {\n  @each $key, $color in $map {\n    .#{$target}-#{$key}::before {\n      color: $color;\n    }\n  }\n}","// NAV-ICONS\n\n.nav {\n  &__to-do li:before,\n  &__projects li:before,\n  &__filters li:before,\n  &__sorts li:before {\n    margin: $margin-indent;\n  }\n\n  &__to-do li:before,\n  &__sorts li:before {\n    @include font-awesome-400();\n  }\n\n  &__projects li:before {\n    content: \"⚫\";\n    color: $color-projects;\n  }\n\n  .project_list__add:before {\n    content: $icon-add;\n    @include font-awesome-700();\n  }\n\n  &__filters li:before {\n    content: \"\\f02e\";\n    @include font-awesome-400();\n  }\n}\n\n// Color Priority Icons\n@each $level, $color in $color-priority {\n  .priority-#{$level} {\n    color: $color;\n  }\n}\n\n// Date Icons\n@include icon-content('date', $icons-date);\n@include icon-color('date', $color-date);\n\n// Category Icons\n.nav--heading:before {\n  content: map-get($icons-caret, down);\n  color: $color-primary;\n  @include font-awesome-700();\n  margin-right: .75rem;\n}\n\n// Sort Icons\n@include icon-content('sort', $icons-sort);\n@include icon-color('sort', $color-sort);\n\n// MAIN ICONS\n\n.main__header li:before {\n  content: map-get($icons-caret, down);\n  @include font-awesome-700();\n}",".to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1.5rem;\n  align-items: start;\n  word-break: break-word;\n  position: relative;\n  padding: .75rem 0;\n  border-bottom: 1px solid rgba($color-primary, .1);\n\n  @media all and (max-width: 576px) {\n    grid-template: repeat(3, auto) / auto 1fr 2rem;\n    grid-gap: .5rem;\n\n    &__check {\n      grid-row: 1 / -1;\n    }\n\n    &__priority {\n      grid-row: 1;\n    }\n  }\n\n  &:last-of-type {\n    border-bottom: none;\n  }\n  \n  &__check {\n    margin-top: 7px;\n  }\n\n  &:hover .btn--edit {\n    display: initial;\n  }\n\n}",".dropdown {\n  transition: all .35s linear;\n}",".add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba($color-primary, .35);\n\n  &--todo {\n    border-radius: 10px;\n    padding: .25rem 1rem;\n  }\n\n  &--project {\n    border-radius: 5px;\n    margin: 0 1rem;\n    padding: .15rem;\n  }\n}\n\ninput[type=\"text\"],\ntextarea {\n  width: 100%;\n  padding: .25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=\"title\"] {\n  border-bottom: 1px solid rgba($color-primary, .1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n\n  input[type=\"radio\"] {\n    position: fixed;\n    opacity: 0;\n    pointer-events: none;\n  }\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba($color-primary, .35);\n  padding: .25rem .5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n\n  &:before {\n    content: '';\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #fff;\n    position: absolute;\n    top: -5px;\n    left: 15px;\n    z-index: 1;\n  }\n\n  &:after {\n    content: '';\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid rgba($color-primary, .35);\n    position: absolute;\n    top: -6px;\n    left: 14px;\n  }\n\n  label {\n    text-align: center;\n    margin: 0 .5rem;\n  }\n\n  @media all and (max-width: 1140px) {\n    right: -10px;\n    left: initial;\n\n    &:before {\n      right: 15px;\n      left: initial;\n    }\n  \n    &:after {\n      right: 14px;\n      left: initial;\n    }\n  }\n}\n\n.add__finish,\n.edit__finish {\n  margin: .5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(#fff, .5);\n}\n\nlabel {\n  cursor: pointer;\n}\n",".page__header {\n  position: fixed;\n  background: $color-primary;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n  \n\n  ul {\n    display: flex;\n    flex: 1;\n\n    & li:last-child {\n      margin-left: auto;\n    }\n  }\n}",".nav {\n  \n  background: $color-secondary;\n  width: 250px;\n  border-right: 1px solid rgba($color-primary, .25);\n  padding: 2rem .25rem 0 2rem;\n  transition: all .2s ease-in;\n\n  &--hidden {\n    transform: translateX(-100%);\n  }\n\n  &__category {\n    margin-bottom: .75rem;\n    padding-bottom: .75rem;\n    border-bottom: 1px solid rgba($color-primary, .1);\n\n    &:last-of-type {\n      border-bottom: none;\n    }\n\n    li {\n      display: flex;\n      \n      &:hover {\n        background: rgba($color-primary, .04);\n      }\n\n      &:hover .btn--delete {\n        display: initial;\n      }\n\n      > .btn {\n        // Makes the whole line clickable instead of just the text.\n        flex: 1;\n        text-align: start;\n      }\n    }\n  }\n\n  &--heading {\n    width: 100%;\n    text-align: start;\n    \n    &:hover {\n      background: rgba($color-primary, .07);\n    }\n  }\n\n  @media all and (max-width: 768px) {\n    position: fixed;\n    z-index: 1;\n    height: 100%;\n  }\n\n}","main {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all .2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 1rem;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n\n  @media all and (max-width: 768px) {\n    transform: translateX(0)\n  }\n}\n\n.section__name__container {\n  display: flex;\n  justify-content: space-between;\n\n  &:hover .btn--delete {\n    display: initial;\n  }\n}"],"sourceRoot":""}]);
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
class AppModel {
  constructor() {
    this.projects = JSON.parse(localStorage.getItem('projects')) || [];
  }

  addProject(project) {
    this.projects.push(project);
    project.id = ++AppModel.counter;
    localStorage.setItem('projects', JSON.stringify(this.projects));
    localStorage.setItem('AppCounter', AppModel.counter);
  }

  deleteProject(id) {
    this.projects = this.projects.filter(project => project.id !== id);
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  editProject(id, name) {
    this.projects = this.projects.map(project => {
      if (project.model.id === +id) {
        project.model.name = name;
        localStorage.setItem('projects', JSON.stringify(this.projects));
      }

      return project;
    });
  }

}
AppModel.counter = JSON.parse(localStorage.getItem('AppCounter')) || 0;

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

    this._temporaryName;

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
    this.view.bindAddSection(this.handleAddTodoList.bind(this));
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

  _checkStorage() {
    if (!JSON.parse(localStorage.getItem('projects')).filter(project => project.id === this.id)[0]) {
      this.todoLists = [];
    } else {
      this.todos = JSON.parse(localStorage.getItem('projects')).filter(project => project.id === this.id)[0].model.todoLists || [];
    }
  }

  _updateStorage() {
    localStorage.setItem('projects', JSON.stringify(JSON.parse(localStorage.getItem('projects')).map(project => {
      if (project.id === this.id) {
        project.model.todoLists = this.todoLists;
      }

      return project;
    })));
  }

  _commit(todoLists) {
    this.onProjectChange(todoLists);

    this._updateStorage();
  }

  addTodoList(todoList) {
    this.todoLists.push(todoList);
    todoList.id = this.todoLists.length;

    this._commit(this.todoLists);

    localStorage.setItem('ProjectCounter', ProjectModel.counter);
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
ProjectModel.counter = JSON.parse(localStorage.getItem('ProjectCounter')) || 0;

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
    this.container.addEventListener('submit', event => {
      event.preventDefault();

      if (event.target.classList.contains('add--section')) {
        handler(new _TodoListController__WEBPACK_IMPORTED_MODULE_0__["TodoListController"](new _TodoListModel__WEBPACK_IMPORTED_MODULE_1__["TodoListModel"](this._sectionName, _ProjectModel__WEBPACK_IMPORTED_MODULE_3__["ProjectModel"].counter), new _TodoListView__WEBPACK_IMPORTED_MODULE_2__["TodoListView"](_ProjectModel__WEBPACK_IMPORTED_MODULE_3__["ProjectModel"].counter)));

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
Todo.counter = JSON.parse(localStorage.getItem('TodoCounter')) || 0;

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
    this.labels.forEach(label => label.addEventListener('click', () => {
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

class TodoListModel {
  constructor(name, projectId) {
    this.name = name === '' ? 'Untitled' : name;
    this.id = ++TodoListModel.counter;
    this.form = new _TodoForm__WEBPACK_IMPORTED_MODULE_0__["TodoForm"]('add', this.id);
    this.projectId = projectId;
    this.todos = [];

    this._checkStorage();
  }

  addTodo(todo) {
    this.todos.push(todo);

    this._commit(this.todos);

    localStorage.setItem('TodoListCounter', TodoListModel.counter);
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

  _checkStorage() {
    if (!JSON.parse(localStorage.getItem('projects'))) return;

    if (!JSON.parse(localStorage.getItem('projects')).filter(project => project.id === this.projectId)[0]) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(localStorage.getItem('projects')).filter(project => project.id === this.projectId)[0].model.todoLists.filter(todoList => todoList.id === this.id).todos || [];
    }
  }

  _updateStorage() {
    localStorage.setItem('projects', JSON.stringify(JSON.parse(localStorage.getItem('projects')).map(project => {
      if (project.id === this.projectId) {
        project.model.todoLists.map(todoList => {
          if (todoList.model.id === this.id) {
            todoList.model.todos = this.todos;
          }

          return todoList;
        });
      }

      return project;
    })));
  }

  _commit(todos) {
    this.onTodoListChange(todos);

    this._updateStorage();
  }

}
TodoListModel.counter = JSON.parse(localStorage.getItem('TodoListCounter')) || 0;

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
    this.id = JSON.parse(localStorage.getItem('TodoListCounter'));
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
/* harmony import */ var _TodoForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TodoForm */ "./src/TodoForm.js");












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
} else {
  /* On all the other uses:
      - Load the localStorage
      - Create nav buttons for each project
      - Render the default project
  */
  let tempStorage = [...app.model.projects];
  localStorage.clear();
  _ProjectModel__WEBPACK_IMPORTED_MODULE_8__["ProjectModel"].counter = 0;
  _AppModel__WEBPACK_IMPORTED_MODULE_2__["AppModel"].counter = 0;
  _TodoListModel__WEBPACK_IMPORTED_MODULE_5__["TodoListModel"].counter = 0;
  _Todo__WEBPACK_IMPORTED_MODULE_10__["Todo"].counter = 0;
  _TodoForm__WEBPACK_IMPORTED_MODULE_11__["TodoForm"].counter = 0;
  console.log(_ProjectModel__WEBPACK_IMPORTED_MODULE_8__["ProjectModel"].counter);
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
  console.log(tempStorage);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9kb0xpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL21haW4uc2Nzcz82YTE3Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsIkFwcENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsIm1vZGVsIiwidmlldyIsImJpbmRBZGRQcm9qZWN0IiwiaGFuZGxlQWRkUHJvamVjdCIsImJpbmQiLCJiaW5kRGVsZXRlUHJvamVjdCIsImhhbmRsZURlbGV0ZVByb2plY3QiLCJiaW5kQ2hhbmdlTmFtZSIsImhhbmRsZUNoYW5nZU5hbWUiLCJiaW5kTmF2VG9nZ2xlIiwiaGFuZGxlTmF2VG9nZ2xlIiwiYmluZFRvZ2dsZSIsImhhbmRsZVRvZ2dsZSIsImJpbmREaXNwbGF5QWxsIiwiaGFuZGxlRGlzcGxheUFsbCIsImJpbmRQcmlvcml0eSIsImhhbmRsZVByaW9yaXR5IiwiYmluZERhdGVUb2RheSIsImhhbmRsZVRvZGF5IiwiYmluZERhdGVVcGNvbWluZyIsImhhbmRsZVVwY29taW5nIiwiYmluZERhdGVBbnl0aW1lIiwiaGFuZGxlQW55dGltZSIsImJpbmRIb21lIiwiaGFuZGxlSG9tZSIsIm5hbWUiLCJwcm9qZWN0IiwiUHJvamVjdENvbnRyb2xsZXIiLCJQcm9qZWN0TW9kZWwiLCJQcm9qZWN0VmlldyIsImNvdW50ZXIiLCJhZGRQcm9qZWN0IiwiYWRkVG9kb0xpc3QiLCJUb2RvTGlzdENvbnRyb2xsZXIiLCJUb2RvTGlzdE1vZGVsIiwiVG9kb0xpc3RWaWV3IiwiZGlzcGxheVByb2plY3QiLCJyZW5kZXJCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTmF2Q2xpY2siLCJyZW5kZXJOYW1lIiwicmVuZGVyIiwidG9kb0xpc3RzIiwicmVuZGVyRm9ybSIsImZvcm0iLCJnZXRGb3JtIiwiZGVsZXRlUHJvamVjdCIsInJlbW92ZSIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImVkaXRQcm9qZWN0IiwidGV4dENvbnRlbnQiLCJldmVudCIsInRhcmdldCIsImRhdGFzZXQiLCJ0b2dnbGUiLCJjbGFzc0xpc3QiLCJuYXYiLCJtYWluIiwicHJpb3JpdHkiLCJ0b2RvcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidG9kbyIsImFkZCIsIl9zYW1lRGF5IiwiZGF0ZTEiLCJkYXRlMiIsInRvZG9EYXRlIiwiRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwidG9kYXkiLCJkYXRlIiwiQXBwTW9kZWwiLCJwcm9qZWN0cyIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJmaWx0ZXIiLCJBcHBWaWV3IiwiY29udGFpbmVyIiwiaG9tZUJ0biIsInByb2plY3RJbnB1dCIsInByb2plY3RTdWJtaXQiLCJzb3J0VGl0bGUiLCJzb3J0RGVzY3JpcHRpb24iLCJzb3J0RGF0ZSIsInNvcnRQcmlvcml0eSIsImRpc3BsYXlBbGxCdG4iLCJwcmlvcml0eUJ0biIsImRhdGVUb2RheUJ0biIsImRhdGVVcGNvbWluZ0J0biIsImRhdGVBbnl0aW1lQnRuIiwibmF2QnRuIiwiX3RlbXBvcmFyeU5hbWUiLCJfY2hhbmdlTmFtZSIsIl9wcm9qZWN0TmFtZSIsInZhbHVlIiwiX3Jlc2V0SW5wdXQiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJidXR0b24iLCJpbm5lckhUTUwiLCJjbG9zZUJ0biIsImFwcGVuZCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3Nlc3QiLCJjb250YWlucyIsInNsaWNlIiwiYm9keSIsIm9uUHJvamVjdENoYW5nZSIsImJpbmRQcm9qZWN0Q2hhbmdlIiwiaGFuZGxlRWRpdFRvZG9MaXN0IiwiYmluZERlbGV0ZVNlY3Rpb24iLCJoYW5kbGVEZWxldGVUb2RvTGlzdCIsImJpbmRBZGRTZWN0aW9uIiwiaGFuZGxlQWRkVG9kb0xpc3QiLCJ0b2RvTGlzdCIsImRlbGV0ZVRvZG9MaXN0IiwiZWRpdFRvZG9MaXN0IiwiU2VjdGlvbkZvcm0iLCJfY2hlY2tTdG9yYWdlIiwiX3VwZGF0ZVN0b3JhZ2UiLCJfY29tbWl0IiwiY2FsbGJhY2siLCJzZWN0aW9ucyIsIm5hbWVJbnB1dCIsInN1Ym1pdCIsIl9zZWN0aW9uTmFtZSIsImZpcnN0Q2hpbGQiLCJjcmVhdGVTZWN0aW9uIiwiYmluZEFkZCIsImRlbGV0ZSIsImZvcm1Db250YWluZXIiLCJmb3JtQnRuIiwibGFiZWxOYW1lIiwiZmluaXNoIiwic3VibWl0QnRuIiwiY2FuY2VsQnRuIiwiVG9kbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlZGl0Rm9ybSIsIlRvZG9Gb3JtIiwidG9kb0VsZW0iLCJ0b2RvQ2hlY2siLCJjb21wb25lbnRzIiwiY29tcG9uZW50IiwidG9kb0NvbXBvbmVudCIsInRvZG9Qcmlvcml0eSIsInRvZG9FZGl0IiwiZ29hbCIsIl9yZW5kZXJGb3JtIiwibGFiZWxUaXRsZSIsImxhYmVsRGVzY3JpcHRpb24iLCJkZXRhaWxzIiwibGFiZWxEYXRlIiwicHJpb3JpdHlDb250YWluZXIiLCJwcmlvcml0aWVzIiwicHJpb3JpdGllc0xpc3QiLCJsYWJlbFByaW9yaXR5IiwiaW5wdXRQcmlvcml0eSIsInRvVXBwZXJDYXNlIiwicmVuZGVyQWRkIiwiX2luaXRQcmlvcml0eVRvZ2dsZSIsIl9pbml0UHJpb3JpdHlMYWJlbHMiLCJyZW5kZXJFZGl0IiwiYmVmb3JlIiwiYWZ0ZXIiLCJsYWJlbHMiLCJsYWJlbCIsInN0eWxlIiwiY29sb3IiLCJnZXRDb21wdXRlZFN0eWxlIiwiX2luaXRSZXNldFByaW9yaXR5Iiwib25Ub2RvTGlzdENoYW5nZSIsImJpbmRUb2RvTGlzdENoYW5nZSIsImJpbmREZWxldGVUb2RvIiwiaGFuZGxlRGVsZXRlVG9kbyIsImJpbmRPcGVuRWRpdCIsImhhbmRsZU9wZW5FZGl0IiwiYmluZEVkaXRUb2RvIiwiaGFuZGxlRWRpdFRvZG8iLCJoYW5kbGVBZGRUb2RvIiwiYWRkVG9kbyIsInVwZGF0ZWRUb2RvIiwiZWRpdFRvZG8iLCJkZWxldGVUb2RvIiwiZ2V0RWRpdEZvcm0iLCJzZXRFZGl0Rm9ybSIsImJpbmRBZGRUb2RvIiwicHJvamVjdElkIiwic2VjdGlvbiIsInByZXBlbmQiLCJuYW1lQ29udGFpbmVyIiwiZGVsZXRlQnRuIiwiX3RvZG9UaXRsZSIsIl90b2RvRGVzY3JpcHRpb24iLCJfdG9kb0RhdGUiLCJfdG9kb1ByaW9yaXR5IiwidGl0bGVFZGl0IiwiZGVzY3JpcHRpb25FZGl0IiwiZGF0ZUVkaXQiLCJwcmlvcml0eUVkaXQiLCJjaGVja2VkIiwiX2VkaXRUaXRsZSIsIl9lZGl0RGVzY3JpcHRpb24iLCJfZWRpdERhdGUiLCJfZWRpdFByaW9yaXR5IiwiX3Jlc2V0SW5wdXRzIiwicGFyc2VJbnQiLCJwYXJlbnRFbGVtZW50IiwiYXBwIiwidGVtcFN0b3JhZ2UiLCJjbGVhciIsImNvbnNvbGUiLCJsb2ciLCJ0b2RvUHJvamVjdCIsInByb2plY3RUb2RvTGlzdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUM0RjtBQUM1Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsc0JBQXNCLG1tQkFBbW1CLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLEdBQUcsaUpBQWlKLG1CQUFtQixHQUFHLFVBQVUsbUJBQW1CLEdBQUcsWUFBWSxxQkFBcUIsR0FBRyxtQkFBbUIsaUJBQWlCLEdBQUcsNkRBQTZELGtCQUFrQixrQkFBa0IsR0FBRyxXQUFXLDhCQUE4QixzQkFBc0IsR0FBRyxzQkFBc0IsaUJBQWlCLEdBQUcsZ0NBQWdDLGtCQUFrQixHQUFHLE9BQU8sMkJBQTJCLEdBQUcsVUFBVSxpQkFBaUIsc0JBQXNCLG9CQUFvQixxQkFBcUIsR0FBRyxjQUFjLGdCQUFnQixpQkFBaUIsR0FBRyx1QkFBdUIsdUJBQXVCLGNBQWMsa0JBQWtCLG1DQUFtQyxHQUFHLGFBQWEsZUFBZSw2QkFBNkIscUJBQXFCLG1DQUFtQyxHQUFHLGlCQUFpQiw2QkFBNkIsR0FBRyxtQkFBbUIseUNBQXlDLHdCQUF3QixxQkFBcUIsd0JBQXdCLEdBQUcsdUJBQXVCLG9CQUFvQixHQUFHLDJCQUEyQiw4Q0FBOEMsR0FBRywyQkFBMkIsNkNBQTZDLGtCQUFrQixHQUFHLFFBQVEsdUJBQXVCLG1CQUFtQiw4QkFBOEIsbUJBQW1CLDBCQUEwQix1QkFBdUIsMEJBQTBCLG9CQUFvQix1QkFBdUIsR0FBRyxRQUFRLHFCQUFxQixtQ0FBbUMsOEJBQThCLDBCQUEwQiw0QkFBNEIsd0JBQXdCLEdBQUcsd0JBQXdCLGdCQUFnQixHQUFHLGNBQWMsdUJBQXVCLEdBQUcsOEJBQThCLDhCQUE4QixzQkFBc0IsMkJBQTJCLEdBQUcsZ0JBQWdCLGdCQUFnQixHQUFHLDJCQUEyQixtQ0FBbUMsR0FBRywwRkFBMEYsbUNBQW1DLEdBQUcsaUJBQWlCLG1DQUFtQyxxQkFBcUIsR0FBRyx1QkFBdUIsbUNBQW1DLEdBQUcsbUJBQW1CLDhCQUE4QixtQkFBbUIscUJBQXFCLDBCQUEwQixxQkFBcUIsR0FBRywrQkFBK0IsK0JBQStCLEdBQUcsbUNBQW1DLGdCQUFnQixHQUFHLDBCQUEwQixxQkFBcUIsMkJBQTJCLEdBQUcsbUJBQW1CLHFCQUFxQixHQUFHLHNCQUFzQix5Q0FBeUMsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsaUJBQWlCLG1CQUFtQixHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxZQUFZLGlCQUFpQixxQkFBcUIsb0JBQW9CLEdBQUcsZ0JBQWdCLGtCQUFrQixHQUFHLGlDQUFpQyw0QkFBNEIsR0FBRyxrQkFBa0IsdUNBQXVDLHVCQUF1QiwwQkFBMEIsR0FBRyxzQkFBc0IsdUNBQXVDLEdBQUcsa0JBQWtCLDZDQUE2Qyx1QkFBdUIseUNBQXlDLEdBQUcsc0JBQXNCLG1CQUFtQixtQ0FBbUMseUNBQXlDLHFCQUFxQixtQkFBbUIsR0FBRyxtQkFBbUIsa0JBQWtCLHdCQUF3QixnQkFBZ0Isb0JBQW9CLEdBQUcsNkNBQTZDLGtCQUFrQiw4Q0FBOEMsZ0JBQWdCLGlCQUFpQixHQUFHLHlEQUF5RCw2Q0FBNkMsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcsdUJBQXVCLHNCQUFzQixHQUFHLG1CQUFtQixrQkFBa0IsbUNBQW1DLEdBQUcsa0JBQWtCLGtCQUFrQixrQ0FBa0MsR0FBRyxnQkFBZ0IsdUJBQXVCLGdCQUFnQixjQUFjLGtDQUFrQyxrQkFBa0IsR0FBRyxvQkFBb0IsbUNBQW1DLEdBQUcscUdBQXFHLGdDQUFnQyxHQUFHLGdEQUFnRCx5Q0FBeUMscUJBQXFCLEdBQUcsNEJBQTRCLG1CQUFtQixrQ0FBa0MsR0FBRyxrQ0FBa0MsbUJBQW1CLHlDQUF5QyxxQkFBcUIsR0FBRywyQkFBMkIsbUJBQW1CLHlDQUF5QyxxQkFBcUIsR0FBRyxvQkFBb0IsbUJBQW1CLEdBQUcsbUJBQW1CLG1CQUFtQixHQUFHLG1CQUFtQixtQkFBbUIsR0FBRyxvQkFBb0IsbUJBQW1CLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyw0QkFBNEIsbUJBQW1CLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsNEJBQTRCLG1CQUFtQixHQUFHLDJCQUEyQixtQkFBbUIsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcsMEJBQTBCLG1CQUFtQixtQkFBbUIseUNBQXlDLHFCQUFxQiwwQkFBMEIsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsK0JBQStCLG1CQUFtQixHQUFHLHdCQUF3QixtQkFBbUIsR0FBRyw0QkFBNEIsbUJBQW1CLEdBQUcseUJBQXlCLG1CQUFtQixHQUFHLCtCQUErQixtQkFBbUIsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcsNEJBQTRCLG1CQUFtQixHQUFHLDZCQUE2QixtQkFBbUIseUNBQXlDLHFCQUFxQixHQUFHLFlBQVksa0JBQWtCLHVEQUF1RCwyQkFBMkIscUJBQXFCLHVCQUF1QiwyQkFBMkIsdUJBQXVCLHVCQUF1QixvREFBb0QsR0FBRyxxQ0FBcUMsWUFBWSxtREFBbUQsdUJBQXVCLEtBQUssbUJBQW1CLHFCQUFxQixLQUFLLHNCQUFzQixrQkFBa0IsS0FBSyxHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsMkJBQTJCLHFCQUFxQixHQUFHLGVBQWUsaUNBQWlDLEdBQUcsb0NBQW9DLGtCQUFrQiwyQkFBMkIsOENBQThDLEdBQUcsOENBQThDLHdCQUF3QiwwQkFBMEIsR0FBRyxvREFBb0QsdUJBQXVCLG1CQUFtQixxQkFBcUIsR0FBRyxpQ0FBaUMsZ0JBQWdCLHFCQUFxQixxQkFBcUIsR0FBRyxjQUFjLGlCQUFpQixHQUFHLGtCQUFrQixvREFBb0QsR0FBRyxvQ0FBb0Msa0JBQWtCLDhCQUE4QixHQUFHLHNDQUFzQyx1QkFBdUIsR0FBRyx3RUFBd0Usb0JBQW9CLGVBQWUseUJBQXlCLEdBQUcsbUJBQW1CLHVCQUF1QixrQkFBa0IscUJBQXFCLDhDQUE4Qyw0QkFBNEIsa0NBQWtDLGdCQUFnQixpQkFBaUIsZUFBZSxHQUFHLHdCQUF3QixrQkFBa0IsdUNBQXVDLHdDQUF3QyxrQ0FBa0MsdUJBQXVCLGNBQWMsZUFBZSxlQUFlLEdBQUcsdUJBQXVCLGtCQUFrQix1Q0FBdUMsd0NBQXdDLHFEQUFxRCx1QkFBdUIsY0FBYyxlQUFlLEdBQUcsdUJBQXVCLHVCQUF1QixxQkFBcUIsR0FBRyxzQ0FBc0MsbUJBQW1CLG1CQUFtQixvQkFBb0IsS0FBSywwQkFBMEIsa0JBQWtCLG9CQUFvQixLQUFLLHlCQUF5QixrQkFBa0Isb0JBQW9CLEtBQUssR0FBRyxrQ0FBa0Msd0JBQXdCLEdBQUcsNEJBQTRCLHlDQUF5QyxHQUFHLFdBQVcsb0JBQW9CLEdBQUcsbUJBQW1CLG9CQUFvQix3QkFBd0IsZ0JBQWdCLGlCQUFpQixrQkFBa0Isd0JBQXdCLG9CQUFvQixlQUFlLEdBQUcsb0JBQW9CLGtCQUFrQixZQUFZLEdBQUcsa0NBQWtDLHNCQUFzQixHQUFHLFVBQVUsd0JBQXdCLGlCQUFpQixvREFBb0QsaUNBQWlDLGlDQUFpQyxHQUFHLGdCQUFnQixpQ0FBaUMsR0FBRyxrQkFBa0IsMkJBQTJCLDRCQUE0QixvREFBb0QsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcscUJBQXFCLGtCQUFrQixHQUFHLDJCQUEyQix3Q0FBd0MsR0FBRyx3Q0FBd0MscUJBQXFCLEdBQUcsNEJBQTRCLFlBQVksc0JBQXNCLEdBQUcsaUJBQWlCLGdCQUFnQixzQkFBc0IsR0FBRyx1QkFBdUIsd0NBQXdDLEdBQUcscUNBQXFDLFVBQVUsc0JBQXNCLGlCQUFpQixtQkFBbUIsS0FBSyxHQUFHLFVBQVUsWUFBWSxrQkFBa0IsNEJBQTRCLHNCQUFzQiw4QkFBOEIsR0FBRyxjQUFjLGdCQUFnQixxQkFBcUIsa0JBQWtCLDJCQUEyQixvQkFBb0IsR0FBRyxtQkFBbUIsa0NBQWtDLEdBQUcscUNBQXFDLG1CQUFtQiwrQkFBK0IsS0FBSyxHQUFHLCtCQUErQixrQkFBa0IsbUNBQW1DLEdBQUcsZ0RBQWdELHFCQUFxQixHQUFHLE9BQU8sOGtCQUE4a0IsUUFBUSxLQUFLLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLFdBQVcsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFV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QUFrRFgsSUFBSSxDQUFDSixRQUF2RCxDQUE5QjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCtKLGFBQVcsR0FBRyxFQUFkO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxXQUFaO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUMzRkQsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw0TUFBb0c7O0FBRXRJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcXG59XFxuXFxuLm5vLWRpc3BsYXkge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5LFxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjk7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5bY29udGVudGVkaXRhYmxlXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbltjb250ZW50ZWRpdGFibGVdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDUpO1xcbn1cXG5bY29udGVudGVkaXRhYmxlXTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC44NSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG5cXG4uYnRuLS1wYWdlLS1oZWFkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWNhbmNlbCwgLmJ0bi0tYWRkIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjQ1KTtcXG59XFxuLmJ0bi0tY2FuY2VsOmhvdmVyLCAuYnRuLS1jYW5jZWw6aG92ZXI6YmVmb3JlLCAuYnRuLS1hZGQ6aG92ZXIsIC5idG4tLWFkZDpob3ZlcjpiZWZvcmUge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9ZGF0ZV0ge1xcbiAgY29sb3I6ICM4ZThlOGU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG5cXG4uYnRuLS1jYW5jZWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmJ0bi0tYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbi5idG4tLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuLmJ0bi0tc2VjdGlvbjpiZWZvcmUsIC5idG4tLXNlY3Rpb246YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIGhlaWdodDogMnB4O1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmhvdmVyOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjpob3ZlcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5idG4tLXNlY3Rpb246YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5idG4tLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuXFxuLmJ0bi0tZWRpdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTVweDtcXG4gIHRvcDogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmJ0bi0tZWRpdDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43NSk7XFxufVxcblxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlLCAubmF2X19maWx0ZXJzIGxpOmJlZm9yZSwgLm5hdl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gIG1hcmdpbjogMCAwLjI1cmVtIDAgMS4yNXJlbTtcXG59XFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pqrXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4ubmF2IC5wcm9qZWN0X2xpc3RfX2FkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm5hdl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5wcmlvcml0eS1tZWQge1xcbiAgY29sb3I6ICNlNzlhNjc7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6ICM1ZDk3NWI7XFxufVxcblxcbi5wcmlvcml0eS1ub25lIHtcXG4gIGNvbG9yOiAjYzdjN2M3O1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GzXFxcIjtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74myXFxcIjtcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74m0XFxcIjtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLNcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb2xvcjogIzQwNDI5ZTtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ViOTk2MztcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb2xvcjogIzhkNWE4OTtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbn1cXG5cXG4uZGF0ZS1sYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM5NDIwMjA7XFxufVxcblxcbi5uYXYtLWhlYWRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG59XFxuXFxuLnNvcnQtdGl0bGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74yoXFxcIjtcXG59XFxuXFxuLnNvcnQtZGVzY3JpcHRpb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mJXFxcIjtcXG59XFxuXFxuLnNvcnQtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uc29ydC1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK5cXFwiO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjMzA1YzMwO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWJiOTRmO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM2Njk3OTE7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5tYWluX19oZWFkZXIgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50by1kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYuNXJlbSAxZnIgNi41cmVtIDJyZW07XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1nYXA6IDEuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwLjc1cmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIC50by1kbyB7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCBhdXRvKS9hdXRvIDFmciAycmVtO1xcbiAgICBncmlkLWdhcDogMC41cmVtO1xcbiAgfVxcbiAgLnRvLWRvX19jaGVjayB7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgfVxcbiAgLnRvLWRvX19wcmlvcml0eSB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgfVxcbn1cXG4udG8tZG86bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi50by1kb19fY2hlY2sge1xcbiAgbWFyZ2luLXRvcDogN3B4O1xcbn1cXG4udG8tZG86aG92ZXIgLmJ0bi0tZWRpdCB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG5cXG4uZHJvcGRvd24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGxpbmVhcjtcXG59XFxuXFxuLmFkZF9fY29udGVudCxcXG4uZWRpdF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbn1cXG4uYWRkX19jb250ZW50LS10b2RvLFxcbi5lZGl0X19jb250ZW50LS10b2RvIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxufVxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3QsXFxuLmVkaXRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBwYWRkaW5nOiAwLjE1cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuW25hbWU9dGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG5cXG4uYWRkX19kZXRhaWxzLFxcbi5lZGl0X19kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkX19wcmlvcml0eSxcXG4uZWRpdF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWRkX19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSxcXG4uZWRpdF9fcHJpb3JpdHkgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGVmdDogLTEwcHg7XFxuICB0b3A6IDEuNjVyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4O1xcbiAgbGVmdDogMTVweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC02cHg7XFxuICBsZWZ0OiAxNHB4O1xcbn1cXG4uYWRkLXByaW9yaXR5IGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgLmFkZC1wcmlvcml0eSB7XFxuICAgIHJpZ2h0OiAtMTBweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG4gIC5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuICB9XFxuICAuYWRkLXByaW9yaXR5OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDE0cHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuICB9XFxufVxcblxcbi5hZGRfX2ZpbmlzaCxcXG4uZWRpdF9fZmluaXNoIHtcXG4gIG1hcmdpbjogMC41cmVtIDFyZW07XFxufVxcblxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYWdlX19oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogIzJhMmI2ODtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIGxpOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5uYXYge1xcbiAgYmFja2dyb3VuZDogI2VlZjBmMTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgcGFkZGluZzogMnJlbSAwLjI1cmVtIDAgMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxufVxcbi5uYXYtLWhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG4ubmF2X19jYXRlZ29yeSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuLm5hdl9fY2F0ZWdvcnk6bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDQpO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaTpob3ZlciAuYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkgPiAuYnRuIHtcXG4gIGZsZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDcpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4ubWFpbi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1cHgpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1haW4tLWhpZGRlbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuLnNlY3Rpb25fX25hbWVfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc2VjdGlvbl9fbmFtZV9fY29udGFpbmVyOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvYmFzZS9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvYmFzZS9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvdXRpbHMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvdXRpbHMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9faWNvbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX3RvZG8uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX2Ryb3Bkb3duLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX25hdi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdC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SjBNSjs7QUl0TUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUp5TUY7O0FJdE1BO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FKeU1GOztBSXRNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUp5TUY7QUl2TUU7RUFDRSw4QkFBQTtBSnlNSjs7QU0xUkU7RUFJRSwyQkh1RFk7QUhtT2hCO0FNdlJFO0VEVEEsa0NBQUE7RUFDQSxnQkFBQTtBTG1TRjtBTXRSRTtFQUNFLFlBQUE7RUFDQSw2QkhSYTtBSGdTakI7QU1yUkU7RUFDRSxZSHFDTztFRXBEVCxrQ0FBQTtFQUNBLGdCQUFBO0FMdVNGO0FNclJFO0VBQ0UsWUFBQTtFRHpCRixrQ0FBQTtFQUNBLGdCQUFBO0FMaVRGOztBTWxSRTtFQUNFLGNIdEJhO0FIMlNqQjs7QU10UkU7RUFDRSxjSHRCYTtBSCtTakI7O0FNMVJFO0VBQ0UsY0h0QmE7QUhtVGpCOztBTTlSRTtFQUNFLGNIdEJhO0FIdVRqQjs7QUt2VEk7RUFDRSxZRnlCTztBSGlTYjs7QUszVEk7RUFDRSxZRnlCTztBSHFTYjs7QUsvVEk7RUFDRSxZRnlCTztBSHlTYjs7QUtuVUk7RUFDRSxZRnlCTztBSDZTYjs7QUsvVEk7RUFDRSxjRkZPO0FIb1ViOztBS25VSTtFQUNFLGNGRk87QUh3VWI7O0FLdlVJO0VBQ0UsY0ZGTztBSDRVYjs7QUszVUk7RUFDRSxjRkZPO0FIZ1ZiOztBSy9VSTtFQUNFLGNGRk87QUhvVmI7O0FNNVRBO0VBQ0UsWUFBQTtFQUNBLGNIeENjO0VFQ2Qsa0NBQUE7RUFDQSxnQkFBQTtFQ3dDQSxxQkFBQTtBTmdVRjs7QUtuV0k7RUFDRSxZRnNDTztBSGdVYjs7QUt2V0k7RUFDRSxZRnNDTztBSG9VYjs7QUszV0k7RUFDRSxZRnNDTztBSHdVYjs7QUsvV0k7RUFDRSxZRnNDTztBSDRVYjs7QUszV0k7RUFDRSxjRk1PO0FId1diOztBSy9XSTtFQUNFLGNGTU87QUg0V2I7O0FLblhJO0VBQ0UsY0ZNTztBSGdYYjs7QUt2WEk7RUFD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QTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QVo2bUJGOztBWTFtQkE7RUFDRSw2QkFBQTtBWjZtQkY7QVkzbUJFO0VBSEY7SUFJSSx3QkFBQTtFWjhtQkY7QUFDRjs7QVkzbUJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FaOG1CRjtBWTVtQkU7RUFDRSxnQkFBQTtBWjhtQkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xcbn1cXG5cXG4ubm8tZGlzcGxheSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuW2NvbnRlbnRlZGl0YWJsZV06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNSk7XFxufVxcbltjb250ZW50ZWRpdGFibGVdOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuMzVyZW07XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjg1KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcblxcbi5idG4tLXBhZ2UtLWhlYWRlciB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmJ0bi0taWNvbiB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdCwgLmJ0bi0tY2FuY2VsIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxufVxcbi5idG4tLXN1Ym1pdCB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmJ0bi0tY2FuY2VsLCAuYnRuLS1hZGQge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNDUpO1xcbn1cXG4uYnRuLS1jYW5jZWw6aG92ZXIsIC5idG4tLWNhbmNlbDpob3ZlcjpiZWZvcmUsIC5idG4tLWFkZDpob3ZlciwgLmJ0bi0tYWRkOmhvdmVyOmJlZm9yZSB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43NSk7XFxufVxcbi5idG4tLXNlY3Rpb24ge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmJ0bi0tc2VjdGlvbjpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43NSk7XFxufVxcblxcbi5uYXYtLWhlYWRpbmcge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XFxufVxcblxcbltkYXRhLXRvZ2dsZT1hZGQtcHJvamVjdF0ge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcbltkYXRhLXRvZ2dsZT1hZGQtcHJvamVjdF06aG92ZXIge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5tYWluX19oZWFkZXIgYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4udG8tZG9fX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxufVxcblxcbltuYW1lPXRpdGxlXSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5bbmFtZT1kYXRlXSB7XFxuICBjb2xvcjogIzhlOGU4ZTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnRuLS1zdWJtaXQsXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIHBhZGRpbmc6IDAuMTVyZW0gMC41cmVtO1xcbn1cXG5cXG4uYnRuLS1zdWJtaXQge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG59XFxuLmJ0bi0tc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNyk7XFxufVxcblxcbi5idG4tLWNhbmNlbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4uYnRuLS1hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgadcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXI6YmVmb3JlLCAuYnRuLS1zZWN0aW9uOmhvdmVyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5idG4tLXNlY3Rpb246YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLmJ0bi0tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG5cXG4uYnRuLS1lZGl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYnRuLS1lZGl0OmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuXFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUsIC5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMCAxLjI1cmVtO1xcbn1cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5uYXYgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2X19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZCB7XFxuICBjb2xvcjogI2U3OWE2NztcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogIzVkOTc1YjtcXG59XFxuXFxuLnByaW9yaXR5LW5vbmUge1xcbiAgY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibJcXFwiO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibRcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Es1xcXCI7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNDA0MjllO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWI5OTYzO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOGQ1YTg5O1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29sb3I6ICM3YTdhN2E7XFxufVxcblxcbi5kYXRlLWxhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzk0MjAyMDtcXG59XFxuXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvjKhcXFwiO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYlcXFwiO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29sb3I6ICMzMDVjMzA7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYmI5NGY7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzY2OTc5MTtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWdhcDogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLnRvLWRvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIGF1dG8pL2F1dG8gMWZyIDJyZW07XFxuICAgIGdyaWQtZ2FwOiAwLjVyZW07XFxuICB9XFxuICAudG8tZG9fX2NoZWNrIHtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICB9XFxuICAudG8tZG9fX3ByaW9yaXR5IHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICB9XFxufVxcbi50by1kbzpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLnRvLWRvX19jaGVjayB7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxufVxcbi50by1kbzpob3ZlciAuYnRuLS1lZGl0IHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgbGluZWFyO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LFxcbi5lZGl0X19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxufVxcbi5hZGRfX2NvbnRlbnQtLXRvZG8sXFxuLmVkaXRfX2NvbnRlbnQtLXRvZG8ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG59XFxuLmFkZF9fY29udGVudC0tcHJvamVjdCxcXG4uZWRpdF9fY29udGVudC0tcHJvamVjdCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHBhZGRpbmc6IDAuMTVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcblxcbi5hZGRfX2RldGFpbHMsXFxuLmVkaXRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5hZGRfX3ByaW9yaXR5LFxcbi5lZGl0X19wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hZGRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dLFxcbi5lZGl0X19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTZweDtcXG4gIGxlZnQ6IDE0cHg7XFxufVxcbi5hZGQtcHJpb3JpdHkgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuICAuYWRkLXByaW9yaXR5IHtcXG4gICAgcmlnaHQ6IC0xMHB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbiAgLmFkZC1wcmlvcml0eTpiZWZvcmUge1xcbiAgICByaWdodDogMTVweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG4gIC5hZGQtcHJpb3JpdHk6YWZ0ZXIge1xcbiAgICByaWdodDogMTRweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG59XFxuXFxuLmFkZF9fZmluaXNoLFxcbi5lZGl0X19maW5pc2gge1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhZ2VfX2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiAjMmEyYjY4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwgbGk6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm5hdiB7XFxuICBiYWNrZ3JvdW5kOiAjZWVmMGYxO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4yNSk7XFxuICBwYWRkaW5nOiAycmVtIDAuMjVyZW0gMCAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG59XFxuLm5hdi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG4ubmF2X19jYXRlZ29yeTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNCk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSA+IC5idG4ge1xcbiAgZmxleDogMTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNyk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi5tYWluLS1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjVweCk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubWFpbi0taGlkZGVuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5cXG4uc2VjdGlvbl9fbmFtZV9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zZWN0aW9uX19uYW1lX19jb250YWluZXI6aG92ZXIgLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVwiLFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcblxcdCY6Zm9jdXMge1xcblxcdFxcdG91dGxpbmU6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG4qIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50X193cmFwcGVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiA1MHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0uMjVlbSk7XFxufVxcblxcbi5uby1kaXNwbGF5IHtcXG5cXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVwiLFwiYm9keSxcXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxuICBmb250LXNpemU6IC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS45O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4wNSk7XFxuICB9XFxuXFxuICAmOmZvY3VzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuMzVyZW07XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuODUpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMjVyZW0gLjVyZW07XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gICYtLXBhZ2UtLWhlYWRlciB7XFxuICAgIGNvbG9yOiAkY29sb3ItaGVhZGVyO1xcbiAgfVxcblxcbiAgJi0taWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG5cXG4gICYtLXN1Ym1pdCxcXG4gICYtLWNhbmNlbCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogLjg1ZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAtLjVweDtcXG4gIH1cXG5cXG4gICYtLXN1Ym1pdCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcblxcbiAgJi0tY2FuY2VsLFxcbiAgJi0tYWRkIHtcXG4gICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC40NSk7XFxuXFxuICAgICY6aG92ZXIsXFxuICAgICY6aG92ZXI6YmVmb3JlIHtcXG4gICAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjc1KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJi0tc2VjdGlvbiB7XFxuICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjc1KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBOYXZcXG5cXG4ubmF2IHtcXG4gICYtLWhlYWRpbmcge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMi41O1xcbiAgfVxcbn1cXG5cXG5bZGF0YS10b2dnbGU9XFxcImFkZC1wcm9qZWN0XFxcIl0ge1xcbiAgY29sb3I6IHJnYmEoIzAwMCwgLjc1KTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gIH1cXG5cXG59XFxuXFxuLm1haW5fX2hlYWRlciBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi50by1kb19fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLy8gRm9ybVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbn1cXG5cXG5bbmFtZT1cXFwidGl0bGVcXFwiXSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5bbmFtZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGNvbG9yOiAkY29sb3ItZm9ybTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XCIsXCIvLyBGb250c1xcbiRmb250LXByaW1hcnk6ICdOYW51bSBHb3RoaWMnLCBBcmlhbDtcXG5cXG5cXG4vLyBDb2xvcnNcXG4kY29sb3ItcHJpbWFyeTogcmdiKDQyLCA0MywgMTA0KTtcXG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMjM4LCAyNDAsIDI0MSk7XFxuXFxuJGNvbG9yLWhlYWRlcjogI2ZmZjtcXG4kY29sb3ItcHJvamVjdHM6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4kY29sb3ItZm9ybTogcmdiKDE0MiwgMTQyLCAxNDIpO1xcblxcbiRjb2xvci1wcmlvcml0eTogKFxcbiAgaGlnaDogcmdiKDE2MSwgNjYsIDY2KSxcXG4gIG1lZDogcmdiKDIzMSwgMTU0LCAxMDMpLFxcbiAgbG93OiByZ2IoOTMsIDE1MSwgOTEpLFxcbiAgbm9uZTogcmdiKDE5OSwgMTk5LCAxOTkpXFxuKTtcXG5cXG4kY29sb3ItZGF0ZTogKFxcbiAgYWxsOiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxNSUpLFxcbiAgdG9kYXk6IHJnYigyMzUsIDE1MywgOTkpLFxcbiAgdXBjb21pbmc6IHJnYigxNDEsIDkwLCAxMzcpLFxcbiAgYW55dGltZTogcmdiKDEyMiwgMTIyLCAxMjIpLFxcbiAgbGF0ZTogcmdiKDE0OCwgMzIsIDMyKVxcbik7XFxuXFxuJGNvbG9yLXNvcnQ6IChcXG4gIHRpdGxlOiByZ2IoNDgsIDkyLCA0OCksXFxuICBkZXNjcmlwdGlvbjogcmdiKDIzNSwgMTg1LCA3OSksXFxuICBkYXRlOiByZ2IoMTAyLCAxNTEsIDE0NSksXFxuICBwcmlvcml0eTogbWFwLWdldCgkY29sb3ItcHJpb3JpdHksIGhpZ2gpXFxuKTtcXG5cXG4vLyBJY29uc1xcblxcbiRpY29uLXByaW9yaXR5OiBcXFwiXFxcXGYwMmVcXFwiO1xcblxcbiRpY29ucy1kYXRlOiAoXFxuICBhbGw6IFxcXCJcXFxcZjA3M1xcXCIsXFxuICB0b2RheTogXFxcIlxcXFxmMjcyXFxcIixcXG4gIHVwY29taW5nOiBcXFwiXFxcXGYyNzRcXFwiLFxcbiAgYW55dGltZTogXFxcIlxcXFxmMTMzXFxcIixcXG4pO1xcblxcbiRpY29ucy1jYXJldDogKFxcbiAgdXA6IFxcXCJcXFxcZjBkOFxcXCIsXFxuICBkb3duOiBcXFwiXFxcXGYwZDdcXFwiLFxcbiAgcmlnaHQ6IFxcXCJcXFxcZjBkYVxcXCJcXG4pO1xcblxcbiRpY29ucy1zb3J0OiAoXFxuICB0aXRsZTogXFxcIlxcXFxmMzI4XFxcIixcXG4gIGRlc2NyaXB0aW9uOiBcXFwiXFxcXGYyNDlcXFwiLFxcbiAgZGF0ZTogXFxcIlxcXFxmMDczXFxcIixcXG4gIHByaW9yaXR5OiAkaWNvbi1wcmlvcml0eSxcXG4pO1xcblxcbiRpY29uLWFkZDogXFxcIlxcXFxmMDY3XFxcIjtcXG4kaWNvbi1lZGl0OiBcXFwiXFxcXGYwNDRcXFwiO1xcblxcbi8vIE90aGVyc1xcbiRtYXJnaW4taW5kZW50OiAwIC4yNXJlbSAwIDEuMjVyZW07XCIsXCJidXR0b24ge1xcblxcdGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBcXG4gICY6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uYnRuLS1zdWJtaXQsXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIHBhZGRpbmc6IC4xNXJlbSAuNXJlbTtcXG59XFxuICBcXG4uYnRuLS1zdWJtaXQge1xcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjcpO1xcbiAgfVxcbn1cXG5cXG4uYnRuLS1jYW5jZWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgjZmZmLCAuNSk7XFxufVxcblxcbi5idG4tLWFkZDpiZWZvcmUge1xcbiAgY29udGVudDogJGljb24tYWRkO1xcbiAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcblxcbiAgJjpiZWZvcmUsXFxuICAmOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4yNSk7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICB9XFxuXFxuICAmOmhvdmVyOmJlZm9yZSxcXG4gICY6aG92ZXI6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICB9XFxuXFxuICAmOmJlZm9yZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIH1cXG5cXG4gICY6YWZ0ZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIH1cXG59XFxuXFxuLmJ0bi0tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXFxufVxcblxcbi5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG59XFxuXFxuLmJ0bi0tZWRpdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTVweDtcXG4gIHRvcDogMTBweDtcXG4gIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNzUpO1xcbiAgfVxcblxcbn1cIixcIkBtaXhpbiBmb250LWF3ZXNvbWUtNDAwKCkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbkBtaXhpbiBmb250LWF3ZXNvbWUtNzAwKCkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbkBtaXhpbiBpY29uLWNvbnRlbnQoJHRhcmdldCwgJG1hcCkge1xcbiAgQGVhY2ggJGtleSwgJGljb24gaW4gJG1hcCB7XFxuICAgIC4jeyR0YXJnZXR9LSN7JGtleX06OmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJGljb247XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIGljb24tY29sb3IoJHRhcmdldCwgJG1hcCkge1xcbiAgQGVhY2ggJGtleSwgJGNvbG9yIGluICRtYXAge1xcbiAgICAuI3skdGFyZ2V0fS0jeyRrZXl9OjpiZWZvcmUge1xcbiAgICAgIGNvbG9yOiAkY29sb3I7XFxuICAgIH1cXG4gIH1cXG59XCIsXCIvLyBOQVYtSUNPTlNcXG5cXG4ubmF2IHtcXG4gICZfX3RvLWRvIGxpOmJlZm9yZSxcXG4gICZfX3Byb2plY3RzIGxpOmJlZm9yZSxcXG4gICZfX2ZpbHRlcnMgbGk6YmVmb3JlLFxcbiAgJl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gICAgbWFyZ2luOiAkbWFyZ2luLWluZGVudDtcXG4gIH1cXG5cXG4gICZfX3RvLWRvIGxpOmJlZm9yZSxcXG4gICZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICAgIEBpbmNsdWRlIGZvbnQtYXdlc29tZS00MDAoKTtcXG4gIH1cXG5cXG4gICZfX3Byb2plY3RzIGxpOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgICBjb2xvcjogJGNvbG9yLXByb2plY3RzO1xcbiAgfVxcblxcbiAgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICRpY29uLWFkZDtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbiAgfVxcblxcbiAgJl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMmVcXFwiO1xcbiAgICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNDAwKCk7XFxuICB9XFxufVxcblxcbi8vIENvbG9yIFByaW9yaXR5IEljb25zXFxuQGVhY2ggJGxldmVsLCAkY29sb3IgaW4gJGNvbG9yLXByaW9yaXR5IHtcXG4gIC5wcmlvcml0eS0jeyRsZXZlbH0ge1xcbiAgICBjb2xvcjogJGNvbG9yO1xcbiAgfVxcbn1cXG5cXG4vLyBEYXRlIEljb25zXFxuQGluY2x1ZGUgaWNvbi1jb250ZW50KCdkYXRlJywgJGljb25zLWRhdGUpO1xcbkBpbmNsdWRlIGljb24tY29sb3IoJ2RhdGUnLCAkY29sb3ItZGF0ZSk7XFxuXFxuLy8gQ2F0ZWdvcnkgSWNvbnNcXG4ubmF2LS1oZWFkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBtYXAtZ2V0KCRpY29ucy1jYXJldCwgZG93bik7XFxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxuICBtYXJnaW4tcmlnaHQ6IC43NXJlbTtcXG59XFxuXFxuLy8gU29ydCBJY29uc1xcbkBpbmNsdWRlIGljb24tY29udGVudCgnc29ydCcsICRpY29ucy1zb3J0KTtcXG5AaW5jbHVkZSBpY29uLWNvbG9yKCdzb3J0JywgJGNvbG9yLXNvcnQpO1xcblxcbi8vIE1BSU4gSUNPTlNcXG5cXG4ubWFpbl9faGVhZGVyIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBtYXAtZ2V0KCRpY29ucy1jYXJldCwgZG93bik7XFxuICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxufVwiLFwiLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWdhcDogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IC43NXJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG5cXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCBhdXRvKSAvIGF1dG8gMWZyIDJyZW07XFxuICAgIGdyaWQtZ2FwOiAuNXJlbTtcXG5cXG4gICAgJl9fY2hlY2sge1xcbiAgICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIH1cXG5cXG4gICAgJl9fcHJpb3JpdHkge1xcbiAgICAgIGdyaWQtcm93OiAxO1xcbiAgICB9XFxuICB9XFxuXFxuICAmOmxhc3Qtb2YtdHlwZSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICB9XFxuICBcXG4gICZfX2NoZWNrIHtcXG4gICAgbWFyZ2luLXRvcDogN3B4O1xcbiAgfVxcblxcbiAgJjpob3ZlciAuYnRuLS1lZGl0IHtcXG4gICAgZGlzcGxheTogaW5pdGlhbDtcXG4gIH1cXG5cXG59XCIsXCIuZHJvcGRvd24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zNXMgbGluZWFyO1xcbn1cIixcIi5hZGRfX2NvbnRlbnQsXFxuLmVkaXRfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcblxcbiAgJi0tdG9kbyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xcbiAgfVxcblxcbiAgJi0tcHJvamVjdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIHBhZGRpbmc6IC4xNXJlbTtcXG4gIH1cXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG5bbmFtZT1cXFwidGl0bGVcXFwiXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjEpO1xcbn1cXG5cXG4uYWRkX19kZXRhaWxzLFxcbi5lZGl0X19kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkX19wcmlvcml0eSxcXG4uZWRpdF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICAmOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNXB4O1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgJjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICBsZWZ0OiAxNHB4O1xcbiAgfVxcblxcbiAgbGFiZWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAuNXJlbTtcXG4gIH1cXG5cXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgICByaWdodDogLTEwcHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuXFxuICAgICY6YmVmb3JlIHtcXG4gICAgICByaWdodDogMTVweDtcXG4gICAgICBsZWZ0OiBpbml0aWFsO1xcbiAgICB9XFxuICBcXG4gICAgJjphZnRlciB7XFxuICAgICAgcmlnaHQ6IDE0cHg7XFxuICAgICAgbGVmdDogaW5pdGlhbDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uYWRkX19maW5pc2gsXFxuLmVkaXRfX2ZpbmlzaCB7XFxuICBtYXJnaW46IC41cmVtIDFyZW07XFxufVxcblxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSgjZmZmLCAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsXCIucGFnZV9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6ICRjb2xvci1wcmltYXJ5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBcXG5cXG4gIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgJiBsaTpsYXN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgfVxcbiAgfVxcbn1cIixcIi5uYXYge1xcbiAgXFxuICBiYWNrZ3JvdW5kOiAkY29sb3Itc2Vjb25kYXJ5O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjI1KTtcXG4gIHBhZGRpbmc6IDJyZW0gLjI1cmVtIDAgMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcXG5cXG4gICYtLWhpZGRlbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB9XFxuXFxuICAmX19jYXRlZ29yeSB7XFxuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG5cXG4gICAgJjpsYXN0LW9mLXR5cGUge1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgbGkge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMDQpO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgICAgIH1cXG5cXG4gICAgICA+IC5idG4ge1xcbiAgICAgICAgLy8gTWFrZXMgdGhlIHdob2xlIGxpbmUgY2xpY2thYmxlIGluc3RlYWQgb2YganVzdCB0aGUgdGV4dC5cXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtLWhlYWRpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMDcpO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG59XCIsXCJtYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi5tYWluLS1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjVweCk7XFxuXFxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcXG4gIH1cXG59XFxuXFxuLnNlY3Rpb25fX25hbWVfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgJjpob3ZlciAuYnRuLS1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfSBmcm9tICcuL1Byb2plY3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSAnLi9Qcm9qZWN0TW9kZWwnXG5pbXBvcnQgeyBQcm9qZWN0VmlldyB9IGZyb20gJy4vUHJvamVjdFZpZXcnXG5pbXBvcnQgeyBUb2RvTGlzdENvbnRyb2xsZXIgfSBmcm9tICcuL1RvZG9MaXN0Q29udHJvbGxlcidcbmltcG9ydCB7IFRvZG9MaXN0TW9kZWwgfSBmcm9tICcuL1RvZG9MaXN0TW9kZWwnXG5pbXBvcnQgeyBUb2RvTGlzdFZpZXcgfSBmcm9tICcuL1RvZG9MaXN0VmlldydcblxuZXhwb3J0IGNsYXNzIEFwcENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG5cbiAgICB0aGlzLnZpZXcuYmluZEFkZFByb2plY3QodGhpcy5oYW5kbGVBZGRQcm9qZWN0LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREZWxldGVQcm9qZWN0KHRoaXMuaGFuZGxlRGVsZXRlUHJvamVjdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kQ2hhbmdlTmFtZSh0aGlzLmhhbmRsZUNoYW5nZU5hbWUuYmluZCh0aGlzKSlcblxuICAgIHRoaXMudmlldy5iaW5kTmF2VG9nZ2xlKHRoaXMuaGFuZGxlTmF2VG9nZ2xlLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRUb2dnbGUodGhpcy5oYW5kbGVUb2dnbGUuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERpc3BsYXlBbGwodGhpcy5oYW5kbGVEaXNwbGF5QWxsLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRQcmlvcml0eSh0aGlzLmhhbmRsZVByaW9yaXR5LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREYXRlVG9kYXkodGhpcy5oYW5kbGVUb2RheS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGF0ZVVwY29taW5nKHRoaXMuaGFuZGxlVXBjb21pbmcuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERhdGVBbnl0aW1lKHRoaXMuaGFuZGxlQW55dGltZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kSG9tZSh0aGlzLmhhbmRsZUhvbWUuYmluZCh0aGlzKSlcbiAgfVxuXG4gIC8vIERpc3BsYXkgdGhlIG5ldyBwcm9qZWN0IGFuZCBjcmVhdGUgYSBidXR0b24gbGlua2VkIHRvIHRoZSBwcm9qZWN0IGluIHRoZSBuYXZpZ2F0aW9uLlxuICBoYW5kbGVBZGRQcm9qZWN0IChuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q29udHJvbGxlcihuZXcgUHJvamVjdE1vZGVsKG5hbWUpLCBuZXcgUHJvamVjdFZpZXcoUHJvamVjdE1vZGVsLmNvdW50ZXIpKVxuICAgIHRoaXMubW9kZWwuYWRkUHJvamVjdChwcm9qZWN0KVxuXG4gICAgcHJvamVjdC5tb2RlbC5hZGRUb2RvTGlzdChuZXcgVG9kb0xpc3RDb250cm9sbGVyKG5ldyBUb2RvTGlzdE1vZGVsKCdEZWZhdWx0JywgcHJvamVjdC5tb2RlbC5pZCksIG5ldyBUb2RvTGlzdFZpZXcoKSkpXG4gICAgdGhpcy5kaXNwbGF5UHJvamVjdChwcm9qZWN0KVxuICAgIHRoaXMudmlldy5yZW5kZXJCdG4obmFtZSwgcHJvamVjdC5tb2RlbC5pZClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0PVwicHJvamVjdC0ke3Byb2plY3QubW9kZWwuaWR9XCJdYCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZU5hdkNsaWNrKHByb2plY3QpKVxuICB9XG5cbiAgLy8gTGlua3MgdGhlIG5ld2x5IGNyZWF0ZWQgbmF2aWdhdGlvbiBidXR0b24gdG8gaXRzIHByb2plY3RcbiAgaGFuZGxlTmF2Q2xpY2sgKHByb2plY3QpIHtcbiAgICB0aGlzLmRpc3BsYXlQcm9qZWN0KHByb2plY3QpXG4gIH1cblxuICBkaXNwbGF5UHJvamVjdCAocHJvamVjdCkge1xuICAgIHByb2plY3Qudmlldy5yZW5kZXJOYW1lKHByb2plY3QubW9kZWwubmFtZSwgcHJvamVjdC5tb2RlbC5pZClcbiAgICBwcm9qZWN0LnZpZXcucmVuZGVyKHByb2plY3QubW9kZWwudG9kb0xpc3RzKVxuICAgIHByb2plY3Qudmlldy5yZW5kZXJGb3JtKHByb2plY3QubW9kZWwuZm9ybSlcbiAgICBwcm9qZWN0LnZpZXcuZ2V0Rm9ybSgpXG4gIH1cblxuICAvLyBXaGVuIGEgcHJvamVjdCBpcyBkZWxldGVkLCBpdCBpcyByZW1vdmVkIGZyb20gdGhlIG1vZGVsIGFuZCBmcm9tIHRoZSBuYXZpZ2F0aW9uLlxuICAvLyBUaGUgSG9tZXBhZ2UgaXMgZGlzcGxheWVkIGluc3RlYWQuXG4gIGhhbmRsZURlbGV0ZVByb2plY3QgKGlkKSB7XG4gICAgdGhpcy5tb2RlbC5kZWxldGVQcm9qZWN0KGlkKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByb2plY3Q9XCJwcm9qZWN0LSR7aWR9XCJdYCkucmVtb3ZlKClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0PVwicHJvamVjdC0xXCJdJykuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2VOYW1lIChpZCwgbmFtZSkge1xuICAgIHRoaXMubW9kZWwuZWRpdFByb2plY3QoaWQsIG5hbWUpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZmlsdGVyPVwicHJvamVjdC0ke2lkfVwiXWApLnRleHRDb250ZW50ID0gbmFtZVxuICB9XG5cbiAgLy8gRW5hYmxlIGFsbCB0b2dnbGUgYnV0dG9uc1xuICBoYW5kbGVUb2dnbGUgKGV2ZW50KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQudG9nZ2xlfWApLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gIH1cblxuICAvLyBNb2RpZnkgc3BhY2Ugb2NjdXBpZWQgYnkgY29udGVudCB3aGVuIHRoZSBuYXZpZ2F0aW9uIGlzIGhpZGRlbiAvIGRpc3BsYXllZC5cbiAgaGFuZGxlTmF2VG9nZ2xlICgpIHtcbiAgICB0aGlzLnZpZXcubmF2LmNsYXNzTGlzdC50b2dnbGUoJ25hdi0taGlkZGVuJylcbiAgICB0aGlzLnZpZXcubWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdtYWluLS1oaWRkZW4nKVxuICB9XG5cbiAgLy8gRW5hYmxlIHByaW9yaXR5IGZpbHRlcnNcbiAgaGFuZGxlUHJpb3JpdHkgKHByaW9yaXR5KSB7XG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8nKVxuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICBpZiAodG9kby5kYXRhc2V0LnByaW9yaXR5ICE9PSBwcmlvcml0eSkge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ25vLWRpc3BsYXknKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRoYXQgY29tcGFyZXMgMiBkYXlzICh1c2VkIGZvciBkYXRlIGZpbHRlcnMpXG4gIF9zYW1lRGF5IChkYXRlMSwgZGF0ZTIpIHtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IG5ldyBEYXRlKGRhdGUxKVxuICAgIGlmICh0b2RvRGF0ZS5nZXREYXRlKCkgPT09IGRhdGUyLmdldERhdGUoKSAmJlxuICAgIHRvZG9EYXRlLmdldE1vbnRoKCkgPT09IGRhdGUyLmdldE1vbnRoKCkgJiZcbiAgICB0b2RvRGF0ZS5nZXRGdWxsWWVhcigpID09PSBkYXRlMi5nZXRGdWxsWWVhcigpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIERhdGVzIGZpbHRlcnNcbiAgaGFuZGxlVG9kYXkgKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgaWYgKHRoaXMuX3NhbWVEYXkodG9kby5kYXRhc2V0LmRhdGUsIHRvZGF5KSkge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ25vLWRpc3BsYXknKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlVXBjb21pbmcgKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgaWYgKCF0aGlzLl9zYW1lRGF5KHRvZG8uZGF0YXNldC5kYXRlLCB0b2RheSkgJiYgbmV3IERhdGUodG9kby5kYXRhc2V0LmRhdGUpID4gdG9kYXkpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUFueXRpbWUgKCkge1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgaWYgKHRvZG8uZGF0YXNldC5kYXRlICE9PSAnJykge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ25vLWRpc3BsYXknKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gRGlzYWJsZSBmaWx0ZXJzXG4gIGhhbmRsZURpc3BsYXlBbGwgKCkge1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4gdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JykpXG4gIH1cblxuICAvLyBIb21lIHBhZ2VcbiAgaGFuZGxlSG9tZSAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdD1cInByb2plY3QtMVwiXScpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQXBwTW9kZWwge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdXG4gIH1cblxuICBhZGRQcm9qZWN0IChwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gICAgcHJvamVjdC5pZCA9ICsrQXBwTW9kZWwuY291bnRlclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBcHBDb3VudGVyJywgQXBwTW9kZWwuY291bnRlcilcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QgKGlkKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gaWQpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cykpXG4gIH1cblxuICBlZGl0UHJvamVjdCAoaWQsIG5hbWUpIHtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0Lm1vZGVsLmlkID09PSAraWQpIHtcbiAgICAgICAgcHJvamVjdC5tb2RlbC5uYW1lID0gbmFtZVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RzKSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9qZWN0XG4gICAgfSlcbiAgfVxufVxuXG5BcHBNb2RlbC5jb3VudGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQXBwQ291bnRlcicpKSB8fCAwXG4iLCJleHBvcnQgY2xhc3MgQXBwVmlldyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICB0aGlzLmhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1ob21lJylcbiAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcblxuICAgIC8vIEZvcm0gdG8gY3JlYXRlIG5ldyBwcm9qZWN0c1xuICAgIHRoaXMucHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC0tcHJvamVjdCBbbmFtZT1cIm5hbWVcIl0nKVxuICAgIHRoaXMucHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtLXByb2plY3QnKVxuXG4gICAgLy8gU29ydCB0YXNrc1xuICAgIHRoaXMuc29ydFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtdGl0bGUnKVxuICAgIHRoaXMuc29ydERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtZGVzY3JpcHRpb24nKVxuICAgIHRoaXMuc29ydERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1kYXRlJylcbiAgICB0aGlzLnNvcnRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LXByaW9yaXR5JylcblxuICAgIC8vIEZpbHRlciB0YXNrc1xuICAgIHRoaXMuZGlzcGxheUFsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZpbHRlcj1cImFsbFwiXScpXG4gICAgdGhpcy5wcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZpbHRlcl49XCJwcmlvcml0eVwiXScpXG4gICAgdGhpcy5kYXRlVG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1maWx0ZXI9XCJkYXRlLXRvZGF5XCJdJylcbiAgICB0aGlzLmRhdGVVcGNvbWluZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbHRlcj1cImRhdGUtdXBjb21pbmdcIl0nKVxuICAgIHRoaXMuZGF0ZUFueXRpbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1maWx0ZXI9XCJkYXRlLWFueXRpbWVcIl0nKVxuXG4gICAgLy8gVG9nZ2xlIE5hdmlnYXRpb25cbiAgICB0aGlzLm5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZ2dsZT1cIm5hdlwiXScpXG4gICAgdGhpcy5uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JylcblxuICAgIC8vIEVkaXQgUHJvamVjdCBOYW1lXG4gICAgdGhpcy5fdGVtcG9yYXJ5TmFtZVxuICAgIHRoaXMuX2NoYW5nZU5hbWUoKVxuICB9XG5cbiAgLy8gR2V0IG5ldyBwcm9qZWN0J3MgbmFtZVxuICBnZXQgX3Byb2plY3ROYW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0SW5wdXQudmFsdWVcbiAgfVxuXG4gIC8vIFJlc2V0IElucHV0IHRvIGNyZWF0ZSBhIG5ldyBwcm9qZWN0XG4gIF9yZXNldElucHV0ICgpIHtcbiAgICB0aGlzLnByb2plY3RJbnB1dC52YWx1ZSA9ICcnXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIG5hdmlnYXRpb24gYnV0dG9uIGxpbmtlZCB0byB0aGUgcHJvamVjdFxuICByZW5kZXJCdG4gKG5hbWUsIGlkKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGkuY2xhc3NMaXN0LmFkZCgnYnRuLS1wcm9qZWN0JylcbiAgICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIGBwcm9qZWN0LSR7aWR9YClcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWZpbHRlcicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJywgYHByb2plY3QtJHtpZH1gKVxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBuYW1lXG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLS1kZWxldGUnKVxuICAgIGNsb3NlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGNsb3NlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT4nXG5cbiAgICBsaS5hcHBlbmQoYnV0dG9uLCBjbG9zZUJ0bilcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS5hcHBlbmQobGkpXG4gIH1cblxuICBiaW5kQWRkUHJvamVjdCAoaGFuZGxlcikge1xuICAgIHRoaXMucHJvamVjdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGhhbmRsZXIodGhpcy5fcHJvamVjdE5hbWUpXG4gICAgICB0aGlzLl9yZXNldElucHV0KClcbiAgICB9KVxuICB9XG5cbiAgYmluZERlbGV0ZVByb2plY3QgKGhhbmRsZXIpIHtcbiAgICB0aGlzLm5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykpIHJldHVyblxuXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLS1kZWxldGUnKSkge1xuICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdsaScpLmRhdGFzZXQucHJvamVjdC5zbGljZSg4KVxuICAgICAgICBoYW5kbGVyKGlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBOYXZpZ2F0aW9uIHRvZ2dsZXNcbiAgYmluZFRvZ2dsZSAoaGFuZGxlcikge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuZGF0YXNldC50b2dnbGUpIHtcbiAgICAgICAgaGFuZGxlcihldmVudClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmluZE5hdlRvZ2dsZSAoaGFuZGxlcikge1xuICAgIHRoaXMubmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbiAgfVxuXG4gIC8vIEhvbWUgcGFnZVxuICBiaW5kSG9tZSAoaGFuZGxlcikge1xuICAgIHRoaXMuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICAvLyBGaWx0ZXJzXG4gIGJpbmRQcmlvcml0eSAoaGFuZGxlcikge1xuICAgIHRoaXMucHJpb3JpdHlCdG4uZm9yRWFjaCgocHJpb3JpdHlCdG4pID0+IHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiBoYW5kbGVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LmZpbHRlci5zbGljZSg5KSkpKVxuICB9XG5cbiAgYmluZERhdGVUb2RheSAoaGFuZGxlcikge1xuICAgIHRoaXMuZGF0ZVRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbiAgfVxuXG4gIGJpbmREYXRlVXBjb21pbmcgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmRhdGVVcGNvbWluZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBiaW5kRGF0ZUFueXRpbWUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmRhdGVBbnl0aW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbiAgfVxuXG4gIGJpbmREaXNwbGF5QWxsIChoYW5kbGVyKSB7XG4gICAgdGhpcy5kaXNwbGF5QWxsQnRuLmZvckVhY2goKGRpc3BsYXlBbGxCdG4pID0+IGRpc3BsYXlBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKSlcbiAgfVxuXG4gIC8vIEVkaXQgUHJvamVjdCBOYW1lXG5cbiAgX2NoYW5nZU5hbWUgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdF9fbmFtZScpKSB7XG4gICAgICAgIHRoaXMuX3RlbXBvcmFyeU5hbWUgPSBldmVudC50YXJnZXQuaW5uZXJIVE1MXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmRDaGFuZ2VOYW1lIChoYW5kbGVyKSB7XG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLl90ZW1wb3JhcnlOYW1lKSB7XG4gICAgICAgIGhhbmRsZXIoZXZlbnQudGFyZ2V0LmlkLCB0aGlzLl90ZW1wb3JhcnlOYW1lKVxuICAgICAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gJydcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUHJvamVjdENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5vblByb2plY3RDaGFuZ2UodGhpcy5tb2RlbC50b2RvTGlzdHMpXG4gICAgdGhpcy5tb2RlbC5iaW5kUHJvamVjdENoYW5nZSh0aGlzLm9uUHJvamVjdENoYW5nZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kQ2hhbmdlTmFtZSh0aGlzLmhhbmRsZUVkaXRUb2RvTGlzdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGVsZXRlU2VjdGlvbih0aGlzLmhhbmRsZURlbGV0ZVRvZG9MaXN0LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRBZGRTZWN0aW9uKHRoaXMuaGFuZGxlQWRkVG9kb0xpc3QuYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9uUHJvamVjdENoYW5nZSAodG9kb0xpc3RzKSB7XG4gICAgdGhpcy52aWV3LnJlbmRlcih0b2RvTGlzdHMpXG4gIH1cblxuICBoYW5kbGVBZGRUb2RvTGlzdCAodG9kb0xpc3QpIHtcbiAgICB0aGlzLm1vZGVsLmFkZFRvZG9MaXN0KHRvZG9MaXN0KVxuICB9XG5cbiAgaGFuZGxlRGVsZXRlVG9kb0xpc3QgKGlkKSB7XG4gICAgdGhpcy5tb2RlbC5kZWxldGVUb2RvTGlzdChpZClcbiAgfVxuXG4gIGhhbmRsZUVkaXRUb2RvTGlzdCAoaWQsIG5hbWUpIHtcbiAgICB0aGlzLm1vZGVsLmVkaXRUb2RvTGlzdChpZCwgbmFtZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2VjdGlvbkZvcm0gfSBmcm9tICcuL1NlY3Rpb25Gb3JtJ1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdE1vZGVsIHtcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lID09PSAnJyA/ICdVbnRpdGxlZCcgOiBuYW1lXG4gICAgdGhpcy5pZCA9ICsrUHJvamVjdE1vZGVsLmNvdW50ZXJcbiAgICB0aGlzLnRvZG9MaXN0cyA9IFtdXG4gICAgdGhpcy5mb3JtID0gbmV3IFNlY3Rpb25Gb3JtKHRoaXMuaWQpXG4gIH1cblxuICBfY2hlY2tTdG9yYWdlICgpIHtcbiAgICBpZiAoIUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gdGhpcy5pZClbMF0pIHtcbiAgICAgIHRoaXMudG9kb0xpc3RzID0gW11cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXG4gICAgICAgIC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHRoaXMuaWQpWzBdXG4gICAgICAgIC5tb2RlbFxuICAgICAgICAudG9kb0xpc3RzIHx8IFtdXG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVN0b3JhZ2UgKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgJ3Byb2plY3RzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKVxuICAgICAgICAgIC5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmlkID09PSB0aGlzLmlkKSB7XG4gICAgICAgICAgICAgIHByb2plY3QubW9kZWwudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0XG4gICAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gIH1cblxuICBfY29tbWl0ICh0b2RvTGlzdHMpIHtcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0b2RvTGlzdHMpXG4gICAgdGhpcy5fdXBkYXRlU3RvcmFnZSgpXG4gIH1cblxuICBhZGRUb2RvTGlzdCAodG9kb0xpc3QpIHtcbiAgICB0aGlzLnRvZG9MaXN0cy5wdXNoKHRvZG9MaXN0KVxuICAgIHRvZG9MaXN0LmlkID0gdGhpcy50b2RvTGlzdHMubGVuZ3RoXG4gICAgdGhpcy5fY29tbWl0KHRoaXMudG9kb0xpc3RzKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdQcm9qZWN0Q291bnRlcicsIFByb2plY3RNb2RlbC5jb3VudGVyKVxuICB9XG5cbiAgZWRpdFRvZG9MaXN0IChpZCwgbmFtZSkge1xuICAgIHRoaXMudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHMubWFwKCh0b2RvTGlzdCkgPT4ge1xuICAgICAgaWYgKHRvZG9MaXN0Lm1vZGVsLmlkID09PSAraWQpIHtcbiAgICAgICAgdG9kb0xpc3QubW9kZWwubmFtZSA9IG5hbWVcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2RvTGlzdFxuICAgIH0pXG4gICAgdGhpcy5fY29tbWl0KHRoaXMudG9kb0xpc3RzKVxuICB9XG5cbiAgZGVsZXRlVG9kb0xpc3QgKGlkKSB7XG4gICAgdGhpcy50b2RvTGlzdHMgPSB0aGlzLnRvZG9MaXN0cy5maWx0ZXIodG9kb0xpc3QgPT4gdG9kb0xpc3QubW9kZWwuaWQgIT09ICtpZClcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvTGlzdHMpXG4gIH1cblxuICBiaW5kUHJvamVjdENoYW5nZSAoY2FsbGJhY2spIHtcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSA9IGNhbGxiYWNrXG4gIH1cbn1cblxuUHJvamVjdE1vZGVsLmNvdW50ZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0Q291bnRlcicpKSB8fCAwXG4iLCJpbXBvcnQgeyBUb2RvTGlzdENvbnRyb2xsZXIgfSBmcm9tICcuL1RvZG9MaXN0Q29udHJvbGxlcidcbmltcG9ydCB7IFRvZG9MaXN0TW9kZWwgfSBmcm9tICcuL1RvZG9MaXN0TW9kZWwnXG5pbXBvcnQgeyBUb2RvTGlzdFZpZXcgfSBmcm9tICcuL1RvZG9MaXN0VmlldydcbmltcG9ydCB7IFByb2plY3RNb2RlbCB9IGZyb20gJy4vUHJvamVjdE1vZGVsJ1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdFZpZXcge1xuICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICB0aGlzLnNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25zJylcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fbmFtZScpXG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5fdGVtcG9yYXJ5TmFtZSA9ICcnXG4gICAgdGhpcy5fY2hhbmdlTmFtZSgpXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIG5hbWUgb2YgdGhlIHByb2plY3RcbiAgcmVuZGVyTmFtZSAobmFtZSwgaWQpIHtcbiAgICB0aGlzLm5hbWUuaW5uZXJIVE1MID0gbmFtZVxuICAgIHRoaXMubmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIGFkZCBzZWN0aW9uIGZvcm1cbiAgcmVuZGVyRm9ybSAoZm9ybSkge1xuICAgIGZvcm0ucmVuZGVyKClcbiAgfVxuXG4gIC8vIEdldCB0aGUgYWRkIHNlY3Rpb24gZm9ybSBpbnB1dHNcbiAgZ2V0Rm9ybSAoKSB7XG4gICAgdGhpcy5uYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH0gW25hbWU9XCJzZWN0aW9uXCJdYClcbiAgICB0aGlzLnN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfSAuYnRuLS1zdWJtaXRgKVxuICB9XG5cbiAgLy8gR2V0IFNlY3Rpb24ncyBOYW1lIGZyb20gdGhlIGZvcm1cbiAgZ2V0IF9zZWN0aW9uTmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZUlucHV0LnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBmb3JtIGlucHV0XG4gIF9yZXNldElucHV0ICgpIHtcbiAgICB0aGlzLm5hbWVJbnB1dC52YWx1ZSA9ICcnXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHByb2plY3QgYnkgcmVuZGVyaW5nIGV2ZXJ5IHNlY3Rpb25cbiAgcmVuZGVyICh0b2RvTGlzdHMpIHtcbiAgICB3aGlsZSAodGhpcy5zZWN0aW9ucy5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnNlY3Rpb25zLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHRvZG9MaXN0IG9mIHRvZG9MaXN0cykge1xuICAgICAgdG9kb0xpc3Qudmlldy5jcmVhdGVTZWN0aW9uKClcbiAgICAgIHRvZG9MaXN0LnZpZXcucmVuZGVyTmFtZSh0b2RvTGlzdC5tb2RlbC5uYW1lKVxuICAgICAgdG9kb0xpc3Qudmlldy5yZW5kZXIodG9kb0xpc3QubW9kZWwudG9kb3MpXG4gICAgICB0b2RvTGlzdC52aWV3LnJlbmRlckZvcm0odG9kb0xpc3QubW9kZWwuZm9ybSlcbiAgICAgIHRvZG9MaXN0LnZpZXcuZ2V0Rm9ybSh0b2RvTGlzdC5tb2RlbC5mb3JtKVxuICAgICAgdG9kb0xpc3QuYmluZEFkZCgpXG4gICAgfVxuICB9XG5cbiAgLy8gQWxsb3cgc2VjdGlvbiBuYW1lIGVkaXRzXG4gIF9jaGFuZ2VOYW1lICgpIHtcbiAgICB0aGlzLnNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlY3Rpb25fX25hbWUnKSkge1xuICAgICAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kQ2hhbmdlTmFtZSAoaGFuZGxlcikge1xuICAgIHRoaXMuc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fdGVtcG9yYXJ5TmFtZSkge1xuICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbY2xhc3NePVwic2VjdGlvbi1cIl0nKS5jbGFzc0xpc3RbMF0uc2xpY2UoOClcbiAgICAgICAgaGFuZGxlcihpZCwgdGhpcy5fdGVtcG9yYXJ5TmFtZSlcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5TmFtZSA9ICcnXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmRBZGRTZWN0aW9uIChoYW5kbGVyKSB7XG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkLS1zZWN0aW9uJykpIHtcbiAgICAgICAgaGFuZGxlcihuZXcgVG9kb0xpc3RDb250cm9sbGVyKG5ldyBUb2RvTGlzdE1vZGVsKHRoaXMuX3NlY3Rpb25OYW1lLCBQcm9qZWN0TW9kZWwuY291bnRlciksIG5ldyBUb2RvTGlzdFZpZXcoUHJvamVjdE1vZGVsLmNvdW50ZXIpKSlcbiAgICAgICAgdGhpcy5fcmVzZXRJbnB1dCgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmREZWxldGVTZWN0aW9uIChoYW5kbGVyKSB7XG4gICAgdGhpcy5zZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYnRuLS1kZWxldGUnKSkge1xuICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYnRuLS1kZWxldGUnKS5kYXRhc2V0LmRlbGV0ZVxuICAgICAgICBoYW5kbGVyKGlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTZWN0aW9uRm9ybSB7XG4gIGNvbnN0cnVjdG9yIChpZCkge1xuICAgIHRoaXMuaWQgPSBpZFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZF9fc2VjdGlvbicpXG4gICAgZm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZm9ybUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1kcm9wZG93bicsICdidG4tLXNlY3Rpb24nKVxuICAgIGZvcm1CdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYHNlY3Rpb24tZm9ybS0ke3RoaXMuaWR9YClcbiAgICBmb3JtQnRuLmlubmVySFRNTCA9ICdBZGQgU2VjdGlvbidcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZCcsICdhZGQtLXNlY3Rpb24nLCAnZHJvcGRvd24nLCAnaGlkZGVuJylcbiAgICBmb3JtLmlkID0gYHNlY3Rpb24tZm9ybS0ke3RoaXMuaWR9YFxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdhZGRfX2NvbnRlbnQnLCAnYWRkX19jb250ZW50LS1zZWN0aW9uJylcblxuICAgIGNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIG5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3NlY3Rpb24nKVxuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWN0aW9uXFwncyBOYW1lJylcbiAgICBsYWJlbE5hbWUuYXBwZW5kKG5hbWUpXG4gICAgY29udGVudC5hcHBlbmQobGFiZWxOYW1lKVxuXG4gICAgY29uc3QgZmluaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmaW5pc2guY2xhc3NMaXN0LmFkZCgnYWRkX19maW5pc2gnKVxuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1hZGQnLCAnc2VjdGlvbicpXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLXN1Ym1pdCcpXG4gICAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdBZGQgU2VjdGlvbidcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYHNlY3Rpb24tZm9ybS0ke3RoaXMuaWR9YClcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tY2FuY2VsJylcbiAgICBjYW5jZWxCdG4uaW5uZXJIVE1MID0gJ0NhbmNlbCdcblxuICAgIGZpbmlzaC5hcHBlbmQoc3VibWl0QnRuLCBjYW5jZWxCdG4pXG4gICAgZm9ybS5hcHBlbmQoY29udGVudCwgZmluaXNoKVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kKGZvcm1CdG4sIGZvcm0pXG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9Gb3JtIH0gZnJvbSAnLi9Ub2RvRm9ybSdcblxuZXhwb3J0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlID0gJycsIHByaW9yaXR5ID0gJ25vbmUnKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kYXRlID0gZGF0ZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgIHRoaXMuaWQgPSArK1RvZG8uY291bnRlclxuICAgIHRoaXMuZWRpdEZvcm0gPSBuZXcgVG9kb0Zvcm0oJ2VkaXQnLCB0aGlzLmlkKVxuICB9XG5cbiAgcmVuZGVyIChjb250YWluZXIpIHtcbiAgICB0aGlzLnRvZG9FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLnRvZG9FbGVtLmNsYXNzTGlzdC5hZGQoJ3RvLWRvJylcbiAgICB0aGlzLnRvZG9FbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1kYXRlJywgdGhpcy5kYXRlKVxuICAgIHRoaXMudG9kb0VsZW0uc2V0QXR0cmlidXRlKCdkYXRhLXByaW9yaXR5JywgdGhpcy5wcmlvcml0eSlcbiAgICB0aGlzLnRvZG9FbGVtLmlkID0gdGhpcy5pZFxuXG4gICAgY29uc3QgdG9kb0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRvZG9DaGVjay5jbGFzc0xpc3QuYWRkKCd0by1kb19fY2hlY2snKVxuICAgIHRvZG9DaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHRoaXMudG9kb0VsZW0uYXBwZW5kKHRvZG9DaGVjaylcblxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ2RhdGUnXVxuICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGNvbXBvbmVudHMpIHtcbiAgICAgIGNvbnN0IHRvZG9Db21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdG9kb0NvbXBvbmVudC5jbGFzc0xpc3QuYWRkKGB0by1kb19fJHtjb21wb25lbnR9YClcbiAgICAgIHRvZG9Db21wb25lbnQuaW5uZXJIVE1MID0gdGhpc1tjb21wb25lbnRdXG4gICAgICB0aGlzLnRvZG9FbGVtLmFwcGVuZCh0b2RvQ29tcG9uZW50KVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvLWRvX19wcmlvcml0eScsIGBwcmlvcml0eS0ke3RoaXMucHJpb3JpdHl9YClcbiAgICB0b2RvUHJpb3JpdHkuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWJvb2ttYXJrXCI+PC9pPidcbiAgICB0aGlzLnRvZG9FbGVtLmFwcGVuZCh0b2RvUHJpb3JpdHkpXG5cbiAgICB0aGlzLnRvZG9FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0aGlzLnRvZG9FZGl0LmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLXRvZ2dsZScsICdidG4tLWVkaXQnKVxuICAgIHRoaXMudG9kb0VkaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgdGhpcy50b2RvRWRpdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYGVkaXQtdG9kby0ke3RoaXMuaWR9YClcbiAgICB0aGlzLnRvZG9FZGl0LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1wZW5jaWwtYWx0XCI+PC9pPidcbiAgICB0aGlzLnRvZG9FbGVtLmFwcGVuZCh0aGlzLnRvZG9FZGl0KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLnRvZG9FbGVtKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUb2RvQ291bnRlcicsIFRvZG8uY291bnRlcilcbiAgfVxufVxuXG5Ub2RvLmNvdW50ZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb2RvQ291bnRlcicpKSB8fCAwXG4iLCJleHBvcnQgY2xhc3MgVG9kb0Zvcm0ge1xuICBjb25zdHJ1Y3RvciAoZ29hbCwgaWQpIHtcbiAgICB0aGlzLmdvYWwgPSBnb2FsXG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICBfcmVuZGVyRm9ybSAoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9LS10b2RvYCwgJ3RvZG8tZm9ybScsICdkcm9wZG93bicpXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5nb2FsfS10b2RvLSR7dGhpcy5pZH1gKVxuXG4gICAgaWYgKHRoaXMuZ29hbCA9PT0gJ2FkZCcpIHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfV9fY29udGVudGAsIGAke3RoaXMuZ29hbH1fX2NvbnRlbnQtLXRvZG9gKVxuXG4gICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJylcbiAgICBsYWJlbFRpdGxlLmFwcGVuZCh0aXRsZSlcblxuICAgIGNvbnN0IGxhYmVsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJylcbiAgICBsYWJlbERlc2NyaXB0aW9uLmFwcGVuZChkZXNjcmlwdGlvbilcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9X19kZXRhaWxzYClcblxuICAgIGNvbnN0IGxhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKVxuICAgIGxhYmVsRGF0ZS5hcHBlbmQoZGF0ZSlcblxuICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGRfX3ByaW9yaXR5JylcbiAgICB0aGlzLnByaW9yaXR5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0aGlzLnByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHRoaXMucHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBhZGQtcHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgdGhpcy5wcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS10b2dnbGUnKVxuICAgIHRoaXMucHJpb3JpdHlCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWJvb2ttYXJrXCI+PC9pPidcblxuICAgIGNvbnN0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByaW9yaXRpZXMuY2xhc3NMaXN0LmFkZCgnYWRkLXByaW9yaXR5JywgJ2Ryb3Bkb3duJywgJ2hpZGRlbicpXG4gICAgcHJpb3JpdGllcy5zZXRBdHRyaWJ1dGUoJ2lkJywgYGFkZC1wcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICBjb25zdCBwcmlvcml0aWVzTGlzdCA9IFsnaGlnaCcsICdtZWQnLCAnbG93JywgJ25vbmUnXVxuXG4gICAgZm9yIChjb25zdCBwcmlvcml0eSBvZiBwcmlvcml0aWVzTGlzdCkge1xuICAgICAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCBgcHJpb3JpdHktJHtwcmlvcml0eX0tJHt0aGlzLmlkfWApXG4gICAgICBsYWJlbFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LSR7cHJpb3JpdHl9YCwgYHByaW9yaXR5LSR7dGhpcy5pZH1gKVxuICAgICAgbGFiZWxQcmlvcml0eS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuXG4gICAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJpb3JpdHkpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJpb3JpdHktJHtwcmlvcml0eX0tJHt0aGlzLmlkfWApXG5cbiAgICAgIGlmIChwcmlvcml0eSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgcHJpb3JpdGllcy5hcHBlbmQobGFiZWxQcmlvcml0eSwgaW5wdXRQcmlvcml0eSlcbiAgICB9XG5cbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmQodGhpcy5wcmlvcml0eUJ0biwgcHJpb3JpdGllcylcblxuICAgIGNvbnN0IGZpbmlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmluaXNoLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfV9fZmluaXNoYClcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1zdWJtaXQnKVxuICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSBgJHt0aGlzLmdvYWwudG9VcHBlckNhc2UoKS5zbGljZSgwLCAxKSArIHRoaXMuZ29hbC5zbGljZSgxKX0gVGFza2BcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYCR7dGhpcy5nb2FsfS10b2RvLSR7dGhpcy5pZH1gKVxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1jYW5jZWwnKVxuICAgIGNhbmNlbEJ0bi5pbm5lckhUTUwgPSAnQ2FuY2VsJ1xuXG4gICAgZmluaXNoLmFwcGVuZChzdWJtaXRCdG4sIGNhbmNlbEJ0bilcbiAgICBjb250ZW50LmFwcGVuZChsYWJlbFRpdGxlLCBsYWJlbERlc2NyaXB0aW9uLCBkZXRhaWxzKVxuICAgIGRldGFpbHMuYXBwZW5kKGxhYmVsRGF0ZSwgcHJpb3JpdHlDb250YWluZXIpXG4gICAgZm9ybS5hcHBlbmQoY29udGVudCwgZmluaXNoKVxuXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIHJlbmRlckFkZCAoY29udGFpbmVyKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH1fX3RvZG9gKVxuXG4gICAgdGhpcy5mb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0aGlzLmZvcm1CdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tZHJvcGRvd24nLCBgYnRuLS0ke3RoaXMuZ29hbH1gKVxuICAgIHRoaXMuZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLmZvcm1CdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGAke3RoaXMuZ29hbH0tdG9kby0ke3RoaXMuaWR9YClcbiAgICB0aGlzLmZvcm1CdG4uaW5uZXJIVE1MID0gYCR7dGhpcy5nb2FsLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLmdvYWwuc2xpY2UoMSl9IFRhc2tgXG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZCh0aGlzLmZvcm1CdG4sIHRoaXMuX3JlbmRlckZvcm0oKSlcbiAgICBjb250YWluZXIuYXBwZW5kKGZvcm1Db250YWluZXIpXG5cbiAgICB0aGlzLl9pbml0UHJpb3JpdHlUb2dnbGUoKVxuICAgIHRoaXMuX2luaXRQcmlvcml0eUxhYmVscygpXG4gIH1cblxuICByZW5kZXJFZGl0IChiZWZvcmUpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfV9fdG9kb2ApXG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZCh0aGlzLl9yZW5kZXJGb3JtKCkpXG4gICAgYmVmb3JlLmFmdGVyKGZvcm1Db250YWluZXIpXG5cbiAgICB0aGlzLl9pbml0UHJpb3JpdHlUb2dnbGUoKVxuICAgIHRoaXMuX2luaXRQcmlvcml0eUxhYmVscygpXG4gIH1cblxuICAvLyBFbmFibGUgcHJpb3JpdHkgdG9nZ2xlIGFuZCBjb2xvciBjaGFuZ2Ugd2hlbiBzZWxlY3RpbmcgYSBwcmlvcml0eVxuXG4gIF9pbml0UHJpb3JpdHlUb2dnbGUgKCkge1xuICAgIHRoaXMucHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnByaW9yaXR5QnRuLmRhdGFzZXQudG9nZ2xlfWApLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpKVxuICB9XG5cbiAgX2luaXRQcmlvcml0eUxhYmVscyAoKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgdGhpcy5sYWJlbHMuZm9yRWFjaChsYWJlbCA9PiBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGQtcHJpb3JpdHktJHt0aGlzLmlkfWApLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2dnbGU9XCJhZGQtcHJpb3JpdHktJHt0aGlzLmlkfVwiXWApLnN0eWxlLmNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQuY2xvc2VzdCgnbGFiZWwnKSkuY29sb3JcbiAgICB9KSlcbiAgfVxuXG4gIC8vIFJlc2V0IHByaW9yaXR5IGNvbG9yIHdoZW4gYWRkaW5nIGEgdGFza1xuXG4gIF9pbml0UmVzZXRQcmlvcml0eSAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZC10b2RvLSR7dGhpcy5pZH0gLmJ0bi0tc3VibWl0YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2dnbGU9XCJhZGQtcHJpb3JpdHktJHt0aGlzLmlkfVwiXWApLnN0eWxlLmNvbG9yID0gJydcbiAgICB9KVxuICB9XG59XG5cblRvZG9Gb3JtLmNvdW50ZXIgPSAwXG4iLCJpbXBvcnQgeyBUb2RvRm9ybSB9IGZyb20gJy4vVG9kb0Zvcm0nXG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlKHRoaXMubW9kZWwudG9kb3MpXG4gICAgdGhpcy5tb2RlbC5iaW5kVG9kb0xpc3RDaGFuZ2UodGhpcy5vblRvZG9MaXN0Q2hhbmdlLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREZWxldGVUb2RvKHRoaXMuaGFuZGxlRGVsZXRlVG9kby5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kT3BlbkVkaXQodGhpcy5oYW5kbGVPcGVuRWRpdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRWRpdFRvZG8odGhpcy5oYW5kbGVFZGl0VG9kby5iaW5kKHRoaXMpKVxuICB9XG5cbiAgb25Ub2RvTGlzdENoYW5nZSAodG9kb3MpIHtcbiAgICB0aGlzLnZpZXcucmVuZGVyKHRvZG9zKVxuICB9XG5cbiAgaGFuZGxlQWRkVG9kbyAodG9kbykge1xuICAgIHRoaXMubW9kZWwuYWRkVG9kbyh0b2RvKVxuICB9XG5cbiAgaGFuZGxlRWRpdFRvZG8gKHVwZGF0ZWRUb2RvLCBpZCkge1xuICAgIHRoaXMubW9kZWwuZWRpdFRvZG8odXBkYXRlZFRvZG8sIGlkKVxuICB9XG5cbiAgaGFuZGxlRGVsZXRlVG9kbyAoaWQpIHtcbiAgICB0aGlzLm1vZGVsLmRlbGV0ZVRvZG8oaWQpXG4gIH1cblxuICBoYW5kbGVPcGVuRWRpdCAoaWQpIHtcbiAgICAvLyBVc2VyIGNhbiBvbmx5IGVkaXQgb25lIHRhc2sgYXQgYSB0aW1lLCBzbyBpZiB0aGVyZSBpcyBhbm90aGVyIEVkaXQgRm9ybSBvcGVuLCBpdCBpcyBjbG9zZWQuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0nKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImVkaXQtdG9kb1wiXScpLnJlbW92ZSgpXG4gICAgfVxuICAgIG5ldyBUb2RvRm9ybSgnZWRpdCcsIGlkKS5yZW5kZXJFZGl0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50by1kb1tpZD1cIiR7aWR9XCJdYCkpXG4gICAgdGhpcy52aWV3LmdldEVkaXRGb3JtKGlkKVxuICAgIHRoaXMudmlldy5zZXRFZGl0Rm9ybShpZClcbiAgfVxuXG4gIGJpbmRBZGQgKCkge1xuICAgIHRoaXMudmlldy5iaW5kQWRkVG9kbyh0aGlzLmhhbmRsZUFkZFRvZG8uYmluZCh0aGlzKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb0Zvcm0gfSBmcm9tICcuL1RvZG9Gb3JtJ1xuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RNb2RlbCB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9qZWN0SWQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lID09PSAnJyA/ICdVbnRpdGxlZCcgOiBuYW1lXG4gICAgdGhpcy5pZCA9ICsrVG9kb0xpc3RNb2RlbC5jb3VudGVyXG4gICAgdGhpcy5mb3JtID0gbmV3IFRvZG9Gb3JtKCdhZGQnLCB0aGlzLmlkKVxuICAgIHRoaXMucHJvamVjdElkID0gcHJvamVjdElkXG4gICAgdGhpcy50b2RvcyA9IFtdXG4gICAgdGhpcy5fY2hlY2tTdG9yYWdlKClcbiAgfVxuXG4gIGFkZFRvZG8gKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbylcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvcylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVG9kb0xpc3RDb3VudGVyJywgVG9kb0xpc3RNb2RlbC5jb3VudGVyKVxuICB9XG5cbiAgZWRpdFRvZG8gKHVwZGF0ZWRUb2RvLCBpZCkge1xuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgaWYgKHRvZG8uaWQgPT09ICtpZCkge1xuICAgICAgICByZXR1cm4gdXBkYXRlZFRvZG9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b2RvXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvcylcbiAgfVxuXG4gIGRlbGV0ZVRvZG8gKGlkKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZClcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvcylcbiAgfVxuXG4gIGJpbmRUb2RvTGlzdENoYW5nZSAoY2FsbGJhY2spIHtcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UgPSBjYWxsYmFja1xuICB9XG5cbiAgX2NoZWNrU3RvcmFnZSAoKSB7XG4gICAgaWYgKCFKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSkgcmV0dXJuXG5cbiAgICBpZiAoIUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gdGhpcy5wcm9qZWN0SWQpWzBdKSB7XG4gICAgICB0aGlzLnRvZG9zID0gW11cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXG4gICAgICAgIC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHRoaXMucHJvamVjdElkKVswXVxuICAgICAgICAubW9kZWxcbiAgICAgICAgLnRvZG9MaXN0c1xuICAgICAgICAuZmlsdGVyKCh0b2RvTGlzdCkgPT4gdG9kb0xpc3QuaWQgPT09IHRoaXMuaWQpXG4gICAgICAgIC50b2RvcyB8fCBbXVxuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVTdG9yYWdlICgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICdwcm9qZWN0cycsXG4gICAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSlcbiAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gdGhpcy5wcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgcHJvamVjdC5tb2RlbC50b2RvTGlzdHMubWFwKCh0b2RvTGlzdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0b2RvTGlzdC5tb2RlbC5pZCA9PT0gdGhpcy5pZCkge1xuICAgICAgICAgICAgICAgICAgdG9kb0xpc3QubW9kZWwudG9kb3MgPSB0aGlzLnRvZG9zXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0b2RvTGlzdFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIF9jb21taXQgKHRvZG9zKSB7XG4gICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlKHRvZG9zKVxuICAgIHRoaXMuX3VwZGF0ZVN0b3JhZ2UoKVxuICB9XG59XG5cblRvZG9MaXN0TW9kZWwuY291bnRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RvZG9MaXN0Q291bnRlcicpKSB8fCAwXG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9Ub2RvJ1xuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RWaWV3IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9ucycpXG4gICAgdGhpcy50b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy50b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvbGlzdCcpXG4gICAgdGhpcy5pZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RvZG9MaXN0Q291bnRlcicpKVxuICB9XG5cbiAgLy8gQ3JlYXRlIGEgc2VjdGlvblxuICBjcmVhdGVTZWN0aW9uICgpIHtcbiAgICB0aGlzLnNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGBzZWN0aW9uLSR7dGhpcy5pZH1gKVxuICAgIHRoaXMuc2VjdGlvbi5wcmVwZW5kKHRoaXMudG9kb0xpc3QpXG4gICAgdGhpcy5wcm9qZWN0LmFwcGVuZCh0aGlzLnNlY3Rpb24pXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHNlY3Rpb24ncyBuYW1lXG4gIHJlbmRlck5hbWUgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMubmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19uYW1lX19jb250YWluZXInKVxuXG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRoaXMubmFtZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19uYW1lJylcbiAgICB0aGlzLm5hbWUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKVxuICAgIHRoaXMubmFtZS5pbm5lckhUTUwgPSBuYW1lXG5cbiAgICB0aGlzLmRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGhpcy5kZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLS1kZWxldGUnKVxuICAgIHRoaXMuZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHRoaXMuZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1kZWxldGUnLCB0aGlzLnNlY3Rpb24uY2xhc3NMaXN0WzBdLnNsaWNlKDgpKVxuICAgIHRoaXMuZGVsZXRlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT4nXG5cbiAgICB0aGlzLm5hbWVDb250YWluZXIuYXBwZW5kKHRoaXMubmFtZSwgdGhpcy5kZWxldGVCdG4pXG4gICAgdGhpcy5zZWN0aW9uLnByZXBlbmQodGhpcy5uYW1lQ29udGFpbmVyKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBBZGQgZm9ybVxuICByZW5kZXJGb3JtIChmb3JtKSB7XG4gICAgZm9ybS5yZW5kZXJBZGQodGhpcy5zZWN0aW9uKVxuICB9XG5cbiAgLy8gR2V0IHRoZSBBZGQgZm9ybSBpbnB1dHNcbiAgZ2V0Rm9ybSAoKSB7XG4gICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cInRpdGxlXCJdYClcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHt0aGlzLmlkfSAudG9kby1mb3JtIFtuYW1lPVwiZGVzY3JpcHRpb25cIl1gKVxuICAgIHRoaXMuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cImRhdGVcIl1gKVxuICAgIHRoaXMuc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHt0aGlzLmlkfSAudG9kby1mb3JtIC5idG4tLXN1Ym1pdGApXG4gIH1cblxuICAvLyBHZXQgYWRkIGZvcm0gdmFsdWVzXG4gIGdldCBfdG9kb1RpdGxlICgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZS52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvRGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9EYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9Qcmlvcml0eSAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWVcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgdGhlIEVkaXQgZm9ybSBpbnB1dHNcbiAgZ2V0RWRpdEZvcm0gKCkge1xuICAgIHRoaXMudGl0bGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImVkaXQtdG9kb1wiXSBbbmFtZT1cInRpdGxlXCJdJylcbiAgICB0aGlzLmRlc2NyaXB0aW9uRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gW25hbWU9XCJkZXNjcmlwdGlvblwiXScpXG4gICAgdGhpcy5kYXRlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gW25hbWU9XCJkYXRlXCJdJylcbiAgICB0aGlzLnByaW9yaXR5RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gLmJ0bi0tdG9nZ2xlJylcbiAgfVxuXG4gIC8vIEF1dG9tYXRpY2FsbHkgcHJlLWZpbGwgdGhlIEVkaXQgZm9ybSBpbnB1dHNcbiAgc2V0RWRpdEZvcm0gKGlkKSB7XG4gICAgdGhpcy50aXRsZUVkaXQudmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX3RpdGxlYCkuaW5uZXJIVE1MXG4gICAgdGhpcy5kZXNjcmlwdGlvbkVkaXQudmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX2Rlc2NyaXB0aW9uYCkuaW5uZXJIVE1MXG4gICAgdGhpcy5kYXRlRWRpdC52YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aWR9XCJdIC50by1kb19fZGF0ZWApLmlubmVySFRNTFxuICAgIHRoaXMucHJpb3JpdHlFZGl0LmNsYXNzTGlzdC5hZGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl0gLnRvLWRvX19wcmlvcml0eWApLmNsYXNzTGlzdFsxXSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWRePVwiZWRpdC10b2RvXCJdIFtpZF49XCIke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aWR9XCJdIC50by1kb19fcHJpb3JpdHlgKS5jbGFzc0xpc3RbMV19XCJdYCkuY2hlY2tlZCA9IHRydWVcbiAgfVxuXG4gIC8vIEdldCB0aGUgRWRpdCBmb3JtIHZhbHVlc1xuICBnZXQgX2VkaXRUaXRsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGVFZGl0LnZhbHVlXG4gIH1cblxuICBnZXQgX2VkaXREZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb25FZGl0LnZhbHVlXG4gIH1cblxuICBnZXQgX2VkaXREYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlRWRpdC52YWx1ZVxuICB9XG5cbiAgZ2V0IF9lZGl0UHJpb3JpdHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdIFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBmb3JtIGlucHV0c1xuICBfcmVzZXRJbnB1dHMgKCkge1xuICAgIHRoaXMudGl0bGUudmFsdWUgPSAnJ1xuICAgIHRoaXMuZGVzY3JpcHRpb24udmFsdWUgPSAnJ1xuICAgIHRoaXMuZGF0ZS52YWx1ZSA9ICcnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcl49XCJwcmlvcml0eS1ub25lXCJdJykuY2hlY2tlZCA9IHRydWVcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgVG9kbyBMaXN0XG4gIHJlbmRlciAodG9kb3MpIHtcbiAgICB3aGlsZSAodGhpcy50b2RvTGlzdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnRvZG9MaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICAgIHRvZG8ucmVuZGVyKHRoaXMudG9kb0xpc3QpXG4gICAgfVxuICB9XG5cbiAgLy8gRXZlbnQgTGlzdGVuZXJzXG5cbiAgYmluZEFkZFRvZG8gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaGFuZGxlcihuZXcgVG9kbyh0aGlzLl90b2RvVGl0bGUsIHRoaXMuX3RvZG9EZXNjcmlwdGlvbiwgdGhpcy5fdG9kb0RhdGUsIHRoaXMuX3RvZG9Qcmlvcml0eSkpXG4gICAgICB0aGlzLl9yZXNldElucHV0cygpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmREZWxldGVUb2RvIChoYW5kbGVyKSB7XG4gICAgdGhpcy50b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvLWRvX19jaGVjaycpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpXG4gICAgICAgIGhhbmRsZXIoaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIE9wZW4gZm9ybSB0byBlZGl0IHRoZSB0b2RvXG4gIGJpbmRPcGVuRWRpdCAoaGFuZGxlcikge1xuICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLmJ0bi0tZWRpdCcpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50by1kbycpLmlkKVxuICAgICAgICBoYW5kbGVyKGlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kRWRpdFRvZG8gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PT0gJ0VkaXQgVGFzaycpIHtcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnZm9ybScpLmlkLnNsaWNlKDEwKVxuICAgICAgICBjb25zdCB1cGRhdGVkVG9kbyA9IG5ldyBUb2RvKHRoaXMuX2VkaXRUaXRsZSwgdGhpcy5fZWRpdERlc2NyaXB0aW9uLCB0aGlzLl9lZGl0RGF0ZSwgdGhpcy5fZWRpdFByaW9yaXR5KVxuICAgICAgICBoYW5kbGVyKHVwZGF0ZWRUb2RvLCBpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgJy4vc2Fzcy9tYWluLnNjc3MnXG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSAnLi9BcHBDb250cm9sbGVyJ1xuaW1wb3J0IHsgQXBwTW9kZWwgfSBmcm9tICcuL0FwcE1vZGVsJ1xuaW1wb3J0IHsgQXBwVmlldyB9IGZyb20gJy4vQXBwVmlldydcbmltcG9ydCB7IFRvZG9MaXN0Q29udHJvbGxlciB9IGZyb20gJy4vVG9kb0xpc3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgVG9kb0xpc3RNb2RlbCB9IGZyb20gJy4vVG9kb0xpc3RNb2RlbCdcbmltcG9ydCB7IFRvZG9MaXN0VmlldyB9IGZyb20gJy4vVG9kb0xpc3RWaWV3J1xuaW1wb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfSBmcm9tICcuL1Byb2plY3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSAnLi9Qcm9qZWN0TW9kZWwnXG5pbXBvcnQgeyBQcm9qZWN0VmlldyB9IGZyb20gJy4vUHJvamVjdFZpZXcnXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9Ub2RvJ1xuaW1wb3J0IHsgVG9kb0Zvcm0gfSBmcm9tICcuL1RvZG9Gb3JtJ1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwQ29udHJvbGxlcihuZXcgQXBwTW9kZWwoKSwgbmV3IEFwcFZpZXcoKSlcblxuLy8gT24gdGhlIGZpcnN0IHVzZSwgY3JlYXRlcyBhIGRlZmF1bHQgcHJvamVjdCBhbmQgc2FtcGxlc1xuaWYgKCFsb2NhbFN0b3JhZ2UucHJvamVjdHMpIHtcbiAgLy8gQ3JlYXRlIGEgZGVmYXVsdCBwcm9qZWN0LiBJdCBjYW5ub3QgYmUgZGVsZXRlZCBhcyBpdCBhY3RzIGFzIGEgXCJIb21lIFBhZ2VcIi5cbiAgYXBwLmhhbmRsZUFkZFByb2plY3QoJ0RlZmF1bHQnKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1kZWxldGUnKS5yZW1vdmUoKVxuXG4gIC8vIEFkZCBhIHR1dG9yaWFsIGFuZCBhIGZldyBzYW1wbGVzXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5oYW5kbGVFZGl0VG9kb0xpc3QoJzEnLCAnVHV0b3JpYWwnKVxuICBhcHAubW9kZWwucHJvamVjdHNbMF0ubW9kZWwudG9kb0xpc3RzWzBdLmhhbmRsZUFkZFRvZG8obmV3IFRvZG8oXG4gICAgJ1dlbGNvbWUnLFxuICBgVHJ5IGFkZGluZyBhIG5ldyB0YXNrIGJ5IGNsaWNraW5nIG9uIFwiQWRkIFRhc2tcIiFcbiAgWW91IGNhbiBhbHNvIGFkZCBhcyBtYW55IHNlY3Rpb25zIHRvIHlvdXIgcHJvamVjdCBhcyB5b3UnZCBsaWtlIGJ5IGNsaWNraW5nIG9uIFwiQWRkIFNlY3Rpb25cIiwgYW5kIGNyZWF0ZSBhcyBtYW55IHByb2plY3RzIGFzIHlvdSB3aXNoLmApKVxuXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5oYW5kbGVBZGRUb2RvTGlzdChuZXcgVG9kb0xpc3RDb250cm9sbGVyKG5ldyBUb2RvTGlzdE1vZGVsKCdTYW1wbGVzJywgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLmlkKSwgbmV3IFRvZG9MaXN0VmlldygpKSlcbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLnRvZG9MaXN0c1sxXS5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKFxuICAgICdKb2huXFwncyBCaXJ0aGRheScsXG4gICAgJ01lZXQgYXQgSm9oblxcJ3MgaG91c2UgYXQgMTkuIERvblxcJ3QgZm9yZ2V0IHRvIGJyaW5nIGhpcyBnaWZ0LicsXG4gIGAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxfS0ke25ldyBEYXRlKCkuZ2V0RGF0ZSgpfWAsXG4gICdoaWdoJ1xuICApKVxuXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5tb2RlbC50b2RvTGlzdHNbMV0uaGFuZGxlQWRkVG9kbyhuZXcgVG9kbyhcbiAgICAnRGlubmVyIHdpdGggQ2hsb2UnLFxuICAgICdSZXNlcnZhdGlvbiBhdCBSaG9kZXMgUmVzdGF1cmFudCwgYXQgMjAuJyxcbiAgYCR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS0ke25ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDF9LSR7bmV3IERhdGUoKS5nZXREYXRlKCkgKyAyfWAsXG4gICdtZWQnXG4gICkpXG5cbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLnRvZG9MaXN0c1sxXS5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKFxuICAgICdEZW50aXN0JyxcbiAgICAnSXQgd29uXFwndCBiZSB0aGF0IGJhZC4gUHJvYmFibHkuJyxcbiAgYCR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS0ke25ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDJ9LSR7bmV3IERhdGUoKS5nZXREYXRlKCkgKyA1fWAsXG4gICdsb3cnXG4gICkpXG5cbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLnRvZG9MaXN0c1sxXS5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKFxuICAgICdTdGFydCB3b3JraW5nIG91dCcsXG4gICAgJ0lcXCdsbCBzdGFydC4uLiBUb21vcnJvdy4gT3IgbmV4dCB5ZWFyLidcbiAgKSlcbn0gZWxzZSB7XG4vKiBPbiBhbGwgdGhlIG90aGVyIHVzZXM6XG4gICAgLSBMb2FkIHRoZSBsb2NhbFN0b3JhZ2VcbiAgICAtIENyZWF0ZSBuYXYgYnV0dG9ucyBmb3IgZWFjaCBwcm9qZWN0XG4gICAgLSBSZW5kZXIgdGhlIGRlZmF1bHQgcHJvamVjdFxuKi9cblxuICBsZXQgdGVtcFN0b3JhZ2UgPSBbLi4uYXBwLm1vZGVsLnByb2plY3RzXVxuXG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gIFByb2plY3RNb2RlbC5jb3VudGVyID0gMFxuICBBcHBNb2RlbC5jb3VudGVyID0gMFxuICBUb2RvTGlzdE1vZGVsLmNvdW50ZXIgPSAwXG4gIFRvZG8uY291bnRlciA9IDBcbiAgVG9kb0Zvcm0uY291bnRlciA9IDBcbiAgY29uc29sZS5sb2coUHJvamVjdE1vZGVsLmNvdW50ZXIpXG5cbiAgYXBwLm1vZGVsLnByb2plY3RzID0gW11cblxuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgdGVtcFN0b3JhZ2UpIHtcbiAgICBjb25zdCB0b2RvUHJvamVjdCA9IG5ldyBQcm9qZWN0Q29udHJvbGxlcihuZXcgUHJvamVjdE1vZGVsKHByb2plY3QubW9kZWwubmFtZSksIG5ldyBQcm9qZWN0VmlldyhQcm9qZWN0TW9kZWwuY291bnRlcikpXG4gICAgYXBwLm1vZGVsLmFkZFByb2plY3QodG9kb1Byb2plY3QpXG4gICAgYXBwLmRpc3BsYXlQcm9qZWN0KHRvZG9Qcm9qZWN0KVxuICAgIGFwcC52aWV3LnJlbmRlckJ0bih0b2RvUHJvamVjdC5tb2RlbC5uYW1lLCB0b2RvUHJvamVjdC5tb2RlbC5pZClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0PVwicHJvamVjdC0ke3RvZG9Qcm9qZWN0Lm1vZGVsLmlkfVwiXWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYXBwLmhhbmRsZU5hdkNsaWNrKHRvZG9Qcm9qZWN0KSlcblxuICAgIGZvciAoY29uc3QgdG9kb0xpc3Qgb2YgcHJvamVjdC5tb2RlbC50b2RvTGlzdHMpIHtcbiAgICAgIGNvbnN0IHByb2plY3RUb2RvTGlzdCA9IG5ldyBUb2RvTGlzdENvbnRyb2xsZXIobmV3IFRvZG9MaXN0TW9kZWwodG9kb0xpc3QubW9kZWwubmFtZSwgdG9kb0xpc3QubW9kZWwucHJvamVjdElkKSwgbmV3IFRvZG9MaXN0VmlldygpKVxuICAgICAgdG9kb1Byb2plY3QuaGFuZGxlQWRkVG9kb0xpc3QocHJvamVjdFRvZG9MaXN0KVxuXG4gICAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb0xpc3QubW9kZWwudG9kb3MpIHtcbiAgICAgICAgcHJvamVjdFRvZG9MaXN0LmhhbmRsZUFkZFRvZG8obmV3IFRvZG8odG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kYXRlLCB0b2RvLnByaW9yaXR5KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGVtcFN0b3JhZ2UgPSB7fVxuICBjb25zb2xlLmxvZyh0ZW1wU3RvcmFnZSlcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9