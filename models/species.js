const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const speciesSchema = new Schema({
    name: String,
    category: {type: String, enum: ['bird', 'mammal', 'reptile', 'plant']},
});



module.exports = mongoose.model('Species', speciesSchema);