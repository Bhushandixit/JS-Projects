/* Color Change app */
/********************/

// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector("body");

// buttons.forEach(function (button) {
//     button.addEventListener('click', function(event){
//         console.log(event)
//         console.log(event.target)
//         if(event.target.id === 'grey') {
//             body.style.backgroundColor = event.target.id;
//         }
//         if(event.target.id === 'yellow') {
//             body.style.backgroundColor = event.target.id;
//         }
//         if(event.target.id === 'pink') {
//             body.style.backgroundColor = event.target.id;
//         }
//         if(event.target.id === 'orange') {
//             body.style.backgroundColor = event.target.id;
//         }
//     })
    
// })


/*  BMI App  */
/*************/
// const form = document.querySelector('form');

// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const result = document.querySelector('#results');

//     if(height === '' || height < 0 || isNaN(height)){
//         result.innerHTML = `Please enter a valid height ${height}`;
//     }
//     else if (weight === '' || weight < 0 || isNaN(weight)){
//         result.innerHTML = `Please enter a valid weight ${weight}`;
//     }
//     else{
//         const BMI = (weight/(height*height/10000)).toFixed(2)
//         result.innerHTML = `<span>${BMI}</span>`;
//         if(BMI < 18.6){
//             result.innerHTML = `<span>The BMI is ${BMI}, you are underweight</span>`;
//         } else if (BMI >= 18.6 && BMI <= 24.9) {
//             result.innerHTML = `<span>The BMI is ${BMI}, you are fit</span>`;
//         } else if (BMI > 24.9) {
//             result.innerHTML = `<span>The BMI is ${BMI}, you are overweight.</span>`;
//         }
//         }
// });


/* Clock App */
/*************/

// const clock = document.getElementById('clock');

// setInterval( function() {
//     let date = new Date();
//     clock.innerHTML = date.toLocaleTimeString();
// },1000)


/*  Guess the number App */
/*************************/

let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi') ;
const startOver = document.querySelector('.resultParas') ;

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess){
 //to check a number is valid or not
 if (isNaN(guess)) {
     alert('Please enter a valid number');
 } else if(guess<1){
     alert('Please enter a number more than 1');
 } else if(guess > 100){
     alert('Please enter a number less than 100');
 } else{
    prevGuess.push(guess)
    if (numGuess === 10 ) {
        displayGuess(guess);
        displayMessage(`Game Over, Random number was ${randomNumber}`);
        endGame();
    } else{
        displayGuess(guess);
        checkGuess(guess);
    }
  }
}


function checkGuess(guess){
   //to print message if number is valid or not
   //check if guessed value is = randomNumber
   if(guess === randomNumber){
    displayMessage('You guessed it right');
    endGame();
   } else if(guess < randomNumber){
    displayMessage('Number is TOOO low');
   } else if(guess > randomNumber){
    displayMessage('Number is TOOO high');
   }
    
}


function displayGuess(guess){
   //to print message if number is valid or not
   //clear the text input field 
   //decrease the remaining geuss counter
    userInput.value = '';
    guessSlot.innerHTML += `${guess}`;
    numGuess++;
    remainingGuess.innerHTML = `${11 - numGuess}`;
   }


function displayMessage(message){
    //accepting message from user and display it
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    //ending the game
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame =false;
    newGame();
}

function newGame(){
    //ending the game
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remainingGuess.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
   });
}


