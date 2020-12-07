const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("./join.html", (err, data) => {
    if (err) {
      res.status(404).end("Error");
    } else {
      res.end(data);
    }
  });
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  return res.status(201).send("회원가입 성공!");
});

module.exports = router;
