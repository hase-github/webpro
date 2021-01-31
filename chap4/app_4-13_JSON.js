const https = require("https");
https.get("https://tuya-no.firebaseio.com/mydata.json", (res) => {
  let body = "";
  res.setEncoding("utf8");

  res.on("data", (chunk) => {
    body += chunk;
  });

  res.on("end", (res) => {
    json = JSON.parse(body);
    console.table(json);
  });
});
