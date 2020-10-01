export class Todo {
  constructor (title, description, date, priority, project, section) {
    this.title = title
    this.description = description
    this.date = date
    this.priority = priority
    this.project = project
    this.section = section
  }
}

export class Project {
  constructor (name, index) {
    this.name = name
    this.index = index
  }
}

export class Section {
  construction (name, project) {
    this.name = name
    this.project = project
  }
}
