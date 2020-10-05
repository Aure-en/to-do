export class AppModel {
  constructor () {
    this.projects = []
  }

  addProject (project) {
    this.projects.push(project)
    project.id = this.projects.length
  }
}
