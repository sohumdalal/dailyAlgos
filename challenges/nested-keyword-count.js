
/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword) => {
    const flat = array.flat(Infinity);
    let keycount = 0;
    for (let i = 0; i < flat.length; i++) {
        if (flat[i] === keyword) {
            keycount++;
        }
    }
    return keycount;
};

/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = array => {
    const flat = array.flat(Infinity);
    const cache = {};
    let max = -Infinity;
    const maxArray = [];

    flat.forEach(element => {
        cache[element] = (cache[element] || 0) + 1;
        if (cache[element] > max) {
            max = cache[element];
        }
    });

    for (const element in cache) {
        if (cache[element] === max) {
            maxArray.push(element);
        }
    }
    return maxArray.sort();
};

/*
    Algo reflection: nice little problem that practices caching, and mode. 
    there has to be a dryer way to do this, but Im happy with brute force for now.
*/

const array = ['y', 'hi', 'bright', 'x', 'z', 'x', 'hi', 'y', 'light'];
console.log(keywordMode(array));

module.exports = { keywordCount, keywordMode };
