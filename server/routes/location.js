const express = require("express");
const { TopologyType } = require("mongodb");
const { ObjectId } = require("mongodb");
const router = express.Router();
const data = require("../data");
const locationData = data.location;
const url = require("url");
const user_dist = "1.5"
router.get("/location/:lat/:lon", async (req, res) => {
  // Below 5 lines are required for front end to access this data
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );

  // get the user co-ordinates from request params
  console.log("Inside location router");
  console.log(req.originalUrl);
  console.log(req.params);
  const lat = req.params.lat;
  const lon = req.params.lon;
  console.log(lat, lon);
  const data = await locationData.locBasedRes(lat, lon, user_dist);
  if (data.length === 0) {
    res.status(404).json({ message: "No restaurants to display" });
  } else {
    res.json(data);
  }
});

// Search Functionality
router.get("/search/:searchTerm/:userLat/:userLon", async (req, res) => {
  // Below 5 lines are required for front end to access this data
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );

  console.log("search Term: ", req.params.searchTerm);
  console.log("User Lat, lon", req.params.userLat, req.params.userLon);
  const data = await locationData.searchRes(
    req.params.searchTerm,
    req.params.userLat,
    req.params.userLon,
    user_dist
  );
  console.log(data);
  if (data.length === 0) {
    // res.status(404).json({ message: "No restaurants to display" });
    res.json([]);
  } else {
    res.json(data);
  }
});

module.exports = router;
