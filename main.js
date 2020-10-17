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
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  min-height: calc(100vh - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\n.no-display {\n  display: none !important;\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\n[contenteditable] {\n  cursor: pointer;\n}\n[contenteditable]:hover {\n  background-color: rgba(42, 43, 104, 0.05);\n}\n[contenteditable]:focus {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  outline: none;\n}\n\nh1 {\n  font-size: 1.35rem;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n  display: inline-block;\n  padding: 0 1rem;\n  align-self: center;\n}\n\nh2 {\n  font-weight: 700;\n  color: rgba(42, 43, 104, 0.85);\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  margin-top: 1.25rem;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel, .btn--add {\n  color: rgba(42, 43, 104, 0.45);\n}\n.btn--cancel:hover, .btn--cancel:hover:before, .btn--add:hover, .btn--add:hover:before {\n  color: rgba(42, 43, 104, 0.75);\n}\n.btn--section {\n  color: rgba(42, 43, 104, 0.35);\n  font-weight: 700;\n}\n.btn--section:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.35);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n}\n.btn--section:before, .btn--section:after {\n  content: \"\";\n  background-color: rgba(42, 43, 104, 0.25);\n  height: 2px;\n  flex-grow: 1;\n}\n.btn--section:hover:before, .btn--section:hover:after {\n  background-color: rgba(42, 43, 104, 0.5);\n}\n.btn--section:before {\n  margin-right: 1rem;\n}\n.btn--section:after {\n  margin-left: 1rem;\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn--delete {\n  display: none;\n  color: rgba(42, 43, 104, 0.5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  top: 10px;\n  color: rgba(42, 43, 104, 0.5);\n  display: none;\n}\n.btn--edit:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-med {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1.5rem;\n  align-items: start;\n  word-break: break-word;\n  position: relative;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n@media all and (max-width: 576px) {\n  .to-do {\n    grid-template: repeat(3, auto)/auto 1fr 2rem;\n    grid-gap: 0.5rem;\n  }\n  .to-do__check {\n    grid-row: 1/-1;\n  }\n  .to-do__priority {\n    grid-row: 1;\n  }\n}\n.to-do:last-of-type {\n  border-bottom: none;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n.to-do:hover .btn--edit {\n  display: initial;\n}\n\n.dropdown {\n  transition: all 0.35s linear;\n}\n\n.add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo,\n.edit__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project,\n.edit__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n}\n.add__priority input[type=radio],\n.edit__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n@media all and (max-width: 1140px) {\n  .add-priority {\n    right: -10px;\n    left: initial;\n  }\n  .add-priority:before {\n    right: 15px;\n    left: initial;\n  }\n  .add-priority:after {\n    right: 14px;\n    left: initial;\n  }\n}\n\n.add__finish,\n.edit__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n  transition: all 0.2s ease-in;\n}\n.nav--hidden {\n  transform: translateX(-100%);\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li:hover .btn--delete {\n  display: initial;\n}\n.nav__category li > .btn {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n@media all and (max-width: 768px) {\n  .nav {\n    position: fixed;\n    z-index: 1;\n    height: 100%;\n  }\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all 0.2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 1rem;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n}\n@media all and (max-width: 768px) {\n  .main--hidden {\n    transform: translateX(0);\n  }\n}\n\n.section__name__container {\n  display: flex;\n  justify-content: space-between;\n}\n.section__name__container:hover .btn--delete {\n  display: initial;\n}", "",{"version":3,"sources":["webpack://src/sass/main.scss","webpack://src/sass/base/_base.scss","webpack://src/sass/base/_typography.scss","webpack://src/sass/utils/_variables.scss","webpack://src/sass/components/_buttons.scss","webpack://src/sass/utils/_mixins.scss","webpack://src/sass/components/_icons.scss","webpack://src/sass/components/_todo.scss","webpack://src/sass/components/_dropdown.scss","webpack://src/sass/layout/_form.scss","webpack://src/sass/layout/_header.scss","webpack://src/sass/layout/_nav.scss","webpack://src/sass/layout/_main.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  min-height: calc(100vh - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\n.no-display {\n  display: none !important;\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\n[contenteditable] {\n  cursor: pointer;\n}\n[contenteditable]:hover {\n  background-color: rgba(42, 43, 104, 0.05);\n}\n[contenteditable]:focus {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  outline: none;\n}\n\nh1 {\n  font-size: 1.35rem;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n  display: inline-block;\n  padding: 0 1rem;\n  align-self: center;\n}\n\nh2 {\n  font-weight: 700;\n  color: rgba(42, 43, 104, 0.85);\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  margin-top: 1.25rem;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel, .btn--add {\n  color: rgba(42, 43, 104, 0.45);\n}\n.btn--cancel:hover, .btn--cancel:hover:before, .btn--add:hover, .btn--add:hover:before {\n  color: rgba(42, 43, 104, 0.75);\n}\n.btn--section {\n  color: rgba(42, 43, 104, 0.35);\n  font-weight: 700;\n}\n.btn--section:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.35);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n}\n.btn--section:before, .btn--section:after {\n  content: \"\";\n  background-color: rgba(42, 43, 104, 0.25);\n  height: 2px;\n  flex-grow: 1;\n}\n.btn--section:hover:before, .btn--section:hover:after {\n  background-color: rgba(42, 43, 104, 0.5);\n}\n.btn--section:before {\n  margin-right: 1rem;\n}\n.btn--section:after {\n  margin-left: 1rem;\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn--delete {\n  display: none;\n  color: rgba(42, 43, 104, 0.5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  top: 10px;\n  color: rgba(42, 43, 104, 0.5);\n  display: none;\n}\n.btn--edit:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-med {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1.5rem;\n  align-items: start;\n  word-break: break-word;\n  position: relative;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n@media all and (max-width: 576px) {\n  .to-do {\n    grid-template: repeat(3, auto)/auto 1fr 2rem;\n    grid-gap: 0.5rem;\n  }\n  .to-do__check {\n    grid-row: 1/-1;\n  }\n  .to-do__priority {\n    grid-row: 1;\n  }\n}\n.to-do:last-of-type {\n  border-bottom: none;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n.to-do:hover .btn--edit {\n  display: initial;\n}\n\n.dropdown {\n  transition: all 0.35s linear;\n}\n\n.add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo,\n.edit__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project,\n.edit__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n}\n.add__priority input[type=radio],\n.edit__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n@media all and (max-width: 1140px) {\n  .add-priority {\n    right: -10px;\n    left: initial;\n  }\n  .add-priority:before {\n    right: 15px;\n    left: initial;\n  }\n  .add-priority:after {\n    right: 14px;\n    left: initial;\n  }\n}\n\n.add__finish,\n.edit__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n  transition: all 0.2s ease-in;\n}\n.nav--hidden {\n  transform: translateX(-100%);\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li:hover .btn--delete {\n  display: initial;\n}\n.nav__category li > .btn {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n@media all and (max-width: 768px) {\n  .nav {\n    position: fixed;\n    z-index: 1;\n    height: 100%;\n  }\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all 0.2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 1rem;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n}\n@media all and (max-width: 768px) {\n  .main--hidden {\n    transform: translateX(0);\n  }\n}\n\n.section__name__container {\n  display: flex;\n  justify-content: space-between;\n}\n.section__name__container:hover .btn--delete {\n  display: initial;\n}","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput,\ntextarea {\n\tborder: none;\n\n\t&:focus {\n\t\toutline: none;\n\t}\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\twidth: 100vw;\n\tmin-height: 100vh;\n\tmax-width: 100%;\n\tmax-height: 100%;\n}\n\n.wrapper {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.content__wrapper {\n\tposition: relative;\n\ttop: 50px;\n\tdisplay: flex;\n\tmin-height: calc(100vh - 50px);\n}\n\n.hidden {\n\topacity: 0;\n\tmax-height: 0 !important;\n\toverflow: hidden;\n  transform: translateY(-.25em);\n}\n\n.no-display {\n\tdisplay: none !important;\n}","body,\nbutton {\n  font-family: $font-primary;\n  font-size: .875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\n[contenteditable] {\n  cursor: pointer;\n\n  &:hover {\n    background-color: rgba($color-primary, .05);\n  }\n\n  &:focus {\n    border: 1px solid rgba($color-primary, .5);\n    outline: none;\n  }\n}\n\nh1 {\n  font-size: 1.35rem;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  color: $color-primary;\n  letter-spacing: .5px;\n  text-align: center;\n  display: inline-block;\n  padding: 0 1rem;\n  align-self: center;\n}\n\nh2 {\n  font-weight: 700;\n  color: rgba($color-primary, .85);\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 0.25rem .5rem;\n  margin-top: 1.25rem;\n}\n\n.btn {\n  &--page--header {\n    color: $color-header;\n  }\n\n  &--icon {\n    font-size: 1.25rem;\n  }\n\n  &--submit,\n  &--cancel {\n    text-transform: uppercase;\n    font-size: .85em;\n    letter-spacing: -.5px;\n  }\n\n  &--submit {\n    color: #fff;\n  }\n\n  &--cancel,\n  &--add {\n    color: rgba($color-primary, .45);\n\n    &:hover,\n    &:hover:before {\n      color: rgba($color-primary, .75);\n    }\n  }\n\n  &--section {\n    color: rgba($color-primary, .35);\n    font-weight: 700;\n\n    &:hover {\n      color: rgba($color-primary, .75);\n    }\n  }\n}\n\n// Nav\n\n.nav {\n  &--heading {\n    text-transform: uppercase;\n    color: $color-primary;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 2.5;\n  }\n}\n\n[data-toggle=\"add-project\"] {\n  color: rgba(#000, .75);\n\n  &:hover {\n    color: #000;\n  }\n\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\n// Form\n\ninput,\ntextarea {\n  font-family: $font-primary;\n}\n\n[name=\"title\"] {\n  font-weight: 700;\n}\n\n[name=\"date\"] {\n  color: $color-form;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}","// Fonts\n$font-primary: 'Nanum Gothic', Arial;\n\n\n// Colors\n$color-primary: rgb(42, 43, 104);\n$color-secondary: rgb(238, 240, 241);\n\n$color-header: #fff;\n$color-projects: rgba($color-primary, .5);\n$color-form: rgb(142, 142, 142);\n\n$color-priority: (\n  high: rgb(161, 66, 66),\n  med: rgb(231, 154, 103),\n  low: rgb(93, 151, 91),\n  none: rgb(199, 199, 199)\n);\n\n$color-date: (\n  all: lighten($color-primary, 15%),\n  today: rgb(235, 153, 99),\n  upcoming: rgb(141, 90, 137),\n  anytime: rgb(122, 122, 122),\n  late: rgb(148, 32, 32)\n);\n\n$color-sort: (\n  title: rgb(48, 92, 48),\n  description: rgb(235, 185, 79),\n  date: rgb(102, 151, 145),\n  priority: map-get($color-priority, high)\n);\n\n// Icons\n\n$icon-priority: \"\\f02e\";\n\n$icons-date: (\n  all: \"\\f073\",\n  today: \"\\f272\",\n  upcoming: \"\\f274\",\n  anytime: \"\\f133\",\n);\n\n$icons-caret: (\n  up: \"\\f0d8\",\n  down: \"\\f0d7\",\n  right: \"\\f0da\"\n);\n\n$icons-sort: (\n  title: \"\\f328\",\n  description: \"\\f249\",\n  date: \"\\f073\",\n  priority: $icon-priority,\n);\n\n$icon-add: \"\\f067\";\n$icon-edit: \"\\f044\";\n\n// Others\n$margin-indent: 0 .25rem 0 1.25rem;","button {\n\tborder: none;\n  background: none;\n  cursor: pointer;\n  \n  &:focus {\n    outline: none;\n  }\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: .15rem .5rem;\n}\n  \n.btn--submit {\n  background: rgba($color-primary, .5);\n  border-radius: 5px;\n  margin-right: .25rem;\n\n  &:hover {\n    background: rgba($color-primary, .7);\n  }\n}\n\n.btn--cancel {\n  border: 1px solid rgba($color-primary, .5);\n  border-radius: 5px;\n  background: rgba(#fff, .5);\n}\n\n.btn--add:before {\n  content: $icon-add;\n  color: rgba($color-primary, .35);\n  @include font-awesome-700();\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n\n  &:before,\n  &:after {\n    content: '';\n    background-color: rgba($color-primary, .25);\n    height: 2px;\n    flex-grow: 1;\n  }\n\n  &:hover:before,\n  &:hover:after {\n    background-color: rgba($color-primary, .5);\n  }\n\n  &:before {\n    margin-right: 1rem;\n  }\n\n  &:after {\n    margin-left: 1rem;\n  }\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between\n}\n\n.btn--delete {\n  display: none;\n  color: rgba($color-primary, .5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  top: 10px;\n  color: rgba($color-primary, .5);\n  display: none;\n\n  &:hover {\n    color: rgba($color-primary, .75);\n  }\n\n}","@mixin font-awesome-400() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n@mixin font-awesome-700() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n@mixin icon-content($target, $map) {\n  @each $key, $icon in $map {\n    .#{$target}-#{$key}::before {\n      content: $icon;\n    }\n  }\n}\n\n@mixin icon-color($target, $map) {\n  @each $key, $color in $map {\n    .#{$target}-#{$key}::before {\n      color: $color;\n    }\n  }\n}","// NAV-ICONS\n\n.nav {\n  &__to-do li:before,\n  &__projects li:before,\n  &__filters li:before,\n  &__sorts li:before {\n    margin: $margin-indent;\n  }\n\n  &__to-do li:before,\n  &__sorts li:before {\n    @include font-awesome-400();\n  }\n\n  &__projects li:before {\n    content: \"⚫\";\n    color: $color-projects;\n  }\n\n  .project_list__add:before {\n    content: $icon-add;\n    @include font-awesome-700();\n  }\n\n  &__filters li:before {\n    content: \"\\f02e\";\n    @include font-awesome-400();\n  }\n}\n\n// Color Priority Icons\n@each $level, $color in $color-priority {\n  .priority-#{$level} {\n    color: $color;\n  }\n}\n\n// Date Icons\n@include icon-content('date', $icons-date);\n@include icon-color('date', $color-date);\n\n// Category Icons\n.nav--heading:before {\n  content: map-get($icons-caret, down);\n  color: $color-primary;\n  @include font-awesome-700();\n  margin-right: .75rem;\n}\n\n// Sort Icons\n@include icon-content('sort', $icons-sort);\n@include icon-color('sort', $color-sort);\n\n// MAIN ICONS\n\n.main__header li:before {\n  content: map-get($icons-caret, down);\n  @include font-awesome-700();\n}",".to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1.5rem;\n  align-items: start;\n  word-break: break-word;\n  position: relative;\n  padding: .75rem 0;\n  border-bottom: 1px solid rgba($color-primary, .1);\n\n  @media all and (max-width: 576px) {\n    grid-template: repeat(3, auto) / auto 1fr 2rem;\n    grid-gap: .5rem;\n\n    &__check {\n      grid-row: 1 / -1;\n    }\n\n    &__priority {\n      grid-row: 1;\n    }\n  }\n\n  &:last-of-type {\n    border-bottom: none;\n  }\n  \n  &__check {\n    margin-top: 7px;\n  }\n\n  &:hover .btn--edit {\n    display: initial;\n  }\n\n}",".dropdown {\n  transition: all .35s linear;\n}",".add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba($color-primary, .35);\n\n  &--todo {\n    border-radius: 10px;\n    padding: .25rem 1rem;\n  }\n\n  &--project {\n    border-radius: 5px;\n    margin: 0 1rem;\n    padding: .15rem;\n  }\n}\n\ninput[type=\"text\"],\ntextarea {\n  width: 100%;\n  padding: .25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=\"title\"] {\n  border-bottom: 1px solid rgba($color-primary, .1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n\n  input[type=\"radio\"] {\n    position: fixed;\n    opacity: 0;\n    pointer-events: none;\n  }\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba($color-primary, .35);\n  padding: .25rem .5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n\n  &:before {\n    content: '';\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #fff;\n    position: absolute;\n    top: -5px;\n    left: 15px;\n    z-index: 1;\n  }\n\n  &:after {\n    content: '';\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid rgba($color-primary, .35);\n    position: absolute;\n    top: -6px;\n    left: 14px;\n  }\n\n  label {\n    text-align: center;\n    margin: 0 .5rem;\n  }\n\n  @media all and (max-width: 1140px) {\n    right: -10px;\n    left: initial;\n\n    &:before {\n      right: 15px;\n      left: initial;\n    }\n  \n    &:after {\n      right: 14px;\n      left: initial;\n    }\n  }\n}\n\n.add__finish,\n.edit__finish {\n  margin: .5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(#fff, .5);\n}\n\nlabel {\n  cursor: pointer;\n}\n",".page__header {\n  position: fixed;\n  background: $color-primary;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n  \n\n  ul {\n    display: flex;\n    flex: 1;\n\n    & li:last-child {\n      margin-left: auto;\n    }\n  }\n}",".nav {\n  \n  background: $color-secondary;\n  width: 250px;\n  border-right: 1px solid rgba($color-primary, .25);\n  padding: 2rem .25rem 0 2rem;\n  transition: all .2s ease-in;\n\n  &--hidden {\n    transform: translateX(-100%);\n  }\n\n  &__category {\n    margin-bottom: .75rem;\n    padding-bottom: .75rem;\n    border-bottom: 1px solid rgba($color-primary, .1);\n\n    &:last-of-type {\n      border-bottom: none;\n    }\n\n    li {\n      display: flex;\n      \n      &:hover {\n        background: rgba($color-primary, .04);\n      }\n\n      &:hover .btn--delete {\n        display: initial;\n      }\n\n      > .btn {\n        // Makes the whole line clickable instead of just the text.\n        flex: 1;\n        text-align: start;\n      }\n    }\n  }\n\n  &--heading {\n    width: 100%;\n    text-align: start;\n    \n    &:hover {\n      background: rgba($color-primary, .07);\n    }\n  }\n\n  @media all and (max-width: 768px) {\n    position: fixed;\n    z-index: 1;\n    height: 100%;\n  }\n}","main {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all .2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 1rem;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n\n  @media all and (max-width: 768px) {\n    transform: translateX(0)\n  }\n}\n\n.section__name__container {\n  display: flex;\n  justify-content: space-between;\n\n  &:hover .btn--delete {\n    display: initial;\n  }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9kb0xpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sb2NhbFN0b3JhZ2VNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiQXBwQ29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwibW9kZWwiLCJ2aWV3IiwiYmluZEFkZFByb2plY3QiLCJoYW5kbGVBZGRQcm9qZWN0IiwiYmluZCIsImJpbmREZWxldGVQcm9qZWN0IiwiaGFuZGxlRGVsZXRlUHJvamVjdCIsImJpbmRDaGFuZ2VOYW1lIiwiaGFuZGxlQ2hhbmdlTmFtZSIsImJpbmRIb21lIiwiaGFuZGxlSG9tZSIsImJpbmROYXZUb2dnbGUiLCJoYW5kbGVOYXZUb2dnbGUiLCJiaW5kVG9nZ2xlIiwiaGFuZGxlVG9nZ2xlIiwiYmluZERpc3BsYXlBbGwiLCJoYW5kbGVEaXNwbGF5QWxsIiwiYmluZFByaW9yaXR5IiwiaGFuZGxlUHJpb3JpdHkiLCJiaW5kRGF0ZVRvZGF5IiwiaGFuZGxlVG9kYXkiLCJiaW5kRGF0ZVVwY29taW5nIiwiaGFuZGxlVXBjb21pbmciLCJiaW5kRGF0ZUFueXRpbWUiLCJoYW5kbGVBbnl0aW1lIiwiYmluZFNvcnRUaXRsZSIsImhhbmRsZVNvcnRUaXRsZSIsImJpbmRTb3J0RGVzY3JpcHRpb24iLCJoYW5kbGVTb3J0RGVzY3JpcHRpb24iLCJiaW5kU29ydERhdGUiLCJoYW5kbGVTb3J0RGF0ZSIsImJpbmRTb3J0UHJpb3JpdHkiLCJoYW5kbGVTb3J0UHJpb3JpdHkiLCJuYW1lIiwicHJvamVjdCIsIlByb2plY3RDb250cm9sbGVyIiwiUHJvamVjdE1vZGVsIiwiUHJvamVjdFZpZXciLCJjb3VudGVyIiwiYWRkUHJvamVjdCIsImFkZFRvZG9MaXN0IiwiVG9kb0xpc3RDb250cm9sbGVyIiwiVG9kb0xpc3RNb2RlbCIsIlRvZG9MaXN0VmlldyIsImRpc3BsYXlQcm9qZWN0IiwicmVuZGVyQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU5hdkNsaWNrIiwicmVuZGVyTmFtZSIsInJlbmRlciIsInRvZG9MaXN0cyIsInJlbmRlckZvcm0iLCJmb3JtIiwiZ2V0Rm9ybSIsImJpbmRBZGQiLCJkZWxldGVQcm9qZWN0IiwicmVtb3ZlIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZWRpdFByb2plY3QiLCJ0ZXh0Q29udGVudCIsImV2ZW50IiwidGFyZ2V0IiwiZGF0YXNldCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsIm5hdiIsIm1haW4iLCJwcmlvcml0eSIsInRvZG9zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0b2RvIiwiYWRkIiwiX3NhbWVEYXkiLCJkYXRlMSIsImRhdGUyIiwidG9kb0RhdGUiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0b2RheSIsImRhdGUiLCJwcm9qZWN0SWQiLCJwcm9qZWN0cyIsImZpbHRlciIsInRvZG9MaXN0Iiwic29ydFRpdGxlIiwic29ydERlc2NyaXB0aW9uIiwic29ydERhdGUiLCJzb3J0UHJpb3JpdHkiLCJBcHBNb2RlbCIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsU3RvcmFnZU1vZHVsZSIsInVwZGF0ZVByb2plY3RMaXN0Iiwic2V0SXRlbSIsIkFwcFZpZXciLCJjb250YWluZXIiLCJob21lQnRuIiwicHJvamVjdElucHV0IiwicHJvamVjdFN1Ym1pdCIsImRpc3BsYXlBbGxCdG4iLCJwcmlvcml0eUJ0biIsImRhdGVUb2RheUJ0biIsImRhdGVVcGNvbWluZ0J0biIsImRhdGVBbnl0aW1lQnRuIiwibmF2QnRuIiwiX3RlbXBvcmFyeU5hbWUiLCJfY2hhbmdlTmFtZSIsIl9wcm9qZWN0TmFtZSIsInZhbHVlIiwiX3Jlc2V0SW5wdXQiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJidXR0b24iLCJpbm5lckhUTUwiLCJjbG9zZUJ0biIsImFwcGVuZCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3Nlc3QiLCJjb250YWlucyIsInNsaWNlIiwiYm9keSIsIm9uUHJvamVjdENoYW5nZSIsImJpbmRQcm9qZWN0Q2hhbmdlIiwiaGFuZGxlRWRpdFRvZG9MaXN0IiwiYmluZERlbGV0ZVNlY3Rpb24iLCJoYW5kbGVEZWxldGVUb2RvTGlzdCIsImhhbmRsZUFkZFRvZG9MaXN0IiwiZGVsZXRlVG9kb0xpc3QiLCJlZGl0VG9kb0xpc3QiLCJiaW5kQWRkU2VjdGlvbiIsIlNlY3Rpb25Gb3JtIiwiX2NvbW1pdCIsInVwZGF0ZVRvZG9MaXN0cyIsImNhbGxiYWNrIiwic2VjdGlvbnMiLCJuYW1lSW5wdXQiLCJzdWJtaXQiLCJfc2VjdGlvbk5hbWUiLCJmaXJzdENoaWxkIiwiY3JlYXRlU2VjdGlvbiIsImRlbGV0ZSIsImZvcm1Db250YWluZXIiLCJmb3JtQnRuIiwibGFiZWxOYW1lIiwiZmluaXNoIiwic3VibWl0QnRuIiwiY2FuY2VsQnRuIiwiVG9kbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlZGl0Rm9ybSIsIlRvZG9Gb3JtIiwidG9kb0VsZW0iLCJ0b2RvQ2hlY2siLCJjb21wb25lbnRzIiwiY29tcG9uZW50IiwidG9kb0NvbXBvbmVudCIsInRvZG9Qcmlvcml0eSIsInRvZG9FZGl0IiwiZ29hbCIsIl9yZW5kZXJGb3JtIiwibGFiZWxUaXRsZSIsImxhYmVsRGVzY3JpcHRpb24iLCJkZXRhaWxzIiwibGFiZWxEYXRlIiwicHJpb3JpdHlDb250YWluZXIiLCJwcmlvcml0aWVzIiwicHJpb3JpdGllc0xpc3QiLCJsYWJlbFByaW9yaXR5IiwiaW5wdXRQcmlvcml0eSIsInRvVXBwZXJDYXNlIiwicmVuZGVyQWRkIiwiX2luaXRQcmlvcml0eVRvZ2dsZSIsIl9pbml0UHJpb3JpdHlMYWJlbHMiLCJyZW5kZXJFZGl0IiwiYmVmb3JlIiwiYWZ0ZXIiLCJsYWJlbHMiLCJsYWJlbCIsInN0eWxlIiwiY29sb3IiLCJnZXRDb21wdXRlZFN0eWxlIiwiX2luaXRSZXNldFByaW9yaXR5Iiwib25Ub2RvTGlzdENoYW5nZSIsImJpbmRUb2RvTGlzdENoYW5nZSIsImJpbmREZWxldGVUb2RvIiwiaGFuZGxlRGVsZXRlVG9kbyIsImJpbmRPcGVuRWRpdCIsImhhbmRsZU9wZW5FZGl0IiwiYmluZEVkaXRUb2RvIiwiaGFuZGxlRWRpdFRvZG8iLCJoYW5kbGVBZGRUb2RvIiwiYWRkVG9kbyIsInVwZGF0ZWRUb2RvIiwiZWRpdFRvZG8iLCJkZWxldGVUb2RvIiwiZ2V0RWRpdEZvcm0iLCJzZXRFZGl0Rm9ybSIsImJpbmRBZGRUb2RvIiwic29ydFN0YXR1cyIsInVwZGF0ZVRvZG9zIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsIl9zb3J0Q2hhbmdlIiwiX2dldFByaW9yaXR5VmFsdWUiLCJwcmlvcml0eVZhbHVlIiwic2VjdGlvbiIsInByZXBlbmQiLCJuYW1lQ29udGFpbmVyIiwiZGVsZXRlQnRuIiwiX3RvZG9UaXRsZSIsIl90b2RvRGVzY3JpcHRpb24iLCJfdG9kb0RhdGUiLCJfdG9kb1ByaW9yaXR5IiwidGl0bGVFZGl0IiwiZGVzY3JpcHRpb25FZGl0IiwiZGF0ZUVkaXQiLCJwcmlvcml0eUVkaXQiLCJjaGVja2VkIiwiX2VkaXRUaXRsZSIsIl9lZGl0RGVzY3JpcHRpb24iLCJfZWRpdERhdGUiLCJfZWRpdFByaW9yaXR5IiwiX3Jlc2V0SW5wdXRzIiwicGFyc2VJbnQiLCJwYXJlbnRFbGVtZW50IiwiYXBwIiwidGVtcFN0b3JhZ2UiLCJjbGVhciIsInRvZG9Qcm9qZWN0IiwicHJvamVjdFRvZG9MaXN0IiwidG9kb0xpc3RzQXJyIiwidG9kb3NBcnIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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QVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxNQUFNLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVB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QVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsNE1BQW9HOztBQUV0STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50X193cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XFxufVxcblxcbi5uby1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYm9keSxcXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiLCBBcmlhbDtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS45O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5bY29udGVudGVkaXRhYmxlXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA1KTtcXG59XFxuW2NvbnRlbnRlZGl0YWJsZV06Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuODUpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxuXFxuLmJ0bi0tcGFnZS0taGVhZGVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnRuLS1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmJ0bi0tc3VibWl0LCAuYnRuLS1jYW5jZWwge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXG59XFxuLmJ0bi0tc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnRuLS1jYW5jZWwsIC5idG4tLWFkZCB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC40NSk7XFxufVxcbi5idG4tLWNhbmNlbDpob3ZlciwgLmJ0bi0tY2FuY2VsOmhvdmVyOmJlZm9yZSwgLmJ0bi0tYWRkOmhvdmVyLCAuYnRuLS1hZGQ6aG92ZXI6YmVmb3JlIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuXFxuLm5hdi0taGVhZGluZyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG59XFxuXFxuW2RhdGEtdG9nZ2xlPWFkZC1wcm9qZWN0XSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuW2RhdGEtdG9nZ2xlPWFkZC1wcm9qZWN0XTpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi50by1kb19fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiLCBBcmlhbDtcXG59XFxuXFxuW25hbWU9dGl0bGVdIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbltuYW1lPWRhdGVdIHtcXG4gIGNvbG9yOiAjOGU4ZThlO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idG4tLXN1Ym1pdCxcXG4uYnRuLS1jYW5jZWwge1xcbiAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07XFxufVxcblxcbi5idG4tLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC43KTtcXG59XFxuXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5idG4tLWFkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcbi5idG4tLXNlY3Rpb246YmVmb3JlLCAuYnRuLS1zZWN0aW9uOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4yNSk7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuLmJ0bi0tc2VjdGlvbjpob3ZlcjpiZWZvcmUsIC5idG4tLXNlY3Rpb246aG92ZXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLmJ0bi0tc2VjdGlvbjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmFmdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4uYnRuLS1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcblxcbi5idG4tLWVkaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC01cHg7XFxuICB0b3A6IDEwcHg7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5idG4tLWVkaXQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSwgLm5hdl9fZmlsdGVycyBsaTpiZWZvcmUsIC5uYXZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICBtYXJnaW46IDAgMC4yNXJlbSAwIDEuMjVyZW07XFxufVxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKaq1xcXCI7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLm5hdiAucHJvamVjdF9saXN0X19hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgadcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK5cXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGNvbG9yOiAjYTE0MjQyO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkIHtcXG4gIGNvbG9yOiAjZTc5YTY3O1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gIGNvbG9yOiAjNWQ5NzViO1xcbn1cXG5cXG4ucHJpb3JpdHktbm9uZSB7XFxuICBjb2xvcjogI2M3YzdjNztcXG59XFxuXFxuLmRhdGUtYWxsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5kYXRlLXRvZGF5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JslxcXCI7XFxufVxcblxcbi5kYXRlLXVwY29taW5nOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JtFxcXCI7XFxufVxcblxcbi5kYXRlLWFueXRpbWU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SzXFxcIjtcXG59XFxuXFxuLmRhdGUtYWxsOjpiZWZvcmUge1xcbiAgY29sb3I6ICM0MDQyOWU7XFxufVxcblxcbi5kYXRlLXRvZGF5OjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYjk5NjM7XFxufVxcblxcbi5kYXRlLXVwY29taW5nOjpiZWZvcmUge1xcbiAgY29sb3I6ICM4ZDVhODk7XFxufVxcblxcbi5kYXRlLWFueXRpbWU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzdhN2E3YTtcXG59XFxuXFxuLmRhdGUtbGF0ZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOTQyMDIwO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OXXFxcIjtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+MqFxcXCI7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JiVxcXCI7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GzXFxcIjtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG59XFxuXFxuLnNvcnQtdGl0bGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzMwNWMzMDtcXG59XFxuXFxuLnNvcnQtZGVzY3JpcHRpb246OmJlZm9yZSB7XFxuICBjb2xvcjogI2ViYjk0ZjtcXG59XFxuXFxuLnNvcnQtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNjY5NzkxO1xcbn1cXG5cXG4uc29ydC1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjYTE0MjQyO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OXXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udG8tZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA2LjVyZW0gMWZyIDYuNXJlbSAycmVtO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtZ2FwOiAxLjVyZW07XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMC43NXJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAudG8tZG8ge1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMywgYXV0bykvYXV0byAxZnIgMnJlbTtcXG4gICAgZ3JpZC1nYXA6IDAuNXJlbTtcXG4gIH1cXG4gIC50by1kb19fY2hlY2sge1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gIH1cXG4gIC50by1kb19fcHJpb3JpdHkge1xcbiAgICBncmlkLXJvdzogMTtcXG4gIH1cXG59XFxuLnRvLWRvOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4udG8tZG9fX2NoZWNrIHtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG59XFxuLnRvLWRvOmhvdmVyIC5idG4tLWVkaXQge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBsaW5lYXI7XFxufVxcblxcbi5hZGRfX2NvbnRlbnQsXFxuLmVkaXRfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG59XFxuLmFkZF9fY29udGVudC0tdG9kbyxcXG4uZWRpdF9fY29udGVudC0tdG9kbyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbn1cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0LFxcbi5lZGl0X19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgcGFkZGluZzogMC4xNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbltuYW1lPXRpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyxcXG4uZWRpdF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHksXFxuLmVkaXRfX3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFkZF9fcHJpb3JpdHkgaW5wdXRbdHlwZT1yYWRpb10sXFxuLmVkaXRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAxLjY1cmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDtcXG4gIGxlZnQ6IDE1cHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNnB4O1xcbiAgbGVmdDogMTRweDtcXG59XFxuLmFkZC1wcmlvcml0eSBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4gIC5hZGQtcHJpb3JpdHkge1xcbiAgICByaWdodDogLTEwcHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuICB9XFxuICAuYWRkLXByaW9yaXR5OmJlZm9yZSB7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbiAgLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICAgIHJpZ2h0OiAxNHB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbn1cXG5cXG4uYWRkX19maW5pc2gsXFxuLmVkaXRfX2ZpbmlzaCB7XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxubGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGFnZV9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6ICMyYTJiNjg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCBsaTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGJhY2tncm91bmQ6ICNlZWYwZjE7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIHBhZGRpbmc6IDJyZW0gMC4yNXJlbSAwIDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcbn1cXG4ubmF2LS1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5Omxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA0KTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIgLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpID4gLmJ0biB7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA3KTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLm1haW4tLWhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNXB4KTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5tYWluLS1oaWRkZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcblxcbi5zZWN0aW9uX19uYW1lX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNlY3Rpb25fX25hbWVfX2NvbnRhaW5lcjpob3ZlciAuYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zYXNzL21haW4uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2Jhc2UvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2Jhc2UvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL3V0aWxzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL3V0aWxzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX2ljb25zLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL190b2RvLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL19kcm9wZG93bi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19mb3JtLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19uYXYuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9fbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjs7O0NBQUE7QUFLQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QURDRDs7QUNDQSxnREFBQTtBQUNBOztFQUVDLGNBQUE7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QSxhQUFBO0FKeU1GO0FJdk1FO0VBQ0UsOEJBQUE7QUp5TUo7O0FNMVJFO0VBSUUsMkJIdURZO0FIbU9oQjtBTXZSRTtFRFRBLGtDQUFBO0VBQ0EsZ0JBQUE7QUxtU0Y7QU10UkU7RUFDRSxZQUFBO0VBQ0EsNkJIUmE7QUhnU2pCO0FNclJFO0VBQ0UsWUhxQ087RUVwRFQsa0NBQUE7RUFDQSxnQkFBQTtBTHVTRjtBTXJSRTtFQUNFLFlBQUE7RUR6QkYsa0NBQUE7RUFDQSxnQkFBQTtBTGlURjs7QU1sUkU7RUFDRSxjSHRCYTtBSDJTakI7O0FNdFJFO0VBQ0UsY0h0QmE7QUgrU2pCOztBTTFSRTtFQUNFLGNIdEJhO0FIbVRqQjs7QU05UkU7RUFDRSxjSHRCYTtBSHVUakI7O0FLdlRJO0VBQ0UsWUZ5Qk87QUhpU2I7O0FLM1RJO0VBQ0UsWUZ5Qk87QUhxU2I7O0FLL1RJO0VBQ0UsWUZ5Qk87QUh5U2I7O0FLblVJO0VBQ0UsWUZ5Qk87QUg2U2I7O0FLL1RJO0VBQ0UsY0ZGTztBSG9VYjs7QUtuVUk7RUFDRSxjRkZPO0FId1ViOztBS3ZVSTtFQUNFLGNGRk87QUg0VWI7O0FLM1VJO0VBQ0UsY0ZGTztBSGdWYjs7QUsvVUk7RUFDRSxjRkZPO0FIb1ZiOztBTTVUQTtFQUNFLFlBQUE7RUFDQSxjSHhDYztFRUNkLGtDQUFBO0VBQ0EsZ0JBQUE7RUN3Q0EscUJBQUE7QU5nVUY7O0FLbldJO0VBQ0UsWUZzQ087QUhnVWI7O0FLdldJO0VBQ0UsWUZzQ087QUhvVWI7O0FLM1dJO0VBQ0UsWUZzQ087QUh3VWI7O0FLL1dJO0VBQ0UsWUZzQ087QUg0VWI7O0FLM1dJO0VBQ0UsY0ZNTztBSHdXYjs7QUsvV0k7RUFDRSxjRk1PO0FINFdiOztBS25YSTtFQUNFLGNGTU87QUhnWGI7O0FLdlhJO0VBQ0UsY0ZNTztBSG9YYjs7QU12VkE7RUFDRSxZQUFBO0VEbkRBLGtDQUFBO0VBQ0EsZ0JBQUE7QUw4WUY7O0FPclpBO0VBQ0UsYUFBQTtFQUNBLGtEQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Es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M21CQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBWjhtQkY7QVk1bUJFO0VBQ0UsZ0JBQUE7QVo4bUJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcXG59XFxuXFxuLm5vLWRpc3BsYXkge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5LFxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjk7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5bY29udGVudGVkaXRhYmxlXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbltjb250ZW50ZWRpdGFibGVdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDUpO1xcbn1cXG5bY29udGVudGVkaXRhYmxlXTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC44NSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG5cXG4uYnRuLS1wYWdlLS1oZWFkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWNhbmNlbCwgLmJ0bi0tYWRkIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjQ1KTtcXG59XFxuLmJ0bi0tY2FuY2VsOmhvdmVyLCAuYnRuLS1jYW5jZWw6aG92ZXI6YmVmb3JlLCAuYnRuLS1hZGQ6aG92ZXIsIC5idG4tLWFkZDpob3ZlcjpiZWZvcmUge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9ZGF0ZV0ge1xcbiAgY29sb3I6ICM4ZThlOGU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG5cXG4uYnRuLS1jYW5jZWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmJ0bi0tYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbi5idG4tLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuLmJ0bi0tc2VjdGlvbjpiZWZvcmUsIC5idG4tLXNlY3Rpb246YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIGhlaWdodDogMnB4O1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmhvdmVyOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjpob3ZlcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5idG4tLXNlY3Rpb246YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5idG4tLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuXFxuLmJ0bi0tZWRpdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTVweDtcXG4gIHRvcDogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmJ0bi0tZWRpdDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43NSk7XFxufVxcblxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlLCAubmF2X19maWx0ZXJzIGxpOmJlZm9yZSwgLm5hdl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gIG1hcmdpbjogMCAwLjI1cmVtIDAgMS4yNXJlbTtcXG59XFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pqrXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4ubmF2IC5wcm9qZWN0X2xpc3RfX2FkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm5hdl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5wcmlvcml0eS1tZWQge1xcbiAgY29sb3I6ICNlNzlhNjc7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6ICM1ZDk3NWI7XFxufVxcblxcbi5wcmlvcml0eS1ub25lIHtcXG4gIGNvbG9yOiAjYzdjN2M3O1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GzXFxcIjtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74myXFxcIjtcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74m0XFxcIjtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLNcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb2xvcjogIzQwNDI5ZTtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ViOTk2MztcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb2xvcjogIzhkNWE4OTtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbn1cXG5cXG4uZGF0ZS1sYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM5NDIwMjA7XFxufVxcblxcbi5uYXYtLWhlYWRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG59XFxuXFxuLnNvcnQtdGl0bGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74yoXFxcIjtcXG59XFxuXFxuLnNvcnQtZGVzY3JpcHRpb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mJXFxcIjtcXG59XFxuXFxuLnNvcnQtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uc29ydC1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK5cXFwiO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjMzA1YzMwO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWJiOTRmO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM2Njk3OTE7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5tYWluX19oZWFkZXIgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50by1kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYuNXJlbSAxZnIgNi41cmVtIDJyZW07XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1nYXA6IDEuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwLjc1cmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIC50by1kbyB7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCBhdXRvKS9hdXRvIDFmciAycmVtO1xcbiAgICBncmlkLWdhcDogMC41cmVtO1xcbiAgfVxcbiAgLnRvLWRvX19jaGVjayB7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgfVxcbiAgLnRvLWRvX19wcmlvcml0eSB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgfVxcbn1cXG4udG8tZG86bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi50by1kb19fY2hlY2sge1xcbiAgbWFyZ2luLXRvcDogN3B4O1xcbn1cXG4udG8tZG86aG92ZXIgLmJ0bi0tZWRpdCB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG5cXG4uZHJvcGRvd24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGxpbmVhcjtcXG59XFxuXFxuLmFkZF9fY29udGVudCxcXG4uZWRpdF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbn1cXG4uYWRkX19jb250ZW50LS10b2RvLFxcbi5lZGl0X19jb250ZW50LS10b2RvIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxufVxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3QsXFxuLmVkaXRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBwYWRkaW5nOiAwLjE1cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuW25hbWU9dGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG5cXG4uYWRkX19kZXRhaWxzLFxcbi5lZGl0X19kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkX19wcmlvcml0eSxcXG4uZWRpdF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWRkX19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSxcXG4uZWRpdF9fcHJpb3JpdHkgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGVmdDogLTEwcHg7XFxuICB0b3A6IDEuNjVyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4O1xcbiAgbGVmdDogMTVweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC02cHg7XFxuICBsZWZ0OiAxNHB4O1xcbn1cXG4uYWRkLXByaW9yaXR5IGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgLmFkZC1wcmlvcml0eSB7XFxuICAgIHJpZ2h0OiAtMTBweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG4gIC5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuICB9XFxuICAuYWRkLXByaW9yaXR5OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDE0cHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuICB9XFxufVxcblxcbi5hZGRfX2ZpbmlzaCxcXG4uZWRpdF9fZmluaXNoIHtcXG4gIG1hcmdpbjogMC41cmVtIDFyZW07XFxufVxcblxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYWdlX19oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogIzJhMmI2ODtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIGxpOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5uYXYge1xcbiAgYmFja2dyb3VuZDogI2VlZjBmMTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgcGFkZGluZzogMnJlbSAwLjI1cmVtIDAgMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxufVxcbi5uYXYtLWhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG4ubmF2X19jYXRlZ29yeSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuLm5hdl9fY2F0ZWdvcnk6bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDQpO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaTpob3ZlciAuYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkgPiAuYnRuIHtcXG4gIGZsZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDcpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4ubWFpbi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1cHgpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1haW4tLWhpZGRlbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuLnNlY3Rpb25fX25hbWVfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc2VjdGlvbl9fbmFtZV9fY29udGFpbmVyOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXG5cXHQmOmZvY3VzIHtcXG5cXHRcXHRvdXRsaW5lOiBub25lO1xcblxcdH1cXG59XFxuXFxuKiB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogNTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjI1ZW0pO1xcbn1cXG5cXG4ubm8tZGlzcGxheSB7XFxuXFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cIixcImJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbiAgZm9udC1zaXplOiAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMDUpO1xcbiAgfVxcblxcbiAgJjpmb2N1cyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjg1KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjI1cmVtIC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxuXFxuLmJ0biB7XFxuICAmLS1wYWdlLS1oZWFkZXIge1xcbiAgICBjb2xvcjogJGNvbG9yLWhlYWRlcjtcXG4gIH1cXG5cXG4gICYtLWljb24ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxuXFxuICAmLS1zdWJtaXQsXFxuICAmLS1jYW5jZWwge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IC44NWVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLS41cHg7XFxuICB9XFxuXFxuICAmLS1zdWJtaXQge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG5cXG4gICYtLWNhbmNlbCxcXG4gICYtLWFkZCB7XFxuICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNDUpO1xcblxcbiAgICAmOmhvdmVyLFxcbiAgICAmOmhvdmVyOmJlZm9yZSB7XFxuICAgICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43NSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtLXNlY3Rpb24ge1xcbiAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43NSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gTmF2XFxuXFxuLm5hdiB7XFxuICAmLS1oZWFkaW5nIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcXG4gIH1cXG59XFxuXFxuW2RhdGEtdG9nZ2xlPVxcXCJhZGQtcHJvamVjdFxcXCJdIHtcXG4gIGNvbG9yOiByZ2JhKCMwMDAsIC43NSk7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6ICMwMDA7XFxuICB9XFxuXFxufVxcblxcbi5tYWluX19oZWFkZXIgYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4udG8tZG9fX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8vIEZvcm1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG59XFxuXFxuW25hbWU9XFxcInRpdGxlXFxcIl0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9XFxcImRhdGVcXFwiXSB7XFxuICBjb2xvcjogJGNvbG9yLWZvcm07XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVwiLFwiLy8gRm9udHNcXG4kZm9udC1wcmltYXJ5OiAnTmFudW0gR290aGljJywgQXJpYWw7XFxuXFxuXFxuLy8gQ29sb3JzXFxuJGNvbG9yLXByaW1hcnk6IHJnYig0MiwgNDMsIDEwNCk7XFxuJGNvbG9yLXNlY29uZGFyeTogcmdiKDIzOCwgMjQwLCAyNDEpO1xcblxcbiRjb2xvci1oZWFkZXI6ICNmZmY7XFxuJGNvbG9yLXByb2plY3RzOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuJGNvbG9yLWZvcm06IHJnYigxNDIsIDE0MiwgMTQyKTtcXG5cXG4kY29sb3ItcHJpb3JpdHk6IChcXG4gIGhpZ2g6IHJnYigxNjEsIDY2LCA2NiksXFxuICBtZWQ6IHJnYigyMzEsIDE1NCwgMTAzKSxcXG4gIGxvdzogcmdiKDkzLCAxNTEsIDkxKSxcXG4gIG5vbmU6IHJnYigxOTksIDE5OSwgMTk5KVxcbik7XFxuXFxuJGNvbG9yLWRhdGU6IChcXG4gIGFsbDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTUlKSxcXG4gIHRvZGF5OiByZ2IoMjM1LCAxNTMsIDk5KSxcXG4gIHVwY29taW5nOiByZ2IoMTQxLCA5MCwgMTM3KSxcXG4gIGFueXRpbWU6IHJnYigxMjIsIDEyMiwgMTIyKSxcXG4gIGxhdGU6IHJnYigxNDgsIDMyLCAzMilcXG4pO1xcblxcbiRjb2xvci1zb3J0OiAoXFxuICB0aXRsZTogcmdiKDQ4LCA5MiwgNDgpLFxcbiAgZGVzY3JpcHRpb246IHJnYigyMzUsIDE4NSwgNzkpLFxcbiAgZGF0ZTogcmdiKDEwMiwgMTUxLCAxNDUpLFxcbiAgcHJpb3JpdHk6IG1hcC1nZXQoJGNvbG9yLXByaW9yaXR5LCBoaWdoKVxcbik7XFxuXFxuLy8gSWNvbnNcXG5cXG4kaWNvbi1wcmlvcml0eTogXFxcIlxcXFxmMDJlXFxcIjtcXG5cXG4kaWNvbnMtZGF0ZTogKFxcbiAgYWxsOiBcXFwiXFxcXGYwNzNcXFwiLFxcbiAgdG9kYXk6IFxcXCJcXFxcZjI3MlxcXCIsXFxuICB1cGNvbWluZzogXFxcIlxcXFxmMjc0XFxcIixcXG4gIGFueXRpbWU6IFxcXCJcXFxcZjEzM1xcXCIsXFxuKTtcXG5cXG4kaWNvbnMtY2FyZXQ6IChcXG4gIHVwOiBcXFwiXFxcXGYwZDhcXFwiLFxcbiAgZG93bjogXFxcIlxcXFxmMGQ3XFxcIixcXG4gIHJpZ2h0OiBcXFwiXFxcXGYwZGFcXFwiXFxuKTtcXG5cXG4kaWNvbnMtc29ydDogKFxcbiAgdGl0bGU6IFxcXCJcXFxcZjMyOFxcXCIsXFxuICBkZXNjcmlwdGlvbjogXFxcIlxcXFxmMjQ5XFxcIixcXG4gIGRhdGU6IFxcXCJcXFxcZjA3M1xcXCIsXFxuICBwcmlvcml0eTogJGljb24tcHJpb3JpdHksXFxuKTtcXG5cXG4kaWNvbi1hZGQ6IFxcXCJcXFxcZjA2N1xcXCI7XFxuJGljb24tZWRpdDogXFxcIlxcXFxmMDQ0XFxcIjtcXG5cXG4vLyBPdGhlcnNcXG4kbWFyZ2luLWluZGVudDogMCAuMjVyZW0gMCAxLjI1cmVtO1wiLFwiYnV0dG9uIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgXFxuICAmOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAuMTVyZW0gLjVyZW07XFxufVxcbiAgXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogLjI1cmVtO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43KTtcXG4gIH1cXG59XFxuXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoI2ZmZiwgLjUpO1xcbn1cXG5cXG4uYnRuLS1hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICRpY29uLWFkZDtcXG4gIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbi5idG4tLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG5cXG4gICY6YmVmb3JlLFxcbiAgJjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMjUpO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgfVxcblxcbiAgJjpob3ZlcjpiZWZvcmUsXFxuICAmOmhvdmVyOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiAgfVxcblxcbiAgJjpiZWZvcmUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICB9XFxuXFxuICAmOmFmdGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICB9XFxufVxcblxcbi5idG4tLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlblxcbn1cXG5cXG4uYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxufVxcblxcbi5idG4tLWVkaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC01cHg7XFxuICB0b3A6IDEwcHg7XFxuICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiAgZGlzcGxheTogbm9uZTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjc1KTtcXG4gIH1cXG5cXG59XCIsXCJAbWl4aW4gZm9udC1hd2Vzb21lLTQwMCgpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5AbWl4aW4gZm9udC1hd2Vzb21lLTcwMCgpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5AbWl4aW4gaWNvbi1jb250ZW50KCR0YXJnZXQsICRtYXApIHtcXG4gIEBlYWNoICRrZXksICRpY29uIGluICRtYXAge1xcbiAgICAuI3skdGFyZ2V0fS0jeyRrZXl9OjpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6ICRpY29uO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtaXhpbiBpY29uLWNvbG9yKCR0YXJnZXQsICRtYXApIHtcXG4gIEBlYWNoICRrZXksICRjb2xvciBpbiAkbWFwIHtcXG4gICAgLiN7JHRhcmdldH0tI3ska2V5fTo6YmVmb3JlIHtcXG4gICAgICBjb2xvcjogJGNvbG9yO1xcbiAgICB9XFxuICB9XFxufVwiLFwiLy8gTkFWLUlDT05TXFxuXFxuLm5hdiB7XFxuICAmX190by1kbyBsaTpiZWZvcmUsXFxuICAmX19wcm9qZWN0cyBsaTpiZWZvcmUsXFxuICAmX19maWx0ZXJzIGxpOmJlZm9yZSxcXG4gICZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICAgIG1hcmdpbjogJG1hcmdpbi1pbmRlbnQ7XFxuICB9XFxuXFxuICAmX190by1kbyBsaTpiZWZvcmUsXFxuICAmX19zb3J0cyBsaTpiZWZvcmUge1xcbiAgICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNDAwKCk7XFxuICB9XFxuXFxuICAmX19wcm9qZWN0cyBsaTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4pqrXFxcIjtcXG4gICAgY29sb3I6ICRjb2xvci1wcm9qZWN0cztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0X2xpc3RfX2FkZDpiZWZvcmUge1xcbiAgICBjb250ZW50OiAkaWNvbi1hZGQ7XFxuICAgIEBpbmNsdWRlIGZvbnQtYXdlc29tZS03MDAoKTtcXG4gIH1cXG5cXG4gICZfX2ZpbHRlcnMgbGk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDJlXFxcIjtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTQwMCgpO1xcbiAgfVxcbn1cXG5cXG4vLyBDb2xvciBQcmlvcml0eSBJY29uc1xcbkBlYWNoICRsZXZlbCwgJGNvbG9yIGluICRjb2xvci1wcmlvcml0eSB7XFxuICAucHJpb3JpdHktI3skbGV2ZWx9IHtcXG4gICAgY29sb3I6ICRjb2xvcjtcXG4gIH1cXG59XFxuXFxuLy8gRGF0ZSBJY29uc1xcbkBpbmNsdWRlIGljb24tY29udGVudCgnZGF0ZScsICRpY29ucy1kYXRlKTtcXG5AaW5jbHVkZSBpY29uLWNvbG9yKCdkYXRlJywgJGNvbG9yLWRhdGUpO1xcblxcbi8vIENhdGVnb3J5IEljb25zXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogbWFwLWdldCgkaWNvbnMtY2FyZXQsIGRvd24pO1xcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbiAgbWFyZ2luLXJpZ2h0OiAuNzVyZW07XFxufVxcblxcbi8vIFNvcnQgSWNvbnNcXG5AaW5jbHVkZSBpY29uLWNvbnRlbnQoJ3NvcnQnLCAkaWNvbnMtc29ydCk7XFxuQGluY2x1ZGUgaWNvbi1jb2xvcignc29ydCcsICRjb2xvci1zb3J0KTtcXG5cXG4vLyBNQUlOIElDT05TXFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogbWFwLWdldCgkaWNvbnMtY2FyZXQsIGRvd24pO1xcbiAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbn1cIixcIi50by1kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYuNXJlbSAxZnIgNi41cmVtIDJyZW07XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1nYXA6IDEuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAuNzVyZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMSk7XFxuXFxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMywgYXV0bykgLyBhdXRvIDFmciAycmVtO1xcbiAgICBncmlkLWdhcDogLjVyZW07XFxuXFxuICAgICZfX2NoZWNrIHtcXG4gICAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICB9XFxuXFxuICAgICZfX3ByaW9yaXR5IHtcXG4gICAgICBncmlkLXJvdzogMTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJjpsYXN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgfVxcbiAgXFxuICAmX19jaGVjayB7XFxuICAgIG1hcmdpbi10b3A6IDdweDtcXG4gIH1cXG5cXG4gICY6aG92ZXIgLmJ0bi0tZWRpdCB7XFxuICAgIGRpc3BsYXk6IGluaXRpYWw7XFxuICB9XFxuXFxufVwiLFwiLmRyb3Bkb3duIHtcXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzIGxpbmVhcjtcXG59XCIsXCIuYWRkX19jb250ZW50LFxcbi5lZGl0X19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG5cXG4gICYtLXRvZG8ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcXG4gIH1cXG5cXG4gICYtLXByb2plY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBwYWRkaW5nOiAuMTVyZW07XFxuICB9XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IC4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuW25hbWU9XFxcInRpdGxlXFxcIl0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyxcXG4uZWRpdF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHksXFxuLmVkaXRfX3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG4gIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGVmdDogLTEwcHg7XFxuICB0b3A6IDEuNjVyZW07XFxuICB6LWluZGV4OiAxO1xcblxcbiAgJjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTVweDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gICY6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTZweDtcXG4gICAgbGVmdDogMTRweDtcXG4gIH1cXG5cXG4gIGxhYmVsIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgLjVyZW07XFxuICB9XFxuXFxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4gICAgcmlnaHQ6IC0xMHB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgcmlnaHQ6IDE1cHg7XFxuICAgICAgbGVmdDogaW5pdGlhbDtcXG4gICAgfVxcbiAgXFxuICAgICY6YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAxNHB4O1xcbiAgICAgIGxlZnQ6IGluaXRpYWw7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmFkZF9fZmluaXNoLFxcbi5lZGl0X19maW5pc2gge1xcbiAgbWFyZ2luOiAuNXJlbSAxcmVtO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoI2ZmZiwgLjUpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLFwiLnBhZ2VfX2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgXFxuXFxuICB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuXFxuICAgICYgbGk6bGFzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIH1cXG4gIH1cXG59XCIsXCIubmF2IHtcXG4gIFxcbiAgYmFja2dyb3VuZDogJGNvbG9yLXNlY29uZGFyeTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4yNSk7XFxuICBwYWRkaW5nOiAycmVtIC4yNXJlbSAwIDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW47XFxuXFxuICAmLS1oaWRkZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgfVxcblxcbiAgJl9fY2F0ZWdvcnkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMSk7XFxuXFxuICAgICY6bGFzdC1vZi10eXBlIHtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICB9XFxuXFxuICAgIGxpIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIFxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjA0KTtcXG4gICAgICB9XFxuXFxuICAgICAgJjpob3ZlciAuYnRuLS1kZWxldGUge1xcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcXG4gICAgICB9XFxuXFxuICAgICAgPiAuYnRuIHtcXG4gICAgICAgIC8vIE1ha2VzIHRoZSB3aG9sZSBsaW5lIGNsaWNrYWJsZSBpbnN0ZWFkIG9mIGp1c3QgdGhlIHRleHQuXFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAmLS1oZWFkaW5nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjA3KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxufVwiLFwibWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4ubWFpbi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1cHgpO1xcblxcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXFxuICB9XFxufVxcblxcbi5zZWN0aW9uX19uYW1lX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICY6aG92ZXIgLmJ0bi0tZGVsZXRlIHtcXG4gICAgZGlzcGxheTogaW5pdGlhbDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFByb2plY3RDb250cm9sbGVyIH0gZnJvbSAnLi9Qcm9qZWN0Q29udHJvbGxlcidcbmltcG9ydCB7IFByb2plY3RNb2RlbCB9IGZyb20gJy4vUHJvamVjdE1vZGVsJ1xuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tICcuL1Byb2plY3RWaWV3J1xuaW1wb3J0IHsgVG9kb0xpc3RDb250cm9sbGVyIH0gZnJvbSAnLi9Ub2RvTGlzdENvbnRyb2xsZXInXG5pbXBvcnQgeyBUb2RvTGlzdE1vZGVsIH0gZnJvbSAnLi9Ub2RvTGlzdE1vZGVsJ1xuaW1wb3J0IHsgVG9kb0xpc3RWaWV3IH0gZnJvbSAnLi9Ub2RvTGlzdFZpZXcnXG5cbmV4cG9ydCBjbGFzcyBBcHBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vZGVsLCB2aWV3KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgdGhpcy52aWV3ID0gdmlld1xuXG4gICAgdGhpcy52aWV3LmJpbmRBZGRQcm9qZWN0KHRoaXMuaGFuZGxlQWRkUHJvamVjdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGVsZXRlUHJvamVjdCh0aGlzLmhhbmRsZURlbGV0ZVByb2plY3QuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZENoYW5nZU5hbWUodGhpcy5oYW5kbGVDaGFuZ2VOYW1lLmJpbmQodGhpcykpXG5cbiAgICB0aGlzLnZpZXcuYmluZEhvbWUodGhpcy5oYW5kbGVIb21lLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmROYXZUb2dnbGUodGhpcy5oYW5kbGVOYXZUb2dnbGUuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZFRvZ2dsZSh0aGlzLmhhbmRsZVRvZ2dsZS5iaW5kKHRoaXMpKVxuXG4gICAgdGhpcy52aWV3LmJpbmREaXNwbGF5QWxsKHRoaXMuaGFuZGxlRGlzcGxheUFsbC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kUHJpb3JpdHkodGhpcy5oYW5kbGVQcmlvcml0eS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGF0ZVRvZGF5KHRoaXMuaGFuZGxlVG9kYXkuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERhdGVVcGNvbWluZyh0aGlzLmhhbmRsZVVwY29taW5nLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREYXRlQW55dGltZSh0aGlzLmhhbmRsZUFueXRpbWUuYmluZCh0aGlzKSlcblxuICAgIHRoaXMudmlldy5iaW5kU29ydFRpdGxlKHRoaXMuaGFuZGxlU29ydFRpdGxlLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRTb3J0RGVzY3JpcHRpb24odGhpcy5oYW5kbGVTb3J0RGVzY3JpcHRpb24uYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZFNvcnREYXRlKHRoaXMuaGFuZGxlU29ydERhdGUuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZFNvcnRQcmlvcml0eSh0aGlzLmhhbmRsZVNvcnRQcmlvcml0eS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgLy8gRGlzcGxheSB0aGUgbmV3IHByb2plY3QgYW5kIGNyZWF0ZSBhIGJ1dHRvbiBsaW5rZWQgdG8gdGhlIHByb2plY3QgaW4gdGhlIG5hdmlnYXRpb24uXG4gIGhhbmRsZUFkZFByb2plY3QgKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RDb250cm9sbGVyKG5ldyBQcm9qZWN0TW9kZWwobmFtZSksIG5ldyBQcm9qZWN0VmlldyhQcm9qZWN0TW9kZWwuY291bnRlcikpXG4gICAgdGhpcy5tb2RlbC5hZGRQcm9qZWN0KHByb2plY3QpXG5cbiAgICBwcm9qZWN0Lm1vZGVsLmFkZFRvZG9MaXN0KG5ldyBUb2RvTGlzdENvbnRyb2xsZXIobmV3IFRvZG9MaXN0TW9kZWwoJ0RlZmF1bHQnLCBwcm9qZWN0Lm1vZGVsLmlkKSwgbmV3IFRvZG9MaXN0VmlldygpKSlcbiAgICB0aGlzLmRpc3BsYXlQcm9qZWN0KHByb2plY3QpXG4gICAgdGhpcy52aWV3LnJlbmRlckJ0bihuYW1lLCBwcm9qZWN0Lm1vZGVsLmlkKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByb2plY3Q9XCJwcm9qZWN0LSR7cHJvamVjdC5tb2RlbC5pZH1cIl1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlTmF2Q2xpY2socHJvamVjdCkpXG4gIH1cblxuICAvLyBMaW5rcyB0aGUgbmV3bHkgY3JlYXRlZCBuYXZpZ2F0aW9uIGJ1dHRvbiB0byBpdHMgcHJvamVjdFxuICBoYW5kbGVOYXZDbGljayAocHJvamVjdCkge1xuICAgIHRoaXMuZGlzcGxheVByb2plY3QocHJvamVjdClcbiAgfVxuXG4gIGRpc3BsYXlQcm9qZWN0IChwcm9qZWN0KSB7XG4gICAgcHJvamVjdC52aWV3LnJlbmRlck5hbWUocHJvamVjdC5tb2RlbC5uYW1lLCBwcm9qZWN0Lm1vZGVsLmlkKVxuICAgIHByb2plY3Qudmlldy5yZW5kZXIocHJvamVjdC5tb2RlbC50b2RvTGlzdHMpXG4gICAgcHJvamVjdC52aWV3LnJlbmRlckZvcm0ocHJvamVjdC5tb2RlbC5mb3JtKVxuICAgIHByb2plY3Qudmlldy5nZXRGb3JtKClcbiAgICBwcm9qZWN0LmJpbmRBZGQoKVxuICB9XG5cbiAgLy8gV2hlbiBhIHByb2plY3QgaXMgZGVsZXRlZCwgaXQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBtb2RlbCBhbmQgZnJvbSB0aGUgbmF2aWdhdGlvbi5cbiAgLy8gVGhlIEhvbWVwYWdlIGlzIGRpc3BsYXllZCBpbnN0ZWFkLlxuICBoYW5kbGVEZWxldGVQcm9qZWN0IChpZCkge1xuICAgIHRoaXMubW9kZWwuZGVsZXRlUHJvamVjdChpZClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0PVwicHJvamVjdC0ke2lkfVwiXWApLnJlbW92ZSgpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdD1cInByb2plY3QtMVwiXScpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlTmFtZSAoaWQsIG5hbWUpIHtcbiAgICB0aGlzLm1vZGVsLmVkaXRQcm9qZWN0KGlkLCBuYW1lKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWZpbHRlcj1cInByb2plY3QtJHtpZH1cIl1gKS50ZXh0Q29udGVudCA9IG5hbWVcbiAgfVxuXG4gIC8vIEVuYWJsZSBhbGwgdG9nZ2xlIGJ1dHRvbnNcbiAgaGFuZGxlVG9nZ2xlIChldmVudCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V2ZW50LnRhcmdldC5kYXRhc2V0LnRvZ2dsZX1gKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICB9XG5cbiAgLy8gTW9kaWZ5IHNwYWNlIG9jY3VwaWVkIGJ5IGNvbnRlbnQgd2hlbiB0aGUgbmF2aWdhdGlvbiBpcyBoaWRkZW4gLyBkaXNwbGF5ZWQuXG4gIGhhbmRsZU5hdlRvZ2dsZSAoKSB7XG4gICAgdGhpcy52aWV3Lm5hdi5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWhpZGRlbicpXG4gICAgdGhpcy52aWV3Lm1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnbWFpbi0taGlkZGVuJylcbiAgfVxuXG4gIC8vIEVuYWJsZSBwcmlvcml0eSBmaWx0ZXJzXG4gIGhhbmRsZVByaW9yaXR5IChwcmlvcml0eSkge1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgaWYgKHRvZG8uZGF0YXNldC5wcmlvcml0eSAhPT0gcHJpb3JpdHkpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNvbXBhcmVzIDIgZGF5cyAodXNlZCBmb3IgZGF0ZSBmaWx0ZXJzKVxuICBfc2FtZURheSAoZGF0ZTEsIGRhdGUyKSB7XG4gICAgY29uc3QgdG9kb0RhdGUgPSBuZXcgRGF0ZShkYXRlMSlcbiAgICBpZiAodG9kb0RhdGUuZ2V0RGF0ZSgpID09PSBkYXRlMi5nZXREYXRlKCkgJiZcbiAgICB0b2RvRGF0ZS5nZXRNb250aCgpID09PSBkYXRlMi5nZXRNb250aCgpICYmXG4gICAgdG9kb0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZTIuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBEYXRlcyBmaWx0ZXJzXG4gIGhhbmRsZVRvZGF5ICgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0aGlzLl9zYW1lRGF5KHRvZG8uZGF0YXNldC5kYXRlLCB0b2RheSkpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVVwY29taW5nICgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICghdGhpcy5fc2FtZURheSh0b2RvLmRhdGFzZXQuZGF0ZSwgdG9kYXkpICYmIG5ldyBEYXRlKHRvZG8uZGF0YXNldC5kYXRlKSA+IHRvZGF5KSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ25vLWRpc3BsYXknKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBbnl0aW1lICgpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0b2RvLmRhdGFzZXQuZGF0ZSAhPT0gJycpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIERpc2FibGUgZmlsdGVyc1xuICBoYW5kbGVEaXNwbGF5QWxsICgpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpKVxuICB9XG5cbiAgLy8gU29ydFxuICBoYW5kbGVTb3J0VGl0bGUgKHByb2plY3RJZCkge1xuICAgIHRoaXMubW9kZWwucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSArcHJvamVjdElkKVswXVxuICAgICAgLm1vZGVsLnRvZG9MaXN0cy5mb3JFYWNoKCh0b2RvTGlzdCkgPT4gdG9kb0xpc3QubW9kZWwuc29ydFRpdGxlKCkpXG4gIH1cblxuICBoYW5kbGVTb3J0RGVzY3JpcHRpb24gKHByb2plY3RJZCkge1xuICAgIHRoaXMubW9kZWwucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSArcHJvamVjdElkKVswXVxuICAgICAgLm1vZGVsLnRvZG9MaXN0cy5mb3JFYWNoKCh0b2RvTGlzdCkgPT4gdG9kb0xpc3QubW9kZWwuc29ydERlc2NyaXB0aW9uKCkpXG4gIH1cblxuICBoYW5kbGVTb3J0RGF0ZSAocHJvamVjdElkKSB7XG4gICAgdGhpcy5tb2RlbC5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICtwcm9qZWN0SWQpWzBdXG4gICAgICAubW9kZWwudG9kb0xpc3RzLmZvckVhY2goKHRvZG9MaXN0KSA9PiB0b2RvTGlzdC5tb2RlbC5zb3J0RGF0ZSgpKVxuICB9XG5cbiAgaGFuZGxlU29ydFByaW9yaXR5IChwcm9qZWN0SWQpIHtcbiAgICB0aGlzLm1vZGVsLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gK3Byb2plY3RJZClbMF1cbiAgICAgIC5tb2RlbC50b2RvTGlzdHMuZm9yRWFjaCgodG9kb0xpc3QpID0+IHRvZG9MaXN0Lm1vZGVsLnNvcnRQcmlvcml0eSgpKVxuICB9XG5cbiAgLy8gSG9tZSBwYWdlXG4gIGhhbmRsZUhvbWUgKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3Q9XCJwcm9qZWN0LTFcIl0nKS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9jYWxTdG9yYWdlTW9kdWxlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VNb2R1bGUnXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW11cbiAgfVxuXG4gIGFkZFByb2plY3QgKHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdClcbiAgICBwcm9qZWN0LmlkID0gKytBcHBNb2RlbC5jb3VudGVyXG4gICAgbG9jYWxTdG9yYWdlTW9kdWxlLnVwZGF0ZVByb2plY3RMaXN0KHRoaXMucHJvamVjdHMpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0FwcE1vZGVsQ291bnRlcicsIEFwcE1vZGVsLmNvdW50ZXIpXG4gIH1cblxuICBkZWxldGVQcm9qZWN0IChpZCkge1xuICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IGlkKVxuICAgIGxvY2FsU3RvcmFnZU1vZHVsZS51cGRhdGVQcm9qZWN0TGlzdCh0aGlzLnByb2plY3RzKVxuICB9XG5cbiAgZWRpdFByb2plY3QgKGlkLCBuYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5tb2RlbC5pZCA9PT0gK2lkKSB7XG4gICAgICAgIHByb2plY3QubW9kZWwubmFtZSA9IG5hbWVcbiAgICAgICAgbG9jYWxTdG9yYWdlTW9kdWxlLnVwZGF0ZVByb2plY3RMaXN0KHRoaXMucHJvamVjdHMpXG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvamVjdFxuICAgIH0pXG4gIH1cbn1cblxuQXBwTW9kZWwuY291bnRlciA9IDBcbiIsImV4cG9ydCBjbGFzcyBBcHBWaWV3IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIHRoaXMuaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWhvbWUnKVxuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIHRoaXMucHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19uYW1lJylcblxuICAgIC8vIEZvcm0gdG8gY3JlYXRlIG5ldyBwcm9qZWN0c1xuICAgIHRoaXMucHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC0tcHJvamVjdCBbbmFtZT1cIm5hbWVcIl0nKVxuICAgIHRoaXMucHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtLXByb2plY3QnKVxuXG4gICAgLy8gU29ydCB0YXNrc1xuICAgIHRoaXMuc29ydFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtdGl0bGUnKVxuICAgIHRoaXMuc29ydERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtZGVzY3JpcHRpb24nKVxuICAgIHRoaXMuc29ydERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1kYXRlJylcbiAgICB0aGlzLnNvcnRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LXByaW9yaXR5JylcblxuICAgIC8vIEZpbHRlciB0YXNrc1xuICAgIHRoaXMuZGlzcGxheUFsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZpbHRlcj1cImFsbFwiXScpXG4gICAgdGhpcy5wcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZpbHRlcl49XCJwcmlvcml0eVwiXScpXG4gICAgdGhpcy5kYXRlVG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1maWx0ZXI9XCJkYXRlLXRvZGF5XCJdJylcbiAgICB0aGlzLmRhdGVVcGNvbWluZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbHRlcj1cImRhdGUtdXBjb21pbmdcIl0nKVxuICAgIHRoaXMuZGF0ZUFueXRpbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1maWx0ZXI9XCJkYXRlLWFueXRpbWVcIl0nKVxuXG4gICAgLy8gVG9nZ2xlIE5hdmlnYXRpb25cbiAgICB0aGlzLm5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZ2dsZT1cIm5hdlwiXScpXG4gICAgdGhpcy5uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JylcblxuICAgIC8vIEVkaXQgUHJvamVjdCBOYW1lXG4gICAgdGhpcy5fdGVtcG9yYXJ5TmFtZSA9ICcnXG4gICAgdGhpcy5fY2hhbmdlTmFtZSgpXG4gIH1cblxuICAvLyBHZXQgbmV3IHByb2plY3QncyBuYW1lXG4gIGdldCBfcHJvamVjdE5hbWUgKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RJbnB1dC52YWx1ZVxuICB9XG5cbiAgLy8gUmVzZXQgSW5wdXQgdG8gY3JlYXRlIGEgbmV3IHByb2plY3RcbiAgX3Jlc2V0SW5wdXQgKCkge1xuICAgIHRoaXMucHJvamVjdElucHV0LnZhbHVlID0gJydcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgbmF2aWdhdGlvbiBidXR0b24gbGlua2VkIHRvIHRoZSBwcm9qZWN0XG4gIHJlbmRlckJ0biAobmFtZSwgaWQpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdidG4tLXByb2plY3QnKVxuICAgIGxpLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgYHByb2plY3QtJHtpZH1gKVxuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tZmlsdGVyJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXInLCBgcHJvamVjdC0ke2lkfWApXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IG5hbWVcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tLWRlbGV0ZScpXG4gICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2xvc2VCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPidcblxuICAgIGxpLmFwcGVuZChidXR0b24sIGNsb3NlQnRuKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmFwcGVuZChsaSlcbiAgfVxuXG4gIGJpbmRBZGRQcm9qZWN0IChoYW5kbGVyKSB7XG4gICAgdGhpcy5wcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaGFuZGxlcih0aGlzLl9wcm9qZWN0TmFtZSlcbiAgICAgIHRoaXMuX3Jlc2V0SW5wdXQoKVxuICAgIH0pXG4gIH1cblxuICBiaW5kRGVsZXRlUHJvamVjdCAoaGFuZGxlcikge1xuICAgIHRoaXMubmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSkgcmV0dXJuXG5cbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tLWRlbGV0ZScpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xpJykuZGF0YXNldC5wcm9qZWN0LnNsaWNlKDgpXG4gICAgICAgIGhhbmRsZXIoaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIE5hdmlnYXRpb24gdG9nZ2xlc1xuICBiaW5kVG9nZ2xlIChoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnRvZ2dsZSkge1xuICAgICAgICBoYW5kbGVyKGV2ZW50KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kTmF2VG9nZ2xlIChoYW5kbGVyKSB7XG4gICAgdGhpcy5uYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgLy8gSG9tZSBwYWdlXG4gIGJpbmRIb21lIChoYW5kbGVyKSB7XG4gICAgdGhpcy5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbiAgfVxuXG4gIC8vIEZpbHRlcnNcbiAgYmluZFByaW9yaXR5IChoYW5kbGVyKSB7XG4gICAgdGhpcy5wcmlvcml0eUJ0bi5mb3JFYWNoKChwcmlvcml0eUJ0bikgPT4gcHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IGhhbmRsZXIoZXZlbnQudGFyZ2V0LmRhdGFzZXQuZmlsdGVyLnNsaWNlKDkpKSkpXG4gIH1cblxuICBiaW5kRGF0ZVRvZGF5IChoYW5kbGVyKSB7XG4gICAgdGhpcy5kYXRlVG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgYmluZERhdGVVcGNvbWluZyAoaGFuZGxlcikge1xuICAgIHRoaXMuZGF0ZVVwY29taW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbiAgfVxuXG4gIGJpbmREYXRlQW55dGltZSAoaGFuZGxlcikge1xuICAgIHRoaXMuZGF0ZUFueXRpbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgYmluZERpc3BsYXlBbGwgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmRpc3BsYXlBbGxCdG4uZm9yRWFjaCgoZGlzcGxheUFsbEJ0bikgPT4gZGlzcGxheUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpKVxuICB9XG5cbiAgLy8gU29ydFxuICBiaW5kU29ydFRpdGxlIChoYW5kbGVyKSB7XG4gICAgdGhpcy5zb3J0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSB0aGlzLnByb2plY3QuaWRcbiAgICAgIGhhbmRsZXIocHJvamVjdElkKVxuICAgIH0pXG4gIH1cblxuICBiaW5kU29ydERlc2NyaXB0aW9uIChoYW5kbGVyKSB7XG4gICAgdGhpcy5zb3J0RGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSB0aGlzLnByb2plY3QuaWRcbiAgICAgIGhhbmRsZXIocHJvamVjdElkKVxuICAgIH0pXG4gIH1cblxuICBiaW5kU29ydFByaW9yaXR5IChoYW5kbGVyKSB7XG4gICAgdGhpcy5zb3J0UHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSB0aGlzLnByb2plY3QuaWRcbiAgICAgIGhhbmRsZXIocHJvamVjdElkKVxuICAgIH0pXG4gIH1cblxuICBiaW5kU29ydERhdGUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnNvcnREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gdGhpcy5wcm9qZWN0LmlkXG4gICAgICBoYW5kbGVyKHByb2plY3RJZClcbiAgICB9KVxuICB9XG5cbiAgLy8gRWRpdCBQcm9qZWN0IE5hbWVcblxuICBfY2hhbmdlTmFtZSAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0X19uYW1lJykpIHtcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5TmFtZSA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmluZENoYW5nZU5hbWUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3RlbXBvcmFyeU5hbWUpIHtcbiAgICAgICAgaGFuZGxlcihldmVudC50YXJnZXQuaWQsIHRoaXMuX3RlbXBvcmFyeU5hbWUpXG4gICAgICAgIHRoaXMuX3RlbXBvcmFyeU5hbWUgPSAnJ1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQcm9qZWN0Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLm1vZGVsLnRvZG9MaXN0cylcbiAgICB0aGlzLm1vZGVsLmJpbmRQcm9qZWN0Q2hhbmdlKHRoaXMub25Qcm9qZWN0Q2hhbmdlLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRDaGFuZ2VOYW1lKHRoaXMuaGFuZGxlRWRpdFRvZG9MaXN0LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREZWxldGVTZWN0aW9uKHRoaXMuaGFuZGxlRGVsZXRlVG9kb0xpc3QuYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9uUHJvamVjdENoYW5nZSAodG9kb0xpc3RzKSB7XG4gICAgdGhpcy52aWV3LnJlbmRlcih0b2RvTGlzdHMpXG4gIH1cblxuICBoYW5kbGVBZGRUb2RvTGlzdCAodG9kb0xpc3QpIHtcbiAgICB0aGlzLm1vZGVsLmFkZFRvZG9MaXN0KHRvZG9MaXN0KVxuICB9XG5cbiAgaGFuZGxlRGVsZXRlVG9kb0xpc3QgKGlkKSB7XG4gICAgdGhpcy5tb2RlbC5kZWxldGVUb2RvTGlzdChpZClcbiAgfVxuXG4gIGhhbmRsZUVkaXRUb2RvTGlzdCAoaWQsIG5hbWUpIHtcbiAgICB0aGlzLm1vZGVsLmVkaXRUb2RvTGlzdChpZCwgbmFtZSlcbiAgfVxuXG4gIGJpbmRBZGQgKCkge1xuICAgIHRoaXMudmlldy5iaW5kQWRkU2VjdGlvbih0aGlzLmhhbmRsZUFkZFRvZG9MaXN0LmJpbmQodGhpcykpXG4gIH1cbn1cbiIsImltcG9ydCB7IFNlY3Rpb25Gb3JtIH0gZnJvbSAnLi9TZWN0aW9uRm9ybSdcbmltcG9ydCB7IGxvY2FsU3RvcmFnZU1vZHVsZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlTW9kdWxlJ1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdE1vZGVsIHtcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lID09PSAnJyA/ICdVbnRpdGxlZCcgOiBuYW1lXG4gICAgdGhpcy5pZCA9ICsrUHJvamVjdE1vZGVsLmNvdW50ZXJcbiAgICB0aGlzLnRvZG9MaXN0cyA9IFtdXG4gICAgdGhpcy5mb3JtID0gbmV3IFNlY3Rpb25Gb3JtKHRoaXMuaWQpXG4gIH1cblxuICBfY29tbWl0ICh0b2RvTGlzdHMpIHtcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0b2RvTGlzdHMpXG4gICAgbG9jYWxTdG9yYWdlTW9kdWxlLnVwZGF0ZVRvZG9MaXN0cyh0aGlzLmlkLCB0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGFkZFRvZG9MaXN0ICh0b2RvTGlzdCkge1xuICAgIHRoaXMudG9kb0xpc3RzLnB1c2godG9kb0xpc3QpXG4gICAgdG9kb0xpc3QuaWQgPSB0aGlzLnRvZG9MaXN0cy5sZW5ndGhcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvTGlzdHMpXG4gIH1cblxuICBlZGl0VG9kb0xpc3QgKGlkLCBuYW1lKSB7XG4gICAgdGhpcy50b2RvTGlzdHMgPSB0aGlzLnRvZG9MaXN0cy5tYXAoKHRvZG9MaXN0KSA9PiB7XG4gICAgICBpZiAodG9kb0xpc3QubW9kZWwuaWQgPT09ICtpZCkge1xuICAgICAgICB0b2RvTGlzdC5tb2RlbC5uYW1lID0gbmFtZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRvZG9MaXN0XG4gICAgfSlcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvTGlzdHMpXG4gIH1cblxuICBkZWxldGVUb2RvTGlzdCAoaWQpIHtcbiAgICB0aGlzLnRvZG9MaXN0cyA9IHRoaXMudG9kb0xpc3RzLmZpbHRlcih0b2RvTGlzdCA9PiB0b2RvTGlzdC5tb2RlbC5pZCAhPT0gK2lkKVxuICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGJpbmRQcm9qZWN0Q2hhbmdlIChjYWxsYmFjaykge1xuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlID0gY2FsbGJhY2tcbiAgfVxufVxuXG5Qcm9qZWN0TW9kZWwuY291bnRlciA9IDBcbiIsImltcG9ydCB7IFRvZG9MaXN0Q29udHJvbGxlciB9IGZyb20gJy4vVG9kb0xpc3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgVG9kb0xpc3RNb2RlbCB9IGZyb20gJy4vVG9kb0xpc3RNb2RlbCdcbmltcG9ydCB7IFRvZG9MaXN0VmlldyB9IGZyb20gJy4vVG9kb0xpc3RWaWV3J1xuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSAnLi9Qcm9qZWN0TW9kZWwnXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0VmlldyB7XG4gIGNvbnN0cnVjdG9yIChpZCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIHRoaXMuc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbnMnKVxuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19uYW1lJylcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gJydcbiAgICB0aGlzLl9jaGFuZ2VOYW1lKClcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgbmFtZSBvZiB0aGUgcHJvamVjdFxuICByZW5kZXJOYW1lIChuYW1lLCBpZCkge1xuICAgIHRoaXMubmFtZS5pbm5lckhUTUwgPSBuYW1lXG4gICAgdGhpcy5uYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCBpZClcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgYWRkIHNlY3Rpb24gZm9ybVxuICByZW5kZXJGb3JtIChmb3JtKSB7XG4gICAgZm9ybS5yZW5kZXIoKVxuICB9XG5cbiAgLy8gR2V0IHRoZSBhZGQgc2VjdGlvbiBmb3JtIGlucHV0c1xuICBnZXRGb3JtICgpIHtcbiAgICB0aGlzLm5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfSBbbmFtZT1cInNlY3Rpb25cIl1gKVxuICAgIHRoaXMuc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlY3Rpb24tZm9ybS0ke3RoaXMuaWR9IC5idG4tLXN1Ym1pdGApXG4gICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlY3Rpb24tZm9ybS0ke3RoaXMuaWR9YClcbiAgfVxuXG4gIC8vIEdldCBTZWN0aW9uJ3MgTmFtZSBmcm9tIHRoZSBmb3JtXG4gIGdldCBfc2VjdGlvbk5hbWUgKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVJbnB1dC52YWx1ZVxuICB9XG5cbiAgLy8gUmVzZXQgZm9ybSBpbnB1dFxuICBfcmVzZXRJbnB1dCAoKSB7XG4gICAgdGhpcy5uYW1lSW5wdXQudmFsdWUgPSAnJ1xuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBwcm9qZWN0IGJ5IHJlbmRlcmluZyBldmVyeSBzZWN0aW9uXG4gIHJlbmRlciAodG9kb0xpc3RzKSB7XG4gICAgd2hpbGUgKHRoaXMuc2VjdGlvbnMuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5zZWN0aW9ucy5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB0b2RvTGlzdCBvZiB0b2RvTGlzdHMpIHtcbiAgICAgIHRvZG9MaXN0LnZpZXcuY3JlYXRlU2VjdGlvbigpXG4gICAgICB0b2RvTGlzdC52aWV3LnJlbmRlck5hbWUodG9kb0xpc3QubW9kZWwubmFtZSlcbiAgICAgIHRvZG9MaXN0LnZpZXcucmVuZGVyKHRvZG9MaXN0Lm1vZGVsLnRvZG9zKVxuICAgICAgdG9kb0xpc3Qudmlldy5yZW5kZXJGb3JtKHRvZG9MaXN0Lm1vZGVsLmZvcm0pXG4gICAgICB0b2RvTGlzdC52aWV3LmdldEZvcm0odG9kb0xpc3QubW9kZWwuZm9ybSlcbiAgICAgIHRvZG9MaXN0LmJpbmRBZGQoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEFsbG93IHNlY3Rpb24gbmFtZSBlZGl0c1xuICBfY2hhbmdlTmFtZSAoKSB7XG4gICAgdGhpcy5zZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWN0aW9uX19uYW1lJykpIHtcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5TmFtZSA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmluZENoYW5nZU5hbWUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX3RlbXBvcmFyeU5hbWUpIHtcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnW2NsYXNzXj1cInNlY3Rpb24tXCJdJykuY2xhc3NMaXN0WzBdLnNsaWNlKDgpXG4gICAgICAgIGhhbmRsZXIoaWQsIHRoaXMuX3RlbXBvcmFyeU5hbWUpXG4gICAgICAgIHRoaXMuX3RlbXBvcmFyeU5hbWUgPSAnJ1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kQWRkU2VjdGlvbiAoaGFuZGxlcikge1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtLXNlY3Rpb24nKSkge1xuICAgICAgICBoYW5kbGVyKG5ldyBUb2RvTGlzdENvbnRyb2xsZXIobmV3IFRvZG9MaXN0TW9kZWwodGhpcy5fc2VjdGlvbk5hbWUsIFByb2plY3RNb2RlbC5jb3VudGVyKSwgbmV3IFRvZG9MaXN0VmlldygpKSlcbiAgICAgICAgdGhpcy5fcmVzZXRJbnB1dCgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmREZWxldGVTZWN0aW9uIChoYW5kbGVyKSB7XG4gICAgdGhpcy5zZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYnRuLS1kZWxldGUnKSkge1xuICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYnRuLS1kZWxldGUnKS5kYXRhc2V0LmRlbGV0ZVxuICAgICAgICBoYW5kbGVyKGlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTZWN0aW9uRm9ybSB7XG4gIGNvbnN0cnVjdG9yIChpZCkge1xuICAgIHRoaXMuaWQgPSBpZFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZF9fc2VjdGlvbicpXG4gICAgZm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZm9ybUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1kcm9wZG93bicsICdidG4tLXNlY3Rpb24nKVxuICAgIGZvcm1CdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYHNlY3Rpb24tZm9ybS0ke3RoaXMuaWR9YClcbiAgICBmb3JtQnRuLmlubmVySFRNTCA9ICdBZGQgU2VjdGlvbidcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZCcsICdhZGQtLXNlY3Rpb24nLCAnZHJvcGRvd24nLCAnaGlkZGVuJylcbiAgICBmb3JtLmlkID0gYHNlY3Rpb24tZm9ybS0ke3RoaXMuaWR9YFxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdhZGRfX2NvbnRlbnQnLCAnYWRkX19jb250ZW50LS1zZWN0aW9uJylcblxuICAgIGNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIG5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3NlY3Rpb24nKVxuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWN0aW9uXFwncyBOYW1lJylcbiAgICBsYWJlbE5hbWUuYXBwZW5kKG5hbWUpXG4gICAgY29udGVudC5hcHBlbmQobGFiZWxOYW1lKVxuXG4gICAgY29uc3QgZmluaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmaW5pc2guY2xhc3NMaXN0LmFkZCgnYWRkX19maW5pc2gnKVxuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1hZGQnLCAnc2VjdGlvbicpXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLXN1Ym1pdCcpXG4gICAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdBZGQgU2VjdGlvbidcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYHNlY3Rpb24tZm9ybS0ke3RoaXMuaWR9YClcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tY2FuY2VsJylcbiAgICBjYW5jZWxCdG4uaW5uZXJIVE1MID0gJ0NhbmNlbCdcblxuICAgIGZpbmlzaC5hcHBlbmQoc3VibWl0QnRuLCBjYW5jZWxCdG4pXG4gICAgZm9ybS5hcHBlbmQoY29udGVudCwgZmluaXNoKVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kKGZvcm1CdG4sIGZvcm0pXG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9Gb3JtIH0gZnJvbSAnLi9Ub2RvRm9ybSdcblxuZXhwb3J0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlID0gJycsIHByaW9yaXR5ID0gJ25vbmUnKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kYXRlID0gZGF0ZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgIHRoaXMuaWQgPSArK1RvZG8uY291bnRlclxuICAgIHRoaXMuZWRpdEZvcm0gPSBuZXcgVG9kb0Zvcm0oJ2VkaXQnLCB0aGlzLmlkKVxuICB9XG5cbiAgcmVuZGVyIChjb250YWluZXIpIHtcbiAgICB0aGlzLnRvZG9FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLnRvZG9FbGVtLmNsYXNzTGlzdC5hZGQoJ3RvLWRvJylcbiAgICB0aGlzLnRvZG9FbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1kYXRlJywgdGhpcy5kYXRlKVxuICAgIHRoaXMudG9kb0VsZW0uc2V0QXR0cmlidXRlKCdkYXRhLXByaW9yaXR5JywgdGhpcy5wcmlvcml0eSlcbiAgICB0aGlzLnRvZG9FbGVtLmlkID0gdGhpcy5pZFxuXG4gICAgY29uc3QgdG9kb0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRvZG9DaGVjay5jbGFzc0xpc3QuYWRkKCd0by1kb19fY2hlY2snKVxuICAgIHRvZG9DaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHRoaXMudG9kb0VsZW0uYXBwZW5kKHRvZG9DaGVjaylcblxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ2RhdGUnXVxuICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGNvbXBvbmVudHMpIHtcbiAgICAgIGNvbnN0IHRvZG9Db21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdG9kb0NvbXBvbmVudC5jbGFzc0xpc3QuYWRkKGB0by1kb19fJHtjb21wb25lbnR9YClcbiAgICAgIHRvZG9Db21wb25lbnQuaW5uZXJIVE1MID0gdGhpc1tjb21wb25lbnRdXG4gICAgICB0aGlzLnRvZG9FbGVtLmFwcGVuZCh0b2RvQ29tcG9uZW50KVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvLWRvX19wcmlvcml0eScsIGBwcmlvcml0eS0ke3RoaXMucHJpb3JpdHl9YClcbiAgICB0b2RvUHJpb3JpdHkuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWJvb2ttYXJrXCI+PC9pPidcbiAgICB0aGlzLnRvZG9FbGVtLmFwcGVuZCh0b2RvUHJpb3JpdHkpXG5cbiAgICB0aGlzLnRvZG9FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0aGlzLnRvZG9FZGl0LmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLXRvZ2dsZScsICdidG4tLWVkaXQnKVxuICAgIHRoaXMudG9kb0VkaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgdGhpcy50b2RvRWRpdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYGVkaXQtdG9kby0ke3RoaXMuaWR9YClcbiAgICB0aGlzLnRvZG9FZGl0LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1wZW5jaWwtYWx0XCI+PC9pPidcbiAgICB0aGlzLnRvZG9FbGVtLmFwcGVuZCh0aGlzLnRvZG9FZGl0KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLnRvZG9FbGVtKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUb2RvQ291bnRlcicsIFRvZG8uY291bnRlcilcbiAgfVxufVxuXG5Ub2RvLmNvdW50ZXIgPSAwXG4iLCJleHBvcnQgY2xhc3MgVG9kb0Zvcm0ge1xuICBjb25zdHJ1Y3RvciAoZ29hbCwgaWQpIHtcbiAgICB0aGlzLmdvYWwgPSBnb2FsXG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICBfcmVuZGVyRm9ybSAoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9LS10b2RvYCwgJ3RvZG8tZm9ybScsICdkcm9wZG93bicpXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5nb2FsfS10b2RvLSR7dGhpcy5pZH1gKVxuXG4gICAgaWYgKHRoaXMuZ29hbCA9PT0gJ2FkZCcpIHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfV9fY29udGVudGAsIGAke3RoaXMuZ29hbH1fX2NvbnRlbnQtLXRvZG9gKVxuXG4gICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJylcbiAgICBsYWJlbFRpdGxlLmFwcGVuZCh0aXRsZSlcblxuICAgIGNvbnN0IGxhYmVsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJylcbiAgICBsYWJlbERlc2NyaXB0aW9uLmFwcGVuZChkZXNjcmlwdGlvbilcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9X19kZXRhaWxzYClcblxuICAgIGNvbnN0IGxhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKVxuICAgIGxhYmVsRGF0ZS5hcHBlbmQoZGF0ZSlcblxuICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGRfX3ByaW9yaXR5JylcbiAgICB0aGlzLnByaW9yaXR5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0aGlzLnByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHRoaXMucHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBhZGQtcHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgdGhpcy5wcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS10b2dnbGUnKVxuICAgIHRoaXMucHJpb3JpdHlCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWJvb2ttYXJrXCI+PC9pPidcblxuICAgIGNvbnN0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByaW9yaXRpZXMuY2xhc3NMaXN0LmFkZCgnYWRkLXByaW9yaXR5JywgJ2Ryb3Bkb3duJywgJ2hpZGRlbicpXG4gICAgcHJpb3JpdGllcy5zZXRBdHRyaWJ1dGUoJ2lkJywgYGFkZC1wcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICBjb25zdCBwcmlvcml0aWVzTGlzdCA9IFsnaGlnaCcsICdtZWQnLCAnbG93JywgJ25vbmUnXVxuXG4gICAgZm9yIChjb25zdCBwcmlvcml0eSBvZiBwcmlvcml0aWVzTGlzdCkge1xuICAgICAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCBgcHJpb3JpdHktJHtwcmlvcml0eX0tJHt0aGlzLmlkfWApXG4gICAgICBsYWJlbFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LSR7cHJpb3JpdHl9YCwgYHByaW9yaXR5LSR7dGhpcy5pZH1gKVxuICAgICAgbGFiZWxQcmlvcml0eS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuXG4gICAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJpb3JpdHkpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJpb3JpdHktJHtwcmlvcml0eX0tJHt0aGlzLmlkfWApXG5cbiAgICAgIGlmIChwcmlvcml0eSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgcHJpb3JpdGllcy5hcHBlbmQobGFiZWxQcmlvcml0eSwgaW5wdXRQcmlvcml0eSlcbiAgICB9XG5cbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmQodGhpcy5wcmlvcml0eUJ0biwgcHJpb3JpdGllcylcblxuICAgIGNvbnN0IGZpbmlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmluaXNoLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfV9fZmluaXNoYClcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1zdWJtaXQnKVxuICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSBgJHt0aGlzLmdvYWwudG9VcHBlckNhc2UoKS5zbGljZSgwLCAxKSArIHRoaXMuZ29hbC5zbGljZSgxKX0gVGFza2BcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYCR7dGhpcy5nb2FsfS10b2RvLSR7dGhpcy5pZH1gKVxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1jYW5jZWwnKVxuICAgIGNhbmNlbEJ0bi5pbm5lckhUTUwgPSAnQ2FuY2VsJ1xuXG4gICAgZmluaXNoLmFwcGVuZChzdWJtaXRCdG4sIGNhbmNlbEJ0bilcbiAgICBjb250ZW50LmFwcGVuZChsYWJlbFRpdGxlLCBsYWJlbERlc2NyaXB0aW9uLCBkZXRhaWxzKVxuICAgIGRldGFpbHMuYXBwZW5kKGxhYmVsRGF0ZSwgcHJpb3JpdHlDb250YWluZXIpXG4gICAgZm9ybS5hcHBlbmQoY29udGVudCwgZmluaXNoKVxuXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIHJlbmRlckFkZCAoY29udGFpbmVyKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH1fX3RvZG9gKVxuXG4gICAgdGhpcy5mb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0aGlzLmZvcm1CdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tZHJvcGRvd24nLCBgYnRuLS0ke3RoaXMuZ29hbH1gKVxuICAgIHRoaXMuZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLmZvcm1CdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGAke3RoaXMuZ29hbH0tdG9kby0ke3RoaXMuaWR9YClcbiAgICB0aGlzLmZvcm1CdG4uaW5uZXJIVE1MID0gYCR7dGhpcy5nb2FsLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLmdvYWwuc2xpY2UoMSl9IFRhc2tgXG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZCh0aGlzLmZvcm1CdG4sIHRoaXMuX3JlbmRlckZvcm0oKSlcbiAgICBjb250YWluZXIuYXBwZW5kKGZvcm1Db250YWluZXIpXG5cbiAgICB0aGlzLl9pbml0UHJpb3JpdHlUb2dnbGUoKVxuICAgIHRoaXMuX2luaXRQcmlvcml0eUxhYmVscygpXG4gIH1cblxuICByZW5kZXJFZGl0IChiZWZvcmUpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfV9fdG9kb2ApXG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZCh0aGlzLl9yZW5kZXJGb3JtKCkpXG4gICAgYmVmb3JlLmFmdGVyKGZvcm1Db250YWluZXIpXG5cbiAgICB0aGlzLl9pbml0UHJpb3JpdHlUb2dnbGUoKVxuICAgIHRoaXMuX2luaXRQcmlvcml0eUxhYmVscygpXG4gIH1cblxuICAvLyBFbmFibGUgcHJpb3JpdHkgdG9nZ2xlIGFuZCBjb2xvciBjaGFuZ2Ugd2hlbiBzZWxlY3RpbmcgYSBwcmlvcml0eVxuXG4gIF9pbml0UHJpb3JpdHlUb2dnbGUgKCkge1xuICAgIHRoaXMucHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnByaW9yaXR5QnRuLmRhdGFzZXQudG9nZ2xlfWApLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpKVxuICB9XG5cbiAgX2luaXRQcmlvcml0eUxhYmVscyAoKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgdGhpcy5sYWJlbHMuZm9yRWFjaChsYWJlbCA9PiBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZC1wcmlvcml0eS0ke3RoaXMuaWR9YCkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cImFkZC1wcmlvcml0eS0ke3RoaXMuaWR9XCJdYCkuc3R5bGUuY29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdsYWJlbCcpKS5jb2xvclxuICAgIH0pKVxuICB9XG5cbiAgLy8gUmVzZXQgcHJpb3JpdHkgY29sb3Igd2hlbiBhZGRpbmcgYSB0YXNrXG5cbiAgX2luaXRSZXNldFByaW9yaXR5ICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWRkLXRvZG8tJHt0aGlzLmlkfSAuYnRuLS1zdWJtaXRgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cImFkZC1wcmlvcml0eS0ke3RoaXMuaWR9XCJdYCkuc3R5bGUuY29sb3IgPSAnJ1xuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9Gb3JtIH0gZnJvbSAnLi9Ub2RvRm9ybSdcblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UodGhpcy5tb2RlbC50b2RvcylcbiAgICB0aGlzLm1vZGVsLmJpbmRUb2RvTGlzdENoYW5nZSh0aGlzLm9uVG9kb0xpc3RDaGFuZ2UuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERlbGV0ZVRvZG8odGhpcy5oYW5kbGVEZWxldGVUb2RvLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRPcGVuRWRpdCh0aGlzLmhhbmRsZU9wZW5FZGl0LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRFZGl0VG9kbyh0aGlzLmhhbmRsZUVkaXRUb2RvLmJpbmQodGhpcykpXG4gIH1cblxuICBvblRvZG9MaXN0Q2hhbmdlICh0b2Rvcykge1xuICAgIHRoaXMudmlldy5yZW5kZXIodG9kb3MpXG4gIH1cblxuICBoYW5kbGVBZGRUb2RvICh0b2RvKSB7XG4gICAgdGhpcy5tb2RlbC5hZGRUb2RvKHRvZG8pXG4gIH1cblxuICBoYW5kbGVFZGl0VG9kbyAodXBkYXRlZFRvZG8sIGlkKSB7XG4gICAgdGhpcy5tb2RlbC5lZGl0VG9kbyh1cGRhdGVkVG9kbywgaWQpXG4gIH1cblxuICBoYW5kbGVEZWxldGVUb2RvIChpZCkge1xuICAgIHRoaXMubW9kZWwuZGVsZXRlVG9kbyhpZClcbiAgfVxuXG4gIGhhbmRsZU9wZW5FZGl0IChpZCkge1xuICAgIC8vIFVzZXIgY2FuIG9ubHkgZWRpdCBvbmUgdGFzayBhdCBhIHRpbWUsIHNvIGlmIHRoZXJlIGlzIGFub3RoZXIgRWRpdCBGb3JtIG9wZW4sIGl0IGlzIGNsb3NlZC5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImVkaXQtdG9kb1wiXScpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdJykucmVtb3ZlKClcbiAgICB9XG4gICAgbmV3IFRvZG9Gb3JtKCdlZGl0JywgaWQpLnJlbmRlckVkaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvLWRvW2lkPVwiJHtpZH1cIl1gKSlcbiAgICB0aGlzLnZpZXcuZ2V0RWRpdEZvcm0oaWQpXG4gICAgdGhpcy52aWV3LnNldEVkaXRGb3JtKGlkKVxuICB9XG5cbiAgYmluZEFkZCAoKSB7XG4gICAgdGhpcy52aWV3LmJpbmRBZGRUb2RvKHRoaXMuaGFuZGxlQWRkVG9kby5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBUb2RvRm9ybSB9IGZyb20gJy4vVG9kb0Zvcm0nXG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VNb2R1bGUgfSBmcm9tICcuL2xvY2FsU3RvcmFnZU1vZHVsZSdcblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0TW9kZWwge1xuICBjb25zdHJ1Y3RvciAobmFtZSwgcHJvamVjdElkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZSA9PT0gJycgPyAnVW50aXRsZWQnIDogbmFtZVxuICAgIHRoaXMuaWQgPSArK1RvZG9MaXN0TW9kZWwuY291bnRlclxuICAgIHRoaXMuZm9ybSA9IG5ldyBUb2RvRm9ybSgnYWRkJywgdGhpcy5pZClcbiAgICB0aGlzLnByb2plY3RJZCA9IHByb2plY3RJZFxuICAgIHRoaXMudG9kb3MgPSBbXVxuICAgIHRoaXMuc29ydFN0YXR1cyA9ICcnXG4gIH1cblxuICBhZGRUb2RvICh0b2RvKSB7XG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pXG4gICAgdGhpcy5fY29tbWl0KHRoaXMudG9kb3MpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RvZG9MaXN0TW9kZWxDb3VudGVyJywgVG9kb0xpc3RNb2RlbC5jb3VudGVyKVxuICB9XG5cbiAgZWRpdFRvZG8gKHVwZGF0ZWRUb2RvLCBpZCkge1xuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgaWYgKHRvZG8uaWQgPT09ICtpZCkge1xuICAgICAgICByZXR1cm4gdXBkYXRlZFRvZG9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b2RvXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvcylcbiAgfVxuXG4gIGRlbGV0ZVRvZG8gKGlkKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZClcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvcylcbiAgfVxuXG4gIGJpbmRUb2RvTGlzdENoYW5nZSAoY2FsbGJhY2spIHtcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UgPSBjYWxsYmFja1xuICB9XG5cbiAgX2NvbW1pdCAodG9kb3MpIHtcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UodG9kb3MpXG4gICAgbG9jYWxTdG9yYWdlTW9kdWxlLnVwZGF0ZVRvZG9zKHRoaXMuaWQsIHRoaXMucHJvamVjdElkLCB0aGlzLnRvZG9zKVxuICB9XG5cbiAgc29ydFRpdGxlICgpIHtcbiAgICBpZiAodGhpcy5zb3J0U3RhdHVzID09PSAnZGVzY2VuZGluZycpIHtcbiAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLnNvcnQoKGEsIGIpID0+IChiLnRpdGxlKS5sb2NhbGVDb21wYXJlKGEudGl0bGUpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5zb3J0KChhLCBiKSA9PiAoYS50aXRsZSkubG9jYWxlQ29tcGFyZShiLnRpdGxlKSlcbiAgICB9XG4gICAgdGhpcy5fc29ydENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgc29ydERlc2NyaXB0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zb3J0U3RhdHVzID09PSAnZGVzY2VuZGluZycpIHtcbiAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLnNvcnQoKGEsIGIpID0+IChiLmRlc2NyaXB0aW9uKS5sb2NhbGVDb21wYXJlKGEuZGVzY3JpcHRpb24pKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5zb3J0KChhLCBiKSA9PiAoYS5kZXNjcmlwdGlvbikubG9jYWxlQ29tcGFyZShiLmRlc2NyaXB0aW9uKSlcbiAgICB9XG4gICAgdGhpcy5fc29ydENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgc29ydERhdGUgKCkge1xuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmICghYS5kYXRlKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgICB9IGVsc2UgaWYgKCFiLmRhdGUpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5zb3J0U3RhdHVzID09PSAnZGVzY2VuZGluZycpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5kYXRlKSAtIG5ldyBEYXRlKGIuZGF0ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5fc29ydENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgc29ydFByaW9yaXR5ICgpIHtcbiAgICB0aGlzLl9nZXRQcmlvcml0eVZhbHVlKClcbiAgICBpZiAodGhpcy5zb3J0U3RhdHVzID09PSAnZGVzY2VuZGluZycpIHtcbiAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHlWYWx1ZSAtIGEucHJpb3JpdHlWYWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3Muc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eVZhbHVlIC0gYi5wcmlvcml0eVZhbHVlKVxuICAgIH1cbiAgICB0aGlzLl9zb3J0Q2hhbmdlKHRoaXMudG9kb3MpXG4gIH1cblxuICBfZ2V0UHJpb3JpdHlWYWx1ZSAoKSB7XG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRoaXMudG9kb3MpIHtcbiAgICAgIHN3aXRjaCAodG9kby5wcmlvcml0eSkge1xuICAgICAgICBjYXNlICdsb3cnOlxuICAgICAgICAgIHRvZG8ucHJpb3JpdHlWYWx1ZSA9IDFcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdtZWQnOlxuICAgICAgICAgIHRvZG8ucHJpb3JpdHlWYWx1ZSA9IDJcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgICB0b2RvLnByaW9yaXR5VmFsdWUgPSAzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0b2RvLnByaW9yaXR5VmFsdWUgPSAwXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3NvcnRDaGFuZ2UgKHRvZG9zKSB7XG4gICAgdGhpcy5zb3J0U3RhdHVzID0gdGhpcy5zb3J0U3RhdHVzID09PSAnZGVzY2VuZGluZycgPyAnYXNjZW5kaW5nJyA6ICdkZXNjZW5kaW5nJ1xuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0b2RvcylcbiAgfVxufVxuXG5Ub2RvTGlzdE1vZGVsLmNvdW50ZXIgPSAwXG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9Ub2RvJ1xuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RWaWV3IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9ucycpXG4gICAgdGhpcy50b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy50b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvbGlzdCcpXG4gICAgdGhpcy5pZCA9ICsrVG9kb0xpc3RWaWV3LmNvdW50ZXJcbiAgfVxuXG4gIC8vIENyZWF0ZSBhIHNlY3Rpb25cbiAgY3JlYXRlU2VjdGlvbiAoKSB7XG4gICAgdGhpcy5zZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLnNlY3Rpb24uY2xhc3NMaXN0LmFkZChgc2VjdGlvbi0ke3RoaXMuaWR9YClcbiAgICB0aGlzLnNlY3Rpb24ucHJlcGVuZCh0aGlzLnRvZG9MaXN0KVxuICAgIHRoaXMucHJvamVjdC5hcHBlbmQodGhpcy5zZWN0aW9uKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBzZWN0aW9uJ3MgbmFtZVxuICByZW5kZXJOYW1lIChuYW1lKSB7XG4gICAgdGhpcy5uYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLm5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbl9fbmFtZV9fY29udGFpbmVyJylcblxuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aGlzLm5hbWUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbl9fbmFtZScpXG4gICAgdGhpcy5uYW1lLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSlcbiAgICB0aGlzLm5hbWUuaW5uZXJIVE1MID0gbmFtZVxuXG4gICAgdGhpcy5kZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMuZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tZGVsZXRlJylcbiAgICB0aGlzLmRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLmRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGVsZXRlJywgdGhpcy5zZWN0aW9uLmNsYXNzTGlzdFswXS5zbGljZSg4KSlcbiAgICB0aGlzLmRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+J1xuXG4gICAgdGhpcy5uYW1lQ29udGFpbmVyLmFwcGVuZCh0aGlzLm5hbWUsIHRoaXMuZGVsZXRlQnRuKVxuICAgIHRoaXMuc2VjdGlvbi5wcmVwZW5kKHRoaXMubmFtZUNvbnRhaW5lcilcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgQWRkIGZvcm1cbiAgcmVuZGVyRm9ybSAoZm9ybSkge1xuICAgIGZvcm0ucmVuZGVyQWRkKHRoaXMuc2VjdGlvbilcbiAgfVxuXG4gIC8vIEdldCB0aGUgQWRkIGZvcm0gaW5wdXRzXG4gIGdldEZvcm0gKCkge1xuICAgIHRoaXMudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke3RoaXMuaWR9IC50b2RvLWZvcm0gW25hbWU9XCJ0aXRsZVwiXWApXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cImRlc2NyaXB0aW9uXCJdYClcbiAgICB0aGlzLmRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke3RoaXMuaWR9IC50b2RvLWZvcm0gW25hbWU9XCJkYXRlXCJdYClcbiAgICB0aGlzLnN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSAuYnRuLS1zdWJtaXRgKVxuICB9XG5cbiAgLy8gR2V0IGFkZCBmb3JtIHZhbHVlc1xuICBnZXQgX3RvZG9UaXRsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUudmFsdWVcbiAgfVxuXG4gIGdldCBfdG9kb0Rlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbi52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvRGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZS52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvUHJpb3JpdHkgKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IHRoZSBFZGl0IGZvcm0gaW5wdXRzXG4gIGdldEVkaXRGb3JtICgpIHtcbiAgICB0aGlzLnRpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gW25hbWU9XCJ0aXRsZVwiXScpXG4gICAgdGhpcy5kZXNjcmlwdGlvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdIFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKVxuICAgIHRoaXMuZGF0ZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdIFtuYW1lPVwiZGF0ZVwiXScpXG4gICAgdGhpcy5wcmlvcml0eUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdIC5idG4tLXRvZ2dsZScpXG4gIH1cblxuICAvLyBBdXRvbWF0aWNhbGx5IHByZS1maWxsIHRoZSBFZGl0IGZvcm0gaW5wdXRzXG4gIHNldEVkaXRGb3JtIChpZCkge1xuICAgIHRoaXMudGl0bGVFZGl0LnZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl0gLnRvLWRvX190aXRsZWApLmlubmVySFRNTFxuICAgIHRoaXMuZGVzY3JpcHRpb25FZGl0LnZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl0gLnRvLWRvX19kZXNjcmlwdGlvbmApLmlubmVySFRNTFxuICAgIHRoaXMuZGF0ZUVkaXQudmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX2RhdGVgKS5pbm5lckhUTUxcbiAgICB0aGlzLnByaW9yaXR5RWRpdC5jbGFzc0xpc3QuYWRkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aWR9XCJdIC50by1kb19fcHJpb3JpdHlgKS5jbGFzc0xpc3RbMV0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkXj1cImVkaXQtdG9kb1wiXSBbaWRePVwiJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX3ByaW9yaXR5YCkuY2xhc3NMaXN0WzFdfVwiXWApLmNoZWNrZWQgPSB0cnVlXG4gIH1cblxuICAvLyBHZXQgdGhlIEVkaXQgZm9ybSB2YWx1ZXNcbiAgZ2V0IF9lZGl0VGl0bGUgKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlRWRpdC52YWx1ZVxuICB9XG5cbiAgZ2V0IF9lZGl0RGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uRWRpdC52YWx1ZVxuICB9XG5cbiAgZ2V0IF9lZGl0RGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUVkaXQudmFsdWVcbiAgfVxuXG4gIGdldCBfZWRpdFByaW9yaXR5ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImVkaXQtdG9kb1wiXSBbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZVxuICB9XG5cbiAgLy8gUmVzZXQgZm9ybSBpbnB1dHNcbiAgX3Jlc2V0SW5wdXRzICgpIHtcbiAgICB0aGlzLnRpdGxlLnZhbHVlID0gJydcbiAgICB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlID0gJydcbiAgICB0aGlzLmRhdGUudmFsdWUgPSAnJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3JePVwicHJpb3JpdHktbm9uZVwiXScpLmNoZWNrZWQgPSB0cnVlXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIFRvZG8gTGlzdFxuICByZW5kZXIgKHRvZG9zKSB7XG4gICAgd2hpbGUgKHRoaXMudG9kb0xpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy50b2RvTGlzdC5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICB0b2RvLnJlbmRlcih0aGlzLnRvZG9MaXN0KVxuICAgIH1cbiAgfVxuXG4gIC8vIEV2ZW50IExpc3RlbmVyc1xuXG4gIGJpbmRBZGRUb2RvIChoYW5kbGVyKSB7XG4gICAgdGhpcy5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGhhbmRsZXIobmV3IFRvZG8odGhpcy5fdG9kb1RpdGxlLCB0aGlzLl90b2RvRGVzY3JpcHRpb24sIHRoaXMuX3RvZG9EYXRlLCB0aGlzLl90b2RvUHJpb3JpdHkpKVxuICAgICAgdGhpcy5fcmVzZXRJbnB1dHMoKVxuICAgIH0pXG4gIH1cblxuICBiaW5kRGVsZXRlVG9kbyAoaGFuZGxlcikge1xuICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0by1kb19fY2hlY2snKSkge1xuICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKVxuICAgICAgICBoYW5kbGVyKGlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBPcGVuIGZvcm0gdG8gZWRpdCB0aGUgdG9kb1xuICBiaW5kT3BlbkVkaXQgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5idG4tLWVkaXQnKSkge1xuICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudG8tZG8nKS5pZClcbiAgICAgICAgaGFuZGxlcihpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmluZEVkaXRUb2RvIChoYW5kbGVyKSB7XG4gICAgdGhpcy50b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPT09ICdFZGl0IFRhc2snKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKS5pZC5zbGljZSgxMClcbiAgICAgICAgY29uc3QgdXBkYXRlZFRvZG8gPSBuZXcgVG9kbyh0aGlzLl9lZGl0VGl0bGUsIHRoaXMuX2VkaXREZXNjcmlwdGlvbiwgdGhpcy5fZWRpdERhdGUsIHRoaXMuX2VkaXRQcmlvcml0eSlcbiAgICAgICAgaGFuZGxlcih1cGRhdGVkVG9kbywgaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5Ub2RvTGlzdFZpZXcuY291bnRlciA9IDAiLCJpbXBvcnQgJy4vc2Fzcy9tYWluLnNjc3MnXG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSAnLi9BcHBDb250cm9sbGVyJ1xuaW1wb3J0IHsgQXBwTW9kZWwgfSBmcm9tICcuL0FwcE1vZGVsJ1xuaW1wb3J0IHsgQXBwVmlldyB9IGZyb20gJy4vQXBwVmlldydcbmltcG9ydCB7IFRvZG9MaXN0Q29udHJvbGxlciB9IGZyb20gJy4vVG9kb0xpc3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgVG9kb0xpc3RNb2RlbCB9IGZyb20gJy4vVG9kb0xpc3RNb2RlbCdcbmltcG9ydCB7IFRvZG9MaXN0VmlldyB9IGZyb20gJy4vVG9kb0xpc3RWaWV3J1xuaW1wb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfSBmcm9tICcuL1Byb2plY3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSAnLi9Qcm9qZWN0TW9kZWwnXG5pbXBvcnQgeyBQcm9qZWN0VmlldyB9IGZyb20gJy4vUHJvamVjdFZpZXcnXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9Ub2RvJ1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwQ29udHJvbGxlcihuZXcgQXBwTW9kZWwoKSwgbmV3IEFwcFZpZXcoKSlcblxuLy8gT24gdGhlIGZpcnN0IHVzZSwgY3JlYXRlcyBhIGRlZmF1bHQgcHJvamVjdCBhbmQgc2FtcGxlc1xuaWYgKCFsb2NhbFN0b3JhZ2UucHJvamVjdHMpIHtcbiAgLy8gQ3JlYXRlIGEgZGVmYXVsdCBwcm9qZWN0LiBJdCBjYW5ub3QgYmUgZGVsZXRlZCBhcyBpdCBhY3RzIGFzIGEgXCJIb21lIFBhZ2VcIi5cbiAgYXBwLmhhbmRsZUFkZFByb2plY3QoJ0RlZmF1bHQnKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1kZWxldGUnKS5yZW1vdmUoKVxuXG4gIC8vIEFkZCBhIHR1dG9yaWFsIGFuZCBhIGZldyBzYW1wbGVzXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5oYW5kbGVFZGl0VG9kb0xpc3QoJzEnLCAnVHV0b3JpYWwnKVxuICBhcHAubW9kZWwucHJvamVjdHNbMF0ubW9kZWwudG9kb0xpc3RzWzBdLmhhbmRsZUFkZFRvZG8obmV3IFRvZG8oXG4gICAgJ1dlbGNvbWUnLFxuICBgVHJ5IGFkZGluZyBhIG5ldyB0YXNrIGJ5IGNsaWNraW5nIG9uIFwiQWRkIFRhc2tcIiFcbiAgWW91IGNhbiBhbHNvIGFkZCBhcyBtYW55IHNlY3Rpb25zIHRvIHlvdXIgcHJvamVjdCBhcyB5b3UnZCBsaWtlIGJ5IGNsaWNraW5nIG9uIFwiQWRkIFNlY3Rpb25cIiwgYW5kIGNyZWF0ZSBhcyBtYW55IHByb2plY3RzIGFzIHlvdSB3aXNoLmApKVxuXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5oYW5kbGVBZGRUb2RvTGlzdChuZXcgVG9kb0xpc3RDb250cm9sbGVyKG5ldyBUb2RvTGlzdE1vZGVsKCdTYW1wbGVzJywgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLmlkKSwgbmV3IFRvZG9MaXN0VmlldygpKSlcbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLnRvZG9MaXN0c1sxXS5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKFxuICAgICdKb2huXFwncyBCaXJ0aGRheScsXG4gICAgJ01lZXQgYXQgSm9oblxcJ3MgaG91c2UgYXQgMTkuIERvblxcJ3QgZm9yZ2V0IHRvIGJyaW5nIGhpcyBnaWZ0LicsXG4gIGAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxfS0ke25ldyBEYXRlKCkuZ2V0RGF0ZSgpfWAsXG4gICdoaWdoJ1xuICApKVxuXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5tb2RlbC50b2RvTGlzdHNbMV0uaGFuZGxlQWRkVG9kbyhuZXcgVG9kbyhcbiAgICAnRGlubmVyIHdpdGggQ2hsb2UnLFxuICAgICdSZXNlcnZhdGlvbiBhdCBSaG9kZXMgUmVzdGF1cmFudCwgYXQgMjAuJyxcbiAgYCR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS0ke25ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDF9LSR7bmV3IERhdGUoKS5nZXREYXRlKCkgKyAyfWAsXG4gICdtZWQnXG4gICkpXG5cbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLnRvZG9MaXN0c1sxXS5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKFxuICAgICdEZW50aXN0JyxcbiAgICAnSXQgd29uXFwndCBiZSB0aGF0IGJhZC4gUHJvYmFibHkuJyxcbiAgYCR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS0ke25ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDJ9LSR7bmV3IERhdGUoKS5nZXREYXRlKCkgKyA1fWAsXG4gICdsb3cnXG4gICkpXG5cbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLnRvZG9MaXN0c1sxXS5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKFxuICAgICdTdGFydCB3b3JraW5nIG91dCcsXG4gICAgJ0lcXCdsbCBzdGFydC4uLiBUb21vcnJvdy4gT3IgbmV4dCB5ZWFyLidcbiAgKSlcblxuLyogT24gYWxsIHRoZSBvdGhlciB1c2VzOlxuICAgIC0gTG9hZCB0aGUgbG9jYWxTdG9yYWdlXG4gICAgLSBDcmVhdGUgbmF2IGJ1dHRvbnMgZm9yIGVhY2ggcHJvamVjdFxuICAgIC0gUmVuZGVyIHRoZSBkZWZhdWx0IHByb2plY3RcbiovXG59IGVsc2Uge1xuICBsZXQgdGVtcFN0b3JhZ2UgPSBbLi4uYXBwLm1vZGVsLnByb2plY3RzXVxuXG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpXG5cbiAgYXBwLm1vZGVsLnByb2plY3RzID0gW11cblxuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgdGVtcFN0b3JhZ2UpIHtcbiAgICBjb25zdCB0b2RvUHJvamVjdCA9IG5ldyBQcm9qZWN0Q29udHJvbGxlcihuZXcgUHJvamVjdE1vZGVsKHByb2plY3QubW9kZWwubmFtZSksIG5ldyBQcm9qZWN0VmlldyhQcm9qZWN0TW9kZWwuY291bnRlcikpXG4gICAgYXBwLm1vZGVsLmFkZFByb2plY3QodG9kb1Byb2plY3QpXG4gICAgYXBwLmRpc3BsYXlQcm9qZWN0KHRvZG9Qcm9qZWN0KVxuICAgIGFwcC52aWV3LnJlbmRlckJ0bih0b2RvUHJvamVjdC5tb2RlbC5uYW1lLCB0b2RvUHJvamVjdC5tb2RlbC5pZClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0PVwicHJvamVjdC0ke3RvZG9Qcm9qZWN0Lm1vZGVsLmlkfVwiXWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYXBwLmhhbmRsZU5hdkNsaWNrKHRvZG9Qcm9qZWN0KSlcblxuICAgIGZvciAoY29uc3QgdG9kb0xpc3Qgb2YgcHJvamVjdC5tb2RlbC50b2RvTGlzdHMpIHtcbiAgICAgIGNvbnN0IHByb2plY3RUb2RvTGlzdCA9IG5ldyBUb2RvTGlzdENvbnRyb2xsZXIobmV3IFRvZG9MaXN0TW9kZWwodG9kb0xpc3QubW9kZWwubmFtZSwgdG9kb0xpc3QubW9kZWwucHJvamVjdElkKSwgbmV3IFRvZG9MaXN0VmlldygpKVxuICAgICAgdG9kb1Byb2plY3QuaGFuZGxlQWRkVG9kb0xpc3QocHJvamVjdFRvZG9MaXN0KVxuXG4gICAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb0xpc3QubW9kZWwudG9kb3MpIHtcbiAgICAgICAgcHJvamVjdFRvZG9MaXN0LmhhbmRsZUFkZFRvZG8obmV3IFRvZG8odG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kYXRlLCB0b2RvLnByaW9yaXR5KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGVtcFN0b3JhZ2UgPSB7fVxuICBhcHAuaGFuZGxlSG9tZSgpXG59XG4iLCJleHBvcnQgY29uc3QgbG9jYWxTdG9yYWdlTW9kdWxlID0gKCgpID0+IHtcbiAgY29uc3QgdXBkYXRlUHJvamVjdExpc3QgPSAocHJvamVjdHMpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXG4gIH1cblxuICBjb25zdCB1cGRhdGVUb2RvTGlzdHMgPSAoaWQsIHRvZG9MaXN0c0FycikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgJ3Byb2plY3RzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKVxuICAgICAgICAgIC5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICBwcm9qZWN0Lm1vZGVsLnRvZG9MaXN0cyA9IHRvZG9MaXN0c0FyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRvZG9zID0gKGlkLCBwcm9qZWN0SWQsIHRvZG9zQXJyKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAncHJvamVjdHMnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXG4gICAgICAgICAgLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IHByb2plY3RJZCkge1xuICAgICAgICAgICAgICBwcm9qZWN0Lm1vZGVsLnRvZG9MaXN0cy5tYXAoKHRvZG9MaXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvZG9MaXN0Lm1vZGVsLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgdG9kb0xpc3QubW9kZWwudG9kb3MgPSB0b2Rvc0FyclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0XG4gICAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZVByb2plY3RMaXN0LFxuICAgIHVwZGF0ZVRvZG9MaXN0cyxcbiAgICB1cGRhdGVUb2Rvc1xuICB9XG59KSgpXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==