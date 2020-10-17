import { SectionForm } from './SectionForm'
import { localStorageModule } from './localStorageModule'

export class ProjectModel {
  constructor (name) {
    this.name = name === '' ? 'Untitled' : name
    this.id = ++ProjectModel.counter
    this.todoLists = []
    this.form = new SectionForm(this.id)
  }

  _commit (todoLists) {
    this.onProjectChange(todoLists)
    localStorageModule.updateTodoLists(this.id, this.todoLists)
  }

  addTodoList (todoList) {
    this.todoLists.push(todoList)
    todoList.id = this.todoLists.length
    this._commit(this.todoLists)
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

ProjectModel.counter = 0
