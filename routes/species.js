const express = require('express');
const router = express.Router();
const speciesCtrl = require('../controllers/species');



//All routes automatically start with /species
//GET /species/new
router.get('/species/new', speciesCtrl.new)
//POST /species
router.post('/species', speciesCtrl.create);
//POST /locations/:id/species
router.post('/locations/:id/species', speciesCtrl.addSpecies)



module.exports = router;