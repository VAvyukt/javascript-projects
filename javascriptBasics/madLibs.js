function main() {
    const readLine = require('prompt-sync')();
    const readInt = require('prompt-sync')();

    // -----> Gather the user input that is needed to complete the 
    // story below. Remember to store the input into the appropriate
    // variables so that they can be used in the story.
    let name = readLine("Name: ");
    let pluralNoun = readLine("Plural Noun: ");
    let holiday = readLine("Holiday: ");

	// Print the story:
	console.log();
	console.log("Hi " + name + ", it's so good to meet you!");
	console.log("I'm having a " + holiday + " themed party");
	console.log("at my house. You need to bring your own " + pluralNoun);
	console.log("with you. I hope you join us!");
}

main();