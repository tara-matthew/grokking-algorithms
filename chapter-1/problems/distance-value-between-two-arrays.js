/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = function(arr1, arr2, d) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < 1; i ++) {
        count += binarySearch(arr2, arr1[i], d);
    }

    return count;
};

const binarySearch = function(array, value, distance) {
    let left = 0;
    let right = array.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        console.log(array[left], array[right], array[mid]);
        if (Math.abs(array[mid] - value) <= distance) {
            return 0;
        }
        if (array[mid] < value) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    // console.log('here', left, right)
    return 1;
}

// const arr1 = [4,5,8]
// const arr2= [1,8,9,10]
// const d = 2;

const arr1 = [1,2,96,100]
const arr2 = [-5,-3,-2,7,10]
const d = 1

console.log(findTheDistanceValue(arr1, arr2, d));
// console.log(binarySearch(arr1, 4));

/*
[4,5,8] =>
5 - 10 = 5
5 - 9 = 4
5 - 1 = 4

*/

