console.log('Regular Expression');
// Regular expression literal
let reg=/adi/;
console.log(reg);
console.log(reg.source);//Gives the content in regular expression literal

//flags
// 1. g- global search
// 2. i- insensitive search

// Functions to match expressions
// applied on regular expression literal
// 1. exec()-returns array for match, null for no match
// 2. test()-returns true of false
// is applied on string
// 3. match()- it will return array of results or null
// 4. search()- returns index of first match or -1
// 5. replace()- returns new replaced string with all the replacements.
console.log('exec function');

let s='adi is here. adi will help u';
let res=reg.exec(s);
console.log(res);
res=reg.exec(s);
console.log(res);

let regGlobal=/adi/g;//used for searching globally
res=regGlobal.exec(s);
console.log(res);
res=regGlobal.exec(s);
console.log(res);
res=regGlobal.exec(s);
console.log(res);

let regInsensitive=/adi/ig;
s='Adi is here.adi will go on trip to bhatura land.';
res=regInsensitive.exec(s);
console.log(res);
res=regInsensitive.exec(s);
console.log(res);
res=regInsensitive.exec(s);
console.log(res);

// for test function
console.log("test function");

res=reg.test(s);
console.log(res);

// for match function
console.log("match function");

reg=/adi/ig;
s='Adi is here.adi will go on trip to bhatura land.';
res=s.match(reg);
console.log(res);

// for search function
console.log('search function');

reg=/adi/ig;
s='Adi is here.adi will go on trip to bhatura land.';
res=s.search(reg);
console.log(res);
res=s.search(/jxalxnaskx/);
console.log(res);

//for replace function
console.log('replace function');
res=s.replace(/adi/ig,'pakoda');
console.log(res);


