const textoCambiar = document.getElementById("texto")
const botonCambio = document.getElementById("btncolor")

function cambiarColor() {
    textoCambiar.style.background = "red";
}

botonCambio.addEventListener("click",cambiarColor)