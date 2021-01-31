const fs = require("fs");
const rl = require("./getline_4-9.js");

const main = async () => {
  let msg = await rl.getline("please type: ");
  fs.writeFile("./data.txt", msg, (err) => {
    console.log(`save data.txt to write: ${msg}`);
  });
};
main();
