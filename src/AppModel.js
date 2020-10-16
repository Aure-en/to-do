import { localStorageModule } from './localStorageModule'

export class AppModel {
  constructor () {
    this.projects = JSON.parse(localStorage.getItem('projects')) || []
  }

  addProject (project) {
    this.projects.push(project)
    project.id = ++AppModel.counter
    localStorageModule.updateProjectList(this.projects)
    localStorage.setItem('AppModelCounter', AppModel.counter)
  }

  deleteProject (id) {
    this.projects = this.projects.filter(project => project.id !== id)
    localStorageModule.updateProjectList(this.projects)
  }

  editProject (id, name) {
    this.projects = this.projects.map((project) => {
      if (project.model.id === +id) {
        project.model.name = name
        localStorageModule.updateProjectList(this.projects)
      }
      return project
    })
  }
}

AppModel.counter = 0
