const completeArray = [['N','Z'],['D','C','M'], ['P']];
// console.log(completeArray[0]);

const fs = require("fs");
let matrix = fs.readFileSync("advent-of-code/2022/day-5/day-5.txt")
    .toString()
    // .replace(/  +/g, ' ')
    .split("")

// consol
// console.log(matrix[0])

// Get just the first row to iterate columns first
// var t = matrix[0].map(function (col, c) {
//     // For each column, iterate all rows
//     return matrix.map(function (row, r) {
//         return matrix[r][c];
//     });
// });

function transposeArray(array, arrayLength) {
    let newArray = [];
    for(var i = 0; i < array.length; i++) {
        newArray.push([]);
    }

    // for(var i = 0; i < array.length; i++){
    //     for(var j = 0; j < arrayLength; j++){
    //         newArray[j].push(array[i][j]);
    //     };
    // };

    return newArray;
}

// const maxLen = matrix.reduce((max, {length}) => Math.max(max, length), 0);
console.log(matrix);

// console.log(transposeArray(matrix, 3))

// console.log(matrix[0]);
