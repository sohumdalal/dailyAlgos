const {quickSort} = require('../challenges/quicksort.js')

describe('quickSort test', () => {
    it('Should return undefined when empty array is passed in.', () => {
        expect(quickSort([])).toBe(undefined);
    });

    it('Should return undefined when any data type except Arrays are passed in.', () => {
        expect(quickSort(10)).toStrictEqual(undefined);
        expect(quickSort('10')).toStrictEqual(undefined);
        // expect(bubbleSort(null)).toBe(null);

    });

    it('Should return sorted array', () => {
        expect(quickSort([1, 2, -4])).toStrictEqual([-4, 1, 2])
        expect(quickSort([1, 4, 2, 5, -2, 3])).toStrictEqual([-2, 1, 2, 3, 4, 5])
        expect(quickSort([0])).toStrictEqual([0])
        expect(quickSort([1, 1, 1, 1, 1])).toStrictEqual([1, 1, 1, 1, 1])

    });

});

