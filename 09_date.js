//dates
let myDate = new Date()// date ka object ban gya
console.log(myDate);
console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 0 , 23)// 0 represents jan 
let myCreatedDate = new Date("01-16-2002")// another way to start from desired date 
console.log(myCreatedDate.toString());


let myTimeStamp = Date.now()//The code gets the current time in milliseconds and logs it to the console. This is a common practice for obtaining precise timestamps in JavaScript applications.Measuring time intervals (e.g., calculating the duration between two events).

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());// we compare 2 values to to get date
console.log(Math.floor(Date.now()/1000))// /1000 converts in seconds as they are in milliseconds math.floor removes decimal
let newDate = new Date()
    console.log(newDate);
    console.log(newDate.getMonth());// 0 se start kar rha

 console.log(   newDate.toLocaleString('default',{
        weekday: "short"
    

    }))// using locale-specific conventions.





