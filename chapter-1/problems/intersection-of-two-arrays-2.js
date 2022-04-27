/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    nums1.sort((a, b) => {
        return a - b;
    });

    nums2.sort((a, b) => {
        return a - b;
    });

    const shorterArray = nums1.length < nums2.length ? nums1 : nums2;
    const longerArray = nums1.length < nums2.length ? nums2 : nums1;
    const resultArray = [];

    shorterArray.forEach((item) => {
        const searchResult = binarySearch(longerArray, item);

        if (searchResult !== undefined) {
            resultArray.push(searchResult[0]);
            longerArray.splice(searchResult[1],1);
        }
    });

    return resultArray;
};

const binarySearch = function(array, target) {
    let left = 0;
    let right = array.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2)

        if (array[mid] === target) {
            return [array[mid], mid];
        }
        if (array[mid] > target) {
            right = mid - 1;
        }

        if (array[mid] < target) {
            left = mid + 1;
        }
    }

    return undefined;
};

const array1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
const array2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]
console.log(intersect(array1, array2));
