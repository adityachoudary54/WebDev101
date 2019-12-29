console.log("math object");
let x=3;
let y=6;
let z=x+y;
z=x-y;
z=x/y;
//Exploring the Math object
z=Math;
z=Math.PI;
z=Math.E;
z=Math.round(4.5);
z=Math.ceil(4.5);
z=Math.floor(4.5);
z=Math.abs(-5);
z=Math.sqrt(5);
z=Math.pow(2,3);
z=2**3;
z=2**0.5;
z=Math.min(2,3,34,234,2342,34);
z=Math.max(2,3,34,234,2342,34);
z=Math.random();
function random_range(lower_limit,higher_limit) {
    return Math.ceil(Math.random()*(higher_limit-lower_limit)+lower_limit);
}
z=random_range(50,100);
console.log(z);
