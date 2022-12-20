const fs = require("fs");
const input = fs.readFileSync("advent-of-code/2022/day-6/day-6.txt")
    .toString()
    .replace(/\n$/, '')
    .split('')

// sliding window with binary search? Or just sliding window of size 4

const partOne = (input) => {
    let leftWindow = 0;
    // let rightWindow = 0;
    let counts = {};

    for (let rightWindow = 3; rightWindow < input.length; rightWindow++) {
        counts[input[rightWindow]] = counts[input[rightWindow]] ? counts[input[rightWindow]] + 1: 1

        if (Object.values(counts).some((element) => element > 1)) {
            counts[input[leftWindow]] -= 1;
            leftWindow ++;
            rightWindow ++;
        }
    }

    // console.log(counts);
}

console.log(partOne(input))

