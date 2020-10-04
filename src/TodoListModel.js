import { TodoForm } from './TodoForm'

export class TodoListModel {
  constructor (name) {
    this.name = name
    this.todos = []
    this.form = new TodoForm(this.id)
  }

  addTodo (todo) {
    todo.id = this.todos.length
    this.todos.push(todo)
    this.onTodoListChange(this.todos)
  }

  editTodo (id, field, update) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo[field] = update
      }
    })
    this.onTodoListChange(this.todos)
  }

  deleteTodo (id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
    this.onTodoListChange(this.todos)
  }

  bindTodoListChange (callback) {
    this.onTodoListChange = callback
  }
}
