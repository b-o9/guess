let guess = 50;
let listen = Array.from({ length: 100 }, (_, i) => i + 1);
let floor = 1;
let ceil = 100;
let guesses = 0;

document.getElementById('lowBtn').addEventListener('click', () => guessHigher());
document.getElementById('correctBtn').addEventListener('click', () => win());
document.getElementById('highBtn').addEventListener('click', () => guessLower());

function guessLower() {
    guesses++;
    ceil = guess - 1;
    listen = listen.filter(num => num <= guess-1);
    updateList();

    guess = Math.floor((ceil - floor) / 2) + floor;
    document.getElementById("guess").innerText = "Is it " + guess + "?";
}

function guessHigher() {
    guesses++;
    floor = guess + 1;
    listen = listen.filter(num => num >= guess+1);
    updateList();

    guess = Math.floor((ceil - floor) / 2) + floor;
    document.getElementById("guess").innerText = "Is it " + guess + "?";
}

function win() {
    guesses++;
    document.getElementById("guesses").innerText = `Guesses: ${guesses}`;
    document.getElementById("guessList").innerText = `Update the site to play again`;
    if (guesses < 5){
        document.getElementById("guess").innerText = "Good game";
    } else {
        document.getElementById("guess").innerText = "Bad game";
    }
}

function updateList (){
    document.getElementById("guesses").innerText = `Guesses: ${guesses}`;
    if (listen == "undefined"){
        document.getElementById("guessList").innerText = `You are cheating...`;
    } else {
        document.getElementById("guessList").innerText = `Range: ${listen[0]} - ${listen[listen.length - 1]}`;
    }
}
