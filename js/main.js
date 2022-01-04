const nvTarea = document.getElementById("userInput");
const container = document.getElementById("container-tbl");
const btnSend = document.getElementById("enter");

let miForm = document.getElementById("formulario");
miForm.addEventListener("submit", validarForm);

function validarForm(e) {
  e.preventDefault();
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
  console.log("Elemento html agregado");
}

btnSend.addEventListener("click", addTarea);
function endTarea(event) {
  this.event.target.parentElement.parentElement.remove();
  console.log("Elemento html eliminado");
}


let data = localStorage.getItem("data");
let bookData = data ? JSON.parse(data) : []

document.getElementById('enter').addEventListener('click', addNewBook)

function Book(Tarea, Fondo){
  this.nvTarea = Tarea
}

function addNewBook() {
  let book = new Book(nvTarea.value);
  bookData.push(book);
  localStorage.setItem('data', JSON.stringify(bookData));
}

console.log(localStorage);