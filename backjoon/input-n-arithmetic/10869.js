/** 
 
    * Number 10869

    ** Given two natural numbers A and B. At this time, write a program that outputs A+B, A-B, A*B, A/B (quotient), and A%B (remainder).
    ** Given two natural numbers A and B. (1 ≤ A, B ≤ 10,000)
    ** A+B on the first line, A-B on the second line, A*B on the third line, A/B on the fourth line, and A%B on the fifth line.

    ** Example **

        7 3 => 10 4 21 2 1

    *************

*/

const fs = require('fs');
const input = fs.readFileSync('./test.txt').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);