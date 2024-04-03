const express = require('express');
const router = express.Router();
const speciesCtrl = require('../controllers/species');


//GET /species/new
router.get('/species/new', speciesCtrl.new)
//POST /species
router.post('/species', speciesCtrl.create);
//POST /locations/:id/species
router.post('/locations/:id/species', speciesCtrl.addSpecies)
//DELETE /species/:id
router.put('/locations/:locId/species/:specId', speciesCtrl.update)


module.exports = router;