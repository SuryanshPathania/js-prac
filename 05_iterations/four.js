// Use for...in to iterate over object keys.

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);//When you use bracket notation, you're accessing a property by its name, but you can use any expression (like variables or string literals) inside the brackets.
    // In this case, key is a variable holding different string values ("js", "cpp", etc.), and those strings are used to look up the corresponding property in myObject.
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);

    // console.log(key); // for of sidha value de deta par for in number key de deta
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }\  not possible


//map()
// Creates a new array by applying a function to each element in the original array.


// const arr = [1, 2, 3];
// const doubled = arr.map((value) => value * 2);  // Returns [2, 4, 6]
// console.log(doubled);
// Use case: To transform each element in an array and create a new array.
// Returns: A new array with transformed values.