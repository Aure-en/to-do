import { TodoForm } from './TodoForm'

export class Todo {
  constructor (title, description, date = '', priority = 'none') {
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
    localStorage.setItem('TodoCounter', Todo.counter)
  }
}

Todo.counter = 0
