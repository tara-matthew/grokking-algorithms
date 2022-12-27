// const input = [
//     [3,0,3,7,3],
//     [2,5,5,1,2],
//     [6,5,3,3,2],
//     [3,3,5,4,9],
//     [3,5,3,9,0]
// ];

const fs = require ('fs');
const parsed = fs.readFileSync("advent-of-code/2022/day-8/day-8.txt")
    .toString()
    .replace(/\n$/, '')
    .split("\n")

// console.log(input);

const input = parsed.map(e => e.split('').map(element => Number(element)));
console.log(input[0].length);

class Tree {
    constructor(height, neighbours, isLeftEdge = false, isRightEdge = false, isTopEdge = false, isBottomEdge = false, visible, checked) {
        this.visible = visible;
        this.checked = checked;
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

        treeArray.push(new Tree(input[i][j], [left, right, up, down], isLeftEdge, isRightEdge, isTopEdge, isBottomEdge, visible, checked));
        isLeftEdge = false;
        isRightEdge = false;
        isTopEdge = false;
        isBottomEdge = false;
        checked = false;
        visible = false
    }
}

// console.log(treeArray);


const checkLeftNeighbour = (currentIndex, nextIndex) => {
    // Base case
    if (treeArray[nextIndex].isLeftEdge === true) {
        return treeArray[nextIndex].height < treeArray[currentIndex].height;
    }

    if (treeArray[nextIndex].height < treeArray[currentIndex].height) {
        return checkLeftNeighbour(currentIndex, nextIndex - 1);
    }

    return false;
}

const checkRightNeighbour = (currentIndex, nextIndex) => {
    // Base case
    // console.log(treeArray[currentIndex]);
    // console.log(treeArray[nextIndex])
    if (treeArray[nextIndex].isRightEdge === true) {
        // console.log(treeArray[currentIndex], treeArray[nextIndex])
        return treeArray[nextIndex].height < treeArray[currentIndex].height;
    }

    if (treeArray[nextIndex].height < treeArray[currentIndex].height) {
        return checkRightNeighbour(currentIndex, nextIndex + 1);
    }

    return false;
}

const checkTopNeighbour = (currentIndex, nextIndex) => {
    // Base case
    if (treeArray[nextIndex].isTopEdge === true) {
        return treeArray[nextIndex].height < treeArray[currentIndex].height;
    }

    if (treeArray[nextIndex].height < treeArray[currentIndex].height) {
        return checkTopNeighbour(currentIndex, nextIndex - 99); // make this dynamic
    }

    return false;
}

const checkBottomNeighbour = (currentIndex, nextIndex) => {
    // Base case
    if (treeArray[nextIndex].isBottomEdge === true) {
        // console.log(treeArray[currentIndex], treeArray[nextIndex])
        return treeArray[nextIndex].height < treeArray[currentIndex].height;
    }

    if (treeArray[nextIndex].height < treeArray[currentIndex].height) {
        return checkBottomNeighbour(currentIndex, nextIndex + 99);
    }

    return false;
}


for (let i = 0; i < treeArray.length - 1; i ++) {
    // console.log(i);
    if (treeArray[i].checked === false) {
        treeArray[i].checked = true;
        if (treeArray[i].neighbours[0] < treeArray[i].height) {
            // console.log(treeArray[i], treeArray[i - 1]);
            if (treeArray[i].visible === false) treeArray[i].visible = checkLeftNeighbour(i, i - 1);
        }
        if (treeArray[i].neighbours[1] < treeArray[i].height) {
            if (treeArray[i].visible === false) treeArray[i].visible = checkRightNeighbour(i, i  +1);
            // console.log(treeArray[i], treeArray[i - 1]);
            // console.log(checkLeftNeighbour(i, i - 1));
        }
        // check if an edge? But lack of neighbour should not need to do this
        if (treeArray[i].neighbours[2] < treeArray[i].height) {
            if (treeArray[i].visible === false) treeArray[i].visible = checkTopNeighbour(i, i - 99);
            // console.log(treeArray[i], treeArray[i - 1]);
            // console.log(checkLeftNeighbour(i, i - 1));
        }
        if (treeArray[i].neighbours[3] < treeArray[i].height) {
            if (treeArray[i].visible === false) treeArray[i].visible = checkBottomNeighbour(i, i + 99);
            // console.log(treeArray[i], treeArray[i - 1]);
            // console.log(checkLeftNeighbour(i, i - 1));
        }
    }

}
// console.log(treeArray);

// console.log(checkRightNeighbour(11,12))


// console.log(checkLeftNeighbour(13, 12))
// console.log(checkRightNeighbour(13,14))

// console.log(checkBottomNeighbour(11, 16))
//
const filtered = treeArray.filter(tree => tree.visible === true)

console.log(filtered.length)
