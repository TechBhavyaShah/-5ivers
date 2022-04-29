import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "./Firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        const auth = getAuth(firebaseApp);
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            // Check for user status
            setCurrentUser(user);
            setLoadingUser(false);
        });
        // firebaseApp.auth().onAuthStateChanged((user) => {
        //     setCurrentUser(user);
        //     setLoadingUser(false);
        // });
    }, []);

    if (loadingUser) {
        return (
            <div>
                <h1>Loading....Loading....Loading....Loading....Loading....</h1>
            </div>
        );
    }

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
