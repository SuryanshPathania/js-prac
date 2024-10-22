// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // Use for...of for arrays, strings, and other iterables, but not plain objects directly. To iterate over objects with for...of, use Object.keys(), Object.values(), or Object.entries() to convert them into an iterable format.
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps
//
// array jaise hi hotte//  map object hold key-value pairs remembers the original insertion order of keys koi duplicate value snhi hoti sirf unique values hoti // objects order ko yaad nhi rakhte
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // firse nhi ayi unique values hoti


console.log(map);

for (const [key, value] of map) { // sirf key lenge to ek ek value sarri aa jaingi aur alag alag lenge to [key , value ] lear to destructure ho jaiga
    console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
     
// }  // maps itertable hai ,objects ko iterate  karne ke doosre tarike hai