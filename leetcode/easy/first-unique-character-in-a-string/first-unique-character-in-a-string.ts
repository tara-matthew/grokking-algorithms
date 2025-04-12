/**
 * @param {string} s
 * @return {number}
 */

// Time: O(n)
// Space: O(1)
var firstUniqChar = function(s) {
    const hashset = {};

     for (let i = 0; i < s.length; i++) {
         hashset[s[i]] = (hashset[s[i]] || 0) + 1
     }

     for (let i = 0; i < s.length; i++) {
         if (hashset[s[i]] === 1) {
             return i
         }
     }

     return -1;
};

const s = "aabb";
console.log(firstUniqChar(s));
