const { z } = require("zod");
const express = require("express");
const router = express.Router();
const movies = require("../data/movies");

// // MovieValidation
// const movieSchema = z.object({
//   id: z.number(),
//   name: z.string().min(3),
// });
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: movies,
  });
});

// POST /movies
router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Movie title is required and cannot be empty",
    });
  }

  const newMovie = {
    id: movies.length + 1,
    title: title.trim(),
  };

  movies.push(newMovie);

  res.status(201).json({
    success: true,
    data: newMovie,
  });
});


module.exports = router;
