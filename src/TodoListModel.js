export class TodoListModel {
  constructor (name) {
    this.name = name
    this.todos = []
  }

  addTodo (todo) {
    this.todos.push(todo)
  }

  editTodo (todo, field, update) {
    this.todos[todo.id][field] = update
  }

  removeTodo (id) {
    this.todos = this.todos.map((todo) => todo.id !== id)
  }
}
