// Array con números
const numberArray = [34, -23, 12, 900, 48, -100, 123];
// Muestro en consola el array filtrado que contiene números negativos:
console.log(
  numberArray.filter(
    /* Pasamos por parámetro la función que devuelve el booleano */ (value) =>
      value < 0
  )
);
// El código anterior es exactamente equivalente a:
// console.log(
//   numberArray.filter((value) => {
//     return value < 0;
//   })
// );
// console.log(
//   numberArray.filter(function (value) {
//     return value < 0;
//   })
// );

// Array de Strings
const myStringArray = [
  "Dato1",
  "Alo",
  "Programar",
  "filosofia",
  "3",
  "a",
  "Dedo",
];
// Muestro en consola los strings que contegan la letra "D"
console.log(myStringArray.filter((value) => value.includes("D")));

// Array de registros (objetos)
const myObjectArray = [
  { name: "Pepe", lastname: "Gomez" },
  { name: "Juan", lastname: "Andres" },
  { name: "Roman", lastname: "Garcia" },
  { name: "Pepe", lastname: "Amigo" },
  { name: "Alfredo", lastname: "Franco" },
];
// Mostramos en consola los datos de las personas que se llaman "Pepe"
console.log(myObjectArray.filter((value) => value.name === "Pepe"));
