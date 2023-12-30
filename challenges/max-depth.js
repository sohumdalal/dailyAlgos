/*

Given an arbitrarily nested array of arrays, return the maximum depth.

For example:


maxDepth([3, 2]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([7, 8, 0, 9]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([]) -> 1 (array may be empty)

maxDepth([3, [6, 7], 2]) -> 2 (maximum depth is 2 levels)
maxDepth([[2, 1], 8, 3, [4], 5]) -> 2 (maximum depth is 2 levels)
maxDepth([3, [], 2]) -> 2 (inner arrays may be empty, but still count towards depth)

maxDepth([3, [6, [7]], 2]) -> 3 (maximum depth is 3 levels)

maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]) -> 4 (maximum depth is 4 levels)

*/

const { arrayBuffer } = require("stream/consumers");

const maxDepth = (arr, count = 0) => {
  //let define a count var, and every time we call the function again to check, we increment count

  if(!arr.length) {
    return count;
  }

  if(Array.isArray(arr[0])) {
    maxDepth(arr[0], ++count);
  }

  maxDepth(arr.slice(), count);
};

module.exports = {maxDepth};
