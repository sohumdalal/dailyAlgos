/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","floght"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

const longestCommonPrefix = (strs) => {
    //begin with an empty string, prefix
    let prefix = '';
    //if empty string, then return the empty string, or prefix
    if (!strs.length) return prefix;
    //so we want to first iterate over the first string in the array
    for (let i = 0; i < strs[0].length; i++) {
        //lets check each character in the first string aginst the other strings in the array, and their first characters
        for (let j = 0; j < strs.length; j++) {
            //if commonality is broken, then return the prefix
            if (strs[0][i] !== strs[j][i]) {
                return prefix;
           }
        }
        //if every ith position char, for each string, is the same. then add to prefix
        prefix += strs[0][i];
    }

    //if the array is full of identical strings, then this return statement will trigger
    return prefix;
}


/*
    Algo reflection: fun problem. I have to remember to brute force the mapping. 
    I was almost there. need a bit of help just thinking through the return statements.
*/

    module.exports = { longestCommonPrefix };
