/*

Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

getAllProducs([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

Be careful in this problem! What if there is a zero (or multiple zeroes) in the
input array? How would you handle this?

*/

const getAllProducts = array => {

    const final = [];

    for (let i = 0; i < array.length; i++) {

        let product = 1;

        for (let j = 0; j < array.length; j++) {
            if (array[j] !== array[i] || i !== j) {
                product *= array[j];
            }
        }
        final.push(product);
    }
    return final;

//     const final = [];
//     let product = 1;
//     array.forEach(element => {product *= element;});
//     array.forEach(element => {
//         if(element !== 0) {
//             final.push(product/element)
//         }
//         else {
//             final.push(0);
//         }
//     });
//     return final;

};

/*
    Algo reflection: Fun little problem that continues our understanding of the basics, 
    and how arrays work under the hood. solved this relatively fast, and loved the additional 
    challenge regarding the zeroes. ON is tough, especially considering the case where only 1 zero is
    present. onwards we go. 
*/

console.log(getAllProducts([0, 3, 4, 0]));
console.log(getAllProducts([9, 0, 0, 0, 4, 7]));

module.exports = { getAllProducts };
