console.log("Prototype Inheritance");

const proto={
    slogan:function() {
        return "This company is the best";
    },
    changeName:function(name) {
        this.name=name;
    }
}
//this creates object
const adi=Object.create(proto);
adi.name="adi";
adi.role="Programmer";
adi.changeName('adi2')
// console.log(adi);
//this also creates object
const harry=Object.create(proto,{
    name:{value:"harry",writable:true},
    role:{value:"Programmer"}
})
harry.changeName('harry2');
// console.log(harry);

//Employee constructor
function Employee(name,salary,experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}
//Slogan
Employee.prototype.slogan=function() {
    return `This company is the best. Regards ${this.name}`;
}

let bandar=new Employee("bandar",450000,20);
console.log(bandar);

//Programmer
function Programmer(name,salary,experience,language) {
    Employee.call(this,name,salary,experience);
    this.language=language;
}

//inherit the prototype
Programmer.prototype=Object.create(Employee.prototype);
//Manually set the constructor
Programmer.prototype.constructor=Programmer;

let rohan=new Programmer('rohan',700000,12,"Python");
console.log(rohan);

//food->cake(quiz)
function flour(quantity) {
    this.quantity=quantity;
}
flour.prototype.setQuantity=function(quantity) {
    this.quantity=quantity;
}
flour.prototype.getQuantity=function() {
    return this.quantity;
}
let aata=new flour(20);
console.log(aata,aata.setQuantity(30),aata.getQuantity());

function cake(flour_quantity,sugar_quantity) {
    flour.call(this,flour_quantity);
    this.sugar=sugar_quantity;
}
cake.prototype=Object.create(flour.prototype);
cake.prototype.constructor=cake;
let fruit_cake=new cake(60,10);
console.log(fruit_cake,fruit_cake.setQuantity(40),fruit_cake.getQuantity());


