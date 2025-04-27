const textoOriginal = document.getElementById("txtini")
const btnCambio = document.getElementById("btncamb")

function cambioTexto(){
    textoOriginal.textContent = "Nuevo texto";
}
btnCambio.addEventListener("click",cambioTexto)