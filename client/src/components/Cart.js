import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { AuthContext } from "../firebase/Auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/actions/cartActions";
import Loader from "./Loader";

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState("");
    const [cartError, setCartError] = useState(null);
    const { currentUser } = useContext(AuthContext);

    async function handlePurchase() {
        setIsLoading(true);

        const postData = { cart };

        try {
            const { data } = await axios.put(
                `http://localhost:3001/user/createOrder/${currentUser.uid}/`,
                postData
            );

            if (data && !data.success) {
                setCartError(data.errors);

                return;
            }

            setMessage("Order placed successfully.");
            setError(null);
            setIsError(false);
            dispatch(clearCart());
        } catch (error) {
            setError(
                error.response?.data?.error || "Error: Internal Server Error."
            );
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    function getCartTotal() {
        let total = 0;

        for (const currentFoodItem of cart) {
            total += currentFoodItem.quantity * currentFoodItem.price;
        }

        return Math.round((total + Number.EPSILON) * 100) / 100;
    }

    if (!cart || cart.length < 1) {
        return (
            <div className="container text-center mt-5">
                <h1>Cart Empty</h1>
                <img src="/empty-cart.png" alt="empty cart" height="128" />
                {message && message.length > 0 && (
                    <p className="text-success mt-5 fs-5">{message}</p>
                )}
            </div>
        );
    }
    return (
        <main className="container mt-5 text-center w-50">
            {isLoading && (
                <div className="loader-wrapper">
                    <div className="loaders">
                        <Loader />
                    </div>
                </div>
            )}
            <h1>Your Shopping Cart</h1>
            <div className="my-3 p-3 bg-body rounded shadow text-start">
                {cart.map((currentFoodItem) => {
                    return (
                        <CartItem
                            data={currentFoodItem}
                            key={currentFoodItem.id}
                        />
                    );
                })}
                <small className="d-block text-end mt-3">
                    <p>
                        Total:{" "}
                        <strong className="text-success">
                            ${getCartTotal()}
                        </strong>
                    </p>
                </small>

                <p className="text-end">
                    {currentUser ? (
                        <button
                            className="btn btn-primary btn-sm"
                            type="button"
                            onClick={handlePurchase}
                        >
                            Purchase
                        </button>
                    ) : (
                        <Link className="btn btn-danger btn-sm" to="/signin">
                            Login To Purchase
                        </Link>
                    )}
                </p>
                {isError && <p className="text-danger">{error}</p>}
                {cartError &&
                    cartError.length > 0 &&
                    cartError.map((currentError, index) => {
                        return (
                            <p className="text-danger m-0" key={index}>
                                {currentError}
                            </p>
                        );
                    })}
            </div>
        </main>
    );
}

export default Cart;
