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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9kb0xpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sb2NhbFN0b3JhZ2VNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiQXBwQ29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwibW9kZWwiLCJ2aWV3IiwiYmluZEFkZFByb2plY3QiLCJoYW5kbGVBZGRQcm9qZWN0IiwiYmluZCIsImJpbmREZWxldGVQcm9qZWN0IiwiaGFuZGxlRGVsZXRlUHJvamVjdCIsImJpbmRDaGFuZ2VOYW1lIiwiaGFuZGxlQ2hhbmdlTmFtZSIsImJpbmRIb21lIiwiaGFuZGxlSG9tZSIsImJpbmROYXZUb2dnbGUiLCJoYW5kbGVOYXZUb2dnbGUiLCJiaW5kVG9nZ2xlIiwiaGFuZGxlVG9nZ2xlIiwiYmluZERpc3BsYXlBbGwiLCJoYW5kbGVEaXNwbGF5QWxsIiwiYmluZFByaW9yaXR5IiwiaGFuZGxlUHJpb3JpdHkiLCJiaW5kRGF0ZVRvZGF5IiwiaGFuZGxlVG9kYXkiLCJiaW5kRGF0ZVVwY29taW5nIiwiaGFuZGxlVXBjb21pbmciLCJiaW5kRGF0ZUFueXRpbWUiLCJoYW5kbGVBbnl0aW1lIiwiYmluZFNvcnRUaXRsZSIsImhhbmRsZVNvcnRUaXRsZSIsImJpbmRTb3J0RGVzY3JpcHRpb24iLCJoYW5kbGVTb3J0RGVzY3JpcHRpb24iLCJiaW5kU29ydERhdGUiLCJoYW5kbGVTb3J0RGF0ZSIsImJpbmRTb3J0UHJpb3JpdHkiLCJoYW5kbGVTb3J0UHJpb3JpdHkiLCJuYW1lIiwicHJvamVjdCIsIlByb2plY3RDb250cm9sbGVyIiwiUHJvamVjdE1vZGVsIiwiUHJvamVjdFZpZXciLCJjb3VudGVyIiwiYWRkUHJvamVjdCIsImFkZFRvZG9MaXN0IiwiVG9kb0xpc3RDb250cm9sbGVyIiwiVG9kb0xpc3RNb2RlbCIsIlRvZG9MaXN0VmlldyIsImRpc3BsYXlQcm9qZWN0IiwicmVuZGVyQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU5hdkNsaWNrIiwicmVuZGVyTmFtZSIsInJlbmRlciIsInRvZG9MaXN0cyIsInJlbmRlckZvcm0iLCJmb3JtIiwiZ2V0Rm9ybSIsImJpbmRBZGQiLCJkZWxldGVQcm9qZWN0IiwicmVtb3ZlIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZWRpdFByb2plY3QiLCJ0ZXh0Q29udGVudCIsImV2ZW50IiwidGFyZ2V0IiwiZGF0YXNldCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsIm5hdiIsIm1haW4iLCJwcmlvcml0eSIsInRvZG9zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0b2RvIiwiYWRkIiwiX3NhbWVEYXkiLCJkYXRlMSIsImRhdGUyIiwidG9kb0RhdGUiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0b2RheSIsImRhdGUiLCJwcm9qZWN0SWQiLCJwcm9qZWN0cyIsImZpbHRlciIsInRvZG9MaXN0Iiwic29ydFRpdGxlIiwic29ydERlc2NyaXB0aW9uIiwic29ydERhdGUiLCJzb3J0UHJpb3JpdHkiLCJBcHBNb2RlbCIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsU3RvcmFnZU1vZHVsZSIsInVwZGF0ZVByb2plY3RMaXN0Iiwic2V0SXRlbSIsIkFwcFZpZXciLCJjb250YWluZXIiLCJob21lQnRuIiwicHJvamVjdElucHV0IiwicHJvamVjdFN1Ym1pdCIsImRpc3BsYXlBbGxCdG4iLCJwcmlvcml0eUJ0biIsImRhdGVUb2RheUJ0biIsImRhdGVVcGNvbWluZ0J0biIsImRhdGVBbnl0aW1lQnRuIiwibmF2QnRuIiwiX3RlbXBvcmFyeU5hbWUiLCJfY2hhbmdlTmFtZSIsIl9wcm9qZWN0TmFtZSIsInZhbHVlIiwiX3Jlc2V0SW5wdXQiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJidXR0b24iLCJpbm5lckhUTUwiLCJjbG9zZUJ0biIsImFwcGVuZCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3Nlc3QiLCJjb250YWlucyIsInNsaWNlIiwiYm9keSIsIm9uUHJvamVjdENoYW5nZSIsImJpbmRQcm9qZWN0Q2hhbmdlIiwiaGFuZGxlRWRpdFRvZG9MaXN0IiwiYmluZERlbGV0ZVNlY3Rpb24iLCJoYW5kbGVEZWxldGVUb2RvTGlzdCIsImhhbmRsZUFkZFRvZG9MaXN0IiwiZGVsZXRlVG9kb0xpc3QiLCJlZGl0VG9kb0xpc3QiLCJiaW5kQWRkU2VjdGlvbiIsIlNlY3Rpb25Gb3JtIiwiX2NvbW1pdCIsInVwZGF0ZVRvZG9MaXN0cyIsImNhbGxiYWNrIiwic2VjdGlvbnMiLCJuYW1lSW5wdXQiLCJzdWJtaXQiLCJfc2VjdGlvbk5hbWUiLCJmaXJzdENoaWxkIiwiY3JlYXRlU2VjdGlvbiIsImRlbGV0ZSIsImZvcm1Db250YWluZXIiLCJmb3JtQnRuIiwibGFiZWxOYW1lIiwiZmluaXNoIiwic3VibWl0QnRuIiwiY2FuY2VsQnRuIiwiVG9kbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlZGl0Rm9ybSIsIlRvZG9Gb3JtIiwidG9kb0VsZW0iLCJ0b2RvQ2hlY2siLCJjb21wb25lbnRzIiwiY29tcG9uZW50IiwidG9kb0NvbXBvbmVudCIsInRvZG9Qcmlvcml0eSIsInRvZG9FZGl0IiwiZ29hbCIsIl9yZW5kZXJGb3JtIiwibGFiZWxUaXRsZSIsImxhYmVsRGVzY3JpcHRpb24iLCJkZXRhaWxzIiwibGFiZWxEYXRlIiwicHJpb3JpdHlDb250YWluZXIiLCJwcmlvcml0aWVzIiwicHJpb3JpdGllc0xpc3QiLCJsYWJlbFByaW9yaXR5IiwiaW5wdXRQcmlvcml0eSIsInRvVXBwZXJDYXNlIiwicmVuZGVyQWRkIiwiX2luaXRQcmlvcml0eVRvZ2dsZSIsIl9pbml0UHJpb3JpdHlMYWJlbHMiLCJyZW5kZXJFZGl0IiwiYmVmb3JlIiwiYWZ0ZXIiLCJsYWJlbHMiLCJsYWJlbCIsInN0eWxlIiwiY29sb3IiLCJnZXRDb21wdXRlZFN0eWxlIiwiX2luaXRSZXNldFByaW9yaXR5Iiwib25Ub2RvTGlzdENoYW5nZSIsImJpbmRUb2RvTGlzdENoYW5nZSIsImJpbmREZWxldGVUb2RvIiwiaGFuZGxlRGVsZXRlVG9kbyIsImJpbmRPcGVuRWRpdCIsImhhbmRsZU9wZW5FZGl0IiwiYmluZEVkaXRUb2RvIiwiaGFuZGxlRWRpdFRvZG8iLCJoYW5kbGVBZGRUb2RvIiwiYWRkVG9kbyIsInVwZGF0ZWRUb2RvIiwiZWRpdFRvZG8iLCJkZWxldGVUb2RvIiwiZ2V0RWRpdEZvcm0iLCJzZXRFZGl0Rm9ybSIsImJpbmRBZGRUb2RvIiwic29ydFN0YXR1cyIsInVwZGF0ZVRvZG9zIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsIl9zb3J0Q2hhbmdlIiwiX2dldFByaW9yaXR5VmFsdWUiLCJwcmlvcml0eVZhbHVlIiwic2VjdGlvbiIsInByZXBlbmQiLCJuYW1lQ29udGFpbmVyIiwiZGVsZXRlQnRuIiwiX3RvZG9UaXRsZSIsIl90b2RvRGVzY3JpcHRpb24iLCJfdG9kb0RhdGUiLCJfdG9kb1ByaW9yaXR5IiwidGl0bGVFZGl0IiwiZGVzY3JpcHRpb25FZGl0IiwiZGF0ZUVkaXQiLCJwcmlvcml0eUVkaXQiLCJjaGVja2VkIiwiX2VkaXRUaXRsZSIsIl9lZGl0RGVzY3JpcHRpb24iLCJfZWRpdERhdGUiLCJfZWRpdFByaW9yaXR5IiwiX3Jlc2V0SW5wdXRzIiwicGFyc2VJbnQiLCJwYXJlbnRFbGVtZW50IiwiYXBwIiwidGVtcFN0b3JhZ2UiLCJjbGVhciIsInRvZG9Qcm9qZWN0IiwicHJvamVjdFRvZG9MaXN0IiwidG9kb0xpc3RzQXJyIiwidG9kb3NBcnIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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QVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxNQUFNLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVB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S0QsQ0E3Q2lDLEdBQTNCLEM7Ozs7Ozs7Ozs7O0FDQVAsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw0TUFBb0c7O0FBRXRJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcXG59XFxuXFxuLm5vLWRpc3BsYXkge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5LFxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjk7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5bY29udGVudGVkaXRhYmxlXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbltjb250ZW50ZWRpdGFibGVdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDUpO1xcbn1cXG5bY29udGVudGVkaXRhYmxlXTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC44NSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG5cXG4uYnRuLS1wYWdlLS1oZWFkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWNhbmNlbCwgLmJ0bi0tYWRkIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjQ1KTtcXG59XFxuLmJ0bi0tY2FuY2VsOmhvdmVyLCAuYnRuLS1jYW5jZWw6aG92ZXI6YmVmb3JlLCAuYnRuLS1hZGQ6aG92ZXIsIC5idG4tLWFkZDpob3ZlcjpiZWZvcmUge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9ZGF0ZV0ge1xcbiAgY29sb3I6ICM4ZThlOGU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG5cXG4uYnRuLS1jYW5jZWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmJ0bi0tYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbi5idG4tLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuLmJ0bi0tc2VjdGlvbjpiZWZvcmUsIC5idG4tLXNlY3Rpb246YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIGhlaWdodDogMnB4O1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmhvdmVyOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjpob3ZlcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5idG4tLXNlY3Rpb246YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5idG4tLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuXFxuLmJ0bi0tZWRpdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTVweDtcXG4gIHRvcDogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmJ0bi0tZWRpdDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43NSk7XFxufVxcblxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlLCAubmF2X19maWx0ZXJzIGxpOmJlZm9yZSwgLm5hdl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gIG1hcmdpbjogMCAwLjI1cmVtIDAgMS4yNXJlbTtcXG59XFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pqrXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4ubmF2IC5wcm9qZWN0X2xpc3RfX2FkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm5hdl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5wcmlvcml0eS1tZWQge1xcbiAgY29sb3I6ICNlNzlhNjc7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6ICM1ZDk3NWI7XFxufVxcblxcbi5wcmlvcml0eS1ub25lIHtcXG4gIGNvbG9yOiAjYzdjN2M3O1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GzXFxcIjtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74myXFxcIjtcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74m0XFxcIjtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLNcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb2xvcjogIzQwNDI5ZTtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ViOTk2MztcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb2xvcjogIzhkNWE4OTtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbn1cXG5cXG4uZGF0ZS1sYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM5NDIwMjA7XFxufVxcblxcbi5uYXYtLWhlYWRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG59XFxuXFxuLnNvcnQtdGl0bGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74yoXFxcIjtcXG59XFxuXFxuLnNvcnQtZGVzY3JpcHRpb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mJXFxcIjtcXG59XFxuXFxuLnNvcnQtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uc29ydC1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK5cXFwiO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjMzA1YzMwO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWJiOTRmO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM2Njk3OTE7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5tYWluX19oZWFkZXIgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50by1kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYuNXJlbSAxZnIgNi41cmVtIDJyZW07XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1nYXA6IDEuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwLjc1cmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIC50by1kbyB7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCBhdXRvKS9hdXRvIDFmciAycmVtO1xcbiAgICBncmlkLWdhcDogMC41cmVtO1xcbiAgfVxcbiAgLnRvLWRvX19jaGVjayB7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgfVxcbiAgLnRvLWRvX19wcmlvcml0eSB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgfVxcbn1cXG4udG8tZG86bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi50by1kb19fY2hlY2sge1xcbiAgbWFyZ2luLXRvcDogN3B4O1xcbn1cXG4udG8tZG86aG92ZXIgLmJ0bi0tZWRpdCB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG5cXG4uZHJvcGRvd24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGxpbmVhcjtcXG59XFxuXFxuLmFkZF9fY29udGVudCxcXG4uZWRpdF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbn1cXG4uYWRkX19jb250ZW50LS10b2RvLFxcbi5lZGl0X19jb250ZW50LS10b2RvIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxufVxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3QsXFxuLmVkaXRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBwYWRkaW5nOiAwLjE1cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuW25hbWU9dGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG5cXG4uYWRkX19kZXRhaWxzLFxcbi5lZGl0X19kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkX19wcmlvcml0eSxcXG4uZWRpdF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWRkX19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSxcXG4uZWRpdF9fcHJpb3JpdHkgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGVmdDogLTEwcHg7XFxuICB0b3A6IDEuNjVyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4O1xcbiAgbGVmdDogMTVweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC02cHg7XFxuICBsZWZ0OiAxNHB4O1xcbn1cXG4uYWRkLXByaW9yaXR5IGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgLmFkZC1wcmlvcml0eSB7XFxuICAgIHJpZ2h0OiAtMTBweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG4gIC5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuICB9XFxuICAuYWRkLXByaW9yaXR5OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDE0cHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuICB9XFxufVxcblxcbi5hZGRfX2ZpbmlzaCxcXG4uZWRpdF9fZmluaXNoIHtcXG4gIG1hcmdpbjogMC41cmVtIDFyZW07XFxufVxcblxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYWdlX19oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogIzJhMmI2ODtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIGxpOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5uYXYge1xcbiAgYmFja2dyb3VuZDogI2VlZjBmMTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgcGFkZGluZzogMnJlbSAwLjI1cmVtIDAgMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxufVxcbi5uYXYtLWhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG4ubmF2X19jYXRlZ29yeSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuLm5hdl9fY2F0ZWdvcnk6bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDQpO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaTpob3ZlciAuYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkgPiAuYnRuIHtcXG4gIGZsZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDcpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4ubWFpbi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1cHgpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1haW4tLWhpZGRlbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuLnNlY3Rpb25fX25hbWVfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc2VjdGlvbl9fbmFtZV9fY29udGFpbmVyOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvYmFzZS9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvYmFzZS9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvdXRpbHMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvdXRpbHMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9faWNvbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX3RvZG8uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX2Ryb3Bkb3duLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX25hdi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7O0VBYUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFB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O0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUp5TUY7QUl2TUU7RUFDRSw4QkFBQTtBSnlNSjs7QU0xUkU7RUFJRSwyQkh1RFk7QUhtT2hCO0FNdlJFO0VEVEEsa0NBQUE7RUFDQSxnQkFBQTtBTG1TRjtBTXRSRTtFQUNFLFlBQUE7RUFDQSw2QkhSYTtBSGdTakI7QU1yUkU7RUFDRSxZSHFDTztFRXBEVCxrQ0FBQTtFQUNBLGdCQUFBO0FMdVNGO0FNclJFO0VBQ0UsWUFBQTtFRHpCRixrQ0FBQTtFQUNBLGdCQUFBO0FMaVRGOztBTWxSRTtFQUNFLGNIdEJhO0FIMlNqQjs7QU10UkU7RUFDRSxjSHRCYTtBSCtTakI7O0FNMVJFO0VBQ0UsY0h0QmE7QUhtVGpCOztBTTlSRTtFQUNFLGNIdEJhO0FIdVRqQjs7QUt2VEk7RUFDRSxZRnlCTztBSGlTYjs7QUszVEk7RUFDRSxZRnlCTztBSHFTYjs7QUsvVEk7RUFDRSxZRnlCTztBSHlTYjs7QUtuVUk7RUFDRSxZRnlCTztBSDZTYjs7QUsvVEk7RUFDRSxjRkZPO0FIb1ViOztBS25VSTtFQUNFLGNGRk87QUh3VWI7O0FLdlVJO0VBQ0UsY0ZGTztBSDRVYjs7QUszVUk7RUFDRSxjRkZPO0FIZ1ZiOztBSy9VSTtFQUNFLGNGRk87QUhvVmI7O0FNNVRBO0VBQ0UsWUFBQTtFQUNBLGNIeENjO0VFQ2Qsa0NBQUE7RUFDQSxnQkFBQTtFQ3dDQSxxQkFBQTtBTmdVRjs7QUtuV0k7RUFDRSxZRnNDTztBSGdVYjs7QUt2V0k7RUFDRSxZRnNDTztBSG9VYjs7QUszV0k7RUFDRSxZRnNDTztBSHdVYjs7QUsvV0k7RUFDRSxZRnNDTztBSDRVYjs7QUszV0k7RUFDRSxjRk1PO0FId1diOztBSy9XSTtFQUNFLGNGTU87QUg0V2I7O0FLblhJO0VBQ0UsY0ZNTztBSGdYYjs7QUt2WEk7RUFDRSxjRk1PO0FIb1hiOztBTXZWQTtFQUNFLFlBQUE7RURuREEsa0NBQUE7RUFDQSxnQkFBQTtBTDhZRjs7QU9yWkE7RUFDRSxhQUFBO0VBQ0Esa0RBQUE7RUFD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bUJFO0VBSEY7SUFJSSx3QkFBQTtFWjhtQkY7QUFDRjs7QVkzbUJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FaOG1CRjtBWTVtQkU7RUFDRSxnQkFBQTtBWjhtQkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xcbn1cXG5cXG4ubm8tZGlzcGxheSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuW2NvbnRlbnRlZGl0YWJsZV06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNSk7XFxufVxcbltjb250ZW50ZWRpdGFibGVdOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuMzVyZW07XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjg1KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcblxcbi5idG4tLXBhZ2UtLWhlYWRlciB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmJ0bi0taWNvbiB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdCwgLmJ0bi0tY2FuY2VsIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxufVxcbi5idG4tLXN1Ym1pdCB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmJ0bi0tY2FuY2VsLCAuYnRuLS1hZGQge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNDUpO1xcbn1cXG4uYnRuLS1jYW5jZWw6aG92ZXIsIC5idG4tLWNhbmNlbDpob3ZlcjpiZWZvcmUsIC5idG4tLWFkZDpob3ZlciwgLmJ0bi0tYWRkOmhvdmVyOmJlZm9yZSB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43NSk7XFxufVxcbi5idG4tLXNlY3Rpb24ge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmJ0bi0tc2VjdGlvbjpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43NSk7XFxufVxcblxcbi5uYXYtLWhlYWRpbmcge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XFxufVxcblxcbltkYXRhLXRvZ2dsZT1hZGQtcHJvamVjdF0ge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcbltkYXRhLXRvZ2dsZT1hZGQtcHJvamVjdF06aG92ZXIge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5tYWluX19oZWFkZXIgYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4udG8tZG9fX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxufVxcblxcbltuYW1lPXRpdGxlXSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5bbmFtZT1kYXRlXSB7XFxuICBjb2xvcjogIzhlOGU4ZTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnRuLS1zdWJtaXQsXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIHBhZGRpbmc6IDAuMTVyZW0gMC41cmVtO1xcbn1cXG5cXG4uYnRuLS1zdWJtaXQge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG59XFxuLmJ0bi0tc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNyk7XFxufVxcblxcbi5idG4tLWNhbmNlbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4uYnRuLS1hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgadcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXI6YmVmb3JlLCAuYnRuLS1zZWN0aW9uOmhvdmVyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5idG4tLXNlY3Rpb246YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLmJ0bi0tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG5cXG4uYnRuLS1lZGl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYnRuLS1lZGl0OmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuXFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUsIC5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMCAxLjI1cmVtO1xcbn1cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5uYXYgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2X19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZCB7XFxuICBjb2xvcjogI2U3OWE2NztcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogIzVkOTc1YjtcXG59XFxuXFxuLnByaW9yaXR5LW5vbmUge1xcbiAgY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibJcXFwiO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibRcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Es1xcXCI7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNDA0MjllO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWI5OTYzO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOGQ1YTg5O1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29sb3I6ICM3YTdhN2E7XFxufVxcblxcbi5kYXRlLWxhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzk0MjAyMDtcXG59XFxuXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvjKhcXFwiO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYlcXFwiO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29sb3I6ICMzMDVjMzA7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYmI5NGY7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzY2OTc5MTtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWdhcDogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLnRvLWRvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIGF1dG8pL2F1dG8gMWZyIDJyZW07XFxuICAgIGdyaWQtZ2FwOiAwLjVyZW07XFxuICB9XFxuICAudG8tZG9fX2NoZWNrIHtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICB9XFxuICAudG8tZG9fX3ByaW9yaXR5IHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICB9XFxufVxcbi50by1kbzpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLnRvLWRvX19jaGVjayB7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxufVxcbi50by1kbzpob3ZlciAuYnRuLS1lZGl0IHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgbGluZWFyO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LFxcbi5lZGl0X19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxufVxcbi5hZGRfX2NvbnRlbnQtLXRvZG8sXFxuLmVkaXRfX2NvbnRlbnQtLXRvZG8ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG59XFxuLmFkZF9fY29udGVudC0tcHJvamVjdCxcXG4uZWRpdF9fY29udGVudC0tcHJvamVjdCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHBhZGRpbmc6IDAuMTVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcblxcbi5hZGRfX2RldGFpbHMsXFxuLmVkaXRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5hZGRfX3ByaW9yaXR5LFxcbi5lZGl0X19wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hZGRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dLFxcbi5lZGl0X19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTZweDtcXG4gIGxlZnQ6IDE0cHg7XFxufVxcbi5hZGQtcHJpb3JpdHkgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuICAuYWRkLXByaW9yaXR5IHtcXG4gICAgcmlnaHQ6IC0xMHB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbiAgLmFkZC1wcmlvcml0eTpiZWZvcmUge1xcbiAgICByaWdodDogMTVweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG4gIC5hZGQtcHJpb3JpdHk6YWZ0ZXIge1xcbiAgICByaWdodDogMTRweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG59XFxuXFxuLmFkZF9fZmluaXNoLFxcbi5lZGl0X19maW5pc2gge1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhZ2VfX2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiAjMmEyYjY4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwgbGk6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm5hdiB7XFxuICBiYWNrZ3JvdW5kOiAjZWVmMGYxO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4yNSk7XFxuICBwYWRkaW5nOiAycmVtIDAuMjVyZW0gMCAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG59XFxuLm5hdi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG4ubmF2X19jYXRlZ29yeTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNCk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSA+IC5idG4ge1xcbiAgZmxleDogMTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNyk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi5tYWluLS1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjVweCk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubWFpbi0taGlkZGVuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5cXG4uc2VjdGlvbl9fbmFtZV9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zZWN0aW9uX19uYW1lX19jb250YWluZXI6aG92ZXIgLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVwiLFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcblxcdCY6Zm9jdXMge1xcblxcdFxcdG91dGxpbmU6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG4qIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50X193cmFwcGVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiA1MHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0uMjVlbSk7XFxufVxcblxcbi5uby1kaXNwbGF5IHtcXG5cXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVwiLFwiYm9keSxcXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxuICBmb250LXNpemU6IC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS45O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4wNSk7XFxuICB9XFxuXFxuICAmOmZvY3VzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuMzVyZW07XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuODUpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMjVyZW0gLjVyZW07XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gICYtLXBhZ2UtLWhlYWRlciB7XFxuICAgIGNvbG9yOiAkY29sb3ItaGVhZGVyO1xcbiAgfVxcblxcbiAgJi0taWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG5cXG4gICYtLXN1Ym1pdCxcXG4gICYtLWNhbmNlbCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogLjg1ZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAtLjVweDtcXG4gIH1cXG5cXG4gICYtLXN1Ym1pdCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcblxcbiAgJi0tY2FuY2VsLFxcbiAgJi0tYWRkIHtcXG4gICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC40NSk7XFxuXFxuICAgICY6aG92ZXIsXFxuICAgICY6aG92ZXI6YmVmb3JlIHtcXG4gICAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjc1KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJi0tc2VjdGlvbiB7XFxuICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjc1KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBOYXZcXG5cXG4ubmF2IHtcXG4gICYtLWhlYWRpbmcge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMi41O1xcbiAgfVxcbn1cXG5cXG5bZGF0YS10b2dnbGU9XFxcImFkZC1wcm9qZWN0XFxcIl0ge1xcbiAgY29sb3I6IHJnYmEoIzAwMCwgLjc1KTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gIH1cXG5cXG59XFxuXFxuLm1haW5fX2hlYWRlciBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi50by1kb19fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLy8gRm9ybVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbn1cXG5cXG5bbmFtZT1cXFwidGl0bGVcXFwiXSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5bbmFtZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGNvbG9yOiAkY29sb3ItZm9ybTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XCIsXCIvLyBGb250c1xcbiRmb250LXByaW1hcnk6ICdOYW51bSBHb3RoaWMnLCBBcmlhbDtcXG5cXG5cXG4vLyBDb2xvcnNcXG4kY29sb3ItcHJpbWFyeTogcmdiKDQyLCA0MywgMTA0KTtcXG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMjM4LCAyNDAsIDI0MSk7XFxuXFxuJGNvbG9yLWhlYWRlcjogI2ZmZjtcXG4kY29sb3ItcHJvamVjdHM6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4kY29sb3ItZm9ybTogcmdiKDE0MiwgMTQyLCAxNDIpO1xcblxcbiRjb2xvci1wcmlvcml0eTogKFxcbiAgaGlnaDogcmdiKDE2MSwgNjYsIDY2KSxcXG4gIG1lZDogcmdiKDIzMSwgMTU0LCAxMDMpLFxcbiAgbG93OiByZ2IoOTMsIDE1MSwgOTEpLFxcbiAgbm9uZTogcmdiKDE5OSwgMTk5LCAxOTkpXFxuKTtcXG5cXG4kY29sb3ItZGF0ZTogKFxcbiAgYWxsOiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxNSUpLFxcbiAgdG9kYXk6IHJnYigyMzUsIDE1MywgOTkpLFxcbiAgdXBjb21pbmc6IHJnYigxNDEsIDkwLCAxMzcpLFxcbiAgYW55dGltZTogcmdiKDEyMiwgMTIyLCAxMjIpLFxcbiAgbGF0ZTogcmdiKDE0OCwgMzIsIDMyKVxcbik7XFxuXFxuJGNvbG9yLXNvcnQ6IChcXG4gIHRpdGxlOiByZ2IoNDgsIDkyLCA0OCksXFxuICBkZXNjcmlwdGlvbjogcmdiKDIzNSwgMTg1LCA3OSksXFxuICBkYXRlOiByZ2IoMTAyLCAxNTEsIDE0NSksXFxuICBwcmlvcml0eTogbWFwLWdldCgkY29sb3ItcHJpb3JpdHksIGhpZ2gpXFxuKTtcXG5cXG4vLyBJY29uc1xcblxcbiRpY29uLXByaW9yaXR5OiBcXFwiXFxcXGYwMmVcXFwiO1xcblxcbiRpY29ucy1kYXRlOiAoXFxuICBhbGw6IFxcXCJcXFxcZjA3M1xcXCIsXFxuICB0b2RheTogXFxcIlxcXFxmMjcyXFxcIixcXG4gIHVwY29taW5nOiBcXFwiXFxcXGYyNzRcXFwiLFxcbiAgYW55dGltZTogXFxcIlxcXFxmMTMzXFxcIixcXG4pO1xcblxcbiRpY29ucy1jYXJldDogKFxcbiAgdXA6IFxcXCJcXFxcZjBkOFxcXCIsXFxuICBkb3duOiBcXFwiXFxcXGYwZDdcXFwiLFxcbiAgcmlnaHQ6IFxcXCJcXFxcZjBkYVxcXCJcXG4pO1xcblxcbiRpY29ucy1zb3J0OiAoXFxuICB0aXRsZTogXFxcIlxcXFxmMzI4XFxcIixcXG4gIGRlc2NyaXB0aW9uOiBcXFwiXFxcXGYyNDlcXFwiLFxcbiAgZGF0ZTogXFxcIlxcXFxmMDczXFxcIixcXG4gIHByaW9yaXR5OiAkaWNvbi1wcmlvcml0eSxcXG4pO1xcblxcbiRpY29uLWFkZDogXFxcIlxcXFxmMDY3XFxcIjtcXG4kaWNvbi1lZGl0OiBcXFwiXFxcXGYwNDRcXFwiO1xcblxcbi8vIE90aGVyc1xcbiRtYXJnaW4taW5kZW50OiAwIC4yNXJlbSAwIDEuMjVyZW07XCIsXCJidXR0b24ge1xcblxcdGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBcXG4gICY6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uYnRuLS1zdWJtaXQsXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIHBhZGRpbmc6IC4xNXJlbSAuNXJlbTtcXG59XFxuICBcXG4uYnRuLS1zdWJtaXQge1xcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjcpO1xcbiAgfVxcbn1cXG5cXG4uYnRuLS1jYW5jZWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgjZmZmLCAuNSk7XFxufVxcblxcbi5idG4tLWFkZDpiZWZvcmUge1xcbiAgY29udGVudDogJGljb24tYWRkO1xcbiAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcblxcbiAgJjpiZWZvcmUsXFxuICAmOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4yNSk7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICB9XFxuXFxuICAmOmhvdmVyOmJlZm9yZSxcXG4gICY6aG92ZXI6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICB9XFxuXFxuICAmOmJlZm9yZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIH1cXG5cXG4gICY6YWZ0ZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIH1cXG59XFxuXFxuLmJ0bi0tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXFxufVxcblxcbi5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG59XFxuXFxuLmJ0bi0tZWRpdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTVweDtcXG4gIHRvcDogMTBweDtcXG4gIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNzUpO1xcbiAgfVxcblxcbn1cIixcIkBtaXhpbiBmb250LWF3ZXNvbWUtNDAwKCkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbkBtaXhpbiBmb250LWF3ZXNvbWUtNzAwKCkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbkBtaXhpbiBpY29uLWNvbnRlbnQoJHRhcmdldCwgJG1hcCkge1xcbiAgQGVhY2ggJGtleSwgJGljb24gaW4gJG1hcCB7XFxuICAgIC4jeyR0YXJnZXR9LSN7JGtleX06OmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJGljb247XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIGljb24tY29sb3IoJHRhcmdldCwgJG1hcCkge1xcbiAgQGVhY2ggJGtleSwgJGNvbG9yIGluICRtYXAge1xcbiAgICAuI3skdGFyZ2V0fS0jeyRrZXl9OjpiZWZvcmUge1xcbiAgICAgIGNvbG9yOiAkY29sb3I7XFxuICAgIH1cXG4gIH1cXG59XCIsXCIvLyBOQVYtSUNPTlNcXG5cXG4ubmF2IHtcXG4gICZfX3RvLWRvIGxpOmJlZm9yZSxcXG4gICZfX3Byb2plY3RzIGxpOmJlZm9yZSxcXG4gICZfX2ZpbHRlcnMgbGk6YmVmb3JlLFxcbiAgJl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gICAgbWFyZ2luOiAkbWFyZ2luLWluZGVudDtcXG4gIH1cXG5cXG4gICZfX3RvLWRvIGxpOmJlZm9yZSxcXG4gICZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICAgIEBpbmNsdWRlIGZvbnQtYXdlc29tZS00MDAoKTtcXG4gIH1cXG5cXG4gICZfX3Byb2plY3RzIGxpOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgICBjb2xvcjogJGNvbG9yLXByb2plY3RzO1xcbiAgfVxcblxcbiAgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICRpY29uLWFkZDtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbiAgfVxcblxcbiAgJl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMmVcXFwiO1xcbiAgICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNDAwKCk7XFxuICB9XFxufVxcblxcbi8vIENvbG9yIFByaW9yaXR5IEljb25zXFxuQGVhY2ggJGxldmVsLCAkY29sb3IgaW4gJGNvbG9yLXByaW9yaXR5IHtcXG4gIC5wcmlvcml0eS0jeyRsZXZlbH0ge1xcbiAgICBjb2xvcjogJGNvbG9yO1xcbiAgfVxcbn1cXG5cXG4vLyBEYXRlIEljb25zXFxuQGluY2x1ZGUgaWNvbi1jb250ZW50KCdkYXRlJywgJGljb25zLWRhdGUpO1xcbkBpbmNsdWRlIGljb24tY29sb3IoJ2RhdGUnLCAkY29sb3ItZGF0ZSk7XFxuXFxuLy8gQ2F0ZWdvcnkgSWNvbnNcXG4ubmF2LS1oZWFkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBtYXAtZ2V0KCRpY29ucy1jYXJldCwgZG93bik7XFxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxuICBtYXJnaW4tcmlnaHQ6IC43NXJlbTtcXG59XFxuXFxuLy8gU29ydCBJY29uc1xcbkBpbmNsdWRlIGljb24tY29udGVudCgnc29ydCcsICRpY29ucy1zb3J0KTtcXG5AaW5jbHVkZSBpY29uLWNvbG9yKCdzb3J0JywgJGNvbG9yLXNvcnQpO1xcblxcbi8vIE1BSU4gSUNPTlNcXG5cXG4ubWFpbl9faGVhZGVyIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBtYXAtZ2V0KCRpY29ucy1jYXJldCwgZG93bik7XFxuICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxufVwiLFwiLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWdhcDogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IC43NXJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG5cXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCBhdXRvKSAvIGF1dG8gMWZyIDJyZW07XFxuICAgIGdyaWQtZ2FwOiAuNXJlbTtcXG5cXG4gICAgJl9fY2hlY2sge1xcbiAgICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIH1cXG5cXG4gICAgJl9fcHJpb3JpdHkge1xcbiAgICAgIGdyaWQtcm93OiAxO1xcbiAgICB9XFxuICB9XFxuXFxuICAmOmxhc3Qtb2YtdHlwZSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICB9XFxuICBcXG4gICZfX2NoZWNrIHtcXG4gICAgbWFyZ2luLXRvcDogN3B4O1xcbiAgfVxcblxcbiAgJjpob3ZlciAuYnRuLS1lZGl0IHtcXG4gICAgZGlzcGxheTogaW5pdGlhbDtcXG4gIH1cXG5cXG59XCIsXCIuZHJvcGRvd24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zNXMgbGluZWFyO1xcbn1cIixcIi5hZGRfX2NvbnRlbnQsXFxuLmVkaXRfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcblxcbiAgJi0tdG9kbyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xcbiAgfVxcblxcbiAgJi0tcHJvamVjdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIHBhZGRpbmc6IC4xNXJlbTtcXG4gIH1cXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG5bbmFtZT1cXFwidGl0bGVcXFwiXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjEpO1xcbn1cXG5cXG4uYWRkX19kZXRhaWxzLFxcbi5lZGl0X19kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkX19wcmlvcml0eSxcXG4uZWRpdF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICAmOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNXB4O1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgJjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICBsZWZ0OiAxNHB4O1xcbiAgfVxcblxcbiAgbGFiZWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAuNXJlbTtcXG4gIH1cXG5cXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgICByaWdodDogLTEwcHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuXFxuICAgICY6YmVmb3JlIHtcXG4gICAgICByaWdodDogMTVweDtcXG4gICAgICBsZWZ0OiBpbml0aWFsO1xcbiAgICB9XFxuICBcXG4gICAgJjphZnRlciB7XFxuICAgICAgcmlnaHQ6IDE0cHg7XFxuICAgICAgbGVmdDogaW5pdGlhbDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uYWRkX19maW5pc2gsXFxuLmVkaXRfX2ZpbmlzaCB7XFxuICBtYXJnaW46IC41cmVtIDFyZW07XFxufVxcblxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSgjZmZmLCAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsXCIucGFnZV9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6ICRjb2xvci1wcmltYXJ5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBcXG5cXG4gIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgJiBsaTpsYXN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgfVxcbiAgfVxcbn1cIixcIi5uYXYge1xcbiAgXFxuICBiYWNrZ3JvdW5kOiAkY29sb3Itc2Vjb25kYXJ5O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjI1KTtcXG4gIHBhZGRpbmc6IDJyZW0gLjI1cmVtIDAgMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcXG5cXG4gICYtLWhpZGRlbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB9XFxuXFxuICAmX19jYXRlZ29yeSB7XFxuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG5cXG4gICAgJjpsYXN0LW9mLXR5cGUge1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgbGkge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMDQpO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgICAgIH1cXG5cXG4gICAgICA+IC5idG4ge1xcbiAgICAgICAgLy8gTWFrZXMgdGhlIHdob2xlIGxpbmUgY2xpY2thYmxlIGluc3RlYWQgb2YganVzdCB0aGUgdGV4dC5cXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtLWhlYWRpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMDcpO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XCIsXCJtYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi5tYWluLS1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjVweCk7XFxuXFxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcXG4gIH1cXG59XFxuXFxuLnNlY3Rpb25fX25hbWVfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgJjpob3ZlciAuYnRuLS1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfSBmcm9tICcuL1Byb2plY3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSAnLi9Qcm9qZWN0TW9kZWwnXG5pbXBvcnQgeyBQcm9qZWN0VmlldyB9IGZyb20gJy4vUHJvamVjdFZpZXcnXG5pbXBvcnQgeyBUb2RvTGlzdENvbnRyb2xsZXIgfSBmcm9tICcuL1RvZG9MaXN0Q29udHJvbGxlcidcbmltcG9ydCB7IFRvZG9MaXN0TW9kZWwgfSBmcm9tICcuL1RvZG9MaXN0TW9kZWwnXG5pbXBvcnQgeyBUb2RvTGlzdFZpZXcgfSBmcm9tICcuL1RvZG9MaXN0VmlldydcblxuZXhwb3J0IGNsYXNzIEFwcENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG5cbiAgICB0aGlzLnZpZXcuYmluZEFkZFByb2plY3QodGhpcy5oYW5kbGVBZGRQcm9qZWN0LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREZWxldGVQcm9qZWN0KHRoaXMuaGFuZGxlRGVsZXRlUHJvamVjdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kQ2hhbmdlTmFtZSh0aGlzLmhhbmRsZUNoYW5nZU5hbWUuYmluZCh0aGlzKSlcblxuICAgIHRoaXMudmlldy5iaW5kSG9tZSh0aGlzLmhhbmRsZUhvbWUuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZE5hdlRvZ2dsZSh0aGlzLmhhbmRsZU5hdlRvZ2dsZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kVG9nZ2xlKHRoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcykpXG5cbiAgICB0aGlzLnZpZXcuYmluZERpc3BsYXlBbGwodGhpcy5oYW5kbGVEaXNwbGF5QWxsLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRQcmlvcml0eSh0aGlzLmhhbmRsZVByaW9yaXR5LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREYXRlVG9kYXkodGhpcy5oYW5kbGVUb2RheS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGF0ZVVwY29taW5nKHRoaXMuaGFuZGxlVXBjb21pbmcuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERhdGVBbnl0aW1lKHRoaXMuaGFuZGxlQW55dGltZS5iaW5kKHRoaXMpKVxuXG4gICAgdGhpcy52aWV3LmJpbmRTb3J0VGl0bGUodGhpcy5oYW5kbGVTb3J0VGl0bGUuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZFNvcnREZXNjcmlwdGlvbih0aGlzLmhhbmRsZVNvcnREZXNjcmlwdGlvbi5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kU29ydERhdGUodGhpcy5oYW5kbGVTb3J0RGF0ZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kU29ydFByaW9yaXR5KHRoaXMuaGFuZGxlU29ydFByaW9yaXR5LmJpbmQodGhpcykpXG4gIH1cblxuICAvLyBEaXNwbGF5IHRoZSBuZXcgcHJvamVjdCBhbmQgY3JlYXRlIGEgYnV0dG9uIGxpbmtlZCB0byB0aGUgcHJvamVjdCBpbiB0aGUgbmF2aWdhdGlvbi5cbiAgaGFuZGxlQWRkUHJvamVjdCAobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIobmV3IFByb2plY3RNb2RlbChuYW1lKSwgbmV3IFByb2plY3RWaWV3KFByb2plY3RNb2RlbC5jb3VudGVyKSlcbiAgICB0aGlzLm1vZGVsLmFkZFByb2plY3QocHJvamVjdClcblxuICAgIHByb2plY3QubW9kZWwuYWRkVG9kb0xpc3QobmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCgnRGVmYXVsdCcsIHByb2plY3QubW9kZWwuaWQpLCBuZXcgVG9kb0xpc3RWaWV3KCkpKVxuICAgIHRoaXMuZGlzcGxheVByb2plY3QocHJvamVjdClcbiAgICB0aGlzLnZpZXcucmVuZGVyQnRuKG5hbWUsIHByb2plY3QubW9kZWwuaWQpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvamVjdD1cInByb2plY3QtJHtwcm9qZWN0Lm1vZGVsLmlkfVwiXWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVOYXZDbGljayhwcm9qZWN0KSlcbiAgfVxuXG4gIC8vIExpbmtzIHRoZSBuZXdseSBjcmVhdGVkIG5hdmlnYXRpb24gYnV0dG9uIHRvIGl0cyBwcm9qZWN0XG4gIGhhbmRsZU5hdkNsaWNrIChwcm9qZWN0KSB7XG4gICAgdGhpcy5kaXNwbGF5UHJvamVjdChwcm9qZWN0KVxuICB9XG5cbiAgZGlzcGxheVByb2plY3QgKHByb2plY3QpIHtcbiAgICBwcm9qZWN0LnZpZXcucmVuZGVyTmFtZShwcm9qZWN0Lm1vZGVsLm5hbWUsIHByb2plY3QubW9kZWwuaWQpXG4gICAgcHJvamVjdC52aWV3LnJlbmRlcihwcm9qZWN0Lm1vZGVsLnRvZG9MaXN0cylcbiAgICBwcm9qZWN0LnZpZXcucmVuZGVyRm9ybShwcm9qZWN0Lm1vZGVsLmZvcm0pXG4gICAgcHJvamVjdC52aWV3LmdldEZvcm0oKVxuICAgIHByb2plY3QuYmluZEFkZCgpXG4gIH1cblxuICAvLyBXaGVuIGEgcHJvamVjdCBpcyBkZWxldGVkLCBpdCBpcyByZW1vdmVkIGZyb20gdGhlIG1vZGVsIGFuZCBmcm9tIHRoZSBuYXZpZ2F0aW9uLlxuICAvLyBUaGUgSG9tZXBhZ2UgaXMgZGlzcGxheWVkIGluc3RlYWQuXG4gIGhhbmRsZURlbGV0ZVByb2plY3QgKGlkKSB7XG4gICAgdGhpcy5tb2RlbC5kZWxldGVQcm9qZWN0KGlkKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByb2plY3Q9XCJwcm9qZWN0LSR7aWR9XCJdYCkucmVtb3ZlKClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0PVwicHJvamVjdC0xXCJdJykuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2VOYW1lIChpZCwgbmFtZSkge1xuICAgIHRoaXMubW9kZWwuZWRpdFByb2plY3QoaWQsIG5hbWUpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZmlsdGVyPVwicHJvamVjdC0ke2lkfVwiXWApLnRleHRDb250ZW50ID0gbmFtZVxuICB9XG5cbiAgLy8gRW5hYmxlIGFsbCB0b2dnbGUgYnV0dG9uc1xuICBoYW5kbGVUb2dnbGUgKGV2ZW50KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQudG9nZ2xlfWApLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gIH1cblxuICAvLyBNb2RpZnkgc3BhY2Ugb2NjdXBpZWQgYnkgY29udGVudCB3aGVuIHRoZSBuYXZpZ2F0aW9uIGlzIGhpZGRlbiAvIGRpc3BsYXllZC5cbiAgaGFuZGxlTmF2VG9nZ2xlICgpIHtcbiAgICB0aGlzLnZpZXcubmF2LmNsYXNzTGlzdC50b2dnbGUoJ25hdi0taGlkZGVuJylcbiAgICB0aGlzLnZpZXcubWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdtYWluLS1oaWRkZW4nKVxuICB9XG5cbiAgLy8gRW5hYmxlIHByaW9yaXR5IGZpbHRlcnNcbiAgaGFuZGxlUHJpb3JpdHkgKHByaW9yaXR5KSB7XG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8nKVxuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICBpZiAodG9kby5kYXRhc2V0LnByaW9yaXR5ICE9PSBwcmlvcml0eSkge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ25vLWRpc3BsYXknKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRoYXQgY29tcGFyZXMgMiBkYXlzICh1c2VkIGZvciBkYXRlIGZpbHRlcnMpXG4gIF9zYW1lRGF5IChkYXRlMSwgZGF0ZTIpIHtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IG5ldyBEYXRlKGRhdGUxKVxuICAgIGlmICh0b2RvRGF0ZS5nZXREYXRlKCkgPT09IGRhdGUyLmdldERhdGUoKSAmJlxuICAgIHRvZG9EYXRlLmdldE1vbnRoKCkgPT09IGRhdGUyLmdldE1vbnRoKCkgJiZcbiAgICB0b2RvRGF0ZS5nZXRGdWxsWWVhcigpID09PSBkYXRlMi5nZXRGdWxsWWVhcigpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIERhdGVzIGZpbHRlcnNcbiAgaGFuZGxlVG9kYXkgKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgaWYgKHRoaXMuX3NhbWVEYXkodG9kby5kYXRhc2V0LmRhdGUsIHRvZGF5KSkge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ25vLWRpc3BsYXknKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlVXBjb21pbmcgKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgaWYgKCF0aGlzLl9zYW1lRGF5KHRvZG8uZGF0YXNldC5kYXRlLCB0b2RheSkgJiYgbmV3IERhdGUodG9kby5kYXRhc2V0LmRhdGUpID4gdG9kYXkpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUFueXRpbWUgKCkge1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgaWYgKHRvZG8uZGF0YXNldC5kYXRlICE9PSAnJykge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ25vLWRpc3BsYXknKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gRGlzYWJsZSBmaWx0ZXJzXG4gIGhhbmRsZURpc3BsYXlBbGwgKCkge1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4gdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JykpXG4gIH1cblxuICAvLyBTb3J0XG4gIGhhbmRsZVNvcnRUaXRsZSAocHJvamVjdElkKSB7XG4gICAgdGhpcy5tb2RlbC5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICtwcm9qZWN0SWQpWzBdXG4gICAgICAubW9kZWwudG9kb0xpc3RzLmZvckVhY2goKHRvZG9MaXN0KSA9PiB0b2RvTGlzdC5tb2RlbC5zb3J0VGl0bGUoKSlcbiAgfVxuXG4gIGhhbmRsZVNvcnREZXNjcmlwdGlvbiAocHJvamVjdElkKSB7XG4gICAgdGhpcy5tb2RlbC5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICtwcm9qZWN0SWQpWzBdXG4gICAgICAubW9kZWwudG9kb0xpc3RzLmZvckVhY2goKHRvZG9MaXN0KSA9PiB0b2RvTGlzdC5tb2RlbC5zb3J0RGVzY3JpcHRpb24oKSlcbiAgfVxuXG4gIGhhbmRsZVNvcnREYXRlIChwcm9qZWN0SWQpIHtcbiAgICB0aGlzLm1vZGVsLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gK3Byb2plY3RJZClbMF1cbiAgICAgIC5tb2RlbC50b2RvTGlzdHMuZm9yRWFjaCgodG9kb0xpc3QpID0+IHRvZG9MaXN0Lm1vZGVsLnNvcnREYXRlKCkpXG4gIH1cblxuICBoYW5kbGVTb3J0UHJpb3JpdHkgKHByb2plY3RJZCkge1xuICAgIHRoaXMubW9kZWwucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSArcHJvamVjdElkKVswXVxuICAgICAgLm1vZGVsLnRvZG9MaXN0cy5mb3JFYWNoKCh0b2RvTGlzdCkgPT4gdG9kb0xpc3QubW9kZWwuc29ydFByaW9yaXR5KCkpXG4gIH1cblxuICAvLyBIb21lIHBhZ2VcbiAgaGFuZGxlSG9tZSAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdD1cInByb2plY3QtMVwiXScpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBsb2NhbFN0b3JhZ2VNb2R1bGUgfSBmcm9tICcuL2xvY2FsU3RvcmFnZU1vZHVsZSdcblxuZXhwb3J0IGNsYXNzIEFwcE1vZGVsIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXVxuICB9XG5cbiAgYWRkUHJvamVjdCAocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KVxuICAgIHByb2plY3QuaWQgPSArK0FwcE1vZGVsLmNvdW50ZXJcbiAgICBsb2NhbFN0b3JhZ2VNb2R1bGUudXBkYXRlUHJvamVjdExpc3QodGhpcy5wcm9qZWN0cylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQXBwTW9kZWxDb3VudGVyJywgQXBwTW9kZWwuY291bnRlcilcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QgKGlkKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gaWQpXG4gICAgbG9jYWxTdG9yYWdlTW9kdWxlLnVwZGF0ZVByb2plY3RMaXN0KHRoaXMucHJvamVjdHMpXG4gIH1cblxuICBlZGl0UHJvamVjdCAoaWQsIG5hbWUpIHtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0Lm1vZGVsLmlkID09PSAraWQpIHtcbiAgICAgICAgcHJvamVjdC5tb2RlbC5uYW1lID0gbmFtZVxuICAgICAgICBsb2NhbFN0b3JhZ2VNb2R1bGUudXBkYXRlUHJvamVjdExpc3QodGhpcy5wcm9qZWN0cylcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9qZWN0XG4gICAgfSlcbiAgfVxufVxuXG5BcHBNb2RlbC5jb3VudGVyID0gMFxuIiwiZXhwb3J0IGNsYXNzIEFwcFZpZXcge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy5ob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0taG9tZScpXG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgdGhpcy5wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX25hbWUnKVxuXG4gICAgLy8gRm9ybSB0byBjcmVhdGUgbmV3IHByb2plY3RzXG4gICAgdGhpcy5wcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLS1wcm9qZWN0IFtuYW1lPVwibmFtZVwiXScpXG4gICAgdGhpcy5wcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC0tcHJvamVjdCcpXG5cbiAgICAvLyBTb3J0IHRhc2tzXG4gICAgdGhpcy5zb3J0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC10aXRsZScpXG4gICAgdGhpcy5zb3J0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1kZXNjcmlwdGlvbicpXG4gICAgdGhpcy5zb3J0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LWRhdGUnKVxuICAgIHRoaXMuc29ydFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtcHJpb3JpdHknKVxuXG4gICAgLy8gRmlsdGVyIHRhc2tzXG4gICAgdGhpcy5kaXNwbGF5QWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmlsdGVyPVwiYWxsXCJdJylcbiAgICB0aGlzLnByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmlsdGVyXj1cInByaW9yaXR5XCJdJylcbiAgICB0aGlzLmRhdGVUb2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbHRlcj1cImRhdGUtdG9kYXlcIl0nKVxuICAgIHRoaXMuZGF0ZVVwY29taW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZmlsdGVyPVwiZGF0ZS11cGNvbWluZ1wiXScpXG4gICAgdGhpcy5kYXRlQW55dGltZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbHRlcj1cImRhdGUtYW55dGltZVwiXScpXG5cbiAgICAvLyBUb2dnbGUgTmF2aWdhdGlvblxuICAgIHRoaXMubmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlPVwibmF2XCJdJylcbiAgICB0aGlzLm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKVxuXG4gICAgLy8gRWRpdCBQcm9qZWN0IE5hbWVcbiAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gJydcbiAgICB0aGlzLl9jaGFuZ2VOYW1lKClcbiAgfVxuXG4gIC8vIEdldCBuZXcgcHJvamVjdCdzIG5hbWVcbiAgZ2V0IF9wcm9qZWN0TmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdElucHV0LnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBJbnB1dCB0byBjcmVhdGUgYSBuZXcgcHJvamVjdFxuICBfcmVzZXRJbnB1dCAoKSB7XG4gICAgdGhpcy5wcm9qZWN0SW5wdXQudmFsdWUgPSAnJ1xuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbiBsaW5rZWQgdG8gdGhlIHByb2plY3RcbiAgcmVuZGVyQnRuIChuYW1lLCBpZCkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2J0bi0tcHJvamVjdCcpXG4gICAgbGkuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBgcHJvamVjdC0ke2lkfWApXG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1maWx0ZXInKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicsIGBwcm9qZWN0LSR7aWR9YClcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbmFtZVxuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tZGVsZXRlJylcbiAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+J1xuXG4gICAgbGkuYXBwZW5kKGJ1dHRvbiwgY2xvc2VCdG4pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kKGxpKVxuICB9XG5cbiAgYmluZEFkZFByb2plY3QgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnByb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBoYW5kbGVyKHRoaXMuX3Byb2plY3ROYW1lKVxuICAgICAgdGhpcy5fcmVzZXRJbnB1dCgpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmREZWxldGVQcm9qZWN0IChoYW5kbGVyKSB7XG4gICAgdGhpcy5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpKSByZXR1cm5cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi0tZGVsZXRlJykpIHtcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnbGknKS5kYXRhc2V0LnByb2plY3Quc2xpY2UoOClcbiAgICAgICAgaGFuZGxlcihpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gTmF2aWdhdGlvbiB0b2dnbGVzXG4gIGJpbmRUb2dnbGUgKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQudG9nZ2xlKSB7XG4gICAgICAgIGhhbmRsZXIoZXZlbnQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmROYXZUb2dnbGUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLm5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICAvLyBIb21lIHBhZ2VcbiAgYmluZEhvbWUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgLy8gRmlsdGVyc1xuICBiaW5kUHJpb3JpdHkgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnByaW9yaXR5QnRuLmZvckVhY2goKHByaW9yaXR5QnRuKSA9PiBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gaGFuZGxlcihldmVudC50YXJnZXQuZGF0YXNldC5maWx0ZXIuc2xpY2UoOSkpKSlcbiAgfVxuXG4gIGJpbmREYXRlVG9kYXkgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmRhdGVUb2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBiaW5kRGF0ZVVwY29taW5nIChoYW5kbGVyKSB7XG4gICAgdGhpcy5kYXRlVXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgYmluZERhdGVBbnl0aW1lIChoYW5kbGVyKSB7XG4gICAgdGhpcy5kYXRlQW55dGltZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBiaW5kRGlzcGxheUFsbCAoaGFuZGxlcikge1xuICAgIHRoaXMuZGlzcGxheUFsbEJ0bi5mb3JFYWNoKChkaXNwbGF5QWxsQnRuKSA9PiBkaXNwbGF5QWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcikpXG4gIH1cblxuICAvLyBTb3J0XG4gIGJpbmRTb3J0VGl0bGUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnNvcnRUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IHRoaXMucHJvamVjdC5pZFxuICAgICAgaGFuZGxlcihwcm9qZWN0SWQpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmRTb3J0RGVzY3JpcHRpb24gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnNvcnREZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IHRoaXMucHJvamVjdC5pZFxuICAgICAgaGFuZGxlcihwcm9qZWN0SWQpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmRTb3J0UHJpb3JpdHkgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnNvcnRQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IHRoaXMucHJvamVjdC5pZFxuICAgICAgaGFuZGxlcihwcm9qZWN0SWQpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmRTb3J0RGF0ZSAoaGFuZGxlcikge1xuICAgIHRoaXMuc29ydERhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSB0aGlzLnByb2plY3QuaWRcbiAgICAgIGhhbmRsZXIocHJvamVjdElkKVxuICAgIH0pXG4gIH1cblxuICAvLyBFZGl0IFByb2plY3QgTmFtZVxuXG4gIF9jaGFuZ2VOYW1lICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RfX25hbWUnKSkge1xuICAgICAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kQ2hhbmdlTmFtZSAoaGFuZGxlcikge1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5fdGVtcG9yYXJ5TmFtZSkge1xuICAgICAgICBoYW5kbGVyKGV2ZW50LnRhcmdldC5pZCwgdGhpcy5fdGVtcG9yYXJ5TmFtZSlcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5TmFtZSA9ICcnXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFByb2plY3RDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vZGVsLCB2aWV3KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgdGhpcy52aWV3ID0gdmlld1xuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlKHRoaXMubW9kZWwudG9kb0xpc3RzKVxuICAgIHRoaXMubW9kZWwuYmluZFByb2plY3RDaGFuZ2UodGhpcy5vblByb2plY3RDaGFuZ2UuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZENoYW5nZU5hbWUodGhpcy5oYW5kbGVFZGl0VG9kb0xpc3QuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERlbGV0ZVNlY3Rpb24odGhpcy5oYW5kbGVEZWxldGVUb2RvTGlzdC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgb25Qcm9qZWN0Q2hhbmdlICh0b2RvTGlzdHMpIHtcbiAgICB0aGlzLnZpZXcucmVuZGVyKHRvZG9MaXN0cylcbiAgfVxuXG4gIGhhbmRsZUFkZFRvZG9MaXN0ICh0b2RvTGlzdCkge1xuICAgIHRoaXMubW9kZWwuYWRkVG9kb0xpc3QodG9kb0xpc3QpXG4gIH1cblxuICBoYW5kbGVEZWxldGVUb2RvTGlzdCAoaWQpIHtcbiAgICB0aGlzLm1vZGVsLmRlbGV0ZVRvZG9MaXN0KGlkKVxuICB9XG5cbiAgaGFuZGxlRWRpdFRvZG9MaXN0IChpZCwgbmFtZSkge1xuICAgIHRoaXMubW9kZWwuZWRpdFRvZG9MaXN0KGlkLCBuYW1lKVxuICB9XG5cbiAgYmluZEFkZCAoKSB7XG4gICAgdGhpcy52aWV3LmJpbmRBZGRTZWN0aW9uKHRoaXMuaGFuZGxlQWRkVG9kb0xpc3QuYmluZCh0aGlzKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2VjdGlvbkZvcm0gfSBmcm9tICcuL1NlY3Rpb25Gb3JtJ1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlTW9kdWxlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VNb2R1bGUnXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0TW9kZWwge1xuICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWUgPT09ICcnID8gJ1VudGl0bGVkJyA6IG5hbWVcbiAgICB0aGlzLmlkID0gKytQcm9qZWN0TW9kZWwuY291bnRlclxuICAgIHRoaXMudG9kb0xpc3RzID0gW11cbiAgICB0aGlzLmZvcm0gPSBuZXcgU2VjdGlvbkZvcm0odGhpcy5pZClcbiAgfVxuXG4gIF9jb21taXQgKHRvZG9MaXN0cykge1xuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlKHRvZG9MaXN0cylcbiAgICBsb2NhbFN0b3JhZ2VNb2R1bGUudXBkYXRlVG9kb0xpc3RzKHRoaXMuaWQsIHRoaXMudG9kb0xpc3RzKVxuICB9XG5cbiAgYWRkVG9kb0xpc3QgKHRvZG9MaXN0KSB7XG4gICAgdGhpcy50b2RvTGlzdHMucHVzaCh0b2RvTGlzdClcbiAgICB0b2RvTGlzdC5pZCA9IHRoaXMudG9kb0xpc3RzLmxlbmd0aFxuICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGVkaXRUb2RvTGlzdCAoaWQsIG5hbWUpIHtcbiAgICB0aGlzLnRvZG9MaXN0cyA9IHRoaXMudG9kb0xpc3RzLm1hcCgodG9kb0xpc3QpID0+IHtcbiAgICAgIGlmICh0b2RvTGlzdC5tb2RlbC5pZCA9PT0gK2lkKSB7XG4gICAgICAgIHRvZG9MaXN0Lm1vZGVsLm5hbWUgPSBuYW1lXG4gICAgICB9XG4gICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICB9KVxuICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGRlbGV0ZVRvZG9MaXN0IChpZCkge1xuICAgIHRoaXMudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHMuZmlsdGVyKHRvZG9MaXN0ID0+IHRvZG9MaXN0Lm1vZGVsLmlkICE9PSAraWQpXG4gICAgdGhpcy5fY29tbWl0KHRoaXMudG9kb0xpc3RzKVxuICB9XG5cbiAgYmluZFByb2plY3RDaGFuZ2UgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vblByb2plY3RDaGFuZ2UgPSBjYWxsYmFja1xuICB9XG59XG5cblByb2plY3RNb2RlbC5jb3VudGVyID0gMFxuIiwiaW1wb3J0IHsgVG9kb0xpc3RDb250cm9sbGVyIH0gZnJvbSAnLi9Ub2RvTGlzdENvbnRyb2xsZXInXG5pbXBvcnQgeyBUb2RvTGlzdE1vZGVsIH0gZnJvbSAnLi9Ub2RvTGlzdE1vZGVsJ1xuaW1wb3J0IHsgVG9kb0xpc3RWaWV3IH0gZnJvbSAnLi9Ub2RvTGlzdFZpZXcnXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuL1Byb2plY3RNb2RlbCdcblxuZXhwb3J0IGNsYXNzIFByb2plY3RWaWV3IHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy5zZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9ucycpXG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX25hbWUnKVxuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuX3RlbXBvcmFyeU5hbWUgPSAnJ1xuICAgIHRoaXMuX2NoYW5nZU5hbWUoKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0XG4gIHJlbmRlck5hbWUgKG5hbWUsIGlkKSB7XG4gICAgdGhpcy5uYW1lLmlubmVySFRNTCA9IG5hbWVcbiAgICB0aGlzLm5hbWUuc2V0QXR0cmlidXRlKCdpZCcsIGlkKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBhZGQgc2VjdGlvbiBmb3JtXG4gIHJlbmRlckZvcm0gKGZvcm0pIHtcbiAgICBmb3JtLnJlbmRlcigpXG4gIH1cblxuICAvLyBHZXQgdGhlIGFkZCBzZWN0aW9uIGZvcm0gaW5wdXRzXG4gIGdldEZvcm0gKCkge1xuICAgIHRoaXMubmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlY3Rpb24tZm9ybS0ke3RoaXMuaWR9IFtuYW1lPVwic2VjdGlvblwiXWApXG4gICAgdGhpcy5zdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH0gLmJ0bi0tc3VibWl0YClcbiAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gKVxuICB9XG5cbiAgLy8gR2V0IFNlY3Rpb24ncyBOYW1lIGZyb20gdGhlIGZvcm1cbiAgZ2V0IF9zZWN0aW9uTmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZUlucHV0LnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBmb3JtIGlucHV0XG4gIF9yZXNldElucHV0ICgpIHtcbiAgICB0aGlzLm5hbWVJbnB1dC52YWx1ZSA9ICcnXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHByb2plY3QgYnkgcmVuZGVyaW5nIGV2ZXJ5IHNlY3Rpb25cbiAgcmVuZGVyICh0b2RvTGlzdHMpIHtcbiAgICB3aGlsZSAodGhpcy5zZWN0aW9ucy5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnNlY3Rpb25zLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHRvZG9MaXN0IG9mIHRvZG9MaXN0cykge1xuICAgICAgdG9kb0xpc3Qudmlldy5jcmVhdGVTZWN0aW9uKClcbiAgICAgIHRvZG9MaXN0LnZpZXcucmVuZGVyTmFtZSh0b2RvTGlzdC5tb2RlbC5uYW1lKVxuICAgICAgdG9kb0xpc3Qudmlldy5yZW5kZXIodG9kb0xpc3QubW9kZWwudG9kb3MpXG4gICAgICB0b2RvTGlzdC52aWV3LnJlbmRlckZvcm0odG9kb0xpc3QubW9kZWwuZm9ybSlcbiAgICAgIHRvZG9MaXN0LnZpZXcuZ2V0Rm9ybSh0b2RvTGlzdC5tb2RlbC5mb3JtKVxuICAgICAgdG9kb0xpc3QuYmluZEFkZCgpXG4gICAgfVxuICB9XG5cbiAgLy8gQWxsb3cgc2VjdGlvbiBuYW1lIGVkaXRzXG4gIF9jaGFuZ2VOYW1lICgpIHtcbiAgICB0aGlzLnNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlY3Rpb25fX25hbWUnKSkge1xuICAgICAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kQ2hhbmdlTmFtZSAoaGFuZGxlcikge1xuICAgIHRoaXMuc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fdGVtcG9yYXJ5TmFtZSkge1xuICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbY2xhc3NePVwic2VjdGlvbi1cIl0nKS5jbGFzc0xpc3RbMF0uc2xpY2UoOClcbiAgICAgICAgaGFuZGxlcihpZCwgdGhpcy5fdGVtcG9yYXJ5TmFtZSlcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5TmFtZSA9ICcnXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmRBZGRTZWN0aW9uIChoYW5kbGVyKSB7XG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC0tc2VjdGlvbicpKSB7XG4gICAgICAgIGhhbmRsZXIobmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCh0aGlzLl9zZWN0aW9uTmFtZSwgUHJvamVjdE1vZGVsLmNvdW50ZXIpLCBuZXcgVG9kb0xpc3RWaWV3KCkpKVxuICAgICAgICB0aGlzLl9yZXNldElucHV0KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmluZERlbGV0ZVNlY3Rpb24gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5idG4tLWRlbGV0ZScpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5idG4tLWRlbGV0ZScpLmRhdGFzZXQuZGVsZXRlXG4gICAgICAgIGhhbmRsZXIoaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlY3Rpb25Gb3JtIHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkX19zZWN0aW9uJylcbiAgICBmb3JtQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBmb3JtQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWRyb3Bkb3duJywgJ2J0bi0tc2VjdGlvbicpXG4gICAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gKVxuICAgIGZvcm1CdG4uaW5uZXJIVE1MID0gJ0FkZCBTZWN0aW9uJ1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnYWRkJywgJ2FkZC0tc2VjdGlvbicsICdkcm9wZG93bicsICdoaWRkZW4nKVxuICAgIGZvcm0uaWQgPSBgc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FkZF9fY29udGVudCcsICdhZGRfX2NvbnRlbnQtLXNlY3Rpb24nKVxuXG4gICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc2VjdGlvbicpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlY3Rpb25cXCdzIE5hbWUnKVxuICAgIGxhYmVsTmFtZS5hcHBlbmQobmFtZSlcbiAgICBjb250ZW50LmFwcGVuZChsYWJlbE5hbWUpXG5cbiAgICBjb25zdCBmaW5pc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZpbmlzaC5jbGFzc0xpc3QuYWRkKCdhZGRfX2ZpbmlzaCcpXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWFkZCcsICdzZWN0aW9uJylcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tc3VibWl0JylcbiAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FkZCBTZWN0aW9uJ1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gKVxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1jYW5jZWwnKVxuICAgIGNhbmNlbEJ0bi5pbm5lckhUTUwgPSAnQ2FuY2VsJ1xuXG4gICAgZmluaXNoLmFwcGVuZChzdWJtaXRCdG4sIGNhbmNlbEJ0bilcbiAgICBmb3JtLmFwcGVuZChjb250ZW50LCBmaW5pc2gpXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmQoZm9ybUJ0biwgZm9ybSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb0Zvcm0gfSBmcm9tICcuL1RvZG9Gb3JtJ1xuXG5leHBvcnQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUgPSAnJywgcHJpb3JpdHkgPSAnbm9uZScpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICB0aGlzLmRhdGUgPSBkYXRlXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgdGhpcy5pZCA9ICsrVG9kby5jb3VudGVyXG4gICAgdGhpcy5lZGl0Rm9ybSA9IG5ldyBUb2RvRm9ybSgnZWRpdCcsIHRoaXMuaWQpXG4gIH1cblxuICByZW5kZXIgKGNvbnRhaW5lcikge1xuICAgIHRoaXMudG9kb0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMudG9kb0VsZW0uY2xhc3NMaXN0LmFkZCgndG8tZG8nKVxuICAgIHRoaXMudG9kb0VsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWRhdGUnLCB0aGlzLmRhdGUpXG4gICAgdGhpcy50b2RvRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpb3JpdHknLCB0aGlzLnByaW9yaXR5KVxuICAgIHRoaXMudG9kb0VsZW0uaWQgPSB0aGlzLmlkXG5cbiAgICBjb25zdCB0b2RvQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdG9kb0NoZWNrLmNsYXNzTGlzdC5hZGQoJ3RvLWRvX19jaGVjaycpXG4gICAgdG9kb0NoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgdGhpcy50b2RvRWxlbS5hcHBlbmQodG9kb0NoZWNrKVxuXG4gICAgY29uc3QgY29tcG9uZW50cyA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnZGF0ZSddXG4gICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgY29tcG9uZW50cykge1xuICAgICAgY29uc3QgdG9kb0NvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0b2RvQ29tcG9uZW50LmNsYXNzTGlzdC5hZGQoYHRvLWRvX18ke2NvbXBvbmVudH1gKVxuICAgICAgdG9kb0NvbXBvbmVudC5pbm5lckhUTUwgPSB0aGlzW2NvbXBvbmVudF1cbiAgICAgIHRoaXMudG9kb0VsZW0uYXBwZW5kKHRvZG9Db21wb25lbnQpXG4gICAgfVxuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG8tZG9fX3ByaW9yaXR5JywgYHByaW9yaXR5LSR7dGhpcy5wcmlvcml0eX1gKVxuICAgIHRvZG9Qcmlvcml0eS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuICAgIHRoaXMudG9kb0VsZW0uYXBwZW5kKHRvZG9Qcmlvcml0eSlcblxuICAgIHRoaXMudG9kb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMudG9kb0VkaXQuY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tdG9nZ2xlJywgJ2J0bi0tZWRpdCcpXG4gICAgdGhpcy50b2RvRWRpdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLnRvZG9FZGl0LnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgZWRpdC10b2RvLSR7dGhpcy5pZH1gKVxuICAgIHRoaXMudG9kb0VkaXQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXBlbmNpbC1hbHRcIj48L2k+J1xuICAgIHRoaXMudG9kb0VsZW0uYXBwZW5kKHRoaXMudG9kb0VkaXQpXG5cbiAgICBjb250YWluZXIuYXBwZW5kKHRoaXMudG9kb0VsZW0pXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RvZG9Db3VudGVyJywgVG9kby5jb3VudGVyKVxuICB9XG59XG5cblRvZG8uY291bnRlciA9IDBcbiIsImV4cG9ydCBjbGFzcyBUb2RvRm9ybSB7XG4gIGNvbnN0cnVjdG9yIChnb2FsLCBpZCkge1xuICAgIHRoaXMuZ29hbCA9IGdvYWxcbiAgICB0aGlzLmlkID0gaWRcbiAgfVxuXG4gIF9yZW5kZXJGb3JtICgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH0tLXRvZG9gLCAndG9kby1mb3JtJywgJ2Ryb3Bkb3duJylcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLmdvYWx9LXRvZG8tJHt0aGlzLmlkfWApXG5cbiAgICBpZiAodGhpcy5nb2FsID09PSAnYWRkJykge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9X19jb250ZW50YCwgYCR7dGhpcy5nb2FsfV9fY29udGVudC0tdG9kb2ApXG5cbiAgICBjb25zdCBsYWJlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKVxuICAgIGxhYmVsVGl0bGUuYXBwZW5kKHRpdGxlKVxuXG4gICAgY29uc3QgbGFiZWxEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKVxuICAgIGxhYmVsRGVzY3JpcHRpb24uYXBwZW5kKGRlc2NyaXB0aW9uKVxuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH1fX2RldGFpbHNgKVxuXG4gICAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpXG4gICAgbGFiZWxEYXRlLmFwcGVuZChkYXRlKVxuXG4gICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZF9fcHJpb3JpdHknKVxuICAgIHRoaXMucHJpb3JpdHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMucHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgdGhpcy5wcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYGFkZC1wcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICB0aGlzLnByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLXRvZ2dsZScpXG4gICAgdGhpcy5wcmlvcml0eUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuXG4gICAgY29uc3QgcHJpb3JpdGllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdGllcy5jbGFzc0xpc3QuYWRkKCdhZGQtcHJpb3JpdHknLCAnZHJvcGRvd24nLCAnaGlkZGVuJylcbiAgICBwcmlvcml0aWVzLnNldEF0dHJpYnV0ZSgnaWQnLCBgYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1gKVxuICAgIGNvbnN0IHByaW9yaXRpZXNMaXN0ID0gWydoaWdoJywgJ21lZCcsICdsb3cnLCAnbm9uZSddXG5cbiAgICBmb3IgKGNvbnN0IHByaW9yaXR5IG9mIHByaW9yaXRpZXNMaXN0KSB7XG4gICAgICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWxQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBwcmlvcml0eS0ke3ByaW9yaXR5fS0ke3RoaXMuaWR9YClcbiAgICAgIGxhYmVsUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHtwcmlvcml0eX1gLCBgcHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgICBsYWJlbFByaW9yaXR5LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1ib29rbWFya1wiPjwvaT4nXG5cbiAgICAgIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcmlvcml0eSlcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsIGBwcmlvcml0eS0ke3ByaW9yaXR5fS0ke3RoaXMuaWR9YClcblxuICAgICAgaWYgKHByaW9yaXR5ID09PSAnbm9uZScpIHtcbiAgICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBwcmlvcml0aWVzLmFwcGVuZChsYWJlbFByaW9yaXR5LCBpbnB1dFByaW9yaXR5KVxuICAgIH1cblxuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZCh0aGlzLnByaW9yaXR5QnRuLCBwcmlvcml0aWVzKVxuXG4gICAgY29uc3QgZmluaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmaW5pc2guY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9X19maW5pc2hgKVxuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLXN1Ym1pdCcpXG4gICAgc3VibWl0QnRuLmlubmVySFRNTCA9IGAke3RoaXMuZ29hbC50b1VwcGVyQ2FzZSgpLnNsaWNlKDAsIDEpICsgdGhpcy5nb2FsLnNsaWNlKDEpfSBUYXNrYFxuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgJHt0aGlzLmdvYWx9LXRvZG8tJHt0aGlzLmlkfWApXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWNhbmNlbCcpXG4gICAgY2FuY2VsQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnXG5cbiAgICBmaW5pc2guYXBwZW5kKHN1Ym1pdEJ0biwgY2FuY2VsQnRuKVxuICAgIGNvbnRlbnQuYXBwZW5kKGxhYmVsVGl0bGUsIGxhYmVsRGVzY3JpcHRpb24sIGRldGFpbHMpXG4gICAgZGV0YWlscy5hcHBlbmQobGFiZWxEYXRlLCBwcmlvcml0eUNvbnRhaW5lcilcbiAgICBmb3JtLmFwcGVuZChjb250ZW50LCBmaW5pc2gpXG5cbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgcmVuZGVyQWRkIChjb250YWluZXIpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfV9fdG9kb2ApXG5cbiAgICB0aGlzLmZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMuZm9ybUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1kcm9wZG93bicsIGBidG4tLSR7dGhpcy5nb2FsfWApXG4gICAgdGhpcy5mb3JtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHRoaXMuZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYCR7dGhpcy5nb2FsfS10b2RvLSR7dGhpcy5pZH1gKVxuICAgIHRoaXMuZm9ybUJ0bi5pbm5lckhUTUwgPSBgJHt0aGlzLmdvYWwuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMuZ29hbC5zbGljZSgxKX0gVGFza2BcblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kKHRoaXMuZm9ybUJ0biwgdGhpcy5fcmVuZGVyRm9ybSgpKVxuICAgIGNvbnRhaW5lci5hcHBlbmQoZm9ybUNvbnRhaW5lcilcblxuICAgIHRoaXMuX2luaXRQcmlvcml0eVRvZ2dsZSgpXG4gICAgdGhpcy5faW5pdFByaW9yaXR5TGFiZWxzKClcbiAgfVxuXG4gIHJlbmRlckVkaXQgKGJlZm9yZSkge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9X190b2RvYClcblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kKHRoaXMuX3JlbmRlckZvcm0oKSlcbiAgICBiZWZvcmUuYWZ0ZXIoZm9ybUNvbnRhaW5lcilcblxuICAgIHRoaXMuX2luaXRQcmlvcml0eVRvZ2dsZSgpXG4gICAgdGhpcy5faW5pdFByaW9yaXR5TGFiZWxzKClcbiAgfVxuXG4gIC8vIEVuYWJsZSBwcmlvcml0eSB0b2dnbGUgYW5kIGNvbG9yIGNoYW5nZSB3aGVuIHNlbGVjdGluZyBhIHByaW9yaXR5XG5cbiAgX2luaXRQcmlvcml0eVRvZ2dsZSAoKSB7XG4gICAgdGhpcy5wcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMucHJpb3JpdHlCdG4uZGF0YXNldC50b2dnbGV9YCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJykpXG4gIH1cblxuICBfaW5pdFByaW9yaXR5TGFiZWxzICgpIHtcbiAgICB0aGlzLmxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICB0aGlzLmxhYmVscy5mb3JFYWNoKGxhYmVsID0+IGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1gKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlPVwiYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1cIl1gKS5zdHlsZS5jb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xhYmVsJykpLmNvbG9yXG4gICAgfSkpXG4gIH1cblxuICAvLyBSZXNldCBwcmlvcml0eSBjb2xvciB3aGVuIGFkZGluZyBhIHRhc2tcblxuICBfaW5pdFJlc2V0UHJpb3JpdHkgKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGQtdG9kby0ke3RoaXMuaWR9IC5idG4tLXN1Ym1pdGApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlPVwiYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1cIl1gKS5zdHlsZS5jb2xvciA9ICcnXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb0Zvcm0gfSBmcm9tICcuL1RvZG9Gb3JtJ1xuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vZGVsLCB2aWV3KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgdGhpcy52aWV3ID0gdmlld1xuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0aGlzLm1vZGVsLnRvZG9zKVxuICAgIHRoaXMubW9kZWwuYmluZFRvZG9MaXN0Q2hhbmdlKHRoaXMub25Ub2RvTGlzdENoYW5nZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGVsZXRlVG9kbyh0aGlzLmhhbmRsZURlbGV0ZVRvZG8uYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZE9wZW5FZGl0KHRoaXMuaGFuZGxlT3BlbkVkaXQuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZEVkaXRUb2RvKHRoaXMuaGFuZGxlRWRpdFRvZG8uYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9uVG9kb0xpc3RDaGFuZ2UgKHRvZG9zKSB7XG4gICAgdGhpcy52aWV3LnJlbmRlcih0b2RvcylcbiAgfVxuXG4gIGhhbmRsZUFkZFRvZG8gKHRvZG8pIHtcbiAgICB0aGlzLm1vZGVsLmFkZFRvZG8odG9kbylcbiAgfVxuXG4gIGhhbmRsZUVkaXRUb2RvICh1cGRhdGVkVG9kbywgaWQpIHtcbiAgICB0aGlzLm1vZGVsLmVkaXRUb2RvKHVwZGF0ZWRUb2RvLCBpZClcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZVRvZG8gKGlkKSB7XG4gICAgdGhpcy5tb2RlbC5kZWxldGVUb2RvKGlkKVxuICB9XG5cbiAgaGFuZGxlT3BlbkVkaXQgKGlkKSB7XG4gICAgLy8gVXNlciBjYW4gb25seSBlZGl0IG9uZSB0YXNrIGF0IGEgdGltZSwgc28gaWYgdGhlcmUgaXMgYW5vdGhlciBFZGl0IEZvcm0gb3BlbiwgaXQgaXMgY2xvc2VkLlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdJykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0nKS5yZW1vdmUoKVxuICAgIH1cbiAgICBuZXcgVG9kb0Zvcm0oJ2VkaXQnLCBpZCkucmVuZGVyRWRpdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG8tZG9baWQ9XCIke2lkfVwiXWApKVxuICAgIHRoaXMudmlldy5nZXRFZGl0Rm9ybShpZClcbiAgICB0aGlzLnZpZXcuc2V0RWRpdEZvcm0oaWQpXG4gIH1cblxuICBiaW5kQWRkICgpIHtcbiAgICB0aGlzLnZpZXcuYmluZEFkZFRvZG8odGhpcy5oYW5kbGVBZGRUb2RvLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9Gb3JtIH0gZnJvbSAnLi9Ub2RvRm9ybSdcbmltcG9ydCB7IGxvY2FsU3RvcmFnZU1vZHVsZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlTW9kdWxlJ1xuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RNb2RlbCB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9qZWN0SWQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lID09PSAnJyA/ICdVbnRpdGxlZCcgOiBuYW1lXG4gICAgdGhpcy5pZCA9ICsrVG9kb0xpc3RNb2RlbC5jb3VudGVyXG4gICAgdGhpcy5mb3JtID0gbmV3IFRvZG9Gb3JtKCdhZGQnLCB0aGlzLmlkKVxuICAgIHRoaXMucHJvamVjdElkID0gcHJvamVjdElkXG4gICAgdGhpcy50b2RvcyA9IFtdXG4gICAgdGhpcy5zb3J0U3RhdHVzID0gJydcbiAgfVxuXG4gIGFkZFRvZG8gKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbylcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvcylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVG9kb0xpc3RNb2RlbENvdW50ZXInLCBUb2RvTGlzdE1vZGVsLmNvdW50ZXIpXG4gIH1cblxuICBlZGl0VG9kbyAodXBkYXRlZFRvZG8sIGlkKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICBpZiAodG9kby5pZCA9PT0gK2lkKSB7XG4gICAgICAgIHJldHVybiB1cGRhdGVkVG9kb1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRvZG9cbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9zKVxuICB9XG5cbiAgZGVsZXRlVG9kbyAoaWQpIHtcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT09IGlkKVxuICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9zKVxuICB9XG5cbiAgYmluZFRvZG9MaXN0Q2hhbmdlIChjYWxsYmFjaykge1xuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSA9IGNhbGxiYWNrXG4gIH1cblxuICBfY29tbWl0ICh0b2Rvcykge1xuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0b2RvcylcbiAgICBsb2NhbFN0b3JhZ2VNb2R1bGUudXBkYXRlVG9kb3ModGhpcy5pZCwgdGhpcy5wcm9qZWN0SWQsIHRoaXMudG9kb3MpXG4gIH1cblxuICBzb3J0VGl0bGUgKCkge1xuICAgIGlmICh0aGlzLnNvcnRTdGF0dXMgPT09ICdkZXNjZW5kaW5nJykge1xuICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3Muc29ydCgoYSwgYikgPT4gKGIudGl0bGUpLmxvY2FsZUNvbXBhcmUoYS50aXRsZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLnNvcnQoKGEsIGIpID0+IChhLnRpdGxlKS5sb2NhbGVDb21wYXJlKGIudGl0bGUpKVxuICAgIH1cbiAgICB0aGlzLl9zb3J0Q2hhbmdlKHRoaXMudG9kb3MpXG4gIH1cblxuICBzb3J0RGVzY3JpcHRpb24gKCkge1xuICAgIGlmICh0aGlzLnNvcnRTdGF0dXMgPT09ICdkZXNjZW5kaW5nJykge1xuICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3Muc29ydCgoYSwgYikgPT4gKGIuZGVzY3JpcHRpb24pLmxvY2FsZUNvbXBhcmUoYS5kZXNjcmlwdGlvbikpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLnNvcnQoKGEsIGIpID0+IChhLmRlc2NyaXB0aW9uKS5sb2NhbGVDb21wYXJlKGIuZGVzY3JpcHRpb24pKVxuICAgIH1cbiAgICB0aGlzLl9zb3J0Q2hhbmdlKHRoaXMudG9kb3MpXG4gIH1cblxuICBzb3J0RGF0ZSAoKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKCFhLmRhdGUpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSBpZiAoIWIuZGF0ZSkge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnNvcnRTdGF0dXMgPT09ICdkZXNjZW5kaW5nJykge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShiLmRhdGUpIC0gbmV3IERhdGUoYS5kYXRlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmRhdGUpIC0gbmV3IERhdGUoYi5kYXRlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLl9zb3J0Q2hhbmdlKHRoaXMudG9kb3MpXG4gIH1cblxuICBzb3J0UHJpb3JpdHkgKCkge1xuICAgIHRoaXMuX2dldFByaW9yaXR5VmFsdWUoKVxuICAgIGlmICh0aGlzLnNvcnRTdGF0dXMgPT09ICdkZXNjZW5kaW5nJykge1xuICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3Muc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eVZhbHVlIC0gYS5wcmlvcml0eVZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5zb3J0KChhLCBiKSA9PiBhLnByaW9yaXR5VmFsdWUgLSBiLnByaW9yaXR5VmFsdWUpXG4gICAgfVxuICAgIHRoaXMuX3NvcnRDaGFuZ2UodGhpcy50b2RvcylcbiAgfVxuXG4gIF9nZXRQcmlvcml0eVZhbHVlICgpIHtcbiAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdGhpcy50b2Rvcykge1xuICAgICAgc3dpdGNoICh0b2RvLnByaW9yaXR5KSB7XG4gICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgdG9kby5wcmlvcml0eVZhbHVlID0gMVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ21lZCc6XG4gICAgICAgICAgdG9kby5wcmlvcml0eVZhbHVlID0gMlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICAgIHRvZG8ucHJpb3JpdHlWYWx1ZSA9IDNcbiAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRvZG8ucHJpb3JpdHlWYWx1ZSA9IDBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfc29ydENoYW5nZSAodG9kb3MpIHtcbiAgICB0aGlzLnNvcnRTdGF0dXMgPSB0aGlzLnNvcnRTdGF0dXMgPT09ICdkZXNjZW5kaW5nJyA/ICdhc2NlbmRpbmcnIDogJ2Rlc2NlbmRpbmcnXG4gICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlKHRvZG9zKVxuICB9XG59XG5cblRvZG9MaXN0TW9kZWwuY291bnRlciA9IDBcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8nXG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdFZpZXcge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25zJylcbiAgICB0aGlzLnRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLnRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG9saXN0JylcbiAgICB0aGlzLmlkID0gKytUb2RvTGlzdFZpZXcuY291bnRlclxuICB9XG5cbiAgLy8gQ3JlYXRlIGEgc2VjdGlvblxuICBjcmVhdGVTZWN0aW9uICgpIHtcbiAgICB0aGlzLnNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGBzZWN0aW9uLSR7dGhpcy5pZH1gKVxuICAgIHRoaXMuc2VjdGlvbi5wcmVwZW5kKHRoaXMudG9kb0xpc3QpXG4gICAgdGhpcy5wcm9qZWN0LmFwcGVuZCh0aGlzLnNlY3Rpb24pXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHNlY3Rpb24ncyBuYW1lXG4gIHJlbmRlck5hbWUgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMubmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19uYW1lX19jb250YWluZXInKVxuXG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRoaXMubmFtZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19uYW1lJylcbiAgICB0aGlzLm5hbWUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKVxuICAgIHRoaXMubmFtZS5pbm5lckhUTUwgPSBuYW1lXG5cbiAgICB0aGlzLmRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGhpcy5kZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLS1kZWxldGUnKVxuICAgIHRoaXMuZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHRoaXMuZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1kZWxldGUnLCB0aGlzLnNlY3Rpb24uY2xhc3NMaXN0WzBdLnNsaWNlKDgpKVxuICAgIHRoaXMuZGVsZXRlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT4nXG5cbiAgICB0aGlzLm5hbWVDb250YWluZXIuYXBwZW5kKHRoaXMubmFtZSwgdGhpcy5kZWxldGVCdG4pXG4gICAgdGhpcy5zZWN0aW9uLnByZXBlbmQodGhpcy5uYW1lQ29udGFpbmVyKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBBZGQgZm9ybVxuICByZW5kZXJGb3JtIChmb3JtKSB7XG4gICAgZm9ybS5yZW5kZXJBZGQodGhpcy5zZWN0aW9uKVxuICB9XG5cbiAgLy8gR2V0IHRoZSBBZGQgZm9ybSBpbnB1dHNcbiAgZ2V0Rm9ybSAoKSB7XG4gICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cInRpdGxlXCJdYClcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHt0aGlzLmlkfSAudG9kby1mb3JtIFtuYW1lPVwiZGVzY3JpcHRpb25cIl1gKVxuICAgIHRoaXMuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cImRhdGVcIl1gKVxuICAgIHRoaXMuc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHt0aGlzLmlkfSAudG9kby1mb3JtIC5idG4tLXN1Ym1pdGApXG4gIH1cblxuICAvLyBHZXQgYWRkIGZvcm0gdmFsdWVzXG4gIGdldCBfdG9kb1RpdGxlICgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZS52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvRGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9EYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9Qcmlvcml0eSAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGQtdG9kby0ke3RoaXMuaWR9IFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZGApKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZC10b2RvLSR7dGhpcy5pZH0gW25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkYCkudmFsdWVcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgdGhlIEVkaXQgZm9ybSBpbnB1dHNcbiAgZ2V0RWRpdEZvcm0gKCkge1xuICAgIHRoaXMudGl0bGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImVkaXQtdG9kb1wiXSBbbmFtZT1cInRpdGxlXCJdJylcbiAgICB0aGlzLmRlc2NyaXB0aW9uRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gW25hbWU9XCJkZXNjcmlwdGlvblwiXScpXG4gICAgdGhpcy5kYXRlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gW25hbWU9XCJkYXRlXCJdJylcbiAgICB0aGlzLnByaW9yaXR5RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gLmJ0bi0tdG9nZ2xlJylcbiAgfVxuXG4gIC8vIEF1dG9tYXRpY2FsbHkgcHJlLWZpbGwgdGhlIEVkaXQgZm9ybSBpbnB1dHNcbiAgc2V0RWRpdEZvcm0gKGlkKSB7XG4gICAgdGhpcy50aXRsZUVkaXQudmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX3RpdGxlYCkuaW5uZXJIVE1MXG4gICAgdGhpcy5kZXNjcmlwdGlvbkVkaXQudmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX2Rlc2NyaXB0aW9uYCkuaW5uZXJIVE1MXG4gICAgdGhpcy5kYXRlRWRpdC52YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aWR9XCJdIC50by1kb19fZGF0ZWApLmlubmVySFRNTFxuICAgIHRoaXMucHJpb3JpdHlFZGl0LmNsYXNzTGlzdC5hZGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl0gLnRvLWRvX19wcmlvcml0eWApLmNsYXNzTGlzdFsxXSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWRePVwiZWRpdC10b2RvXCJdIFtpZF49XCIke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aWR9XCJdIC50by1kb19fcHJpb3JpdHlgKS5jbGFzc0xpc3RbMV19XCJdYCkuY2hlY2tlZCA9IHRydWVcbiAgfVxuXG4gIC8vIEdldCB0aGUgRWRpdCBmb3JtIHZhbHVlc1xuICBnZXQgX2VkaXRUaXRsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGVFZGl0LnZhbHVlXG4gIH1cblxuICBnZXQgX2VkaXREZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb25FZGl0LnZhbHVlXG4gIH1cblxuICBnZXQgX2VkaXREYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlRWRpdC52YWx1ZVxuICB9XG5cbiAgZ2V0IF9lZGl0UHJpb3JpdHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdIFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBmb3JtIGlucHV0c1xuICBfcmVzZXRJbnB1dHMgKCkge1xuICAgIHRoaXMudGl0bGUudmFsdWUgPSAnJ1xuICAgIHRoaXMuZGVzY3JpcHRpb24udmFsdWUgPSAnJ1xuICAgIHRoaXMuZGF0ZS52YWx1ZSA9ICcnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcl49XCJwcmlvcml0eS1ub25lXCJdJykuY2hlY2tlZCA9IHRydWVcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgVG9kbyBMaXN0XG4gIHJlbmRlciAodG9kb3MpIHtcbiAgICB3aGlsZSAodGhpcy50b2RvTGlzdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnRvZG9MaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICAgIHRvZG8ucmVuZGVyKHRoaXMudG9kb0xpc3QpXG4gICAgfVxuICB9XG5cbiAgLy8gRXZlbnQgTGlzdGVuZXJzXG5cbiAgYmluZEFkZFRvZG8gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaGFuZGxlcihuZXcgVG9kbyh0aGlzLl90b2RvVGl0bGUsIHRoaXMuX3RvZG9EZXNjcmlwdGlvbiwgdGhpcy5fdG9kb0RhdGUsIHRoaXMuX3RvZG9Qcmlvcml0eSkpXG4gICAgICB0aGlzLl9yZXNldElucHV0cygpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmREZWxldGVUb2RvIChoYW5kbGVyKSB7XG4gICAgdGhpcy50b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvLWRvX19jaGVjaycpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpXG4gICAgICAgIGhhbmRsZXIoaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIE9wZW4gZm9ybSB0byBlZGl0IHRoZSB0b2RvXG4gIGJpbmRPcGVuRWRpdCAoaGFuZGxlcikge1xuICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLmJ0bi0tZWRpdCcpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50by1kbycpLmlkKVxuICAgICAgICBoYW5kbGVyKGlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kRWRpdFRvZG8gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PT0gJ0VkaXQgVGFzaycpIHtcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnZm9ybScpLmlkLnNsaWNlKDEwKVxuICAgICAgICBjb25zdCB1cGRhdGVkVG9kbyA9IG5ldyBUb2RvKHRoaXMuX2VkaXRUaXRsZSwgdGhpcy5fZWRpdERlc2NyaXB0aW9uLCB0aGlzLl9lZGl0RGF0ZSwgdGhpcy5fZWRpdFByaW9yaXR5KVxuICAgICAgICBoYW5kbGVyKHVwZGF0ZWRUb2RvLCBpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblRvZG9MaXN0Vmlldy5jb3VudGVyID0gMCIsImltcG9ydCAnLi9zYXNzL21haW4uc2NzcydcbmltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tICcuL0FwcENvbnRyb2xsZXInXG5pbXBvcnQgeyBBcHBNb2RlbCB9IGZyb20gJy4vQXBwTW9kZWwnXG5pbXBvcnQgeyBBcHBWaWV3IH0gZnJvbSAnLi9BcHBWaWV3J1xuaW1wb3J0IHsgVG9kb0xpc3RDb250cm9sbGVyIH0gZnJvbSAnLi9Ub2RvTGlzdENvbnRyb2xsZXInXG5pbXBvcnQgeyBUb2RvTGlzdE1vZGVsIH0gZnJvbSAnLi9Ub2RvTGlzdE1vZGVsJ1xuaW1wb3J0IHsgVG9kb0xpc3RWaWV3IH0gZnJvbSAnLi9Ub2RvTGlzdFZpZXcnXG5pbXBvcnQgeyBQcm9qZWN0Q29udHJvbGxlciB9IGZyb20gJy4vUHJvamVjdENvbnRyb2xsZXInXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuL1Byb2plY3RNb2RlbCdcbmltcG9ydCB7IFByb2plY3RWaWV3IH0gZnJvbSAnLi9Qcm9qZWN0VmlldydcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8nXG5cbmNvbnN0IGFwcCA9IG5ldyBBcHBDb250cm9sbGVyKG5ldyBBcHBNb2RlbCgpLCBuZXcgQXBwVmlldygpKVxuXG4vLyBPbiB0aGUgZmlyc3QgdXNlLCBjcmVhdGVzIGEgZGVmYXVsdCBwcm9qZWN0IGFuZCBzYW1wbGVzXG5pZiAoIWxvY2FsU3RvcmFnZS5wcm9qZWN0cykge1xuICAvLyBDcmVhdGUgYSBkZWZhdWx0IHByb2plY3QuIEl0IGNhbm5vdCBiZSBkZWxldGVkIGFzIGl0IGFjdHMgYXMgYSBcIkhvbWUgUGFnZVwiLlxuICBhcHAuaGFuZGxlQWRkUHJvamVjdCgnRGVmYXVsdCcpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWRlbGV0ZScpLnJlbW92ZSgpXG5cbiAgLy8gQWRkIGEgdHV0b3JpYWwgYW5kIGEgZmV3IHNhbXBsZXNcbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLmhhbmRsZUVkaXRUb2RvTGlzdCgnMScsICdUdXRvcmlhbCcpXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5tb2RlbC50b2RvTGlzdHNbMF0uaGFuZGxlQWRkVG9kbyhuZXcgVG9kbyhcbiAgICAnV2VsY29tZScsXG4gIGBUcnkgYWRkaW5nIGEgbmV3IHRhc2sgYnkgY2xpY2tpbmcgb24gXCJBZGQgVGFza1wiIVxuICBZb3UgY2FuIGFsc28gYWRkIGFzIG1hbnkgc2VjdGlvbnMgdG8geW91ciBwcm9qZWN0IGFzIHlvdSdkIGxpa2UgYnkgY2xpY2tpbmcgb24gXCJBZGQgU2VjdGlvblwiLCBhbmQgY3JlYXRlIGFzIG1hbnkgcHJvamVjdHMgYXMgeW91IHdpc2guYCkpXG5cbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLmhhbmRsZUFkZFRvZG9MaXN0KG5ldyBUb2RvTGlzdENvbnRyb2xsZXIobmV3IFRvZG9MaXN0TW9kZWwoJ1NhbXBsZXMnLCBhcHAubW9kZWwucHJvamVjdHNbMF0ubW9kZWwuaWQpLCBuZXcgVG9kb0xpc3RWaWV3KCkpKVxuICBhcHAubW9kZWwucHJvamVjdHNbMF0ubW9kZWwudG9kb0xpc3RzWzFdLmhhbmRsZUFkZFRvZG8obmV3IFRvZG8oXG4gICAgJ0pvaG5cXCdzIEJpcnRoZGF5JyxcbiAgICAnTWVldCBhdCBKb2huXFwncyBob3VzZSBhdCAxOS4gRG9uXFwndCBmb3JnZXQgdG8gYnJpbmcgaGlzIGdpZnQuJyxcbiAgYCR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS0ke25ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDF9LSR7bmV3IERhdGUoKS5nZXREYXRlKCl9YCxcbiAgJ2hpZ2gnXG4gICkpXG5cbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLnRvZG9MaXN0c1sxXS5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKFxuICAgICdEaW5uZXIgd2l0aCBDaGxvZScsXG4gICAgJ1Jlc2VydmF0aW9uIGF0IFJob2RlcyBSZXN0YXVyYW50LCBhdCAyMC4nLFxuICBgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7bmV3IERhdGUoKS5nZXRNb250aCgpICsgMX0tJHtuZXcgRGF0ZSgpLmdldERhdGUoKSArIDJ9YCxcbiAgJ21lZCdcbiAgKSlcblxuICBhcHAubW9kZWwucHJvamVjdHNbMF0ubW9kZWwudG9kb0xpc3RzWzFdLmhhbmRsZUFkZFRvZG8obmV3IFRvZG8oXG4gICAgJ0RlbnRpc3QnLFxuICAgICdJdCB3b25cXCd0IGJlIHRoYXQgYmFkLiBQcm9iYWJseS4nLFxuICBgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7bmV3IERhdGUoKS5nZXRNb250aCgpICsgMn0tJHtuZXcgRGF0ZSgpLmdldERhdGUoKSArIDV9YCxcbiAgJ2xvdydcbiAgKSlcblxuICBhcHAubW9kZWwucHJvamVjdHNbMF0ubW9kZWwudG9kb0xpc3RzWzFdLmhhbmRsZUFkZFRvZG8obmV3IFRvZG8oXG4gICAgJ1N0YXJ0IHdvcmtpbmcgb3V0JyxcbiAgICAnSVxcJ2xsIHN0YXJ0Li4uIFRvbW9ycm93LiBPciBuZXh0IHllYXIuJ1xuICApKVxuXG4vKiBPbiBhbGwgdGhlIG90aGVyIHVzZXM6XG4gICAgLSBMb2FkIHRoZSBsb2NhbFN0b3JhZ2VcbiAgICAtIENyZWF0ZSBuYXYgYnV0dG9ucyBmb3IgZWFjaCBwcm9qZWN0XG4gICAgLSBSZW5kZXIgdGhlIGRlZmF1bHQgcHJvamVjdFxuKi9cbn0gZWxzZSB7XG4gIGxldCB0ZW1wU3RvcmFnZSA9IFsuLi5hcHAubW9kZWwucHJvamVjdHNdXG5cbiAgbG9jYWxTdG9yYWdlLmNsZWFyKClcblxuICBhcHAubW9kZWwucHJvamVjdHMgPSBbXVxuXG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiB0ZW1wU3RvcmFnZSkge1xuICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gbmV3IFByb2plY3RDb250cm9sbGVyKG5ldyBQcm9qZWN0TW9kZWwocHJvamVjdC5tb2RlbC5uYW1lKSwgbmV3IFByb2plY3RWaWV3KFByb2plY3RNb2RlbC5jb3VudGVyKSlcbiAgICBhcHAubW9kZWwuYWRkUHJvamVjdCh0b2RvUHJvamVjdClcbiAgICBhcHAuZGlzcGxheVByb2plY3QodG9kb1Byb2plY3QpXG4gICAgYXBwLnZpZXcucmVuZGVyQnRuKHRvZG9Qcm9qZWN0Lm1vZGVsLm5hbWUsIHRvZG9Qcm9qZWN0Lm1vZGVsLmlkKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByb2plY3Q9XCJwcm9qZWN0LSR7dG9kb1Byb2plY3QubW9kZWwuaWR9XCJdYCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhcHAuaGFuZGxlTmF2Q2xpY2sodG9kb1Byb2plY3QpKVxuXG4gICAgZm9yIChjb25zdCB0b2RvTGlzdCBvZiBwcm9qZWN0Lm1vZGVsLnRvZG9MaXN0cykge1xuICAgICAgY29uc3QgcHJvamVjdFRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCh0b2RvTGlzdC5tb2RlbC5uYW1lLCB0b2RvTGlzdC5tb2RlbC5wcm9qZWN0SWQpLCBuZXcgVG9kb0xpc3RWaWV3KCkpXG4gICAgICB0b2RvUHJvamVjdC5oYW5kbGVBZGRUb2RvTGlzdChwcm9qZWN0VG9kb0xpc3QpXG5cbiAgICAgIGZvciAoY29uc3QgdG9kbyBvZiB0b2RvTGlzdC5tb2RlbC50b2Rvcykge1xuICAgICAgICBwcm9qZWN0VG9kb0xpc3QuaGFuZGxlQWRkVG9kbyhuZXcgVG9kbyh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmRhdGUsIHRvZG8ucHJpb3JpdHkpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB0ZW1wU3RvcmFnZSA9IHt9XG4gIGFwcC5oYW5kbGVIb21lKClcbn1cbiIsImV4cG9ydCBjb25zdCBsb2NhbFN0b3JhZ2VNb2R1bGUgPSAoKCkgPT4ge1xuICBjb25zdCB1cGRhdGVQcm9qZWN0TGlzdCA9IChwcm9qZWN0cykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRvZG9MaXN0cyA9IChpZCwgdG9kb0xpc3RzQXJyKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAncHJvamVjdHMnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXG4gICAgICAgICAgLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgIHByb2plY3QubW9kZWwudG9kb0xpc3RzID0gdG9kb0xpc3RzQXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdFxuICAgICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVG9kb3MgPSAoaWQsIHByb2plY3RJZCwgdG9kb3NBcnIpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICdwcm9qZWN0cycsXG4gICAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSlcbiAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gcHJvamVjdElkKSB7XG4gICAgICAgICAgICAgIHByb2plY3QubW9kZWwudG9kb0xpc3RzLm1hcCgodG9kb0xpc3QpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodG9kb0xpc3QubW9kZWwuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICB0b2RvTGlzdC5tb2RlbC50b2RvcyA9IHRvZG9zQXJyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0b2RvTGlzdFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlUHJvamVjdExpc3QsXG4gICAgdXBkYXRlVG9kb0xpc3RzLFxuICAgIHVwZGF0ZVRvZG9zXG4gIH1cbn0pKClcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9