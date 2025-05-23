"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync(null);
//Random number between 0 and 99
var randomNumber = Math.round(Math.random() * 100);
//Tries
var attempts = 3;
//Counter with the chances that the user has
var attemptsCounter = 1;
//Number user enters
var userNumber;
//console.log(`Número Aleatorio: ${randomNumber}`);
while (attemptsCounter <= attempts) {
    userNumber = parseInt(prompt("Provide your desired number:"));
    console.log("N\u00FAmero del usuario: ".concat(userNumber));
    if (randomNumber === userNumber) {
        console.log("\u2018Congratulations! You found the secret!\u2019.");
        break;
    }
    else if (attemptsCounter < attempts)
        if (userNumber < randomNumber) {
            console.log("The aleatory number is higher than yours");
        }
        else {
            console.log("The aleatory number is lower than yours");
        }
    attemptsCounter++;
}
if (attemptsCounter > attempts)
    console.log("That\u2019s sad, the secret number was ".concat(randomNumber, ", ").concat(randomNumber, " should be the secret number"));
