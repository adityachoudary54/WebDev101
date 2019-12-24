//Arrays and objects
let marks=[34,25,93,88];
const fruits=['apple','orange','pineapple'];
const mixed=['tstr',89,[3,5]];

const arr=new Array(23,123,45,'Orange');
console.log(arr);
console.log(marks);
console.log(fruits);
console.log(mixed);

console.log(arr.length);//property
console.log(Array.isArray(arr));
console.log(Array.isArray('sdcbaj'));
arr[0]='adi';
console.log('element:',arr[0]);
console.log(arr);

let value=marks.indexOf(34);
console.log(value);

//Mutating or modifying the arrays
marks.push(56);
console.log(marks);
marks.unshift(11);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);
marks.splice(1,2);//(startIndex,noOfElementsToRemove)
console.log(marks);
marks.reverse();
console.log(marks);
let marks2=[1,2,3,4];
marks=marks.concat(marks2);
console.log(marks);


//object
console.clear();
let myObj={
    name:'Harry',
    channel:'CodeWithHarry',
    isActive:true,
    marks:[1,5,3,6]
}
console.log(myObj);
console.log(myObj.isActive);
console.log(myObj['isActive']);













