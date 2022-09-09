const input = document.getElementById("inputBuscar");
const btn = document.getElementById("btnBuscar");
const contenedor = document.getElementById("contenedor");
let datos = [];

function showDatos() {
  let htmlContentToAppend = "";
  let { collection: { items } } = datos;

  for (let i = 0; i < items.length; i++) {
    
    let title = items[i].data[0].title;
    let date = items[0].data[0].date_created;
    let description = items[0].data[0].description;
    let img = items[i].links[0].href;

    htmlContentToAppend += `
        <div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${img}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${title}</h4>
                        <small class="text-muted">Fecha de creación: ${date} </small>
                    </div>
                    <p class="mb-1">${description}</p>
                </div>
            </div>
        </div>
        `
    contenedor.innerHTML = htmlContentToAppend;
  }
}

btn.addEventListener("click", () => {
  let dataUrl = "https://images-api.nasa.gov/search?q=" + input.value;
  obtenerDatos(dataUrl);
});

async function obtenerDatos(url) {
  let response = await fetch(url);
  if (response.ok) {
    datos = await response.json();
    showDatos();
    //console.log(datos);
  } else {
    alert("HTTP error: " + response.status);
  }
}

