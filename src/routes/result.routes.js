const express = require("express");
const router = express.Router();
const { calculateResult } = require("../services/result.service");

router.get("/", (req, res) => {
  // TODO: call calculateResult() and return the result
});

module.exports = router;
