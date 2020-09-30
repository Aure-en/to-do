export const todo = (todoObj) => {
  const todoElem = document.createElement('div')
  todoElem.classList.add('to-do')

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
  todoPriority.classList.add(`to-do__priority ${todoObj[priority]}`)
  todoPriority.innerHTML = '<i class="far fa-bookmark"></i>'
}