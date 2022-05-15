import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import {
    doSignInWithEmailAndPassword,
    doPasswordReset,
} from "../../firebase/FirebaseFunctions";
import { AuthContext } from "../../firebase/Auth";
// import SocialSignIn from "./SocialSignIn";

import { makeStyles } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import "../../App.css";

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

const SignIn = () => {
    const { currentUser } = useContext(AuthContext);
    const {
        control,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
    } = useForm();
    const classes = useStyles();

    const handleLogin = async (data) => {
        // event.preventDefault();
        let { email, password } = data;

        email = email.trim();
        /* I don't allow spaces at all in passwords, but I'll trim it anyway */
        password = password.trim();

        try {
            await doSignInWithEmailAndPassword(email, password);
        } catch (error) {
            if (
                error.code == "auth/wrong-password" ||
                error.code == "auth/user-not-found"
            ) {
                setError("email", {
                    type: "server",
                    message: "The email and/or password is incorrect!",
                });
                setError("password", {
                    type: "server",
                    message: "The email and/or password is incorrect!",
                });
            }
            return false;
        }
        reset();
    };

    const passwordReset = async (event) => {
        event.preventDefault();

        let email = document.getElementById("email").value.trim();

        if (email) {
            try {
                await doPasswordReset(email);
            } catch (e) {
                setError("email", {
                    type: "server",
                    message: "The email was not found!",
                });
                return false;
            }
        } else {
            setError("email", {
                type: "client",
                message:
                    "Please enter an email address below before you click the forgot password link!",
            });
            return false;
        }
        reset();
    };

    if (currentUser) {
        return <Navigate to="/restaurants" />;
    }

    return (
        <div>
            <h1 className="textCenter">Log in</h1>
            <form className={classes.root} onSubmit={handleSubmit(handleLogin)}>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            label="Email"
                            variant="filled"
                            type="email"
                            id="email"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                    rules={{
                        required: "Email Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Enter a valid e-mail address",
                        },
                    }}
                ></Controller>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            label="Password"
                            variant="filled"
                            type="password"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                    rules={{
                        required: "Password Required",
                        pattern: {
                            // No empty strings/strings with whitespace allowed
                            value: /^\S*$/,
                            message: "Password Required",
                        },
                    }}
                ></Controller>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    id="submitButton"
                    name="submitButton"
                >
                    Log in
                </Button>
            </form>
            <br />
        </div>
    );
};

export default SignIn;
