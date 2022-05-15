import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import RestaurantFoodItemCard from "./RestaurantFootItemCard";

const Restaurant = () => {
    const cart = useSelector((state) => state.cart);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);
    const [response, setResponse] = useState(null);
    const { restaurantId } = useParams();

    useEffect(() => {
        async function getRestaurantFoodItems() {
            setIsLoading(true);

            try {
                const { data } = await axios.get(
                    `http://localhost:3001/restaurants/${restaurantId}`
                );

                setResponse(data);
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
    }, [restaurantId]);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        <p className="text-danger text-center">{error}</p>;
    }

    function isAddedToCart(foodItemId) {
        if (!cart || cart.length < 1) {
            return false;
        }

        for (const currentFoodItem of cart) {
            if (currentFoodItem.id === foodItemId) {
                return true;
            }
        }

        return false;
    }

    return (
        <>
            <div className="text-center">
                <h1>{response.restaurant_name}</h1>
                <img
                    className="roundRestImg"
                    src={response.restaurant_image}
                    alt={response.restaurant_name}
                    onError={(event) => (event.target.src = "/default.png")}
                />
                <p>{response.address}</p>
            </div>
            <div className="container mt-5">
                {response &&
                    response.food_items &&
                    response.food_items.length > 0 && (
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            {response.food_items.map((currentFoodItem) => {
                                return (
                                    <RestaurantFoodItemCard
                                        data={currentFoodItem}
                                        key={currentFoodItem.item_id}
                                        isAddedToCart={isAddedToCart(
                                            currentFoodItem.item_id
                                        )}
                                        restaurant={response.restaurant_name}
                                        restaurantId={response._id}
                                    />
                                );
                            })}
                        </div>
                    )}
                {(!response ||
                    !response.food_items ||
                    response.food_items.length < 1) && (
                    <p className="text-center fs-5">No food items found.</p>
                )}
            </div>
        </>
    );
};

export default Restaurant;
