let contador = 0;
const botonContador = document.getElementById("btnPresi");
const parrafpContador = document.getElementById("pclick");

function aumentarContador(){
    contador ++
    parrafpContador.textContent = "Cantidad de clicks: " + contador;
}

function cambiarColor(){
    if(contador == 10){
        parrafpContador.style.color = "red";
    }
}

botonContador.addEventListener("click",aumentarContador)
botonContador.addEventListener("click",cambiarColor)


