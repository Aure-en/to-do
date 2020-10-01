// Filter the to-do that are currently displayed depending on their priority, due-date, etc...

export const filter = (filter, value, todoList) => {
  for (const todo of todoList) {
    if (todo.getAttribute(`data-${filter}`) === value) {
      todo.classList.remove('hidden')
    } else {
      todo.classList.add('hidden')
    }
  }
}

// Display all to-dos without.
export const removeFilter = (todoList) => {
  for (const todo of todoList) {
    todo.classList.remove('hidden')
  }
}
