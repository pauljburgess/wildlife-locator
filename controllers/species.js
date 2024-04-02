const Species = require('../models/species');

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

module.exports = {
    new: newSpecies,
    create,

}