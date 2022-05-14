import { ActionTypes } from "../constants/action-types";

export const signInRestaurant = (restaurant) => {
    return {
        type: ActionTypes.SIGN_IN_RESTAURANT,
        payload: { restaurant: restaurant },
    };
};
