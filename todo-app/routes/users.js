var express = require("express");
var router = express.Router();

let dbget = require("../db/get.js");
let dball = require("../db/all.js");
let dbdo = require("../db/exec.js");

/* Login page */
router.get("/login", (req, res, next) => {
  //console.log("test");
  res.render("login", {
    title: "Login",
    login: req.session.login,
  });
});

router.post("/login", async (req, res, next) => {
  let account = req.body.account;
  let pass = req.body.password;
  console.log("account: " + account);
  console.log("pass: " + pass);

  let sql = `select * from users
  where account = '${account}' and password = '${pass}'`;
  //SQL中の=の右側にクォーテーションを忘れていた
  //ただし、別のエラーが発生
  console.log("SQL: " + sql);
  let record = await dbget.getRow(sql);
  record != undefined ? console.log("record: Yes") : console.log("record: No");
  if (record != undefined) {
    req.session.login = record;
    res.redirect("/");
  } else {
    res.redirect("/users/login");
  }
});

/** Logout */
router.get("/logout", (req, res, next) => {
  req.session.login = undefined;
  res.redirect("/users/login");
});

/** Admin (Add New User) */
router.get("/admin", async (req, res, next) => {
  if (req.session.login == undefined) {
    res.redirect("/users/login");
    return;
  }
  if (req.session.login.role != "admin") {
    res.redirect("/users/login");
    return;
  }
  res.render("admin", {
    title: "Admin",
    login: req.session.login,
  });
});

router.post("/admin", async (req, res, next) => {
  let account = req.body.account;
  let pass = req.body.password;
  let name = req.body.name;
  let sql = `insert into users (account, password, name, role)
  values('${account}','${pass}','${name}','user')`;
  console.log("SQL: " + sql);
  await dbdo.exec(sql);
  res.render("admin", {
    title: "Admin",
    login: req.session.login,
  });
});

/** Show User List */
router.get("/admin2", async (req, res, next) => {
  if (req.session.login == undefined) {
    res.redirect("/users/login");
    return;
  }
  if (req.session.login.role != "admin") {
    res.redirect("/users/login");
    return;
  }
  let sql = "select * from users";
  console.log("SQL: " + sql);
  let records = await dball.getALLRows(sql);
  console.log("レコード数: " + Object.keys(records).length);
  res.render("admin2", {
    title: "Admin2",
    login: req.session.login,
    data: records,
  });
});

/** Delete User */
router.get("/del_usr", async (req, res, next) => {
  if (req.session.login == undefined) {
    res.redirect("/users/login");
  }
  if (req.session.login.role != "admin") {
    res.redirect("/users/login");
  }
  let id = req.query.id;
  let sql = `delete from users where id = ${id}`;
  await dbdo.exec(sql);
  res.redirect("/users/admin2");
});

module.exports = router;
