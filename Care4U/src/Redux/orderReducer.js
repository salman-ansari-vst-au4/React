let initialState = {
    order: []
}

export default function order(state = initialState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "addService":
            stateCopy.order = [...stateCopy.order, action.payload];
            return stateCopy;
        default:
            return stateCopy;
    }
}