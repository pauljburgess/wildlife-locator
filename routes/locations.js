var express = require('express');
var router = express.Router();
const locationCtrl = require('../controllers/locations');

//All routes automatically start with /locations
//GET /locations
router.get('/', locationCtrl.index);
//GET /locations/new
router.get('/new', locationCtrl.new);
//POST /locations
router.post('/', locationCtrl.create);
//GET /locations/:id
router.get('/:id', locationCtrl.show);

module.exports = router;
