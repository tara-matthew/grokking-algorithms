// Keeps the array the same
function recursiveBinarySearch(array, target, low = 0, high = array.length - 1) {
    let mid = Math.floor((low + high) / 2);
    // Base case
    if (low > high) {
        console.log('Value does not exist :(');
        return false;
    }

    if (array[mid] === target) {
        console.log(`Value exists at index ${mid}`);
        return mid;
    }

    if (target < array[mid]) {
        return recursiveBinarySearch(array, target, low, mid - 1);
    }

    if (target > array[mid]) {
        return recursiveBinarySearch(array, target, mid + 1, high);
    }
}
const array = [3, 6, 7, 9, 12];
console.log(recursiveBinarySearch(array, 6));

// TODO separate function which splices the array in place