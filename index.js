let randomNum = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult'); 
const lowOrHi = document.querySelector('.lowOrHi');

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;
let resetbtn;


function checkGuess() {
    const userGuess  = Number(guessField.value)

    if(guessCount === 1) {
        guesses.textContent = 'Previous guesses:';

    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if(userGuess === randomNum) {
        lastResult.textContent = 'Congratulaions!! You got it right.';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver()
    }
    else if(guessCount === 10) {
        lastResult.textContent = "!!!GAME OVER!!!";
        lowOrHi.textContent='';
        setGameOver()
    }
    else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if( userGuess < randomNum) {
            lowOrHi.textContent = 'Last guess was too low!';
        }
        else if( userGuess > randomNum) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();

}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetbtn = document.createElement('button');
    resetbtn.textContent = 'Start new Game';
    document.body.appendChild(resetbtn);
    resetbtn.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resultParas = document.querySelectorAll('.resultParas p');
    for( const para of resultParas) {
        para.textContent = '';
    }

    resetbtn.parentNode.removeChild(resetbtn);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNum = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener('click', checkGuess)