function main() {
    const readLine = require('prompt-sync')();
    const readInt = require('prompt-sync')();

    // Save the price of the book, $15, in a variable as a number:
    let price = 15;
    
    // Ask the user for the number of books they want to buy:
    console.log("Welcome to the bookstore!");
    console.log("Each book costs $15");
    let books = readInt("How many books would you like you buy? ")
    
	// Calculate the total cost of the purchase:
	let total = price*books
	
	// Print out the total cost of the purchase:
    console.log("That will cost $" + total + ".");

}

main();