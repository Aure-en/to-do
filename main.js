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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9kb0xpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sb2NhbFN0b3JhZ2VNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiQXBwQ29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwibW9kZWwiLCJ2aWV3IiwiYmluZEFkZFByb2plY3QiLCJoYW5kbGVBZGRQcm9qZWN0IiwiYmluZCIsImJpbmREZWxldGVQcm9qZWN0IiwiaGFuZGxlRGVsZXRlUHJvamVjdCIsImJpbmRDaGFuZ2VOYW1lIiwiaGFuZGxlQ2hhbmdlTmFtZSIsImJpbmRIb21lIiwiaGFuZGxlSG9tZSIsImJpbmROYXZUb2dnbGUiLCJoYW5kbGVOYXZUb2dnbGUiLCJiaW5kVG9nZ2xlIiwiaGFuZGxlVG9nZ2xlIiwiYmluZERpc3BsYXlBbGwiLCJoYW5kbGVEaXNwbGF5QWxsIiwiYmluZFByaW9yaXR5IiwiaGFuZGxlUHJpb3JpdHkiLCJiaW5kRGF0ZVRvZGF5IiwiaGFuZGxlVG9kYXkiLCJiaW5kRGF0ZVVwY29taW5nIiwiaGFuZGxlVXBjb21pbmciLCJiaW5kRGF0ZUFueXRpbWUiLCJoYW5kbGVBbnl0aW1lIiwiYmluZFNvcnRUaXRsZSIsImhhbmRsZVNvcnRUaXRsZSIsImJpbmRTb3J0RGVzY3JpcHRpb24iLCJoYW5kbGVTb3J0RGVzY3JpcHRpb24iLCJiaW5kU29ydERhdGUiLCJoYW5kbGVTb3J0RGF0ZSIsImJpbmRTb3J0UHJpb3JpdHkiLCJoYW5kbGVTb3J0UHJpb3JpdHkiLCJuYW1lIiwicHJvamVjdCIsIlByb2plY3RDb250cm9sbGVyIiwiUHJvamVjdE1vZGVsIiwiUHJvamVjdFZpZXciLCJjb3VudGVyIiwiYWRkUHJvamVjdCIsImFkZFRvZG9MaXN0IiwiVG9kb0xpc3RDb250cm9sbGVyIiwiVG9kb0xpc3RNb2RlbCIsIlRvZG9MaXN0VmlldyIsImRpc3BsYXlQcm9qZWN0IiwicmVuZGVyQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU5hdkNsaWNrIiwicmVuZGVyTmFtZSIsInJlbmRlciIsInRvZG9MaXN0cyIsInJlbmRlckZvcm0iLCJmb3JtIiwiZ2V0Rm9ybSIsImJpbmRBZGQiLCJkZWxldGVQcm9qZWN0IiwicmVtb3ZlIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZWRpdFByb2plY3QiLCJ0ZXh0Q29udGVudCIsImV2ZW50IiwidGFyZ2V0IiwiZGF0YXNldCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsIm5hdiIsIm1haW4iLCJwcmlvcml0eSIsInRvZG9zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0b2RvIiwiYWRkIiwiX3NhbWVEYXkiLCJkYXRlMSIsImRhdGUyIiwidG9kb0RhdGUiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0b2RheSIsImRhdGUiLCJwcm9qZWN0SWQiLCJwcm9qZWN0cyIsImZpbHRlciIsInRvZG9MaXN0Iiwic29ydFRpdGxlIiwic29ydERlc2NyaXB0aW9uIiwic29ydERhdGUiLCJzb3J0UHJpb3JpdHkiLCJBcHBNb2RlbCIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsU3RvcmFnZU1vZHVsZSIsInVwZGF0ZVByb2plY3RMaXN0Iiwic2V0SXRlbSIsIkFwcFZpZXciLCJjb250YWluZXIiLCJob21lQnRuIiwicHJvamVjdElucHV0IiwicHJvamVjdFN1Ym1pdCIsImRpc3BsYXlBbGxCdG4iLCJwcmlvcml0eUJ0biIsImRhdGVUb2RheUJ0biIsImRhdGVVcGNvbWluZ0J0biIsImRhdGVBbnl0aW1lQnRuIiwibmF2QnRuIiwiX3RlbXBvcmFyeU5hbWUiLCJfY2hhbmdlTmFtZSIsIl9wcm9qZWN0TmFtZSIsInZhbHVlIiwiX3Jlc2V0SW5wdXQiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJidXR0b24iLCJpbm5lckhUTUwiLCJjbG9zZUJ0biIsImFwcGVuZCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3Nlc3QiLCJjb250YWlucyIsInNsaWNlIiwiYm9keSIsIm9uUHJvamVjdENoYW5nZSIsImJpbmRQcm9qZWN0Q2hhbmdlIiwiaGFuZGxlRWRpdFRvZG9MaXN0IiwiYmluZERlbGV0ZVNlY3Rpb24iLCJoYW5kbGVEZWxldGVUb2RvTGlzdCIsImhhbmRsZUFkZFRvZG9MaXN0IiwiZGVsZXRlVG9kb0xpc3QiLCJlZGl0VG9kb0xpc3QiLCJiaW5kQWRkU2VjdGlvbiIsIlNlY3Rpb25Gb3JtIiwiX2NvbW1pdCIsInVwZGF0ZVRvZG9MaXN0cyIsImNhbGxiYWNrIiwic2VjdGlvbnMiLCJuYW1lSW5wdXQiLCJzdWJtaXQiLCJfc2VjdGlvbk5hbWUiLCJmaXJzdENoaWxkIiwiY3JlYXRlU2VjdGlvbiIsImRlbGV0ZSIsImZvcm1Db250YWluZXIiLCJmb3JtQnRuIiwibGFiZWxOYW1lIiwiZmluaXNoIiwic3VibWl0QnRuIiwiY2FuY2VsQnRuIiwiVG9kbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlZGl0Rm9ybSIsIlRvZG9Gb3JtIiwidG9kb0VsZW0iLCJ0b2RvQ2hlY2siLCJjb21wb25lbnRzIiwiY29tcG9uZW50IiwidG9kb0NvbXBvbmVudCIsInRvZG9Qcmlvcml0eSIsInRvZG9FZGl0IiwiZ29hbCIsIl9yZW5kZXJGb3JtIiwibGFiZWxUaXRsZSIsImxhYmVsRGVzY3JpcHRpb24iLCJkZXRhaWxzIiwibGFiZWxEYXRlIiwicHJpb3JpdHlDb250YWluZXIiLCJwcmlvcml0aWVzIiwicHJpb3JpdGllc0xpc3QiLCJsYWJlbFByaW9yaXR5IiwiaW5wdXRQcmlvcml0eSIsInRvVXBwZXJDYXNlIiwicmVuZGVyQWRkIiwiX2luaXRQcmlvcml0eVRvZ2dsZSIsIl9pbml0UHJpb3JpdHlMYWJlbHMiLCJyZW5kZXJFZGl0IiwiYmVmb3JlIiwiYWZ0ZXIiLCJsYWJlbHMiLCJsYWJlbCIsImdldEF0dHJpYnV0ZSIsImNoZWNrZWQiLCJzdHlsZSIsImNvbG9yIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIl9pbml0UmVzZXRQcmlvcml0eSIsIm9uVG9kb0xpc3RDaGFuZ2UiLCJiaW5kVG9kb0xpc3RDaGFuZ2UiLCJiaW5kRGVsZXRlVG9kbyIsImhhbmRsZURlbGV0ZVRvZG8iLCJiaW5kT3BlbkVkaXQiLCJoYW5kbGVPcGVuRWRpdCIsImJpbmRFZGl0VG9kbyIsImhhbmRsZUVkaXRUb2RvIiwiaGFuZGxlQWRkVG9kbyIsImFkZFRvZG8iLCJ1cGRhdGVkVG9kbyIsImVkaXRUb2RvIiwiZGVsZXRlVG9kbyIsImdldEVkaXRGb3JtIiwic2V0RWRpdEZvcm0iLCJiaW5kQWRkVG9kbyIsInNvcnRTdGF0dXMiLCJ1cGRhdGVUb2RvcyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJfc29ydENoYW5nZSIsIl9nZXRQcmlvcml0eVZhbHVlIiwicHJpb3JpdHlWYWx1ZSIsInNlY3Rpb24iLCJwcmVwZW5kIiwibmFtZUNvbnRhaW5lciIsImRlbGV0ZUJ0biIsIl90b2RvVGl0bGUiLCJfdG9kb0Rlc2NyaXB0aW9uIiwiX3RvZG9EYXRlIiwiX3RvZG9Qcmlvcml0eSIsInRpdGxlRWRpdCIsImRlc2NyaXB0aW9uRWRpdCIsImRhdGVFZGl0IiwicHJpb3JpdHlFZGl0IiwiX2VkaXRUaXRsZSIsIl9lZGl0RGVzY3JpcHRpb24iLCJfZWRpdERhdGUiLCJfZWRpdFByaW9yaXR5IiwiX3Jlc2V0SW5wdXRzIiwicGFyc2VJbnQiLCJwYXJlbnRFbGVtZW50IiwiYXBwIiwidGVtcFN0b3JhZ2UiLCJjbGVhciIsInRvZG9Qcm9qZWN0IiwicHJvamVjdFRvZG9MaXN0IiwidG9kb0xpc3RzQXJyIiwidG9kb3NBcnIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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QVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxNQUFNLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVB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REYsQ0FGRjtBQWlCRCxHQWxCRDs7QUFvQkEsU0FBTztBQUNMaUUscUJBREs7QUFFTDBDLG1CQUZLO0FBR0xzRTtBQUhLLEdBQVA7QUFLRCxDQTdDaUMsR0FBM0IsQzs7Ozs7Ozs7Ozs7QUNBUCxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDRNQUFvRzs7QUFFdEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xcbn1cXG5cXG4ubm8tZGlzcGxheSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuW2NvbnRlbnRlZGl0YWJsZV06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNSk7XFxufVxcbltjb250ZW50ZWRpdGFibGVdOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuMzVyZW07XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjg1KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcblxcbi5idG4tLXBhZ2UtLWhlYWRlciB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmJ0bi0taWNvbiB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdCwgLmJ0bi0tY2FuY2VsIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxufVxcbi5idG4tLXN1Ym1pdCB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmJ0bi0tY2FuY2VsLCAuYnRuLS1hZGQge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNDUpO1xcbn1cXG4uYnRuLS1jYW5jZWw6aG92ZXIsIC5idG4tLWNhbmNlbDpob3ZlcjpiZWZvcmUsIC5idG4tLWFkZDpob3ZlciwgLmJ0bi0tYWRkOmhvdmVyOmJlZm9yZSB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43NSk7XFxufVxcbi5idG4tLXNlY3Rpb24ge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmJ0bi0tc2VjdGlvbjpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43NSk7XFxufVxcblxcbi5uYXYtLWhlYWRpbmcge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XFxufVxcblxcbltkYXRhLXRvZ2dsZT1hZGQtcHJvamVjdF0ge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcbltkYXRhLXRvZ2dsZT1hZGQtcHJvamVjdF06aG92ZXIge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5tYWluX19oZWFkZXIgYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4udG8tZG9fX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxufVxcblxcbltuYW1lPXRpdGxlXSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5bbmFtZT1kYXRlXSB7XFxuICBjb2xvcjogIzhlOGU4ZTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnRuLS1zdWJtaXQsXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIHBhZGRpbmc6IDAuMTVyZW0gMC41cmVtO1xcbn1cXG5cXG4uYnRuLS1zdWJtaXQge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG59XFxuLmJ0bi0tc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNyk7XFxufVxcblxcbi5idG4tLWNhbmNlbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4uYnRuLS1hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgadcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXI6YmVmb3JlLCAuYnRuLS1zZWN0aW9uOmhvdmVyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5idG4tLXNlY3Rpb246YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLmJ0bi0tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG5cXG4uYnRuLS1lZGl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYnRuLS1lZGl0OmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuXFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUsIC5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMCAxLjI1cmVtO1xcbn1cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5uYXYgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2X19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZCB7XFxuICBjb2xvcjogI2U3OWE2NztcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogIzVkOTc1YjtcXG59XFxuXFxuLnByaW9yaXR5LW5vbmUge1xcbiAgY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibJcXFwiO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibRcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Es1xcXCI7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNDA0MjllO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWI5OTYzO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOGQ1YTg5O1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29sb3I6ICM3YTdhN2E7XFxufVxcblxcbi5kYXRlLWxhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzk0MjAyMDtcXG59XFxuXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvjKhcXFwiO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYlcXFwiO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29sb3I6ICMzMDVjMzA7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYmI5NGY7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzY2OTc5MTtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWdhcDogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLnRvLWRvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIGF1dG8pL2F1dG8gMWZyIDJyZW07XFxuICAgIGdyaWQtZ2FwOiAwLjVyZW07XFxuICB9XFxuICAudG8tZG9fX2NoZWNrIHtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICB9XFxuICAudG8tZG9fX3ByaW9yaXR5IHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICB9XFxufVxcbi50by1kbzpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLnRvLWRvX19jaGVjayB7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxufVxcbi50by1kbzpob3ZlciAuYnRuLS1lZGl0IHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgbGluZWFyO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LFxcbi5lZGl0X19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxufVxcbi5hZGRfX2NvbnRlbnQtLXRvZG8sXFxuLmVkaXRfX2NvbnRlbnQtLXRvZG8ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG59XFxuLmFkZF9fY29udGVudC0tcHJvamVjdCxcXG4uZWRpdF9fY29udGVudC0tcHJvamVjdCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHBhZGRpbmc6IDAuMTVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcblxcbi5hZGRfX2RldGFpbHMsXFxuLmVkaXRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5hZGRfX3ByaW9yaXR5LFxcbi5lZGl0X19wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hZGRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dLFxcbi5lZGl0X19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTZweDtcXG4gIGxlZnQ6IDE0cHg7XFxufVxcbi5hZGQtcHJpb3JpdHkgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuICAuYWRkLXByaW9yaXR5IHtcXG4gICAgcmlnaHQ6IC0xMHB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbiAgLmFkZC1wcmlvcml0eTpiZWZvcmUge1xcbiAgICByaWdodDogMTVweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG4gIC5hZGQtcHJpb3JpdHk6YWZ0ZXIge1xcbiAgICByaWdodDogMTRweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG59XFxuXFxuLmFkZF9fZmluaXNoLFxcbi5lZGl0X19maW5pc2gge1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhZ2VfX2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiAjMmEyYjY4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwgbGk6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm5hdiB7XFxuICBiYWNrZ3JvdW5kOiAjZWVmMGYxO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4yNSk7XFxuICBwYWRkaW5nOiAycmVtIDAuMjVyZW0gMCAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG59XFxuLm5hdi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG4ubmF2X19jYXRlZ29yeTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNCk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSA+IC5idG4ge1xcbiAgZmxleDogMTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNyk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi5tYWluLS1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjVweCk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubWFpbi0taGlkZGVuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5cXG4uc2VjdGlvbl9fbmFtZV9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zZWN0aW9uX19uYW1lX19jb250YWluZXI6aG92ZXIgLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc2Fzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9iYXNlL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9iYXNlL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy91dGlscy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy91dGlscy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL19pY29ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9fdG9kby5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9fZHJvcGRvd24uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9fZm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9fbmF2LnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7OztDQUFB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QUNFLGFBQUE7RUFDQSw4QkFBQTtBSnlNRjs7QUl0TUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUp5TUY7O0FJdE1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBSnlNRjtBSXZNRTtFQUNFLDhCQUFBO0FKeU1KOztBTTFSRTtFQUlFLDJCSHVEWTtBSG1PaEI7QU12UkU7RURUQSxrQ0FBQTtFQUNBLGdCQUFBO0FMbVNGO0FNdFJFO0VBQ0UsWUFBQTtFQUNBLDZCSFJhO0FIZ1NqQjtBTXJSRTtFQUNFLFlIcUNPO0VFcERULGtDQUFBO0VBQ0EsZ0JBQUE7QUx1U0Y7QU1yUkU7RUFDRSxZQUFBO0VEekJGLGtDQUFBO0VBQ0EsZ0JBQUE7QUxpVEY7O0FNbFJFO0VBQ0UsY0h0QmE7QUgyU2pCOztBTXRSRTtFQUNFLGNIdEJhO0FIK1NqQjs7QU0xUkU7RUFDRSxjSHRCYTtBSG1UakI7O0FNOVJFO0VBQ0UsY0h0QmE7QUh1VGpCOztBS3ZUSTtFQUNFLFlGeUJPO0FIaVNiOztBSzNUSTtFQUNFLFlGeUJPO0FIcVNiOztBSy9USTtFQUNFLFlGeUJPO0FIeVNiOztBS25VSTtFQUNFLFlGeUJPO0FINlNiOztBSy9USTtFQUNFLGNGRk87QUhvVWI7O0FLblVJO0VBQ0UsY0ZGTztBSHdVYjs7QUt2VUk7RUFDRSxjRkZPO0FINFViOztBSzNVSTtFQUNFLGNGRk87QUhnVmI7O0FLL1VJO0VBQ0UsY0ZGTztBSG9WYjs7QU01VEE7RUFDRSxZQUFBO0VBQ0EsY0h4Q2M7RUVDZCxrQ0FBQTtFQUNBLGdCQUFBO0VDd0NBLHFCQUFBO0FOZ1VGOztBS25XSTtFQUNFLFlGc0NPO0FIZ1ViOztBS3ZXSTtFQUNFLFlGc0NPO0FIb1ViOztBSzNXSTtFQUNFLFlGc0NPO0FId1ViOztBSy9XSTtFQUNFLFlGc0NPO0FINFViOztBSzNXSTtFQUNFLGNGTU87QUh3V2I7O0FLL1dJO0VBQ0UsY0ZNTztBSDRXYjs7QUtuWEk7RUFDRSxjRk1PO0FIZ1hiOztBS3ZYSTtFQUNFLGNGTU87QUhvWGI7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QUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBWjZtQkY7O0FZMW1CQTtFQUNFLDZCQUFBO0FaNm1CRjtBWTNtQkU7RUFIRjtJQUlJLHdCQUFBO0VaOG1CRjtBQUNGOztBWTNtQkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QVo4bUJGO0FZNW1CRTtFQUNFLGdCQUFBO0FaOG1CSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50X193cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XFxufVxcblxcbi5uby1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYm9keSxcXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiLCBBcmlhbDtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS45O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5bY29udGVudGVkaXRhYmxlXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA1KTtcXG59XFxuW2NvbnRlbnRlZGl0YWJsZV06Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuODUpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxuXFxuLmJ0bi0tcGFnZS0taGVhZGVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnRuLS1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmJ0bi0tc3VibWl0LCAuYnRuLS1jYW5jZWwge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXG59XFxuLmJ0bi0tc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnRuLS1jYW5jZWwsIC5idG4tLWFkZCB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC40NSk7XFxufVxcbi5idG4tLWNhbmNlbDpob3ZlciwgLmJ0bi0tY2FuY2VsOmhvdmVyOmJlZm9yZSwgLmJ0bi0tYWRkOmhvdmVyLCAuYnRuLS1hZGQ6aG92ZXI6YmVmb3JlIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuXFxuLm5hdi0taGVhZGluZyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG59XFxuXFxuW2RhdGEtdG9nZ2xlPWFkZC1wcm9qZWN0XSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuW2RhdGEtdG9nZ2xlPWFkZC1wcm9qZWN0XTpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi50by1kb19fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiLCBBcmlhbDtcXG59XFxuXFxuW25hbWU9dGl0bGVdIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbltuYW1lPWRhdGVdIHtcXG4gIGNvbG9yOiAjOGU4ZThlO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idG4tLXN1Ym1pdCxcXG4uYnRuLS1jYW5jZWwge1xcbiAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07XFxufVxcblxcbi5idG4tLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC43KTtcXG59XFxuXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5idG4tLWFkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcbi5idG4tLXNlY3Rpb246YmVmb3JlLCAuYnRuLS1zZWN0aW9uOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4yNSk7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuLmJ0bi0tc2VjdGlvbjpob3ZlcjpiZWZvcmUsIC5idG4tLXNlY3Rpb246aG92ZXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLmJ0bi0tc2VjdGlvbjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmFmdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4uYnRuLS1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcblxcbi5idG4tLWVkaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC01cHg7XFxuICB0b3A6IDEwcHg7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5idG4tLWVkaXQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSwgLm5hdl9fZmlsdGVycyBsaTpiZWZvcmUsIC5uYXZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICBtYXJnaW46IDAgMC4yNXJlbSAwIDEuMjVyZW07XFxufVxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKaq1xcXCI7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLm5hdiAucHJvamVjdF9saXN0X19hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgadcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK5cXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGNvbG9yOiAjYTE0MjQyO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkIHtcXG4gIGNvbG9yOiAjZTc5YTY3O1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gIGNvbG9yOiAjNWQ5NzViO1xcbn1cXG5cXG4ucHJpb3JpdHktbm9uZSB7XFxuICBjb2xvcjogI2M3YzdjNztcXG59XFxuXFxuLmRhdGUtYWxsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5kYXRlLXRvZGF5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JslxcXCI7XFxufVxcblxcbi5kYXRlLXVwY29taW5nOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JtFxcXCI7XFxufVxcblxcbi5kYXRlLWFueXRpbWU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SzXFxcIjtcXG59XFxuXFxuLmRhdGUtYWxsOjpiZWZvcmUge1xcbiAgY29sb3I6ICM0MDQyOWU7XFxufVxcblxcbi5kYXRlLXRvZGF5OjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYjk5NjM7XFxufVxcblxcbi5kYXRlLXVwY29taW5nOjpiZWZvcmUge1xcbiAgY29sb3I6ICM4ZDVhODk7XFxufVxcblxcbi5kYXRlLWFueXRpbWU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzdhN2E3YTtcXG59XFxuXFxuLmRhdGUtbGF0ZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOTQyMDIwO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OXXFxcIjtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+MqFxcXCI7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JiVxcXCI7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GzXFxcIjtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG59XFxuXFxuLnNvcnQtdGl0bGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzMwNWMzMDtcXG59XFxuXFxuLnNvcnQtZGVzY3JpcHRpb246OmJlZm9yZSB7XFxuICBjb2xvcjogI2ViYjk0ZjtcXG59XFxuXFxuLnNvcnQtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNjY5NzkxO1xcbn1cXG5cXG4uc29ydC1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjYTE0MjQyO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OXXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udG8tZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA2LjVyZW0gMWZyIDYuNXJlbSAycmVtO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtZ2FwOiAxLjVyZW07XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMC43NXJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAudG8tZG8ge1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMywgYXV0bykvYXV0byAxZnIgMnJlbTtcXG4gICAgZ3JpZC1nYXA6IDAuNXJlbTtcXG4gIH1cXG4gIC50by1kb19fY2hlY2sge1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gIH1cXG4gIC50by1kb19fcHJpb3JpdHkge1xcbiAgICBncmlkLXJvdzogMTtcXG4gIH1cXG59XFxuLnRvLWRvOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4udG8tZG9fX2NoZWNrIHtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG59XFxuLnRvLWRvOmhvdmVyIC5idG4tLWVkaXQge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBsaW5lYXI7XFxufVxcblxcbi5hZGRfX2NvbnRlbnQsXFxuLmVkaXRfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG59XFxuLmFkZF9fY29udGVudC0tdG9kbyxcXG4uZWRpdF9fY29udGVudC0tdG9kbyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbn1cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0LFxcbi5lZGl0X19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgcGFkZGluZzogMC4xNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbltuYW1lPXRpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyxcXG4uZWRpdF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHksXFxuLmVkaXRfX3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFkZF9fcHJpb3JpdHkgaW5wdXRbdHlwZT1yYWRpb10sXFxuLmVkaXRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAxLjY1cmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDtcXG4gIGxlZnQ6IDE1cHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNnB4O1xcbiAgbGVmdDogMTRweDtcXG59XFxuLmFkZC1wcmlvcml0eSBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4gIC5hZGQtcHJpb3JpdHkge1xcbiAgICByaWdodDogLTEwcHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuICB9XFxuICAuYWRkLXByaW9yaXR5OmJlZm9yZSB7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbiAgLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICAgIHJpZ2h0OiAxNHB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbn1cXG5cXG4uYWRkX19maW5pc2gsXFxuLmVkaXRfX2ZpbmlzaCB7XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxubGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGFnZV9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6ICMyYTJiNjg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCBsaTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGJhY2tncm91bmQ6ICNlZWYwZjE7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIHBhZGRpbmc6IDJyZW0gMC4yNXJlbSAwIDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcbn1cXG4ubmF2LS1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5Omxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA0KTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIgLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpID4gLmJ0biB7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA3KTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLm1haW4tLWhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNXB4KTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5tYWluLS1oaWRkZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcblxcbi5zZWN0aW9uX19uYW1lX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNlY3Rpb25fX25hbWVfX2NvbnRhaW5lcjpob3ZlciAuYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XCIsXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFxuXFx0Jjpmb2N1cyB7XFxuXFx0XFx0b3V0bGluZTogbm9uZTtcXG5cXHR9XFxufVxcblxcbioge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxuXFx0bWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRfX3dyYXBwZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDUwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0bWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS4yNWVtKTtcXG59XFxuXFxuLm5vLWRpc3BsYXkge1xcblxcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XCIsXCJib2R5LFxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjk7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5bY29udGVudGVkaXRhYmxlXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjA1KTtcXG4gIH1cXG5cXG4gICY6Zm9jdXMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC44NSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yNXJlbSAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcblxcbi5idG4ge1xcbiAgJi0tcGFnZS0taGVhZGVyIHtcXG4gICAgY29sb3I6ICRjb2xvci1oZWFkZXI7XFxuICB9XFxuXFxuICAmLS1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcblxcbiAgJi0tc3VibWl0LFxcbiAgJi0tY2FuY2VsIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAuODVlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uNXB4O1xcbiAgfVxcblxcbiAgJi0tc3VibWl0IHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuXFxuICAmLS1jYW5jZWwsXFxuICAmLS1hZGQge1xcbiAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjQ1KTtcXG5cXG4gICAgJjpob3ZlcixcXG4gICAgJjpob3ZlcjpiZWZvcmUge1xcbiAgICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNzUpO1xcbiAgICB9XFxuICB9XFxuXFxuICAmLS1zZWN0aW9uIHtcXG4gICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNzUpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vIE5hdlxcblxcbi5uYXYge1xcbiAgJi0taGVhZGluZyB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XFxuICB9XFxufVxcblxcbltkYXRhLXRvZ2dsZT1cXFwiYWRkLXByb2plY3RcXFwiXSB7XFxuICBjb2xvcjogcmdiYSgjMDAwLCAuNzUpO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgfVxcblxcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vLyBGb3JtXFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxufVxcblxcbltuYW1lPVxcXCJ0aXRsZVxcXCJdIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbltuYW1lPVxcXCJkYXRlXFxcIl0ge1xcbiAgY29sb3I6ICRjb2xvci1mb3JtO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cIixcIi8vIEZvbnRzXFxuJGZvbnQtcHJpbWFyeTogJ05hbnVtIEdvdGhpYycsIEFyaWFsO1xcblxcblxcbi8vIENvbG9yc1xcbiRjb2xvci1wcmltYXJ5OiByZ2IoNDIsIDQzLCAxMDQpO1xcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigyMzgsIDI0MCwgMjQxKTtcXG5cXG4kY29sb3ItaGVhZGVyOiAjZmZmO1xcbiRjb2xvci1wcm9qZWN0czogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiRjb2xvci1mb3JtOiByZ2IoMTQyLCAxNDIsIDE0Mik7XFxuXFxuJGNvbG9yLXByaW9yaXR5OiAoXFxuICBoaWdoOiByZ2IoMTYxLCA2NiwgNjYpLFxcbiAgbWVkOiByZ2IoMjMxLCAxNTQsIDEwMyksXFxuICBsb3c6IHJnYig5MywgMTUxLCA5MSksXFxuICBub25lOiByZ2IoMTk5LCAxOTksIDE5OSlcXG4pO1xcblxcbiRjb2xvci1kYXRlOiAoXFxuICBhbGw6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDE1JSksXFxuICB0b2RheTogcmdiKDIzNSwgMTUzLCA5OSksXFxuICB1cGNvbWluZzogcmdiKDE0MSwgOTAsIDEzNyksXFxuICBhbnl0aW1lOiByZ2IoMTIyLCAxMjIsIDEyMiksXFxuICBsYXRlOiByZ2IoMTQ4LCAzMiwgMzIpXFxuKTtcXG5cXG4kY29sb3Itc29ydDogKFxcbiAgdGl0bGU6IHJnYig0OCwgOTIsIDQ4KSxcXG4gIGRlc2NyaXB0aW9uOiByZ2IoMjM1LCAxODUsIDc5KSxcXG4gIGRhdGU6IHJnYigxMDIsIDE1MSwgMTQ1KSxcXG4gIHByaW9yaXR5OiBtYXAtZ2V0KCRjb2xvci1wcmlvcml0eSwgaGlnaClcXG4pO1xcblxcbi8vIEljb25zXFxuXFxuJGljb24tcHJpb3JpdHk6IFxcXCJcXFxcZjAyZVxcXCI7XFxuXFxuJGljb25zLWRhdGU6IChcXG4gIGFsbDogXFxcIlxcXFxmMDczXFxcIixcXG4gIHRvZGF5OiBcXFwiXFxcXGYyNzJcXFwiLFxcbiAgdXBjb21pbmc6IFxcXCJcXFxcZjI3NFxcXCIsXFxuICBhbnl0aW1lOiBcXFwiXFxcXGYxMzNcXFwiLFxcbik7XFxuXFxuJGljb25zLWNhcmV0OiAoXFxuICB1cDogXFxcIlxcXFxmMGQ4XFxcIixcXG4gIGRvd246IFxcXCJcXFxcZjBkN1xcXCIsXFxuICByaWdodDogXFxcIlxcXFxmMGRhXFxcIlxcbik7XFxuXFxuJGljb25zLXNvcnQ6IChcXG4gIHRpdGxlOiBcXFwiXFxcXGYzMjhcXFwiLFxcbiAgZGVzY3JpcHRpb246IFxcXCJcXFxcZjI0OVxcXCIsXFxuICBkYXRlOiBcXFwiXFxcXGYwNzNcXFwiLFxcbiAgcHJpb3JpdHk6ICRpY29uLXByaW9yaXR5LFxcbik7XFxuXFxuJGljb24tYWRkOiBcXFwiXFxcXGYwNjdcXFwiO1xcbiRpY29uLWVkaXQ6IFxcXCJcXFxcZjA0NFxcXCI7XFxuXFxuLy8gT3RoZXJzXFxuJG1hcmdpbi1pbmRlbnQ6IDAgLjI1cmVtIDAgMS4yNXJlbTtcIixcImJ1dHRvbiB7XFxuXFx0Ym9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIFxcbiAgJjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxufVxcblxcbi5idG4tLXN1Ym1pdCxcXG4uYnRuLS1jYW5jZWwge1xcbiAgcGFkZGluZzogLjE1cmVtIC41cmVtO1xcbn1cXG4gIFxcbi5idG4tLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNyk7XFxuICB9XFxufVxcblxcbi5idG4tLWNhbmNlbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKCNmZmYsIC41KTtcXG59XFxuXFxuLmJ0bi0tYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiAkaWNvbi1hZGQ7XFxuICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG4gIEBpbmNsdWRlIGZvbnQtYXdlc29tZS03MDAoKTtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuXFxuICAmOmJlZm9yZSxcXG4gICY6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjI1KTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIH1cXG5cXG4gICY6aG92ZXI6YmVmb3JlLFxcbiAgJjpob3ZlcjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIH1cXG5cXG4gICY6YmVmb3JlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgfVxcblxcbiAgJjphZnRlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgfVxcbn1cXG5cXG4uYnRuLS1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXG59XFxuXFxuLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbn1cXG5cXG4uYnRuLS1lZGl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43NSk7XFxuICB9XFxuXFxufVwiLFwiQG1peGluIGZvbnQtYXdlc29tZS00MDAoKSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuQG1peGluIGZvbnQtYXdlc29tZS03MDAoKSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuQG1peGluIGljb24tY29udGVudCgkdGFyZ2V0LCAkbWFwKSB7XFxuICBAZWFjaCAka2V5LCAkaWNvbiBpbiAkbWFwIHtcXG4gICAgLiN7JHRhcmdldH0tI3ska2V5fTo6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiAkaWNvbjtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWl4aW4gaWNvbi1jb2xvcigkdGFyZ2V0LCAkbWFwKSB7XFxuICBAZWFjaCAka2V5LCAkY29sb3IgaW4gJG1hcCB7XFxuICAgIC4jeyR0YXJnZXR9LSN7JGtleX06OmJlZm9yZSB7XFxuICAgICAgY29sb3I6ICRjb2xvcjtcXG4gICAgfVxcbiAgfVxcbn1cIixcIi8vIE5BVi1JQ09OU1xcblxcbi5uYXYge1xcbiAgJl9fdG8tZG8gbGk6YmVmb3JlLFxcbiAgJl9fcHJvamVjdHMgbGk6YmVmb3JlLFxcbiAgJl9fZmlsdGVycyBsaTpiZWZvcmUsXFxuICAmX19zb3J0cyBsaTpiZWZvcmUge1xcbiAgICBtYXJnaW46ICRtYXJnaW4taW5kZW50O1xcbiAgfVxcblxcbiAgJl9fdG8tZG8gbGk6YmVmb3JlLFxcbiAgJl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTQwMCgpO1xcbiAgfVxcblxcbiAgJl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIuKaq1xcXCI7XFxuICAgIGNvbG9yOiAkY29sb3ItcHJvamVjdHM7XFxuICB9XFxuXFxuICAucHJvamVjdF9saXN0X19hZGQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogJGljb24tYWRkO1xcbiAgICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxuICB9XFxuXFxuICAmX19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZVxcXCI7XFxuICAgIEBpbmNsdWRlIGZvbnQtYXdlc29tZS00MDAoKTtcXG4gIH1cXG59XFxuXFxuLy8gQ29sb3IgUHJpb3JpdHkgSWNvbnNcXG5AZWFjaCAkbGV2ZWwsICRjb2xvciBpbiAkY29sb3ItcHJpb3JpdHkge1xcbiAgLnByaW9yaXR5LSN7JGxldmVsfSB7XFxuICAgIGNvbG9yOiAkY29sb3I7XFxuICB9XFxufVxcblxcbi8vIERhdGUgSWNvbnNcXG5AaW5jbHVkZSBpY29uLWNvbnRlbnQoJ2RhdGUnLCAkaWNvbnMtZGF0ZSk7XFxuQGluY2x1ZGUgaWNvbi1jb2xvcignZGF0ZScsICRjb2xvci1kYXRlKTtcXG5cXG4vLyBDYXRlZ29yeSBJY29uc1xcbi5uYXYtLWhlYWRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG1hcC1nZXQoJGljb25zLWNhcmV0LCBkb3duKTtcXG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gIEBpbmNsdWRlIGZvbnQtYXdlc29tZS03MDAoKTtcXG4gIG1hcmdpbi1yaWdodDogLjc1cmVtO1xcbn1cXG5cXG4vLyBTb3J0IEljb25zXFxuQGluY2x1ZGUgaWNvbi1jb250ZW50KCdzb3J0JywgJGljb25zLXNvcnQpO1xcbkBpbmNsdWRlIGljb24tY29sb3IoJ3NvcnQnLCAkY29sb3Itc29ydCk7XFxuXFxuLy8gTUFJTiBJQ09OU1xcblxcbi5tYWluX19oZWFkZXIgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG1hcC1nZXQoJGljb25zLWNhcmV0LCBkb3duKTtcXG4gIEBpbmNsdWRlIGZvbnQtYXdlc29tZS03MDAoKTtcXG59XCIsXCIudG8tZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA2LjVyZW0gMWZyIDYuNXJlbSAycmVtO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtZ2FwOiAxLjVyZW07XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogLjc1cmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjEpO1xcblxcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIGF1dG8pIC8gYXV0byAxZnIgMnJlbTtcXG4gICAgZ3JpZC1nYXA6IC41cmVtO1xcblxcbiAgICAmX19jaGVjayB7XFxuICAgICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gICAgfVxcblxcbiAgICAmX19wcmlvcml0eSB7XFxuICAgICAgZ3JpZC1yb3c6IDE7XFxuICAgIH1cXG4gIH1cXG5cXG4gICY6bGFzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgJl9fY2hlY2sge1xcbiAgICBtYXJnaW4tdG9wOiA3cHg7XFxuICB9XFxuXFxuICAmOmhvdmVyIC5idG4tLWVkaXQge1xcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgfVxcblxcbn1cIixcIi5kcm9wZG93biB7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjM1cyBsaW5lYXI7XFxufVwiLFwiLmFkZF9fY29udGVudCxcXG4uZWRpdF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuXFxuICAmLS10b2RvIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogLjI1cmVtIDFyZW07XFxuICB9XFxuXFxuICAmLS1wcm9qZWN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgcGFkZGluZzogLjE1cmVtO1xcbiAgfVxcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbltuYW1lPVxcXCJ0aXRsZVxcXCJdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMSk7XFxufVxcblxcbi5hZGRfX2RldGFpbHMsXFxuLmVkaXRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5hZGRfX3ByaW9yaXR5LFxcbi5lZGl0X19wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAxLjY1cmVtO1xcbiAgei1pbmRleDogMTtcXG5cXG4gICY6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmZjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC01cHg7XFxuICAgIGxlZnQ6IDE1cHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICAmOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC02cHg7XFxuICAgIGxlZnQ6IDE0cHg7XFxuICB9XFxuXFxuICBsYWJlbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIC41cmVtO1xcbiAgfVxcblxcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuICAgIHJpZ2h0OiAtMTBweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG5cXG4gICAgJjpiZWZvcmUge1xcbiAgICAgIHJpZ2h0OiAxNXB4O1xcbiAgICAgIGxlZnQ6IGluaXRpYWw7XFxuICAgIH1cXG4gIFxcbiAgICAmOmFmdGVyIHtcXG4gICAgICByaWdodDogMTRweDtcXG4gICAgICBsZWZ0OiBpbml0aWFsO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5hZGRfX2ZpbmlzaCxcXG4uZWRpdF9fZmluaXNoIHtcXG4gIG1hcmdpbjogLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKCNmZmYsIC41KTtcXG59XFxuXFxubGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIixcIi5wYWdlX19oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogJGNvbG9yLXByaW1hcnk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgei1pbmRleDogMTtcXG4gIFxcblxcbiAgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcblxcbiAgICAmIGxpOmxhc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICB9XFxuICB9XFxufVwiLFwiLm5hdiB7XFxuICBcXG4gIGJhY2tncm91bmQ6ICRjb2xvci1zZWNvbmRhcnk7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMjUpO1xcbiAgcGFkZGluZzogMnJlbSAuMjVyZW0gMCAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xcblxcbiAgJi0taGlkZGVuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG5cXG4gICZfX2NhdGVnb3J5IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjEpO1xcblxcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBsaSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4wNCk7XFxuICAgICAgfVxcblxcbiAgICAgICY6aG92ZXIgLmJ0bi0tZGVsZXRlIHtcXG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XFxuICAgICAgfVxcblxcbiAgICAgID4gLmJ0biB7XFxuICAgICAgICAvLyBNYWtlcyB0aGUgd2hvbGUgbGluZSBjbGlja2FibGUgaW5zdGVhZCBvZiBqdXN0IHRoZSB0ZXh0LlxcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgJi0taGVhZGluZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4wNyk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cIixcIm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLm1haW4tLWhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNXB4KTtcXG5cXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxcbiAgfVxcbn1cXG5cXG4uc2VjdGlvbl9fbmFtZV9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAmOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IGluaXRpYWw7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBQcm9qZWN0Q29udHJvbGxlciB9IGZyb20gJy4vUHJvamVjdENvbnRyb2xsZXInXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuL1Byb2plY3RNb2RlbCdcbmltcG9ydCB7IFByb2plY3RWaWV3IH0gZnJvbSAnLi9Qcm9qZWN0VmlldydcbmltcG9ydCB7IFRvZG9MaXN0Q29udHJvbGxlciB9IGZyb20gJy4vVG9kb0xpc3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgVG9kb0xpc3RNb2RlbCB9IGZyb20gJy4vVG9kb0xpc3RNb2RlbCdcbmltcG9ydCB7IFRvZG9MaXN0VmlldyB9IGZyb20gJy4vVG9kb0xpc3RWaWV3J1xuXG5leHBvcnQgY2xhc3MgQXBwQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgIHRoaXMudmlldyA9IHZpZXdcblxuICAgIHRoaXMudmlldy5iaW5kQWRkUHJvamVjdCh0aGlzLmhhbmRsZUFkZFByb2plY3QuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERlbGV0ZVByb2plY3QodGhpcy5oYW5kbGVEZWxldGVQcm9qZWN0LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRDaGFuZ2VOYW1lKHRoaXMuaGFuZGxlQ2hhbmdlTmFtZS5iaW5kKHRoaXMpKVxuXG4gICAgdGhpcy52aWV3LmJpbmRIb21lKHRoaXMuaGFuZGxlSG9tZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kTmF2VG9nZ2xlKHRoaXMuaGFuZGxlTmF2VG9nZ2xlLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRUb2dnbGUodGhpcy5oYW5kbGVUb2dnbGUuYmluZCh0aGlzKSlcblxuICAgIHRoaXMudmlldy5iaW5kRGlzcGxheUFsbCh0aGlzLmhhbmRsZURpc3BsYXlBbGwuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZFByaW9yaXR5KHRoaXMuaGFuZGxlUHJpb3JpdHkuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERhdGVUb2RheSh0aGlzLmhhbmRsZVRvZGF5LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREYXRlVXBjb21pbmcodGhpcy5oYW5kbGVVcGNvbWluZy5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGF0ZUFueXRpbWUodGhpcy5oYW5kbGVBbnl0aW1lLmJpbmQodGhpcykpXG5cbiAgICB0aGlzLnZpZXcuYmluZFNvcnRUaXRsZSh0aGlzLmhhbmRsZVNvcnRUaXRsZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kU29ydERlc2NyaXB0aW9uKHRoaXMuaGFuZGxlU29ydERlc2NyaXB0aW9uLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRTb3J0RGF0ZSh0aGlzLmhhbmRsZVNvcnREYXRlLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRTb3J0UHJpb3JpdHkodGhpcy5oYW5kbGVTb3J0UHJpb3JpdHkuYmluZCh0aGlzKSlcbiAgfVxuXG4gIC8vIERpc3BsYXkgdGhlIG5ldyBwcm9qZWN0IGFuZCBjcmVhdGUgYSBidXR0b24gbGlua2VkIHRvIHRoZSBwcm9qZWN0IGluIHRoZSBuYXZpZ2F0aW9uLlxuICBoYW5kbGVBZGRQcm9qZWN0IChuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q29udHJvbGxlcihuZXcgUHJvamVjdE1vZGVsKG5hbWUpLCBuZXcgUHJvamVjdFZpZXcoUHJvamVjdE1vZGVsLmNvdW50ZXIpKVxuICAgIHRoaXMubW9kZWwuYWRkUHJvamVjdChwcm9qZWN0KVxuXG4gICAgcHJvamVjdC5tb2RlbC5hZGRUb2RvTGlzdChuZXcgVG9kb0xpc3RDb250cm9sbGVyKG5ldyBUb2RvTGlzdE1vZGVsKCdEZWZhdWx0JywgcHJvamVjdC5tb2RlbC5pZCksIG5ldyBUb2RvTGlzdFZpZXcoKSkpXG4gICAgdGhpcy5kaXNwbGF5UHJvamVjdChwcm9qZWN0KVxuICAgIHRoaXMudmlldy5yZW5kZXJCdG4obmFtZSwgcHJvamVjdC5tb2RlbC5pZClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0PVwicHJvamVjdC0ke3Byb2plY3QubW9kZWwuaWR9XCJdYCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZU5hdkNsaWNrKHByb2plY3QpKVxuICB9XG5cbiAgLy8gTGlua3MgdGhlIG5ld2x5IGNyZWF0ZWQgbmF2aWdhdGlvbiBidXR0b24gdG8gaXRzIHByb2plY3RcbiAgaGFuZGxlTmF2Q2xpY2sgKHByb2plY3QpIHtcbiAgICB0aGlzLmRpc3BsYXlQcm9qZWN0KHByb2plY3QpXG4gIH1cblxuICBkaXNwbGF5UHJvamVjdCAocHJvamVjdCkge1xuICAgIHByb2plY3Qudmlldy5yZW5kZXJOYW1lKHByb2plY3QubW9kZWwubmFtZSwgcHJvamVjdC5tb2RlbC5pZClcbiAgICBwcm9qZWN0LnZpZXcucmVuZGVyKHByb2plY3QubW9kZWwudG9kb0xpc3RzKVxuICAgIHByb2plY3Qudmlldy5yZW5kZXJGb3JtKHByb2plY3QubW9kZWwuZm9ybSlcbiAgICBwcm9qZWN0LnZpZXcuZ2V0Rm9ybSgpXG4gICAgcHJvamVjdC5iaW5kQWRkKClcbiAgfVxuXG4gIC8vIFdoZW4gYSBwcm9qZWN0IGlzIGRlbGV0ZWQsIGl0IGlzIHJlbW92ZWQgZnJvbSB0aGUgbW9kZWwgYW5kIGZyb20gdGhlIG5hdmlnYXRpb24uXG4gIC8vIFRoZSBIb21lcGFnZSBpcyBkaXNwbGF5ZWQgaW5zdGVhZC5cbiAgaGFuZGxlRGVsZXRlUHJvamVjdCAoaWQpIHtcbiAgICB0aGlzLm1vZGVsLmRlbGV0ZVByb2plY3QoaWQpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvamVjdD1cInByb2plY3QtJHtpZH1cIl1gKS5yZW1vdmUoKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3Q9XCJwcm9qZWN0LTFcIl0nKS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSlcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZU5hbWUgKGlkLCBuYW1lKSB7XG4gICAgdGhpcy5tb2RlbC5lZGl0UHJvamVjdChpZCwgbmFtZSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1maWx0ZXI9XCJwcm9qZWN0LSR7aWR9XCJdYCkudGV4dENvbnRlbnQgPSBuYW1lXG4gIH1cblxuICAvLyBFbmFibGUgYWxsIHRvZ2dsZSBidXR0b25zXG4gIGhhbmRsZVRvZ2dsZSAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuZGF0YXNldC50b2dnbGV9YCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgfVxuXG4gIC8vIE1vZGlmeSBzcGFjZSBvY2N1cGllZCBieSBjb250ZW50IHdoZW4gdGhlIG5hdmlnYXRpb24gaXMgaGlkZGVuIC8gZGlzcGxheWVkLlxuICBoYW5kbGVOYXZUb2dnbGUgKCkge1xuICAgIHRoaXMudmlldy5uYXYuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LS1oaWRkZW4nKVxuICAgIHRoaXMudmlldy5tYWluLmNsYXNzTGlzdC50b2dnbGUoJ21haW4tLWhpZGRlbicpXG4gIH1cblxuICAvLyBFbmFibGUgcHJpb3JpdHkgZmlsdGVyc1xuICBoYW5kbGVQcmlvcml0eSAocHJpb3JpdHkpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0b2RvLmRhdGFzZXQucHJpb3JpdHkgIT09IHByaW9yaXR5KSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ25vLWRpc3BsYXknKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjb21wYXJlcyAyIGRheXMgKHVzZWQgZm9yIGRhdGUgZmlsdGVycylcbiAgX3NhbWVEYXkgKGRhdGUxLCBkYXRlMikge1xuICAgIGNvbnN0IHRvZG9EYXRlID0gbmV3IERhdGUoZGF0ZTEpXG4gICAgaWYgKHRvZG9EYXRlLmdldERhdGUoKSA9PT0gZGF0ZTIuZ2V0RGF0ZSgpICYmXG4gICAgdG9kb0RhdGUuZ2V0TW9udGgoKSA9PT0gZGF0ZTIuZ2V0TW9udGgoKSAmJlxuICAgIHRvZG9EYXRlLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUyLmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gRGF0ZXMgZmlsdGVyc1xuICBoYW5kbGVUb2RheSAoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8nKVxuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICBpZiAodGhpcy5fc2FtZURheSh0b2RvLmRhdGFzZXQuZGF0ZSwgdG9kYXkpKSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ25vLWRpc3BsYXknKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVVcGNvbWluZyAoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8nKVxuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3NhbWVEYXkodG9kby5kYXRhc2V0LmRhdGUsIHRvZGF5KSAmJiBuZXcgRGF0ZSh0b2RvLmRhdGFzZXQuZGF0ZSkgPiB0b2RheSkge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ25vLWRpc3BsYXknKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQW55dGltZSAoKSB7XG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8nKVxuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICBpZiAodG9kby5kYXRhc2V0LmRhdGUgIT09ICcnKSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ25vLWRpc3BsYXknKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBEaXNhYmxlIGZpbHRlcnNcbiAgaGFuZGxlRGlzcGxheUFsbCAoKSB7XG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8nKVxuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ25vLWRpc3BsYXknKSlcbiAgfVxuXG4gIC8vIFNvcnRcbiAgaGFuZGxlU29ydFRpdGxlIChwcm9qZWN0SWQpIHtcbiAgICB0aGlzLm1vZGVsLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gK3Byb2plY3RJZClbMF1cbiAgICAgIC5tb2RlbC50b2RvTGlzdHMuZm9yRWFjaCgodG9kb0xpc3QpID0+IHRvZG9MaXN0Lm1vZGVsLnNvcnRUaXRsZSgpKVxuICB9XG5cbiAgaGFuZGxlU29ydERlc2NyaXB0aW9uIChwcm9qZWN0SWQpIHtcbiAgICB0aGlzLm1vZGVsLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gK3Byb2plY3RJZClbMF1cbiAgICAgIC5tb2RlbC50b2RvTGlzdHMuZm9yRWFjaCgodG9kb0xpc3QpID0+IHRvZG9MaXN0Lm1vZGVsLnNvcnREZXNjcmlwdGlvbigpKVxuICB9XG5cbiAgaGFuZGxlU29ydERhdGUgKHByb2plY3RJZCkge1xuICAgIHRoaXMubW9kZWwucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSArcHJvamVjdElkKVswXVxuICAgICAgLm1vZGVsLnRvZG9MaXN0cy5mb3JFYWNoKCh0b2RvTGlzdCkgPT4gdG9kb0xpc3QubW9kZWwuc29ydERhdGUoKSlcbiAgfVxuXG4gIGhhbmRsZVNvcnRQcmlvcml0eSAocHJvamVjdElkKSB7XG4gICAgdGhpcy5tb2RlbC5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICtwcm9qZWN0SWQpWzBdXG4gICAgICAubW9kZWwudG9kb0xpc3RzLmZvckVhY2goKHRvZG9MaXN0KSA9PiB0b2RvTGlzdC5tb2RlbC5zb3J0UHJpb3JpdHkoKSlcbiAgfVxuXG4gIC8vIEhvbWUgcGFnZVxuICBoYW5kbGVIb21lICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0PVwicHJvamVjdC0xXCJdJykuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpXG4gIH1cbn1cbiIsImltcG9ydCB7IGxvY2FsU3RvcmFnZU1vZHVsZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlTW9kdWxlJ1xuXG5leHBvcnQgY2xhc3MgQXBwTW9kZWwge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdXG4gIH1cblxuICBhZGRQcm9qZWN0IChwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gICAgcHJvamVjdC5pZCA9ICsrQXBwTW9kZWwuY291bnRlclxuICAgIGxvY2FsU3RvcmFnZU1vZHVsZS51cGRhdGVQcm9qZWN0TGlzdCh0aGlzLnByb2plY3RzKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBcHBNb2RlbENvdW50ZXInLCBBcHBNb2RlbC5jb3VudGVyKVxuICB9XG5cbiAgZGVsZXRlUHJvamVjdCAoaWQpIHtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmlkICE9PSBpZClcbiAgICBsb2NhbFN0b3JhZ2VNb2R1bGUudXBkYXRlUHJvamVjdExpc3QodGhpcy5wcm9qZWN0cylcbiAgfVxuXG4gIGVkaXRQcm9qZWN0IChpZCwgbmFtZSkge1xuICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QubW9kZWwuaWQgPT09ICtpZCkge1xuICAgICAgICBwcm9qZWN0Lm1vZGVsLm5hbWUgPSBuYW1lXG4gICAgICAgIGxvY2FsU3RvcmFnZU1vZHVsZS51cGRhdGVQcm9qZWN0TGlzdCh0aGlzLnByb2plY3RzKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2plY3RcbiAgICB9KVxuICB9XG59XG5cbkFwcE1vZGVsLmNvdW50ZXIgPSAwXG4iLCJleHBvcnQgY2xhc3MgQXBwVmlldyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICB0aGlzLmhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1ob21lJylcbiAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICB0aGlzLnByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fbmFtZScpXG5cbiAgICAvLyBGb3JtIHRvIGNyZWF0ZSBuZXcgcHJvamVjdHNcbiAgICB0aGlzLnByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtLXByb2plY3QgW25hbWU9XCJuYW1lXCJdJylcbiAgICB0aGlzLnByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLS1wcm9qZWN0JylcblxuICAgIC8vIFNvcnQgdGFza3NcbiAgICB0aGlzLnNvcnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LXRpdGxlJylcbiAgICB0aGlzLnNvcnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LWRlc2NyaXB0aW9uJylcbiAgICB0aGlzLnNvcnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtZGF0ZScpXG4gICAgdGhpcy5zb3J0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1wcmlvcml0eScpXG5cbiAgICAvLyBGaWx0ZXIgdGFza3NcbiAgICB0aGlzLmRpc3BsYXlBbGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1maWx0ZXI9XCJhbGxcIl0nKVxuICAgIHRoaXMucHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1maWx0ZXJePVwicHJpb3JpdHlcIl0nKVxuICAgIHRoaXMuZGF0ZVRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZmlsdGVyPVwiZGF0ZS10b2RheVwiXScpXG4gICAgdGhpcy5kYXRlVXBjb21pbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1maWx0ZXI9XCJkYXRlLXVwY29taW5nXCJdJylcbiAgICB0aGlzLmRhdGVBbnl0aW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZmlsdGVyPVwiZGF0ZS1hbnl0aW1lXCJdJylcblxuICAgIC8vIFRvZ2dsZSBOYXZpZ2F0aW9uXG4gICAgdGhpcy5uYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b2dnbGU9XCJuYXZcIl0nKVxuICAgIHRoaXMubmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpXG5cbiAgICAvLyBFZGl0IFByb2plY3QgTmFtZVxuICAgIHRoaXMuX3RlbXBvcmFyeU5hbWUgPSAnJ1xuICAgIHRoaXMuX2NoYW5nZU5hbWUoKVxuICB9XG5cbiAgLy8gR2V0IG5ldyBwcm9qZWN0J3MgbmFtZVxuICBnZXQgX3Byb2plY3ROYW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0SW5wdXQudmFsdWVcbiAgfVxuXG4gIC8vIFJlc2V0IElucHV0IHRvIGNyZWF0ZSBhIG5ldyBwcm9qZWN0XG4gIF9yZXNldElucHV0ICgpIHtcbiAgICB0aGlzLnByb2plY3RJbnB1dC52YWx1ZSA9ICcnXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIG5hdmlnYXRpb24gYnV0dG9uIGxpbmtlZCB0byB0aGUgcHJvamVjdFxuICByZW5kZXJCdG4gKG5hbWUsIGlkKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGkuY2xhc3NMaXN0LmFkZCgnYnRuLS1wcm9qZWN0JylcbiAgICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIGBwcm9qZWN0LSR7aWR9YClcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWZpbHRlcicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJywgYHByb2plY3QtJHtpZH1gKVxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBuYW1lXG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLS1kZWxldGUnKVxuICAgIGNsb3NlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGNsb3NlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT4nXG5cbiAgICBsaS5hcHBlbmQoYnV0dG9uLCBjbG9zZUJ0bilcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS5hcHBlbmQobGkpXG4gIH1cblxuICBiaW5kQWRkUHJvamVjdCAoaGFuZGxlcikge1xuICAgIHRoaXMucHJvamVjdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGhhbmRsZXIodGhpcy5fcHJvamVjdE5hbWUpXG4gICAgICB0aGlzLl9yZXNldElucHV0KClcbiAgICB9KVxuICB9XG5cbiAgYmluZERlbGV0ZVByb2plY3QgKGhhbmRsZXIpIHtcbiAgICB0aGlzLm5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykpIHJldHVyblxuXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLS1kZWxldGUnKSkge1xuICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdsaScpLmRhdGFzZXQucHJvamVjdC5zbGljZSg4KVxuICAgICAgICBoYW5kbGVyKGlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBOYXZpZ2F0aW9uIHRvZ2dsZXNcbiAgYmluZFRvZ2dsZSAoaGFuZGxlcikge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuZGF0YXNldC50b2dnbGUpIHtcbiAgICAgICAgaGFuZGxlcihldmVudClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmluZE5hdlRvZ2dsZSAoaGFuZGxlcikge1xuICAgIHRoaXMubmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbiAgfVxuXG4gIC8vIEhvbWUgcGFnZVxuICBiaW5kSG9tZSAoaGFuZGxlcikge1xuICAgIHRoaXMuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICAvLyBGaWx0ZXJzXG4gIGJpbmRQcmlvcml0eSAoaGFuZGxlcikge1xuICAgIHRoaXMucHJpb3JpdHlCdG4uZm9yRWFjaCgocHJpb3JpdHlCdG4pID0+IHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiBoYW5kbGVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LmZpbHRlci5zbGljZSg5KSkpKVxuICB9XG5cbiAgYmluZERhdGVUb2RheSAoaGFuZGxlcikge1xuICAgIHRoaXMuZGF0ZVRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbiAgfVxuXG4gIGJpbmREYXRlVXBjb21pbmcgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmRhdGVVcGNvbWluZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBiaW5kRGF0ZUFueXRpbWUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmRhdGVBbnl0aW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbiAgfVxuXG4gIGJpbmREaXNwbGF5QWxsIChoYW5kbGVyKSB7XG4gICAgdGhpcy5kaXNwbGF5QWxsQnRuLmZvckVhY2goKGRpc3BsYXlBbGxCdG4pID0+IGRpc3BsYXlBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKSlcbiAgfVxuXG4gIC8vIFNvcnRcbiAgYmluZFNvcnRUaXRsZSAoaGFuZGxlcikge1xuICAgIHRoaXMuc29ydFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gdGhpcy5wcm9qZWN0LmlkXG4gICAgICBoYW5kbGVyKHByb2plY3RJZClcbiAgICB9KVxuICB9XG5cbiAgYmluZFNvcnREZXNjcmlwdGlvbiAoaGFuZGxlcikge1xuICAgIHRoaXMuc29ydERlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gdGhpcy5wcm9qZWN0LmlkXG4gICAgICBoYW5kbGVyKHByb2plY3RJZClcbiAgICB9KVxuICB9XG5cbiAgYmluZFNvcnRQcmlvcml0eSAoaGFuZGxlcikge1xuICAgIHRoaXMuc29ydFByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gdGhpcy5wcm9qZWN0LmlkXG4gICAgICBoYW5kbGVyKHByb2plY3RJZClcbiAgICB9KVxuICB9XG5cbiAgYmluZFNvcnREYXRlIChoYW5kbGVyKSB7XG4gICAgdGhpcy5zb3J0RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IHRoaXMucHJvamVjdC5pZFxuICAgICAgaGFuZGxlcihwcm9qZWN0SWQpXG4gICAgfSlcbiAgfVxuXG4gIC8vIEVkaXQgUHJvamVjdCBOYW1lXG5cbiAgX2NoYW5nZU5hbWUgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdF9fbmFtZScpKSB7XG4gICAgICAgIHRoaXMuX3RlbXBvcmFyeU5hbWUgPSBldmVudC50YXJnZXQuaW5uZXJIVE1MXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmRDaGFuZ2VOYW1lIChoYW5kbGVyKSB7XG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLl90ZW1wb3JhcnlOYW1lKSB7XG4gICAgICAgIGhhbmRsZXIoZXZlbnQudGFyZ2V0LmlkLCB0aGlzLl90ZW1wb3JhcnlOYW1lKVxuICAgICAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gJydcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUHJvamVjdENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5vblByb2plY3RDaGFuZ2UodGhpcy5tb2RlbC50b2RvTGlzdHMpXG4gICAgdGhpcy5tb2RlbC5iaW5kUHJvamVjdENoYW5nZSh0aGlzLm9uUHJvamVjdENoYW5nZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kQ2hhbmdlTmFtZSh0aGlzLmhhbmRsZUVkaXRUb2RvTGlzdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGVsZXRlU2VjdGlvbih0aGlzLmhhbmRsZURlbGV0ZVRvZG9MaXN0LmJpbmQodGhpcykpXG4gIH1cblxuICBvblByb2plY3RDaGFuZ2UgKHRvZG9MaXN0cykge1xuICAgIHRoaXMudmlldy5yZW5kZXIodG9kb0xpc3RzKVxuICB9XG5cbiAgaGFuZGxlQWRkVG9kb0xpc3QgKHRvZG9MaXN0KSB7XG4gICAgdGhpcy5tb2RlbC5hZGRUb2RvTGlzdCh0b2RvTGlzdClcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZVRvZG9MaXN0IChpZCkge1xuICAgIHRoaXMubW9kZWwuZGVsZXRlVG9kb0xpc3QoaWQpXG4gIH1cblxuICBoYW5kbGVFZGl0VG9kb0xpc3QgKGlkLCBuYW1lKSB7XG4gICAgdGhpcy5tb2RlbC5lZGl0VG9kb0xpc3QoaWQsIG5hbWUpXG4gIH1cblxuICBiaW5kQWRkICgpIHtcbiAgICB0aGlzLnZpZXcuYmluZEFkZFNlY3Rpb24odGhpcy5oYW5kbGVBZGRUb2RvTGlzdC5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBTZWN0aW9uRm9ybSB9IGZyb20gJy4vU2VjdGlvbkZvcm0nXG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VNb2R1bGUgfSBmcm9tICcuL2xvY2FsU3RvcmFnZU1vZHVsZSdcblxuZXhwb3J0IGNsYXNzIFByb2plY3RNb2RlbCB7XG4gIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZSA9PT0gJycgPyAnVW50aXRsZWQnIDogbmFtZVxuICAgIHRoaXMuaWQgPSArK1Byb2plY3RNb2RlbC5jb3VudGVyXG4gICAgdGhpcy50b2RvTGlzdHMgPSBbXVxuICAgIHRoaXMuZm9ybSA9IG5ldyBTZWN0aW9uRm9ybSh0aGlzLmlkKVxuICB9XG5cbiAgX2NvbW1pdCAodG9kb0xpc3RzKSB7XG4gICAgdGhpcy5vblByb2plY3RDaGFuZ2UodG9kb0xpc3RzKVxuICAgIGxvY2FsU3RvcmFnZU1vZHVsZS51cGRhdGVUb2RvTGlzdHModGhpcy5pZCwgdGhpcy50b2RvTGlzdHMpXG4gIH1cblxuICBhZGRUb2RvTGlzdCAodG9kb0xpc3QpIHtcbiAgICB0aGlzLnRvZG9MaXN0cy5wdXNoKHRvZG9MaXN0KVxuICAgIHRvZG9MaXN0LmlkID0gdGhpcy50b2RvTGlzdHMubGVuZ3RoXG4gICAgdGhpcy5fY29tbWl0KHRoaXMudG9kb0xpc3RzKVxuICB9XG5cbiAgZWRpdFRvZG9MaXN0IChpZCwgbmFtZSkge1xuICAgIHRoaXMudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHMubWFwKCh0b2RvTGlzdCkgPT4ge1xuICAgICAgaWYgKHRvZG9MaXN0Lm1vZGVsLmlkID09PSAraWQpIHtcbiAgICAgICAgdG9kb0xpc3QubW9kZWwubmFtZSA9IG5hbWVcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2RvTGlzdFxuICAgIH0pXG4gICAgdGhpcy5fY29tbWl0KHRoaXMudG9kb0xpc3RzKVxuICB9XG5cbiAgZGVsZXRlVG9kb0xpc3QgKGlkKSB7XG4gICAgdGhpcy50b2RvTGlzdHMgPSB0aGlzLnRvZG9MaXN0cy5maWx0ZXIodG9kb0xpc3QgPT4gdG9kb0xpc3QubW9kZWwuaWQgIT09ICtpZClcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvTGlzdHMpXG4gIH1cblxuICBiaW5kUHJvamVjdENoYW5nZSAoY2FsbGJhY2spIHtcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSA9IGNhbGxiYWNrXG4gIH1cbn1cblxuUHJvamVjdE1vZGVsLmNvdW50ZXIgPSAwXG4iLCJpbXBvcnQgeyBUb2RvTGlzdENvbnRyb2xsZXIgfSBmcm9tICcuL1RvZG9MaXN0Q29udHJvbGxlcidcbmltcG9ydCB7IFRvZG9MaXN0TW9kZWwgfSBmcm9tICcuL1RvZG9MaXN0TW9kZWwnXG5pbXBvcnQgeyBUb2RvTGlzdFZpZXcgfSBmcm9tICcuL1RvZG9MaXN0VmlldydcbmltcG9ydCB7IFByb2plY3RNb2RlbCB9IGZyb20gJy4vUHJvamVjdE1vZGVsJ1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdFZpZXcge1xuICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICB0aGlzLnNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25zJylcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fbmFtZScpXG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5fdGVtcG9yYXJ5TmFtZSA9ICcnXG4gICAgdGhpcy5fY2hhbmdlTmFtZSgpXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIG5hbWUgb2YgdGhlIHByb2plY3RcbiAgcmVuZGVyTmFtZSAobmFtZSwgaWQpIHtcbiAgICB0aGlzLm5hbWUuaW5uZXJIVE1MID0gbmFtZVxuICAgIHRoaXMubmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIGFkZCBzZWN0aW9uIGZvcm1cbiAgcmVuZGVyRm9ybSAoZm9ybSkge1xuICAgIGZvcm0ucmVuZGVyKClcbiAgfVxuXG4gIC8vIEdldCB0aGUgYWRkIHNlY3Rpb24gZm9ybSBpbnB1dHNcbiAgZ2V0Rm9ybSAoKSB7XG4gICAgdGhpcy5uYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH0gW25hbWU9XCJzZWN0aW9uXCJdYClcbiAgICB0aGlzLnN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfSAuYnRuLS1zdWJtaXRgKVxuICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfWApXG4gIH1cblxuICAvLyBHZXQgU2VjdGlvbidzIE5hbWUgZnJvbSB0aGUgZm9ybVxuICBnZXQgX3NlY3Rpb25OYW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lSW5wdXQudmFsdWVcbiAgfVxuXG4gIC8vIFJlc2V0IGZvcm0gaW5wdXRcbiAgX3Jlc2V0SW5wdXQgKCkge1xuICAgIHRoaXMubmFtZUlucHV0LnZhbHVlID0gJydcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgcHJvamVjdCBieSByZW5kZXJpbmcgZXZlcnkgc2VjdGlvblxuICByZW5kZXIgKHRvZG9MaXN0cykge1xuICAgIHdoaWxlICh0aGlzLnNlY3Rpb25zLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuc2VjdGlvbnMuZmlyc3RDaGlsZC5yZW1vdmUoKVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgdG9kb0xpc3Qgb2YgdG9kb0xpc3RzKSB7XG4gICAgICB0b2RvTGlzdC52aWV3LmNyZWF0ZVNlY3Rpb24oKVxuICAgICAgdG9kb0xpc3Qudmlldy5yZW5kZXJOYW1lKHRvZG9MaXN0Lm1vZGVsLm5hbWUpXG4gICAgICB0b2RvTGlzdC52aWV3LnJlbmRlcih0b2RvTGlzdC5tb2RlbC50b2RvcylcbiAgICAgIHRvZG9MaXN0LnZpZXcucmVuZGVyRm9ybSh0b2RvTGlzdC5tb2RlbC5mb3JtKVxuICAgICAgdG9kb0xpc3Qudmlldy5nZXRGb3JtKHRvZG9MaXN0Lm1vZGVsLmZvcm0pXG4gICAgICB0b2RvTGlzdC5iaW5kQWRkKClcbiAgICB9XG4gIH1cblxuICAvLyBBbGxvdyBzZWN0aW9uIG5hbWUgZWRpdHNcbiAgX2NoYW5nZU5hbWUgKCkge1xuICAgIHRoaXMuc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VjdGlvbl9fbmFtZScpKSB7XG4gICAgICAgIHRoaXMuX3RlbXBvcmFyeU5hbWUgPSBldmVudC50YXJnZXQuaW5uZXJIVE1MXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmRDaGFuZ2VOYW1lIChoYW5kbGVyKSB7XG4gICAgdGhpcy5zZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl90ZW1wb3JhcnlOYW1lKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tjbGFzc149XCJzZWN0aW9uLVwiXScpLmNsYXNzTGlzdFswXS5zbGljZSg4KVxuICAgICAgICBoYW5kbGVyKGlkLCB0aGlzLl90ZW1wb3JhcnlOYW1lKVxuICAgICAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gJydcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmluZEFkZFNlY3Rpb24gKGhhbmRsZXIpIHtcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkLS1zZWN0aW9uJykpIHtcbiAgICAgICAgaGFuZGxlcihuZXcgVG9kb0xpc3RDb250cm9sbGVyKG5ldyBUb2RvTGlzdE1vZGVsKHRoaXMuX3NlY3Rpb25OYW1lLCBQcm9qZWN0TW9kZWwuY291bnRlciksIG5ldyBUb2RvTGlzdFZpZXcoKSkpXG4gICAgICAgIHRoaXMuX3Jlc2V0SW5wdXQoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kRGVsZXRlU2VjdGlvbiAoaGFuZGxlcikge1xuICAgIHRoaXMuc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLmJ0bi0tZGVsZXRlJykpIHtcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmJ0bi0tZGVsZXRlJykuZGF0YXNldC5kZWxldGVcbiAgICAgICAgaGFuZGxlcihpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2VjdGlvbkZvcm0ge1xuICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX3NlY3Rpb24nKVxuICAgIGZvcm1Db250YWluZXIuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGZvcm1CdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tZHJvcGRvd24nLCAnYnRuLS1zZWN0aW9uJylcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGZvcm1CdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfWApXG4gICAgZm9ybUJ0bi5pbm5lckhUTUwgPSAnQWRkIFNlY3Rpb24nXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdhZGQnLCAnYWRkLS1zZWN0aW9uJywgJ2Ryb3Bkb3duJywgJ2hpZGRlbicpXG4gICAgZm9ybS5pZCA9IGBzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfWBcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWRkX19jb250ZW50JywgJ2FkZF9fY29udGVudC0tc2VjdGlvbicpXG5cbiAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzZWN0aW9uJylcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VjdGlvblxcJ3MgTmFtZScpXG4gICAgbGFiZWxOYW1lLmFwcGVuZChuYW1lKVxuICAgIGNvbnRlbnQuYXBwZW5kKGxhYmVsTmFtZSlcblxuICAgIGNvbnN0IGZpbmlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmluaXNoLmNsYXNzTGlzdC5hZGQoJ2FkZF9fZmluaXNoJylcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWRkJywgJ3NlY3Rpb24nKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1zdWJtaXQnKVxuICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQWRkIFNlY3Rpb24nXG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfWApXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWNhbmNlbCcpXG4gICAgY2FuY2VsQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnXG5cbiAgICBmaW5pc2guYXBwZW5kKHN1Ym1pdEJ0biwgY2FuY2VsQnRuKVxuICAgIGZvcm0uYXBwZW5kKGNvbnRlbnQsIGZpbmlzaClcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZChmb3JtQnRuLCBmb3JtKVxuICB9XG59XG4iLCJpbXBvcnQgeyBUb2RvRm9ybSB9IGZyb20gJy4vVG9kb0Zvcm0nXG5cbmV4cG9ydCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSA9ICcnLCBwcmlvcml0eSA9ICdub25lJykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB0aGlzLmlkID0gKytUb2RvLmNvdW50ZXJcbiAgICB0aGlzLmVkaXRGb3JtID0gbmV3IFRvZG9Gb3JtKCdlZGl0JywgdGhpcy5pZClcbiAgfVxuXG4gIHJlbmRlciAoY29udGFpbmVyKSB7XG4gICAgdGhpcy50b2RvRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy50b2RvRWxlbS5jbGFzc0xpc3QuYWRkKCd0by1kbycpXG4gICAgdGhpcy50b2RvRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGF0ZScsIHRoaXMuZGF0ZSlcbiAgICB0aGlzLnRvZG9FbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmlvcml0eScsIHRoaXMucHJpb3JpdHkpXG4gICAgdGhpcy50b2RvRWxlbS5pZCA9IHRoaXMuaWRcblxuICAgIGNvbnN0IHRvZG9DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0b2RvQ2hlY2suY2xhc3NMaXN0LmFkZCgndG8tZG9fX2NoZWNrJylcbiAgICB0b2RvQ2hlY2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICB0aGlzLnRvZG9FbGVtLmFwcGVuZCh0b2RvQ2hlY2spXG5cbiAgICBjb25zdCBjb21wb25lbnRzID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdkYXRlJ11cbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzKSB7XG4gICAgICBjb25zdCB0b2RvQ29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRvZG9Db21wb25lbnQuY2xhc3NMaXN0LmFkZChgdG8tZG9fXyR7Y29tcG9uZW50fWApXG4gICAgICB0b2RvQ29tcG9uZW50LmlubmVySFRNTCA9IHRoaXNbY29tcG9uZW50XVxuICAgICAgdGhpcy50b2RvRWxlbS5hcHBlbmQodG9kb0NvbXBvbmVudClcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0by1kb19fcHJpb3JpdHknLCBgcHJpb3JpdHktJHt0aGlzLnByaW9yaXR5fWApXG4gICAgdG9kb1ByaW9yaXR5LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1ib29rbWFya1wiPjwvaT4nXG4gICAgdGhpcy50b2RvRWxlbS5hcHBlbmQodG9kb1ByaW9yaXR5KVxuXG4gICAgdGhpcy50b2RvRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGhpcy50b2RvRWRpdC5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS10b2dnbGUnLCAnYnRuLS1lZGl0JylcbiAgICB0aGlzLnRvZG9FZGl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHRoaXMudG9kb0VkaXQuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBlZGl0LXRvZG8tJHt0aGlzLmlkfWApXG4gICAgdGhpcy50b2RvRWRpdC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtcGVuY2lsLWFsdFwiPjwvaT4nXG4gICAgdGhpcy50b2RvRWxlbS5hcHBlbmQodGhpcy50b2RvRWRpdClcblxuICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy50b2RvRWxlbSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVG9kb0NvdW50ZXInLCBUb2RvLmNvdW50ZXIpXG4gIH1cbn1cblxuVG9kby5jb3VudGVyID0gMFxuIiwiZXhwb3J0IGNsYXNzIFRvZG9Gb3JtIHtcbiAgY29uc3RydWN0b3IgKGdvYWwsIGlkKSB7XG4gICAgdGhpcy5nb2FsID0gZ29hbFxuICAgIHRoaXMuaWQgPSBpZFxuICB9XG5cbiAgX3JlbmRlckZvcm0gKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfS0tdG9kb2AsICd0b2RvLWZvcm0nLCAnZHJvcGRvd24nKVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMuZ29hbH0tdG9kby0ke3RoaXMuaWR9YClcblxuICAgIGlmICh0aGlzLmdvYWwgPT09ICdhZGQnKSB7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH1fX2NvbnRlbnRgLCBgJHt0aGlzLmdvYWx9X19jb250ZW50LS10b2RvYClcblxuICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpXG4gICAgbGFiZWxUaXRsZS5hcHBlbmQodGl0bGUpXG5cbiAgICBjb25zdCBsYWJlbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpXG4gICAgbGFiZWxEZXNjcmlwdGlvbi5hcHBlbmQoZGVzY3JpcHRpb24pXG5cbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfV9fZGV0YWlsc2ApXG5cbiAgICBjb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJylcbiAgICBsYWJlbERhdGUuYXBwZW5kKGRhdGUpXG5cbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkX19wcmlvcml0eScpXG4gICAgdGhpcy5wcmlvcml0eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGhpcy5wcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLnByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgJHt0aGlzLmdvYWx9LWFkZC1wcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICB0aGlzLnByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLXRvZ2dsZScpXG4gICAgdGhpcy5wcmlvcml0eUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuXG4gICAgY29uc3QgcHJpb3JpdGllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdGllcy5jbGFzc0xpc3QuYWRkKCdhZGQtcHJpb3JpdHknLCAnZHJvcGRvd24nLCAnaGlkZGVuJylcbiAgICBwcmlvcml0aWVzLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLmdvYWx9LWFkZC1wcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICBjb25zdCBwcmlvcml0aWVzTGlzdCA9IFsnaGlnaCcsICdtZWQnLCAnbG93JywgJ25vbmUnXVxuXG4gICAgZm9yIChjb25zdCBwcmlvcml0eSBvZiBwcmlvcml0aWVzTGlzdCkge1xuICAgICAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCBgcHJpb3JpdHktJHtwcmlvcml0eX0tJHt0aGlzLmlkfWApXG4gICAgICBsYWJlbFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LSR7cHJpb3JpdHl9YCwgYHByaW9yaXR5LSR7dGhpcy5pZH1gKVxuICAgICAgbGFiZWxQcmlvcml0eS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuXG4gICAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJpb3JpdHkpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJpb3JpdHktJHtwcmlvcml0eX0tJHt0aGlzLmlkfWApXG5cbiAgICAgIGlmIChwcmlvcml0eSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgcHJpb3JpdGllcy5hcHBlbmQobGFiZWxQcmlvcml0eSwgaW5wdXRQcmlvcml0eSlcbiAgICB9XG5cbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmQodGhpcy5wcmlvcml0eUJ0biwgcHJpb3JpdGllcylcblxuICAgIGNvbnN0IGZpbmlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmluaXNoLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfV9fZmluaXNoYClcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1zdWJtaXQnKVxuICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSBgJHt0aGlzLmdvYWwudG9VcHBlckNhc2UoKS5zbGljZSgwLCAxKSArIHRoaXMuZ29hbC5zbGljZSgxKX0gVGFza2BcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYCR7dGhpcy5nb2FsfS10b2RvLSR7dGhpcy5pZH1gKVxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1jYW5jZWwnKVxuICAgIGNhbmNlbEJ0bi5pbm5lckhUTUwgPSAnQ2FuY2VsJ1xuXG4gICAgZmluaXNoLmFwcGVuZChzdWJtaXRCdG4sIGNhbmNlbEJ0bilcbiAgICBjb250ZW50LmFwcGVuZChsYWJlbFRpdGxlLCBsYWJlbERlc2NyaXB0aW9uLCBkZXRhaWxzKVxuICAgIGRldGFpbHMuYXBwZW5kKGxhYmVsRGF0ZSwgcHJpb3JpdHlDb250YWluZXIpXG4gICAgZm9ybS5hcHBlbmQoY29udGVudCwgZmluaXNoKVxuXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIHJlbmRlckFkZCAoY29udGFpbmVyKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH1fX3RvZG9gKVxuXG4gICAgdGhpcy5mb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0aGlzLmZvcm1CdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tZHJvcGRvd24nLCBgYnRuLS0ke3RoaXMuZ29hbH1gKVxuICAgIHRoaXMuZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLmZvcm1CdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGAke3RoaXMuZ29hbH0tdG9kby0ke3RoaXMuaWR9YClcbiAgICB0aGlzLmZvcm1CdG4uaW5uZXJIVE1MID0gYCR7dGhpcy5nb2FsLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLmdvYWwuc2xpY2UoMSl9IFRhc2tgXG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZCh0aGlzLmZvcm1CdG4sIHRoaXMuX3JlbmRlckZvcm0oKSlcbiAgICBjb250YWluZXIuYXBwZW5kKGZvcm1Db250YWluZXIpXG5cbiAgICB0aGlzLl9pbml0UHJpb3JpdHlUb2dnbGUoKVxuICAgIHRoaXMuX2luaXRQcmlvcml0eUxhYmVscygpXG4gIH1cblxuICByZW5kZXJFZGl0IChiZWZvcmUpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfV9fdG9kb2ApXG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZCh0aGlzLl9yZW5kZXJGb3JtKCkpXG4gICAgYmVmb3JlLmFmdGVyKGZvcm1Db250YWluZXIpXG5cbiAgICB0aGlzLl9pbml0UHJpb3JpdHlUb2dnbGUoKVxuICAgIHRoaXMuX2luaXRQcmlvcml0eUxhYmVscygpXG4gIH1cblxuICAvLyBFbmFibGUgcHJpb3JpdHkgdG9nZ2xlIGFuZCBjb2xvciBjaGFuZ2Ugd2hlbiBzZWxlY3RpbmcgYSBwcmlvcml0eVxuXG4gIF9pbml0UHJpb3JpdHlUb2dnbGUgKCkge1xuICAgIHRoaXMucHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnByaW9yaXR5QnRuLmRhdGFzZXQudG9nZ2xlfWApLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpKVxuICB9XG5cbiAgX2luaXRQcmlvcml0eUxhYmVscyAoKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgdGhpcy5sYWJlbHMuZm9yRWFjaChsYWJlbCA9PiBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bGFiZWwuZ2V0QXR0cmlidXRlKCdmb3InKX1gKS5jaGVja2VkID0gdHJ1ZVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlPVwiJHt0aGlzLmdvYWx9LWFkZC1wcmlvcml0eS0ke3RoaXMuaWR9XCJdYCkuc3R5bGUuY29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdsYWJlbCcpKS5jb2xvclxuICAgIH0pKVxuICB9XG5cbiAgLy8gUmVzZXQgcHJpb3JpdHkgY29sb3Igd2hlbiBhZGRpbmcgYSB0YXNrXG5cbiAgX2luaXRSZXNldFByaW9yaXR5ICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWRkLXRvZG8tJHt0aGlzLmlkfSAuYnRuLS1zdWJtaXRgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cImFkZC1wcmlvcml0eS0ke3RoaXMuaWR9XCJdYCkuc3R5bGUuY29sb3IgPSAnJ1xuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9Gb3JtIH0gZnJvbSAnLi9Ub2RvRm9ybSdcblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UodGhpcy5tb2RlbC50b2RvcylcbiAgICB0aGlzLm1vZGVsLmJpbmRUb2RvTGlzdENoYW5nZSh0aGlzLm9uVG9kb0xpc3RDaGFuZ2UuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERlbGV0ZVRvZG8odGhpcy5oYW5kbGVEZWxldGVUb2RvLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRPcGVuRWRpdCh0aGlzLmhhbmRsZU9wZW5FZGl0LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRFZGl0VG9kbyh0aGlzLmhhbmRsZUVkaXRUb2RvLmJpbmQodGhpcykpXG4gIH1cblxuICBvblRvZG9MaXN0Q2hhbmdlICh0b2Rvcykge1xuICAgIHRoaXMudmlldy5yZW5kZXIodG9kb3MpXG4gIH1cblxuICBoYW5kbGVBZGRUb2RvICh0b2RvKSB7XG4gICAgdGhpcy5tb2RlbC5hZGRUb2RvKHRvZG8pXG4gIH1cblxuICBoYW5kbGVFZGl0VG9kbyAodXBkYXRlZFRvZG8sIGlkKSB7XG4gICAgdGhpcy5tb2RlbC5lZGl0VG9kbyh1cGRhdGVkVG9kbywgaWQpXG4gIH1cblxuICBoYW5kbGVEZWxldGVUb2RvIChpZCkge1xuICAgIHRoaXMubW9kZWwuZGVsZXRlVG9kbyhpZClcbiAgfVxuXG4gIGhhbmRsZU9wZW5FZGl0IChpZCkge1xuICAgIC8vIFVzZXIgY2FuIG9ubHkgZWRpdCBvbmUgdGFzayBhdCBhIHRpbWUsIHNvIGlmIHRoZXJlIGlzIGFub3RoZXIgRWRpdCBGb3JtIG9wZW4sIGl0IGlzIGNsb3NlZC5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRfX3RvZG8nKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRfX3RvZG8nKS5yZW1vdmUoKVxuICAgIH1cbiAgICBuZXcgVG9kb0Zvcm0oJ2VkaXQnLCBpZCkucmVuZGVyRWRpdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG8tZG9baWQ9XCIke2lkfVwiXWApKVxuICAgIHRoaXMudmlldy5nZXRFZGl0Rm9ybShpZClcbiAgICB0aGlzLnZpZXcuc2V0RWRpdEZvcm0oaWQpXG4gIH1cblxuICBiaW5kQWRkICgpIHtcbiAgICB0aGlzLnZpZXcuYmluZEFkZFRvZG8odGhpcy5oYW5kbGVBZGRUb2RvLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9Gb3JtIH0gZnJvbSAnLi9Ub2RvRm9ybSdcbmltcG9ydCB7IGxvY2FsU3RvcmFnZU1vZHVsZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlTW9kdWxlJ1xuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RNb2RlbCB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9qZWN0SWQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lID09PSAnJyA/ICdVbnRpdGxlZCcgOiBuYW1lXG4gICAgdGhpcy5pZCA9ICsrVG9kb0xpc3RNb2RlbC5jb3VudGVyXG4gICAgdGhpcy5mb3JtID0gbmV3IFRvZG9Gb3JtKCdhZGQnLCB0aGlzLmlkKVxuICAgIHRoaXMucHJvamVjdElkID0gcHJvamVjdElkXG4gICAgdGhpcy50b2RvcyA9IFtdXG4gICAgdGhpcy5zb3J0U3RhdHVzID0gJydcbiAgfVxuXG4gIGFkZFRvZG8gKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbylcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvcylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVG9kb0xpc3RNb2RlbENvdW50ZXInLCBUb2RvTGlzdE1vZGVsLmNvdW50ZXIpXG4gIH1cblxuICBlZGl0VG9kbyAodXBkYXRlZFRvZG8sIGlkKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICBpZiAodG9kby5pZCA9PT0gK2lkKSB7XG4gICAgICAgIHJldHVybiB1cGRhdGVkVG9kb1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRvZG9cbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9zKVxuICB9XG5cbiAgZGVsZXRlVG9kbyAoaWQpIHtcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT09IGlkKVxuICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9zKVxuICB9XG5cbiAgYmluZFRvZG9MaXN0Q2hhbmdlIChjYWxsYmFjaykge1xuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSA9IGNhbGxiYWNrXG4gIH1cblxuICBfY29tbWl0ICh0b2Rvcykge1xuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0b2RvcylcbiAgICBsb2NhbFN0b3JhZ2VNb2R1bGUudXBkYXRlVG9kb3ModGhpcy5pZCwgdGhpcy5wcm9qZWN0SWQsIHRoaXMudG9kb3MpXG4gIH1cblxuICBzb3J0VGl0bGUgKCkge1xuICAgIGlmICh0aGlzLnNvcnRTdGF0dXMgPT09ICdkZXNjZW5kaW5nJykge1xuICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3Muc29ydCgoYSwgYikgPT4gKGIudGl0bGUpLmxvY2FsZUNvbXBhcmUoYS50aXRsZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLnNvcnQoKGEsIGIpID0+IChhLnRpdGxlKS5sb2NhbGVDb21wYXJlKGIudGl0bGUpKVxuICAgIH1cbiAgICB0aGlzLl9zb3J0Q2hhbmdlKHRoaXMudG9kb3MpXG4gIH1cblxuICBzb3J0RGVzY3JpcHRpb24gKCkge1xuICAgIGlmICh0aGlzLnNvcnRTdGF0dXMgPT09ICdkZXNjZW5kaW5nJykge1xuICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3Muc29ydCgoYSwgYikgPT4gKGIuZGVzY3JpcHRpb24pLmxvY2FsZUNvbXBhcmUoYS5kZXNjcmlwdGlvbikpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLnNvcnQoKGEsIGIpID0+IChhLmRlc2NyaXB0aW9uKS5sb2NhbGVDb21wYXJlKGIuZGVzY3JpcHRpb24pKVxuICAgIH1cbiAgICB0aGlzLl9zb3J0Q2hhbmdlKHRoaXMudG9kb3MpXG4gIH1cblxuICBzb3J0RGF0ZSAoKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKCFhLmRhdGUpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSBpZiAoIWIuZGF0ZSkge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnNvcnRTdGF0dXMgPT09ICdkZXNjZW5kaW5nJykge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShiLmRhdGUpIC0gbmV3IERhdGUoYS5kYXRlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmRhdGUpIC0gbmV3IERhdGUoYi5kYXRlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLl9zb3J0Q2hhbmdlKHRoaXMudG9kb3MpXG4gIH1cblxuICBzb3J0UHJpb3JpdHkgKCkge1xuICAgIHRoaXMuX2dldFByaW9yaXR5VmFsdWUoKVxuICAgIGlmICh0aGlzLnNvcnRTdGF0dXMgPT09ICdkZXNjZW5kaW5nJykge1xuICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3Muc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eVZhbHVlIC0gYS5wcmlvcml0eVZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5zb3J0KChhLCBiKSA9PiBhLnByaW9yaXR5VmFsdWUgLSBiLnByaW9yaXR5VmFsdWUpXG4gICAgfVxuICAgIHRoaXMuX3NvcnRDaGFuZ2UodGhpcy50b2RvcylcbiAgfVxuXG4gIF9nZXRQcmlvcml0eVZhbHVlICgpIHtcbiAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdGhpcy50b2Rvcykge1xuICAgICAgc3dpdGNoICh0b2RvLnByaW9yaXR5KSB7XG4gICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgdG9kby5wcmlvcml0eVZhbHVlID0gMVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ21lZCc6XG4gICAgICAgICAgdG9kby5wcmlvcml0eVZhbHVlID0gMlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICAgIHRvZG8ucHJpb3JpdHlWYWx1ZSA9IDNcbiAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRvZG8ucHJpb3JpdHlWYWx1ZSA9IDBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfc29ydENoYW5nZSAodG9kb3MpIHtcbiAgICB0aGlzLnNvcnRTdGF0dXMgPSB0aGlzLnNvcnRTdGF0dXMgPT09ICdkZXNjZW5kaW5nJyA/ICdhc2NlbmRpbmcnIDogJ2Rlc2NlbmRpbmcnXG4gICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlKHRvZG9zKVxuICB9XG59XG5cblRvZG9MaXN0TW9kZWwuY291bnRlciA9IDBcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8nXG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdFZpZXcge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25zJylcbiAgICB0aGlzLnRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLnRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG9saXN0JylcbiAgICB0aGlzLmlkID0gKytUb2RvTGlzdFZpZXcuY291bnRlclxuICB9XG5cbiAgLy8gQ3JlYXRlIGEgc2VjdGlvblxuICBjcmVhdGVTZWN0aW9uICgpIHtcbiAgICB0aGlzLnNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGBzZWN0aW9uLSR7dGhpcy5pZH1gKVxuICAgIHRoaXMuc2VjdGlvbi5wcmVwZW5kKHRoaXMudG9kb0xpc3QpXG4gICAgdGhpcy5wcm9qZWN0LmFwcGVuZCh0aGlzLnNlY3Rpb24pXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHNlY3Rpb24ncyBuYW1lXG4gIHJlbmRlck5hbWUgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMubmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19uYW1lX19jb250YWluZXInKVxuXG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRoaXMubmFtZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19uYW1lJylcbiAgICB0aGlzLm5hbWUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKVxuICAgIHRoaXMubmFtZS5pbm5lckhUTUwgPSBuYW1lXG5cbiAgICB0aGlzLmRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGhpcy5kZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLS1kZWxldGUnKVxuICAgIHRoaXMuZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHRoaXMuZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1kZWxldGUnLCB0aGlzLnNlY3Rpb24uY2xhc3NMaXN0WzBdLnNsaWNlKDgpKVxuICAgIHRoaXMuZGVsZXRlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT4nXG5cbiAgICB0aGlzLm5hbWVDb250YWluZXIuYXBwZW5kKHRoaXMubmFtZSwgdGhpcy5kZWxldGVCdG4pXG4gICAgdGhpcy5zZWN0aW9uLnByZXBlbmQodGhpcy5uYW1lQ29udGFpbmVyKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBBZGQgZm9ybVxuICByZW5kZXJGb3JtIChmb3JtKSB7XG4gICAgZm9ybS5yZW5kZXJBZGQodGhpcy5zZWN0aW9uKVxuICB9XG5cbiAgLy8gR2V0IHRoZSBBZGQgZm9ybSBpbnB1dHNcbiAgZ2V0Rm9ybSAoKSB7XG4gICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cInRpdGxlXCJdYClcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHt0aGlzLmlkfSAudG9kby1mb3JtIFtuYW1lPVwiZGVzY3JpcHRpb25cIl1gKVxuICAgIHRoaXMuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cImRhdGVcIl1gKVxuICAgIHRoaXMuc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHt0aGlzLmlkfSAudG9kby1mb3JtIC5idG4tLXN1Ym1pdGApXG4gIH1cblxuICAvLyBHZXQgYWRkIGZvcm0gdmFsdWVzXG4gIGdldCBfdG9kb1RpdGxlICgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZS52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvRGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9EYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9Qcmlvcml0eSAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGQtdG9kby0ke3RoaXMuaWR9IFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZGApKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZC10b2RvLSR7dGhpcy5pZH0gW25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkYCkudmFsdWVcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgdGhlIEVkaXQgZm9ybSBpbnB1dHNcbiAgZ2V0RWRpdEZvcm0gKCkge1xuICAgIHRoaXMudGl0bGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImVkaXQtdG9kb1wiXSBbbmFtZT1cInRpdGxlXCJdJylcbiAgICB0aGlzLmRlc2NyaXB0aW9uRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gW25hbWU9XCJkZXNjcmlwdGlvblwiXScpXG4gICAgdGhpcy5kYXRlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gW25hbWU9XCJkYXRlXCJdJylcbiAgICB0aGlzLnByaW9yaXR5RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gLmJ0bi0tdG9nZ2xlJylcbiAgfVxuXG4gIC8vIEF1dG9tYXRpY2FsbHkgcHJlLWZpbGwgdGhlIEVkaXQgZm9ybSBpbnB1dHNcbiAgc2V0RWRpdEZvcm0gKGlkKSB7XG4gICAgdGhpcy50aXRsZUVkaXQudmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX3RpdGxlYCkuaW5uZXJIVE1MXG4gICAgdGhpcy5kZXNjcmlwdGlvbkVkaXQudmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX2Rlc2NyaXB0aW9uYCkuaW5uZXJIVE1MXG4gICAgdGhpcy5kYXRlRWRpdC52YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aWR9XCJdIC50by1kb19fZGF0ZWApLmlubmVySFRNTFxuICAgIHRoaXMucHJpb3JpdHlFZGl0LmNsYXNzTGlzdC5hZGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl0gLnRvLWRvX19wcmlvcml0eWApLmNsYXNzTGlzdFsxXSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWRePVwiZWRpdC10b2RvXCJdIFtpZF49XCIke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aWR9XCJdIC50by1kb19fcHJpb3JpdHlgKS5jbGFzc0xpc3RbMV19XCJdYCkuY2hlY2tlZCA9IHRydWVcbiAgfVxuXG4gIC8vIEdldCB0aGUgRWRpdCBmb3JtIHZhbHVlc1xuICBnZXQgX2VkaXRUaXRsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGVFZGl0LnZhbHVlXG4gIH1cblxuICBnZXQgX2VkaXREZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb25FZGl0LnZhbHVlXG4gIH1cblxuICBnZXQgX2VkaXREYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlRWRpdC52YWx1ZVxuICB9XG5cbiAgZ2V0IF9lZGl0UHJpb3JpdHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdIFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBmb3JtIGlucHV0c1xuICBfcmVzZXRJbnB1dHMgKCkge1xuICAgIHRoaXMudGl0bGUudmFsdWUgPSAnJ1xuICAgIHRoaXMuZGVzY3JpcHRpb24udmFsdWUgPSAnJ1xuICAgIHRoaXMuZGF0ZS52YWx1ZSA9ICcnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcl49XCJwcmlvcml0eS1ub25lXCJdJykuY2hlY2tlZCA9IHRydWVcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgVG9kbyBMaXN0XG4gIHJlbmRlciAodG9kb3MpIHtcbiAgICB3aGlsZSAodGhpcy50b2RvTGlzdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnRvZG9MaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICAgIHRvZG8ucmVuZGVyKHRoaXMudG9kb0xpc3QpXG4gICAgfVxuICB9XG5cbiAgLy8gRXZlbnQgTGlzdGVuZXJzXG5cbiAgYmluZEFkZFRvZG8gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaGFuZGxlcihuZXcgVG9kbyh0aGlzLl90b2RvVGl0bGUsIHRoaXMuX3RvZG9EZXNjcmlwdGlvbiwgdGhpcy5fdG9kb0RhdGUsIHRoaXMuX3RvZG9Qcmlvcml0eSkpXG4gICAgICB0aGlzLl9yZXNldElucHV0cygpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmREZWxldGVUb2RvIChoYW5kbGVyKSB7XG4gICAgdGhpcy50b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvLWRvX19jaGVjaycpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpXG4gICAgICAgIGhhbmRsZXIoaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIE9wZW4gZm9ybSB0byBlZGl0IHRoZSB0b2RvXG4gIGJpbmRPcGVuRWRpdCAoaGFuZGxlcikge1xuICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLmJ0bi0tZWRpdCcpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50by1kbycpLmlkKVxuICAgICAgICBoYW5kbGVyKGlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kRWRpdFRvZG8gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PT0gJ0VkaXQgVGFzaycpIHtcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnZm9ybScpLmlkLnNsaWNlKDEwKVxuICAgICAgICBjb25zdCB1cGRhdGVkVG9kbyA9IG5ldyBUb2RvKHRoaXMuX2VkaXRUaXRsZSwgdGhpcy5fZWRpdERlc2NyaXB0aW9uLCB0aGlzLl9lZGl0RGF0ZSwgdGhpcy5fZWRpdFByaW9yaXR5KVxuICAgICAgICBoYW5kbGVyKHVwZGF0ZWRUb2RvLCBpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblRvZG9MaXN0Vmlldy5jb3VudGVyID0gMFxuIiwiaW1wb3J0ICcuL3Nhc3MvbWFpbi5zY3NzJ1xuaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gJy4vQXBwQ29udHJvbGxlcidcbmltcG9ydCB7IEFwcE1vZGVsIH0gZnJvbSAnLi9BcHBNb2RlbCdcbmltcG9ydCB7IEFwcFZpZXcgfSBmcm9tICcuL0FwcFZpZXcnXG5pbXBvcnQgeyBUb2RvTGlzdENvbnRyb2xsZXIgfSBmcm9tICcuL1RvZG9MaXN0Q29udHJvbGxlcidcbmltcG9ydCB7IFRvZG9MaXN0TW9kZWwgfSBmcm9tICcuL1RvZG9MaXN0TW9kZWwnXG5pbXBvcnQgeyBUb2RvTGlzdFZpZXcgfSBmcm9tICcuL1RvZG9MaXN0VmlldydcbmltcG9ydCB7IFByb2plY3RDb250cm9sbGVyIH0gZnJvbSAnLi9Qcm9qZWN0Q29udHJvbGxlcidcbmltcG9ydCB7IFByb2plY3RNb2RlbCB9IGZyb20gJy4vUHJvamVjdE1vZGVsJ1xuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tICcuL1Byb2plY3RWaWV3J1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vVG9kbydcblxuY29uc3QgYXBwID0gbmV3IEFwcENvbnRyb2xsZXIobmV3IEFwcE1vZGVsKCksIG5ldyBBcHBWaWV3KCkpXG5cbi8vIE9uIHRoZSBmaXJzdCB1c2UsIGNyZWF0ZXMgYSBkZWZhdWx0IHByb2plY3QgYW5kIHNhbXBsZXNcbmlmICghbG9jYWxTdG9yYWdlLnByb2plY3RzKSB7XG4gIC8vIENyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdC4gSXQgY2Fubm90IGJlIGRlbGV0ZWQgYXMgaXQgYWN0cyBhcyBhIFwiSG9tZSBQYWdlXCIuXG4gIGFwcC5oYW5kbGVBZGRQcm9qZWN0KCdEZWZhdWx0JylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tZGVsZXRlJykucmVtb3ZlKClcblxuICAvLyBBZGQgYSB0dXRvcmlhbCBhbmQgYSBmZXcgc2FtcGxlc1xuICBhcHAubW9kZWwucHJvamVjdHNbMF0uaGFuZGxlRWRpdFRvZG9MaXN0KCcxJywgJ1R1dG9yaWFsJylcbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLnRvZG9MaXN0c1swXS5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKFxuICAgICdXZWxjb21lJyxcbiAgYFRyeSBhZGRpbmcgYSBuZXcgdGFzayBieSBjbGlja2luZyBvbiBcIkFkZCBUYXNrXCIhXG4gIFlvdSBjYW4gYWxzbyBhZGQgYXMgbWFueSBzZWN0aW9ucyB0byB5b3VyIHByb2plY3QgYXMgeW91J2QgbGlrZSBieSBjbGlja2luZyBvbiBcIkFkZCBTZWN0aW9uXCIsIGFuZCBjcmVhdGUgYXMgbWFueSBwcm9qZWN0cyBhcyB5b3Ugd2lzaC5gKSlcblxuICBhcHAubW9kZWwucHJvamVjdHNbMF0uaGFuZGxlQWRkVG9kb0xpc3QobmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCgnU2FtcGxlcycsIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5tb2RlbC5pZCksIG5ldyBUb2RvTGlzdFZpZXcoKSkpXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5tb2RlbC50b2RvTGlzdHNbMV0uaGFuZGxlQWRkVG9kbyhuZXcgVG9kbyhcbiAgICAnSm9oblxcJ3MgQmlydGhkYXknLFxuICAgICdNZWV0IGF0IEpvaG5cXCdzIGhvdXNlIGF0IDE5LiBEb25cXCd0IGZvcmdldCB0byBicmluZyBoaXMgZ2lmdC4nLFxuICBgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7bmV3IERhdGUoKS5nZXRNb250aCgpICsgMX0tJHtuZXcgRGF0ZSgpLmdldERhdGUoKX1gLFxuICAnaGlnaCdcbiAgKSlcblxuICBhcHAubW9kZWwucHJvamVjdHNbMF0ubW9kZWwudG9kb0xpc3RzWzFdLmhhbmRsZUFkZFRvZG8obmV3IFRvZG8oXG4gICAgJ0Rpbm5lciB3aXRoIENobG9lJyxcbiAgICAnUmVzZXJ2YXRpb24gYXQgUmhvZGVzIFJlc3RhdXJhbnQsIGF0IDIwLicsXG4gIGAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxfS0ke25ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgMn1gLFxuICAnbWVkJ1xuICApKVxuXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5tb2RlbC50b2RvTGlzdHNbMV0uaGFuZGxlQWRkVG9kbyhuZXcgVG9kbyhcbiAgICAnRGVudGlzdCcsXG4gICAgJ0l0IHdvblxcJ3QgYmUgdGhhdCBiYWQuIFByb2JhYmx5LicsXG4gIGAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAyfS0ke25ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgNX1gLFxuICAnbG93J1xuICApKVxuXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5tb2RlbC50b2RvTGlzdHNbMV0uaGFuZGxlQWRkVG9kbyhuZXcgVG9kbyhcbiAgICAnU3RhcnQgd29ya2luZyBvdXQnLFxuICAgICdJXFwnbGwgc3RhcnQuLi4gVG9tb3Jyb3cuIE9yIG5leHQgeWVhci4nXG4gICkpXG5cbi8qIE9uIGFsbCB0aGUgb3RoZXIgdXNlczpcbiAgICAtIExvYWQgdGhlIGxvY2FsU3RvcmFnZVxuICAgIC0gQ3JlYXRlIG5hdiBidXR0b25zIGZvciBlYWNoIHByb2plY3RcbiAgICAtIFJlbmRlciB0aGUgZGVmYXVsdCBwcm9qZWN0XG4qL1xufSBlbHNlIHtcbiAgbGV0IHRlbXBTdG9yYWdlID0gWy4uLmFwcC5tb2RlbC5wcm9qZWN0c11cblxuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuXG4gIGFwcC5tb2RlbC5wcm9qZWN0cyA9IFtdXG5cbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHRlbXBTdG9yYWdlKSB7XG4gICAgY29uc3QgdG9kb1Byb2plY3QgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIobmV3IFByb2plY3RNb2RlbChwcm9qZWN0Lm1vZGVsLm5hbWUpLCBuZXcgUHJvamVjdFZpZXcoUHJvamVjdE1vZGVsLmNvdW50ZXIpKVxuICAgIGFwcC5tb2RlbC5hZGRQcm9qZWN0KHRvZG9Qcm9qZWN0KVxuICAgIGFwcC5kaXNwbGF5UHJvamVjdCh0b2RvUHJvamVjdClcbiAgICBhcHAudmlldy5yZW5kZXJCdG4odG9kb1Byb2plY3QubW9kZWwubmFtZSwgdG9kb1Byb2plY3QubW9kZWwuaWQpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvamVjdD1cInByb2plY3QtJHt0b2RvUHJvamVjdC5tb2RlbC5pZH1cIl1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFwcC5oYW5kbGVOYXZDbGljayh0b2RvUHJvamVjdCkpXG5cbiAgICBmb3IgKGNvbnN0IHRvZG9MaXN0IG9mIHByb2plY3QubW9kZWwudG9kb0xpc3RzKSB7XG4gICAgICBjb25zdCBwcm9qZWN0VG9kb0xpc3QgPSBuZXcgVG9kb0xpc3RDb250cm9sbGVyKG5ldyBUb2RvTGlzdE1vZGVsKHRvZG9MaXN0Lm1vZGVsLm5hbWUsIHRvZG9MaXN0Lm1vZGVsLnByb2plY3RJZCksIG5ldyBUb2RvTGlzdFZpZXcoKSlcbiAgICAgIHRvZG9Qcm9qZWN0LmhhbmRsZUFkZFRvZG9MaXN0KHByb2plY3RUb2RvTGlzdClcblxuICAgICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9MaXN0Lm1vZGVsLnRvZG9zKSB7XG4gICAgICAgIHByb2plY3RUb2RvTGlzdC5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZGF0ZSwgdG9kby5wcmlvcml0eSkpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRlbXBTdG9yYWdlID0ge31cbiAgYXBwLmhhbmRsZUhvbWUoKVxufVxuIiwiZXhwb3J0IGNvbnN0IGxvY2FsU3RvcmFnZU1vZHVsZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHVwZGF0ZVByb2plY3RMaXN0ID0gKHByb2plY3RzKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVG9kb0xpc3RzID0gKGlkLCB0b2RvTGlzdHNBcnIpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICdwcm9qZWN0cycsXG4gICAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSlcbiAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgcHJvamVjdC5tb2RlbC50b2RvTGlzdHMgPSB0b2RvTGlzdHNBcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0XG4gICAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gIH1cblxuICBjb25zdCB1cGRhdGVUb2RvcyA9IChpZCwgcHJvamVjdElkLCB0b2Rvc0FycikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgJ3Byb2plY3RzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKVxuICAgICAgICAgIC5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgcHJvamVjdC5tb2RlbC50b2RvTGlzdHMubWFwKCh0b2RvTGlzdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0b2RvTGlzdC5tb2RlbC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgIHRvZG9MaXN0Lm1vZGVsLnRvZG9zID0gdG9kb3NBcnJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZG9MaXN0XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdFxuICAgICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGVQcm9qZWN0TGlzdCxcbiAgICB1cGRhdGVUb2RvTGlzdHMsXG4gICAgdXBkYXRlVG9kb3NcbiAgfVxufSkoKVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=