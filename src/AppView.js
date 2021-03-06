export class AppView {
  constructor () {
    this.container = document.querySelector('.content')
    this.homeBtn = document.querySelector('.btn--home')
    this.main = document.querySelector('main')
    this.project = document.querySelector('.project__name')

    // Form to create new projects
    this.projectInput = document.querySelector('.add--project [name="name"]')
    this.projectSubmit = document.querySelector('.add--project')

    // Sort tasks
    this.sortTitle = document.querySelector('#sort-title')
    this.sortDescription = document.querySelector('#sort-description')
    this.sortDate = document.querySelector('#sort-date')
    this.sortPriority = document.querySelector('#sort-priority')

    // Filter tasks
    this.displayAllBtn = document.querySelectorAll('[data-filter="all"]')
    this.priorityBtn = document.querySelectorAll('[data-filter^="priority"]')
    this.dateTodayBtn = document.querySelector('[data-filter="date-today"]')
    this.dateUpcomingBtn = document.querySelector('[data-filter="date-upcoming"]')
    this.dateAnytimeBtn = document.querySelector('[data-filter="date-anytime"]')

    // Toggle Navigation
    this.navBtn = document.querySelector('[data-toggle="nav"]')
    this.nav = document.querySelector('.nav')

    // Edit Project Name
    this._temporaryName = ''
    this._changeName()
  }

  // Get new project's name
  get _projectName () {
    return this.projectInput.value
  }

  // Reset Input to create a new project
  _resetInput () {
    this.projectInput.value = ''
  }

  // Render the navigation button linked to the project
  renderBtn (name, id) {
    const li = document.createElement('li')
    li.classList.add('btn--project')
    li.setAttribute('data-project', `project-${id}`)

    const button = document.createElement('button')
    button.classList.add('btn', 'btn--filter')
    button.setAttribute('type', 'button')
    button.setAttribute('data-filter', `project-${id}`)
    button.innerHTML = name

    const closeBtn = document.createElement('button')
    closeBtn.classList.add('btn--delete')
    closeBtn.setAttribute('type', 'button')
    closeBtn.innerHTML = '<i class="fas fa-times"></i>'

    li.append(button, closeBtn)
    document.querySelector('.projects').append(li)
  }

  bindAddProject (handler) {
    this.projectSubmit.addEventListener('submit', (event) => {
      event.preventDefault()
      handler(this._projectName)
      this._resetInput()
    })
  }

  bindDeleteProject (handler) {
    this.nav.addEventListener('click', (event) => {
      if (!event.target.closest('button')) return

      if (event.target.closest('button').classList.contains('btn--delete')) {
        const id = event.target.closest('li').dataset.project.slice(8)
        handler(id)
      }
    })
  }

  // Navigation toggles
  bindToggle (handler) {
    document.body.addEventListener('click', (event) => {
      if (event.target.dataset.toggle) {
        handler(event)
      }
    })
  }

  bindNavToggle (handler) {
    this.navBtn.addEventListener('click', handler)
  }

  // Home page
  bindHome (handler) {
    this.homeBtn.addEventListener('click', handler)
  }

  // Filters
  bindPriority (handler) {
    this.priorityBtn.forEach((priorityBtn) => priorityBtn.addEventListener('click', (event) => handler(event.target.dataset.filter.slice(9))))
  }

  bindDateToday (handler) {
    this.dateTodayBtn.addEventListener('click', handler)
  }

  bindDateUpcoming (handler) {
    this.dateUpcomingBtn.addEventListener('click', handler)
  }

  bindDateAnytime (handler) {
    this.dateAnytimeBtn.addEventListener('click', handler)
  }

  bindDisplayAll (handler) {
    this.displayAllBtn.forEach((displayAllBtn) => displayAllBtn.addEventListener('click', handler))
  }

  // Sort
  bindSortTitle (handler) {
    this.sortTitle.addEventListener('click', () => {
      const projectId = this.project.id
      handler(projectId)
    })
  }

  bindSortDescription (handler) {
    this.sortDescription.addEventListener('click', () => {
      const projectId = this.project.id
      handler(projectId)
    })
  }

  bindSortPriority (handler) {
    this.sortPriority.addEventListener('click', () => {
      const projectId = this.project.id
      handler(projectId)
    })
  }

  bindSortDate (handler) {
    this.sortDate.addEventListener('click', () => {
      const projectId = this.project.id
      handler(projectId)
    })
  }

  // Edit Project Name

  _changeName () {
    this.container.addEventListener('input', (event) => {
      if (event.target.classList.contains('project__name')) {
        this._temporaryName = event.target.innerHTML
      }
    })
  }

  bindChangeName (handler) {
    this.container.addEventListener('focusout', (event) => {
      if (this._temporaryName) {
        handler(event.target.id, this._temporaryName)
        this._temporaryName = ''
      }
    })
  }
}
