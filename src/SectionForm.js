export class SectionForm {
  constructor (id) {
    this.id = id
  }

  render (container) {
    const form = document.createElement('form')
    form.classList.add('add', 'add--section')
    form.id = `section-form-${this.id}`

    const content = document.createElement('div')
    content.classList.add('add__content', 'add__content--section')

    const labelName = document.createElement('label')
    const name = document.createElement('input')
    name.setAttribute('type', 'text')
    name.setAttribute('name', 'section')
    name.setAttribute('placeholder', 'Section\'s Name')
    labelName.append(name)
    content.append(labelName)

    const finish = document.createElement('div')
    finish.classList.add('add__finish')

    const submitBtn = document.createElement('button')
    submitBtn.setAttribute('type', 'button')
    submitBtn.classList.add('btn', 'btn--submit')
    submitBtn.innerHTML = 'Add Section'

    const cancelBtn = document.createElement('button')
    cancelBtn.setAttribute('type', 'button')
    cancelBtn.classList.add('btn', 'btn--cancel')
    cancelBtn.innerHTML = 'Cancel'

    finish.append(submitBtn, cancelBtn)
    form.append(content, finish)
    container.append(form)
  }
}
