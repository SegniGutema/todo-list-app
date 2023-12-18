const tasks = [];

function formInputs() {
  const title = document.querySelector("title").value;
  const description = document.querySelector("description").value;
  const dueDate = document.querySelector("dueDate").value;
  const priority = document.querySelector("priority").value;

  return { title, description, dueDate, priority };
}

// class Task {
//   constructor(title, description, dueDate, priority) {
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;
//   }
// }

function createTask() {
  let task = formInputs();
  tasks.unshift(task);
}
