function smallestGreaterThanTarget(array, target) {
    let left = 0;
    let right = array.length - 1;
    let mid;
    let answer;

    while (left <= right) {
        mid = Math.floor((right + left) /2);
        if (array[mid] <= target) {
            // check right
            left = mid + 1;
        } else {
            answer = mid;
            // check left
            right = mid - 1;
        }
    }

    if (answer === undefined) {
        answer = 0;
    }

    return `smallest number greater than ${target} is ${array[answer]}`;

}

const numbers = [2, 5, 9];
const target = 9;
console.log(smallestGreaterThanTarget(numbers, target));