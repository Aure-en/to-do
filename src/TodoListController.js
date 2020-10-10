import { TodoForm } from './TodoForm'

export class TodoListController {
  constructor (model, view) {
    this.model = model
    this.view = view
    this.onTodoListChange(this.model.todos)
    this.model.bindTodoListChange(this.onTodoListChange.bind(this))
  }

  onTodoListChange (todos) {
    this.view.render(todos)
  }

  handleAddTodo (todo) {
    this.model.addTodo(todo)
  }

  handleEditTodo (updatedTodo, id) {
    this.model.editTodo(updatedTodo, id)
  }

  handleDeleteTodo (id) {
    this.model.deleteTodo(id)
  }

  handleOpenEdit (id) {
    if (document.querySelector(`#edit-todo-${id}`)) return
    new TodoForm('edit', id).renderEdit(document.querySelector(`[id="${id}"]`))
  }

  bindAll () {
    this.view.bindAddTodo(this.handleAddTodo.bind(this))
    this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this))
    this.view.bindOpenEdit(this.handleOpenEdit.bind(this))
    this.view.bindEditTodo(this.handleEditTodo.bind(this))
  }
}
