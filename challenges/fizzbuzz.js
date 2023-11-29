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
//this is a good one, so lets first edge out any negative or zero case.
if (num <= 0) {
    return "please enter a positive number!"
}

//now our output is an array, so lets create an empty array, which we will return.
const final = [];

//lets declare a new var called count, then increment it toward our passed in num. On every iteration,
//if we hit a number thats divisible by 3 and 5, 3, or 5. then we establish certain conditions. else we just
//push the number itself into the array. 

let count = 1;

while (count <= num) {
    count % 5 === 0 && count % 3 === 0 ? final.push("fizzbuzz"): 
    count % 3 === 0 ? final.push("fizz"): 
    count % 5 === 0? final.push("buzz"):
    final.push(count);
    count++
}
return final;

};

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
//lets do the same thing as above, but just add a few more cases
if (num <= 0) {
    return "please enter a positive number!"
}
const final = [];
let count = 1;
while (count <= num) {
    count % 7 === 0 && count % 5 === 0 && count % 3 === 0 ? final.push("fizzbuzzbazz"): 
    count % 7 === 0 && count % 5 === 0 ? final.push("buzzbazz"): 
    count % 7 === 0 && count % 3 === 0 ? final.push("fizzbazz"): 
    count % 5 === 0 && count % 3 === 0 ? final.push("fizzbuzz"): 
    count % 7 === 0? final.push("bazz"):
    count % 5 === 0 ? final.push("buzz"): 
    count % 3 === 0? final.push("fizz"):
    final.push(count);
    count++
}
return final;
};




module.exports = {fizzbuzz, fizzbuzzbazz};

