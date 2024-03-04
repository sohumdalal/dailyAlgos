/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.


ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/

const commonElements = (...args) => {
    //start by edging out an empty array of arrays
    if (!args.length) {
        return "please enter valid array";
    }
    //declare a variable final, which is the final version of the common elements using the reduce method.
    const final = args.reduce((common, curr) => {
        //within the reduce method, for every element, check against the acc which is an array of common elements. 
        return common.filter((el) => curr.includes(el))
    });

    //if no common elements, then return the string
    if (!final.length) {
        return "Nothing in Common!"
    }

    //return the common elements
    return final;
};

const arr1 = [2, 10, 'cat', 3, 99, 2000, 'dog', 'lion'];
const arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
const arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

console.log(commonElements(arr1, arr2, arr3));



/*
    Algo reflection: fun problem dealing with reduce. make note of that inner return 
    statement with the common.filter. it returns filter on every iteration, to update common. 
*/

/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {

}

module.exports = { commonElements, commonElementsOptimized } 