// function kitchen() {
//     let roast = 0;
//     return function () {
//         roast++;
//         return roast;
//     }
// }

// const firstServer = kitchen();
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());


function foo(outer_arg) {

    function inner(inner_arg) {
        return outer_arg + inner_arg;
    }
    return inner;
}
let get_func_inner = foo(5);

console.log(get_func_inner(4));
console.log(get_func_inner(3));