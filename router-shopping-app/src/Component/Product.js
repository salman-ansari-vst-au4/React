import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from "react-redux";

class Product extends Component {
    render() {
        return (
            <BrowserRouter>
                <LinkContainer to={"/product/:" + this.props.name + "/:" + this.props.price}>
                    <div className="card">
                        <img className="card-img-top" src={this.props.img} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name} <small className="text-muted float-right py-1">₹{this.props.price}</small></h5>

                            <button className="btn btn-primary"
                                onClick={() => this.props.addToCart({ type: "cart", payload: this.props.index })
                                }>
                                Add To Cart
                            </button>
                        </div>
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
    addToCart: dispatch
};
}

export default connect(take, change)(Product);