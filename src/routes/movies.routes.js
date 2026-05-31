const express = require("express");
const router = express.Router();
const movies = require("../data/movies");

router.get("/", (req, res) => {
  // TODO: return all movies
  console.log("test")
});

router.post("/", (req, res) => {
  // console.log("test")
});

module.exports = router;