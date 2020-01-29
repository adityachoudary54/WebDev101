console.log("Ajax tutorial");
let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);
function buttonClickHandler() {
    console.log("You have clicked the fetchBtn");    
    // Instantiate an xhr object
    const xhr=new XMLHttpRequest();
    // xhr.open('GET','adi.txt',true);//means we will only fetch
    // POST means we will give url as well as data and get response accordingly.
    //Here true means that the page wouldn't be blocked and resume its normal functioning.
    
    // Use this for post request
    xhr.open('POST',"http://dummy.restapiexample.com/api/v1/create",true);
    xhr.getResponseHeader("Content-type",'application/json')
    //What to do on progress(optional)
    xhr.onprogress=function () {
        console.log('On progress');        
    }
    xhr.onreadystatechange=function () {
        console.log("ready state is :"+xhr.readyState);
        
    }
    //when everything is completed(when response is ready)
    xhr.onload=function () {
        if(this.status===200){
            console.log(this.responseText);
        }else{
            console.error("Some error occured");
        }
        
    }
    params=	`{"name":"test","salary":"123","age":"23"}`
    ;
    //send the request
    xhr.send(params);
    console.log("We are done");
    
}
let populateBtn=document.getElementById('populateBtn');
populateBtn.addEventListener('click',buttonClickHandlerPopulate);
function buttonClickHandlerPopulate() {
    console.log("You have clicked the pop handler");    
    // Instantiate an xhr object
    const xhr=new XMLHttpRequest();
    
    // Open the object
    xhr.open('GET',"http://dummy.restapiexample.com/api/v1/employees",true);
    xhr.onload=function () {
        if(this.status===200){
            let obj=JSON.parse(this.responseText);
            let list=document.getElementById('list');
            let data=obj['data'];
            data.forEach(function(ele) {
                list.innerHTML+=`
                <li class="list-group-item">${ele['id']}</li>
                <li class="list-group-item">${ele['employee_name']}</li>
                <li class="list-group-item">${ele['employee_salary']}</li>
                <li class="list-group-item">${ele['employee_age']}</li>
                
                `
            })
            console.log(obj);
            console.log(data);
            
            
        } else{
            console.log("Some error occured");
        }
    }
    // xhr.onreadystatechange=function () {
    //     console.log(xhr.readyState);
        
    // }
    xhr.send();
    console.log("We are done fetching employees data");
    
}