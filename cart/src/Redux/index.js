import { combineReducers } from "redux";
import cart from './cart';
import name from './input'

const rootReducer = combineReducers({
    cart: cart,
    input: name
});

export default rootReducer