console.log("Understanding DOM & Creating a Website Layout");
let a=document;
a=document.all;
// a=document.body;
// a=document.forms[0];
// Array.from(a).forEach(function(element) {
//     console.log(element);    
// });
a=document.links[0].href
Array.from(document.links).forEach(function(element) {
    console.log(element.href);
    
});
console.log(a)
a=document.scripts
a=document.images
console.log(a);
