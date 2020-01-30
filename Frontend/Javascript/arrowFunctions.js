const greet=function () {
    return "ohaio";
}
const reply=()=>"gozaimusu";
console.log(greet());
console.log(reply());

// when using json then use parenthesis
const hello=()=>({name:'aditya'});
console.log(hello()['name']);
