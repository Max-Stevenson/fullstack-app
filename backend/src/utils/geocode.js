require("dotenv").config();
const request = require("request");
const MAPBOX_API = process.env.MAPBOX_API;
const axios = require("axios");

async function geocode(address) {
  const geocoderUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=" +
    MAPBOX_API;
  const res = await axios.get(geocoderUrl).then(res => res.data);
  const point = res.features[0].geometry;

  return point;
}

module.exports = geocode;
