const express = require("express");
const router = express.Router();
var passwordHash = require("password-hash");

const User = require("../models/User");

router.get("/all", async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

router.post("/signUp", async (req, res) => {
  var hashed = passwordHash.generate(req.body.password);
  const data = new User({
    // username: req.body.username,
    password: hashed,
    _id: req.body.email.toLowerCase(),
    company: req.body.company,
    job: req.body.job,
  });
  try {
    const saved = await data.save();
    // req.session.user = saved;
    res.json({ response: saved, isAllowed: true });
  } catch (err) {
    res.json({ isAllowed: false, message: err });
  }
});

router.post("/login", async (req, res) => {
  try {
    const data = await User.find({ _id: req.body.email.toLowerCase() });
    // console.log(data);
    if (passwordHash.verify(req.body.password, data[0].password)) {
      // req.session.user = data;
      res.json({ isAllowed: true });
    } else {
      res.json({ isAllowed: false });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
