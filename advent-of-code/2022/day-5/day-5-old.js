const completeArray = [['N','Z'],['D','C','M'], ['P']];
// console.log(completeArray[0]);

const fs = require("fs");
let matrix = fs.readFileSync("advent-of-code/2022/day-5/day-5.txt")
    .toString()
    // .replace(/\n$/, '')
    .replace(/[\[\]']+/g," ")
    // .replace(/  +/g, ' ')
    .split("\n")

// console.log(matrix);

const instructionsLines = matrix.slice(5); // hardcoded for now
// console.log(instructionsLines);
const instructions = new Map;

for (let i = 0; i < instructionsLines.length; i ++) {
    // console.log(instructionsLines[i])
    instructions.set(i, instructionsLines[i].match(/\d+/g))
}

// console.log(instructions)

// calculate the width by getting the length of the longest row (and then take away some space value) - or just use the numbers
// const width = matrix[2].length - 2;
// console.log(matrix[0]);
// check the chars, work out based on how many spaces there are before the letter where it is in the row
// console.log(matrix[0]);
// or get the char position of the final leter in the row letter, then can work out the spaces?
// can declare the length of the row?
// console.log(matrix[0].charAt(2));

const arr = new Array(3);
const arr2 = new Array(3);
const arr3 = new Array(3);
// arr.fill(new Array(4))
arr[0] = matrix[0].charAt(1)
arr[1] = matrix[0].charAt(5)
arr[2] = matrix[0].charAt(9)

arr2[0] = matrix[1].charAt(1)
arr2[1] = matrix[1].charAt(5)
arr2[2] = matrix[1].charAt(9)

arr3[0] = matrix[2].charAt(1)
arr3[1] = matrix[2].charAt(5)
arr3[2] = matrix[2].charAt(9)
// arr[3] = matrix[0].charAt(6)
// const totalArray = [...arr, ...arr2];
const totalArray = []
totalArray[0] = arr;
totalArray[1] = arr2;
totalArray[2] = arr3;
console.log(totalArray)

// then make a new array based off this information?
// let newArray = [];
// newArray[0] = ' D '
// console.log(newArray);

// Get just the first row to iterate columns first
// var t = matrix[0].map(function (col, c) {
//     // For each column, iterate all rows
//     return matrix.map(function (row, r) {
//         return matrix[r][c];
//     });
// });

function transposeArray(array, arrayLength) {
    let newArray = [];
    // console.log(array.length)
    for(let i = 0; i < array.length; i++) {
        newArray.push([]);
    }
    // console.log(newArray);

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < arrayLength; j++){
            newArray[j].push(array[i][j]);
        }
    }

    return newArray;
}

// const maxLen = matrix.reduce((max, {length}) => Math.max(max, length), 0);
// console.log(transposeArray(matrix, 3));

// console.log(transposeArray(totalArray, 3)[2])

// console.log(matrix[0]);
