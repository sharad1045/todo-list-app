const input = document.getElementById("taskInput");
const button = document.getElementById("addButton");
const taskList = document.getElementById("list");

function addTask(){
    const taskText = input.value;
    if(taskText === ""){
        alert("Warning: It is Empty");
        return;
}

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click" ,function() {
        li.remove();
    });
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";
}
    button.addEventListener("click", addTask);
    input.addEventListener("keydown", function(event) {
        if(event.key === "Enter"){
            addTask();
        }

});
