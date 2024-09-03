class Solution {
    productExceptSelf(nums) {
        let prefix = 1;
        let postfix = 1
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        for (let i = nums.length-1; i >= 0; i --) {
            result[i] *= postfix;
            postfix *= nums[i];
        }

        return result;
    }

    /**
     * Time O(n)
     * Space O(n)
     * Extra space O(1)
     */
}

const nums = [1,2,4,6];
console.log(new Solution().productExceptSelf(nums))

