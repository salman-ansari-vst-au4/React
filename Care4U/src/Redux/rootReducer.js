import { combineReducers } from "redux";
import order from './orderReducer';
const rootReducer = combineReducers({
    order: order,
});

export default rootReducer;