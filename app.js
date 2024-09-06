// mongodb+srv://aditya21:fRpbZLsKEAZn88w5@personalcluster.cown5.mongodb.net/?retryWrites=true&w=majority&appName=PersonalCluster

const express = require("express");
const app = express();

const body_parser = require('body-parser');
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const liveScore_Route = require("./Api/Routes/liveScore");
const matches_Route = require("./Api/Routes/matches");


const db =
  "mongodb+srv://aditya21:fRpbZLsKEAZn88w5@personalcluster.cown5.mongodb.net/?retryWrites=true&w=majority&appName=PersonalCluster";
mongoose
  .connect(db)
  .then(() => {
    console.log("Db connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(cors());
  app.use(body_parser.json({extended: true}));
  app.use(body_parser.urlencoded({ extended: true }));
  app.use('/livescore', liveScore_Route);
  app.use("/matches", matches_Route);


module.exports = app;
