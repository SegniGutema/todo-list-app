import tasks from "./createTask";

const container = document.querySelector(".container");
tasks.forEach((task) => {
  let div = document.createElement("div");
  div.classList.add("task");
  div.innerHTML = `
    <div>${task.title}</div>
    <div>
        <button class="task-details">Details</button>
        <button class="edit-task">Edit</button>
        <button class="remove-task">Remove</button>

    </div>

    `;
  container.appendChild(div);
});
