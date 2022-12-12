(() => {
const btn = document.querySelector('[data-form-btn]')

const createTask = (e) => {
    e.preventDefault()

    const input = document.querySelector('[data-form-input]')

    const tasks = document.querySelector('[data-tasks')

    const task = document.createElement('li')

    const taskContent = document.createElement('div')

    const titleTask = document.createElement('span')

    task.classList.add('card')

    titleTask.classList.add('task')

    titleTask.innerText = input.value

    taskContent.appendChild(checkComplete())

    taskContent.appendChild(titleTask)

    task.appendChild(taskContent)
    
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>
    `

    tasks.appendChild(task)

}

const checkComplete = () => {
    const i = document.createElement('i')

    i.classList.add('far', 'fa-check-square', 'icon')
    i.addEventListener('click', handleComplete)
    return i
}

btn.addEventListener('click', createTask)

const handleComplete = (event) => {
    const element = event.target

    element.classList.toggle('fas')
    element.classList.toggle('completeIcon')
    element.classList.toggle('far')

}

})()
