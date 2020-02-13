import { createStore } from 'redux';
import User from '../Data/user'
import Product from '../Data/product'
let initialState = {
    user: User,
    product: Product,
    cart: []
}
function appReducerFunction(state = initialState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state));
    console.log(stateCopy)
    switch (action.type) {
        case "cart":
            console.log("here",action)
            state.product.forEach((item, index) => {
                if (index === action.payload) {
                    stateCopy.cart.push(item)
                }

            })
            console.log(stateCopy)
            return stateCopy;
        case "remove":
            state.cart.forEach((item, index) => {
                if (index === action.payload) {
                    stateCopy.cart.splice(index, 1);
                }

            })
            return stateCopy;
        case "checkout":
            stateCopy.cart = [];
            return stateCopy;

        default:
            return stateCopy;
    }
}

const store = createStore(appReducerFunction);

export default store