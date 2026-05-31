const express = require("express");
const router = express.Router();
const votes = require("../data/votes");

// const voteSchema = z.object({
//   id: z.number(),
//   movieId: z.number(),
//   voterName: z.string.min(3),
// });
router.get("/", (req, res) => {
  res.json(votes);
});

router.post("/", (req, res) => {
  try {
    const { movieId, voterName } = req.body;
    if (movieId === undefined || voterName === undefined) {
      return res.status(400).json({
        error: "movieId and voterName are required",
      });
    }
    // Validate movieId type
    if (typeof movieId !== "number") {
      return res.status(400).json({
        error: "movieId must be a number",
      });
    }
    // Create new vote
    const newVote = {
      id: Date.now(),
      movieId,
      voterName,
    };
    votes.push(newVote);
    res.status(201).json(newVote);
  } catch (error) {
    console.log(error);
  }

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
