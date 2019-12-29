console.log("Excercise 2 using forms js");
/*
Create a div and inject it into heading.
Whenever someone clicks on the div,it should converted into an editable item, whenever user clicks away(blur). Save the note into local storage.
 */
let ele = document.querySelector("h1#heading");
let eventObj = document.createElement("div");
eventObj.id = "Ex2div";
eventObj.className = "Ex2div";
eventObj.style.color = "red";
// console.log(eventObj);
if (localStorage.getItem("myCode") !== null) {
    eventObj.innerText = localStorage.getItem("myCode");
} else {
    eventObj.innerText = "This is the editable div";
}
ele.appendChild(eventObj);
eventObj.addEventListener("click", function(e) {
    let editObj = document.createElement("form");
    editObj.id = "Ex2form";
    editObj.className = "Ex2form";
    let edittext = document.createElement("textarea");
    edittext.id = "Ex2text";
    edittext.className = "Ex2text";
    editObj.appendChild(edittext);
    eventObj.replaceWith(editObj);
    // console.log(editObj);
    edittext.addEventListener("blur", function(e) {
        // console.log("hello");
        eventObj.innerText = edittext.value;
        localStorage.setItem("myCode", edittext.value);
        editObj.replaceWith(eventObj);
    });
});
