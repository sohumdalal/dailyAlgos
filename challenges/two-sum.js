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
  //lets brute force this, then see if we can refactor towards an O(n) solution. 
  if (!arr.length) {
    return "please enter a valid array";
  }

  for (let i = 0; i < arr.length; i++) {
    //my approach is to take the difference of the target and a the current element.
    const temp = target - arr[i];
    console.log("temp:", temp);
    //now lets check if the temp value exists in the array itself
    if (arr.includes(temp)) {
      return true;
    }
  }
  return false;
}

const nums = [4, 6, 12, 9, 1]
console.log(twoSum(nums, 2));

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