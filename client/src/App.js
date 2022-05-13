import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Account from "./components/account/Account";
import Home1 from "./components/account/Home";
import Landing from "./components/account/Landing";
import Navigation from "./components/account/Navigation";
import SignIn from "./components/account/SignIn";
import SignUp from "./components/account/SignUp";
import { AuthProvider } from "./firebase/Auth";
import Restaurants from './components/Restaurants'
import Home from './components/Home'
import './App.css';


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
                    {/*<Route path="landing" element={<Landing />} />*/}
                    {/* Private route */}
                    {/*<Route path="/home" element={<Home />} />*/}
                    {/* Private route */}
                    <Route exact path = '/' element = {<Home/>}/>
                    <Route exact path = '/restaurants' element = {<Restaurants/>}/>
                    <Route path="/account" element={<Account />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
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
