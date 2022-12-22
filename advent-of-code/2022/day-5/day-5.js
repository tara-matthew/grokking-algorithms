const fs = require("fs");
let matrix = fs.readFileSync("advent-of-code/2022/day-5/day-5.txt")
    .toString()
    .replace(/\n$/, '')
    .replace(/[\[\]']+/g," ")
    .split("\n")

const TRANSPOSED_ARRAY_LENGTH = 3; // needs to be dynamic
const INPUT_WIDTH = 3; // needs to be dynamic
const INSTRUCTIONS_POSITION = 5;

const instructionsLines = matrix.slice(INSTRUCTIONS_POSITION); // needs to be dynamic
const instructions = new Map;

for (let i = 0; i < instructionsLines.length; i ++) {
    instructions.set(i, instructionsLines[i].match(/\d+/g))
}

const array = [];
for (let i = 0; i < INPUT_WIDTH; i ++) {
    array[i] = [];
    for (let j = 0; j < INPUT_WIDTH; j ++) {
        let calculation = j * 4 + 1 // needs to be dynamic
        array[i][j] = matrix[i].charAt(calculation);
    }
}

const transposeArray = (array, arrayLength) => {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push([]);
    }

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < arrayLength; j++){
            newArray[j].push(array[i][j]);
        }
    }

    return newArray;
}

const transposedArrays = [];
for (let i = 0; i < INPUT_WIDTH; i ++) {
    transposedArrays.push(transposeArray(array, TRANSPOSED_ARRAY_LENGTH)[i])
}

const newTransposedArray = transposedArrays.map(array => array.filter(element => element !== '' && element !== ' '))

// console.log(transposedArray, newTransposedArray);

// const moveOneFromNumberTwoToNumberOne = newTransposedArray[0].unshift(newTransposedArray[1].shift())
// console.log(newTransposedArray);

instructions.forEach((line, index) => {
    for (let i = 0; i < line[0]; i ++) {
        newTransposedArray[line[2] - 1].unshift(newTransposedArray[line[1] - 1].shift())
    }
})

console.log(newTransposedArray);

// console.log(instructions.get(0))

