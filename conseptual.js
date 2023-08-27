// Reduce

const array = [10, 3, 2, 7, 8, 9];
// const reduce = array.reduce((previous, current) => previous * current);
// console.log(reduce);

const multiplication = array.reduce((previous, current) => previous * current, 1);
// console.log(multiplication);

// template string
const name = 'Safin';
const age = 12;
const job = 'Student';
const section = 'A';

const array2 = ['Hamid', 'Jamal', 'Sahin', 'Munna', 'Aynal'];
const details = 'My name is ' + name + '\nMy age is ' + age + ". I am a " + job + ". My section is " + section + '';
// console.log(details);
const details2 = `My name is ${name}
my age is ${age}
my job is ${job}
My friend is ${array2.join('_')}
My section is ${section}
`;
// console.log(details2);


// const array3 = [4, 5, 8, 9, 100, 12, 7999, 15, 20];

// const maxNum = array3.reduce((max, current) => {
//     return Math.max(max, current);
// })
// console.log(maxNum);
// const number = 10
// if(number === 10){
//     console.log(number);
// }

function scope(a, b){
   const x = 5;
    if(a === 2){
         
        // console.log(a);
    }
    else{
        // console.log('Is not 2')
       
    }
    console.log(x);
    return x;
}


const test = scope(5, 4);
console.log(test);

