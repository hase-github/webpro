const readline = require("readline");

let counter = 0;

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.on("line", (line) => {
  counter++;
  console.log(`(${counter}: ${line.length} chars`);
});

/**
//配列の各要素をjoinメソッドでつないで一つの長文とする。
let content = [
  "--begin--",
  "これは、長文のコンテンツです。",
  "長い文章を出力させる例です。",
  "どのように表示されるかな？",
  "--end--",
].join("\n");
 */

//テンプレート文字列なら改行もそのまま出力される。
let content = `--begin--
これは、長文のコンテンツです。
長い文章を出力させる例です。
どのように表示されるかな？
--end--`;

read.write(content);
read.close();
