const arrangeCoins = (n: number) => {
    let left = 1;
    let right = n;
    let mid: number;
    let best: number;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        let attemptedTotal = addCoins(mid);
        if (attemptedTotal === n) {
            return mid;
        }
        if (attemptedTotal + (mid + 1) > n) { // if we can't form another full row // TODO may be able to simplify this
            best = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return best; // TODO can use right value
};

// TODO Add this formula to a cheat
const addCoins = (numOfRows: number) => {
    return (numOfRows * (numOfRows + 1)) / 2
}
console.log(arrangeCoins(719885386))

