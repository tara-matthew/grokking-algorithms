/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
const minSpeedOnTime = (dist, hour) => {
    let left = 1;
    let right = 100000000;
    let mid;
    let timeTaken;

    if (Math.ceil(hour) - dist.length < 0) return -1;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        timeTaken = calculateTimeTaken(mid, dist);
        if (timeTaken === hour) {
            return mid;
        }
        if (timeTaken < hour) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;

};

const calculateTimeTaken = (speed, distances) => {
    let total = 0;
    for (let i = 0; i < distances.length; i ++) {
        if (i < distances.length - 1) {
            total += Math.ceil(distances[i] / speed);
        } else {
            total += distances[i] / speed;
        }
    }

    return total;
}

const dist = [1,3,2];
const hour = 1.9;
console.log(minSpeedOnTime(dist, hour));
