// I followed this tutorial to help create this feature: https://www.youtube.com/watch?v=vmOAC0cyFso
const axios = require('axios')
const API_KEY = process.env.GOOGLE_MAPS_API_KEY

async function getLatLon(address) {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`)

    const data = response.data;
    
    if (!data || data.status === 'ZERO_RESULTS') {
        const error = "No address found"
        throw error
    }

    const coordinates = data.results[0].geometry.location

    return coordinates
}

module.exports = {
    getLatLon
}