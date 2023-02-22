import createTaskElement from "../components/task-element.js";

const clearData = (inputs) => { 
  for(let input of inputs) {
    input.value = "";
  }
}

export const handleClick = (e) => {
  e.preventDefault();

  const input = document.querySelector("[data-form-input]");
  const date = document.querySelector("[data-form-date]");
  const tasks = document.querySelector("[data-tasks]");

  const dateFormat = moment(date.value).format("YYYY/MM/DD")
  const value = input.value

  taskList.push({dateFormat, value});

  localStorage.setItem("tasks", JSON.stringify(taskList));

  const taskElement = createTaskElement(task)

  tasks.appendChild(taskElement);

  clearData([input, date,]);
};