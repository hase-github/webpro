exports.getRows = (sql) => {
  let sqlite3 = require("sqlite3").verbose();
  let db = new sqlite3.Database("mydata.db");

  return new Promise((resolve, reject) => {
    db.get(sql, (err, rows) => {
      resolve(rows);
    });
  });
};
