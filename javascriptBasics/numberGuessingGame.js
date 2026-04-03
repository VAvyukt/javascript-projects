function main() {
    const readLine = require('prompt-sync')();
    const readInt = require('prompt-sync')();

    // Defines the limits of the guessing game
    let min = 1;
    let max = 10;

    // Introduces the game
    console.log("This program plays a guessing game.");
    console.log("The computer is thinking of a value between " + min + " and " + max + ".");
    
    // Randomly selects a number between min and max
    let numberToGuess = Math.floor(Math.random() * max) + min;

    
    // ------> Enter your code on the next line that will ask the
    // user for a guess. You should collect an integer value:
    let guess = readInt("What is your guess? ");
    
    
    
    
    // Checks to see if the guess is correct, too high, or too low
    console.log();
    if (guess == numberToGuess) {
        console.log("Correct!");
    } else if (guess > numberToGuess) {
        console.log("Your guess of " + guess + " was too high.");
    } else {
        console.log("Your guess of " + guess + " was too low.");
    }
    
    // Prints out what the correct number is
    console.log("The number was " + numberToGuess + ".");
}

main();