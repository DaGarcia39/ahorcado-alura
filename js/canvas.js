function drawCanvas() {
    board.lineWidth = 8;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#F3F5FC";
    board.strokeStyle = "#0A3871";
    board.fillRect(0, 0, 1200, 800);
    board.beginPath();
    board.moveTo(650, 500);
    board.lineTo(900, 500);
    board.stroke();
    board.closePath();
}

function drawLine() {
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.strokeStyle = "#0A3871";
    board.beginPath();
    let widthLine = 600 / secretWord.length;
    for (let i = 0; i < secretWord.length; i++) {
        board.moveTo(500 + widthLine * i, 640);
        board.lineTo(550 + widthLine * i, 640);
    }
    board.stroke();
    board.closePath();
}

function writeCorrectLetter(index) {
    board.font = "bold 52px Inter";
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#0A3871";
    let widthLine = 600 / secretWord.length;
    board.fillText(secretWord[index], 505 + widthLine * index, 620);
    board.stroke();
}

function writeIncorrectLetter(letter, errorsLeft) {
    board.lineWidth = 6;
    board.font = "bold 40px Inter";
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#0A3871";
    board.fillText(letter, 535 + 40 * (10 - errorsLeft), 710, 40);
}

function drawHanged(score) {
    board.lineWidth = 8;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.strokeStyle = "#0A3871";
    if (score === 8) {
        board.moveTo(700, 500);
        board.lineTo(700, 100);
    }
    if (score === 7) {
        board.moveTo(850, 100);
        board.lineTo(700, 100);
    }
    if (score === 6) {
        board.moveTo(850, 100);
        board.lineTo(850, 171);
    }
    if (score === 5) {
        board.moveTo(900, 230);
        board.arc(850, 230, 50, 0, Math.PI * 2);
    }
    if (score === 4) {
        board.moveTo(850, 389);
        board.lineTo(850, 289);
    }
    if (score === 3) {
        board.moveTo(850, 389);
        board.lineTo(800, 450);
    }
    if (score === 2) {
        board.moveTo(850, 389);
        board.lineTo(890, 450);
    }
    if (score === 1) {
        board.moveTo(850, 330);
        board.lineTo(800, 389);
    }
    if (score === 0) {
        board.moveTo(850, 330);
        board.lineTo(890, 389);
    }
    board.stroke();
    board.closePath();
}

function loseGame() {
    board.font = "bold 42px Inter";
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "red";
    board.fillText("Fin del juego!", 930, 320);
}

function winGame() {
    board.font = "bold 42px Inter";
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "green";
    board.fillText("Ganaste, ", 950, 320);
    board.fillText("Felicidades!", 930, 360);
    setTimeout(reload, 1000);
}

function reload() {
    location.reload();
}
