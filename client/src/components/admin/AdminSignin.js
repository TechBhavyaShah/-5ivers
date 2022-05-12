import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Loader from "../Loader";
import axios from "axios";

function AdminSignin() {
    const [restaurantUsername, setRestaurantUsername] = useState("");
    const [restaurantPassword, setRestaurantPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);

    async function handleSigninButton() {
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

            localStorage.setItem(
                "accessToken",
                (data && data.token && data.token.length > 0 && data.token) ||
                    null
            );

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
        <div className="container mt-5">
            <Form>
                <Form.Group
                    className="mb-3"
                    controlId="restaurant-username"
                    autoComplete="off"
                >
                    <Form.Label>Restaurant Username</Form.Label>
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
                    <Form.Label>Password</Form.Label>
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
