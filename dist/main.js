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
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  height: calc(100% - 50px);\n}\n\n.hidden {\n  display: none !important;\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel {\n  color: rgba(42, 43, 104, 0.5);\n}\n.btn--cancel:hover {\n  color: rgba(42, 43, 104, 0.7);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit, .btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-medium {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-gap: 1rem;\n  align-items: start;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n\n.add__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority {\n  position: relative;\n}\n.add__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n\n.add__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.main__header ul {\n  display: grid;\n  grid-template-columns: 6.5rem 1fr 5.5rem auto;\n  margin-left: 2.35rem;\n  grid-gap: 1rem;\n}\n.main__header__date {\n  justify-self: center;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li button {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}", "",{"version":3,"sources":["webpack://src/sass/main.scss","webpack://src/sass/base/_base.scss","webpack://src/sass/base/_typography.scss","webpack://src/sass/utils/_variables.scss","webpack://src/sass/components/_buttons.scss","webpack://src/sass/components/_icons.scss","webpack://src/sass/utils/_mixins.scss","webpack://src/sass/components/_todo.scss","webpack://src/sass/layout/_form.scss","webpack://src/sass/layout/_header.scss","webpack://src/sass/layout/_nav.scss","webpack://src/sass/layout/_main.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.content__wrapper {\n  position: relative;\n  top: 50px;\n  display: flex;\n  height: calc(100% - 50px);\n}\n\n.hidden {\n  display: none !important;\n}\n\nbody,\nbutton {\n  font-family: \"Nanum Gothic\", Arial;\n  font-size: 0.875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: #2a2b68;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\n.btn--page--header {\n  color: #fff;\n}\n.btn--icon {\n  font-size: 1.25rem;\n}\n.btn--submit, .btn--cancel {\n  text-transform: uppercase;\n  font-size: 0.85em;\n  letter-spacing: -0.5px;\n}\n.btn--submit {\n  color: #fff;\n}\n.btn--cancel {\n  color: rgba(42, 43, 104, 0.5);\n}\n.btn--cancel:hover {\n  color: rgba(42, 43, 104, 0.7);\n}\n\n.nav--heading {\n  text-transform: uppercase;\n  color: #2a2b68;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  line-height: 2.5;\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\ninput,\ntextarea {\n  font-family: \"Nanum Gothic\", Arial;\n}\n\n[name=title] {\n  font-weight: 700;\n}\n\n[name=date] {\n  color: #8e8e8e;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\n\n.btn--submit, .btn--cancel {\n  padding: 0.15rem 0.5rem;\n}\n.btn--submit {\n  background: rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  margin-right: 0.25rem;\n}\n.btn--submit:hover {\n  background: rgba(42, 43, 104, 0.7);\n}\n.btn--cancel {\n  border: 1px solid rgba(42, 43, 104, 0.5);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.nav__to-do li:before, .nav__projects li:before, .nav__filters li:before {\n  margin: 0 0.25rem 0 1.25rem;\n}\n.nav__to-do li:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n.nav__projects li:before {\n  content: \"⚫\";\n  color: rgba(42, 43, 104, 0.5);\n}\n.nav .project_list__add:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n.nav__filters li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n.priority-high {\n  color: #a14242;\n}\n\n.priority-medium {\n  color: #e79a67;\n}\n\n.priority-low {\n  color: #5d975b;\n}\n\n.priority-none {\n  color: #c7c7c7;\n}\n\n.date-all::before {\n  content: \"\";\n}\n\n.date-today::before {\n  content: \"\";\n}\n\n.date-upcoming::before {\n  content: \"\";\n}\n\n.date-anytime::before {\n  content: \"\";\n}\n\n.date-all::before {\n  color: #40429e;\n}\n\n.date-today::before {\n  color: #eb9963;\n}\n\n.date-upcoming::before {\n  color: #8d5a89;\n}\n\n.date-anytime::before {\n  color: #7a7a7a;\n}\n\n.date-late::before {\n  color: #942020;\n}\n\n.nav--heading:before {\n  content: \"\";\n  color: #2a2b68;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n  margin-right: 0.75rem;\n}\n\n.main__header li:before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}\n\n.to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-gap: 1rem;\n  align-items: start;\n}\n.to-do__check {\n  margin-top: 7px;\n}\n\n.add__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n}\n.add__content--todo {\n  border-radius: 10px;\n  padding: 0.25rem 1rem;\n}\n.add__content--project {\n  border-radius: 5px;\n  margin: 0 1rem;\n  padding: 0.15rem;\n}\n\ninput[type=text],\ntextarea {\n  width: 100%;\n  padding: 0.25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=title] {\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n\n.add__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority {\n  position: relative;\n}\n.add__priority input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(42, 43, 104, 0.35);\n  padding: 0.25rem 0.5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n}\n.add-priority:before {\n  content: \"\";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #fff;\n  position: absolute;\n  top: -5px;\n  left: 15px;\n  z-index: 1;\n}\n.add-priority:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid rgba(42, 43, 104, 0.35);\n  position: absolute;\n  top: -6px;\n  left: 14px;\n}\n.add-priority label {\n  text-align: center;\n  margin: 0 0.5rem;\n}\n\n.add__finish {\n  margin: 0.5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.page__header {\n  position: fixed;\n  background: #2a2b68;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n}\n.page__header ul {\n  display: flex;\n  flex: 1;\n}\n.page__header ul li:last-child {\n  margin-left: auto;\n}\n\n.main__header ul {\n  display: grid;\n  grid-template-columns: 6.5rem 1fr 5.5rem auto;\n  margin-left: 2.35rem;\n  grid-gap: 1rem;\n}\n.main__header__date {\n  justify-self: center;\n}\n\n.nav {\n  background: #eef0f1;\n  width: 250px;\n  border-right: 1px solid rgba(42, 43, 104, 0.25);\n  padding: 2rem 0.25rem 0 2rem;\n}\n.nav__category {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(42, 43, 104, 0.1);\n}\n.nav__category:last-of-type {\n  border-bottom: none;\n}\n.nav__category li {\n  display: flex;\n}\n.nav__category li:hover {\n  background: rgba(42, 43, 104, 0.04);\n}\n.nav__category li button {\n  flex: 1;\n  text-align: start;\n}\n.nav--heading {\n  width: 100%;\n  text-align: start;\n}\n.nav--heading:hover {\n  background: rgba(42, 43, 104, 0.07);\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput,\ntextarea {\n\tborder: none;\n\n\t&:focus {\n\t\toutline: none;\n\t}\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\twidth: 100vw;\n\theight: 100vh;\n\tmax-width: 100%;\n\tmax-height: 100%;\n}\n\n.wrapper {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.content__wrapper {\n\tposition: relative;\n\ttop: 50px;\n\tdisplay: flex;\n\theight: calc(100% - 50px);\n}\n\n.hidden {\n\tdisplay: none !important;\n}","body,\nbutton {\n  font-family: $font-primary;\n  font-size: .875rem;\n  line-height: 1.9;\n  text-align: justify;\n}\n\nh1 {\n  font-size: 1.35rem;\n  line-height: 3;\n  text-transform: uppercase;\n  color: $color-primary;\n  letter-spacing: .5px;\n  text-align: center;\n}\n\n.btn {\n  &--page--header {\n    color: $color-header;\n  }\n\n  &--icon {\n    font-size: 1.25rem;\n  }\n\n  &--submit,\n  &--cancel {\n    text-transform: uppercase;\n    font-size: .85em;\n    letter-spacing: -.5px;\n  }\n\n  &--submit {\n    color: #fff;\n  }\n\n  &--cancel {\n    color: rgba($color-primary, .5);\n\n    &:hover {\n      color: rgba($color-primary, .7);\n    }\n\n  }\n\n}\n\n.nav {\n  &--heading {\n    text-transform: uppercase;\n    color: $color-primary;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 2.5;\n  }\n}\n\n.main__header button {\n  font-weight: 700;\n  transform: scale(1.05);\n}\n\n.to-do__title {\n  font-weight: 700;\n}\n\n// Form\n\ninput,\ntextarea {\n  font-family: $font-primary;\n}\n\n[name=\"title\"] {\n  font-weight: 700;\n}\n\n[name=\"date\"] {\n  color: $color-form;\n}\n\n.add-priority {\n  font-size: 1.1rem;\n}","// Fonts\n$font-primary: 'Nanum Gothic', Arial;\n\n\n// Colors\n$color-primary: rgb(42, 43, 104);\n$color-secondary: rgb(238, 240, 241);\n\n$color-header: #fff;\n$color-projects: rgba($color-primary, .5);\n$color-form: rgb(142, 142, 142);\n\n$color-priority: (\n  high: rgb(161, 66, 66),\n  medium: rgb(231, 154, 103),\n  low: rgb(93, 151, 91),\n  none: rgb(199, 199, 199)\n);\n\n$color-date: (\n  all: lighten($color-primary, 15%),\n  today: rgb(235, 153, 99),\n  upcoming: rgb(141, 90, 137),\n  anytime: rgb(122, 122, 122),\n  late: rgb(148, 32, 32)\n);\n\n// Icons\n\n$icons-date: (\n  all: \"\\f073\",\n  today: \"\\f272\",\n  upcoming: \"\\f274\",\n  anytime: \"\\f133\",\n);\n\n$icons-caret: (\n  up: \"\\f0d8\",\n  down: \"\\f0d7\",\n  right: \"\\f0da\"\n);\n\n$icon-add: \"\\f067\";\n\n// Others\n$margin-indent: 0 .25rem 0 1.25rem;","button {\n\tborder: none;\n  background: none;\n  cursor: pointer;\n  \n  &:focus {\n    outline: none;\n  }\n}\n\n.btn {\n\n  &--submit,\n  &--cancel {\n    padding: .15rem .5rem;\n  }\n  \n  &--submit {\n    background: rgba($color-primary, .5);\n    border-radius: 5px;\n    margin-right: .25rem;\n\n    &:hover {\n      background: rgba($color-primary, .7);\n    }\n\n  }\n\n  &--cancel {\n    border: 1px solid rgba($color-primary, .5);\n    border-radius: 5px;\n    background: rgba(#fff, .5);\n  }\n\n}","// NAV-ICONS\n\n.nav {\n  &__to-do li:before,\n  &__projects li:before,\n  &__filters li:before {\n    margin: $margin-indent;\n  }\n\n  &__to-do li:before {\n    @include font-awesome-400();\n  }\n\n  &__projects li:before {\n    content: \"⚫\";\n    color: $color-projects;\n  }\n\n  .project_list__add:before {\n    content: $icon-add;\n    @include font-awesome-700();\n  }\n\n  &__filters li:before {\n    content: \"\\f02e\";\n    @include font-awesome-400();\n  }\n}\n\n// Color Priority Icons\n@each $level, $color in $color-priority {\n  .priority-#{$level} {\n    color: $color;\n  }\n}\n\n// Date Icons\n@each $date, $value in $icons-date {\n  .date-#{$date}::before {\n    content: $value;\n  }\n}\n\n// Color Date Icons\n@each $date, $value in $color-date {\n  .date-#{$date}::before {\n    color: $value;\n  }\n}\n\n// Category Icons\n.nav--heading:before {\n  content: map-get($icons-caret, down);\n  color: $color-primary;\n  @include font-awesome-700();\n  margin-right: .75rem;\n}\n\n// MAIN ICONS\n\n.main__header li:before {\n  content: map-get($icons-caret, down);\n  @include font-awesome-700();\n}","@mixin font-awesome-400() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n}\n\n@mixin font-awesome-700() {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 700;\n}",".to-do {\n  display: grid;\n  grid-template-columns: auto 6.5rem 1fr 6.5rem 2rem;\n  grid-gap: 1rem;\n  align-items: start;\n  \n  &__check {\n    margin-top: 7px;\n  }\n\n}",".add__content {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba($color-primary, .35);\n\n  &--todo {\n    border-radius: 10px;\n    padding: .25rem 1rem;\n  }\n\n  &--project {\n    border-radius: 5px;\n    margin: 0 1rem;\n    padding: .15rem;\n  }\n}\n\ninput[type=\"text\"],\ntextarea {\n  width: 100%;\n  padding: .25rem;\n  background: none;\n}\n\ntextarea {\n  height: 4rem;\n}\n\n[name=\"title\"] {\n  border-bottom: 1px solid rgba($color-primary, .1);\n}\n\n.add__details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add__priority {\n  position: relative;\n\n  input[type=\"radio\"] {\n    position: fixed;\n    opacity: 0;\n    pointer-events: none;\n  }\n}\n\n.add-priority {\n  position: absolute;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba($color-primary, .35);\n  padding: .25rem .5rem;\n  justify-content: space-around;\n  left: -10px;\n  top: 1.65rem;\n  z-index: 1;\n\n  &:before {\n    content: '';\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #fff;\n    position: absolute;\n    top: -5px;\n    left: 15px;\n    z-index: 1;\n  }\n\n  &:after {\n    content: '';\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid rgba($color-primary, .35);\n    position: absolute;\n    top: -6px;\n    left: 14px;\n  }\n\n  label {\n    text-align: center;\n    margin: 0 .5rem;\n  }\n}\n\n.add__finish {\n  margin: .5rem 1rem;\n}\n\n.add__content--project {\n  background: rgba(#fff, .5);\n}\n",".page__header {\n  position: fixed;\n  background: $color-primary;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  \n\n  ul {\n    display: flex;\n    flex: 1;\n\n    & li:last-child {\n      margin-left: auto;\n    }\n  }\n}\n\n.main__header {\n\n  ul {\n    display: grid;\n    grid-template-columns: 6.5rem 1fr 5.5rem auto;\n    margin-left: 2.35rem;\n    grid-gap: 1rem;\n  }\n\n  &__date {\n    justify-self: center;\n  }\n\n}",".nav {\n  \n  background: $color-secondary;\n  width: 250px;\n  border-right: 1px solid rgba($color-primary, .25);\n  padding: 2rem .25rem 0 2rem;\n\n  &__category {\n    margin-bottom: .75rem;\n    padding-bottom: .75rem;\n    border-bottom: 1px solid rgba($color-primary, .1);\n\n    &:last-of-type {\n      border-bottom: none;\n    }\n\n    li {\n      display: flex;\n      \n      &:hover {\n        background: rgba($color-primary, .04);\n      }\n\n      button {\n        // Makes the whole line clickable instead of just the text.\n        flex: 1;\n        text-align: start;\n      }\n    }\n  }\n\n  &--heading {\n    width: 100%;\n    text-align: start;\n    \n    &:hover {\n      background: rgba($color-primary, .07);\n    }\n  }\n\n}","main {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-top: 3rem;\n}\n\n.content {\n  width: 100%;\n  max-width: 700px;\n}"],"sourceRoot":""}]);
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
  constructor(title, description, date, priority, project, section, id) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.project = project;
    this.section = section;
    this.id = id;
  }

  render(container) {
    const todoElem = document.createElement('div');
    todoElem.classList.add('to-do');
    todoElem.setAttribute('data-date', this.date);
    todoElem.setAttribute('data-priority', this.priority);
    todoElem.setAttribute('data-project', this.project);
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
class TodoListModel {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  editTodo(todo, field, update) {
    this.todos[todo.id][field] = update;
  }

  removeTodo(id) {
    this.todos = this.todos.map(todo => todo.id !== id);
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
class TodoListView {
  constructor() {
    // Section of the Todo List
    this.todoList = document.querySelector('#to-do_list'); // Form to add a Todo to the Todo List

    this.title = document.querySelector('[name="title"]');
    this.description = document.querySelector('[name="description"]');
    this.date = document.querySelector('[name="date"]');
    this.priority = document.querySelector('[name="priority"] checked');
    this.submit = document.querySelector('.submit-todo');
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
    return this.priority.value;
  } // Reset form inputs


  _resetInputs() {
    this.title.value = '';
    this.description.value = '';
    this.date.value = '';
    this.priority.checked = false;
  } // Render the whole Todo List (used at the loading, and when we delete a Todo)


  renderAll(todos) {
    this.todoList.innerHTML = '';

    for (const todo of todos) {
      todo.render(this.todoList);
    }
  } // Only renders the last Todo of the List (used when we add a Todo)


  renderLast(todoList) {
    todoList[todoList.length - 1].render();
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
/* harmony import */ var _TodoListController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoListController */ "./src/TodoListController.js");
/* harmony import */ var _TodoListModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoListModel */ "./src/TodoListModel.js");
/* harmony import */ var _TodoListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoListView */ "./src/TodoListView.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Todo */ "./src/Todo.js");





const generalList = new _TodoListController__WEBPACK_IMPORTED_MODULE_1__["TodoListController"](new _TodoListModel__WEBPACK_IMPORTED_MODULE_2__["TodoListModel"](), new _TodoListView__WEBPACK_IMPORTED_MODULE_3__["TodoListView"]());
generalList.model.addTodo(new _Todo__WEBPACK_IMPORTED_MODULE_4__["Todo"]('Dentist', 'Appointment at 2PM', '', 'high', 'none', 'none', '1'));
console.log(generalList.model.todos);
generalList.view.renderAll(generalList.model.todos);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RvZG9MaXN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RvZG9MaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiVG9kbyIsImNvbnN0cnVjdG9yIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJwcmlvcml0eSIsInByb2plY3QiLCJzZWN0aW9uIiwicmVuZGVyIiwiY29udGFpbmVyIiwidG9kb0VsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJ0b2RvQ2hlY2siLCJhcHBlbmQiLCJjb21wb25lbnRzIiwiY29tcG9uZW50IiwidG9kb0NvbXBvbmVudCIsImlubmVySFRNTCIsInRvZG9Qcmlvcml0eSIsIlRvZG9MaXN0Q29udHJvbGxlciIsIm1vZGVsIiwidmlldyIsIlRvZG9MaXN0TW9kZWwiLCJuYW1lIiwidG9kb3MiLCJhZGRUb2RvIiwidG9kbyIsImVkaXRUb2RvIiwiZmllbGQiLCJ1cGRhdGUiLCJyZW1vdmVUb2RvIiwiVG9kb0xpc3RWaWV3IiwidG9kb0xpc3QiLCJxdWVyeVNlbGVjdG9yIiwic3VibWl0IiwiX3RvZG9UaXRsZSIsInZhbHVlIiwiX3RvZG9EZXNjcmlwdGlvbiIsIl90b2RvRGF0ZSIsIl90b2RvUHJpb3JpdHkiLCJfcmVzZXRJbnB1dHMiLCJjaGVja2VkIiwicmVuZGVyQWxsIiwicmVuZGVyTGFzdCIsImdlbmVyYWxMaXN0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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LE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFN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QUlHLDREQUFKLEVBQXZCLEVBQTRDLElBQUlTLDBEQUFKLEVBQTVDLENBQXBCO0FBRUFhLFdBQVcsQ0FBQ3hCLEtBQVosQ0FBa0JLLE9BQWxCLENBQ0UsSUFBSTdCLDBDQUFKLENBQVMsU0FBVCxFQUFvQixvQkFBcEIsRUFBMEMsRUFBMUMsRUFBOEMsTUFBOUMsRUFBc0QsTUFBdEQsRUFBOEQsTUFBOUQsRUFBc0UsR0FBdEUsQ0FERjtBQUlBaUQsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVcsQ0FBQ3hCLEtBQVosQ0FBa0JJLEtBQTlCO0FBQ0FvQixXQUFXLENBQUN2QixJQUFaLENBQWlCcUIsU0FBakIsQ0FBMkJFLFdBQVcsQ0FBQ3hCLEtBQVosQ0FBa0JJLEtBQTdDLEU7Ozs7Ozs7Ozs7O0FDYkEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw0TUFBb0c7O0FBRXRJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYnRuLS1wYWdlLS1oZWFkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWNhbmNlbCB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLmJ0bi0tY2FuY2VsOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9ZGF0ZV0ge1xcbiAgY29sb3I6ICM4ZThlOGU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0LCAuYnRuLS1jYW5jZWwge1xcbiAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC43KTtcXG59XFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlLCAubmF2X19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICBtYXJnaW46IDAgMC4yNXJlbSAwIDEuMjVyZW07XFxufVxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5uYXYgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2X19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZGl1bSB7XFxuICBjb2xvcjogI2U3OWE2NztcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogIzVkOTc1YjtcXG59XFxuXFxuLnByaW9yaXR5LW5vbmUge1xcbiAgY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibJcXFwiO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibRcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Es1xcXCI7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNDA0MjllO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWI5OTYzO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOGQ1YTg5O1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29sb3I6ICM3YTdhN2E7XFxufVxcblxcbi5kYXRlLWxhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzk0MjAyMDtcXG59XFxuXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OXXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udG8tZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA2LjVyZW0gMWZyIDYuNXJlbSAycmVtO1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcbi50by1kb19fY2hlY2sge1xcbiAgbWFyZ2luLXRvcDogN3B4O1xcbn1cXG5cXG4uYWRkX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxufVxcbi5hZGRfX2NvbnRlbnQtLXRvZG8ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG59XFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHBhZGRpbmc6IDAuMTVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcblxcbi5hZGRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5hZGRfX3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFkZF9fcHJpb3JpdHkgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGVmdDogLTEwcHg7XFxuICB0b3A6IDEuNjVyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4O1xcbiAgbGVmdDogMTVweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC02cHg7XFxuICBsZWZ0OiAxNHB4O1xcbn1cXG4uYWRkLXByaW9yaXR5IGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcblxcbi5hZGRfX2ZpbmlzaCB7XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLnBhZ2VfX2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiAjMmEyYjY4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCBsaTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIHVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYuNXJlbSAxZnIgNS41cmVtIGF1dG87XFxuICBtYXJnaW4tbGVmdDogMi4zNXJlbTtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbn1cXG4ubWFpbl9faGVhZGVyX19kYXRlIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGJhY2tncm91bmQ6ICNlZWYwZjE7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIHBhZGRpbmc6IDJyZW0gMC4yNXJlbSAwIDJyZW07XFxufVxcbi5uYXZfX2NhdGVnb3J5IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG4ubmF2X19jYXRlZ29yeTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNCk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpIGJ1dHRvbiB7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA3KTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zYXNzL21haW4uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2Jhc2UvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2Jhc2UvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL3V0aWxzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX2ljb25zLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy91dGlscy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9jb21wb25lbnRzL190b2RvLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX25hdi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7O0VBYUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBRENEOztBQ0NBLGdEQUFBO0FBQ0E7O0VBRUMsY0FBQTtBREVEOztBQ0FBO0VBQ0MsY0FBQTtBREdEOztBQ0RBO0VBQ0MsZ0JBQUE7QURJRDs7QUNGQTtFQUNDLFlBQUE7QURLRDs7QUNIQTs7RUFFQyxXQUFBO0VBQ0EsYUFBQTtBRE1EOztBQ0pBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBRE9EOztBQ0pBOztFQUVDLFlBQUE7QURPRDtBQ0xDOztFQUNDLGFBQUE7QURRRjs7QUNKQTtFQUNDLHNCQUFBO0FET0Q7O0FDSkE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRE9EOztBQ0pBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QURPRDs7QUNKQTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBRE9EOztBQ0pBO0VBQ0Msd0JBQUE7QURPRDs7QUV6RkE7O0VBRUUsa0NDRGE7RURFYixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUY0RkY7O0FFekZBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQ1BjO0VEUWQscUJBQUE7RUFDQSxrQkFBQTtBRjRGRjs7QUV4RkU7RUFDRSxXQ1hXO0FIc0dmO0FFeEZFO0VBQ0Usa0JBQUE7QUYwRko7QUV2RkU7RUFFRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUZ3Rko7QUVyRkU7RUFDRSxXQUFBO0FGdUZKO0FFcEZFO0VBQ0UsNkJBQUE7QUZzRko7QUVwRkk7RUFDRSw2QkFBQTtBRnNGTjs7QUU5RUU7RUFDRSx5QkFBQTtFQUNBLGNDOUNZO0VEK0NaLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBRmlGSjs7QUU3RUE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FGZ0ZGOztBRTdFQTtFQUNFLGdCQUFBO0FGZ0ZGOztBRTNFQTs7RUFFRSxrQ0N0RWE7QUhvSmY7O0FFM0VBO0VBQ0UsZ0JBQUE7QUY4RUY7O0FFM0VBO0VBQ0UsY0NyRVc7QUhtSmI7O0FFM0VBO0VBQ0UsaUJBQUE7QUY4RUY7O0FJaktBO0VBQ0MsWUFBQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBSm9LRjtBSWxLRTtFQUNFLGFBQUE7QUpvS0o7O0FJOUpFO0VBRUUsdUJBQUE7QUpnS0o7QUk3SkU7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUorSko7QUk3Skk7RUFDRSxrQ0FBQTtBSitKTjtBSTFKRTtFQUNFLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBSjRKSjs7QUt4TEU7RUFHRSwyQkZ1Q1k7QUhrSmhCO0FLdExFO0VDUkEsa0NBQUE7RUFDQSxnQkFBQTtBTmlNRjtBS3RMRTtFQUNFLFlBQUE7RUFDQSw2QkZOYTtBSDhMakI7QUtyTEU7RUFDRSxZRnVCTztFR3BDVCxrQ0FBQTtFQUNBLGdCQUFBO0FOcU1GO0FLckxFO0VBQ0UsWUFBQTtFQ3ZCRixrQ0FBQTtFQUNBLGdCQUFBO0FOK01GOztBS2xMRTtFQUNFLGNGcEJhO0FIeU1qQjs7QUt0TEU7RUFDRSxjRnBCYTtBSDZNakI7O0FLMUxFO0VBQ0UsY0ZwQmE7QUhpTmpCOztBSzlMRTtFQUNFLGNGcEJhO0FIcU5qQjs7QUszTEU7RUFDRSxZRlZTO0FId01iOztBSy9MRTtFQUNFLFlGVlM7QUg0TWI7O0FLbk1FO0VBQ0UsWUZWUztBSGdOYjs7QUt2TUU7RUFDRSxZRlZTO0FIb05iOztBS3BNRTtFQUNFLGNGM0JTO0FIa09iOztBS3hNRTtFQUNFLGNGM0JTO0FIc09iOztBSzVNRTtFQUNFLGNGM0JTO0FIME9iOztBS2hORTtFQUNFLGNGM0JTO0FIOE9iOztBS3BORTtFQUNFLGNGM0JTO0FIa1BiOztBS2xOQTtFQUNFLFlBQUE7RUFDQSxjRmhEYztFR0NkLGtDQUFBO0VBQ0EsZ0JBQUE7RURnREEscUJBQUE7QUxzTkY7O0FLak5BO0VBQ0UsWUFBQTtFQ3ZEQSxrQ0FBQTtFQUNBLGdCQUFBO0FONFFGOztBT25SQTtFQUNFLGFBQUE7RUFDQSxrREFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBUHNSRjtBT3BSRTtFQUNFLGVBQUE7QVBzUko7O0FRN1JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUNBQUE7QVJnU0Y7QVE5UkU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FSZ1NKO0FRN1JFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QVIrUko7O0FRM1JBOztFQUVFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FSOFJGOztBUTNSQTtFQUNFLFlBQUE7QVI4UkY7O0FRM1JBO0VBQ0UsK0NBQUE7QVI4UkY7O0FRM1JBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FSOFJGOztBUTNSQTtFQUNFLGtCQUFBO0FSOFJGO0FRNVJFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBUjhSSjs7QVExUkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBUjZSRjtBUTNSRTtFQUNFLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBUjZSSjtBUTFSRTtFQUNFLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FSNFJKO0FRelJFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBUjJSSjs7QVF2UkE7RUFDRSxtQkFBQTtBUjBSRjs7QVF2UkE7RUFDRSxvQ0FBQTtBUjBSRjs7QVNwWEE7RUFDRSxlQUFBO0VBQ0EsbUJOR2M7RU1GZCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QVR1WEY7QVNwWEU7RUFDRSxhQUFBO0VBQ0EsT0FBQTtBVHNYSjtBU3BYSTtFQUNFLGlCQUFBO0FUc1hOOztBUy9XRTtFQUNFLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBVGtYSjtBUy9XRTtFQUNFLG9CQUFBO0FUaVhKOztBVS9ZQTtFQUVFLG1CUElnQjtFT0hoQixZQUFBO0VBQ0EsK0NBQUE7RUFDQSw0QkFBQTtBVmlaRjtBVS9ZRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQ0FBQTtBVmlaSjtBVS9ZSTtFQUNFLG1CQUFBO0FWaVpOO0FVOVlJO0VBQ0UsYUFBQTtBVmdaTjtBVTlZTTtFQUNFLG1DQUFBO0FWZ1pSO0FVN1lNO0VBRUUsT0FBQTtFQUNBLGlCQUFBO0FWOFlSO0FVellFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FWMllKO0FVellJO0VBQ0UsbUNBQUE7QVYyWU47O0FXL2FBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FYa2JGOztBVy9hQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBWGtiRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRfX3dyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5LFxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjk7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuMzVyZW07XFxuICBsaW5lLWhlaWdodDogMztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi0tcGFnZS0taGVhZGVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnRuLS1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmJ0bi0tc3VibWl0LCAuYnRuLS1jYW5jZWwge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXG59XFxuLmJ0bi0tc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnRuLS1jYW5jZWwge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5idG4tLWNhbmNlbDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC43KTtcXG59XFxuXFxuLm5hdi0taGVhZGluZyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi50by1kb19fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiLCBBcmlhbDtcXG59XFxuXFxuW25hbWU9dGl0bGVdIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbltuYW1lPWRhdGVdIHtcXG4gIGNvbG9yOiAjOGU4ZThlO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idG4tLXN1Ym1pdCwgLmJ0bi0tY2FuY2VsIHtcXG4gIHBhZGRpbmc6IDAuMTVyZW0gMC41cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG59XFxuLmJ0bi0tc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNyk7XFxufVxcbi5idG4tLWNhbmNlbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4ubmF2X190by1kbyBsaTpiZWZvcmUsIC5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSwgLm5hdl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMCAxLjI1cmVtO1xcbn1cXG4ubmF2X190by1kbyBsaTpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5uYXZfX3Byb2plY3RzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pqrXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4ubmF2IC5wcm9qZWN0X2xpc3RfX2FkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm5hdl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgY29sb3I6ICNhMTQyNDI7XFxufVxcblxcbi5wcmlvcml0eS1tZWRpdW0ge1xcbiAgY29sb3I6ICNlNzlhNjc7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6ICM1ZDk3NWI7XFxufVxcblxcbi5wcmlvcml0eS1ub25lIHtcXG4gIGNvbG9yOiAjYzdjN2M3O1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GzXFxcIjtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74myXFxcIjtcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74m0XFxcIjtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLNcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbGw6OmJlZm9yZSB7XFxuICBjb2xvcjogIzQwNDI5ZTtcXG59XFxuXFxuLmRhdGUtdG9kYXk6OmJlZm9yZSB7XFxuICBjb2xvcjogI2ViOTk2MztcXG59XFxuXFxuLmRhdGUtdXBjb21pbmc6OmJlZm9yZSB7XFxuICBjb2xvcjogIzhkNWE4OTtcXG59XFxuXFxuLmRhdGUtYW55dGltZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbn1cXG5cXG4uZGF0ZS1sYXRlOjpiZWZvcmUge1xcbiAgY29sb3I6ICM5NDIwMjA7XFxufVxcblxcbi5uYXYtLWhlYWRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG59XFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG4udG8tZG9fX2NoZWNrIHtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG59XFxuXFxuLmFkZF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbn1cXG4uYWRkX19jb250ZW50LS10b2RvIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxufVxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBwYWRkaW5nOiAwLjE1cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuW25hbWU9dGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG5cXG4uYWRkX19kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkX19wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hZGRfX3ByaW9yaXR5IGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAxLjY1cmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDtcXG4gIGxlZnQ6IDE1cHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMzUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNnB4O1xcbiAgbGVmdDogMTRweDtcXG59XFxuLmFkZC1wcmlvcml0eSBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uYWRkX19maW5pc2gge1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5wYWdlX19oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogIzJhMmI2ODtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcbi5wYWdlX19oZWFkZXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwgbGk6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm1haW5fX2hlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2LjVyZW0gMWZyIDUuNXJlbSBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDIuMzVyZW07XFxuICBncmlkLWdhcDogMXJlbTtcXG59XFxuLm1haW5fX2hlYWRlcl9fZGF0ZSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm5hdiB7XFxuICBiYWNrZ3JvdW5kOiAjZWVmMGYxO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4yNSk7XFxuICBwYWRkaW5nOiAycmVtIDAuMjVyZW0gMCAycmVtO1xcbn1cXG4ubmF2X19jYXRlZ29yeSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuLm5hdl9fY2F0ZWdvcnk6bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDQpO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSBidXR0b24ge1xcbiAgZmxleDogMTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNyk7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxufVwiLFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcblxcdCY6Zm9jdXMge1xcblxcdFxcdG91dGxpbmU6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG4qIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxuXFx0bWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRfX3dyYXBwZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDUwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG5cXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVwiLFwiYm9keSxcXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxuICBmb250LXNpemU6IC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS45O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDM7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idG4ge1xcbiAgJi0tcGFnZS0taGVhZGVyIHtcXG4gICAgY29sb3I6ICRjb2xvci1oZWFkZXI7XFxuICB9XFxuXFxuICAmLS1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcblxcbiAgJi0tc3VibWl0LFxcbiAgJi0tY2FuY2VsIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAuODVlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uNXB4O1xcbiAgfVxcblxcbiAgJi0tc3VibWl0IHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuXFxuICAmLS1jYW5jZWwge1xcbiAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjcpO1xcbiAgICB9XFxuXFxuICB9XFxuXFxufVxcblxcbi5uYXYge1xcbiAgJi0taGVhZGluZyB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XFxuICB9XFxufVxcblxcbi5tYWluX19oZWFkZXIgYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4udG8tZG9fX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8vIEZvcm1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG59XFxuXFxuW25hbWU9XFxcInRpdGxlXFxcIl0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9XFxcImRhdGVcXFwiXSB7XFxuICBjb2xvcjogJGNvbG9yLWZvcm07XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVwiLFwiLy8gRm9udHNcXG4kZm9udC1wcmltYXJ5OiAnTmFudW0gR290aGljJywgQXJpYWw7XFxuXFxuXFxuLy8gQ29sb3JzXFxuJGNvbG9yLXByaW1hcnk6IHJnYig0MiwgNDMsIDEwNCk7XFxuJGNvbG9yLXNlY29uZGFyeTogcmdiKDIzOCwgMjQwLCAyNDEpO1xcblxcbiRjb2xvci1oZWFkZXI6ICNmZmY7XFxuJGNvbG9yLXByb2plY3RzOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuJGNvbG9yLWZvcm06IHJnYigxNDIsIDE0MiwgMTQyKTtcXG5cXG4kY29sb3ItcHJpb3JpdHk6IChcXG4gIGhpZ2g6IHJnYigxNjEsIDY2LCA2NiksXFxuICBtZWRpdW06IHJnYigyMzEsIDE1NCwgMTAzKSxcXG4gIGxvdzogcmdiKDkzLCAxNTEsIDkxKSxcXG4gIG5vbmU6IHJnYigxOTksIDE5OSwgMTk5KVxcbik7XFxuXFxuJGNvbG9yLWRhdGU6IChcXG4gIGFsbDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTUlKSxcXG4gIHRvZGF5OiByZ2IoMjM1LCAxNTMsIDk5KSxcXG4gIHVwY29taW5nOiByZ2IoMTQxLCA5MCwgMTM3KSxcXG4gIGFueXRpbWU6IHJnYigxMjIsIDEyMiwgMTIyKSxcXG4gIGxhdGU6IHJnYigxNDgsIDMyLCAzMilcXG4pO1xcblxcbi8vIEljb25zXFxuXFxuJGljb25zLWRhdGU6IChcXG4gIGFsbDogXFxcIlxcXFxmMDczXFxcIixcXG4gIHRvZGF5OiBcXFwiXFxcXGYyNzJcXFwiLFxcbiAgdXBjb21pbmc6IFxcXCJcXFxcZjI3NFxcXCIsXFxuICBhbnl0aW1lOiBcXFwiXFxcXGYxMzNcXFwiLFxcbik7XFxuXFxuJGljb25zLWNhcmV0OiAoXFxuICB1cDogXFxcIlxcXFxmMGQ4XFxcIixcXG4gIGRvd246IFxcXCJcXFxcZjBkN1xcXCIsXFxuICByaWdodDogXFxcIlxcXFxmMGRhXFxcIlxcbik7XFxuXFxuJGljb24tYWRkOiBcXFwiXFxcXGYwNjdcXFwiO1xcblxcbi8vIE90aGVyc1xcbiRtYXJnaW4taW5kZW50OiAwIC4yNXJlbSAwIDEuMjVyZW07XCIsXCJidXR0b24ge1xcblxcdGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBcXG4gICY6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uYnRuIHtcXG5cXG4gICYtLXN1Ym1pdCxcXG4gICYtLWNhbmNlbCB7XFxuICAgIHBhZGRpbmc6IC4xNXJlbSAuNXJlbTtcXG4gIH1cXG4gIFxcbiAgJi0tc3VibWl0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogLjI1cmVtO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNyk7XFxuICAgIH1cXG5cXG4gIH1cXG5cXG4gICYtLWNhbmNlbCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCNmZmYsIC41KTtcXG4gIH1cXG5cXG59XCIsXCIvLyBOQVYtSUNPTlNcXG5cXG4ubmF2IHtcXG4gICZfX3RvLWRvIGxpOmJlZm9yZSxcXG4gICZfX3Byb2plY3RzIGxpOmJlZm9yZSxcXG4gICZfX2ZpbHRlcnMgbGk6YmVmb3JlIHtcXG4gICAgbWFyZ2luOiAkbWFyZ2luLWluZGVudDtcXG4gIH1cXG5cXG4gICZfX3RvLWRvIGxpOmJlZm9yZSB7XFxuICAgIEBpbmNsdWRlIGZvbnQtYXdlc29tZS00MDAoKTtcXG4gIH1cXG5cXG4gICZfX3Byb2plY3RzIGxpOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgICBjb2xvcjogJGNvbG9yLXByb2plY3RzO1xcbiAgfVxcblxcbiAgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICRpY29uLWFkZDtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbiAgfVxcblxcbiAgJl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMmVcXFwiO1xcbiAgICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNDAwKCk7XFxuICB9XFxufVxcblxcbi8vIENvbG9yIFByaW9yaXR5IEljb25zXFxuQGVhY2ggJGxldmVsLCAkY29sb3IgaW4gJGNvbG9yLXByaW9yaXR5IHtcXG4gIC5wcmlvcml0eS0jeyRsZXZlbH0ge1xcbiAgICBjb2xvcjogJGNvbG9yO1xcbiAgfVxcbn1cXG5cXG4vLyBEYXRlIEljb25zXFxuQGVhY2ggJGRhdGUsICR2YWx1ZSBpbiAkaWNvbnMtZGF0ZSB7XFxuICAuZGF0ZS0jeyRkYXRlfTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJHZhbHVlO1xcbiAgfVxcbn1cXG5cXG4vLyBDb2xvciBEYXRlIEljb25zXFxuQGVhY2ggJGRhdGUsICR2YWx1ZSBpbiAkY29sb3ItZGF0ZSB7XFxuICAuZGF0ZS0jeyRkYXRlfTo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICR2YWx1ZTtcXG4gIH1cXG59XFxuXFxuLy8gQ2F0ZWdvcnkgSWNvbnNcXG4ubmF2LS1oZWFkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBtYXAtZ2V0KCRpY29ucy1jYXJldCwgZG93bik7XFxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxuICBtYXJnaW4tcmlnaHQ6IC43NXJlbTtcXG59XFxuXFxuLy8gTUFJTiBJQ09OU1xcblxcbi5tYWluX19oZWFkZXIgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG1hcC1nZXQoJGljb25zLWNhcmV0LCBkb3duKTtcXG4gIEBpbmNsdWRlIGZvbnQtYXdlc29tZS03MDAoKTtcXG59XCIsXCJAbWl4aW4gZm9udC1hd2Vzb21lLTQwMCgpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5AbWl4aW4gZm9udC1hd2Vzb21lLTcwMCgpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIixcIi50by1kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYuNXJlbSAxZnIgNi41cmVtIDJyZW07XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIFxcbiAgJl9fY2hlY2sge1xcbiAgICBtYXJnaW4tdG9wOiA3cHg7XFxuICB9XFxuXFxufVwiLFwiLmFkZF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuXFxuICAmLS10b2RvIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogLjI1cmVtIDFyZW07XFxuICB9XFxuXFxuICAmLS1wcm9qZWN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgcGFkZGluZzogLjE1cmVtO1xcbiAgfVxcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbltuYW1lPVxcXCJ0aXRsZVxcXCJdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMSk7XFxufVxcblxcbi5hZGRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5hZGRfX3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG4gIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGVmdDogLTEwcHg7XFxuICB0b3A6IDEuNjVyZW07XFxuICB6LWluZGV4OiAxO1xcblxcbiAgJjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTVweDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gICY6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTZweDtcXG4gICAgbGVmdDogMTRweDtcXG4gIH1cXG5cXG4gIGxhYmVsIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgLjVyZW07XFxuICB9XFxufVxcblxcbi5hZGRfX2ZpbmlzaCB7XFxuICBtYXJnaW46IC41cmVtIDFyZW07XFxufVxcblxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSgjZmZmLCAuNSk7XFxufVxcblwiLFwiLnBhZ2VfX2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBcXG5cXG4gIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgJiBsaTpsYXN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubWFpbl9faGVhZGVyIHtcXG5cXG4gIHVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2LjVyZW0gMWZyIDUuNXJlbSBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMi4zNXJlbTtcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxuICB9XFxuXFxuICAmX19kYXRlIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxufVwiLFwiLm5hdiB7XFxuICBcXG4gIGJhY2tncm91bmQ6ICRjb2xvci1zZWNvbmRhcnk7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMjUpO1xcbiAgcGFkZGluZzogMnJlbSAuMjVyZW0gMCAycmVtO1xcblxcbiAgJl9fY2F0ZWdvcnkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMSk7XFxuXFxuICAgICY6bGFzdC1vZi10eXBlIHtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICB9XFxuXFxuICAgIGxpIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIFxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjA0KTtcXG4gICAgICB9XFxuXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIC8vIE1ha2VzIHRoZSB3aG9sZSBsaW5lIGNsaWNrYWJsZSBpbnN0ZWFkIG9mIGp1c3QgdGhlIHRleHQuXFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAmLS1oZWFkaW5nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgLjA3KTtcXG4gICAgfVxcbiAgfVxcblxcbn1cIixcIm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBzZWN0aW9uLCBpZCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gICAgdGhpcy5zZWN0aW9uID0gc2VjdGlvblxuICAgIHRoaXMuaWQgPSBpZFxuICB9XG5cbiAgcmVuZGVyIChjb250YWluZXIpIHtcbiAgICBjb25zdCB0b2RvRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kb0VsZW0uY2xhc3NMaXN0LmFkZCgndG8tZG8nKVxuICAgIHRvZG9FbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1kYXRlJywgdGhpcy5kYXRlKVxuICAgIHRvZG9FbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmlvcml0eScsIHRoaXMucHJpb3JpdHkpXG4gICAgdG9kb0VsZW0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCB0aGlzLnByb2plY3QpXG5cbiAgICBjb25zdCB0b2RvQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdG9kb0NoZWNrLmNsYXNzTGlzdC5hZGQoJ3RvLWRvX19jaGVjaycpXG4gICAgdG9kb0NoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgdG9kb0VsZW0uYXBwZW5kKHRvZG9DaGVjaylcblxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ2RhdGUnXVxuICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGNvbXBvbmVudHMpIHtcbiAgICAgIGNvbnN0IHRvZG9Db21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdG9kb0NvbXBvbmVudC5jbGFzc0xpc3QuYWRkKGB0by1kb19fJHtjb21wb25lbnR9YClcbiAgICAgIHRvZG9Db21wb25lbnQuaW5uZXJIVE1MID0gdGhpc1tjb21wb25lbnRdXG4gICAgICB0b2RvRWxlbS5hcHBlbmQodG9kb0NvbXBvbmVudClcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0by1kb19fcHJpb3JpdHknLCBgcHJpb3JpdHktJHt0aGlzLnByaW9yaXR5fWApXG4gICAgdG9kb1ByaW9yaXR5LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1ib29rbWFya1wiPjwvaT4nXG4gICAgdG9kb0VsZW0uYXBwZW5kKHRvZG9Qcmlvcml0eSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmQodG9kb0VsZW0pXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUb2RvTGlzdENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUb2RvTGlzdE1vZGVsIHtcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy50b2RvcyA9IFtdXG4gIH1cblxuICBhZGRUb2RvICh0b2RvKSB7XG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pXG4gIH1cblxuICBlZGl0VG9kbyAodG9kbywgZmllbGQsIHVwZGF0ZSkge1xuICAgIHRoaXMudG9kb3NbdG9kby5pZF1bZmllbGRdID0gdXBkYXRlXG4gIH1cblxuICByZW1vdmVUb2RvIChpZCkge1xuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLm1hcCgodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUb2RvTGlzdFZpZXcge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLy8gU2VjdGlvbiBvZiB0aGUgVG9kbyBMaXN0XG4gICAgdGhpcy50b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0by1kb19saXN0JylcblxuICAgIC8vIEZvcm0gdG8gYWRkIGEgVG9kbyB0byB0aGUgVG9kbyBMaXN0XG4gICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGl0bGVcIl0nKVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJylcbiAgICB0aGlzLmRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRhdGVcIl0nKVxuICAgIHRoaXMucHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInByaW9yaXR5XCJdIGNoZWNrZWQnKVxuICAgIHRoaXMuc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC10b2RvJylcbiAgfVxuXG4gIC8vIEdldCBmb3JtIHZhbHVlc1xuICBnZXQgX3RvZG9UaXRsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUudmFsdWVcbiAgfVxuXG4gIGdldCBfdG9kb0Rlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbi52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvRGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZS52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvUHJpb3JpdHkgKCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5LnZhbHVlXG4gIH1cblxuICAvLyBSZXNldCBmb3JtIGlucHV0c1xuICBfcmVzZXRJbnB1dHMgKCkge1xuICAgIHRoaXMudGl0bGUudmFsdWUgPSAnJ1xuICAgIHRoaXMuZGVzY3JpcHRpb24udmFsdWUgPSAnJ1xuICAgIHRoaXMuZGF0ZS52YWx1ZSA9ICcnXG4gICAgdGhpcy5wcmlvcml0eS5jaGVja2VkID0gZmFsc2VcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgd2hvbGUgVG9kbyBMaXN0ICh1c2VkIGF0IHRoZSBsb2FkaW5nLCBhbmQgd2hlbiB3ZSBkZWxldGUgYSBUb2RvKVxuICByZW5kZXJBbGwgKHRvZG9zKSB7XG4gICAgdGhpcy50b2RvTGlzdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICB0b2RvLnJlbmRlcih0aGlzLnRvZG9MaXN0KVxuICAgIH1cbiAgfVxuXG4gIC8vIE9ubHkgcmVuZGVycyB0aGUgbGFzdCBUb2RvIG9mIHRoZSBMaXN0ICh1c2VkIHdoZW4gd2UgYWRkIGEgVG9kbylcbiAgcmVuZGVyTGFzdCAodG9kb0xpc3QpIHtcbiAgICB0b2RvTGlzdFt0b2RvTGlzdC5sZW5ndGggLSAxXS5yZW5kZXIoKVxuICB9XG59XG4iLCJpbXBvcnQgJy4vc2Fzcy9tYWluLnNjc3MnXG5pbXBvcnQgeyBUb2RvTGlzdENvbnRyb2xsZXIgfSBmcm9tICcuL1RvZG9MaXN0Q29udHJvbGxlcidcbmltcG9ydCB7IFRvZG9MaXN0TW9kZWwgfSBmcm9tICcuL1RvZG9MaXN0TW9kZWwnXG5pbXBvcnQgeyBUb2RvTGlzdFZpZXcgfSBmcm9tICcuL1RvZG9MaXN0VmlldydcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8nXG5cbmNvbnN0IGdlbmVyYWxMaXN0ID0gbmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCgpLCBuZXcgVG9kb0xpc3RWaWV3KCkpXG5cbmdlbmVyYWxMaXN0Lm1vZGVsLmFkZFRvZG8oXG4gIG5ldyBUb2RvKCdEZW50aXN0JywgJ0FwcG9pbnRtZW50IGF0IDJQTScsICcnLCAnaGlnaCcsICdub25lJywgJ25vbmUnLCAnMScpXG4pXG5cbmNvbnNvbGUubG9nKGdlbmVyYWxMaXN0Lm1vZGVsLnRvZG9zKVxuZ2VuZXJhbExpc3Qudmlldy5yZW5kZXJBbGwoZ2VuZXJhbExpc3QubW9kZWwudG9kb3MpXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==