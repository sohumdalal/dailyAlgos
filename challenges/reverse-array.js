/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/

const reverseArray = array => {
//start by indicating start and end pointers
 let start = 0;
 let end = array.length - 1;

 //as long as start is less than the end, we are approaching a midpoint
 while (start < end) {
    //we assign a temp var to the value at start
    let temp = array[start];
    //conduct the swap
    array[start] = array[end];
    //since now there are duplicates we assign the end pointer to the temp val stored in memory
    array[end] = temp;

    //increment start/decrement end towards the midpoint
    start++;
    end--;
 }
//return the same array, mutated
 return array;
};

console.log(reverseArray([1,2,3,4]));

/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseSentence = sentence => {
  const sentenceArray = sentence.split(' ');
  return reverseArray(sentenceArray);
};

console.log(reverseSentence('bob likes dogs alot'));

module.exports = {reverseArray, reverseSentence};
