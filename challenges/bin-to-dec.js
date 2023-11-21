/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3 // (1X2^1) + (1X2^0)
binToDec('100') -> 4 // (1X2^2) + (0X2^1) + (0X2^0)
binToDec('101') -> 5 // (1X2^2) + (0X2^1) + (1X2^0)
binToDec('0101') -> 5 // (0X2^3) + (1X2^2) + (0X2^1) + (1X2^0)

if n is the number of characters, then we will have char(i) * 2^n

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

function binToDec(binString) {
    //take the string, 
    let binNum = 0;

    for (let i = 0; i < binString.length; i++) {

        const inputNum = Number(binString[i]);

        binNum = (inputNum * Math.pow(2, binString.length - (i + 1))) + binNum
    }
    return binNum;

}

console.log(binToDec('0')); //0
console.log(binToDec('11')); //3
console.log(binToDec('100')); //4
console.log(binToDec('101')); //5
console.log(binToDec('0101')); //5

module.exports = { binToDec };