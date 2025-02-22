document.getElementById("addTask").addEventListener("click", function () {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let li = document.createElement("li");
        li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    }
});

function deleteTask(button) {
    button.parentElement.remove();
}
