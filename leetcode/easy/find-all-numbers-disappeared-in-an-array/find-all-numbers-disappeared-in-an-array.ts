/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const hashset = {}
    const result = [];

    for (let num of nums) {
        hashset[num] = true
    }


    for (let i = 1; i <= nums.length; i++) {
        if (!(i in hashset)) {
            result.push(i)
        }
    }

    return result;

};

const nums = [4,3,2,7,8,2,3,1]
console.log(findDisappearedNumbers(nums));
