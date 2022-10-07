/**
 * @param {string[]} letters
 * @param {string} target
 * @return {string}
 */
const nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (left > letters.length - 1) {
        return letters[0];
    }

    return letters[left];
};

const letters = ["c","f","j"];
const target = "k"
console.log(nextGreatestLetter(letters, target))
// console.log("c" < "b")
