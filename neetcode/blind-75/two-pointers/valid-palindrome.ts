class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replaceAll(' ', '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }

            left ++
            right --
        }

        return true;

    }
}

const s = "Was it a car or a cat I saw?"
console.log(new Solution().isPalindrome(s))
