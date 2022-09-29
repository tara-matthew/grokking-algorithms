const binarySearch = require('./binary-search');

const numbersList = [-1,0,3,5,9,12];

test('Finds numbers at correct indices', () => {
    expect(binarySearch(numbersList, 9)).toBe(4);
});

test('Returns null if number does not exist', () => {
    expect(binarySearch(numbersList, 2)).toBe(null);
})