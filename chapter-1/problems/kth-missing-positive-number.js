function kthMissingPositive(array, k) {
    // The answer is past the end of the array
    if (array[array.length - 1] - array.length < k) {
        return k + array.length;
    }

    if (array[0] > k) {
        return k;
    }

    let left = 0;
    let right = array.length - 1;

    while (left < right - 1) {
        let mid = Math.floor((left + right) / 2);

        let numberOfValsMissing = (array[mid]) - (mid + 1);

        if (numberOfValsMissing < k) { // need to look further right
            left = mid;
        } else if (numberOfValsMissing >= k) { // look left
            right = mid;
        }
    }

    const missing = (array[left]) - (left + 1);
    const remaining = k - missing;

    return array[left] + remaining;
}

const array = [2,3,4,7,11]

console.log(kthMissingPositive(array, 8))