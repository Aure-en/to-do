import './sass/main.scss'
import { TodoListController } from './TodoListController'
import { TodoListModel } from './TodoListModel'
import { TodoListView } from './TodoListView'
import { Todo } from './Todo'

const generalList = new TodoListController(new TodoListModel(), new TodoListView())

generalList.model.addTodo(
  new Todo('Dentist', 'Appointment at 2PM', '', 'high', 'none', 'none', '1')
)

console.log(generalList.model.todos)
generalList.view.renderAll(generalList.model.todos)
