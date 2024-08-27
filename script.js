let guess = 0;
let sidsteGuess = [];

function backendGuess(win) {
    if (win){
        document.getElementById("guess").innerText = "Good game";
        exit()
    }
    if (sidsteGuess !== null) {
        document.getElementById("sidsteGuess").innerText = "Previous number: " + sidsteGuess;
    }
    guess = Math.floor(Math.random() * 100) + 1;
    sidsteGuess.push(guess);
    document.getElementById("guess").innerText = "Is it "+guess+"?";

}