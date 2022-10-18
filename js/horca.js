let words = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let board = document.getElementById("forca").getContext("2d");
let secretWord = "";

let letters = [];
let errors = 9;

function chooseCorrectWord() {
    let word = words[Math.floor(Math.random() * words.length)];
    secretWord = word;
    console.log(secretWord);
}

function checkLetter(key) {
    let state = false;
    if (
        (key >= 65 && letters.indexOf(key)) ||
        (key <= 90 && letters.indexOf(key))
    ) {
        letters.push(key);
        console.log(key);
        return state;
    } else {
        state = true;
        console.log(key);
        return true;
    }
}

function addIncorrectLetter() {
    errors -= 1;
}

function startGame() {
    document.getElementById("start-game").style.display = "none";
    chooseCorrectWord();
    drawCanvas();
    drawLine();

    document.onkeydown = (e) => {
        let letter = e.key.toUpperCase();
        if (checkLetter(letter) && secretWord.includes(letter)) {
            for (let i = 0; i < secretWord.length; i++) {
                if (secretWord[i] === letter) {
                    writeCorrectLetter(i);
                }
            }
        } else {
            addIncorrectLetter(letter);
            writeIncorrectLetter(letter, errors);
        }
    };
}
