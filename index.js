const newTaskForm = document.querySelector(".newTaskForm");
const newTask = document.querySelector("#newTaskInput");
const taskList = document.querySelector(".taskList");
const addTaskBtn = document.querySelector(".addTaskBtn");

// document.addEventListener("DOMContentLoaded", function () {
//   const storedTaskArr = JSON.parse(localStorage.getItem("tasks"));
//   if (storedTaskArr) {
//     storedTaskArr.forEach((storedTask) => {
//       console.log(storedTask);
//       const taskItem = document.createElement("li");
//       taskItem.innerHTML = storedTask;
//       taskList.appendChild(taskItem);
//       console.log(taskItem);
//     });
//   }
// });

newTaskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const listItem = document.createElement("li");
  listItem.innerText = newTask.value;
  listItem.addEventListener("click", function () {
    if (listItem.style.textDecoration === "line-through") {
      listItem.style.textDecoration = "";
    } else {
      listItem.style.textDecoration = "line-through";
    }
  });
  updateLocalStorage();

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
  const taskArray = Array.from(allTasks).map((task) => task.outerHTML);
  localStorage.setItem("tasks", JSON.stringify(taskArray));
}
