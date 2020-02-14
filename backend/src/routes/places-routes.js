const express = require("express");
const router = express.Router();

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
    return res
      .status(404)
      .json({ message: "could not find a place for the provided id." });
  }

  res.json({ place });
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find(p => {
    return p.creator === userId;
  });
  res.json({ place });
});

module.exports = router;
