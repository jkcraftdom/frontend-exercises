import checkComplete from "./check-complete.js";
import btnIcon from "./delete-icon.js";

  const titleTaskElement = (text) => {

    const element = document.createElement("span");

    element.classList.add("task");

    element.innerText = text;

    return element;
  }

  const taskContentElement = (title) => { 

    const element = document.createElement("div");

    element.appendChild(checkComplete());

    element.appendChild(titleTaskElement(title));

    return element
  }

  const dateTaskElement = (date) => {

    const element = document.createElement("span")

    element.innerText = date

    return element
  }

  const createTaskElement = ({value, dateFormat}) => { 
    const taskElement = document.createElement("li");

    taskElement.classList.add("card");

    taskElement.appendChild(taskContentElement(value));
    
    taskElement.appendChild(dateTaskElement(dateFormat));

    taskElement.appendChild(btnIcon());

    return taskElement
  }


export default createTaskElement;