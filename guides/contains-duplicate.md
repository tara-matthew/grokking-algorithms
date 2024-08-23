### Time: O(n) ###
### Space: O(n) ### 

* Check if the size of a new set with nums in it is of the same length as nums
OR (slightly better as may exit early)
* Create a new set
* Loop through the nums array, and check if the current num already exists in the set
* If it does return true
* Else add the num to the set
* Return false if we get to the end

