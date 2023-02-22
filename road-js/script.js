import {handleClick} from './logic/index.js';
import createTaskElement from './components/task-element.js';

(() => {
  const btn = document.querySelector("[data-form-btn]");

  var taskList = []

  const loadData = () => { 
    taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const list = document.querySelector(".cardsList");

    for(const task of taskList){
      list.appendChild(createTaskElement(task))
    }

  }

  loadData();

  btn.addEventListener("click", handleClick);
})();
