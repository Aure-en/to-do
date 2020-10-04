export class TodoForm {
  constructor (projectId, id) {
    this.projectId = projectId
    this.id = id
  }

  render (container) {
    const form = document.createElement('form')
    form.classList.add('add', 'add--todo', 'todo-form')

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
    priorities.classList.add('add-priority')
    priorities.setAttribute('id', `add-priority-${this.id}`)
    const prioritiesList = ['high', 'med', 'low', 'none']

    for (const priority of prioritiesList) {
      const labelPriority = document.createElement('label')
      labelPriority.setAttribute('for', `priority-${priority}-${this.id}`)
      labelPriority.classList.add(`priority-${priority}`)
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
    container.append(form)
  }
}
