// const mergeSort = (array) => {
//
// }

const merge = (leftArray: Array<number>, rightArray: Array<number>) => {
    const sortedArray = [];

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift());
        } else {
            sortedArray.push(rightArray.shift());
        }
    }

    return [...sortedArray, ...leftArray, ...rightArray]
}

// const array = [2,5,4,1,3];
// console.log(mergeSort(array));

const leftArray = [2,5, 7, 9];
const rightArray = [4, 6];

console.log(merge(leftArray, rightArray));
