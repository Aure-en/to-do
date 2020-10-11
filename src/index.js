import './sass/main.scss'
import { AppController } from './AppController'
import { AppModel } from './AppModel'
import { AppView } from './AppView'
import { TodoListController } from './TodoListController'
import { TodoListModel } from './TodoListModel'
import { TodoListView } from './TodoListView'
import { Todo } from './Todo'

const app = new AppController(new AppModel(), new AppView())

// Create a default project. It cannot be deleted as it acts as a "Home Page".
app.handleAddProject('Default')
document.querySelector('.btn--delete').remove()

// Add a tutorial and a few samples
app.model.projects[0].handleEditTodoList('1', 'Tutorial')
app.model.projects[0].model.todoLists[0].handleAddTodo(new Todo(
  'Welcome',
  `Try adding a new task by clicking on "Add Task"!
  You can also add as many sections to your project as you'd like by clicking on "Add Section", and create as many projects as you wish.`))

app.model.projects[0].handleAddTodoList(new TodoListController(new TodoListModel('Samples'), new TodoListView()))
app.model.projects[0].model.todoLists[1].handleAddTodo(new Todo(
  'John\'s Birthday',
  'Meet at John\'s house at 19. Don\'t forget to bring his gift.',
  `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
  'high'
))

app.model.projects[0].model.todoLists[1].handleAddTodo(new Todo(
  'Dinner with Chloe',
  'Reservation at Rhodes Restaurant, at 20.',
  `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() + 2}`,
  'med'
))

app.model.projects[0].model.todoLists[1].handleAddTodo(new Todo(
  'Dentist',
  'It won\'t be that bad. Probably.',
  `${new Date().getFullYear()}-${new Date().getMonth() + 2}-${new Date().getDate() + 5}`,
  'low'
))

app.model.projects[0].model.todoLists[1].handleAddTodo(new Todo(
  'Start working out',
  'I\'ll start... Tomorrow. Or next year.'
))
