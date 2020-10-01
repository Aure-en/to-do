const todoList = document.querySelector('#to-do_list')
const projectList = document.querySelector('#project_list')

export const todo = (todoObj) => {
  const todoElem = document.createElement('div')
  todoElem.classList.add('to-do')
  todoElem.setAttribute('data-date', todoObj.date)
  todoElem.setAttribute('data-priority', todoObj.priority)
  todoElem.setAttribute('data-project', todoObj.project)

  const todoCheck = document.createElement('input')
  todoCheck.classList.add('to-do__check')
  todoCheck.setAttribute('type', 'checkbox')

  const components = ['title', 'description', 'date']
  for (const component of components) {
    const todoComponent = document.createElement('div')
    todoComponent.classList.add(`to-do__${component}`)
    todoComponent.innerHTML = todoObj[component]
  }

  const todoPriority = document.createElement('div')
  todoPriority.classList.add(`to-do__priority ${todoObj.priority}`)
  todoPriority.innerHTML = '<i class="far fa-bookmark"></i>'

  todoList.append(todoElem)
}

export const project = (projectObj) => {
  const projectElem = document.createElement('li')
  const projectButton = document.createElement('button')
  projectButton.classList.add('btn', 'btn--filter')
  projectButton.setAttribute('type', 'button')
  projectButton.setAttribute('data-filter', `${projectObj.index}`)
  projectButton.innerHTML = projectObj.name
  projectElem.append(projectButton)

  projectList.append(projectElem)
}
