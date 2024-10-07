// const tinderUser = new Object() //one of way declaring object / singleton object

const tinderUser = {}// non singleton object

 tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
//  console.log(tinderUser);

//objects ke andar object
const regularUser = {
    email: "some@gmail.com",
    fullname:  {
        userfullname:{
            firstname:"hitesh",
            lastname:"sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname);// dot karke andar tak nesting dekh sakte

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obt3 = {obj1 , obj2}
// console.log(obt3);// never right way of merging
// const obj3 =Object.assign({},obj1 , obj2)// {} industry method but not compulsory (2nd best way )

//best way
const obj3 = {...obj1, ...obj2}// using spread operator


console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));// sarri keys ko array mein rakhdeta
console.log(Object.values(tinderUser));// values
console.log(Object.entries(tinderUser));// use less  har key value ko array bna deta

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// asking if this object has isloggedin returns boolean

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor


// +++++++++++++++++++++++++

//object de-structure
const {courseInstructor: instructor} = course // another way baar course. course . likhne ki jagah yeh use hota
//agar courseintructor bada naam lag rha to use name de sakte
// console.log(courseInstructor);
console.log(instructor);


//json
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// api- apna kaam kisi ur ko dena
[
    {},
    {},
    {}
]