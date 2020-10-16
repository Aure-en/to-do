import { TodoForm } from './TodoForm'

export class TodoListModel {
  constructor (name, projectId) {
    this.name = name === '' ? 'Untitled' : name
    this.id = ++TodoListModel.counter
    this.form = new TodoForm('add', this.id)
    this.projectId = projectId
    this.todos = []
    this._checkStorage()
  }

  addTodo (todo) {
    this.todos.push(todo)
    this._commit(this.todos)
    localStorage.setItem('TodoListCounter', TodoListModel.counter)
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

  _checkStorage () {
    if (!JSON.parse(localStorage.getItem('projects'))) return

    if (!JSON.parse(localStorage.getItem('projects')).filter((project) => project.id === this.projectId)[0]) {
      this.todos = []
    } else {
      this.todos = JSON.parse(localStorage.getItem('projects'))
        .filter((project) => project.id === this.projectId)[0]
        .model
        .todoLists
        .filter((todoList) => todoList.id === this.id)
        .todos || []
    }
  }

  _updateStorage () {
    localStorage.setItem(
      'projects',
      JSON.stringify(
        JSON.parse(localStorage.getItem('projects'))
          .map((project) => {
            if (project.id === this.projectId) {
              project.model.todoLists.map((todoList) => {
                if (todoList.model.id === this.id) {
                  todoList.model.todos = this.todos
                }
                return todoList
              })
            }
            return project
          })
      )
    )
  }

  _commit (todos) {
    this.onTodoListChange(todos)
    this._updateStorage()
  }
}

TodoListModel.counter = JSON.parse(localStorage.getItem('TodoListCounter')) || 0
