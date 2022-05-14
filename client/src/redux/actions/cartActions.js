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
