
// function name(a,b){
//     console.log(a +" balraj hasti "+b)
// }
// name("suryansh",345);


// let sum = function(a,b){
//  return a+b;
// }
//  console.log (sum(2,5))

// let sum = (a,b) => a+b
// console.log (sum(3,4))

// let num = [1,2,3,4,5];
// console.log(num.length);
// console.log("I ")
// setTimeout(() => {
//     console.log("async ")
// }, 5000);
// console.log("am")


// result = 20.203;
// result = parseInt(result);
// console.log(result);
// console.log(typeof result) // parseint converts number in integer vaise hi parsefloat kar sakte

// let ch = 4; // Assigning a value to ch, assuming it's meant to represent a choice

// switch(ch) {
//   case 1:
//     console.log("1");
//     break;
//   case 2:
//     console.log("2");
//     break;
//   case 3:
//     console.log("3");
//     break;
//   default:
//     console.log("You pressed the wrong choice");
// }
// for ( i=1 ; i<=10 ;i++)
//   {
//   console.log("2 x " + i + " = " + 2*i)
//   }


  // function add (a,b,c){
  //   console.log(a+b+c);
  // }
  // let x=10;
  // let y=10;
  // add(x,y,10);

//   function add(a, b, c) {
//     return (a + b + c);
// }
// let x = 10;
// let y = 10;
// console.log(add(x, y, 10));
// So, the main difference between the two is the output:

// In the first code, the sum of x, y, and 10 is calculated and returned, then printed to the console.
// In the second code, the sum is calculated and directly printed to the console inside the add function. There's no explicit return value.

// function without name is called anonymous function
// let fun =function(){
//   console.log("hi");
// }

// fun();
//   // another way to envoke it is
//  ( function(){
//     console.log("hi");
//   })();

// arrow function

// let add = (a,b,c) => console.log(a+b+c);
// add(10,10,10);

  //  let name =["jon","jane","raam"]
  //  name.splice(3 ,0, "naam") ;
  //  console.log(name)


// loop

// calculate sum of 1 to 5
// let sum = 0;
// for (let i=1; i <= 5; i++){
//   sum = sum+i;
// }
// console.log("sum = ", sum)
// console.log("loop has ended")

// let i= 20;
// do {
//   console.log("apna college")
// }while (i<=10)

// for(let i=7 ;i<=10; i++){
//   console.log("suryansh pathania")
// }
 
// let i = 7;
// while (i<=10) {
//   console.log(" pathania");
// i++;
// }

// // PRINT ALL NUMBERS FROM 0 TO 100
// for (let i=0 ; i<=100 ; i++)
// {
//   console.log("i= ",i)
// }
// //  // print all even number from 0 to 100
//  for (let i=0 ; i<=100 ; i++)
//   {
//    if(i%2==0){
//      console.log("i= ",i);
//    }
//    else
//    {
//    }
//   }

//   // print all odd number from 0 to 100
//   for (let i=0 ; i<=100 ; i++)
//     {
//      if(i % 2 !== 0){
//        console.log("i= ",i);
//      }
//      else
//      {
//      }
//     }

let num = 16;

let userNumber = prompt("Enter number here");

while(userNumber != num){
 userNumber=prompt("you entered wrong number guess again");
}
console.log("you entered right number");