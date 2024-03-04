/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 * 
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */

const permPalin = str => {
    //first edge out the case in which anything but a string is inputted by the user
    if(typeof str !== "string") {
        return false;
    }

    //Now in order to do any caching logic, we should split the string, create a cache, and populate
    //we ve done this alot, but look at sky's method, so gorgeous 
    const stringArray = str.split('');
    const cache = {}
    stringArray.forEach(element => {
        cache[element] = (cache[element] || 0) + 1;
    });

    //here is where it gets fun, and took me some time to iron out:
    //in order for you to have a palindrome, you need symetrry, which means that every letter is
    //repeated an even number of times, or you have one character repeated once, while everyone else
    //is repeated an even number of times. so racecar, teammate, sheesh can all be palindrome, based off
    //their permutations

    //to start initialize a var oneCount to be 0. if you come across a 1 in the cache, increment it.
    let oneCount = 0;
    for (let key in cache) {
        if (cache[key] === 1) {
            oneCount++
           }
        //this is the money, this ensures symmetrry in our palindrome, if you dont mod 2, then return false ASAP
        else if (cache[key] % 2 !== 0) {
            return false;
        }
    }

    //only return true if either of these two conditions are met, because only then is symmetry preserved
    return oneCount === 1 || oneCount === 0;

};

console.log(permPalin("abab"));
console.log(permPalin("cbaba"));
console.log(permPalin("cbac"));
console.log(permPalin("abc"));


/* 
 * Extension: Solve in constant space complexity.
 */
const permPalinAdvanced = str => {

};

module.exports = { permPalin };