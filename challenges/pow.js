/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

function pow(base, power) {
//straight forward, lets get into the solution using a while loop; but make sure we edge out. 
if (power <= 0) return 1;
//lets define some varaibles here to keep track how many times we multiple, and what the product is
let count = 0;
let product = 1;
//entering the while loop, as long as count is less than the power, keep mulitplying the current product by the base
//and increment the count as well
while (count < power) {
 product *= base;
 count++;
}
//Finally return the product
return product;

}



/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */

function powRecurse(base, power) {
//much easier in my opinion
//establish a base case case in which we exit out recursive calls:
if(power === 0) {
    return 1;
}
//recursive case that handles the continual multiplying until base case is recieved;
return base * powRecurse(base, --power);
}



module.exports = { pow, powRecurse };
