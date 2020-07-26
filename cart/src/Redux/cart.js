

// import { createStore } from 'redux';

let initialState =
{
    items: [
        {
            name: "Iphone 11 Pro",
            price: 40000
        },
        {
            name: "Realme 3 Pro",
            price: 10000
        },
        {
            name: "One Plus 7 Pro",
            price: 25000
        },
        {
            name: "Nokia 2690",
            price: 1000
        },
        {
            name: "Iphone 5C",
            price: 5000
        },
        {
            name: "Samasung Galaxy S2 Plus",
            price: 8000
        },
        {
            name: "Nokia Lumia 720",
            price: 4000
        }
    ],
    cart: []
}

export default function cart_removeReducer(state = initialState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "cart":
            state.items.forEach((item, index) => {
                if (index === action.payload) {
                    stateCopy.cart.push(item)
                }

            })
            console.log("Cart",stateCopy)
            return stateCopy;
        case "remove":
            state.cart.forEach((item, index) => {
                if (index === action.payload) {
                    stateCopy.cart.splice(index, 1);
                }

            })
            console.log("Cart",stateCopy)
            return stateCopy;
        case "checkout":
            stateCopy.cart = [];
            console.log("Cart",stateCopy)
            return stateCopy;

        default:
            return stateCopy;
    }
}


// const store = createStore(appReducer);

// export default store