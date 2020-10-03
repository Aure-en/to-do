import { Todo } from './Todo'

export class TodoListView {
  constructor () {
    // Section of the Todo List
    this.todoList = document.querySelector('#to-do_list')

    // Form to add a Todo to the Todo List
    this.title = document.querySelector('[name="title"]')
    this.description = document.querySelector('[name="description"]')
    this.date = document.querySelector('[name="date"]')
    this.submit = document.querySelector('#submit-todo')
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
  renderAll (todos) {
    this.todoList.innerHTML = ''

    for (const todo of todos) {
      todo.render(this.todoList)
    }
  }

  // Event Listeners on the DOM elements

  bindAddTodo (handler) {
    this.submit.addEventListener('click', () => {
      handler(new Todo(this._todoTitle, this._todoDescription, this._todoDate, this._todoPriority, '', '', ''))
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
}
