console.log('Project 4');
const name=document.getElementById('name');
const email=document.getElementById('email');
const mobileNumber=document.getElementById('mobileNumber');
let valid=false;
let validEmail=false;
let validPhone=false;
let validName=false;
name.addEventListener('blur',()=>{
    // console.log('name is blurred');
    //validate name here
    let regex=/^[a-zA-Z]([0-9a-zA-Z ]){2,9}$/;
    let str=name.value;
    // console.log(regex.test(str));
    if(!regex.test(str)){
        // add and remove to classList can also be done
        name.className='form-control is-invalid';
        validName=false;
    } else{
        if(regex.exec(str)[0].length==str.length){
            name.className='form-control is-valid';
            validName=true;
        } else{
            name.className='form-control is-invalid';
            validName=false;

        }
    }
})
email.addEventListener('blur',()=>{
    // console.log('email is blurred');
    //validate email here
    let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]+)$/;
    let str=email.value;
    // console.log(regex.test(str));
    if(!regex.test(str)){
        // add and remove to classList can also be done
        email.className='form-control is-invalid';
        validEmail=false;

    } else{
        if(regex.exec(str)[0].length==str.length){
            email.className='form-control is-valid';
            validEmail=true;
        } else{
            email.className='form-control is-invalid';
            validEmail=false;

        }
    }
})
mobileNumber.addEventListener('blur',()=>{
    // console.log('mobileNumber is blurred');
    //validate mobileNumber here
    let regex=/^[0-9]{10}$/;
    let str=mobileNumber.value;
    // console.log(regex.test(str));
    if(!regex.test(str)){
        // add and remove to classList can also be done
        mobileNumber.className='form-control is-invalid';
        validPhone=false;

    } else{
        if(regex.exec(str)[0].length==str.length){
            mobileNumber.className='form-control is-valid';
            validPhone=true;
        } else{
            mobileNumber.className='form-control is-invalid';
            validPhone=false;

        }
    }
})

let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    let success=document.getElementById('success');    
    let failure=document.getElementById('failure'); 
    e.preventDefault();
    if(validEmail&&validName&&validPhone){
        console.log('Everything is fine.');
        success.classList.add('show');        
        // failure.classList.remove('show');
        $('#failure').alert('close');
        valid=true;
    } else{
        console.log('check the form details');
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#success').alert('close');

    }
    
})