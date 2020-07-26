import React from 'react';
import { connect } from "react-redux";
import Action from '../ActionCreator/action'
import { bindActionCreators } from 'redux'
let addToCart = Action.addToCart;

class Item extends React.Component {
    render() {
        return (
            <div className="col-md text-center scroll">
                <h2 className="font-weight-light">Items</h2>

                {this.props.items.map((data, index) => {
                    return (
                        <div key={index} className="card-body bg-dark text-white rounded mx-auto w-75 mb-3">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">₹{data.price}</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => this.props.addToCart(index)
                                }
                            >
                                Add Cart
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
        items: state.cart.items
    };
}

const change = (dispatch) => {

    return bindActionCreators({ addToCart }, dispatch)

    // return {
    //     addToCart: () => dispatch(addToCart())
    // }
}

export default connect(take, change)(Item);