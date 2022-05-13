import React, { useContext } from "react";
import { AuthContext } from "../../firebase/Auth";
import firebaseApp from "../../firebase/Firebase";

import "../../App.css";

function Landing() {
    // const { currentUser } = useContext(AuthContext);
    // console.log(currentUser);
    return (
        <div>
            <h2>This is the Landing page</h2>
        </div>
    );
}

export default Landing;
