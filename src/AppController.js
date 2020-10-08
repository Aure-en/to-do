import { ProjectController } from './ProjectController'
import { ProjectModel } from './ProjectModel'
import { ProjectView } from './ProjectView'

export class AppController {
  constructor (model, view) {
    this.model = model
    this.view = view

    this.view.bindAddProject(this.handleAddProject.bind(this))
    this.view.bindToggle(this.handleToggle.bind(this))
    this.view.bindNavToggle(this.handleNavToggle.bind(this))
    this.view.bindPriority(this.handlePriority.bind(this))
  }

  // Display the new project and created a button linked to the project in the navigation.
  handleAddProject (name) {
    const project = new ProjectController(new ProjectModel(name), new ProjectView(ProjectModel.counter))
    this.model.addProject(project)

    project.view.renderName(name)
    project.view.renderBtn(name)
    project.view.renderForm(project.model.form)
    project.view.getForm()
    project.bindAll()
    project.view.button.addEventListener('click', () => this.handleNavClick(project))
  }

  // Links the newly created navigation button to its project
  handleNavClick (project) {
    project.view.renderName(project.model.name)
    project.view.render(project.model.todoLists)
    project.view.renderForm(project.model.form)
    project.view.getForm()
    project.bindAll()
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
}
