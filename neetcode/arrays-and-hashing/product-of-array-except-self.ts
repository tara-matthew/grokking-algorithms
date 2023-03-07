/* make two passes, first in-order, second in-reverse, to compute products */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    // first pass
    let prefix = 1;
    let output = []
    for (let i = 0; i < nums.length; i ++) {
        output[i] = prefix;
        prefix *= nums[i];
        console.log(output, prefix);
    }
    // second pass
    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i --) {
        output[i] *= postfix;
        postfix *= nums[i];
    }

    return output;
};

// const nums = [1,2,3,4];
const nums = [-1,1,0,-3,3];
console.log(productExceptSelf(nums));
