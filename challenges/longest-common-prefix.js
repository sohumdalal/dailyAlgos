/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","floght"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

const longestCommonPrefix = (strs) => {
    let prefix = '';
    if (!strs.length) return prefix;
    //lets first iterate through the array, then lets iterate through each string. 
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
    //For each element in the string, I want to first capture the first character, and then the second, and so on
    //if there is a 


    module.exports = { longestCommonPrefix };
