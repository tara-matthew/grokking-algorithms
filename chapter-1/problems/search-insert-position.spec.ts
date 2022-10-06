const searchInsertPosition = require('./search-insert-position');

const cases = [
    [
        [3, 5, 6, 8, 9],
        [3],
        [4]
    ]
];

describe("Search insert position", () => {
    test.each(cases)(
        "given %p and %p as arguments, returns %p",
        (firstArg, secondArg, expectedResult) => {
            console.log(firstArg);
            const result = searchInsertPosition(firstArg, secondArg);
            expect(result).toEqual(expectedResult);
        }
    );
})