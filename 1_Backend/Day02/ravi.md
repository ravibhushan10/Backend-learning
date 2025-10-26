const {sum,sub} = require("./second")
// require("./third")
// require("/fourth")
// require("./fifth")

<!-- Synchronous: In CJS all require statement exucute one by one once ./second file fully loaded inot your current file then ./third file load and continue -->



<!-- ***************ESM(ecma sript module)******************* -->
import
import
import
But in import,export , this is Asynchronous : means if first import taking too much time then start importing second and soo on don't wait to be fully loaded preivous.