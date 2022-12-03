const fs = require("fs");
const input = fs.readFileSync("advent-of-code/2022/day-1.txt")
    .toString()
    .replace(/\n$/, '')
    .split("\n\n")
    .map(item => item.split('\n'))
    .map(arr => arr.map(item => Number(item)));

const partOne = (elves) => {
    let best = 0;

    const test = elves.map(e => e.map(j => j))

    console.log(test);

    // for (let i = 0; i < elves.length; i ++) {
    //     let sum = 0;
    //     for (let j = 0; j < elves[i].length; j ++) {
    //         sum += elves[i][j];
    //     }
    //     if (sum > best) {
    //         best = sum;
    //     }
    // }
    //
    // return best;
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

console.log(partOne(input));
console.log(partTwo(input));
