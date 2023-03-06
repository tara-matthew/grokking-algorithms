/** https://leetcode.com/problems/group-anagrams/ **/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const map = {};
    strs.forEach((str) => {
        let hashKeys = Array(26).fill(0);
        for (let character of str) {
            hashKeys[character.charCodeAt(0) - 97] += 1;
        }
        // @ts-ignore
        if (!map[hashKeys]) {
            // @ts-ignore
            map[hashKeys] = [str];
        } else {
            // @ts-ignore
            map[hashKeys].push(str);
        }
    })

    return Object.values(map);

};

// const strs = ["eat","tea","tan","ate","nat","bat"];
const strs = ["nat","tea", "eat", "tan", "ate"];

console.log(groupAnagrams(strs));
