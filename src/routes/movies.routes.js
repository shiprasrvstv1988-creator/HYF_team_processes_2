const express = require("express");
const router = express.Router();
const movies = require("../data/movies");

// // MovieValidation
// const movieSchema = z.object({
//   id: z.number(),
//   name: z.string().min(3),
// });
router.get("/", (req, res) => {
  // TODO: return all movies
  console.log("test");
});

router.post("/", (req, res) => {
  // console.log("test")
});

module.exports = router;
