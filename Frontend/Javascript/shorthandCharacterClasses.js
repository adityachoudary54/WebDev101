console.log('shorthandCharacterClasses');

//Character classes
//infinite word characters + tya
// '\w+' means one or more word characters
let regex=/\w+tya/;//word character- _ or alphabets or numbers
regex=/\W+Bhai/;//\W means non-word character
regex=/\d/;//\d for digit character
regex=/\D9/;//\D for non-digit character
regex=/\sa/;//\s for white-space character
regex=/\Sa/;//\S for non-white-space character
regex=/tya\b/;// word boundary
//assertions
regex=/a(?=d)/;
regex=/a(?!d)/;
const str='adiasasxasxtya9$%%#^*Bhai aaditya adiadi 128973891283';



let res=regex.exec(str);
console.log("The result from exec is ->",res);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);    
} else{
    console.log(`The string ${str} doesn't matches the expression ${regex.source}`);        
}