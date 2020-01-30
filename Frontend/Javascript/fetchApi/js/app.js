console.log('Fetch API');
let myBtn=document.getElementById('myBtn');
let container=document.querySelector('.container');

url='../dummyWordObject.txt';
function getData(){
    console.log('started getData');
    
    fetch(url).then((response)=>{
        console.log('inside first then');        
        return response.text();
    }).then((data)=>{
        console.log('inside final then');
        
        console.log(data);        
    })
}
function getDataJSON(){
    console.log('started getData');
    
    fetch(url).then((response)=>{
        console.log('inside first then');        
        return response.json();
    }).then((data)=>{
        console.log('inside final then');
        
        console.log(data);        
    })
}
function postData(){    
    url="http://dummy.restapiexample.com/api/v1/create";
    data=JSON.stringify({name:"adi","salary":"123",age:"23"});
    params={
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        // use stringify if data isnt a string
        body:data
    }
    fetch(url,params).then(response=>response.json()).then((data)=>{        
        console.log(data);        
    })
}
console.log('Before running getdata');
getData();
getDataJSON();
console.log('After running getdata');
