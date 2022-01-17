function findSmallest(array) {
    // Smallest value
    let smallest = array[0];
    // Index of smallest value
    let smallestIndex = 0;

    array.forEach((element, index) => {
        if (element < smallest) {
            smallest = element;
            smallestIndex = index;
        }
    });

    return smallestIndex;
}

function selectionSort(array) {
    let newArray = [];
    let smallest;
    while (array.length > 0) {
        // Find the smallest element in the array, and add to the new array
        smallest = findSmallest(array);
        newArray.push(array.splice(smallest, 1)[0]);
    }
    return newArray;
}

console.log(selectionSort([7, 4, 2, 1, 5]));