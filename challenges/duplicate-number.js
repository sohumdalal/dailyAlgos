/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

const { resourceLimits } = require("worker_threads");

const duplicateNumber = array => {
    //my first inclination here is to use some of a cache that tracks how many times a number repeats
    //we know that only one num is duplicated, all we do if find the cache value that is not 1, and return the element

    //edge case
    if (!array.length) {
        return "please enter valid array length"
    }

    //define a cache and a dup variable
    const cache = {};
    let dup;

    //iterate and find the duplicate
    array.forEach(element => {
        cache[element] = (cache[element] || 0) + 1;
        if (cache[element] !== 1) {
            dup = element;
        }
    });

    //return it
    return dup;
};


/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

const duplicateNumberAdvanced = array => {

    //call this a duplicate variable
    let duplicate;

    //enter an interation over the array
    for (let i = 0; i < array.length; i++) {
        //lets call an index variable
        let index = Math.abs(array[i]) - 1;
        // console.log("i:", i)
        // console.log("array[i]:", array[i])
        // console.log("index:", index)
        // console.log("array[index]:", array[index])
        // console.log("--------------------")
        //check if the array at such index is negative, if it is, then its a duplicate, reassign and then break
        if (array[index] < 0) {
            duplicate = Math.abs(array[i]);
            break;
        }
        //if not neg, then make it negative, so if we come across that value again in our iteration, its a duplicate
        else {
            array[index] = -array[index];
        }
    }
    return duplicate;
};

/*
    Algo reflection:
        really really tough one to get in constant space complexity. I dipped into the internet to get some direction, 
        and looked at some other solutions. this is one is golden though, however I probably could not come up with it
        myself. Now that I have seen something like it, I feel comfortable with the process. its a confusing one as you are
        moving through out the array. I could use a conversation around this algo with someone like Charlie. 
*/


duplicateNumberAdvanced([3, 4, 7, 6, 8, 5, 6]);

module.exports = { duplicateNumber, duplicateNumberAdvanced };
