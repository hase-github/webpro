const g1 = require("./getline_4-9.js");

const readline = require("readline");

async function main() {
  while (true) {
    let re = await g1.getline("input: ");
    console.log(`(${re.length} chars)`);
  }
}

main();
