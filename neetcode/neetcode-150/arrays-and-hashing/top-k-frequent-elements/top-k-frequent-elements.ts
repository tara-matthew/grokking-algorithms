class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = new Map();
        nums.forEach((num, index) => {
            hash.set(num, (hash.get(num) | 0) + 1);
        })
        const sorted = [...hash].sort((a,b) => a[1] - b[1]);
        const map = new Map(sorted);
        const arr = Array.from(map.keys());

        return arr.slice(-k, map.size)
    }
}

const nums = [5,7,7,7,2,2];
const k = 2

console.log(new Solution().topKFrequent(nums, k))
