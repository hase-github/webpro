const fs = require("fs");

let dir = "./";
let bk = dir + "backup/";

let files = fs.readdirSync(dir);
fs.mkdirSync(bk);
console.log(`${bk} created.`);
for (let i in files) {
  fs.copyFileSync(dir + files[i], bk + files[i]);
  console.log(`${files[i]} backuped`);
}

console.log("backup completed!");
