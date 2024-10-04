//object ko declare karne karne ke 2 method ek literal ki tarah ek constructor ki tarh
//literals mein siglton nhi banta constructor se agar banega to singleton hoga
// Object.create//constructor method


//symbol
const mysYm = Symbol("Key1")


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
console.log(jsuser["full name"]);// not work for line 10 so need to above square notation
 console.log(jsuser.mysYm);//not being used as symbol but string
 console.log(jsuser[mysYm]);

 jsuser.email = "hitesh23@gmail.com"// overwrite
//  Object.freeze(jsuser)// doesnt allow to change values
 jsuser.email = "reddit.com"
 console.log(jsuser);

jsuser.greeting = function()
{
    console.log("hello js user");
}
// console.log(jsuser.greeting());

jsuser.greetingTwo = function()
{
    console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

