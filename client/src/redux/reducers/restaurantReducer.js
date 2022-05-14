import { ActionTypes } from "../constants/action-types";
import jwtDecode from "jwt-decode";

const defaultRestaurant = {
    restaurant: { id: null, name: null, image: null, address: null },
};

const token = localStorage.getItem("accessToken") ?? null;
const decodedToken = token ? jwtDecode(token) : defaultRestaurant;

const initialState = {
    token: token,
    isAuthenticated: token ? true : false,
    id: decodedToken.restaurant?.id,
    name: decodedToken.restaurant?.name,
    image: decodedToken.restaurant?.image,
    address: decodedToken.restaurant?.address,
};

export const restaurantReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SIGN_IN_RESTAURANT:
            return {
                ...state,
                token: payload.restaurant.token,
                isAuthenticated: payload.restaurant.isAuthenticated,
                id: payload.restaurant.id,
                name: payload.restaurant.name,
                image: payload.restaurant.image,
                address: payload.restaurant.address,
            };

        default:
            return state;
    }
};
