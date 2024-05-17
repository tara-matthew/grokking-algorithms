const removeDuplicates = (nums) => {
    const hash = {};

    for (let i = 0; i < nums.length; i ++) {
        while (nums[i] in hash) {
            nums.splice(i,1)
        }

        hash[nums[i]] = (hash[nums[i]] || 0) + 1
    }

    return nums;
};

// TODO use two pointers to improve big O

const nums = [1,1,2];

console.log(removeDuplicates(nums));
