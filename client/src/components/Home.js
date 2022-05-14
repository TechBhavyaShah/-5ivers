import axios from "axios";
import React from "react";
import "../App.css";

const Home = () => {
    // async function userLoc() {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        document.getElementById("latitude").textContent = lat;
        document.getElementById("longitude").textContent = lon;
    });

    // }
    return (
        <div>
            <h1>
                The purpose of this application is to find a nearby restaurant
                offering food at free of cost or at discounted rate
            </h1>
            <p>
                Latitude : <span id="latitude">$deg;</span>
                <br />
                Longitude : <span id="longitude">$deg;</span>
                <br />
            </p>
        </div>
    );
};

export default Home;
