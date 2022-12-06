const fs = require("fs");
const input = fs.readFileSync("advent-of-code/2022/day-2/day-2.txt")
    .toString()
    .replace(/\n$/, '')
    .split("\n")

const partOne = (input) => {
    let score = 0;
    for (let i = 0; i < input.length; i ++) {
        if (input[i].charAt(2) === 'Y') {
            if ( input[i].charAt(0) === 'A') {
                score += 8;
            }
            if (input[i].charAt(0) === 'B') {
                score += 5;
            }
            if (input[i].charAt(0) === 'C') {
                score += 2;
            }
        }
        if (input[i].charAt(2) === 'X') {
            if ( input[i].charAt(0) === 'A') {
                score += 4;
            }
            if (input[i].charAt(0) === 'B') {
                score += 1;
            }
            if (input[i].charAt(0) === 'C') {
                score += 7;
            }
        }
        if (input[i].charAt(2) === 'Z') {
            if ( input[i].charAt(0) === 'A') {
                score += 3;
            }
            if (input[i].charAt(0) === 'B') {
                score += 9;
            }
            if (input[i].charAt(0) === 'C') {
                score += 6;
            }
        }
    }
    return score;

}

/*
rock = 1
paper = 2
scissors = 3
 */

const partTwo = (input) => {
    let score = 0;
    for (let i = 0; i < input.length; i ++) {
        //rock
        if (input[i].charAt(0) === 'A') {
            //lose - scissors
            if ( input[i].charAt(2) === 'X') {
                score += 3;
            }
            // draw - rock
            if (input[i].charAt(2) === 'Y') {
                score += 4;
            }
            // win - paper
            if (input[i].charAt(2) === 'Z') {
                score += 8;
            }
        }
        // Paper
        if (input[i].charAt(0) === 'B') {
            //lose - rock
            if ( input[i].charAt(2) === 'X') {
                score += 1;
            }
            // draw - paper
            if (input[i].charAt(2) === 'Y') {
                score += 5;
            }
            // win - scissors
            if (input[i].charAt(2) === 'Z') {
                score += 9;
            }
        }
        //scissors
        if (input[i].charAt(0) === 'C') {
            // lose - paper
            if ( input[i].charAt(2) === 'X') {
                score += 2;
            }
            // draw - scissors
            if (input[i].charAt(2) === 'Y') {
                score += 6;
            }
            // win - rock
            if (input[i].charAt(2) === 'Z') {
                score += 7;
            }
        }
    }
    return score;

}

// console.log(partOne(input))
console.log(partTwo(input))
