let screen = (document.querySelector("canvas").style.display = "none");
let buttonNewGame = (document.getElementById("btn-new-game").style.display =
    "none");
let btnExitVanish = (document.getElementById("btn-exit").style.display =
    "none");
let sectionAddWord = (document.getElementById("add-word").style.display =
    "none");
let btnNewGame = document.getElementById("btn-new-game");
let btnCancel = document.getElementById("btn-cancel");
let btnExit = document.getElementById("btn-exit");

let words = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let board = document.getElementById("forca").getContext("2d");
let secretWord = "";

let letters = [];
let errors = 8;
let correctWord = "";
let incorrectLetters = [];
let numberErrors = 8;
let chosenLetter = [];

// Events
document.getElementById("start-game").onclick = () => startGame();

document.getElementById("btn-save").onclick = () => saveWord();

btnNewGame.addEventListener("click", function () {
    location.reload();
});

btnExit.addEventListener("click", function () {
    location.reload();
});

btnCancel.addEventListener("click", function () {
    location.reload();
});

function chooseCorrectWord() {
    let word = words[Math.floor(Math.random() * words.length)];
    secretWord = word;
    return word;
}

function checkLetterClicked(key) {
    if (letters.length < 1 || letters.indexOf(key) < 0) {
        letters.push(key);
        return false;
    } else {
        letters.push(key);
        return true;
    }
}

function addCorrectLetter(i) {
    correctWord += secretWord[i].toUpperCase();
}

function addIncorrectLetter(letter) {
    if (secretWord.indexOf(letter) <= 0) {
        errors -= 1;
    }
}

function checkEndGame(letter) {
    if (chosenLetter.length < secretWord.length) {
        incorrectLetters.push(letter);

        if (incorrectLetters.length > numberErrors) {
            loseGame();
        } else if (chosenLetter.length < secretWord.length) {
            addIncorrectLetter(letter);
            writeIncorrectLetter(letter, errors);
        }
    }
}

function checkWinner(letter) {
    chosenLetter.push(letter.toUpperCase());
    if (chosenLetter.length == secretWord.length) {
        winGame();
    }
}

function checkLetter(keyCode) {
    if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
        return true;
    } else {
        return false;
    }
}

function showScreenAddWord() {
    document.getElementById("section-disable").style.display = "none";
    document.getElementById("add-word").style.display = "block";
}

function saveWord() {
    let newWord = document.getElementById("input-new-word").value;

    if (newWord !== "") {
        words.push(newWord.toUpperCase());
        alert("La palabra fue guardada");

        document.getElementById("add-word").style.display = "none";
        startGame();
    } else {
        alert("Ninguna palabra ha sido digitada");
    }
}

function startGame() {
    document.getElementById("section-disable").style.display = "none";
    document.querySelector("canvas").style.display = "flex";

    // style canvas
    document.getElementById("section-able").style.display = "flex";
    document.getElementById("section-able").style.flexDirection = "column";
    document.getElementById("section-able").style.alignItems = "center";
    document.getElementById("section-able").style.justifyContent = "center";

    drawCanvas();
    chooseCorrectWord();
    drawLine();

    document.getElementById("btn-new-game").style.display = "flex";
    document.getElementById("btn-exit").style.display = "flex";

    document.onkeydown = (e) => {
        let letter = e.key.toUpperCase();
        if (incorrectLetters.length <= numberErrors) {
            if (!checkLetterClicked(e.key) && checkLetter(e.keyCode)) {
                if (secretWord.includes(letter)) {
                    addCorrectLetter(secretWord.indexOf(letter));
                    for (let i = 0; i < secretWord.length; i++) {
                        if (secretWord[i] === letter) {
                            writeCorrectLetter(i);
                            checkWinner(letter);
                        }
                    }
                } else {
                    if (!checkLetterClicked(e.key) && !checkWinner(letter))
                        return;
                    drawHanged(errors);
                    checkEndGame(letter);
                }
            }
        } else {
            alert("has atingido el límite de letras incorrectas");
        }
    };
}
