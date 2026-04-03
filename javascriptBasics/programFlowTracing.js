function main() {
    // 2. Prints when the main() function is called
    console.log("The main function runs first.");
    
    // 3. Calls the printSecond function
    printSecond();
    
    // 5. Calls the printThird function
    printThird();
}

// 4. The function runs from line 6
function printSecond() {
    console.log("This will print second.");
}

// 6. This function runs from line 9
function printThird() {
    let message = "This will print third!";
    console.log(message);
}

// 1. This is the first call statement that executes because
// it exists outside of any function itself. 
main();