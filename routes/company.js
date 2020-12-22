const express = require("express");
const router = express.Router();

const Company = require("../models/Company");

router.post("/create", async (req, res) => {
  try {
    let data = new Company({
      name: req.body.name,
      address: req.body.address,
      visits: 0,
    });
    let saved = await data.save();
    res.json(saved);
  } catch (err) {
    res.json(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    let data = await Company.find();
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

router.get("/visit", async (req, res) => {
  try {
    let data = await Company.findOneAndUpdate(
      { _id: req.body.id },
      { $inc: { visits: 1 } }
    );
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

router.get("/getdata", async (req, res) => {
  try {
    let data = await Company.findOne({ name: req.body.name });
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
