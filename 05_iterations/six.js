// A callback is a function that is passed as an argument to another function and is executed (or "called back") at a later point, often when some asynchronous operation has completed or when a specific condition is met.



// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => { // return doesnt store any value inside for each it shows undefined
//     //console.log(item);
//     return item
// } ) 

// console.log(values); 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    // it returns 

// const newNums = myNums.filter( (num) => {
//     return num > 4             // scope lga dia to return likhna parega agar scope nhi karte direct likh sakte
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History') // scope nhi hai 

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History" // scope open kia isliye return karna pra
})
  console.log(userBooks);


  //filter()
// Creates a new array with all elements that pass the test in the callback function.

// const arr = [1, 2, 3, 4, 5];
// const evenNumbers = arr.filter((value) => value % 2 === 0);  // Returns [2, 4]
// console.log(evenNumbers);
// Use case: To filter out elements from an array based on a condition.
// Returns: A new array with only the elements that pass the test.