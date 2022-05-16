import { Routes, Route, Navigate } from "react-router-dom";
import AdminSignin from "./AdminSignin";
import AdminRestaurant from "./AdminRestaurant";
import FoodItemEdit from "./FoodItemEdit";
import FoodItemAdd from "./FoodItemAdd";
import AdminNavBar from "./AdminNavBar";
import { useSelector } from "react-redux";

function AdminRoutes() {
    const restaurant = useSelector((state) => state.restaurant);
    const accessToken = localStorage.getItem("accessToken");

    return (
        <>
            <AdminNavBar />
            <Routes>
                <Route
                    path="/signin"
                    element={
                        accessToken &&
                        restaurant &&
                        restaurant.isAuthenticated ? (
                            <AdminRestaurant />
                        ) : (
                            <AdminSignin />
                        )
                    }
                />
                <Route
                    path="/restaurant"
                    element={
                        accessToken &&
                        restaurant &&
                        restaurant.isAuthenticated ? (
                            <AdminRestaurant />
                        ) : (
                            <Navigate to="/admin/signin" />
                        )
                    }
                />
                <Route
                    path="/restaurant/foodItem/Edit/:foodItemId"
                    element={
                        accessToken &&
                        restaurant &&
                        restaurant.isAuthenticated ? (
                            <FoodItemEdit />
                        ) : (
                            <Navigate to="/admin/signin" />
                        )
                    }
                />
                <Route
                    path="/restaurant/foodItem/Add"
                    element={
                        accessToken &&
                        restaurant &&
                        restaurant.isAuthenticated ? (
                            <FoodItemAdd />
                        ) : (
                            <Navigate to="/admin/signin" />
                        )
                    }
                />
                <Route
                    path="*"
                    element={
                        <p className="text-center fs-1 mt-5">
                            There's nothing here: 404!
                        </p>
                    }
                />
            </Routes>
        </>
    );
}

export default AdminRoutes;
