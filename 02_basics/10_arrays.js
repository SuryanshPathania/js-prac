// array mein mixed datatypes ho sakte aur array ke andar array bhi ho sakta

const myArr = [0 ,1 ,2 ,3,4,5]
console.log(myArr[1]);
// shallow copy is a copy whoose properties share same reference point
// jo change karunga original value mein bhi change hoga


// deep copy do not share same reference

const heroes = ["superman" , "shaktimaan"]
const myArr2 = new Array(1,2,3,4) // another way of declaring array
 
// array methods

 myArr.push(6)
 console.log(myArr);//add value to last
 myArr.pop(6)// removes value from last 
 console.log(myArr);

myArr.unshift(9)// start mein add  //sarri array ki value shift karni parri .time consuming and machine load
console.log(myArr);
myArr.shift()// start vala remove


console.log(myArr);
console.log(myArr.includes(9));//QUESTIONARE IF IT INCLUDES 9
console.log(myArr.indexOf(3));// tells index


const newArr = myArr.join()//add all elemnts of array into string
console.log(newArr);
console.log(myArr);

// slice and splice

console.log("A " , myArr);
const myn1 = myArr.slice(1, 3)//1 se shuru aur 3rd include nhi hota isme
// start inclusive end exclusive -1 refers to as last element while -2 refers to as second last element

console.log(myn1);
console.log("B" ,myArr);

//splice (start, deleteCount , item1 , item2.,.. )
// Return Value
// Returns an array containing the deleted elements. If only elements are added, it returns an empty array.

const myn2 = myArr.splice(1,3)//slice vs splice yeh fark hota splice ka portion hat jata  array maninpulate ho jata splice mein means splice modifies original array while slice dont
console.log("C" ,myArr);
console.log(myn2);


// Javascript Splice Examples
// Remove 1 element at index 1:

// Explain

// let fruits = ['Apple', 'Mango', 'Banana'];let removed = fruits.splice(1, 1);// Returns ['Mango'] // fruits is ['Apple', 'Banana']
// Insert elements without removing:

// Explain

// let fruits = ['Apple', 'Mango', 'Banana'];fruits.splice(1, 0, 'Orange');// Returns []// fruits is ['Apple', 'Orange', 'Mango', 'Banana']
// Remove and insert elements:

// Explain

// let fruits = ['Apple', 'Mango', 'Banana'];fruits.splice(1, 1, 'Lemon', 'Orange'); // Returns ['Mango']// fruits is ['Apple','Lemon','Orange','Banana']



