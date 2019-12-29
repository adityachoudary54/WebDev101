console.log("dateTimeObject");
let today=new Date();
console.log(today);
console.log(typeof today);
let otherDate=new Date('8-4-2003 04:54:08');//month-date-year
otherDate=new Date('October 14 1997');
otherDate=new Date('10/14/1997 15:30:28');//mm-dd-yyyy
// console.log(otherDate);
let a=otherDate.getDay();
a=otherDate.getDate();
a=otherDate.getMinutes();
a=otherDate.getSeconds();
a=otherDate.getHours();
a=otherDate.getTime();
a=otherDate.getMilliseconds();
a=otherDate.getMonth();
otherDate.setDate(23);
otherDate.setMonth(3);
otherDate.setFullYear(2006);
otherDate.setMinutes(1);
otherDate.setSeconds(1);
otherDate.setHours(1);
// console.log(a);
console.log(otherDate);


