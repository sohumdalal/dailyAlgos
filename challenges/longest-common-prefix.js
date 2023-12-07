/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","floght"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

const longestCommonPrefix = (strs) => {
    let prefix = '';
    if (!strs.length) return prefix;
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return prefix;
           }
        }
        prefix += strs[0][i];
    }
    return prefix;
}


/*
    Algo reflection: fun problem. I have to remember to brute force the mapping. 
    I was almost there. need a bit of help just thinking through the return statements.
*/

    module.exports = { longestCommonPrefix };
