/*Primitive datatype-stack
reference datatype- heap */

//Primitive data types
//string
let s='Aditya';
console.log('Data type is:'+(typeof s));

//number
let num=28;
console.log('Data type is:'+(typeof num));

//boolean
let isDriver=true;
console.log('Data type is:'+(typeof isDriver));

//null(bogus return type,is a primitive data type)
let nullVar=null;
console.log('Data type is:'+(typeof nullVar));

//Undefined
let undef=undefined;
console.log('Data type is:'+(typeof undef));

//Reference datatypes

//Arrays
myarr=[1,2,3,4,false,'string'];
console.log(myarr+"data type is:"+(typeof myarr));

//Object Literals
let marks={
    harry:34,
    Shubham:36,
    adarsh:22
}
console.log(marks);
console.log("Data Type is:"+(typeof marks));

//function
function findName() {
    
}
console.log(typeof findName);

//Date
let date=new Date();
console.log(typeof date);






