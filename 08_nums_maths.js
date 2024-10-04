const score = 400
console.log(score);
const balance = new Number(100)//Constructor Function: A special function used with new to create and initialize objects.
//const myCar = new Car('Toyota', 'Corolla', 'blue');
// This line creates a new car object with the make 'Toyota', model 'Corolla', and color 'blue'.
// The new keyword calls the Car function and sets up the new object with these initial properties.
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));// isme number daalte jaroori

const otherNumber = 23.856
console.log(otherNumber.toPrecision(3));// PRECISE VALUE DETA ROUND OFF KARKE

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));//en-In indian commas lgate

////+++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++//

console.log(Math.abs(-4));// absolute - => + , Positive vhi rahega
console.log(Math.round(4.7));//round ooff  
console.log(Math.ceil(4.2));//ceil- top value,  floor - lowest value
console.log(Math.min(4, 3, 8,));// least value in array
console.log(Math.max(4, 3, 8,)); //most value in array



console.log(Math.random());// random value between 0 to 1
console.log((Math.random()*10 )+ 1)// 1 added so thT IT DONT GUESS 0 and multiplied by 10 because it only gives value between 0 and 1
console.log(Math.floor(Math.random()*10 )+ 1)// floor use ek hi value
// FORMULA
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min )