// === Declaración de variables ===
let turno = 'X';
let juegoActivo = true;
const botones = document.querySelectorAll('.casilla');
const titulo = document.getElementById('titulo');

// === Funciones ===
function verificarGanador() {
  const combinacionesGanadoras = [
    [0,1,2], [3,4,5], [6,7,8], // Filas
    [0,3,6], [1,4,7], [2,5,8], // Columnas
    [0,4,8], [2,4,6]           // Diagonales
  ];

  for (let combinacion of combinacionesGanadoras) {
    const [a, b, c] = combinacion;
    if (
      botones[a].textContent &&
      botones[a].textContent === botones[b].textContent &&
      botones[a].textContent === botones[c].textContent
    ) {
      juegoActivo = false;
      titulo.textContent = `Jugador ${botones[a].textContent} ganó`;
      deshabilitarBotones();
      return;
    }
  }

  // Verificar empate
  const empate = [...botones].every(boton => boton.textContent !== '');
  if (empate && juegoActivo) {
    juegoActivo = false;
    titulo.textContent = 'Empate';
    deshabilitarBotones();
  }
}

function deshabilitarBotones() {
  botones.forEach(boton => boton.disabled = true);
}

// === Eventos ===
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    if (boton.textContent === '' && juegoActivo) {
      boton.textContent = turno;
      verificarGanador();
      turno = turno === 'X' ? 'O' : 'X';
    }
  });
});
