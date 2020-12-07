const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("./login.html", (err, data) => {
    if (err) {
      return next(err);
    }
    return res.end(data);
  });
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  return res.status(201).send("로그인 성공!");
});

module.exports = router;
