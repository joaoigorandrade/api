const express = require("express");
const router = express.Router();
const paises = require("../database/paises");
const copa = require("../database/copa");

router.get("/paises", (req, res, next) => {
  res.status(200).json(
    paises
  );
});
router.get("/copa", (req, res, next) => {
  res.json(copa,
  );
});

module.exports = router;
