var express = require("express");
var router = express.Router();

let dbunit = require("../db/all.js");

/* GET home page. */
router.get("/", async (req, res, next) => {
  const sql = "SELECT * FROM persondata where id";
  let rows = await dbunit.getALLRows(sql);
  let opt = {
    title: "Hello!",
    data: rows,
  };
  res.render("db", opt);
});

module.exports = router;
