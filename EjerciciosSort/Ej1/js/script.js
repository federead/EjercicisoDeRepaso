// 1. Array de números:
const numberArray = [4, 10, 34, 999, 0, -10000, -999, 58, 2, 4];
// a. Muestra en consola el array ordenado de menor a mayor (ascendente)
console.log(numberArray.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }));

// b. Muestra en consola el array ordenado de mayor a menor (descendente)
console.log(numberArray.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
}));

// 2. Array de String:
const stringArray = ["a", "r", "alo", "www", "internet", "qqq", "bbb"];
// a. Muestra en consola el array ordenado A-Z
console.log(stringArray.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}));

// b. Muestra en consola el array ordenado Z-A
console.log(stringArray.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
}));

// 3. Array de objetos:
const objectArray = [
  { name: "Pepe", lastname: "Gomez", age: 32 },
  { name: "Juan", lastname: "Andres", age: 44 },
  { name: "Nicolas", lastname: "Garcia", age: 22 },
  { name: "Pepe", lastname: "Amigo", age: 15 },
  { name: "Alfredo", lastname: "Franco", age: 255 },
];
// a. Muestra en consola el array ordenado según el campo "age" de mayor a menor (descendente)
console.log("\n\nElementos ordenados por edad de mayor a menor: ");
objectArray
.sort((a, b) => {
  if (a.age < b.age) return 1;
  if (a.age > b.age) return -1;
  return 0;
})
.forEach((value) => {
  console.log(`${value.name} ${value.lastname} ${value.age}`);
});

// b. Muestra en consola el array ordenado según el campo "lastname" de A-Z
console.log("\n\nElementos ordenados por apellido de A-Z: ");
objectArray
.sort((a, b) => {
  if (a.lastname < b.lastname) return -1;
  if (a.lastname > b.lastname) return 1;
  return 0;
})
.forEach((value) => {
  console.log(`${value.name} ${value.lastname} ${value.age}`);
});