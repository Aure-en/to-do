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

    localStorage.setItem('ProjectModelCounter', ProjectModel.counter);
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
    this.id = +localStorage.getItem('TodoListModelCounter');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9kb0xpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sb2NhbFN0b3JhZ2VNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiQXBwQ29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwibW9kZWwiLCJ2aWV3IiwiYmluZEFkZFByb2plY3QiLCJoYW5kbGVBZGRQcm9qZWN0IiwiYmluZCIsImJpbmREZWxldGVQcm9qZWN0IiwiaGFuZGxlRGVsZXRlUHJvamVjdCIsImJpbmRDaGFuZ2VOYW1lIiwiaGFuZGxlQ2hhbmdlTmFtZSIsImJpbmROYXZUb2dnbGUiLCJoYW5kbGVOYXZUb2dnbGUiLCJiaW5kVG9nZ2xlIiwiaGFuZGxlVG9nZ2xlIiwiYmluZERpc3BsYXlBbGwiLCJoYW5kbGVEaXNwbGF5QWxsIiwiYmluZFByaW9yaXR5IiwiaGFuZGxlUHJpb3JpdHkiLCJiaW5kRGF0ZVRvZGF5IiwiaGFuZGxlVG9kYXkiLCJiaW5kRGF0ZVVwY29taW5nIiwiaGFuZGxlVXBjb21pbmciLCJiaW5kRGF0ZUFueXRpbWUiLCJoYW5kbGVBbnl0aW1lIiwiYmluZEhvbWUiLCJoYW5kbGVIb21lIiwibmFtZSIsInByb2plY3QiLCJQcm9qZWN0Q29udHJvbGxlciIsIlByb2plY3RNb2RlbCIsIlByb2plY3RWaWV3IiwiY291bnRlciIsImFkZFByb2plY3QiLCJhZGRUb2RvTGlzdCIsIlRvZG9MaXN0Q29udHJvbGxlciIsIlRvZG9MaXN0TW9kZWwiLCJUb2RvTGlzdFZpZXciLCJkaXNwbGF5UHJvamVjdCIsInJlbmRlckJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVOYXZDbGljayIsInJlbmRlck5hbWUiLCJyZW5kZXIiLCJ0b2RvTGlzdHMiLCJyZW5kZXJGb3JtIiwiZm9ybSIsImdldEZvcm0iLCJkZWxldGVQcm9qZWN0IiwicmVtb3ZlIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZWRpdFByb2plY3QiLCJ0ZXh0Q29udGVudCIsImV2ZW50IiwidGFyZ2V0IiwiZGF0YXNldCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsIm5hdiIsIm1haW4iLCJwcmlvcml0eSIsInRvZG9zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0b2RvIiwiYWRkIiwiX3NhbWVEYXkiLCJkYXRlMSIsImRhdGUyIiwidG9kb0RhdGUiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0b2RheSIsImRhdGUiLCJBcHBNb2RlbCIsInByb2plY3RzIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYWxTdG9yYWdlTW9kdWxlIiwidXBkYXRlUHJvamVjdExpc3QiLCJzZXRJdGVtIiwiZmlsdGVyIiwiQXBwVmlldyIsImNvbnRhaW5lciIsImhvbWVCdG4iLCJwcm9qZWN0SW5wdXQiLCJwcm9qZWN0U3VibWl0Iiwic29ydFRpdGxlIiwic29ydERlc2NyaXB0aW9uIiwic29ydERhdGUiLCJzb3J0UHJpb3JpdHkiLCJkaXNwbGF5QWxsQnRuIiwicHJpb3JpdHlCdG4iLCJkYXRlVG9kYXlCdG4iLCJkYXRlVXBjb21pbmdCdG4iLCJkYXRlQW55dGltZUJ0biIsIm5hdkJ0biIsIl90ZW1wb3JhcnlOYW1lIiwiX2NoYW5nZU5hbWUiLCJfcHJvamVjdE5hbWUiLCJ2YWx1ZSIsIl9yZXNldElucHV0IiwibGkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYnV0dG9uIiwiaW5uZXJIVE1MIiwiY2xvc2VCdG4iLCJhcHBlbmQiLCJoYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJjbG9zZXN0IiwiY29udGFpbnMiLCJzbGljZSIsImJvZHkiLCJvblByb2plY3RDaGFuZ2UiLCJiaW5kUHJvamVjdENoYW5nZSIsImhhbmRsZUVkaXRUb2RvTGlzdCIsImJpbmREZWxldGVTZWN0aW9uIiwiaGFuZGxlRGVsZXRlVG9kb0xpc3QiLCJiaW5kQWRkU2VjdGlvbiIsImhhbmRsZUFkZFRvZG9MaXN0IiwidG9kb0xpc3QiLCJkZWxldGVUb2RvTGlzdCIsImVkaXRUb2RvTGlzdCIsIlNlY3Rpb25Gb3JtIiwiX2NvbW1pdCIsInVwZGF0ZVRvZG9MaXN0cyIsImNhbGxiYWNrIiwic2VjdGlvbnMiLCJuYW1lSW5wdXQiLCJzdWJtaXQiLCJfc2VjdGlvbk5hbWUiLCJmaXJzdENoaWxkIiwiY3JlYXRlU2VjdGlvbiIsImJpbmRBZGQiLCJkZWxldGUiLCJmb3JtQ29udGFpbmVyIiwiZm9ybUJ0biIsImxhYmVsTmFtZSIsImZpbmlzaCIsInN1Ym1pdEJ0biIsImNhbmNlbEJ0biIsIlRvZG8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZWRpdEZvcm0iLCJUb2RvRm9ybSIsInRvZG9FbGVtIiwidG9kb0NoZWNrIiwiY29tcG9uZW50cyIsImNvbXBvbmVudCIsInRvZG9Db21wb25lbnQiLCJ0b2RvUHJpb3JpdHkiLCJ0b2RvRWRpdCIsImdvYWwiLCJfcmVuZGVyRm9ybSIsImxhYmVsVGl0bGUiLCJsYWJlbERlc2NyaXB0aW9uIiwiZGV0YWlscyIsImxhYmVsRGF0ZSIsInByaW9yaXR5Q29udGFpbmVyIiwicHJpb3JpdGllcyIsInByaW9yaXRpZXNMaXN0IiwibGFiZWxQcmlvcml0eSIsImlucHV0UHJpb3JpdHkiLCJ0b1VwcGVyQ2FzZSIsInJlbmRlckFkZCIsIl9pbml0UHJpb3JpdHlUb2dnbGUiLCJfaW5pdFByaW9yaXR5TGFiZWxzIiwicmVuZGVyRWRpdCIsImJlZm9yZSIsImFmdGVyIiwibGFiZWxzIiwibGFiZWwiLCJzdHlsZSIsImNvbG9yIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIl9pbml0UmVzZXRQcmlvcml0eSIsIm9uVG9kb0xpc3RDaGFuZ2UiLCJiaW5kVG9kb0xpc3RDaGFuZ2UiLCJiaW5kRGVsZXRlVG9kbyIsImhhbmRsZURlbGV0ZVRvZG8iLCJiaW5kT3BlbkVkaXQiLCJoYW5kbGVPcGVuRWRpdCIsImJpbmRFZGl0VG9kbyIsImhhbmRsZUVkaXRUb2RvIiwiaGFuZGxlQWRkVG9kbyIsImFkZFRvZG8iLCJ1cGRhdGVkVG9kbyIsImVkaXRUb2RvIiwiZGVsZXRlVG9kbyIsImdldEVkaXRGb3JtIiwic2V0RWRpdEZvcm0iLCJiaW5kQWRkVG9kbyIsInByb2plY3RJZCIsInVwZGF0ZVRvZG9zIiwic2VjdGlvbiIsInByZXBlbmQiLCJuYW1lQ29udGFpbmVyIiwiZGVsZXRlQnRuIiwiX3RvZG9UaXRsZSIsIl90b2RvRGVzY3JpcHRpb24iLCJfdG9kb0RhdGUiLCJfdG9kb1ByaW9yaXR5IiwidGl0bGVFZGl0IiwiZGVzY3JpcHRpb25FZGl0IiwiZGF0ZUVkaXQiLCJwcmlvcml0eUVkaXQiLCJjaGVja2VkIiwiX2VkaXRUaXRsZSIsIl9lZGl0RGVzY3JpcHRpb24iLCJfZWRpdERhdGUiLCJfZWRpdFByaW9yaXR5IiwiX3Jlc2V0SW5wdXRzIiwicGFyc2VJbnQiLCJwYXJlbnRFbGVtZW50IiwiYXBwIiwidGVtcFN0b3JhZ2UiLCJjbGVhciIsInRvZG9Qcm9qZWN0IiwicHJvamVjdFRvZG9MaXN0IiwiY29uc29sZSIsImxvZyIsInRvZG9MaXN0c0FyciIsInRvZG9zQXJyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QU8sWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdB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OztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50X193cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XFxufVxcblxcbi5uby1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYm9keSxcXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiLCBBcmlhbDtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS45O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5bY29udGVudGVkaXRhYmxlXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA1KTtcXG59XFxuW2NvbnRlbnRlZGl0YWJsZV06Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuODUpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxuXFxuLmJ0bi0tcGFnZS0taGVhZGVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnRuLS1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmJ0bi0tc3VibWl0LCAuYnRuLS1jYW5jZWwge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXG59XFxuLmJ0bi0tc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnRuLS1jYW5jZWwsIC5idG4tLWFkZCB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC40NSk7XFxufVxcbi5idG4tLWNhbmNlbDpob3ZlciwgLmJ0bi0tY2FuY2VsOmhvdmVyOmJlZm9yZSwgLmJ0bi0tYWRkOmhvdmVyLCAuYnRuLS1hZGQ6aG92ZXI6YmVmb3JlIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuXFxuLm5hdi0taGVhZGluZyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG59XFxuXFxuW2RhdGEtdG9nZ2xlPWFkZC1wcm9qZWN0XSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuW2RhdGEtdG9nZ2xlPWFkZC1wcm9qZWN0XTpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi50by1kb19fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiLCBBcmlhbDtcXG59XFxuXFxuW25hbWU9dGl0bGVdIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbltuYW1lPWRhdGVdIHtcXG4gIGNvbG9yOiAjOGU4ZThlO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idG4tLXN1Ym1pdCxcXG4uYnRuLS1jYW5jZWwge1xcbiAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07XFxufVxcblxcbi5idG4tLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC43KTtcXG59XFxuXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5idG4tLWFkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcbi5idG4tLXNlY3Rpb246YmVmb3JlLCAuYnRuLS1zZWN0aW9uOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC4yNSk7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuLmJ0bi0tc2VjdGlvbjpob3ZlcjpiZWZvcmUsIC5idG4tLXNlY3Rpb246aG92ZXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLmJ0bi0tc2VjdGlvbjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmFmdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4uYnRuLS1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcblxcbi5idG4tLWVkaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC01cHg7XFxuICB0b3A6IDEwcHg7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5idG4tLWVkaXQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSwgLm5hdl9fZmlsdGVycyBsaTpiZWZvcmUsIC5uYXZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICBtYXJnaW46IDAgMC4yNXJlbSAwIDEuMjVyZW07XFxufVxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKaq1xcXCI7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLm5hdiAucHJvamVjdF9saXN0X19hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgadcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK5cXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGNvbG9yOiAjYTE0MjQyO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkIHtcXG4gIGNvbG9yOiAjZTc5YTY3O1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gIGNvbG9yOiAjNWQ5NzViO1xcbn1cXG5cXG4ucHJpb3JpdHktbm9uZSB7XFxuICBjb2xvcjogI2M3YzdjNztcXG59XFxuXFxuLmRhdGUtYWxsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5kYXRlLXRvZGF5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JslxcXCI7XFxufVxcblxcbi5kYXRlLXVwY29taW5nOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JtFxcXCI7XFxufVxcblxcbi5kYXRlLWFueXRpbWU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SzXFxcIjtcXG59XFxuXFxuLmRhdGUtYWxsOjpiZWZvcmUge1xcbiAgY29sb3I6ICM0MDQyOWU7XFxufVxcblxcbi5kYXRlLXRvZGF5OjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYjk5NjM7XFxufVxcblxcbi5kYXRlLXVwY29taW5nOjpiZWZvcmUge1xcbiAgY29sb3I6ICM4ZDVhODk7XFxufVxcblxcbi5kYXRlLWFueXRpbWU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzdhN2E3YTtcXG59XFxuXFxuLmRhdGUtbGF0ZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOTQyMDIwO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OXXFxcIjtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+MqFxcXCI7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JiVxcXCI7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GzXFxcIjtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG59XFxuXFxuLnNvcnQtdGl0bGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzMwNWMzMDtcXG59XFxuXFxuLnNvcnQtZGVzY3JpcHRpb246OmJlZm9yZSB7XFxuICBjb2xvcjogI2ViYjk0ZjtcXG59XFxuXFxuLnNvcnQtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNjY5NzkxO1xcbn1cXG5cXG4uc29ydC1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjYTE0MjQyO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OXXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udG8tZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA2LjVyZW0gMWZyIDYuNXJlbSAycmVtO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtZ2FwOiAxLjVyZW07XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMC43NXJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAudG8tZG8ge1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMywgYXV0bykvYXV0byAxZnIgMnJlbTtcXG4gICAgZ3JpZC1nYXA6IDAuNXJlbTtcXG4gIH1cXG4gIC50by1kb19fY2hlY2sge1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gIH1cXG4gIC50by1kb19fcHJpb3JpdHkge1xcbiAgICBncmlkLXJvdzogMTtcXG4gIH1cXG59XFxuLnRvLWRvOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4udG8tZG9fX2NoZWNrIHtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG59XFxuLnRvLWRvOmhvdmVyIC5idG4tLWVkaXQge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBsaW5lYXI7XFxufVxcblxcbi5hZGRfX2NvbnRlbnQsXFxuLmVkaXRfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG59XFxuLmFkZF9fY29udGVudC0tdG9kbyxcXG4uZWRpdF9fY29udGVudC0tdG9kbyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbn1cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0LFxcbi5lZGl0X19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgcGFkZGluZzogMC4xNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbltuYW1lPXRpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyxcXG4uZWRpdF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHksXFxuLmVkaXRfX3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFkZF9fcHJpb3JpdHkgaW5wdXRbdHlwZT1yYWRpb10sXFxuLmVkaXRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAxLjY1cmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDtcXG4gIGxlZnQ6IDE1cHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNnB4O1xcbiAgbGVmdDogMTRweDtcXG59XFxuLmFkZC1wcmlvcml0eSBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4gIC5hZGQtcHJpb3JpdHkge1xcbiAgICByaWdodDogLTEwcHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuICB9XFxuICAuYWRkLXByaW9yaXR5OmJlZm9yZSB7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbiAgLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICAgIHJpZ2h0OiAxNHB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcbiAgfVxcbn1cXG5cXG4uYWRkX19maW5pc2gsXFxuLmVkaXRfX2ZpbmlzaCB7XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxubGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGFnZV9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6ICMyYTJiNjg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCBsaTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGJhY2tncm91bmQ6ICNlZWYwZjE7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIHBhZGRpbmc6IDJyZW0gMC4yNXJlbSAwIDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcbn1cXG4ubmF2LS1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5Omxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA0KTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIgLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpID4gLmJ0biB7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA3KTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLm1haW4tLWhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNXB4KTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5tYWluLS1oaWRkZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcblxcbi5zZWN0aW9uX19uYW1lX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNlY3Rpb25fX25hbWVfX2NvbnRhaW5lcjpob3ZlciAuYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zYXNzL21haW4uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2Jhc2UvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2Jhc2UvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL3V0aWxzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL3V0aWxzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX2ljb25zLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL190b2RvLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL19kcm9wZG93bi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19mb3JtLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19uYXYuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9fbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjs7O0NBQUE7QUFLQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QURDRDs7QUNDQSxnREFBQTtBQUNBOztFQUVDLGNBQUE7QURFRDs7QUNBQTtFQUNDLGNBQUE7QURHRDs7QUNEQTtFQUNDLGdCQUFBO0FESUQ7O0FDRkE7RUFDQyxZQUFBO0FES0Q7O0FDSEE7O0VBRUMsV0FBQTtF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QUE7QUxtU0Y7QU10UkU7RUFDRSxZQUFBO0VBQ0EsNkJIUmE7QUhnU2pCO0FNclJFO0VBQ0UsWUhxQ087RUVwRFQsa0NBQUE7RUFDQSxnQkFBQTtBTHVTRjtBTXJSRTtFQUNFLFlBQUE7RUR6QkYsa0NBQUE7RUFDQSxnQkFBQTtBTGlURjs7QU1sUkU7RUFDRSxjSHRCYTtBSDJTakI7O0FNdFJFO0VBQ0UsY0h0QmE7QUgrU2pCOztBTTFSRTtFQUNFLGNIdEJhO0FIbVRqQjs7QU05UkU7RUFDRSxjSHRCYTtBSHVUakI7O0FLdlRJO0VBQ0UsWUZ5Qk87QUhpU2I7O0FLM1RJO0VBQ0UsWUZ5Qk87QUhxU2I7O0FLL1RJO0VBQ0UsWUZ5Qk87QUh5U2I7O0FLblVJO0VBQ0UsWUZ5Qk87QUg2U2I7O0FLL1RJO0VBQ0UsY0ZGTztBSG9VYjs7QUtuVUk7RUFDRSxjRkZPO0FId1ViOztBS3ZVSTtFQUNFLGNGRk87QUg0VWI7O0FLM1VJO0VBQ0UsY0ZGTztBSGdWYjs7QUsvVUk7RUFDRSxjRkZPO0FIb1ZiOztBTTVUQTtFQUNFLFlBQUE7RUFDQSxjSHhDYztFRUNkLGtDQUFBO0VBQ0EsZ0JBQUE7RUN3Q0EscUJBQUE7QU5nVUY7O0FLbldJO0VBQ0UsWUZzQ087QUhnVWI7O0FLdldJO0VBQ0UsWUZzQ087QUhvVWI7O0FLM1dJO0VBQ0UsWUZzQ087QUh3VWI7O0FLL1dJO0VBQ0UsWUZzQ087QUg0VWI7O0FLM1dJO0VBQ0UsY0ZNTztBSHdXYjs7QUsvV0k7RUFDRSxjRk1PO0FINFdiOztBS25YSTtFQUNFLGNGTU87QUhnWGI7O0FLdlhJO0VBQ0UsY0ZNTztBSG9YYjs7QU12VkE7RUFDRSxZQUFBO0VEbkRBLGtDQUFBO0VBQ0EsZ0JBQUE7QUw4WUY7O0FPclpBO0VBQ0UsYUFBQTtFQUNBLGtEQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QVB3WkY7QU90WkU7RUFYRjtJQVlJLDRDQUFBO0lBQ0EsZ0JBQUE7RVB5WkY7RU92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c2V0IFxcXCJVVEYtOFxcXCI7XFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcXG59XFxuXFxuLm5vLWRpc3BsYXkge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5LFxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjk7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5bY29udGVudGVkaXRhYmxlXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbltjb250ZW50ZWRpdGFibGVdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDUpO1xcbn1cXG5bY29udGVudGVkaXRhYmxlXTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC44NSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG5cXG4uYnRuLS1wYWdlLS1oZWFkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWNhbmNlbCwgLmJ0bi0tYWRkIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjQ1KTtcXG59XFxuLmJ0bi0tY2FuY2VsOmhvdmVyLCAuYnRuLS1jYW5jZWw6aG92ZXI6YmVmb3JlLCAuYnRuLS1hZGQ6aG92ZXIsIC5idG4tLWFkZDpob3ZlcjpiZWZvcmUge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9ZGF0ZV0ge1xcbiAgY29sb3I6ICM4ZThlOGU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG5cXG4uYnRuLS1jYW5jZWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmJ0bi0tYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbi5idG4tLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuLmJ0bi0tc2VjdGlvbjpiZWZvcmUsIC5idG4tLXNlY3Rpb246YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIGhlaWdodDogMnB4O1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmhvdmVyOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjpob3ZlcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5idG4tLXNlY3Rpb246YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5idG4tLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJ0bi0tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuXFxuLmJ0bi0tZWRpdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTVweDtcXG4gIHRvcDogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmJ0bi0tZWRpdDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43NSk7XFxufVxcblxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlLCAubmF2X19maWx0ZXJzIGxpOmJlZm9yZSwgLm5hdl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gIG1hcmdpbjogMCAwLjI1cmVtIDAgMS4yNXJlbTtcXG59XFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pqrXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4ubmF2IC5wcm9qZWN0X2xpc3RfX2FkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm5hdl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5wcmlvcml0eS1tZWQge1xcbiAgY29sb3I6ICNlNzlhNjc7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6ICM1ZDk3NWI7XFxufVxcblxcbi5wcmlvcml0eS1ub25lIHtcXG4gIGNvbG9yOiAjYzdjN2M3O1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GzXFxcIjtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74myXFxcIjtcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74m0XFxcIjtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLNcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb2xvcjogIzQwNDI5ZTtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ViOTk2MztcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb2xvcjogIzhkNWE4OTtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbn1cXG5cXG4uZGF0ZS1sYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM5NDIwMjA7XFxufVxcblxcbi5uYXYtLWhlYWRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG59XFxuXFxuLnNvcnQtdGl0bGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74yoXFxcIjtcXG59XFxuXFxuLnNvcnQtZGVzY3JpcHRpb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mJXFxcIjtcXG59XFxuXFxuLnNvcnQtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uc29ydC1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK5cXFwiO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjMzA1YzMwO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWJiOTRmO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM2Njk3OTE7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5tYWluX19oZWFkZXIgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50by1kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYuNXJlbSAxZnIgNi41cmVtIDJyZW07XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1nYXA6IDEuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwLjc1cmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIC50by1kbyB7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCBhdXRvKS9hdXRvIDFmciAycmVtO1xcbiAgICBncmlkLWdhcDogMC41cmVtO1xcbiAgfVxcbiAgLnRvLWRvX19jaGVjayB7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgfVxcbiAgLnRvLWRvX19wcmlvcml0eSB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgfVxcbn1cXG4udG8tZG86bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi50by1kb19fY2hlY2sge1xcbiAgbWFyZ2luLXRvcDogN3B4O1xcbn1cXG4udG8tZG86aG92ZXIgLmJ0bi0tZWRpdCB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG5cXG4uZHJvcGRvd24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGxpbmVhcjtcXG59XFxuXFxuLmFkZF9fY29udGVudCxcXG4uZWRpdF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbn1cXG4uYWRkX19jb250ZW50LS10b2RvLFxcbi5lZGl0X19jb250ZW50LS10b2RvIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxufVxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3QsXFxuLmVkaXRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBwYWRkaW5nOiAwLjE1cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuW25hbWU9dGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG5cXG4uYWRkX19kZXRhaWxzLFxcbi5lZGl0X19kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkX19wcmlvcml0eSxcXG4uZWRpdF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWRkX19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSxcXG4uZWRpdF9fcHJpb3JpdHkgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGVmdDogLTEwcHg7XFxuICB0b3A6IDEuNjVyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4O1xcbiAgbGVmdDogMTVweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC02cHg7XFxuICBsZWZ0OiAxNHB4O1xcbn1cXG4uYWRkLXByaW9yaXR5IGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgLmFkZC1wcmlvcml0eSB7XFxuICAgIHJpZ2h0OiAtMTBweDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG4gIC5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuICB9XFxuICAuYWRkLXByaW9yaXR5OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDE0cHg7XFxuICAgIGxlZnQ6IGluaXRpYWw7XFxuICB9XFxufVxcblxcbi5hZGRfX2ZpbmlzaCxcXG4uZWRpdF9fZmluaXNoIHtcXG4gIG1hcmdpbjogMC41cmVtIDFyZW07XFxufVxcblxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYWdlX19oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogIzJhMmI2ODtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIGxpOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5uYXYge1xcbiAgYmFja2dyb3VuZDogI2VlZjBmMTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgcGFkZGluZzogMnJlbSAwLjI1cmVtIDAgMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxufVxcbi5uYXYtLWhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG4ubmF2X19jYXRlZ29yeSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuLm5hdl9fY2F0ZWdvcnk6bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDQpO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaTpob3ZlciAuYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkgPiAuYnRuIHtcXG4gIGZsZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDcpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4ubWFpbi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1cHgpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1haW4tLWhpZGRlbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuLnNlY3Rpb25fX25hbWVfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc2VjdGlvbl9fbmFtZV9fY29udGFpbmVyOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXG5cXHQmOmZvY3VzIHtcXG5cXHRcXHRvdXRsaW5lOiBub25lO1xcblxcdH1cXG59XFxuXFxuKiB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogNTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjI1ZW0pO1xcbn1cXG5cXG4ubm8tZGlzcGxheSB7XFxuXFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cIixcImJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbiAgZm9udC1zaXplOiAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMDUpO1xcbiAgfVxcblxcbiAgJjpmb2N1cyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjg1KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjI1cmVtIC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxuXFxuLmJ0biB7XFxuICAmLS1wYWdlLS1oZWFkZXIge1xcbiAgICBjb2xvcjogJGNvbG9yLWhlYWRlcjtcXG4gIH1cXG5cXG4gICYtLWljb24ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxuXFxuICAmLS1zdWJtaXQsXFxuICAmLS1jYW5jZWwge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IC44NWVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLS41cHg7XFxuICB9XFxuXFxuICAmLS1zdWJtaXQge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG5cXG4gICYtLWNhbmNlbCxcXG4gICYtLWFkZCB7XFxuICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNDUpO1xcblxcbiAgICAmOmhvdmVyLFxcbiAgICAmOmhvdmVyOmJlZm9yZSB7XFxuICAgICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43NSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtLXNlY3Rpb24ge1xcbiAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43NSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gTmF2XFxuXFxuLm5hdiB7XFxuICAmLS1oZWFkaW5nIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcXG4gIH1cXG59XFxuXFxuW2RhdGEtdG9nZ2xlPVxcXCJhZGQtcHJvamVjdFxcXCJdIHtcXG4gIGNvbG9yOiByZ2JhKCMwMDAsIC43NSk7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6ICMwMDA7XFxuICB9XFxuXFxufVxcblxcbi5tYWluX19oZWFkZXIgYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4udG8tZG9fX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8vIEZvcm1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG59XFxuXFxuW25hbWU9XFxcInRpdGxlXFxcIl0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9XFxcImRhdGVcXFwiXSB7XFxuICBjb2xvcjogJGNvbG9yLWZvcm07XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVwiLFwiLy8gRm9udHNcXG4kZm9udC1wcmltYXJ5OiAnTmFudW0gR290aGljJywgQXJpYWw7XFxuXFxuXFxuLy8gQ29sb3JzXFxuJGNvbG9yLXByaW1hcnk6IHJnYig0MiwgNDMsIDEwNCk7XFxuJGNvbG9yLXNlY29uZGFyeTogcmdiKDIzOCwgMjQwLCAyNDEpO1xcblxcbiRjb2xvci1oZWFkZXI6ICNmZmY7XFxuJGNvbG9yLXByb2plY3RzOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuJGNvbG9yLWZvcm06IHJnYigxNDIsIDE0MiwgMTQyKTtcXG5cXG4kY29sb3ItcHJpb3JpdHk6IChcXG4gIGhpZ2g6IHJnYigxNjEsIDY2LCA2NiksXFxuICBtZWQ6IHJnYigyMzEsIDE1NCwgMTAzKSxcXG4gIGxvdzogcmdiKDkzLCAxNTEsIDkxKSxcXG4gIG5vbmU6IHJnYigxOTksIDE5OSwgMTk5KVxcbik7XFxuXFxuJGNvbG9yLWRhdGU6IChcXG4gIGFsbDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTUlKSxcXG4gIHRvZGF5OiByZ2IoMjM1LCAxNTMsIDk5KSxcXG4gIHVwY29taW5nOiByZ2IoMTQxLCA5MCwgMTM3KSxcXG4gIGFueXRpbWU6IHJnYigxMjIsIDEyMiwgMTIyKSxcXG4gIGxhdGU6IHJnYigxNDgsIDMyLCAzMilcXG4pO1xcblxcbiRjb2xvci1zb3J0OiAoXFxuICB0aXRsZTogcmdiKDQ4LCA5MiwgNDgpLFxcbiAgZGVzY3JpcHRpb246IHJnYigyMzUsIDE4NSwgNzkpLFxcbiAgZGF0ZTogcmdiKDEwMiwgMTUxLCAxNDUpLFxcbiAgcHJpb3JpdHk6IG1hcC1nZXQoJGNvbG9yLXByaW9yaXR5LCBoaWdoKVxcbik7XFxuXFxuLy8gSWNvbnNcXG5cXG4kaWNvbi1wcmlvcml0eTogXFxcIlxcXFxmMDJlXFxcIjtcXG5cXG4kaWNvbnMtZGF0ZTogKFxcbiAgYWxsOiBcXFwiXFxcXGYwNzNcXFwiLFxcbiAgdG9kYXk6IFxcXCJcXFxcZjI3MlxcXCIsXFxuICB1cGNvbWluZzogXFxcIlxcXFxmMjc0XFxcIixcXG4gIGFueXRpbWU6IFxcXCJcXFxcZjEzM1xcXCIsXFxuKTtcXG5cXG4kaWNvbnMtY2FyZXQ6IChcXG4gIHVwOiBcXFwiXFxcXGYwZDhcXFwiLFxcbiAgZG93bjogXFxcIlxcXFxmMGQ3XFxcIixcXG4gIHJpZ2h0OiBcXFwiXFxcXGYwZGFcXFwiXFxuKTtcXG5cXG4kaWNvbnMtc29ydDogKFxcbiAgdGl0bGU6IFxcXCJcXFxcZjMyOFxcXCIsXFxuICBkZXNjcmlwdGlvbjogXFxcIlxcXFxmMjQ5XFxcIixcXG4gIGRhdGU6IFxcXCJcXFxcZjA3M1xcXCIsXFxuICBwcmlvcml0eTogJGljb24tcHJpb3JpdHksXFxuKTtcXG5cXG4kaWNvbi1hZGQ6IFxcXCJcXFxcZjA2N1xcXCI7XFxuJGljb24tZWRpdDogXFxcIlxcXFxmMDQ0XFxcIjtcXG5cXG4vLyBPdGhlcnNcXG4kbWFyZ2luLWluZGVudDogMCAuMjVyZW0gMCAxLjI1cmVtO1wiLFwiYnV0dG9uIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgXFxuICAmOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAuMTVyZW0gLjVyZW07XFxufVxcbiAgXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogLjI1cmVtO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43KTtcXG4gIH1cXG59XFxuXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoI2ZmZiwgLjUpO1xcbn1cXG5cXG4uYnRuLS1hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICRpY29uLWFkZDtcXG4gIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbi5idG4tLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG5cXG4gICY6YmVmb3JlLFxcbiAgJjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMjUpO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgfVxcblxcbiAgJjpob3ZlcjpiZWZvcmUsXFxuICAmOmhvdmVyOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiAgfVxcblxcbiAgJjpiZWZvcmUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICB9XFxuXFxuICAmOmFmdGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICB9XFxufVxcblxcbi5idG4tLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlblxcbn1cXG5cXG4uYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxufVxcblxcbi5idG4tLWVkaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC01cHg7XFxuICB0b3A6IDEwcHg7XFxuICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiAgZGlzcGxheTogbm9uZTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjc1KTtcXG4gIH1cXG5cXG59XCIsXCJAbWl4aW4gZm9udC1hd2Vzb21lLTQwMCgpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5AbWl4aW4gZm9udC1hd2Vzb21lLTcwMCgpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5AbWl4aW4gaWNvbi1jb250ZW50KCR0YXJnZXQsICRtYXApIHtcXG4gIEBlYWNoICRrZXksICRpY29uIGluICRtYXAge1xcbiAgICAuI3skdGFyZ2V0fS0jeyRrZXl9OjpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6ICRpY29uO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtaXhpbiBpY29uLWNvbG9yKCR0YXJnZXQsICRtYXApIHtcXG4gIEBlYWNoICRrZXksICRjb2xvciBpbiAkbWFwIHtcXG4gICAgLiN7JHRhcmdldH0tI3ska2V5fTo6YmVmb3JlIHtcXG4gICAgICBjb2xvcjogJGNvbG9yO1xcbiAgICB9XFxuICB9XFxufVwiLFwiLy8gTkFWLUlDT05TXFxuXFxuLm5hdiB7XFxuICAmX190by1kbyBsaTpiZWZvcmUsXFxuICAmX19wcm9qZWN0cyBsaTpiZWZvcmUsXFxuICAmX19maWx0ZXJzIGxpOmJlZm9yZSxcXG4gICZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICAgIG1hcmdpbjogJG1hcmdpbi1pbmRlbnQ7XFxuICB9XFxuXFxuICAmX190by1kbyBsaTpiZWZvcmUsXFxuICAmX19zb3J0cyBsaTpiZWZvcmUge1xcbiAgICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNDAwKCk7XFxuICB9XFxuXFxuICAmX19wcm9qZWN0cyBsaTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4pqrXFxcIjtcXG4gICAgY29sb3I6ICRjb2xvci1wcm9qZWN0cztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0X2xpc3RfX2FkZDpiZWZvcmUge1xcbiAgICBjb250ZW50OiAkaWNvbi1hZGQ7XFxuICAgIEBpbmNsdWRlIGZvbnQtYXdlc29tZS03MDAoKTtcXG4gIH1cXG5cXG4gICZfX2ZpbHRlcnMgbGk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDJlXFxcIjtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTQwMCgpO1xcbiAgfVxcbn1cXG5cXG4vLyBDb2xvciBQcmlvcml0eSBJY29uc1xcbkBlYWNoICRsZXZlbCwgJGNvbG9yIGluICRjb2xvci1wcmlvcml0eSB7XFxuICAucHJpb3JpdHktI3skbGV2ZWx9IHtcXG4gICAgY29sb3I6ICRjb2xvcjtcXG4gIH1cXG59XFxuXFxuLy8gRGF0ZSBJY29uc1xcbkBpbmNsdWRlIGljb24tY29udGVudCgnZGF0ZScsICRpY29ucy1kYXRlKTtcXG5AaW5jbHVkZSBpY29uLWNvbG9yKCdkYXRlJywgJGNvbG9yLWRhdGUpO1xcblxcbi8vIENhdGVnb3J5IEljb25zXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogbWFwLWdldCgkaWNvbnMtY2FyZXQsIGRvd24pO1xcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbiAgbWFyZ2luLXJpZ2h0OiAuNzVyZW07XFxufVxcblxcbi8vIFNvcnQgSWNvbnNcXG5AaW5jbHVkZSBpY29uLWNvbnRlbnQoJ3NvcnQnLCAkaWNvbnMtc29ydCk7XFxuQGluY2x1ZGUgaWNvbi1jb2xvcignc29ydCcsICRjb2xvci1zb3J0KTtcXG5cXG4vLyBNQUlOIElDT05TXFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogbWFwLWdldCgkaWNvbnMtY2FyZXQsIGRvd24pO1xcbiAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbn1cIixcIi50by1kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYuNXJlbSAxZnIgNi41cmVtIDJyZW07XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1nYXA6IDEuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAuNzVyZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMSk7XFxuXFxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMywgYXV0bykgLyBhdXRvIDFmciAycmVtO1xcbiAgICBncmlkLWdhcDogLjVyZW07XFxuXFxuICAgICZfX2NoZWNrIHtcXG4gICAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICB9XFxuXFxuICAgICZfX3ByaW9yaXR5IHtcXG4gICAgICBncmlkLXJvdzogMTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJjpsYXN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgfVxcbiAgXFxuICAmX19jaGVjayB7XFxuICAgIG1hcmdpbi10b3A6IDdweDtcXG4gIH1cXG5cXG4gICY6aG92ZXIgLmJ0bi0tZWRpdCB7XFxuICAgIGRpc3BsYXk6IGluaXRpYWw7XFxuICB9XFxuXFxufVwiLFwiLmRyb3Bkb3duIHtcXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzIGxpbmVhcjtcXG59XCIsXCIuYWRkX19jb250ZW50LFxcbi5lZGl0X19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG5cXG4gICYtLXRvZG8ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcXG4gIH1cXG5cXG4gICYtLXByb2plY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBwYWRkaW5nOiAuMTVyZW07XFxuICB9XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IC4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuW25hbWU9XFxcInRpdGxlXFxcIl0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyxcXG4uZWRpdF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHksXFxuLmVkaXRfX3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG4gIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGVmdDogLTEwcHg7XFxuICB0b3A6IDEuNjVyZW07XFxuICB6LWluZGV4OiAxO1xcblxcbiAgJjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTVweDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gICY6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTZweDtcXG4gICAgbGVmdDogMTRweDtcXG4gIH1cXG5cXG4gIGxhYmVsIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgLjVyZW07XFxuICB9XFxuXFxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4gICAgcmlnaHQ6IC0xMHB4O1xcbiAgICBsZWZ0OiBpbml0aWFsO1xcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgcmlnaHQ6IDE1cHg7XFxuICAgICAgbGVmdDogaW5pdGlhbDtcXG4gICAgfVxcbiAgXFxuICAgICY6YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAxNHB4O1xcbiAgICAgIGxlZnQ6IGluaXRpYWw7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmFkZF9fZmluaXNoLFxcbi5lZGl0X19maW5pc2gge1xcbiAgbWFyZ2luOiAuNXJlbSAxcmVtO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoI2ZmZiwgLjUpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLFwiLnBhZ2VfX2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgXFxuXFxuICB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuXFxuICAgICYgbGk6bGFzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIH1cXG4gIH1cXG59XCIsXCIubmF2IHtcXG4gIFxcbiAgYmFja2dyb3VuZDogJGNvbG9yLXNlY29uZGFyeTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4yNSk7XFxuICBwYWRkaW5nOiAycmVtIC4yNXJlbSAwIDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW47XFxuXFxuICAmLS1oaWRkZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgfVxcblxcbiAgJl9fY2F0ZWdvcnkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMSk7XFxuXFxuICAgICY6bGFzdC1vZi10eXBlIHtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICB9XFxuXFxuICAgIGxpIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIFxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjA0KTtcXG4gICAgICB9XFxuXFxuICAgICAgJjpob3ZlciAuYnRuLS1kZWxldGUge1xcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcXG4gICAgICB9XFxuXFxuICAgICAgPiAuYnRuIHtcXG4gICAgICAgIC8vIE1ha2VzIHRoZSB3aG9sZSBsaW5lIGNsaWNrYWJsZSBpbnN0ZWFkIG9mIGp1c3QgdGhlIHRleHQuXFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAmLS1oZWFkaW5nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjA3KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxufVwiLFwibWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4ubWFpbi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1cHgpO1xcblxcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXFxuICB9XFxufVxcblxcbi5zZWN0aW9uX19uYW1lX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICY6aG92ZXIgLmJ0bi0tZGVsZXRlIHtcXG4gICAgZGlzcGxheTogaW5pdGlhbDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFByb2plY3RDb250cm9sbGVyIH0gZnJvbSAnLi9Qcm9qZWN0Q29udHJvbGxlcidcbmltcG9ydCB7IFByb2plY3RNb2RlbCB9IGZyb20gJy4vUHJvamVjdE1vZGVsJ1xuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tICcuL1Byb2plY3RWaWV3J1xuaW1wb3J0IHsgVG9kb0xpc3RDb250cm9sbGVyIH0gZnJvbSAnLi9Ub2RvTGlzdENvbnRyb2xsZXInXG5pbXBvcnQgeyBUb2RvTGlzdE1vZGVsIH0gZnJvbSAnLi9Ub2RvTGlzdE1vZGVsJ1xuaW1wb3J0IHsgVG9kb0xpc3RWaWV3IH0gZnJvbSAnLi9Ub2RvTGlzdFZpZXcnXG5cbmV4cG9ydCBjbGFzcyBBcHBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vZGVsLCB2aWV3KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgdGhpcy52aWV3ID0gdmlld1xuXG4gICAgdGhpcy52aWV3LmJpbmRBZGRQcm9qZWN0KHRoaXMuaGFuZGxlQWRkUHJvamVjdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGVsZXRlUHJvamVjdCh0aGlzLmhhbmRsZURlbGV0ZVByb2plY3QuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZENoYW5nZU5hbWUodGhpcy5oYW5kbGVDaGFuZ2VOYW1lLmJpbmQodGhpcykpXG5cbiAgICB0aGlzLnZpZXcuYmluZE5hdlRvZ2dsZSh0aGlzLmhhbmRsZU5hdlRvZ2dsZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kVG9nZ2xlKHRoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREaXNwbGF5QWxsKHRoaXMuaGFuZGxlRGlzcGxheUFsbC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kUHJpb3JpdHkodGhpcy5oYW5kbGVQcmlvcml0eS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGF0ZVRvZGF5KHRoaXMuaGFuZGxlVG9kYXkuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERhdGVVcGNvbWluZyh0aGlzLmhhbmRsZVVwY29taW5nLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREYXRlQW55dGltZSh0aGlzLmhhbmRsZUFueXRpbWUuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZEhvbWUodGhpcy5oYW5kbGVIb21lLmJpbmQodGhpcykpXG4gIH1cblxuICAvLyBEaXNwbGF5IHRoZSBuZXcgcHJvamVjdCBhbmQgY3JlYXRlIGEgYnV0dG9uIGxpbmtlZCB0byB0aGUgcHJvamVjdCBpbiB0aGUgbmF2aWdhdGlvbi5cbiAgaGFuZGxlQWRkUHJvamVjdCAobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIobmV3IFByb2plY3RNb2RlbChuYW1lKSwgbmV3IFByb2plY3RWaWV3KFByb2plY3RNb2RlbC5jb3VudGVyKSlcbiAgICB0aGlzLm1vZGVsLmFkZFByb2plY3QocHJvamVjdClcblxuICAgIHByb2plY3QubW9kZWwuYWRkVG9kb0xpc3QobmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCgnRGVmYXVsdCcsIHByb2plY3QubW9kZWwuaWQpLCBuZXcgVG9kb0xpc3RWaWV3KCkpKVxuICAgIHRoaXMuZGlzcGxheVByb2plY3QocHJvamVjdClcbiAgICB0aGlzLnZpZXcucmVuZGVyQnRuKG5hbWUsIHByb2plY3QubW9kZWwuaWQpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvamVjdD1cInByb2plY3QtJHtwcm9qZWN0Lm1vZGVsLmlkfVwiXWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVOYXZDbGljayhwcm9qZWN0KSlcbiAgfVxuXG4gIC8vIExpbmtzIHRoZSBuZXdseSBjcmVhdGVkIG5hdmlnYXRpb24gYnV0dG9uIHRvIGl0cyBwcm9qZWN0XG4gIGhhbmRsZU5hdkNsaWNrIChwcm9qZWN0KSB7XG4gICAgdGhpcy5kaXNwbGF5UHJvamVjdChwcm9qZWN0KVxuICB9XG5cbiAgZGlzcGxheVByb2plY3QgKHByb2plY3QpIHtcbiAgICBwcm9qZWN0LnZpZXcucmVuZGVyTmFtZShwcm9qZWN0Lm1vZGVsLm5hbWUsIHByb2plY3QubW9kZWwuaWQpXG4gICAgcHJvamVjdC52aWV3LnJlbmRlcihwcm9qZWN0Lm1vZGVsLnRvZG9MaXN0cylcbiAgICBwcm9qZWN0LnZpZXcucmVuZGVyRm9ybShwcm9qZWN0Lm1vZGVsLmZvcm0pXG4gICAgcHJvamVjdC52aWV3LmdldEZvcm0oKVxuICB9XG5cbiAgLy8gV2hlbiBhIHByb2plY3QgaXMgZGVsZXRlZCwgaXQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBtb2RlbCBhbmQgZnJvbSB0aGUgbmF2aWdhdGlvbi5cbiAgLy8gVGhlIEhvbWVwYWdlIGlzIGRpc3BsYXllZCBpbnN0ZWFkLlxuICBoYW5kbGVEZWxldGVQcm9qZWN0IChpZCkge1xuICAgIHRoaXMubW9kZWwuZGVsZXRlUHJvamVjdChpZClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0PVwicHJvamVjdC0ke2lkfVwiXWApLnJlbW92ZSgpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdD1cInByb2plY3QtMVwiXScpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlTmFtZSAoaWQsIG5hbWUpIHtcbiAgICB0aGlzLm1vZGVsLmVkaXRQcm9qZWN0KGlkLCBuYW1lKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWZpbHRlcj1cInByb2plY3QtJHtpZH1cIl1gKS50ZXh0Q29udGVudCA9IG5hbWVcbiAgfVxuXG4gIC8vIEVuYWJsZSBhbGwgdG9nZ2xlIGJ1dHRvbnNcbiAgaGFuZGxlVG9nZ2xlIChldmVudCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V2ZW50LnRhcmdldC5kYXRhc2V0LnRvZ2dsZX1gKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICB9XG5cbiAgLy8gTW9kaWZ5IHNwYWNlIG9jY3VwaWVkIGJ5IGNvbnRlbnQgd2hlbiB0aGUgbmF2aWdhdGlvbiBpcyBoaWRkZW4gLyBkaXNwbGF5ZWQuXG4gIGhhbmRsZU5hdlRvZ2dsZSAoKSB7XG4gICAgdGhpcy52aWV3Lm5hdi5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWhpZGRlbicpXG4gICAgdGhpcy52aWV3Lm1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnbWFpbi0taGlkZGVuJylcbiAgfVxuXG4gIC8vIEVuYWJsZSBwcmlvcml0eSBmaWx0ZXJzXG4gIGhhbmRsZVByaW9yaXR5IChwcmlvcml0eSkge1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJylcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgaWYgKHRvZG8uZGF0YXNldC5wcmlvcml0eSAhPT0gcHJpb3JpdHkpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNvbXBhcmVzIDIgZGF5cyAodXNlZCBmb3IgZGF0ZSBmaWx0ZXJzKVxuICBfc2FtZURheSAoZGF0ZTEsIGRhdGUyKSB7XG4gICAgY29uc3QgdG9kb0RhdGUgPSBuZXcgRGF0ZShkYXRlMSlcbiAgICBpZiAodG9kb0RhdGUuZ2V0RGF0ZSgpID09PSBkYXRlMi5nZXREYXRlKCkgJiZcbiAgICB0b2RvRGF0ZS5nZXRNb250aCgpID09PSBkYXRlMi5nZXRNb250aCgpICYmXG4gICAgdG9kb0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZTIuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBEYXRlcyBmaWx0ZXJzXG4gIGhhbmRsZVRvZGF5ICgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0aGlzLl9zYW1lRGF5KHRvZG8uZGF0YXNldC5kYXRlLCB0b2RheSkpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVVwY29taW5nICgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICghdGhpcy5fc2FtZURheSh0b2RvLmRhdGFzZXQuZGF0ZSwgdG9kYXkpICYmIG5ldyBEYXRlKHRvZG8uZGF0YXNldC5kYXRlKSA+IHRvZGF5KSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ25vLWRpc3BsYXknKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBbnl0aW1lICgpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0b2RvLmRhdGFzZXQuZGF0ZSAhPT0gJycpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIERpc2FibGUgZmlsdGVyc1xuICBoYW5kbGVEaXNwbGF5QWxsICgpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpKVxuICB9XG5cbiAgLy8gSG9tZSBwYWdlXG4gIGhhbmRsZUhvbWUgKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3Q9XCJwcm9qZWN0LTFcIl0nKS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9jYWxTdG9yYWdlTW9kdWxlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VNb2R1bGUnXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW11cbiAgfVxuXG4gIGFkZFByb2plY3QgKHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdClcbiAgICBwcm9qZWN0LmlkID0gKytBcHBNb2RlbC5jb3VudGVyXG4gICAgbG9jYWxTdG9yYWdlTW9kdWxlLnVwZGF0ZVByb2plY3RMaXN0KHRoaXMucHJvamVjdHMpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0FwcE1vZGVsQ291bnRlcicsIEFwcE1vZGVsLmNvdW50ZXIpXG4gIH1cblxuICBkZWxldGVQcm9qZWN0IChpZCkge1xuICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IGlkKVxuICAgIGxvY2FsU3RvcmFnZU1vZHVsZS51cGRhdGVQcm9qZWN0TGlzdCh0aGlzLnByb2plY3RzKVxuICB9XG5cbiAgZWRpdFByb2plY3QgKGlkLCBuYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5tb2RlbC5pZCA9PT0gK2lkKSB7XG4gICAgICAgIHByb2plY3QubW9kZWwubmFtZSA9IG5hbWVcbiAgICAgICAgbG9jYWxTdG9yYWdlTW9kdWxlLnVwZGF0ZVByb2plY3RMaXN0KHRoaXMucHJvamVjdHMpXG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvamVjdFxuICAgIH0pXG4gIH1cbn1cblxuQXBwTW9kZWwuY291bnRlciA9IDBcbiIsImV4cG9ydCBjbGFzcyBBcHBWaWV3IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIHRoaXMuaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWhvbWUnKVxuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuXG4gICAgLy8gRm9ybSB0byBjcmVhdGUgbmV3IHByb2plY3RzXG4gICAgdGhpcy5wcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLS1wcm9qZWN0IFtuYW1lPVwibmFtZVwiXScpXG4gICAgdGhpcy5wcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC0tcHJvamVjdCcpXG5cbiAgICAvLyBTb3J0IHRhc2tzXG4gICAgdGhpcy5zb3J0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC10aXRsZScpXG4gICAgdGhpcy5zb3J0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1kZXNjcmlwdGlvbicpXG4gICAgdGhpcy5zb3J0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LWRhdGUnKVxuICAgIHRoaXMuc29ydFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtcHJpb3JpdHknKVxuXG4gICAgLy8gRmlsdGVyIHRhc2tzXG4gICAgdGhpcy5kaXNwbGF5QWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmlsdGVyPVwiYWxsXCJdJylcbiAgICB0aGlzLnByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmlsdGVyXj1cInByaW9yaXR5XCJdJylcbiAgICB0aGlzLmRhdGVUb2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbHRlcj1cImRhdGUtdG9kYXlcIl0nKVxuICAgIHRoaXMuZGF0ZVVwY29taW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZmlsdGVyPVwiZGF0ZS11cGNvbWluZ1wiXScpXG4gICAgdGhpcy5kYXRlQW55dGltZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbHRlcj1cImRhdGUtYW55dGltZVwiXScpXG5cbiAgICAvLyBUb2dnbGUgTmF2aWdhdGlvblxuICAgIHRoaXMubmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlPVwibmF2XCJdJylcbiAgICB0aGlzLm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKVxuXG4gICAgLy8gRWRpdCBQcm9qZWN0IE5hbWVcbiAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gJydcbiAgICB0aGlzLl9jaGFuZ2VOYW1lKClcbiAgfVxuXG4gIC8vIEdldCBuZXcgcHJvamVjdCdzIG5hbWVcbiAgZ2V0IF9wcm9qZWN0TmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdElucHV0LnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBJbnB1dCB0byBjcmVhdGUgYSBuZXcgcHJvamVjdFxuICBfcmVzZXRJbnB1dCAoKSB7XG4gICAgdGhpcy5wcm9qZWN0SW5wdXQudmFsdWUgPSAnJ1xuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbiBsaW5rZWQgdG8gdGhlIHByb2plY3RcbiAgcmVuZGVyQnRuIChuYW1lLCBpZCkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2J0bi0tcHJvamVjdCcpXG4gICAgbGkuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBgcHJvamVjdC0ke2lkfWApXG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1maWx0ZXInKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicsIGBwcm9qZWN0LSR7aWR9YClcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbmFtZVxuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tZGVsZXRlJylcbiAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+J1xuXG4gICAgbGkuYXBwZW5kKGJ1dHRvbiwgY2xvc2VCdG4pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kKGxpKVxuICB9XG5cbiAgYmluZEFkZFByb2plY3QgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnByb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBoYW5kbGVyKHRoaXMuX3Byb2plY3ROYW1lKVxuICAgICAgdGhpcy5fcmVzZXRJbnB1dCgpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmREZWxldGVQcm9qZWN0IChoYW5kbGVyKSB7XG4gICAgdGhpcy5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpKSByZXR1cm5cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi0tZGVsZXRlJykpIHtcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnbGknKS5kYXRhc2V0LnByb2plY3Quc2xpY2UoOClcbiAgICAgICAgaGFuZGxlcihpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gTmF2aWdhdGlvbiB0b2dnbGVzXG4gIGJpbmRUb2dnbGUgKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQudG9nZ2xlKSB7XG4gICAgICAgIGhhbmRsZXIoZXZlbnQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmROYXZUb2dnbGUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLm5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICAvLyBIb21lIHBhZ2VcbiAgYmluZEhvbWUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgLy8gRmlsdGVyc1xuICBiaW5kUHJpb3JpdHkgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnByaW9yaXR5QnRuLmZvckVhY2goKHByaW9yaXR5QnRuKSA9PiBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gaGFuZGxlcihldmVudC50YXJnZXQuZGF0YXNldC5maWx0ZXIuc2xpY2UoOSkpKSlcbiAgfVxuXG4gIGJpbmREYXRlVG9kYXkgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmRhdGVUb2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBiaW5kRGF0ZVVwY29taW5nIChoYW5kbGVyKSB7XG4gICAgdGhpcy5kYXRlVXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgYmluZERhdGVBbnl0aW1lIChoYW5kbGVyKSB7XG4gICAgdGhpcy5kYXRlQW55dGltZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBiaW5kRGlzcGxheUFsbCAoaGFuZGxlcikge1xuICAgIHRoaXMuZGlzcGxheUFsbEJ0bi5mb3JFYWNoKChkaXNwbGF5QWxsQnRuKSA9PiBkaXNwbGF5QWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcikpXG4gIH1cblxuICAvLyBFZGl0IFByb2plY3QgTmFtZVxuXG4gIF9jaGFuZ2VOYW1lICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RfX25hbWUnKSkge1xuICAgICAgICB0aGlzLl90ZW1wb3JhcnlOYW1lID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kQ2hhbmdlTmFtZSAoaGFuZGxlcikge1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5fdGVtcG9yYXJ5TmFtZSkge1xuICAgICAgICBoYW5kbGVyKGV2ZW50LnRhcmdldC5pZCwgdGhpcy5fdGVtcG9yYXJ5TmFtZSlcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5TmFtZSA9ICcnXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFByb2plY3RDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vZGVsLCB2aWV3KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgdGhpcy52aWV3ID0gdmlld1xuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlKHRoaXMubW9kZWwudG9kb0xpc3RzKVxuICAgIHRoaXMubW9kZWwuYmluZFByb2plY3RDaGFuZ2UodGhpcy5vblByb2plY3RDaGFuZ2UuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZENoYW5nZU5hbWUodGhpcy5oYW5kbGVFZGl0VG9kb0xpc3QuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERlbGV0ZVNlY3Rpb24odGhpcy5oYW5kbGVEZWxldGVUb2RvTGlzdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kQWRkU2VjdGlvbih0aGlzLmhhbmRsZUFkZFRvZG9MaXN0LmJpbmQodGhpcykpXG4gIH1cblxuICBvblByb2plY3RDaGFuZ2UgKHRvZG9MaXN0cykge1xuICAgIHRoaXMudmlldy5yZW5kZXIodG9kb0xpc3RzKVxuICB9XG5cbiAgaGFuZGxlQWRkVG9kb0xpc3QgKHRvZG9MaXN0KSB7XG4gICAgdGhpcy5tb2RlbC5hZGRUb2RvTGlzdCh0b2RvTGlzdClcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZVRvZG9MaXN0IChpZCkge1xuICAgIHRoaXMubW9kZWwuZGVsZXRlVG9kb0xpc3QoaWQpXG4gIH1cblxuICBoYW5kbGVFZGl0VG9kb0xpc3QgKGlkLCBuYW1lKSB7XG4gICAgdGhpcy5tb2RlbC5lZGl0VG9kb0xpc3QoaWQsIG5hbWUpXG4gIH1cbn1cbiIsImltcG9ydCB7IFNlY3Rpb25Gb3JtIH0gZnJvbSAnLi9TZWN0aW9uRm9ybSdcbmltcG9ydCB7IGxvY2FsU3RvcmFnZU1vZHVsZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlTW9kdWxlJ1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdE1vZGVsIHtcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lID09PSAnJyA/ICdVbnRpdGxlZCcgOiBuYW1lXG4gICAgdGhpcy5pZCA9ICsrUHJvamVjdE1vZGVsLmNvdW50ZXJcbiAgICB0aGlzLnRvZG9MaXN0cyA9IFtdXG4gICAgdGhpcy5mb3JtID0gbmV3IFNlY3Rpb25Gb3JtKHRoaXMuaWQpXG4gIH1cblxuICBfY29tbWl0ICh0b2RvTGlzdHMpIHtcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0b2RvTGlzdHMpXG4gICAgbG9jYWxTdG9yYWdlTW9kdWxlLnVwZGF0ZVRvZG9MaXN0cyh0aGlzLmlkLCB0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGFkZFRvZG9MaXN0ICh0b2RvTGlzdCkge1xuICAgIHRoaXMudG9kb0xpc3RzLnB1c2godG9kb0xpc3QpXG4gICAgdG9kb0xpc3QuaWQgPSB0aGlzLnRvZG9MaXN0cy5sZW5ndGhcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvTGlzdHMpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Byb2plY3RNb2RlbENvdW50ZXInLCBQcm9qZWN0TW9kZWwuY291bnRlcilcbiAgfVxuXG4gIGVkaXRUb2RvTGlzdCAoaWQsIG5hbWUpIHtcbiAgICB0aGlzLnRvZG9MaXN0cyA9IHRoaXMudG9kb0xpc3RzLm1hcCgodG9kb0xpc3QpID0+IHtcbiAgICAgIGlmICh0b2RvTGlzdC5tb2RlbC5pZCA9PT0gK2lkKSB7XG4gICAgICAgIHRvZG9MaXN0Lm1vZGVsLm5hbWUgPSBuYW1lXG4gICAgICB9XG4gICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICB9KVxuICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGRlbGV0ZVRvZG9MaXN0IChpZCkge1xuICAgIHRoaXMudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHMuZmlsdGVyKHRvZG9MaXN0ID0+IHRvZG9MaXN0Lm1vZGVsLmlkICE9PSAraWQpXG4gICAgdGhpcy5fY29tbWl0KHRoaXMudG9kb0xpc3RzKVxuICB9XG5cbiAgYmluZFByb2plY3RDaGFuZ2UgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vblByb2plY3RDaGFuZ2UgPSBjYWxsYmFja1xuICB9XG59XG5cblByb2plY3RNb2RlbC5jb3VudGVyID0gMFxuIiwiaW1wb3J0IHsgVG9kb0xpc3RDb250cm9sbGVyIH0gZnJvbSAnLi9Ub2RvTGlzdENvbnRyb2xsZXInXG5pbXBvcnQgeyBUb2RvTGlzdE1vZGVsIH0gZnJvbSAnLi9Ub2RvTGlzdE1vZGVsJ1xuaW1wb3J0IHsgVG9kb0xpc3RWaWV3IH0gZnJvbSAnLi9Ub2RvTGlzdFZpZXcnXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuL1Byb2plY3RNb2RlbCdcblxuZXhwb3J0IGNsYXNzIFByb2plY3RWaWV3IHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy5zZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9ucycpXG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX25hbWUnKVxuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuX3RlbXBvcmFyeU5hbWUgPSAnJ1xuICAgIHRoaXMuX2NoYW5nZU5hbWUoKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0XG4gIHJlbmRlck5hbWUgKG5hbWUsIGlkKSB7XG4gICAgdGhpcy5uYW1lLmlubmVySFRNTCA9IG5hbWVcbiAgICB0aGlzLm5hbWUuc2V0QXR0cmlidXRlKCdpZCcsIGlkKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBhZGQgc2VjdGlvbiBmb3JtXG4gIHJlbmRlckZvcm0gKGZvcm0pIHtcbiAgICBmb3JtLnJlbmRlcigpXG4gIH1cblxuICAvLyBHZXQgdGhlIGFkZCBzZWN0aW9uIGZvcm0gaW5wdXRzXG4gIGdldEZvcm0gKCkge1xuICAgIHRoaXMubmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlY3Rpb24tZm9ybS0ke3RoaXMuaWR9IFtuYW1lPVwic2VjdGlvblwiXWApXG4gICAgdGhpcy5zdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH0gLmJ0bi0tc3VibWl0YClcbiAgfVxuXG4gIC8vIEdldCBTZWN0aW9uJ3MgTmFtZSBmcm9tIHRoZSBmb3JtXG4gIGdldCBfc2VjdGlvbk5hbWUgKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVJbnB1dC52YWx1ZVxuICB9XG5cbiAgLy8gUmVzZXQgZm9ybSBpbnB1dFxuICBfcmVzZXRJbnB1dCAoKSB7XG4gICAgdGhpcy5uYW1lSW5wdXQudmFsdWUgPSAnJ1xuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBwcm9qZWN0IGJ5IHJlbmRlcmluZyBldmVyeSBzZWN0aW9uXG4gIHJlbmRlciAodG9kb0xpc3RzKSB7XG4gICAgd2hpbGUgKHRoaXMuc2VjdGlvbnMuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5zZWN0aW9ucy5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB0b2RvTGlzdCBvZiB0b2RvTGlzdHMpIHtcbiAgICAgIHRvZG9MaXN0LnZpZXcuY3JlYXRlU2VjdGlvbigpXG4gICAgICB0b2RvTGlzdC52aWV3LnJlbmRlck5hbWUodG9kb0xpc3QubW9kZWwubmFtZSlcbiAgICAgIHRvZG9MaXN0LnZpZXcucmVuZGVyKHRvZG9MaXN0Lm1vZGVsLnRvZG9zKVxuICAgICAgdG9kb0xpc3Qudmlldy5yZW5kZXJGb3JtKHRvZG9MaXN0Lm1vZGVsLmZvcm0pXG4gICAgICB0b2RvTGlzdC52aWV3LmdldEZvcm0odG9kb0xpc3QubW9kZWwuZm9ybSlcbiAgICAgIHRvZG9MaXN0LmJpbmRBZGQoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEFsbG93IHNlY3Rpb24gbmFtZSBlZGl0c1xuICBfY2hhbmdlTmFtZSAoKSB7XG4gICAgdGhpcy5zZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWN0aW9uX19uYW1lJykpIHtcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5TmFtZSA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmluZENoYW5nZU5hbWUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX3RlbXBvcmFyeU5hbWUpIHtcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnW2NsYXNzXj1cInNlY3Rpb24tXCJdJykuY2xhc3NMaXN0WzBdLnNsaWNlKDgpXG4gICAgICAgIGhhbmRsZXIoaWQsIHRoaXMuX3RlbXBvcmFyeU5hbWUpXG4gICAgICAgIHRoaXMuX3RlbXBvcmFyeU5hbWUgPSAnJ1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kQWRkU2VjdGlvbiAoaGFuZGxlcikge1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC0tc2VjdGlvbicpKSB7XG4gICAgICAgIGhhbmRsZXIobmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCh0aGlzLl9zZWN0aW9uTmFtZSwgUHJvamVjdE1vZGVsLmNvdW50ZXIpLCBuZXcgVG9kb0xpc3RWaWV3KFByb2plY3RNb2RlbC5jb3VudGVyKSkpXG4gICAgICAgIHRoaXMuX3Jlc2V0SW5wdXQoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kRGVsZXRlU2VjdGlvbiAoaGFuZGxlcikge1xuICAgIHRoaXMuc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLmJ0bi0tZGVsZXRlJykpIHtcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmJ0bi0tZGVsZXRlJykuZGF0YXNldC5kZWxldGVcbiAgICAgICAgaGFuZGxlcihpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2VjdGlvbkZvcm0ge1xuICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX3NlY3Rpb24nKVxuICAgIGZvcm1Db250YWluZXIuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGZvcm1CdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tZHJvcGRvd24nLCAnYnRuLS1zZWN0aW9uJylcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGZvcm1CdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfWApXG4gICAgZm9ybUJ0bi5pbm5lckhUTUwgPSAnQWRkIFNlY3Rpb24nXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdhZGQnLCAnYWRkLS1zZWN0aW9uJywgJ2Ryb3Bkb3duJywgJ2hpZGRlbicpXG4gICAgZm9ybS5pZCA9IGBzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfWBcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWRkX19jb250ZW50JywgJ2FkZF9fY29udGVudC0tc2VjdGlvbicpXG5cbiAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzZWN0aW9uJylcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VjdGlvblxcJ3MgTmFtZScpXG4gICAgbGFiZWxOYW1lLmFwcGVuZChuYW1lKVxuICAgIGNvbnRlbnQuYXBwZW5kKGxhYmVsTmFtZSlcblxuICAgIGNvbnN0IGZpbmlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmluaXNoLmNsYXNzTGlzdC5hZGQoJ2FkZF9fZmluaXNoJylcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWRkJywgJ3NlY3Rpb24nKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1zdWJtaXQnKVxuICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQWRkIFNlY3Rpb24nXG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfWApXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWNhbmNlbCcpXG4gICAgY2FuY2VsQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnXG5cbiAgICBmaW5pc2guYXBwZW5kKHN1Ym1pdEJ0biwgY2FuY2VsQnRuKVxuICAgIGZvcm0uYXBwZW5kKGNvbnRlbnQsIGZpbmlzaClcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZChmb3JtQnRuLCBmb3JtKVxuICB9XG59XG4iLCJpbXBvcnQgeyBUb2RvRm9ybSB9IGZyb20gJy4vVG9kb0Zvcm0nXG5cbmV4cG9ydCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSA9ICcnLCBwcmlvcml0eSA9ICdub25lJykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB0aGlzLmlkID0gKytUb2RvLmNvdW50ZXJcbiAgICB0aGlzLmVkaXRGb3JtID0gbmV3IFRvZG9Gb3JtKCdlZGl0JywgdGhpcy5pZClcbiAgfVxuXG4gIHJlbmRlciAoY29udGFpbmVyKSB7XG4gICAgdGhpcy50b2RvRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy50b2RvRWxlbS5jbGFzc0xpc3QuYWRkKCd0by1kbycpXG4gICAgdGhpcy50b2RvRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGF0ZScsIHRoaXMuZGF0ZSlcbiAgICB0aGlzLnRvZG9FbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmlvcml0eScsIHRoaXMucHJpb3JpdHkpXG4gICAgdGhpcy50b2RvRWxlbS5pZCA9IHRoaXMuaWRcblxuICAgIGNvbnN0IHRvZG9DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0b2RvQ2hlY2suY2xhc3NMaXN0LmFkZCgndG8tZG9fX2NoZWNrJylcbiAgICB0b2RvQ2hlY2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICB0aGlzLnRvZG9FbGVtLmFwcGVuZCh0b2RvQ2hlY2spXG5cbiAgICBjb25zdCBjb21wb25lbnRzID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdkYXRlJ11cbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzKSB7XG4gICAgICBjb25zdCB0b2RvQ29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRvZG9Db21wb25lbnQuY2xhc3NMaXN0LmFkZChgdG8tZG9fXyR7Y29tcG9uZW50fWApXG4gICAgICB0b2RvQ29tcG9uZW50LmlubmVySFRNTCA9IHRoaXNbY29tcG9uZW50XVxuICAgICAgdGhpcy50b2RvRWxlbS5hcHBlbmQodG9kb0NvbXBvbmVudClcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0by1kb19fcHJpb3JpdHknLCBgcHJpb3JpdHktJHt0aGlzLnByaW9yaXR5fWApXG4gICAgdG9kb1ByaW9yaXR5LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1ib29rbWFya1wiPjwvaT4nXG4gICAgdGhpcy50b2RvRWxlbS5hcHBlbmQodG9kb1ByaW9yaXR5KVxuXG4gICAgdGhpcy50b2RvRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGhpcy50b2RvRWRpdC5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS10b2dnbGUnLCAnYnRuLS1lZGl0JylcbiAgICB0aGlzLnRvZG9FZGl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHRoaXMudG9kb0VkaXQuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBlZGl0LXRvZG8tJHt0aGlzLmlkfWApXG4gICAgdGhpcy50b2RvRWRpdC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtcGVuY2lsLWFsdFwiPjwvaT4nXG4gICAgdGhpcy50b2RvRWxlbS5hcHBlbmQodGhpcy50b2RvRWRpdClcblxuICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy50b2RvRWxlbSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVG9kb0NvdW50ZXInLCBUb2RvLmNvdW50ZXIpXG4gIH1cbn1cblxuVG9kby5jb3VudGVyID0gMFxuIiwiZXhwb3J0IGNsYXNzIFRvZG9Gb3JtIHtcbiAgY29uc3RydWN0b3IgKGdvYWwsIGlkKSB7XG4gICAgdGhpcy5nb2FsID0gZ29hbFxuICAgIHRoaXMuaWQgPSBpZFxuICB9XG5cbiAgX3JlbmRlckZvcm0gKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfS0tdG9kb2AsICd0b2RvLWZvcm0nLCAnZHJvcGRvd24nKVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMuZ29hbH0tdG9kby0ke3RoaXMuaWR9YClcblxuICAgIGlmICh0aGlzLmdvYWwgPT09ICdhZGQnKSB7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH1fX2NvbnRlbnRgLCBgJHt0aGlzLmdvYWx9X19jb250ZW50LS10b2RvYClcblxuICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpXG4gICAgbGFiZWxUaXRsZS5hcHBlbmQodGl0bGUpXG5cbiAgICBjb25zdCBsYWJlbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpXG4gICAgbGFiZWxEZXNjcmlwdGlvbi5hcHBlbmQoZGVzY3JpcHRpb24pXG5cbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfV9fZGV0YWlsc2ApXG5cbiAgICBjb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJylcbiAgICBsYWJlbERhdGUuYXBwZW5kKGRhdGUpXG5cbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkX19wcmlvcml0eScpXG4gICAgdGhpcy5wcmlvcml0eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGhpcy5wcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLnByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1gKVxuICAgIHRoaXMucHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tdG9nZ2xlJylcbiAgICB0aGlzLnByaW9yaXR5QnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1ib29rbWFya1wiPjwvaT4nXG5cbiAgICBjb25zdCBwcmlvcml0aWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmlvcml0aWVzLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcmlvcml0eScsICdkcm9wZG93bicsICdoaWRkZW4nKVxuICAgIHByaW9yaXRpZXMuc2V0QXR0cmlidXRlKCdpZCcsIGBhZGQtcHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgY29uc3QgcHJpb3JpdGllc0xpc3QgPSBbJ2hpZ2gnLCAnbWVkJywgJ2xvdycsICdub25lJ11cblxuICAgIGZvciAoY29uc3QgcHJpb3JpdHkgb2YgcHJpb3JpdGllc0xpc3QpIHtcbiAgICAgIGNvbnN0IGxhYmVsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywgYHByaW9yaXR5LSR7cHJpb3JpdHl9LSR7dGhpcy5pZH1gKVxuICAgICAgbGFiZWxQcmlvcml0eS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke3ByaW9yaXR5fWAsIGBwcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICAgIGxhYmVsUHJpb3JpdHkuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWJvb2ttYXJrXCI+PC9pPidcblxuICAgICAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5JylcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByaW9yaXR5KVxuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByaW9yaXR5LSR7cHJpb3JpdHl9LSR7dGhpcy5pZH1gKVxuXG4gICAgICBpZiAocHJpb3JpdHkgPT09ICdub25lJykge1xuICAgICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIHRydWUpXG4gICAgICB9XG5cbiAgICAgIHByaW9yaXRpZXMuYXBwZW5kKGxhYmVsUHJpb3JpdHksIGlucHV0UHJpb3JpdHkpXG4gICAgfVxuXG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kKHRoaXMucHJpb3JpdHlCdG4sIHByaW9yaXRpZXMpXG5cbiAgICBjb25zdCBmaW5pc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZpbmlzaC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH1fX2ZpbmlzaGApXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tc3VibWl0JylcbiAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gYCR7dGhpcy5nb2FsLnRvVXBwZXJDYXNlKCkuc2xpY2UoMCwgMSkgKyB0aGlzLmdvYWwuc2xpY2UoMSl9IFRhc2tgXG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGAke3RoaXMuZ29hbH0tdG9kby0ke3RoaXMuaWR9YClcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tY2FuY2VsJylcbiAgICBjYW5jZWxCdG4uaW5uZXJIVE1MID0gJ0NhbmNlbCdcblxuICAgIGZpbmlzaC5hcHBlbmQoc3VibWl0QnRuLCBjYW5jZWxCdG4pXG4gICAgY29udGVudC5hcHBlbmQobGFiZWxUaXRsZSwgbGFiZWxEZXNjcmlwdGlvbiwgZGV0YWlscylcbiAgICBkZXRhaWxzLmFwcGVuZChsYWJlbERhdGUsIHByaW9yaXR5Q29udGFpbmVyKVxuICAgIGZvcm0uYXBwZW5kKGNvbnRlbnQsIGZpbmlzaClcblxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICByZW5kZXJBZGQgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9X190b2RvYClcblxuICAgIHRoaXMuZm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGhpcy5mb3JtQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWRyb3Bkb3duJywgYGJ0bi0tJHt0aGlzLmdvYWx9YClcbiAgICB0aGlzLmZvcm1CdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgdGhpcy5mb3JtQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCBgJHt0aGlzLmdvYWx9LXRvZG8tJHt0aGlzLmlkfWApXG4gICAgdGhpcy5mb3JtQnRuLmlubmVySFRNTCA9IGAke3RoaXMuZ29hbC5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5nb2FsLnNsaWNlKDEpfSBUYXNrYFxuXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmQodGhpcy5mb3JtQnRuLCB0aGlzLl9yZW5kZXJGb3JtKCkpXG4gICAgY29udGFpbmVyLmFwcGVuZChmb3JtQ29udGFpbmVyKVxuXG4gICAgdGhpcy5faW5pdFByaW9yaXR5VG9nZ2xlKClcbiAgICB0aGlzLl9pbml0UHJpb3JpdHlMYWJlbHMoKVxuICB9XG5cbiAgcmVuZGVyRWRpdCAoYmVmb3JlKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH1fX3RvZG9gKVxuXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmQodGhpcy5fcmVuZGVyRm9ybSgpKVxuICAgIGJlZm9yZS5hZnRlcihmb3JtQ29udGFpbmVyKVxuXG4gICAgdGhpcy5faW5pdFByaW9yaXR5VG9nZ2xlKClcbiAgICB0aGlzLl9pbml0UHJpb3JpdHlMYWJlbHMoKVxuICB9XG5cbiAgLy8gRW5hYmxlIHByaW9yaXR5IHRvZ2dsZSBhbmQgY29sb3IgY2hhbmdlIHdoZW4gc2VsZWN0aW5nIGEgcHJpb3JpdHlcblxuICBfaW5pdFByaW9yaXR5VG9nZ2xlICgpIHtcbiAgICB0aGlzLnByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5wcmlvcml0eUJ0bi5kYXRhc2V0LnRvZ2dsZX1gKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKSlcbiAgfVxuXG4gIF9pbml0UHJpb3JpdHlMYWJlbHMgKCkge1xuICAgIHRoaXMubGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnByaW9yaXR5LSR7dGhpcy5pZH1gKVxuICAgIHRoaXMubGFiZWxzLmZvckVhY2gobGFiZWwgPT4gbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGQtcHJpb3JpdHktJHt0aGlzLmlkfWApLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2dnbGU9XCJhZGQtcHJpb3JpdHktJHt0aGlzLmlkfVwiXWApLnN0eWxlLmNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQuY2xvc2VzdCgnbGFiZWwnKSkuY29sb3JcbiAgICB9KSlcbiAgfVxuXG4gIC8vIFJlc2V0IHByaW9yaXR5IGNvbG9yIHdoZW4gYWRkaW5nIGEgdGFza1xuXG4gIF9pbml0UmVzZXRQcmlvcml0eSAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZC10b2RvLSR7dGhpcy5pZH0gLmJ0bi0tc3VibWl0YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2dnbGU9XCJhZGQtcHJpb3JpdHktJHt0aGlzLmlkfVwiXWApLnN0eWxlLmNvbG9yID0gJydcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBUb2RvRm9ybSB9IGZyb20gJy4vVG9kb0Zvcm0nXG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlKHRoaXMubW9kZWwudG9kb3MpXG4gICAgdGhpcy5tb2RlbC5iaW5kVG9kb0xpc3RDaGFuZ2UodGhpcy5vblRvZG9MaXN0Q2hhbmdlLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREZWxldGVUb2RvKHRoaXMuaGFuZGxlRGVsZXRlVG9kby5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kT3BlbkVkaXQodGhpcy5oYW5kbGVPcGVuRWRpdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRWRpdFRvZG8odGhpcy5oYW5kbGVFZGl0VG9kby5iaW5kKHRoaXMpKVxuICB9XG5cbiAgb25Ub2RvTGlzdENoYW5nZSAodG9kb3MpIHtcbiAgICB0aGlzLnZpZXcucmVuZGVyKHRvZG9zKVxuICB9XG5cbiAgaGFuZGxlQWRkVG9kbyAodG9kbykge1xuICAgIHRoaXMubW9kZWwuYWRkVG9kbyh0b2RvKVxuICB9XG5cbiAgaGFuZGxlRWRpdFRvZG8gKHVwZGF0ZWRUb2RvLCBpZCkge1xuICAgIHRoaXMubW9kZWwuZWRpdFRvZG8odXBkYXRlZFRvZG8sIGlkKVxuICB9XG5cbiAgaGFuZGxlRGVsZXRlVG9kbyAoaWQpIHtcbiAgICB0aGlzLm1vZGVsLmRlbGV0ZVRvZG8oaWQpXG4gIH1cblxuICBoYW5kbGVPcGVuRWRpdCAoaWQpIHtcbiAgICAvLyBVc2VyIGNhbiBvbmx5IGVkaXQgb25lIHRhc2sgYXQgYSB0aW1lLCBzbyBpZiB0aGVyZSBpcyBhbm90aGVyIEVkaXQgRm9ybSBvcGVuLCBpdCBpcyBjbG9zZWQuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0nKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImVkaXQtdG9kb1wiXScpLnJlbW92ZSgpXG4gICAgfVxuICAgIG5ldyBUb2RvRm9ybSgnZWRpdCcsIGlkKS5yZW5kZXJFZGl0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50by1kb1tpZD1cIiR7aWR9XCJdYCkpXG4gICAgdGhpcy52aWV3LmdldEVkaXRGb3JtKGlkKVxuICAgIHRoaXMudmlldy5zZXRFZGl0Rm9ybShpZClcbiAgfVxuXG4gIGJpbmRBZGQgKCkge1xuICAgIHRoaXMudmlldy5iaW5kQWRkVG9kbyh0aGlzLmhhbmRsZUFkZFRvZG8uYmluZCh0aGlzKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb0Zvcm0gfSBmcm9tICcuL1RvZG9Gb3JtJ1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlTW9kdWxlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VNb2R1bGUnXG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdE1vZGVsIHtcbiAgY29uc3RydWN0b3IgKG5hbWUsIHByb2plY3RJZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWUgPT09ICcnID8gJ1VudGl0bGVkJyA6IG5hbWVcbiAgICB0aGlzLmlkID0gKytUb2RvTGlzdE1vZGVsLmNvdW50ZXJcbiAgICB0aGlzLmZvcm0gPSBuZXcgVG9kb0Zvcm0oJ2FkZCcsIHRoaXMuaWQpXG4gICAgdGhpcy5wcm9qZWN0SWQgPSBwcm9qZWN0SWRcbiAgICB0aGlzLnRvZG9zID0gW11cbiAgfVxuXG4gIGFkZFRvZG8gKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbylcbiAgICB0aGlzLl9jb21taXQodGhpcy50b2RvcylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVG9kb0xpc3RNb2RlbENvdW50ZXInLCBUb2RvTGlzdE1vZGVsLmNvdW50ZXIpXG4gIH1cblxuICBlZGl0VG9kbyAodXBkYXRlZFRvZG8sIGlkKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICBpZiAodG9kby5pZCA9PT0gK2lkKSB7XG4gICAgICAgIHJldHVybiB1cGRhdGVkVG9kb1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRvZG9cbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9zKVxuICB9XG5cbiAgZGVsZXRlVG9kbyAoaWQpIHtcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT09IGlkKVxuICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9zKVxuICB9XG5cbiAgYmluZFRvZG9MaXN0Q2hhbmdlIChjYWxsYmFjaykge1xuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSA9IGNhbGxiYWNrXG4gIH1cblxuICBfY29tbWl0ICh0b2Rvcykge1xuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0b2RvcylcbiAgICBsb2NhbFN0b3JhZ2VNb2R1bGUudXBkYXRlVG9kb3ModGhpcy5pZCwgdGhpcy5wcm9qZWN0SWQsIHRoaXMudG9kb3MpXG4gIH1cbn1cblxuVG9kb0xpc3RNb2RlbC5jb3VudGVyID0gMFxuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vVG9kbydcblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0VmlldyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbnMnKVxuICAgIHRoaXMudG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMudG9kb0xpc3QuY2xhc3NMaXN0LmFkZCgndG9kb2xpc3QnKVxuICAgIHRoaXMuaWQgPSArbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RvZG9MaXN0TW9kZWxDb3VudGVyJylcbiAgfVxuXG4gIC8vIENyZWF0ZSBhIHNlY3Rpb25cbiAgY3JlYXRlU2VjdGlvbiAoKSB7XG4gICAgdGhpcy5zZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLnNlY3Rpb24uY2xhc3NMaXN0LmFkZChgc2VjdGlvbi0ke3RoaXMuaWR9YClcbiAgICB0aGlzLnNlY3Rpb24ucHJlcGVuZCh0aGlzLnRvZG9MaXN0KVxuICAgIHRoaXMucHJvamVjdC5hcHBlbmQodGhpcy5zZWN0aW9uKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBzZWN0aW9uJ3MgbmFtZVxuICByZW5kZXJOYW1lIChuYW1lKSB7XG4gICAgdGhpcy5uYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLm5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbl9fbmFtZV9fY29udGFpbmVyJylcblxuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aGlzLm5hbWUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbl9fbmFtZScpXG4gICAgdGhpcy5uYW1lLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSlcbiAgICB0aGlzLm5hbWUuaW5uZXJIVE1MID0gbmFtZVxuXG4gICAgdGhpcy5kZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMuZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tZGVsZXRlJylcbiAgICB0aGlzLmRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLmRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGVsZXRlJywgdGhpcy5zZWN0aW9uLmNsYXNzTGlzdFswXS5zbGljZSg4KSlcbiAgICB0aGlzLmRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+J1xuXG4gICAgdGhpcy5uYW1lQ29udGFpbmVyLmFwcGVuZCh0aGlzLm5hbWUsIHRoaXMuZGVsZXRlQnRuKVxuICAgIHRoaXMuc2VjdGlvbi5wcmVwZW5kKHRoaXMubmFtZUNvbnRhaW5lcilcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgQWRkIGZvcm1cbiAgcmVuZGVyRm9ybSAoZm9ybSkge1xuICAgIGZvcm0ucmVuZGVyQWRkKHRoaXMuc2VjdGlvbilcbiAgfVxuXG4gIC8vIEdldCB0aGUgQWRkIGZvcm0gaW5wdXRzXG4gIGdldEZvcm0gKCkge1xuICAgIHRoaXMudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke3RoaXMuaWR9IC50b2RvLWZvcm0gW25hbWU9XCJ0aXRsZVwiXWApXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cImRlc2NyaXB0aW9uXCJdYClcbiAgICB0aGlzLmRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke3RoaXMuaWR9IC50b2RvLWZvcm0gW25hbWU9XCJkYXRlXCJdYClcbiAgICB0aGlzLnN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSAuYnRuLS1zdWJtaXRgKVxuICB9XG5cbiAgLy8gR2V0IGFkZCBmb3JtIHZhbHVlc1xuICBnZXQgX3RvZG9UaXRsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUudmFsdWVcbiAgfVxuXG4gIGdldCBfdG9kb0Rlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbi52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvRGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZS52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvUHJpb3JpdHkgKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IHRoZSBFZGl0IGZvcm0gaW5wdXRzXG4gIGdldEVkaXRGb3JtICgpIHtcbiAgICB0aGlzLnRpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJlZGl0LXRvZG9cIl0gW25hbWU9XCJ0aXRsZVwiXScpXG4gICAgdGhpcy5kZXNjcmlwdGlvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdIFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKVxuICAgIHRoaXMuZGF0ZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdIFtuYW1lPVwiZGF0ZVwiXScpXG4gICAgdGhpcy5wcmlvcml0eUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdIC5idG4tLXRvZ2dsZScpXG4gIH1cblxuICAvLyBBdXRvbWF0aWNhbGx5IHByZS1maWxsIHRoZSBFZGl0IGZvcm0gaW5wdXRzXG4gIHNldEVkaXRGb3JtIChpZCkge1xuICAgIHRoaXMudGl0bGVFZGl0LnZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl0gLnRvLWRvX190aXRsZWApLmlubmVySFRNTFxuICAgIHRoaXMuZGVzY3JpcHRpb25FZGl0LnZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl0gLnRvLWRvX19kZXNjcmlwdGlvbmApLmlubmVySFRNTFxuICAgIHRoaXMuZGF0ZUVkaXQudmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX2RhdGVgKS5pbm5lckhUTUxcbiAgICB0aGlzLnByaW9yaXR5RWRpdC5jbGFzc0xpc3QuYWRkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aWR9XCJdIC50by1kb19fcHJpb3JpdHlgKS5jbGFzc0xpc3RbMV0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkXj1cImVkaXQtdG9kb1wiXSBbaWRePVwiJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX3ByaW9yaXR5YCkuY2xhc3NMaXN0WzFdfVwiXWApLmNoZWNrZWQgPSB0cnVlXG4gIH1cblxuICAvLyBHZXQgdGhlIEVkaXQgZm9ybSB2YWx1ZXNcbiAgZ2V0IF9lZGl0VGl0bGUgKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlRWRpdC52YWx1ZVxuICB9XG5cbiAgZ2V0IF9lZGl0RGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uRWRpdC52YWx1ZVxuICB9XG5cbiAgZ2V0IF9lZGl0RGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUVkaXQudmFsdWVcbiAgfVxuXG4gIGdldCBfZWRpdFByaW9yaXR5ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImVkaXQtdG9kb1wiXSBbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZVxuICB9XG5cbiAgLy8gUmVzZXQgZm9ybSBpbnB1dHNcbiAgX3Jlc2V0SW5wdXRzICgpIHtcbiAgICB0aGlzLnRpdGxlLnZhbHVlID0gJydcbiAgICB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlID0gJydcbiAgICB0aGlzLmRhdGUudmFsdWUgPSAnJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3JePVwicHJpb3JpdHktbm9uZVwiXScpLmNoZWNrZWQgPSB0cnVlXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIFRvZG8gTGlzdFxuICByZW5kZXIgKHRvZG9zKSB7XG4gICAgd2hpbGUgKHRoaXMudG9kb0xpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy50b2RvTGlzdC5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICB0b2RvLnJlbmRlcih0aGlzLnRvZG9MaXN0KVxuICAgIH1cbiAgfVxuXG4gIC8vIEV2ZW50IExpc3RlbmVyc1xuXG4gIGJpbmRBZGRUb2RvIChoYW5kbGVyKSB7XG4gICAgdGhpcy5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGhhbmRsZXIobmV3IFRvZG8odGhpcy5fdG9kb1RpdGxlLCB0aGlzLl90b2RvRGVzY3JpcHRpb24sIHRoaXMuX3RvZG9EYXRlLCB0aGlzLl90b2RvUHJpb3JpdHkpKVxuICAgICAgdGhpcy5fcmVzZXRJbnB1dHMoKVxuICAgIH0pXG4gIH1cblxuICBiaW5kRGVsZXRlVG9kbyAoaGFuZGxlcikge1xuICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0by1kb19fY2hlY2snKSkge1xuICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKVxuICAgICAgICBoYW5kbGVyKGlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBPcGVuIGZvcm0gdG8gZWRpdCB0aGUgdG9kb1xuICBiaW5kT3BlbkVkaXQgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5idG4tLWVkaXQnKSkge1xuICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudG8tZG8nKS5pZClcbiAgICAgICAgaGFuZGxlcihpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmluZEVkaXRUb2RvIChoYW5kbGVyKSB7XG4gICAgdGhpcy50b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPT09ICdFZGl0IFRhc2snKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKS5pZC5zbGljZSgxMClcbiAgICAgICAgY29uc3QgdXBkYXRlZFRvZG8gPSBuZXcgVG9kbyh0aGlzLl9lZGl0VGl0bGUsIHRoaXMuX2VkaXREZXNjcmlwdGlvbiwgdGhpcy5fZWRpdERhdGUsIHRoaXMuX2VkaXRQcmlvcml0eSlcbiAgICAgICAgaGFuZGxlcih1cGRhdGVkVG9kbywgaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0ICcuL3Nhc3MvbWFpbi5zY3NzJ1xuaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gJy4vQXBwQ29udHJvbGxlcidcbmltcG9ydCB7IEFwcE1vZGVsIH0gZnJvbSAnLi9BcHBNb2RlbCdcbmltcG9ydCB7IEFwcFZpZXcgfSBmcm9tICcuL0FwcFZpZXcnXG5pbXBvcnQgeyBUb2RvTGlzdENvbnRyb2xsZXIgfSBmcm9tICcuL1RvZG9MaXN0Q29udHJvbGxlcidcbmltcG9ydCB7IFRvZG9MaXN0TW9kZWwgfSBmcm9tICcuL1RvZG9MaXN0TW9kZWwnXG5pbXBvcnQgeyBUb2RvTGlzdFZpZXcgfSBmcm9tICcuL1RvZG9MaXN0VmlldydcbmltcG9ydCB7IFByb2plY3RDb250cm9sbGVyIH0gZnJvbSAnLi9Qcm9qZWN0Q29udHJvbGxlcidcbmltcG9ydCB7IFByb2plY3RNb2RlbCB9IGZyb20gJy4vUHJvamVjdE1vZGVsJ1xuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tICcuL1Byb2plY3RWaWV3J1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vVG9kbydcblxuY29uc3QgYXBwID0gbmV3IEFwcENvbnRyb2xsZXIobmV3IEFwcE1vZGVsKCksIG5ldyBBcHBWaWV3KCkpXG5cbi8vIE9uIHRoZSBmaXJzdCB1c2UsIGNyZWF0ZXMgYSBkZWZhdWx0IHByb2plY3QgYW5kIHNhbXBsZXNcbmlmICghbG9jYWxTdG9yYWdlLnByb2plY3RzKSB7XG4gIC8vIENyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdC4gSXQgY2Fubm90IGJlIGRlbGV0ZWQgYXMgaXQgYWN0cyBhcyBhIFwiSG9tZSBQYWdlXCIuXG4gIGFwcC5oYW5kbGVBZGRQcm9qZWN0KCdEZWZhdWx0JylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tZGVsZXRlJykucmVtb3ZlKClcblxuICAvLyBBZGQgYSB0dXRvcmlhbCBhbmQgYSBmZXcgc2FtcGxlc1xuICBhcHAubW9kZWwucHJvamVjdHNbMF0uaGFuZGxlRWRpdFRvZG9MaXN0KCcxJywgJ1R1dG9yaWFsJylcbiAgYXBwLm1vZGVsLnByb2plY3RzWzBdLm1vZGVsLnRvZG9MaXN0c1swXS5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKFxuICAgICdXZWxjb21lJyxcbiAgYFRyeSBhZGRpbmcgYSBuZXcgdGFzayBieSBjbGlja2luZyBvbiBcIkFkZCBUYXNrXCIhXG4gIFlvdSBjYW4gYWxzbyBhZGQgYXMgbWFueSBzZWN0aW9ucyB0byB5b3VyIHByb2plY3QgYXMgeW91J2QgbGlrZSBieSBjbGlja2luZyBvbiBcIkFkZCBTZWN0aW9uXCIsIGFuZCBjcmVhdGUgYXMgbWFueSBwcm9qZWN0cyBhcyB5b3Ugd2lzaC5gKSlcblxuICBhcHAubW9kZWwucHJvamVjdHNbMF0uaGFuZGxlQWRkVG9kb0xpc3QobmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCgnU2FtcGxlcycsIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5tb2RlbC5pZCksIG5ldyBUb2RvTGlzdFZpZXcoKSkpXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5tb2RlbC50b2RvTGlzdHNbMV0uaGFuZGxlQWRkVG9kbyhuZXcgVG9kbyhcbiAgICAnSm9oblxcJ3MgQmlydGhkYXknLFxuICAgICdNZWV0IGF0IEpvaG5cXCdzIGhvdXNlIGF0IDE5LiBEb25cXCd0IGZvcmdldCB0byBicmluZyBoaXMgZ2lmdC4nLFxuICBgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LSR7bmV3IERhdGUoKS5nZXRNb250aCgpICsgMX0tJHtuZXcgRGF0ZSgpLmdldERhdGUoKX1gLFxuICAnaGlnaCdcbiAgKSlcblxuICBhcHAubW9kZWwucHJvamVjdHNbMF0ubW9kZWwudG9kb0xpc3RzWzFdLmhhbmRsZUFkZFRvZG8obmV3IFRvZG8oXG4gICAgJ0Rpbm5lciB3aXRoIENobG9lJyxcbiAgICAnUmVzZXJ2YXRpb24gYXQgUmhvZGVzIFJlc3RhdXJhbnQsIGF0IDIwLicsXG4gIGAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxfS0ke25ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgMn1gLFxuICAnbWVkJ1xuICApKVxuXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5tb2RlbC50b2RvTGlzdHNbMV0uaGFuZGxlQWRkVG9kbyhuZXcgVG9kbyhcbiAgICAnRGVudGlzdCcsXG4gICAgJ0l0IHdvblxcJ3QgYmUgdGhhdCBiYWQuIFByb2JhYmx5LicsXG4gIGAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0tJHtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAyfS0ke25ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgNX1gLFxuICAnbG93J1xuICApKVxuXG4gIGFwcC5tb2RlbC5wcm9qZWN0c1swXS5tb2RlbC50b2RvTGlzdHNbMV0uaGFuZGxlQWRkVG9kbyhuZXcgVG9kbyhcbiAgICAnU3RhcnQgd29ya2luZyBvdXQnLFxuICAgICdJXFwnbGwgc3RhcnQuLi4gVG9tb3Jyb3cuIE9yIG5leHQgeWVhci4nXG4gICkpXG59IGVsc2Uge1xuLyogT24gYWxsIHRoZSBvdGhlciB1c2VzOlxuICAgIC0gTG9hZCB0aGUgbG9jYWxTdG9yYWdlXG4gICAgLSBDcmVhdGUgbmF2IGJ1dHRvbnMgZm9yIGVhY2ggcHJvamVjdFxuICAgIC0gUmVuZGVyIHRoZSBkZWZhdWx0IHByb2plY3RcbiovXG5cbiAgbGV0IHRlbXBTdG9yYWdlID0gWy4uLmFwcC5tb2RlbC5wcm9qZWN0c11cblxuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuXG4gIGFwcC5tb2RlbC5wcm9qZWN0cyA9IFtdXG5cbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHRlbXBTdG9yYWdlKSB7XG4gICAgY29uc3QgdG9kb1Byb2plY3QgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIobmV3IFByb2plY3RNb2RlbChwcm9qZWN0Lm1vZGVsLm5hbWUpLCBuZXcgUHJvamVjdFZpZXcoUHJvamVjdE1vZGVsLmNvdW50ZXIpKVxuICAgIGFwcC5tb2RlbC5hZGRQcm9qZWN0KHRvZG9Qcm9qZWN0KVxuICAgIGFwcC5kaXNwbGF5UHJvamVjdCh0b2RvUHJvamVjdClcbiAgICBhcHAudmlldy5yZW5kZXJCdG4odG9kb1Byb2plY3QubW9kZWwubmFtZSwgdG9kb1Byb2plY3QubW9kZWwuaWQpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvamVjdD1cInByb2plY3QtJHt0b2RvUHJvamVjdC5tb2RlbC5pZH1cIl1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFwcC5oYW5kbGVOYXZDbGljayh0b2RvUHJvamVjdCkpXG5cbiAgICBmb3IgKGNvbnN0IHRvZG9MaXN0IG9mIHByb2plY3QubW9kZWwudG9kb0xpc3RzKSB7XG4gICAgICBjb25zdCBwcm9qZWN0VG9kb0xpc3QgPSBuZXcgVG9kb0xpc3RDb250cm9sbGVyKG5ldyBUb2RvTGlzdE1vZGVsKHRvZG9MaXN0Lm1vZGVsLm5hbWUsIHRvZG9MaXN0Lm1vZGVsLnByb2plY3RJZCksIG5ldyBUb2RvTGlzdFZpZXcoKSlcbiAgICAgIHRvZG9Qcm9qZWN0LmhhbmRsZUFkZFRvZG9MaXN0KHByb2plY3RUb2RvTGlzdClcblxuICAgICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9MaXN0Lm1vZGVsLnRvZG9zKSB7XG4gICAgICAgIHByb2plY3RUb2RvTGlzdC5oYW5kbGVBZGRUb2RvKG5ldyBUb2RvKHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZGF0ZSwgdG9kby5wcmlvcml0eSkpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRlbXBTdG9yYWdlID0ge31cbiAgY29uc29sZS5sb2codGVtcFN0b3JhZ2UpXG59XG4iLCJleHBvcnQgY29uc3QgbG9jYWxTdG9yYWdlTW9kdWxlID0gKCgpID0+IHtcbiAgY29uc3QgdXBkYXRlUHJvamVjdExpc3QgPSAocHJvamVjdHMpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXG4gIH1cblxuICBjb25zdCB1cGRhdGVUb2RvTGlzdHMgPSAoaWQsIHRvZG9MaXN0c0FycikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgJ3Byb2plY3RzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKVxuICAgICAgICAgIC5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICBwcm9qZWN0Lm1vZGVsLnRvZG9MaXN0cyA9IHRvZG9MaXN0c0FyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRvZG9zID0gKGlkLCBwcm9qZWN0SWQsIHRvZG9zQXJyKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAncHJvamVjdHMnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXG4gICAgICAgICAgLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IHByb2plY3RJZCkge1xuICAgICAgICAgICAgICBwcm9qZWN0Lm1vZGVsLnRvZG9MaXN0cy5tYXAoKHRvZG9MaXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvZG9MaXN0Lm1vZGVsLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgdG9kb0xpc3QubW9kZWwudG9kb3MgPSB0b2Rvc0FyclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0XG4gICAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZVByb2plY3RMaXN0LFxuICAgIHVwZGF0ZVRvZG9MaXN0cyxcbiAgICB1cGRhdGVUb2Rvc1xuICB9XG59KSgpXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==