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
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  min-height: calc(100vh - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\n.no-display {\n  display: none !important;\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\nh2 {\n  font-weight: 700;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel {\n  color: rgba(42, 43, 104, 0.5);\n}\n.btn--cancel:hover {\n  color: rgba(42, 43, 104, 0.7);\n}\n.btn--section {\n  color: rgba(42, 43, 104, 0.35);\n  font-weight: 700;\n}\n.btn--section:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.5);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n}\n.btn--section:before, .btn--section:after {\n  content: \"\";\n  background-color: rgba(42, 43, 104, 0.25);\n  height: 2px;\n  flex-grow: 1;\n}\n.btn--section:hover:before, .btn--section:hover:after {\n  background-color: rgba(42, 43, 104, 0.5);\n}\n.btn--section:before {\n  margin-right: 1rem;\n}\n.btn--section:after {\n  margin-left: 1rem;\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn--delete {\n  display: none;\n  color: rgba(42, 43, 104, 0.5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  bottom: 0;\n  color: rgba(42, 43, 104, 0.5);\n  display: none;\n}\n.btn--edit:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-med {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1rem;\n  align-items: start;\n  word-break: break-all;\n  position: relative;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n.to-do:hover .btn--edit {\n  display: initial;\n}\n\n.dropdown {\n  transition: all 0.35s linear;\n}\n\n.add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo,\n.edit__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project,\n.edit__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n}\n.add__priority input[type=radio],\n.edit__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n\n.add__finish,\n.edit__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n  transition: all 0.2s ease-in;\n}\n.nav--hidden {\n  transform: translateX(-100%);\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li:hover .btn--delete {\n  display: initial;\n}\n.nav__category li > .btn {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all 0.2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n}", "",{"version":3,"sources":["webpack://src/sass/main.scss","webpack://src/sass/base/_base.scss","webpack://src/sass/base/_typography.scss","webpack://src/sass/utils/_variables.scss","webpack://src/sass/components/_buttons.scss","webpack://src/sass/utils/_mixins.scss","webpack://src/sass/components/_icons.scss","webpack://src/sass/components/_todo.scss","webpack://src/sass/components/_dropdown.scss","webpack://src/sass/layout/_form.scss","webpack://src/sass/layout/_header.scss","webpack://src/sass/layout/_nav.scss","webpack://src/sass/layout/_main.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  min-height: calc(100vh - 50px);\n}\n\n.hidden {\n  opacity: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n  transform: translateY(-0.25em);\n}\n\n.no-display {\n  display: none !important;\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\nh2 {\n  font-weight: 700;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel {\n  color: rgba(42, 43, 104, 0.5);\n}\n.btn--cancel:hover {\n  color: rgba(42, 43, 104, 0.7);\n}\n.btn--section {\n  color: rgba(42, 43, 104, 0.35);\n  font-weight: 700;\n}\n.btn--section:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n[data-toggle=add-project] {\n  color: rgba(0, 0, 0, 0.75);\n}\n[data-toggle=add-project]:hover {\n  color: #000;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.btn--add:before {\n  content: \"\";\n  color: rgba(42, 43, 104, 0.5);\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n}\n.btn--section:before, .btn--section:after {\n  content: \"\";\n  background-color: rgba(42, 43, 104, 0.25);\n  height: 2px;\n  flex-grow: 1;\n}\n.btn--section:hover:before, .btn--section:hover:after {\n  background-color: rgba(42, 43, 104, 0.5);\n}\n.btn--section:before {\n  margin-right: 1rem;\n}\n.btn--section:after {\n  margin-left: 1rem;\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn--delete {\n  display: none;\n  color: rgba(42, 43, 104, 0.5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  bottom: 0;\n  color: rgba(42, 43, 104, 0.5);\n  display: none;\n}\n.btn--edit:hover {\n  color: rgba(42, 43, 104, 0.75);\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before, .nav__sorts li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before, .nav__sorts li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-med {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.sort-title::before {\n  content: \"\";\n}\n\n.sort-description::before {\n  content: \"\";\n}\n\n.sort-date::before {\n  content: \"\";\n}\n\n.sort-priority::before {\n  content: \"\";\n}\n\n.sort-title::before {\n  color: #305c30;\n}\n\n.sort-description::before {\n  color: #ebb94f;\n}\n\n.sort-date::before {\n  color: #669791;\n}\n\n.sort-priority::before {\n  color: #a14242;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1rem;\n  align-items: start;\n  word-break: break-all;\n  position: relative;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n.to-do:hover .btn--edit {\n  display: initial;\n}\n\n.dropdown {\n  transition: all 0.35s linear;\n}\n\n.add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo,\n.edit__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project,\n.edit__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n}\n.add__priority input[type=radio],\n.edit__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n\n.add__finish,\n.edit__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n  transition: all 0.2s ease-in;\n}\n.nav--hidden {\n  transform: translateX(-100%);\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li:hover .btn--delete {\n  display: initial;\n}\n.nav__category li > .btn {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all 0.2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n}","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput,\ntextarea {\n\tborder: none;\n\n\t&:focus {\n\t\toutline: none;\n\t}\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\twidth: 100vw;\n\tmin-height: 100vh;\n\tmax-width: 100%;\n\tmax-height: 100%;\n}\n\n.wrapper {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.content__wrapper {\n\tposition: relative;\n\ttop: 50px;\n\tdisplay: flex;\n\tmin-height: calc(100vh - 50px);\n}\n\n.hidden {\n\topacity: 0;\n\tmax-height: 0 !important;\n\toverflow: hidden;\n  transform: translateY(-.25em);\n}\n\n.no-display {\n\tdisplay: none !important;\n}","body,\nbutton {\n  font-family: $font-primary;\n  font-size: .875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: $color-primary;\n  letter-spacing: .5px;\n  text-align: center;\n}\n\nh2 {\n  font-weight: 700;\n}\n\n.btn {\n  &--page--header {\n    color: $color-header;\n  }\n\n  &--icon {\n    font-size: 1.25rem;\n  }\n\n  &--submit,\n  &--cancel {\n    text-transform: uppercase;\n    font-size: .85em;\n    letter-spacing: -.5px;\n  }\n\n  &--submit {\n    color: #fff;\n  }\n\n  &--cancel {\n    color: rgba($color-primary, .5);\n\n    &:hover {\n      color: rgba($color-primary, .7);\n    }\n  }\n\n  &--section {\n    color: rgba($color-primary, .35);\n    font-weight: 700;\n\n    &:hover {\n      color: rgba($color-primary, .75);\n    }\n\n  }\n\n}\n\n// Nav\n\n.nav {\n  &--heading {\n    text-transform: uppercase;\n    color: $color-primary;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 2.5;\n  }\n}\n\n[data-toggle=\"add-project\"] {\n  color: rgba(#000, .75);\n\n  &:hover {\n    color: #000;\n  }\n\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\n// Form\n\ninput,\ntextarea {\n  font-family: $font-primary;\n}\n\n[name=\"title\"] {\n  font-weight: 700;\n}\n\n[name=\"date\"] {\n  color: $color-form;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}","// Fonts\n$font-primary: 'Nanum Gothic', Arial;\n\n\n// Colors\n$color-primary: rgb(42, 43, 104);\n$color-secondary: rgb(238, 240, 241);\n\n$color-header: #fff;\n$color-projects: rgba($color-primary, .5);\n$color-form: rgb(142, 142, 142);\n\n$color-priority: (\n  high: rgb(161, 66, 66),\n  med: rgb(231, 154, 103),\n  low: rgb(93, 151, 91),\n  none: rgb(199, 199, 199)\n);\n\n$color-date: (\n  all: lighten($color-primary, 15%),\n  today: rgb(235, 153, 99),\n  upcoming: rgb(141, 90, 137),\n  anytime: rgb(122, 122, 122),\n  late: rgb(148, 32, 32)\n);\n\n$color-sort: (\n  title: rgb(48, 92, 48),\n  description: rgb(235, 185, 79),\n  date: rgb(102, 151, 145),\n  priority: map-get($color-priority, high)\n);\n\n// Icons\n\n$icon-priority: \"\\f02e\";\n\n$icons-date: (\n  all: \"\\f073\",\n  today: \"\\f272\",\n  upcoming: \"\\f274\",\n  anytime: \"\\f133\",\n);\n\n$icons-caret: (\n  up: \"\\f0d8\",\n  down: \"\\f0d7\",\n  right: \"\\f0da\"\n);\n\n$icons-sort: (\n  title: \"\\f328\",\n  description: \"\\f249\",\n  date: \"\\f073\",\n  priority: $icon-priority,\n);\n\n$icon-add: \"\\f067\";\n\n// Others\n$margin-indent: 0 .25rem 0 1.25rem;","button {\n\tborder: none;\n  background: none;\n  cursor: pointer;\n  \n  &:focus {\n    outline: none;\n  }\n}\n\n.btn--submit,\n.btn--cancel {\n  padding: .15rem .5rem;\n}\n  \n.btn--submit {\n  background: rgba($color-primary, .5);\n  border-radius: 5px;\n  margin-right: .25rem;\n\n  &:hover {\n    background: rgba($color-primary, .7);\n  }\n}\n\n.btn--cancel {\n  border: 1px solid rgba($color-primary, .5);\n  border-radius: 5px;\n  background: rgba(#fff, .5);\n}\n\n.btn--add:before {\n  content: $icon-add;\n  color: rgba($color-primary, .5);\n  @include font-awesome-700();\n  margin: 0 1rem;\n}\n\n.btn--section {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 0;\n\n  &:before,\n  &:after {\n    content: '';\n    background-color: rgba($color-primary, .25);\n    height: 2px;\n    flex-grow: 1;\n  }\n\n  &:hover:before,\n  &:hover:after {\n    background-color: rgba($color-primary, .5);\n  }\n\n  &:before {\n    margin-right: 1rem;\n  }\n\n  &:after {\n    margin-left: 1rem;\n  }\n}\n\n.btn--project {\n  display: flex;\n  justify-content: space-between\n}\n\n.btn--delete {\n  display: none;\n  color: rgba($color-primary, .5);\n}\n\n.btn--edit {\n  position: absolute;\n  right: -5px;\n  bottom: 0;\n  color: rgba($color-primary, .5);\n  display: none;\n\n  &:hover {\n    color: rgba($color-primary, .75);\n  }\n\n}","@mixin font-awesome-400() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n@mixin font-awesome-700() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n@mixin icon-content($target, $map) {\n  @each $key, $icon in $map {\n    .#{$target}-#{$key}::before {\n      content: $icon;\n    }\n  }\n}\n\n@mixin icon-color($target, $map) {\n  @each $key, $color in $map {\n    .#{$target}-#{$key}::before {\n      color: $color;\n    }\n  }\n}","// NAV-ICONS\n\n.nav {\n  &__to-do li:before,\n  &__projects li:before,\n  &__filters li:before,\n  &__sorts li:before {\n    margin: $margin-indent;\n  }\n\n  &__to-do li:before,\n  &__sorts li:before {\n    @include font-awesome-400();\n  }\n\n  &__projects li:before {\n    content: \"⚫\";\n    color: $color-projects;\n  }\n\n  .project_list__add:before {\n    content: $icon-add;\n    @include font-awesome-700();\n  }\n\n  &__filters li:before {\n    content: \"\\f02e\";\n    @include font-awesome-400();\n  }\n}\n\n// Color Priority Icons\n@each $level, $color in $color-priority {\n  .priority-#{$level} {\n    color: $color;\n  }\n}\n\n// Date Icons\n@include icon-content('date', $icons-date);\n@include icon-color('date', $color-date);\n\n// Category Icons\n.nav--heading:before {\n  content: map-get($icons-caret, down);\n  color: $color-primary;\n  @include font-awesome-700();\n  margin-right: .75rem;\n}\n\n// Sort Icons\n@include icon-content('sort', $icons-sort);\n@include icon-color('sort', $color-sort);\n\n// MAIN ICONS\n\n.main__header li:before {\n  content: map-get($icons-caret, down);\n  @include font-awesome-700();\n}",".to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-auto-flow: column;\n  grid-gap: 1rem;\n  align-items: start;\n  word-break: break-all;\n  position: relative;\n  \n  &__check {\n    margin-top: 7px;\n  }\n\n  &:hover .btn--edit {\n    display: initial;\n  }\n\n}",".dropdown {\n  transition: all .35s linear;\n}",".add__content,\n.edit__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba($color-primary, .35);\n\n  &--todo {\n    border-radius: 10px;\n    padding: .25rem 1rem;\n  }\n\n  &--project {\n    border-radius: 5px;\n    margin: 0 1rem;\n    padding: .15rem;\n  }\n}\n\ninput[type=\"text\"],\ntextarea {\n  width: 100%;\n  padding: .25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=\"title\"] {\n  border-bottom: 1px solid rgba($color-primary, .1);\n}\n\n.add__details,\n.edit__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority,\n.edit__priority {\n  position: relative;\n\n  input[type=\"radio\"] {\n    position: fixed;\n    opacity: 0;\n    pointer-events: none;\n  }\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba($color-primary, .35);\n  padding: .25rem .5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n\n  &:before {\n    content: '';\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #fff;\n    position: absolute;\n    top: -5px;\n    left: 15px;\n    z-index: 1;\n  }\n\n  &:after {\n    content: '';\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid rgba($color-primary, .35);\n    position: absolute;\n    top: -6px;\n    left: 14px;\n  }\n\n  label {\n    text-align: center;\n    margin: 0 .5rem;\n  }\n}\n\n.add__finish,\n.edit__finish {\n  margin: .5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(#fff, .5);\n}\n\nlabel {\n  cursor: pointer;\n}\n",".page__header {\n  position: fixed;\n  background: $color-primary;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 1;\n  \n\n  ul {\n    display: flex;\n    flex: 1;\n\n    & li:last-child {\n      margin-left: auto;\n    }\n  }\n}",".nav {\n  \n  background: $color-secondary;\n  width: 250px;\n  border-right: 1px solid rgba($color-primary, .25);\n  padding: 2rem .25rem 0 2rem;\n  transition: all .2s ease-in;\n\n  &--hidden {\n    transform: translateX(-100%);\n  }\n\n  &__category {\n    margin-bottom: .75rem;\n    padding-bottom: .75rem;\n    border-bottom: 1px solid rgba($color-primary, .1);\n\n    &:last-of-type {\n      border-bottom: none;\n    }\n\n    li {\n      display: flex;\n      \n      &:hover {\n        background: rgba($color-primary, .04);\n      }\n\n      &:hover .btn--delete {\n        display: initial;\n      }\n\n      > .btn {\n        // Makes the whole line clickable instead of just the text.\n        flex: 1;\n        text-align: start;\n      }\n    }\n  }\n\n  &--heading {\n    width: 100%;\n    text-align: start;\n    \n    &:hover {\n      background: rgba($color-primary, .07);\n    }\n  }\n}","main {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n  transition: all .2s ease;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}\n\n.main--hidden {\n  transform: translateX(-125px);\n}"],"sourceRoot":""}]);
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
    this.view.bindToggle(this.handleToggle.bind(this));
    this.view.bindNavToggle(this.handleNavToggle.bind(this));
    this.view.bindPriority(this.handlePriority.bind(this));
    this.view.bindDisplayAll(this.handleDisplayAll.bind(this));
    this.view.bindDateToday(this.handleToday.bind(this));
    this.view.bindDateUpcoming(this.handleUpcoming.bind(this));
    this.view.bindDateAnytime(this.handleAnytime.bind(this));
    this.view.bindHome(this.handleHome.bind(this));
  } // Display the new project and created a button linked to the project in the navigation.


  handleAddProject(name) {
    const project = new _ProjectController__WEBPACK_IMPORTED_MODULE_0__["ProjectController"](new _ProjectModel__WEBPACK_IMPORTED_MODULE_1__["ProjectModel"](name), new _ProjectView__WEBPACK_IMPORTED_MODULE_2__["ProjectView"](_ProjectModel__WEBPACK_IMPORTED_MODULE_1__["ProjectModel"].counter));
    this.model.addProject(project);
    project.model.addTodoList(new _TodoListController__WEBPACK_IMPORTED_MODULE_3__["TodoListController"](new _TodoListModel__WEBPACK_IMPORTED_MODULE_4__["TodoListModel"]('Default'), new _TodoListView__WEBPACK_IMPORTED_MODULE_5__["TodoListView"]()));
    project.view.renderName(name);
    project.view.render(project.model.todoLists);
    project.view.renderForm(project.model.form);
    project.view.getForm();
    project.bindAll();
    this.view.renderBtn(name, project.model.id);
    document.querySelector(`[data-project="project-${project.model.id}"]`).addEventListener('click', () => this.handleNavClick(project));
  } // Links the newly created navigation button to its project


  handleNavClick(project) {
    project.view.renderName(project.model.name);
    project.view.render(project.model.todoLists);
    project.view.renderForm(project.model.form);
    project.view.getForm();
    project.bindAll();
  } // When a project is deleted, it is removed from the model and from the navigation.
  // The Homepage is displayed instead.


  handleDeleteProject(id) {
    this.model.deleteProject(id);
    document.querySelector(`[data-project="project-${id}"]`).remove();
    document.querySelector('[data-project="project-1"]').dispatchEvent(new Event('click'));
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
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
    project.id = this.projects.length;
  }

  deleteProject(id) {
    this.projects = this.projects.filter(project => project.id !== id);
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
    this.projectSubmit.addEventListener('click', () => {
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
    this.toggleBtn.forEach(toggleBtn => toggleBtn.addEventListener('click', handler));
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
/* harmony import */ var _TodoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoForm */ "./src/TodoForm.js");

class Todo {
  constructor(title, description, date, priority = 'none') {
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
    this.bindAddToggle(this.handleToggle);
    this.bindPriorityToggle(this.handleToggle);
    this.bindPriorityLabel(this.handlePriorityLabel.bind(this));
    this.bindResetPriority(this.handleResetPriority.bind(this));
  }

  renderEdit(before) {
    const formContainer = document.createElement('div');
    formContainer.classList.add(`${this.goal}__todo`);
    formContainer.append(this._renderForm());
    before.after(formContainer);
    this.bindPriorityToggle(this.handleToggle);
    this.bindPriorityLabel(this.handlePriorityLabel.bind(this));
  } // Enable form toggle


  bindPriorityToggle(handler) {
    this.priorityBtn.addEventListener('click', handler);
  }

  bindAddToggle(handler) {
    this.formBtn.addEventListener('click', handler);
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
/* harmony import */ var _TodoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoForm */ "./src/TodoForm.js");

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

    new _TodoForm__WEBPACK_IMPORTED_MODULE_0__["TodoForm"]('edit', id).renderEdit(document.querySelector(`[id="${id}"]`));
    this.view.getEditForm(id);
    this.view.setEditForm(id);
  }

  bindAll() {
    this.view.bindAddTodo(this.handleAddTodo.bind(this));
    this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));
    this.view.bindOpenEdit(this.handleOpenEdit.bind(this));
    this.view.bindEditTodo(this.handleEditTodo.bind(this));
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
    this.name = name === '' ? 'Untitled' : name;
    this.todos = [];
    this.id = ++TodoListModel.counter;
    this.form = new _TodoForm__WEBPACK_IMPORTED_MODULE_0__["TodoForm"]('add', this.id);
  }

  addTodo(todo) {
    this.todos.push(todo);
    this.onTodoListChange(this.todos);
  }

  editTodo(updatedTodo, id) {
    console.log(this.todos);
    this.todos = this.todos.map(todo => {
      if (todo.id === +id) {
        return updatedTodo;
      } else {
        return todo;
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
    this.name = document.createElement('h2');
    this.name.classList.add('section__name');
    this.name.innerHTML = name;
    this.section.prepend(this.name);
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


  getEditForm(id) {
    this.titleEdit = document.querySelector(`#edit-todo-${id} [name="title"]`);
    this.descriptionEdit = document.querySelector(`#edit-todo-${id} [name="description"]`);
    this.dateEdit = document.querySelector(`#edit-todo-${id} [name="date"]`);
    this.priorityEdit = document.querySelector(`#edit-todo-${id} .btn--toggle`);
  } // Automatically pre-fill the Edit form inputs


  setEditForm(id) {
    this.titleEdit.value = document.querySelector(`[id="${id}"] .to-do__title`).innerHTML;
    this.descriptionEdit.value = document.querySelector(`[id="${id}"] .to-do__description`).innerHTML;
    this.dateEdit.value = document.querySelector(`[id="${id}"] .to-do__date`).innerHTML;
    this.priorityEdit.classList.add(document.querySelector(`[id="${id}"] .to-do__priority`).classList[1]);
    document.querySelector(`#edit-todo-${id} [id^="${document.querySelector(`[id="${id}"] .to-do__priority`).classList[1]}"]`).checked = true;
  } // Get the Edit form values
  // Reset form inputs


  _resetInputs() {
    this.title.value = '';
    this.description.value = '';
    this.date.value = '';
    document.querySelector('[for^="priority-none"]').checked = true;
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
  } // Open form to edit the todo


  bindOpenEdit(handler) {
    this.todoList.addEventListener('click', event => {
      if (!event.target.closest('button')) return;

      if (event.target.closest('button').classList.contains('btn--edit')) {
        const id = parseInt(event.target.closest('.to-do').id);
        handler(id);
      }
    });
  }

  bindEditTodo(handler) {
    this.todoList.addEventListener('click', event => {
      if (event.target.innerHTML === 'Edit Task') {
        const id = event.target.closest('form').id.slice(10);
        const updatedTodo = new _Todo__WEBPACK_IMPORTED_MODULE_0__["Todo"]('test', 'test', '', 'none');
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




const app = new _AppController__WEBPACK_IMPORTED_MODULE_1__["AppController"](new _AppModel__WEBPACK_IMPORTED_MODULE_2__["AppModel"](), new _AppView__WEBPACK_IMPORTED_MODULE_3__["AppView"]()); // Create a default project. It cannot be deleted as it acts as a "Home Page".

app.handleAddProject('Default');
document.querySelector('.btn--delete').remove();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9kb0xpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL21haW4uc2Nzcz82YTE3Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsIkFwcENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsIm1vZGVsIiwidmlldyIsImJpbmRBZGRQcm9qZWN0IiwiaGFuZGxlQWRkUHJvamVjdCIsImJpbmQiLCJiaW5kRGVsZXRlUHJvamVjdCIsImhhbmRsZURlbGV0ZVByb2plY3QiLCJiaW5kVG9nZ2xlIiwiaGFuZGxlVG9nZ2xlIiwiYmluZE5hdlRvZ2dsZSIsImhhbmRsZU5hdlRvZ2dsZSIsImJpbmRQcmlvcml0eSIsImhhbmRsZVByaW9yaXR5IiwiYmluZERpc3BsYXlBbGwiLCJoYW5kbGVEaXNwbGF5QWxsIiwiYmluZERhdGVUb2RheSIsImhhbmRsZVRvZGF5IiwiYmluZERhdGVVcGNvbWluZyIsImhhbmRsZVVwY29taW5nIiwiYmluZERhdGVBbnl0aW1lIiwiaGFuZGxlQW55dGltZSIsImJpbmRIb21lIiwiaGFuZGxlSG9tZSIsIm5hbWUiLCJwcm9qZWN0IiwiUHJvamVjdENvbnRyb2xsZXIiLCJQcm9qZWN0TW9kZWwiLCJQcm9qZWN0VmlldyIsImNvdW50ZXIiLCJhZGRQcm9qZWN0IiwiYWRkVG9kb0xpc3QiLCJUb2RvTGlzdENvbnRyb2xsZXIiLCJUb2RvTGlzdE1vZGVsIiwiVG9kb0xpc3RWaWV3IiwicmVuZGVyTmFtZSIsInJlbmRlciIsInRvZG9MaXN0cyIsInJlbmRlckZvcm0iLCJmb3JtIiwiZ2V0Rm9ybSIsImJpbmRBbGwiLCJyZW5kZXJCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTmF2Q2xpY2siLCJkZWxldGVQcm9qZWN0IiwicmVtb3ZlIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwidG9nZ2xlIiwiY2xhc3NMaXN0IiwibmF2IiwibWFpbiIsInByaW9yaXR5IiwidG9kb3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRvZG8iLCJhZGQiLCJfc2FtZURheSIsImRhdGUxIiwiZGF0ZTIiLCJ0b2RvRGF0ZSIsIkRhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInRvZGF5IiwiZGF0ZSIsIkFwcE1vZGVsIiwicHJvamVjdHMiLCJmaWx0ZXIiLCJBcHBWaWV3IiwiY29udGFpbmVyIiwiaG9tZUJ0biIsInByb2plY3RJbnB1dCIsInByb2plY3RTdWJtaXQiLCJzb3J0VGl0bGUiLCJzb3J0RGVzY3JpcHRpb24iLCJzb3J0RGF0ZSIsInNvcnRQcmlvcml0eSIsImRpc3BsYXlBbGxCdG4iLCJwcmlvcml0eUJ0biIsImRhdGVUb2RheUJ0biIsImRhdGVVcGNvbWluZ0J0biIsImRhdGVBbnl0aW1lQnRuIiwibmF2QnRuIiwidG9nZ2xlQnRuIiwiX3Byb2plY3ROYW1lIiwidmFsdWUiLCJfcmVzZXRJbnB1dCIsImxpIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJ1dHRvbiIsImlubmVySFRNTCIsImNsb3NlQnRuIiwiYXBwZW5kIiwiaGFuZGxlciIsImNsb3Nlc3QiLCJjb250YWlucyIsInNsaWNlIiwib25Qcm9qZWN0Q2hhbmdlIiwiYmluZFByb2plY3RDaGFuZ2UiLCJoYW5kbGVBZGRUb2RvTGlzdCIsInRvZG9MaXN0IiwiaGFuZGxlRGVsZXRlVG9kb0xpc3QiLCJkZWxldGVUb2RvTGlzdCIsImJpbmRBZGRTZWN0aW9uIiwiU2VjdGlvbkZvcm0iLCJlZGl0VG9kb0xpc3QiLCJ1cGRhdGUiLCJjYWxsYmFjayIsInNlY3Rpb25zIiwibmFtZUlucHV0Iiwic3VibWl0IiwiX3NlY3Rpb25OYW1lIiwiY3JlYXRlU2VjdGlvbiIsImZvcm1Db250YWluZXIiLCJmb3JtQnRuIiwibGFiZWxOYW1lIiwiZmluaXNoIiwic3VibWl0QnRuIiwiY2FuY2VsQnRuIiwiVG9kbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlZGl0Rm9ybSIsIlRvZG9Gb3JtIiwidG9kb0VsZW0iLCJ0b2RvQ2hlY2siLCJjb21wb25lbnRzIiwiY29tcG9uZW50IiwidG9kb0NvbXBvbmVudCIsInRvZG9Qcmlvcml0eSIsInRvZG9FZGl0IiwiZ29hbCIsIl9yZW5kZXJGb3JtIiwibGFiZWxUaXRsZSIsImxhYmVsRGVzY3JpcHRpb24iLCJkZXRhaWxzIiwibGFiZWxEYXRlIiwicHJpb3JpdHlDb250YWluZXIiLCJwcmlvcml0aWVzIiwicHJpb3JpdGllc0xpc3QiLCJsYWJlbFByaW9yaXR5IiwiaW5wdXRQcmlvcml0eSIsInRvVXBwZXJDYXNlIiwicmVuZGVyQWRkIiwiYmluZEFkZFRvZ2dsZSIsImJpbmRQcmlvcml0eVRvZ2dsZSIsImJpbmRQcmlvcml0eUxhYmVsIiwiaGFuZGxlUHJpb3JpdHlMYWJlbCIsImJpbmRSZXNldFByaW9yaXR5IiwiaGFuZGxlUmVzZXRQcmlvcml0eSIsInJlbmRlckVkaXQiLCJiZWZvcmUiLCJhZnRlciIsImxhYmVscyIsImxhYmVsIiwic3R5bGUiLCJjb2xvciIsImdldENvbXB1dGVkU3R5bGUiLCJvblRvZG9MaXN0Q2hhbmdlIiwiYmluZFRvZG9MaXN0Q2hhbmdlIiwiaGFuZGxlQWRkVG9kbyIsImFkZFRvZG8iLCJoYW5kbGVFZGl0VG9kbyIsInVwZGF0ZWRUb2RvIiwiZWRpdFRvZG8iLCJoYW5kbGVEZWxldGVUb2RvIiwiZGVsZXRlVG9kbyIsImhhbmRsZU9wZW5FZGl0IiwiZ2V0RWRpdEZvcm0iLCJzZXRFZGl0Rm9ybSIsImJpbmRBZGRUb2RvIiwiYmluZERlbGV0ZVRvZG8iLCJiaW5kT3BlbkVkaXQiLCJiaW5kRWRpdFRvZG8iLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsInByZXBlbmQiLCJfdG9kb1RpdGxlIiwiX3RvZG9EZXNjcmlwdGlvbiIsIl90b2RvRGF0ZSIsIl90b2RvUHJpb3JpdHkiLCJ0aXRsZUVkaXQiLCJkZXNjcmlwdGlvbkVkaXQiLCJkYXRlRWRpdCIsInByaW9yaXR5RWRpdCIsImNoZWNrZWQiLCJfcmVzZXRJbnB1dHMiLCJwYXJzZUludCIsInBhcmVudEVsZW1lbnQiLCJhcHAiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDNEY7QUFDNUYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLHNCQUFzQixtbUJBQW1tQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLGlKQUFpSixtQkFBbUIsR0FBRyxVQUFVLG1CQUFtQixHQUFHLFlBQVkscUJBQXFCLEdBQUcsbUJBQW1CLGlCQUFpQixHQUFHLDZEQUE2RCxrQkFBa0Isa0JBQWtCLEdBQUcsV0FBVyw4QkFBOEIsc0JBQXNCLEdBQUcsc0JBQXNC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TSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FB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U0Q7O0FBbEl1QjtBQXFJMUJxRCxZQUFZLENBQUNMLE9BQWIsR0FBdUIsQ0FBdkIsQzs7Ozs7Ozs7Ozs7O0FDdklBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTTJLLEdBQUcsR0FBRyxJQUFJek0sNERBQUosQ0FBa0IsSUFBSTJFLGtEQUFKLEVBQWxCLEVBQWtDLElBQUlHLGdEQUFKLEVBQWxDLENBQVosQyxDQUVBOztBQUNBMkgsR0FBRyxDQUFDcE0sZ0JBQUosQ0FBcUIsU0FBckI7QUFDQXVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixFQUF1Q0ksTUFBdkMsRzs7Ozs7Ozs7Ozs7QUNUQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDRNQUFvRzs7QUFFdEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xcbn1cXG5cXG4ubm8tZGlzcGxheSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnRuLS1wYWdlLS1oZWFkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWNhbmNlbCB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLmJ0bi0tY2FuY2VsOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9ZGF0ZV0ge1xcbiAgY29sb3I6ICM4ZThlOGU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG5cXG4uYnRuLS1jYW5jZWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmJ0bi0tYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXI6YmVmb3JlLCAuYnRuLS1zZWN0aW9uOmhvdmVyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5idG4tLXNlY3Rpb246YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLmJ0bi0tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG5cXG4uYnRuLS1lZGl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgYm90dG9tOiAwO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYnRuLS1lZGl0OmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuXFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUsIC5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMCAxLjI1cmVtO1xcbn1cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5uYXYgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2X19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZCB7XFxuICBjb2xvcjogI2U3OWE2NztcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogIzVkOTc1YjtcXG59XFxuXFxuLnByaW9yaXR5LW5vbmUge1xcbiAgY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibJcXFwiO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibRcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Es1xcXCI7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNDA0MjllO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWI5OTYzO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOGQ1YTg5O1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29sb3I6ICM3YTdhN2E7XFxufVxcblxcbi5kYXRlLWxhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzk0MjAyMDtcXG59XFxuXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvjKhcXFwiO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYlcXFwiO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29sb3I6ICMzMDVjMzA7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYmI5NGY7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzY2OTc5MTtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRvLWRvX19jaGVjayB7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxufVxcbi50by1kbzpob3ZlciAuYnRuLS1lZGl0IHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgbGluZWFyO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LFxcbi5lZGl0X19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxufVxcbi5hZGRfX2NvbnRlbnQtLXRvZG8sXFxuLmVkaXRfX2NvbnRlbnQtLXRvZG8ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG59XFxuLmFkZF9fY29udGVudC0tcHJvamVjdCxcXG4uZWRpdF9fY29udGVudC0tcHJvamVjdCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHBhZGRpbmc6IDAuMTVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcblxcbi5hZGRfX2RldGFpbHMsXFxuLmVkaXRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5hZGRfX3ByaW9yaXR5LFxcbi5lZGl0X19wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hZGRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dLFxcbi5lZGl0X19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTZweDtcXG4gIGxlZnQ6IDE0cHg7XFxufVxcbi5hZGQtcHJpb3JpdHkgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuXFxuLmFkZF9fZmluaXNoLFxcbi5lZGl0X19maW5pc2gge1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhZ2VfX2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiAjMmEyYjY4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwgbGk6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm5hdiB7XFxuICBiYWNrZ3JvdW5kOiAjZWVmMGYxO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4yNSk7XFxuICBwYWRkaW5nOiAycmVtIDAuMjVyZW0gMCAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG59XFxuLm5hdi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG4ubmF2X19jYXRlZ29yeTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNCk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSA+IC5idG4ge1xcbiAgZmxleDogMTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNyk7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbn1cXG5cXG4ubWFpbi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1cHgpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvYmFzZS9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvYmFzZS9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvdXRpbHMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvdXRpbHMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9faWNvbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX3RvZG8uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX2Ryb3Bkb3duLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX25hdi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7O0VBYUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBRENEOztBQ0NBLGdEQUFBO0FBQ0E7O0VBRUMsY0FBQTtBREVEOztBQ0FBO0VBQ0MsY0FBQTtBREdEOztBQ0RBO0VBQ0MsZ0JBQUE7QURJRDs7QUNGQTtFQUNDLFlBQUE7QURLRDs7QUNIQTs7RUFFQyxXQUFBO0VBQ0EsYUFBQTtBRE1EOztBQ0pBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBRE9EOztBQ0pBOztFQUVDLFlBQUE7QURPRDtBQ0xDOztFQUNDLGFBQUE7QURRRjs7QUNKQTtFQUNDLHNCQUFBO0FET0Q7O0FDSkE7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURPRDs7QUNKQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FET0Q7O0FDSkE7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QURPRDs7QUNKQTtFQUNDLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0MsOEJBQUE7QURPRjs7QUNKQTtFQUNDLHdCQUFBO0FET0Q7O0FFaEdBOztFQUVFLGtDQ0RhO0VERWIsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FGbUdGOztBRWhHQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0NQYztFRFFkLHFCQUFBO0VBQ0Esa0JBQUE7QUZtR0Y7O0FFaEdBO0VBQ0UsZ0JBQUE7QUZtR0Y7O0FFL0ZFO0VBQ0UsV0NmVztBSGlIZjtBRS9GRTtFQUNFLGtCQUFBO0FGaUdKO0FFOUZFO0VBRUUseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FGK0ZKO0FFNUZFO0VBQ0UsV0FBQTtBRjhGSjtBRTNGRTtFQUNFLDZCQUFBO0FGNkZKO0FFM0ZJO0VBQ0UsNkJBQUE7QUY2Rk47QUV6RkU7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0FGMkZKO0FFekZJO0VBQ0UsOEJBQUE7QUYyRk47O0FFakZFO0VBQ0UseUJBQUE7RUFDQSxjQzdEWTtFRDhEWixnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUZvRko7O0FFaEZBO0VBQ0UsMEJBQUE7QUZtRkY7QUVqRkU7RUFDRSxXQUFBO0FGbUZKOztBRTlFQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUZpRkY7O0FFOUVBO0VBQ0UsZ0JBQUE7QUZpRkY7O0FFNUVBOztFQUVFLGtDQzlGYTtBSDZLZjs7QUU1RUE7RUFDRSxnQkFBQTtBRitFRjs7QUU1RUE7RUFDRSxjQzdGVztBSDRLYjs7QUU1RUE7RUFDRSxpQkFBQTtBRitFRjs7QUkxTEE7RUFDQyxZQUFBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0FKNkxGO0FJM0xFO0VBQ0UsYUFBQTtBSjZMSjs7QUl6TEE7O0VBRUUsdUJBQUE7QUo0TEY7O0FJekxBO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FKNExGO0FJMUxFO0VBQ0Usa0NBQUE7QUo0TEo7O0FJeExBO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FKMkxGOztBSXhMQTtFQUNFLFlEMEJTO0VDekJULDZCQUFBO0VDM0JBLGtDQUFBO0VBQ0EsZ0JBQUE7RUQ0QkEsY0FBQTtBSjRMRjs7QUl6TEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBSjRMRjtBSTFMRTtFQUVFLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FKMkxKO0FJeExFO0VBRUUsd0NBQUE7QUp5TEo7QUl0TEU7RUFDRSxrQkFBQTtBSndMSjtBSXJMRTtFQUNFLGlCQUFBO0FKdUxKOztBSW5MQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBSnNMRjs7QUluTEE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUpzTEY7O0FJbkxBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBSnNMRjtBSXBMRTtFQUNFLDhCQUFBO0FKc0xKOztBTXZRRTtFQUlFLDJCSHNEWTtBSGlOaEI7QU1wUUU7RURUQSxrQ0FBQTtFQUNBLGdCQUFBO0FMZ1JGO0FNblFFO0VBQ0UsWUFBQTtFQUNBLDZCSFJhO0FINlFqQjtBTWxRRTtFQUNFLFlIcUNPO0VFcERULGtDQUFBO0VBQ0EsZ0JBQUE7QUxvUkY7QU1sUUU7RUFDRSxZQUFBO0VEekJGLGtDQUFBO0VBQ0EsZ0JBQUE7QUw4UkY7O0FNL1BFO0VBQ0UsY0h0QmE7QUh3UmpCOztBTW5RRTtFQUNFLGNIdEJhO0FINFJqQjs7QU12UUU7RUFDRSxjSHRCYTtBSGdTakI7O0FNM1FFO0VBQ0UsY0h0QmE7QUhvU2pCOztBS3BTSTtFQUNFLFlGeUJPO0FIOFFiOztBS3hTSTtFQUNFLFlGeUJPO0FIa1JiOztBSzVTSTtFQUNFLFlGeUJPO0FIc1JiOztBS2hUSTtFQUNFLFlGeUJPO0FIMFJiOztBSzVTSTtFQUNFLGNGRk87QUhpVGI7O0FLaFRJO0VBQ0UsY0ZGTztBSHFUYjs7QUtwVEk7RUFDRSxjRkZPO0FIeVRiOztBS3hUSTtFQUNFLGNGRk87QUg2VGI7O0FLNVRJO0VBQ0UsY0ZGTztBSGlVYjs7QU16U0E7RUFDRSxZQUFBO0VBQ0EsY0h4Q2M7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XFxcIlVURi04XFxcIjtcXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xcbn1cXG5cXG4ubm8tZGlzcGxheSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnRuLS1wYWdlLS1oZWFkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWNhbmNlbCB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLmJ0bi0tY2FuY2VsOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG4uYnRuLS1zZWN0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNzUpO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5bZGF0YS10b2dnbGU9YWRkLXByb2plY3RdOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9ZGF0ZV0ge1xcbiAgY29sb3I6ICM4ZThlOGU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG5cXG4uYnRuLS1jYW5jZWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmJ0bi0tYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uYnRuLS1zZWN0aW9uOmJlZm9yZSwgLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbi5idG4tLXNlY3Rpb246aG92ZXI6YmVmb3JlLCAuYnRuLS1zZWN0aW9uOmhvdmVyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5idG4tLXNlY3Rpb246YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmJ0bi0tc2VjdGlvbjphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLmJ0bi0tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYnRuLS1kZWxldGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG5cXG4uYnRuLS1lZGl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgYm90dG9tOiAwO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYnRuLS1lZGl0OmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjc1KTtcXG59XFxuXFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUsIC5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlLCAubmF2X19zb3J0cyBsaTpiZWZvcmUge1xcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMCAxLjI1cmVtO1xcbn1cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5uYXYgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2X19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZCB7XFxuICBjb2xvcjogI2U3OWE2NztcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogIzVkOTc1YjtcXG59XFxuXFxuLnByaW9yaXR5LW5vbmUge1xcbiAgY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibJcXFwiO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibRcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Es1xcXCI7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNDA0MjllO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWI5OTYzO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOGQ1YTg5O1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29sb3I6ICM3YTdhN2E7XFxufVxcblxcbi5kYXRlLWxhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzk0MjAyMDtcXG59XFxuXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG5cXG4uc29ydC10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvjKhcXFwiO1xcbn1cXG5cXG4uc29ydC1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYlcXFwiO1xcbn1cXG5cXG4uc29ydC1kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5zb3J0LXByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxufVxcblxcbi5zb3J0LXRpdGxlOjpiZWZvcmUge1xcbiAgY29sb3I6ICMzMDVjMzA7XFxufVxcblxcbi5zb3J0LWRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYmI5NGY7XFxufVxcblxcbi5zb3J0LWRhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzY2OTc5MTtcXG59XFxuXFxuLnNvcnQtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRvLWRvX19jaGVjayB7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxufVxcbi50by1kbzpob3ZlciAuYnRuLS1lZGl0IHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgbGluZWFyO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LFxcbi5lZGl0X19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxufVxcbi5hZGRfX2NvbnRlbnQtLXRvZG8sXFxuLmVkaXRfX2NvbnRlbnQtLXRvZG8ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG59XFxuLmFkZF9fY29udGVudC0tcHJvamVjdCxcXG4uZWRpdF9fY29udGVudC0tcHJvamVjdCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHBhZGRpbmc6IDAuMTVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcblxcbi5hZGRfX2RldGFpbHMsXFxuLmVkaXRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5hZGRfX3ByaW9yaXR5LFxcbi5lZGl0X19wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hZGRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dLFxcbi5lZGl0X19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTZweDtcXG4gIGxlZnQ6IDE0cHg7XFxufVxcbi5hZGQtcHJpb3JpdHkgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuXFxuLmFkZF9fZmluaXNoLFxcbi5lZGl0X19maW5pc2gge1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhZ2VfX2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiAjMmEyYjY4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwgbGk6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm5hdiB7XFxuICBiYWNrZ3JvdW5kOiAjZWVmMGYxO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4yNSk7XFxuICBwYWRkaW5nOiAycmVtIDAuMjVyZW0gMCAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG59XFxuLm5hdi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG4ubmF2X19jYXRlZ29yeTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNCk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSA+IC5idG4ge1xcbiAgZmxleDogMTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNyk7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbn1cXG5cXG4ubWFpbi0taGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1cHgpO1xcbn1cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXG5cXHQmOmZvY3VzIHtcXG5cXHRcXHRvdXRsaW5lOiBub25lO1xcblxcdH1cXG59XFxuXFxuKiB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogNTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjI1ZW0pO1xcbn1cXG5cXG4ubm8tZGlzcGxheSB7XFxuXFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cIixcImJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbiAgZm9udC1zaXplOiAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnRuIHtcXG4gICYtLXBhZ2UtLWhlYWRlciB7XFxuICAgIGNvbG9yOiAkY29sb3ItaGVhZGVyO1xcbiAgfVxcblxcbiAgJi0taWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG5cXG4gICYtLXN1Ym1pdCxcXG4gICYtLWNhbmNlbCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogLjg1ZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAtLjVweDtcXG4gIH1cXG5cXG4gICYtLXN1Ym1pdCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcblxcbiAgJi0tY2FuY2VsIHtcXG4gICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJi0tc2VjdGlvbiB7XFxuICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjc1KTtcXG4gICAgfVxcblxcbiAgfVxcblxcbn1cXG5cXG4vLyBOYXZcXG5cXG4ubmF2IHtcXG4gICYtLWhlYWRpbmcge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMi41O1xcbiAgfVxcbn1cXG5cXG5bZGF0YS10b2dnbGU9XFxcImFkZC1wcm9qZWN0XFxcIl0ge1xcbiAgY29sb3I6IHJnYmEoIzAwMCwgLjc1KTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gIH1cXG5cXG59XFxuXFxuLm1haW5fX2hlYWRlciBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi50by1kb19fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLy8gRm9ybVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbn1cXG5cXG5bbmFtZT1cXFwidGl0bGVcXFwiXSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5bbmFtZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGNvbG9yOiAkY29sb3ItZm9ybTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XCIsXCIvLyBGb250c1xcbiRmb250LXByaW1hcnk6ICdOYW51bSBHb3RoaWMnLCBBcmlhbDtcXG5cXG5cXG4vLyBDb2xvcnNcXG4kY29sb3ItcHJpbWFyeTogcmdiKDQyLCA0MywgMTA0KTtcXG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMjM4LCAyNDAsIDI0MSk7XFxuXFxuJGNvbG9yLWhlYWRlcjogI2ZmZjtcXG4kY29sb3ItcHJvamVjdHM6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4kY29sb3ItZm9ybTogcmdiKDE0MiwgMTQyLCAxNDIpO1xcblxcbiRjb2xvci1wcmlvcml0eTogKFxcbiAgaGlnaDogcmdiKDE2MSwgNjYsIDY2KSxcXG4gIG1lZDogcmdiKDIzMSwgMTU0LCAxMDMpLFxcbiAgbG93OiByZ2IoOTMsIDE1MSwgOTEpLFxcbiAgbm9uZTogcmdiKDE5OSwgMTk5LCAxOTkpXFxuKTtcXG5cXG4kY29sb3ItZGF0ZTogKFxcbiAgYWxsOiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxNSUpLFxcbiAgdG9kYXk6IHJnYigyMzUsIDE1MywgOTkpLFxcbiAgdXBjb21pbmc6IHJnYigxNDEsIDkwLCAxMzcpLFxcbiAgYW55dGltZTogcmdiKDEyMiwgMTIyLCAxMjIpLFxcbiAgbGF0ZTogcmdiKDE0OCwgMzIsIDMyKVxcbik7XFxuXFxuJGNvbG9yLXNvcnQ6IChcXG4gIHRpdGxlOiByZ2IoNDgsIDkyLCA0OCksXFxuICBkZXNjcmlwdGlvbjogcmdiKDIzNSwgMTg1LCA3OSksXFxuICBkYXRlOiByZ2IoMTAyLCAxNTEsIDE0NSksXFxuICBwcmlvcml0eTogbWFwLWdldCgkY29sb3ItcHJpb3JpdHksIGhpZ2gpXFxuKTtcXG5cXG4vLyBJY29uc1xcblxcbiRpY29uLXByaW9yaXR5OiBcXFwiXFxcXGYwMmVcXFwiO1xcblxcbiRpY29ucy1kYXRlOiAoXFxuICBhbGw6IFxcXCJcXFxcZjA3M1xcXCIsXFxuICB0b2RheTogXFxcIlxcXFxmMjcyXFxcIixcXG4gIHVwY29taW5nOiBcXFwiXFxcXGYyNzRcXFwiLFxcbiAgYW55dGltZTogXFxcIlxcXFxmMTMzXFxcIixcXG4pO1xcblxcbiRpY29ucy1jYXJldDogKFxcbiAgdXA6IFxcXCJcXFxcZjBkOFxcXCIsXFxuICBkb3duOiBcXFwiXFxcXGYwZDdcXFwiLFxcbiAgcmlnaHQ6IFxcXCJcXFxcZjBkYVxcXCJcXG4pO1xcblxcbiRpY29ucy1zb3J0OiAoXFxuICB0aXRsZTogXFxcIlxcXFxmMzI4XFxcIixcXG4gIGRlc2NyaXB0aW9uOiBcXFwiXFxcXGYyNDlcXFwiLFxcbiAgZGF0ZTogXFxcIlxcXFxmMDczXFxcIixcXG4gIHByaW9yaXR5OiAkaWNvbi1wcmlvcml0eSxcXG4pO1xcblxcbiRpY29uLWFkZDogXFxcIlxcXFxmMDY3XFxcIjtcXG5cXG4vLyBPdGhlcnNcXG4kbWFyZ2luLWluZGVudDogMCAuMjVyZW0gMCAxLjI1cmVtO1wiLFwiYnV0dG9uIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgXFxuICAmOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmJ0bi0tc3VibWl0LFxcbi5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAuMTVyZW0gLjVyZW07XFxufVxcbiAgXFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogLjI1cmVtO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43KTtcXG4gIH1cXG59XFxuXFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoI2ZmZiwgLjUpO1xcbn1cXG5cXG4uYnRuLS1hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICRpY29uLWFkZDtcXG4gIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLmJ0bi0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcblxcbiAgJjpiZWZvcmUsXFxuICAmOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC4yNSk7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICB9XFxuXFxuICAmOmhvdmVyOmJlZm9yZSxcXG4gICY6aG92ZXI6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICB9XFxuXFxuICAmOmJlZm9yZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIH1cXG5cXG4gICY6YWZ0ZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIH1cXG59XFxuXFxuLmJ0bi0tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXFxufVxcblxcbi5idG4tLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG59XFxuXFxuLmJ0bi0tZWRpdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTVweDtcXG4gIGJvdHRvbTogMDtcXG4gIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNzUpO1xcbiAgfVxcblxcbn1cIixcIkBtaXhpbiBmb250LWF3ZXNvbWUtNDAwKCkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbkBtaXhpbiBmb250LWF3ZXNvbWUtNzAwKCkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbkBtaXhpbiBpY29uLWNvbnRlbnQoJHRhcmdldCwgJG1hcCkge1xcbiAgQGVhY2ggJGtleSwgJGljb24gaW4gJG1hcCB7XFxuICAgIC4jeyR0YXJnZXR9LSN7JGtleX06OmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJGljb247XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIGljb24tY29sb3IoJHRhcmdldCwgJG1hcCkge1xcbiAgQGVhY2ggJGtleSwgJGNvbG9yIGluICRtYXAge1xcbiAgICAuI3skdGFyZ2V0fS0jeyRrZXl9OjpiZWZvcmUge1xcbiAgICAgIGNvbG9yOiAkY29sb3I7XFxuICAgIH1cXG4gIH1cXG59XCIsXCIvLyBOQVYtSUNPTlNcXG5cXG4ubmF2IHtcXG4gICZfX3RvLWRvIGxpOmJlZm9yZSxcXG4gICZfX3Byb2plY3RzIGxpOmJlZm9yZSxcXG4gICZfX2ZpbHRlcnMgbGk6YmVmb3JlLFxcbiAgJl9fc29ydHMgbGk6YmVmb3JlIHtcXG4gICAgbWFyZ2luOiAkbWFyZ2luLWluZGVudDtcXG4gIH1cXG5cXG4gICZfX3RvLWRvIGxpOmJlZm9yZSxcXG4gICZfX3NvcnRzIGxpOmJlZm9yZSB7XFxuICAgIEBpbmNsdWRlIGZvbnQtYXdlc29tZS00MDAoKTtcXG4gIH1cXG5cXG4gICZfX3Byb2plY3RzIGxpOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgICBjb2xvcjogJGNvbG9yLXByb2plY3RzO1xcbiAgfVxcblxcbiAgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICRpY29uLWFkZDtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbiAgfVxcblxcbiAgJl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMmVcXFwiO1xcbiAgICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNDAwKCk7XFxuICB9XFxufVxcblxcbi8vIENvbG9yIFByaW9yaXR5IEljb25zXFxuQGVhY2ggJGxldmVsLCAkY29sb3IgaW4gJGNvbG9yLXByaW9yaXR5IHtcXG4gIC5wcmlvcml0eS0jeyRsZXZlbH0ge1xcbiAgICBjb2xvcjogJGNvbG9yO1xcbiAgfVxcbn1cXG5cXG4vLyBEYXRlIEljb25zXFxuQGluY2x1ZGUgaWNvbi1jb250ZW50KCdkYXRlJywgJGljb25zLWRhdGUpO1xcbkBpbmNsdWRlIGljb24tY29sb3IoJ2RhdGUnLCAkY29sb3ItZGF0ZSk7XFxuXFxuLy8gQ2F0ZWdvcnkgSWNvbnNcXG4ubmF2LS1oZWFkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBtYXAtZ2V0KCRpY29ucy1jYXJldCwgZG93bik7XFxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxuICBtYXJnaW4tcmlnaHQ6IC43NXJlbTtcXG59XFxuXFxuLy8gU29ydCBJY29uc1xcbkBpbmNsdWRlIGljb24tY29udGVudCgnc29ydCcsICRpY29ucy1zb3J0KTtcXG5AaW5jbHVkZSBpY29uLWNvbG9yKCdzb3J0JywgJGNvbG9yLXNvcnQpO1xcblxcbi8vIE1BSU4gSUNPTlNcXG5cXG4ubWFpbl9faGVhZGVyIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBtYXAtZ2V0KCRpY29ucy1jYXJldCwgZG93bik7XFxuICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxufVwiLFwiLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIFxcbiAgJl9fY2hlY2sge1xcbiAgICBtYXJnaW4tdG9wOiA3cHg7XFxuICB9XFxuXFxuICAmOmhvdmVyIC5idG4tLWVkaXQge1xcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgfVxcblxcbn1cIixcIi5kcm9wZG93biB7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjM1cyBsaW5lYXI7XFxufVwiLFwiLmFkZF9fY29udGVudCxcXG4uZWRpdF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuXFxuICAmLS10b2RvIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogLjI1cmVtIDFyZW07XFxuICB9XFxuXFxuICAmLS1wcm9qZWN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgcGFkZGluZzogLjE1cmVtO1xcbiAgfVxcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbltuYW1lPVxcXCJ0aXRsZVxcXCJdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMSk7XFxufVxcblxcbi5hZGRfX2RldGFpbHMsXFxuLmVkaXRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5hZGRfX3ByaW9yaXR5LFxcbi5lZGl0X19wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAxLjY1cmVtO1xcbiAgei1pbmRleDogMTtcXG5cXG4gICY6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmZjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC01cHg7XFxuICAgIGxlZnQ6IDE1cHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICAmOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC02cHg7XFxuICAgIGxlZnQ6IDE0cHg7XFxuICB9XFxuXFxuICBsYWJlbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIC41cmVtO1xcbiAgfVxcbn1cXG5cXG4uYWRkX19maW5pc2gsXFxuLmVkaXRfX2ZpbmlzaCB7XFxuICBtYXJnaW46IC41cmVtIDFyZW07XFxufVxcblxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSgjZmZmLCAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsXCIucGFnZV9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6ICRjb2xvci1wcmltYXJ5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBcXG5cXG4gIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgJiBsaTpsYXN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgfVxcbiAgfVxcbn1cIixcIi5uYXYge1xcbiAgXFxuICBiYWNrZ3JvdW5kOiAkY29sb3Itc2Vjb25kYXJ5O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjI1KTtcXG4gIHBhZGRpbmc6IDJyZW0gLjI1cmVtIDAgMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcXG5cXG4gICYtLWhpZGRlbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB9XFxuXFxuICAmX19jYXRlZ29yeSB7XFxuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG5cXG4gICAgJjpsYXN0LW9mLXR5cGUge1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgbGkge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMDQpO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmhvdmVyIC5idG4tLWRlbGV0ZSB7XFxuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgICAgIH1cXG5cXG4gICAgICA+IC5idG4ge1xcbiAgICAgICAgLy8gTWFrZXMgdGhlIHdob2xlIGxpbmUgY2xpY2thYmxlIGluc3RlYWQgb2YganVzdCB0aGUgdGV4dC5cXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtLWhlYWRpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMDcpO1xcbiAgICB9XFxuICB9XFxufVwiLFwibWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG59XFxuXFxuLm1haW4tLWhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNXB4KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFByb2plY3RDb250cm9sbGVyIH0gZnJvbSAnLi9Qcm9qZWN0Q29udHJvbGxlcidcbmltcG9ydCB7IFByb2plY3RNb2RlbCB9IGZyb20gJy4vUHJvamVjdE1vZGVsJ1xuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tICcuL1Byb2plY3RWaWV3J1xuaW1wb3J0IHsgVG9kb0xpc3RDb250cm9sbGVyIH0gZnJvbSAnLi9Ub2RvTGlzdENvbnRyb2xsZXInXG5pbXBvcnQgeyBUb2RvTGlzdE1vZGVsIH0gZnJvbSAnLi9Ub2RvTGlzdE1vZGVsJ1xuaW1wb3J0IHsgVG9kb0xpc3RWaWV3IH0gZnJvbSAnLi9Ub2RvTGlzdFZpZXcnXG5cbmV4cG9ydCBjbGFzcyBBcHBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vZGVsLCB2aWV3KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgdGhpcy52aWV3ID0gdmlld1xuXG4gICAgdGhpcy52aWV3LmJpbmRBZGRQcm9qZWN0KHRoaXMuaGFuZGxlQWRkUHJvamVjdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGVsZXRlUHJvamVjdCh0aGlzLmhhbmRsZURlbGV0ZVByb2plY3QuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZFRvZ2dsZSh0aGlzLmhhbmRsZVRvZ2dsZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kTmF2VG9nZ2xlKHRoaXMuaGFuZGxlTmF2VG9nZ2xlLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmRQcmlvcml0eSh0aGlzLmhhbmRsZVByaW9yaXR5LmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREaXNwbGF5QWxsKHRoaXMuaGFuZGxlRGlzcGxheUFsbC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGF0ZVRvZGF5KHRoaXMuaGFuZGxlVG9kYXkuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERhdGVVcGNvbWluZyh0aGlzLmhhbmRsZVVwY29taW5nLmJpbmQodGhpcykpXG4gICAgdGhpcy52aWV3LmJpbmREYXRlQW55dGltZSh0aGlzLmhhbmRsZUFueXRpbWUuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZEhvbWUodGhpcy5oYW5kbGVIb21lLmJpbmQodGhpcykpXG4gIH1cblxuICAvLyBEaXNwbGF5IHRoZSBuZXcgcHJvamVjdCBhbmQgY3JlYXRlZCBhIGJ1dHRvbiBsaW5rZWQgdG8gdGhlIHByb2plY3QgaW4gdGhlIG5hdmlnYXRpb24uXG4gIGhhbmRsZUFkZFByb2plY3QgKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RDb250cm9sbGVyKG5ldyBQcm9qZWN0TW9kZWwobmFtZSksIG5ldyBQcm9qZWN0VmlldyhQcm9qZWN0TW9kZWwuY291bnRlcikpXG4gICAgdGhpcy5tb2RlbC5hZGRQcm9qZWN0KHByb2plY3QpXG5cbiAgICBwcm9qZWN0Lm1vZGVsLmFkZFRvZG9MaXN0KG5ldyBUb2RvTGlzdENvbnRyb2xsZXIobmV3IFRvZG9MaXN0TW9kZWwoJ0RlZmF1bHQnKSwgbmV3IFRvZG9MaXN0VmlldygpKSlcbiAgICBwcm9qZWN0LnZpZXcucmVuZGVyTmFtZShuYW1lKVxuICAgIHByb2plY3Qudmlldy5yZW5kZXIocHJvamVjdC5tb2RlbC50b2RvTGlzdHMpXG4gICAgcHJvamVjdC52aWV3LnJlbmRlckZvcm0ocHJvamVjdC5tb2RlbC5mb3JtKVxuICAgIHByb2plY3Qudmlldy5nZXRGb3JtKClcbiAgICBwcm9qZWN0LmJpbmRBbGwoKVxuICAgIHRoaXMudmlldy5yZW5kZXJCdG4obmFtZSwgcHJvamVjdC5tb2RlbC5pZClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0PVwicHJvamVjdC0ke3Byb2plY3QubW9kZWwuaWR9XCJdYCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZU5hdkNsaWNrKHByb2plY3QpKVxuICB9XG5cbiAgLy8gTGlua3MgdGhlIG5ld2x5IGNyZWF0ZWQgbmF2aWdhdGlvbiBidXR0b24gdG8gaXRzIHByb2plY3RcbiAgaGFuZGxlTmF2Q2xpY2sgKHByb2plY3QpIHtcbiAgICBwcm9qZWN0LnZpZXcucmVuZGVyTmFtZShwcm9qZWN0Lm1vZGVsLm5hbWUpXG4gICAgcHJvamVjdC52aWV3LnJlbmRlcihwcm9qZWN0Lm1vZGVsLnRvZG9MaXN0cylcbiAgICBwcm9qZWN0LnZpZXcucmVuZGVyRm9ybShwcm9qZWN0Lm1vZGVsLmZvcm0pXG4gICAgcHJvamVjdC52aWV3LmdldEZvcm0oKVxuICAgIHByb2plY3QuYmluZEFsbCgpXG4gIH1cblxuICAvLyBXaGVuIGEgcHJvamVjdCBpcyBkZWxldGVkLCBpdCBpcyByZW1vdmVkIGZyb20gdGhlIG1vZGVsIGFuZCBmcm9tIHRoZSBuYXZpZ2F0aW9uLlxuICAvLyBUaGUgSG9tZXBhZ2UgaXMgZGlzcGxheWVkIGluc3RlYWQuXG4gIGhhbmRsZURlbGV0ZVByb2plY3QgKGlkKSB7XG4gICAgdGhpcy5tb2RlbC5kZWxldGVQcm9qZWN0KGlkKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByb2plY3Q9XCJwcm9qZWN0LSR7aWR9XCJdYCkucmVtb3ZlKClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0PVwicHJvamVjdC0xXCJdJykuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpXG4gIH1cblxuICAvLyBFbmFibGUgYWxsIHRvZ2dsZSBidXR0b25zXG4gIGhhbmRsZVRvZ2dsZSAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuZGF0YXNldC50b2dnbGV9YCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgfVxuXG4gIC8vIE1vZGlmeSBzcGFjZSBvY2N1cGllZCBieSBjb250ZW50IHdoZW4gdGhlIG5hdmlnYXRpb24gaXMgaGlkZGVuIC8gZGlzcGxheWVkLlxuICBoYW5kbGVOYXZUb2dnbGUgKCkge1xuICAgIHRoaXMudmlldy5uYXYuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LS1oaWRkZW4nKVxuICAgIHRoaXMudmlldy5tYWluLmNsYXNzTGlzdC50b2dnbGUoJ21haW4tLWhpZGRlbicpXG4gIH1cblxuICAvLyBFbmFibGUgcHJpb3JpdHkgZmlsdGVyc1xuICBoYW5kbGVQcmlvcml0eSAocHJpb3JpdHkpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0b2RvLmRhdGFzZXQucHJpb3JpdHkgIT09IHByaW9yaXR5KSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ25vLWRpc3BsYXknKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjb21wYXJlcyAyIGRheXMgKHVzZWQgZm9yIGRhdGUgZmlsdGVycylcbiAgX3NhbWVEYXkgKGRhdGUxLCBkYXRlMikge1xuICAgIGNvbnN0IHRvZG9EYXRlID0gbmV3IERhdGUoZGF0ZTEpXG4gICAgaWYgKHRvZG9EYXRlLmdldERhdGUoKSA9PT0gZGF0ZTIuZ2V0RGF0ZSgpICYmXG4gICAgdG9kb0RhdGUuZ2V0TW9udGgoKSA9PT0gZGF0ZTIuZ2V0TW9udGgoKSAmJlxuICAgIHRvZG9EYXRlLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUyLmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gRGF0ZXMgZmlsdGVyc1xuXG4gIGhhbmRsZVRvZGF5ICgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0aGlzLl9zYW1lRGF5KHRvZG8uZGF0YXNldC5kYXRlLCB0b2RheSkpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVVwY29taW5nICgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICghdGhpcy5fc2FtZURheSh0b2RvLmRhdGFzZXQuZGF0ZSwgdG9kYXkpICYmIG5ldyBEYXRlKHRvZG8uZGF0YXNldC5kYXRlKSA+IHRvZGF5KSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ25vLWRpc3BsYXknKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBbnl0aW1lICgpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0b2RvLmRhdGFzZXQuZGF0ZSAhPT0gJycpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIERpc2FibGUgZmlsdGVyc1xuICBoYW5kbGVEaXNwbGF5QWxsICgpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpKVxuICB9XG5cbiAgLy8gSG9tZSBwYWdlXG4gIGhhbmRsZUhvbWUgKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3Q9XCJwcm9qZWN0LTFcIl0nKS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFwcE1vZGVsIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXVxuICB9XG5cbiAgYWRkUHJvamVjdCAocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KVxuICAgIHByb2plY3QuaWQgPSB0aGlzLnByb2plY3RzLmxlbmd0aFxuICB9XG5cbiAgZGVsZXRlUHJvamVjdCAoaWQpIHtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmlkICE9PSBpZClcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFwcFZpZXcge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy5ob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0taG9tZScpXG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG5cbiAgICAvLyBGb3JtIHRvIGNyZWF0ZSBuZXcgcHJvamVjdHNcbiAgICB0aGlzLnByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtLXByb2plY3QgW25hbWU9XCJuYW1lXCJdJylcbiAgICB0aGlzLnByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLS1wcm9qZWN0IC5idG4tLXN1Ym1pdCcpXG5cbiAgICAvLyBTb3J0IHRhc2tzXG4gICAgdGhpcy5zb3J0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC10aXRsZScpXG4gICAgdGhpcy5zb3J0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1kZXNjcmlwdGlvbicpXG4gICAgdGhpcy5zb3J0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LWRhdGUnKVxuICAgIHRoaXMuc29ydFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtcHJpb3JpdHknKVxuXG4gICAgLy8gRmlsdGVyIHRhc2tzXG4gICAgdGhpcy5kaXNwbGF5QWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmlsdGVyPVwiYWxsXCJdJylcbiAgICB0aGlzLnByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmlsdGVyXj1cInByaW9yaXR5XCJdJylcbiAgICB0aGlzLmRhdGVUb2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbHRlcj1cImRhdGUtdG9kYXlcIl0nKVxuICAgIHRoaXMuZGF0ZVVwY29taW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZmlsdGVyPVwiZGF0ZS11cGNvbWluZ1wiXScpXG4gICAgdGhpcy5kYXRlQW55dGltZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbHRlcj1cImRhdGUtYW55dGltZVwiXScpXG5cbiAgICAvLyBUb2dnbGUgTmF2aWdhdGlvblxuICAgIHRoaXMubmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlPVwibmF2XCJdJylcbiAgICB0aGlzLm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKVxuXG4gICAgLy8gVG9nZ2xlIGNhdGVnb3JpZXNcbiAgICB0aGlzLnRvZ2dsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tLWRyb3Bkb3duJylcbiAgfVxuXG4gIC8vIEdldCBuZXcgcHJvamVjdCdzIG5hbWVcbiAgZ2V0IF9wcm9qZWN0TmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdElucHV0LnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBJbnB1dCB0byBjcmVhdGUgYSBuZXcgcHJvamVjdFxuICBfcmVzZXRJbnB1dCAoKSB7XG4gICAgdGhpcy5wcm9qZWN0SW5wdXQudmFsdWUgPSAnJ1xuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbiBsaW5rZWQgdG8gdGhlIHByb2plY3RcbiAgcmVuZGVyQnRuIChuYW1lLCBpZCkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2J0bi0tcHJvamVjdCcpXG4gICAgbGkuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBgcHJvamVjdC0ke2lkfWApXG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1maWx0ZXInKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicsIGBwcm9qZWN0LSR7aWR9YClcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbmFtZVxuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tZGVsZXRlJylcbiAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+J1xuXG4gICAgbGkuYXBwZW5kKGJ1dHRvbiwgY2xvc2VCdG4pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kKGxpKVxuICB9XG5cbiAgYmluZEFkZFByb2plY3QgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnByb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBoYW5kbGVyKHRoaXMuX3Byb2plY3ROYW1lKVxuICAgICAgdGhpcy5fcmVzZXRJbnB1dCgpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmREZWxldGVQcm9qZWN0IChoYW5kbGVyKSB7XG4gICAgdGhpcy5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpKSByZXR1cm5cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi0tZGVsZXRlJykpIHtcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnbGknKS5kYXRhc2V0LnByb2plY3Quc2xpY2UoOClcbiAgICAgICAgaGFuZGxlcihpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gTmF2aWdhdGlvbiB0b2dnbGVzXG4gIGJpbmRUb2dnbGUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnRvZ2dsZUJ0bi5mb3JFYWNoKCh0b2dnbGVCdG4pID0+IHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpKVxuICB9XG5cbiAgYmluZE5hdlRvZ2dsZSAoaGFuZGxlcikge1xuICAgIHRoaXMubmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbiAgfVxuXG4gIC8vIEhvbWUgcGFnZVxuICBiaW5kSG9tZSAoaGFuZGxlcikge1xuICAgIHRoaXMuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICAvLyBGaWx0ZXJzXG4gIGJpbmRQcmlvcml0eSAoaGFuZGxlcikge1xuICAgIHRoaXMucHJpb3JpdHlCdG4uZm9yRWFjaCgocHJpb3JpdHlCdG4pID0+IHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiBoYW5kbGVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LmZpbHRlci5zbGljZSg5KSkpKVxuICB9XG5cbiAgYmluZERhdGVUb2RheSAoaGFuZGxlcikge1xuICAgIHRoaXMuZGF0ZVRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbiAgfVxuXG4gIGJpbmREYXRlVXBjb21pbmcgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmRhdGVVcGNvbWluZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBiaW5kRGF0ZUFueXRpbWUgKGhhbmRsZXIpIHtcbiAgICB0aGlzLmRhdGVBbnl0aW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbiAgfVxuXG4gIGJpbmREaXNwbGF5QWxsIChoYW5kbGVyKSB7XG4gICAgdGhpcy5kaXNwbGF5QWxsQnRuLmZvckVhY2goKGRpc3BsYXlBbGxCdG4pID0+IGRpc3BsYXlBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFByb2plY3RDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vZGVsLCB2aWV3KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgdGhpcy52aWV3ID0gdmlld1xuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlKHRoaXMubW9kZWwudG9kb0xpc3RzKVxuICAgIHRoaXMubW9kZWwuYmluZFByb2plY3RDaGFuZ2UodGhpcy5vblByb2plY3RDaGFuZ2UuYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9uUHJvamVjdENoYW5nZSAodG9kb0xpc3RzKSB7XG4gICAgdGhpcy52aWV3LnJlbmRlcih0b2RvTGlzdHMpXG4gIH1cblxuICBoYW5kbGVBZGRUb2RvTGlzdCAodG9kb0xpc3QpIHtcbiAgICB0aGlzLm1vZGVsLmFkZFRvZG9MaXN0KHRvZG9MaXN0KVxuICB9XG5cbiAgaGFuZGxlRGVsZXRlVG9kb0xpc3QgKHRvZG9MaXN0KSB7XG4gICAgdGhpcy5tb2RlbC5kZWxldGVUb2RvTGlzdCh0b2RvTGlzdClcbiAgfVxuXG4gIGJpbmRBbGwgKCkge1xuICAgIHRoaXMudmlldy5iaW5kQWRkU2VjdGlvbih0aGlzLmhhbmRsZUFkZFRvZG9MaXN0LmJpbmQodGhpcykpXG4gIH1cbn1cbiIsImltcG9ydCB7IFNlY3Rpb25Gb3JtIH0gZnJvbSAnLi9TZWN0aW9uRm9ybSdcblxuZXhwb3J0IGNsYXNzIFByb2plY3RNb2RlbCB7XG4gIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZSA9PT0gJycgPyAnVW50aXRsZWQnIDogbmFtZVxuICAgIHRoaXMuaWQgPSArK1Byb2plY3RNb2RlbC5jb3VudGVyXG4gICAgdGhpcy50b2RvTGlzdHMgPSBbXVxuICAgIHRoaXMuZm9ybSA9IG5ldyBTZWN0aW9uRm9ybSh0aGlzLmlkKVxuICB9XG5cbiAgYWRkVG9kb0xpc3QgKHRvZG9MaXN0KSB7XG4gICAgdGhpcy50b2RvTGlzdHMucHVzaCh0b2RvTGlzdClcbiAgICB0b2RvTGlzdC5pZCA9IHRoaXMudG9kb0xpc3RzLmxlbmd0aFxuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlKHRoaXMudG9kb0xpc3RzKVxuICB9XG5cbiAgZWRpdFRvZG9MaXN0IChpZCwgdXBkYXRlKSB7XG4gICAgdGhpcy50b2RvTGlzdHMgPSB0aGlzLnRvZG9MaXN0cy5tYXAoKHRvZG9MaXN0KSA9PiB7XG4gICAgICBpZiAodG9kb0xpc3QuaWQgPT09IGlkKSB7XG4gICAgICAgIHRvZG9MaXN0Lm5hbWUgPSB1cGRhdGVcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlKHRoaXMudG9kb0xpc3RzKVxuICB9XG5cbiAgZGVsZXRlVG9kb0xpc3QgKGlkKSB7XG4gICAgdGhpcy50b2RvTGlzdHMgPSB0aGlzLnRvZG9MaXN0cy5maWx0ZXIodG9kb0xpc3QgPT4gdG9kb0xpc3QuaWQgIT09IGlkKVxuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlKHRoaXMudG9kb0xpc3RzKVxuICB9XG5cbiAgYmluZFByb2plY3RDaGFuZ2UgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vblByb2plY3RDaGFuZ2UgPSBjYWxsYmFja1xuICB9XG59XG5cblByb2plY3RNb2RlbC5jb3VudGVyID0gMFxuIiwiaW1wb3J0IHsgVG9kb0xpc3RDb250cm9sbGVyIH0gZnJvbSAnLi9Ub2RvTGlzdENvbnRyb2xsZXInXG5pbXBvcnQgeyBUb2RvTGlzdE1vZGVsIH0gZnJvbSAnLi9Ub2RvTGlzdE1vZGVsJ1xuaW1wb3J0IHsgVG9kb0xpc3RWaWV3IH0gZnJvbSAnLi9Ub2RvTGlzdFZpZXcnXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0VmlldyB7XG4gIGNvbnN0cnVjdG9yIChpZCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIHRoaXMuc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbnMnKVxuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19uYW1lJylcbiAgICB0aGlzLmlkID0gaWRcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgbmFtZSBvZiB0aGUgcHJvamVjdFxuICByZW5kZXJOYW1lIChuYW1lKSB7XG4gICAgdGhpcy5uYW1lLmlubmVySFRNTCA9IG5hbWVcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgYWRkIHNlY3Rpb24gZm9ybVxuICByZW5kZXJGb3JtIChmb3JtKSB7XG4gICAgZm9ybS5yZW5kZXIoKVxuICB9XG5cbiAgLy8gR2V0IHRoZSBhZGQgc2VjdGlvbiBmb3JtIGlucHV0c1xuICBnZXRGb3JtICgpIHtcbiAgICB0aGlzLm5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfSBbbmFtZT1cInNlY3Rpb25cIl1gKVxuICAgIHRoaXMuc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlY3Rpb24tZm9ybS0ke3RoaXMuaWR9IC5idG4tLXN1Ym1pdGApXG4gIH1cblxuICAvLyBHZXQgU2VjdGlvbidzIE5hbWUgZnJvbSB0aGUgZm9ybVxuICBnZXQgX3NlY3Rpb25OYW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lSW5wdXQudmFsdWVcbiAgfVxuXG4gIC8vIFJlc2V0IGZvcm0gaW5wdXRcbiAgX3Jlc2V0SW5wdXQgKCkge1xuICAgIHRoaXMubmFtZUlucHV0LnZhbHVlID0gJydcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgcHJvamVjdCBieSByZW5kZXJpbmcgZXZlcnkgc2VjdGlvblxuICByZW5kZXIgKHRvZG9MaXN0cykge1xuICAgIHRoaXMuc2VjdGlvbnMuaW5uZXJIVE1MID0gJydcblxuICAgIGZvciAoY29uc3QgdG9kb0xpc3Qgb2YgdG9kb0xpc3RzKSB7XG4gICAgICB0b2RvTGlzdC52aWV3LmNyZWF0ZVNlY3Rpb24oKVxuICAgICAgdG9kb0xpc3Qudmlldy5yZW5kZXJOYW1lKHRvZG9MaXN0Lm1vZGVsLm5hbWUpXG4gICAgICB0b2RvTGlzdC52aWV3LnJlbmRlcih0b2RvTGlzdC5tb2RlbC50b2RvcylcbiAgICAgIHRvZG9MaXN0LnZpZXcucmVuZGVyRm9ybSh0b2RvTGlzdC5tb2RlbC5mb3JtKVxuICAgICAgdG9kb0xpc3Qudmlldy5nZXRGb3JtKHRvZG9MaXN0Lm1vZGVsLmZvcm0pXG4gICAgICB0b2RvTGlzdC5iaW5kQWxsKClcbiAgICB9XG4gIH1cblxuICAvLyBFdmVudCBMaXN0ZW5lcnNcblxuICBiaW5kQWRkU2VjdGlvbiAoaGFuZGxlcikge1xuICAgIHRoaXMuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaGFuZGxlcihuZXcgVG9kb0xpc3RDb250cm9sbGVyKG5ldyBUb2RvTGlzdE1vZGVsKHRoaXMuX3NlY3Rpb25OYW1lLCB0aGlzLmlkKSwgbmV3IFRvZG9MaXN0Vmlldyh0aGlzLmlkKSkpXG4gICAgICB0aGlzLl9yZXNldElucHV0KClcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2VjdGlvbkZvcm0ge1xuICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX3NlY3Rpb24nKVxuICAgIGZvcm1Db250YWluZXIuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGZvcm1CdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tZHJvcGRvd24nLCAnYnRuLS1zZWN0aW9uJylcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGZvcm1CdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfWApXG4gICAgZm9ybUJ0bi5pbm5lckhUTUwgPSAnQWRkIFNlY3Rpb24nXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdhZGQnLCAnYWRkLS1zZWN0aW9uJywgJ2Ryb3Bkb3duJywgJ2hpZGRlbicpXG4gICAgZm9ybS5pZCA9IGBzZWN0aW9uLWZvcm0tJHt0aGlzLmlkfWBcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWRkX19jb250ZW50JywgJ2FkZF9fY29udGVudC0tc2VjdGlvbicpXG5cbiAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzZWN0aW9uJylcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VjdGlvblxcJ3MgTmFtZScpXG4gICAgbGFiZWxOYW1lLmFwcGVuZChuYW1lKVxuICAgIGNvbnRlbnQuYXBwZW5kKGxhYmVsTmFtZSlcblxuICAgIGNvbnN0IGZpbmlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmluaXNoLmNsYXNzTGlzdC5hZGQoJ2FkZF9fZmluaXNoJylcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1zdWJtaXQnKVxuICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQWRkIFNlY3Rpb24nXG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tY2FuY2VsJylcbiAgICBjYW5jZWxCdG4uaW5uZXJIVE1MID0gJ0NhbmNlbCdcblxuICAgIGZpbmlzaC5hcHBlbmQoc3VibWl0QnRuLCBjYW5jZWxCdG4pXG4gICAgZm9ybS5hcHBlbmQoY29udGVudCwgZmluaXNoKVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kKGZvcm1CdG4sIGZvcm0pXG5cbiAgICB0aGlzLmJpbmRUb2dnbGUodGhpcy5oYW5kbGVUb2dnbGUpXG4gIH1cblxuICAvLyBFbmFibGUgZm9ybSB0b2dnbGVcbiAgYmluZFRvZ2dsZSAoaGFuZGxlcikge1xuICAgIHRoaXMudG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlPVwic2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1cIl1gKVxuICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuZGF0YXNldC50b2dnbGV9YCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb0Zvcm0gfSBmcm9tICcuL1RvZG9Gb3JtJ1xuXG5leHBvcnQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5ID0gJ25vbmUnKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kYXRlID0gZGF0ZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgIHRoaXMuaWQgPSArK1RvZG8uY291bnRlclxuICAgIHRoaXMuZWRpdEZvcm0gPSBuZXcgVG9kb0Zvcm0oJ2VkaXQnLCB0aGlzLmlkKVxuICB9XG5cbiAgcmVuZGVyIChjb250YWluZXIpIHtcbiAgICB0aGlzLnRvZG9FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLnRvZG9FbGVtLmNsYXNzTGlzdC5hZGQoJ3RvLWRvJylcbiAgICB0aGlzLnRvZG9FbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1kYXRlJywgdGhpcy5kYXRlKVxuICAgIHRoaXMudG9kb0VsZW0uc2V0QXR0cmlidXRlKCdkYXRhLXByaW9yaXR5JywgdGhpcy5wcmlvcml0eSlcbiAgICB0aGlzLnRvZG9FbGVtLmlkID0gdGhpcy5pZFxuXG4gICAgY29uc3QgdG9kb0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRvZG9DaGVjay5jbGFzc0xpc3QuYWRkKCd0by1kb19fY2hlY2snKVxuICAgIHRvZG9DaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHRoaXMudG9kb0VsZW0uYXBwZW5kKHRvZG9DaGVjaylcblxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ2RhdGUnXVxuICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGNvbXBvbmVudHMpIHtcbiAgICAgIGNvbnN0IHRvZG9Db21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdG9kb0NvbXBvbmVudC5jbGFzc0xpc3QuYWRkKGB0by1kb19fJHtjb21wb25lbnR9YClcbiAgICAgIHRvZG9Db21wb25lbnQuaW5uZXJIVE1MID0gdGhpc1tjb21wb25lbnRdXG4gICAgICB0aGlzLnRvZG9FbGVtLmFwcGVuZCh0b2RvQ29tcG9uZW50KVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvLWRvX19wcmlvcml0eScsIGBwcmlvcml0eS0ke3RoaXMucHJpb3JpdHl9YClcbiAgICB0b2RvUHJpb3JpdHkuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWJvb2ttYXJrXCI+PC9pPidcbiAgICB0aGlzLnRvZG9FbGVtLmFwcGVuZCh0b2RvUHJpb3JpdHkpXG5cbiAgICB0aGlzLnRvZG9FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0aGlzLnRvZG9FZGl0LmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLXRvZ2dsZScsICdidG4tLWVkaXQnKVxuICAgIHRoaXMudG9kb0VkaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgdGhpcy50b2RvRWRpdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYGVkaXQtdG9kby0ke3RoaXMuaWR9YClcbiAgICB0aGlzLnRvZG9FZGl0LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1wZW5jaWwtYWx0XCI+PC9pPidcbiAgICB0aGlzLnRvZG9FbGVtLmFwcGVuZCh0aGlzLnRvZG9FZGl0KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLnRvZG9FbGVtKVxuICB9XG59XG5cblRvZG8uY291bnRlciA9IDBcbiIsImV4cG9ydCBjbGFzcyBUb2RvRm9ybSB7XG4gIGNvbnN0cnVjdG9yIChnb2FsLCBpZCkge1xuICAgIHRoaXMuZ29hbCA9IGdvYWxcbiAgICB0aGlzLmlkID0gaWRcbiAgfVxuXG4gIF9yZW5kZXJGb3JtICgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH0tLXRvZG9gLCAndG9kby1mb3JtJywgJ2Ryb3Bkb3duJylcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLmdvYWx9LXRvZG8tJHt0aGlzLmlkfWApXG5cbiAgICBpZiAodGhpcy5nb2FsID09PSAnYWRkJykge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9X19jb250ZW50YCwgYCR7dGhpcy5nb2FsfV9fY29udGVudC0tdG9kb2ApXG5cbiAgICBjb25zdCBsYWJlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKVxuICAgIGxhYmVsVGl0bGUuYXBwZW5kKHRpdGxlKVxuXG4gICAgY29uc3QgbGFiZWxEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKVxuICAgIGxhYmVsRGVzY3JpcHRpb24uYXBwZW5kKGRlc2NyaXB0aW9uKVxuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZ29hbH1fX2RldGFpbHNgKVxuXG4gICAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpXG4gICAgbGFiZWxEYXRlLmFwcGVuZChkYXRlKVxuXG4gICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZF9fcHJpb3JpdHknKVxuICAgIHRoaXMucHJpb3JpdHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMucHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgdGhpcy5wcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYGFkZC1wcmlvcml0eS0ke3RoaXMuaWR9YClcbiAgICB0aGlzLnByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLXRvZ2dsZScpXG4gICAgdGhpcy5wcmlvcml0eUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuXG4gICAgY29uc3QgcHJpb3JpdGllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdGllcy5jbGFzc0xpc3QuYWRkKCdhZGQtcHJpb3JpdHknLCAnZHJvcGRvd24nLCAnaGlkZGVuJylcbiAgICBwcmlvcml0aWVzLnNldEF0dHJpYnV0ZSgnaWQnLCBgYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1gKVxuICAgIGNvbnN0IHByaW9yaXRpZXNMaXN0ID0gWydoaWdoJywgJ21lZCcsICdsb3cnLCAnbm9uZSddXG5cbiAgICBmb3IgKGNvbnN0IHByaW9yaXR5IG9mIHByaW9yaXRpZXNMaXN0KSB7XG4gICAgICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWxQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBwcmlvcml0eS0ke3ByaW9yaXR5fS0ke3RoaXMuaWR9YClcbiAgICAgIGxhYmVsUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHtwcmlvcml0eX1gLCBgcHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgICBsYWJlbFByaW9yaXR5LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1ib29rbWFya1wiPjwvaT4nXG5cbiAgICAgIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcmlvcml0eSlcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsIGBwcmlvcml0eS0ke3ByaW9yaXR5fS0ke3RoaXMuaWR9YClcblxuICAgICAgaWYgKHByaW9yaXR5ID09PSAnbm9uZScpIHtcbiAgICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBwcmlvcml0aWVzLmFwcGVuZChsYWJlbFByaW9yaXR5LCBpbnB1dFByaW9yaXR5KVxuICAgIH1cblxuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZCh0aGlzLnByaW9yaXR5QnRuLCBwcmlvcml0aWVzKVxuXG4gICAgY29uc3QgZmluaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmaW5pc2guY2xhc3NMaXN0LmFkZChgJHt0aGlzLmdvYWx9X19maW5pc2hgKVxuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLXN1Ym1pdCcpXG4gICAgc3VibWl0QnRuLmlubmVySFRNTCA9IGAke3RoaXMuZ29hbC50b1VwcGVyQ2FzZSgpLnNsaWNlKDAsIDEpICsgdGhpcy5nb2FsLnNsaWNlKDEpfSBUYXNrYFxuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWNhbmNlbCcpXG4gICAgY2FuY2VsQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnXG5cbiAgICBmaW5pc2guYXBwZW5kKHN1Ym1pdEJ0biwgY2FuY2VsQnRuKVxuICAgIGNvbnRlbnQuYXBwZW5kKGxhYmVsVGl0bGUsIGxhYmVsRGVzY3JpcHRpb24sIGRldGFpbHMpXG4gICAgZGV0YWlscy5hcHBlbmQobGFiZWxEYXRlLCBwcmlvcml0eUNvbnRhaW5lcilcbiAgICBmb3JtLmFwcGVuZChjb250ZW50LCBmaW5pc2gpXG5cbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgcmVuZGVyQWRkIChjb250YWluZXIpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfV9fdG9kb2ApXG5cbiAgICB0aGlzLmZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMuZm9ybUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLS1kcm9wZG93bicsIGBidG4tLSR7dGhpcy5nb2FsfWApXG4gICAgdGhpcy5mb3JtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHRoaXMuZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgYCR7dGhpcy5nb2FsfS10b2RvLSR7dGhpcy5pZH1gKVxuICAgIHRoaXMuZm9ybUJ0bi5pbm5lckhUTUwgPSBgJHt0aGlzLmdvYWwuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMuZ29hbC5zbGljZSgxKX0gVGFza2BcblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kKHRoaXMuZm9ybUJ0biwgdGhpcy5fcmVuZGVyRm9ybSgpKVxuICAgIGNvbnRhaW5lci5hcHBlbmQoZm9ybUNvbnRhaW5lcilcblxuICAgIHRoaXMuYmluZEFkZFRvZ2dsZSh0aGlzLmhhbmRsZVRvZ2dsZSlcbiAgICB0aGlzLmJpbmRQcmlvcml0eVRvZ2dsZSh0aGlzLmhhbmRsZVRvZ2dsZSlcbiAgICB0aGlzLmJpbmRQcmlvcml0eUxhYmVsKHRoaXMuaGFuZGxlUHJpb3JpdHlMYWJlbC5iaW5kKHRoaXMpKVxuICAgIHRoaXMuYmluZFJlc2V0UHJpb3JpdHkodGhpcy5oYW5kbGVSZXNldFByaW9yaXR5LmJpbmQodGhpcykpXG4gIH1cblxuICByZW5kZXJFZGl0IChiZWZvcmUpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5nb2FsfV9fdG9kb2ApXG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZCh0aGlzLl9yZW5kZXJGb3JtKCkpXG4gICAgYmVmb3JlLmFmdGVyKGZvcm1Db250YWluZXIpXG5cbiAgICB0aGlzLmJpbmRQcmlvcml0eVRvZ2dsZSh0aGlzLmhhbmRsZVRvZ2dsZSlcbiAgICB0aGlzLmJpbmRQcmlvcml0eUxhYmVsKHRoaXMuaGFuZGxlUHJpb3JpdHlMYWJlbC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgLy8gRW5hYmxlIGZvcm0gdG9nZ2xlXG4gIGJpbmRQcmlvcml0eVRvZ2dsZSAoaGFuZGxlcikge1xuICAgIHRoaXMucHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgYmluZEFkZFRvZ2dsZSAoaGFuZGxlcikge1xuICAgIHRoaXMuZm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIH1cblxuICBoYW5kbGVUb2dnbGUgKGV2ZW50KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmRhdGFzZXQudG9nZ2xlfWApLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gIH1cblxuICAvLyBFbmFibGUgcHJpb3JpdHkgdG9nZ2xlIGFuZCBjb2xvciBjaGFuZ2Ugd2hlbiBzZWxlY3RpbmcgYSBwcmlvcml0eVxuICBiaW5kUHJpb3JpdHlMYWJlbCAoaGFuZGxlcikge1xuICAgIHRoaXMubGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnByaW9yaXR5LSR7dGhpcy5pZH1gKVxuICAgIHRoaXMubGFiZWxzLmZvckVhY2gobGFiZWwgPT4gbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKSlcbiAgfVxuXG4gIGhhbmRsZVByaW9yaXR5TGFiZWwgKGV2ZW50KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZC1wcmlvcml0eS0ke3RoaXMuaWR9YCkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2dnbGU9XCJhZGQtcHJpb3JpdHktJHt0aGlzLmlkfVwiXWApLnN0eWxlLmNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQuY2xvc2VzdCgnbGFiZWwnKSkuY29sb3JcbiAgfVxuXG4gIC8vIFJlc2V0IHByaW9yaXR5IGNvbG9yIHdoZW4gYWRkaW5nIGEgdGFza1xuICBiaW5kUmVzZXRQcmlvcml0eSAoaGFuZGxlcikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGQtdG9kby0ke3RoaXMuaWR9IC5idG4tLXN1Ym1pdGApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbiAgfVxuXG4gIGhhbmRsZVJlc2V0UHJpb3JpdHkgKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cImFkZC1wcmlvcml0eS0ke3RoaXMuaWR9XCJdYCkuc3R5bGUuY29sb3IgPSAnJ1xuICB9XG59XG5cblRvZG9Gb3JtLmNvdW50ZXIgPSAwXG4iLCJpbXBvcnQgeyBUb2RvRm9ybSB9IGZyb20gJy4vVG9kb0Zvcm0nXG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlKHRoaXMubW9kZWwudG9kb3MpXG4gICAgdGhpcy5tb2RlbC5iaW5kVG9kb0xpc3RDaGFuZ2UodGhpcy5vblRvZG9MaXN0Q2hhbmdlLmJpbmQodGhpcykpXG4gIH1cblxuICBvblRvZG9MaXN0Q2hhbmdlICh0b2Rvcykge1xuICAgIHRoaXMudmlldy5yZW5kZXIodG9kb3MpXG4gIH1cblxuICBoYW5kbGVBZGRUb2RvICh0b2RvKSB7XG4gICAgdGhpcy5tb2RlbC5hZGRUb2RvKHRvZG8pXG4gIH1cblxuICBoYW5kbGVFZGl0VG9kbyAodXBkYXRlZFRvZG8sIGlkKSB7XG4gICAgdGhpcy5tb2RlbC5lZGl0VG9kbyh1cGRhdGVkVG9kbywgaWQpXG4gIH1cblxuICBoYW5kbGVEZWxldGVUb2RvIChpZCkge1xuICAgIHRoaXMubW9kZWwuZGVsZXRlVG9kbyhpZClcbiAgfVxuXG4gIGhhbmRsZU9wZW5FZGl0IChpZCkge1xuICAgIC8vIFVzZXIgY2FuIG9ubHkgZWRpdCBvbmUgdGFzayBhdCBhIHRpbWUsIHNvIGlmIHRoZXJlIGlzIGFub3RoZXIgRWRpdCBGb3JtIG9wZW4sIGl0IGlzIGNsb3NlZC5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImVkaXQtdG9kb1wiXScpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiZWRpdC10b2RvXCJdJykucmVtb3ZlKClcbiAgICB9XG4gICAgbmV3IFRvZG9Gb3JtKCdlZGl0JywgaWQpLnJlbmRlckVkaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl1gKSlcbiAgICB0aGlzLnZpZXcuZ2V0RWRpdEZvcm0oaWQpXG4gICAgdGhpcy52aWV3LnNldEVkaXRGb3JtKGlkKVxuICB9XG5cbiAgYmluZEFsbCAoKSB7XG4gICAgdGhpcy52aWV3LmJpbmRBZGRUb2RvKHRoaXMuaGFuZGxlQWRkVG9kby5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kRGVsZXRlVG9kbyh0aGlzLmhhbmRsZURlbGV0ZVRvZG8uYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZE9wZW5FZGl0KHRoaXMuaGFuZGxlT3BlbkVkaXQuYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZEVkaXRUb2RvKHRoaXMuaGFuZGxlRWRpdFRvZG8uYmluZCh0aGlzKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb0Zvcm0gfSBmcm9tICcuL1RvZG9Gb3JtJ1xuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RNb2RlbCB7XG4gIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZSA9PT0gJycgPyAnVW50aXRsZWQnIDogbmFtZVxuICAgIHRoaXMudG9kb3MgPSBbXVxuICAgIHRoaXMuaWQgPSArK1RvZG9MaXN0TW9kZWwuY291bnRlclxuICAgIHRoaXMuZm9ybSA9IG5ldyBUb2RvRm9ybSgnYWRkJywgdGhpcy5pZClcbiAgfVxuXG4gIGFkZFRvZG8gKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbylcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UodGhpcy50b2RvcylcbiAgfVxuXG4gIGVkaXRUb2RvICh1cGRhdGVkVG9kbywgaWQpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRvZG9zKVxuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgaWYgKHRvZG8uaWQgPT09ICtpZCkge1xuICAgICAgICByZXR1cm4gdXBkYXRlZFRvZG9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b2RvXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UodGhpcy50b2RvcylcbiAgfVxuXG4gIGRlbGV0ZVRvZG8gKGlkKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZClcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UodGhpcy50b2RvcylcbiAgfVxuXG4gIGJpbmRUb2RvTGlzdENoYW5nZSAoY2FsbGJhY2spIHtcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UgPSBjYWxsYmFja1xuICB9XG59XG5cblRvZG9MaXN0TW9kZWwuY291bnRlciA9IDBcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8nXG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdFZpZXcge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25zJylcbiAgICB0aGlzLnRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLnRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG9saXN0JylcbiAgICB0aGlzLmlkID0gKytUb2RvTGlzdFZpZXcuY291bnRlclxuICB9XG5cbiAgLy8gQ3JlYXRlIGEgc2VjdGlvblxuICBjcmVhdGVTZWN0aW9uICgpIHtcbiAgICB0aGlzLnNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGBzZWN0aW9uLSR7dGhpcy5pZH1gKVxuICAgIHRoaXMuc2VjdGlvbi5wcmVwZW5kKHRoaXMudG9kb0xpc3QpXG4gICAgdGhpcy5wcm9qZWN0LmFwcGVuZCh0aGlzLnNlY3Rpb24pXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHNlY3Rpb24ncyBuYW1lXG4gIHJlbmRlck5hbWUgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGhpcy5uYW1lLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25fX25hbWUnKVxuICAgIHRoaXMubmFtZS5pbm5lckhUTUwgPSBuYW1lXG4gICAgdGhpcy5zZWN0aW9uLnByZXBlbmQodGhpcy5uYW1lKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBBZGQgZm9ybVxuICByZW5kZXJGb3JtIChmb3JtKSB7XG4gICAgZm9ybS5yZW5kZXJBZGQodGhpcy5zZWN0aW9uKVxuICB9XG5cbiAgLy8gR2V0IHRoZSBBZGQgZm9ybSBpbnB1dHNcbiAgZ2V0Rm9ybSAoKSB7XG4gICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cInRpdGxlXCJdYClcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHt0aGlzLmlkfSAudG9kby1mb3JtIFtuYW1lPVwiZGVzY3JpcHRpb25cIl1gKVxuICAgIHRoaXMuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cImRhdGVcIl1gKVxuICAgIHRoaXMuc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHt0aGlzLmlkfSAudG9kby1mb3JtIC5idG4tLXN1Ym1pdGApXG4gIH1cblxuICAvLyBHZXQgYWRkIGZvcm0gdmFsdWVzXG4gIGdldCBfdG9kb1RpdGxlICgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZS52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvRGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9EYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9Qcmlvcml0eSAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWVcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgdGhlIEVkaXQgZm9ybSBpbnB1dHNcbiAgZ2V0RWRpdEZvcm0gKGlkKSB7XG4gICAgdGhpcy50aXRsZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdC10b2RvLSR7aWR9IFtuYW1lPVwidGl0bGVcIl1gKVxuICAgIHRoaXMuZGVzY3JpcHRpb25FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXQtdG9kby0ke2lkfSBbbmFtZT1cImRlc2NyaXB0aW9uXCJdYClcbiAgICB0aGlzLmRhdGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXQtdG9kby0ke2lkfSBbbmFtZT1cImRhdGVcIl1gKVxuICAgIHRoaXMucHJpb3JpdHlFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXQtdG9kby0ke2lkfSAuYnRuLS10b2dnbGVgKVxuICB9XG5cbiAgLy8gQXV0b21hdGljYWxseSBwcmUtZmlsbCB0aGUgRWRpdCBmb3JtIGlucHV0c1xuICBzZXRFZGl0Rm9ybSAoaWQpIHtcbiAgICB0aGlzLnRpdGxlRWRpdC52YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aWR9XCJdIC50by1kb19fdGl0bGVgKS5pbm5lckhUTUxcbiAgICB0aGlzLmRlc2NyaXB0aW9uRWRpdC52YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aWR9XCJdIC50by1kb19fZGVzY3JpcHRpb25gKS5pbm5lckhUTUxcbiAgICB0aGlzLmRhdGVFZGl0LnZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl0gLnRvLWRvX19kYXRlYCkuaW5uZXJIVE1MXG4gICAgdGhpcy5wcmlvcml0eUVkaXQuY2xhc3NMaXN0LmFkZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXSAudG8tZG9fX3ByaW9yaXR5YCkuY2xhc3NMaXN0WzFdKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0LXRvZG8tJHtpZH0gW2lkXj1cIiR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl0gLnRvLWRvX19wcmlvcml0eWApLmNsYXNzTGlzdFsxXX1cIl1gKS5jaGVja2VkID0gdHJ1ZVxuICB9XG5cbiAgLy8gR2V0IHRoZSBFZGl0IGZvcm0gdmFsdWVzXG5cbiAgLy8gUmVzZXQgZm9ybSBpbnB1dHNcbiAgX3Jlc2V0SW5wdXRzICgpIHtcbiAgICB0aGlzLnRpdGxlLnZhbHVlID0gJydcbiAgICB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlID0gJydcbiAgICB0aGlzLmRhdGUudmFsdWUgPSAnJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3JePVwicHJpb3JpdHktbm9uZVwiXScpLmNoZWNrZWQgPSB0cnVlXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIFRvZG8gTGlzdFxuICByZW5kZXIgKHRvZG9zKSB7XG4gICAgdGhpcy50b2RvTGlzdC5pbm5lckhUTUwgPSAnJ1xuICAgIGZvciAoY29uc3QgdG9kbyBvZiB0b2Rvcykge1xuICAgICAgdG9kby5yZW5kZXIodGhpcy50b2RvTGlzdClcbiAgICB9XG4gIH1cblxuICAvLyBFdmVudCBMaXN0ZW5lcnNcblxuICBiaW5kQWRkVG9kbyAoaGFuZGxlcikge1xuICAgIHRoaXMuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaGFuZGxlcihuZXcgVG9kbyh0aGlzLl90b2RvVGl0bGUsIHRoaXMuX3RvZG9EZXNjcmlwdGlvbiwgdGhpcy5fdG9kb0RhdGUsIHRoaXMuX3RvZG9Qcmlvcml0eSkpXG4gICAgICB0aGlzLl9yZXNldElucHV0cygpXG4gICAgfSlcbiAgfVxuXG4gIGJpbmREZWxldGVUb2RvIChoYW5kbGVyKSB7XG4gICAgdGhpcy50b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0by1kb19fY2hlY2snKSkge1xuICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKVxuICAgICAgICBoYW5kbGVyKGlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBPcGVuIGZvcm0gdG8gZWRpdCB0aGUgdG9kb1xuICBiaW5kT3BlbkVkaXQgKGhhbmRsZXIpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSkgcmV0dXJuXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLS1lZGl0JykpIHtcbiAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChldmVudC50YXJnZXQuY2xvc2VzdCgnLnRvLWRvJykuaWQpXG4gICAgICAgIGhhbmRsZXIoaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmRFZGl0VG9kbyAoaGFuZGxlcikge1xuICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuaW5uZXJIVE1MID09PSAnRWRpdCBUYXNrJykge1xuICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdmb3JtJykuaWQuc2xpY2UoMTApXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUb2RvID0gbmV3IFRvZG8oXG4gICAgICAgICAgJ3Rlc3QnLCAndGVzdCcsICcnLCAnbm9uZSdcbiAgICAgICAgKVxuICAgICAgICBoYW5kbGVyKHVwZGF0ZWRUb2RvLCBpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblRvZG9MaXN0Vmlldy5jb3VudGVyID0gMFxuIiwiaW1wb3J0ICcuL3Nhc3MvbWFpbi5zY3NzJ1xuaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gJy4vQXBwQ29udHJvbGxlcidcbmltcG9ydCB7IEFwcE1vZGVsIH0gZnJvbSAnLi9BcHBNb2RlbCdcbmltcG9ydCB7IEFwcFZpZXcgfSBmcm9tICcuL0FwcFZpZXcnXG5cbmNvbnN0IGFwcCA9IG5ldyBBcHBDb250cm9sbGVyKG5ldyBBcHBNb2RlbCgpLCBuZXcgQXBwVmlldygpKVxuXG4vLyBDcmVhdGUgYSBkZWZhdWx0IHByb2plY3QuIEl0IGNhbm5vdCBiZSBkZWxldGVkIGFzIGl0IGFjdHMgYXMgYSBcIkhvbWUgUGFnZVwiLlxuYXBwLmhhbmRsZUFkZFByb2plY3QoJ0RlZmF1bHQnKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tZGVsZXRlJykucmVtb3ZlKClcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9