/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let shorterArray = nums1.length < nums2.length ? nums1 : nums2;

    return shorterArray;
};

var binarySearch = function(array, target) {
    let left = 0;
    let right = array.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) /2)

        if (array[mid] === target) {
            return array[mid];
        }

        if (array[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

};

// console.log(intersection([1,2,2,1], [2,2]));
console.log(binarySearch([1,2,2,1,3],3));