import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import FoodItemCard from "./FootItemCard";
import Loader from "../Loader";
import axios from "axios";

function AdminRestaurant() {
    const restaurant = useSelector((state) => state.restaurant);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        async function getRestaurantFoodItems() {
            try {
                const { data } = await axios.get(
                    `http://localhost:3001/restaurants/foodItems/${restaurant.id}`,
                    {
                        headers: {
                            accessToken: restaurant.token,
                        },
                    }
                );

                setResponse(data.foodItems);
                setError(null);
                setIsError(false);
            } catch (error) {
                setError(
                    error.response?.data?.error ||
                        "Error: Internal Server Error."
                );
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getRestaurantFoodItems();
    }, [restaurant]);

    return (
        <>
            <div className="text-center">
                <h1>{restaurant.name}</h1>
                <img src={`/${restaurant.image}`} alt={restaurant.name} />
                <p>{restaurant.address}</p>
            </div>
            <div className="container mt-5">
                {response && response.length > 0 && (
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {response.map((currentFoodItem) => {
                            return (
                                <FoodItemCard
                                    data={currentFoodItem}
                                    key={currentFoodItem.item_id}
                                />
                            );
                        })}
                    </div>
                )}
                {!response ||
                    (response.length < 1 && (
                        <p className="text-center">No food items found.</p>
                    ))}
                {isLoading && <Loader />}
                {isError && <p className="text-danger text-center">{error}</p>}
            </div>
        </>
    );
}

export default AdminRestaurant;
