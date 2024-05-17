const containsDuplicate = (nums: Array<number>): boolean => {
    return new Set(nums).size !== nums.length;
}

const arrayWithDuplicates = [1,2,2,3];
const arrayWithoutDuplicates  = [1,2,3];
console.log(containsDuplicate(arrayWithoutDuplicates))
