import React, { useContext, useState } from "react";
import SelectCountry from "./SelectCountry";
import { Navigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../../firebase/FirebaseFunctions";
import { AuthContext } from "../../firebase/Auth";
// import SocialSignIn from "./SocialSignIn";

import "../../App.css";
import { makeStyles } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(2),

        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "300px",
        },
        "& .MuiButtonBase-root": {
            margin: theme.spacing(2),
        },
    },
}));

const SignUp = () => {
    const { currentUser } = useContext(AuthContext);
    const [pwMatch, setPwMatch] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();

        const { displayName, email, passwordOne, passwordTwo } =
            e.target.elements;

        if (passwordOne.value !== passwordTwo.value) {
            setPwMatch("Passwords do not match");
            return false;
        }

        try {
            await doCreateUserWithEmailAndPassword(
                email.value,
                passwordOne.value,
                displayName
            );
        } catch (error) {
            // alert(error);
        }
    };

    if (currentUser) {
        return <Navigate to="/home" />;
    }

    return (
        <div>
            <h1>Sign up</h1>

            {pwMatch && <h4 className="error">{pwMatch}</h4>}

            <form onSubmit={handleSignUp}>
                <div className="form-group">
                    <label>
                        Name:
                        <input
                            className="form-control"
                            id="name"
                            autoComplete="name"
                            name="displayName"
                            type="text"
                            placeholder="Name"
                            required
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Email:
                        <input
                            className="form-control"
                            id="email"
                            autoComplete="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Address:
                        <textarea
                            className="form-control"
                            id="address"
                            autoComplete="address"
                            name="address"
                            type="text"
                            placeholder="Address"
                            required
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        ZIP or Postal Code:
                        <input
                            className="form-control"
                            id="postal-code"
                            autoComplete="postal-code"
                            name="postal-code"
                            type="text"
                            placeholder="ZIP or Postal Code"
                            required
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Country or region:
                        <SelectCountry />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        About me:
                        <textarea
                            className="form-control"
                            required
                            name="aboutMe"
                            type="text"
                            placeholder="About Me"
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Password:
                        <input
                            className="form-control"
                            id="passwordOne"
                            name="passwordOne"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Confirm Password:
                        <input
                            className="form-control"
                            name="passwordTwo"
                            type="password"
                            placeholder="Confirm Password"
                            required
                        />
                    </label>
                </div>

                <button id="submitButton" name="submitButton" type="submit">
                    Sign Up
                </button>
            </form>
            <br />
            {/* <SocialSignIn /> */}
        </div>
    );
};

export default SignUp;
