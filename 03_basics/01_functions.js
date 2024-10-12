
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ // parameters

//     console.log(number1 + number2);
// }

// addTwoNumbers(3 ,4 )// arguments

// agr hum isko variable mein store karenge to 
// const result = addTwoNumbers( 3 , 5) // reult 8 ayega
// console.log("result", result); // undefined ayega

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("anshu")) // return mein value return karta par kisi variable mein store nhi kia na print kia isliye console .log use hua 
// jab kujh loginusermessage mein pass n karo to undefined aata


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a username ");
//          return 
//     }
// return `${username} just logged in `
// }
// When a return statement is used without any value in a function, it exits the function immediately, regardless of whether or not the function has completed its tasks. Here's why it works:

// Function Termination: The primary purpose of the return statement in any function is to stop execution and exit the function. When the return is followed by a value (e.g., return 5), that value is passed back to the calling code. However, when no value is provided (i.e., return;), it still ends the function but does not send any value back.

// Implicit undefined: In JavaScript, if a function reaches a return statement with no value, the function returns undefined by default. This is useful in scenarios where you simply want to stop the function but do not need to pass anything back to the caller.

function loginUserMessage(username = "sam") { // Default value of "sam" is given if no username is passed
    if (!username) {  // Checks if username is falsy (undefined, null, empty string, etc.)
        console.log("Please enter a username");  // Logs a message to the console if no valid username is provided
        return;  // Exits the function without returning any value
    }
    return `${username} just logged in`;  // Returns a message indicating the user has logged in
}


console.log(loginUserMessage("hitesh"))

// The condition if (!username) in your function is checking whether the username is falsy.

// In JavaScript, some values are considered "falsy." These values include:

// undefined
// null
// 0
// false
// NaN (Not a Number)
// "" (empty string)
// The exclamation mark (!) is a  negation operator. It converts a truthy value to false and a falsy value to true. So, when you do !username, you're checking if username is one of the falsy values mentioned above.

console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1,val2,...num1){  // ... rest and spread both ARE same only different use case this is rest 
    //200 - val1 ,400 - val2
    return num1
} 

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){  // For example, in programming, a generic function can take different inputs and handle them similarly, rather than being tied to one particular input.The function handleObject(anyobject) is written in a generic way because it can handle any object passed to it, not just the user object.
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})// aise direct bhi pass kar sakte


// The function handleObject(anyobject) is defined in a generic way so that it can accept any object as a parameter, not just the user object. Here's why:

// Function Parameter:

// In the function definition handleObject(anyobject), anyobject is a placeholder or a parameter. It represents any object that might be passed into the function when it's called.
// You don't want to hardcode specific values or objects (like user) directly inside the function. This makes the function reusable for any object with similar structure.
// Calling the Function:

// When you call the function as handleObject(user), you're telling it: "Take this specific object (user) and use it as anyobject inside the function."
// The function uses anyobject.username and anyobject.price, which refer to the properties of the actual object (user) that you passed when calling the function.
// By doing this, the function becomes more flexible. You can pass different objects to it:

// js
// Copy code
// const anotherUser = {
//     username: "suryansh",
//     price: 299
// };

// handleObject(anotherUser);
// This would output:


// Username is suryansh and price is 299
// If you had hardcoded handleObject(user) in the function definition, it would only work for the user object and not be reusable with other objects.



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

