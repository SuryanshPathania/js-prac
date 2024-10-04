// const tinderUser = new Object() //one of way declaring object / singleton object

const tinderUser = {}// non singleton object

 tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
//  console.log(tinderUser);


const regularUser ={
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

