const largestSquarePlots = (land) => {
    let numbersAreDivisible = Math.max(land[0], land[1]) % Math.min(land[0], land[1]) === 0;
    if (numbersAreDivisible) {
        return Math.min(land[0], land[1]);
    }

    // todo fix
    const differenceLength = land[0] - Math.min(1680, 640);
    //const differenceWidth =
    // return difference;
    return largestSquarePlots()

}

const land = [1680, 640];

console.log(largestSquarePlots(land));
