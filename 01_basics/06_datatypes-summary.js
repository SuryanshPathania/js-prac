//2 types of datatypes  primitive  and non primitive (refrence type)
//primitive   (call by value) copy of real value
// 7 types : String , number , boolean , null , undefined , symbol , BigInt

// JavaScript is a dynamically typed language. ou do not need to explicitly specify the type of a variable when you declare it.

// reference type (non primitive) change in original value
// Array , Objects , Functions 

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id===anotherid); //they are unique even though they have same value


// Array , Objects , Functions 
const heros = ["shaktimaan" , "naagraj" , "doga"] //array

let myObj  = {
    fname: "sury",   // object
    age:22
}


 const myFunction = function(){
    console.log("Hello World");
 }

 let score = null
 console.log(typeof bignumber);
 console.log(typeof score); // null ka typeof object aata
 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Stack (primitive) , Heap (Non-primitive)

let myYourtubeName = "suryansh.com"

let anothername = myYourtubeName

anothername = "chaiaurcode"
console.log(myYourtubeName);
console.log(anothername);

let userOne ={
    email: "google.com",
    upiId: "user@ybl",
}

let userTwo = userOne

userTwo.email = "anshu@google"

console.log(userOne.email);
console.log(userTwo.email);