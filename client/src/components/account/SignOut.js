import React from "react";
import { useNavigate } from "react-router-dom";
import { doSignOut } from "../../firebase/FirebaseFunctions";

const SignOutButton = () => {
    let navigate = useNavigate();

    const handleSignOut = async () => {
        await doSignOut();
        navigate("/home");
    };

    return (
        <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleSignOut}
        >
            SIGN OUT
        </button>
    );
};

export default SignOutButton;
