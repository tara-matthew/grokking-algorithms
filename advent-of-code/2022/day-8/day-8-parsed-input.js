const input = [
    [3,0,3,7,3],
    [2,5,5,1,2],
    [6,5,3,3,2],
    [3,3,5,4,9],
    [4,5,3,9,0]
];

// console.log(input);

class Tree {
    constructor(height, neighbours, isLeftEdge = false, visible = false) {
        this.visible = visible;
        this.isLeftEdge = isLeftEdge;
        this.height = height;
        this.neighbours = neighbours; // an array of neighbours
    }
}

const treeArray = [];
for (let i = 0; i < input.length; i ++) {
    // let isEdge = false;
    let isLeftEdge = false;
    let left;
    let right;
    let up;
    let down;
    for (let j = 0; j < input[i].length; j++) {
        if (j === 0) {
            isLeftEdge = true;
            // console.log('here')
        }
            // let up = input[i-1][j];
            // let right = input[i][j+1];
            // let down = input[i+1][j];
        if (j > 0) {
            left = input[i][j - 1];
        }
        right = input[i][j+1];

        treeArray.push(new Tree(input[i][j], [left, right], isLeftEdge));
            isLeftEdge = false;
    }
}

// console.log(treeArray);


const checkLeftNeighbour = (currentIndex, nextIndex) => {
    // console.log(treeArray[currentIndex]);
    // console.log(treeArray[nextIndex]);
    // Base case
    if (treeArray[nextIndex].isLeftEdge === true) {
        // console.log(treeArray[currentIndex], treeArray[nextIndex])
        return treeArray[nextIndex].height < treeArray[currentIndex].height;
    }

    if (treeArray[nextIndex].height < treeArray[currentIndex].height) {
        // console.log('continue');
        return checkLeftNeighbour(currentIndex, nextIndex - 1);
    }

    return false;
}

console.log(treeArray);

for (let i = 0; i < treeArray.length - 1; i ++) {
    if (treeArray[i].neighbours[0] < treeArray[i].height) {
        // console.log(treeArray[i], treeArray[i - 1]);
        // console.log(checkLeftNeighbour(i, i - 1));
    }
}


// console.log(checkLeftNeighbour(13, 12))
