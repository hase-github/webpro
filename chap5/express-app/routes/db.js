var express = require("express");
var router = express.Router();

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("mydata.db");

/* GET home page. */
router.get("/", async (req, res, next) => {
  let id = 1;
  if (req.query.id != undefined) {
    id = req.query.id;
  }
  let sql = `SELECT * FROM persondata where id = ${id}`;
  db.get(sql, (err, row) => {
    let opt = {
      title: "Hello!",
      data: row,
    };
    res.render("db", opt);
  });
});

module.exports = router;
