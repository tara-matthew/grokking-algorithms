/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = (s) => {
    return !(hasAbsences(s.split('')) || isLate(s.split('')));
}

const isLate = (arr) => {
    let leftWindow = 0;
    let counts = {};
    counts["L"] = 0;

    for (let rightWindow = 0; rightWindow < arr.length;) {
        if (arr[rightWindow] !== "L") {
            counts["L"] = 0;
            rightWindow ++;
            leftWindow = rightWindow;
        } else {
            counts["L"] ++;
            rightWindow++;
        }

        if (counts["L"] >= 3) {
            return true;
        }
    }

    return false;
}

const hasAbsences = (arr) => {
    return arr.filter(element => element === "A").length >= 2;
}

console.log(checkRecord("PPAALLALP"));
