// important loop  for each used exclusively for arrays
// Used to execute a provided function once for each array element. Does not return anything.

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){  // bina naam ka function
//     console.log(val);
// } )

// coding.forEach( (item) => {  // () => {} arrow function
//     console.log(item);
// } )

// function printMe(item){ 
//     console.log(item);
// }
// coding.forEach(printMe) // reference de rhe bas

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )