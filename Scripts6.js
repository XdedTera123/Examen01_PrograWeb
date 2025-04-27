const btonAñadir = document.getElementById("botonañadir")
const listaDeso = document.getElementById("listadeso")
let num = 0;

function añadirElemento(){
    const agregarli = document.createElement("li");
    agregarli.textContent = "Elemento: " + num;
    listaDeso.appendChild(agregarli);
    num++;
}

btonAñadir.addEventListener("click",añadirElemento)