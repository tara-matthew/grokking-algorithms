class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        strs.forEach((str, i) => {
            let hashKeys = new Array(26).fill(0);
            for (let char of str) {
                let code = char.charCodeAt() - 97;
                hashKeys[code] ++;
            }
            // @ts-ignore
            if (! map[hashKeys]) {
                // @ts-ignore
                map[hashKeys] = [str]
                // console.log(hash);
            } else {
                map[hashKeys].push(str);
                // hash.set('test', strs[i]);
            }
        })

        return Object.values(map);
    }

    /*
    Time: O(m * n)
 */
}
const strs = ["act","pots","tops","cat","stop","hat"]
console.log(new Solution().groupAnagrams(strs))
