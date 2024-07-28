const myArr = [0 ,1 ,2 ,3,4,5]
console.log(myArr[1]);

const heroes = ["superman" , "shaktimaan"]
const myArr2 = new Array(1,2,3,4) // another way of declaring array
 // array methods

 myArr.push(6)
 console.log(myArr);
 myArr.pop(6)// removes value from last 
 console.log(myArr);

myArr.unshift(9)// start mein
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

console.log(myn1);
console.log("B" ,myArr);

const myn2 = myArr.splice(1,3)//slice vs splice yeh fark hota splice ka portion h at jata
console.log("C" ,myArr);
console.log(myn2);

