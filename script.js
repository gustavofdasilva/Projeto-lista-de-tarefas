let addButton = document.getElementById("button")
let titleArea = document.getElementById("title")
let aboutArea = document.getElementById("about")
let tasksArea = document.getElementById("tasks")
let checkbox = document.getElementsByTagName("input[type=checkbox]")
let counter = 0

function addTask() {
    if(!(titleArea.value == "" || aboutArea.value == "")) {
        const task = document.createElement("section")
            task.setAttribute("id","task")
        const textArea = document.createElement("section")
        const title = document.createElement("h2")
            title.innerText = titleArea.value
        const about = document.createElement("p")
            about.innerText = aboutArea.value
        const check = document.createElement("input")
            check.setAttribute("type","checkbox")
            check.setAttribute("id","check")
            check.setAttribute("class",counter)
            check.setAttribute("onclick","taskDone()")

        task.appendChild(textArea)
        textArea.appendChild(title)
        textArea.appendChild(about)
        task.appendChild(check)

        tasksArea.appendChild(task)
        
        titleArea.value = ""
        aboutArea.value = ""
        counter++
    }
}

function taskDone() {
    for(let i = 0; i < counter ; i++) {
        if(checkbox[i].checked == true) {
            window.alert(checkbox[i])
        }
    }
}