// truthy
// 1.true
// 2.' '
// {}
// '0'
// 'false'

// falsy
// false
// 0
// ''
// undefined
// null

const x = ' ';
console.log(typeof x);
if (x) {
    console.log('x is truthy');
}
else {
    console.log('x is falsy');
}