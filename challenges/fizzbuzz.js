/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5,
"buzz" in place of numbers divisble by 5 but not by 3,
and "fizzbuzz" in place of numbers divisble by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

const fizzbuzz = num => {  
//lets first create an empty array
const final = [];
//using a while loop and a count variable, while count <= to the passed in num. assign count to be 1, initally.
let count = 1;
while (count <= num) {
    //if count is both divisible by 3 & 5, then we return fizzbuzz
    if (count % 3 === 0 && count % 5 === 0) {
        final.push("fizzbuzz")
    }
    //if count is divisible by 3 only, then we return fizz
    else if (count % 3 === 0) {
        final.push("fizz")
    }
    //if count is both divisible by 5, then we return buzz
    else if (count % 5 === 0) {
        final.push("buzz")
    }
    //if none of the conditions above, we just push the count itself into the array
    else {
    final.push(count);
    }
    //we want to make sure we increment count on every iteration of the while loop, if you dont, then doom time. 
    count++
}
//outside of the while loop, we return the final populated array
return final;
};



//I went ahead and tried refactoring with a filter method, for some conciseness. 
const fizzbuzzTwo = num => {  
const final = [];
for (let i = 1; i <= num; i++) {
    final.push(i);
}
final.forEach((el, index) => {
    if(el % 3 === 0 && el % 5 === 0) {
        final.splice(index, 1, "fizzbuzz")
    }
    if(el % 3 === 0) {
        final.splice(index, 1, "fizz")
    }
    if(el % 5 === 0) {
        final.splice(index, 1, "buzz")
    }
})

return final;
};
    


// console.log(fizzbuzz(16));
// console.log(fizzbuzzTwo(16));


/*

Extension: 
Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5 or 7,
"buzz" in place of numbers divisble by 5 but not by 3 or 7,
"bazz" in place of numbers divisble by 7 but not by 3 or 5,
"fizzbuzz" in place of numbers divisble by 3 and 5 but not 7,
"fizzbazz" in place of numbers divisble by 3 and 7 but not 5,
"buzzbazz" in place of numbers divisble by 5 and 7 but not 3,
and "fizzbuzzbazz" in place of numbers divisble by 3, 5, and 7.

fizzbuzzbazz(22);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizzbazz', 22]

*/

const fizzbuzzbazz = num => {
    const final = [];

    for (let i = 1; i <= num; i++) {
        let string = "";
        








    }


    return final;
};



console.log(fizzbuzzbazz(22));


module.exports = {fizzbuzz, fizzbuzzbazz};

