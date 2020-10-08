import './sass/main.scss'
import { AppController } from './AppController'
import { AppModel } from './AppModel'
import { AppView } from './AppView'

const app = new AppController(new AppModel(), new AppView())

// Create a default project. It cannot be deleted as it acts as a "Home Page".
app.handleAddProject('Default')
document.querySelector('.btn--delete').remove()
