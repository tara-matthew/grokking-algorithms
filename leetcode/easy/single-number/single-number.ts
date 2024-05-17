const singleNumber = function(nums) {
    const hashset = {};

    for (let i in nums) {
        hashset[nums[i]] = (hashset[nums[i]] || 0) + 1 ;
    }
    return Object.keys(hashset).find(key => hashset[key] === 1)
};

// TODO remove any which already have count from the hashset

console.log(singleNumber([2,2,3]))
