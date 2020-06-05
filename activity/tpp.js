let input = process.argv.slice(2);
let untreefyFile = require("./commands/untreefy")
let treefyFile = require("./commands/treefy")


let cmd = input[0];

switch(cmd)
{
  case 'untreefy' :
    untreefyFile.untreefyFn(process.argv[3],process.argv[4]);
    break;

  case 'treefy':
    treefyFile.treefy(process.argv[3],process.argv[4]);
    break;

  deafault:console.log('No Command');


}