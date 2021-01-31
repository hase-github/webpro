const g1 = require("./getline.js"); //自作したモジュールの読み込み
//import g1 from "./getline.js";

//メイン処理
async function main() {
  console.log("--begin--");
  while (true) {
    let result = await g1.getline("type any words: ");
    if (result == "") {
      break;
    }
    console.log(`you typed: ${result}`);
  }
  console.log("---end---");
}

main();
