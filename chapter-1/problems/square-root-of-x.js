/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let mid;
    let multiplied;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        multiplied = mid * mid;
        if (multiplied === x) {
            return mid;
        }

        if (multiplied < x) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }

    return right;
};

console.log(mySqrt(5));
