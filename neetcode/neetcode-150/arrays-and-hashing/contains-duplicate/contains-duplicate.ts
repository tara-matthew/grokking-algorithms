class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        return new Set(nums).size !== nums.length;
    }

    /*
        Time: O(n)
        Space: O(n)
     */
}

const nums = [1, 2, 3, 4, 5, 5];
console.log(new Solution().hasDuplicate(nums));

