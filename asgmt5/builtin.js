//operating system

const os = require ('os')

console.log(`${os.hostname}`);
console.log(`${os.platform}`);

//file system 
const fs = require(`fs`)
console.log(fs.readFileSync("data.txt","utf8")) 