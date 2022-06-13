// https://leetcode.com/problems/valid-perfect-square/

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
    if (num === 1) {
        return true;
    }

    let left = 0;
    let right = num / 2;
    let mid;
    let multiplied;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        multiplied = mid * mid;

        if (multiplied === num) {
            // a perfect square!
            return true;
        }

        if (multiplied < num) {
            // move right
            left = mid + 1;
        } else {
            // move left
            right = mid - 1;
        }
    }

    // not a perfect square
    return false;
};

console.log(isPerfectSquare(25));

