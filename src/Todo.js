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
    const todoElem = document.createElement('div')
    todoElem.classList.add('to-do')
    todoElem.setAttribute('data-date', this.date)
    todoElem.setAttribute('data-priority', this.priority)
    todoElem.id = this.id

    const todoCheck = document.createElement('input')
    todoCheck.classList.add('to-do__check')
    todoCheck.setAttribute('type', 'checkbox')
    todoElem.append(todoCheck)

    const components = ['title', 'description', 'date']
    for (const component of components) {
      const todoComponent = document.createElement('div')
      todoComponent.classList.add(`to-do__${component}`)
      todoComponent.innerHTML = this[component]
      todoElem.append(todoComponent)
    }

    const todoPriority = document.createElement('div')
    todoPriority.classList.add('to-do__priority', `priority-${this.priority}`)
    todoPriority.innerHTML = '<i class="far fa-bookmark"></i>'
    todoElem.append(todoPriority)

    const todoEdit = document.createElement('button')
    todoEdit.classList.add('btn', 'btn--toggle', 'btn--edit')
    todoEdit.setAttribute('type', 'button')
    todoEdit.setAttribute('data-toggle', `edit-todo-${this.id}`)
    todoEdit.innerHTML = '<i class="fas fa-pencil-alt"></i>'
    todoElem.append(todoEdit)

    container.append(todoElem)
  }
}

Todo.counter = 0
