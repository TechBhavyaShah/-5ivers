import { ActionTypes } from "../constants/action-types";

export const cartReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return [...state, { ...payload.foodItem }];

        case ActionTypes.REMOVE_FROM_CART:
            return state.filter(
                (currentFoodItem) => currentFoodItem.id !== payload.foodItemId
            );

        case ActionTypes.INCREASE_QUANTITY:
            return state.map((currentFoodItem) => {
                return currentFoodItem.id === payload.foodItemId
                    ? {
                          ...currentFoodItem,
                          quantity: currentFoodItem.quantity + 1,
                      }
                    : currentFoodItem;
            });

        case ActionTypes.DECREASE_QUANTITY:
            return state.map((currentFoodItem) => {
                return currentFoodItem.id === payload.foodItemId
                    ? {
                          ...currentFoodItem,
                          quantity: currentFoodItem.quantity - 1,
                      }
                    : currentFoodItem;
            });

        case ActionTypes.CLEAR_CART:
            return [];

        default:
            return state;
    }
};
