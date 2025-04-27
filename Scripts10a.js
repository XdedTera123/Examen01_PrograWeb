// Parte A: Referencias a los dos tableros
const leftBoard = document.getElementById('left-board');
const rightBoard = document.getElementById('right-board');

const size = 8;

// Parte A: Función para crear un tablero
function createBoard(board, isLeft) {
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            const button = document.createElement('button');
            button.classList.add('btn', 'btn-light');
            button.dataset.x = x;
            button.dataset.y = y;

            board.appendChild(button);
        }
    }
}

// Parte A: Crear los tableros izquierdo (activo) y derecho (espejo)
createBoard(leftBoard, true);
createBoard(rightBoard, false);