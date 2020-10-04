import './sass/main.scss'
import { TodoListController } from './TodoListController'
import { TodoListModel } from './TodoListModel'
import { TodoListView } from './TodoListView'
import { Todo } from './Todo'

import { ProjectController } from './ProjectController'
import { ProjectModel } from './ProjectModel'
import { ProjectView } from './ProjectView'

import { AppController } from './AppController'
import { AppModel } from './AppModel'
import { AppView } from './AppView'

const bigProject = new ProjectController(new ProjectModel('big big'), new ProjectView(ProjectModel.counter))
bigProject.view.renderForm(bigProject.model.form)
bigProject.view.getForm()
bigProject.bindAll()

const app = new AppController(new AppModel(), new AppView())
