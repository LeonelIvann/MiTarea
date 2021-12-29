const nvTarea = document.getElementById("userInput");
const container = document.getElementById("container-tbl");
const btnSend = document.getElementById("enter");

let miForm = document.getElementById("formulario");
miForm.addEventListener("submit", validarForm);

function validarForm(e) {
  e.preventDefault();
  console.log(" miForm");
}

function addTarea() {
  const NUEVA_TAREA = document.createElement("tr"); 
  NUEVA_TAREA.innerHTML = 
                `<ul>
                  <li class="li"> <p id="nuevaTarea">${nvTarea.value}</p> </li>
                  <button id="dataEnd" class="btn-enter" onClick="endTarea()">
                    <span class="material-icons chk-c" >done</span>
                  </button>
                </ul>`;
  container.appendChild(NUEVA_TAREA);
  console.log(" Nuevo Elemento Agregado "+ " " + NUEVA_TAREA);
}/* 
btnSend.addEventListener("click", addTarea);
function endTarea(event) {
  this.event.target.parentElement.parentElement.remove();
} */

let changeM = document.getElementById('btnModo');
let theme = localStorage.getItem('bg');

function chageBG() { 
    var bodyM = document.body; 
    bodyM.classList.toggle("bodyBlack"); 
} 