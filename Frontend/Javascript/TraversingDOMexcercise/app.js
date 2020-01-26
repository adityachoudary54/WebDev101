console.log("Traversing DOM");
let characters=document.querySelector('.characters');
console.log(characters);
let humans=characters.querySelector('.humans');
console.log(humans);
let allHumans=document.querySelectorAll('.humans');
console.log(allHumans);
let hobbits=characters.children[0];
console.log(hobbits);
let merry;
Array.from(hobbits.children).forEach(function (ele) {
    // console.log(ele.innerHTML.toLowerCase());    
    let temp=ele.innerHTML.toLowerCase();
    if(temp.indexOf(`"merry"`)!==-1){
        merry=ele;
    }
})
console.log(hobbits.children);
console.log(merry);
let enemies=document.querySelector('.enemies');
console.log(enemies);
let sauron;
Array.from(enemies.children).forEach(function (ele) {
    // console.log(ele.innerHTML.toLowerCase());    
    let temp=ele.innerHTML.toLowerCase();
    if(temp.indexOf(`sauron`)!==-1){
        sauron=ele;
    }
})
console.log(sauron);
