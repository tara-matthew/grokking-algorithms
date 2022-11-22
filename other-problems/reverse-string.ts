const reverseString = (s)  => {
    for (let left = 0, right = s.length - 1; left < right; left ++, right --) {
        [s[left], s[right]] = [s[right], s[left]];
    }
};

const string = ["h", "e","l","l", "o"];
console.log(reverseString(string));
