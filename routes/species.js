const express = require('express');
const router = express.Router();
const speciesCtrl = require('../controllers/species');



//All routes automatically start with /species
//GET /species/new
router.get('/new', speciesCtrl.new)





module.exports = router;