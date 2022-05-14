import { combineReducers } from "redux";
import { restaurantReducer } from "./restaurantReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
    restaurant: restaurantReducer,
    cart: cartReducer,
});

export default reducers;
