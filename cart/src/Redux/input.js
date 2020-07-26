export default function inputReducer(state = {}, action) {
    let stateCopy = state;
    switch (action.type) {
        case "input":
            stateCopy.name = action.payload;
            stateCopy.todo = action.todo;
            console.log("Input",stateCopy)
            return stateCopy;

        default:
            return stateCopy;
    }
}
