const {sum, sub, mul} = require("./calculator");
// when you exporting something from the folder(calculator/index.js) 
// The rule of node.js by when you not give the file name only writing the folder name("./calculator")then it by default import the "index.js" file.

sum(2,4);
sub(3,4);
mul(6,8);

console.log("Hello ji");