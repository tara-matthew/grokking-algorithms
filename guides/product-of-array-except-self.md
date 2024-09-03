### Time: O(n) ###
### Space: O(n) ### 
### Extra space: O(1) ###

* Make an empty result array
* Set prefix and postfix to be 1
* Loop through the nums array from start to finish, set result[i] to be the same value as the prefix
* Set the value of prefix to be prefix * nums[i]
* Loop through the nums array from end to start, set result[i] to be result[i] * postfix
* Set the value of postfix to be postfix * nums[i]
