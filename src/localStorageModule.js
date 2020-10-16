export const localStorageModule = (() => {
  const updateProjectList = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }

  const updateTodoLists = (id, todoListsArr) => {
    localStorage.setItem(
      'projects',
      JSON.stringify(
        JSON.parse(localStorage.getItem('projects'))
          .map((project) => {
            if (project.id === id) {
              project.model.todoLists = todoListsArr
            }
            return project
          })
      )
    )
  }

  const updateTodos = (id, projectId, todosArr) => {
    localStorage.setItem(
      'projects',
      JSON.stringify(
        JSON.parse(localStorage.getItem('projects'))
          .map((project) => {
            if (project.id === projectId) {
              project.model.todoLists.map((todoList) => {
                if (todoList.model.id === id) {
                  todoList.model.todos = todosArr
                }
                return todoList
              })
            }
            return project
          })
      )
    )
  }

  return {
    updateProjectList,
    updateTodoLists,
    updateTodos
  }
})()
