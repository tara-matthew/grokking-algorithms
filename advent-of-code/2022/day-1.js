const fs = require("fs");
const input = fs.readFileSync("advent-of-code/2022/day-1.txt")
    .toString()
    .replace(/\n$/, '')
    .split("\n\n")

let data = [];
for (let i = 0; i < input.length; i ++ ) {
    data.push(input[i].split('\n'))
}

data = data.map(arr => arr.map(item => Number(item)));

const partOne = (elves) => {
    let best = 0;

    for (let i = 0; i < elves.length; i ++) {
        let sum = 0;
        for (let j = 0; j < elves[i].length; j ++) {
            sum += elves[i][j];
        }
        if (sum > best) {
            best = sum;
        }
    }

    return best;
}

const partTwo = (elves) => {
    let totals = [];

    for (let i = 0; i < elves.length; i ++) {
        let sum = 0;
        for (let j = 0; j < elves[i].length; j ++) {
            sum += elves[i][j];
        }
        totals.push(sum);
    }

    const highest = totals.sort((a, b) => a - b).slice(-3);
    return highest.reduce((accumulator, value) => {
        return accumulator + value;
    });
}

console.log(partOne(data));
console.log(partTwo(data));
