const fs = require ('fs');
const parsed = fs.readFileSync("advent-of-code/2022/day-8/day-8.txt")
    .toString()
    .replace(/\n$/, '')
    .split("\n")

const input = parsed.map(e => e.split('').map(element => Number(element)));

const inputWidth = input[0].length;
class Tree {
    constructor(height, neighbours, isLeftEdge = false, isRightEdge = false, isTopEdge = false, isBottomEdge = false, visible, checked, leftCounter, rightCounter, topCounter, bottomCounter, totalCounter) {
        this.visible = visible;
        this.checked = checked;
        this.leftCounter = leftCounter;
        this.rightCounter = rightCounter;
        this.topCounter = topCounter;
        this.bottomCounter = bottomCounter;
        this.totalCounter = totalCounter;
        this.isLeftEdge = isLeftEdge;
        this.isRightEdge = isRightEdge;
        this.isTopEdge = isTopEdge;
        this.isBottomEdge = isBottomEdge
        this.height = height;
        this.neighbours = neighbours; // an array of neighbours
    }
}

const treeArray = [];
for (let i = 0; i < input.length; i ++) {
    // let isEdge = false;
    let isLeftEdge = false;
    let isRightEdge = false;
    let isTopEdge = false;
    let isBottomEdge = false;
    let left;
    let right;
    let up;
    let down;
    let checked;
    let visible;
    for (let j = 0; j < input[i].length; j++) {
        if (j === 0) {
            checked = true;
            visible = true;
            isLeftEdge = true;
        }

        if (j === input[i].length - 1) {
            checked = true;
            visible = true;
            isRightEdge = true;
        }

        if (i === 0) {
            checked = true;
            visible = true;
            isTopEdge = true;
        }

        if (i === input.length - 1) {
            checked = true;
            visible = true;
            isBottomEdge = true;
        }

        if (j > 0) {
            left = input[i][j - 1];
        }
        right = input[i][j+1];

        if (i > 0) {
            up = input[i - 1][j];
        }
        if (i < input.length - 1) {
            down = input[i + 1][j];
        }

        treeArray.push(new Tree(input[i][j], [left, right, up, down], isLeftEdge, isRightEdge, isTopEdge, isBottomEdge, visible, checked, 0,0,0,0, 0));
        isLeftEdge = false;
        isRightEdge = false;
        isTopEdge = false;
        isBottomEdge = false;
        checked = false;
        visible = false
    }
}

// console.log(treeArray);

const checkLeftNeighbour = (currentIndex, nextIndex, count) => {
    // console.log(treeArray[currentIndex]);
    // console.log(treeArray[nextIndex]);
    count = count | 0;
    // console.log(count);
    // Base case
    if (treeArray[nextIndex].isLeftEdge === true) {
        return count + 1;
    }

    if (treeArray[nextIndex].height < treeArray[currentIndex].height) {
        return checkLeftNeighbour(currentIndex, nextIndex - 1, count + 1);
    }

    return count + 1;
}

const checkRightNeighbour = (currentIndex, nextIndex, count) => {
    // console.log(treeArray[currentIndex]);
    // console.log(treeArray[nextIndex]);
    count = count | 0;
    // console.log(count);
    // Base case
    if (treeArray[nextIndex].isRightEdge === true) {
        return count + 1;
    }

    if (treeArray[nextIndex].height < treeArray[currentIndex].height) {
        return checkRightNeighbour(currentIndex, nextIndex + 1, count + 1);
    }

    return count + 1;
}

const checkTopNeighbour = (currentIndex, nextIndex, count) => {
    count = count | 0;

    // Base case
    if (treeArray[nextIndex].isTopEdge === true) {
        return count + 1;
    }

    if (treeArray[nextIndex].height < treeArray[currentIndex].height) {
        return checkTopNeighbour(currentIndex, nextIndex - inputWidth, count + 1); // make this dynamic
    }

    return count + 1;
}

const checkBottomNeighbour = (currentIndex, nextIndex, count) => {
    count = count | 0;

    // Base case
    if (treeArray[nextIndex].isBottomEdge === true) {
        return count + 1;
    }

    if (treeArray[nextIndex].height < treeArray[currentIndex].height) {
        return checkBottomNeighbour(currentIndex, nextIndex + inputWidth, count + 1); // make this dynamic
    }

    return count + 1;
}

for (let i = 0; i < treeArray.length; i ++) {
    // console.log(treeArray[i].neighbours[0]);
    // let counter = 0;
    // if (treeArray[i].checked === false) {
    //     treeArray[i].checked = true;
        if (treeArray[i].neighbours[0] <= treeArray[i].height) {
            treeArray[i].leftCounter = checkLeftNeighbour(i, i - 1);
        } else if (treeArray[i].isLeftEdge === false) {
            treeArray[i].leftCounter ++;
        }
        if (treeArray[i].neighbours[1] <= treeArray[i].height) {
            treeArray[i].rightCounter = checkRightNeighbour(i, i  +1);
        } else if (treeArray[i].isRightEdge === false) {
            treeArray[i].rightCounter++;
        }
        if (treeArray[i].neighbours[2] <= treeArray[i].height) {
            treeArray[i].topCounter = checkTopNeighbour(i, i - inputWidth);
        } else if (treeArray[i].isTopEdge === false) {
            treeArray[i].topCounter++;
        }
        if (treeArray[i].neighbours[3] <= treeArray[i].height) {
            treeArray[i].bottomCounter = checkBottomNeighbour(i, i + inputWidth);
        } else if (treeArray[i].isBottomEdge === false) {
            treeArray[i].bottomCounter++;
        }
    // }
}

// console.log(checkLeftNeighbour(2, 1))
// console.log(checkRightNeighbour(2,3));
// console.log(checkTopNeighbour(10,5))
// console.log(treeArray);

treeArray.forEach((tree, index) => {
    // console.log(tree.leftCounter)
    tree.totalCounter = tree.leftCounter * tree.rightCounter * tree.topCounter * tree.bottomCounter;
    // console.log(tree.totalCounter, index)
})

// console.log(treeArray[1540])

// console.log(treeArray[9800]);

// console.log(treeArray);

const highestTotal = treeArray.map(tree => tree.totalCounter)
const max = Math.max(...highestTotal);
// console.log(highestTotal.indexOf(max))

console.log(Math.max(...highestTotal));



