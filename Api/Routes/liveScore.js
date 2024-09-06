const express = require('express');
const router = express.Router();
const liveScore = require('../Model/liveScore');

router.get('/', async (req, res) =>{
    try{
        const LiveScore= await liveScore.find();
        res.status(200).json(LiveScore);
    } catch(err){
        res.status(400).json({
            mesg: err.mesg
        })
    }
})

module.exports = router