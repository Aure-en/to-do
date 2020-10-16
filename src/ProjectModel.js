import { SectionForm } from './SectionForm'

export class ProjectModel {
  constructor (name) {
    this.name = name === '' ? 'Untitled' : name
    this.id = ++ProjectModel.counter
    this.todoLists = []
    this.form = new SectionForm(this.id)
  }

  _checkStorage () {
    if (!JSON.parse(localStorage.getItem('projects')).filter((project) => project.id === this.id)[0]) {
      this.todoLists = []
    } else {
      this.todos = JSON.parse(localStorage.getItem('projects'))
        .filter((project) => project.id === this.id)[0]
        .model
        .todoLists || []
    }
  }

  _updateStorage () {
    localStorage.setItem(
      'projects',
      JSON.stringify(
        JSON.parse(localStorage.getItem('projects'))
          .map((project) => {
            if (project.id === this.id) {
              project.model.todoLists = this.todoLists
            }
            return project
          })
      )
    )
  }

  _commit (todoLists) {
    this.onProjectChange(todoLists)
    this._updateStorage()
  }

  addTodoList (todoList) {
    this.todoLists.push(todoList)
    todoList.id = this.todoLists.length
    this._commit(this.todoLists)
    localStorage.setItem('ProjectCounter', ProjectModel.counter)
  }

  editTodoList (id, name) {
    this.todoLists = this.todoLists.map((todoList) => {
      if (todoList.model.id === +id) {
        todoList.model.name = name
      }
      return todoList
    })
    this._commit(this.todoLists)
  }

  deleteTodoList (id) {
    this.todoLists = this.todoLists.filter(todoList => todoList.model.id !== +id)
    this._commit(this.todoLists)
  }

  bindProjectChange (callback) {
    this.onProjectChange = callback
  }
}

ProjectModel.counter = JSON.parse(localStorage.getItem('ProjectCounter')) || 0
