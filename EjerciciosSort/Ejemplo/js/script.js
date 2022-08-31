// Array con Strings
const myStringArray = ["Dato1", "Alo", "Programar", "filosofia", "3", "a"];

// El método sort por defecto ordena los Strings de forma ascendente
console.log(JSON.stringify(myStringArray.sort()));

// Podemos alterar el funcionamiento por defecto del método sort si le proveemos una función de comparación
console.log(
  JSON.stringify(myStringArray.sort(
    (
      a /* Primer elemento a comparar */,
      b /* Segundo elemento a comparar */
    ) => {
      if (b < a) return -1;
      if (b > a) return 1;

      // Por defecto se devuelve 0 cuando son iguales (no se cambian de lugar)
      return 0;
    }
  ))
);

// Ordenado de la misma manera que en el sort por defecto:
console.log(
  JSON.stringify(myStringArray.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }))
);

// El método sort es bueno para ordenar números y strings, pero su uso más potente es ordenando registros (objetos) utilizando algún campo para ello
const myObjectArray = [
  { name: "Pepe", lastname: "Gomez" },
  { name: "Juan", lastname: "Andres" },
  { name: "Roman", lastname: "Garcia" },
  { name: "Pepe", lastname: "Amigo" },
  { name: "Alfredo", lastname: "Franco" },
];

// Mostramos el array tal cual está:
console.log("\n\nElementos sin ordenar: ");
/* Utilizamos forEach para recorrer el array y mostrar los elementos. Más info en https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach */
myObjectArray.forEach((value) => {
  console.log(`${value.name} ${value.lastname}`);
});

// Mostramos el array ordenado alfabéticamente según campo "name"
console.log("\n\nElementos ordenados por nombre: ");
myObjectArray
  .sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })
  .forEach((value) => {
    console.log(`${value.name} ${value.lastname}`);
  });

// Mostramos el array ordenado alfabéticamente a la inversa según campo "name"
console.log("\n\nElementos ordenados por nombre a la inversa: ");
myObjectArray
  .sort((a, b) => {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
  })
  .forEach((value) => {
    console.log(`${value.name} ${value.lastname}`);
  });

// Mostramos el array ordenado alfabéticamente según campo "lastname"
console.log("\n\nElementos ordenados por apellido: ");
myObjectArray
  .sort((a, b) => {
    if (a.lastname < b.lastname) return -1;
    if (a.lastname > b.lastname) return 1;
    return 0;
  })
  .forEach((value) => {
    console.log(`${value.name} ${value.lastname}`);
  });

// Mostramos el array ordenado alfabéticamente a la inversa según campo "lasname"
console.log("\n\nElementos ordenados por apellido a la inversa: ");
myObjectArray
  .sort((a, b) => {
    if (a.lastname < b.lastname) return 1;
    if (a.lastname > b.lastname) return -1;
    return 0;
  })
  .forEach((value) => {
    console.log(`${value.name} ${value.lastname}`);
  });
