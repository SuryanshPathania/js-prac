


var c = 300
let a = 300  // global scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a);// block scope
    
}
console.log(a);


// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(a); // Error
// console.log(b); // Error
// console.log(c); // 30
// Explanation:
// let a = 10; and const b = 20;:

// Both let and const are block-scoped. This means they are only accessible within the block (the curly braces {}) where they are declared.
// Since you are trying to access a and b outside the block, you'll get a ReferenceError saying a is not defined and b is not defined.
// var c = 30;:

// var is function-scoped or globally scoped (if not inside a function). Since this var is declared inside an if block (which is not a function), it will be hoisted to the global scope (in this case, the entire script).
// Therefore, console.log(c); will print 30 without an error, because c is available outside the block.


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube" // block ka saman bahar nhi leak hona chahiye
        console.log(username); // child jo hai vo parent ko access kar paate hai par parent child ke nhi kar pata
                                 
    }
    // console.log(website);

     two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); error 
}

// console.log(username); error 


// // ++++++++++++++++++ interesting ++++++++++++++++++



console.log(addone(5))
function addone(num){ // functions declaration
    return num + 1
}


// console.log(addTwo(5))   // error
const addTwo = function(num){ // expression
    return num + 2
}
console.log(addTwo(5)) // works



// In your code, there are two key points regarding function declarations and expressions in JavaScript:

// Function Declaration (addone):

// The addone function is a function declaration. In JavaScript, function declarations are hoisted to the top of their scope, which means they can be called before they are defined in the code. This is why console.log(addone(5)) works correctly and logs 6 to the console.
// Function Expression (addTwo):

// The addTwo function is a function expression. Function expressions are not hoisted, meaning the function cannot be called before it is defined. This is why addTwo(5) throws an error because addTwo is not yet defined when the call is made.
// To fix the error, move the call to addTwo(5) after the function expression:

// javascript
// Copy code
// console.log(addone(5)) // works

// function addone(num){
//     return num + 1
// }

// const addTwo = function(num){ // expression
//     return num + 2
// }

// console.log(addTwo(5)) // works



// The error in your first line (console.log(addTwo(5)) // error) happens because you are trying to call the addTwo function before it is defined.

// Here's the breakdown:

// Function Expressions are not hoisted: Unlike function declarations, function expressions are not hoisted to the top of their scope. This means you cannot call addTwo before the line where it is defined.

// When you try to do console.log(addTwo(5)) before defining addTwo, JavaScript throws an error because addTwo is undefined at that point.

// Correct Code:
// javascript
// Copy code
// // console.log(addTwo(5))   // error because addTwo is not defined yet

// const addTwo = function(num){ // defining addTwo
//     return num + 2;
// }

// console.log(addTwo(5)); // works, output: 7
// Why this works:
// In the second console.log(addTwo(5)), the function is fully defined, so the call succeeds, and it outputs 7 as expected.













