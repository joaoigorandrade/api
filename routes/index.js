const express = require("express");
const router = express.Router();
const paises = require("../database/posts");
const copa = require("../database/users");

router.get("/paises", (req, res, next) => {
  res.status(200).json({
    message: "OK",
    posts: paises,
  });
});
router.get("/copa", (req, res, next) => {
  res.json({
    message: "OK",
    user: copa,
  });
});

module.exports = router;
