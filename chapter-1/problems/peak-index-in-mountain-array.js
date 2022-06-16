/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = function(arr) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[mid + 1]) {
            // move left to discount everything to the right of mid
            right = mid - 1;
        } else if (arr[mid] < arr[mid + 1]) {
            // move right to discount everything to the left of mid
            left = mid + 1;
        }
    }

    return left;
};

// const array = [0,1,0];
const array = [0,2,1,0];
// const array = [0, 10, 5, 2];
// const array = [24,69,100,99,79,78,67,36,26,19]
console.log(peakIndexInMountainArray(array));