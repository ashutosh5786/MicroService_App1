const express = require("express");
const app = express();
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const commentsByPostId = {};

//
app.get("/post/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/post/:id/comments", (req, res) => {
  const commentsId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentsId, content });
  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log("http://localhost:4001");
});
