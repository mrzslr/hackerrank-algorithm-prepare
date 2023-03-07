const matrix = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];

let rightToLeftD = 0;
let leftToRightD = 0;

// left to right diagonal
const matrixLen = matrix.length;
matrix.forEach((m, rowIndex) => {
    leftToRightD += m[rowIndex];
});


// right to left diagonal
matrix.forEach((m, rowIndex) => {
    const item = m[matrixLen - (rowIndex + 1)];
    rightToLeftD += item;
});

const result = Math.abs(leftToRightD - rightToLeftD);
console.log("result is:", result);
return result;
