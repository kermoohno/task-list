const form = document.querySelector('#add-task')
const taskList = document.querySelector('#task-list')
const deleteTasks = document.querySelector('#delete-tasks')

form.addEventListener('submit', addTask)
taskList.addEventListener('click', deleteTask)
deleteTasks.addEventListener('click', deleteAllTasks)

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

    //save task value to localStorage
    addTaskToLS(taskInput.value)
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

function deleteAllTasks(event) {
    //taskList.innerHTML = ''
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}

function addTaskToLS(task) {
    let tasks
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))

}