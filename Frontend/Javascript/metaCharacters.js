console.log('Metacharacters');
let regex=/adi/;
// Some meta characters
regex=/^a/;//finds the strings starting with given characters(not word)
regex=/di$/;// string ends with (not word)
let str='adi is here and adi will go on trip to bhatura landi';
let res=regex.exec(str);
console.log('The result from exec is:',res);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);    
} else{
    console.log(`The string ${str} doesn't matches the expression ${regex.source}`);    
    
}