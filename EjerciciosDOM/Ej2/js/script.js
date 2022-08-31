document.addEventListener("DOMContentLoaded", function () {
  let parrafillo = document.getElementById("lorem");
  
  document.getElementById("highlight").addEventListener("click", () => {
    parrafillo.className += "highlight"  
  });

});
