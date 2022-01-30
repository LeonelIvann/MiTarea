let nvTarea = document.getElementById("userInput");
let container = document.getElementById("container-tbl");
let btnSend = document.getElementById("enter");
let miForm = document.getElementById("formulario");

let tareas = JSON.parse(localStorage.getItem('tareas')) || [];  // Almacenamiento 

miForm.addEventListener("submit", validarForm);

window.onload = function () {
  var storageCantidad = JSON.parse(localStorage.getItem("tareas"));
  if (storageCantidad && Object.keys(storageCantidad).length > false) {
    verificaLocalStorage();
  } else {
    console.log("No hay tareas por hacer");
  }
}

function actualizarLista() {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

function eliminarT(index) {
  tareas.splice(index, 1);
  actualizarLista();
}

function endTarea(event) {
  this.event.target.parentElement.parentElement.remove();
  console.log("Elemento html eliminado");
  actualizarLista();
  eliminarT();
}

function tareasPendientes() {
  let datos = JSON.parse(localStorage.getItem('tareas'));   
  for(dato of datos) {
    const NUEVA_TAREA = document.createElement("tr"); 
  
    NUEVA_TAREA.innerHTML = 
                  `<ul>
                    <li class="li"> <p id="nuevaTarea">${datos}</p> </li>
                    <button id="dataEnd" class="btn-enter" onClick="endTarea()">
                      <span class="material-icons chk-c" >✔️</span>
                    </button>
                  </ul>`;
    container.appendChild(NUEVA_TAREA);
  }
  actualizarLista()
}

let tareaIngresada = document.getElementById("userInput").value;
function addToLocalStorage() {
  tareas.push(nvTarea.value);
}

function addTarea() {  // Funcion y Evento 'onClick' para mostrar la nueva tarea en el html.
  const NUEVA_TAREA = document.createElement("tr"); 
  NUEVA_TAREA.innerHTML = 
                `<ul>
                  <li class="li"> <p id="nuevaTarea">${nvTarea.value}</p> </li>
                  <button id="dataEnd" class="btn-enter" onClick="endTarea()">
                    <span class="material-icons chk-c" >✔️</span>
                  </button>
                </ul>`;
  container.appendChild(NUEVA_TAREA);
  addToLocalStorage();
  actualizarLista();
}



// Verificamos si tenemos elementos en el localStorage, si tenemos ejecuta la funcion tareasPendientes para mostrarla.
function verificaLocalStorage() {
    console.log("Cuentas con", localStorage.length + " " + "Tarea pendiente");
    tareasPendientes();
}

function validarForm(e) {   // Evitamos el refresh del formulario y con un if verificamos qué el input tiene un dato ingresado
  e.preventDefault();       // Si no tiene datos, arrojará un alert.
  if(nvTarea.value === ''){
    console.log("¡No hay tareas ingresada, prueba escribiendo algo!");
    alert("¡Siempre hay algo para hacer, intenta agregando una tarea!");
  } else {
    addTarea();             // Si hay datos, ejecutará la función addTarea.
  }
}