const name='Harry';
const greeting='Good Morning';
console.log(greeting+' '+name);

let html;
html='<h1> this is heading </h1>'+
        '<p> this is my para</p>';
html=html.concat('this');
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

console.log(html[0],html[2]);

console.log(html.indexOf('h1'));
console.log(html.indexOf('hsacac1'));
console.log(html.lastIndexOf('h1'));
console.log(html.charAt(3));
console.log(html.endsWith('this'));
console.log(html.includes('h2'));
console.log(html.substring(1,3));
console.log(html.slice(-4));
console.log(html.slice(0,4));
console.log(html.split(' '));

console.log(html.replace('this','it'));

//template literals
let fruit1='Orange';
let fruit2='Apple';
let myHtml=`Hello ${name}
    <h1> This is heading</h1>
    <p>You like ${fruit1} and ${fruit2}   
    `;
document.body.innerHTML=myHtml;









