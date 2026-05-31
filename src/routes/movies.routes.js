import z from "zod";
const express = require("express");
const router = express.Router();
const movies = require("../data/movies");

// MovieValidation
const movieSchema = z.object({
  id: z.number(),
  name: z.string().min(3),
});
router.get("/", (req, res) => {
  // TODO: return all movies
});

router.post("/", (req, res) => {
  // TODO: implement movie creation
  //
  // Expected request body: { title: "Inception" }
  // Expected response: the created movie with a unique id
  //
  // Hints:
  // - validate that title is present in req.body
  // - generate a simple id (e.g. Date.now() or movies.length + 1)
  // - push the new movie into the movies array
  // - respond with status 201 and the created movie
});

module.exports = router;
