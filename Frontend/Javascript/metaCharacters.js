console.log('Metacharacters');
let regex=/adi/;
// Some meta characters
regex=/^a/;//finds the strings starting with given characters(not word)
regex=/di$/;// string ends with (not word)
regex=/a.i/g;//matches any one character
regex=/a*i/g;//matches 0 or more characters
regex=/a?d?i/g;//the character before becomes optional
regex=/a\*di/;//when using not as metacharacter

let str='ari is here and adi will go on trip to bhatura land';
let res=regex.exec(str);
console.log('The result from exec is:',res);
let lis=str.match(regex);
console.log('The result from match is->',lis);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);    
} else{
    console.log(`The string ${str} doesn't matches the expression ${regex.source}`);        
}