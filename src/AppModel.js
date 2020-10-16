export class AppModel {
  constructor () {
    this.projects = JSON.parse(localStorage.getItem('projects')) || []
  }

  addProject (project) {
    this.projects.push(project)
    project.id = ++AppModel.counter
    localStorage.setItem('projects', JSON.stringify(this.projects))
    localStorage.setItem('AppCounter', AppModel.counter)
  }

  deleteProject (id) {
    this.projects = this.projects.filter(project => project.id !== id)
    localStorage.setItem('projects', JSON.stringify(this.projects))
  }

  editProject (id, name) {
    this.projects = this.projects.map((project) => {
      if (project.model.id === +id) {
        project.model.name = name
        localStorage.setItem('projects', JSON.stringify(this.projects))
      }
      return project
    })
  }
}

AppModel.counter = JSON.parse(localStorage.getItem('AppCounter')) || 0
