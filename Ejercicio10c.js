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

            // Parte B: Solo el tablero izquierdo tiene eventos de click
            if (isLeft) {
                button.addEventListener('click', handleClick);
            }

            board.appendChild(button);
        }
    }
}

// Parte A: Crear los tableros izquierdo (activo) y derecho (espejo)
createBoard(leftBoard, true);
createBoard(rightBoard, false);

// Parte B: Función para limpiar todos los botones
function clearBoards() {
    document.querySelectorAll('button').forEach(btn => {
        btn.textContent = '';
        btn.classList.remove('marked');
    });
}

// Parte B: Función al hacer click en el tablero izquierdo
function handleClick(event) {
    const x = parseInt(event.target.dataset.x);
    const y = parseInt(event.target.dataset.y);

    clearBoards(); // Parte B: limpiar tableros antes de pintar

    markCells(leftBoard, x, y); // Parte B: pintar el tablero izquierdo
    mirrorMark(rightBoard, 7 - x, 7 - y); // Parte C: pintar en espejo en el tablero derecho
}

// Parte B: Función para marcar casilla clickeada + adyacentes
function markCells(board, x, y) {
    const dx = [0, -1, 1, 0, 0];
    const dy = [0, 0, 0, -1, 1];

    for (let i = 0; i < 5; i++) {
        const newX = x + dx[i];
        const newY = y + dy[i];

        if (newX >= 0 && newX < size && newY >= 0 && newY < size) {
            const index = newX * size + newY;
            const button = board.children[index];
            button.textContent = 'X';
            button.classList.add('marked');
        }
    }
}

// Parte C: Función para marcar espejo en el tablero derecho
function mirrorMark(board, x, y) {
    markCells(board, x, y);
}