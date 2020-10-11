export class ProjectController {
  constructor (model, view) {
    this.model = model
    this.view = view
    this.onProjectChange(this.model.todoLists)
    this.model.bindProjectChange(this.onProjectChange.bind(this))
    this.view.bindChangeName(this.handleEditTodoList.bind(this))
    this.view.bindDeleteSection(this.handleDeleteTodoList.bind(this))
    this.view.bindAddSection(this.handleAddTodoList.bind(this))
  }

  onProjectChange (todoLists) {
    this.view.render(todoLists)
  }

  handleAddTodoList (todoList) {
    this.model.addTodoList(todoList)
  }

  handleDeleteTodoList (id) {
    this.model.deleteTodoList(id)
  }

  handleEditTodoList (id, name) {
    this.model.editTodoList(id, name)
  }
}
