let fs  = require("fs");
console.log("Before");

fs.readFile("f1.txt",function(err,content){
    console.log("content : "+content);
    console.log("actual after");
});
// console.log("content : "+content);
console.log("after");

