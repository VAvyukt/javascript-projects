/* This program prompts the user for a few pieces of information,
and then prints reply messages. */
 
function main() {
    const readLine = require('prompt-sync')();
    const readInt = require('prompt-sync')();

	let name = readLine("What is your name? ");
	let age = readInt("What is your age? ");
	let show = readLine("What is one of your favorite TV shows or movies? ");
	let color = readLine("What is your favorite color? ");
	
	console.log();
	console.log("Hello " + name + ", nice to meet you!");
	console.log("Wow, " + age + " years old, that's fun.");
	console.log("It's cool that you like " + show + "! I do too :).");
	console.log("Wow! What a beautiful color! My favorite color is " + color + ", too!");
}

main();