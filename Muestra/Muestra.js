document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se envíe el formulario
  
    // Obtener los valores
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
  
    // Limpiar mensajes de error
    document.getElementById('errorNombre').textContent = "";
    document.getElementById('errorCorreo').textContent = "";
    document.getElementById('errorMensaje').textContent = "";
  
    let valido = true;
  
    // Validar nombre
    if (nombre === "") {
      document.getElementById('errorNombre').textContent = "El nombre es obligatorio.";
      valido = false;
    }
  
    // Validar correo
    if (correo === "") {
      document.getElementById('errorCorreo').textContent = "El correo es obligatorio.";
      valido = false;
    } else if (!correo.includes("@") || !correo.includes(".")) {
      document.getElementById('errorCorreo').textContent = "El correo no es válido.";
      valido = false;
    }
  
    // Validar mensaje
    if (mensaje === "") {
      document.getElementById('errorMensaje').textContent = "El mensaje es obligatorio.";
      valido = false;
    }
  
    // Si todo es válido, mostrar alerta
    if (valido) {
      alert("Formulario enviado correctamente");
      document.getElementById('contactForm').reset(); // Limpia el formulario
    }
  });
  