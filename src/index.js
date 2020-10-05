import './sass/main.scss'
import { ProjectController } from './ProjectController'
import { ProjectModel } from './ProjectModel'
import { ProjectView } from './ProjectView'

import { AppController } from './AppController'
import { AppModel } from './AppModel'
import { AppView } from './AppView'

const app = new AppController(new AppModel(), new AppView())

const bigProject = new ProjectController(new ProjectModel('big big'), new ProjectView(ProjectModel.counter))
bigProject.view.renderForm(bigProject.model.form)
bigProject.view.getForm()
bigProject.bindAll()
