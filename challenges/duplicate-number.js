/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

const duplicateNumber = array => {
//my first inclination here is to use some of a cache that tracks how many times a number repeats
//we know that only one num is duplicated, all we do if find the cache value that is not 1, and return the element

//edge case
if(!array.length) {
    return "please enter valid array length"
}

//define a cache and a dup variable
const cache = {};
let dup;

//iterate and find the duplicate
array.forEach(element => {
    cache[element] = (cache[element] || 0) + 1;
    if(cache[element] !== 1) {
        dup = element;
    }
});

//return it
return dup;
};


/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

const duplicateNumberAdvanced = array => {
return duplicateNumber(array);
};

module.exports = { duplicateNumber, duplicateNumberAdvanced };
