import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Loader from "../Loader";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function FoodItemEdit() {
    const restaurant = useSelector((state) => state.restaurant);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);
    const [response, setResponse] = useState(null);
    const [foodItemStock, setFoodItemStock] = useState(0);
    const [message, setMessage] = useState("");
    const { foodItemId } = useParams();
    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        async function getRestaurantFoodItems() {
            setIsLoading(true);

            try {
                const { data } = await axios.get(
                    `http://localhost:3001/restaurants/foodItems/singleFoodItem/${foodItemId}`,
                    {
                        headers: {
                            accessToken: accessToken,
                        },
                    }
                );

                setResponse(data);
                setFoodItemStock(data.foodItem?.stock || 0);
                setError(null);
                setIsError(false);
            } catch (error) {
                setError(
                    error.response?.data?.error ||
                        "Error: Internal Server Error."
                );
                setIsError(true);
                setResponse(null);
            } finally {
                setIsLoading(false);
            }
        }

        getRestaurantFoodItems();
    }, [restaurant, foodItemId, accessToken]);

    function handleSubmit() {
        setMessage("");

        let errors = "";

        if (foodItemStock.length < 1) {
            errors += `  Food item stock is required.`;
        }

        if (!isNumberValid(foodItemStock)) {
            errors += `  Food item stock should be non negative integer.`;
        }

        if (errors.trim().length > 0) {
            setError(errors);
            setIsError(true);
            return false;
        }

        updateStock();
    }

    function isNumberValid(_number) {
        const number = Number(_number);

        return isNaN(number) || number < 0 || !Number.isInteger(number)
            ? false
            : true;
    }

    async function updateStock() {
        setMessage("");

        try {
            const putData = {
                stock: parseInt(foodItemStock),
            };

            await axios.put(
                `http://localhost:3001/restaurants/foodItems/singleFoodItem/${foodItemId}`,
                putData,
                {
                    headers: {
                        accessToken: restaurant.token,
                    },
                }
            );

            setMessage("Stock updated successfully.");
            setError(null);
            setIsError(false);
        } catch (error) {
            setError(
                error.response?.data?.error || "Error: Internal Server Error."
            );
            setIsError(true);
        }
    }

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (
                error.response.status === 401 ||
                error.response.status === 403
            ) {
                window.location.href = "http://localhost:3000/admin/restaurant";
            }
        }
    );

    if (isLoading) {
        return <Loader />;
    }

    return (
        response && (
            <div className="container mt-5 w-50">
                <div className="col">
                    <div className="card h-100">
                        <img
                            src={response.foodItem.item_image}
                            className="card-img-top"
                            alt={response.foodItem.name}
                            onError={(event) =>
                                (event.target.src = "/no-food-item.png")
                            }
                        />
                        <div className="card-body">
                            <p className="card-title fs-5">
                                {response.foodItem.name}
                            </p>
                            <p className="card-text">
                                {response.foodItem.description}
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <strong>Cuisines: </strong>
                                {response.foodItem.cuisines}
                            </li>
                            <li className="list-group-item text-capitalize">
                                <strong>Type: </strong>
                                {response.foodItem.type}
                            </li>
                            <li className="list-group-item">
                                <strong>Price: </strong>$
                                {response.foodItem.price}
                            </li>
                            <li className="list-group-item mt-2">
                                <label
                                    htmlFor="food-item-stock"
                                    className="form-label"
                                >
                                    Stock
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="food-item-stock"
                                    placeholder="Enter food item stock"
                                    value={foodItemStock}
                                    onChange={(event) =>
                                        setFoodItemStock(
                                            event.target.value.trim()
                                        )
                                    }
                                    autoComplete="off"
                                />
                            </li>
                            <li className="list-group-item text-center">
                                {isError && (
                                    <p className="text-danger text-center">
                                        {error}
                                    </p>
                                )}

                                {message && message.length > 0 && (
                                    <p className="text-success text-center">
                                        {message}
                                    </p>
                                )}
                                <Button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-center mt-4">
                    <Link
                        className="btn btn-secondary btn-sm"
                        to={`/admin/restaurant`}
                    >
                        Go Back
                    </Link>
                </p>
            </div>
        )
    );
}

export default FoodItemEdit;
