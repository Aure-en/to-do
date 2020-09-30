export const todoList = (() => {
  const content = []

  const add = (todo) => {
    content.push(todo)
  }

  const remove = (todo) => {
    content[content.indexOf(todo)] = null
  }

  return {
    content,
    add,
    remove
  }
})()

export const projectList = () => {
  const content = []

  const add = (project) => {
    content.push(project)
  }

  const remove = (project) => {
    content[content.indexOf(project)] = null
  }

  return {
    content,
    add,
    remove
  }
}

export const sectionList = () => {
  const content = []

  const add = (section) => {
    content.push(section)
  }

  const remove = (section) => {
    content[content.indexOf(section)] = null
  }

  return {
    content,
    add,
    remove
  }
}
