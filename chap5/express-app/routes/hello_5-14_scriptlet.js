var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  let opt = {
    title: "Hello!",
    form: null,
  };
  res.render("hello", opt);
});

router.post("/", (req, res, next) => {
  let opt = {
    title: "Hello!",
    form: req.body,
  };
  res.render("hello", opt);
});

module.exports = router;
