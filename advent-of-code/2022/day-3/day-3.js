const fs = require("fs");
const input = fs.readFileSync("advent-of-code/2022/day-3/day-3.txt")
    .toString()
    .replace(/\n$/, '')
    .split("\n")
    .map(i => i.split(''));

// console.log(input);

// console.log(input[1].split(''));

// console.log(input);

const partOne = () => {
    let total = 0;
    input.forEach((element) => {
        const splitIndex = (element.length / 2);
        const sliced = [element.slice(0, splitIndex), element.slice(splitIndex)];
        const duplicates = findDuplicates(sliced[0], sliced[1]);
        // console.log(duplicates);
        const alphabet = mapAlphabet();
        total += alphabet.indexOf(duplicates[0]) + 1;
    });

    return total;
}

const partTwo = () => {
    let threeArrays = [];
    let total = 0;
    const alphabet = mapAlphabet();
    input.forEach((element, index) => {
        if (threeArrays.length < 3) {
            threeArrays.push(element);
        }
        if (threeArrays.length === 3) {
            const firstDuplicate = findDuplicates(threeArrays[0], threeArrays[1]);
            console.log(firstDuplicate);
            const secondDuplicate = findDuplicates(firstDuplicate, threeArrays[2])
            console.log(secondDuplicate);
            total += alphabet.indexOf(secondDuplicate[0]) + 1;
            console.log(total);
            threeArrays = [];
        }

        // console.log(threeArrays[0])
    })
}

const findDuplicates = (arr, arr2) => {
    const set = new Set (arr);
    // const set2 = new Set (arr2);
    const duplicates = arr2.filter(item => {
        if (set.has(item)) {
            return item;
        } else {
            set.delete(item);
            // set2.delete(item);
        }
    });

    return [...new Set(duplicates)];
}

const mapAlphabet = () => {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const uppercaseAlphabet = alphabet.map(letter => letter.toUpperCase());
    alphabet = [...alphabet, ...uppercaseAlphabet];
    return alphabet;
    // console.log(alphabet.indexOf('L') + 1);
}


const array = [
    'v', 'J', 'r', 'w', 'p',
    'W', 't', 'w', 'J', 'g',
    'W', 'r', ]

const array2 = ['h', 'c', 's',
    'F', 'M', 'M', 'f', 'F',
    'F', 'h', 'F', 'p'
];

// const array = [
//     'j', 'q', 'H', 'R', 'N', 'q',
//     'R', 'j', 'q', 'z', 'j', 'G',
//     'D', 'L', 'G', 'L'];
//
// const array2 = ['r', 's',
//     'F', 'M', 'f', 'F', 'Z', 'S',
//     'r', 'L', 'r', 'F', 'Z', 's',
//     'S', 'L'
// ]

// console.log(findDuplicates(array, array2));
// console.log(partOne(input));
console.log(partTwo());
// console.log(mapAlphabet());
