const Parrafo = document.getElementById("parraf")
const btnMostrarOcultar = document.getElementById("myc")

function parrafoMostarOcultar() {
    // Verificamos si el párrafo está visible
    if (Parrafo.style.display === "none" || Parrafo.style.display === "") {
        // Si está oculto o no tiene display definido, lo mostramos
        Parrafo.style.display = "block";
    } else {
        // Si está visible, lo ocultamos
        Parrafo.style.display = "none";
    }
}

btnMostrarOcultar.addEventListener("click",parrafoMostarOcultar)  