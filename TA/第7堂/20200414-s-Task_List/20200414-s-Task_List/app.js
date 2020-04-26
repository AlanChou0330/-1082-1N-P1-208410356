// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }
  const li = document.createElement('li');
  li.className = 'collection-item';
  // console.log(document.createTextNode(taskInput.value));
  li.appendChild(document.createTextNode(taskInput.value));
  console.log(li);

  const link = document.createElement('a');
  taskList.appendChild(li);
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  taskList.value = '';
  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  // console.log(e.target);
  // console.log(e.target.parentElement);
  // console.log(e.target.parentElement.classList);
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  // console.log(text);
  console.log(document.querySelectorAll('.collection-item'));
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
