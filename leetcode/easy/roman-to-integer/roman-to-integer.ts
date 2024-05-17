/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;

    for (let i = s.length - 1; i >= 0; i --) {
        if (map[s[i]] >= map[s[i+1]] || map[s[i + 1]] === undefined) {
            total += map[s[i]]
        } else {
            total -= map[s[i]];
        }
    }

    return total;
};

const s = 'MCMXCIV';
console.log(romanToInt(s))
