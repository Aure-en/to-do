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

  sortTitle () {
    this.todos = this.todos.sort((a, b) => (a.title).localeCompare(b.title))
    this.onTodoListChange(this.todos)
  }

  sortDescription () {
    this.todos = this.todos.sort((a, b) => (a.description).localeCompare(b.description))
    this.onTodoListChange(this.todos)
  }

  sortDate () {
    this.todos = this.todos.sort((a, b) => {
      if (!a.date) {
        return 1
      } else if (!b.date) {
        return -1
      } else {
        return new Date(a.date) - new Date(b.date)
      }
    })
    this.onTodoListChange(this.todos)
  }

  sortPriority () {
    this._getPriorityValue()
    this.todos = this.todos.sort((a, b) => a.priorityValue - b.priorityValue)
    this.onTodoListChange(this.todos)
  }

  _getPriorityValue () {
    for (const todo of this.todos) {
      switch (todo.priority) {
        case 'low':
          todo.priorityValue = 1
          break
        case 'med':
          todo.priorityValue = 2
          break
        case 'high':
          todo.priorityValue = 3
          break
        default:
          todo.priorityValue = 0
      }
    }
  }
}

TodoListModel.counter = 0
