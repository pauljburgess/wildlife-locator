const Location = require('../models/location');

const newLocation = (req, res) => {
    res.render('locations/new')
}

const create = async(req, res) => {
    try {
        await Location.create(req.body)
        res.redirect('locations')
   } catch(err) {
        console.log(err)
        res.render('locations/new', {errorMsg: err.message})
   }
}

const index = async (req, res) => {
    try {
        const locations = await Location.find({})
        res.render('locations/index', {locations})
    } catch(err) {
        console.log(err)
    }
}


module.exports = {
    new: newLocation,
    create,
    index,
}