console.log("var&const");
//Variables in js
// var,let,const
var name = "Aditya";
var channel;
var marks = 34;
channel = "Yeah man";
console.log(name, channel, marks);
//Rules for creating javascript variables
/*
1. Cannot start with numbers.
2. Can start with letter,$ etc.
3. Are case sensitive
 */
var city = "Delhi";
console.log(city);
const OwnersName = "Hari Ram";
//OwnersName='Hari Ram' // cant do this
console.log(OwnersName);

//var is global variable
{
  let city = "Rampur"; //let is a local variable
  console.log(city);
}
console.log(city);

//We can add and remove elements of an array but we cannot reinitialize it.
const arr1=[1,2,3,4];
//arr1=[2,5,3] //This is wrong
arr1.push(5);
arr1.pop();
console.log(arr1);

// Most common programming case types
/* 
1.camelCase
2.kebab-case
3.snake_case
4.PascalCase
*/ 