import checkComplete from "./check-complete.js";

  const titleTask = (text) => {

    const element = document.createElement("span");

    element.classList.add("task");

    element.innerText = text;

    return element;
  }

  const taskContent = (title) => { 

    const element = document.createElement("div");

    element.appendChild(checkComplete());

    element.appendChild(titleTask(title));

    return element
  }

export default taskContent;