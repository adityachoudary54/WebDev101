console.log('Html element selectors');
/*
single element selectors
multiple element selectors

 */

//single element selectors
// let element=document.getElementById('first');
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
// element.style.color='red';
// element.innerText='Hello boy';
// element.innerHTML='<strong> hello world</strong>';
// console.log(element);

let sel=document.querySelector('h1');
sel=document.querySelector('#first');
sel=document.querySelector('.child');
sel=document.querySelector('div');
sel.style.color='green'
// console.log(sel);

//Multiple Element Selectors
let elems=document.getElementsByClassName('child');
elems=document.getElementsByClassName('container');
elems=document.getElementsByTagName('div')
Array.from(elems).forEach(function(element) {
    console.log(element);    
    element.style.color='blue';
});
console.log(elems);
