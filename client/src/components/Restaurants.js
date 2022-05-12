// This component displays the restaurants based on user's location
// It further filter's restaurant based on distance radius *** if provided by user ***
// Displays restaurant near stevens if user has denied the location permission

import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
// const noImage = require('../public/logo512.png')
const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 5,
    border: "1px solid #1e8678",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);",
  },
  titleHead: {
    borderBottom: "1px solid #1e8678",
    fontWeight: "bold",
  },
  grid: {
    flexGrow: 1,
    flexDirection: "row",
  },
  media: {
    height: "100%",
    width: "100%",
  },
  button: {
    color: "#1e8678",
    fontWeight: "bold",
    fontSize: 12,
  },
});
let card = null; //This is to map each item to buildcard()

// Replace following dummy data with actual DB data once DB is ready
const dummydata = [
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

const Restaurants = () => {
  const classes = useStyles();
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); //Not working
  const [error404, setError404] = useState(false);
  const [userLat, setUserLat] = useState("40.7434768");
  const [userLon, setUserLon] = useState("-74.0266051");

  // Get user's current location
//   var lat = "40.7434768";
//   var lon = "-74.0266051";

  // Do the axios call and get the restaurants. Here we need to pass the current location of user
  async function getRestaurantData(uLat, uLon) {
    // Method 2 : Params not going through
    // const {data} = await axios({
    //     method: 'get',
    //     url: 'http://localhost:3000/restaurants/location'
    //     ,
    //     params: {
    //               lat: "40.7401353",
    //               lon: "-74.0466352",
    //             }

    //   });
    // Method 3:
    try {
      const { data } = await axios.get(
        `http://localhost:3000/restaurants/location/${uLat}/${uLon}`,
        {
          params: {
            lat: uLat, // "40.7401353",
            lon: uLon, //"-74.0466352"
          },
        }
      );
      //   console.log('axios call',data)
      if (data.length === 0) {
        setLoading(false);
        setError404(true);
      } else {
        setRestaurantsList(data);
        setLoading(false);
        setError404(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError404(true);
    }
  }

  // Following use effect will run only once. It will display all the restaurants
  useEffect(() => {
    console.log("Main useEffect has fired");
    // Get user location
    function getUserLocation() {
      // console.log('navigator',navigator)

      if ("geolocation" in navigator) {
        console.log("Location Available");

        navigator.geolocation.getCurrentPosition(ShowPos, showError);
      } else {
        console.log("Not Available");
      }
    }
    // Following function call will set the lat and lon variable.
    getUserLocation();

    // A success call back function for navigator.geolocation
    function ShowPos(pos) {
      // console.log('wefwfwefwef',pos)
      //   lat = pos.coords.latitude;
      //   lon = pos.coords.longitude;
      setUserLat(pos.coords.latitude);
      setUserLon(pos.coords.longitude);
      getRestaurantData(userLat, userLon);
    }
    // // A failure call back function for navigator.geolocation
    function showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.log("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.");
          break;
      }
      // Since user has denied the location access, we are showing restaurants near stevens Institute of Tech.
      //   lat = "40.74347683711104";
      //   lon = "-74.02660504466289";
      setUserLat("40.7434768");
      setUserLon("-74.0266051");
      getRestaurantData(userLat, userLon);
    }

    console.log("res list", restaurantsList);
  }, []);

  //   useeffect for Search Term
  useEffect(() => {
    console.log("Search term changed", searchTerm, userLat, userLon);
    try {
      async function getSearchedTermData(searchTerm,userLat, userLon) {
        const { data } = await axios.get(
          `http://localhost:3000/restaurants/search/${searchTerm}/${userLat}/${userLon}`
        );
        console.log("axios search call", data);
        if (data.length === 0) {
          setLoading(false);
          setError404(true);
        } else {
          setRestaurantsList(data);
          setLoading(false);
          setError404(false);
        }
      }
      if (searchTerm.length !== 0) {
        getSearchedTermData(searchTerm,userLat,userLon);
      } else {
        getRestaurantData(userLat, userLon);
      }
    } catch (error) {
      console.log("catch", error);
      setLoading(false);
      setError404(true);
    }

    // setLoading(false)
  }, [searchTerm]);

  //   To set search term
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // To display Restaurant cards
  const buildCard = (restaurant) => {
    return (
      // <h1>heer</h1>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={restaurant._id}>
        <Card className={classes.card} variant="outlined">
          <CardActionArea>
            <Link to={`/restaurant/${restaurant._id}`}>
              <CardMedia
                className={classes.media}
                component="img"
                image="/default.png"
                // {restaurant.restaurant_image}
                // {show.thumbnail && show.thumbnail.path && show.thumbnail.extension ? show.thumbnail.path + '.'+ show.thumbnail.extension : noImage}
                title="show image"
              />

              <CardContent>
                <Typography
                  className={classes.titleHead}
                  gutterBottom
                  variant="h6"
                  component="h2"
                >
                  {restaurant.restaurant_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {restaurant.distance} Miles
                  <br />
                  {restaurant.address}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      </Grid>
    );
  };
  if (loading) {
    return <h1>Loading</h1>;
  } else if (error404) {
    return (
      <div>
        <label>
          Search Restaurants:
          <input
            id="name"
            name="name"
            defaultValue={searchTerm}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <br />
        <h1>No Restaurant found.</h1>
      </div>
    );
  } else if (restaurantsList) {
    card =
      restaurantsList &&
      restaurantsList.map((rest) => {
        return buildCard(rest);
      });
  }
  //   const handleChange = (e) => {
  //     setSearchTerm(e.target.value);
  //   };
  return (
    <div>
      {/* search restaurants */}
      <label>
        Search Restaurants:
        <input
          id="name"
          name="name"
          defaultValue={searchTerm}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <br />
      <div id="res-list">
        <Grid container className={classes.grid} spacing={5}>
          {card}
        </Grid>
      </div>
    </div>
  );
};

export default Restaurants;
