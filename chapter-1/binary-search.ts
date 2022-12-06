const binarySearch = (list, item) => {
    // Low and high keep track of which part of the list to search in
    let low = 0;
    let high = list.length - 1;
    let mid;
    let guess;

    // While not narrowed down to 1 element
    while (low <= high) {
        // Check the middle element
        mid = Math.floor((low + high) / 2);
        guess = list[mid];

        // Found the item
        if (guess === item) {
            return mid;
        }

        // Guess was too high
        if (guess > item) {
            high = mid - 1;
        } else {
            // Guess was too low
            low = mid + 1;
        }
    }

    return null;
}

let string = "abc";
string.toUpperCase();

module.exports = binarySearch;
