/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s, left, right - 1) || isPalindrome(s, left + 1, right);
        }

        left++;
        right--;

    }

    return true;
};

const isPalindrome = (s, left, right) => {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }

        left ++
        right --
    }

    return true;
}

const s = "abc";

console.log(validPalindrome(s))
