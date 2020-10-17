import './sass/main.scss'
import { AppController } from './AppController'
import { AppModel } from './AppModel'
import { AppView } from './AppView'
import { TodoListController } from './TodoListController'
import { TodoListModel } from './TodoListModel'
import { TodoListView } from './TodoListView'
import { ProjectController } from './ProjectController'
import { ProjectModel } from './ProjectModel'
import { ProjectView } from './ProjectView'
import { Todo } from './Todo'

const app = new AppController(new AppModel(), new AppView())

// On the first use, creates a default project and samples
if (!localStorage.projects) {
  // Create a default project. It cannot be deleted as it acts as a "Home Page".
  app.handleAddProject('Default')
  document.querySelector('.btn--delete').remove()

  // Add a tutorial and a few samples
  app.model.projects[0].handleEditTodoList('1', 'Tutorial')
  app.model.projects[0].model.todoLists[0].handleAddTodo(new Todo(
    'Welcome',
  `Try adding a new task by clicking on "Add Task"!
  You can also add as many sections to your project as you'd like by clicking on "Add Section", and create as many projects as you wish.`))

  app.model.projects[0].handleAddTodoList(new TodoListController(new TodoListModel('Samples', app.model.projects[0].model.id), new TodoListView()))
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

/* On all the other uses:
    - Load the localStorage
    - Create nav buttons for each project
    - Render the default project
*/
} else {
  let tempStorage = [...app.model.projects]

  localStorage.clear()

  app.model.projects = []

  for (const project of tempStorage) {
    const todoProject = new ProjectController(new ProjectModel(project.model.name), new ProjectView(ProjectModel.counter))
    app.model.addProject(todoProject)
    app.displayProject(todoProject)
    app.view.renderBtn(todoProject.model.name, todoProject.model.id)
    document.querySelector(`[data-project="project-${todoProject.model.id}"]`).addEventListener('click', () => app.handleNavClick(todoProject))

    for (const todoList of project.model.todoLists) {
      const projectTodoList = new TodoListController(new TodoListModel(todoList.model.name, todoList.model.projectId), new TodoListView())
      todoProject.handleAddTodoList(projectTodoList)

      for (const todo of todoList.model.todos) {
        projectTodoList.handleAddTodo(new Todo(todo.title, todo.description, todo.date, todo.priority))
      }
    }
  }
  tempStorage = {}
  app.handleHome()
}
