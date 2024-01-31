/*

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

We will sort the array using a strategy called selection sort, which works as
follows. First, put the smallest number in the array at position 0. Then, put
the second-smallest number in the array at position 1. Then, put the
third-smallest number in the array at position 2 etc. After going through the
whole array, the array will end up being sorted.

*/

const selectionSort = array => {

    //lets first start with out input scrubbing, making sure we have a valid array

    if (!Array.isArray(array) || array === null) {
        return undefined;
    }

    //lets enter a loop to pin the first element of our array. 
    //we want to keep track of a min value which we will reassign to array[i], @ the current i.
    //we also want to keep track of the index which contains new min value in the array; so we can conduct a proper swap

    for (let i = 0; i < array.length; i++) {

        // console.log("i:", i)
        // console.log("Array@i:", array[i]);

        let min = array[i];
        let index = i;

        //this logic will find the min value, and keep track of its index
        for (let j = i + 1; j < array.length; j++) {

            // console.log("Array@j:", array[j]);
            // console.log("Current Min:", min)
            // console.log("----------------------")

            if (min > array[j]) {
                min = array[j]
                index = j;
            }
        }

        //the swapping in place logic that assigns a temp variable, and brings together the min, temp, and index variable. 
        const temp = array[i];
        array[i] = min;
        array[index] = temp;

        // console.log("My Array is:", array)
        // console.log("- - - - - - - - - - - - - - - - - - - - - - -")


    }

    return array;
};

console.log(selectionSort([5, 2, 4, 6, 1, 3]))

/*

Extension:

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

For this extension, we will use a strategy called insertion sort, which works as
follows. Imagine that the first k - 1 numbers of the array are in ascending
order. We take the kth number and insert it into the correct position amongst
the k - 1 numbers such that now, the first k numbers of the array are in
ascending order. In other words:

The first value in the array is considered to be already fine.
The second value is either placed before/after the first value.
The third value is inserted in the correct position amongst the first two values.
The fourth value is inserted in the correct position amongst the first three values.
etc.

*/

const insertionSort = array => {

};

module.exports = { selectionSort, insertionSort };
