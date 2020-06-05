let uniqid = require("uniqid");
let fs =require("fs");
let path = require("path");

module.exports.untreefyFn = function () {
    let src = arguments[0];
    let dest = arguments[1];
    copyfiles(src,dest);
    //console.log(root);
    
}



function checkWhetherFileOrDir(src){
    return fs.lstatSync(src).isFile();
}
function getContent(src){
return fs.readdirSync(src);

}

let formats = {'Documents':['.docx','.xlsx', '.pptx' , '.txt' ,'.pdf'],'Media':['.mkv','.PNG','.jpg','.mp3'], 'Archives':['.zip']}
//let root_dir ="E:\\OBS Studio\\Web_Dev\\Lecture_dir_org\\root_dir";

function copyfiles(src, dest) {
    // checkwhether file or directory
    let destPath ="";
    if (checkWhetherFileOrDir(src) == true) {
        //console.log(src + " *");
        
        
        let extension = path.extname(src);
        let base_file = path.basename(src);
        let flag = 0;
            for (let key in formats) 
            {   for(let k=0;k<formats[key].length;k++)
                {    
                    if(extension == formats[key][k])
                    {   destPath = path.join(dest,key,base_file+extension);
                        fs.copyFileSync(src,destPath);
                        //console.log(`${cElem.oldName} copied to dest`);
                        flag = 1;
                        break;
                    }
                }
            }
            if(!flag)
            {       destPath = path.join(dest,'Others',base_file+extension);
                    fs.copyFileSync(src,destPath);
                    //console.log(`${cElem.oldName} copied to dest`);
            }// copy with newname
                
                // let oldName = path.basename(src);
                // let newName = uniqid();
                // obj.newName = newName;
                // obj.oldName = oldName;
                // obj.isFile = true
                // let destPath = path.join(dest, newName);
                // fs.copyFileSync(src, destPath);
                // console.log(`File ${oldName} from src copied to ${destPath}`);
    } else {
       
        
        let childNames = getContent(src);
        //console.log(childNames);
        for (let i = 0; i < childNames.length; i++) 
        {
           let childPath = path.join(src, childNames[i]);
        
         copyfiles(childPath, dest);
        
        
       }  
         }
}

let src = process.argv[2];
 let dest = process.argv[3];
 //let root = {};
 //let src = "E:\\OBS Studio\\Web_Dev\\test_learn"
 //let dest = "E:\\OBS Studio\\Web_Dev\\Lecture_dir_org\\root_dir"
//copyfiles(src, dest);
//let rt = "E:\\OBS Studio\\Web_Dev\\test_learn\\doc_test.docx"
//fs.copyFileSync(src,destPath);
//console.log(root);
