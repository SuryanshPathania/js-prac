


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
function addone(num){
    return num + 1
}



const addTwo = function(num){ // expression
    return num + 2
}
addTwo(5) // error
