import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart() {
    const cart = useSelector((state) => state.cart);

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
            </div>
        );
    }
    return (
        <main className="container mt-5 text-center w-50">
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
            </div>
        </main>
    );
}

export default Cart;
