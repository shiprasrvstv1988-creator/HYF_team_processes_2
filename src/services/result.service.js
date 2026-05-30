const movies = require("../data/movies");
const votes = require("../data/votes");

function calculateResult() {
  // TODO: implement vote tallying
  //
  // Expected logic:
  // 1. Count how many votes each movie has received
  // 2. Return an array of movies sorted by vote count, highest first
  // 3. Each item in the array should have: { movieId, title, votes }
  //
  // Hint: start with a map of movieId -> vote count (all zeros),
  // then loop through votes and increment the count for each movieId.

  return [];
}

module.exports = { calculateResult };
