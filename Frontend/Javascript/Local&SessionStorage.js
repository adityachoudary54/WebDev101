console.log('Local And Session Storage');
//Add a key,value pair inside local storage
localStorage.setItem('Name','Aditya');
localStorage.setItem('Name2','A');
// localStorage.clear();//Clears the entire local storage

//Clear a particular key,value pair
// localStorage.removeItem('Name')
let name=localStorage.getItem('Name2');
console.log(name);

//Adding an array to local storage(cant be done directly)
let impArray=['adrak','pyaz','bhindi']
//Wrong method
// localStorage.setItem('sabzi',impArray);
//Right method
localStorage.setItem('sabzi',JSON.stringify(impArray));
name=JSON.parse(localStorage.getItem('sabzi'));
console.log(name);

//Session Storage
sessionStorage.setItem('SessionName','sAditya');
sessionStorage.setItem('SessionName2','sA');