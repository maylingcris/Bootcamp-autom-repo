import * as promptSync from 'prompt-sync'
const prompt = promptSync(null);

//Random number between 0 and 99
let randomNumber: number = Math.round(Math.random() * 100);

//Tries
const attempts: number = 3;

//Counter with the chances that the user has
let attemptsCounter: number = 1;

//Number user enters
let userNumber : number;


//console.log(`Número Aleatorio: ${randomNumber}`);


while (attemptsCounter <= attempts){
    userNumber = parseInt(prompt("Provide your desired number:"));
    console.log(`Número del usuario: ${userNumber}`);
    if (randomNumber === userNumber){
        console.log(`‘Congratulations! You found the secret!’.`);
        break;
    }
    else if (attemptsCounter < attempts)
        if (userNumber < randomNumber){
            console.log(`The aleatory number is higher than yours`);
        }
        else {
            console.log(`The aleatory number is lower than yours`);
        }
    attemptsCounter++;
}

if (attemptsCounter > attempts)
    console.log(`That’s sad, the secret number was ${randomNumber}, ${randomNumber} should be the secret number`);