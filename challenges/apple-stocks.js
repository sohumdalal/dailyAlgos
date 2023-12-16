/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

const highestProfit = apple_stock => {
    let max = -Infinity;
//lets brute force a n2 solution to start
//my thinking is that we start with a nested loop, and we check the max value, whatever the max is, we return that.
for(let i = 0; i < apple_stock.length; i++) {
    for(let j = i + 1; j < apple_stock.length; i++) {
        const currentProfit = apple_stock[j] - apple_stock[i]
        if(max < currentProfit) {
            max = currentProfit
        }
    }
}
return max;
}

module.exports = {highestProfit}