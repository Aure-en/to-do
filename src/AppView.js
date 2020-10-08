export class AppView {
  constructor () {
    this.container = document.querySelector('.content')
    this.homeBtn = document.querySelector('.btn--home')
    this.main = document.querySelector('main')

    // Form to create new projects
    this.projectInput = document.querySelector('.add--project [name="name"]')
    this.projectSubmit = document.querySelector('.add--project .btn--submit')

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

    // Toggle categories
    this.toggleBtn = document.querySelectorAll('.btn--dropdown')
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
    li.classList.add('btn--project', `project-${id}`)

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
    this.projectSubmit.addEventListener('click', () => {
      handler(this._projectName)
      this._resetInput()
    })
  }

  // Navigation toggles
  bindToggle (handler) {
    this.toggleBtn.forEach((toggleBtn) => toggleBtn.addEventListener('click', handler))
  }

  bindNavToggle (handler) {
    this.navBtn.addEventListener('click', handler)
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
}
