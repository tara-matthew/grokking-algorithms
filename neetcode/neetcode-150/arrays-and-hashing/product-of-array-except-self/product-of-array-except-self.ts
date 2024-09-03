class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        let postfix = 1
        let preResult = [1];
        let postResult =[1];
        let result = [];

        for (let i = 1; i < nums.length; i++) {
            preResult[i] = prefix * nums[i-1];
            prefix *= nums[i-1];
        }

        for (let i = nums.length - 2; i >= 0; i --) {
            postResult.unshift(postfix * nums[i + 1]);
            postfix *= nums[i+1];
        }

        for (let i = 0; i < nums.length; i++) {
            result[i] = preResult[i] * postResult[i]
        }

        return result;
    }
}

