/* hashset to get unique values in array, to check for duplicates easily
* create set containing the numbers
* check if the length of the set is the same as the number list
* */

/* https://leetcode.com/problems/contains-duplicate/ */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// const containsDuplicate = function(nums) {
//     return JSON.stringify(Array.from(new Set(nums))) !== JSON.stringify(nums);
// };

const containsDuplicate = function(nums) {
    const set = new Set(nums);
    return set.size !== nums.length;
};

const nums = [1,2,3,1];
console.log(containsDuplicate(nums));
