import { TodoForm } from './TodoForm'
import { localStorageModule } from './localStorageModule'

export class TodoListModel {
  constructor (name, projectId) {
    this.name = name === '' ? 'Untitled' : name
    this.id = ++TodoListModel.counter
    this.form = new TodoForm('add', this.id)
    this.projectId = projectId
    this.todos = []
  }

  addTodo (todo) {
    this.todos.push(todo)
    this._commit(this.todos)
    localStorage.setItem('TodoListModelCounter', TodoListModel.counter)
  }

  editTodo (updatedTodo, id) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === +id) {
        return updatedTodo
      } else {
        return todo
      }
    })
    this._commit(this.todos)
  }

  deleteTodo (id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
    this._commit(this.todos)
  }

  bindTodoListChange (callback) {
    this.onTodoListChange = callback
  }

  _commit (todos) {
    this.onTodoListChange(todos)
    localStorageModule.updateTodos(this.id, this.projectId, this.todos)
  }
}

TodoListModel.counter = 0
