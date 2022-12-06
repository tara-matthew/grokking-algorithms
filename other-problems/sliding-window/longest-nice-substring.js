/**
 *
 * @param string
 */
const longestNiceSubstring = (string) => {
    let leftWindow = 0;
    let counts = {}
    let best = []

    counts[string[0]] = 1;
    counts[string[1]] = 1;
    // counts[string[2]] = 1;
    // counts[string[3]] = 1;

    for (let rightWindow = 1; rightWindow < string.length;) {
        let check = hasCaseNeeded(string[rightWindow], counts);
        console.log(leftWindow, rightWindow, check);

        if (!check) {
            counts = {};
            leftWindow = rightWindow;
        } else {
            best = rightWindow - leftWindow + 1 > best.length ? string.slice(leftWindow, rightWindow + 1) : best;
        }

        if (!counts[string[rightWindow]]) {
            counts[string[rightWindow]] = 0;
        }
        counts[string[rightWindow]] += 1;
        console.log(counts);
        // console.log('best', best);
        rightWindow ++;

    }

    return best;



};

/**
 *
 * @param str
 * @returns {boolean}
 */
function isUpperCase(str) {
    return str.toUpperCase() === str;
}

function hasCaseNeeded(str, obj) {
    // todo needs to actually check that the count is more than 0
    if (isUpperCase(str)) {
        return obj[str.toLowerCase()] >= 1
    }

    return obj[str.toUpperCase()] >= 1
}

const string = ["Y","a","z","a","A","a","y"];
// const string = ["B", "b"];
// const string = ["Y","a","A","y","a","B","b","a"];
// const string = ["c", "C", "h", "H"]
// const string = ["B", "e", "b", "j", "J", "E"]

console.log(longestNiceSubstring(string));
