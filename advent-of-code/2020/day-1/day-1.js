/** https://adventofcode.com/2020/day/1 **/

const fs = require("fs");
const input = fs.readFileSync("advent-of-code/2020/day-1/input.txt")
    .toString()
    .replace(/\n$/, '')
    .split("\n")
    .map(element => Number(element));

input.sort((a, b) => a - b);

const partOne = (nums) => {
    const target = 2020;
    for (let i in nums) {
        let toFind = target - nums[i];
        let found = binarySearch(toFind, nums);
        if (found) {
            return found * nums[i];
        }
    }
}

const partTwo = (nums) => {
    const target = 2020;
    let addedTogether;
    let toFind;
    for (let i = 0; i < nums.length; i ++) {
        for (let j = i + 1; j < nums.length; j ++) {
            addedTogether = nums[i] + nums[j];
            toFind = target - addedTogether;
            let found = binarySearch(toFind, nums);
            if (found) {
                return found * nums[i] * nums[j];
            }
        }
    }
}

const binarySearch = (target, array) => {
    let left = 0;
    let right = array.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return array[mid];
        }

        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null;
}

console.log(partOne(input));
console.log(partTwo(input));
