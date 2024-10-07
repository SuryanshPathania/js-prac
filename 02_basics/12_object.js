//object ko declare karne karne ke 2 method ek literal ki tarah ek constructor ki tarh
//literals mein siglton nhi banta constructor se agar banega to singleton bnega
// Object.create//constructor method


//symbol
const mysYm = Symbol("Key1") // symbols lo usse object key mein add karo aur print karke dikaho


//object literals

const jsuser ={
    name: "hitesh",
    "full name": "Suryansh pathania",
    age: 18,
   [mysYm]:"mykey1", //[]mein use karoge to symbol ayega aur without it string
    location:"jaipur",
    email:"hitesh@gmail.com",
    isLoggedin: false,
    LastLoginDays: ["Monday", "tuesday"]

}

console.log(jsuser.email);
console.log(jsuser["email"]);//another way to call
console.log(jsuser["full name"]);// not work for line 10 so need to use square notation
 console.log(jsuser.mysYm);//not being used as symbol but string
 console.log(jsuser[mysYm]);

 jsuser.email = "hitesh23@gmail.com"// overwrite
//  Object.freeze(jsuser)// doesnt allow to change values in object
 jsuser.email = "reddit.com"
 console.log(jsuser);

jsuser.greeting = function()
{
    console.log("hello js user");
}
// console.log(jsuser.greeting); // function ka reference aata

jsuser.greetingTwo = function()
{
    console.log(`hello js user, ${this.name}`); // string interpolation 
    // jab same object ko reference karna to likhna hota this
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

