import { TodoForm } from './TodoForm'

export class TodoListController {
  constructor (model, view) {
    this.model = model
    this.view = view
    this.onTodoListChange(this.model.todos)
    this.model.bindTodoListChange(this.onTodoListChange.bind(this))
    this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this))
    this.view.bindOpenEdit(this.handleOpenEdit.bind(this))
    this.view.bindEditTodo(this.handleEditTodo.bind(this))
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
    // User can only edit one task at a time, so if there is another Edit Form open, it is closed.
    if (document.querySelector('[id^="edit-todo"]')) {
      document.querySelector('[id^="edit-todo"]').remove()
    }
    new TodoForm('edit', id).renderEdit(document.querySelector(`.to-do[id="${id}"]`))
    this.view.getEditForm(id)
    this.view.setEditForm(id)
  }

  bindAdd () {
    this.view.bindAddTodo(this.handleAddTodo.bind(this))
  }
}
