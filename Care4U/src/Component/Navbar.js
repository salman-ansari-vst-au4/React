import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavApp extends React.Component {
  constructor() {
    super();
    this.state = {
      total: '',
    }
  }

  // componentDidMount = () => {
  //   if (this.props.order) {
  //     let total = this.props.order.reduce((sum, data) => { return sum + 1 })
  //     console.log('herreeeeeeeeeeee'.total)
  //     this.setState({
  //       total: total
  //     })
  //   }
  // }

  render() {
    return (

      <Navbar bg="light" expand="lg">
        <Link to='/'><Navbar.Brand href="#home"> <img src="https://images.vexels.com/media/users/3/142777/isolated/preview/84711206e52e0d4ff6c793cb476ea264-heartbeat-star-medical-logo-by-vexels.png" width="35px"></img> Care4U</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to='/homecare'><Nav.Link href="homecare">HomeCare</Nav.Link></Link>
            <Link to='/concierge'><Nav.Link href="#concierge">Concierge</Nav.Link></Link>
            <Link to='equipment'><Nav.Link href="#equipment">Equipment</Nav.Link></Link>
          </Nav>
          {/* <Form inline>
            <Button variant="outline-primary">Checkout : ₹{this.state.total}</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const take = (state) => {
  return {
    order: state.order.order
  };
}

export default connect(take)(NavApp);