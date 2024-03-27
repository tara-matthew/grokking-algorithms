/* hashset to get unique values in array, to check for duplicates easily
* create set containing the numbers
* check if the length of the set is the same as the number list
* */

/* https://leetcode.com/problems/contains-duplicate/ */

const containsDuplicate = (nums): boolean => {
    const set: Set<number> = new Set(nums);
    return set.size !== nums.length;
};

const nums = [1,2,3,1];
console.log(containsDuplicate(nums));
