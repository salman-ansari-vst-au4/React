import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from "react-redux";

class Cart extends React.Component {

    render() {
        return (

            <BrowserRouter>
                <LinkContainer to={"/order/:" + this.props.index}>
                    <div className="card-body bg-dark text-white rounded mx-auto w-50 mb-3">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">₹{this.props.price}</p>
                        <button
                            className="btn btn-danger"
                            onClick={() => this.props.removeFromCart({ type: "remove", payload: this.props.index })}
                        >
                            Remove
                            </button>
                    </div>
                </LinkContainer>
            </BrowserRouter >
        );
    }
}

const take = (state) => {
}

const change = (dispatch) => {
    return {
        removeFromCart: dispatch
    };
}

export default connect(take, change)(Cart);
