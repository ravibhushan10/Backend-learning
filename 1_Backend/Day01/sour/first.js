// import sum from "./second.js";

// By default node.js support require(){CJS(common js module)} ...
// it don't support the import and export its new added by ecma script
const sum  = require("./second")

sum(3,8);

console.log("Hello Ji");


// To run export and import in node.js use ->  first.mjs, second.mjs
// But in react bundler(vite,parcel,webpack) manage all things and write .mjs


// if you want to use export and imort without .mjs -> make a package.json file and wirte {
                                                                                        //  type:"module";
                                                                                        // }