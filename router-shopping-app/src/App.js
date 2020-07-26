import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import User from './Component/User'
import Product from './Component/Product'
import Order from './Component/Order'

class App extends Component {
  state = {
    song: []
  }

  componentDidMount = async () => {
    let song = await fetch('http://localhost:8008/song/join')
    song = await song.json()
    console.log(song.table[0])
    this.setState({
      song: [...this.state.song, song.table[0]]
    })
  }

  total = () => {
    let sum = this.props.cart.reduce((total, value) => {
      return total + value.price
    }, 0)
    return sum
  }

  noProduct = () => {
    if (!this.props.cart.length) {
      return (
        <h1 className="text-muted text-center display-3 m-5">No Product Added To Cart</h1>
      )
    }
  }

  render() {
    return (
      <BrowserRouter>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/">
            <img className="img-fluid ml-1" width="40px" src="https://banner2.cleanpng.com/20180427/yge/kisspng-total-s-a-logo-oil-refinery-company-rift-vector-5ae2b6d3a09710.5754320315248073796578.jpg" alt="Card cap" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ml-2" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/users"><button className="btn nav-link" href="#">User</button></Link>
              </li>
              <li className="nav-item">
                <Link to="product"><button className="btn nav-link" href="#">Product</button></Link>
              </li>
              <li className="nav-item">
                <Link to="/order"><button className="btn nav-link" href="#">Order</button></Link>
              </li>

            </ul>
          </div>
        </nav>

        {/* HomePage */}
        <Route exact path="/">
          <div className="container my-3">
            <div className="row">
              <div className="col-md-5 col-xs-12 ">
                <h1 className="display-3 text-center"> Online Shopping App</h1>
                <p className="text-center">This is a React Website using routing for sample. <br />It has a User Section Product Section & You can Order the Products.</p>
              </div>
              <div className="col-md-6 col-xs-8">
                <img className="w-100" src="https://cdn.dribbble.com/users/1008875/screenshots/4532141/shopping.png" alt="Card cap" />
              </div>
            </div>
          </div>
          <h1>{this.state.song.map((data) => {
            return(
              data
            )
          })}</h1>
        </Route>

        {/* Users Page */}
        <Route path="/users">
          <h1 className="display-5 text-center">Users</h1>
          <table className="table table-hover my-5">
            <thead>
              <tr>
                <th scope="col">Index</th>
                <th scope="col">First</th>
                <th scope="col">Relation</th>
              </tr>
            </thead>
            <tbody>
              {this.props.user.map((data, index) => {
                return (<User
                  key={index}
                  name={data.name}
                  relation={data.relation}
                  index={index} />
                )
              })}
            </tbody>
          </table>
        </Route>

        {/* Product Page */}
        <Route path="/product">
          <h1 className="display-5 text-center">Product</h1>
          <div className="card-deck m-4">
            {this.props.product.map((data, index) => {
              return (<Product
                key={index}
                name={data.name}
                img={data.img}
                price={data.price}
                index={index} />
              )
            })}
          </div>
        </Route >

        {/* Order Page */}
        <Route path="/order" >
          <h1 className="text-center">Order</h1>
          <h5 className="font-weight-light text-right mr-5">
            Total : {this.total()}
          </h5>
          <div className="text-center">
            {this.props.cart.map((data, index) => {
              return (<Order
                key={index}
                name={data.name}
                img={data.img}
                price={data.price}
                index={index} />
              )
            })}
          </div>
          {this.noProduct()}
        </Route >


      </BrowserRouter>
    );
  }
}


const take = (state) => {
  return {
    user: state.user,
    product: state.product,
    cart: state.cart
  };
}


export default connect(take)(App);
