export class TodoForm {
  constructor (goal, id) {
    this.goal = goal
    this.id = id
  }

  _renderForm () {
    const form = document.createElement('form')
    form.classList.add(`${this.goal}--todo`, 'todo-form', 'dropdown')
    form.setAttribute('id', `${this.goal}-todo-${this.id}`)

    if (this.goal === 'add') {
      form.classList.add('hidden')
    }

    const content = document.createElement('div')
    content.classList.add(`${this.goal}__content`, `${this.goal}__content--todo`)

    const labelTitle = document.createElement('label')
    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('name', 'title')
    title.setAttribute('placeholder', 'Title')
    labelTitle.append(title)

    const labelDescription = document.createElement('label')
    const description = document.createElement('textarea')
    description.setAttribute('name', 'description')
    description.setAttribute('placeholder', 'Description')
    labelDescription.append(description)

    const details = document.createElement('div')
    details.classList.add(`${this.goal}__details`)

    const labelDate = document.createElement('label')
    const date = document.createElement('input')
    date.setAttribute('type', 'date')
    date.setAttribute('name', 'date')
    labelDate.append(date)

    const priorityContainer = document.createElement('div')
    priorityContainer.classList.add('add__priority')
    this.priorityBtn = document.createElement('button')
    this.priorityBtn.setAttribute('type', 'button')
    this.priorityBtn.setAttribute('data-toggle', `${this.goal}-add-priority-${this.id}`)
    this.priorityBtn.classList.add('btn', 'btn--toggle')
    this.priorityBtn.innerHTML = '<i class="far fa-bookmark"></i>'

    const priorities = document.createElement('div')
    priorities.classList.add('add-priority', 'dropdown', 'hidden')
    priorities.setAttribute('id', `${this.goal}-add-priority-${this.id}`)
    const prioritiesList = ['high', 'med', 'low', 'none']

    for (const priority of prioritiesList) {
      const labelPriority = document.createElement('label')
      labelPriority.setAttribute('for', `priority-${priority}-${this.id}`)
      labelPriority.classList.add(`priority-${priority}`, `priority-${this.id}`)
      labelPriority.innerHTML = '<i class="far fa-bookmark"></i>'

      const inputPriority = document.createElement('input')
      inputPriority.setAttribute('type', 'radio')
      inputPriority.setAttribute('name', 'priority')
      inputPriority.setAttribute('value', priority)
      inputPriority.setAttribute('id', `priority-${priority}-${this.id}`)

      if (priority === 'none') {
        inputPriority.setAttribute('checked', true)
      }

      priorities.append(labelPriority, inputPriority)
    }

    priorityContainer.append(this.priorityBtn, priorities)

    const finish = document.createElement('div')
    finish.classList.add(`${this.goal}__finish`)

    const submitBtn = document.createElement('button')
    submitBtn.setAttribute('type', 'button')
    submitBtn.classList.add('btn', 'btn--submit')
    submitBtn.innerHTML = `${this.goal.toUpperCase().slice(0, 1) + this.goal.slice(1)} Task`

    const cancelBtn = document.createElement('button')
    cancelBtn.setAttribute('type', 'button')
    cancelBtn.setAttribute('data-toggle', `${this.goal}-todo-${this.id}`)
    cancelBtn.classList.add('btn', 'btn--cancel')
    cancelBtn.innerHTML = 'Cancel'

    finish.append(submitBtn, cancelBtn)
    content.append(labelTitle, labelDescription, details)
    details.append(labelDate, priorityContainer)
    form.append(content, finish)

    return form
  }

  renderAdd (container) {
    const formContainer = document.createElement('div')
    formContainer.classList.add(`${this.goal}__todo`)

    this.formBtn = document.createElement('button')
    this.formBtn.classList.add('btn', 'btn--dropdown', `btn--${this.goal}`)
    this.formBtn.setAttribute('type', 'button')
    this.formBtn.setAttribute('data-toggle', `${this.goal}-todo-${this.id}`)
    this.formBtn.innerHTML = `${this.goal.slice(0, 1).toUpperCase() + this.goal.slice(1)} Task`

    formContainer.append(this.formBtn, this._renderForm())
    container.append(formContainer)

    this._initPriorityToggle()
    this._initPriorityLabels()
  }

  renderEdit (before) {
    const formContainer = document.createElement('div')
    formContainer.classList.add(`${this.goal}__todo`)

    formContainer.append(this._renderForm())
    before.after(formContainer)

    this._initPriorityToggle()
    this._initPriorityLabels()
  }

  // Enable priority toggle and color change when selecting a priority

  _initPriorityToggle () {
    this.priorityBtn.addEventListener('click', () => document.querySelector(`#${this.priorityBtn.dataset.toggle}`).classList.toggle('hidden'))
  }

  _initPriorityLabels () {
    this.labels = document.querySelectorAll(`.priority-${this.id}`)
    this.labels.forEach(label => label.addEventListener('click', (event) => {
      document.querySelector(`#${label.getAttribute('for')}`).checked = true
      document.querySelector(`[data-toggle="${this.goal}-add-priority-${this.id}"]`).style.color = getComputedStyle(event.target.closest('label')).color
    }))
  }

  // Reset priority color when adding a task

  _initResetPriority () {
    document.querySelector(`#add-todo-${this.id} .btn--submit`).addEventListener('click', () => {
      document.querySelector(`[data-toggle="add-priority-${this.id}"]`).style.color = ''
    })
  }
}
