export class AppView {
  constructor () {
    // Form to create new projects
    this.projectInput = document.querySelector('.add--project [name="name"]')
    this.projectSubmit = document.querySelector('.add--project .btn--submit')

    // Sort tasks
    this.sortTitle = document.querySelector('#sort-title')
    this.sortDescription = document.querySelector('#sort-description')
    this.sortDate = document.querySelector('#sort-date')
    this.sortPriority = document.querySelector('#sort-priority')

    // Filter tasks

    // Toggle Navigation
    this.navBtn = document.querySelector('[data-toggle="nav"]')

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
}
