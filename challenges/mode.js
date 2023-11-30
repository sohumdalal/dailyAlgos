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
    if(!array.length) {
        return "please enter valid array, with non-zero length!"
    }
    //we want to essentially create a cache that keeps track of how many times a number appears. start by creating 
    //a cache
    const cache = {};
    //iterate through the passed in array, and add to cache, if it exsists then increment the count
    array.forEach(element => {
        if(cache[element]) {
            cache[element] += 1;
        }
        else {
            cache[element] = 1;
        }
    });

    return Math.max[]

};




//sky: cache[val] = (cache[val] || 0) + 1; this entire line is the cache object. my lines 17-24
//use modeVal and MaxVal. put the max condiitonal within the forEach. should be done in 12lines. 




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
