import React from 'react';
import { connect } from "react-redux";

class Cart extends React.Component {
    render() {
        return (

            <div className="col-md text-center scroll">
                <h2 className="font-weight-light">Cart</h2>
                {this.props.cart.map((data, index) => {
                    return (
                        <div key={index} className="card-body bg-dark text-white rounded mx-auto w-75 mb-3">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">₹{data.price}</p>
                            <button
                                className="btn btn-danger"
                                onClick={() => this.props.removeFromCart({ type: "remove", payload: index })}
                            >
                                Remove
                            </button>
                        </div>

                    )

                })}
            </div>

        );
    }
}

const take = (state) => {
    return {
        cart: state.cart.cart
    };
}

const change = (dispatch) => {
    return {
        removeFromCart: dispatch
    };
}

export default connect(take, change)(Cart);
