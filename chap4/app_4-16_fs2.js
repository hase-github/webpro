const fs = require("fs");

fs.readFile("../chap3/index_3-2_calc.html", (err, data) => {
  if (err == null) {
    console.log(data.toString());
  } else {
    console.table(err);
  }
});
