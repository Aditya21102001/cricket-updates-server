const express = require("express");
const router = express.Router();
const matches = require("../Model/matches");

router.get("/", async (req, res) => {
  try {
    const match = await matches.find();
    res.status(200).json(match);
  } catch (err) {
    res.status(400).json({
      mesg: err.mesg,
    });
  }
});

module.exports = router;
