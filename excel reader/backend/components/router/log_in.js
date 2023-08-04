const express = require("express");
const login = require("../mongoose schema/login");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("login");
});
router.post("/login", (req, res) => {
  const Data = req.body;
  login.log.find().then((data) => {
    let flag;
    for (let i = 0; i < data.length; i++) {
      if (data[i].password === Data.password && data[i].email === Data.email) {
        res.redirect("/data");
        flag = false;
        break;
      } else {
        flag = true;
      }
    }

    if (flag) {
      res.redirect("/");
    }
  });
});
module.exports = router;
