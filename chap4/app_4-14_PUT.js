const https = require("https");
const r1 = require("./getline_4-9.js");

async function main() {
  let msg = await r1.getline("type your message: ");
  msg = `{"message":"${msg}"}`;

  const options = {
    hostname: "tuya-no.firebaseio.com",
    path: "/dummy.json",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(msg),
    },
  };

  let req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
  });

  req.on("error", (e) => {
    console.log(e);
  });

  //サーバーにデータを送信する部分
  req.write(msg, (err) => {
    if (err != undefined) {
      //errがundefinedでない、つまりエラーが有る。
      console.log(err);
    }
  });

  req.end(() => {
    console.log("finished!");
  });
}

main();
