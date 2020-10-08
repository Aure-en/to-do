import { Todo } from './Todo'

export class TodoListView {
  constructor () {
    this.project = document.querySelector('.sections')
    this.todoList = document.createElement('div')
    this.todoList.classList.add('todolist')
    this.id = ++TodoListView.counter
  }

  // Create a section
  createSection () {
    this.section = document.createElement('div')
    this.section.classList.add(`section-${this.id}`)
    this.section.prepend(this.todoList)
    this.project.append(this.section)
  }

  // Render the section's name
  renderName (name) {
    this.name = document.createElement('h2')
    this.name.classList.add('section__name')
    this.name.innerHTML = name
    this.section.prepend(this.name)
  }

  // Render the Add Todo Form
  renderForm (form) {
    form.render(this.section)
  }

  // Get the Add Todo Form Inputs
  getForm () {
    this.title = document.querySelector(`.section-${this.id} .todo-form [name="title"]`)
    this.description = document.querySelector(`.section-${this.id} .todo-form [name="description"]`)
    this.date = document.querySelector(`.section-${this.id} .todo-form [name="date"]`)
    this.submit = document.querySelector(`.section-${this.id} .todo-form .btn--submit`)
  }

  // Get form values
  get _todoTitle () {
    return this.title.value
  }

  get _todoDescription () {
    return this.description.value
  }

  get _todoDate () {
    return this.date.value
  }

  get _todoPriority () {
    if (document.querySelector('[name="priority"]:checked')) {
      return document.querySelector('[name="priority"]:checked').value
    }
  }

  // Reset form inputs
  _resetInputs () {
    this.title.value = ''
    this.description.value = ''
    this.date.value = ''

    if (document.querySelector('[name="priority"]:checked')) {
      document.querySelector('[name="priority"]:checked').checked = false
    }
  }

  // Render the Todo List
  render (todos) {
    this.todoList.innerHTML = ''
    for (const todo of todos) {
      todo.render(this.todoList)
    }
  }

  // Event Listeners

  bindAddTodo (handler) {
    this.submit.addEventListener('click', () => {
      handler(new Todo(this._todoTitle, this._todoDescription, this._todoDate, this._todoPriority))
      this._resetInputs()
    })
  }

  bindDeleteTodo (handler) {
    this.todoList.addEventListener('change', (event) => {
      if (event.target.classList.contains('to-do__check')) {
        const id = parseInt(event.target.parentElement.id)
        handler(id)
      }
    })
  }

  bindPriority (handler) {
    
  }

}

TodoListView.counter = 0
