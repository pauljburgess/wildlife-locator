const Species = require('../models/species');

const newSpecies = async (req, res) => {
    res.render('species/new')
}



module.exports = {
    new: newSpecies,

}