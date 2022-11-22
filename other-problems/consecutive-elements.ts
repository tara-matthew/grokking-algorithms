const consecutiveElements = (arr) => {
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

        console.log(leftWindow, rightWindow, counts);
        if (counts["L"] >= 3) {
            console.log(`There are ${counts["L"]} of L`);
            return;
        }

    }

    // console.log(counts);
}

const array = ["P","P","A","L","L","P","L","L","L","L","P","L"];

console.log(consecutiveElements(array));
