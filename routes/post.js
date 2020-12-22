const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.get("/all", async (req, res) => {
  try {
    const data = await Post.find();
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

router.post("/addpost", async (req, res) => {
  try {
    let text = req.body.text;
    let upvote = 0;
    let user = req.body.user;
    const data = new Post({
      text: text,
      upvote: upvote,
      username: user,
    });
    const saved = await data.save();
    res.json(saved);
  } catch (err) {
    res.json(err);
  }
});

router.post("/upvote", async (req, res) => {
  try {
    const data = await Post.findOneAndUpdate(
      { _id: req.body.id },
      { $inc: { upvote: 1 } }
    );
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

router.get("/getpostbyusername", async (req, res) => {
  try {
    const data = await Post.find({ username: req.body.user });
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
