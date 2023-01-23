const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    let left = arr.slice(0, mid + 1);
    let right = arr.slice(mid + 1);

    return sort(mergeSort(left), mergeSort(right));
}

const sort = (leftArray, rightArray) => {
    let sortedArray = [];

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            sortedArray.push(leftArray.shift());
        } else {
            sortedArray.push(rightArray.shift());
        }
    }

    return [...sortedArray, ...leftArray, ...rightArray];
}

const array = [38,27,43,3,9,82,10,3,4,22];
const leftArray = [2,3,6,9];
const rightArray = [5,6,7,8,9]
// console.log(sort(leftArray, rightArray));
console.log(mergeSort(array));
