/* hashmap to count each char in str1, decrement for str2;
https://leetcode.com/problems/valid-anagram/ */

/* O(n) time complexity */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const counts = {};
    for (let character of s) {
        counts[character] = (counts[character] || 0) + 1;
    }

    for (let character of t) {
        if (!counts[character]) return false;
        counts[character] --;
    }

    return true;
};

const s = "anagram";
const t = "nagaram";

console.log(isAnagram(s,t));
