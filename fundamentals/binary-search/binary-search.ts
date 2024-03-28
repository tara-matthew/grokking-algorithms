const binarySearch = (array: Array<number>, target: number): number|null => {
    let [left, right]: Array<number> = [0, array.length - 1];
    let mid: number;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (array[mid] === target) return mid;

        if (array[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return null;
}

const array = [2,4,5,6,7]
console.log(binarySearch(array, 7))
