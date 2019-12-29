console.log("Object Oriented Javascript");

//Object Literal
let car = {
    name: "Maruti 800",
    topSpeed: 89,
    run: function() {
        console.log("Car is running");
    }
};
// console.log(car);
// car.run();

//Already seen constructors
//new Date();

//Creating a constructor
function generalCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function() {
        console.log(`${this.name} is running`);
    };
    this.analyze=function() {
        console.log(`Slower by ${300-this.topSpeed}MPH from Bugati`);        
    }
}
car1 = new generalCar("Pagani", 200);
car1.run();
