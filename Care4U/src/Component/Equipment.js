import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from './MyModel'



export default function Routes() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <CardDeck>
        <Card>
          <Card.Body className='text-center'>
            <Card.Title>Oxygen Cylinder</Card.Title>
            <Card.Text>
              We offer a range of portable medical oxygen cylinders suited for immediate care or mobile oxygen therapy
        </Card.Text>
            <Button variant="primary" onClick={() => setModalShow({ name: 'Oxygen Cylinder', time: '8am to 9pm', price: 400 })}>Book Now</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className='text-center'>
            <Card.Title>Pacemaker</Card.Title>
            <Card.Text>
              We provide pacemaker service which is used to help your heart beat more regularly if you have an irregular heartbeat
        </Card.Text>
            <Button variant="primary" onClick={() => setModalShow({ name: 'Pacemaker', time: '9am to 6pm', price: 1200 })}>Book Now</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className='text-center'>
            <Card.Title>Wheel Chair</Card.Title>
            <Card.Text>
              A comfortable wheelchair with a assistance to help you in your home as well as traveling anywhere in city
        </Card.Text>
            <Button variant="primary" onClick={() => setModalShow({ name: 'Wheel Chair', time: '6am to 2am', price: 550 })}>Book Now</Button>
          </Card.Body>
        </Card>
      </CardDeck>
      <MyVerticallyCenteredModal
        category='Equipment'
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}