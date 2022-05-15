import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Restaurants from "./Restaurants";
import Restaurant from "./restaurant/Restaurant";
import Home from "./Home";
import Account from "./account/Account";
import SignIn from "./account/SignIn";
import SignUp from "./account/SignUp";
import Cart from "./Cart";
import Navigation from "./account/Navigation";
import { AuthContext } from "../firebase/Auth";

function NormalRoutes() {
    const { currentUser } = useContext(AuthContext);
    return (
        <>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/restaurants" element={<Restaurants />} />
                <Route
                    path="/account"
                    element={
                        currentUser ? <Account /> : <Navigate to="/signin" />
                    }
                />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                    path="/restaurants/:restaurantId"
                    element={<Restaurant />}
                />
            </Routes>
        </>
    );
}

export default NormalRoutes;
