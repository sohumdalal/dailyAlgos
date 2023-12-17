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
    //if the the input is not an array, or if there is less than two elements, then return 0;
    if (!Array.isArray(apple_stock) || apple_stock.length < 2) {
        return 0;
    }

    //asign a min pointer, and a max value to track the maximum profit
    let minIndex = 0;
    let max = 0;

    //iterate through the array, in order to find the maximum profit
    for (let i = 0; i < apple_stock.length; i++) {
        //at every iteration check the profit, depending on if profit is negative you have one of two conditionals, and then you keep moving through the array
        const currentProfit = apple_stock[i] - apple_stock[minIndex];
        if(apple_stock[i] < apple_stock[minIndex]) {
            //this is crucial, you keep reassigning the minIndex whereever the stock is lower than the previous apple_stock[minIndex]; yuo are keeping track of the min itself
            minIndex = i;
        }
        else if (currentProfit > max) {
            //all your doing is reassigning the max, making sure you are checking at each iteration
            max = currentProfit;
        }

    }
    //finally the max is recieved
    return max;
}

console.log(highestProfit([1000, 500, 1500, 2000, 0]));

module.exports = { highestProfit }