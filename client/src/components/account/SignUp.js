import React, { useContext } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import {
    doCreateUserWithEmailAndPassword,
    doUpdateProfileDisplayName,
} from "../../firebase/FirebaseFunctions";
import { AuthContext } from "../../firebase/Auth";

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

const SignUp = () => {
    const { currentUser } = useContext(AuthContext);
    const {
        control,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
    } = useForm();
    const classes = useStyles();

    const uploadImage = async (imageFile) => {
        // Grab the encrypted url to our bucket
        const { data } = await axios.get("http://localhost:3001/s3/url");

        try {
            const uploadToS3 = await axios.put(data, imageFile, {
                headers: {
                    "Content-Type": imageFile.type,
                },
            });
        } catch (e) {
            console.log(e);
        }

        const imageUrl = data.split("?")[0];

        return imageUrl;
    };

    const onSubmit = async (data) => {
        // event.preventDefault();

        // I cover all validation with regex except whitespace at beginning and end of string...
        let {
            name,
            email,
            address,
            postalCode,
            // country,
            aboutMe,
            passwordOne,
            passwordTwo,
        } = data;

        name = name.trim();
        email = email.trim();
        address = address.trim();
        postalCode = postalCode.trim();
        // country = country.trim();
        aboutMe = aboutMe.trim();
        /* I don't allow spaces at all in passwords, but I'll trim it anyway */
        passwordOne = passwordOne.trim();
        passwordTwo = passwordTwo.trim();

        // Appending address details together
        address = `${address} ${postalCode}`;

        console.log(data);

        if (passwordOne !== passwordTwo) {
            setError("passwordOne", {
                type: "client",
                message: "Passwords do not match!",
            });
            return false;
        }

        let user;
        try {
            // Create user in firebase and update display name
            user = await doCreateUserWithEmailAndPassword(
                email,
                passwordOne,
                name
            );
            await doUpdateProfileDisplayName(name);
        } catch (error) {
            console.log(error.code);
            if (error.code == "auth/weak-password") {
                setError("passwordOne", {
                    type: "server",
                    message: "Password should be at least 6 characters!",
                });
            } else if (error.code == "auth/email-already-in-use") {
                setError("email", {
                    type: "server",
                    message: "Email is already in use!",
                });
            } else {
                setError("email", {
                    type: "server",
                    message: "Email is invalid!",
                });
            }
            return false;
        }

        let imageUrl;
        if (data.profilePic) {
            try {
                // Upload profile pic to S3 and grab S3 url to pass to axios call below
                let profilePic = data.profilePic[0];
                imageUrl = await uploadImage(profilePic);
            } catch (e) {
                console.log(e);
            }
        }

        try {
            // Axios call to backend to create a user with the firebase uid
            let userId = user.user.uid;
            console.log(userId);

            /* 
                Request body:
                    _id
                    name
                    email
                    address
                    about_me
                    image_url
            */
            let createUser = await axios.post(
                "http://localhost:3001/user/userDetails",
                {
                    id: userId,
                    name: name,
                    emailAddress: email,
                    image_url: imageUrl,
                    biography: aboutMe,
                    address: address,
                }
            );
        } catch (e) {
            console.log(e);
        }
        reset();
    };

    if (currentUser) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <h1 className="textCenter">Sign Up</h1>

            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    InputLabelProps="name"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            id="name"
                            label="Name"
                            InputLabelProps="name"
                            variant="filled"
                            type="text"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                    rules={{
                        required: "Name Required",
                        pattern: {
                            // No empty strings allowed
                            value: /^(?!\s*$).+/,
                            message: "Name Required",
                        },
                    }}
                ></Controller>

                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            id="email"
                            label="Email"
                            variant="filled"
                            type="email"
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
                    name="address"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            id="address"
                            label="Address"
                            variant="filled"
                            type="text"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                            multiline
                        />
                    )}
                    rules={{
                        required: "Address Required",
                        pattern: {
                            // No empty strings allowed
                            value: /^(?!\s*$).+/,
                            message: "Address Required",
                        },
                    }}
                ></Controller>

                <Controller
                    name="postalCode"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            id="zip-code"
                            label="ZIP or Postal Code"
                            variant="filled"
                            type="text"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                    rules={{
                        required: "Postal Code Required",
                        pattern: {
                            // No empty strings allowed
                            value: /^(?!\s*$).+/,
                            message: "Postcal Code Required",
                        },
                    }}
                ></Controller>

                <Controller
                    name="aboutMe"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            id="about-me"
                            label="About Me"
                            variant="filled"
                            type="text"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                            multiline
                        />
                    )}
                    rules={{
                        required: "About Me Required",
                        pattern: {
                            // No empty strings allowed
                            value: /^(?!\s*$).+/,
                            message: "About Me Required",
                        },
                    }}
                ></Controller>

                <Controller
                    name="passwordOne"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            id="password"
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
                            message:
                                "Password Required (Minimum 6 characters, no spaces)",
                        },
                    }}
                ></Controller>

                <Controller
                    name="passwordTwo"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            id="confirm-password"
                            label="Confirm Password"
                            variant="filled"
                            type="password"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                    rules={{
                        required: "Confirm Password Required",
                        pattern: {
                            // No empty strings/strings with whitespace allowed
                            value: /^\S*$/,
                            message:
                                "Confirm Password Required (Minimum 6 characters, no spaces)",
                        },
                    }}
                ></Controller>

                <Controller
                    name="profilePic"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <div className="textCenter">
                            <p>Upload Profile Picture</p>
                            <label htmlFor="profile-pic"></label>
                            <input
                                id="profile-pic"
                                className="alignContent"
                                // label="Profile Picture"
                                // variant="filled"
                                type="file"
                                // value={value}
                                onChange={(e) => onChange(e.target.files)}
                                accept="image/*"
                                // error={!!error}
                                // helperText={error ? error.message : null}
                            />
                            <p>{error ? error.message : null}</p>
                        </div>
                    )}
                    rules={{
                        required: "Profile Picture Required!",
                    }}
                ></Controller>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    id="submitButton"
                    name="submitButton"
                >
                    Sign Up
                </Button>
            </form>
            <br />
        </div>
    );
};

export default SignUp;
