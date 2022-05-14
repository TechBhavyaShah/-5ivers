import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

function RestaurantFoodItemCard({ data, isAddedToCart }) {
    const dispatch = useDispatch();

    function handleAddToCart(data) {
        const foodItem = {
            id: data.item_id,
            name: data.name,
            price: data.price,
            image: data.item_image,
            type: data.type,
            description: data.description,
            cuisines: data.cuisines,
            quantity: 1,
        };

        dispatch(addToCart(foodItem));
    }

    function handleRemoveFromCart(foodItemId) {
        dispatch(removeFromCart(foodItemId));
    }

    return (
        <div className="col">
            <div className="card h-100">
                <img
                    src={data.item_image}
                    className="card-img-top"
                    alt={data.name}
                    onError={(event) =>
                        (event.target.src = "/no-food-item.png")
                    }
                />
                <div className="card-body">
                    <p className="card-title fs-5">{data.name}</p>
                    <p className="card-text">{data.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <strong>Cuisines: </strong>
                        {data.cuisines}
                    </li>
                    <li className="list-group-item text-capitalize">
                        <strong>Type: </strong>
                        {data.type}
                    </li>
                    <li className="list-group-item">
                        <strong>Price: </strong>${data.price}
                    </li>
                    <li className="list-group-item text-center">
                        {isAddedToCart ? (
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() =>
                                    handleRemoveFromCart(data.item_id)
                                }
                            >
                                Remove From Cart
                            </button>
                        ) : (
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => handleAddToCart(data)}
                            >
                                Add To Cart
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RestaurantFoodItemCard;
