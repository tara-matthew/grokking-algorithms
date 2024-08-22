* Use binary search
* Set left to 0
* Set right to n
* Create a method to add coins:
`return (numOfRows * (numOfRows + 1)) / 2`
* Use the method to add coins for the mid row and get the number of coins
* If the number of coins is n, return mid
* If the number of coins is less than n, move left to mid + 1 (as this means we need more levels)
* Otherwise move right to mid - 1
* If we reach the end, return right
