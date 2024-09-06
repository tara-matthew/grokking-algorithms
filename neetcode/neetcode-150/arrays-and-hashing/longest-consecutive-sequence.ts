class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) {
            return 0;
        }

        let set = new Set(nums);
        let longest = 1;

        for (let num of nums) {
            let length = 1;

            while (set.has(num + length)) {
                length ++;
            }

            longest = Math.max(longest, length);
        }

        return longest;

    }
}

const nums = [9,1,4,7,3,-1,0,5,8,-1,6];
console.log(new Solution().longestConsecutive(nums))
