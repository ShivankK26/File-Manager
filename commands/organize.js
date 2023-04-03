const fs = require('fs');
const path = require('path');



let types = 
{
  media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
  image: ["jpg", "png"],
};



function organize(src) {
    if (src == undefined) {
      console.log("Enter valid path");
    }
    else {
      if (fs.existsSync(src)) {
        let newPath = path.join(src, "Organised_files");//The path.join() method joins the specified path segments into one path. You can specify as many path segments as you like. Inside brackets we write series of path segments to join into one path.
        if (fs.existsSync(newPath) == false) {
          fs.mkdirSync(newPath);
        }
        else {
          console.log("Already existed");
          }
          
        organizeHelper(src, newPath);
      }
      else {
        console.log("Enter valid path");
      }
    }
}
  


function organizeHelper(src, dest)
{
    let childName = fs.readdirSync(src); //this command reads all the files in a directory
    
    for(let i = 0; i < childName.length; i++)
    {
        let childAddress = path.join(src, childName[i]);
        if (fs.lstatSync(childAddress).isFile()) //s.lstatSync() method is used to synchronously return information about the symbolic link that is being used to refer to a file or directory.
        {                                        //.isFile() method is an inbuilt application programming interface of the fs.Stats class which is used to check whether fs.Stats object describes a file or not.
            let category = getCategory(childName[i]);

            sendFiles(childAddress, dest, category);
        }
    }
}



function getCategory(name)
{
    let extension = path.extname(name);
    extension = extension.slice(1);

for(let type in types)
{
    let arr = types[type];
    for(let i = 0; i < arr.length; i++)
    {
        if (extension == arr[i])
        {
            return type;
        }
    }
}
return "others";    
}



function sendFiles(src, dest, category)
{
    let fileDirPath = path.join(dest, category);
    if (fs.existsSync(fileDirPath) == false)
    {
        fs.mkdirSync(fileDirPath);
    }
    let basename = path.basename(src);
    let newFilePath = path.join(fileDirPath, basename);
    fs.copyFileSync(src, newFilePath);
    fs.unlinkSync(src);
}



module.exports = 
{
    organizeKey: organize,
};