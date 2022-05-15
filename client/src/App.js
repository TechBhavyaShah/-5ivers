import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Account from "./components/account/Account";
import ChangePassword from "./components/account/ChangePassword";
import Home1 from "./components/account/Home";
import Landing from "./components/account/Landing";
import Navigation from "./components/account/Navigation";
import SignIn from "./components/account/SignIn";
import SignUp from "./components/account/SignUp";
import { AuthProvider } from "./firebase/Auth";
import Restaurants from "./components/Restaurants";
import Restaurant from "./components/restaurant/Restaurant";
import Home from "./components/Home";
import "./App.css";
import AdminRoutes from "./components/admin/AdminRoutes";
import Cart from "./components/Cart";

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
          <Route index element={<Home />} />
          {/*<Route path="landing" element={<Landing />} />*/}
          {/* Private route */}
          {/*<Route path="/home" element={<Home />} />*/}
          {/* Private route */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/restaurants" element={<Restaurants />} />
          <Route path="/account" element={<Account />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/restaurants/:restaurantId" element={<Restaurant />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
