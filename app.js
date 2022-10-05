const taskTtitle = document.getElementById(`task-title`)

taskTtitle.style.background = `#333`
taskTtitle.style.color = `#FFF`
taskTtitle.style.padding = `15px`
//taskTtitle.style.display = `none`

taskTtitle.textContent = `My Tasks`
taskTtitle.innerText = `My favorite tasks`
taskTtitle.innerHTML = `<span style="color : red">My Tasks</span>`

let li = document.querySelector(`li`)
li = document.querySelector(`li:last-child`)
li = document.querySelector(`li:nth-child(even)`)
li = document.querySelector(`li:nth-child(odd)`)

const oddli = document.querySelectorAll(`li:nth-child(odd)`)

//for(let i = 0; i < 2; i++){
//    oddli[i].style.background = `#ddd`
//}

/*oddli.forEach((li) => {li.style.background = `#ddd`})

 */
const list = document.querySelector(`ul`)

console.log(list)


