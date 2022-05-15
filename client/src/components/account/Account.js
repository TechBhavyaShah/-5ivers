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
            <div className="profile mt-4">
                <h1 className="fs-2 my-3">User Profile</h1>
                <h2 className="fs-3 my-3">{userData.name}</h2>
                <img src={userData.image_url} alt="profile" className="user" />
                <p className="my-3">
                    <strong>Address:</strong> {userData.address}
                </p>
                <p>
                    <strong>About me:</strong> {userData.biography}
                </p>

                <p>
                    <strong>Past Orders:</strong>
                </p>
                {userData &&
                userData.pastOrders &&
                userData.pastOrders.length > 0 ? (
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
                    <p>No orders</p>
                )}
            </div>
        );
    }
};

export default Account;
