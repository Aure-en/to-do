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

  editProject (id, name) {
    this.projects = this.projects.map((project) => {
      if (project.model.id === +id) {
        project.model.name = name
      }
      return project
    })
  }
}
