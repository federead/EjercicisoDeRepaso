const objectArray = [
  { name: "Pepe", lastname: "Gomez", age: 32 },
  { name: "Juan", lastname: "Andres", age: 44 },
  { name: "Nicolas", lastname: "Garcia", age: 22 },
  { name: "Pepe", lastname: "Amigo", age: 15 },
  { name: "Alfredo", lastname: "Franco", age: 255 },
];
const tableBody = document.getElementById("data");

objectArray.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })
objectArray.forEach((value) => {
    tableBody.innerHTML += `<tr>
      <td>${value.name}</td> 
      <td>${value.lastname}</td> 
      <td>${value.age}</td>
    </tr>`;    
});

