/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
    let counts = {};

    for (let rightWindow = 0; rightWindow < nums.length;) {
        if (counts[nums[rightWindow]] === undefined) {
            counts[nums[rightWindow]] = { counts: 1, index: rightWindow}
        } else {
            counts[nums[rightWindow]].counts ++;
            if (rightWindow - counts[nums[rightWindow]].index <= k) {
                return true;
            }
            counts[nums[rightWindow]].index = rightWindow;
        }
        rightWindow ++;
    }

    return false;
}
// const containsNearbyDuplicate = (nums, k) => {
//     const duplicates = findDuplicates(nums);
//     console.log(duplicates);
//     let indices = {};
//     for (let duplicate of duplicates) {
//         nums.forEach((element, index) => {
//             if (element === duplicate) {
//                 console.log(`Duplicate ${duplicate} is at index ${index}`)
//             }
//         })
//     }
// };
//
// const findDuplicates = (arr) => {
//     const set = new Set(arr);
//     const duplicates = arr.filter(item => {
//         if (set.has(item)) {
//             set.delete(item);
//         } else {
//             return item;
//         }
//     });
//
//     // @ts-ignore
//     return [...new Set(duplicates)];
// }

const nums = [1,0,1,1];
console.log(containsNearbyDuplicate(nums, 2));
// console.log(findDuplicates(nums));
