import btnIcon from "./components/delete-icon.js";
import taskContent from "./components/task-content.js";

(() => {
  const btn = document.querySelector("[data-form-btn]");

  const createTask = (e) => {
    e.preventDefault();

    const input = document.querySelector("[data-form-input]");

    const tasks = document.querySelector("[data-tasks");

    const task = document.createElement("li");

    task.classList.add("card");

    task.appendChild(taskContent(input.value));
    
    task.appendChild(btnIcon());

    tasks.appendChild(task);
  };

  btn.addEventListener("click", createTask);
})();
