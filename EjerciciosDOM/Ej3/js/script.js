const buttonAdd = document.getElementById("buttonAdd");
const container = document.getElementById("container");
const inputParagraph = document.getElementById("inputParagraph");

buttonAdd.addEventListener("click", () => {
  container.innerHTML +='<p>' + inputParagraph.value + '</p>';
});
