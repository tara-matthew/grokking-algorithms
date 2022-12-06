/* https://levelup.gitconnected.com/an-introduction-to-sliding-window-algorithms-5533c4fe1cc7 */
const lengthOfLongestSubstring = (string) => {
    let leftWindow = 0;
    let longest = 0;
    let counts = {};

    for (let rightWindow = 0; rightWindow < string.length;) {
        console.log(leftWindow, rightWindow);
        if (!counts[string[rightWindow]]) {
            counts[string[rightWindow]] = 0;
        }
        counts[string[rightWindow]] += 1;

        if (Object.values(counts).some((element) => element > 1)) { // if any elements in counts are duplicates (n > 1)
            counts[string[leftWindow]] -= 1; // decrement the element at leftWindow by 1, since the character is no longer in the window
            leftWindow += 1; // increment leftWindow to evaluate the next substring
        }

        longest = Math.max(longest, rightWindow - leftWindow + 1);
        rightWindow += 1;
    }

    return longest;
}

const string = ["p", "w", "w", "k", "e", "w"];
console.log(lengthOfLongestSubstring(string));
