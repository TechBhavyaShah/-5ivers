import { combineReducers } from "redux";
import { restaurantReducer } from "./restaurantReducer";

const reducers = combineReducers({
    restaurant: restaurantReducer,
});

export default reducers;
