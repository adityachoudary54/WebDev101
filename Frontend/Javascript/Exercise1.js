//variable mein website ka link lena hai
//fetch all the links containing the given text
let a = prompt("Enter the text:");
Array.from(document.links).forEach(function(element) {
  if (element.href.includes(a)) {
    console.log(element.text);
  }
});
