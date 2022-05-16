const express = require("express");
const { TopologyType } = require("mongodb");
const { ObjectId } = require("mongodb");
const router = express.Router();
const data = require("../data");
const locationData = data.location;
const url = require("url");
const xss = require("xss");
const user_dist = "1.5";
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
    let lat = req.params.lat;
    let lon = req.params.lon;

    try {
        if (typeof lat !== "string")
            throw { status: 400, message: "Kindly provide string values only" };
        if (typeof lon !== "string")
            throw { status: 400, message: "Kindly provide string values only" };
        lat = lat.trim();
        lon = lon.trim();
        lat = xss(lat);
        lon = xss(lon);
        if (!lat) throw { status: 400, message: "Lat is blank" };
        if (!lon) throw { status: 400, message: "Lon is blank" };
        if (isNaN(lat)) throw { status: 400, message: "Lat is not a number" };
        if (isNaN(lon)) throw { status: 400, message: "Lon is not a number" };

        const data = await locationData.locBasedRes(lat, lon, user_dist);
        if (data && data.length === 0) {
            res.status(404).json({ message: "No restaurants to display" });
        } else {
            res.json(data);
        }
    } catch (e) {
        res.status(e.status || 400).json({
            error: e.message || "Something went wrong",
        });
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

    let lat = req.params.userLat;
    let lon = req.params.userLon;
    let searchTerm = req.params.searchTerm;

    try {
        if (typeof lat !== "string")
            throw { status: 400, message: "Kindly provide string values only" };
        if (typeof lon !== "string")
            throw { status: 400, message: "Kindly provide string values only" };
        if (typeof searchTerm !== "string")
            throw { status: 400, message: "Kindly provide string values only" };
        lat = lat.trim();
        lon = lon.trim();
        searchTerm = searchTerm.trim();
        lat = xss(lat);
        lon = xss(lon);
        searchTerm = xss(searchTerm);
        if (!lat) throw { status: 400, message: "Lat is blank" };
        if (!lon) throw { status: 400, message: "Lon is blank" };
        // if (!searchTerm) throw { status: 400, message: "Search Term is blank" };
        if (isNaN(lat)) throw { status: 400, message: "Lat is not a number" };
        if (isNaN(lon)) throw { status: 400, message: "Lon is not a number" };

        const data = await locationData.searchRes(
            req.params.searchTerm,
            req.params.userLat,
            req.params.userLon,
            user_dist
        );

        if (data && data.length === 0) {
            // res.status(404).json({ message: "No restaurants to display" });
            res.json([]);
        } else {
            res.json(data);
        }
    } catch (e) {
        res.status(e.status || 500).json({
            error: e.message || "Something went wrong",
        });
    }
});

module.exports = router;
