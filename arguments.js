function sum(a, b, c) {
    // console.log(arguments);
    const argArr = [...arguments]
    // console.log(argArr);
    const addNumber = argArr.map(num => num + 2)
    // console.log(addNumber);
    let sum = 0;
    for (let i = 0; i < addNumber.length; i++) {
        const numbers = addNumber[i];
        sum = sum + numbers
    }
    return sum;
}

const result = sum(2, 40, 11, 30, 55, 44, 47, 12, 19);
console.log(result);