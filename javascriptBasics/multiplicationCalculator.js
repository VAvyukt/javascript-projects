function main() {
    const readLine = require('prompt-sync')();
    const readInt = require('prompt-sync')();
    
    // Asks user for numbers
	let first = readInt("First number: ");
	let second = readInt("Second number: ");

	// Multiplies the two numbers together
	let result = first * second;
	
	// Prints out results
	console.log();
	console.log(first + " * " + second + " = " + result);
	console.log();
	
	let third = readInt("Third number: ");
	
	let secondResult = first * second * third;
	
	console.log();
	console.log(first + " * " + second + " * " + third + " = " + secondResult);
}

main();