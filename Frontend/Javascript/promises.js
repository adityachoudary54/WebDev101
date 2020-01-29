// Promise
// -resolve
// -reject
// -pending
console.log('Promises');

function func1(){
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            const error=true;
            if(!error){
                console.log("Function: Your promise has been resolved");
                resolve();  
            } else{
                console.log("Function: Your promise has been rejected");
                reject('Sorry not fulfilled');
                
            }
                      
        }, 2000);
    })
}
func1().then(function () {
    console.log("Adi:Thanks for resolving");
}).catch(function (error) {
    console.log("Adi:Very bad bhai"+error);
})

// func inside then->resolve()
// func inside catch->reject()
