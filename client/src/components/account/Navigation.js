import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/Auth";
import SignOutButton from "./SignOut";
import "../../App.css";

const Navigation = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div>{currentUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
    );
};

const NavigationAuth = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/" className="link">
                        Landing
                    </Link>
                </li>
                <li>
                    <Link to="/home" className="link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/account" className="link">
                        Account
                    </Link>
                </li>
                <li>
                    <Link to="/restaurants" className="link">
                        Find Restaurants
                    </Link>
                </li>
                <li>
                    <SignOutButton />
                </li>
            </ul>
        </nav>
    );
};

const NavigationNonAuth = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/" className="link">
                        Landing
                    </Link>
                </li>
                <li>
                    <Link to="/restaurants" className="link">
                        Find Restaurants
                    </Link>
                </li>
                <li>
                    <Link to="/signup" className="link">
                        Sign-up
                    </Link>
                </li>

                <li>
                    <Link to="/signin" className="link">
                        Sign-In
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
