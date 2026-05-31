const express = require("express");
const router = express.Router();
const movies = require("../data/movies");

router.get("/", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  const { title } = req.body;

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "title is required" });
  }

  const newMovie = {
    id: movies.length > 0 ? movies[movies.length - 1].id + 1 : 1,
    title: title.trim(),
  };

  movies.push(newMovie);

  return res.status(201).json(newMovie);
});

module.exports = router;
