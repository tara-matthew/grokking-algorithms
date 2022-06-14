// https://leetcode.com/problems/find-the-duplicate-number/

/*
We want to find the lowest number with an amount of numbers in the array which is lower than or equal to it, which is larger
than itself
Binary search on the range itself
Count how many numbers are in the array which are lower than or equal to mid
If the amount is bigger than mid, go left to find a potential lower number
Otherwise go right
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
    let left = 1;
    let right = nums.length - 1;
    let mid;
    let numbersLowerThan;
    let lowestNumber;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        numbersLowerThan = countNumbersLowerThan(mid, nums);

        console.log(`there are ${numbersLowerThan} numbers lower than or equal to ${mid}`);

        if (numbersLowerThan > mid) {
            // this is our best answer so far
            lowestNumber = mid;
            // see if there is a lower number by moving left
            right = mid - 1;
        } else {
            // we still need a number, so move right
            left = mid + 1;
        }
    }

    console.log(`duplicated number is ${lowestNumber}`);
    return lowestNumber;
};

function countNumbersLowerThan(number, array) {
    let count = 0;
    console.log('number', number);
    for (let i = 0; i < array.length; i ++) {
        if (array[i] <= number) {
            count ++;
        }
    }

    return count;
}

// const array = [3,1,3,4,2];
const array = [1,3,4,2,2];
// const array = [1,1,2,3];
console.log(findDuplicate(array));