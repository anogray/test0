let request = require("request");
let fs = require("fs");
let url ="https://www.espncricinfo.com/scores/series/19322/india-in-new-zealand-2019-20?view=results";
request(url,cb);
function cb(err,response,html){
    console.log("Recieved Response");
    if(err == null && response.statusCode==200){
        fs.writeFileSync("index.html",html);
        console.log("file saved");
    }else if(response.statusCode == 404){
        console.log("page not found");
    }else{
        console.log(err);
        console.log(response.statusCode);
    }
}