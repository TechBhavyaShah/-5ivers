import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Loader from "../Loader";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { signInRestaurant } from "../../redux/actions/restaurantActions";
import { useNavigate } from "react-router-dom";

function AdminSignin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [restaurantUsername, setRestaurantUsername] = useState("");
    const [restaurantPassword, setRestaurantPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);

    function handleSigninButton() {
        let errors = "";

        if (restaurantUsername.length < 1) {
            errors += `  Restaurant username is required.`;
        }

        if (restaurantPassword.length < 1) {
            errors += `  Restaurant password is required.`;
        }

        if (restaurantPassword.length > 0 && restaurantPassword.length < 8) {
            errors += `  Restaurant password should be of at least 8 characters long.`;
        }

        if (errors.trim().length > 0) {
            setError(errors);
            setIsError(true);
            return false;
        }

        doSignIn();
    }

    async function doSignIn() {
        setIsLoading(true);

        try {
            const postData = {
                restaurantUsername,
                restaurantPassword,
            };

            const { data } = await axios.post(
                "http://localhost:3001/restaurants/signin",
                postData
            );

            localStorage.setItem("accessToken", (data && data.token) || null);

            const decodedToken =
                data && data.token ? jwtDecode(data.token) : {};

            const restaurant = {
                token: (data && data.token) || null,
                isAuthenticated: data && data.token ? true : false,
                id: decodedToken.restaurant?.id,
                name: decodedToken.restaurant?.name,
                image: decodedToken.restaurant?.image,
                address: decodedToken.restaurant?.address,
            };

            dispatch(signInRestaurant(restaurant));
            navigate("/admin/restaurant");

            setError(null);
            setIsError(false);
        } catch (error) {
            setError(
                error.response?.data?.error || "Error: Internal Server Error."
            );
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="container mt-5 w-50">
            <Form>
                <Form.Group
                    className="mb-3"
                    controlId="restaurant-username"
                    autoComplete="off"
                >
                    <Form.Label>
                        Restaurant Username<span className="mandatory">*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter restaurant username"
                        onChange={(event) =>
                            setRestaurantUsername(event.target.value.trim())
                        }
                        value={restaurantUsername}
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="restaurant-password"
                    autoComplete="off"
                >
                    <Form.Label>
                        Password<span className="mandatory">*</span>
                    </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter restaurant password"
                        onChange={(event) =>
                            setRestaurantPassword(event.target.value.trim())
                        }
                        value={restaurantPassword}
                    />
                </Form.Group>
                {isError && <p className="text-danger text-center">{error}</p>}
                <Button
                    variant="primary"
                    type="button"
                    onClick={handleSigninButton}
                >
                    Sign in
                </Button>
            </Form>
        </div>
    );
}

export default AdminSignin;
