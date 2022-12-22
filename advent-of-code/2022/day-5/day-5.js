const fs = require("fs");
let matrix = fs.readFileSync("advent-of-code/2022/day-5/day-5.txt")
    .toString()
    .replace(/\n$/, '')
    .replace(/[\[\]']+/g," ")
    .split("\n")

function findNumberRow(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(i)) {
            return i;
        }
    }
}

// console.log(findNumberRow(matrix))

const TRANSPOSED_ARRAY_LENGTH = findNumberRow(matrix);
const numberLine = matrix[TRANSPOSED_ARRAY_LENGTH].split('');
const INPUT_WIDTH = numberLine[numberLine.length - 1]; // needs to be dynamic
// console.log(INPUT_WIDTH);
const INSTRUCTIONS_POSITION = 10;

const instructionsLines = matrix.slice(INSTRUCTIONS_POSITION); // needs to be dynamic
const instructions = new Map;

for (let i = 0; i < instructionsLines.length; i ++) {
    instructions.set(i, instructionsLines[i].match(/\d+/g))
}

const array = [];
for (let i = 0; i < INPUT_WIDTH - 1; i ++) {
    array[i] = [];
    for (let j = 0; j < INPUT_WIDTH; j ++) {
        let calculation = j * 4 + 1 // needs to be dynamic
        array[i][j] = matrix[i].charAt(calculation);
    }
}

// console.log(array);

const transposeArray = (array, arrayLength) => {
    let newArray = [];

    for (let i = 0; i < array.length + 1; i++) {
        newArray.push([]);
    }

    // console.log(newArray)

    for(let i = 0; i < array.length; i++){
        // console.log(i)
        for(let j = 0; j < 9; j++){
            // console.log(array[i][j])
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

instructions.forEach((line, index) => {
    for (let i = 0; i < line[0]; i ++) {
        newTransposedArray[line[2] - 1].unshift(newTransposedArray[line[1] - 1].shift())
    }
})

const topValues = [];
newTransposedArray.forEach((line, index) => {
    topValues.push(line[0])
})

const partOne = topValues;
console.log(partOne);

// console.log(instructions.get(0))

