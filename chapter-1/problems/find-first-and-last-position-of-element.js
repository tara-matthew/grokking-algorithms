/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
    const first = binarySearch(nums, target);
    const last = binarySearch(nums, target, false);

    return [first, last];
};

const binarySearch = (array, target, findFirstOccurrence = true) => {
    let left = 0;
    let right = array.length - 1;
    let mid;
    let best = -1;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            best = mid;
            if (findFirstOccurrence) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return best;
}

const nums = [5,7,7,8, 8, 8, 9, 10];
const target = 8;

console.log(searchRange(nums, target));
