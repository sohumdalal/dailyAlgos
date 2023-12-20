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
    //stick into an object and the pattern we are looking for is:
    //if only one property in the object is 1, and all the other are the same number, you have a palindrome
    // {a:2, b: 2} OR {a:2, b: 2, c:2, d:1}

    const stringArray = str.split('');
    const cache = {}
    stringArray.forEach(element => {
        cache[element] = (cache[element] || 0) + 1;
    });

    let oneCount = 0;
    for (let key in cache) {
        if (cache[key] === 1) {
            oneCount++
           }
        else if(cache[key] % 2 !== 0) {
            return false;
        }
    }

    return oneCount === 1 || oneCount === 0;

};

console.log(permPalin("abab"));
console.log(permPalin("cbaba"));
console.log(permPalin("cbac"));
console.log(permPalin("a"));


/* 
 * Extension: Solve in constant space complexity.
 */
const permPalinAdvanced = str => {

};

module.exports = { permPalin };