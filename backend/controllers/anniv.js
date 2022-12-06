const mongoose = require('mongoose');
const axios = require('axios');

const Annivs = require('../models/anniv');

exports.findAll = (req, res) => {
    Annivs.find({}).then((annivs)=>{
        res.status(200).json({ annivs });
    })
}

exports.findOne = (req, res) => {
    const { date } = req.params;
    let annivs = [];
Annivs.findOne({ "date" : date })

    .then(test => {

        if(test) {
            annivs.push(test);
            res.status(200).json({

            annivs
            });
        } else {
            res.status(404).json({
            message: `sportif ${date} not found!`
            });
        }
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: 'Sportif not found with id' + req.paramas.date
            });
        }

        return res.status(500).send({
            message: 'Error retrieving sportif with id' + req.paramas.date
        });
    })

}