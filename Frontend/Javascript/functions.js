// function greeting(name) {
//   console.log(`Happy birthday to ${name}`);
// }
// function identity(number) {
//     if((typeof number)===(typeof 1)){
//         return number;
//     }
//     return "This isnt a number";
// }
// console.log("This is functions module");
// // let name='Skillf';
// // console.log(`Happy birthday to ${name}`);
// // greeting(prompt('Enter ur name'));
// greeting('hulahula');
// let val=identity(23);
// console.log(val);
// val=identity('23');
// console.log(val);
// const hello=function(name){
//     console.log('Hello '+name);
// }
// hello('tmtmtmtmtmtm');

// const myobj={
//     name:"SkillF",
//     game:function() {
//         return "GTA";
//     }
// }
// console.log(myobj.game());

// arr=['fruit','vegetable','furniture'];
// arr.forEach(function(element,index,array) {
//     console.log(element,index,array);
// });

//Scope
/*
let/const has block level scope
var has function level scope
 */
{
  var i = 234;
  console.log(i);
}
console.log(i);//doesnt works for let

function ui(name) {
  i = 10;
  return `This is a ${name}`;
}
console.log(ui("adi"));
console.log(i);
