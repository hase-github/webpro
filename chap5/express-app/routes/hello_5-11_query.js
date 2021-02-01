var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  let name = req.query.name;
  let pass = req.query.pass;
  let msg = `name: ${name}<br>password: ${pass}`;

  let opt = {
    title: "Hello!",
    message: msg,
  };
  res.render("hello", opt);
});

module.exports = router;
