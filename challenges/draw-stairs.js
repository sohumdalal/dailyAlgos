/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.

For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

const drawStairs = n => {
     if (n <= 0) {
          console.log("");
     }
     //lets do this via loop. for the passed in number, say 6.
     for(let i = 1; i <= n; i++) {
     //we want the first iteration to log 5 spaces, 1 star. 
     //We want to decrease the spaces, and increase the stars, on every iteration.
     console.log(" ".repeat(n-i) + "*".repeat(i));
     }

};

// drawStairs(6);

/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
          char, space, space, space, char, space, space, space, char
\ | /   char, space, space, char, space, space, char
 \|/ // space, char, char, char, space
--+--
 /|\ 
/ | \

*/

function drawStar(n) {
     if(n % 2 !== 1 || n < 0) {
          throw new Error ("Please enter an odd, positive num");
     }

     const numDashesbeforePlus = (Math.ceil(n / 2)) - 1
     const midline = "-".repeat(numDashesbeforePlus) + "+" + "-".repeat(numDashesbeforePlus)

     for(let i = 0; i < n; i++) {
          if(i === 1) {
               console.log(" ".repeat(numDashesbeforePlus - 1));
          }       
     }

     console.log(midline);
};


drawStar(9);

module.exports = { drawStairs, drawStar };
