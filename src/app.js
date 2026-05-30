const express = require("express");
const moviesRouter = require("./routes/movies.routes");
const votesRouter = require("./routes/votes.routes");
const resultRouter = require("./routes/result.routes");
const errorHandler = require("./middleware/error.middleware");
const notFound = require("./middleware/not-found.middleware");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/movies", moviesRouter);
app.use("/votes", votesRouter);
app.use("/result", resultRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
