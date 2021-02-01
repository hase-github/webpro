var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  if (req.session.data == undefined) {
    req.session.data = [];
  }
  let opt = {
    title: "Hello!",
    data: req.session.data,
  };
  res.render("hello", opt);
});

router.post("/", (req, res, next) => {
  req.session.data.unshift(req.body.msg);
  let opt = {
    title: "Hello!",
    data: req.session.data,
  };
  res.render("hello", opt);
});

module.exports = router;
