function drawCanvas() {
    board.lineWidth = 8;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#F3F5FC";
    board.strokeStyle = "#0A3871";
    board.fillRect(0, 0, 1200, 800);
    board.beginPath();
    board.moveTo(450, 500);
    board.lineTo(800, 500);
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
        board.moveTo(350 + widthLine * i, 640);
        board.lineTo(400 + widthLine * i, 640);
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
    board.fillText(secretWord[index], 358 + widthLine * index, 620);
    board.stroke();
}

function writeIncorrectLetter(letter, errorsLeft) {
    board.lineWidth = 6;
    board.font = "bold 40px Inter";
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#0A3871";
    board.fillText(letter, 380 + 40 * (10 - errorsLeft), 710, 40);
}

function drawHanged(score) {
    board.lineWidth = 8;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.strokeStyle = "#0A3871";
    if (score === 8) {
        board.moveTo(620, 500);
        board.lineTo(620, 100);
    }
    if (score === 7) {
        board.moveTo(800, 100);
        board.lineTo(620, 100);
    }
    if (score === 6) {
        board.moveTo(800, 100);
        board.lineTo(800, 171);
    }
    if (score === 5) {
        board.moveTo(800, 230);
        board.arc(800, 228, 50, 0, Math.PI * 2);
    }
    if (score === 4) {
        board.moveTo(800, 370);
        board.lineTo(800, 280);
    }
    if (score === 3) {
        board.moveTo(800, 370);
        board.lineTo(760, 450);
    }
    if (score === 2) {
        board.moveTo(800, 370);
        board.lineTo(840, 450);
    }
    if (score === 1) {
        board.moveTo(800, 300);
        board.lineTo(750, 340);
    }
    if (score === 0) {
        board.moveTo(800, 300);
        board.lineTo(850, 340);
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
    board.fillText("Fin del juego!", 900, 320);
}

function winGame() {
    board.font = "bold 42px Inter";
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "green";
    board.fillText("Ganaste, ", 920, 320);
    board.fillText("Felicidades!", 900, 360);
    setTimeout(reload, 1000);
}

function reload() {
    location.reload();
}
