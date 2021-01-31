const fs = require("fs");

let fname = "./app_4-1.js";

fs.stat(fname, (err, st) => {
  console.log(`NAME:${fname}`);
  console.log(`SIZE:${st.size}`);
  console.log(`CREATE:${st.birthtime}`);
  console.log(`MODIFY:${st.mtime}`);
});
