const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " value"); // not recommended as outdated

console.log(` hello my name is ${name} and my repount is ${repoCount}`);// better


const gameName = new String(`hiteshc`) // 
// The code const gameName = new String('hiteshhc'); creates a new String object in JavaScript. In JavaScript, the new keyword is used to create an instance of an object. When you use new with a constructor function (like String), it creates a new object that is an instance of that function

console.log(gameName[0]);
console.log(gameName.__proto__);//__proto__: This is like the instructions or blueprint for making toy cars.When you write console.log(gameName.__proto__);, you’re asking JavaScript to show you the blueprint (prototype) for the gameName object, which includes all the built-in methods and properties that come with string objects. This helps you understand what your gameName object can do.



console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4)// last vali value nhi aati
console.log(newString);

const anotherString = gameName.slice(-7 , 4)
// Extract a section of a string and return it as a new string.
// Do not modify the original string.
//slice(start, end): Extracts characters from the start index up to, but not including, the end index.
// slice(): Can accept negative indices. A negative index counts from the end of the string.
// substring(): Treats negative indices as 0.


const newStringOne = "   hitesh   "
console.log(newStringOne); 
console.log(newStringOne.trim());// starting aur end space khatam kardeta

console.log(newStringOne); 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))


console.log(gameName.split('-')); // splits string bases on -