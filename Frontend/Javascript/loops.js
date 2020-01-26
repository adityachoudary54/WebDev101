console.log("Loops");

//for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//while loop
let j = 0;
while (j < 10) {
  console.log(`hello im here ${j}`);
  j += 1;
}
//do-while loop
do {
    console.log('I came here');
    j+=1;
}while(j<10);

do {
    console.log(`I am fine ${j}`);
    j++;
}while(j<15);

//break and continue

let k=0;
do{    
    if(k===5){
        break;
    }
    console.log(k+1);
    k++;    
}while(k<10);

k=0;
do{    
    if(k===5){
        k++;
        continue;
        
    }
    console.log(k+1);
    k++;    
}while(k<10);

console.clear();
let arr=[1,2,3,4,5];

arr.forEach(function(element,index,array){
    console.log(element,index,array);    
});
let obj={
    name:"Rohan Das",
    age:78,
    type:"Dangerous programmer",
    os:"Ubuntu"
}
for(let key in obj){
    console.log(`${key} of object is ${obj[key]}`);    
}

