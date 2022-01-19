/** Given a binary array sorted in non-increasing order, count the number of 1’s in it. **/

function findNumberOfOnes(nums, low = 0, high = nums.length -1) {
    let mid = Math.floor((low + high) / 2);

    // Base case
    if (low > high) {
        return 0;
    }

    // Mid pointer is at the final 1 in the array, eg [0,0,1,1,1], so we can get the count of 1s
    if (nums[mid] === 1 && nums[mid - 1] === 0) {
        return nums.length - mid;
    }

    // All 1s in the array as it is sorted
    if (nums[0] === 1) {
        return nums.length;
    }

    if (nums[mid] === 0) {
        return findNumberOfOnes(nums, mid + 1, high)
    }

    if (nums[mid] === 1) {
        return findNumberOfOnes(nums, low, mid - 1);
    }
}

const array = [0, 0, 0, 0, 1, 1, 1, 1];
// const array = [0];
// const array = [1];
console.log(findNumberOfOnes(array));
