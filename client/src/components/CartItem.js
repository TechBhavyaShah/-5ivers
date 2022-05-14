import { useDispatch } from "react-redux";
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
} from "../redux/actions/cartActions";

function CartItem({ data }) {
    const dispatch = useDispatch();

    function handleRemoveFromCart(foodItemId) {
        dispatch(removeFromCart(foodItemId));
    }

    function handleIncreaseQuantity(foodItemId) {
        dispatch(increaseQuantity(foodItemId));
    }

    function handleDecreaseQuantity(foodItemId) {
        dispatch(decreaseQuantity(foodItemId));
    }

    return (
        <div className="d-flex text-muted pt-4">
            <img
                src={data.image}
                className="cart-item-image mb-3"
                alt={data.name}
                onError={(event) => (event.target.src = "/no-food-item.png")}
            />

            <div className="pb-3 mb-0 small lh-sm border-bottom w-100 ps-3">
                <div className="d-flex justify-content-between">
                    <strong className="text-gray-dark">{data.name}</strong>
                    <div>
                        <span
                            className={`badge bg-primary cart-action-badge ${
                                data.quantity && data.quantity > 1
                                    ? ""
                                    : "pe-none"
                            }`}
                            onClick={() =>
                                data.quantity && data.quantity > 1
                                    ? handleDecreaseQuantity(data.id)
                                    : undefined
                            }
                        >
                            -
                        </span>
                        <span className="ps-2 pe-2">{data.quantity}</span>
                        <span
                            className="badge bg-secondary cart-action-badge"
                            onClick={() => handleIncreaseQuantity(data.id)}
                        >
                            +
                        </span>
                    </div>
                </div>
                <span className="d-block">Restaurant: {data.restaurant}</span>
                <span className="d-block text-capitalize">
                    Type: {data.type}
                </span>
                <span className="d-block pt-2">
                    Price: ({data.quantity} X ${data.price}){" "}
                    <strong className="text-success">
                        $
                        {Math.round(
                            (data.price * data.quantity + Number.EPSILON) * 100
                        ) / 100}
                    </strong>
                </span>

                <span
                    className="badge rounded-pill bg-danger mt-2"
                    onClick={() => handleRemoveFromCart(data.id)}
                    role="button"
                >
                    Remove
                </span>
            </div>
        </div>
    );
}

export default CartItem;
