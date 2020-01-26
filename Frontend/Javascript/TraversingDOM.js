console.log('Traversing DOM');
let cont=document.querySelector('.no');
cont=document.querySelector('.container')
let nodeName=cont.childNodes[0].nodeName;
let nodeType=cont.childNodes[0].nodeType;
console.log(nodeType);
console.log(nodeName);
console.log(cont.childNodes);

//Node types
/*
1. element
2. attribute
3. text node
8. Comment
9. document
10. docType
 */
// console.log(cont.childNodes);
// console.log(cont.children);//doesn't shows text.comment etc.

let container=document.querySelector('.container');
// console.log(container.children[1].children[0].children);
// console.log(container.firstElementChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount);
 console.log(container.firstElementChild.parentNode);
 console.log(container.firstElementChild); 
 console.log(container.firstElementChild.nextElementSibling);
 








