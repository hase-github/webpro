const https = require("https");
https.get("https://tuya-no.firebaseio.com/message.json", (res) => {
  let body = "";
  res.setEncoding("utf8");

  res.on("data", (chunk) => {
    body += chunk;
  });

  res.on("end", (res) => {
    console.log(body);
  });
});
