/** 
 
    * Number 1008

    ** Write a program that takes two integers A and B as input and outputs A/B.
    ** A and B are given in the first line. (0 < A, B < 10)
    ** Print A/B on the first line. If the absolute error or relative error between the actual correct answer and the output value is less than 10-9, the answer is correct.

    ** Example **

        1 3 => 0.33333333333333333333333333333333

    *************

*/

const fs = require('fs');
const input = fs.readFileSync('./test.txt').toString().split(' ');
const a = parseFloat(input[0]);
const b = parseFloat(input[1]);

console.log(a / b);