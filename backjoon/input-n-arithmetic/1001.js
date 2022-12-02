/** 
 
    * Number 1001

    ** Write a program that takes two integers A and B as input and prints A - B.
    ** A and B are given in the first line. (0 < A, B < 10)
    ** Print A-B on the first line.

    ** Example **

        3 2 => 1

    *************

*/

const fs = require("fs");
const input = fs.readFileSync("./test.txt").toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a - b);
