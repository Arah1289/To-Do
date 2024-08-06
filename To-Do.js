let list = document.querySelector("ul");
let textInput = document.querySelector("form input:first-child");
let formSubmit = document.querySelector("form input:last-child");

if (window.localStorage.length) {
    for(let i = 0; i < window.localStorage.length; i++) {
        let value = window.localStorage[localStorage.key(i)];
        let taskId  = window.localStorage.key(i);
        createTask(value, taskId);
    }
}

formSubmit.addEventListener("click" ,(e) => {
    e.preventDefault();
    if(textInput.value) {
        let taskId = `task-id-${(Math.random() * 10000).toFixed()}`;
        localStorage[taskId] = textInput.value;
        createTask(localStorage.getItem(taskId), taskId);
    }
});

function createTask(value, taskId) {
    let taskText = document.createTextNode(value);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    let task = document.createElement("li");
    task.appendChild(taskText);
    task.appendChild(deleteButton);
    list.appendChild(task);

    textInput.value = "";

    deleteTask(deleteButton, taskId);
}

function deleteTask(deleteButton, taskId) {
    deleteButton.addEventListener("click", (e) => {
        localStorage.removeItem(taskId);
        deleteButton.parentElement.remove();
    });
}