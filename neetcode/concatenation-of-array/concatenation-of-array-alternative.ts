var getConcatenation = function(nums) {
    return [...nums, ...nums]; // O(n) time and O(n) space
};

var getConcatenation = function(nums) {
    return nums.concat(nums); // O(n) time and O(n) space
};
