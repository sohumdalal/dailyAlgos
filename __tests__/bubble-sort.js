const { bubbleSort } = require('../challenges/bubble-sort.js');

describe('bubbleSort test', () => {
    it('Should return undefined when empty array is passed in.', () => {
        expect(bubbleSort([])).toBe(undefined);
    });

    it('Should return undefined when any data type except Arrays are passed in.', () => {
        expect(bubbleSort(10)).toStrictEqual(undefined);
        expect(bubbleSort('10')).toStrictEqual(undefined);
        // expect(bubbleSort(null)).toBe(null);

    });

    it('Should return sorted array', () => {
        expect(bubbleSort([1, 2, -4])).toStrictEqual([-4, 1, 2])
        expect(bubbleSort([1, 4, 2, 5, -2, 3])).toStrictEqual([-2, 1, 2, 3, 4, 5])
        expect(bubbleSort([0])).toStrictEqual([0])
        expect(bubbleSort([1, 1, 1, 1, 1])).toStrictEqual([1, 1, 1, 1, 1])

    });

});

