const Location = require('../models/location');
const Species = require('../models/species');
const getCoords = require('../Util/location');


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
        const locations = await Location.find({}).sort('name')
        res.render('locations/index', {locations})
    } catch(err) {
        console.log(err)
    }
}

const show = async (req, res) => {
    try {
        const location = await Location.findById(req.params.id).populate('wildlife');
        const species = await Species.find({ _id: { $nin: location.wildlife} }).sort('name');
        const address = await location.address
        const coords = await getCoords.getLatLon(address)
        res.render('locations/show', {location, species, coords})
    } catch(err) {
        console.log(err)
    }
}


module.exports = {
    new: newLocation,
    create,
    index,
    show,
}