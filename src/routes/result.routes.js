const express = require("express");
const router = express.Router();
const { calculateResult } = require("../services/result.service");

router.get("/", (req, res) => {
  const result = calculateResult();
  res.json(result);
});

module.exports = router;
