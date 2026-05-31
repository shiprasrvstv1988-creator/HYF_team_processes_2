const movies = require("../data/movies");
const votes = require("../data/votes");

function calculateResult() {
  // 1. Start with all movies set to 0 votes
  const voteCount = {};

  for (const movie of movies) {
    voteCount[movie.id] = 0;
  } // 2. Count votes

  for (const vote of votes) {
    if (voteCount.hasOwnProperty(vote.movieId)) {
      voteCount[vote.movieId]++;
    }
  } // 3. Build result array

  const result = movies.map((movie) => {
    return {
      movieId: movie.id,
      title: movie.title,
      votes: voteCount[movie.id] || 0,
    };
  }); // 4. Sort by votes (highest first)

  result.sort((a, b) => b.votes - a.votes);

  return result;
}

module.exports = { calculateResult };
