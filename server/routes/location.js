const express = require('express');
const { TopologyType } = require('mongodb');
const { ObjectId } = require('mongodb');
const router = express.Router();
const data = require('../data');
const locationData = data.location
const url = require('url')

router.get('/location', async (req, res) => {
    // Below 5 lines are required for front end to access this data
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 

    // get the user co-ordinates from request params
    console.log('Inside location router')
    const lat = new URL('http://localhost:3000/' + req.url).searchParams.get('lat')
    const lon = new URL('http://localhost:3000/' + req.url).searchParams.get('lon')
    console.log(lat,lon)
    const data = await locationData.locBasedRes(lat,lon)
    // const data = await locationData.locBasedRes("40.743875614629715", "-74.02674831289734","1.8")
    // const data = await locationData.locBasedRes()
    if (data.length === 0){
        res.status(404).json({message: 'No restaurants to display'})
    }
    else{
        res.json(data)
    }
    

});

module.exports = router

// // Replace following dummy data with actual DB data once DB is ready
// const dummydata = [
//     {
//       Id: 1,
//       Username: "dummy1",
//       Password: "12345678",
//       Restaurant_name: "64 Beach Street",
//       Restaurant_Image: "Some URL",
//       Location: {
//         //64 Beach Street
//         lat: "40.7444511",
//         lon: "-74.0570127",
//       },
//       distance: "NA",
//     },
//     {
//       Id: 2,
//       Username: "dummy2",
//       Password: "12345678",
//       Restaurant_name: "Low Fidelity",
//       Restaurant_Image: "Some URL",
//       Location: {
//         // Low Fidelity
//         lat: "40.7401353",
//         lon: "-74.0466352",
//       },
//       distance: "NA",
//     },
//   ];
  
//   // Calculate distance between two co-ordinates
//   function calcCrow(lat1, lon1, lat2, lon2) {
//     // converting input co-ordinates into Float
//     lat1 = parseFloat(lat1);
//     lon1 = parseFloat(lon1);
//     lat2 = parseFloat(lat2);
//     lon2 = parseFloat(lon2);
  
//     var R = 6371; // km
//     var dLat = toRad(lat2 - lat1);
//     var dLon = toRad(lon2 - lon1);
//     var lat1 = toRad(lat1);
//     var lat2 = toRad(lat2);
//   //   console.log("co", lat1, lon1, lat2, lon2);
//     var a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     var d = R * c;
//   //   console.log("distance:", d);
//     return d; //Km
//   }
  
//   // Converts numeric degrees to radians
//   function toRad(Value) {
//     return (Value * Math.PI) / 180;
//   }
  
//   function locBasedRes(user_lat, user_lon, user_dist) {
//     /* 
//       user_lat : user's current Lattitude
//       user_lon: user's current Longitude
//       user_dist: Radius in which user wants to search restaurant eg. 1Km, 2km (Future Feature)
//       */
  
//     //if user denies location then simply display all the restaurants in DB. And mark distance field NA
//     if (!user_lat & !user_lon) {
//       //return all restaurants
//       return dummydata;
//     } else if (user_lat !== null & user_lon !== null & user_dist !== null) {
//       //   Convert distance into Float
//       if (user_dist) {
//         user_dist = parseFloat(user_dist);
//       }
//       result = [] //to send filtered restaurants
//       // console.log(user_dist);
//       //Compute the distance
//       for (let i = 0; i < dummydata.length; i++) {
//         dummydata[i].distance = calcCrow(
//           user_lat,
//           user_lon,
//           dummydata[i].Location.lat,
//           dummydata[i].Location.lon
//         );
//       //   console.log(dummydata[i].distance, user_dist);
//         if (dummydata[i].distance <= user_dist) {
//           result.push(dummydata[i])
//         }
//       }
//       return result;
//     } else {
//       //Compute the distance
//       for (let i = 0; i < dummydata.length; i++) {
//         dummydata[i].distance = calcCrow(
//           user_lat,
//           user_lon,
//           dummydata[i].Location.lat,
//           dummydata[i].Location.lon
//         );
//       }
//       return dummydata;
//     }
//   }
  
// //   Testing
//   // console.log("user Denied Location", locBasedRes()); //user Denied Location
//   // console.log("user provided Location", locBasedRes("40.743875614629715", "-74.02674831289734"));
//   console.log(
//     "user provided Location and distance",
//     locBasedRes("40.743875614629715", "-74.02674831289734", "1.9")
//   );

// //   module.exports = locBasedRes