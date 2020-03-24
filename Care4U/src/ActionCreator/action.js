let Action = {};


Action.book = function (data) {
    return ({
        type: "addService", payload: data
    })
}

export default Action 