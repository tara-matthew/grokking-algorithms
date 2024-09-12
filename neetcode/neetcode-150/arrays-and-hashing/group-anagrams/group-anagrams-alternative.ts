
const groupAnagrams = (strs) => {
    const map = new Map();

    strs.forEach((str) => {
        const keys = new Array(26).fill(0);
        for (let character of str) {
            const code = character.charCodeAt(0) - 97;
            keys[code] ++
        }
        const string = keys.toString();
        if ( ! map.has(string)) {
            map.set(string, [str]);
        } else {
            map.get(string).push(str);
        }
    })

    return Array.from(map.values())
};

const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));
