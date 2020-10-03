export class TodoListController {
  constructor (model, view) {
    this.model = model
    this.view = view
    this.onTodoListChange(this.model.todos)
    this.view.bindAddTodo(this.handleAddTodo.bind(this))
    this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this))
    this.model.bindTodoListChange(this.onTodoListChange.bind(this))
  }

  onTodoListChange (todos) {
    this.view.renderAll(todos)
  }

  handleAddTodo (todo) {
    this.model.addTodo(todo)
  }

  handleEditTodo (todo, field, update) {
    this.model.editTodo(todo, field, update)
  }

  handleDeleteTodo (todo) {
    this.model.deleteTodo(todo)
  }
}
