const inputTexto = document.querySelector('#userInput');
const form = document.querySelector('#formulario');
const listElem = document.querySelector('#container-tbl');
const buttonElem = document.querySelector('#to-do-list button');

const almacenamiento = JSON.parse(localStorage.getItem('Tareas')) || [];  // LocalStorage de las tareas ingresadas

function actualizarLista(){
  listElem.innerHTML = '';

  for (const key in almacenamiento) {  // Creamos el cuerpo html qué tendrá la tarea en el display (container-tbl)
    
    const tr = document.createElement('tr');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const p = document.createElement('p');
    li.setAttribute("class","li")

    const span = document.createElement('span');
    span.setAttribute("class", "container-text")
    p.innerText = almacenamiento[key];

    const button = document.createElement('button');
    button.innerText = '✔️';
    button.setAttribute('key',key); 
    button.classList.add('delete');

    tr.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(button);
    li.appendChild(p);
    button.appendChild(span);
    listElem.appendChild(tr);
  }

  localStorage.setItem('Tareas',JSON.stringify(almacenamiento));
}

function addToList(value){
  if (value === '') return;  // En caso de no haya un valor ingresado, hará el return sin agregar nada al localStorage y por ende al html

  almacenamiento.push(value);

  actualizarLista();
  inputTexto.value = '';
  inputTexto.focus();
}

function eliminar(key){    
  almacenamiento.splice(Number(key),1);

  actualizarLista();
  inputTexto.value = '';
  inputTexto.focus();
}


form.addEventListener('submit', e => {  // preventDefault para el formulario, evitamos el refresco de la página  y ejecutamos la funcion de linea 60 > 39
  e.preventDefault();
  addToList(inputTexto.value);
  console.log("Tarea agregada");
});

document.addEventListener('click', e => { // Evento para el button, para eliminar la tarea cuando se escuche el 'click', ejecuta la funcion linea 67 > 49
  const el = e.target;
  if (el.classList.contains('delete')){ 
    eliminar(el.getAttribute('key'));
    console.log("Tarea eliminada");
  }
});

function verCantidad(){
  localStorage.length()
}

window.onload = function () { // Verificamos si tenemos tareas pendientes para realizar a partir de la posicion 0, si no hay ejecuta el log de linea 81
  let cantStorage = localStorage
  if (cantStorage && Object.keys(cantStorage).length > 0) {
    console.log("Tienes", almacenamiento.length + " " + "elementos sin hacer");
  } else {
    console.log("Siempre hay algo para hacer!")
  }
};

actualizarLista();