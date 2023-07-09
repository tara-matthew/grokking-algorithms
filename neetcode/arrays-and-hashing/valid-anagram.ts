/* hashmap to count each char in str1, decrement for str2;
https://leetcode.com/problems/valid-anagram/ */

/* O(n) time complexity */
/*
If lengths not same, return false
Make a hashmap for the counts
Loop through str 1 and add counts for each character
Loop through str 2, if character doesn't exist in counts map, return false
Loop through str 2 and decrement the counts for each character
 */

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
