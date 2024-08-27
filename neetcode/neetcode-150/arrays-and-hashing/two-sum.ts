class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashset = {};
        let goal;

        for (let i = 0; i < nums.length; i++) {
            goal = target - nums[i];

            if (goal in hashset) {
                return [hashset[goal], i];
            }

            hashset[nums[i]] = i
        }
    }

    /*
    Time: O(n)
    Space: O(n)
    */
}

const nums = [5,5];
const target = 10;

console.log(new Solution().twoSum(nums, target))
