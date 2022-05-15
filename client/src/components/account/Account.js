import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../firebase/Auth";
import PastOrderItem from "./PastOrderItem";

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

                setUserData(data);
                setLoading(false);
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        }
        getUser();
    }, []);

    if (loading) {
        return (
            <div>
                <h2>Loading....</h2>
            </div>
        );
    } else {
        return (
            <div className="profile">
                <h2>User Profile</h2>
                <br />
                <h3>{userData.name}</h3>
                <br />
                <img src={userData.image_url} alt="profile" className="user" />
                <br />
                <br />
                <p>Address: {userData.address}</p>
                <p>About me: {userData.biography}</p>
                <br />
                <br />

                <p>Past Orders: </p>
                {userData && userData.pastOrders !== 0 ? (
                    <div>
                        <main className="container mt-5 text-center w-50">
                            {userData.pastOrders.map((order) => {
                                return (
                                    <PastOrderItem
                                        data={order}
                                        key={order.orderId + order.itemId}
                                    />
                                );
                            })}
                        </main>{" "}
                    </div>
                ) : (
                    <p>N/A</p>
                )}
            </div>
        );
    }
};

export default Account;
