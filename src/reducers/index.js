import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import OrderReducer from "./orderReducer";
const reducers = combineReducers({
    cart:cartReducer,
    order:OrderReducer
});

export default reducers;