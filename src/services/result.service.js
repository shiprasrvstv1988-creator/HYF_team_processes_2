const movies = require("../data/movies");
const votes = require("../data/votes");

function calculateResult() {
  const voteCounts = new Map(
    movies.map((movie) => [movie.id, 0])
  );

  for (const vote of votes) {
    if (voteCounts.has(vote.movieId)) {
      voteCounts.set(vote.movieId, voteCounts.get(vote.movieId) + 1);
    }
  }

  return movies
    .map((movie, index) => ({
      movieId: movie.id,
      title: movie.title,
      votes: voteCounts.get(movie.id) || 0,
      index,
    }))
    .sort((left, right) => {
      if (right.votes !== left.votes) {
        return right.votes - left.votes;
      }

      return left.index - right.index;
    })
    .map(({ index, ...result }) => result);
}

module.exports = { calculateResult };
