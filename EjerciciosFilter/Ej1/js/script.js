// Array extraño
const strangeArray = [
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  undefined,
  "ola ke ase",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  ["Hola mundo!"],
  "b",
];

const showList = (arr) => {
  const container = document.getElementById("list");
  container.innerHTML = "";
  for (let item of arr) {
    container.innerHTML += `<li>${item}</li>`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  showList(strangeArray.filter((value) => typeof value === "string"));
});