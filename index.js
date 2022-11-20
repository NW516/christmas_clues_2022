const express = require("express");

const app = express();

app.get("/sammi", (req, res) => {
  res.send("Sammi clue");
});

app.get("/alex", (req, res) => {
  res.send("Alex clue");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
