let words = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let board = document.getElementById("forca").getContext("2d");
let secretWord = "";

function chooseCorrectWord() {
    let word = words[Math.floor(Math.random() * words.length)];
    secretWord = word;
    console.log(secretWord);
}

function startGame() {
    document.getElementById("start-game").style.display = "none";
    chooseCorrectWord();
    drawCanvas();
    drawLine();
}
