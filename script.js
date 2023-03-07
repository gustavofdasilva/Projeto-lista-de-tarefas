let addButton = document.querySelector("#button")
let taskTitle = document.getElementById("title")
let taskAbout = document.getElementById("about")

window.alert(addButton+","+taskTitle+","+taskAbout)
function addTask () {
    let title = taskTitle.value
    let about = taskAbout.value
    window.alert(title,about)
}