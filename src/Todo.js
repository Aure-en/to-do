export class Todo {
  constructor (title, description, date, priority, project, section, id) {
    this.title = title
    this.description = description
    this.date = date
    this.priority = priority
    this.project = project
    this.section = section
    this.id = id
  }

  render (container) {
    const todoElem = document.createElement('div')
    todoElem.classList.add('to-do')
    todoElem.setAttribute('data-date', this.date)
    todoElem.setAttribute('data-priority', this.priority)
    todoElem.setAttribute('data-project', this.project)

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

    container.append(todoElem)
  }
}
