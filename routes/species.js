const express = require('express');
const router = express.Router();
const speciesCtrl = require('../controllers/species');
const ensure = require('../config/ensureLoggedIn');

//GET /species/new
router.get('/species/new', ensure.loggedIn, speciesCtrl.new)
//POST /species
router.post('/species', ensure.loggedIn, speciesCtrl.create);
//POST /locations/:id/species
router.post('/locations/:id/species', ensure.loggedIn, speciesCtrl.addSpecies)
//DELETE /species/:id
router.put('/locations/:locId/species/:specId', ensure.loggedIn, speciesCtrl.update)


module.exports = router;