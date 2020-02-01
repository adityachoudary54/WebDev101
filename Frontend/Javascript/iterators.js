console.log('iterators');

const myArray=['apples','grapes','oranges','pineapple'];
console.log(myArray);

function fruitsIterator(values) {
    let nextIndex=0;
    // we will return an object
    return {
        next:function(){
            if(nextIndex<values.length){
                // We will return this object
                return {
                    value:values[nextIndex++],
                    done:false
                }
            } else{
                // we will return below object
                return {
                    done:true
                }
            }
        }
    }
}

// Using the iterator
const fruits=fruitsIterator(myArray);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
