import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ChangePassword from "./ChangePassword";
import SignOutButton from "./SignOut";
import { AuthContext } from "../../firebase/Auth";

import "../../App.css";

const Account = () => {
    const [user, setUser] = useState(null);
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser.uid);

    useEffect(() => {
        async function getUser() {
            try {
                let { data } = await axios.get(
                    `http://localhost:3001/user/userDetails/${currentUser.uid}`
                );

                setUser(data);
            } catch (e) {
                console.log(e);
            }
        }
        getUser();
    }, []);

    // let pastOrders = user.pastOrders;

    console.log(user);
    return (
        <div>
            <h2>Account Page</h2>

            <h3>{user.name}</h3>
            <img src={user.image_url} alt="profile picture"></img>
            <p>Address: {user.address}</p>
            <p>About me: {user.biography}</p>
            <Link to="/changePassword" className="link">
                Change Password
            </Link>
            {/* <ChangePassword /> */}
            <SignOutButton />
        </div>
    );
};

export default Account;
