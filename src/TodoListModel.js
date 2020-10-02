export class TodoListModel {
  constructor (name) {
    this.name = name
    this.todos = []
  }

  addTodo (todo) {
    this.todos.push(todo)
    this.onTodoListChange(this.todos)
  }

  editTodo (todo, field, update) {
    this.todos[todo.id][field] = update
    this.onTodoListChange(this.todos)
  }

  removeTodo (todo) {
    this.todos = this.todos.splice(this.todos.indexOf(todo), 1)
    this.onTodoListChange(this.todos)
  }

  bindTodoListChange (callback) {
    this.onTodoListChange = callback
  }
}
