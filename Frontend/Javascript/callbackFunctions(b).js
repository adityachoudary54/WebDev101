console.log("This is callback functions tutorial");

// Pretend that this response is coming from the server
let students=[
    {name:"Adi",subject:"Javascript"},
    {name:"Arnav",subject:"Machine Learning"}
]
function enrollStudent(student) {
    //setTimeout runs in background.
    return new Promise(function (resolve,reject) {
        setTimeout(function() {
            students.push(student);
            resolve();
        }, 1000);
    })
    
}


let temp=document.createElement('ul');
temp.id='students';
temp.innerHTML=`<h1>Students list</h1>`
let body=document.querySelector('body');
body.appendChild(temp);

function getStudents() {
    setTimeout(function() {
        let str="";
        students.forEach(function (student) {
            str+=`<li>${student.name}</li>`;
        })
        document.getElementById('students').innerHTML=str;
    }, 5000);
}
let newStudent={name:'Aditya',subject:'Maths'};

enrollStudent(newStudent).then(function(){
    getStudents();
}).catch(function () {
    console.log("Some error occured");
    
});