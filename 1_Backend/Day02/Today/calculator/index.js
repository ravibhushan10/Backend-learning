const sum = require("./sum")
const sub = require("./sub")
const mul = require("./mul")


module.exports = {sum,sub,mul};

// make a seprate module for your all files so anyone can use all functionallity by using only one import 

// suppose you have the calculator folder and inside you have the 100 functionallity file.
// When you want to use then you don't need to write 100 times "require"  that's why we making a seprate file that importin the all 100 files then we use just this file in your code then im use all 100 files in one require statement