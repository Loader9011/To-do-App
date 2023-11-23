const saveBtn = document.getElementById("saveBtn");
const taskToAdd = document.getElementById("inputTask");
const taskList = document.getElementById("todo-list");
const clearBtn = document.getElementById("clearBtn");

window.onload = isTaskListEmpty();


taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
})

clearBtn.addEventListener("click", function(e){
    const checkedItems = Array.from(document.getElementsByClassName("checked"));
    checkedItems.forEach(item => {
        item.remove();
    });
    isTaskListEmpty();
    saveData();
})


function addTask() {
    isTaskListEmpty();
    if(taskToAdd.value !== ''){
        let li = document.createElement("li");
        li.innerHTML = taskToAdd.value;
        taskList.appendChild(li);
        saveData();
    }
    else{
        alert("There is no task to do!");
    }
}

function isTaskListEmpty(){
    if(document.querySelectorAll("li").length == 0){
        clearBtn.classList.toggle("hidden");
    }
}


function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function setData(){
    taskList.innerHTML = localStorage.getItem("data");
    isTaskListEmpty();
}
setData();