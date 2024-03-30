var express = require('express');
var router = express.Router();
const locationCtrl = require('../controllers/locations');

//All routes automatically start with /locations
//GET /locations/new
router.get('/new', locationCtrl.new);


module.exports = router;
