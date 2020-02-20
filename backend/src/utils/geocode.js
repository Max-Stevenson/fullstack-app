require("dotenv").config();
const HttpError = require("../models/http-error");
const MAPBOX_API = process.env.MAPBOX_API;
const axios = require("axios");

async function geocode(address) {
  const geocoderUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=" +
    MAPBOX_API;
  const res = await axios.get(geocoderUrl).then(res => res.data);
  if (res.features.length === 0) {
    return next(new HttpError("Could not find coordinates for address", 400));
  }
  const point = res.features[0].geometry;

  return point;
}

geocode("thlkjslfj").then(res => {
  console.log(res);
});

module.exports = geocode;
