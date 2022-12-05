const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const router = express.Router();
const annivController = require("../controllers/anniv");

const annivs = [];

router.get('/', annivController.findAll);


module.exports = router;