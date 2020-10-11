import { SectionForm } from './SectionForm'

export class ProjectModel {
  constructor (name) {
    this.name = name === '' ? 'Untitled' : name
    this.id = ++ProjectModel.counter
    this.todoLists = []
    this.form = new SectionForm(this.id)
  }

  addTodoList (todoList) {
    this.todoLists.push(todoList)
    todoList.id = this.todoLists.length
    this.onProjectChange(this.todoLists)
  }

  editTodoList (id, name) {
    this.todoLists = this.todoLists.map((todoList) => {
      if (todoList.model.id === +id) {
        todoList.model.name = name
      }
      return todoList
    })
    this.onProjectChange(this.todoLists)
  }

  deleteTodoList (id) {
    this.todoLists = this.todoLists.filter(todoList => todoList.model.id !== +id)
    this.onProjectChange(this.todoLists)
  }

  bindProjectChange (callback) {
    this.onProjectChange = callback
  }
}

ProjectModel.counter = 0
