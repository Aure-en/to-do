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
    this.priorityBtn = document.querySelectorAll('[data-filter^="priority"]')

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

  bindAddProject (handler) {
    this.projectSubmit.addEventListener('click', () => {
      handler(this._projectName)
      this._resetInput()
    })
  }

  bindToggle (handler) {
    this.toggleBtn.forEach(toggleBtn => toggleBtn.addEventListener('click', handler))
  }

  bindNavToggle (handler) {
    this.navBtn.addEventListener('click', handler)
  }

  bindPriority (handler) {
    this.priorityBtn.forEach(priorityBtn => priorityBtn.addEventListener('click', (event) => handler(event.target.dataset.filter.slice(9))))
  }
}
