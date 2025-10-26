console.log("Hello ji I am second");

function sum(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}


console.log(module.exports); //it is and empty object{}
// when key and value are same then don't need to write the key

// module.exports={sum:sum,sub:sub};
// module.exports = {sum,sub};  as an object send everything




module.exports.sum = sum;
module.exports.sub = sub;
// {sum: sum,
//  sub:sub}
