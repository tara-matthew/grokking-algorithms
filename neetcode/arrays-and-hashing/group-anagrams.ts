/** https://leetcode.com/problems/group-anagrams/ **/
/*
for each of 26 chars, use count of each char in each word as tuple for key in dict, value is the list of anagrams;

Make array with 26 0s
This array can be used alongside the character codes
Any words with equivalent keys are set as the value
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const map = {};
    strs.forEach((str) => {
        let hashKeys = Array(26).fill(0);
        // console.log('here', hashKeys)
        for (let character of str) {
            hashKeys[character.charCodeAt(0) - 97] += 1;
        }
        // console.log(hashKeys)
        // @ts-ignore
        if (!map[hashKeys]) {
            // @ts-ignore
            map[hashKeys] = [str];
        } else {
            // @ts-ignore
            map[hashKeys].push(str);
        }
        console.log(map, hashKeys)
    })

    return Object.values(map);

};

// const strs = ["eat","tea","tan","ate","nat","bat"];
const strs = ["nat","tea", "eat", "tan", "ate"];

console.log(groupAnagrams(strs));
