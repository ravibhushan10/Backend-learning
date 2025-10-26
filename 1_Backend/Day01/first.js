// CJS: Common JS module(older method to send files)
//  I need second.js code in my first.js file 
const {sum,sub} = require("./second")

// IIFE:immediately invoked function expression
// when we use require() then it comes in this formate in private  the whole code of second file wrapped into a function
// (function (){
//     console.log("Hello ji I am second");

//     function sum(a,b){
//     console.log(a+b);
//     }

//    sum(4,3);
// })();



sum(3,4);
sub(7,8);
console.log("Hello I am first");


// import and export are new method


