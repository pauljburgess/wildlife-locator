const Species = require('../models/species');
const Location = require('../models/location');

const newSpecies = async (req, res) => {
    res.render('species/new')
}

const create = async(req, res) => {
    try {
        await Species.create(req.body)
        res.redirect('locations')
   } catch(err) {
        console.log(err)
        res.render('species/new', {errorMsg: err.message})
   }
}

//This function is very similar to the "addToCast" function from Mongoose Movies
const addSpecies = async (req, res) => {
    const location = await Location.findById(req.params.id)
    location.wildlife.push(req.body.speciesId);
    await location.save();
    res.redirect(`/locations/${location._id}`)
}

const severSpecies = async (req, res) => {
    const location = await Location.findById(req.params.locId)
    const idx = await location.wildlife.indexOf(req.params.specId)
    location.wildlife.splice(idx, 1)
    await location.save();
    res.redirect(`/locations/${req.params.locId}`)
}


module.exports = {
    new: newSpecies,
    create,
    addSpecies,
    update: severSpecies
}