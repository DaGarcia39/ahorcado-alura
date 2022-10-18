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

    let width = 600 / secretWord.length;
    for (let i = 0; i < secretWord.length; i++) {
        board.moveTo(500 + width * i, 640);
        board.lineTo(500 + width * i, 640);
    }

    board.stroke();
    board.closePath();
}
