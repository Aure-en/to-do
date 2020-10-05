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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n1 │ @import \"utils/variables\";\n  │         ^^^^^^^^^^^^^^^^^\n  ╵\n  src/sass/main.scss 1:9  root stylesheet");

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



class AppController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.counter = 0;
    this.view.bindAddProject(this.handleAddProject.bind(this));
    this.view.bindToggle(this.handleToggle.bind(this));
  }

  handleAddProject(name) {
    const project = new _ProjectController__WEBPACK_IMPORTED_MODULE_0__["ProjectController"](new _ProjectModel__WEBPACK_IMPORTED_MODULE_1__["ProjectModel"](name), new _ProjectView__WEBPACK_IMPORTED_MODULE_2__["ProjectView"](_ProjectModel__WEBPACK_IMPORTED_MODULE_1__["ProjectModel"].counter));
    project.view.renderName(name);
    project.view.renderBtn(name);
    project.view.renderForm(project.model.form);
    project.view.getForm();
    project.bindAll();
  }

  handleToggle(event) {
    document.querySelector(`#${event.target.dataset.toggle}`).classList.toggle('hidden');
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
    // Form to create new projects
    this.projectInput = document.querySelector('.add--project [name="name"]');
    this.projectSubmit = document.querySelector('.add--project .btn--submit'); // Sort tasks

    this.sortTitle = document.querySelector('#sort-title');
    this.sortDescription = document.querySelector('#sort-description');
    this.sortDate = document.querySelector('#sort-date');
    this.sortPriority = document.querySelector('#sort-priority'); // Filter tasks
    // Toggle Navigation

    this.navBtn = document.querySelector('[data-toggle="nav"]'); // Toggle categories

    this.toggleBtn = document.querySelectorAll('.btn--dropdown');
  } // Get new project's name


  get _projectName() {
    return this.projectInput.value;
  } // Reset Input to create a new project


  _resetInput() {
    this.projectInput.value = '';
  }

  bindAddProject(handler) {
    this.projectSubmit.addEventListener('click', () => {
      handler(this._projectName);

      this._resetInput();
    });
  }

  bindToggle(handler) {
    this.toggleBtn.forEach(toggleBtn => toggleBtn.addEventListener('click', handler));
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
    this.name = name;
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
    this.project = document.createElement('div');
    this.project.setAttribute('id', `project-${id}`);
    this.sections = document.createElement('div');
    this.sections.classList.add('sections');
    this.project.append(this.sections);
    this.container.append(this.project);
    this.id = id;
  } // Render the name of the project


  renderName(name) {
    this.name = document.createElement('h1');
    this.name.classList.add('project__name');
    this.name.innerHTML = name;
    this.project.prepend(this.name);
  } // Render the navigation button linked to the project


  renderBtn(name) {
    this.li = document.createElement('li');
    this.button = document.createElement('button');
    this.button.classList.add('btn', 'btn--filter');
    this.button.setAttribute('type', 'button');
    this.button.setAttribute('data-filter', `project-${this.id}`);
    this.button.innerHTML = name;
    this.li.append(this.button);
    document.querySelector('#projects_list').append(this.li);
  } // Render the add section form


  renderForm(form) {
    form.render(this.project);
  } // Get the add section form inputs


  getForm() {
    this.name = document.querySelector(`#section-form-${this.id} [name="section"]`);
    this.submit = document.querySelector(`#section-form-${this.id} .btn--submit`);
  } // Get Section's Name from the form


  get _sectionName() {
    return this.name.value;
  } // Reset form input


  _resetInput() {
    this.name.value = '';
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

  render(container) {
    const form = document.createElement('form');
    form.classList.add('add', 'add--section');
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
    container.append(form);
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
class Todo {
  constructor(title, description, date = 'N/A', priority = 'none') {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }

  render(container) {
    const todoElem = document.createElement('div');
    todoElem.classList.add('to-do');
    todoElem.setAttribute('data-date', this.date);
    todoElem.setAttribute('data-priority', this.priority);
    todoElem.id = this.id;
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
  constructor() {
    this.id = ++TodoForm.counter;
  }

  render(container) {
    const formContainer = document.createElement('div');
    formContainer.classList.add('add__todo');
    const formBtn = document.createElement('button');
    formBtn.classList.add('btn', 'btn--dropdown', 'btn--add');
    formBtn.setAttribute('type', 'button');
    formBtn.setAttribute('data-toggle', `add-todo-${this.id}`);
    formBtn.innerHTML = 'Add Task';
    const form = document.createElement('form');
    form.classList.add('add', 'add--todo', 'todo-form', 'dropdown');
    form.setAttribute('id', `add-todo-${this.id}`);
    const content = document.createElement('div');
    content.classList.add('add__content', 'add__content--todo');
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
    details.classList.add('add__details');
    const labelDate = document.createElement('label');
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('name', 'date');
    labelDate.append(date);
    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('add__priority');
    const priorityBtn = document.createElement('button');
    priorityBtn.setAttribute('type', 'button');
    priorityBtn.setAttribute('data-toggle', `add-priority-${this.id}`);
    priorityBtn.classList.add('btn', 'btn--toggle');
    priorityBtn.innerHTML = '<i class="far fa-bookmark"></i>';
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
      priorities.append(labelPriority, inputPriority);
    }

    priorityContainer.append(priorityBtn, priorities);
    const finish = document.createElement('div');
    finish.classList.add('add__finish');
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'button');
    submitBtn.classList.add('btn', 'btn--submit');
    submitBtn.innerHTML = 'Add Task';
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.classList.add('btn', 'btn--cancel');
    cancelBtn.innerHTML = 'Cancel';
    finish.append(submitBtn, cancelBtn);
    content.append(labelTitle, labelDescription, details);
    details.append(labelDate, priorityContainer);
    form.append(content, finish);
    formContainer.append(formBtn, form);
    container.append(formContainer);
    this.bindToggle(this.handleToggle);
    this.bindPriorityLabel(this.handlePriorityLabel.bind(this));
    this.bindResetPriority(this.handleResetPriority.bind(this));
  } // Enable form toggle


  bindToggle(handler) {
    this.toggleBtn = [document.querySelector(`[data-toggle="add-priority-${this.id}"]`), document.querySelector(`[data-toggle="add-todo-${this.id}"]`)];
    this.toggleBtn.forEach(toggleBtn => toggleBtn.addEventListener('click', handler));
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

  handleEditTodo(todo, field, update) {
    this.model.editTodo(todo, field, update);
  }

  handleDeleteTodo(todo) {
    this.model.deleteTodo(todo);
  }

  bindAll() {
    this.view.bindAddTodo(this.handleAddTodo.bind(this));
    this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));
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
    this.name = name;
    this.todos = [];
    this.form = new _TodoForm__WEBPACK_IMPORTED_MODULE_0__["TodoForm"]();
  }

  addTodo(todo) {
    todo.id = this.todos.length;
    this.todos.push(todo);
    this.onTodoListChange(this.todos);
  }

  editTodo(id, field, update) {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo[field] = update;
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
  constructor(projectId) {
    this.project = document.querySelector(`#project-${projectId} .sections`);
    this.todoList = document.createElement('div');
    this.todoList.classList.add('todolist');
    this.id = ++TodoListView.counter;
    this.projectId = projectId;
  } // Create a section


  createSection() {
    this.section = document.createElement('div');
    this.section.classList.add(`section-${this.projectId}-${this.id}`);
    this.section.prepend(this.todoList);
    this.project.append(this.section);
  } // Render the section's name


  renderName(name) {
    this.name = document.createElement('h2');
    this.name.classList.add('section__name');
    this.name.innerHTML = name;
    this.section.prepend(this.name);
  } // Render the Add Todo Form


  renderForm(form) {
    form.render(this.section);
  } // Get the Add Todo Form Inputs


  getForm() {
    this.title = document.querySelector(`.section-${this.projectId}-${this.id} .todo-form [name="title"]`);
    this.description = document.querySelector(`.section-${this.projectId}-${this.id} .todo-form [name="description"]`);
    this.date = document.querySelector(`.section-${this.projectId}-${this.id} .todo-form [name="date"]`);
    this.submit = document.querySelector(`.section-${this.projectId}-${this.id} .todo-form .btn--submit`);
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
    if (document.querySelector('[name="priority"]:checked')) {
      return document.querySelector('[name="priority"]:checked').value;
    }
  } // Reset form inputs


  _resetInputs() {
    this.title.value = '';
    this.description.value = '';
    this.date.value = '';

    if (document.querySelector('[name="priority"]:checked')) {
      document.querySelector('[name="priority"]:checked').checked = false;
    }
  } // Render the Todo List


  render(todos) {
    this.todoList.innerHTML = '';

    for (const todo of todos) {
      todo.render(this.todoList);
    }
  } // Event Listeners


  bindAddTodo(handler) {
    this.submit.addEventListener('click', () => {
      handler(new _Todo__WEBPACK_IMPORTED_MODULE_0__["Todo"](this._todoTitle, this._todoDescription, this._todoDate, this._todoPriority, '', '', ''));

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
/* harmony import */ var _TodoListController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoListController */ "./src/TodoListController.js");
/* harmony import */ var _TodoListModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoListModel */ "./src/TodoListModel.js");
/* harmony import */ var _TodoListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoListView */ "./src/TodoListView.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Todo */ "./src/Todo.js");
/* harmony import */ var _ProjectController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectController */ "./src/ProjectController.js");
/* harmony import */ var _ProjectModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectModel */ "./src/ProjectModel.js");
/* harmony import */ var _ProjectView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectView */ "./src/ProjectView.js");
/* harmony import */ var _AppController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AppController */ "./src/AppController.js");
/* harmony import */ var _AppModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AppModel */ "./src/AppModel.js");
/* harmony import */ var _AppView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AppView */ "./src/AppView.js");











