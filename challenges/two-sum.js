/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/


const twoSum = (arr, target) => {
  //start out by edge casing
  if (!arr.length) {
    return "please enter a valid array";
  }
  //lets create a difference cache, the point of this cache will be to keep track of the numbers we have iterated through,
  //checking if each number we iterate is === a complement, a difference between the target and arr[i]
  const diffCache = {};

  for (let i = 0; i < arr.length; i++) {

    const complement = target - arr[i];

    //checking the cache for exsistence
    if (diffCache[complement] !== undefined) {
      return true;
    }

    //doesnt exist so we add our iterated number to the cache, as potential candidate
    diffCache[arr[i]] = i;
  }

  return false;
}

/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

const threeSum = (arr, target) => {

}





module.exports = { twoSum, threeSum };