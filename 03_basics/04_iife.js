// Immediately Invoked Function Expressions (IIFE)
//kyi baar global scope se pollution hota uski vajah se iife likhte



//normal function
// function chai(){
//     console.log("DB CONNECTED");
// }
// chai()

(function chai(){
    // named IIFE  // syntax -- (definition)(executioncall)
    console.log(`DB CONNECTED`);
})(); // semicolon se end karo


//simple iife using arrow

( () => {
    console.log(`DB CONNECTED TWO `);
} )();

// Immediately Invoked Function Expression (IIFE)
((name) => { // Define an arrow function that takes one parameter: name
    // Log a message to the console indicating a database connection
    console.log(`DB CONNECTED TWO ${name}`); 
})('hitesh'); // Call the function immediately with 'hitesh' as the argument
