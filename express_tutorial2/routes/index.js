const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      return next(err);
    }
    return res.end(data);
  });
});

module.exports = router;
