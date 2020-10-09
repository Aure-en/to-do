import { TodoForm } from './TodoForm'

export class Todo {
  constructor (title, description, date, priority = 'none') {
    this.title = title
    this.description = description
    this.date = date
    this.priority = priority
    this.id = ++Todo.counter
    this.editForm = new TodoForm('edit', this.id)
  }

  render (container) {
    this.todoElem = document.createElement('div')
    this.todoElem.classList.add('to-do')
    this.todoElem.setAttribute('data-date', this.date)
    this.todoElem.setAttribute('data-priority', this.priority)
    this.todoElem.id = this.id

    const todoCheck = document.createElement('input')
    todoCheck.classList.add('to-do__check')
    todoCheck.setAttribute('type', 'checkbox')
    this.todoElem.append(todoCheck)

    const components = ['title', 'description', 'date']
    for (const component of components) {
      const todoComponent = document.createElement('div')
      todoComponent.classList.add(`to-do__${component}`)
      todoComponent.innerHTML = this[component]
      this.todoElem.append(todoComponent)
    }

    const todoPriority = document.createElement('div')
    todoPriority.classList.add('to-do__priority', `priority-${this.priority}`)
    todoPriority.innerHTML = '<i class="far fa-bookmark"></i>'
    this.todoElem.append(todoPriority)

    this.todoEdit = document.createElement('button')
    this.todoEdit.classList.add('btn', 'btn--toggle', 'btn--edit')
    this.todoEdit.setAttribute('type', 'button')
    this.todoEdit.setAttribute('data-toggle', `edit-todo-${this.id}`)
    this.todoEdit.innerHTML = '<i class="fas fa-pencil-alt"></i>'
    this.todoElem.append(this.todoEdit)

    container.append(this.todoElem)

    this.bindTodoEdit(this.handleTodoEdit.bind(this))
  }

  // Open the Edit Form when we click on the pen icon.
  bindTodoEdit (handler) {
    this.todoEdit.addEventListener('click', handler)
  }

  handleTodoEdit () {
    if (document.querySelector(`#edit-todo-${this.id}`)) return
    this.editForm.renderEdit(this.todoElem)
    this._getEdit()
    this._setEdit()
  }

  // Get the Todo values and insert them in the form to make editing easier.
  _getEdit () {
    this.titleInput = document.querySelector(`#edit-todo-${this.id} [name="title"]`)
    this.descriptionInput = document.querySelector(`#edit-todo-${this.id} [name="description"]`)
    this.dateInput = document.querySelector(`#edit-todo-${this.id} [name="date"]`)
    this.priorityInput = document.querySelector(`#edit-todo-${this.id} [data-toggle^="add-priority"]`)
  }

  _setEdit () {
    this.titleInput.value = this.title
    this.descriptionInput.value = this.description
    this.dateInput.value = this.date
    this.priorityInput.classList.add(`priority-${this.priority}`)
  }
}

Todo.counter = 0
