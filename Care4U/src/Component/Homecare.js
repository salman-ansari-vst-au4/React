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
            <Card.Title>Nurse</Card.Title>
            <Card.Text>
              Our highly skilled nursing staff helps with post-surgical care, elderly care, cancer care for all age at affordable price
          </Card.Text>
            <Button variant="primary" onClick={() => setModalShow({ name: 'Nurse', time: '9am to 12pm', price: 350 })}>Book Now</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className='text-center'>
            <Card.Title>Physiotherapy</Card.Title>
            <Card.Text>
              Our comprehensive home-based physiotherapy helps you fight any respiratory and lung related issues and stay fit and healthy
          </Card.Text>
            <Button variant="primary" onClick={() => setModalShow({ name: 'Phsytherapy', time: '9am to 8pm', price: 250 })}>Book Now</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className='text-center'>
            <Card.Title>Cook</Card.Title>
            <Card.Text>
              Hire a housemaid to take care of all your daily household chores. She can take the responsibility of all household activities
          </Card.Text>
            <Button variant="primary" onClick={() => setModalShow({ name: 'Cook', time: '8am to 11pm', price: 120 })}>Book Now</Button>
          </Card.Body>
        </Card>
      </CardDeck>
      <MyVerticallyCenteredModal
        category='Homecare'
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}
