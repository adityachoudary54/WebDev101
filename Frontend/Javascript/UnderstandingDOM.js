console.log("Understanding DOM & Creating a Website Layout");
let a=document;
a=document.all;
// a=document.body;
// a=document.forms[0];
// Array.from(a).forEach(function(element) {
//     console.log(element);    
// });
a=document.links[0].href
let x=[];
Array.from(document.links).forEach(function(element) {
    if(!(element in x)){
        x.push(element.href);
    }    
});
console.log(x)
a=document.scripts
a=document.images
console.log(a);
