

const inputField = document.querySelector(".input-task")

function taskFormSubmitHandler(eventObject) {
    eventObject.preventDefault()
    const taskValue = inputField.value
    addTaskToScreen(taskValue)
    inputField.value = ""
    console.log(taskValue)
}


function addTaskToScreen(task){
    const myTasks = document.querySelector(".task-list")

    const list = document.createElement("li")

    list.classList.add("task-section");

    list.innerHTML = `
    <div class="each-task">
        <input class="task-checkbox" type="checkbox" />
        <span class="task-text"> ${task} </span>
        <div class="task-action-div">
            <button id="edit-btn" class="task-action"> Edit Task </button>
            <button id="delete-btn" class="task-action"> Delete Task </button>
        </div>
    </div>
    `
    myTasks.appendChild(list)
    addListenersToDeleteButtons()
    addListenersToEditButtons()
}

const taskForm = document.querySelector(".task-form")
taskForm.addEventListener("submit", taskFormSubmitHandler)


function deleteTask(eventObject) {
    const buttonClicked = eventObject.target;
    const taskItem = buttonClicked.parentNode.parentNode.parentNode;
    taskItem.remove();
  }
   
  function addListenersToDeleteButtons() {
    const buttonCollection = document.querySelectorAll("#delete-btn");
    const lastButton = buttonCollection[buttonCollection.length - 1];
    lastButton.addEventListener("click", deleteTask);
  }



  function addListenersToEditButtons() {
    const buttonCollection = document.querySelectorAll("#edit-btn");
    const lastButton = buttonCollection[buttonCollection.length - 1];
    lastButton.addEventListener("click", editTask);
  }


function editTask (eventObject){
    const editBtn = eventObject.target
     const span  = editBtn.parentNode.previousElementSibling
      span.contentEditable = true;
      span.style.border = "2px solid black"
      span.style.padding = "5px 10px"
      const li = editBtn.parentNode
      console.log(li)
      const saveBtn = document.createElement("button")
      saveBtn.textContent = "save"
      saveBtn.setAttribute ("class", "saveBtn")
      li.insertBefore(saveBtn, editBtn)
      li.removeChild(editBtn)
    
    saveBtn.addEventListener("click", () => {
      span.contentEditable = false
      span.style.border = "none"
      li.insertBefore(editBtn, saveBtn)
      li.removeChild(saveBtn)
    })
}


