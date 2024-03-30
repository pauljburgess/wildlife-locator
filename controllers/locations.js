const Location = require('../models/location');

const newLocation = (req, res) => {
    res.render('locations/new')
}

const create = async(req, res) => {
    try {
        await Location.create(req.body)
        res.redirect('/')
   } catch(err) {
        console.log(err)
        res.render('locations/new', {errorMsg: err.message})
   }
}


module.exports = {
    new: newLocation,
    create,
}