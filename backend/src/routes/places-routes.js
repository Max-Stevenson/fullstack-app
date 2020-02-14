const express = require("express");
const router = express.Router();
const HttpError = require('../models/http-error');

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "Very famous building in New York",
    imageUrl:
      "https://untappedcities.com/wp-content/uploads/2015/07/Flatiron-Building-Secrets-Roof-Basement-Elevator-Sonny-Atis-GFP-NYC_5.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: [-73.9856644, 40.7484405],
    creator: "u1"
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "Very famous building in New York",
    imageUrl:
      "https://untappedcities.com/wp-content/uploads/2015/07/Flatiron-Building-Secrets-Roof-Basement-Elevator-Sonny-Atis-GFP-NYC_5.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: [-73.9856644, 40.7484405],
    creator: "u2"
  }
];

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find(p => {
    return p.id === placeId;
  });

  if (!place) {
    return next(new HttpError("Could not find a place for the provided id.", 404));
  }

  res.json({ place });
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find(p => {
    return p.creator === userId;
  });

  if (!place) {
    return next(new HttpError("Could not find a place for the provided userid.", 404));
  }

  res.json({ place });
});

module.exports = router;
