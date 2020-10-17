import { TodoForm } from './TodoForm'
import { localStorageModule } from './localStorageModule'

export class TodoListModel {
  constructor (name, projectId) {
    this.name = name === '' ? 'Untitled' : name
    this.id = ++TodoListModel.counter
    this.form = new TodoForm('add', this.id)
    this.projectId = projectId
    this.todos = []
    this.sortStatus = ''
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
    if (this.sortStatus === 'descending') {
      this.todos = this.todos.sort((a, b) => (b.title).localeCompare(a.title))
    } else {
      this.todos = this.todos.sort((a, b) => (a.title).localeCompare(b.title))
    }
    this._sortChange(this.todos)
  }

  sortDescription () {
    if (this.sortStatus === 'descending') {
      this.todos = this.todos.sort((a, b) => (b.description).localeCompare(a.description))
    } else {
      this.todos = this.todos.sort((a, b) => (a.description).localeCompare(b.description))
    }
    this._sortChange(this.todos)
  }

  sortDate () {
    this.todos = this.todos.sort((a, b) => {
      if (!a.date) {
        return 1
      } else if (!b.date) {
        return -1
      } else {
        if (this.sortStatus === 'descending') {
          return new Date(b.date) - new Date(a.date)
        } else {
          return new Date(a.date) - new Date(b.date)
        }
      }
    })
    this._sortChange(this.todos)
  }

  sortPriority () {
    this._getPriorityValue()
    if (this.sortStatus === 'descending') {
      this.todos = this.todos.sort((a, b) => b.priorityValue - a.priorityValue)
    } else {
      this.todos = this.todos.sort((a, b) => a.priorityValue - b.priorityValue)
    }
    this._sortChange(this.todos)
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

  _sortChange (todos) {
    this.sortStatus = this.sortStatus === 'descending' ? 'ascending' : 'descending'
    this.onTodoListChange(todos)
  }
}

TodoListModel.counter = 0
