import { ActionTypes } from "../constants/action-types";

export const addToCart = (foodItem) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: { foodItem: foodItem },
    };
};

export const removeFromCart = (foodItemId) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: { foodItemId: foodItemId },
    };
};

export const increaseQuantity = (foodItemId) => {
    return {
        type: ActionTypes.INCREASE_QUANTITY,
        payload: { foodItemId: foodItemId },
    };
};

export const decreaseQuantity = (foodItemId) => {
    return {
        type: ActionTypes.DECREASE_QUANTITY,
        payload: { foodItemId: foodItemId },
    };
};

export const clearCart = () => {
    return {
        type: ActionTypes.CLEAR_CART,
        payload: null,
    };
};
