function enviarFormulario(){
    const inputCorreo = document.getElementById("correo");
    const inputNombre = document.getElementById("nombre");  
    const inputMensaje = document.getElementById("mensaje");

    if (inputCorreo.value == "" || inputNombre.value == "" || inputMensaje.value == ""){
        alert("No se ha llenado todos los datos");
        return;
    }

    if (!inputCorreo.value.includes("@") || !inputCorreo.value.includes(".")){
        alert("No utiliza un formato de correo valido")
        return;
    }

    alert("Formulario enviado correctamente")
    document.getElementById("forms").reset();
}

document.getElementById("botonenvio").onclick = enviarFormulario;