import './sass/main.scss'
import { ProjectController } from './ProjectController'
import { ProjectModel } from './ProjectModel'
import { ProjectView } from './ProjectView'

import { AppController } from './AppController'
import { AppModel } from './AppModel'
import { AppView } from './AppView'

const app = new AppController(new AppModel(), new AppView())

const defaultProject = new ProjectController(new ProjectModel('All'), new ProjectView(ProjectModel.counter))
defaultProject.view.renderName(defaultProject.model.name)
defaultProject.view.renderForm(defaultProject.model.form)
defaultProject.view.getForm()
defaultProject.bindAll()
