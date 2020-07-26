import axios from 'axios';
let Action = {};


Action.input = function input(index) {
    let todos = fetch("https://jsonplaceholder.typicode.com/todos");
    console.log("Todos", todos);
    return (dispatch) => {
        (todos.then(data => {
            // console.log("Then", data.json())
            data.json().then(res => {
                console.log(res)
                dispatch({
                    type: "input", payload: index, todo: res
                }
                )
            })
        })
        )
    }

}

Action.addToCart = function addCart(data) {
    return { type: "cart", payload: data }
}

export default Action 