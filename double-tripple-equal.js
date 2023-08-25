// == only compare the two value. but not check the typeof.
// other wise === compare the two value and compare the two typeof then the output give.

const a = 1;
const b = true;
if (a == b) {
    console.log('a and b are equal');
    // ekhane b = true ke coercion poddotite convert kore true ar man 1 kore tulona kore output dicche. But we use to === then we got the true result or output
} else {
    console.log('a and b are not equal');
}