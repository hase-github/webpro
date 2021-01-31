const { resolve } = require("path");
const readline = require("readline");

exports.getline = (msg) => {
  const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  read.on("SIGINT", () => {
    console.log(" \n*** finish ***");
    read.close();
  });

  return new Promise((resolve, reject) => {
    read.question(msg, (answer) => {
      resolve(answer);
      read.close();
    });
  });
};
