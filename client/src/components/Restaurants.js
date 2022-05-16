// This component displays the restaurants based on user's location
// It further filter's restaurant based on distance radius *** if provided by user ***
// Displays restaurant near stevens if user has denied the location permission
import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Restaurants = () => {
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true); //Not working
    const [error404, setError404] = useState(false);
    const [userLat, setUserLat] = useState("40.7434768");
    const [userLon, setUserLon] = useState("-74.0266051");
    const [locationAcquired, setLocationAcquired] = useState(false); //This will indicate if we have obtained the user current location of not

    // Do the axios call and get the restaurants. Here we need to pass the current location of user
    async function getRestaurantData(uLat, uLon) {
        // Method 2 : Params not going through

        // Method 3:
        try {
            const { data } = await axios.get(
                `http://localhost:3001/restaurant/location/${uLat}/${uLon}`,
                {
                    params: {
                        lat: uLat, // "40.7401353",
                        lon: uLon, //"-74.0466352"
                    },
                }
            );

            if (data.length === 0) {
                setLoading(false);
                setError404(true);
            } else {
                setRestaurantsList(data);
                setLoading(false);
                setError404(false);
            }
        } catch (error) {
            setLoading(false);
            setError404(true);
        }
    }

    // Following use effect will run only once. It will display all the restaurants
    useEffect(() => {
        // Get user location
        function getUserLocation() {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(ShowPos, showError);
            } else {
            }
        }
        // Following function call will set the lat and lon variable.
        getUserLocation();

        // A success call back function for navigator.geolocation
        function ShowPos(pos) {
            setUserLat(pos.coords.latitude);
            setUserLon(pos.coords.longitude);
            getRestaurantData(pos.coords.latitude, pos.coords.longitude);
            setLocationAcquired(true); //This will help when checking "searchTerm !== 0"
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
                default:
                    break;
            }
            // Since user has denied the location access, we are showing restaurants near stevens Institute of Tech.
            setUserLat("40.7434768");
            setUserLon("-74.0266051");
            getRestaurantData(userLat, userLon);
            setLocationAcquired(true); //This will help when checking "searchTerm !== 0"
        }
    }, []);

    //   useeffect for Search Term
    useEffect(() => {
        try {
            async function getSearchedTermData(searchTerm, userLat, userLon) {
                const { data } = await axios.get(
                    `http://localhost:3001/restaurant/search/${searchTerm}/${userLat}/${userLon}`
                );

                if (data.length === 0) {
                    setLoading(false);
                    setError404(true);
                } else {
                    setRestaurantsList(data);
                    setLoading(false);
                    setError404(false);
                }
            }
            if (searchTerm.trim().length !== 0) {
                getSearchedTermData(searchTerm, userLat, userLon);
            } else {
                if (locationAcquired) {
                    getRestaurantData(userLat, userLon);
                }
            }
        } catch (error) {
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
            <div className="col" key={restaurant._id}>
                <div className="card h-100">
                    <Link to={`/restaurants/${restaurant._id}`}>
                        <img
                            src={restaurant.restaurant_image}
                            className="card-img-top"
                            alt={restaurant.restaurant_name}
                            onError={(event) =>
                                (event.target.src = "/default.png")
                            }
                        />
                        <div className="card-body">
                            <p className="card-title fs-5">
                                {restaurant.restaurant_name}
                            </p>
                            <p className="card-text">{restaurant.address}</p>
                            <p className="card-text">
                                {restaurant.distance} Miles
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        );
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="text-center">
            <br />
            <br />
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
            {error404 && <h1 className="text-center">No Restaurant found.</h1>}

            {!error404 && restaurantsList && restaurantsList.length > 0 && (
                <div className="container mt-5">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {restaurantsList.map((rest) => {
                            return buildCard(rest);
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Restaurants;
