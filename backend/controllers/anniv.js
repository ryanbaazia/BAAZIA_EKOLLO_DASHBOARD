const mongoose = require('mongoose');
const axios = require('axios');

const Annivs = require('../models/anniv');

exports.findAll = (req, res) => {
    Annivs.find({}).then((annivs)=>{
        res.status(200).json({ annivs });
    })
}