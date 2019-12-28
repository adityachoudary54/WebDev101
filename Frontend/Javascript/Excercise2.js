console.log("Excercise 2");
/*
Create a div and inject it into heading.
Whenever someone clicks on the div,it should converted into an editable item, whenever user clicks away(blur). Save the note into local storage.
 */
let ele = document.querySelector("h1#heading");
let eventObj = document.createElement("div");
eventObj.id = "Ex2div";
eventObj.className = "Ex2div";
eventObj.style.color = "red";
// let text = document.createTextNode("I am an editable text");
// let para=document.createElement('p');
// para.id='Ex2para';
// para.className='Ex2para';
// para.appendChild(text);
// eventObj.appendChild(para);
console.log(eventObj);
if(localStorage.getItem('myCode')!==null){
    eventObj.innerText=localStorage.getItem('myCode');
  }
  else{
    eleDiv.innerText="Enter your code";
  }
ele.appendChild(eventObj);
eventObj.addEventListener("click", function(e) {
  console.log("hello");
  // let editObj=document.createElement('form');
  // editObj.id='Ex2form';
  // editObj.className='Ex2form';
  // let edittext=document.createElement('textarea');
  // edittext.id='Ex2text';
  // edittext.className='Ex2text';
  // editObj.appendChild(edittext);
  // eventObj.replaceWith(editObj);
  eventObj.contentEditable = "true";  
  e.preventDefault();
});

eventObj.addEventListener("blur", function(e) {
  // let editObj=document.createElement('div');

  console.log("blur");

  // let textVal=document.querySelector('Ex2text');
  // let textContent=textVal.nodeValue;
  // console.log(textContent);
  let text1 = eventObj.innerText;
  localStorage.setItem("myCode", text1);
  e.preventDefault();
});
