import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doChangePassword } from "../../firebase/FirebaseFunctions";
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

const ChangePassword = () => {
    const { currentUser } = useContext(AuthContext);
    const {
        control,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
    } = useForm();
    const classes = useStyles();

    let navigate = useNavigate();

    // const [pwMatch, setPwMatch] = useState("");

    const onSubmit = async (data) => {
        // event.preventDefault();
        const { currentPassword, newPasswordOne, newPasswordTwo } = data;

        /* I don't allow spaces at all in passwords, but I'll trim it anyway */
        currentPassword = currentPassword.trim();
        newPasswordOne = newPasswordOne.trim();
        newPasswordTwo = newPasswordTwo.trim();

        if (newPasswordOne !== newPasswordTwo) {
            setError("newPasswordOne", {
                type: "client",
                message: "Passwords do not match!",
            });
            return false;
        }

        try {
            await doChangePassword(
                currentUser.email,
                currentPassword,
                newPasswordOne
            );
            alert("Password has been changed, you will now be logged out");
            navigate("/home");
        } catch (error) {
            if (error.code == "auth/wrong-password") {
                setError("currentPassword", {
                    type: "server",
                    message: "The password is incorrect!",
                });
            } else if (error.code == "auth/weak-password") {
                setError("newPasswordOne", {
                    type: "server",
                    message: "Password should be at least 6 characters!",
                });
            }
        }
    };

    if (currentUser.providerData[0].providerId === "password") {
        return (
            <div>
                {/* {pwMatch && <h4 className="error">{pwMatch}</h4>} */}

                <h2>Change Password</h2>

                <form
                    className={classes.root}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Controller
                        name="currentPassword"
                        control={control}
                        defaultValue=""
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                        }) => (
                            <TextField
                                label="Current Password"
                                variant="filled"
                                type="password"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{
                            required: "Current Password Required!",
                            pattern: {
                                // No empty strings/strings with whitespace allowed
                                value: /^\S*$/,
                                message: "Current Password Required",
                            },
                        }}
                    ></Controller>

                    {/* <div className="form-group">
                        <label>
                            Current Password:
                            <input
                                className="form-control"
                                name="currentPassword"
                                id="currentPassword"
                                type="password"
                                placeholder="Current Password"
                                required
                            />
                        </label>
                    </div> */}

                    <Controller
                        name="newPasswordOne"
                        control={control}
                        defaultValue=""
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                        }) => (
                            <TextField
                                label="New Password"
                                variant="filled"
                                type="password"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{
                            required: "New Password Required!",
                            pattern: {
                                // No empty strings/strings with whitespace allowed
                                value: /^\S*$/,
                                message:
                                    "New Password Required (Minimum 6 characters, no spaces)",
                            },
                        }}
                    ></Controller>

                    {/* <div className="form-group">
                        <label>
                            New Password:
                            <input
                                className="form-control"
                                name="newPasswordOne"
                                id="newPasswordOne"
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </label>
                    </div> */}

                    <Controller
                        name="newPasswordTwo"
                        control={control}
                        defaultValue=""
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                        }) => (
                            <TextField
                                label="Confirm New Password"
                                variant="filled"
                                type="password"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{
                            required: "Please Confirm New Password!",
                            pattern: {
                                // No empty strings/strings with whitespace allowed
                                value: /^\S*$/,
                                message:
                                    "Confirm Password Required (Minimum 6 characters, no spaces)",
                            },
                        }}
                    ></Controller>

                    {/* <div className="form-group">
                        <label>
                            Confirm New Password:
                            <input
                                className="form-control"
                                name="newPasswordTwo"
                                id="newPasswordTwo"
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
                        Change Password
                    </Button>
                </form>
                <br />
            </div>
        );
    } else {
        return (
            <div>
                <h2>
                    You are signed in using a Social Media Provider, You cannot
                    change your password
                </h2>
            </div>
        );
    }
};

export default ChangePassword;
