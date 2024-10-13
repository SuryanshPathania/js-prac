const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // 'this' refers to the current object
        console.log(this); // 'this' refers to the 'user' object in the context of this function  will log the entire user object,
    }
}

user.welcomeMessage(); // Call 1
user.username = "sam"; // Changing the username property
user.welcomeMessage(); // Call 2

console.log(this); // Global context

// The console.log(this) outside of the user object refers to the global context. In Node.js, the global context is the global object, and in browsers, it is the window object.

// Key Concepts:
// this inside user.welcomeMessage() refers to the user object.
// this outside any function refers to the global context (window in browsers, global in Node.js).



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);// it only works in object
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);//same  undefined
// }

const chai =  () => { // arrow function mein bhi this use nhi kar sakte
    let username = "hitesh"// undefined
    console.log(this);
}


// chai()

//arrow functions
//{}- return likhna parega ()- likhe to jarrURt nhi

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return
// This is a concise way to write functions that consist of a single expression.
// const addTwo = (num1, num2) => ( num1 + num2 ) 

// console.log(addTwo(3, 4))


const addTwo = (num1, num2) => ({username: "hitesh"})
// The parentheses () around the object literal { username: "hitesh" } are necessary here. In arrow functions, if you want to return an object literal, you need to wrap it in parentheses.
console.log(addTwo(3, 4))

//The function will always return the object {"username": "hitesh"} regardless of the input parameters.
