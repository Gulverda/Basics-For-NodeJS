// Declare a variable 'name' and assign it the value 'Luka'
let name = "Luka";

// ES6 version: Export 'name' as the default export from this module
export default name;

// Function to calculate the sum of two numbers
function sum(x, y) {
    return x + y; // Return the sum of x and y
}

// Declare a variable 'total' with a string message
let total = 'The sum of x and y is ';

// Export 'sum' and 'total' as named exports for use in other modules
export {
    sum,
    total
};

// The following commented-out code shows an alternative way of exporting:
// let name = "Luka";
// // Old version: Export 'name' using CommonJS syntax
// module.exports = name;

// function sum(x, y) {
//     return x + y;
// }

// let total = 'The sum of x and y is ';

// Export 'sum' and 'total' as an object using CommonJS syntax
// export default {
//     sum,
//     total
// }
