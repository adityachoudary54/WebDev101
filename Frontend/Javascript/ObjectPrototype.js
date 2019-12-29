console.log("Object prototype");

/*
Javascript already has Object.prototype
Object literal is created using this prototype
When we use constructor prototype of the constructor is used
*/
//Using object literal
let obj={
    name:"Aditya",
    channel:"Rockerz",
    address:"Delhi"
}
function Obj(givenName) {
    this.name=givenName;    
}
Obj.prototype.getName=function() {
    return this.name;
}
Obj.prototype.setName=function(name) {
    this.name=name;
}
//never use Object.prototype
//apna constructor bnao uske object ko edit krte rho 
let obj2=new Obj('Aditya')
obj2.setName('golu')
console.log(obj2);
