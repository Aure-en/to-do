import { TodoListController } from './TodoListController'
import { TodoListModel } from './TodoListModel'
import { TodoListView } from './TodoListView'

export class ProjectView {
  constructor (id) {
    this.container = document.querySelector('.content')
    this.sections = document.querySelector('.sections')
    this.name = document.querySelector('.project__name')
    this.id = id
    this._temporaryName
    this._changeName()
  }

  // Render the name of the project
  renderName (name) {
    this.name.innerHTML = name
  }

  // Render the add section form
  renderForm (form) {
    form.render()
  }

  // Get the add section form inputs
  getForm () {
    this.nameInput = document.querySelector(`#section-form-${this.id} [name="section"]`)
    this.submit = document.querySelector(`#section-form-${this.id} .btn--submit`)
  }

  // Get Section's Name from the form
  get _sectionName () {
    return this.nameInput.value
  }

  // Reset form input
  _resetInput () {
    this.nameInput.value = ''
  }

  // Render the project by rendering every section
  render (todoLists) {
    this.sections.innerHTML = ''

    for (const todoList of todoLists) {
      todoList.view.createSection()
      todoList.view.renderName(todoList.model.name)
      todoList.view.render(todoList.model.todos)
      todoList.view.renderForm(todoList.model.form)
      todoList.view.getForm(todoList.model.form)
      todoList.bindAll()
    }
  }

  // Allow section name edits
  _changeName () {
    this.sections.addEventListener('input', event => {
      if (event.target.classList.contains('section__name')) {
        this._temporaryName = event.target.innerHTML
      }
    })
  }

  bindChangeName (handler) {
    this.sections.addEventListener('focusout', event => {
      if (this._temporaryName) {
        const id = event.target.closest('div').classList[0].slice(8)
        handler(id, this._temporaryName)
        this._temporaryName = ''
      }
    })
  }

  // Event Listeners

  bindAddSection (handler) {
    this.submit.addEventListener('click', () => {
      handler(new TodoListController(new TodoListModel(this._sectionName, this.id), new TodoListView(this.id)))
      this._resetInput()
    })
  }
}
