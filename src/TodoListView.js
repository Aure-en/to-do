export class TodoListView {
  constructor () {
    // Section of the Todo List
    this.todoList = document.querySelector('#to-do_list')

    // Form to add a Todo to the Todo List
    this.title = document.querySelector('[name="title"]')
    this.description = document.querySelector('[name="description"]')
    this.date = document.querySelector('[name="date"]')
    this.priority = document.querySelector('[name="priority"] checked')
    this.submit = document.querySelector('.submit-todo')
  }

  // Get form values
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
    return this.priority.value
  }

  // Reset form inputs
  _resetInputs () {
    this.title.value = ''
    this.description.value = ''
    this.date.value = ''
    this.priority.checked = false
  }

  // Render the whole Todo List (used at the loading, and when we delete a Todo)
  renderAll (todos) {
    this.todoList.innerHTML = ''

    for (const todo of todos) {
      todo.render(this.todoList)
    }
  }

  // Only renders the last Todo of the List (used when we add a Todo)
  renderLast (todoList) {
    todoList[todoList.length - 1].render()
  }
}
