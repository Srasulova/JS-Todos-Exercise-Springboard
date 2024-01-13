const newTaskForm = document.querySelector(".newTaskForm");
const newTask = document.querySelector("#newTaskInput");
const taskList = document.querySelector(".taskList");
const addTaskBtn = document.querySelector(".addTaskBtn");

// this code was written by me, with searching and asking question from ChatGPT
document.addEventListener("DOMContentLoaded", function () {
  const storedTaskArr = JSON.parse(localStorage.getItem("tasks"));
  if (storedTaskArr) {
    storedTaskArr.forEach((storedTask) => {
      const taskItem = document.createElement("li");
      taskItem.innerText = storedTask;

      const removeBtn = document.createElement("button");
      removeBtn.innerText = "X";
      removeBtn.addEventListener("click", function () {
        taskList.removeChild(taskItem);
        updateLocalStorage();
      });

      taskItem.appendChild(removeBtn);
      taskList.appendChild(taskItem);
    });
  }
});

newTaskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const listItem = document.createElement("li");
  listItem.innerText = newTask.value;

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "X";
  removeBtn.addEventListener("click", function () {
    taskList.removeChild(listItem);
    updateLocalStorage();
  });

  listItem.appendChild(removeBtn);
  taskList.appendChild(listItem);
  newTaskForm.reset();
  updateLocalStorage();
});

function updateLocalStorage() {
  const allTasks = document.querySelectorAll(".taskList li");
  const taskArray = Array.from(allTasks).map((task) => task.innerText);
  localStorage.setItem("tasks", JSON.stringify(taskArray));
}

// Below code was totally refactored by ChatGPT suggesting more modular approach. I would struggle to write it this was by myself.

// document.addEventListener("DOMContentLoaded", function () {
//   const storedTaskArr = JSON.parse(localStorage.getItem("tasks"));
//   if (storedTaskArr) {
//     storedTaskArr.forEach((storedTask) => {
//       const taskItem = createTaskItem(storedTask);
//       taskList.appendChild(taskItem);
//     });
//   }
// });

// newTaskForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const listItem = createTaskItem(newTask.value);
//   taskList.appendChild(listItem);
//   newTaskForm.reset();
//   updateLocalStorage();
// });

// function createTaskItem(taskText) {
//   const listItem = document.createElement("li");
//   listItem.innerText = taskText;

//   const removeBtn = createRemoveButton(listItem);
//   listItem.appendChild(removeBtn);

//   listItem.addEventListener("click", function () {
//     toggleTaskCompletion(listItem);
//   });

//   return listItem;
// }

// function createRemoveButton(listItem) {
//   const removeBtn = document.createElement("button");
//   removeBtn.innerText = "X";
//   removeBtn.addEventListener("click", function () {
//     taskList.removeChild(listItem);
//     updateLocalStorage();
//   });
//   return removeBtn;
// }

// function toggleTaskCompletion(listItem) {
//   if (listItem.style.textDecoration === "line-through") {
//     listItem.style.textDecoration = "";
//   } else {
//     listItem.style.textDecoration = "line-through";
//   }
//   updateLocalStorage();
// }

// function updateLocalStorage() {
//   const allTasks = document.querySelectorAll(".taskList li");
//   const taskArray = Array.from(allTasks).map((task) => task.innerText);
//   localStorage.setItem("tasks", JSON.stringify(taskArray));
// }
