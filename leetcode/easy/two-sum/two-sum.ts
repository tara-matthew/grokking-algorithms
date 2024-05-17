const twoSum = (nums, target) => {
    const hashSet = {};

    for (let i = 0; i < nums.length; i ++) {
        let goal = target - nums[i];
        if (goal in hashSet) {
            return [i, hashSet[goal]]
        }
        hashSet[nums[i]] = i;
    }
};

const nums = [2,7,11,15];
const target = 13
console.log(twoSum(nums, target));
