export class AppModel {
  constructor () {
    this.projects = []
  }

  addProject (project) {
    this.projects.push(project)
    project.id = this.projects.length
  }

  deleteProject (id) {
    this.projects = this.projects.filter(project => project.id !== id)
  }
}
