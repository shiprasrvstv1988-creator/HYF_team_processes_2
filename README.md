# Movie Night Voting API

## What is this?

This is a workshop starter project for an **Agile/Scrum backend session**.

A group of friends wants to decide what movie to watch tonight. Anyone can add a movie suggestion and cast a vote. This API will track the suggestions and tell you which movie won.

The project is intentionally simple. Your goal is not to build production software — your goal is to practice working as a team: planning, splitting work, reviewing each other's code, and shipping features together.

---

## Requirements

- [Node.js](https://nodejs.org/) v18 or higher

---

## Installation

```bash
npm install
```

---

## Running locally

**Development mode** (auto-restarts on file changes):

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

The server runs at `http://localhost:3000`.

---

## Testing the server

```bash
curl http://localhost:3000/health
```

Expected response:

```json
{ "status": "ok" }
```

---

## Project structure

```
src/
  server.js               → starts the HTTP server
  app.js                  → Express app setup, routes, middleware

  routes/
    movies.routes.js        → GET /movies, POST /movies
    votes.routes.js         → GET /votes, POST /votes
    result.routes.js        → GET /result

  services/
    result.service.js       → vote tallying logic

  middleware/
    error.middleware.js     → global error handler
    not-found.middleware.js → 404 handler

  data/
    movies.js               → in-memory movies array
    votes.js                → in-memory votes array

examples/
  movies.http               → example HTTP requests for movies
  votes.http                → example HTTP requests for votes and result
```

---

## Workshop rules

These rules simulate a real team environment. Follow them during the session.

- **Create a branch for each task** — never work directly on `main`
- **Keep pull requests small** — one feature or fix per PR
- **Request at least one review** — your pair or another team member
- **Do not self-merge** — wait for approval before merging
- **Move tasks on the board** when you start, finish, or block a task
- **Communicate blockers early** — do not sit stuck in silence

---

## What you will implement

The starter code runs, but most endpoints are not implemented. Your team will implement:

| Feature | File | Description |
|---|---|---|
| `GET /movies` | `movies.routes.js` | Return all movies |
| `POST /movies` | `movies.routes.js` | Add a new movie suggestion |
| `GET /votes` | `votes.routes.js` | Return all votes |
| `POST /votes` | `votes.routes.js` | Cast a vote for a movie |
| `GET /result` | `result.routes.js` | Return movies ranked by vote count |
| Tallying logic | `result.service.js` | Count votes and sort movies |
| Input validation | routes files | Return 400 for invalid input |
| Better error messages | middleware + routes | Descriptive error responses |

Look for `// TODO` comments in the code — that is where you need to add your implementation.

---

## Data models

**Movie**

```json
{
  "id": 1,
  "title": "Inception"
}
```

**Vote**

```json
{
  "id": 1,
  "movieId": 1,
  "voterName": "Alice"
}
```

**Result item**

```json
{
  "movieId": 1,
  "title": "Inception",
  "votes": 3
}
```

The result is an array sorted by vote count, highest first. The movie at index 0 is the winner.
