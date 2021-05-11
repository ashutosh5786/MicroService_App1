const express = require("express");
const app = express();
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const posts = {};

app.get("/post", (req, res) => {
  res.send(posts);
});

// Post Routes
app.post("/post", (req, res) => {
  const id = randomBytes(4).toString("hex"); // Generating the Hex
  const { title } = req.body;
  posts[id] = { id, title };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
