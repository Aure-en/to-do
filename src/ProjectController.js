export class ProjectController {
  constructor (model, view) {
    this.model = model
    this.view = view
    this.onProjectChange(this.model.todoLists)
    this.model.bindProjectChange(this.onProjectChange.bind(this))
    this.view.bindChangeName(this.handleEditTodoList.bind(this))
  }

  onProjectChange (todoLists) {
    this.view.render(todoLists)
  }

  handleAddTodoList (todoList) {
    this.model.addTodoList(todoList)
  }

  handleDeleteTodoList (todoList) {
    this.model.deleteTodoList(todoList)
  }

  handleEditTodoList (id, name) {
    this.model.editTodoList(id, name)
  }

  bindAll () {
    this.view.bindAddSection(this.handleAddTodoList.bind(this))
  }
}
