function twoSum(array, sum) {
    let sortedArray = array.sort();

    let nums = [];
    let prevNums = [];

    for (let i in sortedArray) {
        // If sorted array includes sum minus sortedArray[i], find it
        let addend = binarySearch(sortedArray, sum - sortedArray[i]);
        // Make sure no redundant numbers are pushed
        if (!!addend && !prevNums.includes(array[i]) && !prevNums.includes((addend))) {
            // Push sortedArray[i] and the found number into nums
            nums.push([sortedArray[i], addend]);
            // To avoid repeating combinations
            prevNums.push(addend);
        }
    }

    return nums;
}

function binarySearch(array, target, start = 0, end = array.length-1) {
    let mid = Math.floor((start + end) / 2);
    // First number is the target number
    if (array[start] === target) {
        return array[start];
    }
    // Middle number is the target number
    if (array[mid] === target) {
        return array[mid];
    }
    // Last number is the target number
    if (array[end] === target) {
        return array[end];
    }
    // Array or array section to iterate through is empty
    if (end - start === 0) {
        return false;
    }

    if (array[mid] > target) {
        return binarySearch(array, target, start + 1, mid - 1);
    }

    if (array[mid] < target) {
        return binarySearch(array, target, mid + 1, end - 1);
    }

    return false;
}

const array = [2, 3, 4, 3, 6, 7];
// console.log(binarySearch([3,4,7,9], 3));
// console.log(twoSum(array, 6));

/**
 * use hash map to instantly check for difference value, map will add index of last occurrence of a num, don’t use same element twice;
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = new Map;
    console.log(hashMap);

    for (let i = 0; i < nums.length; i++) {

    }
};

console.log(twoSum([1,2],2));
