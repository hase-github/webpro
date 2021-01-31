const fs = require("fs");
const { findSourceMap } = require("module");
const rl = require("./getline_4-9.js");

let data = []; //データ配列
let fname = "./message.txt"; //データファイル

//メイン処理
const main = async () => {
  let opt = { encoding: "utf8" };
  let bf = fs.readFileSync(fname, opt);
  data = JSON.parse(bf.toString("utf8"));

  while (true) {
    let cmd = await rl.getline("cmd(a/d/f/q)");
    switch (cmd.toString()) {
      case "a":
        await add();
        break;
      case "d":
        await del();
        break;
      case "f":
        await find();
        break;
      case "q":
        quit();
        return;
      default:
        console.log("no-command.");
    }
  }
};

//メッセージの追加
const add = async () => {
  let bf = await rl.getline("type message: ");
  let msg = bf.toString("utf8");
  let item = {
    date: new Date(),
    message: msg,
  };
  data.unshift(item);
  console.log("message added.");
};

//メッセージの削除
const del = async () => {
  let bf = await rl.getline("type number: ");
  let num = bf.toString() * 1;
  console.log(`item: ${data[num].message}`);
  bf = await rl.getline("delete it? (y/n)");
  if (bf.toString() == "y") {
    data.splice(num, 1);
  }
};

//メッセージの検索
const find = async () => {
  let bf = await rl.getline("find: ");
  let find = bf.toString("utf8");
  for (let i in data) {
    if (data[i].message.indexOf(find) > -1) {
      console.log(`${i}: ${data[i].message}`);
    }
  }
};

//スクリプトの終了
const quit = () => {
  let opt = { encoding: "utf8" };
  fs.writeFileSync(fname, JSON.stringify(data), opt);
  console.log("quit now!");
};

main(); //メイン処理の実行
