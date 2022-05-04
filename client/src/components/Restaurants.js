// This component displays the restaurants based on user's location
// It further filter's restaurant based on distance radius *** if provided by user ***
// Displays all restaurant if user has denied the location permission

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

// Get user's current location
    navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    // document.getElementById("latitude").textContent = lat;
    // document.getElementById("longitude").textContent = lon;
  });
 

  // Following use effect will run only once. It will display all the restaurants
  useEffect(() => {
      console.log('useEffect has fired')
    // Do the axios call and get the restaurants. Here we need to pass the current location of user
    // const data = await axios.get("")
    
    async function getRestaurantData() {
    //   Method 1
    //   data = await axios.get("http://localhost:3000/restaurants/location")
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
    const {data} = await axios.get('http://localhost:3000/restaurants/location', {
        params: {
            lat: "40.7401353",
            lon: "-74.0466352"
        }})
      console.log('axios call',data)
      setRestaurantsList(data);
    //   {
    //     params: {
    //       lat: "40.7401353",
    //       lon: "-74.0466352",
    //     }
    //   });
    }

    getRestaurantData()
    
    console.log('res list',restaurantsList)
  }, []);

  // To display Restaurant cards
  const buildCard = (restaurant) => {
    return (
      // <h1>heer</h1>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={restaurant.Id}>
        <Card className={classes.card} variant="outlined">
          <CardActionArea>
            <Link to={`/restaurant/${restaurant.Id}`}>
              {/* <CardMedia
								className={classes.media}
								component='img'
								image={show.thumbnail && show.thumbnail.path && show.thumbnail.extension ? show.thumbnail.path + '.'+ show.thumbnail.extension : noImage}
								title='show image'
							/> */}

              <CardContent>
                <Typography
                  className={classes.titleHead}
                  gutterBottom
                  variant="h6"
                  component="h2"
                >
                  {restaurant.Restaurant_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {restaurant.distance}																		
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      </Grid>
    );
  };
 
  if (restaurantsList) {

    card =
    restaurantsList &&
    restaurantsList.map((rest) => {
        return buildCard(rest);
      });
  }

  return (
    <div>
      <Grid container className={classes.grid} spacing={5}>
        {card}
      </Grid>
    </div>
  );

  // return (
  // 	<div>
  //         <h1>Display list of restaurants</h1>

  // 	</div>
  // );
};

export default Restaurants;
