import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ChangePassword from "./ChangePassword";
import SignOutButton from "./SignOut";
import { AuthContext } from "../../firebase/Auth";

import "../../App.css";

const Account = () => {
    const [userData, setUserData] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const { currentUser } = useContext(AuthContext);

    let currentUserUid = currentUser.uid;

    useEffect(() => {
        console.log("On load useEffect (sign up)");

        async function getUser() {
            try {
                const { data } = await axios.get(
                    `http://localhost:3001/user/userDetails/${currentUserUid}`
                );

                console.log(data);

                setUserData(data);
                setLoading(false);
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        }
        getUser();
    }, []);

    // let pastOrders = user.pastOrders;

    // console.log(userData);
    if (loading) {
        return (
            <div>
                <h2>Loading....</h2>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Account Page</h2>
                <h3>{userData.name}</h3>
                <img src={userData.image_url} alt="profile picture" />
                <p>Address: {userData.address}</p>
                <p>About me: {userData.biography}</p>
                <Link to="/changePassword" className="link">
                    Change Password
                </Link>
                {/* <ChangePassword /> */}
                <SignOutButton />
            </div>
        );
    }
};

export default Account;
