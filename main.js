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
    this.onTodoListChange(this.model.todos);
    this.view.bindAddTodo(this.handleAddTodo.bind(this));
    this.model.bindTodoListChange(this.onTodoListChange.bind(this));
  }

  onTodoListChange(todos) {
    this.view.renderAll(todos);
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
    this.onTodoListChange(this.todos);
  }

  editTodo(todo, field, update) {
    this.todos[todo.id][field] = update;
    this.onTodoListChange(this.todos);
  }

  removeTodo(todo) {
    this.todos = this.todos.splice(this.todos.indexOf(todo), 1);
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
  constructor() {
    // Section of the Todo List
    this.todoList = document.querySelector('#to-do_list'); // Form to add a Todo to the Todo List

    this.title = document.querySelector('[name="title"]');
    this.description = document.querySelector('[name="description"]');
    this.date = document.querySelector('[name="date"]');
    this.submit = document.querySelector('#submit-todo');
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
    return document.querySelector('[name="priority"]:checked').value;
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
  } // Event Listeners on the DOM elements


  bindAddTodo(handler) {
    this.submit.addEventListener('click', () => {
      handler(new _Todo__WEBPACK_IMPORTED_MODULE_0__["Todo"](this._todoTitle, this._todoDescription, this._todoDate, this._todoPriority, '', '', ''));

      this._resetInputs();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RvZG9MaXN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RvZG9MaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiVG9kbyIsImNvbnN0cnVjdG9yIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJwcmlvcml0eSIsInByb2plY3QiLCJzZWN0aW9uIiwicmVuZGVyIiwiY29udGFpbmVyIiwidG9kb0VsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJ0b2RvQ2hlY2siLCJhcHBlbmQiLCJjb21wb25lbnRzIiwiY29tcG9uZW50IiwidG9kb0NvbXBvbmVudCIsImlubmVySFRNTCIsInRvZG9Qcmlvcml0eSIsIlRvZG9MaXN0Q29udHJvbGxlciIsIm1vZGVsIiwidmlldyIsIm9uVG9kb0xpc3RDaGFuZ2UiLCJ0b2RvcyIsImJpbmRBZGRUb2RvIiwiaGFuZGxlQWRkVG9kbyIsImJpbmQiLCJiaW5kVG9kb0xpc3RDaGFuZ2UiLCJyZW5kZXJBbGwiLCJ0b2RvIiwiYWRkVG9kbyIsImhhbmRsZUVkaXRUb2RvIiwiZmllbGQiLCJ1cGRhdGUiLCJlZGl0VG9kbyIsImhhbmRsZURlbGV0ZVRvZG8iLCJkZWxldGVUb2RvIiwiVG9kb0xpc3RNb2RlbCIsIm5hbWUiLCJyZW1vdmVUb2RvIiwic3BsaWNlIiwiaW5kZXhPZiIsImNhbGxiYWNrIiwiVG9kb0xpc3RWaWV3IiwidG9kb0xpc3QiLCJxdWVyeVNlbGVjdG9yIiwic3VibWl0IiwiX3RvZG9UaXRsZSIsInZhbHVlIiwiX3RvZG9EZXNjcmlwdGlvbiIsIl90b2RvRGF0ZSIsIl90b2RvUHJpb3JpdHkiLCJfcmVzZXRJbnB1dHMiLCJjaGVja2VkIiwicmVuZGVyTGFzdCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2VuZXJhbExpc3QiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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K2hCLFFBQVEsS0FBSyxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxXQUFXLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFV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QUFLbUQsVUFBZCxFQUEwQixLQUFLRSxnQkFBL0IsRUFBaUQsS0FBS0MsU0FBdEQsRUFBaUUsS0FBS0MsYUFBdEUsRUFBcUYsRUFBckYsRUFBeUYsRUFBekYsRUFBNkYsRUFBN0YsQ0FBRCxDQUFQOztBQUNBLFdBQUtDLFlBQUw7QUFDRCxLQUhEO0FBSUQ7O0FBMUR1QixDOzs7Ozs7Ozs7Ozs7QUNGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUssV0FBVyxHQUFHLElBQUl0QyxzRUFBSixDQUF1QixJQUFJa0IsNERBQUosRUFBdkIsRUFBNEMsSUFBSU0sMERBQUosRUFBNUMsQ0FBcEI7QUFFQWMsV0FBVyxDQUFDckMsS0FBWixDQUFrQlUsT0FBbEIsQ0FDRSxJQUFJbEMsMENBQUosQ0FBUyxTQUFULEVBQW9CLG9CQUFwQixFQUEwQyxFQUExQyxFQUE4QyxNQUE5QyxFQUFzRCxNQUF0RCxFQUE4RCxNQUE5RCxFQUFzRSxHQUF0RSxDQURGO0FBSUE4RCxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBVyxDQUFDckMsS0FBWixDQUFrQkcsS0FBOUI7QUFDQWtDLFdBQVcsQ0FBQ3BDLElBQVosQ0FBaUJPLFNBQWpCLENBQTJCNkIsV0FBVyxDQUFDckMsS0FBWixDQUFrQkcsS0FBN0MsRTs7Ozs7Ozs7Ozs7QUNiQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDRNQUFvRzs7QUFFdEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50X193cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYm9keSxcXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiLCBBcmlhbDtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS45O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDM7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMyYTJiNjg7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idG4tLXBhZ2UtLWhlYWRlciB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmJ0bi0taWNvbiB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdCwgLmJ0bi0tY2FuY2VsIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxufVxcbi5idG4tLXN1Ym1pdCB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbn1cXG4uYnRuLS1jYW5jZWw6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNyk7XFxufVxcblxcbi5uYXYtLWhlYWRpbmcge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XFxufVxcblxcbi5tYWluX19oZWFkZXIgYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4udG8tZG9fX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxufVxcblxcbltuYW1lPXRpdGxlXSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5bbmFtZT1kYXRlXSB7XFxuICBjb2xvcjogIzhlOGU4ZTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcXG59XFxuLmJ0bi0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG4uYnRuLS1jYW5jZWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlLCAubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUsIC5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlIHtcXG4gIG1hcmdpbjogMCAwLjI1cmVtIDAgMS4yNXJlbTtcXG59XFxuLm5hdl9fdG8tZG8gbGk6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ubmF2X19wcm9qZWN0cyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKaq1xcXCI7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLm5hdiAucHJvamVjdF9saXN0X19hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgadcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5uYXZfX2ZpbHRlcnMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK5cXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGNvbG9yOiAjYTE0MjQyO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkaXVtIHtcXG4gIGNvbG9yOiAjZTc5YTY3O1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gIGNvbG9yOiAjNWQ5NzViO1xcbn1cXG5cXG4ucHJpb3JpdHktbm9uZSB7XFxuICBjb2xvcjogI2M3YzdjNztcXG59XFxuXFxuLmRhdGUtYWxsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7XFxufVxcblxcbi5kYXRlLXRvZGF5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JslxcXCI7XFxufVxcblxcbi5kYXRlLXVwY29taW5nOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JtFxcXCI7XFxufVxcblxcbi5kYXRlLWFueXRpbWU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SzXFxcIjtcXG59XFxuXFxuLmRhdGUtYWxsOjpiZWZvcmUge1xcbiAgY29sb3I6ICM0MDQyOWU7XFxufVxcblxcbi5kYXRlLXRvZGF5OjpiZWZvcmUge1xcbiAgY29sb3I6ICNlYjk5NjM7XFxufVxcblxcbi5kYXRlLXVwY29taW5nOjpiZWZvcmUge1xcbiAgY29sb3I6ICM4ZDVhODk7XFxufVxcblxcbi5kYXRlLWFueXRpbWU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzdhN2E3YTtcXG59XFxuXFxuLmRhdGUtbGF0ZTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOTQyMDIwO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OXXFxcIjtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XFxufVxcblxcbi5tYWluX19oZWFkZXIgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50by1kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYuNXJlbSAxZnIgNi41cmVtIDJyZW07XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuLnRvLWRvX19jaGVjayB7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxufVxcblxcbi5hZGRfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG59XFxuLmFkZF9fY29udGVudC0tdG9kbyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbn1cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgcGFkZGluZzogMC4xNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbltuYW1lPXRpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWRkX19wcmlvcml0eSBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFkZC1wcmlvcml0eTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjM1KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTZweDtcXG4gIGxlZnQ6IDE0cHg7XFxufVxcbi5hZGQtcHJpb3JpdHkgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuXFxuLmFkZF9fZmluaXNoIHtcXG4gIG1hcmdpbjogMC41cmVtIDFyZW07XFxufVxcblxcbi5hZGRfX2NvbnRlbnQtLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4ucGFnZV9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6ICMyYTJiNjg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG4ucGFnZV9faGVhZGVyIHVsIGxpOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5tYWluX19oZWFkZXIgdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNi41cmVtIDFmciA1LjVyZW0gYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiAyLjM1cmVtO1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxufVxcbi5tYWluX19oZWFkZXJfX2RhdGUge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5uYXYge1xcbiAgYmFja2dyb3VuZDogI2VlZjBmMTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMjUpO1xcbiAgcGFkZGluZzogMnJlbSAwLjI1cmVtIDAgMnJlbTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcbi5uYXZfX2NhdGVnb3J5Omxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubmF2X19jYXRlZ29yeSBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA0KTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkgYnV0dG9uIHtcXG4gIGZsZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubmF2LS1oZWFkaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDQzLCAxMDQsIDAuMDcpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvYmFzZS9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvYmFzZS9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvdXRpbHMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvY29tcG9uZW50cy9faWNvbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL3V0aWxzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2NvbXBvbmVudHMvX3RvZG8uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9fZm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Nhc3MvbGF5b3V0L19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zYXNzL2xheW91dC9fbmF2LnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Fzcy9sYXlvdXQvX21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7OztDQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FEQ0Q7O0FDQ0EsZ0RBQUE7QUFDQTs7RUFFQyxjQUFBO0FERUQ7O0FDQUE7RUFDQyxjQUFBO0FER0Q7O0FDREE7RUFDQyxnQkFBQTtBRElEOztBQ0ZBO0VBQ0MsWUFBQTtBREtEOztBQ0hBOztFQUVDLFdBQUE7RUFDQSxhQUFBO0FETUQ7O0FDSkE7RUFDQyx5QkFBQTtFQUNBLGlCQUFBO0FET0Q7O0FDSkE7O0VBRUMsWUFBQTtBRE9EO0FDTEM7O0VBQ0MsYUFBQTtBRFFGOztBQ0pBO0VBQ0Msc0JBQUE7QURPRDs7QUNKQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FET0Q7O0FDSkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBRE9EOztBQ0pBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FET0Q7O0FDSkE7RUFDQyx3QkFBQTtBRE9EOztBRXpGQTs7RUFFRSxrQ0NEYTtFREViLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRjRGRjs7QUV6RkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNDUGM7RURRZCxxQkFBQTtFQUNBLGtCQUFBO0FGNEZGOztBRXhGRTtFQUNFLFdDWFc7QUhzR2Y7QUV4RkU7RUFDRSxrQkFBQTtBRjBGSjtBRXZGRTtFQUVFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBRndGSjtBRXJGRTtFQUNFLFdBQUE7QUZ1Rko7QUVwRkU7RUFDRSw2QkFBQTtBRnNGSjtBRXBGSTtFQUNFLDZCQUFBO0FGc0ZOOztBRTlFRTtFQUNFLHlCQUFBO0VBQ0EsY0M5Q1k7RUQrQ1osZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FGaUZKOztBRTdFQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUZnRkY7O0FFN0VBO0VBQ0UsZ0JBQUE7QUZnRkY7O0FFM0VBOztFQUVFLGtDQ3RFYTtBSG9KZjs7QUUzRUE7RUFDRSxnQkFBQTtBRjhFRjs7QUUzRUE7RUFDRSxjQ3JFVztBSG1KYjs7QUUzRUE7RUFDRSxpQkFBQTtBRjhFRjs7QUlqS0E7RUFDQyxZQUFBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0FKb0tGO0FJbEtFO0VBQ0UsYUFBQTtBSm9LSjs7QUk5SkU7RUFFRSx1QkFBQTtBSmdLSjtBSTdKRTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBSitKSjtBSTdKSTtFQUNFLGtDQUFBO0FKK0pOO0FJMUpFO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FKNEpKOztBS3hMRTtFQUdFLDJCRnVDWTtBSGtKaEI7QUt0TEU7RUNSQSxrQ0FBQTtFQUNBLGdCQUFBO0FOaU1GO0FLdExFO0VBQ0UsWUFBQTtFQUNBLDZCRk5hO0FIOExqQjtBS3JMRTtFQUNFLFlGdUJPO0VHcENULGtDQUFBO0VBQ0EsZ0JBQUE7QU5xTUY7QUtyTEU7RUFDRSxZQUFBO0VDdkJGLGtDQUFBO0VBQ0EsZ0JBQUE7QU4rTUY7O0FLbExFO0VBQ0UsY0ZwQmE7QUh5TWpCOztBS3RMRTtFQUNFLGNGcEJhO0FINk1qQjs7QUsxTEU7RUFDRSxjRnBCYTtBSGlOakI7O0FLOUxFO0VBQ0UsY0ZwQmE7QUhxTmpCOztBSzNMRTtFQUNFLFlGVlM7QUh3TWI7O0FLL0xFO0VBQ0UsWUZWUztBSDRNYjs7QUtuTUU7RUFDRSxZRlZTO0FIZ05iOztBS3ZNRTtFQUNFLFlGVlM7QUhvTmI7O0FLcE1FO0VBQ0UsY0YzQlM7QUhrT2I7O0FLeE1FO0VBQ0UsY0YzQlM7QUhzT2I7O0FLNU1FO0VBQ0UsY0YzQlM7QUgwT2I7O0FLaE5FO0VBQ0UsY0YzQlM7QUg4T2I7O0FLcE5FO0VBQ0UsY0YzQlM7QUhrUGI7O0FLbE5BO0VBQ0UsWUFBQTtFQUNBLGNGaERjO0VHQ2Qsa0NBQUE7RUFDQSxnQkFBQTtFRGdEQSxxQkFBQTtBTHNORjs7QUtqTkE7RUFDRSxZQUFBO0VDdkRBLGtDQUFBO0VBQ0EsZ0JBQUE7QU40UUY7O0FPblJBO0VBQ0UsYUFBQTtFQUNBLGtEQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FQc1JGO0FPcFJFO0VBQ0UsZUFBQTtBUHNSSjs7QVE3UkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtBUmdTRjtBUTlSRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QVJnU0o7QVE3UkU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBUitSSjs7QVEzUkE7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QVI4UkY7O0FRM1JBO0VBQ0UsWUFBQTtBUjhSRjs7QVEzUkE7RUFDRSwrQ0FBQTtBUjhSRjs7QVEzUkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QVI4UkY7O0FRM1JBO0VBQ0Usa0JBQUE7QVI4UkY7QVE1UkU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FSOFJKOztBUTFSQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FSNlJGO0FRM1JFO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FSNlJKO0FRMVJFO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QVI0Uko7QVF6UkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FSMlJKOztBUXZSQTtFQUNFLG1CQUFBO0FSMFJGOztBUXZSQTtFQUNFLG9DQUFBO0FSMFJGOztBU3BYQTtFQUNFLGVBQUE7RUFDQSxtQk5HYztFTUZkLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBVHVYRjtBU3BYRTtFQUNFLGFBQUE7RUFDQSxPQUFBO0FUc1hKO0FTcFhJO0VBQ0UsaUJBQUE7QVRzWE47O0FTL1dFO0VBQ0UsYUFBQTtFQUNBLDZDQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FUa1hKO0FTL1dFO0VBQ0Usb0JBQUE7QVRpWEo7O0FVL1lBO0VBRUUsbUJQSWdCO0VPSGhCLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLDRCQUFBO0FWaVpGO0FVL1lFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0FWaVpKO0FVL1lJO0VBQ0UsbUJBQUE7QVZpWk47QVU5WUk7RUFDRSxhQUFBO0FWZ1pOO0FVOVlNO0VBQ0UsbUNBQUE7QVZnWlI7QVU3WU07RUFFRSxPQUFBO0VBQ0EsaUJBQUE7QVY4WVI7QVV6WUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QVYyWUo7QVV6WUk7RUFDRSxtQ0FBQTtBVjJZTjs7QVcvYUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QVhrYkY7O0FXL2FBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FYa2JGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMmEyYjY4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYnRuLS1wYWdlLS1oZWFkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQsIC5idG4tLWNhbmNlbCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG4uYnRuLS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5idG4tLWNhbmNlbCB7XFxuICBjb2xvcjogcmdiYSg0MiwgNDMsIDEwNCwgMC41KTtcXG59XFxuLmJ0bi0tY2FuY2VsOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgMTA0LCAwLjcpO1xcbn1cXG5cXG4ubmF2LS1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRvLWRvX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIEFyaWFsO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuW25hbWU9ZGF0ZV0ge1xcbiAgY29sb3I6ICM4ZThlOGU7XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bi0tc3VibWl0LCAuYnRuLS1jYW5jZWwge1xcbiAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07XFxufVxcbi5idG4tLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uYnRuLS1zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC43KTtcXG59XFxuLmJ0bi0tY2FuY2VsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSwgLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlLCAubmF2X19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICBtYXJnaW46IDAgMC4yNXJlbSAwIDEuMjVyZW07XFxufVxcbi5uYXZfX3RvLWRvIGxpOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm5hdl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLimqtcXFwiO1xcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCAxMDQsIDAuNSk7XFxufVxcbi5uYXYgLnByb2plY3RfbGlzdF9fYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2X19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogI2ExNDI0MjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZGl1bSB7XFxuICBjb2xvcjogI2U3OWE2NztcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogIzVkOTc1YjtcXG59XFxuXFxuLnByaW9yaXR5LW5vbmUge1xcbiAgY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbNcXFwiO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibJcXFwiO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibRcXFwiO1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Es1xcXCI7XFxufVxcblxcbi5kYXRlLWFsbDo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNDA0MjllO1xcbn1cXG5cXG4uZGF0ZS10b2RheTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZWI5OTYzO1xcbn1cXG5cXG4uZGF0ZS11cGNvbWluZzo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjOGQ1YTg5O1xcbn1cXG5cXG4uZGF0ZS1hbnl0aW1lOjpiZWZvcmUge1xcbiAgY29sb3I6ICM3YTdhN2E7XFxufVxcblxcbi5kYXRlLWxhdGU6OmJlZm9yZSB7XFxuICBjb2xvcjogIzk0MjAyMDtcXG59XFxuXFxuLm5hdi0taGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7XFxuICBjb2xvcjogIzJhMmI2ODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OXXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udG8tZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA2LjVyZW0gMWZyIDYuNXJlbSAycmVtO1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcbi50by1kb19fY2hlY2sge1xcbiAgbWFyZ2luLXRvcDogN3B4O1xcbn1cXG5cXG4uYWRkX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxufVxcbi5hZGRfX2NvbnRlbnQtLXRvZG8ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG59XFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHBhZGRpbmc6IDAuMTVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG5bbmFtZT10aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCAxMDQsIDAuMSk7XFxufVxcblxcbi5hZGRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5hZGRfX3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFkZF9fcHJpb3JpdHkgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYWRkLXByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGVmdDogLTEwcHg7XFxuICB0b3A6IDEuNjVyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRkLXByaW9yaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4O1xcbiAgbGVmdDogMTVweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hZGQtcHJpb3JpdHk6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiYSg0MiwgNDMsIDEwNCwgMC4zNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC02cHg7XFxuICBsZWZ0OiAxNHB4O1xcbn1cXG4uYWRkLXByaW9yaXR5IGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcblxcbi5hZGRfX2ZpbmlzaCB7XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4uYWRkX19jb250ZW50LS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLnBhZ2VfX2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiAjMmEyYjY4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCBsaTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyIHVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYuNXJlbSAxZnIgNS41cmVtIGF1dG87XFxuICBtYXJnaW4tbGVmdDogMi4zNXJlbTtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbn1cXG4ubWFpbl9faGVhZGVyX19kYXRlIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGJhY2tncm91bmQ6ICNlZWYwZjE7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjI1KTtcXG4gIHBhZGRpbmc6IDJyZW0gMC4yNXJlbSAwIDJyZW07XFxufVxcbi5uYXZfX2NhdGVnb3J5IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgMTA0LCAwLjEpO1xcbn1cXG4ubmF2X19jYXRlZ29yeTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5hdl9fY2F0ZWdvcnkgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDEwNCwgMC4wNCk7XFxufVxcbi5uYXZfX2NhdGVnb3J5IGxpIGJ1dHRvbiB7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5uYXYtLWhlYWRpbmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi0taGVhZGluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA0MywgMTA0LCAwLjA3KTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG59XCIsXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFxuXFx0Jjpmb2N1cyB7XFxuXFx0XFx0b3V0bGluZTogbm9uZTtcXG5cXHR9XFxufVxcblxcbioge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudF9fd3JhcHBlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogNTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XFxufVxcblxcbi5oaWRkZW4ge1xcblxcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XCIsXCJib2R5LFxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjk7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuMzVyZW07XFxuICBsaW5lLWhlaWdodDogMztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ0biB7XFxuICAmLS1wYWdlLS1oZWFkZXIge1xcbiAgICBjb2xvcjogJGNvbG9yLWhlYWRlcjtcXG4gIH1cXG5cXG4gICYtLWljb24ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxuXFxuICAmLS1zdWJtaXQsXFxuICAmLS1jYW5jZWwge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IC44NWVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLS41cHg7XFxuICB9XFxuXFxuICAmLS1zdWJtaXQge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG5cXG4gICYtLWNhbmNlbCB7XFxuICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNyk7XFxuICAgIH1cXG5cXG4gIH1cXG5cXG59XFxuXFxuLm5hdiB7XFxuICAmLS1oZWFkaW5nIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcXG4gIH1cXG59XFxuXFxuLm1haW5fX2hlYWRlciBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi50by1kb19fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLy8gRm9ybVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbn1cXG5cXG5bbmFtZT1cXFwidGl0bGVcXFwiXSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5bbmFtZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGNvbG9yOiAkY29sb3ItZm9ybTtcXG59XFxuXFxuLmFkZC1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XCIsXCIvLyBGb250c1xcbiRmb250LXByaW1hcnk6ICdOYW51bSBHb3RoaWMnLCBBcmlhbDtcXG5cXG5cXG4vLyBDb2xvcnNcXG4kY29sb3ItcHJpbWFyeTogcmdiKDQyLCA0MywgMTA0KTtcXG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMjM4LCAyNDAsIDI0MSk7XFxuXFxuJGNvbG9yLWhlYWRlcjogI2ZmZjtcXG4kY29sb3ItcHJvamVjdHM6IHJnYmEoJGNvbG9yLXByaW1hcnksIC41KTtcXG4kY29sb3ItZm9ybTogcmdiKDE0MiwgMTQyLCAxNDIpO1xcblxcbiRjb2xvci1wcmlvcml0eTogKFxcbiAgaGlnaDogcmdiKDE2MSwgNjYsIDY2KSxcXG4gIG1lZGl1bTogcmdiKDIzMSwgMTU0LCAxMDMpLFxcbiAgbG93OiByZ2IoOTMsIDE1MSwgOTEpLFxcbiAgbm9uZTogcmdiKDE5OSwgMTk5LCAxOTkpXFxuKTtcXG5cXG4kY29sb3ItZGF0ZTogKFxcbiAgYWxsOiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxNSUpLFxcbiAgdG9kYXk6IHJnYigyMzUsIDE1MywgOTkpLFxcbiAgdXBjb21pbmc6IHJnYigxNDEsIDkwLCAxMzcpLFxcbiAgYW55dGltZTogcmdiKDEyMiwgMTIyLCAxMjIpLFxcbiAgbGF0ZTogcmdiKDE0OCwgMzIsIDMyKVxcbik7XFxuXFxuLy8gSWNvbnNcXG5cXG4kaWNvbnMtZGF0ZTogKFxcbiAgYWxsOiBcXFwiXFxcXGYwNzNcXFwiLFxcbiAgdG9kYXk6IFxcXCJcXFxcZjI3MlxcXCIsXFxuICB1cGNvbWluZzogXFxcIlxcXFxmMjc0XFxcIixcXG4gIGFueXRpbWU6IFxcXCJcXFxcZjEzM1xcXCIsXFxuKTtcXG5cXG4kaWNvbnMtY2FyZXQ6IChcXG4gIHVwOiBcXFwiXFxcXGYwZDhcXFwiLFxcbiAgZG93bjogXFxcIlxcXFxmMGQ3XFxcIixcXG4gIHJpZ2h0OiBcXFwiXFxcXGYwZGFcXFwiXFxuKTtcXG5cXG4kaWNvbi1hZGQ6IFxcXCJcXFxcZjA2N1xcXCI7XFxuXFxuLy8gT3RoZXJzXFxuJG1hcmdpbi1pbmRlbnQ6IDAgLjI1cmVtIDAgMS4yNXJlbTtcIixcImJ1dHRvbiB7XFxuXFx0Ym9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIFxcbiAgJjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxufVxcblxcbi5idG4ge1xcblxcbiAgJi0tc3VibWl0LFxcbiAgJi0tY2FuY2VsIHtcXG4gICAgcGFkZGluZzogLjE1cmVtIC41cmVtO1xcbiAgfVxcbiAgXFxuICAmLS1zdWJtaXQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIC43KTtcXG4gICAgfVxcblxcbiAgfVxcblxcbiAgJi0tY2FuY2VsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoI2ZmZiwgLjUpO1xcbiAgfVxcblxcbn1cIixcIi8vIE5BVi1JQ09OU1xcblxcbi5uYXYge1xcbiAgJl9fdG8tZG8gbGk6YmVmb3JlLFxcbiAgJl9fcHJvamVjdHMgbGk6YmVmb3JlLFxcbiAgJl9fZmlsdGVycyBsaTpiZWZvcmUge1xcbiAgICBtYXJnaW46ICRtYXJnaW4taW5kZW50O1xcbiAgfVxcblxcbiAgJl9fdG8tZG8gbGk6YmVmb3JlIHtcXG4gICAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTQwMCgpO1xcbiAgfVxcblxcbiAgJl9fcHJvamVjdHMgbGk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIuKaq1xcXCI7XFxuICAgIGNvbG9yOiAkY29sb3ItcHJvamVjdHM7XFxuICB9XFxuXFxuICAucHJvamVjdF9saXN0X19hZGQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogJGljb24tYWRkO1xcbiAgICBAaW5jbHVkZSBmb250LWF3ZXNvbWUtNzAwKCk7XFxuICB9XFxuXFxuICAmX19maWx0ZXJzIGxpOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZVxcXCI7XFxuICAgIEBpbmNsdWRlIGZvbnQtYXdlc29tZS00MDAoKTtcXG4gIH1cXG59XFxuXFxuLy8gQ29sb3IgUHJpb3JpdHkgSWNvbnNcXG5AZWFjaCAkbGV2ZWwsICRjb2xvciBpbiAkY29sb3ItcHJpb3JpdHkge1xcbiAgLnByaW9yaXR5LSN7JGxldmVsfSB7XFxuICAgIGNvbG9yOiAkY29sb3I7XFxuICB9XFxufVxcblxcbi8vIERhdGUgSWNvbnNcXG5AZWFjaCAkZGF0ZSwgJHZhbHVlIGluICRpY29ucy1kYXRlIHtcXG4gIC5kYXRlLSN7JGRhdGV9OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAkdmFsdWU7XFxuICB9XFxufVxcblxcbi8vIENvbG9yIERhdGUgSWNvbnNcXG5AZWFjaCAkZGF0ZSwgJHZhbHVlIGluICRjb2xvci1kYXRlIHtcXG4gIC5kYXRlLSN7JGRhdGV9OjpiZWZvcmUge1xcbiAgICBjb2xvcjogJHZhbHVlO1xcbiAgfVxcbn1cXG5cXG4vLyBDYXRlZ29yeSBJY29uc1xcbi5uYXYtLWhlYWRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG1hcC1nZXQoJGljb25zLWNhcmV0LCBkb3duKTtcXG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gIEBpbmNsdWRlIGZvbnQtYXdlc29tZS03MDAoKTtcXG4gIG1hcmdpbi1yaWdodDogLjc1cmVtO1xcbn1cXG5cXG4vLyBNQUlOIElDT05TXFxuXFxuLm1haW5fX2hlYWRlciBsaTpiZWZvcmUge1xcbiAgY29udGVudDogbWFwLWdldCgkaWNvbnMtY2FyZXQsIGRvd24pO1xcbiAgQGluY2x1ZGUgZm9udC1hd2Vzb21lLTcwMCgpO1xcbn1cIixcIkBtaXhpbiBmb250LWF3ZXNvbWUtNDAwKCkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbkBtaXhpbiBmb250LWF3ZXNvbWUtNzAwKCkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVwiLFwiLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNi41cmVtIDFmciA2LjVyZW0gMnJlbTtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgXFxuICAmX19jaGVjayB7XFxuICAgIG1hcmdpbi10b3A6IDdweDtcXG4gIH1cXG5cXG59XCIsXCIuYWRkX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgLjM1KTtcXG5cXG4gICYtLXRvZG8ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcXG4gIH1cXG5cXG4gICYtLXByb2plY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBwYWRkaW5nOiAuMTVyZW07XFxuICB9XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IC4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuW25hbWU9XFxcInRpdGxlXFxcIl0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG59XFxuXFxuLmFkZF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZF9fcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxufVxcblxcbi5hZGQtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMzUpO1xcbiAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogMS42NXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICAmOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNXB4O1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgJjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4zNSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICBsZWZ0OiAxNHB4O1xcbiAgfVxcblxcbiAgbGFiZWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAuNXJlbTtcXG4gIH1cXG59XFxuXFxuLmFkZF9fZmluaXNoIHtcXG4gIG1hcmdpbjogLjVyZW0gMXJlbTtcXG59XFxuXFxuLmFkZF9fY29udGVudC0tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKCNmZmYsIC41KTtcXG59XFxuXCIsXCIucGFnZV9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6ICRjb2xvci1wcmltYXJ5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIFxcblxcbiAgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcblxcbiAgICAmIGxpOmxhc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5tYWluX19oZWFkZXIge1xcblxcbiAgdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYuNXJlbSAxZnIgNS41cmVtIGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAyLjM1cmVtO1xcbiAgICBncmlkLWdhcDogMXJlbTtcXG4gIH1cXG5cXG4gICZfX2RhdGUge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG59XCIsXCIubmF2IHtcXG4gIFxcbiAgYmFja2dyb3VuZDogJGNvbG9yLXNlY29uZGFyeTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4yNSk7XFxuICBwYWRkaW5nOiAycmVtIC4yNXJlbSAwIDJyZW07XFxuXFxuICAmX19jYXRlZ29yeSB7XFxuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIC4xKTtcXG5cXG4gICAgJjpsYXN0LW9mLXR5cGUge1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgbGkge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMDQpO1xcbiAgICAgIH1cXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgLy8gTWFrZXMgdGhlIHdob2xlIGxpbmUgY2xpY2thYmxlIGluc3RlYWQgb2YganVzdCB0aGUgdGV4dC5cXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtLWhlYWRpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAuMDcpO1xcbiAgICB9XFxuICB9XFxuXFxufVwiLFwibWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIHNlY3Rpb24sIGlkKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kYXRlID0gZGF0ZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcbiAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uXG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICByZW5kZXIgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHRvZG9FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvRWxlbS5jbGFzc0xpc3QuYWRkKCd0by1kbycpXG4gICAgdG9kb0VsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWRhdGUnLCB0aGlzLmRhdGUpXG4gICAgdG9kb0VsZW0uc2V0QXR0cmlidXRlKCdkYXRhLXByaW9yaXR5JywgdGhpcy5wcmlvcml0eSlcbiAgICB0b2RvRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHRoaXMucHJvamVjdClcblxuICAgIGNvbnN0IHRvZG9DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0b2RvQ2hlY2suY2xhc3NMaXN0LmFkZCgndG8tZG9fX2NoZWNrJylcbiAgICB0b2RvQ2hlY2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICB0b2RvRWxlbS5hcHBlbmQodG9kb0NoZWNrKVxuXG4gICAgY29uc3QgY29tcG9uZW50cyA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnZGF0ZSddXG4gICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgY29tcG9uZW50cykge1xuICAgICAgY29uc3QgdG9kb0NvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0b2RvQ29tcG9uZW50LmNsYXNzTGlzdC5hZGQoYHRvLWRvX18ke2NvbXBvbmVudH1gKVxuICAgICAgdG9kb0NvbXBvbmVudC5pbm5lckhUTUwgPSB0aGlzW2NvbXBvbmVudF1cbiAgICAgIHRvZG9FbGVtLmFwcGVuZCh0b2RvQ29tcG9uZW50KVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvLWRvX19wcmlvcml0eScsIGBwcmlvcml0eS0ke3RoaXMucHJpb3JpdHl9YClcbiAgICB0b2RvUHJpb3JpdHkuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWJvb2ttYXJrXCI+PC9pPidcbiAgICB0b2RvRWxlbS5hcHBlbmQodG9kb1ByaW9yaXR5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZCh0b2RvRWxlbSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRvZG9MaXN0Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UodGhpcy5tb2RlbC50b2RvcylcbiAgICB0aGlzLnZpZXcuYmluZEFkZFRvZG8odGhpcy5oYW5kbGVBZGRUb2RvLmJpbmQodGhpcykpXG4gICAgdGhpcy5tb2RlbC5iaW5kVG9kb0xpc3RDaGFuZ2UodGhpcy5vblRvZG9MaXN0Q2hhbmdlLmJpbmQodGhpcykpXG4gIH1cblxuICBvblRvZG9MaXN0Q2hhbmdlICh0b2Rvcykge1xuICAgIHRoaXMudmlldy5yZW5kZXJBbGwodG9kb3MpXG4gIH1cblxuICBoYW5kbGVBZGRUb2RvICh0b2RvKSB7XG4gICAgdGhpcy5tb2RlbC5hZGRUb2RvKHRvZG8pXG4gIH1cblxuICBoYW5kbGVFZGl0VG9kbyAodG9kbywgZmllbGQsIHVwZGF0ZSkge1xuICAgIHRoaXMubW9kZWwuZWRpdFRvZG8odG9kbywgZmllbGQsIHVwZGF0ZSlcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZVRvZG8gKHRvZG8pIHtcbiAgICB0aGlzLm1vZGVsLmRlbGV0ZVRvZG8odG9kbylcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRvZG9MaXN0TW9kZWwge1xuICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnRvZG9zID0gW11cbiAgfVxuXG4gIGFkZFRvZG8gKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbylcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UodGhpcy50b2RvcylcbiAgfVxuXG4gIGVkaXRUb2RvICh0b2RvLCBmaWVsZCwgdXBkYXRlKSB7XG4gICAgdGhpcy50b2Rvc1t0b2RvLmlkXVtmaWVsZF0gPSB1cGRhdGVcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2UodGhpcy50b2RvcylcbiAgfVxuXG4gIHJlbW92ZVRvZG8gKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5zcGxpY2UodGhpcy50b2Rvcy5pbmRleE9mKHRvZG8pLCAxKVxuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgYmluZFRvZG9MaXN0Q2hhbmdlIChjYWxsYmFjaykge1xuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSA9IGNhbGxiYWNrXG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8nXG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdFZpZXcge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLy8gU2VjdGlvbiBvZiB0aGUgVG9kbyBMaXN0XG4gICAgdGhpcy50b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0by1kb19saXN0JylcblxuICAgIC8vIEZvcm0gdG8gYWRkIGEgVG9kbyB0byB0aGUgVG9kbyBMaXN0XG4gICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGl0bGVcIl0nKVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJylcbiAgICB0aGlzLmRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRhdGVcIl0nKVxuICAgIHRoaXMuc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC10b2RvJylcbiAgfVxuXG4gIC8vIEdldCBmb3JtIHZhbHVlc1xuICBnZXQgX3RvZG9UaXRsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUudmFsdWVcbiAgfVxuXG4gIGdldCBfdG9kb0Rlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbi52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvRGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZS52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvUHJpb3JpdHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZVxuICB9XG5cbiAgLy8gUmVzZXQgZm9ybSBpbnB1dHNcbiAgX3Jlc2V0SW5wdXRzICgpIHtcbiAgICB0aGlzLnRpdGxlLnZhbHVlID0gJydcbiAgICB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlID0gJydcbiAgICB0aGlzLmRhdGUudmFsdWUgPSAnJ1xuICAgIHRoaXMucHJpb3JpdHkuY2hlY2tlZCA9IGZhbHNlXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHdob2xlIFRvZG8gTGlzdCAodXNlZCBhdCB0aGUgbG9hZGluZywgYW5kIHdoZW4gd2UgZGVsZXRlIGEgVG9kbylcbiAgcmVuZGVyQWxsICh0b2Rvcykge1xuICAgIHRoaXMudG9kb0xpc3QuaW5uZXJIVE1MID0gJydcblxuICAgIGZvciAoY29uc3QgdG9kbyBvZiB0b2Rvcykge1xuICAgICAgdG9kby5yZW5kZXIodGhpcy50b2RvTGlzdClcbiAgICB9XG4gIH1cblxuICAvLyBPbmx5IHJlbmRlcnMgdGhlIGxhc3QgVG9kbyBvZiB0aGUgTGlzdCAodXNlZCB3aGVuIHdlIGFkZCBhIFRvZG8pXG4gIHJlbmRlckxhc3QgKHRvZG9MaXN0KSB7XG4gICAgdG9kb0xpc3RbdG9kb0xpc3QubGVuZ3RoIC0gMV0ucmVuZGVyKClcbiAgfVxuXG4gIC8vIEV2ZW50IExpc3RlbmVycyBvbiB0aGUgRE9NIGVsZW1lbnRzXG5cbiAgYmluZEFkZFRvZG8gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGhhbmRsZXIobmV3IFRvZG8odGhpcy5fdG9kb1RpdGxlLCB0aGlzLl90b2RvRGVzY3JpcHRpb24sIHRoaXMuX3RvZG9EYXRlLCB0aGlzLl90b2RvUHJpb3JpdHksICcnLCAnJywgJycpKVxuICAgICAgdGhpcy5fcmVzZXRJbnB1dHMoKVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCAnLi9zYXNzL21haW4uc2NzcydcbmltcG9ydCB7IFRvZG9MaXN0Q29udHJvbGxlciB9IGZyb20gJy4vVG9kb0xpc3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgVG9kb0xpc3RNb2RlbCB9IGZyb20gJy4vVG9kb0xpc3RNb2RlbCdcbmltcG9ydCB7IFRvZG9MaXN0VmlldyB9IGZyb20gJy4vVG9kb0xpc3RWaWV3J1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vVG9kbydcblxuY29uc3QgZ2VuZXJhbExpc3QgPSBuZXcgVG9kb0xpc3RDb250cm9sbGVyKG5ldyBUb2RvTGlzdE1vZGVsKCksIG5ldyBUb2RvTGlzdFZpZXcoKSlcblxuZ2VuZXJhbExpc3QubW9kZWwuYWRkVG9kbyhcbiAgbmV3IFRvZG8oJ0RlbnRpc3QnLCAnQXBwb2ludG1lbnQgYXQgMlBNJywgJycsICdoaWdoJywgJ25vbmUnLCAnbm9uZScsICcxJylcbilcblxuY29uc29sZS5sb2coZ2VuZXJhbExpc3QubW9kZWwudG9kb3MpXG5nZW5lcmFsTGlzdC52aWV3LnJlbmRlckFsbChnZW5lcmFsTGlzdC5tb2RlbC50b2RvcylcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9