const express = require("express");
const router = express.Router();
const posts = require("../database/posts");
const copa = require("../database/users");

router.get("/post", (req, res, next) => {
  const filter = req.query.number || 100;
  const postResponse = posts.filter((post, index) => index < filter);
  res.status(200).json({
    message: "OK",
    posts: postResponse,
  });
});
router.get("/copa", (req, res, next) => {
  // if (req.query.id <= 0 || req.query.id > 11)
  //   return res.json({
  //     message: "Something goes wrong",
  //   });
  res.json({
    message: "OK",
    user: copa,
  });
});

module.exports = router;
