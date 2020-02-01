console.log('character sets');
// Regular Expressions
    // Basic Functions
    // Metacharacter Symbols 
    // Character Sets


// Character sets-[]
let regex=/Ad[123]tya/;
regex=/Ad[^123]tya/;
regex=/Ad[a-zA-Z]tya/;

// Quantifiers-{}
regex=/A{2}ditya/i;//exactly 2 times
regex=/a{0,2}ditya/;//from 0 to 2 including 2

//groupings=()
regex=/(adi){2}/;
const str='aditya Bhai aaditya adiadi 128973891283';

let res=regex.exec(str);
console.log("The result from exec is ->",res);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);    
} else{
    console.log(`The string ${str} doesn't matches the expression ${regex.source}`);        
}