import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./components/account/Account";
import Home from "./components/account/Home";
import Landing from "./components/account/Landing";
import Navigation from "./components/account/Navigation";
import SignIn from "./components/account/SignIn";
import SignUp from "./components/account/SignUp";
import AdminSignin from "./components/admin/AdminSignin";
import AdminRestaurant from "./components/admin/AdminRestaurant";
import { AuthProvider } from "./firebase/Auth";

import "./App.css";
import FoodItemEdit from "./components/admin/FoodItemEdit";
import FoodItemAdd from "./components/admin/FoodItemAdd";

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <div className="App">
                        <header className="App-header">
                            <Navigation />
                        </header>
                    </div>
                </div>
                <Routes>
                    <Route index element={<Landing />} />
                    <Route path="landing" element={<Landing />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/admin/signin" element={<AdminSignin />} />
                    <Route
                        path="/admin/restaurant"
                        element={<AdminRestaurant />}
                    />
                    <Route
                        path="/admin/restaurant/foodItem/Edit/:foodItemId"
                        element={<FoodItemEdit />}
                    />
                    <Route
                        path="/admin/restaurant/foodItem/Add"
                        element={<FoodItemAdd />}
                    />
                    <Route
                        path="*"
                        element={<p>There's nothing here: 404!</p>}
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
