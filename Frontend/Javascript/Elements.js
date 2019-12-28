console.log('Creating, Removing and Replacing Elements');
let element=document.createElement('li');
let text=document.createTextNode('I am a text node');
element.appendChild(text);
//Add a classname to li
element.className='childu1';
element.id='createdLi';
element.setAttribute('title','mytitle');
// element.innerText='Hello this is created by Aditya';
let ul=document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);

let elem2=document.createElement('h3');
elem2.className='elem2';
elem2.id='elem2';

let tnode=document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);
let myul=document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr=elem2.getAttribute('class');
elem2.removeAttribute('id');
elem2.setAttribute('title','myelem2title');
console.log(elem2,pr);

let elem3=document.createElement('h6');
elem3.className='elem3';
elem3.id='elem3';
let text3=document.createTextNode('Go to google');
elem3.appendChild(text3);
let elem4=document.createElement('a');
let text4=document.createTextNode('Click here');
elem4.appendChild(text4);
elem4.className='elem4';
elem4.id='elem4';
elem4.setAttribute('href','//www.google.com');
let startEle=document.querySelector('h1#heading');
startEle.appendChild(elem3);
startEle.appendChild(elem4);
 
