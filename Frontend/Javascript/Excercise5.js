console.log("Excercise 5");        
let populate=document.getElementById('words');
populate.addEventListener('click',function (e) {    
    console.log("Hello");
    const xhr=new XMLHttpRequest();
    xhr.open('GET','dummyWordObject.txt',true);
    xhr.onload=function () {
        
        if(this.status===200){
            let obj=JSON.parse(this.responseText);
            let res=obj['results'];
            let str="";
            res.forEach(function(ele) {
                str+=`<li>${ele["definition"]}</li>`;
            });
            let listDef=document.getElementById('listDef');
            listDef.innerHTML=str;
        }
    }
    xhr.send();
    console.log("We are done");
    
})