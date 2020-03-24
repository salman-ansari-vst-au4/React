import React from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Action from '../ActionCreator/action'
let book = Action.book;

class MyVerticallyCenteredModal extends React.Component {
  constructor() {
    super();
    this.state = {
      time: '',
      date: '',
      hour: '',
    }
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.category}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{this.props.show.name} ({this.props.show.time}) (₹{this.props.show.price}/hour)</h5>
          <Form>
            <Form.Row>
              <Col>
                <Form.Group controlId="formTime">
                  <Form.Label>Service Date</Form.Label>
                  <Form.Control type="date" min="2020-04-01" value={this.state.date} onChange={e => { this.setState({ date: e.target.value }) }} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formTime">
                  <Form.Label>Service Time (24hr)</Form.Label>
                  <Form.Control type="time" placeholder="09:00" value={this.state.time} onChange={e => { this.setState({ time: e.target.value }) }} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formTime">
                  <Form.Label>Hour of Service</Form.Label>
                  <Form.Control type="number" placeholder="1" min="1" max="24" value={this.state.hour} onChange={e => { this.setState({ hour: e.target.value }) }} />
                </Form.Group>
              </Col>
              <Col className='text-center'>
                <Form.Group controlId="formTime">
                  <Form.Label>Confirm Booking</Form.Label><br />
                  <Button variant='primary' onClick={e => {
                    e.preventDefault();
                    if (this.state.date && this.state.time && this.state.hour) {
                      this.props.book({
                        name: this.props.show.name,
                        date: this.state.date,
                        time: this.state.time,
                        hour: this.state.hour,
                        price: this.props.show.price,
                      })
                      this.setState({
                        date: '',
                        time: '',
                        hour: '',
                      })
                    }
                    else { alert("All input is required") }

                  }}>Book</Button>
                </Form.Group>
              </Col>
            </Form.Row>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
      </Modal >
    );
  }
}


const take = (state) => {
  return {
    submit: state.order.shop
  };
}

const change = (dispatch) => {
  return bindActionCreators({ book }, dispatch)
}

export default connect(take, change)(MyVerticallyCenteredModal);