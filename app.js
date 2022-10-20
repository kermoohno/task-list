const form = document.querySelector('#add-task')
const taskList = document.querySelector('#task-list')

form.addEventListener('submit', addTask)
taskList.addEventListener('click', deleteTask)

function addTask(event) {
    // get form input value
    const taskInput = document.querySelector('#task')
    // create li with value and x Link
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = 'collection-item'

    const x = document.createElement('a')
    x.appendChild(document.createTextNode('x'))
    x.setAttribute('href', '#')
    x.className = 'secondary-content'

    li.appendChild(x)

    const ul = document.querySelector('ul')
    ul.appendChild(li)
    // delete input value from form input field
    taskInput.value = ''
    event.preventDefault()
}

function deleteTask(event){
    if (event.target.textContent === 'x'){
        if(confirm('Are you sure to delete this task?')) {
            event.target.parentElement.remove()
        }
    }
}

