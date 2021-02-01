var express = require("express");
var router = express.Router();

let data = [];

router.get("/", function (req, res, next) {
  let opt = {
    title: "Hello!",
    data: data,
  };
  res.render("hello", opt);
});

router.post("/", (req, res, next) => {
  data.unshift(req.body.msg);
  let opt = {
    title: "Hello!",
    data: data,
  };
  res.render("hello", opt);
});

module.exports = router;
