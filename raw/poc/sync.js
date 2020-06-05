let fs = require("fs");
console.log("before");
let content = fs.readFileSync("f1.txt");
console.log("Content " +content);
console.log("After");