const express = require("express");
const router = express.Router();
const votes = require("../data/votes");

router.get("/", (req, res) => {
  // TODO: return all votes
});

router.post("/", (req, res) => {
  // TODO: implement vote creation
  //
  // Expected request body:
  // {
  //   movieId: 1,
  //   voterName: "Alice"
  // }
  // Expected response: the created vote with a unique id
  //
  // Hints:
  // - validate that movieId and voterName are present in req.body
  // - validate that movieId is a number
  // - generate a simple id (e.g. Date.now() or votes.length + 1)
  // - push the new vote into the votes array
  // - respond with status 201 and the created vote
});

module.exports = router;
