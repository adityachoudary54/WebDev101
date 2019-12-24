//Conditionals and Switches
const age = "65";
if (age == 19) {
  console.log("Age is 19");
} else if (age === 65) {
  //To compare type and value both
  console.log("Age is 65");
} else if (age !== 19 || age !== 65) {
  console.log("ur here");
} else {
  console.log("Age isn't 19");
}
// const vari=34;
if (typeof vari !== "undefined") {
  console.log("vari is defined");
} else {
  console.log("vari isn't defined");
}

const doesDrive = "true";
if (doesDrive) {
  console.log("You can drive");
} else {
  console.log("You can't drive");
}

console.log(age == 45 ? "Age is 45" : "Age is not 45");

switch (age) {
  case 18:
    console.log("You are 18");
    break;
  case 28:
    console.log("You are 28");
    break;
  case 32:
    console.log("You are 32");
    break;
  default:
    console.log(`You are ${age}`);
    break;
}
// let t=prompt('Enter a value:');
// console.log("The value is:"+t);




