import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../firebase/Auth";

const PrivateRoute = ({ user, redirectPath = "/home", children }) => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default PrivateRoute;
