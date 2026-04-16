// CommonJS require and module caching

const math = require("./math_utils");
const mathAgain = require("./math_utils");

console.log("2 + 3 =", math.add(2, 3));
console.log("2 * 3 =", math.mul(2, 3));
console.log("Module cached:", math === mathAgain);
