/** https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/ **/

/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function(nums) {
    nums.sort((a, b) => {
        return a -b;
    });

    for (let i = 1; i <= nums.length; i ++) {
        if (findCount(nums, i) === i) {
            return i;
        }
    }

    return -1;
};

const findCount = function(array, target) {
    let left = 0;
    let right = array.length - 1;
    let mid;
    let count = 0;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (array[mid] >= target) {
            // value of count is 1 + difference between mid and arraylength - 1
            const midEndDiff = (array.length - 1) - mid;
            count = midEndDiff + 1;

            // move left
            right = mid - 1;
        }

        if (array[mid] < target) {
            // move right
            left = mid + 1;
        }
    }

    return count;
};

console.log(specialArray([0,0,3,4,4]));
// console.log(findCount([0,0,3,4,4], 4));
