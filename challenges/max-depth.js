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

const maxDepth = (arr, count = 1) => {
 
  //start by defining a more global var called max which will keep track of the max depth
  let max = count;

  for(const el of arr) {
    //iterating through the array, lets check each element if it is an array
    if(Array.isArray(el)) {
      //if so, declare a var depth, which returns out a local max of nested arrays, and assigns it to a depth var
      const depth = maxDepth(el, count + 1);
      if (depth > max) {
        //reassign the global max to the depth var, if it truly is the max, else dont do anything with it, and move on in the loop.
        max = depth;
      }
    }
  }

  //when we finally are finished with all our nested arrays, and the loop is finished. we return max, which since it is defined more globally, returns the true max depth.

  return max;

};

module.exports = {maxDepth};
