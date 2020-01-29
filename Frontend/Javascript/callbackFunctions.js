console.log("This is callback functions tutorial");

// Pretend that this response is coming from the server
let students=[
    {name:"Adi",subject:"Javascript"},
    {name:"Arnav",subject:"Machine Learning"}
]
function enrollStudent(student,callback) {
    //setTimeout runs in background.
    setTimeout(function() {
        students.push(student);
        callback();
    }, 3000);
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
    }, 1000);
}
let newStudent={name:'Aditya',subject:'Maths'};
enrollStudent(newStudent,getStudents);