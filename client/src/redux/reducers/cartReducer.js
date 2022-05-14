import { ActionTypes } from "../constants/action-types";

export const cartReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return [...state, { ...payload.foodItem }];

        case ActionTypes.REMOVE_FROM_CART:
            return state.filter(
                (currentFoodItem) => currentFoodItem.id !== payload.foodItemId
            );

        default:
            return state;
    }
};
