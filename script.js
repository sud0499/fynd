// var my_name = "sudhanshu";
// var my_numb = 90;
// var bool = false;

// console.log(typeof my_name);
// console.log(typeof my_numb);
// console.log(typeof bool);


// * =
// * Value of right operand is assigned to left operand. 
// * 
// * ex. var a = 23;
// * 
// * +=
// *  add right operand value to left operand and assigns to left operand.
// * 
// * -=
// * subtract right operand value from left operand and assign value to left operand
// * 
// * *=
// * multiply right operand value to left operand and assign value to left operand
// * 
// * 
// * /=
// * divides the value of left operand with right operand and stores the value in the left operand
// * 
// * 
// * %=
// * divides the value of left operand divided by the value of right operand and assign the remainder value of division to the left operand
// *

// console.log(5!=5&&6==6)
// console.log(5==5&&6==6)
// console.log(!(5!=5||6==6))
// console.log(5==5||6==6)

// console.log(5==5)
// console.log(5=="5")
// console.log(5===5)
// console.log(5==="5")

// if(NaN){
//     console.log("truthy");
// }else{
//     console.log("falsy")
// }
// if(-1){
//     console.log("truthy");
// }else{
//     console.log("falsy")
// }
// if(0){
//     console.log("truthy");
// }else{
//     console.log("falsy")
// }
// if([]){
//     console.log("truthy");
// }else{
//     console.log("falsy")
// }
// if(["",""]){
//     console.log("truthy");
// }else{
//     console.log("falsy")
// }
// if("hi"){
//     console.log("truthy");
// }else{
//     console.log("falsy")
// }

// console.log(23+10);
// console.log(23+"10");
// console.log("23"+10);
// console.log(23-10);
// console.log(23-"10");
// console.log("23"-10);
// console.log("23"-"10");

// Function
// Anonymous Function
// switch case
// function first(){
//     let name="Sud";
//     return function second(){
//         console.log(name);
//     }
// }
// var func_call=first()
// console.log(func_call())


//function first(name){
    
//     return function second(){
//         console.log(name);
//     }
// }
// var func_call=first("sud");
// console.log(func_call());

// function grandparent(params1) {
//     console.log("print This");
//     return function parent(params2) {
//       return function child(params3) {
//         return params1 + params2 + params3;
//       };
//     };
//   }
  
//   var catch_parent = grandparent(2);
//   var catch_child = catch_parent(3);
//   var final_result = catch_child(5);
//   console.log(final_result());
  
// Switch Case Closure
let i=0
function sum(){
  return function s2(){
    i++;
    return i;
  }
}

function day(d){
  switch(d){
    case 0:
      console.log("sunday");
      break;
    case 1:
      console.log("monday");
      break;
    case 2:
      console.log("tuesday");
      break;
    case 3:
      console.log("wednesday");
      break;
    case 4:
      console.log("thursday");
      break;
    case 5:
      console.log("friday");
      break;
    case 6:
      console.log("saturday");
      break;
    default:
      x=sum();
      y=x();
      if(y==1){
        console.log("You have not given any value")
      }
      else{
        console.log("still You have not given any value")
      }
      break;
  }
}

day(0);
day(6);
day();
day();



let iter=0
function summ(){
  return function summ2(){
    iter++;
    return iter;
  }
}

function parent(){
  m=summ();
  n=m();
  console.log("you have called "+n+" times.")
}

parent();
parent();