console.log("Event and Event Object");
// document.getElementById("heading").addEventListener("click", function(e) {
//   let variable;
//   console.log("You have clicked the heading yeah!!!");
//   variable = e.target;
//   variable = e.target.id;
//   variable = e.target.className;
//   variable = e.target.classList;
//   variable=e.offsetX;
//   variable=e.offsetY;
//   variable=e.clientX;
//   variable=e.clientY;
//   console.log(variable);
//   // location.href='//google.com';
// });
// document.getElementById("heading").addEventListener("mouseover", function(e) {
//     let variable;
//     console.log("You have clicked the heading yeah!!!");
//     variable = e.target;
//     variable = e.target.id;
//     variable = e.target.className;
//     variable = e.target.classList;
//     variable=e.offsetX;
//     variable=e.offsetY;
//     variable=e.clientX;
//     variable=e.clientY;
//     console.log(variable);
//     // location.href='//google.com';
//   });

//More on Events
let btn = document.getElementById("btn");
// btn.addEventListener("click", func1);
// btn.addEventListener("dblclick", func2);
// btn.addEventListener('mousedown',func3);

// function func1(e) {
// //   console.log("Thanks", e);
//   e.preventDefault();
// }

// function func2(e) {
//   console.log("Thanks its a double click", e);
//   e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks its a mouse down event", e);
//     e.preventDefault();
//   }

// document.querySelector(".no").addEventListener("mouseenter", function(e) {
//   console.log("U entered no");
// });
// document.querySelector(".no").addEventListener("mouseleave", function(e) {
//   console.log("U left no");
// });
document.querySelector(".container").addEventListener("mousemove", function(e) {
  console.log(e.offsetX,e.offsetY);
  document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetX+e.offsetY})`;
  console.log("You triggered mouse event");
});
