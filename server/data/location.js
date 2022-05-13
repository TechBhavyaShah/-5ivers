const mongoCollections = require("../config/mongoCollections");
const restaurants = mongoCollections.restaurants;

// Replace following dummy data with actual DB data once DB is ready
let dummydata = [
  {
    Id: 1,
    Username: "dummy1",
    Password: "12345678",
    Restaurant_name: "64 Beach Street",
    Restaurant_Image: "Some URL",
    Location: {
      //64 Beach Street
      lat: "40.7444511",
      lon: "-74.0570127",
    },
    distance: "NA",
  },
  {
    Id: 2,
    Username: "dummy2",
    Password: "12345678",
    Restaurant_name: "Low Fidelity",
    Restaurant_Image: "Some URL",
    Location: {
      // Low Fidelity
      lat: "40.7401353",
      lon: "-74.0466352",
    },
    distance: "NA",
  },
];

async function getAllRestaurants() {
  try {
    let restCollection = await restaurants();

    let restList = await restCollection
      .find({}) //,{ projection: { _id: 1, name: 1 } }
      .toArray();

    for (let i = 0; i < restList.length; i++) {
      restList[i]["_id"] = restList[i]["_id"].toString();
    }
    console.log("getAll", restList);
    return restList;
  } catch (error) {
    console.log(error);
  }
}

// Calculate distance between two co-ordinates
function calcCrow(lat1, lon1, lat2, lon2) {
  // converting input co-ordinates into Float
  lat1 = parseFloat(lat1);
  lon1 = parseFloat(lon1);
  lat2 = parseFloat(lat2);
  lon2 = parseFloat(lon2);

  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);
  // console.log("co", lat1, lon1, lat2, lon2);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  d = d * 0.621371;
  return d.toFixed(2); //Km
}

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

module.exports = {
  async locBasedRes(user_lat, user_lon, user_dist) {
    /* 
          user_lat : user's current Lattitude
          user_lon: user's current Longitude
          user_dist: Radius in which user wants to search restaurant eg. 1Km, 2km (Future Feature)
          */
    let dummydata = await getAllRestaurants();
    //if user denies location then simply display all the restaurants in DB. And mark distance field NA
    if ((user_lat === undefined) & (user_lon === undefined)) {
      //return all restaurants
      return dummydata;
    } else if (
      (user_lat !== undefined) &
      (user_lon !== undefined) &
      (user_dist !== undefined)
    ) {
      //   Convert distance into Float
      if (user_dist) {
        user_dist = parseFloat(user_dist);
      }
      result = []; //to send filtered restaurants
      // console.log(user_dist);
      //Compute the distance
      for (let i = 0; i < dummydata.length; i++) {
        dummydata[i].distance = calcCrow(
          user_lat,
          user_lon,
          dummydata[i].location.lat,
          dummydata[i].location.lon
        );
        //   console.log(dummydata[i].distance, user_dist);
        if (dummydata[i].distance <= user_dist) {
          result.push(dummydata[i]);
        }
      }
      return result;
    } else {
      //Compute the distance
      for (let i = 0; i < dummydata.length; i++) {
        dummydata[i].distance = calcCrow(
          user_lat,
          user_lon,
          dummydata[i].location.lat,
          dummydata[i].location.lon
        );
      }
      // console.log('Returning data:',dummydata)
      return dummydata;
    }
  },

  async searchRes(searchTerm,user_lat,user_lon,user_dist) {
    searchTerm = searchTerm.trim();
    if (searchTerm.length === 0) {
      // let restList = await restCollection
      //   .find({}) //,{ projection: { _id: 1, name: 1 } }
      //   .toArray();
      // for (let i = 0; i < restList.length; i++) {
      //   restList[i]["_id"] = restList[i]["_id"].toString();
      // }
      // return restList;
    } else {
      try {
        let restCollection = await restaurants();
        let searchRegex = `/^` + searchTerm + `/i`;
        const query = { restaurant_name: searchTerm }; //{'$regex': "/res",'$options' : 'i'}};

        let restList = await restCollection
          .find({
            restaurant_name: { $regex: "^" + searchTerm, $options: "i" },
          }) //, $options: "i"
          .toArray();
        for (let i = 0; i < restList.length; i++) {
          restList[i]["_id"] = restList[i]["_id"].toString();
        }

        result = []; //to send filtered restaurants
        // console.log(user_dist);
        //Compute the distance
        for (let i = 0; i < restList.length; i++) {
          restList[i].distance = calcCrow(
            user_lat,
            user_lon,
            restList[i].location.lat,
            restList[i].location.lon
          );
          //   console.log(dummydata[i].distance, user_dist);
          if (restList[i].distance <= user_dist) {
            result.push(restList[i]);
          }
        }

        return result;
      } catch (error) {
        console.log(error);
        return [];
      }
    }
  },
};
