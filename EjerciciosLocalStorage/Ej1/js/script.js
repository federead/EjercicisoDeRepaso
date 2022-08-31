const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

buttonText.addEventListener("click", (evt) => {
  // Si tenemos texto ingresado en el input, lo guardamos en el localStorage
  if (inputText.value) localStorage.setItem("text", inputText.value);
});

// Escribe el código a continuación
if (localStorage.getItem("text")) {
  alert(localStorage.getItem("text"));
}
else {
  alert("Por favor ingrese un texto");
};