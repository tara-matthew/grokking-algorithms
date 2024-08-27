class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const map = new Map;

        for (let char of s) {
            map.set(char, (map.get(char) || 0) + 1) ;
        }

        for (let char of t) {
            if (! map.has(char) || map.get(char) === 0) return false;
            map.set(char, (map.get(char) - 1));
        }

        return true;
    }

    /*
        Time: O(n)
        Space: O(n)
    */
}

const s = "bbcc";
const t = "ccbc"

console.log(new Solution().isAnagram(s, t));
