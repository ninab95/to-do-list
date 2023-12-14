document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("form-task");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  const addTaskBtn = document.getElementById("button-submit");

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputText = taskInput.value.trim();

    if (inputText !== '') {
        addTask(inputText);
        taskInput.value = '';
        addTaskBtn.disabled = true;
    }

    
  });

  function updateSubmitButton() {
    const inputText = taskInput.value.trim();

    if (inputText === '') {
        addTaskBtn.disabled = true;
    } else {
        addTaskBtn.disabled = false;
    }
  }

  function addTask(inputText) {
    const oneTask = document.createElement("li");
    oneTask.innerHTML = `
            <input type="checkbox" class="checkbox-input" >
            <p>${inputText}</p>
            <button class="delete-btn">Delete task</button>
        `;
        const deleteBtn = oneTask.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function () {
            taskList.removeChild(oneTask)
        })
    taskList.appendChild(oneTask);
  }

  taskInput.addEventListener("input", updateSubmitButton);

  
});

