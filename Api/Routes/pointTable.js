const express = require("express");
const router = express.Router();
const pointTable = require("../Model/pointTable");

router.get("/", async (req, res) => {
  try {
    const pointT = await pointTable.find();
    res.status(200).json(pointT);
  } catch (err) {
    res.status(400).json({
      mesg: err.mesg,
    });
  }
});

module.exports = router;
