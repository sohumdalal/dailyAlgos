/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = array => {
    //first lets edge out a case where our array is empty
    if(!array.length) return "please enter valid array, with non-zero length!"
    //we want to essentially create a cache that keeps track of how many times a number appears. start by creating 
    //a cache, and then create variables to keep track of the amount of times a number appears, modeVal, and the number itself, maxVal
    const cache = {};
    let modeVal = -Infinity;
    let maxVal;
    //iterate through the passed in array, and add to cache, if it exsists then increment the count
    //the conditional should check if the cache[element] is greater than the current mode, if it is then it reassigns
    //the conditional should also check that if the cache[element] is equal to the exsisting mode and the current element
        //is greater than the number itself the mode is based on, then the passed in element becomes the new mode.
        //to better understand, we can also imagine that we are returning the minimum value instead of maxVal
    array.forEach(element => {
        cache[element] = (cache[element] || 0) + 1;
        if((cache[element] > modeVal) || (cache[element] === modeVal && element >= maxVal)) {
            modeVal = cache[element]
            maxVal = element;
        }
    });
    return maxVal;
};





/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

const modeNested = array => {
    
};











module.exports = { mode, modeNested };
