import { Todo } from './todo'
import { todo } from './createElements'
import './sass/main.scss'

const newTodo = new Todo('title', 'description', 'date', 'priority', 'project1')
const todoElem = todo(newTodo)
document.body.append(todoElem)
