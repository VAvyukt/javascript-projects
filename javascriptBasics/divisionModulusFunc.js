const readLine = require('prompt-sync')();
const readInt = require('prompt-sync')();

function main() {
    // Call your function here:
    
    //Title of calculator
    console.log("Division Calculator!")
    console.log()
    
    //Calling the custom function
    calculateDivRem();
}

// Define your function here:

function calculateDivRem() {
    
    //Number vars
    let firstNum = readInt("Give me your first number to divide: ");
    let secondNum = readInt("Give me your second number to divide: ");
    
    //Result vars
    let divResult = firstNum/secondNum;
    let remResult = firstNum%secondNum;
    
    //Printing the results
    console.log(firstNum + " divided by " + secondNum + " = " + divResult);
    console.log(firstNum + " divided by " + secondNum + " results in a remainder of " + remResult);
}




main();