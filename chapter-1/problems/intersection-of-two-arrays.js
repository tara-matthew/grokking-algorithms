/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
    nums1.sort((a,b) => {
        return a - b;
    });

    nums2.sort((a,b) => {
        return a - b;
    });

    const shorterArray = nums1.length < nums2.length ? nums1 : nums2;
    const longerArray = nums1.length < nums2.length ? nums2 : nums1;
    const resultArray = new Set;

    shorterArray.forEach((item) => {
        let searchResult = binarySearch(longerArray, item);
        if (searchResult !== undefined) {
            resultArray.add(searchResult);
        }
    })

    return [...resultArray];
};

const binarySearch = function(array, target) {
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

    return undefined;

};

console.log(intersection([4,9,9,5], [9,4,9,8,4]));
// console.log(binarySearch([1,2,2,1,3],3));
