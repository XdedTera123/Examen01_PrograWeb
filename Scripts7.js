const listaDes = document.getElementById("listades")
const btnEliminar = document.getElementById("btneli")

function elminarElemento(){
    const primerItem = listaDes.querySelector("li");
    listaDes.removeChild(primerItem);
}

btnEliminar.addEventListener("click",elminarElemento)