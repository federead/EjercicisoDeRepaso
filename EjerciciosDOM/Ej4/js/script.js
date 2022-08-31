const DATA = [
  { name: "Juan", lastname: "Perez" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Gian", lastname: "Laic" },
  { name: "Fernando", lastname: "Saavedra" },
];
const container = document.getElementById("container");
function agregarParrafo(per) {    //Función que agrega el <p> al <div> de "id=container"
  container.innerHTML += '<p>'+ per.name + ' ' + per.lastname + '</p>';
}
for (const personas of DATA) {    //Recorre el array "DATA" y llama a la función agregarParrafo
  agregarParrafo(personas); 
}


