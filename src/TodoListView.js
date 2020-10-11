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
    this.nameContainer = document.createElement('div')
    this.nameContainer.classList.add('section__name__container')

    this.name = document.createElement('h2')
    this.name.classList.add('section__name')
    this.name.setAttribute('contenteditable', true)
    this.name.innerHTML = name

    this.deleteBtn = document.createElement('button')
    this.deleteBtn.classList.add('btn--delete')
    this.deleteBtn.setAttribute('type', 'button')
    this.deleteBtn.setAttribute('data-delete', this.section.classList[0].slice(8))
    this.deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    this.nameContainer.append(this.name, this.deleteBtn)
    this.section.prepend(this.nameContainer)
  }

  // Render the Add form
  renderForm (form) {
    form.renderAdd(this.section)
  }

  // Get the Add form inputs
  getForm () {
    this.title = document.querySelector(`.section-${this.id} .todo-form [name="title"]`)
    this.description = document.querySelector(`.section-${this.id} .todo-form [name="description"]`)
    this.date = document.querySelector(`.section-${this.id} .todo-form [name="date"]`)
    this.submit = document.querySelector(`.section-${this.id} .todo-form .btn--submit`)
  }

  // Get add form values
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

  // Get the Edit form inputs
  getEditForm () {
    this.titleEdit = document.querySelector('[id^="edit-todo"] [name="title"]')
    this.descriptionEdit = document.querySelector('[id^="edit-todo"] [name="description"]')
    this.dateEdit = document.querySelector('[id^="edit-todo"] [name="date"]')
    this.priorityEdit = document.querySelector('[id^="edit-todo"] .btn--toggle')
  }

  // Automatically pre-fill the Edit form inputs
  setEditForm (id) {
    this.titleEdit.value = document.querySelector(`[id="${id}"] .to-do__title`).innerHTML
    this.descriptionEdit.value = document.querySelector(`[id="${id}"] .to-do__description`).innerHTML
    this.dateEdit.value = document.querySelector(`[id="${id}"] .to-do__date`).innerHTML
    this.priorityEdit.classList.add(document.querySelector(`[id="${id}"] .to-do__priority`).classList[1])
    document.querySelector(`[id^="edit-todo"] [id^="${document.querySelector(`[id="${id}"] .to-do__priority`).classList[1]}"]`).checked = true
  }

  // Get the Edit form values
  get _editTitle () {
    return this.titleEdit.value
  }

  get _editDescription () {
    return this.descriptionEdit.value
  }

  get _editDate () {
    return this.dateEdit.value
  }

  get _editPriority () {
    return document.querySelector('[id^="edit-todo"] [name="priority"]:checked').value
  }

  // Reset form inputs
  _resetInputs () {
    this.title.value = ''
    this.description.value = ''
    this.date.value = ''
    document.querySelector('[for^="priority-none"]').checked = true
  }

  // Render the Todo List
  render (todos) {
    while (this.todoList.firstChild) {
      this.todoList.firstChild.remove()
    }

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

  // Open form to edit the todo
  bindOpenEdit (handler) {
    this.todoList.addEventListener('click', (event) => {
      if (event.target.closest('.btn--edit')) {
        const id = parseInt(event.target.closest('.to-do').id)
        handler(id)
      }
    })
  }

  bindEditTodo (handler) {
    this.todoList.addEventListener('click', (event) => {
      if (event.target.innerHTML === 'Edit Task') {
        const id = event.target.closest('form').id.slice(10)
        const updatedTodo = new Todo(this._editTitle, this._editDescription, this._editDate, this._editPriority)
        handler(updatedTodo, id)
      }
    })
  }
}

TodoListView.counter = 0
