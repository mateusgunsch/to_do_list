const inputBox = document.getElementById("inputBox")
const listContainer = document.getElementById("listContainer")

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!")
    } else {
        let li = document.createElement("li")
        li.innerText = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData()
}

listContainer.addEventListener("click", function(ev) {
    if(ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked")
        saveData()
    }
    else if(ev.target.tagName === "SPAN") {
        ev.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showSavedTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showSavedTask()