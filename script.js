const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('tasks');
const searchInput = document.getElementById('search-input');

let tasks = [];

function showTasks() {
  taskList.innerHTML = '';
  const search = searchInput.value.toLowerCase();


  tasks.forEach((task, index) => {
    if (task.text.toLowerCase().includes(search)) {
      const li = document.createElement('li');


      const span = document.createElement('span');
      span.textContent = task.text;
      span.contentEditable = true;
      span.addEventListener('blur', () => {
        tasks[index].text = span.textContent;
        showTasks();
      });


      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = () => {
        tasks.splice(index, 1);
        showTasks();
      };


      const wrapper = document.createElement('div');
      wrapper.className = 'task-buttons';
      wrapper.appendChild(deleteBtn);


      li.appendChild(span);
      li.appendChild(wrapper);
      taskList.appendChild(li);
    }
  });
}

taskForm.onsubmit = (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (text !== '') {
    tasks.push({ text });
    taskInput.value = '';
    showTasks();
  }
};

searchInput.oninput = showTasks;

showTasks();




