var express = require('express');
var router = express.Router();
const locationCtrl = require('../controllers/locations');
const ensure = require('../config/ensureLoggedIn');

//All routes automatically start with /locations
//GET /locations
router.get('/', locationCtrl.index);
//GET /locations/new
router.get('/new', ensure.loggedIn, locationCtrl.new);
//POST /locations
router.post('/', ensure.loggedIn, locationCtrl.create);
//GET /locations/:id
router.get('/:id', locationCtrl.show);

module.exports = router;
