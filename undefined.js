// 1. variable declared but not initialized it will give undefined.
// 2. From the function  that is not return something it will give undefined.
// 3.  function that parameter is not pass away it will give undefined
// 4. Object property that has not present if we get it but it will give u undefined.
// 5. array is not assigned the index but if we get it, then it will give undefined
// 6. variable initialize by the undefined it will give undefined.


let a; 
// console.log(a);  //output undefined
function add(a, b) {
    return;
}
const result = add(3, 8);
// console.log(result); output undefined

function add2(a, b){
//    console.log(a, b); output undefined
}
add2(3);

const obj = {
    name: 'Rahman', age: 33
}
// console.log(obj.name, obj.height); //output height in undefined

const array = [2, 4, 8, 9, 32, 88];
// console.log(array[10]); //output undefined

const color = undefined;  //it should not declare.

const color1 = null; //right way