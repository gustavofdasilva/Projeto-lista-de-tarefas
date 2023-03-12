/*import anime from '/anime-master/lib/anime.es.js';*/
let addButton = document.getElementById("button")
let titleArea = document.getElementById("title")
let aboutArea = document.getElementById("about")
let tasksArea = document.getElementById("tasks")
let noTask = document.getElementById("no-task")

let tasks = document.getElementsByClassName(`task`)
let titles = document.getElementsByClassName(`titles`)
let abouts = document.getElementsByClassName(`abouts`)
let checkboxes = document.getElementsByClassName(`check`)
/*
let spawnAnimation = anime ({
    targets: tasks,
    keyframes: [
        {top: '0px',
        visibility: 'hidden'},
        {top: '-100px',
        visibility: 'visible'}
    ]

})
   */ 
let counter = 0

function addTask() {
    if(!(titleArea.value == "" || aboutArea.value == "")) {
        const task = document.createElement("section")
            task.setAttribute("class","task")
            task.style.animation = "spawn 1s linear"
        const textArea = document.createElement("section")
        const title = document.createElement("h2")
            title.innerText = titleArea.value
            title.setAttribute("class",`titles ${counter}`)
        const about = document.createElement("p")
            about.innerText = aboutArea.value
            about.setAttribute("class",`abouts ${counter}`)
        const check = document.createElement("input")
            check.setAttribute("type","checkbox")
            check.setAttribute("id","check")
            check.setAttribute("class",`check ${counter}`)
            check.setAttribute("onclick","taskDone(this.className)")

        task.appendChild(textArea)
        textArea.appendChild(title)
        textArea.appendChild(about)
        task.appendChild(check)

        tasksArea.appendChild(task)
        
        titleArea.value = ""
        aboutArea.value = ""
        titleArea.style.borderColor = "#00685f"
        aboutArea.style.borderColor = "#00685f"
        counter++

        if(titles.length == 0) {
            noTask.style.display = 'block'
        } else {
            noTask.style.display = 'none'
        }
        
    } else { 
        
    
        if (titleArea.value == "") {
            titleArea.style.borderColor = "#FF000066"
        }
        if (aboutArea.value == "") {
            aboutArea.style.borderColor = "#FF000066"
        }
    }
}

function taskDone(className) {
    for(let i = 0 ; i < checkboxes.length; i++) {
        let checkbox = checkboxes.item(i)
        let title = titles.item(i)
        let about = abouts.item(i)
        let task = tasks.item(i)

        if(checkbox.checked == true) {
            title.style.textDecoration = "line-through"
            about.style.textDecoration = "line-through"
            title.style.color = "#F0E3CA55"
            about.style.color = "#F0E3CA55"
            task.style.backgroundColor = "#1B1A1755"
            task.style.borderColor = "#00685f55"
            checkbox.style.backgroundColor = "#00685f55"
            checkbox.style.borderColor = "#00685f00"
        } else {
            title.style.textDecoration = "none"
            about.style.textDecoration = "none"
            title.style.color = "#F0E3CA"
            about.style.color = "#F0E3CA"
            task.style.backgroundColor = "#1B1A17"
            task.style.borderColor = "#00685f"
            checkbox.style.backgroundColor = "#1B1A17"
            checkbox.style.borderColor = "#00685fCC"
        }
    }
}
/*
anime({

});*/