console.log("2" > 1); // COERCED MENAS CONVERTED IN PROGRAMMING
console.log("02" > 1);

console.log(null > 0);//comparison convert null to number treating it as 0
console.log(null == 0);// equal check works diffrent than comparison 
console.log(null >= 0);//comparison convert null to number treating it as 0
// In comparisons (>, <, >=, <=), null is treated as 0.
//In equality checks (==), null is only equal to undefined, not 0.


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//=== (strict check) checks datatypes

console.log("2" === 2);
console.log("2" == 2);

//postfix
let x = 5;
let y = x++; // y is assigned the value of 5, then x is incremented to 6.
console.log(x); // Output: 6
console.log(y); // Output: 5

//prefix
let x = 5;
let y = ++x;  // x is incremented to 6, then y is assigned the value of 6.
console.log(x);  // Output: 6
console.log(y);  // Output: 6



//prefix
let x = 5;
let y = x--; // y is assigned the value of 5, then x is decremented to 4.
console.log(x); // Output: 4
console.log(y); // Output: 5



