/* https://leetcode.com/problems/valid-anagram/ */

/* O(n) time complexity */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// With object
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const counts = {};
    for (let character of s) {
        counts[character] = (counts[character] || 0) + 1;
    }

    for (let character of t) {
        if (!counts[character]) {
            console.log('here', counts[character])
            return false;
        }
        counts[character] --;
        console.log(counts);
    }

    return true;
};

const s = "aacc";
const t = "ccac";

console.log(isAnagram(s,t));


