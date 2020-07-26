import React from 'react';
import Cart from './Component/cart';
import Item from './Component/item';
import Input from './Component/input'
import { connect } from "react-redux";
import './App.css';
class App extends React.Component {

  total() {
    let sum = this.props.cart.reduce((total, value) => {
      return total + value.price
    }, 0)
    return sum
  }

  // checkout() {
  //   this.setState({
  //     cart: []
  //   })
  // }


  render() {
    return (
      <div className="" >
        <h1 className="display-4 p-1 text-center jumbotron mb-1">Website ka maal saste may</h1>
        <Input />
        <h3 className="font-weight-light text-right mr-5">
          Total : {this.total()}
          <button
            className="btn btn-warning ml-5"
            onClick={() => {
              this.props.checkout({ type: "checkout"});
              alert("Successfully Checkout")
            }}>
            Checkout
        </button>
        </h3>

        <div className="row mr-5 ml-5">
          <Item />
          <Cart />
        </div>
        


      </div>
    )
  }
}

const take = (state) => {
  return {
    cart: state.cart.cart
  };
}

const change = (dispatch) => {
  return {
    checkout: dispatch
  };
}

export default connect(take, change)(App);
