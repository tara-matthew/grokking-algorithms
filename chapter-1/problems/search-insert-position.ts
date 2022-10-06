/** https://leetcode.com/problems/search-insert-position/ **/

/** Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity. **/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums: number[], target: number): number => {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            low = mid + 1;
        }

        if (nums[mid] > target) {
            high = mid - 1;
        }
    }

    return low;
};

module.exports = searchInsert;

console.log(searchInsert([3, 5, 6, 8, 9], 7));
console.log(searchInsert([4, 8, 11], 11));