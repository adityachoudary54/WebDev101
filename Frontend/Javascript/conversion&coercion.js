// type conversion and coercion
let myVar;
myVar=34;
console.log(myVar);
let strMyVar;
strMyVar=String(myVar);
console.log(strMyVar,typeof strMyVar);

let booleanVar=true;
let strBooleanVar=String(booleanVar);
console.log(typeof booleanVar,typeof strBooleanVar);

let date=new Date();
console.log(date,typeof date);
console.log(String(date) ,typeof String(date));

let arr=String([1,2,3,4,5]);
console.log(arr.length,(typeof arr));//9

let i=8;
console.log(i.toString());
 
let stri=Number('3434');//gives float value
console.log(stri,(typeof stri));

let number=parseInt('34');//only gives int value
console.log(number,(typeof number));
number=parseFloat('34.098');
console.log(number,(typeof number));

console.log(number.toFixed(6),(typeof number));

//Type coercion
let myStr='698';
let myNum=34;
console.log(myStr+myNum);//69834





