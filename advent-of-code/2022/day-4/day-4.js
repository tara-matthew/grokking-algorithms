const range = (start, end) =>  {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}

let elves = [];
let firstElf = [2,8];
let secondElf = [3,7];
const rangeOne = range(firstElf[0], firstElf[1]);
const rangeTwo = range(secondElf[0], secondElf[1]);

// get the shorter one

console.log(rangeTwo.every(i => rangeOne.includes(i)))

// console.log(range(firstElf[0], secondElf[0]));
