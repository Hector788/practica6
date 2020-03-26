//Del documento html estamos requiriendo el id del formulario llamado formTask
//tambien estamos escuchando un evento de tipo submit que al escucharse se activara la funcion saveTask escrita abajo

document.getElementById('formTask').addEventListener('submit', saveTask);


//Creando funcion saveTask  esta funcion 
function saveTask(e) {
 let title = document.getElementById('title').value;
 let description = document.getElementById('description').value

 const task = {
  title,
  description
 };
 // localStorage nos permite almacenar informacion dentro del navegador y sus metodos
 //JSON.stringify metodo del navegar que nos permite convertir un objeto a tipo string
 //setItem poder almacenar un dato tenemos que darle los 2 parametros el nombre del dato y el valor 
 // localStorage.setItem('tasks', JSON.stringify(task));


 //getItem metodo para obtener el dato que esta guardado en localStorage
 // localStorage.getItem('tasks')
 // JSON.parse metodo para convertir un string a objeto
 // console.log(JSON.parse(localStorage.getItem('tasks')))
 
 
 if (localStorage.getItem('tasks') === null) {
  let tasks = [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

 } else {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
e.preventDefault();
getTasks();
document.getElementById('taskForm').reset();
}


function getTasks() {
 
 let tasks = JSON.parse(localStorage.getItem('tasks'));
 let tasksView = document.getElementById('tasks');
 
 tasksView.innerHTML = '';

 for (let i = 0; i < tasks.length; i++){

  let title = tasks[i].title;
  let description = tasks[i].description;
  tasksView.innerHTML += `<div class="card mb-3">
  <div class="card-body">
  <p>${title}  - ${description}</p>
  <a class="btn btn-danger" onclick="deleteTask('${title}')">DELETE</a>
  </div>
  </div>`
 }
}

function deleteTask(title) {
 let tasks = JSON.parse(localStorage.getItem('tasks'));
 for(let i = 0; i < tasks.length; i++) {
  if (tasks[i].title == title) {
   tasks.splice(i,1);
  }
 }
 localStorage.setItem('tasks',JSON.stringify(tasks));
 getTasks();
}

getTasks();



