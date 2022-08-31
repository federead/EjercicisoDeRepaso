// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  console.log (dataArray)
  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  }
}

async function cargarDatos(url) {   //DECLARAMOS una funcion para traer los datos utilizando fetch
  let response = await fetch(url);    //recibe la respuesta del fetch
  if (response.ok) {                  //si la respuesta es OK (true)
    let contenidos = await response.json();   //el "await.json" contruye el objeto en notacion json
    showData(contenidos.students);          //llamamos a la funcion showData con el parametro correspondiente 
  } else {
    alert("HTTP error: " + response.status);
  }
}
cargarDatos(DATA_URL) //LLAMAMOS a la funcion cargarDatos con la url correspondiente como parametro


