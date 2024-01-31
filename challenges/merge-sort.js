/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.

*/

const mergeSort = array => {

  //so the overall strategy with merge is interesting
  //take note of the merge helper function, which utilizes shift to compare elements from left and right arrays, on the way back up

  const merge = (left, right) => {
    const sorted = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sorted.push(left.shift());
      }
      else {
        sorted.push(right.shift());
      }
    }

    return [...sorted, ...left, ...right]
  }

  //first, we leverage recursion. 
  //this means our base case, is one in which we return the array, if the length is <= 1.

  if (array.length <= 1) {
    return array;
  }

  //we define a mid-point to split down
  //we recursively split down the left first, then we merge on the back up.
  let mid = Math.floor(array.length / 2)

  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  //once you have left and right in each exection context, return the merged array to the execution context above
  return merge(left, right);

}

module.exports = { mergeSort };