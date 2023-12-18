const tasks = [];
const form = document.querySelector(".task-form");

// grab form input values which will be used in task object creation
function formInputs() {
  const title = document.querySelector(".title").value;
  const description = document.querySelector(".description").value;
  const dueDate = document.querySelector(".dueDate").value;
  const priority = document.querySelector(".priority").value;

  return { title, description, dueDate, priority };
}

// function that creates task and store it in tasks array
function createTask() {
  let task = formInputs();
  tasks.unshift(task);
}

// listen for submit and invoke task Object creation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  createTask();
});

export default tasks;
