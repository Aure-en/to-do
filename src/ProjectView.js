import { TodoListController } from './TodoListController'
import { TodoListModel } from './TodoListModel'
import { TodoListView } from './TodoListView'

export class ProjectView {
  constructor (id) {
    this.container = document.querySelector('.content')
    this.project = document.createElement('div')
    this.project.setAttribute('id', `project-${id}`)
    this.sections = document.createElement('div')
    this.sections.classList.add('sections')
    this.project.append(this.sections)
    this.container.append(this.project)
    this.id = id
  }

  // Render the name of the project
  renderName (name) {
    this.name = document.createElement('h1')
    this.name.classList.add('project__name')
    this.name.innerHTML = name
    this.project.prepend(this.name)
  }

  // Render the navigation button linked to the project
  renderBtn (name) {
    this.li = document.createElement('li')
    this.button = document.createElement('button')
    this.button.classList.add('btn', 'btn--filter')
    this.button.setAttribute('type', 'button')
    this.button.setAttribute('data-filter', `project-${this.id}`)
    this.button.innerHTML = name
    this.li.append(this.button)
    document.querySelector('#projects_list').append(this.li)
  }

  // Render the add section form
  renderForm (form) {
    form.render(this.project)
  }

  // Get the add section form inputs
  getForm () {
    this.name = document.querySelector(`#section-form-${this.id} [name="section"]`)
    this.submit = document.querySelector(`#section-form-${this.id} .btn--submit`)
  }

  // Get Section's Name from the form
  get _sectionName () {
    return this.name.value
  }

  // Reset form input
  _resetInput () {
    this.name.value = ''
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

  // Event Listeners

  bindAddSection (handler) {
    this.submit.addEventListener('click', () => {
      handler(new TodoListController(new TodoListModel(this._sectionName, this.id), new TodoListView(this.id)))
      this._resetInput()
    })
  }
}
