const express = require("express");
const router = express.Router();
const { calculateResult } = require("../services/result.service");

router.get("/", (req, res) => {
  res.status(200).json(calculateResult());
});

module.exports = router;
