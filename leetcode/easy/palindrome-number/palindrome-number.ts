const isPalindrome = function(x) {
    x = x.toString();
    let leftPointer = 0;
    let rightPointer = x.length - 1;
    while (rightPointer >= leftPointer) {
        if (x.charAt(leftPointer) !== x.charAt(rightPointer)) {
            return false;
        }
        leftPointer ++;
        rightPointer --;
    }

    return true;
};

console.log(isPalindrome(1211));
