.const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0) // acc ki initial value di hai 0

//smart way of above 
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);




//Summary Cheat Code:
// for...in: Iterate over keys in an object or indices in an array.
// for...of: Iterate over values in an array, string, or other iterable.
// forEach(): Iterate over array values but does not return anything.
// map(): Creates a new array by transforming each element.
// filter(): Creates a new array by keeping only elements that pass a test.
//When to Use reduce():
//  reduce() When you need to accumulate or aggregate values into a single result (sum, product, max, min, count, etc.).