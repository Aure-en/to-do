import { ProjectController } from './ProjectController'
import { ProjectModel } from './ProjectModel'
import { ProjectView } from './ProjectView'

export class AppController {
  constructor (model, view) {
    this.model = model
    this.view = view
    this.counter = 0
    this.view.bindAddProject(this.handleAddProject.bind(this))
    this.view.bindToggle(this.handleToggle.bind(this))
  }

  handleAddProject (name) {
    const project = new ProjectController(new ProjectModel(name), new ProjectView(ProjectModel.counter))
    project.view.renderName(name)
    project.view.renderBtn(name)
    project.view.renderForm(project.model.form)
    project.view.getForm()
    project.bindAll()
  }

  handleToggle (event) {
    document.querySelector(`#${event.target.dataset.toggle}`).classList.toggle('hidden')
  }
}
