// ECMA 6
const array1 = ['one', 'two'];
const array2 = ['three', 'four'];

const combined = [...array1, ...array2];

// ECMA5
var combined = [array[0], array[1], array[2], array[3]];
var combined = array1.concat(array2);
var combined = [].concat(array1, array2);
