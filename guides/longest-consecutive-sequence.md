### Time: O(n) ###
### Space: O(n) ### 

- Set a longest var to be 1
- Make an empty set with the value of nums
- Loop over the set
- Set a length var to be 1
- While the value of num + length exists in the set, increment length
- When outside of the while loop, set the longest var to be the largest value out of length and longest
- Return longest
