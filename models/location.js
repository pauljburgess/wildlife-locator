const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    name: String,
    address: String,
    latitude: Number,
    longitude: Number,
    website: String,
    wildlife: [{
        type: Schema.Types.ObjectId,
        ref: 'Species'
    }]
})



module.exports = mongoose.model('Location', locationSchema);