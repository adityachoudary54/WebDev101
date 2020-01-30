console.log('Aysnc await');
// This returns a promise
// async function greet(){
//     console.log("Inside function greet");
//     // await makes the promise given to it wait(await can only be use with async functions)
//     const response=await fetch('https://api.github.com/users');
//     // console.log(response);    
//     console.log('before response');
//     const users=await response.json();
//     console.log('users are here');
//     return users;
//     // return "hello";
// }
// let a=greet();
// console.log("Before calling greet");
// console.log(a);
// a.then(data=>console.log(data)).catch((error)=>console.log("Error has been detected"+error));
// console.log("After calling greet");

// Using async/await for post data
async function postData(){
    let url="http://dummy.restapiexample.com/api/v1/create";
    let dataSupplied=JSON.stringify({name:"adi","salary":"123",age:"23"});
    params={
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:dataSupplied
    }
    const response=await fetch(url,params);
    const data=await response.json();
    return data;
};
let post=postData();
post.then((data)=>console.log(data));
