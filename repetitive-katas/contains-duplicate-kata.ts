const containsDuplicate = function(nums) {
    const set = new Set(nums);
    return set.size !== nums.length;
};

const nums = [1,2,3,1]
console.log(containsDuplicate(nums));
