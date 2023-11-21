/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = array => {
    //first store each number in a cache. the math.max the cache[num] 
    cache = {};
    array.forEach((element) => {
        if (cache[element]) {
            cache[element] += 1;
        }
        else {
            cache[element] = 1
        }
    })
    // console.log(cache);

    const keys = Object.keys(cache);
    let max = -Infinity;
    let maxKey;

    for (let i = 0; i < keys.length; i++) {
        if (cache[keys[i]] > max) {
            max = cache[keys[i]]
            maxKey = keys[i];
        }

        else if (cache[keys[i]] === max) {
            maxKey = Math.max(maxKey, keys[i]);
        }
    }

    return (`The number that appears the most is: ${maxKey}`);
};

console.log(mode([3, 2, 4, 3, 4, 4, 2, 2, 2, 3, 3, 3]));
console.log(mode([7, 5, 8, 8, 2, 5,]));



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
    const newArray = array.flat(Infinity)
    return mode(newArray);
};

console.log(modeNested([[3], [2, [4]], 3]));
console.log(modeNested([7, [[5, [8], 8], 2, 5]]));
console.log(modeNested([4, []]));











module.exports = { mode, modeNested };
