// https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    let left = 0;
    let right = x;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        const squared = mid * mid;

        if (squared === x) {
            console.log(`the square root is ${mid}`);
            return mid;
        }

        if (squared > x) {
            console.log('move left');
            right = mid - 1;
        } else {
            console.log('mve right');
            left = mid + 1;
        }
    }

    console.log(`the square root is ${right}`);
    return right;
};

console.log(mySqrt(8));