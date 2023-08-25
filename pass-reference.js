let a = 5;
let b = 9;
function multiply(a, b) {
    a = 10;
    const mul = a * b;
    return mul;
}
// console.log(a);

const result = multiply(a, b);
// console.log(result);


let stu = { name: 'Rafsan', age: 12 };
let stu2 = { name: 'Salman', age: 13 }

function studentDetails(stu, stu2) {
    stu.name = 'Harris';
    const student = stu.name;
    const student2 = stu2.name;
    console.log(student, student2);
}
console.log(stu.name);
const details = studentDetails(stu, stu2);
console.log(details);
console.log(stu.name);