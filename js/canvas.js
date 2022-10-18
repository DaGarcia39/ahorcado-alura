function drawCanvas() {
    board.lineWidth = 8;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#F3F5F6";
    board.strokeStyle = "#0A3871";

    board.fillRect(0, 0, 1200, 860);
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
    board.fillStyle = "#F3F5F6";
    board.strokeStyle = "#0A3871";

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
    board.fillText(letter, 505 + 40 * (10 - errorsLeft), 720, 40);
}
