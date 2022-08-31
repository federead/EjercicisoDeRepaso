const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

buttonText.addEventListener("click", () =>{
    if(inputText.value){
        localStorage.setItem("text", inputText.value);
    } else {
        alert("Ingrese un texto")
    }
})