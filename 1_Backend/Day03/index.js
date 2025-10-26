const fs = require('fs')
// fs=filesystem

let a = 10;
let b = "Hello ji"

console.log(b);

function sum(a,b){
    return a+b;
}

// sync operation: not a good habbit 
const data = fs.readFileSync("./data.json", "utf-8");
console.log(data);


// Async operation
// fs.readFile("./data.json", "utf-8" ,(err,res)=>{
//     console.log(res);
// })



setTimeout(()=>{
   console.log("Hello Time Out");
},3000)

console.log(a);
console.log(sum(3,8));