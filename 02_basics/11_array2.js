const marvelheros = ["thor","ironman", "spiderman"]
const dc = ["batman", "flash","superman"]

marvelheros.push(dc)  

console.log(marvelheros);
console.log(marvelheros[3][1]);//When you write marvelheros[3][1], you're accessing the second element (index 1) of the dc array.


// const allhero = marvelheros.concat(dc)
// console.log(allhero);// mergees 2 arrays returns new array properly

const all_new_heroes = [...marvelheros,...dc]// preferable in JavaScript is known as the spread operator. it is used to combine two arrays (marvelheros and dc) into a single array (all_new_heroes).
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[9,[4,5]]]
const real_another_array = another_array.flat(Infinity)//sabko ek array mein de deta  ()-depth ke liye hota agar infinity kardo to apne aap dekh leta
console.log(real_another_array);

console.log( Array.isArray("hitesh") )// asking it is array or not
console.log( Array.from("hitesh") )// converts it into array
console.log( Array.from({name: "hitesh"}) )// intresting isko nhi pta keys ka array bnana ya values ka islye empty de rha 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));//returns new element from set of elements





