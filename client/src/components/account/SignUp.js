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
    const { control, handleSubmit, reset } = useForm();
    const classes = useStyles();
    const [errors, setErrors] = useState([]);

    const onSubmit = async (data) => {
        // event.preventDefault();
        setErrors([]);

        const {
            name,
            email,
            address,
            postalCode,
            country,
            aboutMe,
            passwordOne,
            passwordTwo,
        } = data;

        if (passwordOne !== passwordTwo) {
            if (!errors.includes("Passwords do not match")) {
                setErrors([...errors, "Passwords do not match"]);
            }
            reset();
        }

        try {
            let user = await doCreateUserWithEmailAndPassword(
                email,
                passwordOne,
                name
            );

            let userId = user.user.uid;

            // Axios call to backend to create a user with the firebase uid
        } catch (error) {
            // console.log(error);
            console.log("Entered error block");
            if (!errors.includes(error.message)) {
                setErrors([...errors, error.message]);
            }

            console.log(error.code);
            // if (error.code == "auth/weak-password") {
            //     console.log("Password should be at least 6 characters!");
            // } else if (error.code == "auth/email-already-in-use") {
            //     console.log("Email is already in use!");
            // } else {
            //     console.log("Email is invalid!");
            // }
        }
        reset();
    };

    if (currentUser) {
        return <Navigate to="/home" />;
    }

    console.log(errors);
    return (
        <div>
            <h1>Sign up</h1>

            {errors.length > 0
                ? errors.map((error) => <h4 className="error">{error}</h4>)
                : null}

            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            label="Name"
                            variant="filled"
                            type="text"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                    rules={{ required: "Name Required" }}
                ></Controller>

                {/* <div className="form-group">
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
                </div> */}

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

                {/* <div className="form-group">
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
                </div> */}

                <Controller
                    name="address"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
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
                    }}
                ></Controller>

                {/* <div className="form-group">
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
                </div> */}

                <Controller
                    name="postalCode"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
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
                    }}
                ></Controller>

                {/* <div className="form-group">
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
                </div> */}

                <SelectCountry control={control} />

                {/* <div className="form-group">
                    <label>
                        Country or region:
                        <SelectCountry />
                    </label>
                </div> */}

                <Controller
                    name="aboutMe"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
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
                    }}
                ></Controller>

                {/* <div className="form-group">
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
                </div> */}

                <Controller
                    name="passwordOne"
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
                    }}
                ></Controller>

                {/* <div className="form-group">
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
                </div> */}

                <Controller
                    name="passwordTwo"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
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
                    }}
                ></Controller>

                {/* <div className="form-group">
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
                </div> */}

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
            {/* <SocialSignIn /> */}
        </div>
    );
};

export default SignUp;
