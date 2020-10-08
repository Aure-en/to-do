import { ProjectController } from './ProjectController'
import { ProjectModel } from './ProjectModel'
import { ProjectView } from './ProjectView'
import { TodoListController } from './TodoListController'
import { TodoListModel } from './TodoListModel'
import { TodoListView } from './TodoListView'

export class AppController {
  constructor (model, view) {
    this.model = model
    this.view = view

    this.view.bindAddProject(this.handleAddProject.bind(this))
    this.view.bindDeleteProject(this.handleDeleteProject.bind(this))
    this.view.bindToggle(this.handleToggle.bind(this))
    this.view.bindNavToggle(this.handleNavToggle.bind(this))
    this.view.bindPriority(this.handlePriority.bind(this))
    this.view.bindDisplayAll(this.handleDisplayAll.bind(this))
    this.view.bindDateToday(this.handleToday.bind(this))
    this.view.bindDateUpcoming(this.handleUpcoming.bind(this))
    this.view.bindDateAnytime(this.handleAnytime.bind(this))
    this.view.bindHome(this.handleHome.bind(this))
  }

  // Display the new project and created a button linked to the project in the navigation.
  handleAddProject (name) {
    const project = new ProjectController(new ProjectModel(name), new ProjectView(ProjectModel.counter))
    this.model.addProject(project)

    project.model.addTodoList(new TodoListController(new TodoListModel('Default'), new TodoListView()))
    project.view.renderName(name)
    project.view.render(project.model.todoLists)
    project.view.renderForm(project.model.form)
    project.view.getForm()
    project.bindAll()
    this.view.renderBtn(name, project.model.id)
    document.querySelector(`[data-project="project-${project.model.id}"]`).addEventListener('click', () => this.handleNavClick(project))
  }

  // Links the newly created navigation button to its project
  handleNavClick (project) {
    project.view.renderName(project.model.name)
    project.view.render(project.model.todoLists)
    project.view.renderForm(project.model.form)
    project.view.getForm()
    project.bindAll()
  }

  // When a project is deleted, it is removed from the model and from the navigation.
  // The Homepage is displayed instead.
  handleDeleteProject (id) {
    this.model.deleteProject(id)
    document.querySelector(`[data-project="project-${id}"]`).remove()
    document.querySelector('[data-project="project-1"]').dispatchEvent(new Event('click'))
  }

  // Enable all toggle buttons
  handleToggle (event) {
    document.querySelector(`#${event.target.dataset.toggle}`).classList.toggle('hidden')
  }

  // Modify space occupied by content when the navigation is hidden / displayed.
  handleNavToggle () {
    this.view.nav.classList.toggle('nav--hidden')
    this.view.main.classList.toggle('main--hidden')
  }

  // Enable priority filters
  handlePriority (priority) {
    const todos = document.querySelectorAll('.to-do')
    todos.forEach(todo => {
      if (todo.dataset.priority !== priority) {
        todo.classList.add('no-display')
      } else {
        todo.classList.remove('no-display')
      }
    })
  }

  // Helper function that compares 2 days (used for date filters)
  _sameDay (date1, date2) {
    const todoDate = new Date(date1)
    if (todoDate.getDate() === date2.getDate() &&
    todoDate.getMonth() === date2.getMonth() &&
    todoDate.getFullYear() === date2.getFullYear()) {
      return true
    }
    return false
  }

  // Dates filters

  handleToday () {
    const today = new Date()
    const todos = document.querySelectorAll('.to-do')
    todos.forEach(todo => {
      if (this._sameDay(todo.dataset.date, today)) {
        todo.classList.remove('no-display')
      } else {
        todo.classList.add('no-display')
      }
    })
  }

  handleUpcoming () {
    const today = new Date()
    const todos = document.querySelectorAll('.to-do')
    todos.forEach(todo => {
      if (!this._sameDay(todo.dataset.date, today) && new Date(todo.dataset.date) > today) {
        todo.classList.remove('no-display')
      } else {
        todo.classList.add('no-display')
      }
    })
  }

  handleAnytime () {
    const todos = document.querySelectorAll('.to-do')
    todos.forEach(todo => {
      if (todo.dataset.date !== '') {
        todo.classList.add('no-display')
      } else {
        todo.classList.remove('no-display')
      }
    })
  }

  // Disable filters
  handleDisplayAll () {
    const todos = document.querySelectorAll('.to-do')
    todos.forEach(todo => todo.classList.remove('no-display'))
  }

  // Home page
  handleHome () {
    document.querySelector('[data-project="project-1"]').dispatchEvent(new Event('click'))
  }
}