const bigProject = new _ProjectController__WEBPACK_IMPORTED_MODULE_5__["ProjectController"](new _ProjectModel__WEBPACK_IMPORTED_MODULE_6__["ProjectModel"]('big big'), new _ProjectView__WEBPACK_IMPORTED_MODULE_7__["ProjectView"](_ProjectModel__WEBPACK_IMPORTED_MODULE_6__["ProjectModel"].counter));
bigProject.view.renderForm(bigProject.model.form);
bigProject.view.getForm();
bigProject.bindAll();
const app = new _AppController__WEBPACK_IMPORTED_MODULE_8__["AppController"](new _AppModel__WEBPACK_IMPORTED_MODULE_9__["AppModel"](), new _AppView__WEBPACK_IMPORTED_MODULE_10__["AppView"]());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9kb0xpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2RvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJBcHBDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJtb2RlbCIsInZpZXciLCJjb3VudGVyIiwiYmluZEFkZFByb2plY3QiLCJoYW5kbGVBZGRQcm9qZWN0IiwiYmluZCIsImJpbmRUb2dnbGUiLCJoYW5kbGVUb2dnbGUiLCJuYW1lIiwicHJvamVjdCIsIlByb2plY3RDb250cm9sbGVyIiwiUHJvamVjdE1vZGVsIiwiUHJvamVjdFZpZXciLCJyZW5kZXJOYW1lIiwicmVuZGVyQnRuIiwicmVuZGVyRm9ybSIsImZvcm0iLCJnZXRGb3JtIiwiYmluZEFsbCIsImV2ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0IiwiZGF0YXNldCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsIkFwcE1vZGVsIiwicHJvamVjdHMiLCJhZGRQcm9qZWN0IiwicHVzaCIsImlkIiwibGVuZ3RoIiwiQXBwVmlldyIsInByb2plY3RJbnB1dCIsInByb2plY3RTdWJtaXQiLCJzb3J0VGl0bGUiLCJzb3J0RGVzY3JpcHRpb24iLCJzb3J0RGF0ZSIsInNvcnRQcmlvcml0eSIsIm5hdkJ0biIsInRvZ2dsZUJ0biIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfcHJvamVjdE5hbWUiLCJ2YWx1ZSIsIl9yZXNldElucHV0IiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwib25Qcm9qZWN0Q2hhbmdlIiwidG9kb0xpc3RzIiwiYmluZFByb2plY3RDaGFuZ2UiLCJyZW5kZXIiLCJoYW5kbGVBZGRUb2RvTGlzdCIsInRvZG9MaXN0IiwiYWRkVG9kb0xpc3QiLCJoYW5kbGVEZWxldGVUb2RvTGlzdCIsImRlbGV0ZVRvZG9MaXN0IiwiYmluZEFkZFNlY3Rpb24iLCJTZWN0aW9uRm9ybSIsImVkaXRUb2RvTGlzdCIsInVwZGF0ZSIsIm1hcCIsImZpbHRlciIsImNhbGxiYWNrIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInNlY3Rpb25zIiwiYWRkIiwiYXBwZW5kIiwiaW5uZXJIVE1MIiwicHJlcGVuZCIsImxpIiwiYnV0dG9uIiwic3VibWl0IiwiX3NlY3Rpb25OYW1lIiwiY3JlYXRlU2VjdGlvbiIsInRvZG9zIiwiVG9kb0xpc3RDb250cm9sbGVyIiwiVG9kb0xpc3RNb2RlbCIsIlRvZG9MaXN0VmlldyIsImNvbnRlbnQiLCJsYWJlbE5hbWUiLCJmaW5pc2giLCJzdWJtaXRCdG4iLCJjYW5jZWxCdG4iLCJUb2RvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJwcmlvcml0eSIsInRvZG9FbGVtIiwidG9kb0NoZWNrIiwiY29tcG9uZW50cyIsImNvbXBvbmVudCIsInRvZG9Db21wb25lbnQiLCJ0b2RvUHJpb3JpdHkiLCJUb2RvRm9ybSIsImZvcm1Db250YWluZXIiLCJmb3JtQnRuIiwibGFiZWxUaXRsZSIsImxhYmVsRGVzY3JpcHRpb24iLCJkZXRhaWxzIiwibGFiZWxEYXRlIiwicHJpb3JpdHlDb250YWluZXIiLCJwcmlvcml0eUJ0biIsInByaW9yaXRpZXMiLCJwcmlvcml0aWVzTGlzdCIsImxhYmVsUHJpb3JpdHkiLCJpbnB1dFByaW9yaXR5IiwiYmluZFByaW9yaXR5TGFiZWwiLCJoYW5kbGVQcmlvcml0eUxhYmVsIiwiYmluZFJlc2V0UHJpb3JpdHkiLCJoYW5kbGVSZXNldFByaW9yaXR5IiwiY2xvc2VzdCIsImxhYmVscyIsImxhYmVsIiwic3R5bGUiLCJjb2xvciIsImdldENvbXB1dGVkU3R5bGUiLCJvblRvZG9MaXN0Q2hhbmdlIiwiYmluZFRvZG9MaXN0Q2hhbmdlIiwiaGFuZGxlQWRkVG9kbyIsInRvZG8iLCJhZGRUb2RvIiwiaGFuZGxlRWRpdFRvZG8iLCJmaWVsZCIsImVkaXRUb2RvIiwiaGFuZGxlRGVsZXRlVG9kbyIsImRlbGV0ZVRvZG8iLCJiaW5kQWRkVG9kbyIsImJpbmREZWxldGVUb2RvIiwicHJvamVjdElkIiwic2VjdGlvbiIsIl90b2RvVGl0bGUiLCJfdG9kb0Rlc2NyaXB0aW9uIiwiX3RvZG9EYXRlIiwiX3RvZG9Qcmlvcml0eSIsIl9yZXNldElucHV0cyIsImNoZWNrZWQiLCJjb250YWlucyIsInBhcnNlSW50IiwicGFyZW50RWxlbWVudCIsImJpZ1Byb2plY3QiLCJhcHAiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtR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aUIsU0FBakIsQ0FBdEIsRUFBbUQsSUFBSUMsd0RBQUosQ0FBZ0JELDBEQUFZLENBQUNULE9BQTdCLENBQW5ELENBQW5CO0FBQ0E2SSxVQUFVLENBQUM5SSxJQUFYLENBQWdCYyxVQUFoQixDQUEyQmdJLFVBQVUsQ0FBQy9JLEtBQVgsQ0FBaUJnQixJQUE1QztBQUNBK0gsVUFBVSxDQUFDOUksSUFBWCxDQUFnQmdCLE9BQWhCO0FBQ0E4SCxVQUFVLENBQUM3SCxPQUFYO0FBRUEsTUFBTThILEdBQUcsR0FBRyxJQUFJbEosNERBQUosQ0FBa0IsSUFBSTRCLGtEQUFKLEVBQWxCLEVBQWtDLElBQUlNLGlEQUFKLEVBQWxDLENBQVosQzs7Ozs7Ozs7Ozs7QUNuQkEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw0TUFBb0c7O0FBRXRJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFByb2plY3RDb250cm9sbGVyIH0gZnJvbSAnLi9Qcm9qZWN0Q29udHJvbGxlcidcbmltcG9ydCB7IFByb2plY3RNb2RlbCB9IGZyb20gJy4vUHJvamVjdE1vZGVsJ1xuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tICcuL1Byb2plY3RWaWV3J1xuXG5leHBvcnQgY2xhc3MgQXBwQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICB0aGlzLmNvdW50ZXIgPSAwXG4gICAgdGhpcy52aWV3LmJpbmRBZGRQcm9qZWN0KHRoaXMuaGFuZGxlQWRkUHJvamVjdC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudmlldy5iaW5kVG9nZ2xlKHRoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcykpXG4gIH1cblxuICBoYW5kbGVBZGRQcm9qZWN0IChuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q29udHJvbGxlcihuZXcgUHJvamVjdE1vZGVsKG5hbWUpLCBuZXcgUHJvamVjdFZpZXcoUHJvamVjdE1vZGVsLmNvdW50ZXIpKVxuICAgIHByb2plY3Qudmlldy5yZW5kZXJOYW1lKG5hbWUpXG4gICAgcHJvamVjdC52aWV3LnJlbmRlckJ0bihuYW1lKVxuICAgIHByb2plY3Qudmlldy5yZW5kZXJGb3JtKHByb2plY3QubW9kZWwuZm9ybSlcbiAgICBwcm9qZWN0LnZpZXcuZ2V0Rm9ybSgpXG4gICAgcHJvamVjdC5iaW5kQWxsKClcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuZGF0YXNldC50b2dnbGV9YCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFwcE1vZGVsIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXVxuICB9XG5cbiAgYWRkUHJvamVjdCAocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KVxuICAgIHByb2plY3QuaWQgPSB0aGlzLnByb2plY3RzLmxlbmd0aFxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQXBwVmlldyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyBGb3JtIHRvIGNyZWF0ZSBuZXcgcHJvamVjdHNcbiAgICB0aGlzLnByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtLXByb2plY3QgW25hbWU9XCJuYW1lXCJdJylcbiAgICB0aGlzLnByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLS1wcm9qZWN0IC5idG4tLXN1Ym1pdCcpXG5cbiAgICAvLyBTb3J0IHRhc2tzXG4gICAgdGhpcy5zb3J0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC10aXRsZScpXG4gICAgdGhpcy5zb3J0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1kZXNjcmlwdGlvbicpXG4gICAgdGhpcy5zb3J0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LWRhdGUnKVxuICAgIHRoaXMuc29ydFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtcHJpb3JpdHknKVxuXG4gICAgLy8gRmlsdGVyIHRhc2tzXG5cbiAgICAvLyBUb2dnbGUgTmF2aWdhdGlvblxuICAgIHRoaXMubmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlPVwibmF2XCJdJylcblxuICAgIC8vIFRvZ2dsZSBjYXRlZ29yaWVzXG4gICAgdGhpcy50b2dnbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLS1kcm9wZG93bicpXG4gIH1cblxuICAvLyBHZXQgbmV3IHByb2plY3QncyBuYW1lXG4gIGdldCBfcHJvamVjdE5hbWUgKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RJbnB1dC52YWx1ZVxuICB9XG5cbiAgLy8gUmVzZXQgSW5wdXQgdG8gY3JlYXRlIGEgbmV3IHByb2plY3RcbiAgX3Jlc2V0SW5wdXQgKCkge1xuICAgIHRoaXMucHJvamVjdElucHV0LnZhbHVlID0gJydcbiAgfVxuXG4gIGJpbmRBZGRQcm9qZWN0IChoYW5kbGVyKSB7XG4gICAgdGhpcy5wcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaGFuZGxlcih0aGlzLl9wcm9qZWN0TmFtZSlcbiAgICAgIHRoaXMuX3Jlc2V0SW5wdXQoKVxuICAgIH0pXG4gIH1cblxuICBiaW5kVG9nZ2xlIChoYW5kbGVyKSB7XG4gICAgdGhpcy50b2dnbGVCdG4uZm9yRWFjaCh0b2dnbGVCdG4gPT4gdG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcikpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQcm9qZWN0Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLm1vZGVsLnRvZG9MaXN0cylcbiAgICB0aGlzLm1vZGVsLmJpbmRQcm9qZWN0Q2hhbmdlKHRoaXMub25Qcm9qZWN0Q2hhbmdlLmJpbmQodGhpcykpXG4gIH1cblxuICBvblByb2plY3RDaGFuZ2UgKHRvZG9MaXN0cykge1xuICAgIHRoaXMudmlldy5yZW5kZXIodG9kb0xpc3RzKVxuICB9XG5cbiAgaGFuZGxlQWRkVG9kb0xpc3QgKHRvZG9MaXN0KSB7XG4gICAgdGhpcy5tb2RlbC5hZGRUb2RvTGlzdCh0b2RvTGlzdClcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZVRvZG9MaXN0ICh0b2RvTGlzdCkge1xuICAgIHRoaXMubW9kZWwuZGVsZXRlVG9kb0xpc3QodG9kb0xpc3QpXG4gIH1cblxuICBiaW5kQWxsICgpIHtcbiAgICB0aGlzLnZpZXcuYmluZEFkZFNlY3Rpb24odGhpcy5oYW5kbGVBZGRUb2RvTGlzdC5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBTZWN0aW9uRm9ybSB9IGZyb20gJy4vU2VjdGlvbkZvcm0nXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0TW9kZWwge1xuICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmlkID0gKytQcm9qZWN0TW9kZWwuY291bnRlclxuICAgIHRoaXMudG9kb0xpc3RzID0gW11cbiAgICB0aGlzLmZvcm0gPSBuZXcgU2VjdGlvbkZvcm0odGhpcy5pZClcbiAgfVxuXG4gIGFkZFRvZG9MaXN0ICh0b2RvTGlzdCkge1xuICAgIHRoaXMudG9kb0xpc3RzLnB1c2godG9kb0xpc3QpXG4gICAgdG9kb0xpc3QuaWQgPSB0aGlzLnRvZG9MaXN0cy5sZW5ndGhcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGVkaXRUb2RvTGlzdCAoaWQsIHVwZGF0ZSkge1xuICAgIHRoaXMudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHMubWFwKCh0b2RvTGlzdCkgPT4ge1xuICAgICAgaWYgKHRvZG9MaXN0LmlkID09PSBpZCkge1xuICAgICAgICB0b2RvTGlzdC5uYW1lID0gdXBkYXRlXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGRlbGV0ZVRvZG9MaXN0IChpZCkge1xuICAgIHRoaXMudG9kb0xpc3RzID0gdGhpcy50b2RvTGlzdHMuZmlsdGVyKHRvZG9MaXN0ID0+IHRvZG9MaXN0LmlkICE9PSBpZClcbiAgICB0aGlzLm9uUHJvamVjdENoYW5nZSh0aGlzLnRvZG9MaXN0cylcbiAgfVxuXG4gIGJpbmRQcm9qZWN0Q2hhbmdlIChjYWxsYmFjaykge1xuICAgIHRoaXMub25Qcm9qZWN0Q2hhbmdlID0gY2FsbGJhY2tcbiAgfVxufVxuXG5Qcm9qZWN0TW9kZWwuY291bnRlciA9IDBcbiIsImltcG9ydCB7IFRvZG9MaXN0Q29udHJvbGxlciB9IGZyb20gJy4vVG9kb0xpc3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgVG9kb0xpc3RNb2RlbCB9IGZyb20gJy4vVG9kb0xpc3RNb2RlbCdcbmltcG9ydCB7IFRvZG9MaXN0VmlldyB9IGZyb20gJy4vVG9kb0xpc3RWaWV3J1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdFZpZXcge1xuICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICB0aGlzLnByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMucHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3QtJHtpZH1gKVxuICAgIHRoaXMuc2VjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2VjdGlvbnMuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbnMnKVxuICAgIHRoaXMucHJvamVjdC5hcHBlbmQodGhpcy5zZWN0aW9ucylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5wcm9qZWN0KVxuICAgIHRoaXMuaWQgPSBpZFxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0XG4gIHJlbmRlck5hbWUgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgdGhpcy5uYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfX25hbWUnKVxuICAgIHRoaXMubmFtZS5pbm5lckhUTUwgPSBuYW1lXG4gICAgdGhpcy5wcm9qZWN0LnByZXBlbmQodGhpcy5uYW1lKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbiBsaW5rZWQgdG8gdGhlIHByb2plY3RcbiAgcmVuZGVyQnRuIChuYW1lKSB7XG4gICAgdGhpcy5saSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tZmlsdGVyJylcbiAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJywgYHByb2plY3QtJHt0aGlzLmlkfWApXG4gICAgdGhpcy5idXR0b24uaW5uZXJIVE1MID0gbmFtZVxuICAgIHRoaXMubGkuYXBwZW5kKHRoaXMuYnV0dG9uKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0c19saXN0JykuYXBwZW5kKHRoaXMubGkpXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIGFkZCBzZWN0aW9uIGZvcm1cbiAgcmVuZGVyRm9ybSAoZm9ybSkge1xuICAgIGZvcm0ucmVuZGVyKHRoaXMucHJvamVjdClcbiAgfVxuXG4gIC8vIEdldCB0aGUgYWRkIHNlY3Rpb24gZm9ybSBpbnB1dHNcbiAgZ2V0Rm9ybSAoKSB7XG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlY3Rpb24tZm9ybS0ke3RoaXMuaWR9IFtuYW1lPVwic2VjdGlvblwiXWApXG4gICAgdGhpcy5zdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH0gLmJ0bi0tc3VibWl0YClcbiAgfVxuXG4gIC8vIEdldCBTZWN0aW9uJ3MgTmFtZSBmcm9tIHRoZSBmb3JtXG4gIGdldCBfc2VjdGlvbk5hbWUgKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWUudmFsdWVcbiAgfVxuXG4gIC8vIFJlc2V0IGZvcm0gaW5wdXRcbiAgX3Jlc2V0SW5wdXQgKCkge1xuICAgIHRoaXMubmFtZS52YWx1ZSA9ICcnXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHByb2plY3QgYnkgcmVuZGVyaW5nIGV2ZXJ5IHNlY3Rpb25cbiAgcmVuZGVyICh0b2RvTGlzdHMpIHtcbiAgICB0aGlzLnNlY3Rpb25zLmlubmVySFRNTCA9ICcnXG5cbiAgICBmb3IgKGNvbnN0IHRvZG9MaXN0IG9mIHRvZG9MaXN0cykge1xuICAgICAgdG9kb0xpc3Qudmlldy5jcmVhdGVTZWN0aW9uKClcbiAgICAgIHRvZG9MaXN0LnZpZXcucmVuZGVyTmFtZSh0b2RvTGlzdC5tb2RlbC5uYW1lKVxuICAgICAgdG9kb0xpc3Qudmlldy5yZW5kZXIodG9kb0xpc3QubW9kZWwudG9kb3MpXG4gICAgICB0b2RvTGlzdC52aWV3LnJlbmRlckZvcm0odG9kb0xpc3QubW9kZWwuZm9ybSlcbiAgICAgIHRvZG9MaXN0LnZpZXcuZ2V0Rm9ybSh0b2RvTGlzdC5tb2RlbC5mb3JtKVxuICAgICAgdG9kb0xpc3QuYmluZEFsbCgpXG4gICAgfVxuICB9XG5cbiAgLy8gRXZlbnQgTGlzdGVuZXJzXG5cbiAgYmluZEFkZFNlY3Rpb24gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGhhbmRsZXIobmV3IFRvZG9MaXN0Q29udHJvbGxlcihuZXcgVG9kb0xpc3RNb2RlbCh0aGlzLl9zZWN0aW9uTmFtZSwgdGhpcy5pZCksIG5ldyBUb2RvTGlzdFZpZXcodGhpcy5pZCkpKVxuICAgICAgdGhpcy5fcmVzZXRJbnB1dCgpXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlY3Rpb25Gb3JtIHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICByZW5kZXIgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZCcsICdhZGQtLXNlY3Rpb24nKVxuICAgIGZvcm0uaWQgPSBgc2VjdGlvbi1mb3JtLSR7dGhpcy5pZH1gXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FkZF9fY29udGVudCcsICdhZGRfX2NvbnRlbnQtLXNlY3Rpb24nKVxuXG4gICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc2VjdGlvbicpXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlY3Rpb25cXCdzIE5hbWUnKVxuICAgIGxhYmVsTmFtZS5hcHBlbmQobmFtZSlcbiAgICBjb250ZW50LmFwcGVuZChsYWJlbE5hbWUpXG5cbiAgICBjb25zdCBmaW5pc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZpbmlzaC5jbGFzc0xpc3QuYWRkKCdhZGRfX2ZpbmlzaCcpXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tc3VibWl0JylcbiAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FkZCBTZWN0aW9uJ1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWNhbmNlbCcpXG4gICAgY2FuY2VsQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnXG5cbiAgICBmaW5pc2guYXBwZW5kKHN1Ym1pdEJ0biwgY2FuY2VsQnRuKVxuICAgIGZvcm0uYXBwZW5kKGNvbnRlbnQsIGZpbmlzaClcbiAgICBjb250YWluZXIuYXBwZW5kKGZvcm0pXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSA9ICdOL0EnLCBwcmlvcml0eSA9ICdub25lJykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgfVxuXG4gIHJlbmRlciAoY29udGFpbmVyKSB7XG4gICAgY29uc3QgdG9kb0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9FbGVtLmNsYXNzTGlzdC5hZGQoJ3RvLWRvJylcbiAgICB0b2RvRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGF0ZScsIHRoaXMuZGF0ZSlcbiAgICB0b2RvRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpb3JpdHknLCB0aGlzLnByaW9yaXR5KVxuICAgIHRvZG9FbGVtLmlkID0gdGhpcy5pZFxuXG4gICAgY29uc3QgdG9kb0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRvZG9DaGVjay5jbGFzc0xpc3QuYWRkKCd0by1kb19fY2hlY2snKVxuICAgIHRvZG9DaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHRvZG9FbGVtLmFwcGVuZCh0b2RvQ2hlY2spXG5cbiAgICBjb25zdCBjb21wb25lbnRzID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdkYXRlJ11cbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzKSB7XG4gICAgICBjb25zdCB0b2RvQ29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRvZG9Db21wb25lbnQuY2xhc3NMaXN0LmFkZChgdG8tZG9fXyR7Y29tcG9uZW50fWApXG4gICAgICB0b2RvQ29tcG9uZW50LmlubmVySFRNTCA9IHRoaXNbY29tcG9uZW50XVxuICAgICAgdG9kb0VsZW0uYXBwZW5kKHRvZG9Db21wb25lbnQpXG4gICAgfVxuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG8tZG9fX3ByaW9yaXR5JywgYHByaW9yaXR5LSR7dGhpcy5wcmlvcml0eX1gKVxuICAgIHRvZG9Qcmlvcml0eS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuICAgIHRvZG9FbGVtLmFwcGVuZCh0b2RvUHJpb3JpdHkpXG5cbiAgICBjb250YWluZXIuYXBwZW5kKHRvZG9FbGVtKVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVG9kb0Zvcm0ge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5pZCA9ICsrVG9kb0Zvcm0uY291bnRlclxuICB9XG5cbiAgcmVuZGVyIChjb250YWluZXIpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZF9fdG9kbycpXG5cbiAgICBjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBmb3JtQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWRyb3Bkb3duJywgJ2J0bi0tYWRkJylcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGZvcm1CdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBhZGQtdG9kby0ke3RoaXMuaWR9YClcbiAgICBmb3JtQnRuLmlubmVySFRNTCA9ICdBZGQgVGFzaydcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZCcsICdhZGQtLXRvZG8nLCAndG9kby1mb3JtJywgJ2Ryb3Bkb3duJylcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCBgYWRkLXRvZG8tJHt0aGlzLmlkfWApXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FkZF9fY29udGVudCcsICdhZGRfX2NvbnRlbnQtLXRvZG8nKVxuXG4gICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJylcbiAgICBsYWJlbFRpdGxlLmFwcGVuZCh0aXRsZSlcblxuICAgIGNvbnN0IGxhYmVsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJylcbiAgICBsYWJlbERlc2NyaXB0aW9uLmFwcGVuZChkZXNjcmlwdGlvbilcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnYWRkX19kZXRhaWxzJylcblxuICAgIGNvbnN0IGxhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKVxuICAgIGxhYmVsRGF0ZS5hcHBlbmQoZGF0ZSlcblxuICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGRfX3ByaW9yaXR5JylcbiAgICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsIGBhZGQtcHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tdG9nZ2xlJylcbiAgICBwcmlvcml0eUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtYm9va21hcmtcIj48L2k+J1xuXG4gICAgY29uc3QgcHJpb3JpdGllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdGllcy5jbGFzc0xpc3QuYWRkKCdhZGQtcHJpb3JpdHknLCAnZHJvcGRvd24nLCAnaGlkZGVuJylcbiAgICBwcmlvcml0aWVzLnNldEF0dHJpYnV0ZSgnaWQnLCBgYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1gKVxuICAgIGNvbnN0IHByaW9yaXRpZXNMaXN0ID0gWydoaWdoJywgJ21lZCcsICdsb3cnLCAnbm9uZSddXG5cbiAgICBmb3IgKGNvbnN0IHByaW9yaXR5IG9mIHByaW9yaXRpZXNMaXN0KSB7XG4gICAgICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWxQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBwcmlvcml0eS0ke3ByaW9yaXR5fS0ke3RoaXMuaWR9YClcbiAgICAgIGxhYmVsUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHtwcmlvcml0eX1gLCBgcHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgICBsYWJlbFByaW9yaXR5LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1ib29rbWFya1wiPjwvaT4nXG5cbiAgICAgIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG4gICAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcmlvcml0eSlcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsIGBwcmlvcml0eS0ke3ByaW9yaXR5fS0ke3RoaXMuaWR9YClcblxuICAgICAgcHJpb3JpdGllcy5hcHBlbmQobGFiZWxQcmlvcml0eSwgaW5wdXRQcmlvcml0eSlcbiAgICB9XG5cbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlCdG4sIHByaW9yaXRpZXMpXG5cbiAgICBjb25zdCBmaW5pc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZpbmlzaC5jbGFzc0xpc3QuYWRkKCdhZGRfX2ZpbmlzaCcpXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi0tc3VibWl0JylcbiAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FkZCBUYXNrJ1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tLWNhbmNlbCcpXG4gICAgY2FuY2VsQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnXG5cbiAgICBmaW5pc2guYXBwZW5kKHN1Ym1pdEJ0biwgY2FuY2VsQnRuKVxuXG4gICAgY29udGVudC5hcHBlbmQobGFiZWxUaXRsZSwgbGFiZWxEZXNjcmlwdGlvbiwgZGV0YWlscylcbiAgICBkZXRhaWxzLmFwcGVuZChsYWJlbERhdGUsIHByaW9yaXR5Q29udGFpbmVyKVxuICAgIGZvcm0uYXBwZW5kKGNvbnRlbnQsIGZpbmlzaClcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZChmb3JtQnRuLCBmb3JtKVxuICAgIGNvbnRhaW5lci5hcHBlbmQoZm9ybUNvbnRhaW5lcilcblxuICAgIHRoaXMuYmluZFRvZ2dsZSh0aGlzLmhhbmRsZVRvZ2dsZSlcbiAgICB0aGlzLmJpbmRQcmlvcml0eUxhYmVsKHRoaXMuaGFuZGxlUHJpb3JpdHlMYWJlbC5iaW5kKHRoaXMpKVxuICAgIHRoaXMuYmluZFJlc2V0UHJpb3JpdHkodGhpcy5oYW5kbGVSZXNldFByaW9yaXR5LmJpbmQodGhpcykpXG4gIH1cblxuICAvLyBFbmFibGUgZm9ybSB0b2dnbGVcbiAgYmluZFRvZ2dsZSAoaGFuZGxlcikge1xuICAgIHRoaXMudG9nZ2xlQnRuID0gW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cImFkZC1wcmlvcml0eS0ke3RoaXMuaWR9XCJdYCksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cImFkZC10b2RvLSR7dGhpcy5pZH1cIl1gKV1cbiAgICB0aGlzLnRvZ2dsZUJ0bi5mb3JFYWNoKHRvZ2dsZUJ0biA9PiB0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKSlcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykuZGF0YXNldC50b2dnbGV9YCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgfVxuXG4gIC8vIEVuYWJsZSBwcmlvcml0eSB0b2dnbGUgYW5kIGNvbG9yIGNoYW5nZSB3aGVuIHNlbGVjdGluZyBhIHByaW9yaXR5XG4gIGJpbmRQcmlvcml0eUxhYmVsIChoYW5kbGVyKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucHJpb3JpdHktJHt0aGlzLmlkfWApXG4gICAgdGhpcy5sYWJlbHMuZm9yRWFjaChsYWJlbCA9PiBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpKVxuICB9XG5cbiAgaGFuZGxlUHJpb3JpdHlMYWJlbCAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1gKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZT1cImFkZC1wcmlvcml0eS0ke3RoaXMuaWR9XCJdYCkuc3R5bGUuY29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdsYWJlbCcpKS5jb2xvclxuICB9XG5cbiAgLy8gUmVzZXQgcHJpb3JpdHkgY29sb3Igd2hlbiBhZGRpbmcgYSB0YXNrXG4gIGJpbmRSZXNldFByaW9yaXR5IChoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZC10b2RvLSR7dGhpcy5pZH0gLmJ0bi0tc3VibWl0YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICB9XG5cbiAgaGFuZGxlUmVzZXRQcmlvcml0eSAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlPVwiYWRkLXByaW9yaXR5LSR7dGhpcy5pZH1cIl1gKS5zdHlsZS5jb2xvciA9ICcnXG4gIH1cbn1cblxuVG9kb0Zvcm0uY291bnRlciA9IDBcbiIsImV4cG9ydCBjbGFzcyBUb2RvTGlzdENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlKHRoaXMubW9kZWwudG9kb3MpXG4gICAgdGhpcy5tb2RlbC5iaW5kVG9kb0xpc3RDaGFuZ2UodGhpcy5vblRvZG9MaXN0Q2hhbmdlLmJpbmQodGhpcykpXG4gIH1cblxuICBvblRvZG9MaXN0Q2hhbmdlICh0b2Rvcykge1xuICAgIHRoaXMudmlldy5yZW5kZXIodG9kb3MpXG4gIH1cblxuICBoYW5kbGVBZGRUb2RvICh0b2RvKSB7XG4gICAgdGhpcy5tb2RlbC5hZGRUb2RvKHRvZG8pXG4gIH1cblxuICBoYW5kbGVFZGl0VG9kbyAodG9kbywgZmllbGQsIHVwZGF0ZSkge1xuICAgIHRoaXMubW9kZWwuZWRpdFRvZG8odG9kbywgZmllbGQsIHVwZGF0ZSlcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZVRvZG8gKHRvZG8pIHtcbiAgICB0aGlzLm1vZGVsLmRlbGV0ZVRvZG8odG9kbylcbiAgfVxuXG4gIGJpbmRBbGwgKCkge1xuICAgIHRoaXMudmlldy5iaW5kQWRkVG9kbyh0aGlzLmhhbmRsZUFkZFRvZG8uYmluZCh0aGlzKSlcbiAgICB0aGlzLnZpZXcuYmluZERlbGV0ZVRvZG8odGhpcy5oYW5kbGVEZWxldGVUb2RvLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9Gb3JtIH0gZnJvbSAnLi9Ub2RvRm9ybSdcblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0TW9kZWwge1xuICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnRvZG9zID0gW11cbiAgICB0aGlzLmZvcm0gPSBuZXcgVG9kb0Zvcm0oKVxuICB9XG5cbiAgYWRkVG9kbyAodG9kbykge1xuICAgIHRvZG8uaWQgPSB0aGlzLnRvZG9zLmxlbmd0aFxuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKVxuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgZWRpdFRvZG8gKGlkLCBmaWVsZCwgdXBkYXRlKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcbiAgICAgICAgdG9kb1tmaWVsZF0gPSB1cGRhdGVcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgZGVsZXRlVG9kbyAoaWQpIHtcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT09IGlkKVxuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSh0aGlzLnRvZG9zKVxuICB9XG5cbiAgYmluZFRvZG9MaXN0Q2hhbmdlIChjYWxsYmFjaykge1xuICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZSA9IGNhbGxiYWNrXG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8nXG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdFZpZXcge1xuICBjb25zdHJ1Y3RvciAocHJvamVjdElkKSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtwcm9qZWN0SWR9IC5zZWN0aW9uc2ApXG4gICAgdGhpcy50b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy50b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvbGlzdCcpXG4gICAgdGhpcy5pZCA9ICsrVG9kb0xpc3RWaWV3LmNvdW50ZXJcbiAgICB0aGlzLnByb2plY3RJZCA9IHByb2plY3RJZFxuICB9XG5cbiAgLy8gQ3JlYXRlIGEgc2VjdGlvblxuICBjcmVhdGVTZWN0aW9uICgpIHtcbiAgICB0aGlzLnNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGBzZWN0aW9uLSR7dGhpcy5wcm9qZWN0SWR9LSR7dGhpcy5pZH1gKVxuICAgIHRoaXMuc2VjdGlvbi5wcmVwZW5kKHRoaXMudG9kb0xpc3QpXG4gICAgdGhpcy5wcm9qZWN0LmFwcGVuZCh0aGlzLnNlY3Rpb24pXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHNlY3Rpb24ncyBuYW1lXG4gIHJlbmRlck5hbWUgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGhpcy5uYW1lLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25fX25hbWUnKVxuICAgIHRoaXMubmFtZS5pbm5lckhUTUwgPSBuYW1lXG4gICAgdGhpcy5zZWN0aW9uLnByZXBlbmQodGhpcy5uYW1lKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBBZGQgVG9kbyBGb3JtXG4gIHJlbmRlckZvcm0gKGZvcm0pIHtcbiAgICBmb3JtLnJlbmRlcih0aGlzLnNlY3Rpb24pXG4gIH1cblxuICAvLyBHZXQgdGhlIEFkZCBUb2RvIEZvcm0gSW5wdXRzXG4gIGdldEZvcm0gKCkge1xuICAgIHRoaXMudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke3RoaXMucHJvamVjdElkfS0ke3RoaXMuaWR9IC50b2RvLWZvcm0gW25hbWU9XCJ0aXRsZVwiXWApXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5wcm9qZWN0SWR9LSR7dGhpcy5pZH0gLnRvZG8tZm9ybSBbbmFtZT1cImRlc2NyaXB0aW9uXCJdYClcbiAgICB0aGlzLmRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke3RoaXMucHJvamVjdElkfS0ke3RoaXMuaWR9IC50b2RvLWZvcm0gW25hbWU9XCJkYXRlXCJdYClcbiAgICB0aGlzLnN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5wcm9qZWN0SWR9LSR7dGhpcy5pZH0gLnRvZG8tZm9ybSAuYnRuLS1zdWJtaXRgKVxuICB9XG5cbiAgLy8gR2V0IGZvcm0gdmFsdWVzXG4gIGdldCBfdG9kb1RpdGxlICgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZS52YWx1ZVxuICB9XG5cbiAgZ2V0IF90b2RvRGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9EYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlLnZhbHVlXG4gIH1cblxuICBnZXQgX3RvZG9Qcmlvcml0eSAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWVcbiAgICB9XG4gIH1cblxuICAvLyBSZXNldCBmb3JtIGlucHV0c1xuICBfcmVzZXRJbnB1dHMgKCkge1xuICAgIHRoaXMudGl0bGUudmFsdWUgPSAnJ1xuICAgIHRoaXMuZGVzY3JpcHRpb24udmFsdWUgPSAnJ1xuICAgIHRoaXMuZGF0ZS52YWx1ZSA9ICcnXG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLmNoZWNrZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgVG9kbyBMaXN0XG4gIHJlbmRlciAodG9kb3MpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmlubmVySFRNTCA9ICcnXG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICB0b2RvLnJlbmRlcih0aGlzLnRvZG9MaXN0KVxuICAgIH1cbiAgfVxuXG4gIC8vIEV2ZW50IExpc3RlbmVyc1xuXG4gIGJpbmRBZGRUb2RvIChoYW5kbGVyKSB7XG4gICAgdGhpcy5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBoYW5kbGVyKG5ldyBUb2RvKHRoaXMuX3RvZG9UaXRsZSwgdGhpcy5fdG9kb0Rlc2NyaXB0aW9uLCB0aGlzLl90b2RvRGF0ZSwgdGhpcy5fdG9kb1ByaW9yaXR5LCAnJywgJycsICcnKSlcbiAgICAgIHRoaXMuX3Jlc2V0SW5wdXRzKClcbiAgICB9KVxuICB9XG5cbiAgYmluZERlbGV0ZVRvZG8gKGhhbmRsZXIpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvLWRvX19jaGVjaycpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpXG4gICAgICAgIGhhbmRsZXIoaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5Ub2RvTGlzdFZpZXcuY291bnRlciA9IDBcbiIsImltcG9ydCAnLi9zYXNzL21haW4uc2NzcydcbmltcG9ydCB7IFRvZG9MaXN0Q29udHJvbGxlciB9IGZyb20gJy4vVG9kb0xpc3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgVG9kb0xpc3RNb2RlbCB9IGZyb20gJy4vVG9kb0xpc3RNb2RlbCdcbmltcG9ydCB7IFRvZG9MaXN0VmlldyB9IGZyb20gJy4vVG9kb0xpc3RWaWV3J1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vVG9kbydcblxuaW1wb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfSBmcm9tICcuL1Byb2plY3RDb250cm9sbGVyJ1xuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSAnLi9Qcm9qZWN0TW9kZWwnXG5pbXBvcnQgeyBQcm9qZWN0VmlldyB9IGZyb20gJy4vUHJvamVjdFZpZXcnXG5cbmltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tICcuL0FwcENvbnRyb2xsZXInXG5pbXBvcnQgeyBBcHBNb2RlbCB9IGZyb20gJy4vQXBwTW9kZWwnXG5pbXBvcnQgeyBBcHBWaWV3IH0gZnJvbSAnLi9BcHBWaWV3J1xuXG5jb25zdCBiaWdQcm9qZWN0ID0gbmV3IFByb2plY3RDb250cm9sbGVyKG5ldyBQcm9qZWN0TW9kZWwoJ2JpZyBiaWcnKSwgbmV3IFByb2plY3RWaWV3KFByb2plY3RNb2RlbC5jb3VudGVyKSlcbmJpZ1Byb2plY3Qudmlldy5yZW5kZXJGb3JtKGJpZ1Byb2plY3QubW9kZWwuZm9ybSlcbmJpZ1Byb2plY3Qudmlldy5nZXRGb3JtKClcbmJpZ1Byb2plY3QuYmluZEFsbCgpXG5cbmNvbnN0IGFwcCA9IG5ldyBBcHBDb250cm9sbGVyKG5ldyBBcHBNb2RlbCgpLCBuZXcgQXBwVmlldygpKVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=