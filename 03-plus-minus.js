const input = [-4, 3, -9, 0, 4, 1];

// positive numbers
const positiveNumbers = input.filter((n) => n > 0);
//negative numbers
const negativeNumbers = input.filter((n) => n < 0);
// zeros
const zeros = input.filter((n) => n === 0);
    

console.log((positiveNumbers.length / input.length).toFixed(6));
console.log((negativeNumbers.length / input.length).toFixed(6));
console.log((zeros.length / input.length).toFixed(6));
