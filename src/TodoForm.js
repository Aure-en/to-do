export class TodoForm {
  constructor () {
    this.id = ++TodoForm.counter
  }

  render (container) {
    const formContainer = document.createElement('div')
    formContainer.classList.add('add__todo')

    const formBtn = document.createElement('button')
    formBtn.classList.add('btn', 'btn--dropdown', 'btn--add')
    formBtn.setAttribute('type', 'button')
    formBtn.setAttribute('data-toggle', `add-todo-${this.id}`)
    formBtn.innerHTML = 'Add Task'

    const form = document.createElement('form')
    form.classList.add('add', 'add--todo', 'todo-form', 'dropdown', 'hidden')
    form.setAttribute('id', `add-todo-${this.id}`)

    const content = document.createElement('div')
    content.classList.add('add__content', 'add__content--todo')

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
    details.classList.add('add__details')

    const labelDate = document.createElement('label')
    const date = document.createElement('input')
    date.setAttribute('type', 'date')
    date.setAttribute('name', 'date')
    labelDate.append(date)

    const priorityContainer = document.createElement('div')
    priorityContainer.classList.add('add__priority')
    const priorityBtn = document.createElement('button')
    priorityBtn.setAttribute('type', 'button')
    priorityBtn.setAttribute('data-toggle', `add-priority-${this.id}`)
    priorityBtn.classList.add('btn', 'btn--toggle')
    priorityBtn.innerHTML = '<i class="far fa-bookmark"></i>'

    const priorities = document.createElement('div')
    priorities.classList.add('add-priority', 'dropdown', 'hidden')
    priorities.setAttribute('id', `add-priority-${this.id}`)
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

      priorities.append(labelPriority, inputPriority)
    }

    priorityContainer.append(priorityBtn, priorities)

    const finish = document.createElement('div')
    finish.classList.add('add__finish')

    const submitBtn = document.createElement('button')
    submitBtn.setAttribute('type', 'button')
    submitBtn.classList.add('btn', 'btn--submit')
    submitBtn.innerHTML = 'Add Task'

    const cancelBtn = document.createElement('button')
    cancelBtn.setAttribute('type', 'button')
    cancelBtn.classList.add('btn', 'btn--cancel')
    cancelBtn.innerHTML = 'Cancel'

    finish.append(submitBtn, cancelBtn)

    content.append(labelTitle, labelDescription, details)
    details.append(labelDate, priorityContainer)
    form.append(content, finish)
    formContainer.append(formBtn, form)
    container.append(formContainer)

    this.bindToggle(this.handleToggle)
    this.bindPriorityLabel(this.handlePriorityLabel.bind(this))
    this.bindResetPriority(this.handleResetPriority.bind(this))
  }

  // Enable form toggle
  bindToggle (handler) {
    console.log(this.id)
    this.toggleBtn = [document.querySelector(`[data-toggle="add-priority-${this.id}"]`), document.querySelector(`[data-toggle="add-todo-${this.id}"]`)]
    this.toggleBtn.forEach(toggleBtn => toggleBtn.addEventListener('click', handler))
  }

  handleToggle (event) {
    document.querySelector(`#${event.target.closest('button').dataset.toggle}`).classList.toggle('hidden')
  }

  // Enable priority toggle and color change when selecting a priority
  bindPriorityLabel (handler) {
    this.labels = document.querySelectorAll(`.priority-${this.id}`)
    this.labels.forEach(label => label.addEventListener('click', handler))
  }

  handlePriorityLabel (event) {
    document.querySelector(`#add-priority-${this.id}`).classList.add('hidden')
    document.querySelector(`[data-toggle="add-priority-${this.id}"]`).style.color = getComputedStyle(event.target.closest('label')).color
  }

  // Reset priority color when adding a task
  bindResetPriority (handler) {
    document.querySelector(`#add-todo-${this.id} .btn--submit`).addEventListener('click', handler)
  }

  handleResetPriority () {
    document.querySelector(`[data-toggle="add-priority-${this.id}"]`).style.color = ''
  }
}

TodoForm.counter = 0
