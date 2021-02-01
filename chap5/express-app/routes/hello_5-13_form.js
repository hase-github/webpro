var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  let opt = {
    title: "Hello!",
    message: "input form:",
  };
  res.render("hello", opt);
});

router.post("/", (req, res, next) => {
  let name = req.body.f1;
  let pass = req.body.f2;
  let msg = `name: ${name}<br>password: ${pass}`;
  let opt = {
    title: "Hello!",
    message: msg,
  };
  res.render("hello", opt);
});

module.exports = router;
