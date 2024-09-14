/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = (nums) => {
    const ans = [];
    const ARRAY_COUNT = 2;
    let i = 0;

    while (i < ARRAY_COUNT) {
        for (let j = 0; j < nums.length; j++) {
            ans.push(nums[j]);
        }
        i ++;
    }

    return ans;

    /**
     * Time O(n)
     * Space O(n)
     */
};

const nums = [1,3, 2,1]
console.log(getConcatenation(nums));
